"use client";

import { useId, useState } from "react";
import type { Faq } from "@/data/services";
import { Icon } from "./Icon";

/** Accordion from the design. The first answer starts open; answers stay in the HTML for search engines. */
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState(0);
  const id = useId();

  return (
    <div className="acc">
      {faqs.map((faq, index) => {
        const isOpen = open === index;
        return (
          <div key={faq.q} className={`ai ${isOpen ? "open" : ""}`}>
            <h3 className="m-0">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-${index}`}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                <span>{faq.q}</span>
                <span className="pm" aria-hidden="true">
                  <Icon name="plus" className="size-5" />
                </span>
              </button>
            </h3>
            <div className="bd" id={`${id}-${index}`} role="region">
              <div>
                <p>{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
