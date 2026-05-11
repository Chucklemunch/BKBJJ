import Image from "next/image";
import { PawPrint } from "./decorations";

export function Footer() {
  return (
    <footer className="relative bg-ink border-t border-gold/30 text-cream">
      <div className="belt-tape h-3 w-full" />
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-gold/70">
              <Image
                src="/images/logo.jpeg"
                alt="Butter Kitten BJJ"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-[family-name:var(--font-poster)] tracking-wider text-xl text-gold">
                BUTTER KITTEN BJJ
              </div>
              <div className="font-[family-name:var(--font-script)] text-lg text-cream/80 -mt-1">
                where you&rsquo;re better than a piece of shit
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-cream/65 leading-relaxed text-sm">
            A small, weird, friendly Brazilian Jiu-Jitsu academy.
            We love beginners, weirdos, and anyone who&rsquo;s ever cried about a triangle choke.
          </p>
        </div>

        <div>
          <h4 className="font-[family-name:var(--font-poster)] text-sm uppercase tracking-[0.25em] text-gold">
            Visit
          </h4>
          <address className="mt-3 not-italic text-cream/85 text-sm leading-relaxed">
            711 Rethke Ave<br />
            Suite 3<br />
            Madison, WI 53714
          </address>
        </div>

        <div>
          <h4 className="font-[family-name:var(--font-poster)] text-sm uppercase tracking-[0.25em] text-gold">
            Talk
          </h4>
          <ul className="mt-3 space-y-1.5 text-cream/85 text-sm">
            <li><a href="tel:+16084673280" className="hover:text-gold">(608) 467-3280</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-[family-name:var(--font-poster)] text-sm uppercase tracking-[0.25em] text-gold">
            Quick
          </h4>
          <ul className="mt-3 space-y-1.5 text-cream/85 text-sm">
            <li><a href="#manifesto" className="hover:text-gold">Manifesto</a></li>
            <li><a href="#schedule" className="hover:text-gold">Schedule</a></li>
            <li><a href="#crew" className="hover:text-gold">The crew</a></li>
            <li><a href="#join" className="hover:text-gold">Free trial</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/55 uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <PawPrint className="h-4 w-4 text-gold" />
            <span>© {new Date().getFullYear()} Butter Kitten BJJ. All rolls reserved.</span>
          </div>
          <div>built with two left feet & a lot of love</div>
        </div>
      </div>
    </footer>
  );
}
