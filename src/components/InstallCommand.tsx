'use client';

import { useState } from 'react';
import { track } from '@vercel/analytics';
import { Check, Copy, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * One-line install via the `ccplaybooks` CLI (cli/ in this repo, published to
 * npm). Deliberately secondary to Copy/Download: most visitors aren't
 * terminal users. Copies are tracked so we can see whether the CLI earns its
 * place on the page.
 */
export function InstallCommand({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);
  const command = `npx ccplaybooks add ${slug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      track('Install Command Copy', { slug });
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
        <Terminal className="h-4 w-4" />
        Or install from your terminal:
      </span>
      <div className="flex min-w-0 max-w-full items-center rounded-md border border-[#30363d] bg-[#0d1117]">
        {/* Long slugs scroll inside the box on phones; the scrollbar is hidden
            because the copy button always copies the full command anyway. */}
        <code className="min-w-0 overflow-x-auto whitespace-nowrap px-3 py-1 font-mono text-[13px] text-[#e6edf3] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {command}
        </code>
        <button
          onClick={handleCopy}
          aria-label={copied ? 'Copied' : 'Copy install command'}
          className={cn(
            'shrink-0 self-stretch border-l border-[#30363d] px-2 transition-colors',
            copied ? 'text-[#22c55e]' : 'text-muted-foreground hover:text-[#22d3ee]'
          )}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
