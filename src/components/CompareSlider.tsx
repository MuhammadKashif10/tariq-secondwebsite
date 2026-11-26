"use client";

/** Drag control for the before/after frame. The photos themselves are server rendered. */
export function CompareSlider() {
  return (
    <input
      type="range"
      min={0}
      max={100}
      defaultValue={50}
      aria-label="Drag to compare before and after"
      onInput={(event) => {
        event.currentTarget.parentElement?.style.setProperty("--p", `${event.currentTarget.value}%`);
      }}
    />
  );
}
