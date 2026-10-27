import { McpServer } from '@modelcontextprotocol/server';
import { z } from 'zod';
import { getAllPlaybooks, getPlaybookSource, getPlaybooksByCategory } from '@/lib/playbooks';
import { categories } from '@/lib/categories';
import { BASE_URL, rankPlaybooks, toDetail, toSummary } from '@/lib/api';

/**
 * The remote MCP server at /api/mcp (see src/app/api/mcp/route.ts).
 *
 * Same data and search as the JSON API and the ccplaybooks CLI, exposed as
 * tools so Claude can find a playbook and install it itself. A remote server
 * can't write to the user's disk, so get_playbook returns the template plus
 * where it belongs, and the client's own file tools do the writing.
 *
 * Everything is read-only and public: no auth, no state between requests.
 */

const SERVER_INSTRUCTIONS = `Claude Code Playbooks (${BASE_URL}) is a free library of ready-made CLAUDE.md templates and Skills for tasks like research, finance, marketing, legal review and file organization.

Typical flow: search_playbooks to find candidates, get_playbook for the chosen one, then save its template where get_playbook says (CLAUDE.md in the project folder, or .claude/skills/<name>/SKILL.md for Skills). If CLAUDE.md already exists, ask the user before replacing it; appending is usually the safer choice. Keep the attribution comment get_playbook includes at the top of the saved file.`;

const READ_ONLY = { readOnlyHint: true, idempotentHint: true, openWorldHint: false } as const;

const categoryIds = categories.map((c) => c.id) as [string, ...string[]];

function json(value: unknown) {
  return { type: 'text' as const, text: JSON.stringify(value, null, 2) };
}

function errorResult(message: string) {
  return { content: [{ type: 'text' as const, text: message }], isError: true };
}

/** A template that opens with name/description frontmatter is already a Skill. */
function skillName(template: string): string | null {
  const m = template.replace(/^﻿/, '').match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const name = m?.[1].match(/^name:\s*["']?([a-z0-9][a-z0-9-]{0,63})["']?\s*$/m)?.[1];
  return name ?? null;
}

/** Mirrors the header `ccplaybooks add` writes, so both install paths are detected the same way. */
function attributionComment(p: ReturnType<typeof toDetail>): string {
  const lines = ['<!--', `  ccplaybooks:${p.slug}`, `  Installed from ${p.links.page}`];
  if (p.attribution.sourceUrl) {
    lines.push(`  Source: ${p.attribution.sourceUrl}${p.attribution.author ? ` (${p.attribution.author})` : ''}`);
  } else if (p.attribution.author) {
    lines.push(`  Author: ${p.attribution.author}`);
  }
  lines.push('-->');
  return lines.join('\n');
}

export function createPlaybooksServer(): McpServer {
  const server = new McpServer(
    { name: 'claude-code-playbooks', title: 'Claude Code Playbooks', version: '1.0.0', websiteUrl: BASE_URL },
    { instructions: SERVER_INSTRUCTIONS }
  );

  server.registerTool(
    'search_playbooks',
    {
      title: 'Search playbooks',
      description:
        'Search the Claude Code Playbooks library. Every word in the query must match a playbook title, tag or description; results are ranked by relevance. Omit the query to list the newest playbooks.',
      inputSchema: z.object({
        query: z.string().max(200).optional().describe('Words describing the task, e.g. "invoice automation" or "literature review"'),
        category: z.enum(categoryIds).optional().describe('Only this category (see list_categories)'),
        difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
        limit: z.number().int().min(1).max(25).default(10).describe('Maximum results to return'),
      }),
      annotations: READ_ONLY,
    },
    async ({ query, category, difficulty, limit }) => {
      let matches = getAllPlaybooks().filter(
        (p) => (!category || p.category === category) && (!difficulty || p.difficulty === difficulty)
      );
      if (query?.trim()) matches = rankPlaybooks(matches, query);

      const results = matches.slice(0, limit).map((p) => {
        const s = toSummary(p);
        return {
          slug: s.slug,
          title: s.title,
          description: s.description,
          category: s.category,
          difficulty: s.difficulty,
          timeToSetup: s.timeToSetup,
          page: s.links.page,
        };
      });
      return { content: [json({ total: matches.length, returned: results.length, results })] };
    }
  );

  server.registerTool(
    'get_playbook',
    {
      title: 'Get a playbook',
      description:
        'Get one playbook by slug: what it does, who it is for, where it came from, and its full template, with where to save it. Use a slug from search_playbooks.',
      inputSchema: z.object({
        slug: z.string().min(1).max(100).describe('Playbook slug, e.g. "invoice-automation"'),
      }),
      annotations: READ_ONLY,
    },
    async ({ slug }) => {
      const playbook = /^[a-z0-9][a-z0-9-]*$/.test(slug) ? getPlaybookSource(slug) : null;
      if (!playbook) {
        const suggestions = rankPlaybooks(getAllPlaybooks(), slug.replace(/[-_]+/g, ' '))
          .slice(0, 3)
          .map((p) => p.slug);
        return errorResult(
          `No playbook "${slug}".` + (suggestions.length ? ` Did you mean: ${suggestions.join(', ')}?` : ' Use search_playbooks to find one.')
        );
      }

      const detail = toDetail(playbook);
      if (!detail.template) return errorResult(`Playbook "${slug}" has no template.`);

      const skill = skillName(detail.template);
      const { template, ...meta } = detail;
      const install = skill
        ? {
            type: 'skill',
            path: `.claude/skills/${skill}/SKILL.md`,
            note: 'This template is a Skill. Save it unchanged (frontmatter first), then put the attribution comment right after the frontmatter. Use ~/.claude/skills/ instead to make it available in every project.',
          }
        : {
            type: 'claude-md',
            path: 'CLAUDE.md',
            note: 'Save in the root of the project folder. If CLAUDE.md already exists, ask the user whether to append (usually best) or replace.',
          };

      return {
        content: [
          json({ ...meta, install, attributionComment: attributionComment(detail) }),
          { type: 'text' as const, text: template },
        ],
      };
    }
  );

  server.registerTool(
    'list_categories',
    {
      title: 'List categories',
      description: 'List playbook categories with how many playbooks each has. Use an id to filter search_playbooks.',
      inputSchema: z.object({}),
      annotations: READ_ONLY,
    },
    async () => {
      const results = categories
        .map((c) => ({ id: c.id, name: c.name, description: c.description, count: getPlaybooksByCategory(c.id).length }))
        .filter((c) => c.count > 0);
      return { content: [json({ total: results.length, results })] };
    }
  );

  return server;
}
