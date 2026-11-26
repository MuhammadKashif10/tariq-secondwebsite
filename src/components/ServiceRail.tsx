import { Fragment } from "react";
import { serviceGroups } from "@/data/service-groups";
import { ServiceCard, type CardService } from "./ServiceCard";

/** Horizontal list of every service. Native scrolling, so the links do not wait on JavaScript. */
export function ServiceRail({ list }: { list: CardService[] }) {
  return (
    <div className="rv mt-10">
      <ul className="rail rail-static m-0 list-none">
        {list.map((service) => (
          <li key={service.slug}>
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Filterable grid. Every card stays in the HTML; the radios only hide groups. */
export function ServiceFilterGrid({ list }: { list: CardService[] }) {
  const rules = serviceGroups
    .map((_, index) => `.svc-filters:has(#svc-g${index}:checked) .gg > li:not([data-group="${index}"]){display:none}`)
    .join("");

  return (
    <div className="svc-filters">
      <style>{rules}</style>
      <div className="chips" role="radiogroup" aria-label="Filter services">
        <input className="sr-only" type="radio" name="svc-group" id="svc-all" defaultChecked />
        <label className="chip" htmlFor="svc-all">
          All {list.length}
        </label>
        {serviceGroups.map((group, index) => (
          <Fragment key={group.label}>
            <input className="sr-only" type="radio" name="svc-group" id={`svc-g${index}`} />
            <label className="chip" htmlFor={`svc-g${index}`}>
              {group.label}
            </label>
          </Fragment>
        ))}
      </div>
      <ul className="gg m-0 mt-9 list-none p-0">
        {list.map((service) => (
          <li key={service.slug} data-group={service.group}>
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>
    </div>
  );
}
