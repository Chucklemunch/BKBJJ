import { ClawDivider } from "./decorations";

const TENETS = [
  {
    n: "I.",
    title: "Show up",
    body: "We don't care if you're new, old, stiff, or shaped like a slightly-leaking water balloon. Just put on a gi and clip your toe nails.",
  },
  {
    n: "II.",
    title: "Tap early, tap often",
    body: "Your shoulder will thank you in 30 years. Your ego will recover in 30 minutes. There are no participation trophies, but there is ice for your face.",
  },
  {
    n: "III.",
    title: "Don't be a piece of shit",
    body: "We're better than a piece of shit. If you spike a white belt, we will personally feed you to the nearest brown belt. Then we'll all get tacos together because we love you anyway. You will, however, not be invited back.",
  },
];

export function Manifesto() {
  return (
    <section id="manifesto" className="relative bg-cream text-ink py-24 md:py-32 overflow-hidden">
      {/* paper tooth texture */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(74,49,16,0.7) 1px, transparent 1.4px), radial-gradient(rgba(74,49,16,0.4) 1px, transparent 1.2px)",
          backgroundSize: "4px 4px, 11px 11px",
          backgroundPosition: "0 0, 2px 3px",
        }}
      />
      {/* corner ornaments */}
      <div className="absolute top-6 left-6 h-12 w-12 border-l-4 border-t-4 border-ink/70 hidden md:block" />
      <div className="absolute top-6 right-6 h-12 w-12 border-r-4 border-t-4 border-ink/70 hidden md:block" />
      <div className="absolute bottom-6 left-6 h-12 w-12 border-l-4 border-b-4 border-ink/70 hidden md:block" />
      <div className="absolute bottom-6 right-6 h-12 w-12 border-r-4 border-b-4 border-ink/70 hidden md:block" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="font-[family-name:var(--font-script)] text-3xl text-rust">— a humble —</div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,7vw,5rem)] uppercase leading-none mt-1">
            Manifesto
          </h2>
          <ClawDivider className="mt-6 mx-auto max-w-md" />
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center font-[family-name:var(--font-body)] text-xl md:text-2xl leading-relaxed">
          We started this gym because every other place we tried made us feel
          like we were either too old, too fat, too new, or too scared to be there.
          <span className="block mt-3 font-semibold italic">
            Butter Kitten is the antidote.
          </span>
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {TENETS.map((t) => (
            <article
              key={t.n}
              className="relative bg-paper border-2 border-ink/80 p-7 shadow-[8px_8px_0_0_var(--color-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_0_var(--color-ink)] transition-all"
            >
              <div className="font-[family-name:var(--font-display)] text-6xl text-rust leading-none">
                {t.n}
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-poster)] text-2xl uppercase tracking-wide">
                {t.title}
              </h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-ink/85">
                {t.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
