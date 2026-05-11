import { ClawDivider } from "./decorations";

type Slot = { time: string; label: string; tag: "eco" | "rest" };

const WEEK: { day: string; short: string; slots: Slot[] }[] = [
  {
    day: "Monday",
    short: "Mon",
    slots: [{ time: "—", label: "Stretch your neck.", tag: "rest" }],
  },
  {
    day: "Tuesday",
    short: "Tue",
    slots: [{ time: "6:02–7:46 PM", label: "Stinky Feet", tag: "eco" }],
  },
  {
    day: "Wednesday",
    short: "Wed",
    slots: [{ time: "6:02–7:46 PM", label: "Stinky Feet", tag: "eco" }],
  },
  {
    day: "Thursday",
    short: "Thu",
    slots: [{ time: "—", label: "Recover. Eat eggs.", tag: "rest" }],
  },
  {
    day: "Friday",
    short: "Fri",
    slots: [{ time: "—", label: "Tacos & contemplation.", tag: "rest" }],
  },
  {
    day: "Saturday",
    short: "Sat",
    slots: [{ time: "—", label: "Sleep in. You earned it.", tag: "rest" }],
  },
  {
    day: "Sunday",
    short: "Sun",
    slots: [{ time: "—", label: "Pet a cat.", tag: "rest" }],
  },
];

const TAG_STYLES: Record<Slot["tag"], { label: string; bg: string; fg: string }> = {
  eco: { label: "All Levels", bg: "var(--color-gold)", fg: "var(--color-ink)" },
  rest: { label: "Rest Day", bg: "transparent", fg: "var(--color-ink)" },
};

export function Schedule() {
  return (
    <section id="schedule" className="relative bg-cream text-ink py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(74,49,16,0.7) 1px, transparent 1.4px)",
          backgroundSize: "5px 5px",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <div className="font-[family-name:var(--font-script)] text-3xl text-rust">— this week on the mats —</div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,7vw,5rem)] uppercase leading-none mt-1">
              Schedule
            </h2>
          </div>
          <div className="mt-6 md:mt-0 md:text-right">
            <div className="font-[family-name:var(--font-script)] text-2xl text-ink/70">
              Free first week. Just show up.
            </div>
            <div className="text-sm uppercase tracking-[0.2em] text-ink/60 mt-1">
              Doors open 2 minutes late
            </div>
          </div>
        </div>
        <ClawDivider className="mt-8 mx-auto max-w-2xl" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {WEEK.map((d) => (
            <article
              key={d.day}
              className="bg-paper border-2 border-ink/85 p-4 flex flex-col gap-3 shadow-[5px_5px_0_0_var(--color-ink)] hover:shadow-[7px_7px_0_0_var(--color-ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all min-h-[14rem]"
            >
              <header className="flex items-baseline justify-between border-b-2 border-dashed border-ink/30 pb-2">
                <h3 className="font-[family-name:var(--font-poster)] text-lg uppercase tracking-wider">
                  {d.short}
                </h3>
                <span className="font-[family-name:var(--font-script)] text-xl text-rust">
                  {d.day}
                </span>
              </header>
              <div className="space-y-3 flex-1">
                {d.slots.map((s, k) => {
                  const tag = TAG_STYLES[s.tag];
                  return (
                    <div key={k} className="text-sm leading-tight">
                      <div className="font-[family-name:var(--font-poster)] text-base">
                        {s.time}
                      </div>
                      <div className="text-ink/90">{s.label}</div>
                      <div
                        className="mt-1 inline-block px-2 py-0.5 text-[0.65rem] uppercase tracking-widest font-bold border border-ink/70"
                        style={{
                          background: tag.bg,
                          color: tag.fg,
                          borderStyle: s.tag === "rest" ? "dashed" : "solid",
                        }}
                      >
                        {tag.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink/60">
          Schedule subject to change because life happens. Check the gram before
          you drive over in a blizzard.
        </p>
      </div>
    </section>
  );
}
