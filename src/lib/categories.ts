import { Category } from '@/types/playbook';

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  icon: string;
  vertical: string;
}

export const categories: CategoryInfo[] = [
  // Personal Productivity
  {
    id: 'file-organization',
    name: 'File Organization',
    description: 'Auto-rename, sort, deduplicate, and organize files',
    icon: 'FolderOpen',
    vertical: 'Personal Productivity',
  },
  {
    id: 'note-management',
    name: 'Note Management',
    description: 'Obsidian, Logseq, and note-taking workflows',
    icon: 'FileText',
    vertical: 'Personal Productivity',
  },
  {
    id: 'task-management',
    name: 'Task Management',
    description: 'Todo lists, project tracking, and productivity',
    icon: 'CheckSquare',
    vertical: 'Personal Productivity',
  },
  {
    id: 'productivity',
    name: 'Productivity',
    description: 'Dashboards, automation, and workflow optimization',
    icon: 'Zap',
    vertical: 'Personal Productivity',
  },
  {
    id: 'knowledge-management',
    name: 'Knowledge Management',
    description: 'Second brain, research synthesis, and information organization',
    icon: 'Brain',
    vertical: 'Personal Productivity',
  },
  // Career & Development
  {
    id: 'career-development',
    name: 'Career Development',
    description: 'Resume, interviews, job search, and career growth',
    icon: 'Briefcase',
    vertical: 'Career & Development',
  },
  {
    id: 'personal-development',
    name: 'Personal Development',
    description: 'Habits, journaling, and self-improvement',
    icon: 'User',
    vertical: 'Career & Development',
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Study guides, learning, and skill development',
    icon: 'GraduationCap',
    vertical: 'Career & Development',
  },
  // Research & Writing
  {
    id: 'research-writing',
    name: 'Research & Writing',
    description: 'PDF analysis, academic research, and content creation',
    icon: 'BookOpen',
    vertical: 'Research & Writing',
  },
  {
    id: 'market-research',
    name: 'Market Research',
    description: 'Competitor analysis, market sizing, and business planning',
    icon: 'TrendingUp',
    vertical: 'Research & Writing',
  },
  // Finance & Accounting
  {
    id: 'finance-accounting',
    name: 'Finance & Accounting',
    description: 'Expense tracking, invoicing, and financial analysis',
    icon: 'DollarSign',
    vertical: 'Finance & Accounting',
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Budgets, expenses, and personal finance',
    icon: 'Wallet',
    vertical: 'Finance & Accounting',
  },
  // Marketing & Content
  {
    id: 'marketing-content',
    name: 'Marketing & Content',
    description: 'Ad copy, SEO, social media, and content marketing',
    icon: 'Megaphone',
    vertical: 'Marketing & Content',
  },
  // Legal & Compliance
  {
    id: 'legal-compliance',
    name: 'Legal & Compliance',
    description: 'Contract review, legal research, and compliance',
    icon: 'Scale',
    vertical: 'Legal & Compliance',
  },
  // HR & Recruiting
  {
    id: 'hr-recruiting',
    name: 'HR & Recruiting',
    description: 'Resume screening, job descriptions, and HR workflows',
    icon: 'Users',
    vertical: 'HR & Recruiting',
  },
  // Creative & Design
  {
    id: 'creative-design',
    name: 'Creative & Design',
    description: 'Worldbuilding, creative writing, and game design',
    icon: 'Palette',
    vertical: 'Creative & Design',
  },
  {
    id: 'creative-writing',
    name: 'Creative Writing',
    description: 'Fiction, worldbuilding, and storytelling assistance',
    icon: 'Feather',
    vertical: 'Creative & Design',
  },
  // Developer Tools
  {
    id: 'developer-tools',
    name: 'Developer Tools',
    description: 'Changelogs, documentation, and development workflows',
    icon: 'Code',
    vertical: 'Developer Tools',
  },
];

export function getCategoryById(id: Category): CategoryInfo | undefined {
  return categories.find((c) => c.id === id);
}

export function getCategoriesByVertical(vertical: string): CategoryInfo[] {
  return categories.filter((c) => c.vertical === vertical);
}

export const verticals = [
  'Personal Productivity',
  'Career & Development',
  'Research & Writing',
  'Finance & Accounting',
  'Marketing & Content',
  'Legal & Compliance',
  'HR & Recruiting',
  'Creative & Design',
  'Developer Tools',
];
