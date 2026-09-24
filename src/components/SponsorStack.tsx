import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SponsorLink } from '@/components/SponsorLink';
import { affiliateHref, getAffiliateStack } from '@/lib/affiliates';
import { getSponsorStack, withUtm } from '@/lib/sponsors';
import { cn } from '@/lib/utils';
import type { TopicId } from '@/types/sponsor';

export function SponsorLogo({ name, logo, size = 32 }: { name: string; logo?: string; size?: number }) {
  if (logo) {
    return (
      <Image
        src={logo}
        alt=""
        width={size}
        height={size}
        className="rounded-md shrink-0 bg-[#0d1117] object-contain"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size }}
      className="rounded-md shrink-0 bg-[#21262d] border border-[#30363d] flex items-center justify-center text-sm font-semibold text-[#22d3ee]"
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
}

interface SponsorStackProps {
  topics: TopicId[];
  /** Also include tool listings for these topics (category pages). */
  withListings?: boolean;
  className?: string;
}

const rowClass = 'flex items-center gap-3 px-4 py-3 hover:bg-[#1c2333] transition-colors group';
const headerClass =
  'flex items-center justify-between px-4 py-2 border-b border-[#30363d] text-[11px] uppercase tracking-wider';
const headerLinkClass = 'text-muted-foreground/70 hover:text-[#22d3ee] transition-colors normal-case tracking-normal';

function CardBody({ name, logo, tagline }: { name: string; logo?: string; tagline: string }) {
  return (
    <>
      <SponsorLogo name={name} logo={logo} />
      <span className="flex-1 min-w-0 text-sm">
        <span className="font-semibold text-foreground">{name}</span>
        <span className="text-muted-foreground"> — {tagline}</span>
      </span>
      <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-[#22d3ee] shrink-0">
        Visit
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </>
  );
}

/**
 * Stacked sponsor cards. Every sponsor that qualifies for the page is shown —
 * no rotation, no exclusivity. Affiliate cards follow the paid ones to fill
 * the slot. Renders nothing when there is neither.
 */
export function SponsorStack({ topics, withListings, className }: SponsorStackProps) {
  const stack = getSponsorStack({ topics, withListings });
  const affiliateStack = getAffiliateStack({ topics, sponsorSlugs: stack.map((s) => s.slug) });
  if (stack.length === 0 && affiliateStack.length === 0) return null;

  return (
    <aside
      aria-label={stack.length > 0 ? 'Sponsors' : 'Recommended tools'}
      className={cn('rounded-lg border border-[#30363d] bg-[#161b22] overflow-hidden', className)}
    >
      {stack.length > 0 && (
        <>
          <div className={headerClass}>
            <span className="text-muted-foreground font-medium">Sponsored</span>
            <Link href="/advertise" className={headerLinkClass}>
              Advertise here
            </Link>
          </div>
          <ul className="divide-y divide-[#30363d]">
            {stack.map((sponsor) => (
              <li key={sponsor.slug}>
                <SponsorLink
                  href={withUtm(sponsor.url, sponsor.placement)}
                  sponsor={sponsor.slug}
                  placement={sponsor.placement}
                  className={rowClass}
                >
                  <CardBody name={sponsor.name} logo={sponsor.logo} tagline={sponsor.tagline} />
                </SponsorLink>
              </li>
            ))}
          </ul>
        </>
      )}
      {affiliateStack.length > 0 && (
        <>
          <div className={cn(headerClass, stack.length > 0 && 'border-t')}>
            <span className="text-muted-foreground font-medium">Tools for this workflow</span>
            <Link href="/terms#affiliate-links" className={headerLinkClass}>
              Affiliate links
            </Link>
          </div>
          <ul className="divide-y divide-[#30363d]">
            {affiliateStack.map((affiliate) => (
              <li key={affiliate.slug}>
                <a
                  href={affiliateHref(affiliate.slug)}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className={rowClass}
                >
                  <CardBody name={affiliate.name} tagline={affiliate.tagline} />
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  );
}
