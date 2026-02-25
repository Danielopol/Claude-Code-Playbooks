import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HomePaginationProps {
  currentPage: number;
  totalPages: number;
  className?: string;
}

function getPageHref(page: number): string {
  if (page === 1) return '/';
  return `/?page=${page}`;
}

export function HomePagination({ currentPage, totalPages, className }: HomePaginationProps) {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      // Show all pages if 7 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      // Show pages around current
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      // Always show last page
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className={cn('flex flex-col items-center gap-4 mt-8', className)}>
      {/* Pagination links */}
      <nav className="flex items-center gap-1 p-2 bg-[#161b22] border border-[#30363d] rounded-lg" aria-label="Pagination">
        {/* Previous link */}
        {currentPage === 1 ? (
          <span
            className="w-10 h-10 flex items-center justify-center rounded-md text-muted-foreground/50 cursor-not-allowed"
            aria-disabled="true"
          >
            <ChevronLeft className="h-4 w-4" />
          </span>
        ) : (
          <Link
            href={getPageHref(currentPage - 1)}
            className="w-10 h-10 flex items-center justify-center rounded-md text-muted-foreground hover:bg-[#21262d] hover:text-foreground transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </Link>
        )}

        {/* Page numbers */}
        {getPageNumbers().map((page, index) =>
          page === '...' ? (
            <span
              key={`ellipsis-${index}`}
              className="w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium text-muted-foreground cursor-default"
            >
              ...
            </span>
          ) : (
            <Link
              key={page}
              href={getPageHref(page as number)}
              className={cn(
                'w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium transition-colors',
                page === currentPage
                  ? 'bg-[#f97316] text-[#0d1117]'
                  : 'text-muted-foreground hover:bg-[#21262d] hover:text-foreground'
              )}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </Link>
          )
        )}

        {/* Next link */}
        {currentPage === totalPages ? (
          <span
            className="w-10 h-10 flex items-center justify-center rounded-md text-muted-foreground/50 cursor-not-allowed"
            aria-disabled="true"
          >
            <ChevronRight className="h-4 w-4" />
          </span>
        ) : (
          <Link
            href={getPageHref(currentPage + 1)}
            className="w-10 h-10 flex items-center justify-center rounded-md text-muted-foreground hover:bg-[#21262d] hover:text-foreground transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </nav>

      {/* Page indicator */}
      <p className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
}
