import type { Metadata } from "next";
import { JsonLd, PageHero } from "@/components/Blocks";
import { CtaBand, WhatsAppButton } from "@/components/Cta";
import { ServiceFilterGrid } from "@/components/ServiceRail";
import { services } from "@/data/services";
import { itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { toCards } from "@/lib/service-card";

export const metadata: Metadata = pageMetadata({
  title: "Junk Removal Services in Dubai",
  description:
    "All our Dubai junk removal services: furniture, sofas, mattresses, appliances, villa and office clearance, garden waste, renovation debris and e-waste.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={itemListSchema("Junk removal services in Dubai", services.map((s) => ({ name: s.name, path: `/services/${s.slug}` })))} />
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }]}
        eyebrow="Services"
        title="List of junk removal services in Dubai"
        lead="Everything we'll carry out, load up and take away. Furniture, appliances, clearances, garden waste and mixed loads."
        aside={
          <div className="glass">
            <p className="eyebrow text-amb">Not sure which one?</p>
            <h2 className="h-md mt-3.5">You don't have to choose.</h2>
            <p className="mt-3 text-soft">Send a photo and we'll work it out.</p>
            <div className="mt-6">
              <WhatsAppButton />
            </div>
          </div>
        }
      />
      <section className="sec sec-light sheet">
        <div className="wrap">
          <ServiceFilterGrid list={toCards(services)} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
