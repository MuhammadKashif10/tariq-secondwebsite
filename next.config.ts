import type { NextConfig } from "next";
import { launchWarnings } from "./src/config/site";

for (const warning of launchWarnings()) {
  console.warn(`[launch check] ${warning}`);
}

// Cloudflare image origin (see docs/cloudflare-r2-images.md). Empty means photos
// load from /public exactly as before.
const imageCdn = (process.env.NEXT_PUBLIC_IMAGE_CDN_URL ?? "").trim().replace(/\/+$/, "");
// Only after the local copies are removed: send old /images/* URLs to the CDN.
const redirectImagesToCdn = imageCdn !== "" && process.env.IMAGE_REDIRECT_LOCAL_TO_CDN === "1";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [50, 70],
    deviceSizes: [640, 828, 1080, 1440, 1920],
    minimumCacheTTL: 2678400,
    // Only the site's own photo folder on the CDN may be resized, nothing else.
    remotePatterns: imageCdn ? [new URL(`${imageCdn}/images/**`)] : [],
    // Local testing against a Worker on localhost only. Never set in production.
    dangerouslyAllowLocalIP: process.env.IMAGE_CDN_ALLOW_LOCAL_IP === "1",
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dubaijunkremovalservices.com" }],
        destination: "https://dubaijunkremovalservices.com/:path*",
        permanent: true,
      },
      ...(redirectImagesToCdn
        ? [{ source: "/images/:path*", destination: `${imageCdn}/images/:path*`, statusCode: 301 as const }]
        : []),
    ];
  },
};

export default nextConfig;
