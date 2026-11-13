/**
 * Where site photos are served from.
 *
 * With NEXT_PUBLIC_IMAGE_CDN_URL unset, photos load from /public as before.
 * With it set (for example the Cloudflare Worker that serves the R2 bucket),
 * every "/images/..." path is served from that origin instead, keeping the
 * same path and filename. next/image still resizes and converts the files.
 */
export const imageCdnUrl = (process.env.NEXT_PUBLIC_IMAGE_CDN_URL ?? "").trim().replace(/\/+$/, "");

export function imageUrl(path: string): string {
  if (!imageCdnUrl || !path.startsWith("/images/")) return path;
  return `${imageCdnUrl}${path}`;
}

/** The "/images/..." path for a photo, whether its src is local or on the CDN. */
export function imagePath(src: string): string {
  return src.startsWith("/") ? src : new URL(src).pathname;
}
