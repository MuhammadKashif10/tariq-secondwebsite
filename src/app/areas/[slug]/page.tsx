import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqList, JsonLd, PageHero, ServiceCard } from "@/components/Blocks";
import { CtaBand } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { LoadBuilder } from "@/components/LoadBuilder";
import { areas, getArea, zones } from "@/data/areas";
import { faqGroups } from "@/data/faqs";
import { areaPhotos, zonePhotos } from "@/data/images";
import { getService } from "@/data/services";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getArea((await params).slug);
  if (!area) return {};
  // Long area names drop the trailing "Dubai" to keep the title within search result limits.
  const title = area.name.length > 16 ? `Junk Removal ${area.name}` : `Junk Removal ${area.name}, Dubai`;
  const description =
    area.seoDescription ??
    `${area.intro} ${area.jobs[0]}. Send a WhatsApp photo for a fixed price.`.slice(0, 160);
  return pageMetadata({ title, description, path: `/areas/${area.slug}`, image: `/areas/${area.slug}/opengraph-image` });
}

export default async function AreaPage({ params }: Props) {
  const area = getArea((await params).slug);
  if (!area) notFound();

  const path = `/areas/${area.slug}`;
  const zone = zones.find((z) => z.id === area.zone);
  const areaServices = area.services.flatMap((slug) => getService(slug) ?? []);
  const nearby = area.nearby.flatMap((slug) => getArea(slug) ?? []);
  const faqs = [...area.faqs, faqGroups[0].faqs[0], faqGroups[3].faqs[0]];
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
        photo={areaPhotos[area.slug] ?? zonePhotos[area.zone]}
      />

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">On the ground</p>
            <h2 className="mt-4 text-3xl md:text-[2.75rem]">Homes and workplaces in {area.name}</h2>
            <p className="mt-4 text-lg leading-relaxed">{area.profile}</p>
            <p className="eyebrow mt-12">Local know-how</p>
            <h2 className="mt-4 text-3xl md:text-[2.75rem]">Getting in and out of {area.name}</h2>
            <p className="mt-4 text-lg leading-relaxed">{area.access}</p>
            <h2 className="mt-12 text-3xl md:text-4xl">Common jobs here</h2>
            <ul className="mt-5 space-y-3 text-lg font-medium">
              {area.jobs.map((job) => (
                <li key={job} className="flex items-center gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-signal text-ink">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  {job}
                </li>
              ))}
            </ul>
          </div>
          <LoadBuilder />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow">Good to know</p>
          <h2 className="mt-4 text-3xl md:text-[2.75rem]">Tips for {area.name}</h2>
          <ul className="mt-9 grid gap-5 md:grid-cols-2">
            {area.tips.map((tip) => (
              <li key={tip.title} className="rounded-3xl bg-sand p-7">
                <h3 className="text-xl">{tip.title}</h3>
                <p className="mt-2 text-muted">{tip.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap">
          <h2 className="text-3xl md:text-[2.75rem]">Popular in {area.name}</h2>
          <ul className="mt-9 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
            {areaServices.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.8fr]">
          <div>
            <h2 className="text-3xl md:text-[2.75rem]">{area.name} questions</h2>
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

      <CtaBand title={`Clearing something in ${area.name}?`} />
    </>
  );
}
