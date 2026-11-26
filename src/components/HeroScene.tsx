import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { Photo } from "@/data/images";
import { Icon, type IconName } from "./Icon";

type Chip = { icon: IconName; label: string; color: string; style: CSSProperties };

/**
 * Home hero shell. The photo cube spins in CSS, so the headline is server
 * rendered and visible before any client JavaScript runs.
 */
export function HeroScene({ faces, chips, children }: { faces: Photo[]; chips: Chip[]; children: ReactNode }) {
  return (
    <section className="hero">
      <div className="glow" aria-hidden="true" />
      <div className="wrap hero-grid">
        {children}
        <div className="scene" aria-hidden="true">
          <div className="floor" />
          <div className="tilt">
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
