import { BlogPost } from '@/types/blog';

// Blog posts are managed via Excel file at src/Blog.xlsx
// To update: Edit the Excel file and ask Claude to regenerate this file
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
