import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { JsonLd } from "@/components/Blocks";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Motion } from "@/components/Motion";
import { WhatsAppFloat } from "@/components/MobileBar";
import { site } from "@/config/site";
import { businessSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-bricolage", display: "swap" });
const body = Manrope({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dubai Junk Removal Services: Fixed Price from a Photo",
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_AE",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  formatDetection: { telephone: false, email: false, address: false },
  category: "Junk removal",
  verification: {
    ...(site.googleSiteVerification ? { google: site.googleSiteVerification } : {}),
    ...(site.bingSiteVerification ? { other: { "msvalidate.01": site.bingSiteVerification } } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1424",
};

// Marks the page as script-enabled before first paint, so scroll reveals only
// hide content when JavaScript is there to show it again.
const jsFlag = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AE" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[300] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-bold">
          Skip to content
        </a>
        <JsonLd data={businessSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Motion />
      </body>
    </html>
  );
}
