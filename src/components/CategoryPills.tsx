'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Category {
  id: string;
  name: string;
}

const COLLAPSED_COUNT = 6;

export function CategoryPills({ categories, counts }: { categories: Category[]; counts: Record<string, number> }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      <span className="text-sm text-muted-foreground mr-2">categories:</span>
      {/*
        Every category is rendered into the markup and the collapsed ones are
        hidden with CSS, rather than sliced out of the array. Slicing meant the
        homepage shipped links to 6 of 37 category hubs — the other 31 existed
        only after a client-side click, so crawlers never saw them.

        These point at /categories/[id] (the canonical, indexable hub) instead
        of /playbooks?category=[id], which was a query-string duplicate that
        Google crawled and declined to index.
      */}
      {categories.map((cat, i) => (
        <Link
          key={cat.id}
          href={`/categories/${cat.id}`}
          className={cn(
            'text-sm px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-muted-foreground hover:border-[#22d3ee] hover:text-[#22d3ee] transition-colors',
            !expanded && i >= COLLAPSED_COUNT && 'hidden'
          )}
        >
          {cat.name}
          {counts[cat.id] ? <span className="ml-1 text-xs opacity-60">({counts[cat.id]})</span> : null}
        </Link>
      ))}
      {categories.length > COLLAPSED_COUNT && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm px-3 py-1 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 text-[#22d3ee] hover:bg-[#22d3ee]/20 transition-colors cursor-pointer"
        >
          {expanded ? '← Show less' : 'View all →'}
        </button>
      )}
    </div>
  );
}
