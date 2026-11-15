import Link from "next/link";
import { serviceGroups } from "@/data/service-groups";
import { Icon, type IconName } from "./Icon";

/**
 * The slim shape a service card needs. Built on the server with toCard() in
 * lib/service-card.ts, so client components never pull in the full service data.
 */
export type CardService = {
  slug: string;
  name: string;
  short: string;
  icon: IconName;
  number: string;
  total: number;
  group: number;
};

export function ServiceCard({ service }: { service: CardService }) {
  return (
    <Link href={`/services/${service.slug}`} className={`svc g${service.group}`} draggable={false}>
      <span className="num">
        {service.number} / {service.total}
      </span>
      <span className="sic">
        <Icon name={service.icon} className="size-[30px]" />
      </span>
      <h3>{service.name}</h3>
      <p>{service.short}</p>
      <span className="bgn" aria-hidden="true">
        {service.number}
      </span>
      <span className="meta">
        <span className="tags">
          <span>{serviceGroups[service.group].label}</span>
        </span>
        <span className="go" aria-hidden="true">
          <Icon name="arrow" className="size-5" />
        </span>
      </span>
    </Link>
  );
}
