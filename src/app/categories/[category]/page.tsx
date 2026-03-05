import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPlaybooksByCategory } from '@/lib/playbooks';
import { categories, getCategoryById, getCategoriesByVertical } from '@/lib/categories';
import { PlaybookCard } from '@/components/PlaybookCard';
import { Category } from '@/types/playbook';
import { ArrowLeft, FolderOpen, Layers } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryInfo = getCategoryById(category as Category);

  if (!categoryInfo) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${categoryInfo.name} Playbooks | Claude Code Playbooks`,
    description: categoryInfo.description,
    alternates: {
      canonical: `/categories/${category}`,
    },
    openGraph: {
      title: `${categoryInfo.name} Playbooks | Claude Code Playbooks`,
      description: categoryInfo.description,
      url: `https://www.claudecodehq.com/categories/${category}`,
      type: 'website',
      images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryInfo.name} Playbooks | Claude Code Playbooks`,
      description: categoryInfo.description,
      images: ['https://www.claudecodehq.com/og-image.jpg'],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryInfo = getCategoryById(category as Category);

  if (!categoryInfo) {
    notFound();
  }

  const playbooks = getPlaybooksByCategory(category as Category);

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
        name: 'Playbooks',
        item: 'https://www.claudecodehq.com/playbooks',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: categoryInfo.name,
      },
    ],
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${categoryInfo.name} Playbooks`,
    description: categoryInfo.description,
    url: `https://www.claudecodehq.com/categories/${category}`,
    numberOfItems: playbooks.length,
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

      <div className="mb-8">
        <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">{categoryInfo.vertical}</p>
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-3">
          <FolderOpen className="h-6 w-6 text-[#22d3ee]" />
          {categoryInfo.name}
        </h1>
        <p className="text-muted-foreground">{categoryInfo.description}</p>
      </div>

      {playbooks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            <span className="text-[#f97316]">!</span> No playbooks in this category yet.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Check back soon for new content!
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {playbooks.map((playbook) => (
            <PlaybookCard
              key={playbook.slug}
              slug={playbook.slug}
              title={playbook.title}
              description={playbook.description}
              category={playbook.category}
              difficulty={playbook.difficulty}
              timeToSetup={playbook.timeToSetup}
              tags={playbook.tags}
            />
          ))}
        </div>
      )}

      {/* Related Categories — internal linking for SEO */}
      {(() => {
        const relatedInVertical = getCategoriesByVertical(categoryInfo.vertical).filter(
          (c) => c.id !== categoryInfo.id
        );
        // Also show a few categories from other verticals
        const otherCategories = categories
          .filter((c) => c.vertical !== categoryInfo.vertical && c.id !== categoryInfo.id)
          .slice(0, 4);
        const relatedCategories = [...relatedInVertical, ...otherCategories].slice(0, 6);

        return relatedCategories.length > 0 ? (
          <section className="mt-12 pt-8 border-t border-[#30363d]">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Layers className="h-5 w-5 text-[#a78bfa]" />
              Explore More Categories
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.id}`}
                  className="p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors group"
                >
                  <p className="text-xs text-muted-foreground/70 mb-1">{cat.vertical}</p>
                  <h3 className="text-sm font-semibold group-hover:text-[#22d3ee] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{cat.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null;
      })()}
    </div>
  );
}
