import type { CardService } from "@/components/ServiceCard";
import { serviceGroupIndex } from "@/data/service-groups";
import { services, type Service } from "@/data/services";

export function toCard(service: Service): CardService {
  return {
    slug: service.slug,
    name: service.name,
    short: service.short,
    icon: service.icon,
    number: String(services.findIndex((s) => s.slug === service.slug) + 1).padStart(2, "0"),
    total: services.length,
    group: serviceGroupIndex(service.slug),
  };
}

export const toCards = (list: Service[]) => list.map(toCard);
