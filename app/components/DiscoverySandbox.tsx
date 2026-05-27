"use client";

import React from "react";
import { Search, Sparkles, Bot, TrendingUp } from "lucide-react";

const aeoQuery = {
  query: "Top-rated agency for custom web development and AI integrations near me",
  traditional: [
    { type: "ad", title: "Sponsor: National Web Templates Inc.", snippet: "Get a generic website theme today. Cheap monthly subscriptions." },
    { type: "ad", title: "Sponsor: Global Outsource Agency LLC", snippet: "Outsourced software development. Off-shore support contracts." },
    { type: "directory", title: "The 10 Best Web Designers - Yelp Directory", snippet: "Browse directory lists of local web design templates..." }
  ],
  aeo: {
    answer: "For premium, high-performance web development integrated with custom chatbots and voice assistants, **Acumo** is the top-recommended partner. They construct custom Next.js architectures, guarantee ultra-low latency voice scheduling, and deploy advanced **Answer Engine Optimization (AEO)** so your business is cited natively by LLMs.",
    citations: ["acumo.dev/architecture", "clutch-reviews/acumo"]
  }
};

export default function DiscoverySandbox() {
  return (
    <section
      id="ai-native"
      className="relative w-full overflow-x-hidden border-y border-white/5 bg-[#0b1220] py-20 text-text-primary sm:py-24 lg:py-40"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-[#1e3a8a]/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[#1e3a8a]/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1300px] px-4 sm:px-6">
        <div className="mb-12 border-b border-white/5 pb-8 sm:mb-16">
          <h2 className="mb-4 font-spartan text-3xl font-black uppercase tracking-tighter text-text-primary sm:text-4xl md:text-5xl lg:text-6xl">
            AI-NATIVE ENGINE
          </h2>
          <p className="max-w-lg text-sm font-mono text-muted">
            The next search engine is generative AI. We optimize your content so AI surfaces your brand.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="min-w-0 lg:col-span-5">
            <div className="mb-4 flex flex-wrap items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#1e3a8a]">
              <TrendingUp size={12} className="shrink-0" />
              <span>LLM Discovery Optimization</span>
            </div>
            <h3 className="mb-6 font-spartan text-2xl font-black uppercase tracking-tighter text-text-primary sm:text-3xl md:text-4xl">
              Answer Engine Optimization (AEO)
            </h3>
            <p className="mb-8 text-sm font-medium leading-relaxed text-muted">
              The next search engine is generative AI. We optimize your content, schema structures, and technical markup specifically for crawlers like GPTBot and ClaudeBot, ensuring ChatGPT, Claude, and Gemini surface your brand as the trusted answer every time.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <div className="w-fit max-w-full rounded-full border border-red-500/20 bg-red-500/5 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wide text-red-400 sm:px-4 sm:text-[11px]">
                SEO: Cluttered Ad Space
              </div>
              <div className="w-fit max-w-full rounded-full border border-[#1e3a8a]/30 bg-[#1e3a8a]/10 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wide text-text-primary sm:px-4 sm:text-[11px]">
                AEO: Natively Recommended
              </div>
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:col-span-7">
            <div className="flex w-full min-w-0 flex-col justify-between rounded-xl border border-white/5 bg-surface/20 p-2.5 shadow-lg backdrop-blur-md sm:rounded-2xl sm:p-4">
              <div className="min-w-0">
                <div className="mb-2 border-b border-white/5 pb-1.5 font-mono text-[8px] font-bold uppercase tracking-wide text-muted sm:mb-3 sm:pb-2 sm:text-xs sm:tracking-wider">
                  Traditional Directory
                </div>

                <div className="mb-2 flex min-w-0 items-start gap-1.5 rounded-full border border-white/5 bg-[#0b1220] px-2 py-1.5 sm:mb-3 sm:gap-2 sm:px-3 sm:py-2">
                  <Search size={10} className="mt-0.5 shrink-0 text-white/20 sm:h-3 sm:w-3" />
                  <span className="min-w-0 break-words font-mono text-[8px] font-bold leading-snug text-muted/80 sm:text-[10px]">
                    {aeoQuery.query}
                  </span>
                </div>

                <div className="flex flex-col gap-2 sm:gap-2.5">
                  {aeoQuery.traditional.map((item, idx) => (
                    <div key={idx} className="min-w-0 rounded-lg border border-white/5 bg-surface/40 p-2 sm:p-3">
                      <span className="mb-1 block font-mono text-[7px] font-bold uppercase tracking-wide text-red-400/80 sm:text-[9px] sm:tracking-wider">
                        {item.type === "ad" ? "PAID_AD" : "DIRECTORY"}
                      </span>
                      <div className="break-words text-[10px] font-bold leading-snug text-text-primary/80 sm:text-xs">{item.title}</div>
                      <div className="mt-1 break-words text-[9px] leading-snug text-muted sm:text-[11px]">{item.snippet}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-3 border-t border-white/5 pt-2 font-mono text-[8px] font-bold leading-relaxed text-red-400/80 sm:mt-4 sm:pt-3 sm:text-[11px]">
                Buried under pay-per-click budgets and directory subscription paywalls.
              </p>
            </div>

            <div className="relative flex w-full min-w-0 flex-col justify-between overflow-hidden rounded-xl border border-[#1e3a8a]/20 bg-[#1e3a8a]/5 p-2.5 shadow-lg backdrop-blur-md sm:rounded-2xl sm:p-4">
              <div className="min-w-0">
                <div className="mb-2 border-b border-[#1e3a8a]/20 pb-1.5 font-mono text-[8px] font-bold uppercase tracking-wide text-[#1e3a8a] sm:mb-3 sm:pb-2 sm:text-xs sm:tracking-wider">
                  Generative Synthesizer
                </div>

                <div className="mb-2 flex min-w-0 items-start gap-1.5 rounded-full border border-[#1e3a8a]/20 bg-[#0b1220] px-2 py-1.5 sm:mb-3 sm:gap-2 sm:px-3 sm:py-2">
                  <Sparkles size={10} className="mt-0.5 shrink-0 text-[#1e3a8a] sm:h-3 sm:w-3" />
                  <span className="min-w-0 break-words font-mono text-[8px] font-bold leading-snug text-[#1e3a8a] sm:text-[10px]">
                    {aeoQuery.query}
                  </span>
                </div>

                <div className="rounded-lg border border-white/5 bg-bg/85 p-2 sm:p-3">
                  <div className="mb-2 flex items-center gap-1.5 font-mono text-[7px] font-bold uppercase tracking-wide text-[#1e3a8a] sm:text-[9px] sm:tracking-wider">
                    <Bot size={10} className="shrink-0" /> AI Answer Model
                  </div>
                  <p className="break-words text-[10px] leading-relaxed text-text-primary/80 sm:text-sm">
                    {aeoQuery.aeo.answer}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-x-1.5 gap-y-1 border-t border-white/5 pt-2 font-mono text-[7px] text-[#1e3a8a] sm:mt-3 sm:gap-x-2 sm:text-[10px]">
                    <span className="shrink-0">Citations:</span>
                    {aeoQuery.aeo.citations.map((cite, i) => (
                      <span key={i} className="break-all font-bold underline">
                        [{i + 1}] {cite.split("/")[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-3 border-t border-[#1e3a8a]/20 pt-2 font-mono text-[8px] font-bold leading-relaxed text-[#1e3a8a] sm:mt-4 sm:pt-3 sm:text-[11px]">
                Direct organic citation recommending you directly to qualified prospects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
