"use client";

import { useMemo, useState } from "react";
import { whatsappUrl } from "@/lib/contact";
import { Icon, WhatsAppIcon, type IconName } from "./Icon";

/** Rough share of a pickup truck each item takes up. A guide, not a price. */
const catalogue: { id: string; label: string; icon: IconName; size: number }[] = [
  { id: "sofa", label: "Sofa", icon: "sofa", size: 16 },
  { id: "mattress", label: "Mattress", icon: "mattress", size: 8 },
  { id: "wardrobe", label: "Wardrobe", icon: "wardrobe", size: 14 },
  { id: "fridge", label: "Fridge", icon: "fridge", size: 9 },
  { id: "desk", label: "Desk", icon: "office", size: 8 },
  { id: "bags", label: "5 bags or boxes", icon: "bin", size: 6 },
];

function loadLabel(percent: number) {
  if (percent === 0) return "Tap what's going";
  if (percent <= 20) return "Single-item job";
  if (percent <= 35) return "About a quarter truck";
  if (percent <= 65) return "About half a truck";
  if (percent <= 100) return "Close to a full truck";
  return "More than one truck";
}

export function LoadBuilder({ area }: { area?: string }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  const change = (id: string, delta: number) =>
    setCounts((current) => ({ ...current, [id]: Math.max(0, Math.min(9, (current[id] ?? 0) + delta)) }));

  const { percent, lines } = useMemo(() => {
    const chosen = catalogue.filter((item) => (counts[item.id] ?? 0) > 0);
    return {
      percent: chosen.reduce((sum, item) => sum + item.size * counts[item.id], 0),
      lines: chosen.map((item) => `${counts[item.id]} x ${item.label}`),
    };
  }, [counts]);

  const fill = Math.min(percent, 100) / 100;
  const where = area ? ` in ${area}` : "";
  const message = lines.length
    ? `Hi, I'd like a quote for a junk pickup${where}:\n${lines.map((line) => `- ${line}`).join("\n")}\nEstimated load: ${loadLabel(percent).toLowerCase()}.\nI'll send a photo and my location.`
    : `Hi, I'd like a junk removal quote${where}. I'll send a photo.`;

  return (
    <div className="rounded-[1.75rem] bg-white p-5 text-ink shadow-float sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold tracking-[0.12em] text-signal-deep uppercase">Instant load check</p>
          <h2 className="mt-1 text-xl sm:text-2xl">Build your load</h2>
        </div>
        <p role="status" className="rounded-full bg-sand-2 px-3 py-1.5 text-right text-xs font-bold">
          {loadLabel(percent)}
        </p>
      </div>

      <svg viewBox="0 0 320 128" className="mt-4 w-full" role="img" aria-label={`Truck filled to about ${Math.min(percent, 100)} percent`}>
        <rect x="6" y="6" width="214" height="92" rx="10" fill="var(--color-sand-3)" />
        <clipPath id="cargo">
          <rect x="6" y="6" width="214" height="92" rx="10" />
        </clipPath>
        <g clipPath="url(#cargo)">
          <rect x="6" y="6" width="214" height="92" fill="var(--color-signal)" className="truck-fill" style={{ transform: `scaleY(${fill})` }} />
        </g>
        <path d="M60 6v92M113 6v92M167 6v92" stroke="var(--color-ink)" strokeOpacity=".14" strokeWidth="2" />
        <path d="M226 98V44a6 6 0 0 1 6-6h28a8 8 0 0 1 6 2.6l32 34a8 8 0 0 1 2 5.4v18z" fill="var(--color-ink)" />
        <path d="M240 50h18a4 4 0 0 1 3 1.3l19 21c1 1.2.3 2.7-1.200 2.700H240a4 4 0 0 1-4-4V54a4 4 0 0 1 4-4Z" fill="#dbe7f3" />
        <rect x="2" y="98" width="304" height="7" rx="3.500" fill="var(--color-ink)" />
        <circle cx="64" cy="106" r="17" fill="var(--color-ink)" />
        <circle cx="64" cy="106" r="7" fill="#fff" />
        <circle cx="258" cy="106" r="17" fill="var(--color-ink)" />
        <circle cx="258" cy="106" r="7" fill="#fff" />
      </svg>

      <ul className="mt-4 grid grid-cols-2 gap-2">
        {catalogue.map((item) => {
          const count = counts[item.id] ?? 0;
          return (
            <li
              key={item.id}
              className={`flex items-center gap-1.5 rounded-2xl p-1.5 pl-3 transition-colors ${count ? "bg-signal/25 ring-1 ring-signal" : "bg-sand hover:bg-sand-2"}`}
            >
              <button
                type="button"
                onClick={() => change(item.id, 1)}
                aria-label={`Add ${item.label}`}
                className="flex min-h-10 min-w-0 flex-1 items-center gap-2 text-left text-sm leading-tight font-semibold"
              >
                <Icon name={item.icon} className="size-5 shrink-0" />
                <span>{item.label}</span>
              </button>
              {count > 0 && (
                <span className="flex shrink-0 items-center gap-1.5 pr-1">
                  <button
                    type="button"
                    onClick={() => change(item.id, -1)}
                    aria-label={`Remove one ${item.label}`}
                    className="grid size-7 place-items-center rounded-full bg-ink font-bold text-white"
                  >
                    −
                  </button>
                  <span className="w-3 text-center text-sm font-bold">{count}</span>
                </span>
              )}
            </li>
          );
        })}
      </ul>

      <a href={whatsappUrl(message)} target="_blank" rel="noopener" className="btn btn-wa mt-4 w-full">
        <WhatsAppIcon />
        {lines.length ? "Send this list on WhatsApp" : "Get a price on WhatsApp"}
      </a>
      <p className="mt-2.5 text-center text-xs text-muted">Sizes are a rough guide. Your quote comes from your photo.</p>
    </div>
  );
}
