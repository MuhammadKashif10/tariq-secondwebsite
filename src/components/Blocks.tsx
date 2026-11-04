import Image from "next/image";
import Link from "next/link";
import { site, type PriceTier } from "@/config/site";
import { areas, zones } from "@/data/areas";
import { photos, servicePhotos, zonePhotos, type Photo } from "@/data/images";
import type { Faq, Service } from "@/data/services";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import { Icon } from "./Icon";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Breadcrumb" className="text-sm text-mist">
        <ol className="flex flex-wrap gap-x-2">
          {all.map((crumb, index) => (
            <li key={crumb.path + index} className="flex gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === all.length - 1 ? (
                <span aria-current="page" className="text-white">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.path} className="hover:text-white hover:underline">
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  photo = photos.skyline,
  children,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  lead?: string;
  photo?: Photo;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image src={photo.src} alt={photo.alt} fill priority quality={50} sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 to-ink/80 md:bg-gradient-to-r md:from-ink/95 md:via-ink/65 md:to-ink/10" />
      <div className="wrap py-14 md:py-24">
        <Breadcrumbs crumbs={crumbs} />
        {eyebrow && <p className="eyebrow eyebrow-dark mt-10">{eyebrow}</p>}
        <h1 className={`${eyebrow ? "mt-4" : "mt-10"} max-w-3xl text-4xl sm:text-5xl md:text-[3.75rem]`}>{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist md:text-xl">{lead}</p>}
        {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-[3.25rem]">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details key={faq.q} className="card group !rounded-2xl px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[1.05rem] font-bold [&::-webkit-details-marker]:hidden">
            {faq.q}
            <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full bg-sand-2 text-xl font-medium transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-muted">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

export function ServiceCard({ service, large = false }: { service: Service; large?: boolean }) {
  const photo = servicePhotos[service.slug];
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-ink text-white shadow-soft transition-shadow hover:shadow-lift ${large ? "min-h-[20rem] p-6 md:p-8" : "min-h-[13.5rem] p-4 sm:min-h-[19rem] sm:p-6"}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={large ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
        className="zoom -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/5" />
      <span className="absolute top-3 left-3 grid size-10 place-items-center rounded-2xl bg-ink/45 backdrop-blur-md sm:top-5 sm:left-5 sm:size-11">
        <Icon name={service.icon} className="size-5 sm:size-6" />
      </span>
      <h3 className={large ? "text-3xl md:text-4xl" : "text-base sm:text-xl"}>{service.name}</h3>
      <p className={`mt-2 text-sm leading-relaxed text-white/90 ${large ? "max-w-md md:text-base" : "hidden sm:block"}`}>{service.short}</p>
      <span className={`mt-3 items-center gap-1.5 text-sm font-bold text-signal ${large ? "inline-flex" : "hidden sm:inline-flex"}`}>
        View service <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function AreaDirectory() {
  return (
    <div className="grid gap-5 md:grid-cols-6">
      {zones.map((zone, index) => {
        const photo = zonePhotos[zone.id];
        return (
          <div
            key={zone.id}
            className={`group relative isolate flex min-h-[20rem] flex-col justify-end md:min-h-[24rem] overflow-hidden rounded-3xl bg-ink p-6 text-white shadow-soft md:p-7 ${index < 2 ? "md:col-span-3" : "md:col-span-2"}`}
          >
            <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="zoom -z-20 object-cover" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/65 to-ink/10" />
            <h3 className="text-2xl md:text-[1.75rem]">{zone.name}</h3>
            <p className="mt-1 text-sm text-white/85">{zone.note}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {areas
                .filter((area) => area.zone === zone.id)
                .map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="block rounded-full bg-white/15 px-3 py-1.5 text-[0.8rem] font-semibold backdrop-blur-md transition-colors hover:bg-signal hover:text-ink"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function tierPrice(tier: PriceTier) {
  return tier.fromAed === null ? "Priced from your photo" : `From AED ${tier.fromAed.toLocaleString("en-US")}`;
}

const tierFill = [12, 25, 50, 100];

export function PriceTiers() {
  return (
    <ol className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      {site.priceTiers.map((tier, index) => (
        <li key={tier.id} className={`card flex flex-col p-4 transition-transform sm:p-6 hover:-translate-y-1 ${index === 2 ? "bg-ink text-white" : ""}`}>
          <p className={`text-xs font-bold tracking-[0.12em] uppercase ${index === 2 ? "text-signal" : "text-signal-deep"}`}>{tierFill[index]}% of a truck</p>
          <div className={`mt-3 h-2.5 overflow-hidden rounded-full ${index === 2 ? "bg-white/15" : "bg-sand-2"}`}>
            <div className="h-full rounded-full bg-signal" style={{ width: `${tierFill[index]}%` }} />
          </div>
          <h3 className="mt-5 text-xl sm:mt-6 sm:text-2xl">{tier.name}</h3>
          <p className="mt-2 font-semibold">{tier.fits}</p>
          <p className={`mt-1 flex-1 text-sm leading-relaxed ${index === 2 ? "text-mist" : "text-muted"}`}>{tier.examples}</p>
          <p className={`mt-5 border-t pt-4 text-sm font-bold ${index === 2 ? "border-white/15 text-signal" : "border-sand-2 text-signal-deep"}`}>{tierPrice(tier)}</p>
        </li>
      ))}
    </ol>
  );
}

export function Reviews() {
  if (site.reviews.length === 0) return null;
  return (
    <section className="py-16 md:py-24">
      <div className="wrap">
        <SectionHead eyebrow="Reviews" title="What customers say" />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {site.reviews.map((review) => (
            <li key={review.name + review.area} className="card p-7">
              <p className="font-bold text-signal-deep" aria-label={`${review.rating} out of 5 stars`}>
                {"★".repeat(review.rating)}
              </p>
              <p className="mt-3 leading-relaxed">{review.text}</p>
              <p className="mt-4 font-bold">
                {review.name}, {review.area}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
