import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqList, JsonLd, PageHero, ServiceCard } from "@/components/Blocks";
import { CtaBand } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { LoadBuilder } from "@/components/LoadBuilder";
import { areas, getArea, zones } from "@/data/areas";
import { faqGroups } from "@/data/faqs";
import { getService } from "@/data/services";
import { serviceMessage } from "@/lib/contact";
import { faqSchema, serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getArea((await params).slug);
  if (!area) return {};
  const title = `Junk Removal ${area.name}, Dubai`;
  const description = `Junk removal in ${area.name}: ${area.jobs[0].toLowerCase()}, ${area.jobs[1].toLowerCase()} and more. Send a WhatsApp photo for a fixed price.`;
  return {
    title,
    description,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: { title, description, url: `/areas/${area.slug}` },
  };
}

export default async function AreaPage({ params }: Props) {
  const area = getArea((await params).slug);
  if (!area) notFound();

  const path = `/areas/${area.slug}`;
  const zone = zones.find((z) => z.id === area.zone);
  const areaServices = area.services.flatMap((slug) => getService(slug) ?? []);
  const nearby = area.nearby.flatMap((slug) => getArea(slug) ?? []);
  const faqs = [area.faq, faqGroups[0].faqs[0], faqGroups[3].faqs[0]];
  const title = `Junk removal in ${area.name}`;

  return (
    <>
      <JsonLd data={serviceSchema(title, area.intro, path, `${area.name}, Dubai`)} />
      <JsonLd data={faqSchema(faqs)} />

      <PageHero
        crumbs={[
          { name: "Areas", path: "/areas" },
          { name: area.name, path },
        ]}
        eyebrow={zone?.name}
        title={title}
        lead={area.intro}
      />

      <section className="py-14 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-3xl md:text-4xl">Getting in and out of {area.name}</h2>
            <p className="mt-4 text-lg leading-relaxed">{area.access}</p>
            <h2 className="mt-10 text-3xl md:text-4xl">Common jobs here</h2>
            <ul className="mt-4 space-y-3 text-lg">
              {area.jobs.map((job) => (
                <li key={job} className="flex gap-2.5">
                  <Icon name="check" className="mt-1 size-5 shrink-0 text-signal-deep" />
                  {job}
                </li>
              ))}
            </ul>
          </div>
          <LoadBuilder area={area.name} />
        </div>
      </section>

      <section className="bg-sand-2 py-14 md:py-20">
        <div className="wrap">
          <h2 className="text-3xl md:text-4xl">Popular in {area.name}</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {areaServices.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-3xl md:text-4xl">{area.name} questions</h2>
            <h3 className="mt-8 text-lg">Nearby areas</h3>
            <ul className="mt-2 space-y-1">
              {nearby.map((item) => (
                <li key={item.slug}>
                  <Link href={`/areas/${item.slug}`} className="link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <FaqList faqs={faqs} />
        </div>
      </section>

      <CtaBand title={`Clearing something in ${area.name}?`} message={serviceMessage("junk removal", area.name)} />
    </>
  );
}
