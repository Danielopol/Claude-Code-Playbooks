import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { BlogCategory, BlogDifficulty } from '@/types/blog';

function getCategoryLabel(category: BlogCategory): string {
  const labels: Record<BlogCategory, string> = {
    agent: 'AGENT',
    mcp: 'MCP',
    tutorial: 'TUTORIAL',
    guide: 'GUIDE',
    news: 'NEWS',
  };
  return labels[category];
}

function getCategoryColor(category: BlogCategory): string {
  const colors: Record<BlogCategory, string> = {
    agent: 'bg-[#22d3ee] text-[#0d1117]',
    mcp: 'bg-[#a855f7] text-white',
    tutorial: 'bg-[#22c55e] text-[#0d1117]',
    guide: 'bg-[#f97316] text-[#0d1117]',
    news: 'bg-[#ec4899] text-white',
  };
  return colors[category];
}

function getDifficultyColor(difficulty: BlogDifficulty): string {
  const colors: Record<BlogDifficulty, string> = {
    basic: 'bg-[#22c55e] text-[#0d1117]',
    intermediate: 'bg-[#f97316] text-[#0d1117]',
    advanced: 'bg-[#ef4444] text-white',
  };
  return colors[difficulty];
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export interface BlogPostLayoutProps {
  title: string;
  description: string;
  category: BlogCategory;
  difficulty: BlogDifficulty;
  readingTime: string;
  createdAt: string;
  tags: string[];
  author?: string;
  slug: string;
  children: React.ReactNode;
}

export function BlogPostLayout({
  title,
  description,
  category,
  difficulty,
  readingTime,
  createdAt,
  tags,
  author,
  slug,
  children,
}: BlogPostLayoutProps) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.claudecodehq.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.claudecodehq.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: createdAt,
    author: author
      ? { '@type': 'Person', name: author }
      : { '@type': 'Organization', name: 'Claude Code Playbooks' },
    publisher: {
      '@type': 'Organization',
      name: 'Claude Code Playbooks',
      url: 'https://www.claudecodehq.com',
    },
    mainEntityOfPage: `https://www.claudecodehq.com/blog/${slug}`,
    keywords: tags.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="min-h-screen">
        <article className="container max-w-3xl py-12 md:py-16">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            {/* Category & Difficulty badges */}
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-2.5 py-1 text-xs font-bold rounded ${getCategoryColor(category)}`}>
                {getCategoryLabel(category)}
              </span>
              <span className={`px-2.5 py-1 text-xs font-medium rounded ${getDifficultyColor(difficulty)}`}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-6">
              {description}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-b border-[#30363d] py-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(createdAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {readingTime}
              </span>
              {author && (
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {author}
                </span>
              )}
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs bg-[#21262d] border border-[#30363d] rounded text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Article body — written as JSX in each page */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {children}
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-[#30363d]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </footer>
        </article>
      </div>
    </>
  );
}
