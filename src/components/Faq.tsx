import { useId } from "react";
import type { Faq } from "@/data/services";
import { RichText } from "@/lib/rich-text";
import { Icon } from "./Icon";

/** Native accordion. Answers stay in the HTML, and the first one starts open. */
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const name = useId();

  return (
    <div className="acc">
      {faqs.map((faq, index) => (
        <details key={faq.q} className="ai" name={name} open={index === 0}>
          <summary>
            <h3>{faq.q}</h3>
            <span className="pm" aria-hidden="true">
              <Icon name="plus" className="size-5" />
            </span>
          </summary>
          <div className="bd">
            <p>
              <RichText text={faq.a} />
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
