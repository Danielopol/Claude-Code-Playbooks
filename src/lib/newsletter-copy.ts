// Audience-matched signup copy for blog posts. The generic "Get weekly
// playbooks" converts worst on exactly the pages with the most traffic — the
// persona guides — so each post names the reader it was written for.
//
// Rules are checked in order against the post slug; the first match wins.
// Posts that fit no rule get the generic copy.

export interface NewsletterCopy {
  heading: string;
  subheading: string;
}

const RULES: [RegExp, string][] = [
  [/academic-research|grant-writers|deep-research/, 'researchers'],
  [/students/, 'students'],
  [/teachers/, 'teachers'],
  [/equity-research/, 'equity research analysts'],
  [/private-equity|financial-modeling/, 'finance professionals'],
  [/investors/, 'investors'],
  [/accountants|tax-season|invoice-processing/, 'accountants'],
  [/personal-finance/, 'your personal finances'],
  [/consultants/, 'consultants'],
  [/job-seekers/, 'job seekers'],
  [/recruiters|-hr$/, 'HR and recruiting'],
  [/adhd/, 'people with ADHD'],
  [/health-fitness/, 'health and fitness'],
  [/mental-wellness/, 'mental wellness'],
  [/legal|contract-review|compliance/, 'legal professionals'],
  [/executive|meetings|calendar|inbox-zero/, 'busy professionals'],
  [/for-writers|authors|editorial|write-like-a-human|newsletter/, 'writers'],
  [/designers|creative-directors|design-to-code|ux-research/, 'designers'],
  [/data-analysts|excel|reports|csv/, 'data analysts'],
  [/product-managers|product-discovery|project-managers/, 'product and project managers'],
  [/marketing|seo|paid-ads|social-media|twitter|influencers|cold-email|repurpose|content-curation|keyword/, 'marketers'],
  [/video-creators|podcasters/, 'content creators'],
  [/sales-teams|customer-success|customer-research/, 'sales and customer teams'],
  [/freelancers|solopreneurs|small-business|startups|agencies|ecommerce|pitch-decks/, 'founders and freelancers'],
  [/obsidian|notion|second-brain|llm-wiki/, 'building a second brain'],
  [/code-review|devops|cybersecurity|documentation|mcp|agent|prompt-engineer|session-history/, 'technical teams'],
];

const GENERIC: NewsletterCopy = {
  heading: 'Get new Claude workflows every week',
  subheading: 'One email a week with the newest playbooks. Free, like everything here.',
};

export function getBlogNewsletterCopy(slug: string): NewsletterCopy {
  const match = RULES.find(([pattern]) => pattern.test(slug));
  if (!match) return GENERIC;

  return {
    heading: `New Claude workflows for ${match[1]}, every week`,
    subheading: GENERIC.subheading,
  };
}
