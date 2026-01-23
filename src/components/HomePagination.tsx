'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HomePaginationProps {
  currentPage: number;
  totalPages: number;
  className?: string;
}

export function HomePagination({ currentPage, totalPages, className }: HomePaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete('page');
    } else {
      params.set('page', page.toString());
    }
    const queryString = params.toString();
    router.push(queryString ? `/?${queryString}` : '/');
  };

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
      {/* Pagination buttons */}
      <div className="flex items-center gap-1 p-2 bg-[#161b22] border border-[#30363d] rounded-lg">
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={cn(
            'w-10 h-10 flex items-center justify-center rounded-md transition-colors',
            currentPage === 1
              ? 'text-muted-foreground/50 cursor-not-allowed'
              : 'text-muted-foreground hover:bg-[#21262d] hover:text-foreground'
          )}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Page numbers */}
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && handlePageChange(page)}
            disabled={page === '...'}
            className={cn(
              'w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium transition-colors',
              page === currentPage
                ? 'bg-[#f97316] text-[#0d1117]'
                : page === '...'
                ? 'text-muted-foreground cursor-default'
                : 'text-muted-foreground hover:bg-[#21262d] hover:text-foreground'
            )}
          >
            {page}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={cn(
            'w-10 h-10 flex items-center justify-center rounded-md transition-colors',
            currentPage === totalPages
              ? 'text-muted-foreground/50 cursor-not-allowed'
              : 'text-muted-foreground hover:bg-[#21262d] hover:text-foreground'
          )}
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Page indicator */}
      <p className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
}
