import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";
import { imageCdnUrl, imagePath } from "@/lib/image-url";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Photo bytes for a share image. Reads the local copy in /public when it
 * exists, and falls back to the Cloudflare image origin once local copies
 * have been removed.
 */
async function photoBytes(photo: string): Promise<Buffer> {
  const local = path.join(process.cwd(), "public", imagePath(photo));
  try {
    return await readFile(local);
  } catch {
    const url = photo.startsWith("http") ? photo : imageCdnUrl ? `${imageCdnUrl}${photo}` : "";
    if (!url) throw new Error(`Share image photo not found locally and no image CDN is set: ${photo}`);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Share image photo fetch failed (${response.status}): ${url}`);
    return Buffer.from(await response.arrayBuffer());
  }
}

/** Branded share image: the page's photo, its title, and how to get in touch. */
export async function ogCard({ eyebrow, title, photo }: { eyebrow: string; title: string; photo: string }) {
  const file = await photoBytes(photo);
  const src = `data:image/jpeg;base64,${file.toString("base64")}`;
  const size = title.length > 60 ? 54 : title.length > 40 ? 62 : 72;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#0a1a2f" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={1200} height={630} style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630, objectFit: "cover" }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            background: "linear-gradient(90deg, rgba(10,26,47,0.97) 0%, rgba(10,26,47,0.88) 55%, rgba(10,26,47,0.35) 100%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", padding: "60px 72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ display: "flex", width: 54, height: 54, borderRadius: 14, background: "#f5b13d" }} />
            <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#ffffff" }}>{site.name}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
            <div style={{ display: "flex", fontSize: 26, fontWeight: 700, color: "#f5b13d", letterSpacing: 3, textTransform: "uppercase" }}>{eyebrow}</div>
            <div style={{ display: "flex", marginTop: 18, fontSize: size, fontWeight: 700, lineHeight: 1.08, color: "#ffffff" }}>{title}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 28, color: "#c6d0dc" }}>
            <div style={{ display: "flex", padding: "12px 26px", borderRadius: 999, background: "#25d366", color: "#0a1a2f", fontWeight: 700 }}>
              WhatsApp {site.phoneDisplay}
            </div>
            <div style={{ display: "flex" }}>{site.url.replace("https://", "")}</div>
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
