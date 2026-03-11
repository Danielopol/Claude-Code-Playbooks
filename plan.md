# Plan: Add "Latest Releases" Page

## What We're Building
A `/latest` page that dynamically shows all playbooks added on the most recent update day, styled like the dashboard screenshot but integrated into the site's design system.

## Implementation Steps

### 1. Add helper function to `src/lib/playbooks.ts`
- `getLatestPlaybooks()`: Gets all playbooks, finds the most recent `createdAt` date, returns all playbooks from that date
- Groups them by category for the dashboard layout

### 2. Create new page at `src/app/latest/page.tsx`
- Server component (no 'use client' needed)
- Reads playbooks at build time via `getLatestPlaybooks()`
- Groups by category with emoji icons and colored accent bars
- Each playbook card links to `/playbooks/[slug]`
- Header with stats (count, categories, total)
- Footer CTA linking to `/playbooks`
- Same dark theme styling as the static dashboard

### 3. Update navigation in `src/app/layout.tsx`
- Add "Latest" link to the header nav between Browse and Blog

### Files Changed
- `src/lib/playbooks.ts` — add `getLatestPlaybooks()`
- `src/app/latest/page.tsx` — new page (create)
- `src/app/layout.tsx` — add nav link
