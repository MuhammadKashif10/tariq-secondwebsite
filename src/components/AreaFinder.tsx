"use client";

import Link from "next/link";
import { useState } from "react";
import { whatsappUrl } from "@/lib/contact";
import { Icon } from "./Icon";

export type AreaLink = { slug: string; name: string };

/** Area check form: matches what the visitor types against the area pages. */
export function AreaCheck({ areas }: { areas: AreaLink[] }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<{ text: string; slug?: string; name: string } | null>(null);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const value = query.trim();
    if (!value) {
      setResult({ text: "Type your area first.", name: "" });
      return;
    }
    const lower = value.toLowerCase();
    const hit = areas.find((a) => {
      const name = a.name.toLowerCase();
      return name.includes(lower) || lower.includes(name);
    });
    setResult(hit ? { text: `Yes, we cover ${hit.name}.`, slug: hit.slug, name: hit.name } : { text: "We cover the rest of Dubai as well, so just ask.", name: value });
  }

  return (
    <div>
      <form className="acheck" onSubmit={submit}>
        <div className="in">
          <Icon name="search" className="size-5 shrink-0 text-mist" />
          <label htmlFor="area-check" className="sr-only">
            Your area
          </label>
          <input id="area-check" type="text" placeholder="Type your area" autoComplete="off" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <button className="btn btn-amb" type="submit">
          Check my area
        </button>
      </form>
      <p aria-live="polite" className="mutD mt-3.5 max-w-[560px] text-[15.5px]">
        {result && (
          <>
            <strong className="text-white">{result.text}</strong>{" "}
            {result.slug && (
              <>
                <Link href={`/areas/${result.slug}`} className="font-extrabold text-white underline">
                  See {result.name} tips
                </Link>{" "}
                or{" "}
              </>
            )}
            {result.name && (
              <a
                href={whatsappUrl(`Hi, I need junk removal service in ${result.name}, Dubai.`)}
                target="_blank"
                rel="noopener"
                className="font-extrabold text-white underline"
              >
                send a photo on WhatsApp
              </a>
            )}
          </>
        )}
      </p>
    </div>
  );
}

/** Illustrative map with pins, linked to a list of the same areas. Hovering either highlights both. */
export function AreaMap({ pins }: { pins: (AreaLink & { x: number; y: number })[] }) {
  const [active, setActive] = useState(-1);

  return (
    <div className="map-grid rv">
      <div className="map">
        <svg viewBox="0 0 600 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="map-sea" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#103A6B" />
              <stop offset="1" stopColor="#0A1D38" />
            </linearGradient>
            <linearGradient id="map-land" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#1A3A60" />
              <stop offset="1" stopColor="#112844" />
            </linearGradient>
          </defs>
          <rect width="600" height="500" fill="url(#map-sea)" />
          <path d="M0 436 Q120 380 190 340 T330 232 T470 130 T600 60 L600 500 L0 500Z" fill="url(#map-land)" />
          <path d="M0 436 Q120 380 190 340 T330 232 T470 130 T600 60" fill="none" stroke="#5AA9FF" strokeOpacity=".55" strokeWidth="2" />
          <g stroke="#fff" strokeOpacity=".07" strokeWidth="1.5">
            {[260, 330, 400, 470, 540, 610, 680, 750, 820, 890].map((x) => (
              <line key={x} x1={x} y1="0" x2={x - 260} y2="500" />
            ))}
          </g>
          <g stroke="#fff" strokeOpacity=".05">
            <path d="M0 470 L600 250" />
            <path d="M200 500 L600 360" />
          </g>
          <g stroke="#FFB93B" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M96 372 L68 306" />
            <path d="M88 345 L62 339M88 345 L114 339M84 335 L56 327M84 335 L112 325M80 325 L54 315M80 325 L106 313M76 315 L52 303M76 315 L100 301M72 305 L52 291M72 305 L92 289" />
            <path d="M44 322 Q82 268 124 320" />
          </g>
          <g fill="none" stroke="#fff" strokeOpacity=".18" strokeWidth="1.5" strokeDasharray="4 8">
            <path d="M30 80 Q150 120 260 70" />
            <path d="M60 180 Q170 210 300 140" />
          </g>
        </svg>
        {pins.map((pin, index) => (
          <div key={pin.slug} className={`pin ${active === index ? "on" : ""}`} style={{ left: `${pin.x}%`, top: `${pin.y}%` }}>
            <Link
              href={`/areas/${pin.slug}`}
              aria-label={pin.name}
              tabIndex={-1}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(-1)}
            />
            <em>{pin.name}</em>
          </div>
        ))}
        <span className="absolute bottom-4 left-[18px] text-xs text-mist">Illustrative map, not to scale</span>
      </div>
      <ul className="alist">
        {pins.map((pin, index) => (
          <li key={pin.slug}>
            <Link
              href={`/areas/${pin.slug}`}
              className={`arow ${active === index ? "on" : ""}`}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(-1)}
              onFocus={() => setActive(index)}
              onBlur={() => setActive(-1)}
            >
              <Icon name="pin" className="size-5 shrink-0" />
              {pin.name}
              <Icon name="arrow" className="end size-5" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
