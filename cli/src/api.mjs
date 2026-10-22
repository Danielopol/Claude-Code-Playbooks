/**
 * Thin client for the site's public API (/api/v1, see src/lib/api.ts in the
 * site). CCPLAYBOOKS_API_URL points it elsewhere, e.g. a local dev server:
 *
 *   CCPLAYBOOKS_API_URL=http://localhost:3000/api/v1 ccplaybooks search excel
 */
import { VERSION } from './version.mjs';

export const DEFAULT_API_URL = 'https://www.claudecodehq.com/api/v1';
const TIMEOUT_MS = 15_000;

export class ApiError extends Error {
  constructor(message, { status, code } = {}) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

export function apiBase(env = process.env) {
  return (env.CCPLAYBOOKS_API_URL || DEFAULT_API_URL).replace(/\/+$/, '');
}

async function getJson(path, { base = apiBase(), fetchImpl = fetch } = {}) {
  const url = `${base}${path}`;
  let res;
  try {
    res = await fetchImpl(url, {
      headers: { Accept: 'application/json', 'User-Agent': `ccplaybooks/${VERSION}` },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch (err) {
    const reason = err?.name === 'TimeoutError' ? `timed out after ${TIMEOUT_MS / 1000}s` : err?.cause?.code || err?.message;
    throw new ApiError(`Could not reach ${base} (${reason}). Check your connection and try again.`);
  }

  let body;
  try {
    body = await res.json();
  } catch {
    throw new ApiError(`Unexpected response from ${url} (HTTP ${res.status}, not JSON).`, { status: res.status });
  }
  if (!res.ok) {
    const e = body?.error;
    throw new ApiError(e?.message || `HTTP ${res.status} from ${url}`, { status: res.status, code: e?.code });
  }
  return body;
}

export function searchPlaybooks({ q, category, difficulty, tag, limit, offset } = {}, opts) {
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries({ q, category, difficulty, tag, limit, offset })) {
    if (v !== undefined && v !== null && v !== '') params.set(k, String(v));
  }
  const qs = params.toString();
  return getJson(`/playbooks${qs ? `?${qs}` : ''}`, opts);
}

export function getPlaybook(slug, opts) {
  return getJson(`/playbooks/${encodeURIComponent(slug)}`, opts);
}

export function getCategories(opts) {
  return getJson('/categories', opts);
}
