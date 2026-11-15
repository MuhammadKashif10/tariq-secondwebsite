import Image from "next/image";
import Link from "next/link";
import { site, type PriceTier } from "@/config/site";
import { areas, zones } from "@/data/areas";
import type { Photo } from "@/data/images";
import type { Faq, Service } from "@/data/services";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import { toCard } from "@/lib/service-card";
import { FaqAccordion } from "./Faq";
import { Icon } from "./Icon";
import { ServiceCard } from "./ServiceCard";

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
      <nav aria-label="Breadcrumb" className="crumb">
        <ol>
          {all.map((crumb, index) => (
            <li key={crumb.path + index}>
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === all.length - 1 ? (
                <span aria-current="page">{crumb.name}</span>
              ) : (
                <Link href={crumb.path}>{crumb.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/**
 * Splits a headline so its last phrase gets the amber gradient, as in the
 * design: after the last comma or full stop if there is one, otherwise the
 * final word.
 */
export function Accent({ text }: { text: string }) {
  const trimmed = text.trim();
  const body = trimmed.replace(/[.!?]$/, "");
  const cut = Math.max(body.lastIndexOf(", "), body.lastIndexOf(". "));
  const split = cut > 0 ? cut + 2 : trimmed.lastIndexOf(" ") + 1;
  if (split <= 0) return <span className="grad">{trimmed}</span>;
  return (
    <>
      {trimmed.slice(0, split)}
      <span className="grad">{trimmed.slice(split)}</span>
    </>
  );
}

export function ArrowIcon({ className = "size-5" }: { className?: string }) {
  return <Icon name="arrow" className={`ar ${className}`} />;
}

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  photo,
  children,
  aside,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  lead?: string;
  photo?: Photo;
  children?: React.ReactNode;
  /** Replaces the photo card on the right. */
  aside?: React.ReactNode;
}) {
  const right = aside ?? (photo && (
    <div className="photo-card">
      <Image src={photo.src} alt={photo.alt} fill priority quality={70} sizes="(min-width: 1100px) 520px, 100vw" className="object-cover" />
    </div>
  ));
  return (
    <section className="phero">
      <div className="wrap">
        <div className={right ? "ph-grid" : ""}>
          <div className="rv">
            <Breadcrumbs crumbs={crumbs} />
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="h-xl max-w-[14em]">
              <Accent text={title} />
            </h1>
            {lead && <p className="lead text-soft">{lead}</p>}
            {children && <div className="mt-[34px] flex flex-wrap gap-3">{children}</div>}
          </div>
          {right && (
            <div className="rv" style={{ "--d": ".1s" } as React.CSSProperties}>
              {right}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  dark = false,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  dark?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="sec-head rv">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h-lg mt-[18px] max-w-[14em]">{title}</h2>
        {lead && <p className={`lead ${dark ? "mutD" : "mutL"}`}>{lead}</p>}
      </div>
      {children}
    </div>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return <FaqAccordion faqs={faqs} />;
}

/** FAQ block from the design: heading on the left, accordion on the right. */
export function FaqSection({
  title,
  lead,
  faqs,
  eyebrow = "FAQ",
  children,
  className = "sec sec-light sheet",
}: {
  title: React.ReactNode;
  lead?: string;
  faqs: Faq[];
  eyebrow?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="wrap faqg">
        <div className="rv">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h-lg mt-[18px]">{title}</h2>
          {lead && <p className="lead mutL">{lead}</p>}
          {children && <div className="mt-[30px]">{children}</div>}
        </div>
        <div className="rv" style={{ "--d": ".1s" } as React.CSSProperties}>
          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
}

export function ServiceGrid({ list }: { list: Service[] }) {
  return (
    <ul className="gg m-0 list-none p-0">
      {list.map((service) => (
        <li key={service.slug} className="rv">
          <ServiceCard service={toCard(service)} />
        </li>
      ))}
    </ul>
  );
}

export function AreaDirectory() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {zones.map((zone, index) => (
        <div key={zone.id} className={`zone rv ${index === 0 ? "md:col-span-2" : ""}`}>
          <h3 className="h-sm">{zone.name}</h3>
          <p className="mutL mt-1.5 text-[15.5px]">{zone.note}</p>
          <ul>
            {areas
              .filter((area) => area.zone === zone.id)
              .map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`}>{area.name}</Link>
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

const tierFill = [12, 25, 50, 100];

export function PriceTiers() {
  return (
    <ol className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
      {site.priceTiers.map((tier, index) => {
        const dark = index === 2;
        return (
          <li
            key={tier.id}
            className={`rv flex flex-col rounded-[32px] p-7 transition-transform hover:-translate-y-1.5 ${dark ? "bg-ink text-white" : "border border-line bg-white"}`}
            style={{ "--d": `${index * 0.08}s` } as React.CSSProperties}
          >
            <p className={`text-xs font-extrabold tracking-[0.12em] uppercase ${dark ? "text-amb" : "text-amb-deep"}`}>{tierFill[index]}% of a truck</p>
            <div className={`mt-4 h-3 overflow-hidden rounded-full ${dark ? "bg-white/15" : "bg-paper"}`}>
              <div className="h-full rounded-full bg-[repeating-linear-gradient(135deg,var(--amb)_0_10px,#ffcb6b_10px_20px)]" style={{ width: `${tierFill[index]}%` }} />
            </div>
            <h3 className="h-sm mt-6 text-[26px]">{tier.name}</h3>
            <p className="mt-2 font-bold">{tier.fits}</p>
            <p className={`mt-1 flex-1 text-[15px] leading-relaxed ${dark ? "text-mist" : "text-muted"}`}>{tier.examples}</p>
            <p className={`mt-6 border-t pt-4 text-sm font-extrabold ${dark ? "border-white/15 text-amb" : "border-line text-amb-deep"}`}>{tierPrice(tier)}</p>
          </li>
        );
      })}
    </ol>
  );
}

export function Reviews() {
  if (site.reviews.length === 0) return null;
  return (
    <section className="sec sec-white sheet">
      <div className="wrap">
        <SectionHead eyebrow="Reviews" title="What customers say" />
        <ul className="cards3 mt-12">
          {site.reviews.map((review) => (
            <li key={review.name + review.area} className="cd rv">
              <p className="font-extrabold text-amb-deep" aria-label={`${review.rating} out of 5 stars`}>
                {"★".repeat(review.rating)}
              </p>
              <p className="!mt-3 !text-base !text-ink">{review.text}</p>
              <p className="!mt-4 font-extrabold !text-ink">
                {review.name}, {review.area}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Tip / info cards: numbered amber icon tiles on white cards. */
export function TipCards({ tips, icons }: { tips: { title: string; body: string }[]; icons?: React.ReactNode[] }) {
  return (
    <ul className="cards3">
      {tips.map((tip, index) => (
        <li key={tip.title} className="cd rv" style={{ "--d": `${(index % 3) * 0.08}s` } as React.CSSProperties}>
          <span className="ci bg-amb font-display text-lg font-semibold">{icons?.[index] ?? String(index + 1).padStart(2, "0")}</span>
          <h3>{tip.title}</h3>
          <p>{tip.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function CheckList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className={dark ? "inc" : "ticks"}>
      {items.map((item) => (
        <li key={item}>
          {dark ? (
            <Icon name="check" className="size-5" />
          ) : (
            <span className="tick">
              <Icon name="check" className="size-4" />
            </span>
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}
