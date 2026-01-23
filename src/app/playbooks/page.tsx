import { Suspense } from 'react';
import { Metadata } from 'next';
import { getAllPlaybooks, getPlaybooksByCategory, searchPlaybooks } from '@/lib/playbooks';
import { PlaybookCard } from '@/components/PlaybookCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { SearchBar } from '@/components/SearchBar';
import { Pagination } from '@/components/Pagination';
import { Category } from '@/types/playbook';

export const metadata: Metadata = {
  title: 'All Playbooks | Claude Code Playbooks',
  description: 'Browse all copy-paste workflows for Claude Code. No coding required.',
};

const ITEMS_PER_PAGE = 24;

interface PlaybooksPageProps {
  searchParams: Promise<{ category?: string; q?: string; page?: string }>;
}

async function PlaybooksList({
  category,
  query,
  page,
}: {
  category?: Category;
  query?: string;
  page: number;
}) {
  let playbooks = getAllPlaybooks();

  if (category) {
    playbooks = getPlaybooksByCategory(category);
  }

  if (query) {
    playbooks = searchPlaybooks(query);
    if (category) {
      playbooks = playbooks.filter((p) => p.category === category);
    }
  }

  const totalPlaybooks = playbooks.length;
  const totalPages = Math.ceil(totalPlaybooks / ITEMS_PER_PAGE);
  const currentPage = Math.min(Math.max(1, page), totalPages || 1);

  // Paginate
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPlaybooks = playbooks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (playbooks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          <span className="text-[#f97316]">!</span> No playbooks found.
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Try adjusting your search or filters.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {paginatedPlaybooks.map((playbook) => (
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

      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} className="mt-8" />
      )}
    </>
  );
}

export default async function PlaybooksPage({ searchParams }: PlaybooksPageProps) {
  const params = await searchParams;
  const category = params.category as Category | undefined;
  const query = params.q;
  const page = parseInt(params.page || '1', 10);

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <span className="text-[#22d3ee]">$</span>
          <span>ls playbooks/</span>
        </h1>
        <p className="text-muted-foreground text-sm">
          <span className="text-[#30363d]">└</span> Browse all copy-paste workflows for Claude Code
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center">
        <Suspense fallback={<div className="h-10 w-full sm:w-64 bg-[#161b22] animate-pulse rounded-lg" />}>
          <SearchBar className="w-full sm:w-80" autoSearch />
        </Suspense>
      </div>

      <Suspense fallback={<div className="h-10 w-full bg-[#161b22] animate-pulse rounded mb-8" />}>
        <CategoryFilter selectedCategory={category} className="mb-8" />
      </Suspense>

      <Suspense
        fallback={
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-48 bg-[#161b22] animate-pulse rounded-lg border border-[#30363d]" />
            ))}
          </div>
        }
      >
        <PlaybooksList category={category} query={query} page={page} />
      </Suspense>
    </div>
  );
}
