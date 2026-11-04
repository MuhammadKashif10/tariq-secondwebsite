import { hasRealPhone, site } from "@/config/site";
import { areas } from "@/data/areas";
import type { Faq } from "@/data/services";

const businessId = `${site.url}/#business`;

/**
 * Only states facts held in the site config. Ratings are left out until real
 * reviews exist, and the phone is left out until a real number is set.
 */
export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessId,
    name: site.name,
    url: site.url,
    description: site.description,
    image: `${site.url}/opengraph-image`,
    ...(hasRealPhone ? { telephone: site.phone } : {}),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      ...(site.streetAddress ? { streetAddress: site.streetAddress } : {}),
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      ...areas.map((area) => ({ "@type": "Place", name: `${area.name}, Dubai` })),
    ],
    openingHoursSpecification: site.hours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.days,
      opens: hours.opens,
      closes: hours.closes,
    })),
    ...(site.profiles.length ? { sameAs: site.profiles } : {}),
  };
}

export function serviceSchema(name: string, description: string, path: string, areaName = "Dubai") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    serviceType: name,
    provider: { "@id": businessId },
    areaServed: { "@type": "Place", name: areaName },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${site.url}${crumb.path}`,
    })),
  };
}

export function articleSchema(title: string, description: string, path: string, date: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: `${site.url}${path}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@id": businessId },
  };
}
