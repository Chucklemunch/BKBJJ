import type { Metadata } from "next";
import { Alfa_Slab_One, Bowlby_One_SC, Caveat, Fraunces } from "next/font/google";
import "./globals.css";

const display = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const poster = Bowlby_One_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poster",
  display: "swap",
});

const body = Fraunces({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const script = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://butterkittenbjj.com"
  ),
  title: "Butter Kitten BJJ — Where you're better than a piece of shit",
  description:
    "A no-ego Brazilian Jiu-Jitsu academy for soft-bellied, big-hearted humans. Tap your friends. Eat second breakfast. Get a little bit better than yesterday.",
  openGraph: {
    title: "Butter Kitten BJJ",
    description: "Where you're better than a piece of shit.",
    images: ["/images/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${poster.variable} ${body.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
