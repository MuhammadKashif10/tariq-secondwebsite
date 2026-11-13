import { photos } from "@/data/images";
import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "Dubai junk removal, priced from one photo";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return ogCard({ eyebrow: "Junk removal across Dubai", title: "Dubai junk removal, priced from one photo.", photo: photos.skyline.src });
}
