import type { Metadata } from "next";
import { Instrument_Sans, Space_Mono, Instrument_Serif, League_Spartan } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Acumo | Technical Engineering",
  description: "Engineering infrastructure for the ambitious.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${spaceMono.variable} ${leagueSpartan.variable} scroll-smooth overflow-x-hidden`}
    >
      <body className="antialiased bg-grid min-h-screen flex flex-col overflow-x-hidden w-full max-w-[100vw]">
        {children}
      </body>
    </html>
  );
}
