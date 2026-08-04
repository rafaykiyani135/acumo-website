import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Services | Acumo AI",
  description:
    "Acumo AI builds AI-native web products for small and medium businesses — full-stack MVPs, websites & booking engines, AI voice agents with CRM, and custom AI automations. Book a free scoping call.",
};

const services = [
  {
    href: "/services/mvp-development",
    num: "01",
    title: ["FULL-STACK", "MVP BUILD"],
    desc: "Production-ready 0-to-1 full-stack MVPs for startups and enterprise teams — from idea to launch in 2–8 weeks.",
    status: "Live",
  },
  {
    href: "/services/voice-ai-crm",
    num: "02",
    title: ["VOICE AI &", "CRM SYSTEMS"],
    desc: "Custom AI voice agents that answer calls, qualify leads, and book appointments straight into your CRM, 24/7.",
  },
  {
    href: "/services/websites-booking",
    num: "03",
    title: ["WEBSITES &", "BOOKING ENGINE"],
    desc: "High-converting websites with built-in booking, payments, and client portals — built for speed and conversion.",
  },
  {
    href: "/services/ai-automation",
    num: "04",
    title: ["CUSTOM AI &", "AUTOMATIONS"],
    desc: "Bespoke LLM integrations and automated workflows that cut manual work and connect the tools you already use.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />

      <section className="relative w-full overflow-x-hidden bg-bg px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-12 lg:pb-36 lg:pt-48">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-grid" />
        </div>

        <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1100px]">
          <h1 className="font-spartan text-[clamp(2.5rem,9vw,7rem)] font-black uppercase leading-[0.85] tracking-tighter text-text-primary">
            What we{" "}
            <span className="block text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
              build
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-[1.5] tracking-tight text-text-primary/85 sm:text-xl md:text-2xl">
            Acumo AI engineers AI-native web products for small and medium
            businesses — from launch-ready MVPs to voice agents that never miss a
            call. Book a free scoping call and we&apos;ll map your build.
          </p>
        </div>
      </section>

      <section className="relative w-full overflow-x-hidden border-t border-white/5 bg-bg pb-24 sm:pb-32">
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="flex flex-col">
            {services.map((s) => (
              <div
                key={s.href}
                className="group border-b border-white/10 py-10 first:border-t-0 sm:py-12"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-1">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-[#1e3a8a] uppercase font-bold">
                      {s.num}
                    </span>
                  </div>
                  <div className="md:col-span-6">
                    <h2 className="font-spartan text-3xl font-black uppercase leading-[0.9] tracking-tighter text-text-primary sm:text-5xl transition-colors duration-300 group-hover:text-[#1e3a8a]">
                      {s.title.map((word, i) => (
                        <span key={i} className="block">
                          {word}
                        </span>
                      ))}
                    </h2>
                  </div>
                  <div className="md:col-span-4">
                    <p className="max-w-md text-[15px] leading-[1.6] text-muted font-medium font-sans">
                      {s.desc}
                    </p>
                  </div>
                  <div className="md:col-span-1 md:text-right">
                    <Link
                      href={s.href}
                      className="group/link relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-surface/50 transition-all duration-700 hover:border-[#1e3a8a]"
                      aria-label={`Visit ${s.title.join(" ")}`}
                    >
                      <span className="absolute inset-0 translate-y-full bg-[#1e3a8a] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-y-0" />
                      <span className="relative z-10 text-text-primary transition-all duration-500 group-hover/link:text-white">
                        ↗
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/#inquiry"
            className="group relative mt-16 inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-sans transition-transform duration-300 hover:scale-105"
          >
            <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-2 rounded-full border border-white/5 bg-surface px-8 py-4 text-[11px] font-bold uppercase tracking-wider text-text-primary backdrop-blur-md">
              Book a free scoping call <span className="text-[13px] font-normal">↗</span>
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}