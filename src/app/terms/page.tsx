import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you book ${site.name}, covering quotes, access, timing and items we cannot take.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Terms", path: "/terms" }]} title="Terms of service" lead="Last updated 4 November 2026" />
      <div className="wrap max-w-3xl space-y-4 py-12 text-lg leading-relaxed">
        <h2 className="pt-4 text-2xl">Quotes</h2>
        <p>Your quote is based on the photos and details you provide. If the items or access differ on the day, we'll agree any change with you before loading.</p>
        <h2 className="pt-4 text-2xl">Your responsibilities</h2>
        <p>You confirm that you own the items or have the authority to dispose of them. You're responsible for obtaining any building permits and lift bookings, and for removing valuables and personal documents beforehand.</p>
        <h2 className="pt-4 text-2xl">Items we can't take</h2>
        <p>We don't accept hazardous waste, including chemicals, bulk paint, gas cylinders, fuel, asbestos and medical waste.</p>
        <h2 className="pt-4 text-2xl">Timing</h2>
        <p>Time windows are estimates. Traffic and building rules can affect arrival, and we'll keep you updated. Same-day service depends on availability.</p>
        <h2 className="pt-4 text-2xl">Once items are collected</h2>
        <p>Collected items usually can't be recovered, so please check everything before the crew loads it.</p>
        <h2 className="pt-4 text-2xl">Contact</h2>
        <p>Questions about these terms can go to <a href={`mailto:${site.email}`} className="link">{site.email}</a>. These terms are governed by the laws applicable in the Emirate of Dubai.</p>
      </div>
    </>
  );
}
