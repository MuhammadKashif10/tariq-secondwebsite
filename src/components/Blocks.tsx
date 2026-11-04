import Link from "next/link";
import { site, type PriceTier } from "@/config/site";
import { areas, zones } from "@/data/areas";
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
            <li key={crumb.path} className="flex gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === all.length - 1 ? (
                <span aria-current="page">{crumb.name}</span>
              ) : (
                <Link href={crumb.path} className="hover:text-sand hover:underline">
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
  children,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-ink text-sand">
      <div className="wrap py-10 md:py-16">
        <Breadcrumbs crumbs={crumbs} />
        {eyebrow && <p className="eyebrow eyebrow-dark mt-8">{eyebrow}</p>}
        <h1 className={`${eyebrow ? "mt-3" : "mt-8"} max-w-4xl text-4xl sm:text-5xl md:text-6xl`}>{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-lg text-mist md:text-xl">{lead}</p>}
        {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>}
      </div>
      <div className="chevrons" />
    </section>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y-2 divide-sand-3 border-y-2 border-sand-3">
      {faqs.map((faq) => (
        <details key={faq.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
            {faq.q}
            <span aria-hidden="true" className="font-display shrink-0 text-2xl text-signal-deep transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-5 text-muted">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-xl border-2 border-ink bg-paper p-5 transition-transform hover:-translate-y-1 hover:shadow-[5px_5px_0_var(--color-ink)]"
    >
      <span className="grid size-12 place-items-center rounded-lg bg-sand-2 text-ink transition-colors group-hover:bg-signal">
        <Icon name={service.icon} className="size-7" />
      </span>
      <h3 className="mt-4 text-xl">{service.name}</h3>
      <p className="mt-2 flex-1 text-muted">{service.short}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 font-bold">
        Details <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function AreaDirectory() {
  return (
    <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
      {zones.map((zone) => (
        <div key={zone.id}>
          <h3 className="text-2xl">{zone.name}</h3>
          <p className="mt-1 text-sm text-muted">{zone.note}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {areas
              .filter((area) => area.zone === zone.id)
              .map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="block rounded-md bg-ink-2 px-3 py-1.5 text-sm font-semibold text-sand transition-colors hover:bg-signal hover:text-ink"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function tierPrice(tier: PriceTier) {
  return tier.fromAed === null ? "Priced from your photo" : `From AED ${tier.fromAed.toLocaleString("en-US")}`;
}

export function PriceTiers() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {site.priceTiers.map((tier, index) => (
        <li key={tier.id} className="flex flex-col rounded-xl border-2 border-ink bg-paper p-5">
          <svg viewBox="0 0 100 44" className="w-full" aria-hidden="true">
            <rect x="1.5" y="1.5" width="97" height="41" rx="3" fill="var(--color-sand-2)" stroke="var(--color-ink)" strokeWidth="3" />
            <rect x="3" y={3 + 38 * (1 - [0.12, 0.25, 0.5, 1][index])} width="94" height={38 * [0.12, 0.25, 0.5, 1][index]} fill="var(--color-signal)" />
          </svg>
          <h3 className="mt-4 text-xl">{tier.name}</h3>
          <p className="mt-1 font-semibold">{tier.fits}</p>
          <p className="mt-1 flex-1 text-sm text-muted">{tier.examples}</p>
          <p className="mt-4 border-t-2 border-sand-3 pt-3 font-bold text-signal-deep">{tierPrice(tier)}</p>
        </li>
      ))}
    </ol>
  );
}

export function Reviews() {
  if (site.reviews.length === 0) return null;
  return (
    <section className="bg-sand-2 py-16 md:py-24">
      <div className="wrap">
        <h2 className="text-4xl md:text-5xl">What customers say</h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {site.reviews.map((review) => (
            <li key={review.name + review.area} className="rounded-xl bg-paper p-6">
              <p className="font-bold text-signal-deep" aria-label={`${review.rating} out of 5 stars`}>
                {"★".repeat(review.rating)}
              </p>
              <p className="mt-3">{review.text}</p>
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
