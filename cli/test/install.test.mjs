import { test } from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { InstallConflict, hasMarker, planInstall, splitFrontmatter } from '../src/install.mjs';

const base = {
  slug: 'invoice-automation',
  title: 'Invoice Automation',
  description: 'Extract invoice data.',
  attribution: { author: 'community', sourceUrl: 'https://github.com/x/y' },
  links: { page: 'https://www.claudecodehq.com/playbooks/invoice-automation' },
  template: '# Invoices\n\nDo the thing.\n',
};
const skillTemplate = '---\nname: ai-seo\ndescription: "When the user wants SEO."\n---\n\n# AI SEO\n';
const files = (map) => (path) => (path in map ? map[path] : null);
const dir = join('/proj');
const claudeMd = join(dir, 'CLAUDE.md');

test('splitFrontmatter handles CRLF, BOM and quoted names', () => {
  const r = splitFrontmatter('﻿---\r\nname: "ai-seo"\r\ndescription: x\r\n---\r\nBody\r\n');
  assert.equal(r.name, 'ai-seo');
  assert.equal(r.body, 'Body\n');
  assert.equal(splitFrontmatter('# No frontmatter').frontmatter, null);
});

test('CLAUDE.md template creates CLAUDE.md with attribution', () => {
  const plan = planInstall(base, { dir }, files({}));
  assert.equal(plan.mode, 'claude-md');
  assert.equal(plan.action, 'create');
  assert.equal(plan.path, claudeMd);
  assert.ok(plan.content.startsWith('<!--\n  ccplaybooks:invoice-automation\n'));
  assert.ok(plan.content.includes('Source: https://github.com/x/y (community)'));
  assert.ok(plan.content.endsWith('Do the thing.\n'));
});

test('existing CLAUDE.md is never overwritten silently', () => {
  assert.throws(() => planInstall(base, { dir }, files({ [claudeMd]: '# Mine\n' })), (e) => {
    assert.ok(e instanceof InstallConflict);
    assert.match(e.message, /--append/);
    return true;
  });
});

test('--append keeps the existing content first', () => {
  const plan = planInstall(base, { dir, append: true }, files({ [claudeMd]: '# Mine' }));
  assert.equal(plan.action, 'append');
  assert.ok(plan.content.startsWith('# Mine\n\n<!--'));
});

test('re-adding the same playbook is detected, even with --append', () => {
  const first = planInstall(base, { dir }, files({})).content;
  assert.throws(
    () => planInstall(base, { dir, append: true }, files({ [claudeMd]: first })),
    (e) => e.alreadyInstalled === true
  );
});

test('marker for one slug does not match a longer slug', () => {
  assert.equal(hasMarker('<!--\n  ccplaybooks:invoice-automation-pro\n-->', 'invoice-automation'), false);
  assert.equal(hasMarker('<!--\n  ccplaybooks:invoice-automation\n-->', 'invoice-automation'), true);
});

test('--force replaces an existing CLAUDE.md', () => {
  const plan = planInstall(base, { dir, force: true }, files({ [claudeMd]: '# Mine' }));
  assert.equal(plan.action, 'overwrite');
  assert.ok(!plan.content.includes('# Mine'));
});

test('a template with Skill frontmatter installs as a Skill by default, keeping its frontmatter', () => {
  const plan = planInstall({ ...base, slug: 'ai-seo', template: skillTemplate }, { dir }, files({}));
  assert.equal(plan.mode, 'skill');
  assert.equal(plan.path, join(dir, '.claude', 'skills', 'ai-seo', 'SKILL.md'));
  assert.ok(plan.content.startsWith('---\nname: ai-seo\ndescription: "When the user wants SEO."\n---\n\n<!--'));
});

test('--claude-md strips Skill frontmatter', () => {
  const plan = planInstall({ ...base, slug: 'ai-seo', template: skillTemplate }, { dir, mode: 'claude-md' }, files({}));
  assert.equal(plan.path, claudeMd);
  assert.ok(!plan.content.includes('name: ai-seo'));
  assert.ok(plan.content.includes('# AI SEO'));
});

test('--skill on a plain template generates valid frontmatter', () => {
  const plan = planInstall({ ...base, description: 'Says "hi": a: b' }, { dir, mode: 'skill' }, files({}));
  assert.ok(plan.content.startsWith('---\nname: invoice-automation\ndescription: "Says \\"hi\\": a: b"\n---\n'));
});

test('--global installs under the home folder and requires Skill mode', () => {
  const home = join('/home/me');
  const plan = planInstall({ ...base, template: skillTemplate }, { dir, global: true, home }, files({}));
  assert.equal(plan.path, join(home, '.claude', 'skills', 'ai-seo', 'SKILL.md'));
  assert.throws(() => planInstall(base, { dir, global: true, home }, files({})), /--global only applies to Skills/);
});

test('existing SKILL.md needs --force', () => {
  const path = join(dir, '.claude', 'skills', 'ai-seo', 'SKILL.md');
  const pb = { ...base, slug: 'ai-seo', template: skillTemplate };
  assert.throws(() => planInstall(pb, { dir }, files({ [path]: 'x' })), /--force/);
  assert.equal(planInstall(pb, { dir, force: true }, files({ [path]: 'x' })).action, 'overwrite');
});

test('an unsafe frontmatter name falls back to the slug for the folder', () => {
  const pb = { ...base, template: '---\nname: ../../etc\n---\nBody' };
  const plan = planInstall(pb, { dir, mode: 'skill' }, files({}));
  assert.equal(plan.path, join(dir, '.claude', 'skills', 'invoice-automation', 'SKILL.md'));
});
