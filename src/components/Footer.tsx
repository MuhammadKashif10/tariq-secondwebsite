import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { areas } from "@/data/areas";
import { photos } from "@/data/images";
import { services } from "@/data/services";
import { defaultMessage, telUrl, whatsappUrl } from "@/lib/contact";
import { Icon, WhatsAppIcon } from "./Icon";
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

const ribbon = ["Send a photo", "Fixed price", "We carry it out"];

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="fcta rv">
          <div className="fc-l">
            <span className="eyebrow">Let's clear it</span>
            <h2 className="giant">
              One photo.
              <br />
              <span>One fixed price.</span>
            </h2>
            <p className="fc-p">Take a photo, send it over, and you'll have a fixed price to say yes or no to. No forms, no site visit.</p>
            <div className="fc-btns">
              <a className="btn btn-ink" href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener">
                <WhatsAppIcon />
                Send a photo on WhatsApp
              </a>
              <a className="btn btn-line" href={telUrl}>
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="fc-r" aria-hidden="true">
            <div className="fp fp1">
              <Image src={photos.junkBags.src} alt="" fill sizes="260px" className="object-cover" />
            </div>
            <div className="fp fp2">
              <Image src={photos.villaPool.src} alt="" fill sizes="240px" className="object-cover" />
            </div>
            <div className="fp fp3">
              <Image src={photos.moversRoom.src} alt="" fill sizes="300px" className="object-cover" />
            </div>
            <div className="spin">
              <svg viewBox="0 0 128 128">
                <defs>
                  <path id="spin-circle" d="M64 64m-48 0a48 48 0 1 1 96 0a48 48 0 1 1-96 0" />
                </defs>
                <text>
                  <textPath href="#spin-circle">SEND A PHOTO · GET A FIXED PRICE · </textPath>
                </text>
              </svg>
              <b>
                <Icon name="arrow" className="size-6 -rotate-45" />
              </b>
            </div>
          </div>

          <div className="fc-tiles">
            <a href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener">
              <span className="ic">
                <WhatsAppIcon className="size-5" />
              </span>
              <span>
                <b>WhatsApp</b>
                <em>Fastest way to a price</em>
              </span>
            </a>
            <a href={telUrl}>
              <span className="ic">
                <Icon name="phone" className="size-5" />
              </span>
              <span>
                <b>Call us</b>
                <em>{site.phoneDisplay}</em>
              </span>
            </a>
            <div>
              <span className="ic">
                <Icon name="clock" className="size-5" />
              </span>
              <span>
                <b>Open 7 days</b>
                <em>{site.hoursLabel}</em>
              </span>
            </div>
          </div>

          <div className="fc-mq" aria-hidden="true">
            <div>
              {[0, 1, 2, 3].flatMap((round) => ribbon.map((word) => <span key={`${round}-${word}`}>{word}</span>))}
            </div>
          </div>
        </div>

        <div className="foot-cols">
          <div>
            <Logo />
            <p className="mutD mt-[18px] max-w-[22em] text-[15.5px]">Lifting, loading and clearing junk from homes and businesses across Dubai.</p>
            <ul className="mt-5 space-y-1 text-[15px]">
              <li>
                <a href={telUrl} className="inline-flex items-center gap-2.5 font-bold text-white hover:text-amb">
                  <Icon name="phone" className="size-4 text-amb" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 break-all text-soft hover:text-amb">
                  <Icon name="mail" className="size-4 shrink-0 text-amb" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-soft">
                <Icon name="clock" className="size-4 shrink-0 text-amb" />
                {site.hoursLabel}
              </li>
              {site.streetAddress && (
                <li className="flex items-center gap-2.5 text-soft">
                  <Icon name="pin" className="size-4 shrink-0 text-amb" />
                  {site.streetAddress}
                </li>
              )}
            </ul>
          </div>
          <FooterList title="Services">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>{service.name}</Link>
              </li>
            ))}
          </FooterList>
          <FooterList title="Popular areas">
            {popularAreas.map((slug) => {
              const area = areas.find((a) => a.slug === slug);
              return area ? (
                <li key={slug}>
                  <Link href={`/areas/${slug}`}>{area.name}</Link>
                </li>
              ) : null;
            })}
            <li>
              <Link href="/areas">All areas</Link>
            </li>
          </FooterList>
          <FooterList title="Company">
            {company.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </FooterList>
        </div>

        <div className="foot-bot">
          <p>
            © {new Date().getFullYear()} {site.name}
            {site.tradeLicence && ` · Trade licence ${site.tradeLicence}`}
          </p>
          <p className="flex gap-5">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>{children}</ul>
    </div>
  );
}
