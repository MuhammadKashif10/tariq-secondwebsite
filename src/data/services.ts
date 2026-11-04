import type { IconName } from "@/components/Icon";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  /** Used in card grids. */
  short: string;
  icon: IconName;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string[];
  includes: string[];
  items: string[];
  tips: { title: string; body: string }[];
  faqs: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "junk-removal",
    name: "Junk Removal",
    short: "Mixed loads from homes and businesses. If two people can carry it, it can go.",
    icon: "truck",
    metaTitle: "Junk Removal Dubai: Fixed Price from a Photo",
    metaDescription:
      "General junk removal anywhere in Dubai. Send a WhatsApp photo, get a fixed price, and our crew lifts, loads and sweeps up. Same-day slots when available.",
    headline: "Whatever's in the way, gone in one visit.",
    intro: [
      "Most jobs aren't one neat category. It's a broken chair, three bags of old clothes, a treadmill nobody uses and a pile of boxes from the last move. That mixed load is exactly what this service is for.",
      "You point, we carry. The crew handles everything from the room to the truck, so you don't need to drag anything to the lobby or the kerb first.",
    ],
    includes: [
      "All lifting and carrying from wherever the items are",
      "Basic disassembly when something won't fit through a door",
      "Loading, transport and disposal",
      "A quick sweep of the cleared space",
    ],
    items: ["Old furniture", "Boxes and bags", "Exercise equipment", "Toys and bikes", "Carpets and rugs", "Luggage", "Shelving", "Storeroom clutter"],
    tips: [
      {
        title: "Get it all in one photo",
        body: "Stand back far enough to show the whole pile, then add a close-up of anything heavy. It's the fastest route to an accurate price.",
      },
      {
        title: "Mention your floor and lift",
        body: "Tell us the floor number and whether there's a service lift. It affects the crew size we send, so we'd rather know before we quote.",
      },
    ],
    faqs: [
      {
        q: "Do I need to sort things before you arrive?",
        a: "No. Point out what's going and what's staying, and the crew takes it from there. If something is hazardous, such as paint, chemicals or gas bottles, tell us in advance because it can't go in a mixed load.",
      },
      {
        q: "What if I add more items on the day?",
        a: "That's fine as long as there's room on the truck. The crew will confirm any change to the price with you before they load the extra items.",
      },
      {
        q: "Is there a minimum job size?",
        a: "We collect single items as well as full truckloads. Send a photo and you'll get a price for exactly what you've got.",
      },
    ],
    related: ["furniture-removal", "same-day-junk-removal", "house-villa-clearance"],
  },
  {
    slug: "furniture-removal",
    name: "Furniture Removal",
    short: "Wardrobes, beds, dining sets and desks, taken apart if they need to be.",
    icon: "wardrobe",
    metaTitle: "Furniture Removal Dubai: Old Furniture Collected",
    metaDescription:
      "Old furniture removal in Dubai, from a single wardrobe to a full home. We dismantle, carry and dispose, and set aside usable pieces for reuse.",
    headline: "That wardrobe came in somehow. We'll get it out.",
    intro: [
      "Dubai furniture tends to be big and flat-pack furniture tends to fight back. Built-up wardrobes, king-size bed frames and marble-top tables rarely fit in a passenger lift as they are.",
      "Our crews bring the tools to take pieces apart on site, protect the corners on the way out, and load everything without you lifting a thing.",
    ],
    includes: [
      "Dismantling of beds, wardrobes and flat-pack units",
      "Carrying from any room, including upper villa floors",
      "Reuse where a piece is still in good condition",
      "Disposal of the rest",
    ],
    items: ["Wardrobes", "Bed frames", "Dining tables and chairs", "TV units", "Desks and office chairs", "Bookcases", "Outdoor furniture", "Kids' furniture"],
    tips: [
      {
        title: "Empty drawers and shelves first",
        body: "Full drawers make furniture heavier and riskier to move, and it's easy to lose something you meant to keep.",
      },
      {
        title: "Tell us about glass and marble",
        body: "Heavy or fragile tops need extra hands. Flag them in your photo and we'll send the right crew the first time.",
      },
    ],
    faqs: [
      {
        q: "Will you dismantle my furniture?",
        a: "Yes. Standard disassembly of beds, wardrobes and flat-pack units is part of the job. Tell us if anything is fixed to the wall, because built-in units may need a carpenter first.",
      },
      {
        q: "Can my old furniture be donated?",
        a: "If it's clean and usable, we'll try to pass it on for reuse rather than dispose of it. Pieces that are broken, stained or infested can't be reused.",
      },
      {
        q: "Can you take just one piece of furniture?",
        a: "Yes. Single-item pickups are one of our most common jobs. Send a photo and the location for a price.",
      },
    ],
    related: ["sofa-removal", "mattress-removal", "move-out-clearance"],
  },
  {
    slug: "sofa-removal",
    name: "Sofa Removal",
    short: "L-shaped, recliner or sofa bed, out through doors they swear they won't fit.",
    icon: "sofa",
    metaTitle: "Sofa Removal Dubai: Couch Pickup and Disposal",
    metaDescription:
      "Sofa and couch removal in Dubai. L-shaped sets, recliners and sofa beds carried out from towers and villas. Send a photo for a fixed price on WhatsApp.",
    headline: "Your new sofa arrives Thursday. The old one leaves first.",
    intro: [
      "A sofa is the piece people most often call about, and the piece that's hardest to shift alone. L-shaped sets need separating, recliners weigh more than they look, and sofa beds hide a steel frame.",
      "We'll work around your delivery date, take the old one out, and leave the space clear for the new one.",
    ],
    includes: [
      "Two-person carry as standard",
      "Separating sectional and L-shaped sets",
      "Protecting door frames and lift interiors in transit",
      "Reuse or disposal after collection",
    ],
    items: ["3-seater sofas", "L-shaped sectionals", "Recliners", "Sofa beds", "Majlis seating", "Armchairs", "Ottomans", "Outdoor lounge sets"],
    tips: [
      {
        title: "Book before the delivery",
        body: "Delivery teams rarely take your old sofa, and often can't place the new one around it. Aim for the day before or the morning of your delivery.",
      },
      {
        title: "Measure if it's a tight lift",
        body: "If the sofa came in before the building's lift rules changed, send us the size. We'll plan the route before the crew arrives.",
      },
    ],
    faqs: [
      {
        q: "Can you take a sofa that won't fit in the lift?",
        a: "Usually, yes. We'll separate sections, remove legs, or use the service lift or stairs when the building allows it. If a sofa genuinely has to be cut down, we'll agree that with you first.",
      },
      {
        q: "Do you take stained or damaged sofas?",
        a: "Yes. Condition doesn't matter for disposal. If it has bed bugs or another infestation, tell us so the crew can wrap it before carrying it through the building.",
      },
      {
        q: "Can you collect from a tower without a service lift booking?",
        a: "Most towers require one for bulky items. We'll tell you what to ask for, and you or your property manager can then book the slot.",
      },
    ],
    related: ["furniture-removal", "mattress-removal", "same-day-junk-removal"],
  },
  {
    slug: "mattress-removal",
    name: "Mattress Removal",
    short: "Any size, any condition. Wrapped and out without dragging it through the lobby.",
    icon: "mattress",
    metaTitle: "Mattress Removal Dubai: Old Mattress Disposal",
    metaDescription:
      "Old mattress disposal in Dubai. Single to super-king collected from your room, wrapped if needed, and removed the same week or often the same day.",
    headline: "Don't leave it by the bins. We'll take it from the bedroom.",
    intro: [
      "Mattresses are awkward, floppy and too big for building bin rooms, and leaving one by the bins can cause trouble with your building. They're also the item people least want to handle themselves.",
      "We'll collect straight from the bedroom. If it's soiled or there's a pest concern, we wrap it first so it goes through corridors and lifts cleanly.",
    ],
    includes: [
      "Collection from the bedroom",
      "Wrapping on request",
      "Bed frame and base removal in the same trip",
      "Responsible disposal",
    ],
    items: ["Single mattresses", "Queen and king", "Super-king", "Memory foam", "Spring mattresses", "Divan bases", "Toppers", "Baby cot mattresses"],
    tips: [
      {
        title: "Do the bed at the same time",
        body: "Base, headboard and mattress are usually one easy job, and it's better value than booking twice.",
      },
      {
        title: "Mention bed bugs upfront",
        body: "There's no judgement. It simply tells the crew to wrap the mattress and frame before moving them, which protects your neighbours too.",
      },
    ],
    faqs: [
      {
        q: "Can a mattress be recycled in Dubai?",
        a: "Some can, depending on the condition and the materials. Mattresses that are soiled or infested normally go for disposal. We'll be straight with you about where yours is headed.",
      },
      {
        q: "Can you remove a mattress with bed bugs?",
        a: "Yes. Tell us beforehand and we'll wrap it fully before it leaves the room. If you're also treating the flat, take it out before the pest control visit where you can.",
      },
    ],
    related: ["sofa-removal", "furniture-removal", "junk-removal"],
  },
  {
    slug: "appliance-removal",
    name: "Appliance Removal",
    short: "Fridges, washers, ovens and AC units, disconnected items carried out safely.",
    icon: "fridge",
    metaTitle: "Appliance Removal Dubai: Fridge and Washer Disposal",
    metaDescription:
      "Old fridge, freezer, washing machine and oven removal in Dubai. Heavy appliances carried out and sent for proper recycling. Fixed price by WhatsApp.",
    headline: "Heavy, awkward and past it. That's our kind of appliance.",
    intro: [
      "Appliances are heavy, and many contain metals and components worth recovering. Fridges and AC units also contain refrigerant, so they shouldn't just be dumped.",
      "We'll carry them out without scraping your floors and direct them towards specialist recycling wherever possible.",
    ],
    includes: [
      "Carrying from kitchen, laundry or storeroom",
      "Floor protection on the way out",
      "Stair carries in villas",
      "Metal and component recycling where possible",
    ],
    items: ["Fridges and freezers", "Washing machines", "Dryers", "Dishwashers", "Ovens and cookers", "Microwaves", "Water dispensers", "Split AC units"],
    tips: [
      {
        title: "Defrost the day before",
        body: "Switch off and empty your fridge or freezer about 24 hours ahead. It's lighter, and it won't leak in the lift.",
      },
      {
        title: "Disconnect water and gas first",
        body: "Our crew moves appliances but isn't a plumbing or gas service. Ask your maintenance team to disconnect anything plumbed or gas-fed before we arrive.",
      },
    ],
    faqs: [
      {
        q: "Do you disconnect appliances?",
        a: "We can unplug and move free-standing appliances. Anything plumbed in or connected to gas should be disconnected by a qualified technician before we arrive.",
      },
      {
        q: "Will you take a broken fridge?",
        a: "Yes, working or not. Please empty it and let it defrost so it doesn't leak during the carry.",
      },
      {
        q: "Can you remove a split AC unit?",
        a: "We can collect units that have already been taken down. Removing one from the wall needs an AC technician so the refrigerant is handled properly.",
      },
    ],
    related: ["e-waste-removal", "junk-removal", "move-out-clearance"],
  },
  {
    slug: "house-villa-clearance",
    name: "House & Villa Clearance",
    short: "Every room, the garage and the garden. One quote, one crew, one finish line.",
    icon: "villa",
    metaTitle: "Villa Clearance Dubai: Full House Clearance Service",
    metaDescription:
      "Full house and villa clearance across Dubai. Rooms, maids' quarters, garage and garden cleared to an agreed plan, with a single fixed quote.",
    headline: "A whole villa, cleared to a plan instead of a panic.",
    intro: [
      "Clearing a home is rarely only about the junk. You may be selling, relocating or handling a family member's belongings, and often you're doing it on a deadline set by someone else.",
      "We'll agree exactly what stays and what goes, then work room by room. For a large villa we can arrange a walkthrough or a video call before quoting.",
    ],
    includes: [
      "A room-by-room plan agreed in advance",
      "Bedrooms, majlis, maids' room, garage, roof and garden",
      "Separating items you want kept, donated or discarded",
      "A broom-clean finish, with deep cleaning available on request",
    ],
    items: ["Whole-home contents", "Garage and storeroom", "Garden furniture", "Kids' play equipment", "Trampolines and swings", "Kitchen contents", "Wardrobes of clothes", "Above-ground pools"],
    tips: [
      {
        title: "Tag what stays",
        body: "Coloured stickers on keep items are the simplest system. It removes doubt on the day, especially if you won't be there.",
      },
      {
        title: "Remove papers and valuables first",
        body: "Passports, tenancy papers and jewellery turn up in the most unlikely drawers. Check before the crew starts, even in rooms you think are empty.",
      },
    ],
    faqs: [
      {
        q: "How long does a villa clearance take?",
        a: "A typical villa takes around a day, and a large or very full one may take longer. We'll give you a realistic timeline with your quote.",
      },
      {
        q: "Do I need to be there?",
        a: "Not throughout. Once the plan is agreed and the crew has access, you can leave them to it. We'll send photos when it's done.",
      },
      {
        q: "Can you clear a property for an estate or overseas owner?",
        a: "Yes. We can work with a family member, landlord or agent who has access, as long as they have the authority to instruct the clearance.",
      },
    ],
    related: ["move-out-clearance", "garden-waste-removal", "furniture-removal"],
  },
  {
    slug: "move-out-clearance",
    name: "Move-Out Clearance",
    short: "End of tenancy in Dubai? Leave it empty and get closer to your deposit.",
    icon: "key",
    metaTitle: "Move-Out Junk Removal Dubai: End of Tenancy Clearance",
    metaDescription:
      "Moving out in Dubai? We clear leftover furniture and junk before handover, working around your building's move-out permit and service lift slot.",
    headline: "Handover's on Friday. The flat will be empty by then.",
    intro: [
      "The last week of a tenancy always leaves a pile of things that aren't worth moving: a cheap desk, a worn-out mattress, the fridge that came with the last flat.",
      "We'll clear what's left so the property can be inspected empty. We know move-out days in Dubai run on building permits and lift slots, so we plan around them.",
    ],
    includes: [
      "Clearing leftovers in your move-out window",
      "Working to your building's lift slot",
      "Balcony, storeroom and parking space clear-outs",
      "Coordination with your movers if they're there the same day",
    ],
    items: ["Unwanted furniture", "Old mattresses", "Balcony clutter", "Kitchen leftovers", "Storage cage contents", "Broken appliances", "Curtains and rugs", "Packing waste"],
    tips: [
      {
        title: "Ask about the permit early",
        body: "Many Dubai communities need a move-out permit or an NOC before anything bulky leaves, and approval can take a few days. Check with building management first.",
      },
      {
        title: "Check what belongs to the landlord",
        body: "In furnished flats, compare what's going with your inventory list. Fridges and wardrobes are easy to mistake for your own.",
      },
    ],
    faqs: [
      {
        q: "Do I need a permit for junk removal when moving out?",
        a: "Often, yes. Many towers and communities require a move-out permit, and some ask for a deposit. Rules vary, so check with your building management. We'll give you any crew or vehicle details they ask for.",
      },
      {
        q: "Can you come on the same day as my movers?",
        a: "Yes, and it often works well. Movers take what you're keeping, then we clear the remainder within the same lift booking if the building allows it.",
      },
    ],
    related: ["house-villa-clearance", "furniture-removal", "same-day-junk-removal"],
  },
  {
    slug: "office-clearance",
    name: "Office Clearance",
    short: "Desks, partitions and server racks, cleared after hours if that suits you.",
    icon: "office",
    metaTitle: "Office Clearance Dubai: Furniture and IT Removal",
    metaDescription:
      "Office clearance in Dubai for relocations, downsizing and lease handovers. Desks, chairs, partitions and IT equipment removed, including after hours.",
    headline: "Your lease ends on the 30th. Your desks won't still be there.",
    intro: [
      "Office moves are governed by landlords, access cards and loading bay schedules. Staff still need to work while it all happens.",
      "We'll scope the job, agree a schedule that works with your building, and clear out in phases or after hours so the disruption stays small.",
    ],
    includes: [
      "Workstations, chairs, cabinets and meeting tables",
      "Disassembly of desks and freestanding partitions",
      "Evening and weekend clearances, subject to building rules",
      "Separate handling for IT equipment and e-waste",
    ],
    items: ["Workstations", "Office chairs", "Filing cabinets", "Meeting tables", "Partitions", "Reception desks", "Pantry appliances", "Printers and monitors"],
    tips: [
      {
        title: "Book the loading bay early",
        body: "Commercial towers often need advance notice for loading bays and goods lifts. Ask for the rules, then send them to us so we can plan around them.",
      },
      {
        title: "Wipe drives and shred files first",
        body: "Removal isn't data destruction. Handle stored data and confidential paperwork before collection, or use a specialist with certified destruction.",
      },
    ],
    faqs: [
      {
        q: "Can you work after office hours?",
        a: "Yes. Evenings and weekends are often easier in commercial buildings, as long as the building permits it. Let us know your landlord's working-hours rules when you ask for a quote.",
      },
      {
        q: "Can you provide what a free zone or landlord needs for access?",
        a: "We'll supply crew and vehicle details for gate passes and building access. Send us the requirements as early as you can, since passes can take time to process.",
      },
      {
        q: "Do you remove fixed fit-out items?",
        a: "We remove freestanding furniture and loose items. Stripping fit-out, such as fixed partitions, ceilings and flooring, is a job for a fit-out contractor. We can then clear the debris they leave.",
      },
    ],
    related: ["e-waste-removal", "furniture-removal", "construction-debris-removal"],
  },
  {
    slug: "garden-waste-removal",
    name: "Garden Waste Removal",
    short: "Palm fronds, cuttings, dead plants and old planters after the landscapers leave.",
    icon: "palm",
    metaTitle: "Garden Waste Removal Dubai: Palm and Green Waste",
    metaDescription:
      "Garden waste removal for Dubai villas. Palm fronds, branches, hedge cuttings, soil and old planters bagged and taken away. Send a photo for a fixed price.",
    headline: "Palm fronds don't fit in the bin. They fit on our truck.",
    intro: [
      "A villa garden in Dubai grows fast, and a good trim leaves a heap that's far too large for community bins. Palm fronds are spiky and bulky, while soil and stone are heavier than they look.",
      "We'll load it all up, including the old pots, broken furniture and turf that came out during your landscaping.",
    ],
    includes: [
      "Loading cuttings, fronds and branches",
      "Bagging loose green waste",
      "Removal of soil, sand and old turf",
      "Taking away planters, pots and garden furniture",
    ],
    items: ["Palm fronds", "Branches", "Hedge cuttings", "Dead plants", "Old turf", "Soil and sand", "Planters", "Broken pergolas"],
    tips: [
      {
        title: "Pile it near the gate",
        body: "Not essential, but a single pile near vehicle access speeds up the job and may lower your price.",
      },
      {
        title: "Tree felling is a separate job",
        body: "We remove what's already been cut. Taking down a tall palm needs a tree specialist, and your community may also need to approve it.",
      },
    ],
    faqs: [
      {
        q: "Do you cut trees and palms?",
        a: "No. We clear garden waste after it has been cut. A landscaper or tree surgeon should handle felling, and we can come straight after they finish.",
      },
      {
        q: "Can you remove soil and sand?",
        a: "Yes. Soil is heavy, so we price it by weight and access. Show the amount in your photo and tell us how far it is from the truck.",
      },
    ],
    related: ["house-villa-clearance", "construction-debris-removal", "junk-removal"],
  },
  {
    slug: "construction-debris-removal",
    name: "Renovation Debris Removal",
    short: "Bagged rubble, tiles, old cabinets and fit-out offcuts from small renovations.",
    icon: "bricks",
    metaTitle: "Renovation Debris Removal Dubai: Rubble Clearance",
    metaDescription:
      "Renovation waste removal for Dubai homes and offices. Bagged rubble, tiles, old kitchens and bathroom fittings cleared after your contractor finishes.",
    headline: "The new kitchen looks great. The old one's still in the garage.",
    intro: [
      "Renovation contractors often leave debris behind, or quote separately to remove it. Bags of tile, a dismantled kitchen and rolls of old carpet quickly fill a garage.",
      "This service suits small and mid-size residential or office refurbishments. Heavy demolition and large sites need a skip and a licensed waste contractor, and we'll tell you if that's what your job needs.",
    ],
    includes: [
      "Bagged rubble and tile waste",
      "Old kitchen cabinets and bathroom fittings",
      "Doors, flooring, carpet and gypsum offcuts",
      "Clearance of garages, corridors and parking bays",
    ],
    items: ["Bagged rubble", "Broken tiles", "Old kitchens", "Sanitary ware", "Doors and frames", "Carpet and vinyl", "Gypsum board", "Wood offcuts"],
    tips: [
      {
        title: "Bag it before we arrive",
        body: "Bagged rubble is far faster to carry and keeps lifts and corridors clean. Most buildings insist on it anyway.",
      },
      {
        title: "Asbestos needs a specialist",
        body: "If you suspect asbestos in an older property, stop work and speak to an approved specialist. It can't be handled as ordinary debris.",
      },
    ],
    faqs: [
      {
        q: "Do you supply skips?",
        a: "No. We work with trucks and hand-loading, which suits buildings where a skip can't be placed. For large volumes of loose rubble, a skip from a licensed contractor is the better option.",
      },
      {
        q: "Will you take loose rubble?",
        a: "We prefer it bagged, particularly in towers. If it's loose, tell us and we can quote for bagging on site.",
      },
    ],
    related: ["garden-waste-removal", "office-clearance", "house-villa-clearance"],
  },
  {
    slug: "e-waste-removal",
    name: "E-Waste Removal",
    short: "Old TVs, computers and cables, kept separate and directed towards recycling.",
    icon: "chip",
    metaTitle: "E-Waste Removal Dubai: TV and Computer Recycling",
    metaDescription:
      "E-waste collection across Dubai for homes and offices. Old TVs, computers, printers and cables kept out of general waste and directed towards recycling.",
    headline: "That drawer of dead electronics has a better place to go.",
    intro: [
      "Electronics contain materials that can be recovered and components that shouldn't end up in general waste. Dubai is home to a large specialist e-waste recycling facility, so there's a better option than the bin.",
      "We'll collect your electronics, keep them separate from your other junk, and direct them towards recycling.",
    ],
    includes: [
      "Collection from homes and offices",
      "Keeping e-waste apart from general junk",
      "Carrying large TVs and office equipment",
      "Bulk pickups for IT refreshes",
    ],
    items: ["TVs and monitors", "Laptops and PCs", "Printers", "Routers and cables", "Servers", "Small kitchen appliances", "Game consoles", "Speakers"],
    tips: [
      {
        title: "Wipe your data first",
        body: "Sign out of accounts, then factory reset or remove the drive. We collect hardware, and we don't offer certified data destruction.",
      },
      {
        title: "Keep batteries safe",
        body: "Swollen or damaged lithium batteries are a fire risk. Tell us about them, and don't pack them in with other electronics.",
      },
    ],
    faqs: [
      {
        q: "Do you provide data destruction certificates?",
        a: "No. For data-sensitive equipment, have your drives wiped or destroyed by a specialist first. We can then collect the remaining hardware.",
      },
      {
        q: "Can I just drop off e-waste myself?",
        a: "For small amounts, often yes. Retailers and recyclers run collection points, and our guide explains the options. We're most useful for bulky or larger quantities.",
      },
    ],
    related: ["appliance-removal", "office-clearance", "junk-removal"],
  },
  {
    slug: "same-day-junk-removal",
    name: "Same-Day Junk Removal",
    short: "Message early and we'll try for today. You'll get a straight yes or no.",
    icon: "bolt",
    metaTitle: "Same-Day Junk Removal Dubai: Urgent Pickup",
    metaDescription:
      "Need junk gone today? WhatsApp us a photo. If a crew can reach you in Dubai today we'll confirm a time. If not, we'll say so straight away.",
    headline: "Need it gone today? Ask now and get a straight answer.",
    intro: [
      "Landlord inspection tomorrow. Delivery arriving this afternoon. A lift slot that just opened up. Sometimes next week isn't good enough.",
      "We keep this simple. Send a photo and your location, and we'll check the crews on the road. If we can do today, you'll get a time window. If we can't, we'll tell you right away and offer the earliest slot.",
    ],
    includes: [
      "Live availability check on WhatsApp",
      "A fixed price before the crew sets off",
      "A time window, with a message when the crew is on the way",
      "All standard lifting, loading and disposal",
    ],
    items: ["Urgent single items", "Pre-inspection clear-outs", "Pre-delivery removals", "Last-minute move-outs", "Storeroom clear-outs", "Flood or leak-damaged goods", "Event leftovers", "Failed-collection items"],
    tips: [
      {
        title: "Message before midday",
        body: "Morning requests have the best chance of a same-day slot, because crews plan their routes by area.",
      },
      {
        title: "Sort your access first",
        body: "A same-day truck is no use if the tower needs 24 hours' notice for a service lift. Check with security or reception before you book.",
      },
    ],
    faqs: [
      {
        q: "Is same-day junk removal guaranteed?",
        a: "No, and be wary of anyone who says it is. It depends on crews, traffic and your building's access rules. We'll always tell you the real position straight away.",
      },
      {
        q: "Does same-day removal cost more?",
        a: "It can, particularly at peak times or for an evening slot. Your quote will show the full price before you say yes.",
      },
    ],
    related: ["junk-removal", "sofa-removal", "move-out-clearance"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
