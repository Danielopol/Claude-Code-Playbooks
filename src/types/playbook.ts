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
  | 'developer-tools'
  | 'academic-research'
  | 'executive-strategy'
  | 'sales-revenue'
  | 'project-management'
  | 'media-production'
  | 'communications'
  | 'operations-compliance'
  | 'data-reporting'
  | 'customer-support'
  | 'bio-research'
  | 'product-management'
  | 'equity-research'
  | 'investment-banking'
  | 'private-equity'
  | 'wealth-management'
  | 'trading-markets';

export interface Playbook {
  slug: string;
  title: string;
  description: string;
  seoHook?: string;
  targetAudience?: string;
  exampleUseCase?: string;
  category: Category;
  difficulty: Difficulty;
  timeToSetup: string;
  author: string;
  sourceUrl?: string;
  tags: string[];
  createdAt: string;
  updatedAt?: string;
  noindex?: boolean;
  content: string;
  claudeMdTemplate?: string;
}

export interface PlaybookFrontmatter {
  title: string;
  description: string;
  seoHook?: string;
  targetAudience?: string;
  exampleUseCase?: string;
  category: Category;
  difficulty: Difficulty;
  timeToSetup: string;
  author: string;
  sourceUrl?: string;
  tags: string[];
  createdAt: string;
  updatedAt?: string;
  /**
   * Keep the page live for visitors but out of Google's index and the sitemap.
   * Used for playbooks Google has already declined to index ("crawled -
   * currently not indexed") whose main content is republished from elsewhere.
   */
  noindex?: boolean;
}
