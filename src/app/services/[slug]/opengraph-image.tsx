import { servicePhotos } from "@/data/images";
import { getService, services } from "@/data/services";
import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "Junk removal service in Dubai";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const service = getService((await params).slug) ?? services[0];
  return ogCard({ eyebrow: `${service.name} in Dubai`, title: service.headline, photo: servicePhotos[service.slug].src });
}
