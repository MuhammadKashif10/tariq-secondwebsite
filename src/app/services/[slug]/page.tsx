import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostCard, toSummary } from "@/components/blog/PostCard";
import { CheckList, FaqSection, JsonLd, PageHero, SectionHead, ServiceGrid, TipCards } from "@/components/Blocks";
import { CallButton, CtaBand, WhatsAppButton } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { areas } from "@/data/areas";
import { photos, serviceHeroAlt, servicePhotos } from "@/data/images";
import { serviceGroups } from "@/data/service-groups";
import { getService, serviceH1, services } from "@/data/services";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { sortedPosts } from "@/lib/post";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMetadata({ title: service.metaTitle, absolute: true, description: service.metaDescription, path: `/services/${service.slug}`, image: `/services/${service.slug}/opengraph-image` });
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const related = service.related.flatMap((slug) => getService(slug) ?? []);
  const localAreas = areas.filter((area) => area.services.includes(service.slug));
  const guides = sortedPosts().filter((post) => post.relatedService === service.slug);
  const heroPhoto = servicePhotos[service.slug];
  const group = serviceGroups.find((item) => (item.slugs as readonly string[]).includes(service.slug));
  // A second image for the body, different from the one in the hero.
  const bodyPhoto = heroPhoto === photos.moversRoom ? photos.moversInterior : photos.moversRoom;
  const bodyAlt =
    bodyPhoto === photos.moversInterior
      ? "Mover carrying a sofa past packed boxes during a collection in Dubai"
      : "Two movers lifting a sofa in an empty room during a Dubai collection";

  return (
    <>
      <JsonLd data={serviceSchema(service.name, service.metaDescription, path)} />
      <JsonLd data={faqSchema(service.faqs)} />

      <PageHero
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.name, path },
        ]}
        eyebrow={group?.label ?? "Service"}
        title={serviceH1(service.slug, service.name)}
        lead={`${service.headline} ${service.short}`}
        photo={{ ...heroPhoto, alt: serviceHeroAlt[service.slug] ?? heroPhoto.alt }}
      >
        <WhatsAppButton label="Get a price on WhatsApp" />
        <CallButton dark />
      </PageHero>

      <section className="sec sec-light sheet">
        <div className="wrap dsplit grid gap-9 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rv">
            <p className="eyebrow">{service.name}</p>
            <div className="mt-6 space-y-4 text-[18px] leading-[1.7]">
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                What changes the price is covered on our{" "}
                <Link href="/pricing" className="link">
                  junk removal prices
                </Link>{" "}
                page. Send a photo for a fixed figure on this job.
              </p>
            </div>
            <h2 className="h-md mt-14">What we commonly take</h2>
            <ul className="item-chips mt-6">
              {service.items.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {localAreas.length > 0 && (
              <>
                <h2 className="h-md mt-14">Often booked in</h2>
                <ul className="item-chips mt-6">
                  {localAreas.map((area) => (
                    <li key={area.slug}>
                      <Link href={`/areas/${area.slug}`}>
                        <Icon name="pin" className="size-4" />
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <aside className="glass-ink rv self-start lg:sticky lg:top-28" style={{ "--d": ".1s" } as React.CSSProperties}>
            <div className="relative -mx-2 -mt-2 mb-6 aspect-[16/10] overflow-hidden rounded-[24px]">
              <Image src={bodyPhoto.src} alt={bodyAlt} fill sizes="(min-width: 1100px) 400px, 100vw" className="object-cover" />
            </div>
            <p className="eyebrow">Included in your price</p>
            <CheckList items={service.includes} dark />
            <WhatsAppButton label="Get my price" className="btn-amb mt-7 w-full" />
          </aside>
        </div>
      </section>

      <section className="sec sec-white sheet">
        <div className="wrap">
          <SectionHead eyebrow="Good to know" title="Before we arrive" />
          <div className="mt-12">
            <TipCards tips={service.tips} />
          </div>
        </div>
      </section>

      <FaqSection title={`${service.name} questions`} faqs={service.faqs} />

      {guides.length > 0 && (
        <section className="sec sec-white sheet">
          <div className="wrap">
            <SectionHead eyebrow="Related guides" title={`Guides on ${service.name.toLowerCase()}`}>
              <Link href="/blog" className="btn btn-line">
                All guides
                <Icon name="arrow" className="ar size-5" />
              </Link>
            </SectionHead>
            <ul className="cards3 mt-12">
              {guides.map((post) => (
                <li key={post.slug} className="rv">
                  <PostCard post={toSummary(post)} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className={`sec ${guides.length > 0 ? "sec-light" : "sec-white"} sheet`}>
        <div className="wrap">
          <SectionHead eyebrow="Related" title="Related services">
            <Link href="/services" className="btn btn-line">
              All services
              <Icon name="arrow" className="ar size-5" />
            </Link>
          </SectionHead>
          <div className="mt-12">
            <ServiceGrid list={related} />
          </div>
        </div>
      </section>

      <CtaBand title={`Book ${service.name.toLowerCase()} in Dubai`} />
    </>
  );
}
