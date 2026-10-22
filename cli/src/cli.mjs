import { parseArgs } from 'node:util';
import { relative, isAbsolute, resolve } from 'node:path';
import { ApiError, apiBase, getCategories, getPlaybook, searchPlaybooks } from './api.mjs';
import { InstallConflict, applyPlan, planInstall, readFileOrNull } from './install.mjs';
import { VERSION } from './version.mjs';

const HELP = `ccplaybooks ${VERSION} — Claude Code Playbooks from the command line

Usage:
  ccplaybooks search <query...>    Find playbooks
  ccplaybooks show <slug>          Details for one playbook
  ccplaybooks add <slug>           Install a playbook into this folder
  ccplaybooks categories           List categories

Search options:
  -c, --category <id>     Only this category (see \`ccplaybooks categories\`)
  -d, --difficulty <lvl>  beginner | intermediate | advanced
  -t, --tag <tag>         Only playbooks with this tag
  -n, --limit <n>         Results per page, 1-100 (default 20)
      --offset <n>        Skip the first n results

Show options:
      --template          Print only the raw template (pipe-friendly)

Add options:
      --skill             Install as a Skill (.claude/skills/<name>/SKILL.md)
      --claude-md         Install as CLAUDE.md, even if the template is a Skill
  -g, --global            With --skill: install to ~/.claude/skills instead
      --dir <path>        Install into this folder instead of the current one
  -a, --append            Add to the end of an existing CLAUDE.md
  -f, --force             Overwrite an existing file
      --dry-run           Show what would be written, write nothing

  By default, add writes CLAUDE.md, or a Skill when the template is one.

Global options:
      --json              Machine-readable output
  -h, --help              Show this help
  -v, --version           Show the version

Examples:
  npx ccplaybooks search invoice automation
  npx ccplaybooks add invoice-automation
  npx ccplaybooks show ai-seo --template > notes.md

Browse everything at https://www.claudecodehq.com/playbooks`;

const OPTIONS = {
  json: { type: 'boolean' },
  help: { type: 'boolean', short: 'h' },
  version: { type: 'boolean', short: 'v' },
  category: { type: 'string', short: 'c' },
  difficulty: { type: 'string', short: 'd' },
  tag: { type: 'string', short: 't' },
  limit: { type: 'string', short: 'n' },
  offset: { type: 'string' },
  template: { type: 'boolean' },
  skill: { type: 'boolean' },
  'claude-md': { type: 'boolean' },
  global: { type: 'boolean', short: 'g' },
  dir: { type: 'string' },
  append: { type: 'boolean', short: 'a' },
  force: { type: 'boolean', short: 'f' },
  'dry-run': { type: 'boolean' },
};

class UsageError extends Error {}

function makeStyle(stream, env) {
  const on = Boolean(stream.isTTY) && !env.NO_COLOR && env.TERM !== 'dumb';
  const wrap = (open, close) => (s) => (on ? `\x1b[${open}m${s}\x1b[${close}m` : String(s));
  return { bold: wrap(1, 22), dim: wrap(2, 22), cyan: wrap(36, 39), green: wrap(32, 39), yellow: wrap(33, 39), red: wrap(31, 39) };
}

function truncate(text, width) {
  const s = String(text ?? '').replace(/\s+/g, ' ').trim();
  return s.length > width ? s.slice(0, Math.max(0, width - 1)) + '…' : s;
}

function displayPath(path, cwd) {
  const rel = relative(cwd, path);
  return rel && !rel.startsWith('..') && !isAbsolute(rel) ? `./${rel.replace(/\\/g, '/')}` : path;
}

/**
 * Runs one CLI invocation and resolves to the exit code: 0 success,
 * 1 runtime failure (network, not found, file conflict), 2 bad usage.
 */
export async function run(argv, io = {}) {
  const stdout = io.stdout ?? process.stdout;
  const stderr = io.stderr ?? process.stderr;
  const env = io.env ?? process.env;
  const cwd = io.cwd ?? process.cwd();
  const apiOpts = { base: apiBase(env), fetchImpl: io.fetch ?? fetch };
  const out = (s = '') => stdout.write(s + '\n');
  const err = (s = '') => stderr.write(s + '\n');
  const style = makeStyle(stdout, env);
  const errStyle = makeStyle(stderr, env);
  const width = Math.max(40, Math.min(stdout.columns || 100, 120));

  let values, positionals;
  try {
    ({ values, positionals } = parseArgs({ args: argv, options: OPTIONS, allowPositionals: true, strict: true }));
  } catch (e) {
    err(errStyle.red(e.message.replace(/\. To specify a positional.*$/s, '.')));
    err(`Run ${errStyle.bold('ccplaybooks --help')} for usage.`);
    return 2;
  }

  const [command, ...rest] = positionals;
  if (values.version) {
    out(VERSION);
    return 0;
  }
  if (values.help || !command || command === 'help') {
    out(HELP);
    return 0;
  }

  const json = (data) => out(JSON.stringify(data, null, 2));

  try {
    switch (command) {
      case 'search':
      case 'find':
        return await cmdSearch();
      case 'show':
      case 'info':
        return await cmdShow();
      case 'add':
      case 'install':
        return await cmdAdd();
      case 'categories':
        return await cmdCategories();
      default:
        throw new UsageError(`Unknown command "${command}".`);
    }
  } catch (e) {
    if (e instanceof UsageError) {
      err(errStyle.red(e.message));
      err(`Run ${errStyle.bold('ccplaybooks --help')} for usage.`);
      return 2;
    }
    if (e instanceof ApiError || e instanceof InstallConflict) {
      if (values.json) json({ error: { message: e.message, code: e.code } });
      else err(errStyle.red(e.message));
      return 1;
    }
    throw e;
  }

  async function cmdSearch() {
    const q = rest.join(' ').trim();
    const res = await searchPlaybooks(
      { q, category: values.category, difficulty: values.difficulty, tag: values.tag, limit: values.limit, offset: values.offset },
      apiOpts
    );
    if (values.json) { json(res); return 0; }

    if (res.total === 0) {
      out(`No playbooks match${q ? ` "${q}"` : ''}. Try fewer or broader words.`);
      return 0;
    }
    const first = res.offset + 1;
    const last = res.offset + res.results.length;
    out(style.dim(`${res.total} playbook${res.total === 1 ? '' : 's'}${q ? ` for "${q}"` : ''}`) + '\n');
    for (const p of res.results) {
      out(`  ${style.bold(style.cyan(p.slug))}`);
      out(`    ${truncate(p.title, width - 4)}`);
      out(`    ${style.dim(truncate(`${p.category} · ${p.difficulty} · ${p.timeToSetup}`, width - 4))}`);
    }
    out('');
    if (last < res.total) out(style.dim(`Showing ${first}-${last} of ${res.total}. Next page: --offset ${last}`));
    out(`Details: ${style.bold('ccplaybooks show <slug>')}   Install: ${style.bold('ccplaybooks add <slug>')}`);
    return 0;
  }

  async function fetchPlaybook() {
    const slug = rest[0];
    if (!slug) throw new UsageError(`Missing playbook slug. Example: ccplaybooks ${command} invoice-automation`);
    if (rest.length > 1) throw new UsageError(`Expected one slug, got ${rest.length}: ${rest.join(' ')}`);
    try {
      return await getPlaybook(slug, apiOpts);
    } catch (e) {
      if (e instanceof ApiError && e.status === 404) {
        const suggestions = await searchPlaybooks({ q: slug.replace(/[-_]+/g, ' '), limit: 3 }, apiOpts)
          .then((r) => r.results.map((p) => p.slug))
          .catch(() => []);
        e.message = `No playbook "${slug}".` + (suggestions.length ? ` Did you mean: ${suggestions.join(', ')}?` : '');
      }
      throw e;
    }
  }

  async function cmdShow() {
    const p = await fetchPlaybook();
    if (values.template) {
      stdout.write(p.template ?? '');
      return 0;
    }
    if (values.json) { json(p); return 0; }

    const row = (label, value) => value && out(`  ${style.dim(label.padEnd(13))}${value}`);
    out(style.bold(p.title));
    out(p.description);
    out('');
    row('Category', p.category);
    row('Difficulty', p.difficulty);
    row('Setup time', p.timeToSetup);
    row('Tags', p.tags.join(', '));
    row("Who it's for", p.targetAudience);
    row('Example', p.exampleUseCase);
    row('Source', p.attribution.sourceUrl ? `${p.attribution.sourceUrl} (${p.attribution.author})` : p.attribution.author);
    row('Page', p.links.page);
    out('');
    out(`Install: ${style.bold(`ccplaybooks add ${p.slug}`)}   Preview: ${style.bold(`ccplaybooks show ${p.slug} --template`)}`);
    return 0;
  }

  async function cmdAdd() {
    if (values.skill && values['claude-md']) throw new UsageError('Choose either --skill or --claude-md, not both.');
    if (values.append && values.force) throw new UsageError('Choose either --append or --force, not both.');
    const p = await fetchPlaybook();
    const plan = planInstall(
      p,
      {
        mode: values.skill ? 'skill' : values['claude-md'] ? 'claude-md' : 'auto',
        dir: values.dir ? resolve(cwd, values.dir) : cwd,
        global: values.global,
        force: values.force,
        append: values.append,
        home: env.HOME || env.USERPROFILE || undefined,
        display: (path) => displayPath(path, cwd),
      },
      readFileOrNull
    );
    const shown = displayPath(plan.path, cwd);

    if (values['dry-run']) {
      if (values.json) { json({ dryRun: true, mode: plan.mode, action: plan.action, path: plan.path, content: plan.content }); return 0; }
      out(`Would ${plan.action} ${style.bold(shown)} (${plan.content.split('\n').length} lines). Nothing was written.`);
      return 0;
    }

    applyPlan(plan);
    if (values.json) { json({ mode: plan.mode, action: plan.action, path: plan.path, slug: p.slug }); return 0; }

    const verb = { create: 'Created', overwrite: 'Replaced', append: 'Appended to' }[plan.action];
    out(`${style.green('✓')} ${verb} ${style.bold(shown)}${plan.mode === 'skill' ? ' (Skill)' : ''}`);
    if (p.attribution.sourceUrl) out(style.dim(`  Source: ${p.attribution.sourceUrl}`));
    out('');
    out(
      plan.mode === 'skill'
        ? `Claude Code picks up the Skill automatically. Start it with ${style.bold('claude')} and ask for what the Skill does.`
        : `Start Claude Code in ${values.dir ? style.bold(values.dir) : 'this folder'} with ${style.bold('claude')}. Setup guide: ${p.links.page}`
    );
    return 0;
  }

  async function cmdCategories() {
    const res = await getCategories(apiOpts);
    if (values.json) { json(res); return 0; }
    const idWidth = Math.max(...res.results.map((c) => c.id.length));
    for (const c of res.results) {
      out(`  ${style.cyan(c.id.padEnd(idWidth))}  ${String(c.count).padStart(4)}  ${style.dim(c.name)}`);
    }
    out('');
    out(`Filter a search: ${style.bold('ccplaybooks search <query> --category <id>')}`);
    return 0;
  }
}
