import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DiscoverySandbox from "./components/DiscoverySandbox";
import Services from "./components/Services";
import ProcessSection from "./components/ProcessSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ArticlesSection from "./components/ArticlesSection";
import FAQ from "./components/FAQ";
import InquiryForm from "./components/InquiryForm";
import Footer from "./components/Footer";

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Answer Engine Optimization (AEO)",
    provider: { "@id": "https://www.acumoai.com/#organization" },
    url: "https://www.acumoai.com/#ai-native",
    description:
      "Optimizes content, schema markup, and technical structure so AI crawlers (GPTBot, ClaudeBot, and others) surface the business as a cited, trusted answer in generative AI search results.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Conversational Chat & Voice AI Agents",
    provider: { "@id": "https://www.acumoai.com/#organization" },
    url: "https://www.acumoai.com/services/voice-ai-crm",
    description:
      "Custom-built, ultra-low-latency voice and text AI agents that qualify leads, answer inquiries, and book appointments in real time, 24/7 — includes appointment scheduling, CRM integration, SMS verification, and voice operations.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Full-Stack AI-Native MVP Development",
    provider: { "@id": "https://www.acumoai.com/#organization" },
    url: "https://www.acumoai.com/services/mvp-development",
    description:
      "Custom Next.js, React, FastAPI, and distributed backend architecture for AI-native products, built for scale and fault tolerance.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Websites & Booking Engine",
    provider: { "@id": "https://www.acumoai.com/#organization" },
    url: "https://www.acumoai.com/services/websites-booking",
    description:
      "Custom websites with integrated booking systems, payment gateways, and client portals built for fast load times and high conversion.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom AI & Workflow Automations",
    provider: { "@id": "https://www.acumoai.com/#organization" },
    url: "https://www.acumoai.com/services/ai-automation",
    description:
      "Production-grade AI chatbots, RAG pipelines, and custom workflow automations grounded in proprietary data to eliminate manual work.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Document Processing & Data Entry Automation",
    provider: { "@id": "https://www.acumoai.com/#organization" },
    url: "https://www.acumoai.com/services/ai-document-processing",
    description:
      "Custom AI document processing pipelines that extract structured data from invoices, purchase orders, quotes, and emails into ERP, CRM, and accounting systems.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Codebase Cleanup & Hardening for AI-Generated Apps",
    provider: { "@id": "https://www.acumoai.com/#organization" },
    url: "https://www.acumoai.com/services/codebase-cleanup",
    description:
      "Audits, refactors, and hardens AI-generated and vibe-coded apps built in Cursor, Lovable, Bolt.new, or v0 into secure, scalable production software in 1–2 weeks.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What industries does Acumo AI work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're industry-agnostic. We've built AI-native systems across healthcare, real estate, finance, legal, e-commerce, and more. If your business needs intelligent software that scales, we can engineer it — regardless of vertical.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between AEO and traditional SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional SEO optimizes for search engine result pages — rankings, backlinks, and keywords. Answer Engine Optimization (AEO) optimizes for generative AI engines like ChatGPT, Claude, Gemini, and Perplexity. Instead of competing for page-one rankings buried under ads, AEO ensures your business is cited directly as the trusted answer when prospects ask AI for recommendations.",
      },
    },
    {
      "@type": "Question",
      name: "What does the engagement process look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It starts with a scoping inquiry where we understand your goals and constraints. From there, we deliver a technical proposal outlining architecture, timeline, and deliverables. Once approved, we move into a focused 2–4 week build cycle with regular checkpoints, then launch and hand off with full documentation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects are delivered within 2–4 weeks. Complex multi-system builds or enterprise integrations may extend beyond that, but we scope everything upfront so there are no surprises.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer post-launch support packages that cover maintenance, monitoring, iterative improvements, and scaling as your product grows. You're not left on your own after delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with our existing tools and tech stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We regularly integrate with CRMs, scheduling tools, payment systems, and existing APIs. Our systems are built to plug into your current infrastructure, not replace it.",
      },
    },
    {
      "@type": "Question",
      name: "Do you white-label your work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — everything ships under your brand. We build behind the scenes so your product looks and feels entirely yours, from the interface to the deployment.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      {serviceSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Hero />
      <DiscoverySandbox />
      <Services />
      <ProcessSection />
      <CaseStudiesSection />
      <ArticlesSection />
      <FAQ />
      <InquiryForm />
      <Footer />
    </main>
  );
}
