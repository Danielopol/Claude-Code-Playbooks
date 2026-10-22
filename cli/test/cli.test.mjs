import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { run } from '../src/cli.mjs';

const playbook = {
  slug: 'invoice-automation',
  title: 'Invoice Automation',
  description: 'Extract invoice data.',
  category: 'finance-accounting',
  difficulty: 'advanced',
  timeToSetup: '15 minutes',
  tags: ['invoices'],
  createdAt: '2026-01-01',
  attribution: { author: 'community', sourceUrl: 'https://github.com/x/y' },
  links: {
    page: 'https://www.claudecodehq.com/playbooks/invoice-automation',
    template: 'https://www.claudecodehq.com/templates/invoice-automation.md',
    api: 'https://www.claudecodehq.com/api/v1/playbooks/invoice-automation',
  },
  template: '# Invoices\n',
};

/** Fake fetch that answers like /api/v1 and records the URLs it was asked for. */
function fakeApi() {
  const calls = [];
  const fetch = async (url) => {
    calls.push(url);
    const u = new URL(url);
    const reply = (status, body) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });
    if (u.pathname === '/api/v1/playbooks') {
      return reply(200, { total: 1, limit: 20, offset: 0, results: [playbook] });
    }
    if (u.pathname === '/api/v1/playbooks/invoice-automation') return reply(200, playbook);
    if (u.pathname.startsWith('/api/v1/playbooks/')) return reply(404, { error: { code: 'not_found', message: 'nope' } });
    if (u.pathname === '/api/v1/categories') {
      return reply(200, { total: 1, results: [{ id: 'finance-accounting', name: 'Finance', count: 12 }] });
    }
    return reply(404, { error: { code: 'not_found', message: 'nope' } });
  };
  return { fetch, calls };
}

function capture() {
  let text = '';
  return { stream: { write: (s) => (text += s), isTTY: false }, get text() { return text; } };
}

async function cli(args, { cwd = process.cwd(), api = fakeApi() } = {}) {
  const stdout = capture();
  const stderr = capture();
  const env = { CCPLAYBOOKS_API_URL: 'https://api.test/api/v1', HOME: cwd };
  const code = await run(args, { stdout: stdout.stream, stderr: stderr.stream, env, cwd, fetch: api.fetch });
  return { code, out: stdout.text, err: stderr.text, calls: api.calls };
}

test('search sends the query and filters, and lists slugs', async () => {
  const r = await cli(['search', 'invoice', 'automation', '-c', 'finance-accounting', '-n', '5']);
  assert.equal(r.code, 0);
  assert.equal(r.calls[0], 'https://api.test/api/v1/playbooks?q=invoice+automation&category=finance-accounting&limit=5');
  assert.match(r.out, /invoice-automation/);
});

test('search --json prints the raw API response', async () => {
  const r = await cli(['search', 'x', '--json']);
  assert.equal(JSON.parse(r.out).results[0].slug, 'invoice-automation');
});

test('show --template prints only the template', async () => {
  const r = await cli(['show', 'invoice-automation', '--template']);
  assert.equal(r.out, '# Invoices\n');
});

test('unknown slug exits 1 with suggestions', async () => {
  const r = await cli(['show', 'invoice-automate']);
  assert.equal(r.code, 1);
  assert.match(r.err, /No playbook "invoice-automate"\. Did you mean: invoice-automation\?/);
});

test('add writes CLAUDE.md, then refuses to add it twice', async () => {
  const cwd = mkdtempSync(join(tmpdir(), 'ccpb-'));
  try {
    const first = await cli(['add', 'invoice-automation'], { cwd });
    assert.equal(first.code, 0, first.err);
    assert.match(first.out, /Created \.\/CLAUDE\.md/);
    assert.match(readFileSync(join(cwd, 'CLAUDE.md'), 'utf8'), /ccplaybooks:invoice-automation[\s\S]*# Invoices/);

    const again = await cli(['add', 'invoice-automation', '--append'], { cwd });
    assert.equal(again.code, 1);
    assert.match(again.err, /already in/);
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});

test('add --dry-run writes nothing', async () => {
  const cwd = mkdtempSync(join(tmpdir(), 'ccpb-'));
  try {
    writeFileSync(join(cwd, 'CLAUDE.md'), '# Mine\n');
    const r = await cli(['add', 'invoice-automation', '--append', '--dry-run'], { cwd });
    assert.equal(r.code, 0, r.err);
    assert.match(r.out, /Would append \.\/CLAUDE\.md/);
    assert.equal(readFileSync(join(cwd, 'CLAUDE.md'), 'utf8'), '# Mine\n');
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});

test('add --skill writes under .claude/skills', async () => {
  const cwd = mkdtempSync(join(tmpdir(), 'ccpb-'));
  try {
    const r = await cli(['add', 'invoice-automation', '--skill'], { cwd });
    assert.equal(r.code, 0, r.err);
    assert.match(r.out, /\.\/\.claude\/skills\/invoice-automation\/SKILL\.md \(Skill\)/);
    assert.match(readFileSync(join(cwd, '.claude', 'skills', 'invoice-automation', 'SKILL.md'), 'utf8'), /^---\nname: invoice-automation\n/);
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});

test('usage errors exit 2', async () => {
  assert.equal((await cli(['frobnicate'])).code, 2);
  assert.equal((await cli(['add'])).code, 2);
  assert.equal((await cli(['search', '--bogus'])).code, 2);
  assert.equal((await cli(['add', 'x', '--skill', '--claude-md'])).code, 2);
});

test('network failure exits 1 with a readable message', async () => {
  const api = { calls: [], fetch: async () => { throw new TypeError('fetch failed', { cause: { code: 'ENOTFOUND' } }); } };
  const r = await cli(['categories'], { api });
  assert.equal(r.code, 1);
  assert.match(r.err, /Could not reach https:\/\/api\.test\/api\/v1 \(ENOTFOUND\)/);
});

test('no command prints help', async () => {
  const r = await cli([]);
  assert.equal(r.code, 0);
  assert.match(r.out, /Usage:/);
});
