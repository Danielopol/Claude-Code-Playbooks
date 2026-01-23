import { Category } from '@/types/playbook';
import { getCategoryById } from '@/lib/categories';
import { cn } from '@/lib/utils';

interface CategoryBadgeProps {
  category: Category;
  className?: string;
}

const categoryColors: Record<Category, string> = {
  'file-organization': 'bg-[#22d3ee]/15 text-[#22d3ee] border-[#22d3ee]/30',
  'note-management': 'bg-[#a855f7]/15 text-[#a855f7] border-[#a855f7]/30',
  'task-management': 'bg-[#22c55e]/15 text-[#22c55e] border-[#22c55e]/30',
  'productivity': 'bg-[#fbbf24]/15 text-[#fbbf24] border-[#fbbf24]/30',
  'knowledge-management': 'bg-[#8b5cf6]/15 text-[#8b5cf6] border-[#8b5cf6]/30',
  'career-development': 'bg-[#06b6d4]/15 text-[#06b6d4] border-[#06b6d4]/30',
  'personal-development': 'bg-[#10b981]/15 text-[#10b981] border-[#10b981]/30',
  'education': 'bg-[#3b82f6]/15 text-[#3b82f6] border-[#3b82f6]/30',
  'research-writing': 'bg-[#6366f1]/15 text-[#6366f1] border-[#6366f1]/30',
  'market-research': 'bg-[#0ea5e9]/15 text-[#0ea5e9] border-[#0ea5e9]/30',
  'finance-accounting': 'bg-[#eab308]/15 text-[#eab308] border-[#eab308]/30',
  'finance': 'bg-[#84cc16]/15 text-[#84cc16] border-[#84cc16]/30',
  'marketing-content': 'bg-[#ec4899]/15 text-[#ec4899] border-[#ec4899]/30',
  'legal-compliance': 'bg-[#f43f5e]/15 text-[#f43f5e] border-[#f43f5e]/30',
  'hr-recruiting': 'bg-[#14b8a6]/15 text-[#14b8a6] border-[#14b8a6]/30',
  'creative-design': 'bg-[#f97316]/15 text-[#f97316] border-[#f97316]/30',
  'creative-writing': 'bg-[#d946ef]/15 text-[#d946ef] border-[#d946ef]/30',
  'developer-tools': 'bg-[#64748b]/15 text-[#64748b] border-[#64748b]/30',
};

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const categoryInfo = getCategoryById(category);
  const name = categoryInfo?.name || category;
  const colorClass = categoryColors[category] || 'bg-[#21262d] text-muted-foreground border-[#30363d]';

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider border',
        colorClass,
        className
      )}
    >
      {name}
    </span>
  );
}
