"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Bubbles, Sunburst } from "./decorations";

const ALTERNATIVES = [
  "a piece of shit",
  "a damp sock",
  "yesterday's regrets",
  "a soggy taco",
  "the version of you who didn't show up",
  "a parking ticket",
  "a wet bag of cats",
  "a gas station burrito",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    let cancelled = false;
    const run = () => {
      const hold = setTimeout(() => {
        if (cancelled) return;
        setPhase("out");
        const swap = setTimeout(() => {
          if (cancelled) return;
          setIdx((i) => (i + 1) % ALTERNATIVES.length);
          setPhase("in");
          run();
        }, 450);
        return () => clearTimeout(swap);
      }, 2200);
      return () => clearTimeout(hold);
    };
    const cleanup = run();
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden grain pt-10 pb-24 md:pt-16 md:pb-32">
      {/* sunburst behind logo */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center md:justify-end md:pr-12">
        <Sunburst size={760} />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_var(--color-ink)_75%)]" />
      <Bubbles />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 md:grid-cols-[1.15fr_1fr] md:gap-6">
        <div className="relative z-10 reveal-up">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-ink/60 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.3em] text-gold">
            <span className="block h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Est. recently · No-ego dojo
          </div>

          <h1 className="font-[family-name:var(--font-display)] uppercase leading-[0.92] text-cream">
            <span className="block text-[clamp(2.2rem,7vw,5.2rem)] display-shadow text-gold-bright">
              Butter
            </span>
            <span className="block text-[clamp(2.2rem,7vw,5.2rem)] display-shadow text-gold-bright -mt-2">
              Kitten <span className="text-cream">BJJ</span>
            </span>
          </h1>

          <p className="mt-7 font-[family-name:var(--font-body)] text-[clamp(1.15rem,2vw,1.55rem)] leading-snug text-cream/95">
            Where you&rsquo;re better than{" "}
            <span className="relative inline-block align-baseline">
              <span
                className={`inline-block transition-all duration-450 ${
                  phase === "in"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
                style={{
                  background:
                    "linear-gradient(180deg, transparent 58%, var(--color-rust) 58%, var(--color-rust) 72%, transparent 72%)",
                  fontStyle: "italic",
                  fontWeight: 600,
                }}
                aria-live="polite"
              >
                {ALTERNATIVES[idx]}
              </span>
            </span>
            <span aria-hidden="true" className="text-gold">.</span>
          </p>

          <p
            className="mt-4 max-w-xl font-[family-name:var(--font-script)] text-2xl leading-tight text-cream"
            style={{ textShadow: "0 1px 0 var(--color-ink-deep), 0 0 10px var(--color-ink-deep)" }}
          >
            Brazilian Jiu-Jitsu for soft-bellied, big-hearted humans who&rsquo;d rather
            tap their friends than yell at strangers.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#join"
              className="group relative inline-flex items-center gap-3 rounded-md bg-gold px-6 py-3.5 font-[family-name:var(--font-poster)] text-lg tracking-wider text-ink shadow-[0_6px_0_0_var(--color-gold-deep)] hover:translate-y-0.5 hover:shadow-[0_4px_0_0_var(--color-gold-deep)] active:translate-y-1 active:shadow-[0_2px_0_0_var(--color-gold-deep)] transition-all"
            >
              CLAIM YOUR FREE WEEK
              <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 rounded-md border-2 border-cream/80 px-5 py-3 font-[family-name:var(--font-poster)] text-base tracking-wider text-cream hover:bg-cream hover:text-ink transition-colors"
            >
              See the schedule
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-cream/70">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-7 w-7 rounded-full border-2 border-ink"
                  style={{
                    background: `hsl(${30 + i * 12}, ${60 - i * 8}%, ${45 + i * 5}%)`,
                  }}
                />
              ))}
            </div>
            <p className="text-sm leading-tight">
              <span className="text-gold-bright font-semibold">Joined by 47 mostly-functional adults</span>
              <br />
              who have all been choked unconscious at least once.
            </p>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-md md:max-w-none">
          <div className="relative aspect-square wiggle">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-gold/30 via-gold/10 to-transparent blur-2xl" />
            <Image
              src="/images/logo.jpeg"
              alt="A chubby cat in a BJJ gi, the Butter Kitten BJJ crest"
              fill
              sizes="(min-width: 768px) 460px, 90vw"
              className="object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.6)]"
              priority
            />
          </div>
          <div className="stamp absolute -bottom-2 -right-2 hidden md:block">
            <div
              className="rounded-full border-4 border-rust px-4 py-3 text-center font-[family-name:var(--font-poster)] text-[0.8rem] leading-tight text-rust"
              style={{ background: "rgba(254, 246, 224, 0.92)" }}
            >
              CERTIFIED<br />
              SOFT BELLY<br />
              APPROVED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
