// Sellable topics. Each groups several playbook categories (see TOPICS in
// src/lib/sponsors.ts) and a set of blog posts (see src/lib/blog-audience.ts).
export type TopicId =
  | 'writing-content'
  | 'academic-research'
  | 'finance'
  | 'consulting-strategy'
  | 'productivity'
  | 'health-wellness'
  | 'career-hr'
  | 'legal'
  | 'developer-tools';

/** Inclusive date range, YYYY-MM-DD. */
export interface DateRange {
  start: string;
  end: string;
}

export type Placement = 'site-wide' | 'category' | 'tool-listing';

export interface Sponsor {
  /** Stable id. Shows up in click analytics, so don't rename it mid-campaign. */
  slug: string;
  name: string;
  /** One line for sponsor cards. Keep it under ~90 characters. */
  tagline: string;
  /** Two or three sentences for the tools directory. */
  description: string;
  url: string;
  /** Path under /public, e.g. '/sponsors/acme.png'. Square, at least 96×96. */
  logo?: string;
  /** What the tool is for. Drives the directory filter and category pages. */
  topics: TopicId[];
  /** Optional, e.g. 'Free plan · from $12/mo'. */
  pricing?: string;

  /** Tool Listing: the /tools directory plus matching category pages. */
  listing?: DateRange;
  /** Site-wide: every playbook and guide. */
  siteWide?: DateRange;
  /** Category Sponsor: every playbook and guide in the given topics. */
  category?: DateRange & { topics: TopicId[] };
}
