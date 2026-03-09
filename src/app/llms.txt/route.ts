import { NextResponse } from 'next/server';
import { getAllPlaybooks } from '@/lib/playbooks';
import { categories } from '@/lib/categories';
import { Category } from '@/types/playbook';

export const dynamic = 'force-static';

function generateLlmsTxt(): string {
  const playbooks = getAllPlaybooks();
  const baseUrl = 'https://www.claudecodehq.com';

  const lines: string[] = [];

  // H1 + blockquote summary
  lines.push('# Claude Code Playbooks');
  lines.push('');
  lines.push(`> A free, open-source collection of ${playbooks.length}+ ready-to-use AI workflows for Claude Code, Codex CLI, Windsurf, Cursor, and other AI coding agents. Each playbook is a copy-paste CLAUDE.md template.`);
  lines.push('');

  // Site overview
  lines.push('Browse, search, and copy playbooks that turn AI coding agents into specialized tools for any task — from file organization to financial analysis to scientific research.');
  lines.push('');

  // Docs section
  lines.push('## Docs');
  lines.push('');
  lines.push(`- [Browse All Playbooks](${baseUrl}/playbooks): Search and filter the full playbook catalog`);
  lines.push(`- [Latest Playbooks](${baseUrl}/latest): Most recently added playbooks`);
  lines.push(`- [Blog](${baseUrl}/blog): Guides, tutorials, and Claude Code tips`);
  lines.push(`- [GitHub Repository](https://github.com/Danielopol/Claude-Code-Playbooks): Source code and contributions`);
  lines.push('');

  // Group playbooks by category
  const playbooksByCategory = new Map<Category, typeof playbooks>();
  for (const playbook of playbooks) {
    const existing = playbooksByCategory.get(playbook.category) || [];
    existing.push(playbook);
    playbooksByCategory.set(playbook.category, existing);
  }

  // Output each category as an H2 section, in the order defined in categories.ts
  for (const cat of categories) {
    const catPlaybooks = playbooksByCategory.get(cat.id);
    if (!catPlaybooks || catPlaybooks.length === 0) continue;

    lines.push(`## ${cat.name}`);
    lines.push('');

    // Sort alphabetically by title within each category
    const sorted = [...catPlaybooks].sort((a, b) => a.title.localeCompare(b.title));

    for (const p of sorted) {
      lines.push(`- [${p.title}](${baseUrl}/playbooks/${p.slug}): ${p.description}`);
    }

    lines.push('');
  }

  return lines.join('\n').trimEnd() + '\n';
}

export async function GET() {
  const content = generateLlmsTxt();

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
