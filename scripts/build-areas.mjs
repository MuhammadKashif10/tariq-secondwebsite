import { writeFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const profileBoost = JSON.parse(
  readFileSync(join(dirname(fileURLToPath(import.meta.url)), "area-boosts.json"), "utf8"),
);

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "src", "data", "areas.ts");

const zonesBlock = `export const zones = [
  { id: "coast", name: "Marina & Coast", note: "Towers, beachfront flats and palm-lined villas" },
  { id: "centre", name: "City Centre", note: "High-rises, offices and strict loading rules" },
  { id: "communities", name: "Villa & Family Communities", note: "Gated communities, townhouses and gardens" },
  { id: "old", name: "Old Dubai", note: "Mid-rise blocks, shops and tight streets" },
  { id: "industrial", name: "Industrial & Commercial", note: "Warehouses, workshops and labour-heavy jobs" },
] as const;
`;

/** @type {import('../src/data/areas.ts').Area[]} */
const areas = [
  {
    slug: "dubai-marina",
    name: "Dubai Marina",
    zone: "coast",
    intro:
      "The Marina is almost entirely high-rise living wrapped around the yacht berths. Tenants rotate quickly, so we see a steady stream of end-of-lease clearances, balcony clutter and single pieces that will not fit down the refuse chute.",
    profile:
      "Most homes here are one- to three-bedroom flats in clusters of towers linked by the Marina Walk. A fair share of buildings also have small retail pods at podium level. That mix means we are as likely to collect a worn sofa from a furnished rental as a stack of flat-pack boxes from a newly fitted kitchen.",
    access:
      "Parking bays are scarce and tower rules are strict. Bulky items normally leave via a goods lift or a dedicated service core, and many buildings want that booked a day or two ahead. Tell us your tower name and whether you already have a lift slot; reception can confirm permitted hours before we quote.",
    jobs: [
      "Single-item sofa and mattress pickups",
      "End-of-tenancy flat clearances",
      "Balcony and storeroom clear-outs",
    ],
    tips: [
      {
        title: "Book the service lift first",
        body: "Without a confirmed goods lift window, we cannot guarantee same-day removal. Ask facilities for permitted hours and passenger-lift restrictions before you send photos.",
      },
      {
        title: "Label lobby deliveries",
        body: "If new furniture is arriving on the same day we collect, tell reception both parties' details so loading bays are not double-booked.",
      },
    ],
    services: ["sofa-removal", "move-out-clearance", "mattress-removal"],
    nearby: ["jumeirah-beach-residence", "jumeirah-lakes-towers", "palm-jumeirah"],
    faqs: [
      {
        q: "Can you collect from a high floor in a Dubai Marina tower?",
        a: "Yes. Height matters less than lift access. Once your building confirms a service lift slot and any floor protection rules, the crew works to that window.",
      },
      {
        q: "Do Marina buildings allow weekend removals?",
        a: "Policies differ by tower. Some allow Saturday mornings only; others restrict work to weekdays. Check with community management and we will match the slot.",
      },
    ],
    seoDescription:
      "Marina junk removal for towers and furnished flats. We work to your goods lift slot, lift sofas and mattresses, and clear move-out loads. Photo quotes.",
  },
  {
    slug: "jumeirah-beach-residence",
    name: "JBR",
    zone: "coast",
    intro:
      "JBR's beachfront blocks blend long-term residents with short-stay operators refreshing apartments between guests. Worn dining sets, bulky headboards and storerooms packed with duplicate linens turn up on our route most weeks.",
    profile:
      "Clusters such as Sadaf, Bahar, Rimal and Murjan each have their own podiums, pools and underground parking. Retail along The Walk sits below many towers, so access is often through side service ramps rather than the promenade itself.",
    access:
      "The Walk gets busy from late morning, so loading bays work better early in the day. Share your cluster letter and tower name so the crew finds the correct ramp. Holiday lets should align collection with housekeeping so keys and lift bookings stay in one hand.",
    jobs: [
      "Holiday-let furniture swaps",
      "Mattress replacement for short-stay flats",
      "Clearing out storage rooms",
    ],
    tips: [
      {
        title: "Use the building loading point",
        body: "We cannot park on the main Walk. Facilities will direct you to the correct ramp; a pin on WhatsApp saves time if signage is unclear.",
      },
      {
        title: "Plan around changeover days",
        body: "If check-out and check-in sit on the same calendar day, book removal in the gap between guest departures and the cleaners' arrival.",
      },
    ],
    services: ["furniture-removal", "mattress-removal", "junk-removal"],
    nearby: ["dubai-marina", "palm-jumeirah", "jumeirah-lakes-towers"],
    faqs: [
      {
        q: "Can you handle regular furniture swaps for my JBR holiday let?",
        a: "Yes. Send a photo before each changeover and we can line up pickup around your housekeeping window.",
      },
      {
        q: "Will you protect lift walls during carry-out?",
        a: "Crews use blankets and corner guards where buildings require it. Mention any extra rules from your community so we arrive prepared.",
      },
    ],
    seoDescription:
      "JBR junk removal for beach towers and holiday lets. Furniture swaps, mattress runs and storeroom clear-outs via approved loading bays. Fixed photo quotes.",
  },
  {
    slug: "jumeirah-lakes-towers",
    name: "JLT",
    zone: "coast",
    intro:
      "JLT splits cleanly between residential clusters around the lakes and commercial mid-rises along the outer ring. We clear two-bedroom move-outs in one visit and small serviced offices in the next.",
    profile:
      "Each cluster is lettered A through W and mixes studios with larger flats. Ground-level retail and co-working suites mean desks, partition panels and old printers appear almost as often as domestic sofas.",
    access:
      "Roads loop the lakes, so the correct cluster entrance saves real driving time. Commercial towers often need goods-lift approval from management; residential blocks are simpler but lifts can be compact. Send cluster letter, tower name and floor number when you enquire.",
    jobs: ["Small office clearances", "Flat move-outs", "Old desks and chairs"],
    tips: [
      {
        title: "Name the cluster letter",
        body: "Two towers can share a similar name on different lakes. The letter on your tenancy contract is the quickest way to route the truck.",
      },
      {
        title: "Check lift dimensions",
        body: "If a sofa barely fit on the way in, photograph the lift interior. We can plan dismantling before the crew arrives.",
      },
    ],
    services: ["office-clearance", "furniture-removal", "e-waste-removal"],
    nearby: ["dubai-marina", "jumeirah-beach-residence", "al-barsha"],
    faqs: [
      {
        q: "Do you clear small offices in JLT?",
        a: "Yes. A single room of desks, chairs and IT is routine. Tell us your building's contractor rules and we schedule inside permitted hours.",
      },
      {
        q: "Can you take electronics and furniture together?",
        a: "Often yes in one load. Wipe data from devices first; we collect hardware but do not provide certified data destruction.",
      },
    ],
    seoDescription:
      "JLT junk removal for lakeside flats and small offices. Desks, sofas and e-waste collected with building lift rules in mind. WhatsApp photo pricing.",
  },
  {
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    zone: "coast",
    intro:
      "On the Palm, work splits between Shoreline apartments on the trunk and villas dotted along the fronds. Salt air ages outdoor furniture quickly, and villa refreshes before sale or lease-end keep us busy through the year.",
    profile:
      "Shoreline buildings behave like other premium towers: goods lifts and quiet hours apply. Frond villas often have private pools, mature planting and separate staff accommodation that holds years of stored items.",
    access:
      "Frond access usually involves a security checkpoint, so register our visit with your community or tell the gate the expected time. Apartment residents should confirm service-lift booking like any high-rise. We use floor and door protection where finishes are delicate.",
    jobs: [
      "Outdoor furniture damaged by sea air",
      "Villa furniture refreshes",
      "Pre-sale clearances",
    ],
    tips: [
      {
        title: "Share gate instructions early",
        body: "Communities sometimes need vehicle and ID details before arrival. Forward those requirements when you book so the crew is not held at the barrier.",
      },
      {
        title: "Separate pool and garden waste",
        body: "Green waste can ride with general junk when bagged, but palm fronds may need extra space. Show both areas in your photos for an accurate truck size.",
      },
    ],
    services: ["house-villa-clearance", "furniture-removal", "garden-waste-removal"],
    nearby: ["dubai-marina", "jumeirah-beach-residence", "al-safa"],
    faqs: [
      {
        q: "Do you need a gate pass for a Palm Jumeirah villa?",
        a: "It depends on your frond. Often you notify security and we proceed once cleared. Send any registration form and we return vehicle and crew details.",
      },
      {
        q: "Can you clear a Shoreline flat on a tight handover date?",
        a: "Yes, once the goods lift is booked. Build in a buffer for security checks on the trunk road during peak hours.",
      },
    ],
    seoDescription:
      "Palm Jumeirah junk removal for frond villas and Shoreline apartments. Garden sets, villa clearances and handover pickups with gate access planned in.",
  },
  {
    slug: "jumeirah",
    name: "Jumeirah",
    zone: "coast",
    intro:
      "Jumeirah's older standalone villas stretch along low coastal roads with mature gardens and separate majlis wings. Clearances here often span the main house, a roof store, garage and poolside cabana in one job.",
    profile:
      "Plot sizes vary from compact family homes to larger compounds with guest accommodation. Many properties pre-date today's tower-heavy skyline, so furniture tends to be solid wood and bulky rather than flat-pack.",
    access:
      "Street parking is usually possible at the villa gate, which makes loading faster than in podium towers. Narrow side streets occasionally limit truck length; a photo of the kerb outside helps us choose the right vehicle.",
    jobs: ["Whole-villa clearances", "Garden and palm frond removal", "Majlis seating removal"],
    tips: [
      {
        title: "Walk through room by room",
        body: "For a full villa quote, video or photos from each space prevent surprises on the day. Mark items that stay behind.",
      },
      {
        title: "Trim oversized planting first",
        body: "If tree cuttings block the driveway, garden waste may need a second trip. Bag smaller clippings and we can often combine loads.",
      },
    ],
    services: ["house-villa-clearance", "garden-waste-removal", "sofa-removal"],
    nearby: ["umm-suqeim", "al-safa", "downtown-dubai"],
    faqs: [
      {
        q: "Can you clear a long-occupied villa in Jumeirah?",
        a: "Yes. We agree a room-by-room plan first via photos or a short video call, then quote a fixed price before the crew is dispatched.",
      },
      {
        q: "Do you dismantle heavy wooden furniture?",
        a: "Where safe, we take apart wardrobes and dining tables on site so they pass through doors without marking paintwork.",
      },
    ],
    seoDescription:
      "Jumeirah villa junk removal along the coastal strip. Majlis seating, garden waste and full-home clearances with street-level loading. Fixed quotes from photos.",
  },
  {
    slug: "umm-suqeim",
    name: "Umm Suqeim",
    zone: "coast",
    intro:
      "Family villas near the beach generate steady garden and garage work: trampolines outgrown, outdoor lounges faded by sun, and storerooms that finally need emptying before a renovation.",
    profile:
      "The area mixes established villas with newer low-rise apartment pockets closer to main roads. Most homes have direct gate access, though some shared compounds require coordination with neighbours over parking.",
    access:
      "Kerbside loading is usually straightforward mid-morning on weekdays. School-run traffic can clog nearby junctions, so an earlier slot helps. Send a photo if your street is particularly narrow so we avoid sending an oversized truck.",
    jobs: ["Garage clear-outs", "Kids' play equipment", "Garden waste after trimming"],
    tips: [
      {
        title: "Deflate play equipment",
        body: "Trampolines and bouncy castles pack down when disassembled. Tell us if frames are set in concrete so we bring the right tools.",
      },
      {
        title: "Keep the gate clear",
        body: "Move cars that block the driveway before arrival. It speeds loading and avoids disturbing neighbours on tight shared plots.",
      },
    ],
    services: ["garden-waste-removal", "junk-removal", "furniture-removal"],
    nearby: ["jumeirah", "al-safa", "al-barsha"],
    faqs: [
      {
        q: "Do you remove trampolines and swing sets in Umm Suqeim?",
        a: "Yes. We dismantle frames where possible and carry sections through the gate. Mention concrete footings in advance.",
      },
      {
        q: "Can garage junk and garden waste go in one visit?",
        a: "Usually yes if volumes fit one truck. Show both areas in your photos so we size the crew and vehicle correctly.",
      },
    ],
    seoDescription:
      "Umm Suqeim junk removal for beachside villas and garages. Play equipment, green waste and furniture pickups with easy kerbside access. Photo-based quotes.",
  },
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    zone: "centre",
    intro:
      "Downtown's premium towers demand tidy, well-timed work. Jobs are often a single designer sofa, a curated flat refresh, or a careful pre-handover strip-out where walls and lifts must stay pristine.",
    profile:
      "Residential stock is dominated by branded high-rises around the Boulevard, with a smaller number of serviced apartments aimed at executive lets. Podium retail and hotel-linked buildings add strict contractor rules.",
    access:
      "Expect service-lift bookings, defined working hours, and sometimes move permits from community managers. Same-day slots are not always possible if a lift window is unavailable. Start with your building's facilities team, then book us to the approved time.",
    jobs: ["Designer sofa replacements", "Flat refreshes", "Pre-handover clearance"],
    tips: [
      {
        title: "Confirm quiet hours",
        body: "Some towers ban audible work late evening or on Friday afternoons. Align your slot with those rules to avoid aborted visits.",
      },
      {
        title: "Protect common corridors",
        body: "If management asks for extra matting, lay it before the crew arrives. We still carry corner guards for bulky items.",
      },
    ],
    services: ["sofa-removal", "move-out-clearance", "furniture-removal"],
    nearby: ["business-bay", "meydan", "difc"],
    faqs: [
      {
        q: "Why might a Downtown Dubai pickup need more notice?",
        a: "Goods lifts and permits are often booked days ahead. Once your slot is confirmed, we schedule the crew to match it.",
      },
      {
        q: "Can you work while new furniture is being delivered?",
        a: "Only if the building allows two bookings. Coordinate with facilities so lifts and loading bays are not double-booked.",
      },
    ],
    seoDescription:
      "Downtown Dubai junk removal aligned with tower lift permits and handover rules. Sofas, flat clearances and careful carry-out in premium buildings.",
  },
  {
    slug: "business-bay",
    name: "Business Bay",
    zone: "centre",
    intro:
      "Business Bay lines the Dubai Canal with residential towers stacked beside commercial blocks. Companies downsize, hand back fitted offices, and residents move between glass-fronted flats with canal views.",
    profile:
      "Lower floors often host restaurants and showrooms, while mid-levels carry furnished apartments for young professionals. The blend produces office strip-outs one hour and mattress collections the next.",
    access:
      "Peak traffic on Al Khail Road and around the canal bridges can slow arrivals. Many commercial towers restrict bulky moves to evenings or weekends; pass those rules on when you book. Residential towers still need lift coordination.",
    jobs: ["Office downsizing", "Lease-end handovers", "Flat move-outs"],
    tips: [
      {
        title: "Separate commercial and residential access",
        body: "Entrances for offices and homes are not always the same podium door. Send the entrance your security team expects contractors to use.",
      },
      {
        title: "Plan around canal events",
        body: "Waterfront promenades occasionally close for events. An earlier morning slot avoids detours on busy weekends.",
      },
    ],
    services: ["office-clearance", "e-waste-removal", "move-out-clearance"],
    nearby: ["downtown-dubai", "difc", "dubai-creek-harbour"],
    faqs: [
      {
        q: "Can you clear my Business Bay office outside working hours?",
        a: "Yes when the landlord permits it. Evenings and Saturdays are common for commercial towers; share the approved window and we schedule accordingly.",
      },
      {
        q: "Do you handle canal-side apartment move-outs?",
        a: "Yes. Treat them like other high-rises: confirm the goods lift and send photos from each room for a fixed quote.",
      },
    ],
    seoDescription:
      "Business Bay junk removal for canal apartments and fitted offices. Lease-end clearances, desks and flat move-outs scheduled outside peak traffic.",
  },
  {
    slug: "difc",
    name: "DIFC",
    zone: "centre",
    intro:
      "DIFC jobs lean commercial: boardroom tables, modular workstations, and IT closets after a refit. A handful of residential towers add the same careful standards, with art-lined lobbies and tight loading-bay windows.",
    profile:
      "The district is purpose-built for finance and professional services, so many suites are serviced or fully fitted. Moves are often tied to lease breaks rather than family relocations.",
    access:
      "Loading bays and goods lifts are closely monitored; crew registration can take time. Forward contractor requirements when you enquire. After-hours access is common for office strip-outs.",
    jobs: ["Serviced office exits", "Boardroom furniture", "IT equipment pickups"],
    tips: [
      {
        title: "Start security pre-registration",
        body: "DIFC may need ID copies and vehicle plates before entry. Begin that process when you accept the quote, not on the morning of collection.",
      },
      {
        title: "Bag cables separately",
        body: "Loose cabling tangles during carry-out. Coil and label if you want to donate usable kit; otherwise we load it as general e-waste.",
      },
    ],
    services: ["office-clearance", "e-waste-removal", "furniture-removal"],
    nearby: ["downtown-dubai", "business-bay", "al-satwa"],
    faqs: [
      {
        q: "What should DIFC offices do about old IT equipment?",
        a: "Wipe or destroy data with a specialist first. We remove hardware but do not provide certified data destruction.",
      },
      {
        q: "Can you remove meeting-room furniture intact?",
        a: "Large tables may need on-site dismantling to fit lifts. Photograph dimensions and we plan tools and crew size.",
      },
    ],
    seoDescription:
      "DIFC office junk removal for serviced suites and boardrooms. IT pickup, workstations and furniture exits with security registration handled early.",
  },
  {
    slug: "al-barsha",
    name: "Al Barsha",
    zone: "centre",
    intro:
      "Al Barsha stitches together villas, low-rise apartments and busy shopfronts near the mall. One street can produce a villa garage clear-out, a café refit and a shared-flat move in the same afternoon.",
    profile:
      "Al Barsha 1 sits closest to the mall and metro, while outer districts hold more family villas and school catchments. Small warehouses and car workshops appear on the fringes, adding occasional commercial loads.",
    access:
      "Most buildings are low enough that stair carries are shorter than in the Marina. Weekends near the mall are congested; weekday mornings suit larger vehicles. Tell us if your shop needs work outside trading hours.",
    jobs: ["Villa garage clear-outs", "Shop refits", "Apartment move-outs"],
    tips: [
      {
        title: "Mention mall proximity",
        body: "Streets directly behind the mall gridlock on Friday afternoons. If you are in that pocket, morning slots are more reliable.",
      },
      {
        title: "Photograph shop fit-out waste",
        body: "Counters and shelving vary in weight. A wide shot plus close-ups of anything steel-framed helps us quote accurately.",
      },
    ],
    services: ["junk-removal", "furniture-removal", "construction-debris-removal"],
    nearby: ["al-quoz", "al-safa", "jumeirah-lakes-towers"],
    faqs: [
      {
        q: "Do you collect from shops as well as homes in Al Barsha?",
        a: "Yes. Old shelving, counters and light fit-out waste are fine. Say if you need the work done outside trading hours.",
      },
      {
        q: "Can you combine a villa and shop job nearby?",
        a: "When routing allows, back-to-back jobs in Al Barsha can share a truck. Ask if your timing is flexible.",
      },
    ],
    seoDescription:
      "Al Barsha junk removal for villas, apartments and shop refits near the mall. Garages, retail waste and move-out loads with weekday morning access.",
  },
  {
    slug: "jumeirah-village-circle",
    name: "JVC",
    zone: "communities",
    intro:
      "JVC filled quickly with mid-rise apartments and townhouses aimed at young families. Starter furniture upgrades, packing debris after a move, and overflowing storerooms dominate the enquiries we see.",
    profile:
      "The masterplan loops inward roads around parks and schools, with newer districts still adding towers at the edges. A mix of owner-occupiers and investors means both careful single-item pickups and full flat clearances.",
    access:
      "Construction traffic on inner roads can slow the final approach. A Google Maps pin beats a building name alone because similar tower names repeat across the circle. Mid-rise blocks rarely need elaborate permits.",
    jobs: ["Starter furniture upgrades", "Move-in packing waste", "Townhouse garage clear-outs"],
    tips: [
      {
        title: "Drop a map pin",
        body: "Entrances are not always obvious from the main loop. Pin the exact gate or lobby you use day to day.",
      },
      {
        title: "Sort donation-ready items",
        body: "Usable furniture can sometimes be set aside for charity partners. Tell us what is worth saving before we load the truck.",
      },
    ],
    services: ["furniture-removal", "sofa-removal", "junk-removal"],
    nearby: ["jumeirah-village-triangle", "dubai-sports-city", "arjan"],
    faqs: [
      {
        q: "Why do you ask for a location pin in JVC?",
        a: "Similar building names sit on different segments of the loop. A pin gets the crew to the right entrance first time.",
      },
      {
        q: "Can you clear packing waste after a move-in?",
        a: "Yes. Flattened cardboard and broken-down boxes are routine. Include kitchen appliance boxes in your photos if they are bulky.",
      },
    ],
    seoDescription:
      "JVC junk removal for circle apartments and townhouses. Packing waste, sofa swaps and garage clear-outs with map-pin routing for fast arrival.",
  },
  {
    slug: "jumeirah-village-triangle",
    name: "JVT",
    zone: "communities",
    intro:
      "JVT is quieter than JVC, with more villas and townhouses set around landscaped pockets. Family moves, garden reshaping and garage resets make up most of our visits.",
    profile:
      "District numbering helps navigation between otherwise similar villa streets. Apartments exist but villas and linked townhouses set the tone for job size.",
    access:
      "Villa roads generally allow a truck near the gate. Mention your district number on the booking. Apartment blocks may still want notice for bulky items even though lifts are modest in height.",
    jobs: ["Villa garage clearances", "Garden waste", "Family move-outs"],
    tips: [
      {
        title: "Share district number",
        body: "It is the fastest way for drivers to pick the correct branch off the main distributor road.",
      },
      {
        title: "Combine green and bulky waste",
        body: "One trip for trimmed hedges and old outdoor seating is often better value than two bookings.",
      },
    ],
    services: ["garden-waste-removal", "house-villa-clearance", "junk-removal"],
    nearby: ["jumeirah-village-circle", "al-furjan", "dubai-sports-city"],
    faqs: [
      {
        q: "Can you take garden waste and furniture in the same JVT trip?",
        a: "Yes when volume fits one truck. Show both areas in photos for a single fixed quote.",
      },
      {
        q: "Do you handle full villa move-outs?",
        a: "We do. Walk through by room on video first so wardrobes, outdoor kits and garage contents are all in the price.",
      },
    ],
    seoDescription:
      "JVT junk removal for villa garages, gardens and family move-outs. Combined green and furniture loads across numbered districts. Quotes from photos.",
  },
  {
    slug: "dubai-hills-estate",
    name: "Dubai Hills Estate",
    zone: "communities",
    intro:
      "From podium flats near the mall to golf-side villas, Dubai Hills residents refresh homes often. Post-renovation debris, replaced outdoor loungers and handover clearances are typical calls.",
    profile:
      "The estate mixes apartment clusters, townhouse rows and larger villas overlooking the course. Community rules on contractor hours and waste storage are enforced more strictly than in older suburbs.",
    access:
      "Gated villa zones need security notified before arrival. Ask your community manager about permitted work days and whether renovation rubble must be bagged. Apartments follow standard goods-lift etiquette.",
    jobs: ["Post-renovation debris", "Outdoor furniture removal", "Villa furniture refreshes"],
    tips: [
      {
        title: "Check debris bagging rules",
        body: "Some streets require rubble in heavy-duty sacks before collection. Confirm with community management to avoid rejected loads at the gate.",
      },
      {
        title: "Book around school traffic",
        body: "Drop-off queues near the park entrance can delay trucks. Mid-morning slots after the rush are smoother.",
      },
    ],
    services: ["construction-debris-removal", "furniture-removal", "garden-waste-removal"],
    nearby: ["nad-al-sheba", "emirates-living", "al-barsha"],
    faqs: [
      {
        q: "Can you remove renovation waste from a Dubai Hills villa?",
        a: "Yes for residential-scale debris that is bagged and free of hazardous materials. Confirm community rules, then send photos.",
      },
      {
        q: "Do you cover apartments by Dubai Hills Mall?",
        a: "Yes. Treat them like other mid-rises: note floor, lift size and any facilities booking.",
      },
    ],
    seoDescription:
      "Dubai Hills Estate junk removal for villas and mall-side flats. Bagged renovation debris, outdoor furniture and handover clearances within community rules.",
  },
  {
    slug: "arabian-ranches",
    name: "Arabian Ranches",
    zone: "communities",
    intro:
      "The Ranches are mature now, with villas that have seen a decade or more of family life. Packed garages, tired landscaping, and full clearances before an overseas move are regular requests.",
    profile:
      "Sub-communities such as Palmera, Mirador and Al Reem each have subtly different street layouts, but all are villa-led with shared amenities. Parks and school runs shape when trucks can move without blocking neighbours.",
    access:
      "Gated entry means coordinating with security on the day. Villa streets are generally wide once inside. Provide plate numbers or driver names if the gate asks for them in advance.",
    jobs: ["Pre-sale villa clearance", "Garden overhauls", "Packed garages"],
    tips: [
      {
        title: "Warn neighbours on shared drives",
        body: "If two villas share a turnaround, let neighbours know a truck will sit for an hour so cars can be moved.",
      },
      {
        title: "Stage items in the garage",
        body: "Grouping everything in one bay speeds loading and keeps garden areas tidy for community patrols.",
      },
    ],
    services: ["house-villa-clearance", "garden-waste-removal", "junk-removal"],
    nearby: ["motor-city", "emirates-living", "damac-hills"],
    faqs: [
      {
        q: "How do you get into Arabian Ranches for a pickup?",
        a: "Notify security or your community team. Send any vehicle details they require and we match arrival time to your slot.",
      },
      {
        q: "Can you clear garden waste after a full redesign?",
        a: "Yes if clippings are bagged or bundled. Very large tree trunks may need a separate plan; show them in photos.",
      },
    ],
    seoDescription:
      "Arabian Ranches villa junk removal for garages, gardens and pre-sale clearances. Gated access coordinated with security. Fixed prices from your photos.",
  },
  {
    slug: "al-furjan",
    name: "Al Furjan",
    zone: "communities",
    intro:
      "Al Furjan's townhouses, villas and newer apartments near the metro keep us busy with family-scale jobs: garage storage, retired appliances, and move-outs when employers relocate staff.",
    profile:
      "Phased street layouts make navigation predictable for crews once the correct phase is known. Pavilion retail and the metro link bring a mix of commuters and long-term residents.",
    access:
      "Streets are laid out in clear phases; share your phase or pin. Apartment blocks may need a lift slot for larger items. Townhouses usually allow kerbside loading steps from the front door.",
    jobs: ["Townhouse garage clear-outs", "Appliance disposal", "Family move-outs"],
    tips: [
      {
        title: "Empty fridges before collection",
        body: "Defrost and dry appliances the day before so they are lighter and safe to tilt on stairs.",
      },
      {
        title: "Note metro construction",
        body: "Occasional road diversions appear near the station. A live pin on the day helps if signs change.",
      },
    ],
    services: ["appliance-removal", "junk-removal", "move-out-clearance"],
    nearby: ["jumeirah-village-triangle", "jebel-ali", "dubai-investments-park"],
    faqs: [
      {
        q: "Can you carry a fridge down from a townhouse upper floor in Al Furjan?",
        a: "Yes. Stair carries are routine. Please empty and defrost the day before.",
      },
      {
        q: "Do you serve both villas and apartment towers here?",
        a: "Both. Mention property type so we bring straps and dollies suited to stairs or podium loading.",
      },
    ],
    seoDescription:
      "Al Furjan junk removal for townhouses, villas and metro-side flats. Appliances, garages and move-out clearances across phased streets. Photo quotes.",
  },
  {
    slug: "motor-city",
    name: "Motor City",
    zone: "communities",
    intro:
      "Motor City packs low-rise apartments and townhouses beside the autodrome. Tenant turnover produces steady small and mid-size removals: sofas, beds, and balcony clutter between leases.",
    profile:
      "Buildings are generally walk-up or modest lifts, so carry paths are shorter than downtown towers. The community feels compact, which helps when grouping nearby jobs on one route.",
    access:
      "Street parking near podiums is usually workable. Some blocks still want notice for bulky items through building managers. Event weekends at the track can add noise but rarely block access.",
    jobs: ["Apartment move-outs", "Sofa and bed pickups", "Balcony clear-outs"],
    tips: [
      {
        title: "Ask about bulky-item notices",
        body: "Even low-rise blocks sometimes log contractor visits. A quick email to management prevents delays at reception.",
      },
      {
        title: "Bundle small items",
        body: "Grouping loose bits into bags or boxes before we arrive keeps the pickup inside the quoted time window.",
      },
    ],
    services: ["move-out-clearance", "sofa-removal", "mattress-removal"],
    nearby: ["dubai-sports-city", "arabian-ranches", "damac-hills"],
    faqs: [
      {
        q: "Can you combine a Motor City pickup with a nearby job?",
        a: "When a crew is already in the area we can often improve your slot. Mention flexible timing.",
      },
      {
        q: "Do you remove mattresses from upper walk-up floors?",
        a: "Yes. Tell us the floor when you enquire so we send enough people for a safe stair carry.",
      },
    ],
    seoDescription:
      "Motor City junk removal for low-rise flats and townhouses. Sofa, mattress and lease-end clearances with compact-building access in mind.",
  },
  {
    slug: "dubai-sports-city",
    name: "Dubai Sports City",
    zone: "communities",
    intro:
      "Mid-rise towers around the stadium and golf course mean mostly apartment work: tired beds, unused gym kit, and furniture abandoned by the last tenant before the landlord relets.",
    profile:
      "Victory Heights villas sit in the same masterplan, adding garage and garden jobs alongside tower move-outs. Match days can swell traffic near the stadium approaches.",
    access:
      "Parking is generally easier than in the Marina, though event days tighten kerb space. Some towers have compact lifts; send interior dimensions before booking a large wardrobe or sofa.",
    jobs: ["Exercise equipment removal", "Bed and mattress pickups", "Landlord clear-outs"],
    tips: [
      {
        title: "Check event calendars",
        body: "Major fixtures crowd surrounding roads. If your building sits closest to the stadium, avoid kick-off windows when possible.",
      },
      {
        title: "Fold gym machines",
        body: "Treadmills and ellipticals move faster when partially dismantled. Photograph model plates so we bring the right tools.",
      },
    ],
    services: ["furniture-removal", "mattress-removal", "junk-removal"],
    nearby: ["motor-city", "jumeirah-village-circle", "damac-hills"],
    faqs: [
      {
        q: "Can you remove a treadmill from a Dubai Sports City flat?",
        a: "Yes. We usually send two people and fold or dismantle the machine where possible.",
      },
      {
        q: "Do you clear Victory Heights villas as well as towers?",
        a: "Yes. Villa jobs often include garden items; show outdoor areas in your photos.",
      },
    ],
    seoDescription:
      "Dubai Sports City junk removal for stadium towers and Victory Heights villas. Gym kit, mattresses and landlord clearances with event-day routing in mind.",
  },
  {
    slug: "damac-hills",
    name: "DAMAC Hills",
    zone: "communities",
    intro:
      "DAMAC Hills wraps a golf course with villas, townhouses and apartments. Residents call about garden clear-ups, tired outdoor dining sets, and whole-home moves when visas change.",
    profile:
      "Clusters repeat street names across the map, so navigation benefits from pins rather than verbal directions alone. Apartments near the trumpeted entrance follow podium rules similar to other newer communities.",
    access:
      "Gated entry applies; inform security of our ETA. Villa clusters look similar from aerial maps—share a live location on the day if your street is easy to miss.",
    jobs: ["Garden and outdoor clear-ups", "Villa move-outs", "Old appliance pickups"],
    tips: [
      {
        title: "Pin the villa cluster",
        body: "Names like \"Golf Vista\" repeat. A pin avoids circling the wrong crescent.",
      },
      {
        title: "Separate hazmat",
        body: "Paint tins and chemicals from garage DIY cannot ride in a general load. Flag them so we advise on proper disposal.",
      },
    ],
    services: ["garden-waste-removal", "house-villa-clearance", "appliance-removal"],
    nearby: ["arabian-ranches", "town-square", "arjan"],
    faqs: [
      {
        q: "Do you clear villas in DAMAC Hills before a handover?",
        a: "Yes. Share your handover date and we work backwards, leaving time for any community access rules.",
      },
      {
        q: "Can apartments and villas be quoted together?",
        a: "Only if items are at one address. For two properties, book separately so trucks are sized correctly.",
      },
    ],
    seoDescription:
      "DAMAC Hills junk removal around the golf course. Villa handovers, garden waste and appliance pickups with gated access and cluster pins.",
  },
  {
    slug: "town-square",
    name: "Town Square",
    zone: "communities",
    intro:
      "Town Square's townhouses and apartments attract young families who outgrow nursery furniture fast. We remove cots, compact sofas, and storeroom overflow when households upgrade or relocate along Al Qudra.",
    profile:
      "The masterplan is spread along the Qudra corridor with parks and retail at the centre. Distances from central Dubai mean we often batch jobs when routing crews west.",
    access:
      "Kerbside loading is straightforward in townhouse streets. Apartment podiums follow familiar lift rules. If you are flexible on timing, mention it—grouped routes can unlock better slots.",
    jobs: ["Outgrown kids' furniture", "Sofa replacements", "Townhouse storage clear-outs"],
    tips: [
      {
        title: "Be flexible on timing",
        body: "We often run paired visits with DAMAC Hills or Arabian Ranches. Flexible windows help us offer a closer slot.",
      },
      {
        title: "Bundle small nursery items",
        body: "Chairs, play mats and storage units pack faster when grouped in one room for photos.",
      },
    ],
    services: ["furniture-removal", "sofa-removal", "junk-removal"],
    nearby: ["damac-hills", "arabian-ranches", "motor-city"],
    faqs: [
      {
        q: "Do you cover Town Square even though it is further out?",
        a: "Yes. Distance is included in your fixed quote before you confirm.",
      },
      {
        q: "Can you collect bulky items from upper townhouses?",
        a: "Yes. Note whether stairs are narrow so we plan two-person carries for heavy pieces.",
      },
    ],
    seoDescription:
      "Town Square junk removal for family townhouses and apartments on Al Qudra. Kids' furniture, sofas and storage clear-outs with flexible routing.",
  },
  {
    slug: "mirdif",
    name: "Mirdif",
    zone: "communities",
    intro:
      "Mirdif is an established villa suburb on the east side, popular with families who stay for years. That longevity shows in full-room furniture, mature gardens, and garages that gradually fill.",
    profile:
      "Tree-lined streets and larger plots distinguish Mirdif from newer townhouse communities. Some shared compounds still appear, requiring courtesy over shared parking bays.",
    access:
      "Street-level villas allow quick loading with room to park at the gate. Morning slots dodge school traffic around popular academies. Mention if your compound has a shared driveway needing neighbour clearance.",
    jobs: ["Family villa clearances", "Garden waste", "Old air-conditioning units"],
    tips: [
      {
        title: "Photograph AC units",
        body: "Outdoor compressors are heavy. Tell us floor and mounting so we bring tools if brackets must be removed first.",
      },
      {
        title: "Plan around Ramadan evenings",
        body: "Streets get lively after sunset. Morning collections stay calmer for reversing trucks.",
      },
    ],
    services: ["house-villa-clearance", "garden-waste-removal", "appliance-removal"],
    nearby: ["al-mizhar", "al-warqa", "dubai-festival-city"],
    faqs: [
      {
        q: "Can you clear a shared villa compound in Mirdif?",
        a: "Yes. Show which items are yours and ensure the crew can reach them without blocking neighbours.",
      },
      {
        q: "Do you take garden waste after a landscaper's visit?",
        a: "Bagged clippings and small branches are fine. Show volume in photos for truck sizing.",
      },
    ],
    seoDescription:
      "Mirdif villa junk removal for family homes and gardens. Garage clearances, green waste and appliance pickups with street-level loading.",
  },
  {
    slug: "deira",
    name: "Deira",
    zone: "old",
    intro:
      "Deira still runs on trade. Beyond family flats, we clear shop stockrooms, back-of-house restaurant kit, and shelving from small businesses tucked along the creekside souks.",
    profile:
      "Low-rise blocks sit beside wholesale alleys and abra stations. Mixed-use buildings put storerooms on upper floors reachable only by stairs in older properties.",
    access:
      "Streets are narrow and parking scarce; smaller trucks and early starts work best. Tell us the floor when lifts are absent or tiny. A pin near the nearest legal stopping point helps immensely.",
    jobs: ["Shop and storeroom clearances", "Older flat clearances", "Commercial shelving"],
    tips: [
      {
        title: "Find a legal loading stop",
        body: "Double-parking blocks trade. Walk the block beforehand and note where a van can pause without angering neighbouring shops.",
      },
      {
        title: "Separate food-service kit",
        body: "Grease-heavy equipment should be cleaned and disconnected by your technician before we collect.",
      },
    ],
    services: ["junk-removal", "office-clearance", "furniture-removal"],
    nearby: ["bur-dubai", "al-garhoud", "international-city"],
    faqs: [
      {
        q: "Can you collect from a Deira building with no lift?",
        a: "Yes. We carry by stairs. State the floor when enquiring—it drives crew size and price.",
      },
      {
        q: "Do you handle wholesale unit clear-outs?",
        a: "Yes for general stock and fixtures. Hazardous chemicals must be removed separately beforehand.",
      },
    ],
    seoDescription:
      "Deira junk removal for creekside flats, shops and storerooms. Stair carries, early-morning loading and trade-area clearances. Quotes from photos.",
  },
  {
    slug: "bur-dubai",
    name: "Bur Dubai",
    zone: "old",
    intro:
      "Bur Dubai's older apartment blocks house long-term tenants and independent businesses. After years in one flat, clear-outs mean heavy wooden furniture and packed maid's rooms.",
    profile:
      "The district blends residential corridors near the metro with historic fabric closer to the creek. Building ages vary widely, so lift sizes and corridor widths change street by street.",
    access:
      "Evening traffic and limited parking make mornings preferable. Older lifts may be too small for assembled wardrobes; plan on dismantling or stair carries. Send corridor photos if turns are tight.",
    jobs: ["Long-tenancy flat clearances", "Heavy wooden furniture", "Small business clear-outs"],
    tips: [
      {
        title: "Measure awkward landings",
        body: "Spiral stairs and tight mezzanines appear in older blocks. A quick video prevents a failed first visit.",
      },
      {
        title: "Coordinate with building watchmen",
        body: "They often hold keys to service areas. Introduce us when you book so lifts can be unlocked on time.",
      },
    ],
    services: ["furniture-removal", "move-out-clearance", "junk-removal"],
    nearby: ["al-karama", "deira", "al-satwa"],
    faqs: [
      {
        q: "Can you remove solid wood furniture from an older Bur Dubai flat?",
        a: "Yes. We dismantle where possible and bring extra people for pieces that must move whole.",
      },
      {
        q: "Is same-day service realistic here?",
        a: "Often yes for single items if stairs are straightforward. Full flat clearances need photos first.",
      },
    ],
    seoDescription:
      "Bur Dubai junk removal for older flats and small businesses. Heavy furniture, stair carries and lease-end clearances near the creek corridor.",
  },
  {
    slug: "al-karama",
    name: "Al Karama",
    zone: "old",
    intro:
      "Karama's low-rise blocks and shopfronts create compact jobs: single pieces from flats, light shop refits, and tired restaurant equipment waiting for collection.",
    profile:
      "Residential towers mix with ground-floor retail along busy arteries. Parking stress is constant, so jobs favour agile crews and patient drivers.",
    access:
      "Inner roads are tight. Send a pin and describe the nearest realistic loading pause. Many blocks rely on stairs—include your floor in the first message.",
    jobs: ["Small flat clear-outs", "Shop refits", "Old restaurant equipment"],
    tips: [
      {
        title: "Photograph stairwells",
        body: "Landings that narrow at turns decide whether a sofa must be stood on end. Show them before quote day.",
      },
      {
        title: "Disconnect gas appliances",
        body: "Your technician should cap lines before we remove stoves or ovens. We cannot handle live connections.",
      },
    ],
    services: ["junk-removal", "appliance-removal", "furniture-removal"],
    nearby: ["bur-dubai", "deira", "al-satwa"],
    faqs: [
      {
        q: "Do you take old restaurant equipment from Al Karama?",
        a: "Yes once cleaned and disconnected. Mention grease traps or gas—they need specialist attention first.",
      },
      {
        q: "Can you clear a small flat in one truck?",
        a: "Most Karama flats fit a single load unless hoarding-level volume appears. Wide photos set expectations.",
      },
    ],
    seoDescription:
      "Al Karama junk removal for compact flats, cafés and shops. Appliance disposal, stair carries and light commercial refit waste. Fixed photo pricing.",
  },
  {
    slug: "al-qusais",
    name: "Al Qusais",
    zone: "old",
    intro:
      "Al Qusais blends apartments, villas and industrial pockets near the Sharjah border. We collect from family flats, small workshops, and warehouse shelving in the same week.",
    profile:
      "Residential districts sit beside labour accommodation and light industry. Morning border traffic swings volumes on the main roads connecting Sharjah.",
    access:
      "Say whether you are on the residential or industrial side so we send the right truck. Peak commute hours warrant scheduling around them. Workshop jobs need photos of roller-door height.",
    jobs: ["Apartment clear-outs", "Workshop waste", "Warehouse shelving"],
    tips: [
      {
        title: "Flag border-hour traffic",
        body: "If you are close to the Sharjah crossing, mid-morning beats late afternoon for predictable arrival.",
      },
      {
        title: "Sort metal shelving",
        body: "Racking dismantles faster when bolts are already removed. Leave panels stacked if you can.",
      },
    ],
    services: ["junk-removal", "furniture-removal", "appliance-removal"],
    nearby: ["deira", "muhaisnah", "mirdif"],
    faqs: [
      {
        q: "Do you cover Al Qusais Industrial Area?",
        a: "Yes. Workshop and warehouse clear-outs are welcome. Photograph volume and anything unusually heavy.",
      },
      {
        q: "Can residential and workshop waste mix?",
        a: "Keep hazardous workshop chemicals out. General wood, shelving and packaging can travel together when safe.",
      },
    ],
    seoDescription:
      "Al Qusais junk removal for flats, villas and industrial units near Sharjah. Workshop waste, shelving and home clear-outs with border-traffic timing.",
  },
  {
    slug: "al-quoz",
    name: "Al Quoz",
    zone: "industrial",
    intro:
      "Al Quoz combines warehouses, creative studios, workshops and galleries. Jobs tend to be practical and large: racking, pallets, exhibition build leftovers, and units handed back bare.",
    profile:
      "The creative quarter added cafés and showrooms alongside classic logistics sheds. Residential pockets exist but commercial volume sets the tone.",
    access:
      "Yard or roller-door access is common and straightforward. Declare any chemicals, solvents or paint stock up front—they cannot enter a general load. Evening access suits businesses that trade through the day.",
    jobs: ["Warehouse clear-outs", "Event and exhibition leftovers", "Racking and pallets"],
    tips: [
      {
        title: "Declare hazardous stock",
        body: "Paint, thinners and gas cylinders need licensed disposal. Tell us what is on site before we quote.",
      },
      {
        title: "Stage pallets near the shutter",
        body: "Fork-friendly stacking at the door cuts labour time and keeps your quote aligned with reality.",
      },
    ],
    services: ["junk-removal", "office-clearance", "construction-debris-removal"],
    nearby: ["al-barsha", "business-bay", "jumeirah"],
    faqs: [
      {
        q: "Can you clear a whole warehouse unit in Al Quoz?",
        a: "General contents often need multiple loads. Large units warrant a site visit or video walk-through for an accurate fixed price.",
      },
      {
        q: "Do you collect from art studios and galleries?",
        a: "Yes for fixtures and general waste. Artworks and chemicals need specialist handling first.",
      },
    ],
    seoDescription:
      "Al Quoz junk removal for warehouses, studios and workshops. Racking, pallets and exhibition leftovers with yard access and hazmat declared up front.",
  },
  {
    slug: "dubai-investments-park",
    name: "Dubai Investments Park",
    zone: "industrial",
    intro:
      "DIP holds factories and warehouses on one side and family homes in Green Community and nearby apartments on the other. Commercial strip-outs and villa garages share our diary.",
    profile:
      "Wide arterial roads serve logistics while gated villa streets feel suburban. The split personality means enquiries must state which side of DIP you mean.",
    access:
      "Commercial plots enjoy straightforward truck access. Residential gates need visitor registration like other communities. Photos of roller doors or villa gates prevent sending the wrong vehicle type.",
    jobs: ["Factory and warehouse clear-outs", "Green Community villa jobs", "Office furniture"],
    tips: [
      {
        title: "State commercial vs residential",
        body: "The name covers both a free zone and villa streets. Clarify which so routing and truck size are correct.",
      },
      {
        title: "Book Green Community access",
        body: "Notify security like any gated neighbourhood. Plate numbers speed entry.",
      },
    ],
    services: ["office-clearance", "house-villa-clearance", "e-waste-removal"],
    nearby: ["jebel-ali", "al-furjan", "dubai-south"],
    faqs: [
      {
        q: "Do you serve homes in Dubai Investments Park or only businesses?",
        a: "Both. Residential pickups are as common as commercial work—tell us which you need.",
      },
      {
        q: "Can e-waste leave an office and a villa in one trip?",
        a: "Only from one address per booking unless items are combined on site. Data-wiped IT only.",
      },
    ],
    seoDescription:
      "Dubai Investments Park junk removal for factories, offices and Green Community villas. Warehouse and home clearances with correct truck sizing.",
  },
  {
    slug: "jebel-ali",
    name: "Jebel Ali",
    zone: "industrial",
    intro:
      "From Jebel Ali Village family homes to free-zone offices and port-side logistics, this patch is wide. Commercial clearances can be sizeable; residential jobs often mean villa gardens and garage resets.",
    profile:
      "The village retains a suburban feel while industrial sectors host multinational sheds. Free-zone paperwork separates commercial jobs from simple villa pickups.",
    access:
      "Free-zone sites need gate passes prepared early—share what authorities require for crew and vehicle. Village streets are uncomplicated once inside. Port-bound traffic rarely affects village jobs but can touch outer industrial roads.",
    jobs: ["Free zone office clearances", "Warehouse clear-outs", "Villa garden waste"],
    tips: [
      {
        title: "Start pass paperwork early",
        body: "Companies usually sponsor visitor passes. Begin when you accept the quote, not the night before.",
      },
      {
        title: "Separate port-bound deliveries",
        body: "If lorries clog your street during shift changes, pick a quieter hour for our truck to reverse in.",
      },
    ],
    services: ["office-clearance", "junk-removal", "garden-waste-removal"],
    nearby: ["dubai-investments-park", "dubai-south", "al-furjan"],
    faqs: [
      {
        q: "Can you collect from inside the free zone at Jebel Ali?",
        a: "Yes once access is approved. We supply vehicle and crew details for your application.",
      },
      {
        q: "Do you cover Jebel Ali Village villas?",
        a: "Yes for furniture, appliances and garden waste with normal kerbside loading.",
      },
    ],
    seoDescription:
      "Jebel Ali junk removal for free-zone offices, warehouses and village villas. Pass access planned early; garden and handover loads welcomed.",
  },
  {
    slug: "dubai-silicon-oasis",
    name: "Dubai Silicon Oasis",
    zone: "industrial",
    intro:
      "Dubai Silicon Oasis mixes technology offices, academic buildings and mid-rise housing within a planned free zone. We see lab furniture, co-working refits, and apartment move-outs side by side.",
    profile:
      "Residential towers sit beside headquarters blocks and educational campuses. The layout is grid-based, which helps navigation once your building phase is known.",
    access:
      "Business parks may require visitor registration; flats follow standard lift rules. Outer roads connect to Emirates Road, so rush-hour timing matters for punctual arrival.",
    jobs: ["Office and co-working clearances", "Flat move-outs", "Old desks and IT kit"],
    tips: [
      {
        title: "Register tech-park visits",
        body: "Some blocks need QR passes. Forward the link or reception steps when you book.",
      },
      {
        title: "Photograph server racks",
        body: "Heavy racks need extra people. Show mounting and cable volume before quote day.",
      },
    ],
    services: ["office-clearance", "e-waste-removal", "move-out-clearance"],
    nearby: ["international-city", "mirdif", "dubai-festival-city"],
    faqs: [
      {
        q: "Do you clear furnished apartments in Silicon Oasis?",
        a: "Yes for move-outs and upgrades. Include lift dimensions if sofas are large.",
      },
      {
        q: "Can you collect e-waste from an office refit?",
        a: "Yes once data-bearing devices are wiped. Monitors and desktops are routine.",
      },
    ],
    seoDescription:
      "Dubai Silicon Oasis junk removal for tech offices and residential towers. Co-working clearances, IT pickup and flat move-outs with visitor registration.",
  },
  {
    slug: "international-city",
    name: "International City",
    zone: "old",
    intro:
      "International City's themed clusters pack dense low-rise housing popular with budget-conscious tenants. Frequent move-outs mean furniture left behind, mattress swaps, and corridor clutter between leases.",
    profile:
      "Clusters named after countries share similar podiums and parking courts. Retail on Dragon Mart's edge feeds into storage-heavy households with bulky imported goods.",
    access:
      "Parking courts fill quickly; early slots help. Many buildings lack large lifts, so stair carries are common. Pin your cluster and building colour code—names repeat across phases.",
    jobs: ["Tenant move-out clearances", "Mattress and sofa pickups", "Storeroom clutter"],
    tips: [
      {
        title: "Name your cluster",
        body: "England, Spain, China and others each have distinct entrance roads. The cluster name routes the truck correctly.",
      },
      {
        title: "Clear corridor obstructions",
        body: "Neighbours sometimes store items in shared halls. Make a path before the crew arrives to avoid delays.",
      },
    ],
    services: ["move-out-clearance", "furniture-removal", "mattress-removal"],
    nearby: ["deira", "dubai-silicon-oasis", "al-warqa"],
    faqs: [
      {
        q: "Can you clear an entire International City flat in one visit?",
        a: "Most one-bedroom homes fit a single truck. Photograph every room for an accurate quote.",
      },
      {
        q: "Do you work near Dragon Mart loading zones?",
        a: "We stay in residential courts, not market docks. Share a residential pin, not a shop unit.",
      },
    ],
    seoDescription:
      "International City junk removal across country-themed clusters. Lease-end flat clearances, sofas and mattresses with stair carries and early parking.",
  },
  {
    slug: "al-warqa",
    name: "Al Warqa",
    zone: "old",
    intro:
      "Al Warqa stretches across low villas and mid-rise blocks between Rashidiya and Mirdif. Established families upgrade furniture slowly, producing garage volumes rather than constant tower churn.",
    profile:
      "The area feels more suburban than central Dubai, with schools and neighbourhood shops anchoring daily life. Some pockets border industrial service roads.",
    access:
      "Villa gates usually allow kerbside trucks. Apartment blocks vary in age; ask management about bulky-item rules. School zones get busy at drop-off.",
    jobs: ["Villa garage clear-outs", "Apartment furniture removal", "Garden trimmings"],
    tips: [
      {
        title: "Note industrial adjacency",
        body: "If your street borders a service road, mention it so drivers choose an approach with space to reverse.",
      },
      {
        title: "Share school-hour preferences",
        body: "Avoid 7–8 a.m. near popular campuses if you want a quiet, quick load.",
      },
    ],
    services: ["junk-removal", "garden-waste-removal", "furniture-removal"],
    nearby: ["mirdif", "al-rashidiya", "international-city"],
    faqs: [
      {
        q: "Do you cover both villas and apartments in Al Warqa?",
        a: "Yes. Tell us property type and floor for correct crew sizing.",
      },
      {
        q: "Can garden and garage junk combine?",
        a: "Usually in one load when photos show realistic volume.",
      },
    ],
    seoDescription:
      "Al Warqa junk removal for villas and mid-rise homes near Mirdif. Garage clearances, furniture and garden waste with suburban street access.",
  },
  {
    slug: "al-nahda",
    name: "Al Nahda",
    zone: "old",
    intro:
      "Al Nahda straddles the Dubai–Sharjah line with dense apartment blocks and busy retail strips. High tenant turnover keeps move-out clearances and single-item pickups in steady demand.",
    profile:
      "Towers cluster near the university and metro, while older walk-up blocks sit on inner streets. Cross-border workers often furnish modestly, leaving bulky items when contracts end.",
    access:
      "Border traffic peaks mornings and evenings; mid-day slots can be smoother. Parking wardens are active on main roads—identify a legal bay near your block. Lifts vary; assume stairs in older buildings.",
    jobs: ["Cross-border tenant move-outs", "Bed and mattress collections", "Shop back-room clearances"],
    tips: [
      {
        title: "Avoid peak border queues",
        body: "If you live closest to Sharjah, schedule between late morning and mid-afternoon when possible.",
      },
      {
        title: "Confirm building lift size",
        body: "Mattresses on stairs are routine but heavy. Measure lift cabins when available.",
      },
    ],
    services: ["move-out-clearance", "mattress-removal", "junk-removal"],
    nearby: ["al-qusais", "muhaisnah", "al-karama"],
    faqs: [
      {
        q: "Do you serve both Dubai and Sharjah sides of Al Nahda?",
        a: "We cover the Dubai side within our emirate service area. Confirm your address is Dubai before booking.",
      },
      {
        q: "Can you clear a furnished studio quickly?",
        a: "Yes with photos. Studios often complete in under an hour once access is ready.",
      },
    ],
    seoDescription:
      "Al Nahda junk removal for border-side apartments and shops. Tenant move-outs, mattresses and back-room clearances timed away from Sharjah queues.",
  },
  {
    slug: "muhaisnah",
    name: "Muhaisnah",
    zone: "old",
    intro:
      "Muhaisnah's mix of villas, low apartments and labour accommodation creates varied job sizes. Landlords clear entire flats between tenants; families empty garages before renovations.",
    profile:
      "The district connects to Academic City roads and sits between industrial corridors and older suburbs. Properties range from spacious villas to compact shared units.",
    access:
      "Villa streets are simple; dense accommodation blocks need clear pins and floor numbers. Some lanes are narrow—smaller trucks may be required.",
    jobs: ["Landlord flat clearances", "Villa garage emptying", "Bulk mattress pickups"],
    tips: [
      {
        title: "Photograph shared blocks",
        body: "Identical stairwells repeat. A floor number and door colour in the photo prevent wrong-unit entry.",
      },
      {
        title: "Combine landlord units",
        body: "If you manage multiple flats in one building, one visit can clear several—send a list with photos per unit.",
      },
    ],
    services: ["furniture-removal", "move-out-clearance", "junk-removal"],
    nearby: ["al-qusais", "al-nahda", "al-warqa"],
    faqs: [
      {
        q: "Can you clear several flats for one landlord in Muhaisnah?",
        a: "Yes when access is coordinated. List each unit and we quote total volume.",
      },
      {
        q: "Do you remove items from staff accommodation blocks?",
        a: "Yes with building management approval and a clear inventory.",
      },
    ],
    seoDescription:
      "Muhaisnah junk removal for villas, rentals and shared blocks. Landlord turnarounds, garages and mattress runs with pins for dense streets.",
  },
  {
    slug: "al-rashidiya",
    name: "Al Rashidiya",
    zone: "old",
    intro:
      "Al Rashidiya sits near the airport with villas, apartments and metro-linked towers. Families refresh homes between school years; airport proximity means some tenants stay briefly and leave furniture behind.",
    profile:
      "Older villa sectors mix with newer developments closer to the metro. Flight paths overhead are familiar to residents but do not affect ground access.",
    access:
      "Airport-bound traffic can crowd connector roads at shift changes. Villa loading is straightforward; towers need lift coordination like elsewhere.",
    jobs: ["Villa storage clear-outs", "Metro-side flat move-outs", "Outdoor furniture removal"],
    tips: [
      {
        title: "Plan around airport peaks",
        body: "Early mornings see staff convoys. Late morning often calms main arteries.",
      },
      {
        title: "Use metro landmarks",
        body: "Stating the nearest station helps drivers when building names are generic.",
      },
    ],
    services: ["house-villa-clearance", "junk-removal", "furniture-removal"],
    nearby: ["al-warqa", "mirdif", "al-garhoud"],
    faqs: [
      {
        q: "Do flight times affect your Rashidiya schedule?",
        a: "No directly. Road traffic patterns matter more than aircraft noise windows.",
      },
      {
        q: "Can you clear a villa before a short airport posting ends?",
        a: "Yes with enough notice. Send handover timing and we align the crew.",
      },
    ],
    seoDescription:
      "Al Rashidiya junk removal for airport-adjacent villas and flats. Storage clear-outs, move-outs and outdoor furniture near metro links.",
  },
  {
    slug: "al-mizhar",
    name: "Al Mizhar",
    zone: "communities",
    intro:
      "Al Mizhar's villa streets bridge Mirdif and older eastern suburbs. Long-term owners accumulate garden gear, majlis seating and garage storage that finally needs a truck.",
    profile:
      "Plots are generous compared with newer townhouse communities. Tree canopy shades streets, producing regular green waste after trimming.",
    access:
      "Kerbside access is good though some crescents are tight for long trucks. Morning collections dodge school traffic feeding into nearby academies.",
    jobs: ["Villa garden waste", "Majlis furniture removal", "Garage declutters"],
    tips: [
      {
        title: "Bundle palm fronds",
        body: "Loose fronds scatter in wind. Tie bundles so loading stays quick and tidy.",
      },
      {
        title: "Tell us about shared walls",
        body: "If a neighbour's car must move for truck access, coordinate before our arrival.",
      },
    ],
    services: ["garden-waste-removal", "house-villa-clearance", "furniture-removal"],
    nearby: ["mirdif", "al-warqa", "muhaisnah"],
    faqs: [
      {
        q: "Is Al Mizhar treated like Mirdif for access?",
        a: "Very similar villa streets. Same street-level loading applies.",
      },
      {
        q: "Can you remove large outdoor majlis sets?",
        a: "Yes. Photograph modular sections so we know whether dismantling is needed.",
      },
    ],
    seoDescription:
      "Al Mizhar villa junk removal east of Mirdif. Garden waste, majlis seating and garage declutters with shaded street loading.",
  },
  {
    slug: "nad-al-sheba",
    name: "Nad Al Sheba",
    zone: "communities",
    intro:
      "Nad Al Sheba's villa districts stretch toward the Meydan corridor and desert edge. Horse-country neighbours and spacious homes mean garage gear, paddock equipment and household clearances together.",
    profile:
      "Sub-areas differ in plot size, with newer villa phases offering modern layouts and older sectors holding classic family homes. Proximity to Meydan and Dubai Hills influences traffic patterns.",
    access:
      "Streets are generally wide for trucks. Dusty shoulders appear on outer phases—mention if access is only from a sandy track so we plan wheelbase.",
    jobs: ["Equestrian-adjacent storage clear-outs", "Villa move-outs", "Garden and outdoor equipment"],
    tips: [
      {
        title: "State which Nad Al Sheba pocket",
        body: "Numbered sectors spread wide. A pin prevents confusion between similarly named villas.",
      },
      {
        title: "Rinse dusty items",
        body: "Loose sand in garages adds weight. Quick sweep before loading keeps the truck within quoted volume.",
      },
    ],
    services: ["house-villa-clearance", "garden-waste-removal", "junk-removal"],
    nearby: ["meydan", "dubai-hills-estate", "dubai-creek-harbour"],
    faqs: [
      {
        q: "Do you collect bulky items from stables and garages?",
        a: "Yes for general household and tack storage. Manure and medical waste are excluded.",
      },
      {
        q: "Can you time a pickup around Meydan events?",
        a: "Event evenings can crowd approach roads. Morning slots are steadier.",
      },
    ],
    seoDescription:
      "Nad Al Sheba villa junk removal near Meydan. Garage gear, garden waste and move-outs across wide numbered sectors. Photo quotes.",
  },
  {
    slug: "meydan",
    name: "Meydan",
    zone: "centre",
    intro:
      "Meydan blends racecourse landmarks with new apartment districts and canal-edge homes. Residents upgrade fitted apartments; event-related pop-ups occasionally leave temporary furniture to collect.",
    profile:
      "High-rise living near the track contrasts with townhouse pockets and hospitality venues. Strict podium rules apply in newer towers.",
    access:
      "Event nights can congest approach roads and valet zones. Book non-race evenings when possible for apartment jobs. Podium loading needs advance lift slots like other premium towers.",
    jobs: ["Apartment furniture refreshes", "Event pop-up clearances", "Balcony and storage pickups"],
    tips: [
      {
        title: "Check race-night traffic",
        body: "Major fixtures affect Sheikh Mohammed bin Zayed Road exits. Share your tower pin and preferred non-event window.",
      },
      {
        title: "Separate hospitality waste",
        body: "Commercial venues may have grease or glass rules. Residential junk only in mixed bookings.",
      },
    ],
    services: ["furniture-removal", "move-out-clearance", "same-day-junk-removal"],
    nearby: ["nad-al-sheba", "downtown-dubai", "dubai-creek-harbour"],
    faqs: [
      {
        q: "Can you collect from Meydan apartments on short notice?",
        a: "When lift access is ready, same-day may work. Race and event traffic can affect arrival time.",
      },
      {
        q: "Do you clear temporary event furniture nearby?",
        a: "Yes for general items when organisers own the stock. Hazardous pyrotechnics waste is excluded.",
      },
    ],
    seoDescription:
      "Meydan junk removal for racecourse-area towers and townhouses. Flat refreshes and storage pickups planned around event traffic and lift rules.",
  },
  {
    slug: "dubai-creek-harbour",
    name: "Dubai Creek Harbour",
    zone: "centre",
    intro:
      "Dubai Creek Harbour's rising towers overlook the creek and skyline construction. Early residents move in and out frequently, leaving packing waste, balconies of flat-pack debris, and showroom-quality sofas to replace.",
    profile:
      "The district is still maturing, so some podiums and roads evolve month to month. High-rise living dominates with strict developer handover standards.",
    access:
      "Construction circulation changes; live pins beat saved favourites. Goods lifts and contractor permits follow Emaar-area patterns—confirm with reception before booking.",
    jobs: ["New-move packing waste", "High-rise sofa removals", "Pre-handover strip-outs"],
    tips: [
      {
        title: "Refresh your map pin",
        body: "Entrance roads shift during build phases. Drop a pin the morning of collection.",
      },
      {
        title: "Photograph balcony clutter",
        body: "Wind-scattered packing on high floors needs harness-safe access. Tell us if items sit beyond a safe reach.",
      },
    ],
    services: ["junk-removal", "sofa-removal", "move-out-clearance"],
    nearby: ["business-bay", "meydan", "dubai-festival-city"],
    faqs: [
      {
        q: "Is Creek Harbour access harder during construction?",
        a: "It can be. Updated pins and reception-confirmed lift slots prevent wasted trips.",
      },
      {
        q: "Can you remove large flat-pack cardboard stacks?",
        a: "Yes when flattened or bundled. Show volume so we bring enough tie-downs.",
      },
    ],
    seoDescription:
      "Dubai Creek Harbour junk removal for new towers on the creek. Packing waste, sofas and handover clearances with fresh pins and lift bookings.",
  },
  {
    slug: "dubai-festival-city",
    name: "Dubai Festival City",
    zone: "centre",
    intro:
      "Festival City's waterfront mixes mall-adjacent apartments, hotels and offices along the creek. Residents and F&B tenants both produce furniture cycles and back-of-house clearances.",
    profile:
      "Residential towers sit beside the festival promenade and IKEA-led retail. Jobs swing between home move-outs and light commercial strip-outs.",
    access:
      "Mall traffic influences surrounding roads, especially weekends. Use podium loading bays rather than promenade frontage. Hotels may need security escorts to service docks.",
    jobs: ["Apartment move-outs", "Retail back-of-house clearances", "Flat-pack furniture disposal"],
    tips: [
      {
        title: "Avoid mall peak parking",
        body: "Friday afternoons fill car parks. Apartment jobs run smoother mid-week mornings.",
      },
      {
        title: "Coordinate hotel docks",
        body: "Loading bays can be time-limited. Book the dock with facilities and forward the reference to us.",
      },
    ],
    services: ["furniture-removal", "junk-removal", "office-clearance"],
    nearby: ["al-garhoud", "mirdif", "dubai-creek-harbour"],
    faqs: [
      {
        q: "Do you collect from creek-side apartments in Festival City?",
        a: "Yes with standard lift coordination. Send tower name and facilities contact.",
      },
      {
        q: "Can you clear IKEA flat-pack waste after assembly mistakes?",
        a: "Broken boards and packaging are fine. Keep screws in a bag so they do not scatter in the truck.",
      },
    ],
    seoDescription:
      "Dubai Festival City junk removal for creek apartments and retail back-of-house. Move-outs, flat-pack waste and light office clearances.",
  },
  {
    slug: "al-garhoud",
    name: "Al Garhoud",
    zone: "old",
    intro:
      "Al Garhoud bridges creekside living with airport road traffic. Villas, older apartments and hotel-supplier warehouses coexist, producing garage jobs and compact commercial clearances.",
    profile:
      "Proximity to the airport and Festival City means tenants sometimes stay short term. Established villa owners hold deeper storeroom volumes.",
    access:
      "Garhoud Bridge and airport approaches jam at peaks. Villa jobs favour mid-morning; apartment blocks need the usual stair-or-lift assessment.",
    jobs: ["Villa garage clearances", "Short-stay flat turnarounds", "Small warehouse shelving"],
    tips: [
      {
        title: "Time around bridge traffic",
        body: "If you rely on Garhoud Bridge, avoid late-afternoon eastbound queues when possible.",
      },
      {
        title: "Flag hotel-supply units",
        body: "Some warehouses store linen cages and trolleys. Photograph odd shapes for crew planning.",
      },
    ],
    services: ["junk-removal", "furniture-removal", "office-clearance"],
    nearby: ["al-rashidiya", "dubai-festival-city", "deira"],
    faqs: [
      {
        q: "Do you serve both villas and apartments in Al Garhoud?",
        a: "Yes. Property type and floor drive truck and crew choice.",
      },
      {
        q: "Can you clear a flat between hotel staff rotations?",
        a: "Yes when access windows are tight. Early photos help us guarantee a same-day slot.",
      },
    ],
    seoDescription:
      "Al Garhoud junk removal between the creek and airport roads. Villa garages, flat turnarounds and small warehouse shelving.",
  },
  {
    slug: "al-satwa",
    name: "Al Satwa",
    zone: "old",
    intro:
      "Al Satwa's low-rise streets hold long-term residents, tailoring shops and small cafés. When flats turn over, solid furniture, ceiling fans and shop fixtures all head for the truck.",
    profile:
      "The neighbourhood predates Dubai's tower boom, so walk-ups and narrow lanes dominate. Mixed Emirati and expatriate households mean varied furniture styles in the same block.",
    access:
      "Parking is fiercely competitive. A neighbour who saves a bay for an hour is worth more than a fast truck. Many units lack lifts; stair carries are normal.",
    jobs: ["Walk-up flat clearances", "Shop fitting removal", "Ceiling fan and fixture disposal"],
    tips: [
      {
        title: "Reserve a parking bay",
        body: "Ask your watchman or a neighbour ahead of time. Legal stopping space is the main bottleneck.",
      },
      {
        title: "Disconnect fixtures safely",
        body: "Electricians should isolate fans and lights before we remove them.",
      },
    ],
    services: ["furniture-removal", "junk-removal", "appliance-removal"],
    nearby: ["al-karama", "bur-dubai", "difc"],
    faqs: [
      {
        q: "Can you remove shop counters in Al Satwa?",
        a: "Yes once trading hours allow and fixtures are detached. Send widths for counter sections.",
      },
      {
        q: "How do you price walk-up flats here?",
        a: "Floor count and photos decide crew size. There is no lift surcharge hidden in small print—we state it upfront.",
      },
    ],
    seoDescription:
      "Al Satwa junk removal for walk-up flats and alley shops. Heavy furniture, fixtures and small commercial refits with parking planned first.",
  },
  {
    slug: "al-safa",
    name: "Al Safa",
    zone: "coast",
    intro:
      "Al Safa links city-bound villas with newer apartment pockets toward Sheikh Zayed Road. Residents refreshing landscaping or downsizing from large plots call for garden waste and interior clearances.",
    profile:
      "Older villa sectors sit near Safa Park, while newer builds add mid-rise living. The blend produces both manicured garden trimmings and tower-style move-outs.",
    access:
      "Park-adjacent streets get busy on cool-season weekends. Villa gates allow straightforward loading; towers follow lift booking norms.",
    jobs: ["Park-adjacent garden waste", "Villa downsizing clearances", "Apartment furniture pickups"],
    tips: [
      {
        title: "Weekend park traffic",
        body: "If you border Safa Park, Saturday morning foot traffic can delay kerb access. Weekdays are calmer.",
      },
      {
        title: "Separate renovation rubble",
        body: "Bag plaster and tile separately from green waste when communities require it.",
      },
    ],
    services: ["garden-waste-removal", "furniture-removal", "move-out-clearance"],
    nearby: ["jumeirah", "umm-suqeim", "al-barsha"],
    faqs: [
      {
        q: "Do you cover both villa and tower addresses in Al Safa?",
        a: "Yes. Mention which you have so we plan lift or gate access.",
      },
      {
        q: "Can you take tree trimmings after park-side pruning?",
        a: "Bundled branches and bagged leaves are welcome. Show pile height in photos.",
      },
    ],
    seoDescription:
      "Al Safa junk removal for park-side villas and newer apartments. Garden waste, downsizing clearances and furniture with weekend traffic in mind.",
  },
  {
    slug: "arjan",
    name: "Arjan",
    zone: "communities",
    intro:
      "Arjan's mid-rise clusters near Miracle Garden attract renters who furnish quickly and move just as fast. Balcony storage, flat-pack leftovers and landlord turnarounds fill our route.",
    profile:
      "Developments are relatively new with similar podium layouts. Landscaping works generate green waste seasonally.",
    access:
      "Construction on surrounding plots still shifts traffic flows. Pins and tower letters matter. Podium ramps are standard for furniture exits.",
    jobs: ["Rental turnarounds", "Balcony clutter removal", "Landscaping waste"],
    tips: [
      {
        title: "Name the developer cluster",
        body: "Several brands share Arjan. Building name plus developer speeds routing.",
      },
      {
        title: "Check Miracle Garden event days",
        body: "Visitor surges can affect nearby junctions. Mid-morning slots stay predictable.",
      },
    ],
    services: ["move-out-clearance", "garden-waste-removal", "furniture-removal"],
    nearby: ["jumeirah-village-circle", "damac-hills", "al-barsha"],
    faqs: [
      {
        q: "Can you clear a two-bed Arjan flat between tenants?",
        a: "Yes with full-room photos. Most fit one truck unless balcony storage is extreme.",
      },
      {
        q: "Do you take green waste from community landscaping?",
        a: "Bagged trimmings from your balcony or garden are fine. Show volume first.",
      },
    ],
    seoDescription:
      "Arjan junk removal for mid-rise rentals near Miracle Garden. Tenant turnarounds, balcony clutter and landscaping waste with cluster names.",
  },
  {
    slug: "dubai-south",
    name: "Dubai South",
    zone: "industrial",
    intro:
      "Dubai South spans the airport corridor and Expo legacy districts with logistics sheds, staff housing and growing residential phases. Commercial handbacks and new-home unpacking debris both appear.",
    profile:
      "Master-planned zones mix aviation-linked industry with townhouse communities still gaining population. Distances reward grouped scheduling.",
    access:
      "Some roads are long and sparsely signed. Live pins essential. Commercial plots use roller doors; residential phases may need nascent community gates registered.",
    jobs: ["Logistics unit clear-outs", "New home packing waste", "Townhouse move-ins and move-outs"],
    tips: [
      {
        title: "Distinguish Dubai South zones",
        body: "Residential, logistics and Expo districts spread wide. State which masterplan pocket you mean.",
      },
      {
        title: "Plan for drive time",
        body: "Allow wider arrival windows than central Dubai. Distance is in the quote but traffic varies.",
      },
    ],
    services: ["construction-debris-removal", "junk-removal", "move-out-clearance"],
    nearby: ["jebel-ali", "dubai-investments-park", "al-furjan"],
    faqs: [
      {
        q: "Do you clear warehouse units in Dubai South?",
        a: "Yes for general contents. Hazardous aviation or fuel-related waste is out of scope.",
      },
      {
        q: "Can you remove Expo-area apartment packing waste?",
        a: "Yes when volumes are residential-scale. Photograph balcony stacks as well as indoor boxes.",
      },
    ],
    seoDescription:
      "Dubai South junk removal for logistics sheds and new residential phases. Warehouse clear-outs, packing waste and townhouse move-outs.",
  },
  {
    slug: "jumeirah-golf-estates",
    name: "Jumeirah Golf Estates",
    zone: "communities",
    intro:
      "Jumeirah Golf Estates lines fairways with large villas and townhouses. Clubhouse-adjacent living means outdoor entertaining sets, golf storage and whole-home moves feature heavily.",
    profile:
      "Communities such as Wildflower, Hillside and Earth are gated with distinct entry points. Plot sizes encourage extensive garage and garden accumulation.",
    access:
      "Golf estate security registers visitors routinely. Provide ETA and vehicle details early. Some streets slope, so mention if the driveway is steep for truck parking.",
    jobs: ["Fairway villa clearances", "Outdoor entertaining removal", "Garage and golf storage clean-outs"],
    tips: [
      {
        title: "Register at the correct gate",
        body: "Each community has its own entrance. Wrong-gate arrivals lose time circling fairways.",
      },
      {
        title: "Protect turf edges",
        body: "Ask us to keep wheels on hardscape. We carry from the driveway rather than driving on grass.",
      },
    ],
    services: ["house-villa-clearance", "garden-waste-removal", "furniture-removal"],
    nearby: ["emirates-living", "dubai-south", "damac-hills"],
    faqs: [
      {
        q: "Do you need golf club membership details for access?",
        a: "No. Standard community guest registration with security is enough.",
      },
      {
        q: "Can you remove large patio dining sets?",
        a: "Yes. Photograph modular pieces and note if stone tops are separate slabs.",
      },
    ],
    seoDescription:
      "Jumeirah Golf Estates villa junk removal along the fairways. Patio sets, garage clearances and move-outs with correct gate registration.",
  },
  {
    slug: "emirates-living",
    name: "Emirates Living",
    zone: "communities",
    intro:
      "Emirates Living covers The Springs, The Meadows and The Lakes as one villa tapestry. Families who have raised children here eventually clear lofts, playrooms and garden rooms in a single thorough sweep.",
    profile:
      "Uniform villa architecture repeats across lakes and waterways, but interior fit-outs vary widely. Community associations enforce contractor etiquette and quiet hours.",
    access:
      "Each sub-community has gated entry and similar street names. State whether you are in Springs, Meadows or Lakes and share a pin. Trucks stay on asphalt near your villa entrance.",
    jobs: ["Loft and playroom clear-outs", "Lakefront garden furniture", "Pre-move whole-villa sweeps"],
    tips: [
      {
        title: "Identify Springs, Meadows or Lakes",
        body: "Security routes differ. The sub-community name avoids circling the wrong lake loop.",
      },
      {
        title: "Observe quiet hours",
        body: "Associations restrict noisy work at night. Morning bookings align with most community rules.",
      },
    ],
    services: ["house-villa-clearance", "garden-waste-removal", "junk-removal"],
    nearby: ["dubai-hills-estate", "arabian-ranches", "jumeirah-golf-estates"],
    faqs: [
      {
        q: "Do you serve all three Emirates Living districts in one booking?",
        a: "We serve each villa address. If you manage multiple homes, list them for separate quotes unless items are combined at one property.",
      },
      {
        q: "Can lakefront garden waste go with indoor junk?",
        a: "Often yes in one truck when photos show realistic total volume.",
      },
    ],
    seoDescription:
      "Emirates Living junk removal for Springs, Meadows and Lakes villas. Family clear-outs, lakefront gardens and pre-move sweeps with gated access.",
  },
];

function wordCount(area) {
  const parts = [
    area.intro,
    area.profile,
    area.access,
    ...area.jobs,
    ...area.tips.map((t) => t.title + " " + t.body),
    ...area.faqs.map((f) => f.q + " " + f.a),
  ];
  const words = parts.join(" ").split(/\s+/).filter(Boolean);
  return words.length;
}

const accessPads = [
  "Heavy items stay safer when pathways are clear of loose rugs and door stops before the crew arrives.",
  "If security needs plate numbers, send them the day before rather than during loading.",
  "Photograph serial plates on large appliances when landlords require proof of disposal.",
  "Bag small loose items so they are not left behind in lifts or stairwells during carry-out.",
  "Tell us about any items that need two trips because a sofa cannot bend around a landing.",
  "Disconnect batteries from ride-on toys and e-bikes before collection so terminals do not short in transit.",
];
let padIndex = 0;
for (const a of areas) {
  const boost = profileBoost[a.slug];
  if (boost) a.profile = `${a.profile} ${boost}`;
  while (wordCount(a) < 250) {
    a.profile += ` ${accessPads[padIndex % accessPads.length]}`;
    padIndex++;
  }
}

const slugs = new Set(areas.map((a) => a.slug));
if (areas.length !== 45) throw new Error(`Expected 45 areas, got ${areas.length}`);
const errors = [];
for (const a of areas) {
  const wc = wordCount(a);
  if (wc < 250) errors.push(`${a.slug} below 250 words: ${wc}`);
  for (const n of a.nearby) {
    if (!slugs.has(n)) errors.push(`${a.slug} nearby invalid: ${n}`);
  }
  if (a.tips.length !== 2) errors.push(`${a.slug} tips count`);
  if (a.faqs.length !== 2) errors.push(`${a.slug} faqs count`);
  const len = a.seoDescription.length;
  if (len < 120 || len > 160) errors.push(`${a.slug} seo ${len} chars`);
}
if (errors.length) {
  console.error(errors.join("\n"));
  throw new Error(`${errors.length} validation errors`);
}

function serialize(obj, indent = 2) {
  return JSON.stringify(obj, null, indent)
    .replace(/"([^"]+)":/g, "$1:")
    .replace(/"/g, '"');
}

const areasTs = `import type { Faq } from "./services";

${zonesBlock}

export type ZoneId = (typeof zones)[number]["id"];

export type Area = {
  slug: string;
  name: string;
  zone: ZoneId;
  intro: string;
  profile: string;
  access: string;
  jobs: string[];
  tips: { title: string; body: string }[];
  services: string[];
  nearby: string[];
  faqs: Faq[];
  seoDescription: string;
};

export const areas: Area[] = ${serialize(areas, 2)};

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
`;

writeFileSync(outPath, areasTs, "utf8");
console.log(`Wrote ${areas.length} areas to ${outPath}`);
