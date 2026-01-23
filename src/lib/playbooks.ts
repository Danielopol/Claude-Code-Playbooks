import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import { Playbook, PlaybookFrontmatter, Category, Difficulty } from '@/types/playbook';

const playbooksDirectory = path.join(process.cwd(), 'src/content/playbooks');
const templatesDirectory = path.join(process.cwd(), 'public/templates');

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}

// Helper to normalize difficulty values (handles case and defaults)
function normalizeDifficulty(difficulty: string | undefined): Difficulty {
  const normalized = difficulty?.toLowerCase()?.trim() as Difficulty;
  if (normalized === 'beginner' || normalized === 'intermediate' || normalized === 'advanced') {
    return normalized;
  }
  return 'beginner'; // Default fallback
}

export function getPlaybookSlugs(): string[] {
  if (!fs.existsSync(playbooksDirectory)) {
    return [];
  }
  const files = fs.readdirSync(playbooksDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export async function getPlaybookBySlug(slug: string): Promise<Playbook | null> {
  const fullPath = path.join(playbooksDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const frontmatter = data as PlaybookFrontmatter;

  // Try to load template from public/templates/ folder first
  const templatePath = path.join(templatesDirectory, `${slug}.md`);
  let claudeMdTemplate: string | undefined;

  if (fs.existsSync(templatePath)) {
    claudeMdTemplate = fs.readFileSync(templatePath, 'utf8');
  } else {
    // Fall back to extracting from content
    const templateMatch = content.match(/```(?:markdown|md)?\s*\n([\s\S]*?)```/);
    claudeMdTemplate = templateMatch ? templateMatch[1].trim() : undefined;
  }

  // Convert markdown content to HTML
  const htmlContent = await markdownToHtml(content);

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    category: frontmatter.category,
    difficulty: normalizeDifficulty(frontmatter.difficulty),
    timeToSetup: frontmatter.timeToSetup,
    author: frontmatter.author,
    sourceUrl: frontmatter.sourceUrl,
    tags: frontmatter.tags || [],
    createdAt: frontmatter.createdAt,
    updatedAt: frontmatter.updatedAt,
    content: htmlContent,
    claudeMdTemplate,
  };
}

// Sync version for listings (no content rendering)
export function getPlaybookMetadata(slug: string): Playbook | null {
  const fullPath = path.join(playbooksDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const frontmatter = data as PlaybookFrontmatter;

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    category: frontmatter.category,
    difficulty: normalizeDifficulty(frontmatter.difficulty),
    timeToSetup: frontmatter.timeToSetup,
    author: frontmatter.author,
    sourceUrl: frontmatter.sourceUrl,
    tags: frontmatter.tags || [],
    createdAt: frontmatter.createdAt,
    updatedAt: frontmatter.updatedAt,
    content: '', // Empty for listings
    claudeMdTemplate: undefined,
  };
}

export function getAllPlaybooks(): Playbook[] {
  const slugs = getPlaybookSlugs();
  const playbooks = slugs
    .map((slug) => getPlaybookMetadata(slug))
    .filter((p): p is Playbook => p !== null)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return playbooks;
}

export function getPlaybooksByCategory(category: Category): Playbook[] {
  return getAllPlaybooks().filter((p) => p.category === category);
}

export function getPlaybooksByDifficulty(difficulty: Difficulty): Playbook[] {
  return getAllPlaybooks().filter((p) => p.difficulty === difficulty);
}

export function searchPlaybooks(query: string): Playbook[] {
  const lowerQuery = query.toLowerCase();
  return getAllPlaybooks().filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getRelatedPlaybooks(playbook: Playbook, limit = 3): Playbook[] {
  return getAllPlaybooks()
    .filter((p) => p.slug !== playbook.slug && p.category === playbook.category)
    .slice(0, limit);
}
