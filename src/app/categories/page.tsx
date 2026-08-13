import { Metadata } from 'next';
import Link from 'next/link';
import { categories, verticals } from '@/lib/categories';
import { getAllPlaybooks } from '@/lib/playbooks';
import { ArrowLeft, FolderOpen, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Categories | Claude Code Playbooks',
  description:
    'Browse every Claude Code playbook category — from file organization and developer tools to academic research, marketing content and finance. Grouped by vertical, with playbook counts.',
  alternates: {
    canonical: '/categories',
  },
  openGraph: {
    title: 'All Categories | Claude Code Playbooks',
    description:
      'Browse every Claude Code playbook category, grouped by vertical, with playbook counts.',
    url: 'https://www.claudecodehq.com/categories',
    type: 'website',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Categories | Claude Code Playbooks',
    description:
      'Browse every Claude Code playbook category, grouped by vertical, with playbook counts.',
    images: ['https://www.claudecodehq.com/og-image.jpg'],
  },
};

/**
 * Hub index for /categories/[category].
 *
 * This route used to 404, which left the 37 category hubs reachable only from
 * /playbooks. Those hubs are the sole pages linking to every playbook in a
 * category, so their own weak linking capped how much crawl signal reached the
 * ~950 playbooks that sit past the first few pagination pages.
 */
export default function CategoriesIndexPage() {
  const allPlaybooks = getAllPlaybooks();

  const counts: Record<string, number> = {};
  for (const p of allPlaybooks) {
    counts[p.category] = (counts[p.category] || 0) + 1;
  }

  const populatedVerticals = verticals
    .map((vertical) => ({
      vertical,
      items: categories.filter((c) => c.vertical === vertical),
    }))
    .filter((group) => group.items.length > 0);

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
        name: 'Categories',
      },
    ],
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'All Categories',
    description: 'Every Claude Code playbook category, grouped by vertical.',
    url: 'https://www.claudecodehq.com/categories',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: categories.length,
      itemListElement: categories.map((cat, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://www.claudecodehq.com/categories/${cat.id}`,
        name: cat.name,
      })),
    },
  };

  return (
    <div className="container py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <Link
        href="/playbooks"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-[#22d3ee] mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        cd ../playbooks
      </Link>

      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-3">
          <Layers className="h-6 w-6 text-[#a78bfa]" />
          All Categories
        </h1>
        <p className="text-muted-foreground">
          {categories.length} categories across {populatedVerticals.length} verticals —{' '}
          {allPlaybooks.length} playbooks in total.
        </p>
      </div>

      <div className="space-y-10">
        {populatedVerticals.map(({ vertical, items }) => (
          <section key={vertical}>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 pb-2 border-b border-[#30363d]">
              {vertical}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.id}`}
                  className="p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors group"
                >
                  <h3 className="text-sm font-semibold flex items-center gap-2 group-hover:text-[#22d3ee] transition-colors">
                    <FolderOpen className="h-4 w-4 flex-shrink-0 text-[#22d3ee]" />
                    {cat.name}
                    <span className="text-xs font-normal text-muted-foreground/70">
                      ({counts[cat.id] || 0})
                    </span>
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2">{cat.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
