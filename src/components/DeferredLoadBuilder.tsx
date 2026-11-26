"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { defaultMessage, whatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "./Icon";

const LoadBuilder = dynamic(() => import("./LoadBuilder").then((mod) => mod.LoadBuilder), { ssr: false });

const items = ["Sofa", "Mattress", "Wardrobe", "Fridge", "Desk", "Bags or boxes"];

/** Shown until the interactive checker is near the viewport, and when JavaScript is off. */
function LoadBuilderFallback() {
  return (
    <div className="qb">
      <div>
        <h3>Tell us what's going</h3>
        <p className="mutD">A photo is enough for a fixed price. These are the pieces people add most often.</p>
        <ul className="item-chips mt-4">
          {items.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="qb-r">
        <p className="eyebrow mb-4">Your load</p>
        <p className="text-soft">Sizes are a rough guide. The quote comes from your photo, and the price factors are on the pricing page.</p>
        <a href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener" className="btn btn-amb mt-[18px] w-full">
          <WhatsAppIcon />
          Get a price on WhatsApp
        </a>
        <Link href="/pricing" className="btn btn-line mt-3 w-full">
          Junk removal prices in Dubai
        </Link>
      </div>
    </div>
  );
}

/** Loads the interactive checker only once it is close to the screen. */
export function DeferredLoadBuilder() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{show ? <LoadBuilder /> : <LoadBuilderFallback />}</div>;
}
