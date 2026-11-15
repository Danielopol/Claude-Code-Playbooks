'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
/*
 * Production builds send events through /ingest on our own domain, a reverse
 * proxy to PostHog in cloudflare-worker.ts, so ad blockers don't drop them.
 * `next dev` has no such route and talks to PostHog directly.
 */
const HOST =
  process.env.NODE_ENV === 'production'
    ? '/ingest'
    : process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';
// Where PostHog links (toolbar, docs) point; the proxy host can't serve those.
const UI_HOST = 'https://eu.posthog.com';

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
      ui_host: UI_HOST,
      persistence: 'memory',
      person_profiles: 'identified_only',
      capture_pageview: 'history_change',
      autocapture: false,
      disable_session_recording: true,
    });
  }, []);

  return null;
}
