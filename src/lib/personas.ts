import { Category } from '@/types/playbook';

export interface PersonaInfo {
  id: string;
  name: string;
  title: string;
  description: string;
  seoDescription: string;
  icon: string;
  categories: Category[];
}

// Personas derived from targetAudience analysis across 742 playbooks.
// Categories are ordered by actual playbook-to-persona match count (highest first).
export const personas: PersonaInfo[] = [
  // 248 playbook matches
  {
    id: 'researchers',
    name: 'Researchers & Scientists',
    title: 'AI Tools for Researchers & Scientists',
    description: 'Accelerate literature review, data analysis, manuscript writing, and lab workflows.',
    seoDescription: 'Claude Code playbooks for researchers and scientists — automate literature review, data analysis, lab workflows, manuscript writing, and research synthesis with AI.',
    icon: 'Microscope',
    categories: ['academic-research', 'data-reporting', 'research-writing', 'bio-research', 'knowledge-management'],
  },
  // 219 playbook matches
  {
    id: 'developers',
    name: 'Engineers & Developers',
    title: 'AI Tools for Engineers & Developers',
    description: 'Automate changelogs, documentation, code review, CI/CD, and development workflows.',
    seoDescription: 'Claude Code playbooks for engineers and developers — automate documentation, code review, DevOps, project scaffolding, and development workflows with AI.',
    icon: 'Code',
    categories: ['developer-tools', 'project-management', 'productivity', 'data-reporting'],
  },
  // 156 playbook matches
  {
    id: 'executives',
    name: 'Executives & Directors',
    title: 'AI Tools for Executives & Directors',
    description: 'Strategic analysis, competitive intelligence, board presentations, and decision support.',
    seoDescription: 'Claude Code playbooks for executives and directors — competitive intelligence, strategic foresight, market analysis, communications, and executive decision support with AI.',
    icon: 'Target',
    categories: ['executive-strategy', 'sales-revenue', 'marketing-content', 'productivity', 'communications', 'operations-compliance'],
  },
  // 150 playbook matches
  {
    id: 'startup-founders',
    name: 'Startup Founders',
    title: 'AI Tools for Startup Founders',
    description: 'Launch faster with marketing, market research, legal, hiring, and sales playbooks.',
    seoDescription: 'Claude Code playbooks for startup founders — marketing, market research, legal compliance, hiring, sales automation, and go-to-market strategy with AI.',
    icon: 'Rocket',
    categories: ['marketing-content', 'market-research', 'legal-compliance', 'hr-recruiting', 'sales-revenue', 'executive-strategy'],
  },
  // 140 playbook matches
  {
    id: 'students',
    name: 'Students & Educators',
    title: 'AI Tools for Students & Educators',
    description: 'Study smarter with research assistance, note organization, and learning workflows.',
    seoDescription: 'Claude Code playbooks for students and educators — study guides, research assistance, note management, knowledge organization, and learning optimization with AI.',
    icon: 'GraduationCap',
    categories: ['academic-research', 'research-writing', 'education', 'knowledge-management', 'creative-design'],
  },
  // 134 playbook matches
  {
    id: 'operations-managers',
    name: 'Operations Managers',
    title: 'AI Tools for Operations Managers',
    description: 'Streamline SOPs, compliance audits, vendor evaluation, and process documentation.',
    seoDescription: 'Claude Code playbooks for operations managers — automate SOPs, compliance audits, vendor evaluation, policy documentation, and change management with AI.',
    icon: 'ClipboardCheck',
    categories: ['operations-compliance', 'data-reporting', 'legal-compliance', 'productivity', 'project-management', 'sales-revenue'],
  },
  // 128 playbook matches
  {
    id: 'marketers',
    name: 'Marketers',
    title: 'AI Tools for Marketers',
    description: 'Generate ad copy, manage campaigns, analyze competitors, and scale content production.',
    seoDescription: 'Claude Code playbooks for marketers — generate ad copy, SEO content, social media posts, competitor analysis, and campaign automation with AI.',
    icon: 'Megaphone',
    categories: ['marketing-content', 'creative-design', 'market-research', 'data-reporting', 'sales-revenue', 'media-production'],
  },
  // 102 playbook matches
  {
    id: 'hr-managers',
    name: 'HR & People Ops',
    title: 'AI Tools for HR & People Ops',
    description: 'Streamline recruiting, onboarding, policy documentation, and internal communications.',
    seoDescription: 'Claude Code playbooks for HR managers and people ops — automate resume screening, job descriptions, onboarding, policy docs, and team communications with AI.',
    icon: 'Users',
    categories: ['hr-recruiting', 'communications', 'legal-compliance', 'operations-compliance', 'productivity'],
  },
  // 92 playbook matches
  {
    id: 'writers',
    name: 'Writers & Editors',
    title: 'AI Tools for Writers & Editors',
    description: 'Draft articles, manage editorial workflows, and repurpose content across formats.',
    seoDescription: 'Claude Code playbooks for writers and editors — creative writing, content editing, editorial workflows, knowledge management, and publishing with AI.',
    icon: 'Feather',
    categories: ['marketing-content', 'research-writing', 'creative-writing', 'knowledge-management', 'creative-design'],
  },
  // 86 playbook matches
  {
    id: 'freelancers',
    name: 'Freelancers & Small Business',
    title: 'AI Tools for Freelancers & Small Business',
    description: 'Handle marketing, invoicing, productivity, and client work without a full team.',
    seoDescription: 'Claude Code playbooks for freelancers and small business owners — marketing, invoicing, client management, productivity, and financial tracking with AI.',
    icon: 'Briefcase',
    categories: ['marketing-content', 'finance-accounting', 'productivity', 'finance', 'market-research'],
  },
  // 82 playbook matches
  {
    id: 'consultants',
    name: 'Consultants & Coaches',
    title: 'AI Tools for Consultants & Coaches',
    description: 'Deliver strategic insights, manage engagements, and create client deliverables faster.',
    seoDescription: 'Claude Code playbooks for consultants and coaches — strategic analysis, market research, project management, client deliverables, and proposal writing with AI.',
    icon: 'Lightbulb',
    categories: ['executive-strategy', 'market-research', 'research-writing', 'project-management', 'data-reporting'],
  },
  // 79 playbook matches
  {
    id: 'finance-professionals',
    name: 'Finance & Accounting',
    title: 'AI Tools for Finance & Accounting',
    description: 'Automate bookkeeping, financial reporting, reconciliation, and compliance workflows.',
    seoDescription: 'Claude Code playbooks for finance and accounting professionals — automate expense tracking, invoicing, financial analysis, reporting, and compliance with AI.',
    icon: 'DollarSign',
    categories: ['finance', 'finance-accounting', 'data-reporting', 'legal-compliance'],
  },
  // 69 playbook matches
  {
    id: 'sales-professionals',
    name: 'Sales Professionals',
    title: 'AI Tools for Sales Professionals',
    description: 'Manage pipelines, draft proposals, research prospects, and automate outreach.',
    seoDescription: 'Claude Code playbooks for sales professionals — pipeline management, proposal writing, prospect research, and revenue operations with AI.',
    icon: 'TrendingUp',
    categories: ['sales-revenue', 'market-research', 'marketing-content', 'communications'],
  },
  // 59 playbook matches
  {
    id: 'data-analysts',
    name: 'Data Analysts',
    title: 'AI Tools for Data Analysts',
    description: 'Build dashboards, automate KPI analysis, generate reports, and assess data quality.',
    seoDescription: 'Claude Code playbooks for data analysts — dashboard narratives, KPI analysis, survey reports, data quality assessment, and automated reporting with AI.',
    icon: 'BarChart3',
    categories: ['data-reporting', 'academic-research', 'developer-tools'],
  },
  // 49 playbook matches
  {
    id: 'product-managers',
    name: 'Product Managers',
    title: 'AI Tools for Product Managers',
    description: 'Write feature specs, analyze metrics, build roadmaps, and synthesize user feedback.',
    seoDescription: 'Claude Code playbooks for product managers — feature specs, metrics analysis, roadmap planning, user feedback synthesis, and market research with AI.',
    icon: 'Package',
    categories: ['product-management', 'market-research', 'project-management', 'data-reporting'],
  },
  // 46 playbook matches
  {
    id: 'content-creators',
    name: 'Media & Content Creators',
    title: 'AI Tools for Media & Content Creators',
    description: 'Produce podcasts, repurpose video content, and manage multi-platform distribution.',
    seoDescription: 'Claude Code playbooks for content creators — podcast workflows, video clip creation, content repurposing, social media, and production management with AI.',
    icon: 'Mic',
    categories: ['media-production', 'marketing-content', 'creative-design'],
  },
  // 42 playbook matches
  {
    id: 'executive-assistants',
    name: 'Admin & Executive Assistants',
    title: 'AI Tools for Admin & Executive Assistants',
    description: 'Organize files, draft communications, manage schedules, and streamline office workflows.',
    seoDescription: 'Claude Code playbooks for administrative and executive assistants — file organization, communications, scheduling, HR support, and office automation with AI.',
    icon: 'CalendarCheck',
    categories: ['productivity', 'file-organization', 'communications', 'hr-recruiting'],
  },
  // 39 playbook matches
  {
    id: 'legal-professionals',
    name: 'Legal Professionals',
    title: 'AI Tools for Legal Professionals',
    description: 'Review contracts, research case law, draft compliance docs, and manage legal workflows.',
    seoDescription: 'Claude Code playbooks for legal professionals — contract review, legal research, compliance documentation, and policy management with AI.',
    icon: 'Scale',
    categories: ['legal-compliance', 'file-organization', 'operations-compliance'],
  },
  // 38 playbook matches
  {
    id: 'project-managers',
    name: 'Project Managers',
    title: 'AI Tools for Project Managers',
    description: 'Plan sprints, track progress, coordinate teams, and generate status reports.',
    seoDescription: 'Claude Code playbooks for project managers — sprint planning, status reports, team coordination, agile workflows, and task management with AI.',
    icon: 'LayoutGrid',
    categories: ['project-management', 'productivity', 'operations-compliance', 'data-reporting', 'task-management'],
  },
  // 35 playbook matches
  {
    id: 'designers',
    name: 'Designers',
    title: 'AI Tools for Designers',
    description: 'Audit accessibility, generate design assets, and manage creative workflows.',
    seoDescription: 'Claude Code playbooks for UX/UI and graphic designers — accessibility audits, design asset management, creative workflows, and marketing materials with AI.',
    icon: 'Palette',
    categories: ['creative-design', 'marketing-content', 'file-organization'],
  },
  // 22 playbook matches
  {
    id: 'healthcare-professionals',
    name: 'Healthcare Professionals',
    title: 'AI Tools for Healthcare Professionals',
    description: 'Analyze research, process clinical data, and manage medical documentation.',
    seoDescription: 'Claude Code playbooks for healthcare professionals — medical research, clinical data processing, patient documentation, and scientific workflows with AI.',
    icon: 'Heart',
    categories: ['academic-research', 'data-reporting', 'personal-development'],
  },
  // 20 playbook matches
  {
    id: 'ecommerce',
    name: 'E-Commerce Operators',
    title: 'AI Tools for E-Commerce Operators',
    description: 'Optimize product listings, manage inventory copy, and scale marketing campaigns.',
    seoDescription: 'Claude Code playbooks for e-commerce operators — product listings, marketing campaigns, sales automation, and competitive analysis with AI.',
    icon: 'ShoppingCart',
    categories: ['marketing-content', 'sales-revenue', 'market-research'],
  },
  // Customer support — important distinct role
  {
    id: 'customer-support',
    name: 'Customer Support Teams',
    title: 'AI Tools for Customer Support Teams',
    description: 'Triage tickets, draft responses, build knowledge bases, and manage escalations.',
    seoDescription: 'Claude Code playbooks for customer support teams — ticket triage, response drafting, knowledge base creation, and escalation management with AI.',
    icon: 'Headphones',
    categories: ['customer-support', 'communications', 'knowledge-management'],
  },
];

export function getPersonaById(id: string): PersonaInfo | undefined {
  return personas.find((p) => p.id === id);
}
