import type { Metadata } from "next";
import { AreaDirectory, JsonLd, PageHero } from "@/components/Blocks";
import { CtaBand, WhatsAppButton } from "@/components/Cta";
import { areas } from "@/data/areas";
import { photos } from "@/data/images";
import { itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Areas We Cover Across Dubai",
  description:
    "Junk removal in Dubai Marina, Downtown, JVC, Palm Jumeirah, Deira, Al Quoz and more. Find access tips and local services for your community.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <>
      <JsonLd data={itemListSchema("Areas we cover in Dubai", areas.map((a) => ({ name: a.name, path: `/areas/${a.slug}` })))} />
      <PageHero
        crumbs={[{ name: "Areas", path: "/areas" }]}
        eyebrow="Areas"
        photo={photos.marina}
        title="A tower in the Marina and a villa in Mirdif need different plans."
        lead={`Each of these ${areas.length} areas has its own rules for lifts, gates and parking. Choose yours to see what to expect.`}
      >
        <WhatsAppButton />
      </PageHero>
      <section className="py-16 md:py-24">
        <div className="wrap">
          <AreaDirectory />
          <p className="mt-12 text-lg text-muted">Not on the list? We cover the rest of Dubai as well, so just ask.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
