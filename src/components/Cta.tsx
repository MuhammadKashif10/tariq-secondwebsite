import { site } from "@/config/site";
import { defaultMessage, telUrl, whatsappUrl } from "@/lib/contact";
import { Icon, WhatsAppIcon } from "./Icon";

export function WhatsAppButton({
  message = defaultMessage,
  label = "Send a photo on WhatsApp",
  className = "",
}: {
  message?: string;
  label?: string;
  className?: string;
}) {
  return (
    <a href={whatsappUrl(message)} target="_blank" rel="noopener" className={`btn btn-wa ${className}`}>
      <WhatsAppIcon />
      {label}
    </a>
  );
}

export function CallButton({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <a href={telUrl} className={`btn ${dark ? "btn-ghost-dark" : "btn-ghost"} ${className}`}>
      <Icon name="phone" className="size-5" />
      Call {site.phoneDisplay}
    </a>
  );
}

export function CtaBand({
  title = "Got a pile that needs to go?",
  text = "Take a photo, send it over, and you'll have a fixed price to say yes or no to. No forms, no site visit.",
  message,
}: {
  title?: string;
  text?: string;
  message?: string;
}) {
  return (
    <section className="bg-ink text-sand">
      <div className="chevrons" />
      <div className="wrap grid gap-8 py-16 md:grid-cols-[1.4fr_1fr] md:items-center md:py-20">
        <div>
          <h2 className="text-4xl md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-xl text-lg text-mist">{text}</p>
        </div>
        <div className="flex flex-col gap-3">
          <WhatsAppButton message={message} />
          <CallButton dark />
        </div>
      </div>
    </section>
  );
}
