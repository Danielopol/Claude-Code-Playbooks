import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SponsorLink } from '@/components/SponsorLink';
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

/**
 * Stacked sponsor cards. Every sponsor that qualifies for the page is shown —
 * no rotation, no exclusivity. Renders nothing when there are no sponsors.
 */
export function SponsorStack({ topics, withListings, className }: SponsorStackProps) {
  const stack = getSponsorStack({ topics, withListings });
  if (stack.length === 0) return null;

  return (
    <aside
      aria-label="Sponsors"
      className={cn('rounded-lg border border-[#30363d] bg-[#161b22] overflow-hidden', className)}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#30363d] text-[11px] uppercase tracking-wider">
        <span className="text-muted-foreground font-medium">Sponsored</span>
        <Link href="/advertise" className="text-muted-foreground/70 hover:text-[#22d3ee] transition-colors normal-case tracking-normal">
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
              className="flex items-center gap-3 px-4 py-3 hover:bg-[#1c2333] transition-colors group"
            >
              <SponsorLogo name={sponsor.name} logo={sponsor.logo} />
              <span className="flex-1 min-w-0 text-sm">
                <span className="font-semibold text-foreground">{sponsor.name}</span>
                <span className="text-muted-foreground"> — {sponsor.tagline}</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-[#22d3ee] shrink-0">
                Visit
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </SponsorLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
