import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { JsonLd } from "@/components/Blocks";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBar } from "@/components/MobileBar";
import { site } from "@/config/site";
import { businessSchema } from "@/lib/schema";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });

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
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#10211f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AE" className={`${bricolage.variable} ${instrument.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-paper focus:p-3">
          Skip to content
        </a>
        <JsonLd data={businessSchema()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
