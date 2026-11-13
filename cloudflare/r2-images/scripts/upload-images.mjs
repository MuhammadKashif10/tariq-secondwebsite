#!/usr/bin/env node
/**
 * Copies every file in <repo>/public/images to R2 under the same path
 * ("images/areas/al-safa.jpg" and so on), so URLs keep their paths.
 *
 *   node scripts/upload-images.mjs --local            # into the simulated bucket used by `wrangler dev`
 *   node scripts/upload-images.mjs --remote           # into the real bucket (needs Cloudflare credentials)
 *   node scripts/upload-images.mjs --remote --dry-run # list what would be uploaded
 *   node scripts/upload-images.mjs --remote --changed-only
 *        # skip files whose MD5 already matches the copy served at IMAGE_CDN_URL
 *
 * Credentials for --remote come from the environment, never from this file:
 *   CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID  (or a prior `wrangler login`)
 * Optional: R2_BUCKET (default "dubai-junk-images"), IMAGE_CDN_URL (the bucket's
 * public r2.dev URL, for --changed-only).
 * Token permission needed: Account > Workers R2 Storage > Edit.
 *
 * Nothing is ever deleted, locally or in R2.
 */
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const workerDir = path.resolve(here, "..");
const repoRoot = path.resolve(workerDir, "../..");
const publicDir = path.join(repoRoot, "public");

const args = new Set(process.argv.slice(2));
const mode = args.has("--remote") ? "remote" : args.has("--local") ? "local" : null;
if (!mode) {
  console.error("Choose --local or --remote.");
  process.exit(1);
}
const dryRun = args.has("--dry-run");
const changedOnly = args.has("--changed-only");
const bucket = process.env.R2_BUCKET || "dubai-junk-images";
const cdn = (process.env.IMAGE_CDN_URL || "").replace(/\/+$/, "");
const cacheControl = "public, max-age=604800, stale-while-revalidate=86400";
const types = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".avif": "image/avif", ".svg": "image/svg+xml", ".gif": "image/gif" };

if (changedOnly && !cdn) {
  console.error("--changed-only needs IMAGE_CDN_URL so existing copies can be compared.");
  process.exit(1);
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const files = walk(path.join(publicDir, "images"))
  .map((full) => {
    const key = path.relative(publicDir, full).split(path.sep).join("/");
    return { full, key, type: types[path.extname(full).toLowerCase()], size: statSync(full).size };
  })
  .filter((f) => f.type)
  .sort((a, b) => a.key.localeCompare(b.key));

const wranglerBin = path.join(workerDir, "node_modules", "wrangler", "bin", "wrangler.js");
const manifest = [];
let uploaded = 0;
let skipped = 0;

for (const file of files) {
  const md5 = createHash("md5").update(readFileSync(file.full)).digest("hex");
  manifest.push({ key: file.key, bytes: file.size, md5, contentType: file.type });

  if (changedOnly) {
    const head = await fetch(`${cdn}/${file.key}`, { method: "HEAD" }).catch(() => null);
    const etag = head?.ok ? (head.headers.get("etag") || "").replace(/"/g, "") : "";
    if (etag === md5) {
      skipped++;
      continue;
    }
  }

  if (dryRun) {
    console.log(`would upload ${file.key} (${file.size} bytes)`);
    continue;
  }

  execFileSync(
    process.execPath,
    [wranglerBin, "r2", "object", "put", `${bucket}/${file.key}`, "--file", file.full, "--content-type", file.type, "--cache-control", cacheControl, `--${mode}`],
    { cwd: workerDir, stdio: ["ignore", "ignore", "inherit"] },
  );
  uploaded++;
  process.stdout.write(`\r${uploaded} uploaded`);
}

writeFileSync(path.join(workerDir, "image-manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`\n${mode}: ${uploaded} uploaded, ${skipped} unchanged, ${files.length} total. Manifest: image-manifest.json`);
