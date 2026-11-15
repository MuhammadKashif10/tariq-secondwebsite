"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { serviceGroups } from "@/data/service-groups";
import { ServiceCard, type CardService } from "./ServiceCard";
import { Icon } from "./Icon";

function useGroupFilter(list: CardService[]) {
  const [group, setGroup] = useState(-1);
  const shown = group < 0 ? list : list.filter((s) => s.group === group);
  const chips = (
    <div className="chips rv" role="group" aria-label="Filter services">
      {["All " + list.length, ...serviceGroups.map((g) => g.label)].map((label, index) => (
        <button key={label} type="button" className="chip" aria-pressed={group === index - 1} onClick={() => setGroup(index - 1)}>
          {label}
        </button>
      ))}
    </div>
  );
  return { shown, chips, group };
}

/** Horizontal, draggable rail of service cards with filter chips and a progress bar. */
export function ServiceRail({ list }: { list: CardService[] }) {
  const { shown, chips, group } = useGroupFilter(list);
  const rail = useRef<HTMLUListElement>(null);
  const [bar, setBar] = useState({ left: 0, width: 20, atStart: true, atEnd: false });
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });

  const update = useCallback(() => {
    const el = rail.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const width = Math.max(12, (el.clientWidth / el.scrollWidth) * 100);
    setBar({
      width,
      left: max > 0 ? (el.scrollLeft / max) * (100 - width) : 0,
      atStart: el.scrollLeft < 4,
      atEnd: el.scrollLeft > max - 4,
    });
  }, []);

  useEffect(() => {
    if (rail.current) rail.current.scrollLeft = 0;
    update();
  }, [group, update]);

  useEffect(() => {
    addEventListener("resize", update);
    const move = (e: PointerEvent) => {
      const d = drag.current;
      const el = rail.current;
      if (!d.down || !el) return;
      const dx = e.clientX - d.x;
      if (Math.abs(dx) > 5) {
        d.moved = true;
        el.classList.add("drag");
      }
      el.scrollLeft = d.left - dx;
    };
    const up = () => {
      drag.current.down = false;
      rail.current?.classList.remove("drag");
    };
    addEventListener("pointermove", move);
    addEventListener("pointerup", up);
    return () => {
      removeEventListener("resize", update);
      removeEventListener("pointermove", move);
      removeEventListener("pointerup", up);
    };
  }, [update]);

  const scrollBy = (dx: number) => rail.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <>
      <div className="mt-9">{chips}</div>
      <div className="rv mt-10">
        <ul
          ref={rail}
          className="rail m-0 list-none"
          onScroll={update}
          onPointerDown={(e) => {
            if (e.pointerType !== "mouse" || !rail.current) return;
            drag.current = { down: true, x: e.clientX, left: rail.current.scrollLeft, moved: false };
          }}
          onClickCapture={(e) => {
            if (drag.current.moved) {
              e.preventDefault();
              drag.current.moved = false;
            }
          }}
        >
          {shown.map((service) => (
            <li key={service.slug}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
        <div className="rail-ctl">
          <div className="prog" aria-hidden="true">
            <i style={{ left: `${bar.left}%`, width: `${bar.width}%` }} />
          </div>
          <div className="arr">
            <button type="button" aria-label="Previous services" disabled={bar.atStart} onClick={() => scrollBy(-360)}>
              <Icon name="arrow" className="size-5 rotate-180" />
            </button>
            <button type="button" aria-label="Next services" disabled={bar.atEnd} onClick={() => scrollBy(360)}>
              <Icon name="arrow" className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/** Filterable grid version, for the services page. */
export function ServiceFilterGrid({ list }: { list: CardService[] }) {
  const { shown, chips } = useGroupFilter(list);
  return (
    <>
      {chips}
      <ul className="gg m-0 mt-9 list-none p-0">
        {shown.map((service) => (
          <li key={service.slug}>
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>
    </>
  );
}
