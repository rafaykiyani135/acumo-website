import type { Metadata } from "next";
import { Instrument_Sans, Space_Mono, Instrument_Serif, League_Spartan } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";
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
  metadataBase: new URL("https://www.acumoai.com"),
  title: {
    default: "Acumo AI | AI Voice Agents & Automation for Small Businesses",
    template: "%s | Acumo AI",
  },
  description:
    "Acumo AI builds custom AI voice agents, chatbots and booking websites for small businesses. Never miss a call or lead. Live in 2–4 weeks.",
  keywords: [
    "AI voice agent development",
    "AI chatbot development agency",
    "voice AI for small business",
    "AI automation services",
    "AI-native web development",
    "answer engine optimization agency",
    "AI appointment booking agent",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    siteName: "Acumo AI",
    url: "https://www.acumoai.com",
    title: "Acumo AI | AI Voice Agents & Automation for Small Businesses",
    description:
      "Acumo AI builds custom AI voice agents, chatbots and booking websites for small businesses. Never miss a call or lead. Live in 2–4 weeks.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acumo AI | AI Voice Agents & Automation for Small Businesses",
    description:
      "Acumo AI builds custom AI voice agents, chatbots and booking websites for small businesses. Never miss a call or lead. Live in 2–4 weeks.",
  },
  icons: {
    icon: "/acumo-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.acumoai.com/#organization",
    name: "Acumo AI",
    alternateName: "Acumo",
    url: "https://www.acumoai.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.acumoai.com/acumo-logo2.webp",
      width: 400,
      height: 100,
    },
    description:
      "Acumo AI is a technical engineering agency that builds AI-native web products for small and medium businesses — including custom chatbots, voice AI agents, full-stack SaaS platforms, and Answer Engine Optimization (AEO).",
    email: "hello@acumoai.com",
    sameAs: [
      "https://www.instagram.com/acumo.ai/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@acumoai.com",
      contactType: "sales",
      availableLanguage: "English",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.acumoai.com/#website",
    name: "Acumo AI",
    alternateName: ["Acumo", "acumoai.com"],
    url: "https://www.acumoai.com/",
    publisher: {
      "@id": "https://www.acumoai.com/#organization",
    },
  };

  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${spaceMono.variable} ${leagueSpartan.variable} scroll-smooth overflow-x-clip`}
    >
      <body className="antialiased bg-grid min-h-screen flex flex-col overflow-x-clip w-full max-w-[100vw]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
