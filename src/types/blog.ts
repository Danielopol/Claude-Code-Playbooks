export type BlogCategory = 'agent' | 'mcp' | 'tutorial' | 'guide' | 'news';

export type BlogDifficulty = 'basic' | 'intermediate' | 'advanced';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: BlogCategory;
  difficulty: BlogDifficulty;
  readingTime: string;
  url?: string;
  featured: boolean;
  thumbnailType: 'agent' | 'mcp' | 'template' | 'skill' | 'default';
  thumbnailTitle?: string;
  tags: string[];
  createdAt: string;
  /** Only set for internal blog posts (MDX-based) */
  slug?: string;
  /** HTML content for internal blog posts */
  content?: string;
  /** Author name for internal blog posts */
  author?: string;
}
