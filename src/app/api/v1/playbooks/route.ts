import { NextRequest } from 'next/server';
import { getAllPlaybooks } from '@/lib/playbooks';
import { categories } from '@/lib/categories';
import { apiError, apiJson, rankPlaybooks, toSummary } from '@/lib/api';

/**
 * GET /api/v1/playbooks — search and list playbooks.
 *
 *   ?q=invoice automation   all terms must match; ranked title > tags > description
 *   ?category=finance       category id (see /api/v1/categories)
 *   ?difficulty=beginner    beginner | intermediate | advanced
 *   ?tag=excel              exact tag, case-insensitive
 *   ?limit=20&offset=0      page size 1–100 (default 20)
 *
 * Without `q`, results are newest first. This is the one dynamic route in the
 * API; it reads the in-memory index, and the CDN caches each distinct query.
 */
const DIFFICULTIES = new Set(['beginner', 'intermediate', 'advanced']);
const CATEGORY_IDS = new Set<string>(categories.map((c) => c.id));
const DEFAULT_LIMIT = 20;
const MAX_LIMIT = 100;

function parseNonNegativeInt(value: string | null, fallback: number): number | null {
  if (value === null || value === '') return fallback;
  return /^\d+$/.test(value) ? Number(value) : null;
}

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const q = params.get('q')?.trim() ?? '';
  const category = params.get('category')?.trim().toLowerCase() || null;
  const difficulty = params.get('difficulty')?.trim().toLowerCase() || null;
  const tag = params.get('tag')?.trim().toLowerCase() || null;
  const limit = parseNonNegativeInt(params.get('limit'), DEFAULT_LIMIT);
  const offset = parseNonNegativeInt(params.get('offset'), 0);

  if (category && !CATEGORY_IDS.has(category)) {
    return apiError(400, 'invalid_category', `Unknown category "${category}".`, {
      allowed: [...CATEGORY_IDS],
    });
  }
  if (difficulty && !DIFFICULTIES.has(difficulty)) {
    return apiError(400, 'invalid_difficulty', `Unknown difficulty "${difficulty}".`, {
      allowed: [...DIFFICULTIES],
    });
  }
  if (limit === null || limit < 1 || limit > MAX_LIMIT) {
    return apiError(400, 'invalid_limit', `limit must be an integer from 1 to ${MAX_LIMIT}.`);
  }
  if (offset === null) {
    return apiError(400, 'invalid_offset', 'offset must be a non-negative integer.');
  }

  let matches = getAllPlaybooks().filter(
    (p) =>
      (!category || p.category === category) &&
      (!difficulty || p.difficulty === difficulty) &&
      (!tag || p.tags.some((t) => t.toLowerCase() === tag))
  );
  if (q) matches = rankPlaybooks(matches, q);

  return apiJson({
    total: matches.length,
    limit,
    offset,
    results: matches.slice(offset, offset + limit).map(toSummary),
  });
}
