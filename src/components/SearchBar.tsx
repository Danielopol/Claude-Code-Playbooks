'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  autoSearch?: boolean; // true = search on keystroke, false = search on Enter only
}

export function SearchBar({
  className,
  placeholder = 'Search playbooks...',
  autoSearch = false,
}: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const isInitialMount = useRef(true);

  // Auto-search mode: update URL on keystroke (for /playbooks page)
  useEffect(() => {
    if (!autoSearch) return;

    // Skip the effect on initial mount to preserve URL query
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const debounce = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (query) {
        params.set('q', query);
      } else {
        params.delete('q');
      }
      router.push(`/playbooks?${params.toString()}`);
    }, 300);

    return () => clearTimeout(debounce);
  }, [query, router, searchParams, autoSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!autoSearch && query) {
      router.push(`/playbooks?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn('relative', className)}>
      <div className="flex items-center bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-2.5 focus-within:border-[#22d3ee] focus-within:ring-1 focus-within:ring-[#22d3ee]/20 transition-all">
        <span className="text-[#22d3ee] mr-3 font-bold">&gt;</span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
        />
        <Search className="h-4 w-4 text-muted-foreground ml-3" />
      </div>
    </form>
  );
}
