'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

/**
 * Page views and custom events via PostHog (replaces Vercel Web Analytics).
 *
 * persistence: 'memory' keeps it cookieless, as Vercel Analytics was: no
 * cookies or localStorage, so no consent banner is needed, at the cost of
 * counting a returning visitor as new on each visit.
 */
export function PostHogInit() {
  useEffect(() => {
    if (!KEY || posthog.__loaded) return;
    posthog.init(KEY, {
      api_host: HOST,
      persistence: 'memory',
      person_profiles: 'identified_only',
      capture_pageview: 'history_change',
      autocapture: false,
      disable_session_recording: true,
    });
  }, []);

  return null;
}
