import { affiliateHref, getAffiliate } from '@/lib/affiliates';
import { cn } from '@/lib/utils';

interface AffiliateLinkProps {
  /** Slug from src/content/affiliates.ts. */
  partner: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * In-content affiliate link, routed through /go/<partner>. If the program has
 * no tracking link (not approved yet, or removed), the text renders unlinked
 * rather than sending readers to a dead redirect.
 */
export function AffiliateLink({ partner, className, children }: AffiliateLinkProps) {
  if (!getAffiliate(partner)) return <>{children}</>;

  return (
    <a
      href={affiliateHref(partner)}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={cn('text-[#22d3ee] hover:underline font-medium', className)}
    >
      {children}
    </a>
  );
}

/** One-line disclosure to place near the first affiliate link in a post. */
export function AffiliateDisclosure({ className }: { className?: string }) {
  return (
    <p className={cn('text-xs text-muted-foreground', className)}>
      This post contains affiliate links. If you sign up through one, we may earn a commission at no extra cost to you.{' '}
      <a href="/terms#affiliate-links" className="underline hover:text-[#22d3ee]">
        How we handle this
      </a>
      .
    </p>
  );
}
