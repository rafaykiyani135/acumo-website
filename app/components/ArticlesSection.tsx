import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getArticles } from "@/lib/articles";

export default function ArticlesSection() {
  const articles = getArticles().slice(0, 3);

  if (!articles || articles.length === 0) return null;

  return (
    <section className="relative w-full overflow-x-hidden border-b border-white/5 bg-bg py-20 sm:py-24 md:py-28 lg:py-32">
      <div className="mx-auto w-full min-w-0 max-w-[1400px] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-2 w-2 rounded-full bg-[#1e3a8a] animate-pulse" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:text-xs">
                Engineering &amp; Automation
              </p>
            </div>
            <h2 className="font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tighter text-text-primary">
              Latest{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                Insights
              </span>
            </h2>
          </div>

          <Link
            href="/articles"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/40 px-6 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted transition-all duration-300 hover:border-[#1e3a8a] hover:text-text-primary sm:text-[11px] self-start sm:self-auto"
          >
            Browse all articles{" "}
            <span className="text-[13px] font-normal transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article, idx) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-surface/30 p-7 sm:p-8 transition-all duration-300 hover:border-white/20 hover:bg-surface/60 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-muted mb-4">
                  <span className="text-[#1e3a8a] font-bold">0{idx + 1}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-spartan text-xl sm:text-2xl font-bold uppercase tracking-tight text-text-primary group-hover:text-[#4168c4] transition-colors line-clamp-3 mb-4 leading-snug">
                  {article.title}
                </h3>

                {article.description && (
                  <p className="font-sans text-[14px] leading-relaxed text-muted line-clamp-3">
                    {article.description}
                  </p>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-muted group-hover:text-text-primary">
                <span>{article.date}</span>
                <span className="text-[#4168c4] flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
