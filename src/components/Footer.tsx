import Link from "next/link";
import { site } from "@/config/site";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { telUrl } from "@/lib/contact";
import { Logo } from "./Logo";

const popularAreas = [
  "dubai-marina",
  "palm-jumeirah",
  "downtown-dubai",
  "business-bay",
  "jumeirah-village-circle",
  "dubai-hills-estate",
  "arabian-ranches",
  "deira",
];

const company = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Guides" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink pb-24 text-mist lg:pb-0">
      <div className="wrap grid gap-10 border-t border-ink-3 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.7fr]">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-xs">Lifting, loading and clearing junk from homes and businesses across Dubai.</p>
          <ul className="mt-5 space-y-1.5">
            <li>
              <a href={telUrl} className="font-bold text-sand hover:underline">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </li>
            <li>{site.hoursLabel}</li>
            {site.streetAddress && <li>{site.streetAddress}</li>}
          </ul>
        </div>
        <FooterList title="Services">
          {services.slice(0, 8).map((service) => (
            <FooterLink key={service.slug} href={`/services/${service.slug}`}>
              {service.name}
            </FooterLink>
          ))}
          <FooterLink href="/services">All services</FooterLink>
        </FooterList>
        <FooterList title="Popular areas">
          {popularAreas.map((slug) => {
            const area = areas.find((a) => a.slug === slug);
            return area ? (
              <FooterLink key={slug} href={`/areas/${slug}`}>
                {area.name}
              </FooterLink>
            ) : null;
          })}
          <FooterLink href="/areas">All areas</FooterLink>
        </FooterList>
        <FooterList title="Company">
          {company.map((item) => (
            <FooterLink key={item.href} href={item.href}>
              {item.label}
            </FooterLink>
          ))}
        </FooterList>
      </div>
      <div className="wrap flex flex-col gap-2 border-t border-ink-3 py-6 text-sm sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
          {site.tradeLicence && ` · Trade licence ${site.tradeLicence}`}
        </p>
        <p className="flex gap-4">
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
        </p>
      </div>
    </footer>
  );
}

function FooterList({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-sans text-sm font-bold tracking-wider text-sand uppercase">{title}</h2>
      <ul className="mt-4 space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:text-sand hover:underline">
        {children}
      </Link>
    </li>
  );
}
