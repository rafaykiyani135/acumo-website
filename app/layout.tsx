import type { Metadata } from "next";
import { Instrument_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
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
      className={`${instrumentSans.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="antialiased bg-grid min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
