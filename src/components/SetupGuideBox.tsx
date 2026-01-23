'use client';

import { useState, useRef } from 'react';
import { ChevronUp, ChevronDown, Copy, Download, Check, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SetupGuideBoxProps {
  content: string;
  filename?: string;
  defaultExpanded?: boolean;
  isHtml?: boolean;
}

export function SetupGuideBox({
  content,
  filename = 'README.md',
  defaultExpanded = true,
  isHtml = false
}: SetupGuideBoxProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Strip HTML tags to get plain text for copy/download
  const getPlainText = () => {
    if (!isHtml) return content;
    const temp = document.createElement('div');
    temp.innerHTML = content;
    return temp.textContent || temp.innerText || '';
  };

  const handleCopy = async () => {
    try {
      const textToCopy = isHtml ? getPlainText() : content;
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = () => {
    const textToDownload = isHtml ? getPlainText() : content;
    const blob = new Blob([textToDownload], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="rounded-lg border border-[#30363d] bg-[#0d1117] overflow-hidden mb-8">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-[#22d3ee]" />
          <span className="font-mono text-sm text-foreground">{filename}</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border transition-all',
              'bg-[#21262d] text-muted-foreground border-[#30363d]',
              'hover:border-[#22d3ee] hover:text-[#22d3ee]'
            )}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Collapse
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Expand
              </>
            )}
          </button>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border transition-all',
              copied
                ? 'bg-[#22c55e]/20 text-[#22c55e] border-[#22c55e]/50'
                : 'bg-[#21262d] text-muted-foreground border-[#30363d] hover:border-[#22d3ee] hover:text-[#22d3ee]'
            )}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy
              </>
            )}
          </button>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border transition-all',
              'bg-[#21262d] text-muted-foreground border-[#30363d]',
              'hover:border-[#22c55e] hover:text-[#22c55e]'
            )}
          >
            <Download className="h-4 w-4" />
            Download
          </button>
        </div>
      </div>

      {/* Collapsible Content */}
      <div
        className={cn(
          'transition-all duration-300 ease-in-out overflow-hidden',
          isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div ref={contentRef} className="p-6 overflow-auto max-h-[600px]">
          {isHtml ? (
            <div
              className="prose prose-invert prose-sm max-w-none
                prose-headings:text-foreground prose-headings:font-semibold
                prose-h2:text-xl prose-h2:mt-6 prose-h2:mb-4 prose-h2:border-b prose-h2:border-[#30363d] prose-h2:pb-2
                prose-h3:text-lg prose-h3:mt-5 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-[#22d3ee] prose-a:no-underline hover:prose-a:underline
                prose-code:text-[#f97316] prose-code:bg-[#161b22] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-[#161b22] prose-pre:border prose-pre:border-[#30363d] prose-pre:rounded-lg
                prose-li:text-muted-foreground prose-li:marker:text-[#22d3ee]
                prose-strong:text-foreground
                prose-blockquote:border-l-[#22d3ee] prose-blockquote:bg-[#161b22] prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r
                prose-table:text-sm
                prose-th:bg-[#161b22] prose-th:border prose-th:border-[#30363d] prose-th:px-3 prose-th:py-2
                prose-td:border prose-td:border-[#30363d] prose-td:px-3 prose-td:py-2
              "
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <pre className="text-sm font-mono leading-relaxed">
              <code className="text-[#e6edf3] whitespace-pre-wrap">{content}</code>
            </pre>
          )}
        </div>
      </div>

      {/* Collapsed indicator */}
      {!isExpanded && (
        <div className="px-4 py-2 text-xs text-muted-foreground border-t border-[#30363d] bg-[#161b22]/50">
          Click "Expand" to view the setup guide
        </div>
      )}
    </div>
  );
}
