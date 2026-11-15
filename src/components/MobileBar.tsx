import { defaultMessage, whatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "./Icon";

/** Floating WhatsApp button, shown on every page. */
export function WhatsAppFloat() {
  return (
    <a className="waf" href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener" aria-label="Send a photo on WhatsApp">
      <b>
        <WhatsAppIcon className="size-6" />
      </b>
      <span>
        WhatsApp a photo
        <small>Get a fixed price</small>
      </span>
    </a>
  );
}
