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
  title: "Acumo | Technical Engineering",
  description: "Engineering infrastructure for the ambitious.",
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
    name: "Acumo",
    url: "https://www.acumoai.com",
    logo: "https://www.acumoai.com/acumo-logo2.png",
    description:
      "Acumo is a technical engineering agency that builds AI-native web products for small and medium businesses — including custom chatbots, voice AI agents, full-stack SaaS platforms, and Answer Engine Optimization (AEO).",
    email: "teamacumo@gmail.com",
    sameAs: [
      "https://www.instagram.com/acumo.ai/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "teamacumo@gmail.com",
      contactType: "sales",
      availableLanguage: "English",
    },
  };

  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Answer Engine Optimization (AEO)",
      provider: { "@type": "Organization", name: "Acumo" },
      url: "https://www.acumoai.com/#ai-native-engine",
      description:
        "Optimizes content, schema markup, and technical structure so AI crawlers (GPTBot, ClaudeBot, and others) surface the business as a cited, trusted answer in generative AI search results.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Conversational Chat & Voice AI Agents",
      provider: { "@type": "Organization", name: "Acumo" },
      url: "https://www.acumoai.com/#conversational-engine",
      description:
        "Custom-built, ultra-low-latency voice and text AI agents that qualify leads, answer inquiries, and book appointments in real time, 24/7 — includes appointment scheduling, CRM integration, SMS verification, and voice operations.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Full-Stack AI-Native Web Development",
      provider: { "@type": "Organization", name: "Acumo" },
      url: "https://www.acumoai.com/#distributed-systems",
      description:
        "Custom Next.js, React, FastAPI, and distributed backend architecture for AI-native products, built for scale and fault tolerance.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Custom AI Chatbot Development",
      provider: { "@type": "Organization", name: "Acumo" },
      url: "https://www.acumoai.com/#services",
      description:
        "Production-grade AI chatbots with RAG pipelines and fine-tuned LLMs, grounded in proprietary data to eliminate hallucinations and deliver verified, context-aware responses.",
    },
  ];

  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${spaceMono.variable} ${leagueSpartan.variable} scroll-smooth overflow-x-clip`}
    >
      <body className="antialiased bg-grid min-h-screen flex flex-col overflow-x-clip w-full max-w-[100vw]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {serviceSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
