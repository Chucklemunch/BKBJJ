import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#crew", label: "The Crew" },
  { href: "#schedule", label: "Schedule" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-ink/85 border-b border-gold/25">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link href="#top" className="flex items-center gap-3 group shrink-0">
          <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-gold/70 ring-offset-2 ring-offset-ink transition-transform group-hover:rotate-12">
            <Image
              src="/images/logo.jpeg"
              alt="Butter Kitten BJJ logo"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-none">
            <div className="font-[family-name:var(--font-poster)] text-[1.05rem] tracking-wider text-gold">
              BUTTER KITTEN
            </div>
            <div className="font-[family-name:var(--font-script)] text-base text-cream/80 -mt-0.5">
              brazilian jiu-jitsu
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-8 md:gap-12 lg:gap-16">
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-[0.95rem] uppercase tracking-[0.15em] text-cream/85 hover:text-gold transition-colors group whitespace-nowrap"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a
            href="#join"
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-gold px-5 py-2.5 text-sm font-[family-name:var(--font-poster)] tracking-wide text-ink shadow-[0_4px_0_0_var(--color-gold-deep)] hover:translate-y-px hover:shadow-[0_2px_0_0_var(--color-gold-deep)] transition-all"
          >
            ROLL WITH US
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
