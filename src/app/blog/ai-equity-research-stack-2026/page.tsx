import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';

export const metadata: Metadata = {
  title: 'The AI Equity Research Stack for 2026: Data, Model, Note | Claude Code Playbooks Blog',
  description: "The three-layer stack analysts are converging on — data platforms that feed Claude, Claude Code as the modeling layer, and Skills that turn the work into publishable notes.",
  alternates: { canonical: '/blog/ai-equity-research-stack-2026' },
  openGraph: {
    title: 'The AI Equity Research Stack for 2026: Data, Model, Note',
    description: "The three-layer stack analysts are converging on — data platforms that feed Claude, Claude Code as the modeling layer, and Skills that turn the work into publishable notes.",
    url: 'https://www.claudecodehq.com/blog/ai-equity-research-stack-2026',
    type: 'article',
    publishedTime: '2026-10-01T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The AI Equity Research Stack for 2026: Data, Model, Note',
    description: "The three-layer stack analysts are converging on — data platforms that feed Claude, Claude Code as the modeling layer, and Skills that turn the work into publishable notes.",
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

function PostLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#22d3ee] hover:underline font-medium">
      {children}
    </Link>
  );
}

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
      <p className="text-sm font-mono text-[#f97316] mb-0">{children}</p>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
      {children}
    </h2>
  );
}

const stack = [
  {
    partner: 'fiscal-ai',
    name: 'Fiscal.ai',
    role: 'Fundamentals that feed Claude',
    detail: 'Standardized financials, KPIs, segments, and transcripts for 13,000+ companies, each figure linked to its filing. Official Claude connector over MCP.',
    price: 'Free tier · Pro from $39/mo',
  },
  {
    partner: 'koyfin',
    name: 'Koyfin',
    role: 'Screening and market context',
    detail: '100K+ global securities, 5,900+ screen criteria, charting, and watchlists. Exports ticker lists to CSV for Claude to work through.',
    price: 'Free plan · screener from $39/mo',
  },
  {
    partner: 'seeking-alpha',
    name: 'Seeking Alpha',
    role: 'Ideas, sentiment, and the other side',
    detail: 'Quant Ratings across 100+ metrics, earnings call transcripts, and contributor analysis, including the bear cases you should be stress-testing against.',
    price: 'Premium ~$299/yr',
  },
];

export default function AiEquityResearchStackPage() {
  return (
    <BlogPostLayout
      title="The AI Equity Research Stack for 2026: Data, Model, Note"
      description="The three-layer stack analysts are converging on — data platforms that feed Claude, Claude Code as the modeling layer, and Skills that turn the work into publishable notes."
      category="guide"
      difficulty="intermediate"
      readingTime="11 min read"
      createdAt="2026-10-01"
      tags={['equity research ai tools', 'ai research stack', 'best tools equity research analyst', 'fiscal.ai', 'koyfin', 'seeking alpha', 'claude code finance']}
      author="Claude Code Playbooks"
      slug="ai-equity-research-stack-2026"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        A year ago, &quot;AI for equity research&quot; meant pasting a 10-K into a chat window and hoping the summary was right. The setup analysts are settling on now has more structure, and it splits into three layers. A <strong className="text-foreground">data</strong> layer supplies numbers you can trace to a filing. A <strong className="text-foreground">model</strong> layer, where Claude Code does the analysis, works from those numbers instead of from memory. A <strong className="text-foreground">note</strong> layer of Skills turns the analysis into something a PM will actually read.
      </p>
      <p>
        Each layer fails differently when it&apos;s missing. Without the data layer, Claude produces confident numbers that are wrong. Without the model layer, you&apos;re back to copying figures between browser tabs. Without the note layer, you have good analysis that nobody reads. Here&apos;s what goes in each one, what it costs, and where you can save money.
      </p>

      <H2>The Stack at a Glance</H2>
      <div className="rounded-lg border border-[#30363d] bg-[#161b22] overflow-hidden my-6">
        <div className="px-4 py-2 border-b border-[#30363d] text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
          Layer 1 — Data
        </div>
        <ul className="divide-y divide-[#30363d]">
          {stack.map((tool) => (
            <li key={tool.partner} className="px-4 py-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <span className="font-semibold text-foreground">
                  <AffiliateLink partner={tool.partner}>{tool.name}</AffiliateLink>
                  <span className="text-muted-foreground font-normal"> · {tool.role}</span>
                </span>
                <span className="text-xs text-muted-foreground">{tool.price}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-0">{tool.detail}</p>
            </li>
          ))}
        </ul>
        <div className="px-4 py-2 border-t border-[#30363d] text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
          Layer 2 — Model
        </div>
        <p className="px-4 py-3 text-sm text-muted-foreground mb-0">
          <span className="font-semibold text-foreground">Claude Code</span>: pulls the data, runs the analysis, and keeps your theses and models as files it can update.
        </p>
        <div className="px-4 py-2 border-t border-[#30363d] text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
          Layer 3 — Note
        </div>
        <p className="px-4 py-3 text-sm text-muted-foreground mb-0">
          <span className="font-semibold text-foreground">Equity Research Skills</span> (free on this site): earnings previews, thesis tracking, and initiation reports in formats PMs already know.
        </p>
      </div>
      <p className="text-sm text-muted-foreground">
        Prices were checked in September 2026 and change often. Confirm on each vendor&apos;s site before you buy.
      </p>

      <H2>Layer 1: Data You Can Trace</H2>
      <p>
        Most AI research mistakes start in this layer. A language model asked about a company&apos;s gross margin will give you a number whether or not it knows one, so the only real defense is to make sure Claude retrieves figures instead of recalling them. The three tools here split the job three ways, and each does something the other two don&apos;t.
      </p>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Fiscal.ai: the numbers Claude reads directly</h3>
      <p>
        <AffiliateLink partner="fiscal-ai">Fiscal.ai</AffiliateLink> is the only tool in this stack built to deliver data straight into Claude. It&apos;s an official Claude connector, running a hosted MCP server that Claude Code queries for standardized and as-reported financials, ratios, company KPIs, revenue segments, ownership data, and earnings call transcripts. Every figure links back to its source filing, and that link is what lets you defend a number in front of a PM. Paid plans cover 13,000+ public companies across the US, Canada, ADRs, and UK &amp; Europe. The free tier connects with no credit card and covers 100 large caps at 250 data calls a day. That&apos;s enough to prove out the workflow before you pay. Our <PostLink href="/blog/fiscal-ai-mcp-earnings-note">Fiscal.ai MCP walkthrough</PostLink> covers setup in one command.
      </p>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Koyfin: the universe and the filter</h3>
      <p>
        <AffiliateLink partner="koyfin">Koyfin</AffiliateLink> is where you decide what to look at. Its screener spans 100,000+ global securities with 5,900+ criteria. It also covers ETFs, fixed income, FX, and macro, and its charting is excellent. It has no MCP server or API, and its data license blocks exporting fundamentals, so its role in an AI stack is narrower but still valuable. You run the screen in Koyfin, export the ticker list, and hand that list to Claude to enrich with Fiscal.ai data. Our <PostLink href="/blog/koyfin-claude-pe-deal-screening">Koyfin + Claude screening guide</PostLink> covers that handoff, and the <PostLink href="/blog/koyfin-vs-fiscal-ai">Koyfin vs Fiscal.ai comparison</PostLink> covers which one to choose if you can only afford one.
      </p>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Seeking Alpha: the other side of the trade</h3>
      <p>
        <AffiliateLink partner="seeking-alpha">Seeking Alpha</AffiliateLink> fills a gap the first two leave open: what other investors think. Premium includes Quant Ratings, which grade a stock against its own sector across 100+ underlying metrics. It also includes earnings call transcripts and a large body of contributor analysis. For an analyst the contributor bear cases are the most useful part, because they come from people with a reason to argue against your thesis. There&apos;s no Claude connector, so this layer is read, not piped in. You paste the arguments that matter into Claude and ask it to test your thesis against them.
      </p>
      <Prompt>
        &quot;Here are the three strongest bear arguments on this name from the contributor coverage. For each one, check it against the Fiscal.ai data, and tell me whether the numbers support it, refute it, or can&apos;t settle it.&quot;
      </Prompt>
      <p>
        That prompt is the stack at its best. Seeking Alpha supplies the argument, Fiscal.ai supplies the evidence, and Claude does the cross-examination you&apos;d otherwise put off until after the stock had already moved against you.
      </p>

      <H2>Layer 2: Claude Code as the Model</H2>
      <p>
        The model layer is where the stack beats a chat window. Claude Code works inside a project folder, so your models, theses, and past notes stay there as files it can read and update. Every earnings season, the work starts from last quarter&apos;s state instead of a blank page.
      </p>
      <p>
        If your firm already pays for institutional data, it slots into the same layer. The <PlaybookLink href="/playbooks/lseg-equity-research">LSEG Equity Research Snapshot</PlaybookLink> Skill pulls IBES consensus estimates, fundamentals, price history, and macro context through LSEG&apos;s data tools. That&apos;s the institutional-grade alternative to the data layer above, and the analysis and note layers stay the same either way.
      </p>

      <H2>Layer 3: The Note</H2>
      <p>
        Three Skills cover the research cycle from before a print to a full initiation, and each one does better with real data underneath it.
      </p>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Before earnings: the preview</h3>
      <p>
        The <PlaybookLink href="/playbooks/er-earnings-preview">Earnings Preview</PlaybookLink> Skill builds a one-page setup covering consensus estimates, bull, base, and bear scenarios with their price implications, the five catalysts to watch, and the options-implied move. Pair it with the prior quarter&apos;s transcript from Fiscal.ai and the scenarios rest on what management actually said, not a summary of it.
      </p>
      <Prompt>
        &quot;Build an earnings preview for this name. Use Fiscal.ai for the last four quarters and last quarter&apos;s call transcript, and flag any guidance management gave that consensus doesn&apos;t seem to reflect.&quot;
      </Prompt>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Every quarter: the thesis</h3>
      <p>
        A thesis drifts quietly until it breaks all at once. The <PlaybookLink href="/playbooks/er-thesis-tracker">Thesis Tracker</PlaybookLink> Skill keeps each position&apos;s thesis as a scorecard, marking every pillar on track, behind, or ahead. It logs each new data point with its impact and updates your conviction level. Fed Fiscal.ai actuals each quarter and the latest bear arguments from Seeking Alpha, it tells you when you&apos;re holding past the thesis&apos;s sell-by date.
      </p>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">New coverage: the initiation</h3>
      <p>
        The <PlaybookLink href="/playbooks/er-initiating-coverage">Initiating Coverage</PlaybookLink> Skill is the heavy lift. It runs a five-task workflow covering company research, the financial model, valuation, charts, and report assembly, and it ends in a 30–50 page report with a DCF, comparable companies, and a recommendation. This is where the data layer earns its cost. A 40-page report built on recalled numbers fails the first time a reader checks one figure, and one built on filing-linked data holds up.
      </p>

      <H2>What It Costs, and Where to Save</H2>
      <p>
        At the time of writing, the full paid stack runs Koyfin Plus at $39 a month, Fiscal.ai Pro at $39 a month billed annually, and Seeking Alpha Premium at about $299 a year (roughly $25 a month). That&apos;s about $100 a month plus your Claude plan, a fraction of a single terminal seat. Every Skill on this site is free.
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Most important:</span> Fiscal.ai. It&apos;s the layer that stops Claude from making numbers up, and it&apos;s the one you&apos;ll feel most if you drop it.</li>
        <li><span className="text-foreground font-medium">Skip if your coverage is fixed:</span> Koyfin. If you already know your names, you don&apos;t need a 100,000-security screener. Add it when you start generating new ideas.</li>
        <li><span className="text-foreground font-medium">Optional:</span> Seeking Alpha. It sharpens the thesis and supplies bear cases, but the model and note layers work without it.</li>
        <li><span className="text-foreground font-medium">Free starting point:</span> Fiscal.ai&apos;s free tier, Koyfin&apos;s free plan, and the Skills cost nothing. Use them to prove the workflow on a large-cap name before paying for anything.</li>
      </ul>

      <H2>Start With One Name</H2>
      <p>
        Don&apos;t build the whole stack in one go. Pick one stock you already cover, connect Fiscal.ai&apos;s free tier, and run the <PlaybookLink href="/playbooks/er-earnings-preview">Earnings Preview</PlaybookLink> Skill ahead of its next report. If the preview is better than the one you&apos;d have written by hand, add the <PlaybookLink href="/playbooks/er-thesis-tracker">Thesis Tracker</PlaybookLink> next. Add the screening and sentiment layers once the core of the stack is earning its keep.
      </p>
    </BlogPostLayout>
  );
}
