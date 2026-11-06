import { site } from "@/config/site";

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telUrl = `tel:${site.phone}`;

/** The one message pre-typed on every WhatsApp button. */
export const defaultMessage = "Hi, I need junk removal service in Dubai.";
