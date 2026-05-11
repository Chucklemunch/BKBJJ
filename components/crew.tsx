import Image from "next/image";
import { ClawDivider } from "./decorations";

type Member = {
  src: string;
  alt: string;
  name: string;
  quirk: string;
  rotate: string;
  objectPosition?: string;
};

const CREW: Member[] = [
  {
    src: "/crew/charlie.jpg",
    alt: "Three Butter Kitten teammates after class",
    name: "problem children",
    quirk: "spent more time hugging than sparring",
    rotate: "-rotate-3",
    objectPosition: "center 30%",
  },
  {
    src: "/crew/dave.jpg",
    alt: "Three more crewmates squeezing into a selfie after open mat",
    name: "open mat crew",
    quirk: "we lick the mats clean",
    rotate: "rotate-2",
    objectPosition: "center 40%",
  },
  {
    src: "/crew/declan-kristin.jpg",
    alt: "Declan, Kristin, and two friends in gis after rolling",
    name: "the diversity hire",
    quirk: "the unofficial Butter Kitten welcoming committee",
    rotate: "-rotate-2",
    objectPosition: "center 30%",
  },
  {
    src: "/crew/road-trip.jpeg",
    alt: "Two crewmates on a road trip to a tournament",
    name: "on the road again",
    quirk: "driving 6 hours to lose in the first round, smiling the whole way",
    rotate: "rotate-3",
    objectPosition: "center 30%",
  },
];

export function Crew() {
  return (
    <section id="crew" className="relative bg-ink py-24 md:py-32 overflow-hidden">
      {/* paw watermark */}
      <div className="pointer-events-none absolute -left-10 top-20 h-72 w-72 opacity-[0.06]">
        <svg viewBox="0 0 32 32" className="text-gold h-full w-full" fill="currentColor">
          <ellipse cx="16" cy="22" rx="8" ry="6.2" />
          <circle cx="7" cy="13" r="3" />
          <circle cx="16" cy="8.5" r="3" />
          <circle cx="25" cy="13" r="3" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="font-[family-name:var(--font-script)] text-3xl text-gold">— some of the —</div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,7vw,5rem)] uppercase leading-none mt-1 display-shadow text-cream">
            Soft Bellies
          </h2>
          <ClawDivider className="mt-6 mx-auto max-w-md" />
          <p className="mt-6 max-w-xl mx-auto text-cream/75 text-lg">
            These are real people who get tapped, get up, and eat tacos afterwards.
            <br className="hidden md:block" />
            They&rsquo;d like to tap you next.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6">
          {CREW.map((m, i) => (
            <figure
              key={m.src}
              className={`polaroid relative ${m.rotate} hover:rotate-0 hover:-translate-y-1 transition-all duration-500`}
            >
              {/* tape */}
              <span
                className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 bg-cream/40 backdrop-blur-sm rotate-[-4deg]"
                style={{
                  boxShadow: "0 1px 6px rgba(0,0,0,0.25)",
                  background:
                    "repeating-linear-gradient(90deg, rgba(244,234,213,0.55) 0 4px, rgba(244,234,213,0.4) 4px 8px)",
                }}
                aria-hidden
              />
              <div className="relative aspect-square overflow-hidden bg-ink">
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                  style={{ objectPosition: m.objectPosition }}
                />
              </div>
              <figcaption className="mt-4 text-center text-ink">
                <div className="font-[family-name:var(--font-script)] text-3xl leading-none">
                  {m.name}
                </div>
                <div className="mt-3 text-sm italic text-ink/80 px-1">
                  &ldquo;{m.quirk}&rdquo;
                </div>
              </figcaption>
              <div className="absolute -bottom-2 -right-2 font-[family-name:var(--font-display)] text-cream/30 text-5xl select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
