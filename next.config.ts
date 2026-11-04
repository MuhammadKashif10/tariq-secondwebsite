import type { NextConfig } from "next";
import { launchWarnings } from "./src/config/site";

for (const warning of launchWarnings()) {
  console.warn(`[launch check] ${warning}`);
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
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
    ];
  },
};

export default nextConfig;
