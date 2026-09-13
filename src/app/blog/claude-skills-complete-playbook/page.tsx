import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'The Complete Claude Skills Playbook: 100 Ways to Automate Your Work in 2026 | Claude Code Playbooks Blog',
  description: "The definitive Claude Skills hub — 100 curated Skills across every category, plus a full directory of role-specific guides for every profession and team function.",
  alternates: { canonical: '/blog/claude-skills-complete-playbook' },
  openGraph: {
    title: 'The Complete Claude Skills Playbook: 100 Ways to Automate Your Work in 2026',
    description: "The definitive Claude Skills hub — 100 curated Skills across every category, plus a full directory of role-specific guides for every profession and team function.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-complete-playbook',
    type: 'article',
    publishedTime: '2026-09-13T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Complete Claude Skills Playbook: 100 Ways to Automate Your Work in 2026',
    description: "The definitive Claude Skills hub — 100 curated Skills across every category, plus a full directory of role-specific guides for every profession and team function.",
    images: ['https://www.claudecodehq.com/og-image.png'],
  },
};

function PlaybookLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#22d3ee] hover:underline font-medium">
      {children}
    </Link>
  );
}

function GuideLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#f97316] hover:underline font-medium">
      {children}
    </Link>
  );
}

function SkillItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="py-1.5 border-b border-[#30363d]/50 last:border-0">
      {children}
    </li>
  );
}

export default function ClaudeSkillsCompletePlaybookPage() {
  return (
    <BlogPostLayout
      title="The Complete Claude Skills Playbook: 100 Ways to Automate Your Work in 2026"
      description="The definitive Claude Skills hub — 100 curated Skills across every category, plus a full directory of role-specific guides for every profession and team function."
      category="guide"
      difficulty="basic"
      readingTime="20 min read"
      createdAt="2026-09-13"
      tags={['claude skills', 'claude skills list', 'best claude skills', 'claude skills 2026', 'claude skills directory', 'ai automation skills', 'claude code skills']}
      author="Claude Code Playbooks"
      slug="claude-skills-complete-playbook"
    >
      <p>
        Claude Skills are structured, reusable instructions that turn a general-purpose model into a specialist for one specific job — a code reviewer, a grant writer, a disk space analyzer, a customer research assistant. Instead of re-explaining context every time, you describe what you want once, in the Skill, and Claude follows it consistently from then on. The two things that make Skills different from just writing a good prompt: they persist across sessions, and they're specific enough to produce the same quality of output every time you use them.
      </p>
      <p>
        This page is the hub for everything we've published on Skills — a curated list of 100 individual Skills spanning file organization, development, marketing, finance, legal, HR, and personal productivity, followed by a full directory of role-specific guides if you want the deeper walkthrough for your particular job. Bookmark this one; we'll keep it current as new Skills and guides get published.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        100 Claude Skills to Automate Your Work
      </h2>
      <p>
        Grouped by what they actually do, not by who's supposed to use them — most of these are useful well outside their original audience.
      </p>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">File & Folder Organization</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/auto-organize-downloads">Auto-Organize Downloads</PlaybookLink> — sort a chaotic Downloads folder by type and date automatically</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/intelligent-file-organizer">Intelligent File Organizer</PlaybookLink> — analyze and restructure an entire Documents folder, with your approval before anything moves</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/duplicate-file-detector">Duplicate File Detector</PlaybookLink> — find exact and near-duplicate files without ever auto-deleting</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/old-file-cleanup">Old File Cleanup Assistant</PlaybookLink> — flag safely deletable files with a dry-run before anything is removed</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/disk-space-analyzer">Disk Space Analyzer</PlaybookLink> — find the hidden space hogs: Docker images, Xcode caches, old backups</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/xlsx-manipulation">Excel File Manipulation</PlaybookLink> — merge dozens of Excel files into one formatted, charted summary</SkillItem>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Notes & Knowledge Management</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/obsidian-automation">Obsidian Vault Automation</PlaybookLink> — auto-link new notes to related ideas and flag orphans weekly</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/obsidian-auto-tagging">Obsidian Note Auto-Tagging</PlaybookLink> — apply a consistent tag taxonomy across hundreds of untagged notes</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/personal-knowledge-base">Personal Knowledge Base</PlaybookLink> — build a searchable second brain from your reading notes</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/save-knowledge">Save Knowledge</PlaybookLink> — capture institutional knowledge with tagging for semantic retrieval later</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/notion-automation">Notion Automation</PlaybookLink> — sync Notion databases and trigger cross-platform workflows automatically</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/knowledge-base-builder">Knowledge Base Builder</PlaybookLink> — codify domain terminology, design principles, and anti-patterns</SkillItem>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Calendar, Email & Meetings</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/calendar-automation">Calendar Automation</PlaybookLink> — protect focus blocks and automate meeting prep workflows</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/gmail-slack-summary">Gmail-to-Slack Summary Bot</PlaybookLink> — summarize important emails and post them to Slack automatically</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/email-drafter">Professional Email Drafter</PlaybookLink> — draft email replies that sound like you, not a template</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/meeting-notes-to-actions">Meeting Notes to Action Items</PlaybookLink> — extract every decision and action item from raw meeting notes</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/daily-morning-briefing">Daily Morning Briefing</PlaybookLink> — consolidate calendar, email, tasks, and weather into one 30-second view</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/inbox-zero-manager">Inbox Zero Manager</PlaybookLink> — triage and organize an overwhelmed inbox systematically</SkillItem>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Personal Development & Wellness</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/mental-health-journal">Mental Health Journal Assistant</PlaybookLink> — guided journaling prompts with pattern recognition across entries</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/annual-life-audit">Annual Life Audit</PlaybookLink> — an honest cross-domain assessment that replaces vague resolutions</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/30-day-goal-achievement">30-Day Goal Achievement Protocol</PlaybookLink> — a CBT-grounded daily protocol for goals that never stick</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/personal-feedback-analyzer">Personal Feedback Analyzer</PlaybookLink> — mine your own journals and commits for behavioral patterns</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/adhd-task-manager">ADHD-Friendly Task Manager</PlaybookLink> — a task system built around how ADHD brains actually work</SkillItem>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Career & Job Search</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/resume-tailor">Resume Tailoring Assistant</PlaybookLink> — tailor your resume to match a specific job description</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/cover-letter-generator">Cover Letter Generator</PlaybookLink> — a cover letter grounded in the actual job posting, not a template</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/interview-prep">Interview Prep System</PlaybookLink> — practice questions specific to the role and company</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/compensation-benchmarker">Compensation Benchmarker</PlaybookLink> — benchmark a salary offer against real market data</SkillItem>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Developer Tools & DevOps</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/cicd-pipeline-generator">CI/CD Pipeline Generator</PlaybookLink> — production-ready GitHub Actions and GitLab CI pipelines for any stack</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/docker-containerization">Docker Containerization</PlaybookLink> — multi-stage Dockerfiles that don&apos;t balloon to 2 GB</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/pr-reviewer">PR Reviewer</PlaybookLink> — structured, senior-engineer-level review before you ask your team</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/multi-agent-parallel-review">Multi-Agent Parallel Review</PlaybookLink> — specialized security, performance, and quality reviewers running in parallel</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/iterative-build-fixer">Iterative Build & Fix Loop</PlaybookLink> — automatically clear cascading build errors after a dependency upgrade</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/codebase-documenter">Codebase Documenter</PlaybookLink> — generate README, architecture docs, and API docs from the actual code</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/changelog-generator">Changelog Generator</PlaybookLink> — turn 200 cryptic git commits into a categorized release log</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/mcp-server-builder">MCP Server Builder</PlaybookLink> — a production-ready MCP server generated for your internal API</SkillItem>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Data & Analytics</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/csv-data-analyst">CSV & Excel Data Analyst</PlaybookLink> — ask spreadsheet questions in plain English, no formulas required</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/natural-language-sql-writer">Natural Language SQL Writer</PlaybookLink> — optimized, dialect-specific SQL from a plain English description</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/data-visualization-creator">Data Visualization Creator</PlaybookLink> — publication-quality charts with the right chart type picked automatically</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/interactive-dashboard-builder">Interactive Dashboard Builder</PlaybookLink> — a shareable HTML dashboard with no BI tool license required</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/business-analytics-reporter">Business Analytics Reporter</PlaybookLink> — find weak spots and root causes hiding in raw sales CSVs</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/executive-dashboard">Executive Dashboard</PlaybookLink> — translate operational metrics into business outcomes for leadership</SkillItem>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Design & Frontend</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/frontend-enhancer">Frontend Enhancer</PlaybookLink> — upgrade a generic Next.js app so it stops looking AI-generated</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/design-handoff-generator">Design Handoff Generator</PlaybookLink> — a complete developer spec generated from a Figma file</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/design-system-manager">Design System Manager</PlaybookLink> — audit a design system for hardcoded values and duplicate components</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/artifacts-builder">Artifacts Builder</PlaybookLink> — a working React and Tailwind prototype in a single shareable file</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/remotion-video-creator">Remotion Video Creator</PlaybookLink> — build animated product demos in React with live preview iteration</SkillItem>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Product & Project Management</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/jobs-to-be-done">Jobs-to-be-Done</PlaybookLink> — map the functional, social, and emotional jobs customers hire your product for</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/opportunity-solution-tree">Opportunity Solution Tree</PlaybookLink> — connect a business outcome to a validated, cheap experiment</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/discovery-interview-prep">Discovery Interview Prep</PlaybookLink> — an interview plan matched to your research goal, with bias guardrails</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/roadmap-planning">Roadmap Planning</PlaybookLink> — an outcome-driven roadmap with hypotheses and RICE scores attached</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/project-management-bootstrapper">Project Management Bootstrapper</PlaybookLink> — a complete project folder structure and tracking system in minutes</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/epic-breakdown-advisor">Epic Breakdown Advisor</PlaybookLink> — split an oversized epic into properly sized vertical-slice stories</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/prioritization-advisor">Prioritization Framework Advisor</PlaybookLink> — the right framework for your actual stage, not just RICE by default</SkillItem>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Marketing & Advertising</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/social-media-content-engine">Social Media Content Engine</PlaybookLink> — a month of platform-specific posts generated in one session</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/content-calendar">Content Calendar</PlaybookLink> — map topics to platforms and content pillars, with a repurposing plan built in</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/ad-copy-generator">Ad Copy Variation Generator</PlaybookLink> — analyze your winning ads and generate dozens of new variations</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/facebook-ads">Facebook & Meta Ads Manager</PlaybookLink> — real campaign structure instead of just boosting posts</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/google-ads-manager">Google Ads Campaign Manager</PlaybookLink> — fix broad-match, negative-keyword-free account structures</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/competitor-ad-analyzer">Competitor Ad Analyzer</PlaybookLink> — extract winning hooks and offers straight from the Meta Ad Library</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/x-twitter-growth-system">X (Twitter) Growth System</PlaybookLink> — a milestone-based growth plan instead of random posting</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/influencer-brief">Influencer Brief</PlaybookLink> — a media kit that answers exactly what a brand&apos;s checklist wants to see</SkillItem>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Content Creation & Repurposing</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/newsletter-system">Newsletter System</PlaybookLink> — draft each issue in your voice while flagging topic repeats</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/article-pipeline">Article Writing Pipeline</PlaybookLink> — score a blog idea backlog and draft the strongest candidate</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/podcast-automation">Podcast Production Assistant</PlaybookLink> — transcripts, timestamped show notes, and social clips after every episode</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/content-repurposer">Content Repurposer</PlaybookLink> — turn one newsletter or video into a dozen social posts weekly</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/marketing-video-creation">Marketing Video Creation</PlaybookLink> — pick the right AI video tool and get a script, shot list, and prompts</SkillItem>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Writing & Editing</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/novel-writing-assistant">Novel Writing Assistant</PlaybookLink> — a character bible, plot structure, and timeline before you draft</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/book-bible">Book Bible</PlaybookLink> — catch continuity errors before your beta reader does</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/copy-editing">Copy Editing</PlaybookLink> — focused clarity, specificity, and voice passes that don&apos;t rewrite from scratch</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/proofread-review">Proofread Review Agent</PlaybookLink> — a narrowly scoped grammar and punctuation pass that won&apos;t touch your argument</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/research-paper-writer">Research Paper Writer</PlaybookLink> — a submission-ready manuscript meeting IEEE/ACM standards</SkillItem>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Finance, Excel & Grants</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/excel-automation">Excel Automation Workflows</PlaybookLink> — refresh live Excel dashboards and pivot tables on a schedule</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/financial-modeling">Financial Modeling Assistant</PlaybookLink> — a correctly-linked 3-statement model for founder-scale projections</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/fa-3-statement-model">3-Statement Financial Model Builder</PlaybookLink> — a full institutional-grade model with every supporting schedule</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/budget-analyzer">Budget Analyzer</PlaybookLink> — analyze spending patterns and flag exactly where a budget is leaking</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/grant-proposal-writer">Grant Proposal Writer</PlaybookLink> — a complete first draft in your funder&apos;s exact template</SkillItem>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Legal, HR & Compliance</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/contract-review">Contract Review & Risk Analyzer</PlaybookLink> — flag risky clauses and missing protections before you sign</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/contract-redliner">Contract Redlining Assistant</PlaybookLink> — redline a contract against your standard playbook automatically</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/ccpa-compliance-advisor">CCPA / CPRA Compliance Advisor</PlaybookLink> — assess compliance gaps in your data practices</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/job-description-generator">Job Description Generator</PlaybookLink> — a job description that actually attracts the right candidates</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/applicant-screening">Applicant Screening Assistant</PlaybookLink> — screen a stack of resumes against your actual requirements</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/offer-letter-drafter">Offer Letter Drafter</PlaybookLink> — a compliant, on-brand offer letter in minutes</SkillItem>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Sales, Customer Success & Support</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/crm-automation">CRM Automation</PlaybookLink> — lead scoring, deal stage automation, and multi-CRM sync</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/customer-success-manager">Customer Success Manager</PlaybookLink> — track account health and flag at-risk customers proactively</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/churn-risk">Churn Risk</PlaybookLink> — score customer segments and generate specific intervention playbooks</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/ticket-triage-system">Ticket Triage System</PlaybookLink> — route and prioritize support tickets automatically</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/support-response-drafter">Support Response Drafter</PlaybookLink> — on-brand support replies drafted from the actual ticket context</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/customer-call-synthesis">Customer Call Synthesis</PlaybookLink> — turn 20 customer calls into validated and invalidated assumptions</SkillItem>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">E-commerce, SEO & PDFs</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/amazon-seller">Amazon Seller Assistant</PlaybookLink> — automate inventory alerts, repricing, and ad spend across your catalog</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/review-response">Review Response</PlaybookLink> — brand-aligned replies to every review, positive or negative</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/page-seo-analysis">Page SEO Analysis</PlaybookLink> — a deep single-page audit across on-page signals and E-E-A-T</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/pdf-extraction">PDF Text & Table Extractor</PlaybookLink> — clean CSVs and structured text pulled out of any PDF</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/pdf-form-filler">PDF Form Auto-Filler</PlaybookLink> — batch-fill dozens of identical PDF forms from a spreadsheet</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/pdf-ocr">PDF OCR Scanner</PlaybookLink> — turn a scanned document into searchable, copyable text</SkillItem>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Executive, Investing & Specialized Finance</h3>
      <ul className="my-4 space-y-0">
        <SkillItem><PlaybookLink href="/playbooks/ceo-advisor">CEO Advisor</PlaybookLink> — a sounding board for high-stakes executive decisions</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/pitch-deck-generator">Pitch Deck Generator</PlaybookLink> — a 12-slide investor deck following the proven problem-solution-traction-ask structure</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/ib-pitch-deck">IB Pitch Deck Template Populator</PlaybookLink> — populate a deck with financial data, cross-checked across every slide</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/er-earnings-analysis">Equity Research Earnings Update</PlaybookLink> — an earnings report built the way equity research actually works</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/pe-deal-screening">PE Deal Screening Memo</PlaybookLink> — a deal screening memo for private equity due diligence</SkillItem>
        <SkillItem><PlaybookLink href="/playbooks/fact-checker">Fact Checker</PlaybookLink> — confidence-scored claim verification with source citations before you publish</SkillItem>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4 border-b border-[#30363d] pb-2">
        The Full Guide Directory: Claude Skills by Role
      </h2>
      <p>
        Every guide below is a deep dive for one specific profession or workflow — four to five Skills chained together into a real system, with prompts, before/after examples, and setup times. Find your role, or browse a category you&apos;re curious about.
      </p>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Engineering & Technical</h3>
      <ul className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc list-inside text-muted-foreground">
        <li><GuideLink href="/blog/claude-skills-devops">DevOps Engineers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-code-review">Code Review</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-documentation">Software Documentation</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-mcp">Building MCP Servers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-design-to-code">Designers Who Code</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-data-analysts">Data Analysts</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-no-code">No-Code Automation</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-excel">Spreadsheets & Excel</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-pdf">PDF Automation</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-vs-claude-agents">Claude Skills vs. Claude Agents</GuideLink></li>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Product, Project & UX</h3>
      <ul className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc list-inside text-muted-foreground">
        <li><GuideLink href="/blog/claude-skills-product-managers">Product Managers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-project-managers">Project Managers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-product-discovery">Product Discovery</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-ux-research">UX Researchers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-prompt-engineer">Prompt Engineering</GuideLink></li>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Marketing, Sales & Content</h3>
      <ul className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc list-inside text-muted-foreground">
        <li><GuideLink href="/blog/claude-skills-marketing-teams">Marketing Teams</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-social-media">Social Media Managers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-paid-ads">Paid Ads</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-seo-agencies">SEO Agencies</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-sales-teams">Sales Teams</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-customer-success">Customer Success</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-customer-research">Customer Research</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-ecommerce">E-commerce Sellers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-influencers">Influencers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-twitter-growth">Twitter/X Growth</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-video-creators">Video Creators</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-podcasters">Podcasters</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-newsletter">Newsletter Writers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-for-writers">Writers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-editorial-library">Editorial Library</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-replace-saas-tools">Replace $1,000/Month in SaaS</GuideLink></li>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Finance, Legal & Compliance</h3>
      <ul className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc list-inside text-muted-foreground">
        <li><GuideLink href="/blog/claude-skills-accountants">Accountants</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-tax-season">Tax Season</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-legal">Lawyers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-compliance">Compliance Officers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-cybersecurity">Cybersecurity Teams</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-equity-research">Equity Research Analysts</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-investors">Investors</GuideLink></li>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">People & Business Operations</h3>
      <ul className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc list-inside text-muted-foreground">
        <li><GuideLink href="/blog/claude-skills-hr">HR Managers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-recruiters">Recruiters</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-agencies">Agencies</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-consultants">Consultants</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-small-business">Small Business Owners</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-startups">Startups</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-solopreneurs">Solopreneurs</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-freelancers">Freelancers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-executive-ai-chief-of-staff">Executives (AI Chief of Staff)</GuideLink></li>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Creative & Design</h3>
      <ul className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc list-inside text-muted-foreground">
        <li><GuideLink href="/blog/claude-skills-for-designers">Designers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-creative-directors">Creative Directors</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-authors">Authors</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-grant-writers">Grant Writers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-pitch-decks">Pitch Decks</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-reports">Reports</GuideLink></li>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Personal Productivity & Life</h3>
      <ul className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc list-inside text-muted-foreground">
        <li><GuideLink href="/blog/claude-skills-adhd">ADHD Focus System</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-productivity-second-brain">Personal Productivity / Second Brain</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-meetings">Meeting Overload</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-calendar">Calendar Chaos</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-inbox-zero">Inbox Zero</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-mental-wellness">Mental Wellness</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-goal-setting">Goal Setting</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-health-fitness">Health & Fitness</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-personal-finance">Personal Finance</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-file-cleanup">File Cleanup</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-mac">Mac Users</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-smart-home">Smart Home</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-obsidian">Obsidian Users</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-notion">Notion Power Users</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-slack">Slack Teams</GuideLink></li>
      </ul>

      <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Learning & Comparisons</h3>
      <ul className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc list-inside text-muted-foreground">
        <li><GuideLink href="/blog/claude-skills-students">Students</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-teachers">Teachers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-academic-research">Academic Research</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-job-seekers">Job Seekers</GuideLink></li>
        <li><GuideLink href="/blog/claude-skills-vs-chatgpt-plugins">Claude Skills vs. ChatGPT Plugins</GuideLink></li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4 border-b border-[#30363d] pb-2">
        Where to Start
      </h2>
      <p>
        If you're new to Skills, don't try to adopt ten at once. Pick the single Skill above that maps to the task eating the most time this week, get it working, and let it earn its place before adding a second one. Most of the guides in the directory follow the same pattern — three or four Skills that build on each other into one coherent system — so once the first Skill is paying off, the rest of that guide is usually a short walk from there.
      </p>
      <p>
        This hub will keep growing. If there's a role or workflow you don't see covered yet, it's likely coming — check back, or browse the full{' '}
        <Link href="/playbooks" className="text-[#22d3ee] hover:underline font-medium">playbook library</Link>{' '}
        directly for anything not listed above.
      </p>
    </BlogPostLayout>
  );
}
