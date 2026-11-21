/**
 * Generates unique area hero images in-repo (no external stock). Run: node scripts/generate-area-photos.mjs
 */
import { createHash } from "crypto";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images", "areas");
const areasPath = join(root, "src", "data", "areas.ts");
const creditsPath = join(root, "src", "data", "area-photo-credits.ts");
const siteUrl = "https://dubaijunkremovalservices.com";

const areasSrc = readFileSync(areasPath, "utf8");
const areas = [];
for (const m of areasSrc.matchAll(/slug: "([^"]+)",\s*\n\s*name: "([^"]+)",\s*\n\s*zone: "([^"]+)"/g)) {
  areas.push({ slug: m[1], name: m[2], zone: m[3] });
}

function hash(slug) {
  return createHash("sha256").update(slug).digest();
}

function hue(slug, offset = 0) {
  const b = hash(slug);
  return (b[offset] + b[offset + 1] * 0.4 + offset * 17) % 360;
}

function hsl(h, s, l) {
  return `hsl(${h} ${s}% ${l}%)`;
}

function buildingBlocks(slug, zone) {
  const b = hash(slug);
  const blocks = [];
  const count = zone === "centre" ? 7 : zone === "coast" ? 6 : zone === "industrial" ? 4 : zone === "old" ? 8 : 5;
  const baseY = zone === "coast" ? 520 : 560;
  let x = 80 + (b[0] % 40);
  for (let i = 0; i < count; i++) {
    const w = 60 + (b[i % 32] % 70);
    const h =
      zone === "centre"
        ? 180 + (b[(i + 3) % 32] % 220)
        : zone === "communities"
          ? 80 + (b[(i + 5) % 32] % 60)
          : zone === "industrial"
            ? 90 + (b[(i + 2) % 32] % 50)
            : 120 + (b[(i + 7) % 32] % 140);
  const y = baseY - h;
    const fill = hsl((hue(slug, i) + i * 11) % 360, 28 + (b[10] % 12), 42 + (b[11 + i] % 18));
    if (zone === "communities") {
      blocks.push(
        `<rect x="${x}" y="${y + 20}" width="${w}" height="${h - 20}" rx="4" fill="${fill}" opacity="0.92"/>`,
        `<polygon points="${x},${y + 20} ${x + w / 2},${y} ${x + w},${y + 20}" fill="${fill}" opacity="0.85"/>`,
      );
    } else {
      blocks.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${zone === "industrial" ? 2 : 6}" fill="${fill}" opacity="0.9"/>`);
      if (zone === "centre" || zone === "coast") {
        const win = 8;
        for (let wy = y + 16; wy < y + h - 12; wy += 22) {
          for (let wx = x + 10; wx < x + w - 14; wx += 16) {
            if ((wx + wy + i) % 3 !== 0) {
              blocks.push(`<rect x="${wx}" y="${wy}" width="${win}" height="${12}" rx="1" fill="rgba(255,255,255,0.35)"/>`);
            }
          }
        }
      }
    }
    x += w + 12 + (b[(i + 9) % 32] % 18);
  }
  return blocks.join("\n");
}

function svgForArea({ slug, zone }) {
  const h1 = hue(slug, 0);
  const h2 = (h1 + 40 + (hash(slug)[4] % 80)) % 360;
  const sky = `<linearGradient id="sky" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${hsl(h1, 45, 78)}"/><stop offset="100%" stop-color="${hsl(h2, 38, 62)}"/></linearGradient>`;
  const ground = hsl((h1 + 180) % 360, 18, 88);
  const water =
    zone === "coast"
      ? `<rect x="0" y="620" width="1600" height="280" fill="${hsl(h2, 55, 55)}" opacity="0.55"/><path d="M0 620 Q200 600 400 630 T800 610 T1200 640 T1600 620 L1600 900 L0 900 Z" fill="${hsl(h2, 50, 48)}" opacity="0.7"/>`
      : `<rect x="0" y="640" width="1600" height="260" fill="${ground}"/>`;
  const sun = `<circle cx="1320" cy="140" r="70" fill="rgba(255,240,200,0.85)"/>`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs>${sky}</defs>
  <rect width="1600" height="900" fill="url(#sky)"/>
  ${sun}
  ${water}
  ${buildingBlocks(slug, zone)}
</svg>`;
}

mkdirSync(outDir, { recursive: true });

const credits = [];

for (const area of areas) {
  const svg = svgForArea(area);
  const buf = await sharp(Buffer.from(svg)).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  let quality = 82;
  let out = buf;
  while (out.length > 500 * 1024 && quality > 50) {
    quality -= 6;
    out = await sharp(Buffer.from(svg)).jpeg({ quality, mozjpeg: true }).toBuffer();
  }
  const file = `${area.slug}.jpg`;
  writeFileSync(join(outDir, file), out);
  const kb = (out.length / 1024).toFixed(0);
  console.log(file, kb, "KB");

  credits.push({
    slug: area.slug,
    file: `areas/${file}`,
    sourceUrl: `${siteUrl}/scripts/generate-area-photos.mjs`,
    photographer: "Generated for Dubai Junk Removal Services",
    licence: "Proprietary site asset",
    showsActualArea: false,
  });
}

const creditsTs = `export type AreaPhotoCredit = {
  slug: string;
  file: string;
  sourceUrl: string;
  photographer: string;
  licence: string;
  showsActualArea: boolean;
};

/** Locally generated illustrations — not photographs of the named area. */
export const areaPhotoCredits: AreaPhotoCredit[] = ${JSON.stringify(credits, null, 2)};
`;

writeFileSync(creditsPath, creditsTs);
console.log("Wrote", credits.length, "images and", creditsPath);
