import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import { ContactForm } from "@/components/ContactForm";
import { Icon, WhatsAppIcon } from "@/components/Icon";
import { site } from "@/config/site";
import { defaultMessage, telUrl, whatsappUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact Us for a Quote",
  description: "Get a junk removal quote in Dubai. WhatsApp a photo, call us, or fill in the short form, and you'll get a fixed price.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", path: "/contact" }]}
        eyebrow="Contact"
        title="Tell us what's going."
        lead="WhatsApp is the fastest way, because a photo gets you a price. Calling works too."
      />
      <section className="py-14 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <ul className="space-y-6 text-lg">
            <li>
              <a href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener" className="flex items-center gap-3 font-bold hover:underline">
                <span className="grid size-11 place-items-center rounded-lg bg-wa"><WhatsAppIcon className="size-6" /></span>
                WhatsApp us
              </a>
            </li>
            <li>
              <a href={telUrl} className="flex items-center gap-3 font-bold hover:underline">
                <span className="grid size-11 place-items-center rounded-lg bg-sand-2"><Icon name="phone" /></span>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 font-bold break-all hover:underline">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-sand-2"><Icon name="mail" /></span>
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-lg bg-sand-2"><Icon name="clock" /></span>
              {site.hoursLabel}
            </li>
            <li className="flex items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-sand-2"><Icon name="pin" /></span>
              {site.streetAddress || "Serving all of Dubai"}
            </li>
          </ul>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
