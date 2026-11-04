export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date. Update when you revise a post. */
  date: string;
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
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
