import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Clock, Calendar, ArrowRight } from 'lucide-react';
import { getArticles } from '@/lib/articles';

export const metadata = {
  title: 'Articles | Acumo AI',
  description: 'Read the latest articles and insights from Acumo AI on business automation and AI engineering.',
};

const ITEMS_PER_PAGE = 6;

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }> | { page?: string };
}) {
  const resolvedSearchParams = await searchParams;
  const rawPage = resolvedSearchParams?.page;
  const currentPage = Math.max(1, parseInt(rawPage || '1', 10) || 1);

  const allArticles = getArticles();
  const totalArticles = allArticles.length;
  const totalPages = Math.ceil(totalArticles / ITEMS_PER_PAGE) || 1;

  // Ensure current page is within valid range
  const validPage = Math.min(currentPage, totalPages);
  const startIndex = (validPage - 1) * ITEMS_PER_PAGE;
  const currentArticles = allArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const isFirstPage = validPage === 1;
  const featuredArticle = isFirstPage ? currentArticles[0] : null;
  const gridArticles = isFirstPage ? currentArticles.slice(1) : currentArticles;

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-10">
      {/* Header Section */}
      <div className="mb-12 max-w-3xl">

        <h1 className="font-spartan text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4 leading-tight">
          Articles & Insights
        </h1>
        <p className="font-sans text-white/70 text-base sm:text-lg leading-relaxed">
          Real-world engineering, practical AI automation, and technical deep dives from the Acumo team.
        </p>
      </div>

      {allArticles.length === 0 ? (
        <div className="text-center py-20 text-white/50 font-sans border border-white/10 rounded-2xl bg-white/5">
          No articles found. Add markdown files to the Article Content directory.
        </div>
      ) : (
        <>
          {/* Featured Article Card */}
          {featuredArticle && (
            <div className="mb-12">
              <Link
                href={`/articles/${featuredArticle.slug}`}
                className="group relative block rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-blue-500/40 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5"
              >
                {featuredArticle.imagePath ? (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                    <div className="lg:col-span-7 relative aspect-video lg:aspect-auto min-h-[260px] sm:min-h-[340px] overflow-hidden bg-white/5">
                      <Image
                        src={featuredArticle.imagePath}
                        alt={featuredArticle.imageAlt || featuredArticle.title}
                        fill
                        priority
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent lg:hidden" />
                    </div>

                    <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 font-sans text-xs font-bold uppercase tracking-wider text-white/50 mb-4">
                          <span className="inline-flex items-center gap-1.5 text-blue-400 font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                            Latest Article
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-white/40" />
                            {featuredArticle.date}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-white/40" />
                            {featuredArticle.readTime}
                          </span>
                        </div>

                        <h2 className="font-spartan text-2xl sm:text-3xl font-bold text-white leading-snug group-hover:text-blue-300 transition-colors mb-4 line-clamp-3">
                          {featuredArticle.title}
                        </h2>

                        {featuredArticle.description && (
                          <p className="font-sans text-white/70 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
                            {featuredArticle.description}
                          </p>
                        )}
                      </div>

                      <div className="inline-flex items-center gap-2 text-sm font-sans font-bold text-blue-400 group-hover:text-blue-300 transition-colors uppercase tracking-wider">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 font-sans text-xs font-bold uppercase tracking-wider text-white/50 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-blue-400 font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                          Latest Article
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-white/40" />
                          {featuredArticle.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-white/40" />
                          {featuredArticle.readTime}
                        </span>
                      </div>

                      <h2 className="font-spartan text-3xl sm:text-4xl font-bold text-white leading-snug group-hover:text-blue-300 transition-colors mb-4 max-w-4xl">
                        {featuredArticle.title}
                      </h2>

                      {featuredArticle.description && (
                        <p className="font-sans text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
                          {featuredArticle.description}
                        </p>
                      )}
                    </div>

                    <div className="inline-flex items-center gap-2 text-sm font-sans font-bold text-blue-400 group-hover:text-blue-300 transition-colors uppercase tracking-wider">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                )}
              </Link>
            </div>
          )}

          {/* Grid of Remaining Articles on Page */}
          {gridArticles.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {gridArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group flex flex-col justify-between rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
                >
                  <div>
                    {article.imagePath && (
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-white/5 border-b border-white/10">
                        <Image
                          src={article.imagePath}
                          alt={article.imageAlt || article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
                        <span>{article.date}</span>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="font-spartan text-xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors line-clamp-3 mb-3">
                        {article.title}
                      </h3>
                      {article.description && (
                        <p className="font-sans text-white/60 text-xs sm:text-sm leading-relaxed line-clamp-3">
                          {article.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 flex items-center gap-1.5 text-xs font-sans font-bold text-white/50 group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="font-sans text-xs sm:text-sm text-white/50 font-medium">
                Showing <span className="text-white font-semibold">{startIndex + 1}</span>–
                <span className="text-white font-semibold">
                  {Math.min(startIndex + ITEMS_PER_PAGE, totalArticles)}
                </span>{' '}
                of <span className="text-white font-semibold">{totalArticles}</span> articles
              </div>

              <div className="flex items-center gap-2">
                {/* Previous Button */}
                {validPage > 1 ? (
                  <Link
                    href={`/articles?page=${validPage - 1}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-xs sm:text-sm font-sans font-semibold transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-white/20 text-xs sm:text-sm font-sans font-semibold cursor-not-allowed">
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </span>
                )}

                {/* Page Numbers */}
                <div className="flex items-center gap-1 sm:gap-1.5">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <Link
                      key={pageNum}
                      href={`/articles?page=${pageNum}`}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xs sm:text-sm font-sans font-bold transition-all ${pageNum === validPage
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                          : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white'
                        }`}
                    >
                      {pageNum}
                    </Link>
                  ))}
                </div>

                {/* Next Button */}
                {validPage < totalPages ? (
                  <Link
                    href={`/articles?page=${validPage + 1}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-xs sm:text-sm font-sans font-semibold transition-all"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-white/20 text-xs sm:text-sm font-sans font-semibold cursor-not-allowed">
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </span>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

