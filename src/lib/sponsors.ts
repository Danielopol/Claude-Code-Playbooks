import { sponsors } from '@/content/sponsors';
import type { Category } from '@/types/playbook';
import type { DateRange, Placement, Sponsor, TopicId } from '@/types/sponsor';

export const TOPICS: Record<TopicId, { name: string; categories: Category[] }> = {
  'writing-content': {
    name: 'Writing, content & creative',
    categories: ['marketing-content', 'creative-design', 'creative-writing', 'media-production', 'communications'],
  },
  'academic-research': {
    name: 'Academic research & education',
    categories: ['academic-research', 'research-writing', 'education', 'bio-research'],
  },
  finance: {
    name: 'Finance, private equity & investing',
    categories: ['finance-accounting', 'finance', 'equity-research', 'investment-banking', 'private-equity', 'wealth-management', 'trading-markets'],
  },
  'consulting-strategy': {
    name: 'Consulting & strategy',
    categories: ['executive-strategy', 'market-research', 'sales-revenue', 'product-management', 'project-management', 'operations-compliance', 'data-reporting', 'customer-support'],
  },
  productivity: {
    name: 'Productivity & knowledge',
    categories: ['productivity', 'knowledge-management', 'note-management', 'task-management', 'file-organization'],
  },
  'health-wellness': {
    name: 'Health & wellness',
    categories: ['personal-development'],
  },
  'career-hr': {
    name: 'Career & HR',
    categories: ['career-development', 'hr-recruiting'],
  },
  legal: {
    name: 'Legal & compliance',
    categories: ['legal-compliance'],
  },
  'developer-tools': {
    name: 'Developer tools',
    categories: ['developer-tools'],
  },
};

export interface PlacedSponsor extends Sponsor {
  placement: Placement;
}

const PLACEMENT_ORDER: Placement[] = ['site-wide', 'category', 'tool-listing'];

function isActive(range: DateRange | undefined, today: string): boolean {
  return !!range && range.start <= today && today <= range.end;
}

function todayUtc(): string {
  return new Date().toISOString().slice(0, 10);
}

export function getTopicsForCategory(category: Category): TopicId[] {
  return (Object.keys(TOPICS) as TopicId[]).filter((id) => TOPICS[id].categories.includes(category));
}

/**
 * Sponsors to stack on one page, highest tier first, each sponsor once.
 * Site-wide sponsors show everywhere; category sponsors where the page's topic
 * matches; tool listings only where `withListings` is set (category pages).
 */
export function getSponsorStack({
  topics,
  withListings = false,
}: {
  topics: TopicId[];
  withListings?: boolean;
}): PlacedSponsor[] {
  const today = todayUtc();
  const placed: PlacedSponsor[] = [];

  for (const sponsor of sponsors) {
    let placement: Placement | null = null;

    if (isActive(sponsor.siteWide, today)) {
      placement = 'site-wide';
    } else if (isActive(sponsor.category, today) && sponsor.category!.topics.some((t) => topics.includes(t))) {
      placement = 'category';
    } else if (withListings && isActive(sponsor.listing, today) && sponsor.topics.some((t) => topics.includes(t))) {
      placement = 'tool-listing';
    }

    if (placement) placed.push({ ...sponsor, placement });
  }

  return sortByPlacement(placed);
}

/**
 * Everything currently paid for appears in the directory — a tool listing, or
 * any sponsorship, which includes directory presence.
 */
export function getDirectoryTools(): PlacedSponsor[] {
  const today = todayUtc();
  const placed: PlacedSponsor[] = [];

  for (const sponsor of sponsors) {
    const placement: Placement | null = isActive(sponsor.siteWide, today)
      ? 'site-wide'
      : isActive(sponsor.category, today)
        ? 'category'
        : isActive(sponsor.listing, today)
          ? 'tool-listing'
          : null;

    if (placement) placed.push({ ...sponsor, placement });
  }

  return sortByPlacement(placed);
}

function sortByPlacement(list: PlacedSponsor[]): PlacedSponsor[] {
  return list.sort(
    (a, b) =>
      PLACEMENT_ORDER.indexOf(a.placement) - PLACEMENT_ORDER.indexOf(b.placement) ||
      a.name.localeCompare(b.name)
  );
}

/** Tags outbound sponsor links so sponsors see our traffic in their own analytics. */
export function withUtm(url: string, placement: Placement | 'directory'): string {
  try {
    const u = new URL(url);
    if (!u.searchParams.has('utm_source')) {
      u.searchParams.set('utm_source', 'claudecodehq.com');
      u.searchParams.set('utm_medium', 'sponsored');
      u.searchParams.set('utm_campaign', placement);
    }
    return u.toString();
  } catch {
    return url;
  }
}
