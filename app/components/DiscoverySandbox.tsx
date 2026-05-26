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
    <section id="ai-native" className="py-24 lg:py-40 bg-[#0b1220] border-y border-white/5 relative overflow-hidden text-text-primary">
      {/* Background subtle visuals */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#1e3a8a]/10 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#1e3a8a]/10 rounded-full blur-[180px]"></div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Section Heading - Minimal & Clean */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/5">
          <div>
            <h2 className="text-5xl md:text-6xl font-spartan font-black tracking-tighter mb-4 uppercase text-text-primary select-none">
              AI-NATIVE ENGINE
            </h2>
            <p className="text-sm font-mono text-muted max-w-lg">
              The next search engine is generative AI. We optimize your content so AI surfaces your brand.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Context */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4 font-mono text-[10px] text-[#1e3a8a] font-bold uppercase tracking-wider">
              <TrendingUp size={12} />
              <span>LLM Discovery Optimization</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-spartan font-black tracking-tighter mb-6 uppercase text-text-primary">
              Answer Engine Optimization (AEO)
            </h3>
            <p className="text-muted leading-relaxed text-sm mb-8 font-medium font-sans">
              The next search engine is generative AI. We optimize your content, schema structures, and technical markup specifically for crawlers like GPTBot and ClaudeBot, ensuring ChatGPT, Claude, and Gemini surface your brand as the trusted answer every time.
            </p>

            {/* Comparison badge metadata */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="px-4 py-2 border border-red-500/20 bg-red-500/5 text-red-400 font-mono text-[9px] uppercase tracking-widest rounded-full font-bold">
                SEO: Cluttered Ad Space
              </div>
              <div className="px-4 py-2 border border-[#1e3a8a]/30 bg-[#1e3a8a]/10 text-text-primary font-mono text-[9px] uppercase tracking-widest rounded-full font-bold animate-pulse">
                AEO: Natively Recommended
              </div>
            </div>
          </div>

          {/* AEO Split Display Panel */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6 h-[400px]">
            {/* Search Engine Representation */}
            <div className="border border-white/5 bg-surface/20 backdrop-blur-md p-5 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5 mb-3 text-[9px] font-mono text-muted uppercase tracking-wider font-bold">
                  <span>Traditional Directory</span>
                </div>

                <div className="flex items-center gap-2 bg-[#0b1220] px-3 py-2 border border-white/5 rounded-full mb-3 text-[8px] font-mono text-muted/60 font-bold">
                  <Search size={10} className="text-white/20" />
                  <span className="truncate">{aeoQuery.query}</span>
                </div>

                <div className="flex flex-col gap-2.5">
                  {aeoQuery.traditional.map((item, idx) => (
                    <div key={idx} className="p-2.5 bg-surface/40 border border-white/5 rounded-lg text-[8px]">
                      <span className="font-mono text-[7px] text-red-400/80 tracking-widest uppercase block mb-0.5 font-bold">
                        {item.type === "ad" ? "PAID_AD" : "DIRECTORY"}
                      </span>
                      <div className="font-bold text-text-primary/80 truncate">{item.title}</div>
                      <div className="text-muted leading-snug line-clamp-1 mt-0.5">{item.snippet}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[8px] font-mono text-red-400/80 leading-normal border-t border-white/5 pt-2 font-bold">
                ⚠ Buried under pay-per-click budgets and directory subscription paywalls.
              </div>
            </div>

            {/* AI Answer Model Representation */}
            <div className="border border-[#1e3a8a]/20 bg-[#1e3a8a]/5 backdrop-blur-md p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1e3a8a]/5 rounded-full blur-xl"></div>
              
              <div>
                <div className="flex justify-between items-center pb-2 border-b border-[#1e3a8a]/20 mb-3 text-[9px] font-mono text-[#1e3a8a] uppercase tracking-wider font-bold">
                  <span>Generative Synthesizer</span>
                </div>

                <div className="flex items-center gap-2 bg-[#0b1220] px-3 py-2 border border-[#1e3a8a]/20 rounded-full mb-3 text-[8px] font-mono text-[#1e3a8a] font-bold">
                  <Sparkles size={10} className="text-[#1e3a8a]" />
                  <span className="truncate">{aeoQuery.query}</span>
                </div>

                <div className="p-3 bg-bg/85 border border-white/5 rounded-lg text-[9px] leading-relaxed text-text-primary/80">
                  <div className="flex items-center gap-1.5 font-mono text-[7px] uppercase tracking-wider text-[#1e3a8a] mb-1.5 font-bold">
                    <Bot size={8} /> AI Answer Model
                  </div>
                  {aeoQuery.aeo.answer}
                  <div className="flex gap-2 mt-2 pt-2 border-t border-white/5 font-mono text-[7px] text-[#1e3a8a]">
                    <span>Citations:</span>
                    {aeoQuery.aeo.citations.map((cite, i) => (
                      <span key={i} className="underline hover:text-text-primary cursor-pointer font-bold">[{i + 1}] {cite.split('/')[0]}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-[8px] font-mono text-[#1e3a8a] leading-normal border-t border-[#1e3a8a]/20 pt-2 font-bold">
                ✓ Direct organic citation recommending you directly to qualified prospects.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
