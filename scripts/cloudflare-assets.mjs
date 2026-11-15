#!/usr/bin/env node
/**
 * Copies the playbook MDX into the Cloudflare static assets at /_content/.
 *
 * A Worker has no project filesystem, so src/lib/playbooks.ts reads each MDX
 * through the ASSETS binding at request time. Runs after `opennextjs-cloudflare
 * build` (which creates .open-next/assets) and before preview/deploy. Public
 * requests for /_content/* never see these files: wrangler.jsonc routes that
 * path to the Worker first, and Next answers 404.
 */
import fs from 'fs';
import path from 'path';

const root = process.cwd();
const from = path.join(root, 'src/content/playbooks');
const assets = path.join(root, '.open-next/assets');
const to = path.join(assets, '_content/playbooks');

if (!fs.existsSync(assets)) {
  console.error('[cloudflare-assets] .open-next/assets not found — run `opennextjs-cloudflare build` first.');
  process.exit(1);
}

fs.rmSync(to, { recursive: true, force: true });
fs.mkdirSync(to, { recursive: true });

let count = 0;
for (const file of fs.readdirSync(from)) {
  if (!file.endsWith('.mdx')) continue;
  fs.copyFileSync(path.join(from, file), path.join(to, file));
  count++;
}
console.log(`[cloudflare-assets] copied ${count} playbooks to .open-next/assets/_content/playbooks`);
