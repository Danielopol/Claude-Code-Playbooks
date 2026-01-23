export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type Category =
  | 'file-organization'
  | 'note-management'
  | 'task-management'
  | 'productivity'
  | 'knowledge-management'
  | 'career-development'
  | 'personal-development'
  | 'education'
  | 'research-writing'
  | 'market-research'
  | 'finance-accounting'
  | 'finance'
  | 'marketing-content'
  | 'legal-compliance'
  | 'hr-recruiting'
  | 'creative-design'
  | 'creative-writing'
  | 'developer-tools';

export interface Playbook {
  slug: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  timeToSetup: string;
  author: string;
  sourceUrl?: string;
  tags: string[];
  createdAt: string;
  updatedAt?: string;
  content: string;
  claudeMdTemplate?: string;
}

export interface PlaybookFrontmatter {
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  timeToSetup: string;
  author: string;
  sourceUrl?: string;
  tags: string[];
  createdAt: string;
  updatedAt?: string;
}
