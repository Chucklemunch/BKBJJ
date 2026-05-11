"use client";

import { useState } from "react";
import { PawPrint } from "./decorations";

const COACH_EMAIL = "cstahl@uwhealth.org";

export function JoinCta() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = "Free trial at Butter Kitten BJJ";
    const body = [
      "Hi!",
      "",
      "I'd like to claim my free trial week at Butter Kitten BJJ.",
      email ? `My email is ${email}.` : "",
      "",
      "Thanks!",
    ]
      .filter(Boolean)
      .join("\n");
    const url = `mailto:${COACH_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <section id="join" className="relative bg-ink-deep text-cream py-24 md:py-32 overflow-hidden">
      {/* big watermark word */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-10 text-center font-[family-name:var(--font-display)] uppercase select-none text-gold/[0.06] leading-none"
        style={{ fontSize: "clamp(8rem, 22vw, 18rem)" }}
      >
        TAP IN
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-3 text-gold">
          <PawPrint className="h-5 w-5" />
          <span className="font-[family-name:var(--font-script)] text-3xl">come get tapped</span>
          <PawPrint className="h-5 w-5" />
        </div>

        <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-[clamp(2.6rem,9vw,6rem)] leading-[0.95] display-shadow text-cream">
          Your first <span className="text-gold-bright">week</span><br />
          is on the <span className="text-gold-bright">house</span>.
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-lg leading-relaxed text-cream/85">
          No contracts. No initiation fee. No weird sales pitch from a guy in a
          backwards hat. Just walk in, sign the waiver, and we&rsquo;ll hand you a gi
          that smells like hope.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-4 sm:grid-cols-[1fr_auto] max-w-xl mx-auto"
        >
          <label htmlFor="email-cta" className="sr-only">Your email</label>
          <input
            id="email-cta"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full rounded-md border-2 border-gold/60 bg-ink/70 px-5 py-4 text-lg text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
          />
          <button
            type="submit"
            className="rounded-md bg-gold px-7 py-4 font-[family-name:var(--font-poster)] text-lg tracking-wider text-ink shadow-[0_6px_0_0_var(--color-gold-deep)] hover:translate-y-0.5 hover:shadow-[0_4px_0_0_var(--color-gold-deep)] active:translate-y-1 active:shadow-[0_2px_0_0_var(--color-gold-deep)] transition-all"
          >
            BOOK A TRIAL
          </button>
        </form>
      </div>
    </section>
  );
}
