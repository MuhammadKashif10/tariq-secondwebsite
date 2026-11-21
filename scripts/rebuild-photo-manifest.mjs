import { readFileSync, writeFileSync } from "fs";

const areasSrc = readFileSync(new URL("../src/data/areas.ts", import.meta.url), "utf8");
const areas = [...areasSrc.matchAll(/slug: "([^"]+)"/g)].map((m) => ({ slug: m[1] }));
const ids = JSON.parse(readFileSync(new URL("./pexels-ids.json", import.meta.url), "utf8"));
if (ids.length < areas.length) throw new Error("Not enough pexels ids");

const alts = {
  "dubai-marina": "High-rise towers beside a marina basin",
  "jumeirah-beach-residence": "Beachfront high-rise apartment blocks",
  "jumeirah-lakes-towers": "Glass towers beside a lake park",
  "palm-jumeirah": "Coastal high-rise skyline from the water",
  "jumeirah": "Modern white villa with landscaped garden",
  "umm-suqeim": "Family villa frontage with boundary wall",
  "downtown-dubai": "Downtown Dubai skyline with Burj Khalifa",
  "business-bay": "Cluster of city centre skyscrapers",
  "difc": "Modern glass financial district tower",
  "al-barsha": "Villa street in a mixed suburb",
  "jumeirah-village-circle": "Mid-rise residential tower with parking",
  "jumeirah-village-triangle": "Townhouse row along a quiet street",
  "dubai-hills-estate": "Suburban villa with lawn and palms",
  "arabian-ranches": "Detached villa with garden and pool",
  "al-furjan": "New townhouse street with wide pavements",
  "motor-city": "Low-rise apartment building with balconies",
  "dubai-sports-city": "Mid-rise flats overlooking open land",
  "damac-hills": "Villa neighbourhood with landscaped verges",
  "town-square": "Compact townhouse community street",
  "mirdif": "Single-storey villa behind a garden wall",
  "deira": "Older low-rise buildings along a busy street",
  "bur-dubai": "Older painted apartment blocks",
  "al-karama": "Shops beneath residential floors",
  "al-qusais": "Apartment blocks along a wide road",
  "al-quoz": "Industrial unit with roller shutter doors",
  "dubai-investments-park": "Warehouse shelving in a logistics unit",
  "jebel-ali": "Shipping containers stacked at a port yard",
  "dubai-silicon-oasis": "Open-plan office with glass partitions",
  "international-city": "Mid-rise apartment blocks in a grid",
  "al-warqa": "Detached villa on a residential street",
  "al-nahda": "Low-rise flats facing a neighbourhood road",
  "muhaisnah": "Concrete apartment building with stairs",
  "al-rashidiya": "Tree-lined boulevard with housing",
  "al-mizhar": "Large villa with wide entrance",
  "nad-al-sheba": "Spacious modern villa on a wide plot",
  "meydan": "Skyline seen across open ground",
  "dubai-creek-harbour": "Waterfront towers beside a creek",
  "dubai-festival-city": "Retail and residential blocks beside water",
  "al-garhoud": "Dense urban housing under a cloudy sky",
  "al-satwa": "Narrow street with low-rise buildings",
  "al-safa": "Leafy villa neighbourhood with mature trees",
  "arjan": "New apartment tower above podium retail",
  "dubai-south": "New roads across open development land",
  "jumeirah-golf-estates": "Golf fairway beside villa rooftops",
  "emirates-living": "Townhouses around a community lake",
};

const actual = new Set();

const PHOTOS = areas.map((area, i) => {
  const id = ids[i];
  return {
    slug: area.slug,
    url: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    sourceUrl: `https://www.pexels.com/photo/${id}/`,
    photographer: "Pexels contributor",
    licence: "Pexels License",
    showsActualArea: actual.has(area.slug),
    alt: alts[area.slug] ?? `Residential buildings typical of ${area.name}`,
  };
});

let script = readFileSync(new URL("./download-area-photos.mjs", import.meta.url), "utf8");
const start = script.indexOf("const PHOTOS = [");
const end = script.indexOf("];\n\nawait mkdir");
if (start < 0 || end < 0) throw new Error("PHOTOS block not found");
script = `${script.slice(0, start)}const PHOTOS = ${JSON.stringify(PHOTOS, null, 2)};${script.slice(end + 2)}`;
writeFileSync(new URL("./download-area-photos.mjs", import.meta.url), script);
console.log("Manifest rebuilt for", PHOTOS.length, "areas");
