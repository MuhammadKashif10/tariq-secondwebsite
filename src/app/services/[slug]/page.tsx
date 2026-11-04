import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqList, JsonLd, PageHero, ServiceCard } from "@/components/Blocks";
import { CallButton, CtaBand, WhatsAppButton } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { areas } from "@/data/areas";
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
      >
        <WhatsAppButton message={message} label="Get a price on WhatsApp" />
        <CallButton dark />
      </PageHero>

      <section className="py-14 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-lg leading-relaxed">
            {service.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h2 className="pt-6 text-3xl">What we commonly take</h2>
            <ul className="flex flex-wrap gap-2">
              {service.items.map((item) => (
                <li key={item} className="rounded-md bg-sand-2 px-3 py-1.5 text-base font-semibold">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="self-start rounded-xl border-2 border-ink bg-paper p-6">
            <h2 className="text-2xl">Included in your price</h2>
            <ul className="mt-4 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Icon name="check" className="mt-0.5 size-5 shrink-0 text-signal-deep" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-sand-2 py-14 md:py-20">
        <div className="wrap">
          <h2 className="text-3xl md:text-4xl">Before we arrive</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {service.tips.map((tip) => (
              <li key={tip.title} className="border-t-4 border-ink pt-4">
                <h3 className="text-xl">{tip.title}</h3>
                <p className="mt-2 text-muted">{tip.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_2fr]">
          <h2 className="text-3xl md:text-4xl">{service.name} questions</h2>
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      {localAreas.length > 0 && (
        <section className="pb-14 md:pb-20">
          <div className="wrap">
            <h2 className="text-2xl">Often booked in</h2>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {localAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="link">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="bg-sand-2 py-14 md:py-20">
        <div className="wrap">
          <h2 className="text-3xl md:text-4xl">Related services</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
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
