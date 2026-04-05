# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Claude Code Playbooks is a Next.js 16 website that hosts copy-paste workflows for Claude Code users. It's a content-driven site where playbooks are authored as MDX files with frontmatter metadata.

## Commands

```bash
npm run dev     # Start development server on http://localhost:3000
npm run build   # Production build
npm run lint    # Run ESLint
```

## Architecture

### Content System
- Playbooks are MDX files in `src/content/playbooks/`
- Each playbook has YAML frontmatter defining: title, description, seoHook, targetAudience, exampleUseCase, category, difficulty, timeToSetup, author, tags, createdAt
- `src/lib/playbooks.ts` reads MDX files at build time using `gray-matter` and extracts CLAUDE.md templates from code blocks
- Categories are defined in `src/lib/categories.ts` with 9 categories across 7 verticals

### Type System
- `src/types/playbook.ts` defines `Playbook`, `PlaybookFrontmatter`, `Category` (union type), and `Difficulty` types
- Category type must match one of the predefined category IDs

### Routing (App Router)
- `/` - Homepage with featured playbooks and category grid
- `/playbooks` - Browse all playbooks with search/filter
- `/playbooks/[slug]` - Individual playbook page (static generation via `generateStaticParams`)
- `/categories/[category]` - Filtered playbooks by category
- `/api/subscribe` - Newsletter subscription endpoint

### UI Components
- Uses shadcn/ui (new-york style) with components in `src/components/ui/`
- Tailwind CSS v4 with CSS variables for theming (oklch colors)
- Custom components: PlaybookCard, CategoryBadge, DifficultyBadge, CopyButton, SearchBar, Newsletter

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)

## Adding a New Playbook

### 1. Create the template file

Create `public/templates/{slug}.md` with the raw CLAUDE.md template content — no frontmatter, no wrapper, just the template text that users will download.

### 2. Create the MDX file

Create `src/content/playbooks/{slug}.mdx` where `{slug}` matches the template filename:

```mdx
---
title: "Playbook Title"
description: "Short description"
seoHook: "A compelling 1-2 sentence hook explaining the problem this playbook solves — written to engage the reader emotionally or practically."
targetAudience: "persona1, persona2, persona3"
exampleUseCase: "\"Example user prompt\" → What the playbook produces in response"
category: "file-organization"  # Must match a Category type
difficulty: "beginner"         # beginner | intermediate | advanced
timeToSetup: "5 minutes"
author: "community"
tags: ["tag1", "tag2"]
createdAt: "2026-01-09"
---

## What This Does

Brief explanation of what this playbook helps the user accomplish.

---

## Quick Start

### Step 1: Create a Project Folder

...setup instructions...

### Step 2: Download the Template

Click **Download** above, then move the file...

### Step 3: Start Working

...how to start using it...
```

### Required: SEO Hook, Target Audience & Example Use Case

Every playbook **must** include these three frontmatter fields. They render as a prominent section on the playbook page (between the tags and the CLAUDE.md Template download):

- **`seoHook`**: A compelling 1-2 sentence hook that describes the problem this playbook solves. Write it to resonate emotionally or practically with the target user. Example: `"Finding the right papers in a sea of millions of publications is like searching for needles in a haystack — and missing one key study can undermine your entire thesis or research project."`
- **`targetAudience`**: A comma-separated list of personas who benefit from this playbook. Displayed as "**Who it's for:** ...". Example: `"graduate students, research assistants, professors, science journalists, systematic reviewers"`
- **`exampleUseCase`**: A concrete before → after example showing what a user might ask and what the playbook produces. Use the format `"user prompt" → result description`. Example: `"\"Find recent papers on transformer architectures for protein folding\" → Curated list of 15 high-impact papers with relevance scores, methodology summaries, and key findings synthesized"`

### 3. Enrich the MDX with template insights

After creating the MDX and template files, scan the template (`public/templates/{slug}.md`) for useful contextual sections and add them to the MDX content. Look for:

- **Tips** and **best practices** (e.g., "Tips for Best Results", "Pro Tips")
- **Limitations** and **caveats** (e.g., "Known Limitations", "Important Notes")
- **Examples** (e.g., example commands, sample inputs/outputs, use cases)
- **Supported formats/platforms** (e.g., "Supported Languages", "Compatible Formats")
- **Prerequisites details** (e.g., required tools with install commands, API keys needed)
- **Troubleshooting** guidance

Extract these passages and add them as additional sections in the MDX (after Quick Start), such as `## Tips & Best Practices`, `## Limitations`, `## Examples`, etc. Do NOT copy the entire template — only the informational sections that help users understand what to expect before downloading.

### 4. Update personas for the "For You" page

After creating a new playbook, check if its `category` is already covered by a persona in `src/lib/personas.ts`. If not:

1. **If an existing persona is a natural fit**, add the category to that persona's `categories` array.
2. **If a new persona is needed** (e.g., a new professional vertical with 5+ playbooks), add a new entry to the `personas` array following the existing format — with `id`, `name`, `title`, `description`, `seoDescription`, `icon`, and `categories`.
3. **If the category already appears in a persona's `categories` array**, no changes are needed.

Every category used by playbooks should appear in at least one persona's `categories` array so the playbooks are discoverable on `/for/[persona]` pages.

### Important rules for MDX content

- **DO NOT** include a "The CLAUDE.md Template" section or embed the template content in the MDX file. The template is served separately from `public/templates/{slug}.md` via the Download/Copy buttons on the playbook page. Embedding it inline is redundant.
- The MDX file should only contain: a "What This Does" overview, setup instructions (Quick Start), enrichment sections (Tips, Examples, Limitations extracted from the template), and optionally Troubleshooting.
- The build system reads the template from `public/templates/{slug}.md`. It falls back to extracting from the first markdown code block in the MDX only if no template file exists — but prefer always creating the separate template file.

## Adding a Blog Post from URL

When the user provides a blog post URL:

1. Fetch the URL using `WebFetch` and extract these fields from the page content:
   - **title**: The article title
   - **description**: A concise summary of the article (1-2 sentences)
   - **category**: One of `agent | mcp | tutorial | guide | news`
   - **difficulty**: One of `basic | intermediate | advanced`
   - **readingTime**: Estimated reading time as a number (e.g. `10`)
   - **tags**: Relevant keywords, semicolon-separated (e.g. `"plan mode; assistant; workflow"`)
   - **thumbnailType**: One of `agent | mcp | template | skill | default`
   - **thumbnailTitle**: Short 2-3 word label for the thumbnail
   - **featured**: `true` or `false`
   - **url**: The original URL provided by the user
   - **createdAt**: Today's date in `YYYY-MM-DD` format
   - Note: `id` is auto-derived from the title by the script (slugified, max 50 chars)

2. Run the add script with the extracted JSON (on Windows, use double quotes and escape inner quotes):
   ```bash
   npm run blog:add -- "{\"title\":\"...\",\"description\":\"...\",\"category\":\"...\",\"difficulty\":\"...\",\"readingTime\":\"10\",\"url\":\"...\",\"featured\":false,\"thumbnailType\":\"...\",\"thumbnailTitle\":\"...\",\"tags\":\"tag1; tag2\",\"createdAt\":\"YYYY-MM-DD\"}"
   ```

3. This updates both `src/Blog.xlsx` and regenerates `src/lib/blog.ts`.

To regenerate `blog.ts` from Excel without adding a new post: `npm run blog:sync`

## Adding an Internal Blog Post (hosted on the site)

Internal blog posts are real React pages at `src/app/blog/<slug>/page.tsx`. They open as full pages on the site instead of linking externally, which boosts SEO.

### 1. Add metadata to `src/lib/blog-internal.ts`

Add an entry to the `internalBlogPosts` array:

```ts
{
  id: 'my-post-slug',
  slug: 'my-post-slug',
  title: 'My Blog Post Title',
  description: 'A concise 1-2 sentence summary.',
  category: 'guide',           // agent | mcp | tutorial | guide | news
  difficulty: 'intermediate',  // basic | intermediate | advanced
  readingTime: '8 min read',
  featured: false,
  thumbnailType: 'default',    // agent | mcp | template | skill | default
  thumbnailTitle: 'Short Label',
  tags: ['tag1', 'tag2'],
  createdAt: '2026-04-04',
  author: 'Author Name',       // optional
},
```

### 2. Create the page

Create `src/app/blog/my-post-slug/page.tsx`:

```tsx
import { Metadata } from 'next';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'My Blog Post Title | Claude Code Playbooks Blog',
  description: 'A concise 1-2 sentence summary.',
  alternates: { canonical: '/blog/my-post-slug' },
  openGraph: {
    title: 'My Blog Post Title',
    description: 'A concise 1-2 sentence summary.',
    url: 'https://www.claudecodehq.com/blog/my-post-slug',
    type: 'article',
  },
};

export default function MyPostPage() {
  return (
    <BlogPostLayout
      title="My Blog Post Title"
      description="A concise 1-2 sentence summary."
      category="guide"
      difficulty="intermediate"
      readingTime="8 min read"
      createdAt="2026-04-04"
      tags={['tag1', 'tag2']}
      author="Author Name"
      slug="my-post-slug"
    >
      {/* Write your blog post as normal JSX */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Section Heading
      </h2>
      <p>
        Your blog post content here. Use any React components, images, or layouts you want.
      </p>
    </BlogPostLayout>
  );
}
```

### 3. How it works

- The slug in `blog-internal.ts` must match the folder name under `src/app/blog/`
- Internal posts are automatically merged with external posts in the blog listing
- Internal posts open on the site; external posts still open in a new tab
- The `BlogPostLayout` component provides consistent header, metadata, JSON-LD, and footer
- The body is regular JSX — full freedom for components, images, embeds, etc.

### Key differences from external posts

| | External (Excel) | Internal (TSX page) |
|---|---|---|
| Storage | `src/Blog.xlsx` → `src/lib/blog.ts` | `src/app/blog/<slug>/page.tsx` |
| Listing metadata | `src/lib/blog.ts` (auto-generated) | `src/lib/blog-internal.ts` (manual) |
| Opens | New tab (external URL) | `/blog/<slug>` on site |
| Content | None (link only) | Full React page |
| Add method | `npm run blog:add` | Create page + add metadata |
| SEO benefit | Links away | Full page indexed by search engines |
