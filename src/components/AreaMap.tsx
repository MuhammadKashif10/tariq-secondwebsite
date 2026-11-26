import Link from "next/link";
import { Icon } from "./Icon";

type Pin = { slug: string; name: string; x: number; y: number };

/** Illustrative map. Pins and the list are real links, with no client script. */
export function AreaMap({ pins }: { pins: Pin[] }) {
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
        {pins.map((pin) => (
          <div key={pin.slug} className="pin" style={{ left: `${pin.x}%`, top: `${pin.y}%` }}>
            <Link href={`/areas/${pin.slug}`} aria-label={pin.name} tabIndex={-1} />
            <em>{pin.name}</em>
          </div>
        ))}
        <span className="absolute bottom-4 left-[18px] text-xs text-mist">Illustrative map, not to scale</span>
      </div>
      <ul className="alist">
        {pins.map((pin) => (
          <li key={pin.slug}>
            <Link href={`/areas/${pin.slug}`} className="arow">
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
