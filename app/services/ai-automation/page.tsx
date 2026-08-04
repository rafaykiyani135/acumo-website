import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Custom AI Integrations & Business Automation | Acumo AI",
  description:
    "Bespoke LLM integrations and workflow automation that cut manual work and connect your existing tools. Free scoping call.",
  openGraph: {
    title: "Custom AI Integrations & Business Automation | Acumo AI",
    description:
      "Custom LLM integrations and automated workflows that connect a business's existing software to reduce manual, repetitive work.",
    type: "website",
    url: "https://www.acumoai.com/services/ai-automation",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom AI Integrations and Business Automation",
  provider: {
    "@type": "Organization",
    name: "Acumo AI",
    url: "https://www.acumoai.com",
  },
  areaServed: "US",
  url: "https://www.acumoai.com/services/ai-automation",
  description:
    "Acumo AI builds custom LLM integrations and automated workflows that connect a business's existing software to reduce manual, repetitive work.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kinds of processes can you automate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nearly any repeatable, rules-based process — intake and data entry, lead routing, document review, report generation, CRM cleanup, and notifications between your existing tools. Acumo AI starts with the workflows that eat the most staff hours.",
      },
    },
    {
      "@type": "Question",
      name: "Do we need special hardware or training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Acumo AI plugs automation into the tools you already use — email, CRMs, spreadsheets, calendars — so your team keeps working the way they do today, just without the busywork.",
      },
    },
    {
      "@type": "Question",
      name: "Can you connect our proprietary software or custom APIs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Acumo AI builds custom LLM integrations that connect to proprietary software and private APIs, not just off-the-shelf apps. If a system has an API, it can be automated.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between this and off-the-shelf automation tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Off-the-shelf tools only connect pre-built platforms with simple rules. Acumo AI builds custom pipelines and AI models that handle exceptions, unstructured input, and your own data. That's what makes them actually usable in production.",
      },
    },
    {
      "@type": "Question",
      name: "How do we measure whether the automation worked?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every automation ships with a baseline and a measurement: hours saved, tasks completed, or errors removed. Acumo AI defines the success metric up front and reports on it after launch, so you can see the return.",
      },
    },
  ],
};

const deliverables = [
  {
    title: "Custom LLM integrations",
    detail:
      "AI connected to your tools and your data — automation that understands your business, not just templates.",
  },
  {
    title: "Workflow automation",
    detail:
      "Repeatable processes run themselves: intake, follow-up, document review, reports, and approvals.",
  },
  {
    title: "Existing tool connections",
    detail:
      "CRMs, spreadsheets, email, SMS, and internal APIs wired together with zero stack replacement.",
  },
  {
    title: "Human-in-the-loop checks",
    detail:
      "Escalation rules that send the unusual cases to a person — automation that knows its limits.",
  },
  {
    title: "Monitoring & reliability",
    detail:
      "Logging and alerts so a failed run gets caught fast, not a week later.",
  },
  {
    title: "Measured impact",
    detail:
      "A defined success metric for every build — hours saved, tasks handled, errors removed.",
  },
];

const process = [
  {
    step: "01",
    title: "Scoping call (30 min)",
    detail:
      "We find the highest manual, repeatable tasks eating your team's time — and which hurts most.",
  },
  {
    step: "02",
    title: "Technical proposal",
    detail:
      "You get the pipeline design, the tools it connects, and a locked timeline before any work.",
  },
  {
    step: "03",
    title: "Build (1–4 weeks)",
    detail:
      "The LLM integration and workflow, developed and tested against your real inputs.",
  },
  {
    step: "04",
    title: "Launch + monitoring",
    detail:
      "Go-live with alerts and a reporting dashboard so you can see the impact from week one.",
  },
  {
    step: "05",
    title: "Support & expand",
    detail:
      "Optional maintenance and new automations as you find more busywork to hand off.",
  },
];

export default function AiAutomationPage() {
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
            Acumo AI — Custom AI & Automations
          </p>

          <h1 className="font-spartan text-[clamp(2.2rem,7vw,5.5rem)] font-black uppercase leading-[0.85] tracking-tighter text-text-primary">
            Automate the
            <span className="block text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
              busywork
            </span>
          </h1>

          <p className="mt-10 max-w-3xl text-lg font-medium leading-[1.5] tracking-tight text-text-primary/85 sm:text-xl md:text-2xl">
            Your team spends hours on work a machine could do better. Acumo AI
            builds custom LLM integrations and automated workflows that connect
            the software you already use and{" "}
            <span className="font-bold text-text-primary">
              cut repetitive, manual work
            </span>{" "}
            — so your people spend their time on judgment calls instead of copy.
          </p>

          <p className="mt-6 max-w-3xl rounded-2xl border border-white/10 bg-surface/40 p-6 font-sans text-base leading-[1.7] text-muted sm:text-[17px]">
            <span className="font-bold uppercase tracking-wider text-[#1e3a8a]">
              What Acumo AI does:
            </span>{" "}
            Acumo AI builds custom LLM integrations and automated workflows that
            connect a business&apos;s existing software to reduce manual,
            repetitive work.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#scoping"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-sans transition-transform duration-300 hover:scale-105"
            >
              <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-2 rounded-full border border-white/5 bg-surface px-7 py-3.5 text-[11px] font-bold uppercase tracking-wider text-text-primary backdrop-blur-md">
                Book a free automation scoping call{" "}
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
              The pieces that turn scattered manual work into systems that run
              themselves.
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
      <section className="relative w-full overflow-hidden border-b border-white/5 bg-bg py-20 sm:py-24 lg:py-32">
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="mb-14 sm:mb-20">
            <h2 className="font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
              How the{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                build works
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              A clear process with checkpoints — so you always know what&apos;s
              shipping and when.
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

      {/* PROOF */}
      <section className="relative w-full overflow-hidden border-b border-white/5 bg-bg py-20 sm:py-24 lg:py-32">
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="mb-14 sm:mb-20">
            <h2 className="font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
              Time{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                back
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              Automation pays off in the hours it hands back. Here&apos;s the kind
              of impact we ship.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-surface/40 p-7 sm:p-10">
              <p className="font-sans text-base leading-[1.7] text-text-primary/85 sm:text-lg">
                <span className="font-bold text-[#1e3a8a]">Ops-heavy businesses.</span>{" "}
                Lead admin, handoff, and reporting that previously took a
                person hours each week. Directional outcome: we replaced the most
                repetitive, hands-on flow end-to-end, so the measured task that
                used to consume staff time stopped bottlenecking the team.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface/40 p-7 sm:p-10">
              <p className="font-sans text-base leading-[1.7] text-text-primary/85 sm:text-lg">
                <span className="font-bold text-[#1e3a8a]">Overworked internal teams.</span>{" "}
                Teams that couldn&apos;t afford to stretch any further. Directional
                outcome: a pipeline that handles incoming requests, logs them into
                the right system, and flags the edge cases for a human — cutting
                the manual data entry that used to slow everything down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative w-full overflow-hidden border-b border-white/5 bg-bg py-20 sm:py-24 lg:py-32">
        <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="mb-14 sm:mb-20">
            <h2 className="font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
              Automation{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                questions
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              What businesses ask before handing processes to AI.
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
        id="scoping"
        className="relative w-full overflow-hidden border-b border-white/5 bg-[#0b1220] py-20 text-text-primary sm:py-24 lg:py-40"
      >
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <h2 className="font-spartan text-[clamp(2.5rem,8vw,6.5rem)] font-black leading-[0.8] tracking-tighter uppercase select-none">
                Stop doing{" "}
                <span className="block text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                  it twice
                </span>
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-[1.6] text-muted font-medium font-sans">
                Book a free 30-minute scoping call for your automation project.
                We&apos;ll find the workflow worth automating and show you the
                impact — no obligation.
              </p>
              <a
                href="https://calendly.com/teamacumo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-sans transition-transform duration-300 hover:scale-105"
              >
                <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2 rounded-full border border-white/5 bg-surface px-8 py-4 text-[11px] font-bold uppercase tracking-wider text-text-primary backdrop-blur-md">
                  Book a free automation scoping call{" "}
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
      <section className="relative w-full overflow-hidden border-b border-white/5 bg-bg py-16 sm:py-20">
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
            <span className="font-bold text-text-primary">Explore further</span>
            <Link
              href="/services/mvp-development"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Building a product that needs these automations? Start with an MVP
            </Link>
            <Link
              href="/services/websites-booking"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Put your automation behind a booking-ready website
            </Link>
            <Link
              href="/services/voice-ai-crm"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Let a voice agent do the follow-up
            </Link>
            <Link
              href="/#case-studies"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → See our case studies
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