/**
 * Generates a static public/llms.txt from the playbook MDX files.
 * Run with: node scripts/generate-llms-txt.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const playbooksDir = path.join(projectRoot, 'src', 'content', 'playbooks');
const outputPath = path.join(projectRoot, 'public', 'llms.txt');
const baseUrl = 'https://www.claudecodehq.com';

// Category order and display names (mirrors src/lib/categories.ts)
const categories = [
  { id: 'file-organization', name: 'File Organization' },
  { id: 'note-management', name: 'Note Management' },
  { id: 'task-management', name: 'Task Management' },
  { id: 'productivity', name: 'Productivity' },
  { id: 'knowledge-management', name: 'Knowledge Management' },
  { id: 'career-development', name: 'Career Development' },
  { id: 'personal-development', name: 'Personal Development' },
  { id: 'education', name: 'Education' },
  { id: 'research-writing', name: 'Research & Writing' },
  { id: 'market-research', name: 'Market Research' },
  { id: 'finance-accounting', name: 'Finance & Accounting' },
  { id: 'finance', name: 'Finance' },
  { id: 'marketing-content', name: 'Marketing & Content' },
  { id: 'legal-compliance', name: 'Legal & Compliance' },
  { id: 'hr-recruiting', name: 'HR & Recruiting' },
  { id: 'creative-design', name: 'Creative & Design' },
  { id: 'creative-writing', name: 'Creative Writing' },
  { id: 'developer-tools', name: 'Developer Tools' },
  { id: 'academic-research', name: 'Academic Research' },
  { id: 'executive-strategy', name: 'Executive Strategy' },
  { id: 'sales-revenue', name: 'Sales & Revenue' },
  { id: 'project-management', name: 'Project Management' },
  { id: 'media-production', name: 'Media Production' },
  { id: 'communications', name: 'Communications' },
  { id: 'operations-compliance', name: 'Operations & Compliance' },
  { id: 'data-reporting', name: 'Data & Reporting' },
];

// Read all playbook MDX files
const files = fs.readdirSync(playbooksDir).filter(f => f.endsWith('.mdx'));
const playbooks = files.map(file => {
  const content = fs.readFileSync(path.join(playbooksDir, file), 'utf8');
  const { data } = matter(content);
  return {
    slug: file.replace(/\.mdx$/, ''),
    title: data.title,
    description: data.description,
    category: data.category,
  };
});

// Group by category
const byCategory = new Map();
for (const p of playbooks) {
  const existing = byCategory.get(p.category) || [];
  existing.push(p);
  byCategory.set(p.category, existing);
}

// Build output
const lines = [];

lines.push('# Claude Code Playbooks');
lines.push('');
lines.push(`> A free, open-source collection of ${playbooks.length}+ ready-to-use AI workflows for Claude Code, Codex CLI, Windsurf, Cursor, and other AI coding agents. Each playbook is a copy-paste CLAUDE.md template.`);
lines.push('');
lines.push('Browse, search, and copy playbooks that turn AI coding agents into specialized tools for any task — from file organization to financial analysis to scientific research.');
lines.push('');

lines.push('## Docs');
lines.push('');
lines.push(`- [Browse All Playbooks](${baseUrl}/playbooks): Search and filter the full playbook catalog`);
lines.push(`- [Latest Playbooks](${baseUrl}/latest): Most recently added playbooks`);
lines.push(`- [Blog](${baseUrl}/blog): Guides, tutorials, and Claude Code tips`);
lines.push(`- [GitHub Repository](https://github.com/Danielopol/Claude-Code-Playbooks): Source code and contributions`);
lines.push('');

for (const cat of categories) {
  const catPlaybooks = byCategory.get(cat.id);
  if (!catPlaybooks || catPlaybooks.length === 0) continue;

  lines.push(`## ${cat.name}`);
  lines.push('');

  const sorted = [...catPlaybooks].sort((a, b) => a.title.localeCompare(b.title));
  for (const p of sorted) {
    lines.push(`- [${p.title}](${baseUrl}/playbooks/${p.slug}): ${p.description}`);
  }

  lines.push('');
}

const output = lines.join('\n').trimEnd() + '\n';
fs.writeFileSync(outputPath, output, 'utf8');
console.log(`Generated ${outputPath} (${playbooks.length} playbooks)`);
