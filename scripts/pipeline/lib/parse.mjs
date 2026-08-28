/**
 * Extraction helpers shared by discover.mjs and harvest.mjs.
 * Kept separate from the CLI entry points so they can be unit-tested without
 * triggering a crawl on import.
 */

/** GitHub paths that match the owner/repo URL shape but aren't repositories. */
const NON_REPO_OWNERS = new Set([
  'orgs',
  'topics',
  'sponsors',
  'settings',
  'features',
  'about',
  'apps',
  'marketplace',
  'collections',
  'users',
  'search',
  'login',
  'pricing',
  'enterprise',
  'readme',
  'site',
  'security',
  'explore',
  'notifications',
  'codespaces',
]);

/**
 * Pull every distinct `owner/repo` reference out of a markdown document.
 *
 * Awesome lists are the cheapest discovery channel we have — one unauthenticated
 * raw fetch can surface hundreds of repos — so this needs to be tolerant of the
 * many ways a link gets written: bare URLs, markdown links, badge image srcs,
 * trailing punctuation, `.git` suffixes, and deep links into blob/tree paths.
 */
export function extractRepoRefs(markdown) {
  const found = new Set();
  const re = /github\.com\/([A-Za-z0-9][\w.-]*)\/([\w.-]+)/g;
  let m;

  while ((m = re.exec(markdown))) {
    const owner = m[1];
    if (NON_REPO_OWNERS.has(owner.toLowerCase())) continue;

    // Strip .git, then any trailing punctuation the URL picked up from prose.
    const name = m[2].replace(/\.git$/i, '').replace(/[).,;:'"!?\]]+$/, '');
    if (!name || name === '.' || name === '..' || name.length > 100) continue;

    found.add(`${owner}/${name}`);
  }
  return [...found];
}

/**
 * Follow a Claude plugin marketplace manifest to the repos it references.
 *
 * This is the single highest-leverage expansion in the harvest stage: one
 * marketplace.json can point at dozens of plugin repos that no topic search
 * would ever surface. The shape of these files is not standardized, so rather
 * than assume a schema we walk every string value looking for repo URLs.
 */
export function extractRepoRefsFromManifest(text) {
  const out = new Set();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    return []; // malformed manifest — nothing to follow
  }

  const walk = (node, depth = 0) => {
    if (node == null || depth > 12) return;
    if (typeof node === 'string') {
      for (const ref of extractRepoRefs(node)) out.add(ref);
      return;
    }
    if (Array.isArray(node)) {
      for (const v of node) walk(v, depth + 1);
      return;
    }
    if (typeof node === 'object') {
      for (const v of Object.values(node)) walk(v, depth + 1);
    }
  };

  walk(json);
  return [...out];
}
