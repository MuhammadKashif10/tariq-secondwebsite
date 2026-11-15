"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Photo } from "@/data/images";
import { Icon, type IconName } from "./Icon";

type Chip = { icon: IconName; label: string; color: string; style: React.CSSProperties };

/**
 * Home hero shell: a cursor-following glow and a slowly spinning photo cube
 * that tilts towards the pointer.
 */
export function HeroScene({ faces, chips, children }: { faces: Photo[]; chips: Chip[]; children: React.ReactNode }) {
  const hero = useRef<HTMLElement>(null);
  const tilt = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent) {
    const el = hero.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    tilt.current?.style.setProperty("--ry", `${(x - 0.5) * 26}deg`);
    tilt.current?.style.setProperty("--rx", `${(0.5 - y) * 18}deg`);
  }

  return (
    <section ref={hero} className="hero" onPointerMove={onMove}>
      <div className="glow" aria-hidden="true" />
      <div className="wrap hero-grid">
        {children}
        <div className="scene" aria-hidden="true">
          <div className="floor" />
          <div ref={tilt} className="tilt">
            <div className="cube">
              {faces.slice(0, 6).map((photo, index) => (
                <div key={photo.src} className={`f f${index + 1}`}>
                  <Image src={photo.src} alt="" fill sizes="290px" priority={index === 0} className="object-cover" />
                </div>
              ))}
            </div>
          </div>
          {chips.map((chip, index) => (
            <div key={chip.label} className="fchip" style={{ ...chip.style, animationDelay: `${index * -1.7}s` }}>
              <b style={{ background: chip.color }}>
                <Icon name={chip.icon} className="size-4" />
              </b>
              {chip.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
