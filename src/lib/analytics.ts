'use client';

import posthog from 'posthog-js';

/**
 * Custom events (newsletter signups, sponsor clicks, install-command copies)
 * go to PostHog. Replaces `track` from @vercel/analytics, which only records
 * on Vercel-hosted deployments.
 *
 * A no-op until PostHogInit has run with a key, so missing configuration never
 * breaks a click handler.
 */
export function track(event: string, properties?: Record<string, string | number | boolean | null | undefined>) {
  try {
    if (posthog.__loaded) posthog.capture(event, properties);
  } catch {
    // Analytics must never break the UI.
  }
}
