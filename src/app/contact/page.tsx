import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Blocks";
import { ContactForm } from "@/components/ContactForm";
import { Icon, WhatsAppIcon } from "@/components/Icon";
import { site } from "@/config/site";
import { areas } from "@/data/areas";
import { photos } from "@/data/images";
import { services } from "@/data/services";
import { defaultMessage, telUrl, whatsappUrl } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us for a Quote",
  description: "Get a junk removal quote in Dubai. WhatsApp a photo, call us, or fill in the short form, and you'll get a fixed price.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="phero" style={{ paddingBottom: 140 }}>
        <div className="wrap rv">
          <Breadcrumbs crumbs={[{ name: "Contact", path: "/contact" }]} />
          <p className="eyebrow">Contact</p>
          <h1 className="h-xl">
            Tell us what's <span className="grad">going.</span>
          </h1>
          <p className="lead text-soft">WhatsApp is the fastest way, because a photo gets you a price. Calling works too.</p>
        </div>
      </section>

      <section className="sec-dark relative z-[3] -mt-20 pb-[120px]">
        <div className="wrap csplit grid items-start gap-7 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rv">
            <ContactForm services={services.map((s) => s.name)} areas={areas.map((a) => a.name)} />
          </div>
          <div className="rv flex flex-col gap-4" style={{ "--d": ".1s" } as React.CSSProperties}>
            <div className="glass !border-0 !bg-amb text-ink">
              <p className="eyebrow">Fastest way</p>
              <h2 className="h-md mt-3">Send a photo on WhatsApp.</h2>
              <div className="mt-[22px] flex flex-col gap-2.5">
                <a className="btn btn-ink" href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener">
                  <WhatsAppIcon />
                  WhatsApp us
                </a>
                <a className="btn btn-line" href={telUrl}>
                  <Icon name="phone" className="size-5" />
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
            <ul className="glass m-0 list-none space-y-1">
              <Info icon="mail" title="Email">
                <a href={`mailto:${site.email}`} className="break-all hover:text-amb">
                  {site.email}
                </a>
              </Info>
              <Info icon="clock" title="Hours">
                {site.hoursLabel}
              </Info>
              <Info icon="pin" title="Based in">
                {site.streetAddress || "Serving all of Dubai"}
              </Info>
            </ul>
            <div className="relative h-[260px] overflow-hidden rounded-[40px]">
              <Image src={photos.deiraCreek.src} alt={photos.deiraCreek.alt} fill sizes="(min-width: 1100px) 400px, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ icon, title, children }: { icon: "mail" | "clock" | "pin"; title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3.5 py-2.5">
      <Icon name={icon} className="mt-0.5 size-5 shrink-0 text-amb" />
      <div>
        <div className="font-extrabold">{title}</div>
        <div className="mutD text-[14.5px]">{children}</div>
      </div>
    </li>
  );
}
