/**
 * Single source of truth for business details.
 * Edit this file before launch. `npm run build` prints [launch check] lines
 * for anything still unset.
 */

const PLACEHOLDER_PHONE = "+971500000000";

export type PriceTier = {
  id: string;
  name: string;
  fits: string;
  examples: string;
  /** Your real starting price in AED. Leave null to show "Priced from your photo". */
  fromAed: number | null;
};

export type Review = { name: string; area: string; text: string; rating: number };

export const site = {
  name: "Dubai Junk Removal Services",
  shortName: "Dubai Junk Removal",
  url: "https://dubaijunkremovalservices.com",
  description:
    "Junk removal across Dubai. Send a photo on WhatsApp, get a fixed price, and a crew lifts, loads and clears it. Furniture, appliances, full villa clearances and more.",

  /** Real number in E.164 format, with + and country code. */
  phone: "+971557843154",
  /** How the number reads on the page. */
  phoneDisplay: "+971 55 784 3154",
  /** WhatsApp number, digits only, with country code. */
  whatsapp: "971557843154",
  /** REPLACE: confirm this mailbox exists. */
  email: "hello@dubaijunkremovalservices.com",

  /** Shown on the site and added to the schema. */
  streetAddress: "Business Bay, Dubai",
  /** Optional: Dubai trade licence number, shown in the footer when set. */
  tradeLicence: "",

  hoursLabel: "Sat to Thu 7am to 10pm, Fri 9am to 10pm",
  hours: [
    {
      days: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "07:00",
      closes: "22:00",
    },
    { days: ["Friday"], opens: "09:00", closes: "22:00" },
  ],

  /** Optional: Google Business Profile, Instagram and so on. Added to schema sameAs. */
  profiles: [] as string[],

  /** Set your real prices to publish them. */
  priceTiers: [
    {
      id: "single",
      name: "Single item",
      fits: "One bulky piece",
      examples: "A sofa, a fridge or a mattress",
      fromAed: null,
    },
    {
      id: "quarter",
      name: "Quarter truck",
      fits: "A small room's worth",
      examples: "Bed, wardrobe and a few boxes",
      fromAed: null,
    },
    {
      id: "half",
      name: "Half truck",
      fits: "A one-bedroom's worth",
      examples: "Living room set, appliances and bags",
      fromAed: null,
    },
    {
      id: "full",
      name: "Full truck",
      fits: "A two-bedroom's worth or more",
      examples: "A flat clearance or a garage emptied",
      fromAed: null,
    },
  ] as PriceTier[],

  /**
   * Paste genuine customer reviews here. The reviews section stays hidden
   * while this is empty. Only add reviews customers really wrote.
   */
  reviews: [] as Review[],
};

export const hasRealPhone = site.phone !== PLACEHOLDER_PHONE;

export function launchWarnings(): string[] {
  const warnings: string[] = [];
  if (!hasRealPhone) {
    warnings.push("Phone and WhatsApp are still placeholders. Set them in src/config/site.ts.");
  }
  if (site.priceTiers.every((tier) => tier.fromAed === null)) {
    warnings.push("No prices set. The site shows 'Priced from your photo' instead.");
  }
  if (site.reviews.length === 0) {
    warnings.push("No reviews added. The reviews section is hidden.");
  }
  return warnings;
}
