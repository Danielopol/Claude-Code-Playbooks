'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SponsorLink } from '@/components/SponsorLink';
import { cn } from '@/lib/utils';

export interface DirectoryTool {
  slug: string;
  name: string;
  description: string;
  href: string;
  logoNode: React.ReactNode;
  pricing?: string;
  topics: { id: string; name: string }[];
}

const chipClass = 'px-3 py-1 rounded-full border text-xs transition-colors';

export function ToolsDirectory({ tools }: { tools: DirectoryTool[] }) {
  const [topic, setTopic] = useState<string | null>(null);

  // Topics that actually have tools, in first-seen order.
  const topics = [...new Map(tools.flatMap((t) => t.topics).map((t) => [t.id, t])).values()];
  const visible = topic ? tools.filter((t) => t.topics.some((x) => x.id === topic)) : tools;

  return (
    <div>
      {topics.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filter by topic">
          <button
            type="button"
            onClick={() => setTopic(null)}
            aria-pressed={topic === null}
            className={cn(chipClass, topic === null ? 'border-[#22d3ee] text-[#22d3ee] bg-[#22d3ee]/10' : 'border-[#30363d] text-muted-foreground hover:text-foreground')}
          >
            All ({tools.length})
          </button>
          {topics.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTopic(t.id)}
              aria-pressed={topic === t.id}
              className={cn(chipClass, topic === t.id ? 'border-[#22d3ee] text-[#22d3ee] bg-[#22d3ee]/10' : 'border-[#30363d] text-muted-foreground hover:text-foreground')}
            >
              {t.name} ({tools.filter((x) => x.topics.some((y) => y.id === t.id)).length})
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {visible.map((tool) => (
          <article key={tool.slug} id={tool.slug} className="flex flex-col p-5 bg-[#161b22] border border-[#30363d] rounded-lg scroll-mt-20">
            <div className="flex items-start gap-3 mb-3">
              {tool.logoNode}
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-foreground leading-tight">{tool.name}</h2>
                {tool.pricing && <p className="text-xs text-muted-foreground mt-0.5">{tool.pricing}</p>}
              </div>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70 border border-[#30363d] rounded px-1.5 py-0.5 shrink-0">
                Sponsored
              </span>
            </div>
            <p className="text-sm text-muted-foreground flex-1 mb-4">{tool.description}</p>
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {tool.topics.map((t) => (
                  <span key={t.id} className="text-xs bg-[#21262d] text-muted-foreground px-2 py-0.5 rounded border border-[#30363d]">
                    {t.name}
                  </span>
                ))}
              </div>
              <SponsorLink
                href={tool.href}
                sponsor={tool.slug}
                placement="directory"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#22d3ee] hover:underline shrink-0"
              >
                Visit
                <ArrowUpRight className="h-4 w-4" />
              </SponsorLink>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
