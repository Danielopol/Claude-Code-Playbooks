#!/usr/bin/env node
/**
 * Checks chatgpt-plugin/ against OpenAI's published plugin limits, then zips it
 * to chatgpt-plugin/dist/claude-code-playbooks.zip for upload at
 * platform.openai.com/plugins. See chatgpt-plugin/README.md.
 *
 *   npm run plugin:build
 *
 * The zip is written by hand because there is no zip library in the project and
 * the system tools disagree (GNU tar can't write zips; Compress-Archive has used
 * backslashes in entry names).
 */
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'chatgpt-plugin');
const OUT = path.join(ROOT, 'dist', 'claude-code-playbooks.zip');
const MCP_SOURCE = path.join(ROOT, '..', 'src', 'lib', 'mcp.ts');
const CATALOG = path.join(ROOT, '..', 'src', 'content', 'plugin-catalog.json');
const TEMPLATES = path.join(ROOT, '..', 'public', 'templates');
// Only these go in the zip; README.md and dist/ stay out.
const PACKAGE_ENTRIES = ['plugin.json', 'mcp.json', 'skills', 'assets'];

const readJson = (name) => JSON.parse(fs.readFileSync(path.join(ROOT, name), 'utf8'));

function listFiles(entry) {
  const full = path.join(ROOT, entry);
  if (!fs.statSync(full).isDirectory()) return [entry];
  return fs.readdirSync(full).flatMap((child) => listFiles(`${entry}/${child}`));
}

/** WCAG contrast ratio, which is how OpenAI words the brand color rule. */
function contrast(a, b) {
  const luminance = (hex) => {
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
    const f = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

function check(plugin, mcp) {
  const problems = [];
  const expect = (ok, message) => { if (!ok) problems.push(message); };
  const openai = plugin.extensions['com.openai'];
  const ui = openai.interface;

  expect(/^[a-z0-9]+(-[a-z0-9]+)*$/.test(plugin.name) && plugin.name.length <= 64, 'name: lowercase letters, numbers and single hyphens, at most 64');
  expect(/^\d+\.\d+\.\d+$/.test(plugin.version), 'version: must be an explicit semantic version');
  expect(plugin.description.length <= 4000, 'description: at most 4000 characters');

  for (const [field, max] of [['displayName', 30], ['shortDescription', 30], ['longDescription', 4000], ['developerName', 80]]) {
    expect(ui[field]?.length > 0 && ui[field].length <= max, `${field}: required, at most ${max} characters`);
  }
  expect(/\b(mcp|plugin)\b/i.test(ui.displayName) === false, 'displayName: do not append "MCP" or "Plugin"');
  expect(ui.category, 'category: required');
  expect(ui.capabilities.length <= 20 && ui.capabilities.every((c) => c.length <= 120), 'capabilities: at most 20, each at most 120 characters');

  for (const field of ['websiteURL', 'supportURL', 'privacyPolicyURL', 'termsOfServiceURL']) {
    expect(ui[field]?.startsWith('https://') && ui[field].length <= 1024, `${field}: required HTTPS URL, at most 1024 characters`);
  }

  const prompts = ui.defaultPrompt ?? [];
  expect(prompts.length <= 3 && new Set(prompts).size === prompts.length && prompts.every((p) => p.length <= 128 && !p.includes('@')), 'defaultPrompt: at most 3 unique prompts of at most 128 characters, no @mentions');

  expect(contrast(ui.brandColor, '#FFFFFF') >= 2, 'brandColor: needs at least 2:1 contrast against white');
  expect(contrast(ui.brandColorDark, '#212121') >= 2, 'brandColorDark: needs at least 2:1 contrast against #212121');

  for (const field of ['logo', 'composerIcon']) {
    const file = ui[field] && path.join(ROOT, ui[field]);
    if (!file || !fs.existsSync(file)) {
      problems.push(`${field}: file missing`);
      continue;
    }
    const png = fs.readFileSync(file);
    const [width, height] = [png.readUInt32BE(16), png.readUInt32BE(20)];
    expect(width === height && width >= 48 && width <= 4096, `${field}: must be square, 48-4096 px (got ${width}x${height})`);
    expect(png.length <= 5 * 1024 * 1024, `${field}: at most 5 MiB`);
  }

  const { positive, negative } = openai.review.test_cases;
  expect(positive.length >= 5, 'test_cases.positive: five required');
  expect(negative.length >= 3, 'test_cases.negative: three required');
  const tools = new Set([...fs.readFileSync(MCP_SOURCE, 'utf8').matchAll(/registerTool\(\s*'([a-z_]+)'/g)].map((m) => m[1]));
  for (const test of positive) {
    expect(test.expected_behavior, `test "${test.description}": expected_behavior required`);
    for (const tool of test.tools_triggered.split(',').map((t) => t.trim())) {
      expect(tools.has(tool), `test "${test.description}": unknown tool ${tool}`);
    }
  }
  expect(!('test_credentials' in openai.review) && !('reviewer_instructions' in openai.review), 'review: credentials and reviewer instructions are rejected in the zip');
  expect(!openai.apps && !openai.hooks, 'apps and hooks cannot be submitted');

  const servers = Object.values(mcp.mcpServers);
  expect(servers.length === 1, 'mcp.json: only one MCP server per plugin');
  expect(servers.every((s) => s.type === 'streamable-http' && s.url.startsWith('https://') && !s.headers), 'mcp.json: needs a public HTTPS streamable-http server with no headers');
  expect(servers.every((s) => new URL(s.url).pathname === '/api/plugin/mcp'), 'mcp.json: must use /api/plugin/mcp; /api/mcp serves playbooks outside the plugin catalog');

  const catalog = JSON.parse(fs.readFileSync(CATALOG, 'utf8'));
  const slugs = Object.keys(catalog.playbooks);
  const claimed = Number(ui.longDescription.match(/more than ([\d,]+)/)?.[1].replace(/,/g, ''));
  expect(slugs.length > claimed, `longDescription: claims more than ${claimed} playbooks, but the catalog has ${slugs.length}`);
  for (const slug of slugs) {
    expect(fs.existsSync(path.join(TEMPLATES, `${slug}.md`)), `plugin catalog: ${slug} has no template`);
  }
  // The notice goes inside an HTML comment, which this would end early.
  expect(Object.values(catalog.licenses).every((l) => l.notice && !l.notice.includes('-->')), 'plugin catalog: every notice must be non-empty and free of "-->"');

  for (const skill of fs.readdirSync(path.join(ROOT, 'skills'))) {
    const front = fs.readFileSync(path.join(ROOT, 'skills', skill, 'SKILL.md'), 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
    expect(/^name:\s*\S/m.test(front) && /^description:\s*\S/m.test(front), `skills/${skill}/SKILL.md: name and description required in frontmatter`);
  }
  return problems;
}

/** A plain zip: deflated entries, a central directory, fixed timestamps. */
function zip(files) {
  const locals = [];
  const centrals = [];
  let offset = 0;
  for (const name of files) {
    const data = fs.readFileSync(path.join(ROOT, name));
    const packed = zlib.deflateRawSync(data);
    const fileName = Buffer.from(name);
    const common = Buffer.alloc(26);
    common.writeUInt16LE(20, 0); // version needed
    common.writeUInt16LE(0x0800, 2); // UTF-8 names
    common.writeUInt16LE(8, 4); // deflate
    common.writeUInt16LE(0, 6); // time
    common.writeUInt16LE(0x5c21, 8); // date: fixed at 2026-01-01 so builds are identical
    common.writeUInt32LE(zlib.crc32(data), 10);
    common.writeUInt32LE(packed.length, 14);
    common.writeUInt32LE(data.length, 18);
    common.writeUInt16LE(fileName.length, 22);

    const local = Buffer.concat([Buffer.from([0x50, 0x4b, 3, 4]), common, fileName, packed]);
    const extra = Buffer.alloc(14);
    extra.writeUInt32LE(offset, 10);
    centrals.push(Buffer.concat([Buffer.from([0x50, 0x4b, 1, 2, 20, 0]), common, extra, fileName]));
    locals.push(local);
    offset += local.length;
  }
  const central = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(files.length, 8);
  end.writeUInt16LE(files.length, 10);
  end.writeUInt32LE(central.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, central, end]);
}

const plugin = readJson('plugin.json');
const problems = check(plugin, readJson('mcp.json'));
if (problems.length) {
  console.error(`chatgpt-plugin has ${problems.length} problem(s):\n` + problems.map((p) => `  - ${p}`).join('\n'));
  process.exit(1);
}

const files = PACKAGE_ENTRIES.flatMap(listFiles);
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, zip(files));
console.log(`Wrote ${path.relative(process.cwd(), OUT)} (${files.length} files):\n` + files.map((f) => `  ${f}`).join('\n'));
if (!plugin.extensions['com.openai'].review.demo_recording_url) {
  console.log('\nNo demo_recording_url in plugin.json: add it in the portal, or here before rebuilding.');
}
