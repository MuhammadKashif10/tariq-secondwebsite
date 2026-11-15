import type { Metadata } from "next";
import { AreaCheck, AreaMap } from "@/components/AreaFinder";
import { AreaDirectory, JsonLd, PageHero, SectionHead } from "@/components/Blocks";
import { CtaBand, WhatsAppButton } from "@/components/Cta";
import { areas } from "@/data/areas";
import { photos } from "@/data/images";
import { areaLinks, mapPins } from "@/data/map-pins";
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

      <section className="sec sec-dark2 sheet">
        <div className="wrap">
          <SectionHead eyebrow="Check your area" title="Is your area covered?" lead="Not on the list? We cover the rest of Dubai as well, so just ask." dark />
          <div className="rv">
            <AreaCheck areas={areaLinks} />
          </div>
          <AreaMap pins={mapPins} />
        </div>
      </section>

      <section className="sec sec-light sheet">
        <div className="wrap">
          <SectionHead eyebrow="All areas" title={`${areas.length} areas, grouped by type`} />
          <div className="mt-12">
            <AreaDirectory />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
