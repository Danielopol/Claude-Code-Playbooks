import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'AI Portfolio Monitoring: From Holdings File to Weekly Brief | Claude Code Playbooks Blog',
  description: "Turn a holdings file into a weekly exceptions brief with Claude Code. One workflow for two readers: investors tracking stocks against a thesis, and PE teams tracking portfolio companies against budget and covenants, with tested flagging code.",
  alternates: { canonical: '/blog/ai-portfolio-monitoring-weekly-brief' },
  openGraph: {
    title: 'AI Portfolio Monitoring: From Holdings File to Weekly Brief',
    description: "Turn a holdings file into a weekly exceptions brief with Claude Code. One workflow for two readers: investors tracking stocks against a thesis, and PE teams tracking portfolio companies against budget and covenants, with tested flagging code.",
    url: 'https://www.claudecodehq.com/blog/ai-portfolio-monitoring-weekly-brief',
    type: 'article',
    publishedTime: '2026-10-27T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Portfolio Monitoring: From Holdings File to Weekly Brief',
    description: "Turn a holdings file into a weekly exceptions brief with Claude Code. One workflow for two readers: investors tracking stocks against a thesis, and PE teams tracking portfolio companies against budget and covenants, with tested flagging code.",
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

const H2 = 'text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2';
const H3 = 'text-xl font-semibold text-foreground mt-8 mb-3';
const TH = 'text-left p-3 border-b border-[#30363d] text-foreground';
const TD = 'p-3 border-b border-[#30363d] align-top';

export default function AiPortfolioMonitoringWeeklyBriefPage() {
  return (
    <BlogPostLayout
      title="AI Portfolio Monitoring: From Holdings File to Weekly Brief"
      description="Turn a holdings file into a weekly exceptions brief with Claude Code. One workflow for two readers: investors tracking stocks against a thesis, and PE teams tracking portfolio companies against budget and covenants, with tested flagging code."
      category="tutorial"
      difficulty="intermediate"
      readingTime="12 min read"
      createdAt="2026-10-27"
      tags={['ai portfolio monitoring', 'automated portfolio report', 'ai investment tracking', 'weekly portfolio brief', 'pe portfolio monitoring', 'holdings tracker claude', 'claude code finance']}
      author="Claude Code Playbooks"
      slug="ai-portfolio-monitoring-weekly-brief"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        Monitoring a portfolio is one job whatever the portfolio holds. You compare what is happening with what you expected, and you look at the differences. A retail investor with twelve stocks does it against a thesis. A PE associate with eight portfolio companies does it against a budget and a credit agreement. The inputs differ, but the structure is the same, and so is the failure mode: reading everything every week, noticing nothing, and finding out about the problem late.
      </p>
      <p>
        This workflow turns a holdings file into a one-page weekly brief that contains <em>exceptions only</em>. It has three parts: a file of what you own, a file of what you expected, and a scheduled Claude Code run that compares them with what happened. The two tracks below share the structure and differ in the files.
      </p>

      <h2 className={H2}>The Pattern: Three Files and a Rule</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}></th>
              <th className={TH}>Investor track</th>
              <th className={TH}>PE track</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr><td className={TD}><strong className="text-foreground">What you own</strong></td><td className={TD}><Code>holdings.csv</Code>: ticker, shares, cost basis</td><td className={TD}>List of portfolio companies, ownership, deal date</td></tr>
            <tr><td className={TD}><strong className="text-foreground">What you expected</strong></td><td className={TD}>Thesis in one line per holding, with a review trigger</td><td className={TD}>Budget, KPI targets, covenant terms</td></tr>
            <tr><td className={TD}><strong className="text-foreground">What happened</strong></td><td className={TD}>Prices, filings, earnings, news</td><td className={TD}>Monthly financial package from each company</td></tr>
            <tr><td className={TD}><strong className="text-foreground">Output</strong></td><td className={TD}>Holdings needing a decision this week</td><td className={TD}>Companies off plan, with questions for management</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The rule that makes it work: <strong className="text-foreground">thresholds live in a file, flags come from code, and Claude explains.</strong> If a holding is flagged because it fell 12% on no news, that is arithmetic against a number you set. Claude&apos;s job is to find out why, and to say plainly when it can&apos;t.
      </p>

      <h2 className={H2}>Investor Track: Holdings to Brief</h2>
      <h3 className={H3}>The files</h3>
      <CodeBlock>{`ticker,shares,cost_basis,thesis,review_if
MSFT,40,310.00,"Cloud growth holds above 20%","Azure growth below 18% or capex guide cut"
KO,120,58.50,"Steady dividend compounder","Payout ratio above 80% or volume decline 2 qtrs"`}</CodeBlock>
      <p>
        The <Code>review_if</Code> column is the important one. It turns &quot;watch this&quot; into a condition you can test. Write it when you buy, while you&apos;re calm, and Claude will hold you to it when you aren&apos;t.
      </p>
      <h3 className={H3}>The data</h3>
      <p>
        Prices, filings and earnings can come from a data API. Our walkthroughs on the{' '}
        <PlaybookLink href="/blog/fmp-api-dcf-claude-code">FMP API</PlaybookLink> and the{' '}
        <PlaybookLink href="/blog/fiscal-ai-mcp-earnings-note">Fiscal.ai MCP server</PlaybookLink> cover the connection, and the{' '}
        <PlaybookLink href="/blog/best-financial-data-apis-ai-workflows">API comparison</PlaybookLink> helps you choose. If you would rather not wire an API, a portfolio tool does part of this for you. <AffiliateLink partner="stock-rover">Stock Rover</AffiliateLink> tracks portfolios with performance analytics, dividend income projections and alerts, and you can export what you need within your plan&apos;s monthly export allowance. <AffiliateLink partner="koyfin">Koyfin</AffiliateLink> is a good screen for watching a list of names and their charts, though its fundamentals can&apos;t be downloaded for Claude to read. Our{' '}
        <PlaybookLink href="/blog/stock-rover-vs-koyfin-vs-seeking-alpha">Stock Rover vs Koyfin vs Seeking Alpha</PlaybookLink> comparison covers which fits which job.
      </p>
      <h3 className={H3}>The weekly prompt</h3>
      <Prompt>
        Write this week&apos;s portfolio brief from holdings.csv. For each holding, check what changed since last Friday: price move, filings, earnings or guidance changes, and news. Flag a holding only if (a) it moved more than 8% in the week, (b) its review_if condition may have been triggered, or (c) there is an event in the next 10 days. For every flag, say what the source shows and what you could not verify. Show portfolio concentration by position and sector. If nothing needs attention for a holding, don&apos;t mention it. Use the Stock Analysis playbook for any holding that triggered review_if.
      </Prompt>
      <p>
        For the deeper dive on a flagged holding, the{' '}
        <PlaybookLink href="/playbooks/stock-analysis">Stock Analysis</PlaybookLink>{' '}
        playbook covers fundamentals, technicals, competitive position and a bull and bear summary. If you want to look at the whole household instead of only the stocks, the{' '}
        <PlaybookLink href="/playbooks/multi-agent-financial-planner">Multi-Agent Financial Planner</PlaybookLink>{' '}
        brings budget, retirement, investment and tax perspectives together. Both are analysis aids, not advice. The decisions stay with you.
      </p>

      <h2 className={H2}>PE Track: Portfolio Companies to Brief</h2>
      <p>
        The monthly package from each portfolio company is the input, and the budget and credit agreement are the yardsticks. The{' '}
        <PlaybookLink href="/playbooks/pe-portfolio-monitoring">Portfolio Company Monitoring Dashboard</PlaybookLink>{' '}
        playbook defines the output: an executive summary with green, yellow and red KPI flags, an actual-versus-budget variance table, covenant compliance status, trend charts and questions for management.
      </p>
      <p>
        Flagging is arithmetic, so do it in code. Here are the two functions that carry most of the weight, tested on sample numbers:
      </p>
      <CodeBlock>{`def rag(actual, budget, amber=0.05, red=0.10, higher_is_better=True):
    """Green/amber/red from percentage variance to budget."""
    if budget == 0:
        return "n/a"
    var = (actual - budget) / abs(budget)
    if not higher_is_better:
        var = -var
    if var >= -amber:
        return "green"
    if var >= -red:
        return "amber"
    return "red"


def leverage_headroom(net_debt, ltm_ebitda, max_leverage):
    """Return (leverage, EBITDA cushion before the covenant trips, as a fraction)."""
    if ltm_ebitda <= 0:
        return None, None
    min_ebitda = net_debt / max_leverage
    return net_debt / ltm_ebitda, (ltm_ebitda - min_ebitda) / ltm_ebitda`}</CodeBlock>
      <p>
        Revenue of 9.2 against a budget of 10 returns amber, and 8.5 returns red. A cost line of 11 against 10 returns amber because the sign flips when higher is not better. With net debt of 60, LTM EBITDA of 20 and a 4.0x covenant, leverage is 3.0x and EBITDA can fall by 25% before the covenant trips. That cushion is the number a deal team wants on page one. A non-positive EBITDA returns <Code>None</Code>, which the brief should treat as a covenant conversation, not a calculation.
      </p>
      <Prompt>
        Read this month&apos;s packages in packages/ and budget.xlsx. Run the variance and covenant calculations with the functions in monitor.py. Write the portfolio brief: one line per company with its overall flag, then for each amber or red company the variance table, the likely drivers from the package commentary, covenant headroom, and five questions for the next management call. Mark any figure you couldn&apos;t tie to the package.
      </Prompt>
      <p>
        When a company is off plan and the question becomes what to do about it, the{' '}
        <PlaybookLink href="/playbooks/pe-value-creation-plan">Value Creation Plan</PlaybookLink>{' '}
        playbook builds the lever analysis and the 100-day plan, and the{' '}
        <PlaybookLink href="/playbooks/pe-ai-readiness">Portfolio AI Readiness Assessment</PlaybookLink>{' '}
        scans the portfolio for where automation could move EBITDA.
      </p>

      <h2 className={H2}>Rules That Keep the Brief Honest</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">Exceptions only.</strong> A brief that lists every position is a report nobody reads. Silence should mean &quot;nothing needs you&quot;.</li>
        <li><strong className="text-foreground">Every figure carries a source and a date.</strong> A stale price next to a fresh filing is the classic way a brief misleads.</li>
        <li><strong className="text-foreground">&quot;Could not verify&quot; is a result.</strong> End the brief with what Claude couldn&apos;t check.</li>
        <li><strong className="text-foreground">No recommendation language.</strong> The brief says what changed and which condition tripped. It does not say buy or sell.</li>
        <li><strong className="text-foreground">Thresholds change on purpose.</strong> If you loosen a threshold because a flag annoyed you, write down why.</li>
      </ul>

      <h2 className={H2}>Schedule It</h2>
      <p>
        A weekly Friday run is a fit for a Desktop scheduled task or a cron job calling <Code>claude -p</Code>, with the same trade-offs we cover in the{' '}
        <PlaybookLink href="/blog/automate-morning-market-note-claude-code">morning market note</PlaybookLink> walkthrough: the computer must be awake, the run should have a budget cap, and you check that the file exists. PE teams should also check what their fund documents allow before portfolio company financials go into any AI tool.
      </p>
      <p className="text-sm text-muted-foreground">
        This article is for education and isn&apos;t investment advice. Plan features and limits come from vendor documentation as of October 2026 and change. Confirm them, and any restrictions on how portfolio data may be used, before you rely on them.
      </p>
    </BlogPostLayout>
  );
}
