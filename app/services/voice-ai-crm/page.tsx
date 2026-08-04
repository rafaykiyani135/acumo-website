import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "AI Voice Agents & CRM Integration | Acumo AI",
  description:
    "Custom AI voice agents that answer every call, qualify leads, and book appointments straight into your CRM. Book a free 30-minute scoping call.",
  openGraph: {
    title: "AI Voice Agents & CRM Integration | Acumo AI",
    description:
      "Custom AI voice agents that answer calls, qualify leads, and book appointments automatically into your CRM, 24/7.",
    type: "website",
    url: "https://www.acumoai.com/services/voice-ai-crm",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Voice Agent and CRM Integration",
  provider: {
    "@type": "Organization",
    name: "Acumo AI",
    url: "https://www.acumoai.com",
  },
  areaServed: "US",
  url: "https://www.acumoai.com/services/voice-ai-crm",
  description:
    "Custom AI voice agents that answer calls, qualify leads, and book appointments into CRMs like HubSpot, GoHighLevel, and Salesforce, for businesses that can't afford to miss inbound calls.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does the voice agent sound robotic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — Acumo AI uses low-latency, natural-sounding voice models tuned per client, not off-the-shelf text-to-speech.",
      },
    },
    {
      "@type": "Question",
      name: "Which CRMs and calendars do you support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HubSpot, GoHighLevel, and Salesforce are natively supported; other CRMs can be integrated via API on request.",
      },
    },
    {
      "@type": "Question",
      name: "Can it handle both inbound and outbound calls?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the same system can answer inbound calls and run outbound follow-up or qualification sequences.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if the AI can't handle a call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calls can be configured to escalate to a live team member or take a message, based on your preferred fallback rules.",
      },
    },
    {
      "@type": "Question",
      name: "How long does setup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most voice AI + CRM integrations are live within 2–4 weeks from the scoping call.",
      },
    },
  ],
};

const deliverables = [
  {
    title: "Inbound call handling",
    detail:
      "24/7 answering with no hold queue — every call picked up on the first ring.",
  },
  {
    title: "Outbound sequencing",
    detail:
      "Automated follow-up and qualification sequences for both warm and cold leads.",
  },
  {
    title: "Real-time lead scoring",
    detail:
      "Custom qualification logic that scores callers as they speak and routes them correctly.",
  },
  {
    title: "CRM & calendar sync",
    detail:
      "Native integration with HubSpot, GoHighLevel, and Salesforce, plus automatic appointment booking.",
  },
  {
    title: "SMS verification",
    detail:
      "Confirmation and reminder flows that verify appointments and cut no-shows.",
  },
  {
    title: "Human-feeling voice",
    detail:
      "Ultra-low-latency, sub-second response so calls feel natural, not robotic.",
  },
];

const process = [
  {
    step: "01",
    title: "Scoping call (30 min)",
    detail:
      "We map your call flow, CRM, and calendar setup — how calls arrive today and where they slip.",
  },
  {
    step: "02",
    title: "Technical proposal",
    detail:
      "You get the architecture, integrations, and a locked timeline before any build begins.",
  },
  {
    step: "03",
    title: "Build (2–4 weeks)",
    detail:
      "The voice agent plus CRM and calendar integration, built and tested against your real call flows.",
  },
  {
    step: "04",
    title: "Launch + monitoring",
    detail:
      "Go-live with live call review and tuning in week one to catch every edge case.",
  },
  {
    step: "05",
    title: "Ongoing support",
    detail:
      "Optional maintenance and iteration package to keep the agent improving.",
  },
];

export default function VoiceAiCrmPage() {
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
            Acumo AI — Voice AI & CRM Systems
          </p>

          <h1 className="font-spartan text-[clamp(2.2rem,7vw,5.5rem)] font-black uppercase leading-[0.85] tracking-tighter text-text-primary">
            Never Miss a
            <span className="block text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
              Booking
            </span>
          </h1>

          <p className="mt-10 max-w-3xl text-lg font-medium leading-[1.5] tracking-tight text-text-primary/85 sm:text-xl md:text-2xl">
            Every unanswered call is a booking that goes to a competitor. Acumo AI
            builds custom voice agents that answer inbound calls, make outbound
            follow-ups, qualify prospects, and book appointments directly into your
            CRM —{" "}
            <span className="font-bold text-text-primary">24 hours a day</span>,
            with no hold music and no missed leads.
          </p>

          <p className="mt-6 max-w-3xl rounded-2xl border border-white/10 bg-surface/40 p-6 font-sans text-base leading-[1.7] text-muted sm:text-[17px]">
            <span className="font-bold uppercase tracking-wider text-[#1e3a8a]">
              What Acumo AI does:
            </span>{" "}
            Acumo AI designs and integrates custom AI voice agents that answer
            calls, qualify leads, and book appointments automatically into CRMs
            like HubSpot, GoHighLevel, and Salesforce, for businesses that
            can&apos;t afford to miss inbound calls.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#scoping"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-sans transition-transform duration-300 hover:scale-105"
            >
              <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-2 rounded-full border border-white/5 bg-surface px-7 py-3.5 text-[11px] font-bold uppercase tracking-wider text-text-primary backdrop-blur-md">
                Book a free voice AI scoping call{" "}
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
              Concrete deliverables — the CRMs, channels, and specifics that make a
              voice agent a real operator, not a novelty.
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
            <h2 className="text-display font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
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
            <h2 className="text-display font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
              24/7,{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                answered
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              Voice agents pay off in the calls they stop losing. Here&apos;s the
              kind of operator behavior we ship.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-surface/40 p-7 sm:p-10">
              <p className="font-sans text-base leading-[1.7] text-text-primary/85 sm:text-lg">
                <span className="font-bold text-[#1e3a8a]">Service & appointment businesses.</span>{" "}
                A voice receptionist that answers after-hours inbound calls, books
                clients straight into the calendar, and sends confirmations.
                Directional outcome: noticeably fewer missed calls within the
                first month and a steady drip of bookings that used to be picked up
                by competitors.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface/40 p-7 sm:p-10">
              <p className="font-sans text-base leading-[1.7] text-text-primary/85 sm:text-lg">
                <span className="font-bold text-[#1e3a8a]">Sales teams & agencies.</span>{" "}
                Outbound qualification calls run 24/7, with every conversation
                logged and scored straight into the CRM for the human team to pick
                up. Directional outcome: a consistent stream of qualified leads
                entered automatically, with clear escalation for the hot ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative w-full overflow-hidden border-b border-white/5 bg-bg py-20 sm:py-24 lg:py-32">
        <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="mb-14 sm:mb-20">
            <h2 className="text-display font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
              Voice AI{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                questions
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              What businesses ask before wiring a voice agent into their phones.
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
                Stop missing{" "}
                <span className="block text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                  the bookings
                </span>
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-[1.6] text-muted font-medium font-sans">
                Book a free 30-minute scoping call for your voice AI project.
                We&apos;ll map your call flow and CRM setup and show you exactly
                what the agent will handle — no obligation.
              </p>
              <a
                href="https://calendly.com/teamacumo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-sans transition-transform duration-300 hover:scale-105"
              >
                <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2 rounded-full border border-white/5 bg-surface px-8 py-4 text-[11px] font-bold uppercase tracking-wider text-text-primary backdrop-blur-md">
                  Book a free voice AI scoping call{" "}
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
              href="/services/websites-booking"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Pair your voice agent with a booking-ready website
            </Link>
            <Link
              href="/services/mvp-development"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Building a product too? Start with an MVP
            </Link>
            <Link
              href="/services/ai-automation"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Automate the rest with custom AI workflows
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