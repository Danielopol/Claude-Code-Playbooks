'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
}

export function CategoryPills({ categories, counts }: { categories: Category[]; counts: Record<string, number> }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? categories : categories.slice(0, 6);

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      <span className="text-sm text-muted-foreground mr-2">categories:</span>
      {visible.map((cat) => (
        <Link
          key={cat.id}
          href={`/playbooks?category=${cat.id}`}
          className="text-sm px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-muted-foreground hover:border-[#22d3ee] hover:text-[#22d3ee] transition-colors"
        >
          {cat.name}
          {counts[cat.id] ? <span className="ml-1 text-xs opacity-60">({counts[cat.id]})</span> : null}
        </Link>
      ))}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-sm px-3 py-1 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 text-[#22d3ee] hover:bg-[#22d3ee]/20 transition-colors cursor-pointer"
      >
        {expanded ? '← Show less' : 'View all →'}
      </button>
    </div>
  );
}
