'use client';

import { track } from '@vercel/analytics';

interface SponsorLinkProps {
  href: string;
  sponsor: string;
  placement: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Outbound sponsor link. rel="sponsored" keeps paid links out of Google's link
 * graph, and each click is logged as a Vercel event — the source for the
 * monthly click report sponsors are promised.
 */
export function SponsorLink({ href, sponsor, placement, className, children }: SponsorLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener"
      className={className}
      onClick={() => track('Sponsor Click', { sponsor, placement, page: window.location.pathname })}
    >
      {children}
    </a>
  );
}
