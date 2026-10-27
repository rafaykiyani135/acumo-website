import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Codebase Cleanup & Hardening for AI-Built & Vibe-Coded Apps",
  description:
    "Built your app with Cursor, Lovable, Bolt.new, or v0? Don't rewrite from scratch. We audit, refactor, and harden AI-generated codebases into secure, scalable production software in 1–2 weeks.",
  alternates: { canonical: "/services/codebase-cleanup" },
  openGraph: {
    title: "Codebase Cleanup & Hardening for AI-Built & Vibe-Coded Apps | Acumo AI",
    description:
      "Turn your vibe-coded prototype into investor-grade, production-ready software. We fix security holes, untangle spaghetti components, and optimize databases in 1–2 weeks.",
    type: "website",
    url: "https://www.acumoai.com/services/codebase-cleanup",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Codebase Cleanup and Refactoring for AI-Generated Apps",
  provider: {
    "@type": "Organization",
    name: "Acumo AI",
    url: "https://www.acumoai.com",
  },
  areaServed: "US",
  url: "https://www.acumoai.com/services/codebase-cleanup",
  description:
    "Acumo AI hardens and refactors AI-generated and vibe-coded applications built on Cursor, Lovable, Bolt.new, v0, and Replit — fixing security flaws, deconstructing god components, establishing strict types, and optimizing databases in 1–2 week sprints.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do we need to rewrite our vibe-coded app from scratch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Almost never. Traditional dev agencies love to tell founders to scrap everything because it's easier for them to bill $40,000 on a fresh greenfield project. At Acumo AI, we preserve your working UI, product logic, and validated workflows while surgically refactoring the architecture, securing endpoints, and fixing database bottlenecks underneath.",
      },
    },
    {
      "@type": "Question",
      name: "What tools and platforms do you specialize in cleaning up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in modern full-stack web applications built with Cursor, Lovable, Bolt.new, v0, Replit, or ChatGPT. Our primary focus is Next.js, React, TypeScript, Supabase, PostgreSQL, Node.js, and Python backends.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a codebase cleanup sprint take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most cleanup engagements take between 1 and 2 weeks. Week 1 focuses on security triage, secrets scanning, database RLS policies, and critical route protection. Week 2 focuses on component deconstruction, state management refactoring, test guardrails, and CI/CD pipelines.",
      },
    },
    {
      "@type": "Question",
      name: "Will our app look or behave differently after the cleanup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visually, your app stays identical (unless you ask us to polish responsive layout glitches). Functionally, it becomes significantly faster, stops crashing under concurrent user load, and handles edge cases and errors gracefully.",
      },
    },
    {
      "@type": "Question",
      name: "Can our team or non-technical founders still use Cursor after you clean it up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — in fact, Cursor and Claude work dramatically better after a cleanup. AI coding tools hallucinate and produce bugs when fed 1,500-line god components with loose types. By modularizing the codebase, establishing strict TypeScript interfaces, and writing repository documentation, future AI prompting becomes faster and far more accurate.",
      },
    },
    {
      "@type": "Question",
      name: "How do we get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Book a free 30-minute codebase diagnosis call. You can share your repository under an NDA. We will conduct an initial walkthrough, pinpoint top architectural and security risks, and deliver a fixed-scope refactoring proposal.",
      },
    },
  ],
};

const deliverables = [
  {
    title: "Security & Secrets Lockdown",
    detail:
      "We strip leaked API keys from client bundles, audit database Row Level Security (RLS) rules in Supabase/Firebase, and secure API endpoints against unauthorized data access.",
  },
  {
    title: "God Component Deconstruction",
    detail:
      "We split 1,000+ line sprawling files into modular, reusable UI components and extract business logic, data fetching, and state management into clean custom hooks and server actions.",
  },
  {
    title: "Strict Type Safety & Zero 'any'",
    detail:
      "We replace loose casting and generic overrides with strict TypeScript definitions synced directly to your database schema, stopping silent runtime errors before they hit production.",
  },
  {
    title: "Database & Query Optimization",
    detail:
      "We diagnose slow queries, eliminate N+1 bottlenecks, add missing composite indexes, and set up connection pooling so your app stays fast when traffic spikes.",
  },
  {
    title: "Test Guardrails on Revenue Paths",
    detail:
      "We add automated unit and integration tests around your mission-critical paths — authentication, checkout, billing webhooks, and core data mutations — so future changes don't cause regressions.",
  },
  {
    title: "Clean CI/CD & Architecture Guide",
    detail:
      "We configure automated linting, type-checking, and preview deployments, paired with a repository README and architecture diagram so your team can confidently scale.",
  },
];

const process = [
  {
    step: "01",
    title: "Codebase Audit & Risk Triage (Day 1–2)",
    detail:
      "We perform an in-depth scan of your repository for exposed secrets, broken authorization, unindexed database queries, and architectural technical debt. You receive a prioritized triage report.",
  },
  {
    step: "02",
    title: "Security & Access Containment (Day 3–4)",
    detail:
      "We patch high-severity vulnerabilities immediately: locking down database RLS policies, migrating secrets to secure environment variables, and establishing authentication boundaries.",
  },
  {
    step: "03",
    title: "Architectural Refactoring (Day 5–8)",
    detail:
      "We untangle god components, eliminate duplicate code blocks, extract shared utilities, establish end-to-end type safety, and decouple UI from backend logic.",
  },
  {
    step: "04",
    title: "Performance & Test Guardrails (Day 9–10)",
    detail:
      "We run query profiling, index slow tables, add automated test suites to core workflows, and set up continuous integration gates to prevent regressions.",
  },
  {
    step: "05",
    title: "Handoff & Cursor Optimization (Day 11–12)",
    detail:
      "We walk you through every refactored module, provide documentation, and configure project rules (.cursorrules) so your future AI prompts produce clean, modular code.",
  },
];

export default function CodebaseCleanupPage() {
  return (
    <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full overflow-x-hidden border-b border-white/5 bg-bg px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-12 lg:pb-36 lg:pt-48">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-grid" />
        </div>

        <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1100px]">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            Acumo AI — Codebase Hardening &amp; Refactoring
          </p>

          <h1 className="font-spartan text-[clamp(2.5rem,8vw,6.5rem)] font-black uppercase leading-[0.85] tracking-tighter text-text-primary">
            From Vibe Code
            <span className="block text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
              to scalable software
            </span>
          </h1>

          <p className="mt-10 max-w-3xl text-lg font-medium leading-[1.5] tracking-tight text-text-primary/85 sm:text-xl md:text-2xl">
            Built an app with Cursor, Lovable, Bolt.new, or v0 that got traction, but now
            crashes, leaks secrets, or feels impossible to extend? Don&apos;t scrap your
            progress. Acumo AI audits, refactors, and hardens AI-generated codebases into
            production-grade software in{" "}
            <span className="font-bold text-text-primary">1–2 weeks</span>.
          </p>

          <p className="mt-6 max-w-3xl rounded-2xl border border-white/10 bg-surface/40 p-6 font-sans text-base leading-[1.7] text-muted sm:text-[17px]">
            <span className="font-bold uppercase tracking-wider text-[#1e3a8a]">
              What Acumo AI does:
            </span>{" "}
            We bridge the gap between rapid AI prototyping and rock-solid production engineering.
            We preserve your working UI and business logic while eliminating god components,
            securing database RLS rules, establishing strict TypeScript typing, and adding test
            guardrails — without charging you $40k for a restart.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#diagnosis"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-sans transition-transform duration-300 hover:scale-105"
            >
              <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-2 rounded-full border border-white/5 bg-surface px-7 py-3.5 text-[11px] font-bold uppercase tracking-wider text-text-primary backdrop-blur-md">
                Book a free codebase diagnosis{" "}
                <span className="text-[13px] font-normal">↗</span>
              </span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-7 py-3.5 font-sans text-[11px] font-bold uppercase tracking-wider text-muted transition-colors duration-300 hover:border-white/25 hover:text-text-primary"
            >
              See all services
            </Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="relative w-full overflow-x-hidden border-b border-white/5 bg-bg py-20 sm:py-24 lg:py-32">
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="mb-14 sm:mb-20">
            <h2 className="text-text-primary font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
              The AI Prototype{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                trap
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              Vibe coding gets you from 0 to 1 in days. But scaling from 1 to 10 requires real engineering discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.03] p-7 sm:p-9">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-red-400">
                01 / Security Risks
              </span>
              <h3 className="mt-4 font-spartan text-xl font-bold uppercase tracking-tight text-white">
                Exposed Keys &amp; Open RLS
              </h3>
              <p className="mt-3 font-sans text-[15px] leading-[1.65] text-white/70">
                AI generators frequently bundle private API keys into client code and leave Supabase/Firebase tables completely open to public reads and writes.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.03] p-7 sm:p-9">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
                02 / Architectural Debt
              </span>
              <h3 className="mt-4 font-spartan text-xl font-bold uppercase tracking-tight text-white">
                1,500-Line God Files
              </h3>
              <p className="mt-3 font-sans text-[15px] leading-[1.65] text-white/70">
                Every new prompt appends code to the same file. Soon, one minor CSS fix breaks your billing workflow, and your AI assistant gets confused by its own context window.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.03] p-7 sm:p-9">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-400">
                03 / Performance Walls
              </span>
              <h3 className="mt-4 font-spartan text-xl font-bold uppercase tracking-tight text-white">
                Unindexed Bottlenecks
              </h3>
              <p className="mt-3 font-sans text-[15px] leading-[1.65] text-white/70">
                Everything runs fine with 2 test users. But the moment 50 people use the platform simultaneously, unindexed database queries and client-side loops crash the application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="relative w-full overflow-x-hidden border-b border-white/5 bg-bg py-20 sm:py-24 lg:py-32">
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="mb-14 sm:mb-20">
            <h2 className="text-text-primary font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
              What&apos;s{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                included
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              A comprehensive hardening sprint that turns fragile scripts into maintainable, production-grade software.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 bg-bg p-7 sm:p-9"
              >
                <h3 className="font-spartan text-xl font-bold uppercase tracking-tight text-text-primary">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.65] text-muted font-medium font-sans">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative w-full overflow-x-hidden border-b border-white/5 bg-bg py-20 sm:py-24 lg:py-32">
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="mb-14 sm:mb-20">
            <h2 className="text-text-primary font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
              How the{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                sprint works
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              Structured in clear milestones so you see rapid stability improvements every 48 hours.
            </p>
          </div>

          <div className="flex flex-col">
            {process.map((item) => (
              <div
                key={item.step}
                className="grid grid-cols-1 gap-4 border-b border-white/5 py-8 last:border-b-0 sm:grid-cols-12 sm:gap-8"
              >
                <div className="sm:col-span-2">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#1e3a8a] uppercase font-bold">
                    {item.step}
                  </span>
                </div>
                <div className="sm:col-span-10">
                  <h3 className="font-spartan text-lg sm:text-2xl font-bold uppercase tracking-tight text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="max-w-2xl text-[15px] leading-[1.65] text-muted font-medium font-sans">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="relative w-full overflow-x-hidden border-b border-white/5 bg-bg py-20 sm:py-24 lg:py-32">
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="mb-14 sm:mb-20">
            <h2 className="text-text-primary font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
              Built for{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                speed &amp; safety
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              Whether you are preparing for investors or scaling to your first 1,000 paying users.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-surface/40 p-7 sm:p-10">
              <p className="font-sans text-base leading-[1.7] text-text-primary/85 sm:text-lg">
                <span className="font-bold text-[#1e3a8a]">Founders pitching investors or doing diligence.</span>{" "}
                Nothing kills a funding round faster than an investor technical due-diligence report flagging hardcoded keys, zero tests, or missing authorization. We harden your codebase into an investor-grade repository you are proud to share.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface/40 p-7 sm:p-10">
              <p className="font-sans text-base leading-[1.7] text-text-primary/85 sm:text-lg">
                <span className="font-bold text-[#1e3a8a]">Indie hackers hitting the prompt complexity limit.</span>{" "}
                When your app gets complex, AI tools like Cursor or Bolt start looping, breaking adjacent code, or failing to follow instructions. We modularize the codebase so you (and your AI assistant) can build features smoothly again.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface/40 p-7 sm:p-10">
              <p className="font-sans text-base leading-[1.7] text-text-primary/85 sm:text-lg">
                <span className="font-bold text-[#1e3a8a]">Businesses onboarding human software engineers.</span>{" "}
                If you vibe-coded a prototype and are now ready to hire full-time developers or contractors, handing them an unmaintainable monolith will cost you months of onboarding lag. We clean up the architecture so new engineers can ship on day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative w-full overflow-x-hidden border-b border-white/5 bg-bg py-20 sm:py-24 lg:py-32">
        <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="mb-14 sm:mb-20">
            <h2 className="text-text-primary font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
              Cleanup{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                questions
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              Everything founders ask before handing over an AI-generated codebase.
            </p>
          </div>

          <div className="flex flex-col">
            {faqSchema.mainEntity.map((faq) => (
              <details
                key={faq.name}
                className="group border-b border-white/5 last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 sm:py-8">
                  <h3 className="font-spartan text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-text-primary group-open:text-[#1e3a8a] transition-colors duration-300">
                    {faq.name}
                  </h3>
                  <span className="font-mono text-xl text-muted transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 sm:pb-8 text-[15px] leading-[1.7] text-muted font-medium font-sans">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="diagnosis"
        className="relative w-full overflow-x-hidden border-b border-white/5 bg-[#0b1220] py-20 text-text-primary sm:py-24 lg:py-40"
      >
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <h2 className="font-spartan text-[clamp(2.5rem,8vw,6.5rem)] font-black leading-[0.8] tracking-tighter uppercase select-none">
                Get your code{" "}
                <span className="block text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                  audited free
                </span>
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-[1.6] text-muted font-medium font-sans">
                Book a free 30-minute diagnosis call. Share your repository under NDA.
                We&apos;ll inspect top architectural and security risks and give you a fixed-timeline cleanup plan.
              </p>
              <a
                href="https://calendly.com/teamacumo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-sans transition-transform duration-300 hover:scale-105"
              >
                <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2 rounded-full border border-white/5 bg-surface px-8 py-4 text-[11px] font-bold uppercase tracking-wider text-text-primary backdrop-blur-md">
                  Book a free codebase diagnosis{" "}
                  <span className="text-[13px] font-normal">↗</span>
                </span>
              </a>
            </div>

            <div className="shrink-0">
              <div className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-3 font-bold">
                Direct Channel
              </div>
              <a
                href="mailto:teamacumo@gmail.com"
                className="font-mono text-lg font-bold tracking-tight text-text-primary hover:text-[#1e3a8a] transition-all duration-300 sm:text-xl"
              >
                teamacumo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="relative w-full overflow-x-hidden border-b border-white/5 bg-bg py-16 sm:py-20">
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
            <span className="font-bold text-text-primary">Explore further</span>
            <Link
              href="/services/mvp-development"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Need a complete 0-to-1 MVP built from scratch? Explore our Full-Stack MVP builds
            </Link>
            <Link
              href="/services/voice-ai-crm"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Integrate an AI voice agent &amp; automated CRM into your product
            </Link>
            <Link
              href="/articles"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Read our technical engineering deep-dives and automation guides
            </Link>
            <Link
              href="/#case-studies"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Explore our work &amp; case studies
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <Footer />
    </main>
  );
}
