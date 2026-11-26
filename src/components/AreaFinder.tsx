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

