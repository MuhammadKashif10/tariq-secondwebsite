import type { Metadata } from "next";
import { AreaCheck } from "@/components/AreaFinder";
import { AreaMap } from "@/components/AreaMap";
import { AreaDirectory, JsonLd, PageHero, SectionHead } from "@/components/Blocks";
import { CtaBand, WhatsAppButton } from "@/components/Cta";
import { areas } from "@/data/areas";
import { photos } from "@/data/images";
import { areaLinks, mapPins } from "@/data/map-pins";
import { itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Junk Removal Areas Across Dubai",
  description:
    "Junk removal areas across Dubai, from Dubai Marina and Downtown to JVC, Palm Jumeirah, Deira and Al Quoz. Local access tips for each community.",
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
        title="Junk removal areas across Dubai"
        lead={`A tower in the Marina and a villa in Mirdif need different plans. Each of these ${areas.length} areas has its own rules for lifts, gates and parking.`}
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
