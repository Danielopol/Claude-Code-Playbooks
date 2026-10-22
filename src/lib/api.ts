import { NextResponse } from 'next/server';
import { Playbook } from '@/types/playbook';

/**
 * Shared shapes and helpers for the public read-only API under /api/v1.
 *
 * The API exists so playbooks can be fetched from a command line (the
 * `ccplaybooks` CLI) or by other tools, instead of only through the Download
 * button. It is deliberately unauthenticated and GET-only: everything it
 * returns is already public on the site.
 *
 * URLs in responses are absolute and always point at production, matching
 * llms.txt and the sitemap — the static routes are rendered at build time,
 * where there is no request host to derive them from.
 */
export const BASE_URL = 'https://www.claudecodehq.com';
export const API_VERSION = 'v1';

/**
 * Attribution sits on every playbook in the response, not in a separate
 * endpoint. Provenance differs per playbook (see /licensing), so a client that
 * copies a template should carry its source with it.
 */
export interface ApiPlaybookSummary {
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  timeToSetup: string;
  tags: string[];
  createdAt: string;
  updatedAt?: string;
  attribution: {
    author: string;
    sourceUrl?: string;
  };
  links: {
    page: string;
    template: string;
    api: string;
  };
}

export interface ApiPlaybookDetail extends ApiPlaybookSummary {
  seoHook?: string;
  targetAudience?: string;
  exampleUseCase?: string;
  template: string | null;
}

export function toSummary(p: Playbook): ApiPlaybookSummary {
  return {
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    difficulty: p.difficulty,
    timeToSetup: p.timeToSetup,
    tags: p.tags,
    createdAt: p.createdAt,
    ...(p.updatedAt && { updatedAt: p.updatedAt }),
    attribution: {
      author: p.author,
      ...(p.sourceUrl && { sourceUrl: p.sourceUrl }),
    },
    links: {
      page: `${BASE_URL}/playbooks/${p.slug}`,
      template: `${BASE_URL}/templates/${encodeURIComponent(p.slug)}.md`,
      api: `${BASE_URL}/api/${API_VERSION}/playbooks/${p.slug}`,
    },
  };
}

export function toDetail(p: Playbook): ApiPlaybookDetail {
  return {
    ...toSummary(p),
    seoHook: p.seoHook,
    targetAudience: p.targetAudience,
    exampleUseCase: p.exampleUseCase,
    template: p.claudeMdTemplate ?? null,
  };
}

const SUFFIXES = ['ations', 'ation', 'ings', 'ing', 'ers', 'er', 'es', 'ed', 'e', 's'];

/**
 * Crude suffix stripping so word forms meet: "automation" and "automate" both
 * become "automat", "invoices" becomes "invoic". Matching is substring-based,
 * so the stem only has to be a prefix of the word in the text. Short words are
 * left alone ("tax", "notes" would otherwise over-match).
 */
function stem(term: string): string {
  if (term.length < 6) return term;
  for (const suffix of SUFFIXES) {
    if (term.endsWith(suffix) && term.length - suffix.length >= 4) {
      return term.slice(0, -suffix.length);
    }
  }
  return term;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Multi-word search: every term (stemmed) must appear somewhere (slug, title,
 * tags or description), and results are ranked by where they hit — a title match
 * outranks a tag match outranks a description match. Hitting the exact word
 * (not just a longer word it prefixes) adds a point, so `excel` ranks Excel
 * playbooks above "Excellence Review".
 *
 * The site's own searchPlaybooks() matches the whole query as one substring,
 * which is fine for a search box with live results but returns nothing for
 * typical CLI input like `search invoice automation`.
 */
export function rankPlaybooks(playbooks: Playbook[], query: string): Playbook[] {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length === 0) return playbooks;
  const terms = words.map((word) => ({
    stem: stem(word),
    exact: new RegExp(`(^|[^a-z0-9])${escapeRegExp(word)}($|[^a-z0-9])`),
  }));

  const scored: { p: Playbook; score: number }[] = [];
  for (const p of playbooks) {
    const title = p.title.toLowerCase();
    const slug = p.slug.toLowerCase();
    const description = p.description.toLowerCase();
    const tags = p.tags.map((t) => t.toLowerCase());

    let score = 0;
    let allMatched = true;
    for (const term of terms) {
      const inTitle = title.includes(term.stem) || slug.includes(term.stem);
      const inTags = tags.some((t) => t.includes(term.stem));
      const inDescription = description.includes(term.stem);
      if (!inTitle && !inTags && !inDescription) {
        allMatched = false;
        break;
      }
      const exact = term.exact.test(title) || tags.some((t) => term.exact.test(t));
      score += (inTitle ? 3 : 0) + (inTags ? 2 : 0) + (inDescription ? 1 : 0) + (exact ? 1 : 0);
    }
    if (allMatched) scored.push({ p, score });
  }

  // Array.prototype.sort is stable, so ties keep the newest-first input order.
  return scored.sort((a, b) => b.score - a.score).map((s) => s.p);
}

/**
 * Allow any origin: the data is public, and browser-based tools (an
 * extension, a web playground) should be able to call it directly.
 *
 * There are deliberately no OPTIONS handlers. Plain GETs never trigger a CORS
 * preflight, and exporting OPTIONS from a route makes Next treat it as
 * non-static: the ISR detail route then 500s with DYNAMIC_SERVER_USAGE.
 */
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
};

/**
 * Cached at the CDN for an hour and served stale for a day while it
 * revalidates. Content only changes on deploy, and a deploy purges the cache
 * anyway, so this mostly keeps bot traffic off the functions.
 */
export const CACHE_CONTROL = 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400';

export function apiJson(body: unknown, init: { status?: number; cache?: boolean } = {}) {
  const { status = 200, cache = true } = init;
  return NextResponse.json(body, {
    status,
    headers: {
      ...CORS_HEADERS,
      'Cache-Control': cache ? CACHE_CONTROL : 'no-store',
    },
  });
}

export function apiError(status: number, code: string, message: string, extra?: Record<string, unknown>) {
  return apiJson({ error: { code, message, ...extra } }, { status, cache: status === 404 });
}
