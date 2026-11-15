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
  {
    slug: "junk-removal-quote-from-photo",
    title: "How to get a junk removal quote in Dubai from one photo",
    description:
      "The photos and details that turn a WhatsApp message into a fixed junk removal quote in Dubai, and how to stop the price changing on the day.",
    date: "2026-11-14",
    readMinutes: 5,
    tag: "How-to",
    relatedService: "junk-removal",
    blocks: [
      {
        type: "p",
        text: "To get an accurate junk removal quote in Dubai, send clear photos of everything that's going, plus four details: the area, the floor, whether there's a service lift, and where a truck can park. With that, a crew can agree a fixed price before anyone arrives, and the price shouldn't change on the day.",
      },
      {
        type: "p",
        text: "Most quotes that change do so because something was missing from the first message, not because of the crew. Here's what to photograph, what to write, and how to show the items that are hard to judge from a picture.",
      },
      { type: "h2", text: "The five photos that get a fixed price fast" },
      {
        type: "p",
        text: "One photo can be enough for a single sofa. For anything more, these five cover almost every job:",
      },
      {
        type: "ol",
        items: [
          "The whole pile: stand back and get everything that's going in one frame, so the crew can judge the volume",
          "Each large piece on its own: wardrobes, beds, sofas, appliances and tables, taken straight on rather than from above",
          "Anything broken, wet or unusual: a collapsed bed, a leaking fridge, a mirror or a glass top",
          "The route out: the corridor, the stairs, the door to the lift or the gate, especially if anything is narrow or tight",
          "The loading point: the building entrance, the loading bay or the villa driveway, so the crew knows where the truck will stand",
        ],
      },
      {
        type: "p",
        text: "Take the photos in daylight or with the lights on, and hold the phone level. A dark, close-up shot of the corner of a sofa doesn't show how big it is.",
      },
      {
        type: "callout",
        title: "Ready to send?",
        body: "Message the photos and details to us on WhatsApp. We reply with a fixed price, and nothing is booked until you agree it.",
      },
      { type: "h2", text: "Details to include with the photos" },
      {
        type: "p",
        text: "Photos show what's going. These details tell the crew what it will take to get it out:",
      },
      {
        type: "ul",
        items: [
          "Area and building or community, for example \"JVC, a mid-rise building\" or \"Mirdif, a villa\"",
          "The floor, and whether there's a lift big enough for furniture, or only stairs",
          "Whether the building needs a service lift booking or a move permit, and if you have one yet",
          "Parking: a loading bay, a basement with a height limit, roadside only, or a driveway",
          "A location pin, which saves the crew searching for the right entrance",
          "The day and time you'd like, and any deadline, such as a handover or an inspection",
          "Anything that needs dismantling, disconnecting or carrying from a storeroom, balcony or roof",
        ],
      },
      {
        type: "p",
        text: "In a tower, the building's rules can matter as much as the items. If you're not sure what your building needs, ask reception before you book, and include the answer in your message.",
      },
      { type: "h2", text: "Showing heavy or awkward items" },
      {
        type: "p",
        text: "Some things are hard to judge from a photo. A little extra detail stops them becoming a surprise on the day.",
      },
      { type: "h3", text: "Give a sense of size" },
      {
        type: "p",
        text: "For big pieces, add rough measurements or put something familiar beside them, such as a chair or a door. \"A wardrobe about two metres tall and three doors wide\" is far more useful than \"a big wardrobe\".",
      },
      { type: "h3", text: "Say what it's made of" },
      {
        type: "p",
        text: "Two tables can look the same in a photo and weigh very different amounts. Mention marble, granite, glass, solid wood or metal, and anything a single person can't lift. The same goes for bags. Say whether they hold clothes, or tiles and rubble.",
      },
      { type: "h3", text: "Mention anything fixed or connected" },
      {
        type: "p",
        text: "Say if a wardrobe is screwed to the wall, a washing machine is still plumbed in, or a bed is bolted together. It changes the tools and time needed, and some fixed items belong to the landlord, so check before you include them.",
      },
      { type: "h3", text: "Don't forget the hidden spaces" },
      {
        type: "p",
        text: "Storerooms, balconies, maid's rooms, under-bed drawers and parking spaces fill up without anyone noticing. Open them and photograph them too, even if you think they're nearly empty.",
      },
      { type: "h2", text: "Why quotes change on the day, and how to avoid it" },
      {
        type: "p",
        text: "A fixed price is only as good as the information behind it. These are the usual reasons a price has to be looked at again:",
      },
      {
        type: "ul",
        items: [
          "More items than the photos showed, often from a storeroom or balcony",
          "The lift is out of service, too small, or not booked, so everything goes down the stairs",
          "The building turns the crew away because there's no permit or lift slot",
          "Items aren't ready: wardrobes still full, or appliances still connected",
          "Something is far heavier than it looked, such as bags of tiles described as \"some bags\"",
        ],
      },
      {
        type: "p",
        text: "Every one of these can be prevented before the day. Send photos of everything, book the lift, empty what needs emptying, and send a photo of any new item as soon as you add it, so it can be priced before the crew sets out.",
      },
      {
        type: "p",
        text: "How the price itself is worked out (volume, weight, access and timing) is explained on our pricing page. This guide is only about giving the crew what it needs to price the job right the first time.",
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Is a photo quote free?" },
      {
        type: "p",
        text: "Yes. Quotes are free, there's no call-out fee, and you're under no obligation to book. You pay after the job is done.",
      },
      { type: "h3", text: "Can I get a quote for just one item?" },
      {
        type: "p",
        text: "Yes. One clear photo of a single sofa, mattress or appliance, with the area, floor and lift details, is usually all that's needed.",
      },
      { type: "h3", text: "What if I find more things after I've been quoted?" },
      {
        type: "p",
        text: "Send a photo of the extra items before the collection day. The price can be updated in advance, rather than on the doorstep.",
      },
    ],
  },
  {
    slug: "renovation-waste-rules-dubai",
    title: "Construction waste disposal in Dubai: rules for residents",
    description:
      "Where renovation debris can and can't go in Dubai, who is responsible for removing it, what the law and fines say, and how to handle a small DIY job.",
    date: "2026-11-14",
    readMinutes: 6,
    tag: "Dubai guide",
    relatedService: "construction-debris-removal",
    blocks: [
      {
        type: "p",
        text: "Construction waste disposal in Dubai has one basic rule: renovation debris must go to a designated disposal site in an authorised vehicle. It can't go in community bins, building corridors or on empty land.",
      },
      {
        type: "p",
        text: "Under Dubai's waste law, the person who produces the waste is responsible for getting it there. On most renovations that's the contractor, so the simplest protection is to write debris removal into your contract before the work starts.",
      },
      { type: "h2", text: "What counts as construction and demolition waste" },
      {
        type: "p",
        text: "Dubai Municipality describes construction and demolition waste as the residues from building or knocking down buildings and infrastructure, mainly concrete, bricks, gypsum, wood, glass, metals and plastic. A home renovation produces a smaller version of the same thing:",
      },
      {
        type: "ul",
        items: [
          "Broken tiles, rubble and old screed",
          "Gypsum board and old false ceilings",
          "Kitchen cabinets, worktops and old sanitary ware",
          "Doors, frames, skirting and wood offcuts",
          "Cable, pipe and metal fittings",
          "Packaging from the new materials",
        ],
      },
      {
        type: "p",
        text: "Paint tins, solvents, adhesives and other chemicals are different. They can be hazardous, so keep them out of the general debris and ask your contractor how they'll be disposed of.",
      },
      { type: "h2", text: "Where it must not go" },
      { type: "h3", text: "Public places and empty land" },
      {
        type: "p",
        text: "Law No. 18 of 2024, Dubai's waste management law, says that no person may dump, discard, place or otherwise dispose of any waste in public places. The law's definition of a public place includes vacant land plots. The empty plot at the end of the road isn't a disposal site, however convenient it looks.",
      },
      { type: "h3", text: "Community and building bins" },
      {
        type: "p",
        text: "Household bins are for household waste. A few bags of rubble can split a bin and block it for everyone else. Dubai's published public hygiene penalty schedule also lists a fine for leaving goods or equipment next to a waste container.",
      },
      { type: "h3", text: "Corridors, stairwells and car parks" },
      {
        type: "p",
        text: "In a tower, bags of debris left outside the flat or in the car park are a fire and access risk, and they're the building's problem until someone moves them. Most buildings set their own rules for renovation works, so check with management before the work starts and keep debris inside the property until it's collected.",
      },
      { type: "h2", text: "Who is responsible: you or your contractor" },
      {
        type: "p",
        text: "Law No. 18 of 2024 requires a waste producer to transport the waste generated from its activities to disposal sites using authorised vehicles. Dubai Municipality's 2023 circular on sorting construction waste is addressed to contractors and engineering consultants, not homeowners.",
      },
      {
        type: "p",
        text: "In practice, when you hire a contractor, the contractor is producing the debris. When you knock out a bathroom yourself, you are. Either way, the debris has to leave by a legitimate route, and if it's dumped, the building and your neighbours will remember where it came from.",
      },
      { type: "h3", text: "Put debris removal in the contract" },
      {
        type: "p",
        text: "Before you sign, make sure the quote or contract says, in writing:",
      },
      {
        type: "ul",
        items: [
          "That removing all debris from the property is included in the price",
          "How often it will be removed, for example at the end of each stage, so it doesn't pile up",
          "Who will collect it, and where it will be taken",
          "That old fittings you want to keep, such as a vanity or light fittings, are set aside, not thrown out",
          "That corridors, lifts and shared areas will be protected and left clean",
        ],
      },
      {
        type: "p",
        text: "If your community or building requires approval for the renovation, read its conditions on debris and working hours, and give your contractor a copy.",
      },
      { type: "h2", text: "Sorting materials as Dubai Municipality describes" },
      {
        type: "p",
        text: "Dubai Municipality's Circular No. 12-10-1 of 2023 asks contractors to separate and sort construction waste on site before it's transported, for example into concrete, rebar, wood, tiles and plastic. It also asks them to remove reusable parts such as doors, windows, aluminium and cables before demolition.",
      },
      {
        type: "p",
        text: "The circular is written for construction sites, but the same idea makes a home renovation easier:",
      },
      {
        type: "ul",
        items: [
          "Keep heavy material, such as tiles and rubble, apart from bulky light material like cabinets and packaging",
          "Set aside metal, which is easy to recycle",
          "Take doors, fittings and sanitary ware out whole if someone could reuse them",
          "Keep anything hazardous completely separate",
        ],
      },
      {
        type: "p",
        text: "Sorted debris is quicker to load, and whoever collects it can see exactly what they're taking.",
      },
      { type: "h2", text: "Small DIY jobs: practical steps" },
      {
        type: "p",
        text: "Retiling a bathroom or taking out a kitchen yourself still produces a surprising amount of waste. A typical small job goes like this:",
      },
      {
        type: "ol",
        items: [
          "Check your building's or community's rules on renovation works, working hours and debris",
          "Bag rubble in strong bags, and only fill them to a weight one person can lift",
          "Keep the bags inside the property, on a protected floor, not in the corridor",
          "Book the service lift for collection day if you're in a tower",
          "Book a collection that will take it to a proper disposal site, and ask where it's going",
          "Sweep the route afterwards, so the building has nothing to complain about",
        ],
      },
      {
        type: "p",
        text: "When you get a quote for the collection, say what's in the bags. Tiles and rubble weigh far more than they look, and that affects the price and the vehicle.",
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "What is the fine for dumping debris in Dubai?" },
      {
        type: "p",
        text: "Executive Council Resolution No. 14 of 2015 lists AED 1,000 for disposing of waste in public places or on vacant land, and AED 5,000 for disposing of waste or hazardous materials outside designated sites. Law No. 18 of 2024 allows fines of up to AED 500,000, doubled for a repeat within a year, with the specific amounts set by resolution. Check the Dubai Legislation Portal for the current schedule.",
      },
      { type: "h3", text: "Can I put renovation waste in the community bin?" },
      {
        type: "p",
        text: "No. Bins are for household waste, and leaving debris next to them is a listed violation. Book a collection that takes it to a disposal site instead.",
      },
      { type: "h3", text: "Should I hire a skip?" },
      {
        type: "p",
        text: "A skip can suit a large villa project with space for it on the plot. For a flat or a small job, bagged debris collected by a crew is usually simpler, because there's nowhere to put a skip and no one to fill it.",
      },
    ],
    sources: [
      { label: "Dubai Legislation Portal: Law No. 18 of 2024 Regulating Waste Management", url: "https://dlp.dubai.gov.ae/Legislation%20Reference/2024/Law%20No.%20%2818%29%20of%202024%20Regulating%20Waste%20Management.html" },
      { label: "Dubai Legislation Portal: Executive Council Resolution No. 14 of 2015", url: "https://dlp.dubai.gov.ae/Legislation%20Reference/2015/Executive%20Council%20Resolution%20No.%20(14)%20of%202015.html" },
      { label: "Dubai Municipality: Circular No. 12-10-1 of 2023 on sorting construction waste", url: "https://dmpmedia.dm.gov.ae/uploads/2024/12/12-10-1.pdf" },
      { label: "Dubai Municipality: Technical Guidelines on Construction and Demolition Waste Collection and Transportation (2024)", url: "https://dmpmedia.dm.gov.ae/uploads/2026/06/3-CD-Waste-Collection-and-Transportation.pdf" },
    ],
  },
  {
    slug: "office-relocation-clearance-checklist-dubai",
    title: "Office relocation checklist for a Dubai lease handover",
    description:
      "An office relocation checklist for Dubai: what to clear and when, how to split movers from the clearance crew, and what the building and landlord need.",
    date: "2026-11-15",
    readMinutes: 6,
    tag: "Moving",
    relatedService: "office-clearance",
    blocks: [
      {
        type: "p",
        text: "An office relocation in Dubai runs on two lists: what moves to the new office, and what has to leave the old one before the lease ends. This checklist covers the second list, from scoping the clear-out three months ahead to the walk-through on handover day.",
      },
      {
        type: "p",
        text: "Most handovers that slip do so because the clearance was planned last. The movers get booked early, then someone notices in the final week that 40 chairs, a reception desk and a storeroom of old files aren't going anywhere.",
      },
      { type: "h2", text: "12 to 4 weeks out: scope what leaves" },
      {
        type: "p",
        text: "Start with the lease, not the furniture. It says what condition the unit must be in when you hand it back. Some landlords accept the office as fitted. Others expect it returned closer to its original state. That one clause decides how much has to go.",
      },
      {
        type: "ol",
        items: [
          "Read the handover clause and note the date the keys are due back",
          "Ask the landlord or agent whether they want a pre-handover inspection, and book it",
          "Walk the office floor by floor with a plan, including storerooms, server rooms, pantries and any parking or basement storage",
          "Tag each item: moving, staying for the landlord, or leaving",
          "Photograph everything tagged as leaving and keep a simple count, such as \"22 workstations, 30 chairs, 6 pedestal units\"",
        ],
      },
      {
        type: "p",
        text: "Twelve weeks sounds generous, but furniture decisions involve several people. Finance wants to know what has resale value, IT wants its equipment handled separately, and staff want to keep their chairs. Starting early gives those conversations room.",
      },
      { type: "h2", text: "Movers vs clearance crew: split the inventory" },
      {
        type: "p",
        text: "Movers and a clearance crew do different jobs. Movers pack, protect and deliver items to the new address. A clearance crew dismantles, carries out and takes away what isn't going anywhere. Mixing the two on one list leads to movers quoting for items you plan to discard, or discarded items arriving at the new office.",
      },
      {
        type: "p",
        text: "Split the inventory into two documents before you ask anyone for a price:",
      },
      {
        type: "ul",
        items: [
          "The moving list: what goes to the new office, with the destination floor and room",
          "The clearance list: what leaves for good, with photos and counts",
          "A short note on anything uncertain, such as old archive boxes awaiting a decision",
        ],
      },
      {
        type: "p",
        text: "IT equipment needs its own line. Removal isn't data destruction, so wipe or remove drives and shred confidential paperwork before anything is collected, or use a specialist that certifies destruction.",
      },
      {
        type: "callout",
        title: "Get the clearance priced",
        body: "Send photos of everything on the clearance list on WhatsApp, with the building name, floor and handover date. We reply with a fixed price for the clearance.",
      },
      { type: "h2", text: "Building and landlord requirements" },
      {
        type: "p",
        text: "Commercial towers in Business Bay, DIFC, JLT and Dubai Silicon Oasis each have their own rules for moving goods in and out. Ask the building management office for them in writing as soon as you have dates, then share them with the movers and the clearance crew.",
      },
      { type: "h3", text: "Loading bay and goods lift bookings" },
      {
        type: "p",
        text: "Most office towers expect large items to leave through a loading bay and a goods or service lift, not the main lobby. Slots are often limited and shared with other tenants, so book early. Ask how long each slot lasts, whether there's a vehicle height limit in the basement, and whether lift walls need protecting.",
      },
      {
        type: "p",
        text: "If your movers and the clearance crew need the lift on the same day, give them separate slots. Two teams queuing for one lift slows both down.",
      },
      { type: "h3", text: "Access passes" },
      {
        type: "p",
        text: "Many buildings and free zones ask for crew names, ID details and vehicle plates before they issue a pass for contractors. Passes can take a few working days. Ask what's needed, collect the details from each contractor, and submit them together so nobody is stopped at the barrier on the day.",
      },
      { type: "h2", text: "Phased and after-hours clearance" },
      {
        type: "p",
        text: "Few businesses can stop working for a clear-out. Two approaches keep disruption small.",
      },
      {
        type: "p",
        text: "Phased clearance works zone by zone. Clear the storerooms and empty desks first, then meeting rooms, then the last occupied areas once staff have moved. Each phase is smaller, so it fits into shorter lift slots.",
      },
      {
        type: "p",
        text: "After-hours clearance happens in the evening or at the weekend, when lifts and corridors are quiet. Many commercial buildings allow it, but some restrict noisy work such as dismantling to set times. Check the building's working-hours rules before you plan around a Friday night.",
      },
      {
        type: "ul",
        items: [
          "Mark every item that leaves with a coloured sticker, and nothing else in the room",
          "Keep one contact on site, or on the phone, who can make decisions",
          "Clear corridors and fire exits as you go, because buildings check them",
          "Leave a final sweep to the end of each phase, not the end of the project",
        ],
      },
      { type: "h2", text: "Fit-out vs freestanding: what a clearance crew removes" },
      {
        type: "p",
        text: "This is the line that catches people out at handover. A clearance crew removes freestanding furniture and loose items: desks, workstations that unbolt from each other, chairs, cabinets, meeting tables, freestanding partitions, pantry appliances and boxes.",
      },
      {
        type: "p",
        text: "Fit-out is different. Fixed partitions, glass walls, raised floors, suspended ceilings, built-in joinery and lighting are part of the building works. Taking them out is a job for a fit-out contractor, and the building may need to approve that work before it starts. Once the contractor has stripped them, a clearance crew can take away the debris they leave behind.",
      },
      {
        type: "p",
        text: "If your lease requires the fit-out removed, get the contractor booked first. The clearance has to fit around their programme, not the other way round.",
      },
      { type: "h2", text: "Handover-day checklist" },
      {
        type: "p",
        text: "On the last day, walk the unit with this list before you meet the landlord or agent:",
      },
      {
        type: "ul",
        items: [
          "Every room, storeroom and cupboard is empty, unless the landlord agreed something stays",
          "The server room and comms cupboard are clear of equipment and cabling you own",
          "The pantry fridge and any water dispensers are emptied and removed",
          "Corridors, the loading bay route and fire exits are free of leftovers",
          "Floors are swept, and any marks from furniture have been photographed",
          "Access cards, keys and parking passes are counted and ready to return",
          "You have dated photos of every room as you leave it",
        ],
      },
      {
        type: "p",
        text: "The photos matter. If there's a dispute over the condition of the unit later, a time-stamped record of an empty, swept office settles it quickly.",
      },
    ],
  },
  {
    slug: "how-to-dispose-of-a-fridge-in-dubai",
    title: "How to dispose of an old fridge or freezer in Dubai",
    description:
      "How to dispose of a fridge in Dubai: retailer take-back, resale, the free municipal pickup or a crew, plus how to prepare it and why the gas matters.",
    date: "2026-11-15",
    readMinutes: 6,
    tag: "How-to",
    relatedService: "appliance-removal",
    blocks: [
      {
        type: "p",
        text: "To dispose of a fridge in Dubai, you have four realistic routes: hand it back to the retailer when you buy a new one, sell or give it away if it works, book Dubai Municipality's free bulky waste pickup, or have a crew carry it out. Whichever you choose, empty and defrost it first, and never leave it beside the bins.",
      },
      {
        type: "p",
        text: "A fridge isn't ordinary junk. It's heavy, it leaks when it thaws, and its cooling circuit holds refrigerant gas that shouldn't be released. Here's how to pick the right route and get it out of a tower or villa without damage.",
      },
      { type: "h2", text: "Your options: retailer take-back, resale, municipal pickup, crew" },
      { type: "h3", text: "Retailer take-back" },
      {
        type: "p",
        text: "If you're buying a replacement, ask the shop what happens to the old one before you pay. Some UAE electronics retailers run appliance buyback or exchange offers. Sharaf DG's home appliance buyback, for example, gives credit against a new appliance after the old one is inspected, in participating stores. Offers like these change and can be withdrawn, so check the current terms when you buy.",
      },
      { type: "h3", text: "Resale or giving it away" },
      {
        type: "p",
        text: "A working fridge in good condition can find a new home through online marketplaces or community groups. Be honest about its age and any faults, and agree who is carrying it before the buyer arrives. Keep it upright when it's moved, so it's ready to use at the other end.",
      },
      { type: "h3", text: "Dubai Municipality's bulky waste pickup" },
      {
        type: "p",
        text: "Dubai Municipality runs a free bulky waste service that covers used electrical appliances as well as furniture. You request it through the municipality's apps or website, or on 800900, and a staff member contacts you to arrange the collection. The municipality says the service isn't available in free zones or real estate development zones, and published details mention access limits for high-rise buildings.",
      },
      {
        type: "p",
        text: "It's a good option if you live in a villa in an eligible area and can get the fridge to the kerb yourself. Our guide to the free municipal pickup explains when it fits and when it doesn't.",
      },
      { type: "h3", text: "A removal crew" },
      {
        type: "p",
        text: "A crew makes sense when the fridge is on an upper floor, you're in a tower or a development outside the municipal service, you have a deadline, or the fridge is going with other items. We carry it from the kitchen, protect the floors on the way out, and direct it towards specialist recycling wherever possible.",
      },
      {
        type: "callout",
        title: "Price it from a photo",
        body: "Send us a photo of the fridge on WhatsApp, with your area, floor and whether there's a service lift. We reply with a fixed price, working or not.",
      },
      { type: "h2", text: "Preparing a fridge for collection" },
      {
        type: "p",
        text: "Whoever collects it, a little preparation makes the job faster, cleaner and safer.",
      },
      { type: "h3", text: "Defrost 24 hours ahead" },
      {
        type: "p",
        text: "Switch the fridge off and unplug it about a day before collection. Leave the doors open with towels or a tray underneath to catch the water. A freezer with thick ice can take longer, so start earlier. A defrosted fridge is lighter and won't leak in the lift or on the stairs.",
      },
      { type: "h3", text: "Empty, clean and tape doors" },
      {
        type: "ul",
        items: [
          "Take out all food, then wipe the inside so it doesn't smell when it's moved",
          "Remove loose glass shelves and drawers, or tape them in place",
          "Tape the doors shut so they can't swing open during the carry",
          "Coil the power cable and tape it to the back",
          "Check the gaps behind and beside the fridge for anything that fell down",
        ],
      },
      {
        type: "p",
        text: "If your fridge has a water dispenser or ice maker connected to the water supply, ask a plumber or your maintenance team to disconnect it first. Our crews unplug and move freestanding appliances, but we don't disconnect plumbed or gas-fed ones.",
      },
      { type: "h2", text: "Refrigerant: why a fridge is not ordinary junk" },
      {
        type: "p",
        text: "Behind the back panel is a sealed circuit of pipes, a compressor and refrigerant gas. Older fridges can contain gases that damage the ozone layer. Newer ones often use gases with a strong warming effect if they escape.",
      },
      {
        type: "p",
        text: "The UAE regulates ozone-depleting substances at federal level. Cabinet Resolution No. 26 of 2014 sets the national rules for these substances and names refrigerators and freezers among the products it covers.",
      },
      {
        type: "p",
        text: "In practice, that means two things for you. Don't cut, drill or bend the pipes at the back to make the fridge easier to carry, because that releases the gas. And don't take it apart for the metal. Let it go whole to someone who will pass it to a recycler able to handle the refrigerant.",
      },
      { type: "h2", text: "Moving a fridge through a tower safely" },
      {
        type: "p",
        text: "A large fridge is one of the hardest things to get out of an apartment. Plan the route before collection day:",
      },
      {
        type: "ul",
        items: [
          "Measure the fridge, the kitchen door and the narrowest point of the corridor. American-style fridges sometimes need their doors taken off to fit through",
          "Book the service lift if your building requires it, and ask whether the walls need protecting",
          "Ask reception where the truck can stop, and whether a pass is needed",
          "Clear a path through the flat, including rugs that could slip",
        ],
      },
      {
        type: "p",
        text: "Moving a fridge is a two-person job at least. It's top-heavy and awkward on a trolley, and a dropped fridge can crack tiles or dent a lift.",
      },
      { type: "h2", text: "Landlord-owned appliances in furnished flats" },
      {
        type: "p",
        text: "In many furnished and some unfurnished rentals, the fridge belongs to the landlord, not the tenant. If it's on the tenancy inventory, it isn't yours to throw away, even if it's broken.",
      },
      {
        type: "p",
        text: "Report the fault to your landlord or agent in writing and ask what they want done. If they agree to it being removed, get that agreement in writing before anyone carries it out. It protects you at move-out, when the inventory is checked against what's in the flat.",
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Will anyone take a broken fridge?" },
      {
        type: "p",
        text: "Yes. Retailer buyback offers sometimes accept non-working appliances, depending on their terms, and the municipal service and removal crews take fridges whether they work or not. A broken fridge is still worth recycling for its metal and components. Just make sure it's emptied and defrosted.",
      },
      { type: "h3", text: "Is it illegal to leave a fridge by the bins?" },
      {
        type: "p",
        text: "Dubai's published public hygiene penalty schedule, Executive Council Resolution No. 14 of 2015, lists a fine for leaving goods near a waste container. A fridge left outside with its door on is also a safety risk, because a child could climb inside. Use one of the routes above instead.",
      },
    ],
    sources: [
      { label: "Dubai Municipality: bulky waste disposal service (furniture and used electrical appliances)", url: "https://www.dm.gov.ae/35-increase-in-requests-for-dubai-municipality-bulky-waste-disposal-service/" },
      { label: "Dubai Municipality: Waste Segregation Guide (800900 bulky waste hotline)", url: "https://www.dm.gov.ae/wp-content/uploads/2024/12/Waste-Segregation-Guide.pdf" },
      { label: "Khaleej Times: free bulk waste removal via WhatsApp", url: "https://www.khaleejtimes.com/uae/dubai-offers-free-bulk-waste-removal-service-via-whatsapp" },
      { label: "ILO NATLEX: UAE Cabinet Resolution No. 26 of 2014 on the national regime of ozone-depleting substances", url: "https://natlex.ilo.org/dyn/natlex2/r/natlex/fe/details?p3_isn=98630" },
      { label: "Sharaf DG: home appliance buyback offer (terms change, check the current page)", url: "https://uae.sharafdg.com/ha-buyback-offer/" },
      { label: "Dubai Legislation Portal: Executive Council Resolution No. 14 of 2015", url: "https://dlp.dubai.gov.ae/Legislation%20Reference/2015/Executive%20Council%20Resolution%20No.%20(14)%20of%202015.html" },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
