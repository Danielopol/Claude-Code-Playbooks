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

Create a new `.mdx` file in `src/content/playbooks/` with this structure:

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

Content with the CLAUDE.md template in a markdown code block.
```

The first markdown code block in the content is automatically extracted as the copyable CLAUDE.md template.
