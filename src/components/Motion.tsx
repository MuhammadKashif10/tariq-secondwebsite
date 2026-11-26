"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll reveals for content below the fold, the scroll progress bar and the
 * word-by-word highlight. Hero headlines are visible without this script.
 * Re-runs on every client-side navigation.
 */
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    const observe = () => document.querySelectorAll(".rv:not(.in)").forEach((el) => io.observe(el));
    observe();
    const mo = new MutationObserver(observe);
    const main = document.getElementById("main");
    if (main) mo.observe(main, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    const bar = document.getElementById("scroll-prog");
    let frame = 0;
    const tick = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - innerHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
      document.querySelectorAll<HTMLElement>(".hl").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (!rect.height) return;
        const progress = Math.min(1, Math.max(0, (innerHeight * 0.85 - rect.top) / (rect.height + innerHeight * 0.35)));
        const words = el.children;
        const lit = Math.round(progress * words.length * 1.15);
        for (let i = 0; i < words.length; i++) words[i].classList.toggle("on", i < lit);
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    tick();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return <div id="scroll-prog" className="scroll-prog" aria-hidden="true" />;
}
