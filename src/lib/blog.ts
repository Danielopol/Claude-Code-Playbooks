import { BlogPost } from '@/types/blog';

// Blog posts are managed via Excel file at src/Blog.xlsx
// To update: Edit the Excel file and run "npm run blog:sync"
export const blogPosts: BlogPost[] = [
  {
    id: 'how-to-turn-claude-code-into-your-personal-ai-assi',
    title: 'How to Turn Claude Code Into Your Personal AI Assistant',
    description: 'Tutorial on how you can transform Claude from a chatbot into a powerful personal chief of staff that lives on your computer—organizing files, conducting deep research, and managing your knowledge base autonomously.',
    category: 'agent',
    difficulty: 'intermediate',
    readingTime: '10 min read',
    url: 'https://www.theneuron.ai/explainer-articles/how-to-turn-claude-code-into-your-personal-ai-assistant',
    featured: true,
    thumbnailType: 'agent',
    thumbnailTitle: 'work assistant',
    tags: ['plan mode', 'assistant', 'workflow', 'commands'],
    createdAt: '2026-01-21',
  },
  {
    id: 'everyone-should-be-using-claude-code-more',
    title: 'Everyone should be using Claude Code more',
    description: 'A practical guide exploring Claude Code as an underutilized AI tool for non-technical users, with installation instructions and 50 real-world applications ranging from file organization to business automation.',
    category: 'guide',
    difficulty: 'basic',
    readingTime: '12 min read',
    url: 'https://www.lennysnewsletter.com/p/everyone-should-be-using-claude-code',
    featured: false,
    thumbnailType: 'default',
    thumbnailTitle: 'getting started',
    tags: ['claude code', 'productivity', 'automation', 'non-technical', 'file management', 'business'],
    createdAt: '2026-01-29',
  },
  {
    id: 'the-complete-wait-i-can-use-claude-code-guide',
    title: 'The Complete Wait, I Can Use Claude Code Guide',
    description: 'A comprehensive guide arguing that Claude Code is a productivity tool for non-developers, featuring browser automation, Slack integration, and workflow capabilities with practical frameworks for iterative AI collaboration.',
    category: 'guide',
    difficulty: 'basic',
    readingTime: '15 min read',
    url: 'https://natesnewsletter.substack.com/p/the-complete-wait-i-can-use-claude',
    featured: false,
    thumbnailType: 'default',
    thumbnailTitle: 'getting started',
    tags: ['claude code', 'productivity', 'non-technical', 'automation', 'browser automation', 'workflow'],
    createdAt: '2025-12-22',
  },
  {
    id: 'claude-code-what-it-is-and-how-it-s-different',
    title: 'Claude Code: What It Is and How It\'s Different',
    description: 'Teresa Torres explains Claude Code as a terminal-based AI tool that differs from browser-based Claude, highlighting benefits like automatic file access, local data storage, reusable slash commands, and parallel agent processing.',
    category: 'guide',
    difficulty: 'basic',
    readingTime: '8 min read',
    url: 'https://www.producttalk.org/claude-code-what-it-is-and-how-its-different/',
    featured: false,
    thumbnailType: 'default',
    thumbnailTitle: 'What is Claude Code',
    tags: ['claude code', 'terminal', 'getting started', 'non-technical', 'file access', 'agents'],
    createdAt: '2026-02-03',
  },
  {
    id: 'how-i-use-every-claude-code-feature',
    title: 'How I Use Every Claude Code Feature',
    description: 'A comprehensive practitioner\'s guide to every Claude Code feature, from CLAUDE.md configuration to hooks, planning mode, skills, MCP, and enterprise GitHub Actions workflows.',
    category: 'guide',
    difficulty: 'advanced',
    readingTime: '15 min read',
    url: 'https://blog.sshh.io/p/how-i-use-every-claude-code-feature',
    featured: true,
    thumbnailType: 'skill',
    thumbnailTitle: 'All Features',
    tags: ['CLAUDE.md', 'hooks', 'planning mode', 'skills', 'MCP', 'custom commands', 'subagents', 'GitHub Actions', 'SDK', 'enterprise'],
    createdAt: '2026-02-06',
  },
  {
    id: 'agentic-coding-recommendations-armin-ronacher',
    title: 'Agentic Coding Recommendations — Armin Ronacher',
    description: 'Flask creator Armin Ronacher shares practical recommendations for agentic coding, covering language choices, tool design, observability, and code organization for AI-driven development.',
    category: 'guide',
    difficulty: 'intermediate',
    readingTime: '12 min read',
    url: 'https://lucumr.pocoo.org/2025/6/12/agentic-coding/',
    featured: false,
    thumbnailType: 'agent',
    thumbnailTitle: 'Agentic Coding',
    tags: ['agentic coding', 'Go', 'Python', 'tooling', 'observability', 'refactoring', 'workflow'],
    createdAt: '2026-02-07',
  },
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
