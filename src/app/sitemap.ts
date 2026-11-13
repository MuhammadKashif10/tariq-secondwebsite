import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { areas } from "@/data/areas";
import { posts } from "@/data/posts";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/areas", "/pricing", "/about", "/contact", "/faq", "/blog", "/privacy", "/terms"];
  const lastModified = site.contentUpdated;
  return [
    ...pages.map((path) => ({ url: `${site.url}${path}`, lastModified })),
    ...services.map((service) => ({ url: `${site.url}/services/${service.slug}`, lastModified })),
    ...areas.map((area) => ({ url: `${site.url}/areas/${area.slug}`, lastModified })),
    ...posts.map((post) => ({ url: `${site.url}/blog/${post.slug}`, lastModified: post.date })),
  ];
}
