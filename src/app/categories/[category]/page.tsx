import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPlaybooksByCategory } from '@/lib/playbooks';
import { categories, getCategoryById } from '@/lib/categories';
import { PlaybookCard } from '@/components/PlaybookCard';
import { Category } from '@/types/playbook';
import { ArrowLeft, FolderOpen } from 'lucide-react';

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
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryInfo = getCategoryById(category as Category);

  if (!categoryInfo) {
    notFound();
  }

  const playbooks = getPlaybooksByCategory(category as Category);

  return (
    <div className="container py-8">
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
    </div>
  );
}
