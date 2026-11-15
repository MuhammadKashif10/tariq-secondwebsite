"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Photo } from "@/data/images";
import { Icon } from "./Icon";

/** Drag-to-compare slider. Nudges itself once when it first scrolls into view. */
export function BeforeAfter({ before, after }: { before: Photo; after: Photo }) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const touched = useRef(false);

  useEffect(() => {
    const el = box.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || touched.current) return;
        io.disconnect();
        let value = 50;
        let back = false;
        const step = () => {
          if (touched.current) return;
          value += back ? 1.4 : -1.4;
          if (value <= 22) back = true;
          if (back && value >= 50) {
            setPos(50);
            return;
          }
          setPos(value);
          frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={box} className="ba rv" style={{ "--p": `${pos}%` } as React.CSSProperties} onPointerDown={() => (touched.current = true)}>
      <Image src={after.src} alt={after.alt} fill sizes="(min-width: 1240px) 1176px, 100vw" className="object-cover" />
      <Image src={before.src} alt={before.alt} fill sizes="(min-width: 1240px) 1176px, 100vw" className="top object-cover" />
      <div className="hd" aria-hidden="true">
        <b>
          <Icon name="swap" className="size-6" />
        </b>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        aria-label="Drag to compare before and after"
        onChange={(e) => {
          touched.current = true;
          setPos(Number(e.target.value));
        }}
      />
      <span className="tg tl">BEFORE</span>
      <span className="tg tr">AFTER</span>
    </div>
  );
}
