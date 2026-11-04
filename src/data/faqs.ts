import type { Faq } from "./services";

export const faqGroups: { title: string; faqs: Faq[] }[] = [
  {
    title: "Pricing and quotes",
    faqs: [
      {
        q: "How much does junk removal cost in Dubai?",
        a: "It depends on how much truck space your items take up, how heavy they are, and how easy they are to reach. Send a photo on WhatsApp and you'll get a fixed price for your job, rather than a vague range.",
      },
      {
        q: "Is the price really fixed?",
        a: "Yes, for what you've shown us. The price only changes if the job changes, for example if you add items or access turns out to be different. If that happens, the crew will agree the new price with you before loading.",
      },
      {
        q: "When do I pay?",
        a: "After the job is done and you're happy with it. We'll confirm the payment options with your quote.",
      },
      {
        q: "Is there a call-out fee if I decide not to go ahead?",
        a: "Quotes by photo are free and there's no obligation. You only pay for a job you've booked.",
      },
    ],
  },
  {
    title: "Booking and timing",
    faqs: [
      {
        q: "Can you come today?",
        a: "Often, though it's never guaranteed. It depends on crews, traffic and your building's rules. Message us with a photo and we'll tell you right away whether today is possible.",
      },
      {
        q: "What do you need from me to give a quote?",
        a: "A photo or two, your area, the floor number and whether there's a lift. A location pin helps too.",
      },
      {
        q: "Do I need to be home?",
        a: "Not necessarily. If someone can give the crew access and you've confirmed what's going, we can send you photos once the job is finished.",
      },
      {
        q: "Do you cover all of Dubai?",
        a: "We cover communities across the emirate, from Jebel Ali to Al Qusais. If your area isn't listed, ask us anyway.",
      },
    ],
  },
  {
    title: "What we take",
    faqs: [
      {
        q: "What can't you take?",
        a: "We can't take hazardous waste such as chemicals, paint in bulk, gas cylinders, asbestos, medical waste or fuel. Tell us if you're not sure. We'll say so honestly and point you in the right direction where we can.",
      },
      {
        q: "Do I have to carry anything downstairs?",
        a: "No. The crew collects from wherever the items are, whether that's the bedroom, the roof or the garage.",
      },
      {
        q: "What happens to my items?",
        a: "We sort loads where we can. Usable things go towards reuse, recyclable materials go to recycling, and the rest is taken for disposal.",
      },
    ],
  },
  {
    title: "Buildings and access",
    faqs: [
      {
        q: "Do I need a permit or service lift booking?",
        a: "Many Dubai towers and gated communities require one for bulky items. Check with your building management or community office. We'll supply any crew or vehicle details they ask for.",
      },
      {
        q: "What if my building has no lift?",
        a: "That's fine. We carry by stairs. Let us know the floor when you ask for a quote so we can send enough people.",
      },
    ],
  },
];

export const homeFaqs: Faq[] = [
  faqGroups[0].faqs[0],
  faqGroups[0].faqs[1],
  faqGroups[1].faqs[0],
  faqGroups[3].faqs[0],
  faqGroups[2].faqs[0],
  faqGroups[2].faqs[2],
];
