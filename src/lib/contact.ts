import { site } from "@/config/site";

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telUrl = `tel:${site.phone}`;

export const defaultMessage = "Hi, I'd like a junk removal quote. I'll send a photo of what needs to go.";

export function serviceMessage(service: string, area?: string) {
  const where = area ? ` in ${area}` : " in Dubai";
  return `Hi, I'd like a quote for ${service.toLowerCase()}${where}. I'll send a photo.`;
}
