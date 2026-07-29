"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What industries does Acumo work with?",
    answer:
      "We're industry-agnostic. We've built AI-native systems across healthcare, real estate, finance, legal, e-commerce, and more. If your business needs intelligent software that scales, we can engineer it — regardless of vertical.",
  },
  {
    question: "What's the difference between AEO and traditional SEO?",
    answer:
      "Traditional SEO optimizes for search engine result pages — rankings, backlinks, and keywords. Answer Engine Optimization (AEO) optimizes for generative AI engines like ChatGPT, Claude, Gemini, and Perplexity. Instead of competing for page-one rankings buried under ads, AEO ensures your business is cited directly as the trusted answer when prospects ask AI for recommendations.",
  },
  {
    question: "What does the engagement process look like?",
    answer:
      "It starts with a scoping inquiry where we understand your goals and constraints. From there, we deliver a technical proposal outlining architecture, timeline, and deliverables. Once approved, we move into a focused 2–4 week build cycle with regular checkpoints, then launch and hand off with full documentation.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects are delivered within 2–4 weeks. Complex multi-system builds or enterprise integrations may extend beyond that, but we scope everything upfront so there are no surprises.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We offer post-launch support packages that cover maintenance, monitoring, iterative improvements, and scaling as your product grows. You're not left on your own after delivery.",
  },
  {
    question: "Can you integrate with our existing tools and tech stack?",
    answer:
      "Absolutely. We regularly integrate with CRMs, scheduling tools, payment systems, and existing APIs. Our systems are built to plug into your current infrastructure, not replace it.",
  },
  {
    question: "Do you white-label your work?",
    answer:
      "Yes — everything ships under your brand. We build behind the scenes so your product looks and feels entirely yours, from the interface to the deployment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full overflow-x-hidden border-b border-white/5 bg-bg py-20 sm:py-24 lg:py-40"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-grid"></div>
      </div>

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-text-primary font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
            FREQUENTLY{" "}
            <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
              ASKED.
            </span>
          </h2>
          <p className="max-w-md text-sm font-mono text-muted">
            Common questions about working with Acumo, our process, and what we deliver.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/5 last:border-b-0"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="group flex w-full items-center justify-between gap-4 py-6 sm:py-8 text-left cursor-pointer transition-colors duration-300"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start gap-4 sm:gap-6 min-w-0">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#1e3a8a] uppercase font-bold shrink-0 pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-spartan text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-text-primary group-hover:text-[#1e3a8a] transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#1e3a8a]" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100 pb-6 sm:pb-8"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="pl-8 sm:pl-14 text-sm sm:text-[15px] leading-[1.7] text-muted font-medium font-sans max-w-2xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
