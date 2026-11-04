import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqList, JsonLd, PageHero, ServiceCard } from "@/components/Blocks";
import { CallButton, CtaBand, WhatsAppButton } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { areas } from "@/data/areas";
import { photos, servicePhotos } from "@/data/images";
import { getService, services } from "@/data/services";
import { serviceMessage } from "@/lib/contact";
import { faqSchema, serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.metaTitle, description: service.metaDescription, url: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const message = serviceMessage(service.name);
  const related = service.related.flatMap((slug) => getService(slug) ?? []);
  const localAreas = areas.filter((area) => area.services.includes(service.slug));
  const heroPhoto = servicePhotos[service.slug];
  // A second image for the body, different from the one in the hero.
  const bodyPhoto = heroPhoto === photos.moversRoom ? photos.moversInterior : photos.moversRoom;

  return (
    <>
      <JsonLd data={serviceSchema(service.name, service.metaDescription, path)} />
      <JsonLd data={faqSchema(service.faqs)} />

      <PageHero
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.name, path },
        ]}
        eyebrow={`${service.name} in Dubai`}
        title={service.headline}
        photo={heroPhoto}
      >
        <WhatsAppButton message={message} label="Get a price on WhatsApp" />
        <CallButton dark />
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div className="space-y-4 text-lg leading-relaxed">
            {service.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h2 className="pt-6 text-3xl md:text-4xl">What we commonly take</h2>
            <ul className="flex flex-wrap gap-2">
              {service.items.map((item) => (
                <li key={item} className="rounded-full bg-white px-4 py-2 text-[0.95rem] font-semibold shadow-soft">
                  {item}
                </li>
              ))}
            </ul>
            {localAreas.length > 0 && (
              <>
                <h2 className="pt-6 text-3xl md:text-4xl">Often booked in</h2>
                <ul className="flex flex-wrap gap-2">
                  {localAreas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas/${area.slug}`}
                        className="flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[0.95rem] font-semibold text-white transition-colors hover:bg-signal hover:text-ink"
                      >
                        <Icon name="pin" className="size-4" />
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <aside className="card self-start overflow-hidden lg:sticky lg:top-28">
            <div className="relative aspect-[16/10]">
              <Image src={bodyPhoto.src} alt={bodyPhoto.alt} fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover" />
            </div>
            <div className="p-7">
            <h2 className="text-2xl">Included in your price</h2>
            <ul className="mt-4 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Icon name="check" className="mt-0.5 size-5 shrink-0 text-signal-deep" />
                  {item}
                </li>
              ))}
            </ul>
            <WhatsAppButton message={message} label="Get my price" className="mt-6 w-full" />
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow">Good to know</p>
          <h2 className="mt-4 text-3xl md:text-[2.75rem]">Before we arrive</h2>
          <ul className="mt-9 grid gap-5 md:grid-cols-2">
            {service.tips.map((tip) => (
              <li key={tip.title} className="rounded-3xl bg-sand p-7">
                <h3 className="text-xl">{tip.title}</h3>
                <p className="mt-2 text-muted">{tip.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.8fr]">
          <h2 className="text-3xl md:text-[2.75rem]">{service.name} questions</h2>
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="wrap">
          <h2 className="text-3xl md:text-[2.75rem]">Related services</h2>
          <ul className="mt-9 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <ServiceCard service={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={`Book ${service.name.toLowerCase()} in Dubai`} message={message} />
    </>
  );
}
