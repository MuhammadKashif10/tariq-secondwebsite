import { imageUrl } from "@/lib/image-url";
import type { ZoneId } from "./areas";

/**
 * Stock photos stored in /public/images, used under the Unsplash and Pexels
 * licences. They are placeholders for your own work: swap in real photos of
 * your crew and truck by replacing the file or changing `src` here.
 */
export type Photo = { src: string; alt: string };

// Every photo path goes through imageUrl(), which points it at the Cloudflare
// image origin when NEXT_PUBLIC_IMAGE_CDN_URL is set. See docs/cloudflare-r2-images.md.
const photo = (file: string, alt: string): Photo => ({ src: imageUrl(`/images/${file}.jpg`), alt });


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
  // Pexels 9714795 and 4553261 (cropped), used under the Pexels licence.
  furniturePile: photo("discarded-furniture-pile", "Pile of broken wooden chairs and tables seen from above"),
  movingBoxesDoor: photo("moving-boxes-door", "Cardboard moving boxes stacked in front of white double doors"),
  // Pexels 28100043 and 15798781, used under the Pexels licence.
  phonePhotoRoom: photo("phone-photo-living-room", "Hands holding a phone to photograph a living room"),
  // Pexels 5483236 and 8032016, used under the Pexels licence.
  emptyOffice: photo("empty-office-workstations", "Rows of empty office workstations and chairs beside floor-to-ceiling windows"),
  stainlessFridge: photo("stainless-fridge-kitchen", "A stainless steel double-door fridge between white kitchen cabinets"),
  // Pexels 3616736 and 17577525, used under the Pexels licence.
  wrappedChair: photo("bubble-wrapped-chair", "A chair wrapped in bubble wrap beside a bright window"),
  gardenBin: photo("garden-waste-bin", "A wheelie bin overflowing with garden cuttings and branches beside a hedge"),
  // Pexels 7203788 and 31868429, used under the Pexels licence.
  boxesEmptyRoom: photo("boxes-empty-room", "Cardboard boxes scattered across the floor of an empty white room"),
  skipContainer: photo("skip-container-street", "A green skip container standing on paving outside an office building"),
  // Pexels 36126272 and 6970027, used under the Pexels licence.
  emptyRacking: photo("empty-warehouse-racking", "Tall steel warehouse racking, mostly empty, with a wooden pallet on a lower shelf"),
  lShapedSofa: photo("l-shaped-sofa", "A grey L-shaped sofa with cushions against a brick feature wall"),
  // Pexels 6170102 and 7598913, used under the Pexels licence.
  clipboardChecklist: photo("clipboard-checklist-box", "Hands holding a clipboard with a printed form on top of a cardboard box"),
  oldComputers: photo("old-computers-stacked", "Old desktop computers, printers and monitors stacked on top of each other"),
  // Pexels 8112184 and 12703093, used under the Pexels licence.
  keysHandover: photo("keys-handover", "One hand passing a set of keys to another"),
  officeDesks: photo("office-desks-chairs", "An office with wooden desks and black task chairs under ceiling lights"),
  // Pexels 15751563 and 12478148, used under the Pexels licence.
  secondhandArmchairs: photo("secondhand-armchairs", "Two green armchairs, cushions and a rug set out on a pavement outside a shopfront"),
  chairBesideBins: photo("chair-beside-bins", "A black-and-white photo of a wooden chair left beside a row of large waste bins"),
  // Pexels 34397245 and 6114347, used under the Pexels licence.
  washerDrum: photo("washing-machine-drum", "Close-up of the stainless steel drum inside a front-loading washing machine"),
  saleTag: photo("sale-tag-lamp", "A red sale tag hanging on string from a lamp"),
  // Pexels 6115026 and 33175809, used under the Pexels licence.
  phoneSalePhoto: photo("phone-photographing-sale", "A hand holding a phone to photograph items for sale, with a sale sign in the background"),
  officeTurnstiles: photo("office-turnstiles", "A row of security turnstiles at the entrance of an office building lobby"),
  // Pexels 7587809 and 18082438 (cropped), used under the Pexels licence.
  woodenWardrobes: photo("wooden-wardrobes-bedroom", "Bedroom with tall pale wooden wardrobes facing a double bed"),
  garageClutter: photo("garage-bags-clutter", "A bar stool in front of blue bags, boxes and boards stacked in a garage"),
  renovationRoom: photo("renovation-room-bags", "Room stripped back to brick during a renovation, with bags of material on the floor"),
  // Illustrative pair for the before and after slider, from the redesign prototype.
  clutteredRoom: photo("cluttered-bedroom-before", "A cluttered bedroom with clothes piled on the bed and rails"),
  emptyRoom: photo("empty-room-after", "An empty, bright room with wooden floors and a balcony door"),
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

/** One photo per area page, never shared. Sources and licences: area-photo-credits.ts */
const areaPhotoFiles: Record<string, Photo> = {
  "dubai-marina": { src: "/images/dubai-marina.jpg", alt: "Dubai Marina towers around the marina waterway" },
  "jumeirah-beach-residence": { src: "/images/areas/jumeirah-beach-residence.jpg", alt: "The Dubai Marina and Jumeirah Beach Residence tower skyline seen across the sea under a pink-tinged cloudy sky" },
  "jumeirah-lakes-towers": { src: "/images/areas/jumeirah-lakes-towers.jpg", alt: "A Dubai Metro train passing a curved elevated station beside residential towers, with date palms in the foreground" },
  "palm-jumeirah": { src: "/images/areas/palm-jumeirah.jpg", alt: "Beachfront villas on a Palm Jumeirah frond with turquoise water and the Dubai Marina skyline in the distance" },
  "jumeirah": { src: "/images/areas/jumeirah.jpg", alt: "A Jumeirah public beach lined with palm trees and beach huts, with the Burj Khalifa and Downtown skyline behind" },
  "umm-suqeim": { src: "/images/areas/umm-suqeim.jpg", alt: "The Burj Al Arab hotel rising off the beach under a blue sky with scattered clouds, seen from the sand" },
  "downtown-dubai": { src: "/images/areas/downtown-dubai.jpg", alt: "Souk Al Bahar's arched Arabian-style buildings and Downtown Dubai residential towers beside the Burj Lake" },
  "business-bay": { src: "/images/areas/business-bay.jpg", alt: "Illuminated Business Bay towers, including the Opus building, reflected in the Dubai Water Canal at night with the Burj Khalifa behind" },
  "difc": { src: "/images/areas/difc.jpg", alt: "Sheikh Zayed Road skyscrapers and light trails at dusk, with the Burj Khalifa in the background" },
  "al-barsha": { src: "/images/areas/al-barsha.jpg", alt: "Low-rise residential districts with the Downtown Dubai skyline faint on the horizon" },
  "jumeirah-village-circle": { src: "/images/areas/jumeirah-village-circle.jpg", alt: "Two mid-rise apartment blocks, one cream and one terracotta, with rows of balconies beside a sandy plot under a hazy sky" },
  "jumeirah-village-triangle": { src: "/images/areas/jumeirah-village-triangle.jpg", alt: "Modern two-storey cream villas with wood-panel accents around a paved cul-de-sac, with young trees and a clear blue sky" },
  "dubai-hills-estate": { src: "/images/areas/dubai-hills-estate.jpg", alt: "A contemporary two-storey white villa with a landscaped front garden of ornamental grasses and a white SUV parked in the driveway" },
  "arabian-ranches": { src: "/images/areas/arabian-ranches.jpg", alt: "Aerial view of rows of beige flat-roofed two-storey villas set among mature green trees" },
  "al-furjan": { src: "/images/areas/al-furjan.jpg", alt: "A modern cream townhouse with wood-slat accents, a covered carport and a closed garage door, framed by trees and shrubs" },
  "motor-city": { src: "/images/areas/motor-city.jpg", alt: "A rooftop swimming pool with sun loungers beside modern mid-rise apartment buildings in a Dubai suburb" },
  "dubai-sports-city": { src: "/images/areas/dubai-sports-city.jpg", alt: "A residential tower with curved balconies behind roadside trees" },
  "damac-hills": { src: "/images/areas/damac-hills.jpg", alt: "Top-down aerial view of a villa community with private swimming pools, palm trees and a curving residential road" },
  "town-square": { src: "/images/areas/town-square.jpg", alt: "A row of modern two-storey cream townhouses with garages and young trees along a quiet paved residential road" },
  "mirdif": { src: "/images/areas/mirdif.jpg", alt: "A large ornate villa behind a perimeter wall with wrought-iron gates and a trimmed hedge, seen across an empty street under a blue sky" },
  "deira": { src: "/images/deira-creek.jpg", alt: "Deira waterfront and towers across Dubai Creek" },
  "bur-dubai": { src: "/images/areas/bur-dubai.jpg", alt: "A sandstone wall with recessed niches and lanterns in old Dubai's historic heritage quarter" },
  "al-karama": { src: "/images/areas/al-karama.jpg", alt: "Beige low-rise apartment blocks with arched windows and small balconies around a paved parking courtyard in Dubai" },
  "al-qusais": { src: "/images/areas/al-qusais.jpg", alt: "A cream three-storey commercial building across a wide, quiet street" },
  "al-quoz": { src: "/images/areas/al-quoz.jpg", alt: "Strings of lights hanging across a lane between warehouse buildings at Alserkal Avenue at night" },
  "dubai-investments-park": { src: "/images/areas/dubai-investments-park.jpg", alt: "The corrugated metal exterior of an industrial warehouse with large blue loading doors and a paved forecourt" },
  "jebel-ali": { src: "/images/areas/jebel-ali.jpg", alt: "An industrial plant with silos and a warehouse shed beyond an open stretch of desert sand" },
  "dubai-silicon-oasis": { src: "/images/areas/dubai-silicon-oasis.jpg", alt: "The Dubai Silicon Oasis headquarters building with its crown-shaped top, beside a lake and office blocks, with villas in the foreground" },
  "international-city": { src: "/images/areas/international-city.jpg", alt: "A long row of three-storey beige residential buildings with arched windows behind a perimeter wall, with tyre-marked sand in the foreground" },
  "al-warqa": { src: "/images/areas/al-warqa.jpg", alt: "A white mosque with domes and two tall minarets beside low-rise villas, seen across an open patch of desert scrub" },
  "al-nahda": { src: "/images/areas/al-nahda.jpg", alt: "Three residential towers rising above a district of mid-rise buildings, with a palm-lined road in the foreground on a hazy day" },
  "muhaisnah": { src: "/images/areas/muhaisnah.jpg", alt: "A quiet residential street lined with villa walls, an ornate gate and a large shade tree, with a few cars parked along the road" },
  "al-rashidiya": { src: "/images/areas/al-rashidiya.jpg", alt: "A paved internal street in a gated villa compound with beige Arabic-style houses, street lamps and a shaded parking canopy" },
  "al-mizhar": { src: "/images/areas/al-mizhar.jpg", alt: "A two-storey villa with tiled roofs, arched windows and ornate wooden and iron gates on a quiet street corner" },
  "nad-al-sheba": { src: "/images/areas/nad-al-sheba.jpg", alt: "Close aerial view of beige flat-roofed villas with rooftop air-conditioning units, surrounded by trees and palms" },
  "meydan": { src: "/images/areas/meydan.jpg", alt: "The wave-shaped arches of Meydan Bridge framing an empty road, with the Dubai skyline on the horizon" },
  "dubai-creek-harbour": { src: "/images/areas/dubai-creek-harbour.jpg", alt: "Large Dubai Creek Harbour lettering beside the water at sunset, with palm silhouettes and the Downtown skyline beyond" },
  "dubai-festival-city": { src: "/images/areas/dubai-festival-city.jpg", alt: "Dubai Festival City's waterfront hotel towers and illuminated fountain show reflected in the creek at night" },
  "al-garhoud": { src: "/images/areas/al-garhoud.jpg", alt: "Steps leading into a courtyard between low-rise cream residential buildings" },
  "al-satwa": { src: "/images/areas/al-satwa.jpg", alt: "A night view over Sheikh Zayed Road interchanges and low-rise neighbourhoods towards the Burj Khalifa skyline" },
  "al-safa": { src: "/images/areas/al-safa.jpg", alt: "Aerial view of a green community sports field ringed by trees and floodlights, with low-rise beige villas behind it" },
  "arjan": { src: "/images/areas/arjan.jpg", alt: "Dubai Miracle Garden on a sunny day, with flower-covered sculptures, a dancer figure and an elephant-shaped topiary" },
  "dubai-south": { src: "/images/areas/dubai-south.jpg", alt: "The solar-panel canopies and trees of the Sustainability Pavilion at Expo City Dubai" },
  "jumeirah-golf-estates": { src: "/images/areas/jumeirah-golf-estates.jpg", alt: "An infinity pool terrace with shade structures and palms overlooking open green fairways under a blue sky" },
  "emirates-living": { src: "/images/areas/emirates-living.jpg", alt: "Beige villas among dense green trees and palms, with a lake and open land visible in the background" },
};

export const areaPhotos: Record<string, Photo> = Object.fromEntries(
  Object.entries(areaPhotoFiles).map(([slug, p]) => [slug, { ...p, src: imageUrl(p.src) }]),
);

export const postPhotos: Record<string, Photo> = {
  "dubai-municipality-free-bulky-waste-vs-private-junk-removal": photos.abandonedCouch,
  "how-junk-removal-is-priced-in-dubai": photos.packingBox,
  "dubai-move-out-junk-checklist": photos.labelledBox,
  "how-to-dispose-of-a-mattress-in-dubai": photos.bedroom,
  "e-waste-disposal-dubai": photos.electronics,
  "junk-pickup-from-a-dubai-tower": photos.nightTowers,
  "how-to-dispose-of-old-furniture-in-dubai": photos.furniturePile,
  "move-out-permit-dubai": photos.movingBoxesDoor,
  "junk-removal-quote-from-photo": photos.phonePhotoRoom,
  "renovation-waste-rules-dubai": photos.renovationRoom,
  "office-relocation-clearance-checklist-dubai": photos.emptyOffice,
  "how-to-dispose-of-a-fridge-in-dubai": photos.stainlessFridge,
  "leaving-dubai-for-good-furniture-and-appliances": photos.wrappedChair,
  "garden-waste-collection-dubai": photos.gardenBin,
  "villa-clearance-checklist-dubai": photos.boxesEmptyRoom,
  "skip-hire-vs-junk-removal-dubai": photos.skipContainer,
  "warehouse-clearance-dubai": photos.emptyRacking,
  "how-to-dispose-sofa-in-dubai": photos.lShapedSofa,
  "how-to-choose-junk-removal-company-dubai": photos.clipboardChecklist,
  "it-asset-disposal-dubai": photos.oldComputers,
  "clear-dubai-property-from-abroad": photos.keysHandover,
  "office-furniture-disposal-dubai": photos.officeDesks,
  "donate-furniture-dubai": photos.secondhandArmchairs,
  "dumping-furniture-next-to-bin-dubai-rules": photos.chairBesideBins,
  "how-to-dispose-washing-machine-in-dubai": photos.washerDrum,
  "moving-out-sale-dubai": photos.saleTag,
  "sell-used-furniture-dubai": photos.phoneSalePhoto,
  "free-zone-office-clearance-dubai": photos.officeTurnstiles,
  "wardrobe-disposal-dubai": photos.woodenWardrobes,
  "garage-clearance-dubai": photos.garageClutter,
  "movers-vs-junk-removal-dubai": photos.moversInterior,
  "old-kitchen-removal-dubai": photos.renovation,
};
