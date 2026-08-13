import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPlaybookBySlug, getRelatedPlaybooks, getCategoryNeighbors } from '@/lib/playbooks';
import { getCategoryById } from '@/lib/categories';
import { DifficultyBadge } from '@/components/DifficultyBadge';
import { CategoryBadge } from '@/components/CategoryBadge';
import { CopyButton } from '@/components/CopyButton';
import { DownloadButton } from '@/components/DownloadButton';
import { SetupGuideBox } from '@/components/SetupGuideBox';
import { PlaybookCard } from '@/components/PlaybookCard';
import { Clock, ArrowLeft, ArrowRight, ExternalLink, Terminal, FileCode, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PlaybookPageProps {
  params: Promise<{ slug: string }>;
}

interface FaqItem {
  question: string;
  answer: string;
}

// FAQ content for top-traffic playbook pages (drives FAQ rich results in Google)
const playbookFaqs: Record<string, FaqItem[]> = {
  'composio-sdk': [
    {
      question: 'What is the Composio SDK for Claude Code?',
      answer: 'Composio SDK is an integration layer that connects Claude Code to 200+ external tools like Gmail, Slack, GitHub, Notion, Salesforce, and more. It lets you build AI agents that automate workflows across multiple apps from a single CLAUDE.md configuration.',
    },
    {
      question: 'How do I connect Claude Code to Gmail, Slack, or GitHub using Composio?',
      answer: 'Download the Composio SDK CLAUDE.md template, place it in your project folder, and launch Claude Code. Then tell Claude what you want to build — for example, "Create an agent that monitors GitHub PRs and posts to Slack." Composio handles the OAuth authentication flows automatically.',
    },
    {
      question: 'What is the difference between Tool Router and Direct Execution in Composio?',
      answer: 'Tool Router is designed for AI agent development with features like session isolation, auto-authentication, and MCP compatibility. Direct Execution is for traditional applications where you need manual control over tool execution, CRUD operations, and webhook-based workflows.',
    },
  ],
  'session-history-recovery': [
    {
      question: 'How do I recover lost code from a Claude Code session?',
      answer: 'Use the Session History Recovery playbook to search past Claude Code sessions. Start by gathering clues — when you did the work, what files were involved, and keywords from the conversation. Then ask Claude Code to "Find the session where I created [file or solution]" to locate and recover your work.',
    },
    {
      question: 'Where does Claude Code store session history?',
      answer: 'Claude Code stores session data locally on your machine. The Session History Recovery playbook helps you search through this history by date, content, file name, or problem description to find code snippets, file changes, commands, and solutions from previous sessions.',
    },
    {
      question: 'Can I search Claude Code chat history by date or keyword?',
      answer: 'Yes. You can search by date ("What did I do last Tuesday?"), by content ("Find the function that handles authentication"), by file ("When did I create utils.ts?"), or by problem ("That bug I fixed with the API timeout"). The playbook provides strategies for each search type.',
    },
  ],
  'finance-manager': [
    {
      question: 'Can Claude Code analyze my bank statements and spending?',
      answer: 'Yes. The Personal Finance Manager playbook lets you import bank statements as CSV or PDF files. Claude Code analyzes your transactions and generates spending breakdowns by category, monthly trend reports, budget comparisons using the 50/30/20 rule, and personalized savings recommendations.',
    },
    {
      question: 'What financial reports does the Finance Manager playbook generate?',
      answer: 'It generates summary dashboards with key metrics, pie charts for category spending, bar charts comparing income vs expenses, trend lines showing spending over time, savings rate analysis, and color-coded performance indicators. All reports are created as interactive HTML files.',
    },
    {
      question: 'Is my financial data safe with Claude Code?',
      answer: 'Your data stays entirely on your local machine. Claude Code processes bank statements locally — nothing is uploaded to external servers. The playbook works with exported CSV or PDF files from your bank and generates reports in your local Documents folder.',
    },
  ],
  'diy-project-planner': [
    {
      question: 'Can Claude Code create construction blueprints and materials lists?',
      answer: 'Yes. The DIY Project Planner playbook generates detailed materials lists with exact quantities, dimensions, and cost estimates, plus step-by-step build instructions, tool checklists, cut diagrams, and safety notes for any home improvement or woodworking project.',
    },
    {
      question: 'What types of DIY projects can this playbook help with?',
      answer: 'It covers furniture building (shelves, desks, tables), storage solutions (closet organizers, garage systems), outdoor projects (decks, planters, fences, sheds), home repairs (drywall, plumbing, electrical), and upgrades (lighting, hardware, trim work).',
    },
    {
      question: 'How accurate are the cost estimates for DIY projects?',
      answer: 'The playbook provides itemized cost estimates based on typical retail prices. It recommends buying 10% extra materials to account for mistakes and waste, suggests budget alternatives when possible, and can adjust plans if you specify a target budget.',
    },
  ],
  'solopreneur-business-architect': [
    {
      question: 'What is the Solopreneur Business Architect playbook?',
      answer: 'It is a Claude Code workflow that creates a complete blueprint for building a $100K/year one-person business using AI as leverage. It analyzes your skills, capital, and available time, then provides a specific business model, offer design, pricing strategy, client acquisition system, and 90-day launch plan.',
    },
    {
      question: 'What business models does the Solopreneur playbook recommend?',
      answer: 'It evaluates six models: Service Arbitrage (selling expertise AI delivers), Productized Services (fixed scope and price), Info Products (courses and templates), Micro-SaaS (AI-powered niche tools), Content + Monetization (audience to offers), and Acquisition (buying and optimizing with AI). It recommends the best fit based on your situation.',
    },
    {
      question: 'How long does it take to build a profitable one-person business with this playbook?',
      answer: 'The playbook provides a 90-day launch plan: weeks 1-2 for building your offer, weeks 3-6 for validation and first clients, weeks 7-10 for scaling, and weeks 11-12 for systematizing. The goal is revenue within 90 days — no 18-month runway plans.',
    },
  ],
};

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: PlaybookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const playbook = await getPlaybookBySlug(slug);

  if (!playbook) {
    return { title: 'Playbook Not Found' };
  }

  return {
    title: `${playbook.title} | Claude Code Playbooks`,
    description: playbook.description,
    alternates: {
      canonical: `/playbooks/${slug}`,
    },
    openGraph: {
      title: playbook.title,
      description: playbook.description,
      url: `https://www.claudecodehq.com/playbooks/${slug}`,
      type: 'article',
      images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: playbook.title,
      description: playbook.description,
      images: ['https://www.claudecodehq.com/og-image.jpg'],
    },
  };
}

export default async function PlaybookPage({ params }: PlaybookPageProps) {
  const { slug } = await params;
  const playbook = await getPlaybookBySlug(slug);

  if (!playbook) {
    notFound();
  }

  const categoryInfo = getCategoryById(playbook.category);
  const relatedPlaybooks = getRelatedPlaybooks(playbook);
  const { previous, next } = getCategoryNeighbors(playbook);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.claudecodehq.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Playbooks',
        item: 'https://www.claudecodehq.com/playbooks',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: playbook.title,
      },
    ],
  };

  const softwareAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: playbook.title,
    description: playbook.description,
    url: `https://www.claudecodehq.com/playbooks/${slug}`,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': playbook.author === 'community' ? 'Organization' : 'Person',
      name: playbook.author === 'community' ? 'Claude Code Playbooks Community' : playbook.author,
    },
    datePublished: playbook.createdAt,
    ...(playbook.updatedAt && { dateModified: playbook.updatedAt }),
    keywords: playbook.tags.join(', '),
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to use ${playbook.title}`,
    description: playbook.description,
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Browse and select the playbook',
        text: `Find the ${playbook.title} playbook on Claude Code Playbooks and review the configuration.`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Copy the CLAUDE.md template',
        text: 'Copy the CLAUDE.md template and place it in your project folder.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Start using with Claude Code',
        text: 'Launch Claude Code in your project directory. It will automatically detect and use the CLAUDE.md configuration.',
      },
    ],
    tool: {
      '@type': 'SoftwareApplication',
      name: 'Claude Code',
      url: 'https://claude.ai/code',
    },
    totalTime: playbook.timeToSetup,
  };

  const faqs = playbookFaqs[slug] || null;

  const faqJsonLd = faqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Link
        href="/playbooks"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-[#22d3ee] mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        cd ../playbooks
      </Link>

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CategoryBadge category={playbook.category} />
            <DifficultyBadge difficulty={playbook.difficulty} />
          </div>

          <h1 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Terminal className="h-6 w-6 text-[#22d3ee]" />
            {playbook.title}
          </h1>

          <p className="text-muted-foreground mb-4">{playbook.description}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d]">
              <Clock className="h-4 w-4 text-[#22d3ee]" />
              <span>{playbook.timeToSetup}</span>
            </div>
            {playbook.author && (
              <span className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d]">
                By {playbook.author}
              </span>
            )}
            {playbook.sourceUrl && (
              <a
                href={playbook.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] hover:text-[#22d3ee] transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Source
              </a>
            )}
          </div>

          {playbook.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {playbook.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-[#21262d] text-muted-foreground px-2 py-1 rounded border border-[#30363d]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {playbook.seoHook && (
          <div className="mb-8 p-6 bg-gradient-to-r from-[#161b22] to-[#1c2333] rounded-lg border border-[#30363d]">
            <p className="text-base text-[#e6edf3] leading-relaxed mb-4">
              {playbook.seoHook}
            </p>
            {playbook.targetAudience && (
              <p className="text-sm text-muted-foreground mb-3">
                <span className="text-[#22d3ee] font-medium">Who it&apos;s for:</span>{' '}
                {playbook.targetAudience}
              </p>
            )}
            {playbook.exampleUseCase && (
              <div className="mt-4 p-4 bg-[#0d1117] rounded border border-[#30363d]">
                <p className="text-xs text-[#22d3ee] font-medium uppercase tracking-wide mb-2">
                  Example
                </p>
                <p className="text-sm text-[#e6edf3] leading-relaxed">
                  {playbook.exampleUseCase}
                </p>
              </div>
            )}
          </div>
        )}

        {playbook.claudeMdTemplate && (
          <Card className="mb-8 bg-[#161b22] border-[#30363d]">
            <CardHeader className="pb-4 border-b border-[#30363d]">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <FileCode className="h-4 w-4 text-[#f97316]" />
                  CLAUDE.md Template
                </CardTitle>
                <div className="flex items-center gap-2">
                  <CopyButton text={playbook.claudeMdTemplate} />
                  <DownloadButton content={playbook.claudeMdTemplate} filename="CLAUDE.md" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                <a href="/getting-started" className="text-[#22d3ee] hover:underline font-medium">New here? 3-minute setup guide &rarr;</a>
                {' '}<span className="text-muted-foreground/50">|</span>{' '}
                Already set up? Copy the template below.
              </p>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="bg-[#0d1117] rounded-lg border border-[#30363d] max-h-[400px] overflow-auto">
                <pre className="p-4 text-sm">
                  <code className="text-[#e6edf3] whitespace-pre-wrap">{playbook.claudeMdTemplate}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        )}

        <SetupGuideBox
          content={playbook.content}
          filename="README.md"
          defaultExpanded={true}
          isHtml={true}
        />
      </article>

      {faqs && (
        <section className="mt-12 pt-8 border-t border-[#30363d]">
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-[#a78bfa]" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="p-4 bg-[#161b22] border border-[#30363d] rounded-lg">
                <h3 className="text-sm font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {relatedPlaybooks.length > 0 && (
        <section className="mt-12 pt-8 border-t border-[#30363d]">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-[#22d3ee]">$</span>
            Related Playbooks
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPlaybooks.map((related) => (
              <PlaybookCard
                key={related.slug}
                slug={related.slug}
                title={related.title}
                description={related.description}
                category={related.category}
                difficulty={related.difficulty}
                timeToSetup={related.timeToSetup}
                tags={related.tags}
              />
            ))}
          </div>
          {categoryInfo && (
            <p className="mt-6 text-sm text-muted-foreground">
              <Link
                href={`/categories/${playbook.category}`}
                className="text-[#22d3ee] hover:underline"
              >
                Browse all {categoryInfo.name} playbooks →
              </Link>
            </p>
          )}
        </section>
      )}

      {/* Sequential paths through the category, so crawlers can walk it end to end */}
      {(previous || next) && (
        <nav
          className="mt-10 pt-8 border-t border-[#30363d] grid gap-4 sm:grid-cols-2"
          aria-label="Previous and next playbook"
        >
          {previous ? (
            <Link
              href={`/playbooks/${previous.slug}`}
              className="flex items-start gap-3 p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors group"
              rel="prev"
            >
              <ArrowLeft className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground group-hover:text-[#22d3ee] transition-colors" />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground/70 mb-1">Previous</span>
                <span className="block text-sm font-semibold group-hover:text-[#22d3ee] transition-colors">
                  {previous.title}
                </span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/playbooks/${next.slug}`}
              className="flex items-start gap-3 p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors group sm:text-right sm:flex-row-reverse"
              rel="next"
            >
              <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground group-hover:text-[#22d3ee] transition-colors" />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground/70 mb-1">Next</span>
                <span className="block text-sm font-semibold group-hover:text-[#22d3ee] transition-colors">
                  {next.title}
                </span>
              </span>
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
