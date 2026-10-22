/**
 * Deciding what `ccplaybooks add` writes, and where.
 *
 * planInstall() is pure: it takes the playbook and a readFile function and
 * returns a plan (path, content, action) without touching the disk, so every
 * branch is unit-testable and --dry-run is free. applyPlan() does the write.
 *
 * Two install targets:
 *  - CLAUDE.md in the project folder (most playbooks are CLAUDE.md templates)
 *  - .claude/skills/<name>/SKILL.md (or ~/.claude/skills with --global) for the
 *    templates that are already Skills, i.e. start with name/description
 *    frontmatter, or when the user asks for --skill
 *
 * Every write carries an attribution comment with a `ccplaybooks:<slug>`
 * marker, so re-running `add` can tell the playbook is already there.
 */
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { homedir } from 'node:os';

const SKILL_NAME_RE = /^[a-z0-9][a-z0-9-]{0,63}$/;
const MAX_SKILL_DESCRIPTION = 1024;

export class InstallConflict extends Error {
  constructor(message, { alreadyInstalled = false } = {}) {
    super(message);
    this.alreadyInstalled = alreadyInstalled;
  }
}

/** Splits leading YAML frontmatter off a template. */
export function splitFrontmatter(template) {
  const text = template.replace(/^﻿/, '').replace(/\r\n/g, '\n');
  const m = text.match(/^---\n([\s\S]*?)\n---[ \t]*(?:\n|$)/);
  if (!m) return { frontmatter: null, name: null, body: text };
  const name = m[1].match(/^name:\s*["']?([^"'\n]+?)["']?\s*$/m)?.[1] ?? null;
  return { frontmatter: m[0].trimEnd(), name, body: text.slice(m[0].length) };
}

export function marker(slug) {
  return `ccplaybooks:${slug}`;
}

export function hasMarker(text, slug) {
  return new RegExp(`${marker(slug).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=\\s|-->)`).test(text);
}

export function attributionComment(playbook) {
  const lines = [`<!--`, `  ${marker(playbook.slug)}`, `  Installed from ${playbook.links.page}`];
  const { author, sourceUrl } = playbook.attribution ?? {};
  if (sourceUrl) lines.push(`  Source: ${sourceUrl}${author ? ` (${author})` : ''}`);
  else if (author) lines.push(`  Author: ${author}`);
  lines.push(`-->`);
  return lines.join('\n');
}

function skillFrontmatter(playbook) {
  let description = playbook.description.replace(/\s+/g, ' ').trim();
  if (description.length > MAX_SKILL_DESCRIPTION) description = description.slice(0, MAX_SKILL_DESCRIPTION - 1) + '…';
  // A JSON string literal is a valid YAML double-quoted scalar.
  return `---\nname: ${playbook.slug}\ndescription: ${JSON.stringify(description)}\n---`;
}

/**
 * @param playbook  detail object from GET /api/v1/playbooks/{slug}
 * @param options   { mode: 'auto'|'skill'|'claude-md', dir, global, force, append, home, display }
 *                  display(path) formats paths in error messages (default: as-is)
 * @param readFile  (path) => string | null   — null when the file doesn't exist
 * @returns { mode, path, content, action: 'create'|'overwrite'|'append' }
 * @throws InstallConflict when the target exists and no flag says what to do
 */
export function planInstall(playbook, options, readFile) {
  const { dir = process.cwd(), global = false, force = false, append = false, home = homedir() } = options;
  const show = options.display ?? ((p) => p);
  if (!playbook.template) {
    throw new InstallConflict(`Playbook "${playbook.slug}" has no template to install.`);
  }

  const parsed = splitFrontmatter(playbook.template);
  let mode = options.mode ?? 'auto';
  if (mode === 'auto') mode = parsed.frontmatter && parsed.name ? 'skill' : 'claude-md';
  if (global && mode !== 'skill') {
    throw new InstallConflict('--global only applies to Skills. Add --skill to install this as a global Skill.');
  }

  const header = attributionComment(playbook);
  const body = parsed.body.replace(/^\n+/, '').trimEnd() + '\n';

  if (mode === 'skill') {
    const name = parsed.name && SKILL_NAME_RE.test(parsed.name) ? parsed.name : playbook.slug;
    const root = global ? join(home, '.claude', 'skills') : join(dir, '.claude', 'skills');
    const path = join(root, name, 'SKILL.md');
    const content = `${parsed.frontmatter && parsed.name ? parsed.frontmatter : skillFrontmatter(playbook)}\n\n${header}\n\n${body}`;
    const existing = readFile(path);
    if (existing !== null && !force) {
      throw new InstallConflict(
        hasMarker(existing, playbook.slug)
          ? `Already installed at ${show(path)}. Use --force to reinstall.`
          : `${show(path)} already exists. Use --force to overwrite it.`,
        { alreadyInstalled: hasMarker(existing, playbook.slug) }
      );
    }
    return { mode, path, content, action: existing === null ? 'create' : 'overwrite' };
  }

  const path = join(dir, 'CLAUDE.md');
  const section = `${header}\n\n${body}`;
  const existing = readFile(path);
  if (existing === null) return { mode, path, content: section, action: 'create' };
  if (force) return { mode, path, content: section, action: 'overwrite' };
  if (hasMarker(existing, playbook.slug)) {
    throw new InstallConflict(`"${playbook.slug}" is already in ${show(path)}. Use --force to replace the whole file.`, {
      alreadyInstalled: true,
    });
  }
  if (append) {
    const sep = existing.endsWith('\n') ? '\n' : '\n\n';
    return { mode, path, content: `${existing}${sep}${section}`, action: 'append' };
  }
  throw new InstallConflict(
    `${show(path)} already exists. Use --append to add this playbook to the end of it, or --force to replace it.`
  );
}

export function readFileOrNull(path) {
  try {
    return readFileSync(path, 'utf8');
  } catch (err) {
    if (err.code === 'ENOENT') return null;
    throw err;
  }
}

export function applyPlan(plan) {
  mkdirSync(dirname(plan.path), { recursive: true });
  writeFileSync(plan.path, plan.content, 'utf8');
}
