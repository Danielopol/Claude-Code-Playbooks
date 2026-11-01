#!/usr/bin/env node
/**
 * Works out which license each playbook's source declares, for the ChatGPT
 * plugin's IP review (see chatgpt-plugin/README.md).
 *
 *   node scripts/audit-playbook-licenses.mjs
 *
 * For a GitHub source it reads the actual license files: the one nearest the
 * playbook's folder, then the repo root. A `license:` field in the template's
 * frontmatter counts too, and the more restrictive answer wins. Files come from
 * raw.githubusercontent.com, so no token is needed. Fetches are cached in
 * scripts/pipeline/data/, so a rerun only asks for what it doesn't have.
 *
 * Writes research/license-audit/playbook-licenses.csv, and src/content/plugin-catalog.json:
 * the playbooks the plugin's MCP endpoint may serve, with each one's license notice.
 * This reports what sources declare. It can't tell whether a repo had the right to
 * license what it copied, and it isn't legal advice.
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const PLAYBOOKS = 'src/content/playbooks';
const TEMPLATES = 'public/templates';
const OUT_DIR = 'research/license-audit';
const CACHE = 'scripts/pipeline/data/license-audit-cache.json';
const PLUGIN_CATALOG = 'src/content/plugin-catalog.json';
const ROOT_NAMES = ['LICENSE', 'LICENSE.md', 'LICENSE.txt', 'LICENCE', 'LICENCE.md', 'LICENCE.txt', 'COPYING', 'license', 'License', 'LICENSE.rst', 'LICENSE-MIT', 'UNLICENSE'];
const FOLDER_NAMES = ['LICENSE', 'LICENSE.md', 'LICENSE.txt'];

/** Restrictive terms come first: Commons Clause, for one, sits on top of MIT or Apache text. */
function identify(raw) {
  const t = raw.toLowerCase().replace(/\s+/g, ' ');
  if (/commons clause/.test(t)) return 'Commons-Clause';
  if (/polyform/.test(t)) return 'PolyForm';
  if (/business source license/.test(t)) return 'BUSL';
  if (/elastic license/.test(t)) return 'Elastic';
  if (/attribution-noncommercial|cc[- ]by[- ]nc|non-?commercial use only/.test(t)) return 'CC-BY-NC';
  if (/attribution-noderivatives|cc[- ]by[- ]nd/.test(t)) return 'CC-BY-ND';
  if (/attribution-sharealike|cc[- ]by[- ]sa/.test(t)) return 'CC-BY-SA';
  if (/gnu affero general public license|\bagpl/.test(t)) return 'AGPL';
  if (/gnu lesser general public license|\blgpl/.test(t)) return 'LGPL';
  if (/gnu general public license|\bgpl-?[23]/.test(t)) return 'GPL';
  if (/mozilla public license|\bmpl-2/.test(t)) return 'MPL';
  if (/apache license|\bapache-?2/.test(t)) return 'Apache-2.0';
  if (/permission is hereby granted, free of charge|^(the )?mit( license)?\b/.test(t)) return 'MIT';
  if (/redistribution and use in source and binary forms|\bbsd-[23]/.test(t)) return 'BSD';
  if (/permission to use, copy, modify, and\/?(or )?distribute this software for any purpose|^isc\b/.test(t)) return 'ISC';
  if (/free and unencumbered software|^unlicense/.test(t)) return 'Unlicense';
  // CC-BY first: its boilerplate mentions CC0.
  if (/attribution 4\.0 international|cc[- ]by[- ]\d|^cc[- ]by\b/.test(t)) return 'CC-BY';
  if (/cc0|creative commons zero/.test(t)) return 'CC0';
  if (/all rights reserved|proprietary|may not be (copied|redistributed)/.test(t)) return 'Proprietary';
  return 'Unrecognized';
}

const BUCKETS = {
  permissive: new Set(['MIT', 'Apache-2.0', 'BSD', 'ISC', 'Unlicense', 'CC0', 'CC-BY']),
  conditional: new Set(['GPL', 'LGPL', 'AGPL', 'MPL', 'CC-BY-SA']),
  restricted: new Set(['Proprietary', 'CC-BY-NC', 'CC-BY-ND', 'Commons-Clause', 'PolyForm', 'BUSL', 'Elastic']),
};

/**
 * Repos a person read because their root license doesn't answer the question.
 * A license file directly in a playbook's folder still takes precedence.
 */
const REVIEWED = {
  'sgharlow/claude-code-recipes': {
    bucket: 'restricted',
    license: 'Custom',
    evidence: 'custom terms allow personal, commercial and internal use but grant no public redistribution, and bar resale and competing collections for sale',
  },
  'davila7/claude-code-templates': {
    bucket: 'mixed-bundle',
    license: 'MIT (repo only)',
    evidence: 'README says bundled resources keep their original licenses, so the repo MIT may not cover this template',
  },
};

/** K-Dense's README says these were vendored from anthropics/skills under Anthropic's own license. */
const ANTHROPIC_DOC_SKILLS = {
  bucket: 'restricted',
  license: 'Proprietary',
  evidence: "vendored from anthropics/skills, whose document skills are all rights reserved; K-Dense's MIT doesn't cover them",
};
const REVIEWED_PLAYBOOKS = {
  'scientific-pdf': { ...ANTHROPIC_DOC_SKILLS, evidence: `${ANTHROPIC_DOC_SKILLS.evidence} (111 of 111 template lines match)` },
  'scientific-pptx': { ...ANTHROPIC_DOC_SKILLS, evidence: `${ANTHROPIC_DOC_SKILLS.evidence} (59 of 103 template lines match)` },
  'scientific-docx': ANTHROPIC_DOC_SKILLS,
  'scientific-xlsx': ANTHROPIC_DOC_SKILLS,
};

const bucketOf = (license) => Object.keys(BUCKETS).find((b) => BUCKETS[b].has(license)) ?? 'unrecognized';
const RANK = ['permissive', 'unrecognized', 'conditional', 'restricted'];

/** `license:` values like "See LICENSE.txt" or "Unknown" say nothing, so they are ignored. */
function frontmatterLicense(slug) {
  const file = path.join(TEMPLATES, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  try {
    const value = matter(fs.readFileSync(file, 'utf8')).data.license;
    if (typeof value !== 'string' || !value.trim()) return null;
    const license = identify(value);
    return license === 'Unrecognized' ? null : { license, raw: value.trim().slice(0, 80) };
  } catch {
    return null;
  }
}

function parseGithub(url) {
  const parts = new URL(url).pathname.split('/').filter(Boolean).map(decodeURIComponent);
  const [owner, repo, mode, ref, ...rest] = parts;
  if (!owner || !repo) return null;
  const isFile = mode === 'blob' || mode === 'raw' || /\.[a-z0-9]{1,5}$/i.test(rest.at(-1) ?? '');
  const dirs = isFile ? rest.slice(0, -1) : rest;
  return { repo: `${owner}/${repo.replace(/\.git$/, '')}`, ref: mode === 'tree' || mode === 'blob' ? ref : 'HEAD', dirs, file: isFile ? rest.at(-1) : null };
}

const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {};
let requests = 0;
let rateLimited = false;

/** The `license:` line of a skill file's frontmatter; the local copy often no longer has it. */
function upstreamLicenseLine(raw) {
  const front = raw.replace(/^﻿/, '').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
  return front.match(/^\s*license:\s*["']?(.+?)["']?\s*$/m)?.[1] ?? '';
}

/** First real copyright line, skipping the placeholder in Apache's appendix. */
function copyrightLine(text) {
  const lines = text.split(/\r?\n/).map((l) => l.trim());
  return lines.find((l) => /^(the\s+)?copyright\b.*\d{4}|^©/i.test(l) && !l.includes('[yyyy]'))?.slice(0, 160) ?? '';
}

async function fetchRaw(url, keep = (text) => text.slice(0, 20000)) {
  if (url in cache) return cache[url];
  if (rateLimited) return undefined;
  requests++;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
      if (res.status === 429 || res.status === 403) {
        rateLimited = true;
        return undefined;
      }
      if (res.status === 404) return (cache[url] = null);
      if (res.ok) {
        return (cache[url] = { text: keep(await res.text()) });
      }
    } catch {
      // Network blip: try again.
    }
  }
  return undefined;
}

async function pool(items, size, work) {
  let next = 0;
  await Promise.all(Array.from({ length: size }, async () => {
    while (next < items.length) await work(items[next++]);
  }));
}

/** The first license file found under any of these names, in order. */
async function firstLicense(base, names) {
  for (const name of names) {
    const url = `${base}/${encodeURIComponent(name)}`;
    const found = await fetchRaw(url);
    if (found) return { license: identify(found.text), copyright: copyrightLine(found.text), head: found.text.slice(0, 160).replace(/\s+/g, ' '), url };
  }
  return null;
}

const rows = fs.readdirSync(PLAYBOOKS).filter((f) => f.endsWith('.mdx')).map((f) => {
  const { data } = matter(fs.readFileSync(path.join(PLAYBOOKS, f), 'utf8'));
  const slug = f.replace(/\.mdx$/, '');
  const row = { slug, author: data.author ?? '', sourceUrl: data.sourceUrl ?? '', frontmatter: frontmatterLicense(slug) };
  const host = data.sourceUrl ? new URL(data.sourceUrl).hostname.replace(/^www\./, '') : '';
  row.host = host;
  if (host === 'github.com') row.gh = parseGithub(data.sourceUrl);
  // No sourceUrl, but the author field names a repo.
  if (!host && /^[\w-]+\/[\w.-]+$/.test(row.author)) row.gh = { repo: row.author, ref: 'HEAD', dirs: [] };
  return row;
});

const rawBase = (repo, ref, dirs = []) => `https://raw.githubusercontent.com/${repo}/${encodeURIComponent(ref)}${dirs.map((d) => `/${encodeURIComponent(d)}`).join('')}`;

// Repo roots first: there are few of them and everything depends on them.
const repos = [...new Set(rows.filter((r) => r.gh).map((r) => r.gh.repo))];
const rootLicense = {};
await pool(repos, 8, async (repo) => {
  rootLicense[repo] = await firstLicense(rawBase(repo, 'HEAD'), ROOT_NAMES);
});

// Then each playbook's own folder and its parents, which can override the root.
const folderJobs = new Map();
for (const r of rows.filter((r) => r.gh?.dirs.length)) {
  for (let depth = r.gh.dirs.length; depth > 0; depth--) {
    const dirs = r.gh.dirs.slice(0, depth);
    folderJobs.set(rawBase(r.gh.repo, r.gh.ref, dirs), true);
  }
}
const folderLicense = {};
await pool([...folderJobs.keys()], 12, async (base) => {
  folderLicense[base] = await firstLicense(base, FOLDER_NAMES);
});

// The source file's own `license:` line, which can be stricter than its repo.
const skillFile = (r) => {
  if (!r.gh?.dirs.length) return null;
  const file = r.gh.file ?? 'SKILL.md';
  return /\.mdx?$/i.test(file) ? `${rawBase(r.gh.repo, r.gh.ref, r.gh.dirs)}/${encodeURIComponent(file)}` : null;
};
const upstream = {};
await pool([...new Set(rows.map(skillFile).filter(Boolean))], 12, async (url) => {
  const found = await fetchRaw(url, upstreamLicenseLine);
  const line = found?.text ?? '';
  const license = line ? identify(line) : 'Unrecognized';
  upstream[url] = license === 'Unrecognized' ? null : { license, raw: line.slice(0, 80) };
});

// A repo with no license file may just be gone, which is a different problem.
const repoState = {};
await pool(repos.filter((repo) => !rootLicense[repo]), 4, async (repo) => {
  try {
    const res = await fetch(`https://github.com/${repo}`, { method: 'HEAD', signal: AbortSignal.timeout(30000) });
    repoState[repo] = res.status === 404 ? 'missing' : 'exists';
  } catch {
    repoState[repo] = 'unknown';
  }
});

// A source file we couldn't find may mean a moved repo layout, or a dead Source button.
const linkState = {};
const missingSources = rows.filter((r) => skillFile(r) && cache[skillFile(r)] === null).map((r) => r.sourceUrl);
await pool([...new Set(missingSources)], 5, async (url) => {
  const key = `head:${url}`;
  if (!(key in cache)) {
    try {
      cache[key] = (await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(30000) })).status;
    } catch {
      return;
    }
  }
  linkState[url] = cache[key];
});

// Apache section 4(d): a repo's NOTICE file has to travel with copies.
const noticeFile = {};
const apacheRepos = [...new Set(rows.filter((r) => r.gh && classify(r).license === 'Apache-2.0').map((r) => r.gh.repo))];
await pool(apacheRepos, 4, async (repo) => {
  for (const name of ['NOTICE', 'NOTICE.txt', 'NOTICE.md']) {
    if (await fetchRaw(`${rawBase(repo, 'HEAD')}/${name}`)) noticeFile[repo] = true;
  }
});

fs.mkdirSync(path.dirname(CACHE), { recursive: true });
fs.writeFileSync(CACHE, JSON.stringify(cache));

function classify(r) {
  if (REVIEWED_PLAYBOOKS[r.slug]) return REVIEWED_PLAYBOOKS[r.slug];
  if (!r.gh) {
    if (r.frontmatter) return { bucket: bucketOf(r.frontmatter.license), license: r.frontmatter.license, evidence: `template frontmatter: ${r.frontmatter.raw}` };
    if (r.sourceUrl) return { bucket: 'no-license-offsite', license: '', evidence: `no license information checked on ${r.host}` };
    return { bucket: 'no-source', license: '', evidence: 'no source URL; origin needs confirming' };
  }
  let nearest = null;
  for (let depth = r.gh.dirs.length; depth > 0 && !nearest; depth--) {
    nearest = folderLicense[rawBase(r.gh.repo, r.gh.ref, r.gh.dirs.slice(0, depth))] ?? null;
  }
  const file = nearest ?? rootLicense[r.gh.repo] ?? null;
  const source = upstream[skillFile(r)];
  const found = [
    file && { license: file.license, evidence: file.url, copyright: file.copyright },
    r.frontmatter && { license: r.frontmatter.license, evidence: `template frontmatter: ${r.frontmatter.raw}` },
    source && { license: source.license, evidence: `source file license line: ${source.raw}` },
  ].filter(Boolean);
  const reviewed = REVIEWED[r.gh.repo];
  if (reviewed && !nearest) return { ...reviewed, evidence: `${file?.url ?? ''} ${reviewed.evidence}`.trim(), copyright: file?.copyright };
  if (found.length === 0) {
    const state = repoState[r.gh.repo];
    return state === 'missing'
      ? { bucket: 'source-gone', license: '', evidence: `https://github.com/${r.gh.repo} returned 404` }
      : { bucket: 'no-license-github', license: '', evidence: `no license file found in https://github.com/${r.gh.repo}` };
  }
  found.sort((a, b) => RANK.indexOf(bucketOf(b.license)) - RANK.indexOf(bucketOf(a.license)));
  const conflict = new Set(found.map((f) => f.license)).size > 1 ? ` (conflicts with ${found[1].license}: ${found[1].evidence})` : '';
  return {
    bucket: bucketOf(found[0].license),
    license: found[0].license,
    evidence: found[0].evidence + conflict,
    copyright: file?.copyright,
    licenseFile: file?.license === found[0].license ? file.url : undefined,
    conflict: Boolean(conflict),
  };
}

/** Why the plugin can't serve a playbook, or null if it can. */
function pluginExclusion(r, c, link) {
  if (c.bucket !== 'permissive') return c.bucket;
  if (!r.sourceUrl) return 'no source link';
  if (link) return 'dead source link';
  if (!c.licenseFile) return 'no license file to quote';
  if (c.conflict) return 'source file declares a different license';
  if (noticeFile[r.gh.repo]) return 'repo has a NOTICE file to carry';
  return null;
}

/** MIT-style licenses are short enough to quote in full. These two are not, so they get their standard short form. */
const SHORT_NOTICE = {
  'Apache-2.0': () => 'Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.',
  'CC-BY': (url) => `Licensed under a Creative Commons Attribution license. Full terms: ${url}`,
};

function pluginLicense(c) {
  const url = c.licenseFile.replace(/^https:\/\/raw\.githubusercontent\.com\/([^/]+\/[^/]+)\//, 'https://github.com/$1/blob/');
  return {
    name: c.license,
    ...(c.copyright && { copyright: c.copyright }),
    url,
    notice: SHORT_NOTICE[c.license]?.(url) ?? cache[c.licenseFile].text.trim(),
  };
}

const csv = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
const lines = ['slug,bucket,license,copyright,repo,author,source_url,source_link,evidence,plugin'];
const counts = {};
const byRepo = {};
const exclusions = {};
const catalog = { licenses: {}, playbooks: {} };
for (const r of rows) {
  const c = classify(r);
  counts[c.bucket] = (counts[c.bucket] ?? 0) + 1;
  const link = linkState[r.sourceUrl] === 404 ? 'dead' : '';
  if (link) counts[`${c.bucket}, dead source link`] = (counts[`${c.bucket}, dead source link`] ?? 0) + 1;
  const excluded = pluginExclusion(r, c, link);
  if (excluded) {
    exclusions[excluded] = (exclusions[excluded] ?? 0) + 1;
  } else {
    catalog.licenses[c.licenseFile] ??= pluginLicense(c);
    catalog.playbooks[r.slug] = c.licenseFile;
  }
  lines.push([r.slug, c.bucket, c.license, c.copyright, r.gh?.repo, r.author, r.sourceUrl, link, c.evidence, excluded ? `no: ${excluded}` : 'yes'].map(csv).join(','));
  if (r.gh) {
    const key = `${r.gh.repo} | ${c.bucket} | ${c.license}`;
    byRepo[key] = (byRepo[key] ?? 0) + 1;
  }
}
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, 'playbook-licenses.csv'), lines.join('\n') + '\n');
// A partial run reads missing license files as "no license", which would quietly shrink the catalog.
if (!rateLimited) fs.writeFileSync(PLUGIN_CATALOG, JSON.stringify(catalog, null, 2) + '\n');

console.log(`${rows.length} playbooks, ${repos.length} repos, ${folderJobs.size} folders, ${requests} requests${rateLimited ? ', RATE LIMITED: results are incomplete and the plugin catalog was not written, rerun later' : ''}`);
console.log(counts);
console.log(`\nPlugin catalog: ${Object.keys(catalog.playbooks).length} playbooks, ${Object.keys(catalog.licenses).length} license files. Left out:`, exclusions);
console.log('\nBy repo:');
for (const [key, n] of Object.entries(byRepo).sort((a, b) => b[1] - a[1])) console.log(`  ${n}  ${key}`);
console.log('\nRoot licenses:');
for (const repo of repos) console.log(`  ${repo}: ${rootLicense[repo] ? `${rootLicense[repo].license} <- ${rootLicense[repo].head.slice(0, 70)}` : `none (${repoState[repo]})`}`);
