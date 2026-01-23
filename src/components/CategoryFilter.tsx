'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { categories } from '@/lib/categories';
import { Category } from '@/types/playbook';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  selectedCategory?: Category;
  className?: string;
}

export function CategoryFilter({ selectedCategory, className }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = (categoryId: Category | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId) {
      params.set('category', categoryId);
    } else {
      params.delete('category');
    }
    router.push(`/playbooks?${params.toString()}`);
  };

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      <button
        onClick={() => handleCategoryClick(null)}
        className={cn(
          'px-3 py-1.5 rounded-full text-sm border transition-all',
          !selectedCategory
            ? 'bg-[#22d3ee]/20 text-[#22d3ee] border-[#22d3ee]/50'
            : 'bg-[#161b22] border-[#30363d] text-muted-foreground hover:border-[#22d3ee] hover:text-foreground'
        )}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={cn(
            'px-3 py-1.5 rounded-full text-sm border transition-all',
            selectedCategory === category.id
              ? 'bg-[#22d3ee]/20 text-[#22d3ee] border-[#22d3ee]/50'
              : 'bg-[#161b22] border-[#30363d] text-muted-foreground hover:border-[#22d3ee] hover:text-foreground'
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
