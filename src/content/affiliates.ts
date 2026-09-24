import type { Affiliate } from '@/types/affiliate';

/*
 * Affiliate programs. Cards fill sponsor slots on playbook, category and blog
 * pages: paid sponsors always show first, and each page shows at most two
 * affiliates (one when a paid sponsor is present). Order here is priority
 * order within a topic.
 *
 * An entry shows up only once `trackingUrl` is set — paste the link from the
 * program's dashboard after approval. Readers click /go/<slug>, which logs an
 * "Affiliate Click" event and redirects to the tracking link.
 *
 * Terms below were checked on 2026-09-21 (see Affiliate_Opportunity_Research.md).
 */
export const affiliates: Affiliate[] = [
  {
    // 25% of payments for 12 months, 15% referee discount — Rewardful. Apply: koyfin.com/affiliate-program
    slug: 'koyfin',
    name: 'Koyfin',
    tagline: 'Market data, screens and financials to feed your Claude research workflows.',
    topics: ['finance'],
    pricing: 'Free plan · from $39/mo',
  },
  {
    // 25% of payments for the first 12 months (Rewardful, "Fiscal.ai Affiliate Campaign 3"). Approved 2026-09-24.
    slug: 'fiscal-ai',
    name: 'Fiscal.ai',
    trackingUrl: 'https://fiscal.ai/?via=daniel-marin',
    tagline: 'Institutional financial data you can connect to Claude through MCP.',
    topics: ['finance'],
    pricing: '7-day free trial',
  },
  {
    // Up to 15% (max $127) per All-Access sale, 30% audience coupon. Apply: corporatefinanceinstitute.com/affiliates
    slug: 'cfi',
    name: 'Corporate Finance Institute',
    tagline: 'Learn DCF, LBO and 3-statement modeling before you automate them.',
    topics: ['finance'],
  },
  {
    // 40% recurring 12 months + $1/signup on work emails, 25% on personal, 90-day cookie. Apply: reclaim.ai/affiliate-program
    slug: 'reclaim',
    name: 'Reclaim.ai',
    tagline: 'Auto-schedules the tasks and habits your Claude planner produces.',
    topics: ['productivity', 'consulting-strategy'],
    pricing: 'Free plan available',
  },
  {
    // 33%, "$22–40 per paid signup", referrals get 60 days free. Apply: docs.readwise.io/affiliates
    slug: 'readwise',
    name: 'Readwise',
    tagline: 'Collect your book and article highlights to turn into Claude skills.',
    topics: ['productivity'],
    pricing: '60-day free trial',
  },
  {
    // 30% one-time on Prime, 60-day cookie, Trackdesk. Apply: paperpal.com/affiliate-program
    slug: 'paperpal',
    name: 'Paperpal',
    tagline: 'Academic language and submission checks for drafts Claude helped structure.',
    topics: ['academic-research'],
    pricing: 'Free plan available',
  },
  {
    // PartnerStack (terms shown after approval). Apply: gammaapp.partnerstack.com/?group=affiliates
    slug: 'gamma',
    name: 'Gamma',
    tagline: 'Turn a Claude-written storyline into a finished slide deck.',
    topics: ['consulting-strategy'],
    pricing: 'Free plan available',
  },
  {
    // Up to 30% recurring for 12 months, 90-day window. Apply: fireflies.ai/affiliate
    slug: 'fireflies',
    name: 'Fireflies.ai',
    tagline: 'Meeting transcripts to feed Claude briefings and follow-ups.',
    topics: ['consulting-strategy', 'career-hr'],
    pricing: 'Free plan available',
  },
  {
    // 15% of sales, Impact, no brand bidding. Apply: jobscan.co/affiliates
    slug: 'jobscan',
    name: 'Jobscan',
    tagline: 'Score a Claude-tailored resume against the job posting’s ATS keywords.',
    topics: ['career-hr'],
    pricing: 'Free scans available',
  },
  {
    // 30% of every sale, 30-day cookie. Apply: speechify.com/affiliates
    slug: 'speechify',
    name: 'Speechify',
    tagline: 'Listen to papers and Claude’s output instead of reading them.',
    topics: ['productivity', 'academic-research'],
  },
];
