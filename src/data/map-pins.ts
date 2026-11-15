import { areas } from "./areas";

/** Pins on the illustrative coverage map, as % of the map box. Slugs match areas.ts. */
const pinSpots = [
  { slug: "dubai-marina", x: 30.8, y: 69 },
  { slug: "palm-jumeirah", x: 13.7, y: 64.4 },
  { slug: "downtown-dubai", x: 66, y: 44.4 },
  { slug: "business-bay", x: 74.2, y: 39 },
  { slug: "jumeirah-village-circle", x: 46.7, y: 71 },
  { slug: "jumeirah", x: 56.3, y: 48 },
  { slug: "arabian-ranches", x: 60, y: 86 },
  { slug: "dubai-hills-estate", x: 58.3, y: 66 },
  { slug: "mirdif", x: 90, y: 34 },
];

export const mapPins = pinSpots.flatMap((pin) => {
  const area = areas.find((a) => a.slug === pin.slug);
  return area ? [{ ...pin, name: area.name }] : [];
});

/** Just the slug and name of every area, for the client-side area check. */
export const areaLinks = areas.map((area) => ({ slug: area.slug, name: area.name }));
