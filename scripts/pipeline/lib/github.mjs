/**
 * GitHub API client tuned for long unattended crawls.
 *
 * The three things that actually matter at this scale:
 *
 * 1. Rate limits are per-resource. `core` (5,000/hr) and `search` (30/min, but
 *    only 10/min for code search) have independent budgets, so a client that
 *    tracks a single global counter either stalls needlessly or gets 403'd.
 *    We read `x-ratelimit-resource` off each response and track per bucket.
 *
 * 2. Secondary rate limits are undocumented, unpredictable, and return 403
 *    rather than 429. They must be detected by message body, not status code.
 *
 * 3. File contents should never go through the API. raw.githubusercontent.com
 *    serves the same bytes without touching the 5,000/hr core budget, which
 *    turns content fetching from the bottleneck into a rounding error.
 */

const API = 'https://api.github.com';
const RAW = 'https://raw.githubusercontent.com';

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';

if (!token) {
  console.error(
    '\n  Missing GITHUB_TOKEN.\n\n' +
      '  Unauthenticated crawling is capped at 60 requests/hour, which is unusable here.\n' +
      '  Create a token with PUBLIC repo read scope (no write permissions needed):\n' +
      '    https://github.com/settings/tokens\n\n' +
      '  Then:  export GITHUB_TOKEN=ghp_xxx     (bash)\n' +
      '         $env:GITHUB_TOKEN="ghp_xxx"     (PowerShell)\n'
  );
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Per-resource limit state, populated from response headers. */
const limits = new Map(); // resource -> { remaining, reset (epoch s) }

/** Minimum spacing between requests per resource, to stay under burst limits. */
const MIN_INTERVAL = { search: 2200, code_search: 6500, core: 80, graphql: 100 };
const lastCall = new Map();

let totalRequests = 0;
let totalWaitMs = 0;

async function throttle(resource) {
  const gap = MIN_INTERVAL[resource] ?? MIN_INTERVAL.core;
  const last = lastCall.get(resource) ?? 0;
  const since = Date.now() - last;
  if (since < gap) {
    await sleep(gap - since);
  }

  const state = limits.get(resource);
  if (state && state.remaining <= 1) {
    const waitMs = state.reset * 1000 - Date.now() + 1500;
    if (waitMs > 0) {
      const mins = (waitMs / 60000).toFixed(1);
      console.log(`  [rate] ${resource} exhausted — sleeping ${mins}m until reset`);
      totalWaitMs += waitMs;
      await sleep(waitMs);
      limits.delete(resource);
    }
  }

  lastCall.set(resource, Date.now());
}

function recordLimits(res, fallbackResource) {
  const resource = res.headers.get('x-ratelimit-resource') || fallbackResource;
  const remaining = res.headers.get('x-ratelimit-remaining');
  const reset = res.headers.get('x-ratelimit-reset');
  if (remaining !== null && reset !== null) {
    limits.set(resource, { remaining: Number(remaining), reset: Number(reset) });
  }
}

/**
 * A single API call with retry. `resource` selects the throttle bucket —
 * pass 'code_search' for /search/code, which has a far tighter limit than
 * the other search endpoints despite sharing the same header resource name.
 */
export async function api(pathOrUrl, { resource = 'core', retries = 5, allow404 = true } = {}) {
  const url = pathOrUrl.startsWith('http') ? pathOrUrl : `${API}${pathOrUrl}`;

  for (let attempt = 0; attempt <= retries; attempt++) {
    await throttle(resource);

    let res;
    try {
      totalRequests++;
      res = await fetch(url, {
        headers: {
          accept: 'application/vnd.github+json',
          authorization: `Bearer ${token}`,
          'user-agent': 'claude-code-playbooks-harvester',
          'x-github-api-version': '2022-11-28',
        },
      });
    } catch (err) {
      // Network-level failure: back off and retry.
      const wait = Math.min(2 ** attempt * 1000, 30000);
      if (attempt === retries) throw err;
      await sleep(wait);
      continue;
    }

    recordLimits(res, resource === 'code_search' ? 'code_search' : resource);

    if (res.ok) return res.json();

    if (res.status === 404 && allow404) return null;

    // 422 on search = we walked past the 1000-result ceiling. Not retryable.
    if (res.status === 422) return null;

    if (res.status === 403 || res.status === 429) {
      const body = await res.text().catch(() => '');
      const retryAfter = Number(res.headers.get('retry-after') || 0);
      const isSecondary = /secondary rate limit/i.test(body);
      const reset = Number(res.headers.get('x-ratelimit-reset') || 0);

      let waitMs;
      if (retryAfter) waitMs = retryAfter * 1000 + 1000;
      else if (isSecondary) waitMs = Math.min(2 ** attempt * 5000, 120000);
      else if (reset) waitMs = Math.max(reset * 1000 - Date.now() + 1500, 1000);
      else waitMs = 60000;

      if (attempt === retries) {
        throw new Error(`GitHub ${res.status} after ${retries} retries: ${body.slice(0, 200)}`);
      }
      console.log(
        `  [rate] ${res.status}${isSecondary ? ' (secondary)' : ''} — waiting ${(waitMs / 1000).toFixed(0)}s`
      );
      totalWaitMs += waitMs;
      await sleep(waitMs);
      continue;
    }

    if (res.status >= 500) {
      if (attempt === retries) throw new Error(`GitHub ${res.status} on ${url}`);
      await sleep(Math.min(2 ** attempt * 1000, 30000));
      continue;
    }

    // Anything else (401 bad token, 451 DMCA-blocked, etc.) is terminal.
    // Drain the body so the socket can be released before we bail out.
    await res.text().catch(() => '');
    if (res.status === 401) {
      throw new Error('GitHub 401 — GITHUB_TOKEN is invalid or expired.');
    }
    return null;
  }
  return null;
}

/**
 * Paginate a search endpoint. GitHub hard-caps every search query at 1,000
 * results regardless of how many matches exist, so callers must shard their
 * queries (by stars, size, date) to see past it — see discover.mjs.
 */
export async function* searchAll(endpoint, query, { perPage = 100, cap = 1000, resource } = {}) {
  const bucket = resource || (endpoint === 'code' ? 'code_search' : 'search');
  let page = 1;
  let seen = 0;

  while (seen < cap) {
    const url = `/search/${endpoint}?q=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}`;
    const data = await api(url, { resource: bucket });
    if (!data || !Array.isArray(data.items) || data.items.length === 0) return;

    for (const item of data.items) {
      yield item;
      seen++;
    }

    if (data.items.length < perPage) return;
    page++;
    if (page > Math.ceil(cap / perPage)) return;
  }
}

/** Total match count for a query — used to decide whether a shard needs splitting. */
export async function searchCount(endpoint, query) {
  const bucket = endpoint === 'code' ? 'code_search' : 'search';
  const data = await api(`/search/${endpoint}?q=${encodeURIComponent(query)}&per_page=1`, {
    resource: bucket,
  });
  return data?.total_count ?? 0;
}

/**
 * Full recursive file listing for a repo in ONE core-budget request.
 * This is the single most important call in the pipeline: it reveals every
 * candidate file in a repo without per-directory traversal.
 */
export async function repoTree(owner, repo, ref) {
  const data = await api(
    `/repos/${owner}/${repo}/git/trees/${encodeURIComponent(ref)}?recursive=1`
  );
  if (!data || !Array.isArray(data.tree)) return { files: [], truncated: false };
  return {
    files: data.tree.filter((n) => n.type === 'blob'),
    truncated: Boolean(data.truncated),
  };
}

/**
 * Fetch file content from raw.githubusercontent.com.
 * Deliberately NOT the contents API — raw doesn't consume the core rate limit,
 * so content fetching scales independently of repo discovery.
 */
export async function rawFile(owner, repo, ref, filePath, { retries = 3 } = {}) {
  const url = `${RAW}/${owner}/${repo}/${ref}/${filePath.split('/').map(encodeURIComponent).join('/')}`;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'user-agent': 'claude-code-playbooks-harvester' },
      });
      if (res.status === 404) return null;
      if (res.status === 429 || res.status >= 500) {
        if (attempt === retries) return null;
        await sleep(Math.min(2 ** attempt * 1500, 20000));
        continue;
      }
      if (!res.ok) return null;
      return await res.text();
    } catch {
      if (attempt === retries) return null;
      await sleep(Math.min(2 ** attempt * 1500, 20000));
    }
  }
  return null;
}

/**
 * Resolve repo metadata in bulk via GraphQL.
 *
 * The REST equivalent is one `/repos/{owner}/{repo}` call per repository, which
 * is the single most expensive thing in discovery: ~4,000 seed repos would eat
 * 80% of the 5,000/hr core budget before the search channels even start.
 *
 * GraphQL takes 100 aliased lookups per request and bills roughly per node, so
 * the same work costs ~40 requests instead of ~4,000. Missing or renamed repos
 * come back as a null alias alongside a non-fatal `errors` array, so partial
 * failure has to be tolerated rather than treated as a failed request.
 */
export async function graphqlRepos(fullNames, { batchSize = 100 } = {}) {
  const out = [];

  for (let i = 0; i < fullNames.length; i += batchSize) {
    const batch = fullNames.slice(i, i + batchSize);
    const parts = batch.map((fullName, j) => {
      const [owner, name] = fullName.split('/');
      // Values are embedded as GraphQL string literals, so escape aggressively.
      const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      return `r${j}: repository(owner: "${esc(owner)}", name: "${esc(name)}") {
        nameWithOwner
        stargazerCount
        isArchived
        isFork
        pushedAt
        description
        diskUsage
        defaultBranchRef { name }
        licenseInfo { spdxId }
        owner { login }
      }`;
    });

    const query = `query {\n${parts.join('\n')}\n}`;

    await throttle('graphql');
    let json;
    try {
      totalRequests++;
      const res = await fetch(`${API}/graphql`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
          'content-type': 'application/json',
          'user-agent': 'claude-code-playbooks-harvester',
        },
        body: JSON.stringify({ query }),
      });

      if (res.status === 401) throw new Error('GitHub 401 — token invalid for GraphQL.');

      if (!res.ok) {
        // Fall back to REST for this batch rather than losing it entirely.
        const body = await res.text().catch(() => '');
        console.log(`  [graphql] ${res.status} — falling back to REST for ${batch.length} repos`);
        if (/rate limit/i.test(body)) await sleep(60000);
        for (const fullName of batch) {
          const r = await api(`/repos/${fullName}`);
          if (r) out.push(r);
        }
        continue;
      }

      json = await res.json();
    } catch (err) {
      console.log(`  [graphql] ${err.message} — falling back to REST`);
      for (const fullName of batch) {
        const r = await api(`/repos/${fullName}`);
        if (r) out.push(r);
      }
      continue;
    }

    const data = json?.data ?? {};
    for (let j = 0; j < batch.length; j++) {
      const node = data[`r${j}`];
      if (!node) continue; // deleted, renamed, or private — expected, not an error

      // Reshape to match the REST repo object the rest of the pipeline expects.
      out.push({
        full_name: node.nameWithOwner,
        name: node.nameWithOwner.split('/')[1],
        owner: { login: node.owner?.login ?? node.nameWithOwner.split('/')[0] },
        default_branch: node.defaultBranchRef?.name ?? null,
        stargazers_count: node.stargazerCount ?? 0,
        license: node.licenseInfo?.spdxId ? { spdx_id: node.licenseInfo.spdxId } : null,
        size: node.diskUsage ?? null,
        pushed_at: node.pushedAt ?? null,
        archived: Boolean(node.isArchived),
        fork: Boolean(node.isFork),
        description: node.description ?? '',
      });
    }
  }

  return out;
}

/** Run `worker` over `items` with bounded concurrency, preserving no order. */
export async function mapLimit(items, limit, worker) {
  const results = [];
  let cursor = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const i = cursor++;
      try {
        results.push(await worker(items[i], i));
      } catch (err) {
        results.push({ error: err.message, item: items[i] });
      }
    }
  });
  await Promise.all(runners);
  return results;
}

export function stats() {
  return { totalRequests, totalWaitMs, limits: Object.fromEntries(limits) };
}

export async function checkToken() {
  const rate = await api('/rate_limit');
  const core = rate?.resources?.core;
  const search = rate?.resources?.search;
  const code = rate?.resources?.code_search;
  console.log(
    `  token OK — core ${core?.remaining ?? '?'}/${core?.limit ?? '?'}, ` +
      `search ${search?.remaining ?? '?'}/${search?.limit ?? '?'}` +
      (code ? `, code_search ${code.remaining}/${code.limit}` : '')
  );
  return rate;
}
