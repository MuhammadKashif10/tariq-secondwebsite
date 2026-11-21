import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const areasPath = join(root, "src", "data", "areas.ts");
const imagesPath = join(root, "src", "data", "images.ts");

const altByZone = {
  coast: "Stylised illustration of coastal high-rise towers",
  centre: "Stylised illustration of city-centre skyscrapers",
  communities: "Stylised illustration of villas and townhouses",
  old: "Stylised illustration of older low-rise apartment blocks",
  industrial: "Stylised illustration of warehouses and commercial units",
};

const areasSrc = readFileSync(areasPath, "utf8");
const areas = [];
for (const m of areasSrc.matchAll(/slug: "([^"]+)",\s*\n\s*name: "([^"]+)",\s*\n\s*zone: "([^"]+)"/g)) {
  areas.push({ slug: m[1], zone: m[3] });
}

const lines = areas.map((a) => `  "${a.slug}": areaPhoto("${a.slug}", ${JSON.stringify(altByZone[a.zone])}),`);

const template = readFileSync(imagesPath, "utf8");
const start = template.indexOf("export const areaPhotos:");
const postStart = template.indexOf("export const postPhotos:");
const before = template.slice(0, start);
const head = template.slice(start, template.indexOf("{", start) + 1);
const after = postStart >= 0 ? template.slice(postStart) : template.slice(template.indexOf("};\n", start));
writeFileSync(imagesPath, `${before}${head}\n${lines.join("\n")}\n${after}`);
console.log("Updated area photo alt text in images.ts");
