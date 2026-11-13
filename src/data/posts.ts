export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title?: string; body: string }
  | { type: "quote"; text: string; cite?: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date. Update when you revise a post. */
  date: string;
  /** ISO date. Shown on the page and used for sitemap lastModified when set. */
  updated?: string;
  readMinutes: number;
  tag: string;
  blocks: Block[];
  sources?: { label: string; url: string }[];
  relatedService: string;
};

const PUBLISHED = "2026-11-04";

export const posts: Post[] = [
  {
    slug: "dubai-municipality-free-bulky-waste-vs-private-junk-removal",
    title: "Free municipal pickup or paid junk removal in Dubai?",
    description:
      "Dubai Municipality runs a free bulky waste service. Here's how it works, where it doesn't reach, and when paying for junk removal makes sense.",
    date: PUBLISHED,
    readMinutes: 4,
    tag: "Dubai guide",
    relatedService: "junk-removal",
    blocks: [
      {
        type: "p",
        text: "We run a paid service, so here's something you might not expect us to say: if you live in a villa, you aren't in a hurry, and your items are ready to go, Dubai Municipality's free bulky waste service may be all you need.",
      },
      { type: "h2", text: "How the municipal service works" },
      {
        type: "p",
        text: "Residents can ask for a bulky waste collection by calling or messaging the municipality on 800900, or through its digital channels. A municipality employee then calls to arrange the pickup. Published reports describe collection happening within a few days, in the early morning.",
      },
      {
        type: "p",
        text: "Details can change, so check the current terms with Dubai Municipality before relying on them.",
      },
      { type: "h2", text: "Where it doesn't reach" },
      {
        type: "p",
        text: "Published details say the service doesn't cover free zones or real estate development zones, and that it has access limits for high-rise buildings. For many residents of newer master communities and towers, that matters. Even where it's available, you can't count on a crew carrying a wardrobe down from your bedroom.",
      },
      { type: "h2", text: "When a private crew is worth paying for" },
      {
        type: "ul",
        items: [
          "You live in a tower, a free zone or a development outside the service area",
          "You need the items carried from inside the property",
          "You have a deadline, such as a handover, an inspection or a delivery",
          "Things need dismantling first",
          "It's a mixed load, or a whole property, rather than a few bulky items",
        ],
      },
      { type: "h2", text: "The quick decision" },
      {
        type: "p",
        text: "Check whether your address is eligible. If it is, and the items are easy to reach and you can wait a few days, the free option is hard to beat. If you need speed, carrying or a full clear-out, send us a photo and compare the price.",
      },
    ],
    sources: [
      { label: "Dubai Municipality: bulky waste disposal service", url: "https://www.dm.gov.ae/35-increase-in-requests-for-dubai-municipality-bulky-waste-disposal-service/" },
      { label: "Khaleej Times: free bulk waste removal via WhatsApp", url: "https://www.khaleejtimes.com/uae/dubai-offers-free-bulk-waste-removal-service-via-whatsapp" },
    ],
  },
  {
    slug: "how-junk-removal-is-priced-in-dubai",
    title: "How junk removal is priced in Dubai, and how to pay less",
    description:
      "What really moves the price of a junk removal job in Dubai: volume, weight, access and timing. Plus five simple ways to bring your quote down.",
    date: PUBLISHED,
    readMinutes: 3,
    tag: "Pricing",
    relatedService: "junk-removal",
    blocks: [
      {
        type: "p",
        text: "Junk removal isn't priced by the hour in most cases. A quote is really an estimate of how much of a truck and how much of a crew's day your job will use.",
      },
      { type: "h2", text: "The four things that set the price" },
      {
        type: "ul",
        items: [
          "Volume: how much truck space your items fill",
          "Weight: a pile of soil or tiles takes up less space than a sofa, but costs more to move",
          "Access: floor, lift, carrying distance and parking",
          "Timing: same-day, evening and peak-season slots can cost more",
        ],
      },
      { type: "h2", text: "Five ways to lower your quote" },
      {
        type: "ul",
        items: [
          "Do it all in one trip rather than booking twice",
          "Bag loose items ahead of time",
          "Move small things nearer the door, if you can do so safely",
          "Book the service lift before we come, so the crew doesn't have to wait",
          "Be flexible on the day, as we can sometimes fit you in alongside a nearby job",
        ],
      },
      { type: "h2", text: "Watch out for these quotes" },
      {
        type: "p",
        text: "Be careful with a very low price given without seeing any photos. It often grows on the day with added fees for stairs, labour or fuel. Ask whether the quote covers carrying, loading, transport and disposal, because that's the full job.",
      },
      {
        type: "p",
        text: "Ask how the waste will be disposed of as well. An unusually cheap operator may be cutting corners there, and illegal dumping is the last thing you want connected to your home or business.",
      },
    ],
  },
  {
    slug: "dubai-move-out-junk-checklist",
    title: "The Dubai move-out checklist for what you're not taking",
    description:
      "A week-by-week plan for clearing a Dubai rental before handover, covering building permits, lift slots, donations and last-minute leftovers.",
    date: PUBLISHED,
    readMinutes: 4,
    tag: "Moving",
    relatedService: "move-out-clearance",
    blocks: [
      {
        type: "p",
        text: "Moving out in Dubai has its own rhythm. Your building's rules, your landlord's inspection and the lift schedule all affect the plan. Here's how to deal with everything that isn't coming with you.",
      },
      { type: "h2", text: "Three to four weeks out" },
      {
        type: "ul",
        items: [
          "Read the move-out section of your tenancy contract",
          "Ask building management what permit, NOC or deposit they need",
          "Compare your furniture with the landlord's inventory if the flat came furnished",
          "Start three piles: keep, give away and throw away",
        ],
      },
      { type: "h2", text: "Two weeks out" },
      {
        type: "ul",
        items: [
          "List good items for sale or offer them to friends",
          "Book the service lift for your moving day",
          "Get a quote for removing what's left over, with photos of the larger pieces",
          "Arrange any cleaning or repainting your contract calls for",
        ],
      },
      { type: "h2", text: "Moving week" },
      {
        type: "ul",
        items: [
          "Defrost the fridge the day before it goes",
          "Clear the balcony, storage cage and parking space, which are all easy to forget",
          "Have your movers go first, then let the junk crew clear what remains",
          "Take dated photos of the empty flat for your records",
        ],
      },
      { type: "h2", text: "The mistake to avoid" },
      {
        type: "p",
        text: "Don't leave furniture in the corridor or the bin room. Buildings can charge for removing it, and it can turn into a dispute just as you're trying to get your deposit back.",
      },
    ],
  },
  {
    slug: "how-to-dispose-of-a-mattress-in-dubai",
    title: "How to get rid of an old mattress in Dubai",
    description:
      "Your real options for an old mattress in Dubai, from retailer take-back to municipal pickup and paid removal, plus what to do about bed bugs.",
    date: PUBLISHED,
    readMinutes: 3,
    tag: "How-to",
    relatedService: "mattress-removal",
    blocks: [
      {
        type: "p",
        text: "A mattress won't go in the bin room, and it's miserable to carry alone. You've got four realistic options, and the best one depends on the condition of the mattress and on where you live.",
      },
      { type: "h2", text: "1. Ask your retailer" },
      {
        type: "p",
        text: "If you're buying a new mattress, ask about take-back before you pay. Some retailers will offer it, sometimes for a fee, and it's the easiest option when it's available.",
      },
      { type: "h2", text: "2. Give it away" },
      {
        type: "p",
        text: "A clean mattress in good condition may find a new home through community groups or local charities. Be honest about its age, and check that it's wanted first. Many charities won't accept used mattresses for hygiene reasons.",
      },
      { type: "h2", text: "3. Use the municipal bulky waste service" },
      {
        type: "p",
        text: "If your address qualifies, Dubai Municipality's bulky waste service is free. It doesn't cover everywhere, and it has limits in high-rise buildings, so check first.",
      },
      { type: "h2", text: "4. Book a removal crew" },
      {
        type: "p",
        text: "This is the option for when you want it taken from the bedroom, or when you're dealing with a tower, a tight deadline or more than just the mattress. Combining the mattress with the bed frame usually gives the best value.",
      },
      { type: "h2", text: "What if it has bed bugs?" },
      {
        type: "p",
        text: "Don't drag it uncovered through the corridor. Wrap it fully in plastic, tell whoever's collecting it, and don't offer it to anyone else. Treating the room properly matters too, or a new mattress can become infested as well.",
      },
    ],
  },
  {
    slug: "e-waste-disposal-dubai",
    title: "E-waste in Dubai: what to do with old TVs, laptops and cables",
    description:
      "Why electronics shouldn't go in the general bin, how to protect your data before they leave, and the main ways to recycle e-waste in Dubai.",
    date: PUBLISHED,
    readMinutes: 3,
    tag: "Recycling",
    relatedService: "e-waste-removal",
    blocks: [
      {
        type: "p",
        text: "Nearly every home has a drawer of dead chargers and an old laptop nobody wants to deal with. Electronics contain recoverable materials and components that shouldn't go to landfill, and Dubai has specialist capacity for handling them.",
      },
      { type: "h2", text: "First, protect your data" },
      {
        type: "ul",
        items: [
          "Back up anything you want to keep",
          "Sign out of accounts, including cloud and app stores",
          "Factory reset phones and tablets",
          "Wipe or remove hard drives, and use a specialist for business data",
        ],
      },
      { type: "h2", text: "Your options in Dubai" },
      {
        type: "p",
        text: "Enviroserve operates The Recycling Hub in Dubai Industrial City, a large facility for electronic and specialised waste. Check its current channels for how to send household items. Electronics retailers and community programmes may also run collection points, and these are ideal for small items.",
      },
      {
        type: "p",
        text: "Working devices have other routes too. A laptop that's slow for you may still be useful to someone else, so consider selling it or giving it away once you've wiped it.",
      },
      { type: "h2", text: "When to book a collection" },
      {
        type: "p",
        text: "Collection makes sense for items too large to carry, such as big TVs, for office equipment in bulk, or when e-waste is part of a larger clear-out.",
      },
      { type: "h2", text: "A note on batteries" },
      {
        type: "p",
        text: "Swollen or damaged lithium batteries can catch fire. Don't put them in the bin, and don't pack them in with other electronics. Keep them away from anything flammable, and tell your collector about them.",
      },
    ],
    sources: [
      { label: "Dubai Industrial City: Enviroserve's recycling plant", url: "https://dubaiindustrialcity.ae/media/press-release/enviroserve-launches-world-largest-integrated-e-waste-and-specialised-recycling-plant" },
    ],
  },
  {
    slug: "junk-pickup-from-a-dubai-tower",
    title: "Getting bulky junk out of a Dubai tower without the drama",
    description:
      "Service lifts, loading bays, permits and working hours. What to check with your building before a junk pickup, so the crew isn't turned away.",
    date: PUBLISHED,
    readMinutes: 3,
    tag: "Dubai guide",
    relatedService: "sofa-removal",
    blocks: [
      {
        type: "p",
        text: "In a Dubai tower, the hard part of removing a sofa is rarely the sofa. It's the building rules around it. A short conversation with reception beforehand can save you a wasted booking.",
      },
      { type: "h2", text: "Five questions for building management" },
      {
        type: "ul",
        items: [
          "Do bulky items need a permit or an NOC?",
          "How far ahead do I need to book the service lift?",
          "What times are allowed, and are weekends restricted?",
          "Where should the truck load, and is there a height limit?",
          "Do you need the crew's or the vehicle's details in advance?",
        ],
      },
      { type: "h2", text: "Measure the awkward items" },
      {
        type: "p",
        text: "If the piece is large, measure it and compare it with the service lift. Tell your crew the result. They'll know straight away whether it needs dismantling.",
      },
      { type: "h2", text: "On the day" },
      {
        type: "ul",
        items: [
          "Have the booking reference or permit ready",
          "Tell security when the crew is on the way",
          "Clear a route through the flat",
          "Keep your phone close, since the crew may need you to meet them",
        ],
      },
      { type: "h2", text: "If the booking falls through" },
      {
        type: "p",
        text: "Lift slots do get moved. Message your crew as soon as you hear, and they'll work out the next available time with you.",
      },
    ],
  },
  {
    slug: "how-to-dispose-of-old-furniture-in-dubai",
    title: "How to dispose of old furniture in Dubai: every option",
    description:
      "Sell it, give it away, book the free municipal pickup or hire a crew. How to dispose of old furniture in Dubai, and which route suits which piece.",
    date: "2026-11-13",
    readMinutes: 7,
    tag: "Dubai guide",
    relatedService: "furniture-removal",
    blocks: [
      {
        type: "p",
        text: "There are four legal ways to dispose of old furniture in Dubai: sell it, give it away, book Dubai Municipality's free bulky waste pickup, or pay a crew to carry it out and take it away. Which one suits you depends on the condition of the piece, where you live and how soon it has to go.",
      },
      {
        type: "p",
        text: "Leaving it next to the bins isn't on the list. Below, we compare the four routes, show which suits which kind of furniture, and explain what changes between a tower and a villa.",
      },
      {
        type: "callout",
        title: "Need it gone this week?",
        body: "Send a photo of the pieces on WhatsApp and we'll reply with a fixed price before anything moves.",
      },
      { type: "h2", text: "The four routes for unwanted furniture" },
      { type: "h3", text: "Sell it" },
      {
        type: "p",
        text: "Branded, clean pieces in good condition often sell quickly in Dubai, because people arrive and leave all year. Listing sites such as dubizzle and local Facebook groups are the usual places to start.",
      },
      {
        type: "p",
        text: "Selling takes time, though. You photograph the piece, answer messages, agree a price and wait for the buyer to collect. Some buyers don't turn up. If you have a handover date, set a deadline for the sale and plan what happens to anything still unsold.",
      },
      { type: "h3", text: "Give it away or donate" },
      {
        type: "p",
        text: "Good furniture can go to a friend, a colleague, a neighbour, a community group or a charity. Giving away is faster than selling, because a free item attracts takers. The catch is the same: someone has to collect it, and they need to fit it through your doors and into their car.",
      },
      {
        type: "p",
        text: "Charities can be selective. Before you promise anything to an organisation, check what it currently accepts and whether it collects, because many turn down stained, broken or very large pieces.",
      },
      { type: "h3", text: "Dubai Municipality's bulky waste pickup" },
      {
        type: "p",
        text: "Dubai Municipality runs a free bulky waste service for furniture and electronics. Its services page says items are collected within three working days, and the service doesn't cover investment zones. A 2022 announcement adds that residents of real estate development zones and free zones aren't eligible. Requests go through the municipality's channels, including its 800900 hotline.",
      },
      {
        type: "p",
        text: "If you're eligible, the items are easy to reach and you can wait a few days, it's hard to beat. Our guide comparing the free municipal pickup with paid junk removal explains where it does and doesn't reach.",
      },
      { type: "h3", text: "Book a removal crew" },
      {
        type: "p",
        text: "A paid crew suits furniture that has to go on a set day, pieces that need carrying from inside the home or dismantling first, and anyone whose address the free service doesn't cover. You pay for the labour, the truck and the disposal, and in return it's done in one visit.",
      },
      {
        type: "p",
        text: "With us, you send photos, agree a fixed price, and the crew dismantles what needs dismantling, carries it from any floor and sweeps up. Usable pieces are reused or recycled where possible. Nothing is dumped.",
      },
      { type: "h3", text: "Why dumping beside the bin isn't an option" },
      {
        type: "p",
        text: "Dubai treats furniture left beside a bin as a violation, not a collection. Dubai's published public hygiene penalty schedule, Executive Council Resolution No. 14 of 2015, lists a fine of AED 1,000 for leaving goods near a waste container. Dubai's waste rules were updated by Law No. 18 of 2024, so check the Dubai Legislation Portal for the current amounts.",
      },
      {
        type: "p",
        text: "In a tower, bin rooms and corridors belong to the building. Management can charge you for clearing them, which is the last thing you need during a move-out inspection.",
      },
      { type: "h2", text: "Which route suits which piece" },
      { type: "h3", text: "Usable, branded pieces" },
      {
        type: "p",
        text: "Try to sell or give away anything in good condition first, especially solid wood, recognised brands, outdoor sets and children's furniture. List it two or three weeks before you need it gone. That gives you time to sell it, and time to book a pickup for whatever is left.",
      },
      { type: "h3", text: "Broken, stained or infested pieces" },
      {
        type: "p",
        text: "Nobody will buy a sagging sofa, a cracked table or a stained mattress, and charities will usually refuse them too. These go straight to the municipal pickup or a paid crew.",
      },
      {
        type: "p",
        text: "If you suspect bed bugs, say so when you book, so the crew can wrap the piece before it leaves the room. Don't drag an infested sofa through a shared corridor uncovered.",
      },
      { type: "h3", text: "Built-in wardrobes and heavy wood" },
      {
        type: "p",
        text: "Large wardrobes, solid wood beds and marble-topped tables are the pieces people underestimate. They often won't fit through a door or into a lift in one piece, and they're too heavy for a buyer to carry alone.",
      },
      {
        type: "p",
        text: "Check whether the wardrobe is fixed to the wall or belongs to the landlord before you plan its removal. If it's yours and freestanding, it will usually need taking apart before it can leave.",
      },
      { type: "h2", text: "Tower or villa: what changes" },
      { type: "h3", text: "Service lifts and move permits" },
      {
        type: "p",
        text: "In a tower, getting a bulky item from your flat to the street can be harder than finding it a new home. Many buildings ask you to book the service lift, and some treat furniture leaving the building like a move, which needs a permit from building or community management.",
      },
      {
        type: "p",
        text: "Ask reception before you agree a collection time with a buyer or a crew. A buyer who arrives without a lift slot may be turned away at the loading bay.",
      },
      { type: "h3", text: "Gate passes in gated communities" },
      {
        type: "p",
        text: "Villas are usually easier, with a driveway close to the door and no lift to book. Gated communities often ask for the visitor's or crew's details in advance, though. Register your buyer or crew with security before the day, and give them the gate name and your villa number.",
      },
      { type: "h2", text: "The four routes compared" },
      {
        type: "ul",
        items: [
          "Selling: you may earn a little back, but it can take days or weeks, you handle every message, and the buyer has to carry the piece out",
          "Giving away: it costs nothing and is usually faster than selling, but the taker still has to collect and carry it",
          "Municipal pickup: free, within three working days according to Dubai Municipality, but not for every address, and you need the items ready for collection",
          "Paid crew: you pay for the job, but it's done in one visit, any day that suits you, with the carrying, dismantling and disposal included",
        ],
      },
      {
        type: "p",
        text: "Most people mix the routes. They sell the good pieces, give away the rest of what's usable, and book one pickup for whatever is left at the end.",
      },
      { type: "h2", text: "How to prepare furniture for any collection" },
      {
        type: "ol",
        items: [
          "Empty every drawer and shelf, and check under cushions for keys and cards",
          "Take off glass tops and mirrors, and wrap them separately",
          "Keep the screws and fittings for anything you dismantle in a bag taped to the piece",
          "Measure large items against the doors and the lift",
          "Clear a route from the room to the door",
          "Book the service lift or register the visitor with security",
          "Take photos of the room once it's empty, in case of a later dispute",
        ],
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Can I leave furniture next to the bins?" },
      {
        type: "p",
        text: "No. Dubai's public hygiene penalty schedule lists a fine for leaving goods near a waste container, and buildings can charge for clearing bin rooms and corridors. Use the municipal pickup or a crew instead.",
      },
      { type: "h3", text: "How fast is the free municipal pickup?" },
      {
        type: "p",
        text: "Dubai Municipality's services page says bulky waste is collected for free within three working days, outside investment zones. Check the current terms with the municipality before you rely on a date.",
      },
      { type: "h3", text: "Is it worth paying to have old furniture removed?" },
      {
        type: "p",
        text: "It usually is when you're on a deadline, live in a tower or an area the free service doesn't cover, or have heavy pieces that need dismantling. For a few easy items at an eligible villa with no rush, the free route makes more sense.",
      },
    ],
    sources: [
      { label: "Dubai Municipality: services (bulky waste disposal)", url: "https://www.dm.gov.ae/dubai-municipality-services/" },
      { label: "Dubai Municipality: free bulky waste disposal service (July 2022)", url: "https://www.dm.gov.ae/dubai-municipality-promotes-waste-segregation-through-free-bulky-waste-disposal-service/" },
      { label: "Dubai Municipality: Waste Segregation Guide (800900 bulky waste hotline)", url: "https://www.dm.gov.ae/wp-content/uploads/2024/12/Waste-Segregation-Guide.pdf" },
      { label: "Dubai Legislation Portal: Executive Council Resolution No. 14 of 2015", url: "https://dlp.dubai.gov.ae/Legislation%20Reference/2015/Executive%20Council%20Resolution%20No.%20(14)%20of%202015.html" },
      { label: "Dubai Legislation Portal: Law No. 18 of 2024 Regulating Waste Management", url: "https://dlp.dubai.gov.ae/Legislation%20Reference/2024/Law%20No.%20%2818%29%20of%202024%20Regulating%20Waste%20Management.html" },
    ],
  },
  {
    slug: "move-out-permit-dubai",
    title: "Move-out permits in Dubai: how the NOC and gate pass work",
    description:
      "Who issues a move out permit in Dubai, the documents they ask for, how far ahead to apply, and the common reasons a permit gets held up.",
    date: "2026-11-13",
    readMinutes: 6,
    tag: "Moving",
    relatedService: "move-out-clearance",
    blocks: [
      {
        type: "p",
        text: "A move-out permit is your community's or building's written permission to take furniture and belongings out on a set date. In most Dubai master communities you apply online to the community management company, usually with ID and tenancy documents such as your Ejari. Approval typically takes one to two working days if the paperwork is in order.",
      },
      {
        type: "p",
        text: "The details differ by developer and by building, so treat this as the general process and check your own portal before you book anything. Apply at least a week before you move, not the day before.",
      },
      { type: "h2", text: "What a move-out permit is and who issues it" },
      {
        type: "p",
        text: "Dubai's master communities are run by community management companies, which are usually part of the developer. They control access to the community and to each building's service lift and loading bay. The permit tells their security team that furniture leaving on a certain day is authorised, and who is carrying it.",
      },
      {
        type: "p",
        text: "Two of the largest developers show how it works. In Emaar communities such as Dubai Hills Estate, permits go through Emaar Community Management, on the Sakani portal or the Emaar One app. Nakheel residents and homeowners apply through the My Nakheel app or the Nakheel Online Services website.",
      },
      {
        type: "p",
        text: "Standalone buildings outside a master community usually handle it themselves. Ask the building manager or reception what they need. Some call it a move-out permit, some a gate pass, and some just a no-objection letter, or NOC.",
      },
      { type: "h2", text: "Documents you're likely to need" },
      { type: "h3", text: "Tenancy, ID and account status" },
      {
        type: "p",
        text: "Nakheel publishes its list. Owners provide the title deed or the sales and purchase agreement, plus their Emirates ID, passport and visa copy. Tenants provide the Ejari, plus the owner's Emirates ID, passport and visa copy, so ask your landlord or agent for those early.",
      },
      {
        type: "p",
        text: "For Emaar communities, Bayut lists a visa or Emirates ID and the Ejari tenancy registration. Other developers and buildings ask for similar proof that you're the registered occupant.",
      },
      {
        type: "p",
        text: "Some communities also want to see that the property's community fees are paid. Bayut notes that landlords who are behind on maintenance fees have to settle them, which can hold up a tenant's permit. If you rent, ask your landlord or agent early whether the service charges are up to date.",
      },
      {
        type: "p",
        text: "The form for your community lists exactly what it needs. Have clear scans of each document ready before you start, so the application goes in complete the first time.",
      },
      { type: "h3", text: "Mover or crew details" },
      {
        type: "p",
        text: "The application usually asks who is doing the moving. Emaar's form, as Bayut describes it, asks for the date and time, the moving company's name, the supervisor's name and number, and a security representative's name and number.",
      },
      {
        type: "p",
        text: "Some communities make the company apply as well. Nakheel says that when a third-party moving company is involved, it must submit its own daily pass request one to two working days before the date.",
      },
      {
        type: "p",
        text: "That means you need to book your movers, and any junk removal crew, before you apply. Ask each company for the name and mobile number of the person in charge on the day. If two companies are coming, for example movers in the morning and a clearance crew in the afternoon, check whether the permit needs to list both.",
      },
      { type: "h2", text: "Lead times and booking the service lift" },
      {
        type: "p",
        text: "Nakheel recommends applying three to four working days before the move-out date, because approvals typically take one to two days. Bayut reports that Emaar permits on Sakani can arrive within one business day, as long as the details and documents are correct. Treat those as minimums, not a plan.",
      },
      {
        type: "p",
        text: "A permit and a service lift slot are separate bookings. The permit is from the community. The lift is booked with your building's management, and popular slots at the end of the month go first. A sensible order is:",
      },
      {
        type: "ol",
        items: [
          "Two to three weeks out: ask building management what they need and how far ahead lift slots fill up",
          "Ten days out: book your movers and any clearance crew, and get the supervisor details",
          "One week out: book the service lift, then apply for the permit with the lift time on it",
          "Two days out: check the permit is approved and send a copy to every company coming",
          "On the day: keep the permit on your phone for the crew to show security",
        ],
      },
      { type: "h2", text: "Does junk removal need a permit too?" },
      {
        type: "p",
        text: "Often, yes. To a building's security team, a crew carrying a sofa out looks the same as a mover. Many buildings ask for a permit or a lift booking whenever bulky items leave, even if you aren't moving out.",
      },
      {
        type: "p",
        text: "Before booking a clearance, ask reception one direct question: \"Do I need a permit or a lift booking to have old furniture collected?\" If the answer is yes, apply as you would for a move, with the clearance company as the mover. Our guide to getting bulky junk out of a Dubai tower covers the lift and loading bay questions to ask.",
      },
      {
        type: "callout",
        title: "Clearing what you're not taking",
        body: "If the furniture that's staying behind can go on the same permit and lift slot as your move, you avoid a second booking. Send us photos and your lift time, and we'll give you a fixed price for that slot.",
      },
      { type: "h2", text: "Common reasons permits are delayed" },
      {
        type: "ul",
        items: [
          "Unpaid community or service charges on the property",
          "An Ejari that has expired, or names that don't match the ID on the application",
          "Missing mover details, or a supervisor whose number doesn't answer",
          "Applying for a date or time when the service lift isn't available",
          "Applying the day before, then hitting a weekend or a public holiday",
          "Changing the moving date without updating the permit",
        ],
      },
      {
        type: "p",
        text: "Most of these come down to timing. Applying a week ahead leaves room to fix a rejected application without moving your date.",
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Can I move out without a permit?" },
      {
        type: "p",
        text: "In a community or building that requires one, you shouldn't try. Security checks movements at the gates and loading bays, and a moving truck or crew without a permit can be turned away, leaving you paying for a wasted booking.",
      },
      { type: "h3", text: "Is there a fee or a refundable deposit?" },
      {
        type: "p",
        text: "Nakheel states there is no fee for a move-out permit, and Bayut reports no fee for Emaar's permit documentation. Buildings set their own rules on lift protection or damage deposits, so ask management when you book the service lift, and get any deposit terms in writing.",
      },
      { type: "h3", text: "What if my moving date changes?" },
      {
        type: "p",
        text: "A permit is issued for a specific date, so change it rather than turning up on a different day. Nakheel, for example, handles reschedules by email through its community team, and accepts them depending on availability.",
      },
    ],
    sources: [
      { label: "Nakheel: move-out permit FAQs (how to apply, documents, timing, fees)", url: "https://www.nakheel.com/en/contact-us" },
      { label: "Bayut: how to obtain an Emaar move-in and move-out permit (updated October 2026)", url: "https://www.bayut.com/mybayut/emaar-move-in-out-permit" },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
