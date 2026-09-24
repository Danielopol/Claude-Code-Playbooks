import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Koyfin + Claude: A PE Deal Screening Workflow That Runs Itself | Claude Code Playbooks Blog',
  description: "Screen 100K+ public companies in Koyfin, export the list, and let Claude Code enrich, score, and rank every name against your fund criteria — then carry the winners through outreach and an IC memo.",
  alternates: { canonical: '/blog/koyfin-claude-pe-deal-screening' },
  openGraph: {
    title: 'Koyfin + Claude: A PE Deal Screening Workflow That Runs Itself',
    description: "Screen 100K+ public companies in Koyfin, export the list, and let Claude Code enrich, score, and rank every name against your fund criteria — then carry the winners through outreach and an IC memo.",
    url: 'https://www.claudecodehq.com/blog/koyfin-claude-pe-deal-screening',
    type: 'article',
    publishedTime: '2026-09-24T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koyfin + Claude: A PE Deal Screening Workflow That Runs Itself',
    description: "Screen 100K+ public companies in Koyfin, export the list, and let Claude Code enrich, score, and rank every name against your fund criteria — then carry the winners through outreach and an IC memo.",
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

function Code({ children }: { children: React.ReactNode }) {
  return <code className="text-sm bg-[#0d1117] px-1.5 py-0.5 rounded text-[#f97316]">{children}</code>;
}

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4 overflow-x-auto">
      <pre className="text-sm font-mono text-[#f97316] mb-0 whitespace-pre">{children}</pre>
    </div>
  );
}

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
      <p className="text-sm font-mono text-[#f97316] mb-0">{children}</p>
    </div>
  );
}

export default function KoyfinClaudePeDealScreeningPage() {
  return (
    <BlogPostLayout
      title="Koyfin + Claude: A PE Deal Screening Workflow That Runs Itself"
      description="Screen 100K+ public companies in Koyfin, export the list, and let Claude Code enrich, score, and rank every name against your fund criteria — then carry the winners through outreach and an IC memo."
      category="tutorial"
      difficulty="intermediate"
      readingTime="12 min read"
      createdAt="2026-09-24"
      tags={['koyfin screener workflow', 'ai deal screening', 'private equity ai tools', 'koyfin claude', 'take-private screening', 'pe deal sourcing ai', 'ic memo ai']}
      author="Claude Code Playbooks"
      slug="koyfin-claude-pe-deal-screening"
    >
      <p>
        Screening public companies as take-private candidates usually goes like this: build a screen, eyeball forty results, copy the promising ones into a spreadsheet, pull financials for each by hand, score them against the fund&apos;s criteria in your head, and write up the three that survive. The screen takes ten minutes. Everything after it takes the rest of the week.
      </p>
      <p>
        This workflow splits the job cleanly. Koyfin does the part it&apos;s built for: filtering 100,000+ global securities against thousands of criteria. Claude Code takes everything after the export, from enriching each name with financials to scoring it against your written criteria, ranking the list, and carrying the winners through outreach and an IC memo using four private equity Skills. You click once in Koyfin and write one prompt in Claude Code.
      </p>
      <p>
        One scope note up front: Koyfin covers public markets. That makes this workflow a fit for take-private screening and for building public comps to benchmark private targets. It won&apos;t surface founder-owned private companies. That part of sourcing still runs through your network, brokers, and databases built for private-company coverage.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Export Restriction Most Tutorials Miss
      </h2>
      <p>
        Koyfin&apos;s screener scans more than 100,000 global securities with 5,900+ filter criteria, fundamentals included, and you can export any screen&apos;s results to CSV. The screener is on the Plus plan ($39/month) and up; the free plan doesn&apos;t include it.
      </p>
      <p>
        What most &quot;Koyfin to AI&quot; tutorials miss: Koyfin licenses its fundamental data from Capital IQ, and that license doesn&apos;t allow redistribution. Koyfin&apos;s own help center says financials, estimates, and valuation data for global equities are restricted from download. Your CSV will contain tickers, names, sectors, price, performance, and technicals. It won&apos;t contain the EV/EBITDA, margins, or growth rates you screened on.
      </p>
      <p>
        That sounds fatal until you notice what the export still gives you. The filter is applied before export, so every row in that CSV already cleared your fundamental criteria. The ticker list is the valuable output. Claude doesn&apos;t need Koyfin&apos;s numbers to know which companies passed. It only needs fundamentals to rank and score them, and it can collect those itself from a source that allows it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">What the CSV has</p>
          <p className="text-sm text-muted-foreground">Tickers and names that cleared every filter you set, plus sector, industry, price, performance, and technical columns</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">What Claude adds</p>
          <p className="text-sm text-muted-foreground">Financials, leverage, and margins for each ticker, collected with a sourced tool, plus scoring against your criteria and a ranked shortlist</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Set Up the Project Folder
      </h2>
      <p>
        Everything lives in one folder that Claude Code works from. Download the{' '}
        <PlaybookLink href="/playbooks/pe-deal-screening">Deal Screening Memo</PlaybookLink> template as the base of your <Code>CLAUDE.md</Code>, then add your fund&apos;s criteria underneath it. Claude reads both on every run.
      </p>
      <CodeBlock>{`deal-screen/
├── CLAUDE.md              ← Deal Screening template + your fund criteria
├── exports/
│   └── koyfin-2026-09-24.csv
└── output/                ← Claude writes enriched data, scores, and memos here`}</CodeBlock>
      <p>
        Write the criteria as plain rules, the same way you&apos;d brief a new associate. Specific numbers beat adjectives: &quot;strong margins&quot; gets applied loosely, while &quot;EBITDA margin ≥ 15%&quot; gets applied the same way every time.
      </p>
      <CodeBlock>{`## Fund criteria — take-private screen
- Enterprise value: $300M – $2B
- EBITDA margin: ≥ 15%, stable or expanding over 3 years
- Revenue growth: 3–15% CAGR over 3 years
- Net debt / EBITDA: ≤ 3.0x
- Sectors: industrial services, B2B software, healthcare services
- Hard pass: any single customer > 40% of revenue
- Missing data: never a Pass — mark "Further Diligence" and list what's missing`}</CodeBlock>
      <p>
        The last rule matters most. Enrichment from free sources will sometimes come back with gaps, and a scoring system that quietly treats a missing field as a passing one will promote the wrong companies.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Step 1: Build the Screen and Export It
      </h2>
      <p>
        In Koyfin, create a screen that mirrors your criteria as closely as its filters allow: region, sector and industry, market cap as a proxy for enterprise value, and valuation, margin, and leverage ranges. The screener applies these filters even though those columns won&apos;t survive the export. Run it, check that the result count is manageable (roughly 20–80 names works well), then use Export → CSV and save the file into <Code>exports/</Code>.
      </p>
      <p>
        If you&apos;re enriching with free data in the next step, set the region to the United States. The free collector covers US-listed companies, so a global screen would leave most of your list unenriched.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Step 2: Enrich Each Ticker With Real Financials
      </h2>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/financial-data-collector">Financial Data Collector</PlaybookLink>{' '}
        Skill pulls free data from yfinance for US public companies: historical income statement, balance sheet, and cash flow, plus market data and estimates. Claude runs it once per ticker, and each company gets its own JSON file. The Skill has one rule that makes it suited to screening: it never fills a gap with a default. A field it can&apos;t retrieve comes back as <Code>null</Code> with its source marked <Code>&quot;missing&quot;</Code>, which is exactly what your &quot;missing data is never a Pass&quot; criterion needs to catch.
      </p>
      <p>
        If you already have an institutional data connection, that&apos;s the stronger enrichment layer. Our{' '}
        <Link href="/blog/fiscal-ai-mcp-earnings-note" className="text-[#22d3ee] hover:underline font-medium">Fiscal.ai MCP walkthrough</Link>{' '}
        shows how to connect Claude Code to standardized financials, ownership data, and transcripts directly. Swap it in here, and the rest of the workflow stays the same.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Step 3: Score, Rank, and Memo in One Prompt
      </h2>
      <p>
        This is the step that used to take the rest of the week. One prompt covers enrichment and scoring:
      </p>
      <Prompt>
        &quot;Read exports/koyfin-2026-09-24.csv. For each ticker, collect financials with the financial data collector. Score every company against the fund criteria in CLAUDE.md, write a ranked screening table to output/, and write a one-page screening memo for each company rated Pass or Further Diligence.&quot;
      </Prompt>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/pe-deal-screening">Deal Screening Memo</PlaybookLink>{' '}
        Skill was built to screen inbound CIMs one at a time. Here it runs once per company, and its structure fits public take-private candidates just as well: extracted deal facts, a pass/fail table against each criterion, a bull and bear case, a verdict (Pass, Further Diligence, or Hard Pass), and the questions worth asking on a first call.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Forty screen results, a spreadsheet filled by hand, financials pulled one company at a time, and criteria applied from memory, so the shortlist depends on who did the screening and how tired they were</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Every name enriched with sourced financials and scored against the same written criteria, a ranked table with each company&apos;s verdict, and a one-page memo for everything worth a second look</p>
        </div>
      </div>

      <p>
        Read the Further Diligence memos before the Pass ones. Most of them are data gaps rather than bad businesses, and a two-minute look at the source filing often settles the verdict either way.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Step 4: Check Relationships and Draft Outreach
      </h2>
      <p>
        A shortlist only matters once somebody makes contact. The{' '}
        <PlaybookLink href="/playbooks/pe-deal-sourcing">PE Deal Sourcing Pipeline</PlaybookLink>{' '}
        Skill handles the next two steps. First it checks your email and internal communications for existing relationships with each shortlisted company&apos;s management, so a partner who already knows the CEO doesn&apos;t get scooped by a cold email from an associate. Then it drafts personalized outreach for the names with no prior contact.
      </p>
      <Prompt>
        &quot;For the companies rated Pass in output/, check our email and CRM notes for any prior contact with their CEO or CFO, and draft outreach for the ones we haven&apos;t spoken to.&quot;
      </Prompt>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Step 5: From Engaged Target to IC Memo
      </h2>
      <p>
        Public data only goes so far. Once a target engages and opens a data room, you get customer-level information that no screener or public filing contains. For recurring-revenue businesses, the{' '}
        <PlaybookLink href="/playbooks/pe-unit-economics">Unit Economics &amp; Revenue Quality Analysis</PlaybookLink>{' '}
        Skill takes that data and builds ARR bridges, cohort retention matrices, LTV/CAC by segment, and net retention. This is how you find the business whose headline growth hides a leaky customer base.
      </p>
      <p>
        Everything then feeds the{' '}
        <PlaybookLink href="/playbooks/pe-ic-memo">Investment Committee Memo</PlaybookLink>{' '}
        Skill: the original screening memo, the unit economics work, and whatever diligence material the deal team has gathered. The result is a structured memo with executive summary, company overview, financial analysis, investment thesis, deal terms, returns, and risks, ending in a clear recommendation.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        What &quot;Runs Itself&quot; Actually Means
      </h2>
      <p>
        One step stays manual: the export is a button click in Koyfin. Everything downstream is a single prompt against a folder whose criteria you wrote once. Koyfin screens refresh when you reload them, so a weekly routine takes about five minutes of your time. Reload the screen, export the CSV into <Code>exports/</Code>, and run the same prompt with one line added: &quot;flag every company that wasn&apos;t in last week&apos;s ranked table.&quot; Companies that newly cleared your filters then stand out immediately.
      </p>
      <p>
        The judgment still belongs to the deal team: which names deserve a call, what the thesis is, and whether the IC recommendation holds. What&apos;s gone is the copy-paste, which used to eat most of the week and made the shortlist depend on who happened to do the screening.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Full Stack
      </h2>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Screening</span>: Koyfin&apos;s screener (Plus plan and up) filters the universe; export gives you the ticker list</li>
        <li><span className="text-foreground font-medium">Enrichment</span>: <PlaybookLink href="/playbooks/financial-data-collector">Financial Data Collector</PlaybookLink> for free US data, or the <Link href="/blog/fiscal-ai-mcp-earnings-note" className="text-[#22d3ee] hover:underline font-medium">Fiscal.ai MCP connection</Link> for institutional data</li>
        <li><span className="text-foreground font-medium">Scoring</span>: <PlaybookLink href="/playbooks/pe-deal-screening">Deal Screening Memo</PlaybookLink>, run per company against your written criteria</li>
        <li><span className="text-foreground font-medium">Outreach</span>: <PlaybookLink href="/playbooks/pe-deal-sourcing">PE Deal Sourcing Pipeline</PlaybookLink> for relationship checks and first contact</li>
        <li><span className="text-foreground font-medium">Diligence and approval</span>: <PlaybookLink href="/playbooks/pe-unit-economics">Unit Economics</PlaybookLink> once you have data-room access, then <PlaybookLink href="/playbooks/pe-ic-memo">IC Memo</PlaybookLink></li>
      </ul>
      <p className="text-sm text-muted-foreground">
        Koyfin&apos;s screener, plans, and export details are documented at{' '}
        <a href="https://www.koyfin.com" target="_blank" rel="noopener noreferrer" className="text-[#22d3ee] hover:underline">koyfin.com</a>.
      </p>
    </BlogPostLayout>
  );
}
