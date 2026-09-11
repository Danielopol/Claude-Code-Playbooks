import type { TopicId } from '@/types/sponsor';

// Who each blog post is written for, derived from its slug. Drives two things:
// the audience-matched newsletter heading (the generic "Get weekly playbooks"
// converts worst on exactly the persona guides that get the most traffic), and
// which category sponsors appear on the post.
//
// Rules are checked in order against the post slug; the first match wins.
// Posts that fit no rule get the generic copy and only site-wide sponsors.

export interface NewsletterCopy {
  heading: string;
  subheading: string;
}

const RULES: [RegExp, string, TopicId][] = [
  [/academic-research|grant-writers|deep-research/, 'researchers', 'academic-research'],
  [/students/, 'students', 'academic-research'],
  [/teachers/, 'teachers', 'academic-research'],
  [/equity-research/, 'equity research analysts', 'finance'],
  [/private-equity|financial-modeling/, 'finance professionals', 'finance'],
  [/investors/, 'investors', 'finance'],
  [/accountants|tax-season|invoice-processing/, 'accountants', 'finance'],
  [/personal-finance/, 'your personal finances', 'finance'],
  [/consultants/, 'consultants', 'consulting-strategy'],
  [/job-seekers/, 'job seekers', 'career-hr'],
  [/recruiters|-hr$/, 'HR and recruiting', 'career-hr'],
  [/adhd/, 'people with ADHD', 'health-wellness'],
  [/health-fitness/, 'health and fitness', 'health-wellness'],
  [/mental-wellness/, 'mental wellness', 'health-wellness'],
  [/legal|contract-review|compliance/, 'legal professionals', 'legal'],
  [/executive/, 'busy professionals', 'consulting-strategy'],
  [/meetings|calendar|inbox-zero/, 'busy professionals', 'productivity'],
  [/for-writers|authors|editorial|write-like-a-human|newsletter/, 'writers', 'writing-content'],
  [/designers|creative-directors|design-to-code|ux-research/, 'designers', 'writing-content'],
  [/data-analysts|excel|reports|csv/, 'data analysts', 'consulting-strategy'],
  [/product-managers|product-discovery|project-managers/, 'product and project managers', 'consulting-strategy'],
  [/marketing|seo|paid-ads|social-media|twitter|influencers|cold-email|repurpose|content-curation|keyword/, 'marketers', 'writing-content'],
  [/video-creators|podcasters/, 'content creators', 'writing-content'],
  [/sales-teams|customer-success|customer-research/, 'sales and customer teams', 'consulting-strategy'],
  [/freelancers|solopreneurs|small-business|startups|agencies|ecommerce|pitch-decks/, 'founders and freelancers', 'consulting-strategy'],
  [/obsidian|notion|second-brain|llm-wiki/, 'building a second brain', 'productivity'],
  [/code-review|devops|cybersecurity|documentation|mcp|agent|prompt-engineer|session-history/, 'technical teams', 'developer-tools'],
];

const GENERIC: NewsletterCopy = {
  heading: 'Get new Claude workflows every week',
  subheading: 'One email a week with the newest playbooks. Free, like everything here.',
};

function matchRule(slug: string) {
  return RULES.find(([pattern]) => pattern.test(slug));
}

export function getBlogNewsletterCopy(slug: string): NewsletterCopy {
  const match = matchRule(slug);
  if (!match) return GENERIC;

  return {
    heading: `New Claude workflows for ${match[1]}, every week`,
    subheading: GENERIC.subheading,
  };
}

export function getBlogTopics(slug: string): TopicId[] {
  const match = matchRule(slug);
  return match ? [match[2]] : [];
}
