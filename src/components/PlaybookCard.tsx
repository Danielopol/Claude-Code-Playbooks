import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { DifficultyBadge } from './DifficultyBadge';
import { CategoryBadge } from './CategoryBadge';
import { Clock, Bot, FileCode } from 'lucide-react';
import { Difficulty, Category } from '@/types/playbook';

interface PlaybookCardProps {
  slug: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  timeToSetup: string;
  tags?: string[];
}

export function PlaybookCard({
  slug,
  title,
  description,
  category,
  difficulty,
  timeToSetup,
  tags = [],
}: PlaybookCardProps) {
  return (
    <Link href={`/playbooks/${slug}`} className="block group">
      <Card className="h-full bg-[#161b22] border-[#30363d] card-terminal relative overflow-hidden">
        <CardContent className="p-5">
          {/* Category Badge - Top Right */}
          <div className="absolute top-4 right-4">
            <CategoryBadge category={category} />
          </div>

          {/* Icon */}
          <div className="w-10 h-10 rounded-lg bg-[#21262d] border border-[#30363d] flex items-center justify-center mb-4">
            <Bot className="h-5 w-5 text-muted-foreground group-hover:text-[#22d3ee] transition-colors" />
          </div>

          {/* Title */}
          <h3 className="font-semibold text-foreground mb-2 group-hover:text-[#22d3ee] transition-colors pr-20 line-clamp-1">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-[#30363d]">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>{timeToSetup}</span>
            </div>
            <DifficultyBadge difficulty={difficulty} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
