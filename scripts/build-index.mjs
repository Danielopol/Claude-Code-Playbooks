#!/usr/bin/env node
/**
 * Precomputes src/lib/playbooks-index.json from the MDX frontmatter.
 *
 * Without this, every call to getAllPlaybooks() re-reads and re-parses every
 * file in src/content/playbooks. That is fine at ~1k files and catastrophic at
 * 10k: a single scan costs ~1.5s, and the listing pages plus getRelatedPlaybooks
 * call it on every cold render.
 *
 * Runs as `prebuild`, so `npm run build` picks it up automatically.
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = process.cwd();
const playbooksDir = path.join(root, 'src/content/playbooks');
const outFile = path.join(root, 'src/lib/playbooks-index.json');

function normalizeDifficulty(value) {
  const d = String(value ?? '').toLowerCase().trim();
  return d === 'beginner' || d === 'intermediate' || d === 'advanced' ? d : 'beginner';
}

function build() {
  if (!fs.existsSync(playbooksDir)) {
    console.warn(`[build-index] ${playbooksDir} not found — writing empty index.`);
    fs.writeFileSync(outFile, '[]\n');
    return;
  }

  const started = Date.now();
  const files = fs.readdirSync(playbooksDir).filter((f) => f.endsWith('.mdx'));
  const entries = [];
  const skipped = [];

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, '');
    let data;
    try {
      ({ data } = matter(fs.readFileSync(path.join(playbooksDir, file), 'utf8')));
    } catch (err) {
      skipped.push(`${file} (unparseable frontmatter: ${err.message})`);
      continue;
    }

    if (!data.title || !data.category) {
      skipped.push(`${file} (missing title or category)`);
      continue;
    }

    // seoHook / targetAudience / exampleUseCase are deliberately excluded: they
    // render only on the detail page, which loads the MDX directly via
    // getPlaybookBySlug. Keeping them out roughly halves the index size.
    entries.push({
      slug,
      title: data.title,
      description: data.description ?? '',
      category: data.category,
      difficulty: normalizeDifficulty(data.difficulty),
      timeToSetup: data.timeToSetup ?? '',
      author: data.author ?? 'community',
      sourceUrl: data.sourceUrl,
      tags: Array.isArray(data.tags) ? data.tags : [],
      createdAt: data.createdAt ?? '',
      updatedAt: data.updatedAt,
    });
  }

  // Sort once here so getAllPlaybooks() never has to.
  entries.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  // One entry per line (still plain valid JSON — whitespace between tokens is
  // legal) rather than JSON.stringify's single-line output. A one-line file
  // gives git nothing to delta-compress: adding one playbook rewrites the
  // entire blob in history. One-entry-per-line means git only touches the
  // handful of lines that actually changed, which matters a lot once this
  // file is thousands of entries and updated daily.
  const body = entries.map((e) => JSON.stringify(e)).join(',\n');
  fs.writeFileSync(outFile, `[\n${body}\n]\n`);

  const kb = (fs.statSync(outFile).size / 1024).toFixed(0);
  console.log(`[build-index] ${entries.length} playbooks → ${kb} KB in ${Date.now() - started}ms`);
  if (skipped.length) {
    console.warn(`[build-index] skipped ${skipped.length} file(s):`);
    for (const s of skipped.slice(0, 20)) console.warn(`  - ${s}`);
    if (skipped.length > 20) console.warn(`  ... and ${skipped.length - 20} more`);
  }
}

build();
