import type { IconName } from "./Icon";
import { Icon } from "./Icon";

export type Step = { icon: IconName; title: string; text: string };

/** Every step is in the HTML. No timer, so the copy is visible without JavaScript. */
export function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="step-grid">
      {steps.map((step, index) => (
        <li key={step.title} className="step-card rv">
          <div className="step-card-top">
            <span className="no">{String(index + 1).padStart(2, "0")}</span>
            <span className="ic">
              <Icon name={step.icon} className="size-6" />
            </span>
          </div>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
