import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "src", "data", "areas.ts"), "utf8");
const zones = Object.fromEntries([...src.matchAll(/id: "([^"]+)", name: "([^"]+)"/g)].map((m) => [m[1], m[2]]));
const areas = [...src.matchAll(/slug: "([^"]+)",\s*\n\s*name: "([^"]+)",\s*\n\s*zone: "([^"]+)"/g)].map((m) => ({
  slug: m[1],
  name: m[2],
  zone: m[3],
}));

const brand = "Dubai Junk Removal";
for (const a of areas) {
  const title = a.name.length > 16 ? `Junk Removal ${a.name}` : `Junk Removal ${a.name}, Dubai`;
  const full = `${title} | ${brand}`;
  console.log(`${a.slug}\t${a.zone}\t${zones[a.zone]}\t${full.length}\t${full}`);
}
