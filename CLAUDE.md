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
- Each playbook has YAML frontmatter defining: title, description, category, difficulty, timeToSetup, author, tags, createdAt
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

### Important rules for MDX content

- **DO NOT** include a "The CLAUDE.md Template" section or embed the template content in the MDX file. The template is served separately from `public/templates/{slug}.md` via the Download/Copy buttons on the playbook page. Embedding it inline is redundant.
- The MDX file should only contain: a "What This Does" overview, setup instructions (Quick Start), and optionally Tips, Examples, or Troubleshooting sections.
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
