"use client";

import { useEffect, useState } from "react";
import { Icon, type IconName } from "./Icon";

export type Step = { icon: IconName; title: string; text: string };

const DURATION = 6000;

/** Tabbed steps that advance on a timer, pausing while hovered. */
export function Steps({ steps }: { steps: Step[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => setCurrent((c) => (c + 1) % steps.length), DURATION);
    return () => clearTimeout(timer);
  }, [current, paused, steps.length]);

  const step = steps[current];

  return (
    <div
      className={`steps rv ${paused ? "paused" : ""}`}
      style={{ "--dur": `${DURATION / 1000}s` } as React.CSSProperties}
    >
      <div className="step-list" role="tablist" aria-label="Steps">
        {steps.map((item, index) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            id={`step-tab-${index}`}
            aria-selected={index === current}
            aria-controls="step-panel"
            className={`step-b ${index === current ? "on" : ""}`}
            onClick={() => setCurrent(index)}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <span className="no">{String(index + 1).padStart(2, "0")}</span>
            <span className="tt">{item.title}</span>
            <span className="ic">
              <Icon name={item.icon} className="size-6" />
            </span>
            {/* Keyed so the progress bar restarts on every change. */}
            <span key={`${current}-${index}`} className="bar" />
          </button>
        ))}
      </div>
      <div className="step-panel" id="step-panel" role="tabpanel" aria-labelledby={`step-tab-${current}`} aria-live="polite">
        <div className="big" aria-hidden="true">
          {String(current + 1).padStart(2, "0")}
        </div>
        <div key={current} className="swap mt-auto">
          <div className="sp-ic">
            <Icon name={step.icon} className="size-10" />
          </div>
          <p className="eyebrow text-amb">Step {current + 1}</p>
          <h3 className="h-md mt-3">{step.title}</h3>
          <p className="lead text-soft">{step.text}</p>
        </div>
      </div>
    </div>
  );
}
