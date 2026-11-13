#!/usr/bin/env node
/**
 * Checks that every photo the site uses is served correctly by the image origin.
 *
 *   IMAGE_CDN_URL=https://pub-<id>.r2.dev node scripts/verify-images.mjs
 *   IMAGE_CDN_URL=http://localhost:8787 VERIFY_ACCESS_RULES=1 node scripts/verify-images.mjs   (local stand-in)
 *
 * For each file in public/images it confirms: 200 response, image content type,
 * identical bytes (MD5 against the ETag), 304 on revalidation, and 206 for a
 * byte range. With VERIFY_ACCESS_RULES=1 it also checks the local stand-in
 * refuses paths outside images/ and non-GET methods.
 * Exits non-zero on any failure.
 */
import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const publicDir = path.join(repoRoot, "public");
const cdn = (process.env.IMAGE_CDN_URL || process.argv[2] || "").replace(/\/+$/, "");
if (!cdn) {
  console.error("Set IMAGE_CDN_URL (or pass the base URL as an argument).");
  process.exit(1);
}

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
const files = walk(path.join(publicDir, "images")).filter((f) => /\.(jpe?g|png|webp|avif|svg|gif)$/i.test(f));

const failures = [];
let checked = 0;
for (const full of files) {
  const key = path.relative(publicDir, full).split(path.sep).join("/");
  const url = `${cdn}/${key}`;
  const local = readFileSync(full);
  const md5 = createHash("md5").update(local).digest("hex");
  try {
    const res = await fetch(url);
    const body = Buffer.from(await res.arrayBuffer());
    const etag = res.headers.get("etag");
    if (res.status !== 200) failures.push(`${key}: status ${res.status}`);
    else if (!(res.headers.get("content-type") || "").startsWith("image/")) failures.push(`${key}: content-type ${res.headers.get("content-type")}`);
    else if (createHash("md5").update(body).digest("hex") !== md5) failures.push(`${key}: bytes differ from public/${key}`);
    else {
      const cond = await fetch(url, { headers: { "if-none-match": etag } });
      if (cond.status !== 304) failures.push(`${key}: revalidation returned ${cond.status}, expected 304`);
      const range = await fetch(url, { headers: { range: "bytes=0-99" } });
      const part = Buffer.from(await range.arrayBuffer());
      if (range.status !== 206 || part.length !== 100) failures.push(`${key}: range returned ${range.status} with ${part.length} bytes`);
    }
  } catch (error) {
    failures.push(`${key}: ${error.message}`);
  }
  checked++;
}

if (process.env.VERIFY_ACCESS_RULES === "1") {
for (const [probe, expected] of [["/", 404], ["/secret.txt", 404], ["/images/../package.json", 404], ["/images/does-not-exist.jpg", 404]]) {
  const res = await fetch(`${cdn}${probe}`);
  if (res.status !== expected) failures.push(`${probe}: status ${res.status}, expected ${expected}`);
}
const post = await fetch(`${cdn}/images/x.jpg`, { method: "POST" });
if (post.status !== 405) failures.push(`POST: status ${post.status}, expected 405`);
}

console.log(`${checked} images checked against ${cdn}`);
if (failures.length) {
  console.log(`${failures.length} problem(s):\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
console.log("All images match their local copies. Revalidation and byte ranges OK.");
