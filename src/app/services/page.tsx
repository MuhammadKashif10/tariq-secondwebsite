import type { Metadata } from "next";
import { PageHero, ServiceCard } from "@/components/Blocks";
import { CtaBand, WhatsAppButton } from "@/components/Cta";
import { photos } from "@/data/images";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Junk Removal Services in Dubai",
  description:
    "All our Dubai junk removal services: furniture, sofas, mattresses, appliances, villa and office clearance, garden waste, renovation debris and e-waste.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }]}
        eyebrow="Services"
        photo={photos.moversStreet}
        title="Everything we'll carry out, load up and take away."
        lead="Not sure which one you need? You don't have to choose. Send a photo and we'll work it out."
      >
        <WhatsAppButton />
      </PageHero>
      <section className="py-16 md:py-24">
        <ul className="wrap grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
