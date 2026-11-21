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
  {
    slug: "leaving-dubai-for-good-furniture-and-appliances",
    title: "Leaving Dubai for good: what to do with your furniture",
    description:
      "Leaving Dubai for good? How to decide what to ship, sell, give away or clear, an eight-week plan for your furniture, and what to do if you've already gone.",
    date: "2026-11-16",
    readMinutes: 6,
    tag: "Moving",
    relatedService: "move-out-clearance",
    blocks: [
      {
        type: "p",
        text: "If you're leaving Dubai for good, sort every piece of furniture and every appliance into one of four groups about eight weeks before you fly: ship it, sell it, give it away or have it cleared. Then work backwards from your flight, so the selling happens early and the clearance happens last.",
      },
      {
        type: "p",
        text: "Leaving the country is different from moving across town. You can't drop the leftovers at a friend's flat next week, and there's no second trip to fix what you forgot. This guide covers what to do with your household contents. For the general move-out timeline, permits and the handover itself, see our move-out guides.",
      },
      { type: "h2", text: "A countdown for your household contents (8 weeks to final day)" },
      {
        type: "ol",
        items: [
          "Eight weeks out: walk through every room, the storeroom, the balcony and the parking space, and put each item in one of the four groups",
          "Seven weeks out: get shipping quotes for what's going, based on volume. Seeing the cost often moves items from \"ship\" to \"sell\"",
          "Six weeks out: list the things you're selling, starting with large and valuable pieces, which take longest to sell",
          "Four weeks out: offer what didn't sell to friends, colleagues or community groups",
          "Three weeks out: book the shipping company's packing day and the clearance for the days after it",
          "Final week: live with the essentials, a bed, a kettle and a few plates, and have the rest gone",
          "Final day: walk the empty home, take dated photos and hand over the keys",
        ],
      },
      {
        type: "p",
        text: "If your notice is shorter than eight weeks, keep the order and compress the gaps. Selling is the step that suffers most from a short timeline, so decide early what you'll accept for each piece.",
      },
      { type: "h2", text: "Ship, sell, give away or clear: decision framework" },
      {
        type: "p",
        text: "For each item, ask four questions in this order:",
      },
      {
        type: "ul",
        items: [
          "Would I buy this again at the other end? If yes, and it isn't cheap to replace, it's a shipping candidate",
          "Will someone pay a fair price for it within a few weeks? If yes, list it now",
          "Is it clean and working, but not worth the effort of selling? Give it away",
          "Is it broken, worn out or unlikely to find a buyer in time? Add it to the clearance list",
        ],
      },
      {
        type: "p",
        text: "Be realistic about the second question. Second-hand furniture in Dubai sells well when it's in good condition and priced to move, but slowly when it's dated, heavy or hard to transport. Anything still listed two weeks before you fly should drop to \"give away\" or \"clear\".",
      },
      {
        type: "callout",
        title: "Know the clearance cost early",
        body: "Send us photos of everything on your clearance list on WhatsApp. We reply with a fixed price, so you know the cost before you decide how hard to chase a sale.",
      },
      { type: "h2", text: "Shipping vs replacing: what's rarely worth shipping" },
      {
        type: "p",
        text: "International shipping is priced mainly by volume, so bulky, low-value furniture costs far more to send than it's worth. These are the usual candidates to leave behind:",
      },
      {
        type: "ul",
        items: [
          "Large appliances. Fridges, washing machines and ovens bought in the UAE are built for its electricity supply and plugs, which differ from those in North America and some other countries",
          "Flat-pack furniture, which rarely survives being taken apart and rebuilt twice",
          "Mattresses and upholstered pieces that are a few years old",
          "Outdoor furniture and garden items from a villa, which take a lot of space for little value",
          "Anything sized for a Dubai home that won't fit the place you're moving to",
        ],
      },
      {
        type: "p",
        text: "What usually is worth shipping: solid wood pieces you love, items with sentimental value, artwork, and quality furniture that would be expensive to replace where you're going.",
      },
      { type: "h2", text: "Final-week clearance and handover" },
      {
        type: "p",
        text: "The final week has a set order. The shipping company packs and takes what's going first. The clearance comes after, so nothing that should travel ends up on the wrong truck. Then the home is swept, photographed and handed over.",
      },
      {
        type: "p",
        text: "A tower flat in Dubai Marina or Business Bay needs the most planning, because both the packers and the clearance crew may need a service lift slot and a move-out permit from the building. A villa in Arabian Ranches is simpler to load, but check your community's rules for vehicle passes and working hours. In older buildings, such as those in Al Nahda, ask the watchman where a truck can stop.",
      },
      {
        type: "ul",
        items: [
          "Check the landlord's inventory if the home came furnished, and leave everything that belongs to it",
          "Book the clearance for one or two days after the packers, not the same morning",
          "Keep a bag of cleaning supplies and bin bags back until the very end",
          "Empty and defrost the fridge the day before it goes, whether it's sold, given away or cleared",
          "Take dated photos of every empty room for your records",
        ],
      },
      { type: "h2", text: "If you have already left: clearing remotely" },
      {
        type: "p",
        text: "Plans change, and sometimes you're on the plane before the flat is empty. A home can still be cleared without you there, as long as someone can open the door.",
      },
      {
        type: "ol",
        items: [
          "Leave the keys with someone you trust, your agent or the building's management, and tell them who will collect them",
          "Send photos or a video of every room, so the clearance can be priced without a visit",
          "Make clear what stays: landlord-owned furniture, appliances and anything on the inventory",
          "Arrange any building permit or gate pass the crew will need",
          "Ask for photos of the empty home when the clearance is finished, before the keys go back",
        ],
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Can someone else hand over the flat for me?" },
      {
        type: "p",
        text: "Usually, yes, if your landlord or agent agrees. Ask them what they'll accept before you leave, such as a signed letter naming the person or a power of attorney, and agree the handover date in writing.",
      },
      { type: "h3", text: "What if a buyer pulls out in the last week?" },
      {
        type: "p",
        text: "It happens often, especially with large items. Keep your clearance booking flexible enough to add a piece or two, and send a photo of anything extra as soon as you know. A crew can price changes from a photo, so you're not left with a sofa in an empty flat on your last night.",
      },
    ],
  },
  {
    slug: "garden-waste-collection-dubai",
    title: "Garden waste collection in Dubai: what the bins take",
    description:
      "How garden waste collection works in Dubai villa communities: what goes in the bins, the municipal and community options, and when a pile needs a pickup.",
    date: "2026-11-16",
    readMinutes: 5,
    tag: "Dubai guide",
    relatedService: "garden-waste-removal",
    blocks: [
      {
        type: "p",
        text: "Garden waste collection in Dubai depends on where you live. In many villa communities, small amounts of bagged cuttings go out with the household waste, while large piles are the resident's job to arrange. Above a few bags, you'll need your gardener, a municipal or community service, or a removal crew.",
      },
      {
        type: "p",
        text: "What you can't do is leave cuttings on the verge or in a common area. Community rules forbid it, and a pile of palm fronds by the road is the kind of thing that brings a violation notice.",
      },
      { type: "h2", text: "What counts as green waste" },
      {
        type: "p",
        text: "Green waste is anything that grew in the garden and has been cut, pulled or has died:",
      },
      {
        type: "ul",
        items: [
          "Grass clippings and leaves",
          "Hedge and shrub trimmings",
          "Palm fronds and branches",
          "Dead plants and flowers",
          "Weeds pulled from beds and paving",
        ],
      },
      {
        type: "p",
        text: "Soil, sand, stones, turf, pots and old garden furniture aren't green waste in the same sense. They're heavier, don't break down the same way and usually can't go in a household bin. They're covered below.",
      },
      { type: "h2", text: "Community and municipal options (verify per community)" },
      {
        type: "p",
        text: "There's no single Dubai-wide rule for garden waste. Your community's rules decide what goes in the bins, and they differ between master developers and even between phases of the same community.",
      },
      { type: "h3", text: "Community rules" },
      {
        type: "p",
        text: "Emaar's community rules for villas in Arabian Ranches are a typical example. They say residents are responsible for removing garden refuse and green waste, which must be packed in designated waste bags for collection by authorised contractors. Large or heavy items must be arranged separately, at the resident's own cost. The same rules prohibit dumping grass and landscape cuttings anywhere in the community.",
      },
      {
        type: "p",
        text: "Other villa areas, such as Jumeirah, Al Mizhar, JVT and DAMAC Hills, have their own arrangements. Ask your community management office or check the residents' portal for three things: whether bagged cuttings go in the household bin, how many bags count as too many, and whether there's a set collection day.",
      },
      { type: "h3", text: "Your gardener or landscaper" },
      {
        type: "p",
        text: "If someone maintains your garden, check whether removing the cuttings is in their contract. Many maintenance agreements include it. A one-off landscaping job often doesn't, so ask before the work starts, not when the pile is already in the driveway.",
      },
      { type: "h3", text: "Dubai Municipality" },
      {
        type: "p",
        text: "In 2018 Dubai Municipality announced a free service for bulk removal of green household waste, such as grass and hedge trimmings, booked on 800900. Its bulky waste service doesn't cover free zones or real estate development zones, which include many master communities. Call 800900 to check whether green waste collection is still offered at your address before you rely on it.",
      },
      { type: "h2", text: "Bagging cuttings so they get collected" },
      {
        type: "p",
        text: "Where bagged garden waste is allowed, how you bag it decides whether it's taken. A split bag or a branch sticking out of the lid is easy for a collection crew to leave behind.",
      },
      {
        type: "ul",
        items: [
          "Use heavy-duty bags, or the designated bags your community specifies",
          "Cut branches and fronds into short lengths so they sit fully inside the bag",
          "Point palm frond spines inwards, so nobody is cut lifting the bag",
          "Fill bags to a weight one person can lift, and tie them closed",
          "Put them out on your community's collection day, not days early, so they don't attract pests in the heat",
        ],
      },
      { type: "h2", text: "When a pile is too big for the bins" },
      {
        type: "p",
        text: "A full hedge trim, a palm tidy-up or clearing a neglected garden fills far more than a few bags. Signs that the bins won't cope:",
      },
      {
        type: "ul",
        items: [
          "Branches and fronds too long or spiky to bag",
          "More bags than your community allows in one collection",
          "A deadline, such as a party, a sale or the end of a tenancy",
          "Green waste mixed with broken pots, old furniture or building materials",
        ],
      },
      {
        type: "p",
        text: "Gather everything into one pile near vehicle access, keeping it off the road and away from neighbours' walls. Then take one wide photo of the pile and one close-up of anything heavy.",
      },
      {
        type: "callout",
        title: "Price the pile",
        body: "Send that photo to us on WhatsApp with your community name. We reply with a fixed price, and bag and load everything when we arrive.",
      },
      { type: "h2", text: "Soil, turf and planters: heavy loads" },
      {
        type: "p",
        text: "Relandscaping produces waste that's much heavier than it looks. A few square metres of old turf, a bed of sandy soil or a row of concrete planters can weigh more than a full load of cuttings.",
      },
      {
        type: "p",
        text: "Keep heavy material separate from green waste. Don't put soil or stones in household bins, because they can split the bin and be left uncollected. Bag soil in strong, half-filled sacks so they can be carried, and tell whoever is collecting roughly how much there is.",
      },
      { type: "h2", text: "Tree felling vs waste removal" },
      {
        type: "p",
        text: "Removing garden waste and cutting down trees are separate jobs. Felling a tall palm or a large tree needs a tree specialist with the right equipment, and your community may need to approve it first.",
      },
      {
        type: "p",
        text: "We don't cut trees. We clear what has already been cut. The usual way to handle a big job is to book the tree specialist first, then have the waste collected straight after, so the cut material isn't left lying in the garden.",
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Can you collect the same day the tree surgeon finishes?" },
      {
        type: "p",
        text: "Often, if you book ahead and send a photo of the expected pile. Same-day slots depend on availability, so the easiest way is to agree a collection for the afternoon or the morning after the cutting.",
      },
      { type: "h3", text: "Can I leave cuttings outside my gate for collection?" },
      {
        type: "p",
        text: "Only if your community's collection arrangements say so. Many community rules prohibit dumping cuttings in shared areas, and a loose pile on the verge can blow into the road. Keep it inside your plot until it's collected.",
      },
    ],
    sources: [
      { label: "Emaar Community Management: Master Community Rules, Villas, Arabian Ranches I (section 9, waste and trash management)", url: "https://www.ecm.ae/wp-content/uploads/2025/12/Emaar-Master-Community-Rules-Villas-Arabian-Ranches-I-1.pdf" },
      { label: "Gulf News (2018): Dubai Municipality will remove home garden or park trimmings", url: "https://gulfnews.com/uae/free-pick-up-for-green-waste-1.1404682" },
      { label: "Dubai Municipality: bulky waste disposal service (not available in development and free zones)", url: "https://www.dm.gov.ae/35-increase-in-requests-for-dubai-municipality-bulky-waste-disposal-service/" },
    ],
  },
  {
    slug: "villa-clearance-checklist-dubai",
    title: "House clearance checklist for a Dubai villa, room by room",
    description:
      "A house clearance checklist for Dubai villas: tag what stays, clear each room in order, sweep for documents, arrange gate passes and run the day smoothly.",
    date: "2026-11-17",
    readMinutes: 6,
    tag: "Moving",
    relatedService: "house-villa-clearance",
    blocks: [
      {
        type: "p",
        text: "A house clearance goes smoothly when every decision is made before the crew arrives. Two weeks ahead, tag what stays, go through the villa room by room, take out documents and valuables, and arrange access with your community. On the day, the crew then only has to carry, load and sweep.",
      },
      {
        type: "p",
        text: "A villa holds far more than a flat. There's a majlis, a maid's room, a garage, a roof and a garden, and each fills up in its own way. This checklist takes them one at a time.",
      },
      { type: "h2", text: "Two weeks out: decide, tag and book" },
      {
        type: "p",
        text: "Start by deciding what the clearance is for. Emptying a villa for a sale, a tenancy handover or a family estate changes what has to stay. A rented villa may come with furniture listed on the landlord's inventory. A villa being sold may need to stay furnished for viewings until the last week.",
      },
      {
        type: "ol",
        items: [
          "Agree who makes the final call on each item, especially if the villa belonged to a relative",
          "Walk every room with a notepad or your phone and list the large pieces",
          "Tag each item using the sticker system below",
          "Photograph each room once it's tagged, and send the photos for a clearance price",
          "Book the date, leaving a day or two before any handover or inspection",
        ],
      },
      { type: "h3", text: "The coloured sticker system" },
      {
        type: "p",
        text: "Coloured stickers remove doubt on the day, especially if you won't be there. Buy two or three colours of round stickers and use them consistently:",
      },
      {
        type: "ul",
        items: [
          "Green: keep. This stays in the villa or goes with you",
          "Yellow: give away or sell. Someone is collecting it separately",
          "No sticker: clear. Everything untagged goes",
        ],
      },
      {
        type: "p",
        text: "Tag the item you mean, not the room. A green sticker on a wardrobe door doesn't tell anyone whether the clothes inside are staying. If the contents of a cupboard stay, put a sticker inside as well.",
      },
      { type: "h2", text: "Room-by-room checklist" },
      { type: "h3", text: "Bedrooms and wardrobes" },
      {
        type: "ul",
        items: [
          "Empty every drawer, including bedside tables and under-bed storage",
          "Check the tops of wardrobes and the backs of built-in cupboards",
          "Say whether beds and wardrobes are freestanding or fixed to the wall",
          "Bag clothes you're donating separately, and label the bags",
        ],
      },
      { type: "h3", text: "Kitchen and appliances" },
      {
        type: "ul",
        items: [
          "Empty the fridge and freezer, switch them off and leave them to defrost about a day before",
          "Have a technician disconnect anything plumbed in or gas-fed, such as a washing machine, dishwasher or cooker. Our crews move appliances but don't disconnect them",
          "Clear cupboards of food, cleaning products and anything that could leak",
          "Decide whether built-in appliances stay with the villa",
        ],
      },
      { type: "h3", text: "Majlis and living areas" },
      {
        type: "p",
        text: "The majlis and living rooms hold the heaviest furniture: long sofas and floor seating, large rugs, dining sets, display cabinets and wall units. Tell the crew which pieces are solid wood, marble or glass, and whether any have to come apart to fit through the doors. Leave curtain rails, light fittings and anything screwed into the wall unless you're sure they're yours to remove.",
      },
      { type: "h3", text: "Garage, roof and storeroom" },
      {
        type: "p",
        text: "These are the spaces most often forgotten and most often full. Open them early, because they can double the size of the job.",
      },
      {
        type: "ul",
        items: [
          "Gather paint tins, chemicals, gas cylinders and fuel in one place. They're hazardous and can't go with a general clearance, so arrange a separate disposal",
          "Check the maid's room, the laundry and any rooftop storage",
          "Look in the car park space and behind the garage door for bikes, tyres and boxes",
          "Note anything heavy, such as gym equipment or tools, and how far it is from the truck",
        ],
      },
      { type: "h3", text: "Garden" },
      {
        type: "p",
        text: "Gardens collect broken furniture, old planters, play equipment and green waste. Pile what's going near the gate if you can, and keep soil and stones apart from cuttings. Our guide to garden waste collection covers what community bins take.",
      },
      {
        type: "callout",
        title: "Price the whole villa at once",
        body: "Send photos of each room, the garage and the garden on WhatsApp, with your community name. We reply with one fixed price for the whole clearance.",
      },
      { type: "h2", text: "Documents and valuables sweep" },
      {
        type: "p",
        text: "Do this yourself, before the clearance, even in rooms you think are empty. Passports, tenancy contracts, title deeds, bank papers, jewellery and keys turn up in coat pockets, books, suitcases and the backs of drawers.",
      },
      {
        type: "ul",
        items: [
          "Check every pocket, bag and suitcase that's going",
          "Flick through books and folders before they're tagged to go",
          "Look inside sofa cushions and under mattresses",
          "Collect remote controls, spare keys and access cards for the handover",
        ],
      },
      {
        type: "p",
        text: "Once items are collected, they usually can't be recovered. A careful sweep is the only real protection.",
      },
      { type: "h2", text: "Community access and gate passes" },
      {
        type: "p",
        text: "Gated communities such as Arabian Ranches and Dubai Hills Estate usually control which vehicles can enter and when. Ask your community management office what it needs for a contractor's truck, such as crew and vehicle details or a pass booked in advance, and whether there are set hours for removals.",
      },
      {
        type: "p",
        text: "Open neighbourhoods like Jumeirah and Mirdif have no gate, but street parking can be tight. Tell the crew whether the truck can use your driveway or has to park on the road, and let neighbours know if their access might be blocked for a short time.",
      },
      { type: "h2", text: "On the day" },
      {
        type: "ul",
        items: [
          "Walk the villa with the crew lead before anything is moved, room by room",
          "Point out every green sticker, and anything fragile or fixed",
          "Keep a clear path from the front door to the truck",
          "Keep pets and children away from the loading route",
          "Do a final walk-through once the rooms are empty and swept",
          "Take dated photos of every room for your records",
        ],
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Can I change my mind about an item on the day?" },
      {
        type: "p",
        text: "Yes, as long as you tell the crew lead before it's loaded. Once items are on the truck and collected, they usually can't be recovered, so check the tags carefully during the walk-through.",
      },
      { type: "h3", text: "What about furniture that belongs to the landlord?" },
      {
        type: "p",
        text: "If you're renting, anything on the landlord's inventory stays, even if it's worn or broken. Mark it with a green sticker and keep a copy of the inventory to hand. If you'd like something of the landlord's removed, get their agreement in writing first.",
      },
    ],
  },
  {
    slug: "skip-hire-vs-junk-removal-dubai",
    title: "Skip hire or a junk removal truck in Dubai: which fits?",
    description:
      "Skip hire in Dubai compared with a hand-loaded junk removal truck: how each works, what space and permissions they need, and which suits your job.",
    date: "2026-11-17",
    readMinutes: 6,
    tag: "Dubai guide",
    relatedService: "construction-debris-removal",
    blocks: [
      {
        type: "p",
        text: "Skip hire in Dubai suits long renovations that produce a steady stream of loose rubble, at a property with space to keep a container on site. A hand-loaded junk removal truck suits one-off clear-outs, bagged waste, mixed items and buildings where a skip can't be placed.",
      },
      {
        type: "p",
        text: "We don't supply skips. We run trucks and load by hand. So this comparison is meant to help you pick the right one, including when that's a skip from someone else.",
      },
      { type: "h2", text: "How skip hire works" },
      {
        type: "p",
        text: "A skip is an open steel container left at your property for an agreed period. Your contractor or you fill it, and the provider collects it and takes the waste for disposal. For a long job, the full skip is swapped for an empty one.",
      },
      {
        type: "p",
        text: "In Dubai, collecting and transporting construction and demolition waste is a licensed activity. Dubai Municipality's technical guidelines say the companies doing it need a licence for that activity, and that their vehicles must be registered in the company's name. Before you book, ask the provider to confirm it holds that licence.",
      },
      {
        type: "p",
        text: "The same guidelines set out how containers are handled. The contract should state the number, type and size of containers and who provides and maintains them. The client is responsible for preparing the containers at the agreed collection point. Containers must not obstruct pedestrians or traffic, and open containers must be covered while they're transported.",
      },
      {
        type: "p",
        text: "Placement is usually the deciding factor. A skip needs a firm, level spot the collection truck can reach, such as a driveway or a site compound. If it can't sit on your own plot, ask your community or building management where it may go before you book.",
      },
      { type: "h2", text: "How a hand-loaded truck clearance works" },
      {
        type: "p",
        text: "With a truck clearance, nothing sits on site. You send photos, agree a fixed price, and the crew arrives with a truck at a set time. They carry the waste from wherever it is, load it and leave in the same visit.",
      },
      {
        type: "p",
        text: "Because the crew does the carrying, a truck suits waste that's spread through a property, items that have to come down from upper floors, and mixed loads of furniture, boxes and bagged debris. In towers, rubble is best bagged before collection, so it can be carried through corridors and lifts.",
      },
      { type: "h2", text: "Comparison: space, permits, loading labour, volume" },
      { type: "h3", text: "Space" },
      {
        type: "p",
        text: "A skip needs somewhere to stand for days or weeks. A truck needs a place to stop while it's loaded, usually for a few hours at most. In a tower in Business Bay or JVC, there's rarely anywhere for a skip. A villa in Dubai Hills Estate with a driveway may have room for one, subject to community rules.",
      },
      { type: "h3", text: "Permissions" },
      {
        type: "p",
        text: "Whoever collects construction waste must be authorised to transport it. With a skip, also check whether your community or building allows a container on the property, and for how long. With a truck, you may need a gate pass or a lift booking for the day.",
      },
      { type: "h3", text: "Loading labour" },
      {
        type: "p",
        text: "A skip is only a container. Someone still has to carry the waste to it and load it, usually your contractor's labourers. With a truck clearance, the crew's loading is part of the job.",
      },
      { type: "h3", text: "Volume and timing" },
      {
        type: "p",
        text: "A skip absorbs waste as it's produced over weeks of work. A truck takes what's there on the day. For a renovation that generates rubble daily, that difference often decides it.",
      },
      {
        type: "callout",
        title: "Not sure which you need?",
        body: "Send a photo of the waste and tell us the floor and access. If a skip would suit the job better, we'll say so.",
      },
      { type: "h2", text: "Questions to ask before you book a skip" },
      {
        type: "p",
        text: "If a skip suits your job, a few questions up front prevent most problems:",
      },
      {
        type: "ul",
        items: [
          "Do you hold a licence for construction waste collection and transport in Dubai?",
          "What sizes do you offer, and is there a weight limit for heavy material such as tiles and concrete?",
          "What can't go in the skip? Hazardous items such as paint, chemicals and gas cylinders usually need separate disposal",
          "How long is the hire period, and how quickly can a full skip be swapped?",
          "Where exactly will it stand, and who checks that the community or building allows it there?",
          "Is the skip covered when it's taken away, and where does the waste go?",
        ],
      },
      {
        type: "p",
        text: "Get the answers in writing, along with the price, before the skip arrives.",
      },
      { type: "h2", text: "When a skip is the better choice" },
      {
        type: "ul",
        items: [
          "A villa renovation lasting weeks, producing rubble every day",
          "Large volumes of loose, heavy material such as broken tiles, concrete and sand",
          "A contractor on site whose labourers can load as they work",
          "A driveway or site area where a container can stand without blocking anyone",
        ],
      },
      { type: "h2", text: "When a truck clearance is the better choice" },
      {
        type: "ul",
        items: [
          "A one-off clear-out after a small renovation or before a handover",
          "An apartment, where there's nowhere to put a skip",
          "Bagged debris mixed with old furniture, fittings and boxes",
          "Waste on upper floors or spread around the property, which needs carrying",
          "A deadline, when you'd rather have it gone in one visit",
        ],
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Is a skip cheaper than a truck?" },
      {
        type: "p",
        text: "It depends on the job, so compare quotes for your own situation. A skip can work out cheaper for large volumes of loose rubble when your contractor does the loading. A truck can work out cheaper for smaller or mixed loads, because you only pay for one visit and the carrying is included.",
      },
      { type: "h3", text: "Can I use both on the same renovation?" },
      {
        type: "p",
        text: "Yes, and it's common. The skip takes the daily rubble while the work goes on, and a truck clears the old furniture, fittings and leftovers at the start or the end of the job.",
      },
    ],
    sources: [
      { label: "Dubai Municipality: Technical Guidelines on Construction and Demolition Waste Collection and Transportation (2024)", url: "https://dmpmedia.dm.gov.ae/uploads/2026/06/3-CD-Waste-Collection-and-Transportation.pdf" },
      { label: "Dubai Legislation Portal: Law No. 18 of 2024 Regulating Waste Management", url: "https://dlp.dubai.gov.ae/Legislation%20Reference/2024/Law%20No.%20%2818%29%20of%202024%20Regulating%20Waste%20Management.html" },
    ],
  },
  {
    slug: "warehouse-clearance-dubai",
    title: "Warehouse clearance in Dubai: racking, pallets and stock",
    description:
      "How to plan a warehouse clearance in Dubai: scoping and access, racking and pallets, old stock, what needs a licensed specialist and your waste duties.",
    date: "2026-11-18",
    readMinutes: 6,
    tag: "Dubai guide",
    relatedService: "office-clearance",
    blocks: [
      {
        type: "p",
        text: "A warehouse clearance in Dubai starts with a scope: what's leaving, how much of it there is, and how a truck reaches it. Racking, pallets, old stock and packaging can usually go in one planned clearance. Chemicals, oils and other hazardous materials can't, and need a licensed specialist.",
      },
      {
        type: "p",
        text: "Warehouses in Al Quoz, Dubai Investments Park, Jebel Ali, Al Qusais and Dubai South get cleared for the same few reasons: a lease ending, a move to a bigger unit, a business closing or a backlog of dead stock. The steps are the same in each case.",
      },
      { type: "h2", text: "Scoping a warehouse clearance" },
      {
        type: "p",
        text: "An accurate scope is what turns a warehouse clearance into a fixed price rather than an estimate. It needs three things: photos, rough volumes and access details.",
      },
      { type: "h3", text: "Photos, volumes and access" },
      {
        type: "ul",
        items: [
          "Wide photos of each bay or aisle, taken from the end so the depth shows",
          "Close-ups of anything heavy, such as machinery, metal stock or full pallets",
          "A rough count: bays of racking, number of pallets, shelving units, desks in the office area",
          "A note of anything staying, such as racking the landlord owns or stock you're moving",
          "The mezzanine, office and staff areas, which are easy to forget",
        ],
      },
      { type: "h3", text: "Loading docks and vehicle size" },
      {
        type: "p",
        text: "Tell whoever is clearing the unit how vehicles get in. Is there a loading dock or a roller shutter at ground level? Is there a forklift on site, and someone to drive it? Are there height or width limits at the gate, and set hours for heavy vehicles in your industrial area? A dock and a forklift make heavy pallets much quicker to load.",
      },
      { type: "h2", text: "Racking, shelving and pallets" },
      {
        type: "p",
        text: "Racking is often the biggest single item in a warehouse clearance. Our crew can take down freestanding pallet racking and shelving, then load and remove it. Tell us the number of bays, the height and whether the uprights are bolted to the floor.",
      },
      {
        type: "p",
        text: "Before the racking comes down, check your lease. Floor anchors leave holes, and some landlords expect the floor made good at handover. That repair is a job for a contractor, so agree it with the landlord early.",
      },
      {
        type: "p",
        text: "Pallets come in two kinds. Sound wooden and plastic pallets often have value to pallet traders and other businesses, so it's worth offering them before the clearance. Broken pallets are waste. Stack them neatly in one place, because a loose heap takes far longer to load.",
      },
      {
        type: "callout",
        title: "Get the clearance priced",
        body: "Send photos of each bay and a rough count of racking and pallets on WhatsApp, with the area and loading access. We reply with a fixed price for the clearance.",
      },
      { type: "h2", text: "Old stock and packaging" },
      {
        type: "p",
        text: "Dead stock is the hardest part to plan, because it's tied up with decisions about money. Sort it into three groups before anyone quotes:",
      },
      {
        type: "ul",
        items: [
          "Stock to sell, return to the supplier or move to another site",
          "Stock to donate, if it's usable and you're allowed to give it away",
          "Stock for disposal: damaged, expired or obsolete goods",
        ],
      },
      {
        type: "p",
        text: "Check supplier and brand agreements first. Some require branded or returned goods to be destroyed in a set way, with a certificate. We remove and dispose of stock, but we don't issue destruction certificates, so use a specialist for anything that needs one.",
      },
      {
        type: "p",
        text: "Packaging adds up quickly. Flatten and bale cardboard where you can, and keep shrink wrap, strapping and polystyrene apart from it. Clean, sorted cardboard is easier to recycle than a mixed pile.",
      },
      { type: "h2", text: "What needs a licensed specialist" },
      {
        type: "p",
        text: "Hazardous materials don't belong in a general clearance. That includes chemicals, solvents, paints in bulk, used oils and lubricants, fuel, gas cylinders, batteries in quantity and anything with a hazard label. In Dubai, these go through companies licensed for hazardous waste collection and transport.",
      },
      {
        type: "p",
        text: "Identify hazardous items during the scope and keep them apart from everything else. A clearance crew can then work around them while the specialist handles their removal.",
      },
      { type: "h2", text: "Business waste obligations: approved collectors" },
      {
        type: "p",
        text: "As a business, you're responsible for how your waste is handled, not only for getting it out of the unit. Dubai's waste law, Law No. 18 of 2024, requires a waste producer to transport the waste from its activities to disposal sites using authorised vehicles.",
      },
      {
        type: "p",
        text: "For hazardous waste, Dubai Municipality's technical guidelines go further. They make it the waste generator's responsibility to check the transporter's credentials against the municipality's published list of approved hazardous waste transporters. They also require businesses that generate hazardous waste to get a permit or NOC from the municipality before it's transported, disposed of or recycled.",
      },
      {
        type: "ul",
        items: [
          "Ask any collector which waste types its licence covers",
          "Check hazardous waste transporters against the municipality's approved list",
          "Keep records of what was removed, when and by whom",
          "Don't let anyone leave waste on vacant land or beside the building",
        ],
      },
      { type: "h2", text: "Handing the unit back" },
      {
        type: "p",
        text: "Once the clearance is done, walk the unit before you return the keys. Check the mezzanine, the office, the toilets and the yard, as well as the main floor. Sweep the floor, note any damage from racking or forklifts, and take dated photos of every area. If the lease requires repairs, such as filling anchor holes or removing signage, book a contractor for the days after the clearance, not the same day.",
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Can you clear over several days?" },
      {
        type: "p",
        text: "Yes. Large warehouses are often cleared in phases, bay by bay, so the business can keep working or move stock out in stages. Tell us your deadline and any days the unit is unavailable, and we'll plan the visits around them.",
      },
      { type: "h3", text: "Do you take pallets that are broken?" },
      {
        type: "p",
        text: "Yes, as part of the clearance. Stack them in one place and include them in your photos, so they're counted in the price. Sound pallets are worth offering to a pallet trader first.",
      },
    ],
    sources: [
      { label: "Dubai Legislation Portal: Law No. 18 of 2024 Regulating Waste Management", url: "https://dlp.dubai.gov.ae/Legislation%20Reference/2024/Law%20No.%20%2818%29%20of%202024%20Regulating%20Waste%20Management.html" },
      { label: "Dubai Municipality: Technical Guidelines on Hazardous Waste Collection and Transport", url: "https://dmpmedia.dm.gov.ae/uploads/2026/06/22-Technical-Guidelines-on-Hazardous-Waste-Collection-Transport.pdf" },
    ],
  },
  {
    slug: "how-to-dispose-sofa-in-dubai",
    title: "How to dispose of a sofa in Dubai, L-shapes included",
    description:
      "How to dispose of a sofa in Dubai: timing it around a new delivery, handling L-shapes, sofa beds and majlis seating, and what to do when it won't fit the lift.",
    date: "2026-11-18",
    readMinutes: 6,
    tag: "How-to",
    relatedService: "sofa-removal",
    blocks: [
      {
        type: "p",
        text: "To dispose of a sofa in Dubai, sell or give it away if it's in good condition, book Dubai Municipality's free bulky waste pickup if your address qualifies, or have a crew carry it out. Plan the removal for the day before your new sofa arrives, and check before then how it will get through your doors and lift.",
      },
      {
        type: "p",
        text: "That last part is where most sofa removals go wrong. This guide covers the timing, the different kinds of sofa, and what to do when one simply won't fit.",
      },
      { type: "h2", text: "Why sofas are the hardest everyday item to get rid of" },
      {
        type: "p",
        text: "A sofa is big, heavy and awkward all at once. It's too long for most cars, too heavy for one person, and often too wide for a door once it's assembled. Many sofas came into the flat before the walls, doors or lift rules were what they are now, so the way in isn't always the way out.",
      },
      {
        type: "p",
        text: "It's also the item most likely to be replaced on a deadline. A new sofa is usually booked for a fixed delivery slot, and the old one has to be gone first.",
      },
      { type: "h2", text: "Timing removal around a new delivery" },
      {
        type: "p",
        text: "Aim to have the old sofa removed the day before the delivery, or early on the morning of it. That leaves room for the new one and avoids two teams competing for the same lift slot.",
      },
      {
        type: "ul",
        items: [
          "Confirm your delivery date before you book the removal",
          "Book the service lift for the removal if your building requires it",
          "Clear the route from the living room to the door",
          "Keep the old sofa's legs and any loose cushions together for collection",
        ],
      },
      { type: "h3", text: "Why delivery teams rarely take the old one" },
      {
        type: "p",
        text: "A delivery team is booked to drop off and place your new sofa, not to dispose of the old one. Some retailers offer to take an old piece away, sometimes for a fee, so ask when you order. If they don't, plan the removal separately, or the old sofa may still be in the way when the new one arrives.",
      },
      { type: "h2", text: "Sofa types and what each needs" },
      { type: "h3", text: "L-shaped sectionals" },
      {
        type: "p",
        text: "Most L-shaped sofas come apart into two or three sections, joined by brackets or clips underneath. Separating them makes each piece easier to carry and turn through doors. Check underneath before collection day, and keep any brackets with the sofa.",
      },
      { type: "h3", text: "Sofa beds and recliners (mechanisms)" },
      {
        type: "p",
        text: "Sofa beds hide a folding steel frame, and recliners have a metal mechanism inside. Both are much heavier than they look. Fold the bed away and close the recliner fully before moving them, so the mechanism can't spring open on the stairs. Electric recliners need unplugging, and their cables tying up.",
      },
      { type: "h3", text: "Majlis floor seating" },
      {
        type: "p",
        text: "Majlis seating is made up of long floor cushions, back cushions and sometimes low wooden bases. The cushions are light but bulky, and the bases can be heavy. Count the pieces, stack the cushions together and say whether there's a base or frame underneath when you send photos.",
      },
      {
        type: "callout",
        title: "Get a price from a photo",
        body: "Send us a photo of the sofa on WhatsApp, with your area, the floor and your delivery date. We reply with a fixed price and work around the delivery.",
      },
      { type: "h2", text: "When a sofa will not fit the lift" },
      {
        type: "p",
        text: "Measure before collection day: the sofa's length, depth and height, the inside of the lift, and the narrowest door or corridor on the way out. A sofa that won't fit standing up may still fit on its end in a taller service lift.",
      },
      {
        type: "ul",
        items: [
          "Remove the legs, which can save several centimetres",
          "Separate any sections or detachable arms",
          "Ask building management whether the service lift is larger than the passenger lift",
          "Ask whether the stairs can be used for bulky items, and how many floors that means",
        ],
      },
      {
        type: "p",
        text: "Many buildings also want the lift walls and door frames protected while bulky furniture passes through, so ask whether they supply lift pads or expect the crew to bring them. If none of that works, a sofa can be cut down so it fits, but agree that first. Never lower furniture from a balcony.",
      },
      { type: "h2", text: "Where an old sofa can go" },
      {
        type: "p",
        text: "In a tower in Downtown Dubai, getting the sofa to the ground floor is the hard part. In a townhouse in Town Square or a villa in Jumeirah or Al Mizhar, it's usually getting it out of the room and into a vehicle.",
      },
      {
        type: "ul",
        items: [
          "Sell it: worth it for good-condition, well-known brands. Expect the buyer to want help carrying it",
          "Give it away: clean, sound sofas can find a taker through community groups, but collection dates slip",
          "Municipal bulky waste pickup: free where eligible, but you'll usually need to get the sofa to an accessible point yourself",
          "A removal crew: carries it from the room, dismantles it if needed and works to your delivery date",
        ],
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Can I sell or donate a stained sofa?" },
      {
        type: "p",
        text: "Usually not. Buyers and donation groups want sofas that are clean and free of damage. A stained, torn or sagging sofa is better treated as waste. If it has bed bugs, don't offer it to anyone, and tell whoever collects it so it can be wrapped before it's carried through the building.",
      },
      { type: "h3", text: "Can I put a sofa out for municipal pickup from a tower?" },
      {
        type: "p",
        text: "Possibly, but check first. Dubai Municipality's bulky waste service has access limits for high-rise buildings and doesn't cover free zones or real estate development zones. Where it does apply, you may need to bring the sofa down to an accessible point yourself. Never leave a sofa in a corridor or bin room while you wait.",
      },
    ],
    sources: [
      { label: "Dubai Municipality: bulky waste disposal service (not available in development and free zones)", url: "https://www.dm.gov.ae/35-increase-in-requests-for-dubai-municipality-bulky-waste-disposal-service/" },
      { label: "Khaleej Times: free bulk waste removal via WhatsApp", url: "https://www.khaleejtimes.com/uae/dubai-offers-free-bulk-waste-removal-service-via-whatsapp" },
    ],
  },
  {
    slug: "how-to-choose-junk-removal-company-dubai",
    title: "How to choose a junk removal company in Dubai: 10 checks",
    description:
      "How to choose a junk removal company in Dubai: ten checks before you book, the red flags to walk away from, and the questions to ask on WhatsApp.",
    date: "2026-11-19",
    readMinutes: 7,
    tag: "How-to",
    relatedService: "junk-removal",
    blocks: [
      {
        type: "p",
        text: "To choose a junk removal company in Dubai, check that it's a real, licensed business, that it gives a fixed price from your photos, and that it tells you plainly what's included, where the waste goes and when you pay. A company that answers those questions clearly before the job is likely to handle the job well too.",
      },
      {
        type: "p",
        text: "Most bad experiences come from booking on price alone, through a number found on a flyer or a classified ad. These ten checks take a few minutes and filter out most of the problems.",
      },
      { type: "h2", text: "Ten checks" },
      { type: "h3", text: "1. Trade licence and business identity" },
      {
        type: "p",
        text: "Ask for the company's trade name and licence number. For a Dubai mainland company, you can look it up on the Department of Economy and Tourism website, under e-services and licence information. The record shows whether the licence is active, when it expires and which business activities it covers. A company that won't share its licence number is a company to skip.",
      },
      { type: "h3", text: "2. A fixed price from photos, not a vague range" },
      {
        type: "p",
        text: "A good company prices the job from clear photos and a few details about access. \"Between 200 and 800\" isn't a quote. Ask for one number, and ask what would change it.",
      },
      { type: "h3", text: "3. What's included: carrying, dismantling, sweep-up" },
      {
        type: "p",
        text: "Check whether the price covers carrying from the room, dismantling large pieces, loading, transport, disposal and a sweep of the space afterwards. Some quotes assume you'll bring everything down to the lobby yourself.",
      },
      { type: "h3", text: "4. Where the waste goes" },
      {
        type: "p",
        text: "Ask what happens after collection. A reasonable answer mentions reuse, recycling where possible and disposal through proper channels. Dubai's waste law forbids dumping waste in public places, including vacant land, so a vague answer here matters.",
      },
      { type: "h3", text: "5. Building access experience" },
      {
        type: "p",
        text: "In a tower in Dubai Marina or Business Bay, the job depends on service lift bookings, move permits and loading bay rules. In a community like JVC or an older building in Deira, it might be parking or stairs. Ask whether the company has worked in buildings like yours and what it needs from you.",
      },
      { type: "h3", text: "6. Payment timing" },
      {
        type: "p",
        text: "Find out when and how you pay. Paying once the job is finished and you've checked the space is a reasonable standard. Be wary of a large deposit for a small household job.",
      },
      { type: "h3", text: "7. Written confirmation" },
      {
        type: "p",
        text: "Before the day, get the price, date, time window and a list of what's going in writing. A WhatsApp message counts. It settles most disagreements before they start.",
      },
      { type: "h3", text: "8. Changes agreed before loading" },
      {
        type: "p",
        text: "Ask what happens if you add items on the day or the access turns out to be different. The answer should be that any change in price is agreed with you before anything extra is loaded.",
      },
      { type: "h3", text: "9. Honesty about what they won't take" },
      {
        type: "p",
        text: "A trustworthy company tells you what it can't take, such as chemicals, gas cylinders or medical waste, rather than accepting everything and dealing with it later.",
      },
      { type: "h3", text: "10. Realistic promises on timing" },
      {
        type: "p",
        text: "Same-day collection is often possible, but it depends on crews, traffic and your building's rules. A company that guarantees an exact time without asking about your building is guessing.",
      },
      {
        type: "callout",
        title: "Put us through the same checks",
        body: "Ask us any of these questions on WhatsApp. Send a photo and you'll get a fixed price, what's included, and when you pay, before you decide anything.",
      },
      { type: "h2", text: "Red flags before you book" },
      {
        type: "ul",
        items: [
          "No company name, only a first name and a mobile number",
          "Refusing to look at photos and insisting on cash in hand",
          "A price far below everyone else's, with no detail on what's included",
          "No answer on where the waste goes, or an offer to leave it somewhere nearby",
          "Pressure to decide on the phone before you've seen anything in writing",
          "An unmarked vehicle and a crew who don't know what job they're on",
        ],
      },
      {
        type: "p",
        text: "One red flag isn't always a reason to walk away, but two or three together usually are.",
      },
      { type: "h2", text: "Comparing two or three quotes fairly" },
      {
        type: "p",
        text: "Quotes are only comparable if every company sees the same job. Send each one the same photos, the same list of items and the same details about the floor, lift and parking. Then compare more than the final number:",
      },
      {
        type: "ul",
        items: [
          "What each price includes, line by line",
          "The date and time window offered",
          "When you pay, and whether a deposit is asked for",
          "How quickly and clearly each company answered your questions",
        ],
      },
      {
        type: "p",
        text: "A slightly higher quote that includes dismantling and carrying from the room is often better value than a lower one that leaves you to bring everything down to the lobby.",
      },
      { type: "h2", text: "Questions to ask on WhatsApp" },
      {
        type: "p",
        text: "Send your photos with these questions, and compare the answers side by side:",
      },
      {
        type: "ol",
        items: [
          "What's your company name and trade licence number?",
          "Is this a fixed price for everything in the photos?",
          "Does it include carrying from the room, dismantling and a sweep-up?",
          "What do you need from me for the lift, permit or gate pass?",
          "Where does the waste go after collection?",
          "When do I pay, and how?",
          "What happens to the price if I add something on the day?",
        ],
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Should I pay upfront?" },
      {
        type: "p",
        text: "For a household clear-out, you shouldn't need to. Paying after the job, once you've checked the space, protects you if something isn't done. For very large commercial jobs, a deposit can be normal, but get the terms in writing.",
      },
      { type: "h3", text: "Is the cheapest quote a bad sign?" },
      {
        type: "p",
        text: "Not always. A low price can simply mean a crew is already nearby. It's a bad sign when it comes with no detail, no business name and no answer about where the waste goes. Compare what's included, not only the number.",
      },
    ],
    sources: [
      { label: "Khaleej Times (March 2025): Dubai trade licence types, application and verification", url: "https://www.khaleejtimes.com/life-and-living/dubai-trade-licence" },
      { label: "Dubai Legislation Portal: Law No. 18 of 2024 Regulating Waste Management", url: "https://dlp.dubai.gov.ae/Legislation%20Reference/2024/Law%20No.%20%2818%29%20of%202024%20Regulating%20Waste%20Management.html" },
    ],
  },
  {
    slug: "it-asset-disposal-dubai",
    title: "IT asset disposal in Dubai: a guide for office IT teams",
    description:
      "IT asset disposal in Dubai for office IT teams: plan the inventory, deal with data first, manage collection in commercial towers and keep e-waste separate.",
    date: "2026-11-19",
    readMinutes: 6,
    tag: "Recycling",
    relatedService: "e-waste-removal",
    blocks: [
      {
        type: "p",
        text: "IT asset disposal in Dubai comes down to two separate jobs: dealing with the data, and moving the hardware. Do them in that order. Wipe or remove every drive, or hand them to a certified data destruction specialist, before any laptops, servers or printers leave the building.",
      },
      {
        type: "p",
        text: "This guide is for IT and facilities teams running a refresh, a downsizing or an office exit. It covers planning, data, the logistics of moving equipment out of a commercial tower, and keeping e-waste out of the general office waste.",
      },
      { type: "h2", text: "Plan the refresh: inventory, data and asset tags" },
      {
        type: "p",
        text: "Start with a list. A spreadsheet with one row per device makes every later step easier: who signs off, what gets wiped, what's collected and what's written off.",
      },
      {
        type: "ul",
        items: [
          "Asset tag or serial number, device type and location",
          "Whether it stores data: laptops, desktops, servers, network storage, phones, and printers or copiers with internal drives",
          "Whether it's leased, owned or due back to a supplier",
          "Its fate: redeploy, sell, donate, return or dispose",
          "The date it was wiped or its drive removed, and by whom",
        ],
      },
      {
        type: "p",
        text: "Check leases before anything else. Leased equipment usually goes back to the leasing company, and disposing of it by mistake is an expensive error.",
      },
      { type: "h2", text: "Data handling first" },
      {
        type: "p",
        text: "Removal isn't data destruction. A crew that collects your hardware moves it; it doesn't make the data on it unreadable. That step is yours, or a specialist's.",
      },
      {
        type: "p",
        text: "The UAE's personal data protection law, Federal Decree-Law No. 45 of 2021, expects companies that hold personal data to secure it and keep it confidential. Companies in DIFC are covered by the DIFC Data Protection Law No. 5 of 2020. Old drives full of staff and customer records are exactly the kind of data these laws are about.",
      },
      {
        type: "p",
        text: "For most devices, your IT team can wipe drives using the manufacturer's tools or remove them for separate destruction. Phones and tablets also need removing from any device-management system and the company's accounts, or the next user can't set them up. Keep a record of what was wiped, how and when, against each asset tag.",
      },
      { type: "h3", text: "When you need a certified data destruction specialist" },
      {
        type: "ul",
        items: [
          "Your policies, auditors or clients require a certificate of destruction",
          "Drives are faulty and can't be wiped",
          "Servers or storage held sensitive financial, health or client data",
          "You have too many devices to wipe and document in-house",
        ],
      },
      {
        type: "p",
        text: "In those cases, use a specialist that shreds or wipes drives and issues certificates. We don't issue data destruction certificates. We collect the hardware once the data has been dealt with.",
      },
      { type: "h2", text: "Collection logistics in commercial towers" },
      {
        type: "p",
        text: "IT equipment is heavy for its size. A rack of servers, a few multifunction printers and fifty monitors take careful handling down corridors and through lifts, and offices in DIFC, Business Bay, JLT and Dubai Silicon Oasis each have building rules to work around.",
      },
      { type: "h3", text: "Loading bays, access passes and after-hours slots" },
      {
        type: "ul",
        items: [
          "Book the loading bay and goods lift, and ask whether IT kit counts as a standard goods move",
          "Send crew and vehicle details for access passes early, because they can take days",
          "Ask whether collections are allowed after hours or at weekends, when staff and lifts are free",
          "Stage equipment near the lift on the day, labelled and with cables bundled",
        ],
      },
      {
        type: "callout",
        title: "Price the collection",
        body: "Once the data is dealt with, send us photos of the equipment and the building's loading rules on WhatsApp. We reply with a fixed price for collection.",
      },
      { type: "h2", text: "Reuse, resale and donation before disposal" },
      {
        type: "p",
        text: "Not everything on the list has to be scrapped. Once data has been dealt with, working equipment can often be used again:",
      },
      {
        type: "ul",
        items: [
          "Redeploy: newer monitors, docks and peripherals often have a second life elsewhere in the business",
          "Resell: IT resellers may buy recent laptops and network equipment in bulk",
          "Donate: schools and charities sometimes accept working, wiped devices. Ask what they can use before you deliver",
          "Return: leased devices and some vendor equipment go back to the supplier",
        ],
      },
      {
        type: "p",
        text: "Printers and copiers deserve a separate check. Many multifunction devices have internal hard drives that store scanned and printed documents, and leased copiers often belong to the supplier. Ask the supplier how the drive is handled before the device leaves.",
      },
      { type: "h2", text: "Keeping e-waste separate from general office waste" },
      {
        type: "p",
        text: "Electronics contain metals and components worth recovering, and batteries and some parts need careful handling. They shouldn't go into the office's general bins or skips.",
      },
      {
        type: "ul",
        items: [
          "Keep IT equipment in its own area, away from furniture and general waste",
          "Remove batteries from devices where you can, and tape the terminals",
          "Bundle cables and keep chargers with the devices they belong to",
          "Ask any collector where the equipment goes after collection",
        ],
      },
      { type: "h2", text: "Checklist for the day" },
      {
        type: "ol",
        items: [
          "Every device on the disposal list has a wipe or destruction record",
          "Leased and returnable equipment has been set aside",
          "The loading bay, lift and passes are confirmed",
          "Equipment is staged, labelled and counted against the inventory",
          "Someone from IT is on site to sign the equipment out",
          "The final count is checked before the vehicle leaves",
        ],
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Can you collect servers and racks?" },
      {
        type: "p",
        text: "Yes, once the data has been dealt with and the equipment is powered down and disconnected. Tell us the number of racks, their height and whether they're bolted down, so the crew comes ready for the weight.",
      },
      { type: "h3", text: "Can we hand over drives that haven't been wiped?" },
      {
        type: "p",
        text: "We'd ask you not to. Wipe or remove drives first, or use a specialist that certifies destruction. We collect hardware, but we can't take responsibility for the data on it.",
      },
    ],
    sources: [
      { label: "UAE Government portal (u.ae): data protection laws, including Federal Decree-Law No. 45 of 2021 and DIFC Law No. 5 of 2020", url: "https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws" },
    ],
  },
  {
    slug: "clear-dubai-property-from-abroad",
    title: "How to clear a Dubai property remotely from overseas",
    description:
      "How to clear a Dubai property remotely from overseas: who gives access, agreeing the job by photos or video call, keys and permits, and proof it's done.",
    date: "2026-11-20",
    readMinutes: 6,
    tag: "Moving",
    relatedService: "house-villa-clearance",
    blocks: [
      {
        type: "p",
        text: "You can clear a Dubai property remotely from overseas if three things are in place: someone in Dubai who can give the crew access, a clear agreement on what goes and what stays, and a way for you to see the result. Everything else, from the quote to payment, can be handled by message, photo and video call.",
      },
      {
        type: "p",
        text: "This is common for owners of apartments in Downtown Dubai or villas on Palm Jumeirah and in Jumeirah Golf Estates who live abroad, for families dealing with a relative's home, and for tenants whose plans changed after they flew. The steps below work whichever of those you are.",
      },
      { type: "h2", text: "Who can authorise and give access" },
      {
        type: "p",
        text: "Two roles need filling, and they can be the same person. Someone has to authorise the clearance: the owner, the tenant, or someone acting with their authority. And someone has to let the crew in on the day.",
      },
      {
        type: "ul",
        items: [
          "A property manager or letting agent who already holds keys",
          "A relative or friend living in Dubai",
          "The building's management or the community's security office, if they hold keys and agree to open up",
          "A tenant who is still in the property, if the clearance is of the owner's items",
        ],
      },
      {
        type: "p",
        text: "If someone other than you is giving instructions, make sure they really can. Building management and landlords may ask for proof, such as a signed letter from you naming that person, or a power of attorney for larger matters. Ask them what they'll accept before the day, not at the door.",
      },
      { type: "h2", text: "Agreeing scope by photos and video call" },
      {
        type: "p",
        text: "Without you there, the scope has to be clear in advance. Ask the person with access to photograph every room, cupboard, balcony, storeroom and parking space, or walk through the property on a video call. For a large villa, a video walk-through before the quote is often easier than dozens of photos.",
      },
      {
        type: "ul",
        items: [
          "List what stays: landlord-owned furniture, appliances on the inventory, and anything being kept or shipped",
          "Mark items that stay with coloured stickers, if someone can do it for you",
          "Say what should happen to documents and valuables found during the clearance",
          "Agree a cut-off: anything not on the keep list goes",
        ],
      },
      {
        type: "callout",
        title: "Get a quote without flying back",
        body: "Send photos or book a video call on WhatsApp. We reply with a fixed price, and nothing is booked until you agree it.",
      },
      { type: "h2", text: "Keys, building access and permits" },
      {
        type: "p",
        text: "Arrange the practical access a week or so before the clearance:",
      },
      {
        type: "ol",
        items: [
          "Decide who holds the keys and access cards on the day, and who gets them back afterwards",
          "Ask building management whether a move-out permit, service lift booking or contractor pass is needed, and who has to apply",
          "In a gated community, check what the security office needs for the crew and vehicle",
          "Share a contact number for the person with access, and make sure they know the time window",
        ],
      },
      {
        type: "p",
        text: "Permits are often tied to the owner or the registered tenant, so the application may need your details or a signed form even if you're abroad. Our move-out permit guide explains how the NOC and gate pass usually work.",
      },
      { type: "h2", text: "Items you want to keep" },
      {
        type: "p",
        text: "Decide what happens to anything you're keeping before the clearance day, because the crew will only take what's agreed. Small, valuable items such as documents, jewellery, photos and laptops are best collected by your contact in person. Larger pieces can go to a relative, a storage unit or a shipping company, but book that collection first, so the keep pile is gone before the clearance starts.",
      },
      {
        type: "p",
        text: "If something has to stay in the property, such as landlord-owned furniture, make it obvious. A sticker on each item, plus a written list shared with your contact and the crew, avoids any doubt.",
      },
      { type: "h2", text: "Timing it from another time zone" },
      {
        type: "ul",
        items: [
          "Work back from your deadline, such as a handover, a sale completion or a new tenant's move-in, and leave a spare day",
          "Agree a time window that suits the person with access, not only the crew",
          "Pick a time when you're awake and reachable in case a question comes up",
          "Confirm the day before: access, permits and who's meeting the crew",
        ],
      },
      { type: "h2", text: "Proof of completion: photos and handover" },
      {
        type: "p",
        text: "When you can't walk through the property yourself, photos are your proof. After the clearance, we send photos of the cleared rooms, so you can see the result before the keys go back.",
      },
      {
        type: "ul",
        items: [
          "Ask the person with access to do their own short walk-through, or a video call, too",
          "Check the rooms, storerooms and balconies you listed against the photos",
          "Keep the photos with the date, in case a landlord or buyer questions the condition later",
        ],
      },
      { type: "h2", text: "Payments and receipts" },
      {
        type: "p",
        text: "You pay after the job is finished. We agree a payment method that's easy for you when we confirm the quote, so being overseas doesn't hold anything up. Keep the quote, the confirmation and the completion photos together as your record of the job.",
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Can my agent or a relative manage it?" },
      {
        type: "p",
        text: "Yes. Many remote clearances are run by an agent or relative who has the keys. You agree the scope and price, and they handle access on the day. Make sure building management knows they're acting for you, and tell them what's staying.",
      },
      { type: "h3", text: "What if something valuable is found during the clearance?" },
      {
        type: "p",
        text: "Agree this before the day. The usual approach is that documents, jewellery, cash or anything that looks personal is set aside, photographed and handed to the person with access, not loaded. A careful sweep beforehand is still the best protection.",
      },
    ],
  },
  {
    slug: "office-furniture-disposal-dubai",
    title: "Office furniture disposal in Dubai: reuse, resell or remove",
    description:
      "Office furniture disposal in Dubai: how to audit what you have, resale and donation routes, dismantling workstations, and clearing without stopping work.",
    date: "2026-11-20",
    readMinutes: 6,
    tag: "Recycling",
    relatedService: "office-clearance",
    blocks: [
      {
        type: "p",
        text: "Office furniture disposal in Dubai works best as three decisions, made in order: what can be reused in the business, what can be sold or donated, and what has to be removed. Settling the first two before you book a clearance usually means a smaller, cheaper removal and less going to waste.",
      },
      {
        type: "p",
        text: "This guide is for office managers, SMEs and co-working operators in places like JLT, Al Quoz and Dubai Investments Park who are downsizing, refurbishing or moving out.",
      },
      { type: "h2", text: "Audit: what is reusable, resaleable or scrap" },
      {
        type: "p",
        text: "Walk the office with a simple spreadsheet and sort every piece into one of three columns.",
      },
      {
        type: "ul",
        items: [
          "Reusable: good-condition chairs, storage and meeting tables that suit your next space",
          "Resaleable or donatable: sound furniture you won't use, especially branded task chairs, height-adjustable desks and steel storage",
          "Scrap: broken chairs, chipped laminate desks, damaged partitions and anything stained or sagging",
        ],
      },
      {
        type: "p",
        text: "Be honest in the scrap column. Worn laminate desks and old swivel chairs rarely sell, and holding onto them in the hope of a buyer often means paying to store them first and remove them later.",
      },
      {
        type: "p",
        text: "Count as you go: \"14 task chairs, 8 bench desks, 3 pedestal units\" is far more useful to a buyer or a clearance crew than \"a lot of furniture\". Photograph each type.",
      },
      {
        type: "p",
        text: "Before anything goes in a column, check who owns it. Furniture can be leased, provided with a serviced office, or left by a previous tenant and listed in your lease. None of that is yours to sell or throw away without agreement.",
      },
      { type: "h2", text: "Resale and donation routes for office furniture" },
      {
        type: "p",
        text: "Used office furniture moves best in batches. A buyer wants ten matching chairs, not one.",
      },
      {
        type: "ul",
        items: [
          "Used office furniture dealers may buy matching sets, usually collecting themselves",
          "Online marketplaces suit smaller lots and individual pieces in good condition",
          "Staff often want chairs, monitor arms and storage for home offices",
          "Schools, charities and community groups sometimes accept sound furniture, but ask what they can use and collect",
          "The building or the incoming tenant may want to keep some pieces, which saves everyone a move",
        ],
      },
      {
        type: "p",
        text: "Leave time. Selling and donating take weeks, not days, so start this at least a month before you need the space empty. Whatever hasn't gone by the cut-off date moves to the removal list.",
      },
      { type: "h3", text: "Getting furniture ready to sell" },
      {
        type: "ul",
        items: [
          "Wipe down desks and chairs, and photograph matching pieces together as a set",
          "Note the brand and model where you can find it, usually on a label under the seat or desktop",
          "Give dimensions for desks and storage, so buyers know whether it fits their space",
          "Be clear about faults, such as a broken gas lift or a missing key",
          "Set collection terms: the buyer collects, from the loading bay, during the building's permitted hours",
        ],
      },
      {
        type: "callout",
        title: "Price the leftovers",
        body: "Send photos of what's left after resale and donation on WhatsApp, with the building and floor. We reply with a fixed price for the clearance.",
      },
      { type: "h2", text: "Dismantling workstations and partitions" },
      {
        type: "p",
        text: "Most office furniture has to come apart to leave the building. Bench desks unbolt into frames and tops, cable trays and screens come off, and pedestals roll out separately. Our crews dismantle freestanding furniture on site as part of the clearance.",
      },
      {
        type: "ul",
        items: [
          "Clear desks of personal items, papers and IT equipment first",
          "Unplug and remove monitors and computers, which should be handled separately from furniture",
          "Empty filing cabinets and pedestals, and keep the keys with them",
          "Note anything bolted to the floor or wall",
        ],
      },
      { type: "h3", text: "Freestanding vs fixed partitions" },
      {
        type: "p",
        text: "Freestanding partitions and desk screens clip or bolt to the furniture and can be removed with it. Fixed partitions, glass walls and anything built into the floor or ceiling are part of the fit-out. Those need a fit-out contractor, and often the building's approval, before they come out.",
      },
      { type: "h2", text: "What happens to the furniture nobody wants" },
      {
        type: "p",
        text: "Furniture that can't be reused, sold or donated still doesn't all end up in the same place. Steel frames, filing cabinets and metal storage can be recycled for their metal. Laminate and particle board are harder to recycle and are more often disposed of. We set aside what can be reused or recycled where possible, and the rest goes for disposal through proper channels.",
      },
      {
        type: "p",
        text: "Separating as you dismantle helps. Keeping metal frames apart from desktops and cardboard apart from both makes it far more likely each part goes somewhere useful.",
      },
      { type: "h2", text: "Clearing without disrupting staff" },
      {
        type: "p",
        text: "If the office is still working, plan the clearance around the people in it.",
      },
      {
        type: "ul",
        items: [
          "Clear in zones, starting with empty desks, storerooms and unused meeting rooms",
          "Book evenings or weekends where the building allows it, so lifts and corridors are free",
          "Tell staff which day their area is cleared, and what they need to empty first",
          "Keep fire exits and corridors clear between visits",
        ],
      },
      {
        type: "p",
        text: "After the final visit, walk each zone with the clearance list. Check under desks, inside cupboards and in the storeroom for anything missed, then take dated photos of the empty space. If the office is being handed back, those photos are useful when the landlord inspects it.",
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Can you take partitions once the fit-out contractor has removed them?" },
      {
        type: "p",
        text: "Yes. Once fixed partitions, ceilings or flooring have been stripped by a contractor, we can clear the panels and debris they leave behind, along with the rest of the furniture.",
      },
      { type: "h3", text: "Is it worth selling old office chairs?" },
      {
        type: "p",
        text: "For matching sets of good branded task chairs, often yes. For mixed, worn or basic chairs, usually not. The time spent listing and arranging collections costs more than they'll sell for.",
      },
    ],
  },
  {
    slug: "donate-furniture-dubai",
    title: "Where to donate furniture in Dubai, and what's accepted",
    description:
      "How to donate furniture in Dubai: which pieces charities and groups accept, the ways to give furniture away, arranging pickup, and what to do with the rest.",
    date: "2026-11-21",
    readMinutes: 6,
    tag: "Recycling",
    relatedService: "furniture-removal",
    blocks: [
      {
        type: "p",
        text: "To donate furniture in Dubai, start with its condition: clean, sound and complete pieces find a home quickly, while stained, broken or upholstered items usually don't. Then choose a route, such as a charity, a community group or a noticeboard, and confirm what they accept and who collects before you promise anything.",
      },
      {
        type: "p",
        text: "Policies on what can be donated change often, and the details passed around online go out of date quickly. So this guide doesn't list organisations. It shows you how to check what's donatable, where to offer it, and what to ask so a pickup actually happens.",
      },
      { type: "h2", text: "Is your furniture donatable? A quick condition check" },
      {
        type: "p",
        text: "Ask yourself whether you'd be happy to receive the piece as it is. If the answer is yes, it's probably donatable. A few quick checks:",
      },
      {
        type: "ul",
        items: [
          "It's clean, with no stains, smells or signs of pests",
          "It's structurally sound: no wobbly legs, split joints or broken drawers",
          "It's complete, with its shelves, handles, keys and fixings",
          "It can be moved, or taken apart and moved, by the people collecting it",
        ],
      },
      { type: "h3", text: "What most charities refuse" },
      {
        type: "ul",
        items: [
          "Broken, damaged or heavily worn furniture",
          "Pieces with missing parts that can't easily be replaced",
          "Very large, heavy items they have no space or vehicle for",
          "Flat-pack furniture that has been rebuilt several times and no longer holds together",
        ],
      },
      { type: "h3", text: "Why mattresses and upholstered pieces are often declined" },
      {
        type: "p",
        text: "Mattresses, sofas and upholstered chairs are hard to check for hygiene and pests, and hard to clean properly. Many groups won't take them at all, and some only take them nearly new. If a sofa or mattress isn't in excellent condition, plan to dispose of it rather than donate it.",
      },
      { type: "h2", text: "Ways to donate in Dubai" },
      { type: "h3", text: "Registered charities and their acceptance rules" },
      {
        type: "p",
        text: "Some UAE charities accept household furniture for families in need, but what they take and whether they collect varies, and it changes. Before you offer anything, contact the charity directly through its official website or phone line, and check three things: whether it accepts furniture at the moment, which items and in what condition, and whether it collects or you must deliver.",
      },
      {
        type: "p",
        text: "Be cautious with websites and numbers that appear only in adverts or listings. Some companies use the word \"charity\" for what is a paid removal service. A registered charity will be clear about who it is.",
      },
      { type: "h3", text: "Community groups and give-away posts" },
      {
        type: "p",
        text: "Neighbourhood and expat groups online are often the fastest way to rehome furniture. Post clear photos, the dimensions, the area and the date it must go. Free items usually attract takers within days, but expect some people not to turn up. Keep a reserve list.",
      },
      { type: "h3", text: "Workplace and building noticeboards" },
      {
        type: "p",
        text: "Colleagues, your building's residents and the community's maintenance staff may want what you're giving away. A note on the noticeboard or in the residents' group reaches people who live close by, which makes collection much easier.",
      },
      {
        type: "callout",
        title: "Clearing what's left",
        body: "Send a photo of whatever hasn't found a home on WhatsApp. We reply with a fixed price, set aside items for reuse where possible, and take the rest.",
      },
      { type: "h2", text: "Arranging pickup or drop-off" },
      { type: "h3", text: "What to ask before you book" },
      {
        type: "ul",
        items: [
          "Do you accept this item, in this condition, right now?",
          "Do you collect, and is there a charge?",
          "How many people will come, and will they carry it from the flat or only from the ground floor?",
          "Can you take it apart if it doesn't fit through the door?",
          "What happens if you can't take it on the day?",
        ],
      },
      { type: "h3", text: "Timing a donation with a move-out date" },
      {
        type: "p",
        text: "Donations take longer than people expect. Collections get rescheduled, and some items are turned down on the doorstep. Start offering furniture three or four weeks before you move out, and set a cut-off a week before the handover. Anything still there after the cut-off goes to removal, so it doesn't end up in the corridor on your last day. Keep a simple list of who is collecting what, when, and their phone number, and confirm each collection the day before.",
      },
      {
        type: "p",
        text: "In a tower, book the service lift for any collection and tell the building who is coming. In older areas like Deira and Al Qusais, check where a van can stop. For larger collections in Al Quoz and the newer communities, ask whether the group needs help loading.",
      },
      { type: "h2", text: "What to do with pieces nobody will take" },
      {
        type: "p",
        text: "Some furniture won't find a taker, however good your intentions. That doesn't mean it has to be dumped.",
      },
      {
        type: "ul",
        items: [
          "Dubai Municipality's free bulky waste service takes household furniture where your address is eligible. Request it on 800900 or through the municipality's apps",
          "Metal frames, shelving and some materials can be recycled rather than thrown away",
          "A removal crew can take the rest in one visit, carrying it from wherever it is",
        ],
      },
      {
        type: "p",
        text: "Never leave furniture beside the bins or in the corridor in the hope someone will take it. Dubai fines leaving goods near waste containers, and buildings can charge for clearing them.",
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Do charities collect from towers?" },
      {
        type: "p",
        text: "Some do, but many only collect from the ground floor or the loading bay, and few have staff to carry heavy furniture down from upper floors. Ask before you book, and arrange the service lift yourself.",
      },
      { type: "h3", text: "Can I donate furniture for free pickup?" },
      {
        type: "p",
        text: "Sometimes. A charity or a person collecting a free item may come at no cost, but it depends on the item, the location and their capacity. If a company offers free pickup and then charges for items it says it can't use, you're dealing with a removal service, not a charity.",
      },
    ],
    sources: [
      { label: "Dubai Municipality: bulky waste disposal service (furniture and used electrical appliances)", url: "https://www.dm.gov.ae/35-increase-in-requests-for-dubai-municipality-bulky-waste-disposal-service/" },
      { label: "Dubai Legislation Portal: Executive Council Resolution No. 14 of 2015", url: "https://dlp.dubai.gov.ae/Legislation%20Reference/2015/Executive%20Council%20Resolution%20No.%20(14)%20of%202015.html" },
    ],
  },
  {
    slug: "dumping-furniture-next-to-bin-dubai-rules",
    title: "Dumping fines in Dubai: can you leave furniture by the bin?",
    description:
      "Can you leave furniture by the bin in Dubai? What the 2024 waste law says about dumping, the fines in the published schedule, and the legal alternatives.",
    date: "2026-11-21",
    readMinutes: 6,
    tag: "Dubai guide",
    relatedService: "junk-removal",
    blocks: [
      {
        type: "p",
        text: "No. Leaving furniture beside a bin, in a corridor or on empty land in Dubai is treated as dumping, not as a collection. Dubai's waste law forbids it, and the published penalty schedule lists fines starting at AED 500 for goods left in public places and AED 1,000 for goods left near a waste container.",
      },
      {
        type: "p",
        text: "The good news is that the legal alternatives are easy, and one of them is free. Here's what the rules say, what the fines are, and what to do instead.",
      },
      { type: "h2", text: "What Law No. 18 of 2024 says" },
      {
        type: "p",
        text: "Dubai's waste management law, Law No. 18 of 2024, sets the basic rule in Article 6, on public cleanliness: \"No Person may dump, discard, place, spill, discharge, or otherwise dispose of any Waste in Public Places or in places other than those designated for this purpose.\"",
      },
      {
        type: "p",
        text: "The law's definition of a public place is wide. It includes roads, streets, pavements, beaches, the creek, public squares and vacant land plots. A sofa left on the pavement or a wardrobe left on the empty plot at the end of the road is covered.",
      },
      {
        type: "p",
        text: "Article 6 also protects the bins themselves. It bans scattering the contents of a waste container, moving one without approval, using one for anything other than its purpose, and parking beside one in a way that blocks collection.",
      },
      { type: "h2", text: "Fines: what the published schedules show" },
      {
        type: "p",
        text: "Under the 2024 law, fines can reach AED 500,000, and the fine doubles if the same violation is repeated within a year, up to that limit. The law leaves the specific amount for each violation to a separate resolution of the Executive Council.",
      },
      {
        type: "p",
        text: "The detailed public hygiene schedule published on the Dubai Legislation Portal is Executive Council Resolution No. 14 of 2015. Its relevant entries include:",
      },
      {
        type: "ul",
        items: [
          "AED 1,000 for leaving equipment or goods near a waste container in a way that may hinder waste disposal",
          "AED 1,000 for disposing of waste in public places, on vacant land or outside designated disposal sites",
          "AED 500 for leaving goods in a public place, on a roof or on a balcony in a way that spoils the appearance of the city",
          "AED 5,000 for disposing of waste or hazardous materials in places other than designated sites",
        ],
      },
      {
        type: "p",
        text: "Amounts and schedules can be updated, so check the Dubai Legislation Portal for the current version before relying on a figure. The direction is clear either way: dumping furniture costs far more than disposing of it properly.",
      },
      {
        type: "p",
        text: "A fine isn't the only cost. Article 23 of the 2024 law requires the person responsible to put the violation right at their own expense. If they don't, Dubai Municipality can do it and charge them the cost, plus 25% as an administrative fee. Clearing a dumped sofa yourself, then paying for it twice, is the worst outcome of all.",
      },
      { type: "h2", text: "Building rules on bin rooms" },
      {
        type: "p",
        text: "Separately from the law, your building or community has its own rules. Bin rooms and chutes are for bagged household waste. A wardrobe in the bin room blocks the space for everyone, and in many towers it's against the building rules.",
      },
      {
        type: "ul",
        items: [
          "Buildings can charge residents for clearing bulky items left in bin rooms or corridors",
          "Items in corridors and stairwells can block fire exits, which building management takes seriously",
          "Communities may issue violation notices for items left on verges and shared areas",
          "Disputes over abandoned items often surface at move-out, when deposits are on the line",
        ],
      },
      {
        type: "p",
        text: "If you're not sure what your building allows, ask the management office before anything leaves the flat. The same applies in villa communities, where verges and shared areas are usually covered by community rules.",
      },
      {
        type: "callout",
        title: "Out of the flat, not by the bin",
        body: "Send a photo of what needs to go on WhatsApp. We reply with a fixed price, carry it from the room and take it away for proper disposal.",
      },
      { type: "h2", text: "Legal alternatives, free and paid" },
      { type: "h3", text: "Free: Dubai Municipality's bulky waste service" },
      {
        type: "p",
        text: "Dubai Municipality runs a free bulky waste collection for household furniture and used appliances. You request it on 800900, through the municipality's apps or website, and a staff member contacts you to arrange the pickup. The service doesn't cover free zones or real estate development zones, and it has access limits for high-rise buildings.",
      },
      { type: "h3", text: "Free: give it away" },
      {
        type: "p",
        text: "If the furniture is clean and sound, offer it to friends, neighbours, colleagues or a community group. Agree a collection date and a cut-off, so it doesn't sit in the corridor waiting. Our guide to donating furniture in Dubai explains what charities and community groups usually accept.",
      },
      { type: "h3", text: "Paid: a removal crew" },
      {
        type: "p",
        text: "A crew carries the furniture from wherever it is, dismantles it if needed and takes it away in one visit. It's the quickest option when you're in a tower, outside the municipal service area, or working to a deadline. Send photos first, so you know the fixed price before anyone arrives.",
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Can I leave items for the municipality without booking?" },
      {
        type: "p",
        text: "No. The municipal bulky waste service is booked in advance. Leaving furniture by the bins and hoping it's taken counts as leaving goods near a waste container. Book first, then put items out only when and where you're told.",
      },
      { type: "h3", text: "Is it still dumping if I put a \"free\" sign on it?" },
      {
        type: "p",
        text: "Yes. A sign doesn't change where the furniture is. Goods left beside a bin or in a public place fall under the same schedule entries, whether or not you hope someone takes them. Offer it online or on a noticeboard instead, and only put it out when a taker is on the way.",
      },
    ],
    sources: [
      { label: "Dubai Legislation Portal: Law No. 18 of 2024 Regulating Waste Management (Articles 2, 6 and 20)", url: "https://dlp.dubai.gov.ae/Legislation%20Reference/2024/Law%20No.%20%2818%29%20of%202024%20Regulating%20Waste%20Management.html" },
      { label: "Dubai Legislation Portal: Executive Council Resolution No. 14 of 2015 (public hygiene violations and penalties)", url: "https://dlp.dubai.gov.ae/Legislation%20Reference/2015/Executive%20Council%20Resolution%20No.%20(14)%20of%202015.html" },
      { label: "Dubai Municipality: bulky waste disposal service", url: "https://www.dm.gov.ae/35-increase-in-requests-for-dubai-municipality-bulky-waste-disposal-service/" },
      { label: "Khaleej Times: free bulk waste removal via WhatsApp", url: "https://www.khaleejtimes.com/uae/dubai-offers-free-bulk-waste-removal-service-via-whatsapp" },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
