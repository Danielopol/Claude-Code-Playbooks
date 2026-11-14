/**
 * Server-side PostHog event, sent straight to the capture endpoint with fetch
 * (no SDK, so it runs the same on Node and in a Cloudflare Worker).
 *
 * Used for affiliate clicks in /go/[partner], which are logged on the server so
 * ad blockers can't hide them. Anonymous: a fresh id per event and no person
 * profile. Silently does nothing without NEXT_PUBLIC_POSTHOG_KEY.
 */
const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

export async function trackServer(event: string, properties: Record<string, string> = {}): Promise<void> {
  if (!KEY) return;
  try {
    await fetch(`${HOST}/i/v0/e/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: KEY,
        event,
        distinct_id: crypto.randomUUID(),
        properties: { ...properties, $process_person_profile: false },
      }),
      signal: AbortSignal.timeout(3000),
    });
  } catch {
    // A lost analytics event must never break the redirect.
  }
}
