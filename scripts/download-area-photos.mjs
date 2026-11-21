/**
 * Downloads area hero images (Unsplash/Pexels). Run: node scripts/download-area-photos.mjs
 */
import { mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images", "areas");
const creditsPath = join(root, "src", "data", "area-photo-credits.ts");

/** @type {{ slug: string, url: string, sourceUrl: string, photographer: string, licence: string, showsActualArea: boolean, alt: string }[]} */
const PHOTOS = [
  {
    "slug": "dubai-marina",
    "url": "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/3184418/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "High-rise towers beside a marina basin"
  },
  {
    "slug": "jumeirah-beach-residence",
    "url": "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/325185/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Beachfront high-rise apartment blocks"
  },
  {
    "slug": "jumeirah-lakes-towers",
    "url": "https://images.pexels.com/photos/1115800/pexels-photo-1115800.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/1115800/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Glass towers beside a lake park"
  },
  {
    "slug": "palm-jumeirah",
    "url": "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/2044434/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Coastal high-rise skyline from the water"
  },
  {
    "slug": "jumeirah",
    "url": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/106399/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Modern white villa with landscaped garden"
  },
  {
    "slug": "umm-suqeim",
    "url": "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/1396122/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Family villa frontage with boundary wall"
  },
  {
    "slug": "downtown-dubai",
    "url": "https://images.pexels.com/photos/1519186/pexels-photo-1519186.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/1519186/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": true,
    "alt": "Downtown Dubai skyline with Burj Khalifa"
  },
  {
    "slug": "business-bay",
    "url": "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/1486861/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Cluster of city centre skyscrapers"
  },
  {
    "slug": "difc",
    "url": "https://images.pexels.com/photos/417395/pexels-photo-417395.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/417395/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Modern glass financial district tower"
  },
  {
    "slug": "al-barsha",
    "url": "https://images.pexels.com/photos/3288104/pexels-photo-3288104.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/3288104/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Villa street in a mixed suburb"
  },
  {
    "slug": "jumeirah-village-circle",
    "url": "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/1546168/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Mid-rise residential tower with parking"
  },
  {
    "slug": "jumeirah-village-triangle",
    "url": "https://images.pexels.com/photos/1396123/pexels-photo-1396123.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/1396123/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Townhouse row along a quiet street"
  },
  {
    "slug": "dubai-hills-estate",
    "url": "https://images.pexels.com/photos/1438833/pexels-photo-1438833.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/1438833/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Suburban villa with lawn and palms"
  },
  {
    "slug": "arabian-ranches",
    "url": "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/259588/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Detached villa with garden and pool"
  },
  {
    "slug": "al-furjan",
    "url": "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/186077/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "New townhouse street with wide pavements"
  },
  {
    "slug": "motor-city",
    "url": "https://images.pexels.com/photos/1387054/pexels-photo-1387054.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/1387054/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Low-rise apartment building with balconies"
  },
  {
    "slug": "dubai-sports-city",
    "url": "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/323705/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Mid-rise flats overlooking open land"
  },
  {
    "slug": "damac-hills",
    "url": "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/323780/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Villa neighbourhood with landscaped verges"
  },
  {
    "slug": "town-square",
    "url": "https://images.pexels.com/photos/417491/pexels-photo-417491.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/417491/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Compact townhouse community street"
  },
  {
    "slug": "mirdif",
    "url": "https://images.pexels.com/photos/259726/pexels-photo-259726.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/259726/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Single-storey villa behind a garden wall"
  },
  {
    "slug": "deira",
    "url": "https://images.pexels.com/photos/221902/pexels-photo-221902.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/221902/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Older low-rise buildings along a busy street"
  },
  {
    "slug": "bur-dubai",
    "url": "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/271743/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Older painted apartment blocks"
  },
  {
    "slug": "al-karama",
    "url": "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/439391/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Shops beneath residential floors"
  },
  {
    "slug": "al-qusais",
    "url": "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/534151/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Apartment blocks along a wide road"
  },
  {
    "slug": "al-quoz",
    "url": "https://images.pexels.com/photos/680407/pexels-photo-680407.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/680407/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Industrial unit with roller shutter doors"
  },
  {
    "slug": "dubai-investments-park",
    "url": "https://images.pexels.com/photos/793226/pexels-photo-793226.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/793226/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Warehouse shelving in a logistics unit"
  },
  {
    "slug": "jebel-ali",
    "url": "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/101808/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Shipping containers stacked at a port yard"
  },
  {
    "slug": "dubai-silicon-oasis",
    "url": "https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/1109543/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Open-plan office with glass partitions"
  },
  {
    "slug": "international-city",
    "url": "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/1181406/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Mid-rise apartment blocks in a grid"
  },
  {
    "slug": "al-warqa",
    "url": "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/1261728/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Detached villa on a residential street"
  },
  {
    "slug": "al-nahda",
    "url": "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/1457842/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Low-rise flats facing a neighbourhood road"
  },
  {
    "slug": "muhaisnah",
    "url": "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/1571460/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Concrete apartment building with stairs"
  },
  {
    "slug": "al-rashidiya",
    "url": "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/1643383/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Tree-lined boulevard with housing"
  },
  {
    "slug": "al-mizhar",
    "url": "https://images.pexels.com/photos/169677/pexels-photo-169677.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/169677/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Large villa with wide entrance"
  },
  {
    "slug": "nad-al-sheba",
    "url": "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/189349/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Spacious modern villa on a wide plot"
  },
  {
    "slug": "meydan",
    "url": "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/208736/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Skyline seen across open ground"
  },
  {
    "slug": "dubai-creek-harbour",
    "url": "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/276724/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Waterfront towers beside a creek"
  },
  {
    "slug": "dubai-festival-city",
    "url": "https://images.pexels.com/photos/2806738/pexels-photo-2806738.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/2806738/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Retail and residential blocks beside water"
  },
  {
    "slug": "al-garhoud",
    "url": "https://images.pexels.com/photos/290120/pexels-photo-290120.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/290120/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Dense urban housing under a cloudy sky"
  },
  {
    "slug": "al-satwa",
    "url": "https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/313691/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Narrow street with low-rise buildings"
  },
  {
    "slug": "al-safa",
    "url": "https://images.pexels.com/photos/3627129/pexels-photo-3627129.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/3627129/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Leafy villa neighbourhood with mature trees"
  },
  {
    "slug": "arjan",
    "url": "https://images.pexels.com/photos/3738830/pexels-photo-3738830.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/3738830/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "New apartment tower above podium retail"
  },
  {
    "slug": "dubai-south",
    "url": "https://images.pexels.com/photos/3965325/pexels-photo-3965325.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/3965325/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "New roads across open development land"
  },
  {
    "slug": "jumeirah-golf-estates",
    "url": "https://images.pexels.com/photos/4246213/pexels-photo-4246213.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/4246213/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Golf fairway beside villa rooftops"
  },
  {
    "slug": "emirates-living",
    "url": "https://images.pexels.com/photos/6438791/pexels-photo-6438791.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "sourceUrl": "https://www.pexels.com/photo/6438791/",
    "photographer": "Pexels contributor",
    "licence": "Pexels License",
    "showsActualArea": false,
    "alt": "Townhouses around a community lake"
  }
];

await mkdir(outDir, { recursive: true });

if (PHOTOS.length !== 45) {
  console.error("Expected 45 photos, got", PHOTOS.length);
  process.exit(1);
}

const slugs = new Set(PHOTOS.map((p) => p.slug));
if (slugs.size !== 45) {
  console.error("Duplicate slugs");
  process.exit(1);
}

for (const entry of PHOTOS) {
  let buf = null;
  for (const q of [75, 65, 55, 45]) {
    const u = entry.url.includes("unsplash.com")
      ? `${entry.url.split("?")[0]}?auto=format&fit=crop&w=1600&q=${q}`
      : entry.url.replace("w=1600", q < 65 ? "w=1400" : "w=1600");
    const res = await fetch(u);
    if (!res.ok) {
      console.error(`Failed ${entry.slug}: ${res.status}`);
      process.exit(1);
    }
    buf = Buffer.from(await res.arrayBuffer());
    if (buf.length <= 500 * 1024) break;
  }
  const out = join(outDir, `${entry.slug}.jpg`);
  await writeFile(out, buf);
  const kb = (buf.length / 1024).toFixed(0);
  console.log(`${entry.slug}.jpg ${kb} KB${buf.length > 500 * 1024 ? " (over 500KB)" : ""}`);
}

const creditsSource = `export type AreaPhotoCredit = {
  slug: string;
  file: string;
  sourceUrl: string;
  photographer: string;
  licence: string;
  showsActualArea: boolean;
};

export const areaPhotoCredits: AreaPhotoCredit[] = ${JSON.stringify(
  PHOTOS.map((p) => ({
    slug: p.slug,
    file: `areas/${p.slug}.jpg`,
    sourceUrl: p.sourceUrl,
    photographer: p.photographer,
    licence: p.licence,
    showsActualArea: p.showsActualArea,
  })),
  null,
  2,
)};

`;

await writeFile(creditsPath, creditsSource);
console.log("Wrote", creditsPath);
