import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getArticles } from '@/lib/articles';

export const metadata = {
  title: 'Articles | Acumo AI',
  description: 'Read the latest articles from Acumo AI',
};

export default function ArticlesPage() {
  const articles = getArticles();

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
      <div className="mb-12">
        <h1 className="font-spartan text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
          Acumo Articles
        </h1>
        <p className="font-sans text-white/70 max-w-2xl text-lg">
          Insights, thoughts, and expertise from the Acumo team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group block rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:bg-white/10"
          >
            {article.imagePath && (
              <div className="relative aspect-video w-full overflow-hidden bg-white/5">
                <Image
                  src={article.imagePath}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-wider text-[#1e3a8a] mb-3">
                <span className="text-white/50">{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-white/50" />
                <span className="text-white/50">{article.readTime}</span>
              </div>
              <h2 className="font-spartan text-2xl font-bold text-white leading-tight group-hover:text-white/80 transition-colors line-clamp-3">
                {article.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>

      {articles.length === 0 && (
        <div className="text-center py-20 text-white/50 font-sans">
          No articles found. Add some markdown files to the Article Content directory.
        </div>
      )}
    </div>
  );
}
