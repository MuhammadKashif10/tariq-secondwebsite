import type { Metadata } from "next";
import { AreaDirectory, PageHero } from "@/components/Blocks";
import { CtaBand, WhatsAppButton } from "@/components/Cta";
import { areas } from "@/data/areas";

export const metadata: Metadata = {
  title: "Areas We Cover Across Dubai",
  description:
    "Junk removal in Dubai Marina, Downtown, JVC, Palm Jumeirah, Deira, Al Quoz and more. Find access tips and local services for your community.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Areas", path: "/areas" }]}
        eyebrow="Areas"
        title="A tower in the Marina and a villa in Mirdif need different plans."
        lead={`Each of these ${areas.length} areas has its own rules for lifts, gates and parking. Choose yours to see what to expect.`}
      >
        <WhatsAppButton />
      </PageHero>
      <section className="py-14 md:py-20">
        <div className="wrap">
          <AreaDirectory />
          <p className="mt-12 text-lg text-muted">Not on the list? We cover the rest of Dubai as well, so just ask.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
