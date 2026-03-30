import { Metadata } from 'next';
import Link from 'next/link';
import { personas } from '@/lib/personas';
import { getPlaybooksByCategories } from '@/lib/playbooks';
import { ArrowLeft, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Tools by Role | Claude Code Playbooks',
  description: 'Find Claude Code playbooks tailored to your role — accountants, marketers, HR managers, researchers, project managers, executives, and more.',
  alternates: {
    canonical: '/for',
  },
  openGraph: {
    title: 'AI Tools by Role | Claude Code Playbooks',
    description: 'Find Claude Code playbooks tailored to your role — accountants, marketers, HR managers, researchers, project managers, executives, and more.',
    url: 'https://www.claudecodehq.com/for',
    type: 'website',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools by Role | Claude Code Playbooks',
    description: 'Find Claude Code playbooks tailored to your role — accountants, marketers, HR managers, researchers, and more.',
    images: ['https://www.claudecodehq.com/og-image.jpg'],
  },
};

export default function ForIndexPage() {
  const personasWithCounts = personas.map((persona) => ({
    ...persona,
    playbookCount: getPlaybooksByCategories(persona.categories).length,
  }));

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
        name: 'For You',
      },
    ],
  };

  return (
    <div className="container py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Link
        href="/playbooks"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-[#22d3ee] mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        cd ../playbooks
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-3">
          <Users className="h-6 w-6 text-[#22d3ee]" />
          Playbooks by Role
        </h1>
        <p className="text-muted-foreground">
          Find the right AI workflows for your job. Each role page pulls together playbooks from
          multiple categories tailored to what you actually do.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {personasWithCounts.map((persona) => (
          <Link
            key={persona.id}
            href={`/for/${persona.id}`}
            className="p-5 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors group"
          >
            <h2 className="text-base font-semibold group-hover:text-[#22d3ee] transition-colors mb-1">
              {persona.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-3">{persona.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {persona.playbookCount} playbooks
              </span>
              <span className="text-xs text-[#22d3ee] opacity-0 group-hover:opacity-100 transition-opacity">
                Browse →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
