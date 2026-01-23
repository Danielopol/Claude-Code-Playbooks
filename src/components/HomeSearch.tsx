'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HomeSearchProps {
  className?: string;
}

export function HomeSearch({ className }: HomeSearchProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/playbooks?q=${encodeURIComponent(query.trim())}`);
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
          placeholder="Search playbooks..."
          className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
        />
        <button type="submit" className="ml-3 hover:text-[#22d3ee] transition-colors">
          <Search className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
