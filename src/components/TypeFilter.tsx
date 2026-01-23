'use client';

import { cn } from '@/lib/utils';

interface FilterOption {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
  color?: string;
}

interface TypeFilterProps {
  options: FilterOption[];
  selected: string;
  onSelect: (id: string) => void;
  className?: string;
}

export function TypeFilter({
  options,
  selected,
  onSelect,
  className,
}: TypeFilterProps) {
  return (
    <div className={cn('flex items-center gap-2 flex-wrap', className)}>
      {options.map((option) => {
        const isSelected = selected === option.id;
        return (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border transition-all',
              isSelected
                ? option.color || 'bg-[#22d3ee]/20 text-[#22d3ee] border-[#22d3ee]/50'
                : 'bg-[#161b22] border-[#30363d] text-muted-foreground hover:border-[#22d3ee] hover:text-foreground'
            )}
          >
            {option.icon && <span className="w-4 h-4">{option.icon}</span>}
            {option.label}
            {option.count !== undefined && (
              <span className="text-xs opacity-70">({option.count})</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
