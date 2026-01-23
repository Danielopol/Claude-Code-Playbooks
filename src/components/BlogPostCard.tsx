'use client';

import Link from 'next/link';
import { Star } from 'lucide-react';
import { BlogPost, BlogCategory } from '@/types/blog';

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

interface BlogPostCardProps {
  post: BlogPost;
  variant?: 'carousel' | 'grid';
}

export function BlogPostCard({ post, variant = 'carousel' }: BlogPostCardProps) {
  return (
    <Link
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block ${variant === 'carousel' ? 'flex-shrink-0 w-[280px]' : 'w-full'}`}
    >
      <div className="relative bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden hover:border-[#f97316] transition-colors">
        {/* Featured Star */}
        {post.featured && (
          <div className="absolute top-3 right-3 z-10">
            <div className="w-8 h-8 rounded-full bg-[#f97316] flex items-center justify-center">
              <Star className="w-4 h-4 text-[#0d1117] fill-current" />
            </div>
          </div>
        )}

        {/* Thumbnail */}
        <div className="flex h-[120px]">
          {/* Left side - Claude Code Templates */}
          <div className="w-1/2 bg-[#0d1117] p-3 flex flex-col justify-center border-r border-[#30363d]">
            <span className="font-pixel text-[8px] text-[#f97316] leading-relaxed">
              CLAUDE
            </span>
            <span className="font-pixel text-[8px] text-[#f97316] leading-relaxed">
              CODE
            </span>
            <span className="font-pixel text-[8px] text-[#f97316] leading-relaxed">
              TEMPLATES
            </span>
          </div>

          {/* Right side - Category and Title */}
          <div className="w-1/2 bg-[#0d1117] p-3 flex flex-col justify-center">
            <span className={`inline-block self-start px-2 py-0.5 text-[10px] font-bold rounded mb-2 ${getCategoryColor(post.category)}`}>
              {getCategoryLabel(post.category)}
            </span>
            <span className="font-semibold text-sm text-foreground leading-tight">
              {post.thumbnailTitle || post.title.split(':')[0]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Reading Time */}
          <p className="text-xs text-muted-foreground mb-2">{post.readingTime}</p>

          {/* Title */}
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-[#f97316] transition-colors">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {post.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
