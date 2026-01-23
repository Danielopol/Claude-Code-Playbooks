'use client';

import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TerminalSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function TerminalSearch({
  value,
  onChange,
  placeholder = 'Search...',
  className,
}: TerminalSearchProps) {
  return (
    <div className={cn('max-w-2xl mx-auto', className)}>
      <div className="relative flex items-center bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 focus-within:border-[#22d3ee] focus-within:ring-1 focus-within:ring-[#22d3ee]/20 transition-all">
        <span className="text-[#22d3ee] mr-3 font-bold">&gt;</span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
        />
        <Search className="h-4 w-4 text-muted-foreground ml-3" />
      </div>
    </div>
  );
}
