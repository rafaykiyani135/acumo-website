import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "High-Converting Websites with Booking & Payments | Acumo AI",
  description:
    "Custom websites with built-in booking, payments, and client portals — built for speed and conversion. Book a free scoping call.",
  openGraph: {
    title: "High-Converting Websites with Booking & Payments | Acumo AI",
    description:
      "Custom websites with integrated booking systems, payment gateways, and client portals, built for fast load times and high conversion.",
    type: "website",
    url: "https://www.acumoai.com/services/websites-booking",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Development and Booking Engine",
  provider: {
    "@type": "Organization",
    name: "Acumo AI",
    url: "https://www.acumoai.com",
  },
  areaServed: "US",
  url: "https://www.acumoai.com/services/websites-booking",
  description:
    "Acumo AI builds custom websites with integrated booking systems, payment gateways, and client portals, designed for fast load times and high conversion.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can the website take bookings and payments from day one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Acumo AI builds booking systems, payment gateways, and client portals directly into the site, so visitors can schedule and pay without leaving for a third-party tool or a phone call.",
      },
    },
    {
      "@type": "Question",
      name: "How fast will our website load?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Acumo AI optimizes for sub-second load times using modern Next.js architecture, image optimization, and edge delivery — speed is a ranking factor and a conversion driver, not an afterthought.",
      },
    },
    {
      "@type": "Question",
      name: "Will the site rank in Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Acumo AI builds sites with search-engine-friendly structure, semantic markup, and structured data so both Google and AI answer engines can crawl and understand the site.",
      },
    },
    {
      "@type": "Question",
      name: "Who manages and updates the website after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Acumo AI provides a clear handoff with full documentation and offers optional maintenance packages. The site ships under your ownership, built to be updated by your own team or by Acumo AI.",
      },
    },
    {
      "@type": "Question",
      name: "Can you add booking and payments to an existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Acumo AI can integrate a booking engine, payment processing, and client portals into a site you already have, or rebuild it from scratch for speed and conversion.",
      },
    },
  ],
};

const deliverables = [
  {
    title: "Fast, conversion-focused design",
    detail:
      "Pages built to turn visitors into booked, paying clients — with sub-second load speeds as a baseline.",
  },
  {
    title: "Integrated booking engine",
    detail:
      "Calendar availability, appointment scheduling, and confirmations built right into the site.",
  },
  {
    title: "Secure payments",
    detail:
      "Payment gateways wired in so clients can pay deposits and invoices without leaving your site.",
  },
  {
    title: "Client portals",
    detail:
      "Logged-in areas where clients see their bookings, invoices, and documents.",
  },
  {
    title: "SEO-ready, AI-ready foundation",
    detail:
      "Semantic structure, fast rendering, and structured data so Google and AI engines can rank and cite you.",
  },
  {
    title: "CMS you can run",
    detail:
      "An easy content system plus full documentation so updates are simple after handoff.",
  },
];

const process = [
  {
    step: "01",
    title: "Scoping call (30 min)",
    detail:
      "We map your services, booking flow, and the conversion actions that make the site pay for itself.",
  },
  {
    step: "02",
    title: "Design & proposal",
    detail:
      "A sitemap, design direction, and a technical proposal for the booking and payment systems.",
  },
  {
    step: "03",
    title: "Build (2–4 weeks)",
    detail:
      "Front-end build plus booking, payments, and portals, tested on real devices.",
  },
  {
    step: "04",
    title: "Launch",
    detail:
      "Deploy, wire up analytics, and hand over with full documentation and source ownership.",
  },
  {
    step: "05",
    title: "Support & grow",
    detail:
      "Optional maintenance for content updates, new features, and ongoing SEO work.",
  },
];

export default function WebsitesBookingPage() {
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
            Acumo AI — Websites & Booking Engine
          </p>

          <h1 className="font-spartan text-[clamp(2.2rem,7vw,5.5rem)] font-black uppercase leading-[0.85] tracking-tighter text-text-primary">
            A website built to
            <span className="block text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
              book clients
            </span>
          </h1>

          <p className="mt-10 max-w-3xl text-lg font-medium leading-[1.5] tracking-tight text-text-primary/85 sm:text-xl md:text-2xl">
            A beautiful site that nothing can click is just an expensive brochure.
            Acumo AI builds custom websites with{" "}
            <span className="font-bold text-text-primary">
              booking, payments, and client portals built in
            </span>{" "}
            — so every visitor can skip the phone call and book a paying client on
            the spot.
          </p>

          <p className="mt-6 max-w-3xl rounded-2xl border border-white/10 bg-surface/40 p-6 font-sans text-base leading-[1.7] text-muted sm:text-[17px]">
            <span className="font-bold uppercase tracking-wider text-[#1e3a8a]">
              What Acumo AI does:
            </span>{" "}
            Acumo AI builds custom websites with integrated booking systems,
            payment gateways, and client portals, designed for fast load times and
            high conversion.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#scoping"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-sans transition-transform duration-300 hover:scale-105"
            >
              <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-2 rounded-full border border-white/5 bg-surface px-7 py-3.5 text-[11px] font-bold uppercase tracking-wider text-text-primary backdrop-blur-md">
                Book a free website scoping call{" "}
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
              The features that turn a website from a placeholder into a revenue
              channel.
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
              Built to{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                convert
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              The point of a site is bookings and revenue. Here&apos;s the behavior
              we build for.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-surface/40 p-7 sm:p-10">
              <p className="font-sans text-base leading-[1.7] text-text-primary/85 sm:text-lg">
                <span className="font-bold text-[#1e3a8a]">Service & appointment businesses.</span>{" "}
                A booking-ready site where customers schedule, pay, and get
                confirmations without a phone call. Directional outcome: a
                measurable jump in online bookings and fewer drop-offs from
                manual scheduling workflows.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface/40 p-7 sm:p-10">
              <p className="font-sans text-base leading-[1.7] text-text-primary/85 sm:text-lg">
                <span className="font-bold text-[#1e3a8a]">Service-based businesses & operators.</span>{" "}
                A portal that gives clients a place to rebook, pay, and see their
                history. Directional outcome: clients self-serve instead of emailing
                the team, and the team stops chasing payment and schedule by hand.
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
              Website{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                questions
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              What businesses ask before commissioning a new site.
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
                Turn traffic{" "}
                <span className="block text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                  into bookings
                </span>
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-[1.6] text-muted font-medium font-sans">
                Book a free 30-minute scoping call for your website project.
                We&apos;ll map the booking flow and show you what your site could
                convert — no obligation.
              </p>
              <a
                href="https://calendly.com/teamacumo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-sans transition-transform duration-300 hover:scale-105"
              >
                <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2 rounded-full border border-white/5 bg-surface px-8 py-4 text-[11px] font-bold uppercase tracking-wider text-text-primary backdrop-blur-md">
                  Book a free website scoping call{" "}
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
              href="/services/voice-ai-crm"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Add a voice agent so no one calls without an answer
            </Link>
            <Link
              href="/services/mvp-development"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Launching a product? Build the MVP first
            </Link>
            <Link
              href="/services/ai-automation"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Automate the workflows behind your site
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