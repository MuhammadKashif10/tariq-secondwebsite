import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles the details you share with us.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Privacy", path: "/privacy" }]} title="Privacy policy" lead="Last updated 4 November 2026" />
      <div className="wrap max-w-3xl space-y-4 py-12 text-lg leading-relaxed">
        <h2 className="pt-4 text-2xl">What we collect</h2>
        <p>When you contact us, we receive what you choose to send: your name, phone number, location, the photos of your items and your message. The website's contact form doesn't store anything. It only prepares a WhatsApp message for you to send.</p>
        <h2 className="pt-4 text-2xl">How we use it</h2>
        <p>We use your details to quote for your job, arrange it and carry it out, and to reply to you. We don't sell your information.</p>
        <h2 className="pt-4 text-2xl">Third parties</h2>
        <p>Messages you send through WhatsApp are handled by WhatsApp under its own privacy policy. Our website host processes basic technical data, such as IP addresses, to deliver the site.</p>
        <h2 className="pt-4 text-2xl">How long we keep it</h2>
        <p>We keep job details only for as long as we need them to deliver the service and meet our legal and accounting duties.</p>
        <h2 className="pt-4 text-2xl">Your choices</h2>
        <p>To see, correct or delete your details, email <a href={`mailto:${site.email}`} className="link">{site.email}</a>.</p>
      </div>
    </>
  );
}
