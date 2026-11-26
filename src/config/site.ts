/**
 * Single source of truth for business details.
 *
 * Fill the owner fields below before relying on local listings. Leave a field
 * empty rather than guessing. `npm run build` prints [launch check] lines for
 * anything still unset.
 *
 * Owner checklist:
 * - googleSiteVerification / bingSiteVerification: the code only, from Search Console or Bing Webmaster
 * - email: an inbox on this domain, when that mailbox exists
 * - streetAddress: a real public street, or leave empty for a service-area business
 * - baseArea: a neighbourhood name, if you want one shown. Not a street address
 * - tradeLicence: the real Dubai DET/DED licence number
 * - googleBusinessProfile: the real Google Business Profile URL
 * - mapUrl: a Google Maps link, if it differs from the Business Profile URL
 * - profiles: other real profile URLs
 * - geo: your real base coordinates, or null to omit them
 * - priceTiers[].fromAed: real starting prices
 * - reviews: reviews customers actually wrote
 *
 * Do not invent licence numbers, reviews, street addresses, profile URLs or prices.
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
  phone: "+971553563316",
  /** How the number reads on the page. */
  phoneDisplay: "+971 55 356 3316",
  /** WhatsApp number, digits only, with country code. */
  whatsapp: "971553563316",

  /**
   * Public contact email. Replace with an address on this domain
   * (for example hello@dubaijunkremovalservices.com) when that inbox exists.
   */
  email: "mkashifshah10@gmail.com",

  /** Last time the site's content changed. Used for sitemap dates. */
  contentUpdated: "2026-11-26",

  /**
   * Search engine verification codes. Paste only the code from the meta tag
   * each tool gives you, for example "abc123", not the whole tag.
   */
  googleSiteVerification: "",
  bingSiteVerification: "",

  /**
   * Real street address only, without the city. Leave empty if you do not
   * publish a street (the site then describes a Dubai service area).
   * Example, once it is a real address: "Office 12, Some Tower".
   */
  streetAddress: "",

  /**
   * Neighbourhood the crew is based in. Shown to visitors and not copied into
   * the schema street address. Leave empty to describe the business as Dubai-wide only.
   */
  baseArea: "Business Bay",

  /** City for addressLocality. */
  addressLocality: "Dubai",
  /** Emirate for addressRegion. */
  addressRegion: "Dubai",

  /**
   * Dubai Department of Economy and Tourism trade licence number.
   * Leave empty until the real number can be published. Shown in the footer
   * and added to LocalBusiness identifier. Never invent one.
   */
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

  /**
   * Google Business Profile URL. Leave empty until the profile is live.
   * Do not paste a guessed Maps link.
   */
  googleBusinessProfile: "",

  /**
   * Optional Google Maps URL for schema hasMap. Leave empty to reuse
   * googleBusinessProfile when that is set.
   */
  mapUrl: "",

  /**
   * Other public profiles (Instagram, Facebook and so on). Full URLs only.
   * The Business Profile URL above is included in schema sameAs as well.
   */
  profiles: [] as string[],

  /**
   * General coordinates for the city of Dubai, near Downtown. Used because no
   * street address is published and collections cover the emirate. Replace
   * with the coordinates of your real base, or set null to leave geo out.
   */
  geo: { latitude: 25.2048, longitude: 55.2708 } as { latitude: number; longitude: number } | null,

  /**
   * Path of a real photo in /public. Used as the LocalBusiness image.
   * This is a site photograph, not the generated social card.
   */
  image: "/images/movers-sofa-street.jpg",

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

/** One line for visitors. A street is included only when one is set. */
export function placeLine(): string {
  const city = site.addressLocality;
  if (site.streetAddress && site.baseArea) return `${site.streetAddress}, ${site.baseArea}, ${city}`;
  if (site.streetAddress) return `${site.streetAddress}, ${city}`;
  if (site.baseArea) return `${site.baseArea}, ${city}`;
  return `Serving all of ${city}`;
}

/** Business Profile plus any other real profile URLs. Empty strings are dropped. */
export function profileLinks(): string[] {
  return [...new Set([site.googleBusinessProfile, ...site.profiles].map((url) => url.trim()).filter(Boolean))];
}

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
  if (!site.streetAddress) {
    warnings.push("No street address set. Schema describes a Dubai service area until a real street is added in src/config/site.ts.");
  }
  if (!site.tradeLicence) {
    warnings.push("No trade licence number set. Leave it empty until the real DET/DED number can be published.");
  }
  if (!site.googleBusinessProfile) {
    warnings.push("No Google Business Profile URL set. Add the real profile URL in src/config/site.ts when it exists.");
  }
  if (!site.googleSiteVerification) {
    warnings.push("Google Search Console verification code is empty.");
  }
  if (!site.bingSiteVerification) {
    warnings.push("Bing Webmaster verification code is empty.");
  }
  if (!site.email.endsWith("@dubaijunkremovalservices.com")) {
    warnings.push("Contact email is not on dubaijunkremovalservices.com yet. Swap in a domain inbox when you have one.");
  }
  return warnings;
}
