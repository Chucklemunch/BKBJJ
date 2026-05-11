"use client";

import { useEffect, useRef, useState } from "react";
import { ClawDivider } from "./decorations";

const PROMPT = "What question is most frequently asked?";
const INITIAL = 20;
const PAGE = 20;

export function Faq() {
  const [count, setCount] = useState(INITIAL);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    const root = scrollRef.current;
    if (!sentinel || !root) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setCount((c) => c + PAGE);
        }
      },
      { root, rootMargin: "200px 0px" }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <section id="faq" className="relative bg-ink text-cream py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <div className="font-[family-name:var(--font-script)] text-3xl text-gold">— the one question everyone keeps asking —</div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,7vw,5rem)] uppercase leading-none mt-1 display-shadow text-cream">
            Honest Answers
          </h2>
          <ClawDivider className="mt-6 mx-auto max-w-md" />
        </div>

        <div className="relative mt-14 border-y border-gold/25">
          {/* top fade — masks scrolled content behind a soft ink edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-ink to-transparent"
          />
          {/* bottom fade */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-ink to-transparent"
          />

          <div
            ref={scrollRef}
            className="max-h-[65vh] overflow-y-auto divide-y divide-gold/25 px-1 scroll-smooth"
          >
            {Array.from({ length: count }).map((_, i) => (
              <details
                key={i}
                className="group py-6 px-2 cursor-pointer paw-cursor"
              >
                <summary className="flex items-start gap-4 list-none">
                  <span className="font-[family-name:var(--font-display)] text-2xl text-gold w-16 shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-[family-name:var(--font-poster)] text-lg md:text-xl text-cream group-open:text-gold transition-colors">
                    {PROMPT}
                  </span>
                  <span
                    aria-hidden
                    className="font-[family-name:var(--font-display)] text-3xl text-gold transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 pl-20 pr-8 text-[1.1rem] leading-relaxed text-cream/85 font-[family-name:var(--font-body)]">
                  {PROMPT}
                </p>
              </details>
            ))}

            <div ref={sentinelRef} aria-hidden className="h-24" />
            <p
              className="pb-2 text-center font-[family-name:var(--font-script)] text-xl text-cream/40"
              aria-live="polite"
            >
              loading more frequently asked questions&hellip;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
