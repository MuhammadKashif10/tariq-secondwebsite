import Image from "next/image";
import { site } from "@/config/site";
import { photos } from "@/data/images";
import { defaultMessage, telUrl, whatsappUrl } from "@/lib/contact";
import { Icon, WhatsAppIcon } from "./Icon";

export function WhatsAppButton({
  label = "Send a photo on WhatsApp",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener" className={`btn btn-wa ${className}`}>
      <WhatsAppIcon />
      {label}
    </a>
  );
}

export function CallButton({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <a href={telUrl} className={`btn ${dark ? "btn-ghost-dark" : "btn-ghost"} ${className}`}>
      <Icon name="phone" className="size-5" />
      {site.phoneDisplay}
    </a>
  );
}

export function CtaBand({
  title = "Got a pile that needs to go?",
  text = "Take a photo, send it over, and you'll have a fixed price to say yes or no to. No forms, no site visit.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-sand py-16 md:py-24">
      <div className="wrap">
        <div className="reveal relative isolate overflow-hidden rounded-[2rem] bg-ink text-white shadow-lift">
          <Image src={photos.burjKhalifa.src} alt="" fill sizes="(min-width: 1280px) 1200px, 100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
          <div className="grid gap-8 p-8 sm:p-12 md:p-16 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h2 className="text-4xl md:text-5xl">{title}</h2>
              <p className="mt-4 max-w-xl text-lg text-mist">{text}</p>
            </div>
            <div className="flex flex-col gap-3">
              <WhatsAppButton />
              <CallButton dark />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
