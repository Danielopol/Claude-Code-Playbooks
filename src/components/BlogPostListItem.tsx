'use client';

import Link from 'next/link';
import { BlogPost, BlogCategory, BlogDifficulty } from '@/types/blog';

function getCategoryLabel(category: BlogCategory): string {
  const labels: Record<BlogCategory, string> = {
    agent: 'AGENT',
    mcp: 'MCP',
    tutorial: 'TUTORIAL',
    guide: 'GUIDE',
    news: 'NEWS',
  };
  return labels[category];
}

function getCategoryColor(category: BlogCategory): string {
  const colors: Record<BlogCategory, string> = {
    agent: 'bg-[#22d3ee] text-[#0d1117]',
    mcp: 'bg-[#a855f7] text-white',
    tutorial: 'bg-[#22c55e] text-[#0d1117]',
    guide: 'bg-[#f97316] text-[#0d1117]',
    news: 'bg-[#ec4899] text-white',
  };
  return colors[category];
}

function getDifficultyLabel(difficulty: BlogDifficulty): string {
  const labels: Record<BlogDifficulty, string> = {
    basic: 'Basic',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  };
  return labels[difficulty];
}

function getDifficultyColor(difficulty: BlogDifficulty): string {
  const colors: Record<BlogDifficulty, string> = {
    basic: 'bg-[#22c55e] text-[#0d1117]',
    intermediate: 'bg-[#f97316] text-[#0d1117]',
    advanced: 'bg-[#ef4444] text-white',
  };
  return colors[difficulty];
}

interface BlogPostListItemProps {
  post: BlogPost;
}

export function BlogPostListItem({ post }: BlogPostListItemProps) {
  return (
    <Link
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="flex gap-6 p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#f97316] transition-colors">
        {/* Thumbnail */}
        <div className="flex-shrink-0 w-[200px] h-[120px] rounded-lg overflow-hidden border border-[#30363d]">
          <div className="flex h-full">
            {/* Left side - Claude Code Templates */}
            <div className="w-1/2 bg-[#0d1117] p-2 flex flex-col justify-center border-r border-[#30363d]">
              <span className="font-pixel text-[6px] text-[#f97316] leading-relaxed">
                CLAUDE
              </span>
              <span className="font-pixel text-[6px] text-[#f97316] leading-relaxed">
                CODE
              </span>
              <span className="font-pixel text-[6px] text-[#f97316] leading-relaxed">
                TEMPLATES
              </span>
            </div>

            {/* Right side - Category and Title */}
            <div className="w-1/2 bg-[#0d1117] p-2 flex flex-col justify-center">
              <span className={`inline-block self-start px-1.5 py-0.5 text-[8px] font-bold rounded mb-1 ${getCategoryColor(post.category)}`}>
                {getCategoryLabel(post.category)}
              </span>
              <span className="font-semibold text-xs text-foreground leading-tight">
                {post.thumbnailTitle || post.title.split(':')[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Reading Time and Difficulty */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm text-muted-foreground border-l-2 border-[#f97316] pl-2">
              {post.readingTime}
            </span>
            <span className={`px-2 py-0.5 text-xs font-medium rounded ${getDifficultyColor(post.difficulty)}`}>
              {getDifficultyLabel(post.difficulty)}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-foreground mb-2 group-hover:text-[#f97316] transition-colors">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {post.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs bg-[#21262d] border border-[#30363d] rounded text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
