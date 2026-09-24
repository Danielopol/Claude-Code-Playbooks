import { affiliates } from '@/content/affiliates';
import type { Affiliate } from '@/types/affiliate';
import type { TopicId } from '@/types/sponsor';

const MAX_WITHOUT_SPONSORS = 2;
const MAX_WITH_SPONSORS = 1;

export function getAffiliate(slug: string): Affiliate | undefined {
  return affiliates.find((a) => a.slug === slug && a.trackingUrl);
}

/**
 * Affiliate cards for a page, after its paid sponsors. Skips affiliates that
 * are themselves on the page as sponsors or that compete with one of them.
 */
export function getAffiliateStack({
  topics,
  sponsorSlugs,
}: {
  topics: TopicId[];
  sponsorSlugs: string[];
}): Affiliate[] {
  const max = sponsorSlugs.length > 0 ? MAX_WITH_SPONSORS : MAX_WITHOUT_SPONSORS;

  return affiliates
    .filter(
      (a) =>
        a.trackingUrl &&
        a.topics.some((t) => topics.includes(t)) &&
        !sponsorSlugs.includes(a.slug) &&
        !a.competesWith?.some((s) => sponsorSlugs.includes(s))
    )
    .slice(0, max);
}

/** Outbound link for an affiliate card. The /go route logs the click and redirects. */
export function affiliateHref(slug: string): string {
  return `/go/${slug}`;
}
