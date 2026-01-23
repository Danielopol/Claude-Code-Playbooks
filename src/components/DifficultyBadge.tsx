import { Difficulty } from '@/types/playbook';
import { cn } from '@/lib/utils';

interface DifficultyBadgeProps {
  difficulty: Difficulty;
  className?: string;
}

const difficultyConfig: Record<Difficulty, { label: string; className: string }> = {
  beginner: {
    label: 'Beginner',
    className: 'bg-[#22c55e]/15 text-[#22c55e] border-[#22c55e]/30',
  },
  intermediate: {
    label: 'Intermediate',
    className: 'bg-[#eab308]/15 text-[#eab308] border-[#eab308]/30',
  },
  advanced: {
    label: 'Advanced',
    className: 'bg-[#f97316]/15 text-[#f97316] border-[#f97316]/30',
  },
};

export function DifficultyBadge({ difficulty, className }: DifficultyBadgeProps) {
  // Normalize difficulty to lowercase to handle case variations (both Beginner and beginner work)
  const normalizedDifficulty = (difficulty?.toLowerCase?.() || 'beginner') as Difficulty;
  const config = difficultyConfig[normalizedDifficulty] ?? difficultyConfig.beginner;

  // Extra safety: if config is somehow undefined, use beginner
  const safeConfig = config ?? difficultyConfig.beginner;

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border',
        safeConfig.className,
        className
      )}
    >
      {safeConfig.label}
    </span>
  );
}
