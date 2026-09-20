"use client";

import { useEffect, useRef, useState } from "react";
import { approach } from "@/data/approach";
import { cn } from "@/lib/utils";

function CountLabel({ value, active }: { value: string; active: boolean }) {
  const [display, setDisplay] = useState("00");

  useEffect(() => {
    if (!active) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const target = Number(value);
    const start = performance.now();
    const duration = 700;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setDisplay(String(Math.round(progress * target)).padStart(2, "0"));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return <span>{display}</span>;
}

export function Approach() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="approach-heading"
      className="bg-beige/70"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="eyebrow">How we work</p>
        <h2
          id="approach-heading"
          className="font-serif section-title mt-4 max-w-xl text-deep-teal"
        >
          My Approach
        </h2>
        <ol className="relative mt-12 grid gap-8 lg:grid-cols-4">
          <span
            aria-hidden="true"
            className="absolute left-[1.15rem] top-4 h-[calc(100%-2rem)] w-px bg-sage-dark/20 lg:left-0 lg:top-[1.35rem] lg:h-px lg:w-full"
          />
          {approach.map((item, index) => (
            <li
              key={item.number}
              className={cn(
                "relative flex gap-5 lg:block lg:pt-4",
                "reveal",
                visible && "is-visible",
              )}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <p className="font-serif relative z-[1] text-3xl text-sage-dark">
                <CountLabel value={item.number} active={visible} />
              </p>
              <div>
                <h3 className="font-serif text-2xl text-deep-teal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
