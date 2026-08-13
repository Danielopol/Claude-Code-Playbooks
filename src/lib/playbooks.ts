import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import { Playbook, PlaybookFrontmatter, Category, Difficulty } from '@/types/playbook';
import playbooksIndex from './playbooks-index.json';

const playbooksDirectory = path.join(process.cwd(), 'src/content/playbooks');
const templatesDirectory = path.join(process.cwd(), 'public/templates');

/**
 * Listing metadata comes from a precomputed index (see scripts/build-index.mjs,
 * wired to `prebuild`), NOT from scanning the content directory.
 *
 * Scanning is O(all files) per call, and getAllPlaybooks() is called by every
 * listing page and by getRelatedPlaybooks() on every playbook render. At ~1k
 * files a scan costs ~180ms; at 10k it costs ~1.5s, on every cold serverless
 * invocation. The index turns that into one JSON parse, memoized below.
 *
 * The index carries listing fields only. seoHook / targetAudience /
 * exampleUseCase live on the detail page, which reads the MDX via
 * getPlaybookBySlug().
 */
type IndexEntry = Omit<Playbook, 'content' | 'claudeMdTemplate' | 'seoHook' | 'targetAudience' | 'exampleUseCase'>;

/**
 * In development we always read from disk and never memoize, so adding an MDX
 * file shows up on hot reload without restarting the dev server — exactly the
 * authoring workflow that existed before this index.
 *
 * The index is purely a production optimization: locally a full scan costs
 * ~180ms with one user and no cold serverless starts to amortize, so there is
 * nothing to gain and a stale-listing footgun to lose.
 */
const USE_INDEX = process.env.NODE_ENV === 'production';

let cachedPlaybooks: Playbook[] | null = null;
let cachedBySlug: Map<string, Playbook> | null = null;
let cachedByCategory: Map<Category, Playbook[]> | null = null;

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
  return getAllPlaybooks().map((p) => p.slug);
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
    seoHook: frontmatter.seoHook,
    targetAudience: frontmatter.targetAudience,
    exampleUseCase: frontmatter.exampleUseCase,
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
  if (!USE_INDEX) {
    return getAllPlaybooks().find((p) => p.slug === slug) ?? null;
  }
  if (!cachedBySlug) {
    cachedBySlug = new Map(getAllPlaybooks().map((p) => [p.slug, p]));
  }
  return cachedBySlug.get(slug) ?? null;
}

/**
 * The live source of truth. Used on every call in development, and in
 * production only if the index is missing (e.g. a build path that skipped
 * `prebuild`).
 */
function scanPlaybooksFromDisk(): Playbook[] {
  if (!fs.existsSync(playbooksDirectory)) {
    return [];
  }

  return fs
    .readdirSync(playbooksDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file): Playbook | null => {
      const slug = file.replace(/\.mdx$/, '');
      const { data } = matter(fs.readFileSync(path.join(playbooksDirectory, file), 'utf8'));
      const frontmatter = data as PlaybookFrontmatter;
      if (!frontmatter.title || !frontmatter.category) return null;

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
        content: '',
        claudeMdTemplate: undefined,
      };
    })
    .filter((p): p is Playbook => p !== null)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function getAllPlaybooks(): Playbook[] {
  // Dev: fresh scan every call, so new MDX files appear without a restart.
  if (!USE_INDEX) return scanPlaybooksFromDisk();

  if (cachedPlaybooks) return cachedPlaybooks;

  const entries = playbooksIndex as IndexEntry[];

  // The index is pre-sorted by createdAt desc at build time.
  cachedPlaybooks = entries.length
    ? entries.map((e) => ({ ...e, content: '', claudeMdTemplate: undefined }))
    : scanPlaybooksFromDisk();

  return cachedPlaybooks;
}

export function getPlaybooksByCategory(category: Category): Playbook[] {
  if (!USE_INDEX) {
    return getAllPlaybooks().filter((p) => p.category === category);
  }
  if (!cachedByCategory) {
    cachedByCategory = new Map();
    for (const p of getAllPlaybooks()) {
      const bucket = cachedByCategory.get(p.category);
      if (bucket) bucket.push(p);
      else cachedByCategory.set(p.category, [p]);
    }
  }
  return cachedByCategory.get(category) ?? [];
}

export function getPlaybooksByCategories(categories: Category[]): Playbook[] {
  const categorySet = new Set(categories);
  return getAllPlaybooks().filter((p) => categorySet.has(p.category));
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

/**
 * Related playbooks are the `limit` entries that FOLLOW this one in its
 * category, wrapping around the end.
 *
 * Taking the first N of the category instead — what this used to do — meant
 * every one of the 188 marketing-content pages linked to the same three
 * playbooks, so the other 185 received no internal links at all. Google
 * crawled them once and left them in "crawled - currently not indexed".
 *
 * Offsetting by the playbook's own position turns the category into a ring:
 * each page is linked by the `limit` pages before it, so link equity reaches
 * every playbook regardless of how deep it sits in the listing order.
 */
export function getRelatedPlaybooks(playbook: Playbook, limit = 12): Playbook[] {
  // Category-bucketed, so this stays O(limit) instead of O(all playbooks).
  const inCategory = getPlaybooksByCategory(playbook.category);
  const self = inCategory.findIndex((p) => p.slug === playbook.slug);
  if (self === -1) return inCategory.slice(0, limit);

  const related: Playbook[] = [];
  const take = Math.min(limit, inCategory.length - 1);
  for (let i = 1; related.length < take; i++) {
    related.push(inCategory[(self + i) % inCategory.length]);
  }
  return related;
}

/**
 * Previous/next playbook within the category, for sequential crawl paths.
 * Wraps at both ends so the category is always fully traversable.
 */
export function getCategoryNeighbors(playbook: Playbook): {
  previous: Playbook | null;
  next: Playbook | null;
} {
  const inCategory = getPlaybooksByCategory(playbook.category);
  const self = inCategory.findIndex((p) => p.slug === playbook.slug);
  if (self === -1 || inCategory.length < 2) {
    return { previous: null, next: null };
  }
  return {
    previous: inCategory[(self - 1 + inCategory.length) % inCategory.length],
    next: inCategory[(self + 1) % inCategory.length],
  };
}

export interface LatestPlaybooksResult {
  date: string;
  totalNew: number;
  totalAll: number;
  byCategory: { category: Category; playbooks: Playbook[] }[];
}

export function getLatestPlaybooks(): LatestPlaybooksResult {
  const all = getAllPlaybooks();

  // Find the most recent createdAt date
  const mostRecentDate = all.reduce((latest, p) => {
    return p.createdAt > latest ? p.createdAt : latest;
  }, '');

  // Get all playbooks from that date
  const latestPlaybooks = all.filter((p) => p.createdAt === mostRecentDate);

  // Group by category
  const categoryMap = new Map<Category, Playbook[]>();
  for (const p of latestPlaybooks) {
    const existing = categoryMap.get(p.category) || [];
    existing.push(p);
    categoryMap.set(p.category, existing);
  }

  // Sort categories by count (largest first) then alphabetically
  const byCategory = Array.from(categoryMap.entries())
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    .map(([category, playbooks]) => ({ category, playbooks }));

  return {
    date: mostRecentDate,
    totalNew: latestPlaybooks.length,
    totalAll: all.length,
    byCategory,
  };
}

