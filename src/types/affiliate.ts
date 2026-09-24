import type { TopicId } from '@/types/sponsor';

export interface Affiliate {
  /** Stable id. It is the /go/<slug> path and the click-event key, so don't rename it. */
  slug: string;
  name: string;
  /** One line for the card. Keep it under ~90 characters. */
  tagline: string;
  /**
   * Tracking link from the affiliate dashboard. Leave empty until the program
   * approves the application — entries without one are never shown.
   */
  trackingUrl?: string;
  /** Pages in these topics can show the card. */
  topics: TopicId[];
  /** Sponsor slugs this product competes with. Hidden on pages where any of them is shown. */
  competesWith?: string[];
  /** Optional, e.g. 'Free trial · from $39/mo'. */
  pricing?: string;
}
