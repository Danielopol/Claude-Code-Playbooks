'use client';

import { useRef, useState } from 'react';
import { Check, ChevronDown, ChevronUp, Copy, Download, FileCode, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InstallCommand } from '@/components/InstallCommand';
import { cn } from '@/lib/utils';

interface TemplateViewerProps {
  slug: string;
  /** The first few lines of the template, rendered server-side. */
  preview: string;
  /** Whether the template has more than the preview shows. */
  truncated: boolean;
  /** Line count of the full template, for the "Show full template" label. */
  totalLines: number;
}

/**
 * Most templates are republished verbatim from public GitHub repos. Rendering
 * them in full put that copied text in the page HTML four times (the <pre>
 * plus three props in the RSC payload), so Google treated the playbook as a
 * duplicate of its source and left it "crawled - currently not indexed".
 *
 * Only a short preview ships in the HTML. The full text is fetched from
 * public/templates/{slug}.md when a visitor expands, copies or downloads —
 * crawlers don't click, so it never becomes part of the indexed page.
 */
export function TemplateViewer({ slug, preview, truncated, totalLines }: TemplateViewerProps) {
  const [full, setFull] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const pending = useRef<Promise<string> | null>(null);

  const loadFull = () => {
    if (full !== null) return Promise.resolve(full);
    if (!pending.current) {
      setLoading(true);
      pending.current = fetch(`/templates/${encodeURIComponent(slug)}.md`)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.text();
        })
        .then((text) => {
          setFull(text);
          setError(false);
          return text;
        })
        .catch((err) => {
          pending.current = null;
          setError(true);
          throw err;
        })
        .finally(() => setLoading(false));
    }
    return pending.current;
  };

  const handleToggle = async () => {
    if (expanded) {
      setExpanded(false);
      return;
    }
    try {
      await loadFull();
      setExpanded(true);
    } catch (err) {
      console.error('Failed to load template:', err);
    }
  };

  const handleCopy = async () => {
    try {
      // Safari drops clipboard access if the write happens after an await, so
      // hand it the pending fetch as a promise inside the ClipboardItem.
      if (full === null && typeof ClipboardItem !== 'undefined' && navigator.clipboard.write) {
        const blob = loadFull().then((text) => new Blob([text], { type: 'text/plain' }));
        try {
          await navigator.clipboard.write([new ClipboardItem({ 'text/plain': blob })]);
        } catch {
          // Browsers without promise-valued ClipboardItem support land here.
          await navigator.clipboard.writeText(await loadFull());
        }
      } else {
        await navigator.clipboard.writeText(await loadFull());
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = async () => {
    try {
      const text = await loadFull();
      const blob = new Blob([text], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'CLAUDE.md';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to download:', err);
    }
  };

  const shown = expanded && full !== null ? full : preview;

  return (
    <div className="rounded-lg border border-[#30363d] bg-[#161b22] mb-8">
      <div className="px-4 sm:px-6 py-4 border-b border-[#30363d]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-base font-semibold flex items-center gap-2">
            <FileCode className="h-4 w-4 text-[#f97316]" />
            CLAUDE.md Template
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className={cn(
                'inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border transition-all',
                copied
                  ? 'bg-[#22c55e]/20 text-[#22c55e] border-[#22c55e]/50'
                  : 'bg-[#161b22] text-muted-foreground border-[#30363d] hover:border-[#22d3ee] hover:text-[#22d3ee]'
              )}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="bg-[#161b22] border-[#30363d] hover:border-[#22c55e] hover:text-[#22c55e] transition-colors"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          <a href="/getting-started" className="text-[#22d3ee] hover:underline font-medium">New here? 3-minute setup guide &rarr;</a>
          {' '}<span className="text-muted-foreground/50">|</span>{' '}
          Already set up? Copy the template below.
        </p>
        <InstallCommand slug={slug} />
      </div>
      <div className="p-4">
        <div className="bg-[#0d1117] rounded-lg border border-[#30363d] max-h-[400px] overflow-auto">
          <pre className="p-4 text-sm">
            <code className="text-[#e6edf3] whitespace-pre-wrap">{shown}</code>
          </pre>
        </div>
        {truncated && (
          <button
            onClick={handleToggle}
            disabled={loading}
            className="mt-3 inline-flex items-center gap-1.5 text-sm text-[#22d3ee] hover:underline disabled:opacity-60"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : expanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
            {expanded ? 'Show less' : `Show full template (${totalLines} lines)`}
          </button>
        )}
        {error && (
          <p className="mt-2 text-sm text-red-400">
            Couldn&apos;t load the template.{' '}
            <a href={`/templates/${slug}.md`} className="underline">Open it directly</a>.
          </p>
        )}
      </div>
    </div>
  );
}
