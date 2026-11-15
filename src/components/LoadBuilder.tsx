"use client";

import { useMemo, useState } from "react";
import { defaultMessage, whatsappUrl } from "@/lib/contact";
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

/** Two-column load check: tap items on the left, see the truck fill and the ready message on the right. */
export function LoadBuilder() {
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

  const message = lines.length
    ? `${defaultMessage}\n${lines.map((line) => `- ${line}`).join("\n")}\nEstimated load: ${loadLabel(percent).toLowerCase()}.`
    : defaultMessage;

  return (
    <div className="qb rv">
      <div className="flex flex-col gap-[30px]">
        <div>
          <h3>
            <b>1</b>Tap what's going
          </h3>
          <div className="opts">
            {catalogue.map((item) => {
              const count = counts[item.id] ?? 0;
              return (
                <button key={item.id} type="button" className={`opt ${count ? "on" : ""}`} onClick={() => change(item.id, 1)} aria-label={`Add ${item.label}${count ? `, ${count} added` : ""}`}>
                  <Icon name={item.icon} className="size-5" />
                  {item.label}
                  {count > 0 && <span className="cnt">{count}</span>}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <h3>
            <b>2</b>Change your mind?
          </h3>
          {lines.length === 0 ? (
            <p className="mutD m-0 text-[15.5px]">Items you add appear here, so you can take one away.</p>
          ) : (
            <div className="opts">
              {catalogue
                .filter((item) => (counts[item.id] ?? 0) > 0)
                .map((item) => (
                  <button key={item.id} type="button" className="opt" onClick={() => change(item.id, -1)} aria-label={`Remove one ${item.label}`}>
                    <span aria-hidden="true">−</span>
                    {item.label}
                    <span className="cnt !bg-amb !text-ink">{counts[item.id]}</span>
                  </button>
                ))}
            </div>
          )}
        </div>
        <p className="mutD m-0 text-[14.5px]">Sizes are a rough guide. Your quote comes from your photo.</p>
      </div>

      <div className="qb-r">
        <p className="eyebrow mb-4">Your load</p>
        <div className="truck-box" role="img" aria-label={`Truck filled to about ${Math.min(percent, 100)} percent`}>
          <div className="load">
            <div className="fill" style={{ width: `${Math.min(percent, 100)}%` }} />
          </div>
          <div className="cab" />
          <div className="wh" style={{ left: 34 }} />
          <div className="wh" style={{ left: 140 }} />
          <div className="wh" style={{ left: 228 }} />
        </div>
        <p role="status" className="-mt-2 mb-[18px] font-extrabold text-amb">
          {loadLabel(percent)}
        </p>
        <div className="msg">{message}</div>
        <a href={whatsappUrl(message)} target="_blank" rel="noopener" className="btn btn-amb mt-[18px] w-full">
          <WhatsAppIcon />
          {lines.length ? "Send this list on WhatsApp" : "Get a price on WhatsApp"}
        </a>
      </div>
    </div>
  );
}
