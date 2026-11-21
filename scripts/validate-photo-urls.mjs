import { readFileSync } from "fs";

const src = readFileSync(new URL("./download-area-photos.mjs", import.meta.url), "utf8");
const start = src.indexOf("const PHOTOS = [");
const end = src.indexOf("];\n\nawait mkdir");
const PHOTOS = eval(src.slice(start + "const PHOTOS = ".length, end + 1));

let bad = 0;
for (const p of PHOTOS) {
  const r = await fetch(p.url.replace("w=1600", "w=80").replace("w=1500", "w=80"));
  if (!r.ok) {
    console.log(p.slug, r.status, p.url.slice(0, 60));
    bad++;
  }
}
console.log(bad ? `${bad} failed` : `all ${PHOTOS.length} ok`);
