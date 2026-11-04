import type { ZoneId } from "./areas";

/**
 * Stock photos stored in /public/images, used under the Unsplash and Pexels
 * licences. They are placeholders for your own work: swap in real photos of
 * your crew and truck by replacing the file or changing `src` here.
 */
export type Photo = { src: string; alt: string };

const photo = (file: string, alt: string): Photo => ({ src: `/images/${file}.jpg`, alt });

export const photos = {
  skyline: photo("dubai-skyline-dusk", "Downtown Dubai skyline and Burj Khalifa at dusk"),
  nightTowers: photo("dubai-night-towers", "Sheikh Zayed Road towers lit up at night in Dubai"),
  marina: photo("dubai-marina", "Dubai Marina towers around the marina waterway"),
  burjAlArab: photo("burj-al-arab-coast", "Aerial view of the Jumeirah coastline and Burj Al Arab"),
  burjKhalifa: photo("burj-khalifa-palms", "Burj Khalifa seen through palm trees in Downtown Dubai"),
  villaPool: photo("villa-pool", "White modern villa with a swimming pool"),
  villaModern: photo("villa-modern", "Modern family villa with a garden and pool"),
  diningRoom: photo("dining-room", "Open-plan dining room and living area"),
  bedroom: photo("bedroom", "Bedroom with a large upholstered bed"),
  washer: photo("laundry-washer", "Washing machine in a home laundry room"),
  office: photo("office-open-plan", "Open-plan office with glass walls"),
  garden: photo("garden-soil", "Garden trowel and soil being cleared"),
  renovation: photo("renovation-worker", "Worker in protective gear on a renovation job"),
  electronics: photo("electronics-wiring", "Close-up of old electronics and wiring"),
  truck: photo("truck-on-road", "Truck driving on an open road under a blue sky"),
  recycling: photo("recycling-bins", "Row of colour-coded recycling bins"),
  warehouse: photo("warehouse-aisles", "Warehouse aisles stacked with stock"),
  moversStreet: photo("movers-sofa-street", "Two movers in uniform carrying a green sofa along the street"),
  moversRoom: photo("movers-sofa-room", "Two movers lifting a green sofa in an empty room"),
  moversDoorway: photo("movers-sofa-doorway", "Movers carrying a sofa through a doorway"),
  moversInterior: photo("movers-sofa-interior", "Mover carrying a sofa through a bright room with boxes"),
  moverCorridor: photo("mover-carrying-corridor", "Mover carrying a sofa through a corridor"),
  packingBox: photo("packing-box", "Mover packing items into a cardboard box"),
  labelledBox: photo("labelled-box", "Moving box labelled for the kitchen"),
  junkBags: photo("junk-bags-wood", "Bags of waste, old rugs and broken wood ready for collection"),
  abandonedCouch: photo("abandoned-couch", "Worn-out couch left against a wall"),
  dumpedSofa: photo("dumped-sofa-sand", "Old sofa dumped on open sandy ground"),
  deiraCreek: photo("deira-creek", "Deira waterfront and towers across Dubai Creek"),
} satisfies Record<string, Photo>;

export const servicePhotos: Record<string, Photo> = {
  "junk-removal": photos.junkBags,
  "furniture-removal": photos.diningRoom,
  "sofa-removal": photos.moversRoom,
  "mattress-removal": photos.bedroom,
  "appliance-removal": photos.washer,
  "house-villa-clearance": photos.villaModern,
  "move-out-clearance": photos.labelledBox,
  "office-clearance": photos.office,
  "garden-waste-removal": photos.garden,
  "construction-debris-removal": photos.renovation,
  "e-waste-removal": photos.electronics,
  "same-day-junk-removal": photos.truck,
};

export const zonePhotos: Record<ZoneId, Photo> = {
  coast: photos.marina,
  centre: photos.nightTowers,
  communities: photos.villaPool,
  old: photos.deiraCreek,
  industrial: photos.warehouse,
};

/** Areas where the zone photo would show the wrong place. */
export const areaPhotos: Record<string, Photo> = {
  "palm-jumeirah": photos.villaPool,
  jumeirah: photos.burjAlArab,
  "umm-suqeim": photos.burjAlArab,
};

export const postPhotos: Record<string, Photo> = {
  "dubai-municipality-free-bulky-waste-vs-private-junk-removal": photos.abandonedCouch,
  "how-junk-removal-is-priced-in-dubai": photos.packingBox,
  "dubai-move-out-junk-checklist": photos.labelledBox,
  "how-to-dispose-of-a-mattress-in-dubai": photos.bedroom,
  "e-waste-disposal-dubai": photos.electronics,
  "junk-pickup-from-a-dubai-tower": photos.nightTowers,
};
