import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getArticles, getArticleBySlug } from '@/lib/articles';
import SectionIndex from './SectionIndex';

export async function generateStaticParams() {
  const articles = getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);
  if (!article) return { title: 'Article Not Found' };
  return {
    title: `${article.title} | Acumo AI`,
    description: `Read ${article.title}`,
  };
}

function flattenText(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(flattenText).join('');
  if (React.isValidElement(children) && children.props && typeof children.props === 'object' && 'children' in (children.props as Record<string, unknown>)) {
    return flattenText((children.props as { children: React.ReactNode }).children);
  }
  return '';
}

function generateId(children: React.ReactNode) {
  const text = flattenText(children);
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Extract headings for the Section Index
  const headings: { id: string; title: string; level: number }[] = [];
  const contentLines = article.content.split('\n');
  
  // Basic markdown regex to find headers
  contentLines.forEach((line) => {
    const cleanLine = line.trim();
    const match = cleanLine.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      let title = match[2].trim();
      // Remove basic markdown bold/italic formatting from title for the index
      title = title.replace(/(\*\*|__|\*|_)/g, '');
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      headings.push({ id, title, level });
    }
  });

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative">
      <Link 
        href="/articles"
        className="inline-flex items-center gap-2 text-white/50 hover:text-white font-sans text-sm font-bold uppercase tracking-wider mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Articles
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 relative items-start">
        {/* Main Content */}
        <article className="flex-1 w-full max-w-[800px]">
          <div className="mb-10">
            <h1 className="font-spartan text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 leading-[1.1]">
              {article.title}
            </h1>
            <div className="flex items-center gap-3 font-sans text-sm font-bold uppercase tracking-wider text-white/50">
              <span>{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {article.imagePath && (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-12 border border-white/10 bg-white/5">
              <Image
                src={article.imagePath}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          <div className="font-sans text-white/90 text-[17px] leading-[1.8] max-w-none
            [&_h1]:hidden
            [&_h2]:font-spartan [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-14 [&_h2]:mb-6
            [&_h3]:font-spartan [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-10 [&_h3]:mb-4
            [&_p]:mb-6 [&_a]:text-[#4168c4] hover:[&_a]:underline
            [&_strong]:font-bold [&_strong]:text-white
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-6 [&_li]:mb-2
            [&_table]:w-full [&_table]:my-10 [&_table]:text-left [&_table]:border-collapse
            [&_th]:p-4 [&_th]:border-b [&_th]:border-white/20 [&_th]:text-white [&_th]:font-bold [&_th]:bg-white/5
            [&_td]:p-4 [&_td]:border-b [&_td]:border-white/10 [&_td]:text-white/80"
          >
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({node, children, ...props}) => {
                  const id = generateId(children);
                  return <h2 id={id} {...props}>{children}</h2>;
                },
                h3: ({node, children, ...props}) => {
                  const id = generateId(children);
                  return <h3 id={id} {...props}>{children}</h3>;
                }
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Section Index Sidebar */}
        {headings.length > 0 && (
          <aside className="hidden md:block w-[280px] shrink-0 sticky top-32">
            <SectionIndex headings={headings} />
          </aside>
        )}
      </div>
    </div>
  );
}
