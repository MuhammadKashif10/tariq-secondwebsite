# Site photos on Cloudflare R2

The site's photos live in a Cloudflare R2 bucket and are served from the
bucket's public `r2.dev` URL. Next.js still resizes them and converts them to
AVIF and WebP, exactly as before, so page speed and Core Web Vitals don't change.

Everything is switched by one environment variable, `NEXT_PUBLIC_IMAGE_CDN_URL`.
Unset, the site serves photos from `/public` as it always has.

## Current setup

- Bucket: `dubaijunkimages`
- Public URL: `https://pub-43cad28dc6cb46bf8df224205cbc5782.r2.dev`
- All 73 photos uploaded on 13 November 2026 and verified byte-identical.

## How it works

| Piece | What it does |
| --- | --- |
| R2 bucket `dubaijunkimages` (set by `R2_BUCKET`) | Stores every file from `public/images` under the same path, such as `images/areas/al-safa.jpg`. |
| Public `r2.dev` URL | Serves the bucket, for example `https://pub-<id>.r2.dev/images/areas/al-safa.jpg`. |
| `src/lib/image-url.ts` | Turns `/images/...` into `<NEXT_PUBLIC_IMAGE_CDN_URL>/images/...` when the variable is set. |
| `src/data/images.ts` | The single place every photo path comes from. All of them pass through `imageUrl()`. |
| `next.config.ts` | Allows next/image to resize files from `<CDN>/images/**` only. |
| `src/lib/og.tsx` | Builds share images from the local file, falling back to the bucket if the local copy is gone. |
| `cloudflare/r2-images/` | Upload and verify scripts, plus a Worker that stands in for `r2.dev` during local testing only. It is never deployed. |

What doesn't change: filenames, paths, alt text, the photo credits file, page
structured data, share image URLs (`/…/opengraph-image`), the sitemap,
canonical URLs and redirects.

### About r2.dev

Cloudflare describes `r2.dev` as rate-limited and intended for development.
Here it carries very little traffic, because visitors never load images from it
directly. Vercel fetches each original once per size, then serves its own
cached copy for 31 days (`minimumCacheTTL`).

If you outgrow it, you can switch to a custom domain such as
`images.dubaijunkremovalservices.com`. That requires adding the domain to
Cloudflare, and moving DNS from Hostinger means recreating the email records.
After that, only `NEXT_PUBLIC_IMAGE_CDN_URL` changes. No code changes.

## Environment variables

| Variable | Local `.env.local` | Vercel | Purpose |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_IMAGE_CDN_URL` | Optional, for testing | **Production + Preview** | The bucket's public URL, e.g. `https://pub-<id>.r2.dev`. Leave it unset to serve from `/public`. |
| `IMAGE_REDIRECT_LOCAL_TO_CDN` | No | Later, see phase 2 | `1` sends old `/images/*` URLs to the bucket with a 301. Only set this after the local copies are removed. |
| `IMAGE_CDN_ALLOW_LOCAL_IP` | Local testing only | **Never** | `1` lets next/image fetch from the local stand-in on `127.0.0.1`. |
| `CLOUDFLARE_ACCOUNT_ID` | For uploads | **Never** | Used by the upload script. |
| `CLOUDFLARE_API_TOKEN` | For uploads | **Never** | Token with *Account › Workers R2 Storage › Edit*. Or run `npx wrangler login` instead. |
| `R2_BUCKET` | Optional | No | Defaults to `dubai-junk-images`. |
| `IMAGE_CDN_URL` | For verify and `--changed-only` | No | Same value as `NEXT_PUBLIC_IMAGE_CDN_URL`. |

No secret ever goes to Vercel. The only value Vercel needs is the public bucket URL.
A template is in `.env.example`.

## Set up the bucket (once)

1. In the Cloudflare dashboard, go to **R2 › Create bucket** and name it `dubai-junk-images`.
2. Open the bucket, go to **Settings › Public access › R2.dev subdomain**, choose **Allow access**, and copy the URL (`https://pub-<id>.r2.dev`).
3. Under **R2 › Manage API tokens**, create an *Account API token* with **Workers R2 Storage: Edit**. Put the token and your account ID in `.env.local`, or run `npx wrangler login` from `cloudflare/r2-images`.

## Migrate the images

From `cloudflare/r2-images` (run `npm install` there once):

```bash
# 1. See what will be uploaded (nothing is sent)
node scripts/upload-images.mjs --remote --dry-run

# 2. Upload all photos to the bucket, under the same paths
npm run upload:remote

# 3. Confirm every photo is byte-identical, revalidates (304) and serves ranges (206)
IMAGE_CDN_URL=https://pub-<id>.r2.dev npm run verify
```

Later, after adding or replacing photos, upload only what changed:
`IMAGE_CDN_URL=https://pub-<id>.r2.dev node scripts/upload-images.mjs --remote --changed-only`.
The scripts never delete anything, either locally or in R2.

## Test locally before production

```bash
# In .env.local
NEXT_PUBLIC_IMAGE_CDN_URL=https://pub-<id>.r2.dev

npm run build && npm run start
```

Open several pages and check that every image loads. In DevTools, image
requests should be `/_next/image?url=https%3A%2F%2Fpub-…r2.dev%2Fimages%2F…`
and return `image/avif`.

To test without a real bucket, use the local stand-in:

```bash
cd cloudflare/r2-images
npm run upload:local      # fills a simulated bucket on this machine
npm run local-r2          # serves it on http://127.0.0.1:8787
# then build the site with:
NEXT_PUBLIC_IMAGE_CDN_URL=http://127.0.0.1:8787 IMAGE_CDN_ALLOW_LOCAL_IP=1 npm run build
```

## Go live

1. In Vercel, under **Settings › Environment Variables**, add `NEXT_PUBLIC_IMAGE_CDN_URL` = `https://pub-<id>.r2.dev` for Production and Preview.
2. Redeploy. The variable is built into the page code, so it only takes effect on a new build.
3. Check the live site: images load, and `/_next/image` URLs reference the `r2.dev` URL.
4. Keep `public/images` in the repo. Old `/_next/image?url=%2Fimages%2F…` URLs that Google has already indexed keep working while the local files exist.

## Phase 2: retire the local copies (optional, weeks later)

Only after production has run cleanly for a few weeks and Google has recrawled
the pages:

1. Set `IMAGE_REDIRECT_LOCAL_TO_CDN=1` on Vercel. Direct `/images/*` URLs then 301 to the bucket.
2. Remove `public/images` in a separate commit and redeploy. Share images still build, because `og.tsx` falls back to the bucket.

## Rollback

- **Instant:** delete `NEXT_PUBLIC_IMAGE_CDN_URL` in Vercel and redeploy. Photos are served from `/public` again, with identical URLs to before the migration. This works as long as phase 2 hasn't removed the local files.
- **After phase 2:** restore `public/images` from git history, unset both variables, and redeploy.

## Verified locally

These were checked against the local stand-in, using the real upload and verify scripts:

- All 73 photos uploaded under the same paths, and are byte-identical to the originals.
- 304 revalidation and 206 byte ranges work. The stand-in refuses paths outside `images/` and anything other than GET or HEAD.
- With the variable set: all 397 image tags on the 73 pages load through the bucket, and all 94 resized variants are served as AVIF. There are no broken images or console errors. The SEO audit (titles, canonicals, share images, structured data, internal links) is unchanged.
- A share image built while its local photo was hidden came out byte-identical, which proves the bucket fallback.
- With the variable unset, the image URLs are identical to the live production site.
