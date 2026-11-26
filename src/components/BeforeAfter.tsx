import Image from "next/image";
import type { CSSProperties } from "react";
import type { Photo } from "@/data/images";
import { Icon } from "./Icon";
import { CompareSlider } from "./CompareSlider";

/** Before/after frame. Both photos are in the initial HTML; only the drag handle is client code. */
export function BeforeAfter({ before, after }: { before: Photo; after: Photo }) {
  return (
    <div className="ba rv" style={{ "--p": "50%" } as CSSProperties}>
      <Image src={after.src} alt={after.alt} fill sizes="(min-width: 1240px) 1176px, 100vw" className="object-cover" />
      <Image src={before.src} alt={before.alt} fill sizes="(min-width: 1240px) 1176px, 100vw" className="top object-cover" />
      <div className="hd" aria-hidden="true">
        <b>
          <Icon name="swap" className="size-6" />
        </b>
      </div>
      <CompareSlider />
      <span className="tg tl">BEFORE</span>
      <span className="tg tr">AFTER</span>
    </div>
  );
}
