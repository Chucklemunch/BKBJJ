import { PawPrint } from "./decorations";

const PHRASES = [
  "TAP YOUR FRIENDS",
  "CHOKE A NAP",
  "NO EGOS ALLOWED",
  "EAT SECOND BREAKFAST",
  "BE A BETTER PIECE OF SHIT",
  "ROLL HARD · LAUGH HARDER",
  "GET COMFORTABLE BEING UNCOMFORTABLE",
];

export function Marquee() {
  const row = [...PHRASES, ...PHRASES];
  return (
    <div className="relative border-y-2 border-gold bg-ink-deep py-4 overflow-hidden">
      <div className="flex w-max marquee-track gap-10 px-5 whitespace-nowrap">
        {row.map((p, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-[family-name:var(--font-poster)] text-2xl tracking-[0.22em] text-gold">
              {p}
            </span>
            <PawPrint className="h-6 w-6 text-rust shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
