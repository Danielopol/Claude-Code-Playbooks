import * as XLSX from 'xlsx';
import * as path from 'path';
import * as fs from 'fs';

// Raw row shape as it comes from Excel (no 'id' column in the spreadsheet)
interface ExcelRow {
  title: string;
  description: string;
  category: string;
  difficulty: string;
  readingTime: string | number;
  url: string;
  featured: boolean | string;
  thumbnailType: string;
  thumbnailTitle?: string;
  tags: string;
  createdAt: string | number;
}

const EXCEL_PATH = path.resolve(__dirname, '..', 'Blog.xlsx');
const BLOG_TS_PATH = path.resolve(__dirname, '..', 'lib', 'blog.ts');

const EXCEL_COLUMNS = [
  'title', 'description', 'category', 'difficulty',
  'readingTime', 'url', 'featured', 'thumbnailType',
  'thumbnailTitle', 'tags', 'createdAt',
];

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 50);
}

function excelDateToISO(value: string | number): string {
  if (typeof value === 'string') {
    // Already a date string - try to parse and normalize to YYYY-MM-DD
    const d = new Date(value);
    if (!isNaN(d.getTime())) {
      return d.toISOString().split('T')[0];
    }
    return value;
  }
  // Excel serial date number (days since 1900-01-01, with the Lotus 1-2-3 bug)
  const utcDays = value - 25569; // 25569 = days from 1900-01-01 to 1970-01-01
  const date = new Date(utcDays * 86400000);
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function normalizeReadingTime(value: string | number): string {
  const s = String(value);
  if (s.includes('min')) return s;
  return `${s} min read`;
}

function parseTags(value: string | undefined | null): string[] {
  if (value == null) return [];
  const raw = String(value);
  // Support both ; and , as separators
  const separator = raw.includes(';') ? ';' : ',';
  return raw.split(separator).map((t) => t.trim()).filter(Boolean);
}

function readExcel(): ExcelRow[] {
  if (!fs.existsSync(EXCEL_PATH)) {
    console.error(`Excel file not found at ${EXCEL_PATH}`);
    process.exit(1);
  }
  const workbook = XLSX.readFile(EXCEL_PATH);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json<ExcelRow>(sheet);
}

function writeExcel(rows: ExcelRow[]): void {
  const worksheet = XLSX.utils.json_to_sheet(rows, { header: EXCEL_COLUMNS });

  worksheet['!cols'] = [
    { wch: 60 },  // title
    { wch: 80 },  // description
    { wch: 12 },  // category
    { wch: 14 },  // difficulty
    { wch: 14 },  // readingTime
    { wch: 80 },  // url
    { wch: 10 },  // featured
    { wch: 12 },  // thumbnailType
    { wch: 20 },  // thumbnailTitle
    { wch: 40 },  // tags
    { wch: 12 },  // createdAt
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Blog Posts');
  XLSX.writeFile(workbook, EXCEL_PATH);
  console.log(`Updated Excel: ${EXCEL_PATH}`);
}

function escapeString(s: string | undefined | null): string {
  if (s == null) return '';
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

function generateBlogTs(rows: ExcelRow[]): void {
  const entries = rows.map((row) => {
    const id = slugify(row.title);
    const tags = parseTags(row.tags);
    const tagsStr = tags.map((t) => `'${escapeString(t)}'`).join(', ');
    const featured = String(row.featured).toLowerCase() === 'true' || row.featured === true;
    const createdAt = excelDateToISO(row.createdAt);
    const readingTime = normalizeReadingTime(row.readingTime);

    return `  {
    id: '${escapeString(id)}',
    title: '${escapeString(row.title)}',
    description: '${escapeString(row.description)}',
    category: '${escapeString(row.category)}',
    difficulty: '${escapeString(row.difficulty)}',
    readingTime: '${escapeString(readingTime)}',
    url: '${escapeString(row.url)}',
    featured: ${featured},
    thumbnailType: '${escapeString(row.thumbnailType)}',
    thumbnailTitle: '${escapeString(row.thumbnailTitle || '')}',
    tags: [${tagsStr}],
    createdAt: '${escapeString(createdAt)}',
  }`;
  });

  const content = `import { BlogPost } from '@/types/blog';

// Blog posts are managed via Excel file at src/Blog.xlsx
// To update: Edit the Excel file and run "npm run blog:sync"
export const blogPosts: BlogPost[] = [
${entries.join(',\n')},
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.featured);
}

export function getNonFeaturedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter((post) => !post.featured);
}

export function getBlogPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.category === category);
}
`;

  fs.writeFileSync(BLOG_TS_PATH, content, 'utf-8');
  console.log(`Generated: ${BLOG_TS_PATH}`);
}

// --- Main ---
const mode = process.argv[2];

if (mode === 'add') {
  // Add a new blog post: npx tsx src/scripts/update-blog.ts add '{"title":"...", ...}'
  const jsonArg = process.argv[3];
  if (!jsonArg) {
    console.error('Usage: npx tsx src/scripts/update-blog.ts add \'<json>\'');
    process.exit(1);
  }
  const newPost: ExcelRow = JSON.parse(jsonArg);
  const rows = readExcel();

  // Check for duplicate by slugified title
  const newId = slugify(newPost.title);
  if (rows.some((r) => slugify(r.title) === newId)) {
    console.error(`Blog post "${newPost.title}" already exists (id: ${newId}). Skipping.`);
    process.exit(1);
  }

  rows.push(newPost);
  writeExcel(rows);
  generateBlogTs(rows);
  console.log(`Added blog post: "${newPost.title}"`);
} else if (mode === 'sync') {
  // Just regenerate blog.ts from existing Excel
  const rows = readExcel();
  generateBlogTs(rows);
  console.log(`Synced ${rows.length} blog posts from Excel.`);
} else {
  console.log('Usage:');
  console.log('  npx tsx src/scripts/update-blog.ts add \'<json>\'  - Add a new blog post');
  console.log('  npx tsx src/scripts/update-blog.ts sync           - Regenerate blog.ts from Excel');
}
