import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckList, FaqSection, JsonLd, PageHero, SectionHead, ServiceGrid, TipCards } from "@/components/Blocks";
import { CallButton, CtaBand, WhatsAppButton } from "@/components/Cta";
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
      >
        <WhatsAppButton label="Get a price on WhatsApp" message={`Hi, I need junk removal service in ${area.name}, Dubai.`} />
        <CallButton dark />
      </PageHero>

      <section className="sec sec-light sheet">
        <div className="wrap split !items-start">
          <div className="rv">
            <p className="eyebrow">On the ground</p>
            <h2 className="h-md mt-[18px]">Homes and workplaces in {area.name}</h2>
            <p className="mt-5 text-[18px] leading-[1.7]">{area.profile}</p>
            <h2 className="h-md mt-14">Common jobs here</h2>
            <CheckList items={area.jobs} />
          </div>
          <div className="glass-ink rv" style={{ "--d": ".1s" } as React.CSSProperties}>
            <p className="eyebrow">Local know-how</p>
            <h2 className="h-md mt-[18px]">Getting in and out of {area.name}</h2>
            <p className="mt-5 text-[17px] leading-[1.7] text-soft">{area.access}</p>
          </div>
        </div>
      </section>

      <section className="sec sec-white sheet">
        <div className="wrap">
          <SectionHead eyebrow="Good to know" title={`Tips for ${area.name}`} />
          <div className="mt-12">
            <TipCards tips={area.tips} />
          </div>
        </div>
      </section>

      <section className="sec sec-dark2 sheet">
        <div className="wrap">
          <SectionHead eyebrow="Instant load check" title="Build your load." dark />
          <LoadBuilder />
        </div>
      </section>

      <section className="sec sec-light sheet">
        <div className="wrap">
          <SectionHead eyebrow="Services" title={`Popular in ${area.name}`} />
          <div className="mt-12">
            <ServiceGrid list={areaServices} />
          </div>
        </div>
      </section>

      <FaqSection title={`${area.name} questions`} faqs={faqs} className="sec sec-white sheet">
        <h3 className="h-sm">Nearby areas</h3>
        <ul className="item-chips mt-4">
          {nearby.map((item) => (
            <li key={item.slug}>
              <Link href={`/areas/${item.slug}`}>
                <Icon name="pin" className="size-4" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </FaqSection>

      <CtaBand title={`Clearing something in ${area.name}?`} />
    </>
  );
}
