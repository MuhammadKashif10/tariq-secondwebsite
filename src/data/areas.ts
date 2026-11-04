import type { Faq } from "./services";

export const zones = [
  { id: "coast", name: "Marina & Coast", note: "Towers, beachfront flats and palm-lined villas" },
  { id: "centre", name: "City Centre", note: "High-rises, offices and strict loading rules" },
  { id: "communities", name: "Villa & Family Communities", note: "Gated communities, townhouses and gardens" },
  { id: "old", name: "Old Dubai", note: "Mid-rise blocks, shops and tight streets" },
  { id: "industrial", name: "Industrial & Commercial", note: "Warehouses, workshops and labour-heavy jobs" },
] as const;

export type ZoneId = (typeof zones)[number]["id"];

export type Area = {
  slug: string;
  name: string;
  zone: ZoneId;
  /** What the area is like, in terms of the jobs it produces. */
  intro: string;
  /** Practical getting-in-and-out notes specific to the area. */
  access: string;
  jobs: string[];
  services: string[];
  nearby: string[];
  faq: Faq;
};

export const areas: Area[] = [
  {
    slug: "dubai-marina",
    name: "Dubai Marina",
    zone: "coast",
    intro:
      "The Marina is nearly all towers, with a high turnover of tenants. Most of our jobs here are quick: a sofa swapped for a new one, a bed frame left behind, or a flat cleared before handover.",
    access:
      "Parking is the hard part. Bulky items normally have to leave through the service lift and the loading area, and many towers want the lift booked in advance. Tell us your tower's name, and ask reception about the lift rules before you book.",
    jobs: ["Single-item sofa and mattress pickups", "End-of-tenancy flat clearances", "Balcony and storeroom clear-outs"],
    services: ["sofa-removal", "move-out-clearance", "mattress-removal"],
    nearby: ["jumeirah-beach-residence", "jumeirah-lakes-towers", "palm-jumeirah"],
    faq: {
      q: "Can you collect from a high floor in a Dubai Marina tower?",
      a: "Yes. The floor matters less than the lift. Once your building confirms a service lift slot, the crew works to it, so a 50th-floor job can be just as simple as a 5th-floor one.",
    },
  },
  {
    slug: "jumeirah-beach-residence",
    name: "JBR",
    zone: "coast",
    intro:
      "JBR's beachfront blocks mix long-term residents with holiday lets. That means plenty of furniture refreshes, where landlords and short-stay operators replace worn sets between guests.",
    access:
      "The Walk gets busy, so we keep to loading points rather than the promenade itself. Mornings are normally easiest. Let us know your cluster (Sadaf, Bahar, Rimal, Murjan, Shams or Amwaj) to help the crew get to the right entrance.",
    jobs: ["Holiday-let furniture swaps", "Mattress replacement for short-stay flats", "Clearing out storage rooms"],
    services: ["furniture-removal", "mattress-removal", "junk-removal"],
    nearby: ["dubai-marina", "palm-jumeirah", "jumeirah-lakes-towers"],
    faq: {
      q: "Can you handle regular furniture swaps for my JBR holiday let?",
      a: "Yes. Send a photo before each changeover and we'll arrange the pickup around your check-out and check-in times.",
    },
  },
  {
    slug: "jumeirah-lakes-towers",
    name: "JLT",
    zone: "coast",
    intro:
      "JLT is half homes and half small offices, so we're as likely to clear a co-working room as a two-bed flat. Its clusters make it a practical area for single-item and small-office jobs alike.",
    access:
      "Give us your cluster letter and tower name. Roads around the lakes loop, so the right entrance saves real time. Commercial towers here often need goods lift approval, so check that with your building's management office.",
    jobs: ["Small office clearances", "Flat move-outs", "Old desks and chairs"],
    services: ["office-clearance", "furniture-removal", "e-waste-removal"],
    nearby: ["dubai-marina", "jumeirah-beach-residence", "al-barsha"],
    faq: {
      q: "Do you clear small offices in JLT?",
      a: "Yes. Even a single room of desks and old printers is fine. Let us know what your tower requires for access and we'll work to those rules, including after hours where allowed.",
    },
  },
  {
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    zone: "coast",
    intro:
      "On the Palm, the work is split between the Shoreline apartments on the trunk and the villas on the fronds. Villa jobs lean towards garden furniture that has weathered in the salt air and full-property refreshes.",
    access:
      "Frond villas usually mean security checks at the entrance, so tell the gate or your community team when we're due. In apartment buildings, we'll need the service lift. We handle high-end interiors with corner and floor protection.",
    jobs: ["Outdoor furniture damaged by sea air", "Villa furniture refreshes", "Pre-sale clearances"],
    services: ["house-villa-clearance", "furniture-removal", "garden-waste-removal"],
    nearby: ["dubai-marina", "jumeirah-beach-residence", "umm-suqeim"],
    faq: {
      q: "Do you need a gate pass for a Palm Jumeirah villa?",
      a: "Access depends on your frond and community rules. Usually you just need to tell security we're coming. Ask us for the vehicle and crew details if you need to register them in advance.",
    },
  },
  {
    slug: "jumeirah",
    name: "Jumeirah",
    zone: "coast",
    intro:
      "Jumeirah's older standalone villas have big gardens, big majlis rooms and decades of accumulated belongings. A clearance here often means a garage, a roof store and an outbuilding as well as the house.",
    access:
      "Most villas have street access, which makes loading easier than in the towers. Narrower side roads can limit the size of truck, so a photo of the street outside helps us send the right vehicle.",
    jobs: ["Whole-villa clearances", "Garden and palm frond removal", "Majlis seating removal"],
    services: ["house-villa-clearance", "garden-waste-removal", "sofa-removal"],
    nearby: ["umm-suqeim", "downtown-dubai", "al-quoz"],
    faq: {
      q: "Can you clear a long-occupied villa in Jumeirah?",
      a: "Yes. For a full villa we'll agree a room-by-room plan first, and you can walk us through it in person or on a video call before you get your fixed quote.",
    },
  },
  {
    slug: "umm-suqeim",
    name: "Umm Suqeim",
    zone: "coast",
    intro:
      "Family villas near the beach generate steady garden and storage work here: trampolines the kids outgrew, tired outdoor sets and garages that have run out of space.",
    access:
      "Street parking is usually possible right outside, so jobs tend to run quickly. Mid-morning is a good time to avoid school traffic. If you're on a narrow side road, send a photo so we can plan the vehicle.",
    jobs: ["Garage clear-outs", "Kids' play equipment", "Garden waste after trimming"],
    services: ["garden-waste-removal", "junk-removal", "furniture-removal"],
    nearby: ["jumeirah", "al-barsha", "al-quoz"],
    faq: {
      q: "Do you remove trampolines and swing sets in Umm Suqeim?",
      a: "Yes. We'll take them apart and carry them out through the gate. If something is set in concrete, tell us beforehand so we can plan for it.",
    },
  },
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    zone: "centre",
    intro:
      "Downtown's premium high-rises call for tidy, well-organised work. Jobs here are usually single pieces or high-end flat refreshes, and the priority is getting in and out with no marks on the walls.",
    access:
      "Building rules are strict here. Expect service lift bookings, set working hours, and possibly a contractor or move permit from community management. Check with your building early, because a same-day job isn't always possible here.",
    jobs: ["Designer sofa replacements", "Flat refreshes", "Pre-handover clearance"],
    services: ["sofa-removal", "move-out-clearance", "furniture-removal"],
    nearby: ["business-bay", "difc", "jumeirah"],
    faq: {
      q: "Why might a Downtown Dubai pickup need more notice?",
      a: "Many buildings here need a lift booking or a permit before bulky items can move. Once you have that slot, we'll book the crew to match it.",
    },
  },
  {
    slug: "business-bay",
    name: "Business Bay",
    zone: "centre",
    intro:
      "Business Bay is where residential towers meet office blocks along the canal. Companies move, downsize and hand back units here constantly, so office clearances sit alongside flat move-outs on our schedule.",
    access:
      "Traffic builds at peak times, and many commercial towers only allow bulky moves outside office hours. If you've got an evening or weekend window from your landlord, send it over and we'll plan the job around it.",
    jobs: ["Office downsizing", "Lease-end handovers", "Flat move-outs"],
    services: ["office-clearance", "e-waste-removal", "move-out-clearance"],
    nearby: ["downtown-dubai", "difc", "al-quoz"],
    faq: {
      q: "Can you clear my Business Bay office outside working hours?",
      a: "Yes, as long as your building allows it. Evenings and weekends are common for commercial towers here, so tell us your landlord's rules and we'll schedule to suit.",
    },
  },
  {
    slug: "difc",
    name: "DIFC",
    zone: "centre",
    intro:
      "DIFC jobs are mostly commercial: tidy exits from serviced offices, boardroom furniture, and IT equipment after a refresh. There are residential towers too, where the standards are just as exacting.",
    access:
      "Expect tight controls on loading bays and goods lifts, plus security registration for crews. Send us your building's contractor requirements early, because passes can take time to arrange.",
    jobs: ["Serviced office exits", "Boardroom furniture", "IT equipment pickups"],
    services: ["office-clearance", "e-waste-removal", "furniture-removal"],
    nearby: ["downtown-dubai", "business-bay", "jumeirah"],
    faq: {
      q: "What should DIFC offices do about old IT equipment?",
      a: "Wipe or destroy data with a specialist first, since we collect hardware but don't provide data destruction. We can then remove the equipment separately from general waste.",
    },
  },
  {
    slug: "al-barsha",
    name: "Al Barsha",
    zone: "centre",
    intro:
      "Al Barsha mixes villas, low-rise apartments and shops, and the jobs are just as mixed. You might see a villa garage, a shop refit and a shared-flat move-out on the same street.",
    access:
      "Most buildings are low-rise and easy to reach, although Al Barsha 1 can be busy near the mall at weekends. Weekday mornings are usually the smoothest time for bigger loads.",
    jobs: ["Villa garage clear-outs", "Shop refits", "Apartment move-outs"],
    services: ["junk-removal", "furniture-removal", "construction-debris-removal"],
    nearby: ["al-quoz", "umm-suqeim", "jumeirah-lakes-towers"],
    faq: {
      q: "Do you collect from shops as well as homes in Al Barsha?",
      a: "Yes. Old shelving, counters and refit waste are all fine. Let us know if the shop needs the work done outside trading hours.",
    },
  },
  {
    slug: "jumeirah-village-circle",
    name: "JVC",
    zone: "communities",
    intro:
      "JVC has grown quickly, with mid-rise apartments and townhouses filling with young families. We see a lot of first-flat furniture being upgraded and a lot of packing waste from new moves.",
    access:
      "Most buildings are mid-rise with simple access, but construction traffic can slow the inner roads. Share a Google Maps pin rather than a building name, because the circle's roads can catch out even experienced drivers.",
    jobs: ["Starter furniture upgrades", "Move-in packing waste", "Townhouse garage clear-outs"],
    services: ["furniture-removal", "sofa-removal", "junk-removal"],
    nearby: ["jumeirah-village-triangle", "dubai-sports-city", "al-barsha"],
    faq: {
      q: "Why do you ask for a location pin in JVC?",
      a: "Buildings here are spread across a looping road network, and many names are similar. A pin gets the crew to the correct entrance first time.",
    },
  },
  {
    slug: "jumeirah-village-triangle",
    name: "JVT",
    zone: "communities",
    intro:
      "JVT is quieter than its neighbour, with more villas and townhouses. Gardens and garages are the usual reason to call, along with whole-home clear-outs when families move.",
    access:
      "Villa streets are generally easy to reach, and we can back a truck close to the gate. Tell us your district number, which helps the crew plan the route.",
    jobs: ["Villa garage clearances", "Garden waste", "Family move-outs"],
    services: ["garden-waste-removal", "house-villa-clearance", "junk-removal"],
    nearby: ["jumeirah-village-circle", "al-furjan", "dubai-sports-city"],
    faq: {
      q: "Can you take garden waste and furniture in the same JVT trip?",
      a: "Yes, and it's usually better value than two separate bookings. Show us both in your photos and we'll quote it as a single job.",
    },
  },
  {
    slug: "dubai-hills-estate",
    name: "Dubai Hills Estate",
    zone: "communities",
    intro:
      "From apartments near the mall to large villas on the golf course, Dubai Hills is a well-kept community where residents upgrade often. Outdoor furniture and post-renovation waste are common calls.",
    access:
      "Villa neighbourhoods have gated entry, so tell security when we're due. Communities like this usually have firm rules about work hours and contractor access, so check with your community manager.",
    jobs: ["Post-renovation debris", "Outdoor furniture removal", "Villa furniture refreshes"],
    services: ["construction-debris-removal", "furniture-removal", "garden-waste-removal"],
    nearby: ["al-barsha", "al-quoz", "arabian-ranches"],
    faq: {
      q: "Can you remove renovation waste from a Dubai Hills villa?",
      a: "Yes, if it's a residential-scale job and the debris is bagged. Check your community's contractor rules first, then send photos so we can size the truck.",
    },
  },
  {
    slug: "arabian-ranches",
    name: "Arabian Ranches",
    zone: "communities",
    intro:
      "The Ranches are established now, and many villas have been lived in for well over a decade. That shows in the jobs: full garages, tired garden landscaping, and clearances before a sale or a move overseas.",
    access:
      "This is a gated community, so we'll need access arranged through security at the gate. Villa streets are wide enough for a truck, and pickups are usually simple once we're inside.",
    jobs: ["Pre-sale villa clearance", "Garden overhauls", "Packed garages"],
    services: ["house-villa-clearance", "garden-waste-removal", "junk-removal"],
    nearby: ["motor-city", "dubai-sports-city", "damac-hills"],
    faq: {
      q: "How do you get into Arabian Ranches for a pickup?",
      a: "Let the gate or your community team know we're coming. Tell us what they need, such as the vehicle plate number or driver's name, and we'll send it before the day.",
    },
  },
  {
    slug: "al-furjan",
    name: "Al Furjan",
    zone: "communities",
    intro:
      "Al Furjan's townhouses and villas, along with its newer apartment blocks, keep us busy with family-size jobs. Common examples are garage storage, old appliances and move-outs near the Metro.",
    access:
      "Streets are laid out in clear phases and are easy to work in. Give us your phase or a location pin. In apartment blocks, ask building management if you need a lift slot for larger items.",
    jobs: ["Townhouse garage clear-outs", "Appliance disposal", "Family move-outs"],
    services: ["appliance-removal", "junk-removal", "move-out-clearance"],
    nearby: ["jumeirah-village-triangle", "jebel-ali", "dubai-investments-park"],
    faq: {
      q: "Can you carry a fridge down from a townhouse upper floor in Al Furjan?",
      a: "Yes. Stair carries are routine, but please empty and defrost the fridge the day before so it's lighter and doesn't leak.",
    },
  },
  {
    slug: "motor-city",
    name: "Motor City",
    zone: "communities",
    intro:
      "Motor City is a compact community with low-rise apartments and townhouses. Tenants change regularly, and small to mid-size removals make up most of the work.",
    access:
      "Low-rise buildings make carrying quick, and street access is usually good. Some apartment blocks still want notice for bulky items, so check with your building manager.",
    jobs: ["Apartment move-outs", "Sofa and bed pickups", "Balcony clear-outs"],
    services: ["move-out-clearance", "sofa-removal", "mattress-removal"],
    nearby: ["dubai-sports-city", "arabian-ranches", "damac-hills"],
    faq: {
      q: "Can you combine a Motor City pickup with a nearby job?",
      a: "When we already have a crew in the area we can often offer a better slot, so it's worth asking if your timing is flexible.",
    },
  },
  {
    slug: "dubai-sports-city",
    name: "Dubai Sports City",
    zone: "communities",
    intro:
      "Mid-rise towers around the stadium and golf course mean mostly apartment work here. Think worn-out beds, gym equipment nobody's using and furniture left by the last tenant.",
    access:
      "Parking is usually easier than in the Marina, although event days can get busy. Some buildings have small lifts, so if yours does, send us the dimensions before a big sofa or wardrobe job.",
    jobs: ["Exercise equipment removal", "Bed and mattress pickups", "Landlord clear-outs"],
    services: ["furniture-removal", "mattress-removal", "junk-removal"],
    nearby: ["motor-city", "jumeirah-village-circle", "arabian-ranches"],
    faq: {
      q: "Can you remove a treadmill from a Dubai Sports City flat?",
      a: "Yes. Treadmills are heavy, so we'll usually send two people and fold or dismantle the machine where it's possible.",
    },
  },
  {
    slug: "damac-hills",
    name: "DAMAC Hills",
    zone: "communities",
    intro:
      "DAMAC Hills wraps around a golf course, with villas, townhouses and apartments. Residents mostly call about garden clear-ups, unwanted outdoor sets and full-home moves.",
    access:
      "Gated entry applies, so please let security know our arrival time. Villa clusters have a lot of similar streets, and a location pin avoids any delays.",
    jobs: ["Garden and outdoor clear-ups", "Villa move-outs", "Old appliance pickups"],
    services: ["garden-waste-removal", "house-villa-clearance", "appliance-removal"],
    nearby: ["arabian-ranches", "motor-city", "town-square"],
    faq: {
      q: "Do you clear villas in DAMAC Hills before a handover?",
      a: "Yes. Give us your handover date and we'll work back from it, leaving time to fit around any community access rules.",
    },
  },
  {
    slug: "town-square",
    name: "Town Square",
    zone: "communities",
    intro:
      "Town Square's townhouses and apartments are popular with young families. We mainly remove baby and kids' furniture that's been outgrown, plus sofas and items replaced after a move.",
    access:
      "It sits further out along Al Qudra Road, so we try to group jobs in the area. If you're flexible on timing, tell us, as it may get you a better slot.",
    jobs: ["Outgrown kids' furniture", "Sofa replacements", "Townhouse storage clear-outs"],
    services: ["furniture-removal", "sofa-removal", "junk-removal"],
    nearby: ["damac-hills", "arabian-ranches", "motor-city"],
    faq: {
      q: "Do you cover Town Square even though it's further out?",
      a: "Yes. Distance is built into your fixed quote, so you'll see the whole price before you decide.",
    },
  },
  {
    slug: "mirdif",
    name: "Mirdif",
    zone: "communities",
    intro:
      "Mirdif is one of Dubai's established villa suburbs on the east side. Family homes here hold years of furniture, and big gardens produce regular green waste.",
    access:
      "Street-level villas make for quick loading, and there's normally space to park the truck at the gate. Shared-villa compounds may need a neighbour's car moved, so a heads-up helps.",
    jobs: ["Family villa clearances", "Garden waste", "Old air-conditioning units"],
    services: ["house-villa-clearance", "garden-waste-removal", "appliance-removal"],
    nearby: ["al-qusais", "deira"],
    faq: {
      q: "Can you clear a shared villa compound in Mirdif?",
      a: "Yes. Just show us which items are yours, and make sure the crew can get to them without blocking your neighbours.",
    },
  },
  {
    slug: "deira",
    name: "Deira",
    zone: "old",
    intro:
      "Deira runs on trade. Alongside older family flats, we clear out shop stock, storerooms and small-business premises around the souks and commercial streets.",
    access:
      "Streets are narrow and parking is scarce, so a smaller truck and an early start usually work best. Older buildings may have small lifts or none at all, so tell us the floor number when you get in touch.",
    jobs: ["Shop and storeroom clearances", "Older flat clearances", "Commercial shelving"],
    services: ["junk-removal", "office-clearance", "furniture-removal"],
    nearby: ["bur-dubai", "al-qusais", "al-karama"],
    faq: {
      q: "Can you collect from a Deira building with no lift?",
      a: "Yes. We carry by stairs. Let us know the floor when you get in touch, since it decides the crew size and the price.",
    },
  },
  {
    slug: "bur-dubai",
    name: "Bur Dubai",
    zone: "old",
    intro:
      "Bur Dubai's older apartment blocks house long-term tenants and plenty of small businesses. After years in one flat, a clear-out can mean heavy traditional furniture and very full storerooms.",
    access:
      "Traffic and parking are tight, particularly in the evenings, so we usually aim for mornings. Older lifts can be small, so large wardrobes may need dismantling or a stair carry.",
    jobs: ["Long-tenancy flat clearances", "Heavy wooden furniture", "Small business clear-outs"],
    services: ["furniture-removal", "move-out-clearance", "junk-removal"],
    nearby: ["al-karama", "deira", "downtown-dubai"],
    faq: {
      q: "Can you remove solid wood furniture from an older Bur Dubai flat?",
      a: "Yes. We'll dismantle what we can so it fits the lift or stairs, and send enough people for anything that has to go out whole.",
    },
  },
  {
    slug: "al-karama",
    name: "Al Karama",
    zone: "old",
    intro:
      "Karama's low-rise blocks and busy shopfronts create compact jobs, including single items from a flat, shop refits and restaurant equipment that's reached the end of its life.",
    access:
      "Inner roads are tight and parking is at a premium. A location pin and a clear idea of the nearest loading spot make all the difference. Older blocks often have stairs, so tell us the floor.",
    jobs: ["Small flat clear-outs", "Shop refits", "Old restaurant equipment"],
    services: ["junk-removal", "appliance-removal", "furniture-removal"],
    nearby: ["bur-dubai", "deira", "downtown-dubai"],
    faq: {
      q: "Do you take old restaurant equipment from Al Karama?",
      a: "Yes, once it's been cleaned out and disconnected by your technician. Tell us about grease traps or gas connections, because those need specialist attention first.",
    },
  },
  {
    slug: "al-qusais",
    name: "Al Qusais",
    zone: "old",
    intro:
      "Al Qusais mixes apartments, villas and an industrial area near the Sharjah border. We're just as likely to collect from a family flat as from a small warehouse or workshop.",
    access:
      "Border traffic peaks in the morning and evening, so we schedule around it. Let us know if you're in the residential or the industrial side, as that decides the truck we send.",
    jobs: ["Apartment clear-outs", "Workshop waste", "Warehouse shelving"],
    services: ["junk-removal", "furniture-removal", "appliance-removal"],
    nearby: ["deira", "mirdif"],
    faq: {
      q: "Do you cover Al Qusais Industrial Area?",
      a: "Yes. Warehouse and workshop clear-outs are welcome. Send photos showing the volume and any heavy items.",
    },
  },
  {
    slug: "al-quoz",
    name: "Al Quoz",
    zone: "industrial",
    intro:
      "Al Quoz combines warehouses, workshops, galleries and studios. Jobs here tend to be big and practical: old racking, pallets, event build leftovers, and warehouse units being handed back.",
    access:
      "Loading is usually straightforward, with yard or roller-door access. Tell us about any hazardous stock or chemicals upfront, because those can't go in a general load and need a specialist.",
    jobs: ["Warehouse clear-outs", "Event and exhibition leftovers", "Racking and pallets"],
    services: ["junk-removal", "office-clearance", "construction-debris-removal"],
    nearby: ["al-barsha", "business-bay", "jumeirah"],
    faq: {
      q: "Can you clear a whole warehouse unit in Al Quoz?",
      a: "We can handle general warehouse contents, often over several loads. For a large unit we'll want to see it first, on site or by video, so that the fixed quote is accurate.",
    },
  },
  {
    slug: "dubai-investments-park",
    name: "Dubai Investments Park",
    zone: "industrial",
    intro:
      "DIP has both sides of Dubai life: factories and warehouses on one hand, and family homes in the Green Community and nearby apartments on the other.",
    access:
      "Wide roads make truck access easy on the commercial side. For residential addresses in gated communities, tell security when we're coming so the crew isn't held at the gate.",
    jobs: ["Factory and warehouse clear-outs", "Green Community villa jobs", "Office furniture"],
    services: ["office-clearance", "house-villa-clearance", "e-waste-removal"],
    nearby: ["jebel-ali", "al-furjan"],
    faq: {
      q: "Do you serve homes in Dubai Investments Park or only businesses?",
      a: "Both. Residential pickups in DIP are as common as commercial work. Just tell us which you need, and we'll send the right truck.",
    },
  },
  {
    slug: "jebel-ali",
    name: "Jebel Ali",
    zone: "industrial",
    intro:
      "From Jebel Ali Village's family homes to the industrial areas and free zone, this is a wide patch. Commercial clearances here can be sizeable, while residential jobs are often villa-based.",
    access:
      "Free zone sites need gate passes, which can take a while, so start the process early and tell us what's needed for the crew and vehicle. Residential streets in the Village are straightforward.",
    jobs: ["Free zone office clearances", "Warehouse clear-outs", "Villa garden waste"],
    services: ["office-clearance", "junk-removal", "garden-waste-removal"],
    nearby: ["dubai-investments-park", "al-furjan"],
    faq: {
      q: "Can you collect from inside the free zone at Jebel Ali?",
      a: "Yes, once access has been approved. Your company usually applies for the pass. We'll send over the crew and vehicle details needed for the application.",
    },
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
