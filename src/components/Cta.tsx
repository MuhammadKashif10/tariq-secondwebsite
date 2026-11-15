import Image from "next/image";
import { site } from "@/config/site";
import { photos } from "@/data/images";
import { defaultMessage, telUrl, whatsappUrl } from "@/lib/contact";
import { Icon, WhatsAppIcon } from "./Icon";

export function WhatsAppButton({
  label = "Send a photo on WhatsApp",
  className = "btn-amb",
  message = defaultMessage,
}: {
  label?: string;
  /** Button style, e.g. btn-amb, btn-ink. Extra classes can be appended. */
  className?: string;
  message?: string;
}) {
  return (
    <a href={whatsappUrl(message)} target="_blank" rel="noopener" className={`btn ${className}`}>
      <WhatsAppIcon />
      {label}
    </a>
  );
}

export function CallButton({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <a href={telUrl} className={`btn ${dark ? "btn-ghost" : "btn-line"} ${className}`}>
      <Icon name="phone" className="size-5" />
      Call {site.phoneDisplay}
    </a>
  );
}

/** Closing call to action with the drifting colour blobs and photo pair. */
export function CtaBand({
  title = "Got a pile that needs to go?",
  text = "Take a photo, send it over, and you'll have a fixed price to say yes or no to. No forms, no site visit.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta sec sheet">
      <div className="blob k1" />
      <div className="blob k2" />
      <div className="blob k3" />
      <div className="wrap cta-in">
        <div className="rv">
          <p className="eyebrow">Ready when you are</p>
          <h2 className="h-lg mt-[18px] max-w-[13em]">{title}</h2>
          <p className="lead text-soft">{text}</p>
          <div className="mt-[34px] flex flex-wrap gap-3">
            <WhatsAppButton />
            <CallButton dark />
          </div>
          <div className="pill-stats mt-7">
            <span>Fixed price</span>
            <span>We do the carrying</span>
            <span>Open 7 days</span>
          </div>
        </div>
        <div className="cphotos rv" style={{ "--d": ".15s" } as React.CSSProperties} aria-hidden="true">
          <figure className="cph cph1">
            <Image src={photos.junkBags.src} alt="" fill sizes="300px" className="object-cover" />
            <figcaption>Before</figcaption>
          </figure>
          <figure className="cph cph2">
            <Image src={photos.emptyRoom.src} alt="" fill sizes="300px" className="object-cover" />
            <figcaption>After</figcaption>
          </figure>
          <div className="fchip" style={{ left: -10, bottom: 40 }}>
            <b className="bg-mint">
              <Icon name="check" className="size-4" />
            </b>
            Photo in, fixed price back
          </div>
        </div>
      </div>
    </section>
  );
}
