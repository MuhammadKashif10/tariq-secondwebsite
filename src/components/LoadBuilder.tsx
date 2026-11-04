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
    <div className="rounded-2xl border-2 border-ink bg-paper p-4 text-ink shadow-[8px_8px_0_var(--color-signal)] sm:p-5">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-xl sm:text-2xl">Build your load</h2>
        <p role="status" className="text-right text-sm font-bold text-signal-deep">
          {loadLabel(percent)}
        </p>
      </div>

      <svg viewBox="0 0 320 136" className="mt-3 w-full" role="img" aria-label={`Truck filled to about ${Math.min(percent, 100)} percent`}>
        <rect x="8" y="10" width="208" height="92" rx="4" fill="var(--color-sand-2)" />
        <rect x="8" y="10" width="208" height="92" rx="4" fill="var(--color-signal)" className="truck-fill" style={{ transform: `scaleY(${fill})` }} />
        <path d="M60 10v92M112 10v92M164 10v92" stroke="var(--color-ink)" strokeOpacity=".16" strokeWidth="2" />
        <rect x="8" y="10" width="208" height="92" rx="4" fill="none" stroke="var(--color-ink)" strokeWidth="4" />
        <path d="M222 102V42h40l36 34v26z" fill="var(--color-ink)" />
        <path d="M236 52h22l22 24h-44z" fill="var(--color-sand)" />
        <rect x="4" y="102" width="306" height="8" rx="2" fill="var(--color-ink)" />
        <circle cx="62" cy="114" r="19" fill="var(--color-ink)" />
        <circle cx="62" cy="114" r="8" fill="var(--color-sand)" />
        <circle cx="256" cy="114" r="19" fill="var(--color-ink)" />
        <circle cx="256" cy="114" r="8" fill="var(--color-sand)" />
      </svg>

      <ul className="mt-3 grid grid-cols-2 gap-2">
        {catalogue.map((item) => {
          const count = counts[item.id] ?? 0;
          return (
            <li
              key={item.id}
              className={`flex items-center gap-1.5 rounded-lg border-2 p-1.5 transition-colors ${count ? "border-ink bg-sand" : "border-sand-3"}`}
            >
              <button
                type="button"
                onClick={() => change(item.id, 1)}
                aria-label={`Add ${item.label}`}
                className="flex min-h-10 min-w-0 flex-1 items-center gap-1.5 text-left text-sm leading-tight font-semibold"
              >
                <Icon name={item.icon} className="size-5 shrink-0" />
                <span>{item.label}</span>
              </button>
              {count > 0 && (
                <span className="flex shrink-0 items-center gap-1">
                  <button
                    type="button"
                    onClick={() => change(item.id, -1)}
                    aria-label={`Remove one ${item.label}`}
                    className="grid size-7 place-items-center rounded-md bg-ink font-bold text-sand"
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
      <p className="mt-2 text-center text-xs text-muted">Sizes are a rough guide. Your quote comes from your photo.</p>
    </div>
  );
}
