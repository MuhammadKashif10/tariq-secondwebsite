import { areas, getArea } from "@/data/areas";
import { areaPhotos, zonePhotos } from "@/data/images";
import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "Junk removal in a Dubai community";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const area = getArea((await params).slug) ?? areas[0];
  const photo = areaPhotos[area.slug] ?? zonePhotos[area.zone];
  return ogCard({ eyebrow: "Fixed price from a photo", title: `Junk removal in ${area.name}, Dubai`, photo: photo.src });
}
