/*
 * Live audience numbers for /advertise, read from the Vercel Web Analytics API
 * so the rate card never quotes stale traffic.
 *
 * Setup: create a Vercel access token scoped to the team that owns this
 * project, then add it in Project → Settings → Environment Variables as
 * VERCEL_ANALYTICS_TOKEN (Production). Never prefix it with NEXT_PUBLIC_ — it
 * grants API access to the team and must stay server-side.
 *
 * Optional overrides: VERCEL_ANALYTICS_PROJECT_ID, VERCEL_ANALYTICS_TEAM_ID.
 *
 * Without a token every call returns null and the page falls back to the last
 * hand-checked numbers, so a missing or expired token degrades quietly.
 *
 * Vercel bills Web Analytics per collected event, not per query, so these
 * requests are free; they are cached for an hour to keep the page fast.
 */

const ENDPOINT = 'https://api.vercel.com/v1/query/web-analytics/visits/aggregate';

const PROJECT_ID = process.env.VERCEL_ANALYTICS_PROJECT_ID || 'prj_UZt8QD4udesfplzc3SBeBS9uO3Ca';
const TEAM_ID = process.env.VERCEL_ANALYTICS_TEAM_ID || 'team_ZUSmsiPG52CtaPkpauGa723r';

const WINDOW_DAYS = 30;
const CACHE_SECONDS = 3600;
/* A cold function running three 30-day queries needs room; 8s was too tight
 * and a timed-out render baked the fallback numbers in until the next one. */
const TIMEOUT_MS = 20_000;
const ATTEMPTS = 2;
/** The API caps grouped results at 100 rows and buckets the rest as "Others". */
const MAX_ROWS = 100;

/*
 * Countries advertisers price on. Everything else still counts toward the
 * headline total — roughly a fifth of raw visitors are low-engagement
 * datacenter traffic (Singapore, China), which is exactly why the tier-1 share
 * is published next to the total rather than instead of it.
 */
const TIER_ONE = new Set([
  'US', 'GB', 'CA', 'AU', 'DE', 'NL', 'CH', 'SE', 'NO', 'DK', 'IE', 'NZ', 'AT', 'BE', 'FI', 'FR', 'IT', 'ES',
]);

/** google.com, google.de, google.com.hk — but not gemini/mail/docs.google.com. */
const GOOGLE_SEARCH = /^google\.[a-z.]+$/;

interface Row {
  country?: string;
  referrerHostname?: string;
  pageviews?: number;
  visitors?: number;
}

export interface LiveAudience {
  visitors: number;
  pageviews: number;
  /** Percentage points, already rounded. */
  tier1Share: number;
  /** null when the referrer query failed — never render it as 0%. */
  googleShare: number | null;
  /** Percent change in visitors against the previous 30 days; null if unknown. */
  growth: number | null;
  since: Date;
  until: Date;
}

async function attempt(by: string, since: Date, until: Date, token: string, attempt: number) {
  const url = new URL(ENDPOINT);
  url.searchParams.set('projectId', PROJECT_ID);
  if (TEAM_ID) url.searchParams.set('teamId', TEAM_ID);
  url.searchParams.set('by', by);
  url.searchParams.set('since', since.toISOString());
  url.searchParams.set('until', until.toISOString());
  url.searchParams.set('limit', String(MAX_ROWS));
  // Distinct URL per attempt, so a retry can't be served a cached failure.
  if (attempt > 0) url.searchParams.set('_retry', String(attempt));

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    signal: AbortSignal.timeout(TIMEOUT_MS),
    next: { revalidate: CACHE_SECONDS },
  });

  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

  const body = await res.json();
  return Array.isArray(body?.data) ? (body.data as Row[]) : null;
}

async function query(by: string, since: Date, until: Date, token: string): Promise<Row[] | null> {
  for (let i = 0; i < ATTEMPTS; i++) {
    try {
      return await attempt(by, since, until, token, i);
    } catch (error) {
      const last = i === ATTEMPTS - 1;
      console.error(
        `Vercel Analytics query (by=${by}) attempt ${i + 1}/${ATTEMPTS} failed:`,
        error instanceof Error ? error.message : error
      );
      if (last) return null;
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }

  return null;
}

const sum = (rows: Row[], field: 'visitors' | 'pageviews') =>
  rows.reduce((total, row) => total + (row[field] ?? 0), 0);

export async function getLiveAudience(): Promise<LiveAudience | null> {
  const token = process.env.VERCEL_ANALYTICS_TOKEN;
  if (!token) return null;

  /* Snapped to the hour so the query URL is stable within it: the cached
   * response is reused instead of re-queried on every regeneration, and the
   * rendered page stays identical between renders (identical output costs no
   * ISR writes). */
  const until = new Date(Math.floor(Date.now() / 3600_000) * 3600_000);
  const since = new Date(until.getTime() - WINDOW_DAYS * 86400_000);
  const previousSince = new Date(since.getTime() - WINDOW_DAYS * 86400_000);

  const [countries, referrers, previousCountries] = await Promise.all([
    query('country', since, until, token),
    query('referrerHostname', since, until, token),
    query('country', previousSince, since, token),
  ]);

  // The country breakdown carries the headline totals, so without it there is
  // nothing to show. A missing referrer or previous window only drops one line.
  if (!countries || countries.length === 0) return null;

  const visitors = sum(countries, 'visitors');
  if (visitors === 0) return null;

  const tier1 = sum(countries.filter((row) => row.country && TIER_ONE.has(row.country)), 'visitors');
  const google = referrers
    ? sum(referrers.filter((row) => row.referrerHostname && GOOGLE_SEARCH.test(row.referrerHostname)), 'visitors')
    : null;

  const previousVisitors = previousCountries ? sum(previousCountries, 'visitors') : 0;

  return {
    visitors,
    pageviews: sum(countries, 'pageviews'),
    tier1Share: Math.round((tier1 / visitors) * 100),
    googleShare: google === null ? null : Math.round((google / visitors) * 100),
    growth: previousVisitors > 0 ? Math.round(((visitors - previousVisitors) / previousVisitors) * 100) : null,
    since,
    until,
  };
}
