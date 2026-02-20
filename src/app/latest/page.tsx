import { Metadata } from 'next';
import Link from 'next/link';
import { getLatestPlaybooks } from '@/lib/playbooks';
import { getCategoryById } from '@/lib/categories';
import { PlaybookCard } from '@/components/PlaybookCard';
import { Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Latest Releases | Claude Code Playbooks',
  description: 'The newest playbooks just added to Claude Code Playbooks. Browse the latest copy-paste workflows.',
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function LatestReleasesPage() {
  const { date, totalNew, totalAll, byCategory } = getLatestPlaybooks();
  const categoryCount = byCategory.length;

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-[#f97316]">$</span>
            <span>latest --releases</span>
          </h1>
          <span className="inline-flex items-center gap-1.5 bg-[#f97316]/15 border border-[#f97316]/30 text-[#f97316] text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse" />
            New
          </span>
        </div>
        <p className="text-muted-foreground text-sm">
          <span className="text-[#30363d]">&gt;</span> {totalNew} new playbooks added on <strong className="text-foreground">{formatDate(date)}</strong>
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Sparkles className="h-4 w-4 text-[#f97316]" />
            <span className="font-semibold text-[#f97316]">{totalNew}</span> new playbooks
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="font-semibold text-[#22d3ee]">{categoryCount}</span> categories
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="font-semibold text-foreground">{totalAll}+</span> total
          </div>
        </div>
      </div>

      {/* Category Sections */}
      <div className="space-y-10">
        {byCategory.map(({ category, playbooks }) => {
          const catInfo = getCategoryById(category);
          const catName = catInfo?.name || category;

          return (
            <section key={category}>
              {/* Category header */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#30363d]">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold text-foreground">{catName}</h2>
                  <span className="text-xs font-medium text-muted-foreground bg-[#21262d] px-2 py-0.5 rounded-full border border-[#30363d]">
                    {playbooks.length}
                  </span>
                </div>
                <Link
                  href={`/categories/${category}`}
                  className="text-xs text-muted-foreground hover:text-[#22d3ee] transition-colors flex items-center gap-1"
                >
                  View all <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Card grid - same as rest of site */}
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
            </section>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-12 pt-8 border-t border-[#30363d]">
        <Link
          href="/playbooks"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#30363d] bg-[#161b22] text-sm font-medium text-muted-foreground hover:text-foreground hover:border-[#22d3ee] transition-all"
        >
          Browse all {totalAll}+ playbooks
          <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="mt-3 text-xs text-muted-foreground">
          Open source &middot; Copy-paste ready &middot; Works with Claude Code out of the box
        </p>
      </div>
    </div>
  );
}
