import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Manifesto } from "@/components/manifesto";
import { Crew } from "@/components/crew";
import { Schedule } from "@/components/schedule";
import { Faq } from "@/components/faq";
import { JoinCta } from "@/components/join-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Manifesto />
        <Crew />
        <Schedule />
        <JoinCta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
