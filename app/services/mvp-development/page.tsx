import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Full-Stack MVP Development for Startups | Acumo AI",
  description:
    "From idea to launch-ready MVP in 2–8 weeks. Production-grade full-stack builds with scalable backends and modern tech stacks. Book a free 30-minute scoping call.",
  openGraph: {
    title: "Full-Stack MVP Development for Startups | Acumo AI",
    description:
      "Production-ready 0-to-1 MVP builds for startups and enterprise teams. From idea to launch in 2–8 weeks. Book a free scoping call.",
    type: "website",
    url: "https://www.acumoai.com/services/mvp-development",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Full-Stack MVP Development",
  provider: {
    "@type": "Organization",
    name: "Acumo AI",
    url: "https://www.acumoai.com",
  },
  areaServed: "US",
  url: "https://www.acumoai.com/services/mvp-development",
  description:
    "Acumo AI develops production-ready full-stack MVPs for startups and businesses, building scalable backends, modern front-ends, and custom architecture — from idea to launch typically in 2-8 weeks — using the tech stack best suited to each project.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between an MVP and a prototype?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A prototype validates an idea on paper or in a mockup. An MVP is a working, production-ready product that real users can sign up for, pay for, and use daily. Acumo AI builds full-stack MVPs — live, deployed, and tested against real traffic — not click-through prototypes.",
      },
    },
    {
      "@type": "Question",
      name: "What tech stack does Acumo AI use for MVP builds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Acumo AI uses the stack best suited to each project — typically Next.js, React, and TypeScript for the frontend, and Python or Node.js for the backend, with whatever additional tools the client already uses or prefers. If a client has an existing stack, Acumo AI builds within it.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you ship a full-stack MVP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most MVP builds are delivered in 2–8 weeks, scoped by feature complexity, integrations, and data requirements. The timeline is locked during the scoping call and technical proposal, before any build work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Do we own the code and get full source access?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every MVP ships with full source code, documentation, and deployment setup under the client's ownership. Nothing is locked in, and the product is built to be handed over or extended by the client's own team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you scope down features to launch faster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Acumo AI helps clients identify the smallest set of features that proves the core value — so the first launch happens quickly, and subsequent iterations are guided by real user feedback rather than assumptions.",
      },
    },
    {
      "@type": "Question",
      name: "What does Acumo AI need from us to start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only a clear idea of the problem, the target users, and any existing tools or accounts. During the free 30-minute scoping call, Acumo AI maps the scope, proposes the architecture, and defines what's included in the 2–8 week build.",
      },
    },
  ],
};

const deliverables = [
  {
    title: "Frontend, built for speed",
    detail:
      "Fast, responsive interfaces with Next.js, React, and TypeScript — designed for real users, not screenshots.",
  },
  {
    title: "Scalable backend & APIs",
    detail:
      "Production-ready services with Python or Node.js, or whatever stack your team already runs.",
  },
  {
    title: "Database, auth & security",
    detail:
      "Relational or NoSQL data modeling, authentication, roles, and permission controls from day one.",
  },
  {
    title: "Payments & integrations",
    detail:
      "Stripe, CRMs, email, SMS, and existing APIs wired in — so your MVP is a product, not a demo.",
  },
  {
    title: "Admin panels & portals",
    detail:
      "Internal tooling, dashboards, and client-facing views your team can actually operate.",
  },
  {
    title: "Deploy, monitor & hand off",
    detail:
      "CI/CD, hosting, monitoring, full documentation, and source ownership delivered at launch.",
  },
];

const process = [
  {
    step: "01",
    title: "Scoping call (30 min)",
    detail:
      "We map your users, the core problem, and the one metric that decides whether the MVP worked.",
  },
  {
    step: "02",
    title: "Technical proposal",
    detail:
      "You get an architecture plan, recommended stack, deliverables, and a locked timeline — free.",
  },
  {
    step: "03",
    title: "Build sprints (2–8 weeks)",
    detail:
      "Working, deployable builds at every checkpoint. You see progress, not just promises.",
  },
  {
    step: "04",
    title: "Launch",
    detail:
      "We deploy, wire up monitoring, and hand over the product with full documentation.",
  },
  {
    step: "05",
    title: "Support & iterate",
    detail:
      "Optional post-launch packages for maintenance and feature iteration as real users give feedback.",
  },
];

export default function MvpDevelopmentPage() {
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
            Acumo AI — Full-Stack MVP Development
          </p>

          <h1 className="font-spartan text-[clamp(2.5rem,8vw,6.5rem)] font-black uppercase leading-[0.85] tracking-tighter text-text-primary">
            Launch Your MVP
            <span className="block text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
              in weeks, not months
            </span>
          </h1>

          <p className="mt-10 max-w-3xl text-lg font-medium leading-[1.5] tracking-tight text-text-primary/85 sm:text-xl md:text-2xl">
            Every day an idea stays unbuilt is a day a competitor ships it. Acumo AI
            builds production-ready full-stack MVPs that go from concept to live
            product in{" "}
            <span className="font-bold text-text-primary">2–8 weeks</span> — so you
            can test your idea against real users, real revenue, and real feedback.
          </p>

          <p className="mt-6 max-w-3xl rounded-2xl border border-white/10 bg-surface/40 p-6 font-sans text-base leading-[1.7] text-muted sm:text-[17px]">
            <span className="font-bold uppercase tracking-wider text-[#1e3a8a]">
              What Acumo AI does:
            </span>{" "}
            Acumo AI develops production-ready full-stack MVPs for startups and
            businesses, building scalable backends, modern front-ends, and custom
            architecture — from idea to launch typically in 2–8 weeks — using the
            tech stack best suited to each project.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#scoping"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-sans transition-transform duration-300 hover:scale-105"
            >
              <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-2 rounded-full border border-white/5 bg-surface px-7 py-3.5 text-[11px] font-bold uppercase tracking-wider text-text-primary backdrop-blur-md">
                Book a free MVP scoping call{" "}
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
              Not a deck. A deployed, working product with the things that make it
              launch-ready — not throwaway code.
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
      <section className="relative w-full overflow-x-hidden border-b border-white/5 bg-bg py-20 sm:py-24 lg:py-32">
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="mb-14 sm:mb-20">
            <h2 className="text-text-primary font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
              Built for{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                launch
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              MVPs aren&apos;t about the tech — they&apos;re about proving a bet
              fast. Here&apos;s the kind of work we&apos;ve shipped.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-surface/40 p-7 sm:p-10">
              <p className="font-sans text-base leading-[1.7] text-text-primary/85 sm:text-lg">
                <span className="font-bold text-[#1e3a8a]">Founders & funded startups.</span>{" "}
                We take a concept and a napkin architecture and turn them into a
                live, deployable product — often while the founder is still
                pitching investors. Directional outcome: multiple teams shipped a
                first version and got real users in front of it within weeks, not
                quarters.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface/40 p-7 sm:p-10">
              <p className="font-sans text-base leading-[1.7] text-text-primary/85 sm:text-lg">
                <span className="font-bold text-[#1e3a8a]">SMBs & operators.</span>{" "}
                Established businesses that need a web product or internal tool to
                replace manual workflows. Directional outcome: manual processes
                that once took hours were automated end-to-end, and staff got a
                tool that works with their existing stack.
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
              MVP{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                questions
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              The questions founders actually ask before they commit to a build.
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
        className="relative w-full overflow-x-hidden border-b border-white/5 bg-[#0b1220] py-20 text-text-primary sm:py-24 lg:py-40"
      >
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <h2 className="font-spartan text-[clamp(2.5rem,8vw,6.5rem)] font-black leading-[0.8] tracking-tighter uppercase select-none">
                Let&apos;s scope{" "}
                <span className="block text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                  your MVP
                </span>
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-[1.6] text-muted font-medium font-sans">
                Book a free 30-minute scoping call for your MVP project. We&apos;ll
                map the scope, propose an architecture, and give you a locked
                timeline — no obligation.
              </p>
              <a
                href="https://calendly.com/teamacumo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-sans transition-transform duration-300 hover:scale-105"
              >
                <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2 rounded-full border border-white/5 bg-surface px-8 py-4 text-[11px] font-bold uppercase tracking-wider text-text-primary backdrop-blur-md">
                  Book a free MVP scoping call{" "}
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
              href="/services/websites-booking"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Pair your MVP with a high-converting website &amp; booking engine
            </Link>
            <Link
              href="/services/voice-ai-crm"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Add an AI voice agent &amp; CRM to your launch stack
            </Link>
            <Link
              href="/articles"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Read our articles on building and launching products
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
