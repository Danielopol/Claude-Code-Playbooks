import { BlogPost } from '@/types/blog';

/**
 * Internal blog posts hosted on the site as real pages.
 *
 * Each entry here must have a corresponding page at:
 *   src/app/blog/<slug>/page.tsx
 *
 * The page should use the <BlogPostLayout> component for consistent styling.
 */
export const internalBlogPosts: BlogPost[] = [
  {
    id: 'claude-code-vs-chatgpt-vs-gemini',
    slug: 'claude-code-vs-chatgpt-vs-gemini',
    title: 'Claude Code vs ChatGPT vs Gemini: Which AI Coding Tool Should You Use?',
    description: 'An honest, side-by-side comparison of the three leading AI coding assistants — covering code quality, agentic workflows, IDE integration, pricing, and real-world developer experience.',
    category: 'guide',
    difficulty: 'basic',
    readingTime: '12 min read',
    featured: true,
    thumbnailType: 'agent',
    thumbnailTitle: 'AI Showdown',
    tags: ['Claude vs ChatGPT', 'AI coding tool comparison', 'best AI for coding', 'Claude Code', 'ChatGPT', 'Gemini', 'AI developer tools', 'coding assistant'],
    createdAt: '2026-04-08',
    author: 'Claude Code Playbooks',
  },
  {
    id: 'automate-workflow-claude-code-2026',
    slug: 'automate-workflow-claude-code-2026',
    title: 'How to Automate Your Entire Workflow with Claude Code in 2026',
    description: 'A practical guide to replacing repetitive daily tasks with AI-powered automation — from browser scraping and email triage to calendar management and Slack workflows — using Claude Code playbooks.',
    category: 'guide',
    difficulty: 'intermediate',
    readingTime: '10 min read',
    featured: true,
    thumbnailType: 'agent',
    thumbnailTitle: 'Full Automation',
    tags: ['AI workflow automation', 'browser automation', 'email automation', 'calendar automation', 'Slack automation', 'productivity', 'Claude Code'],
    createdAt: '2026-04-05',
    author: 'Claude Code Playbooks',
  },
];
