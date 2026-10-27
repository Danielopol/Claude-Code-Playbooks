import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'The Best Financial Data APIs for AI Workflows, Compared | Claude Code Playbooks Blog',
  description: "Financial Modeling Prep, Fiscal.ai, Alpha Vantage, Finnhub, Polygon/Massive, EODHD and SEC EDGAR compared on what matters when Claude is making the calls: rate-limit shape, standardized fundamentals, MCP access and licensing. Plus a test to run before you commit.",
  alternates: { canonical: '/blog/best-financial-data-apis-ai-workflows' },
  openGraph: {
    title: 'The Best Financial Data APIs for AI Workflows, Compared',
    description: "Financial Modeling Prep, Fiscal.ai, Alpha Vantage, Finnhub, Polygon/Massive, EODHD and SEC EDGAR compared on what matters when Claude is making the calls: rate-limit shape, standardized fundamentals, MCP access and licensing. Plus a test to run before you commit.",
    url: 'https://www.claudecodehq.com/blog/best-financial-data-apis-ai-workflows',
    type: 'article',
    publishedTime: '2026-10-27T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Best Financial Data APIs for AI Workflows, Compared',
    description: "Financial Modeling Prep, Fiscal.ai, Alpha Vantage, Finnhub, Polygon/Massive, EODHD and SEC EDGAR compared on what matters when Claude is making the calls: rate-limit shape, standardized fundamentals, MCP access and licensing. Plus a test to run before you commit.",
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
const TH = 'text-left p-3 border-b border-[#30363d] text-foreground';
const TD = 'p-3 border-b border-[#30363d] align-top';

export default function BestFinancialDataApisAiWorkflowsPage() {
  return (
    <BlogPostLayout
      title="The Best Financial Data APIs for AI Workflows, Compared"
      description="Financial Modeling Prep, Fiscal.ai, Alpha Vantage, Finnhub, Polygon/Massive, EODHD and SEC EDGAR compared on what matters when Claude is making the calls: rate-limit shape, standardized fundamentals, MCP access and licensing. Plus a test to run before you commit."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-10-27"
      tags={['best financial data api', 'financial api comparison', 'stock market api for ai', 'fmp api vs alpha vantage', 'financial data mcp', 'stock fundamentals api', 'claude code finance']}
      author="Claude Code Playbooks"
      slug="best-financial-data-apis-ai-workflows"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        Most &quot;best financial data API&quot; lists are written for someone building an app. If Claude Code is the one making the calls, the criteria change. An agent loops, retries and fetches ten companies when you asked for one. It will find the edges of a rate limit faster than you would, and it will quietly trust whatever field name looks right. So the useful questions are different: how does the limit work, how standardized are the fundamentals, can the data arrive over MCP, and does the licence allow what you are doing?
      </p>
      <p>
        We compare the main options on those terms. One note on method: we have built working workflows on <AffiliateLink partner="fmp">Financial Modeling Prep</AffiliateLink> and <AffiliateLink partner="fiscal-ai">Fiscal.ai</AffiliateLink> for this site. For the others, we are relying on published documentation and third-party summaries, and prices and limits change often. That is why the post ends with a test you can run yourself instead of a verdict.
      </p>

      <h2 className={H2}>What Matters When an Agent Is Calling</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">Rate-limit shape.</strong> A daily cap (say 250 calls a day) rewards caching and punishes exploration. A per-minute cap lets you spend freely but stalls bursts. Know which one you have before you hand Claude a watchlist.</li>
        <li><strong className="text-foreground">Standardized fundamentals.</strong> As-reported statements differ across companies. A provider that standardizes them saves you the work, and you are trusting their standardization.</li>
        <li><strong className="text-foreground">MCP or plain REST.</strong> An MCP server lets Claude discover and call tools directly. REST is more work to set up and easier to cache and audit.</li>
        <li><strong className="text-foreground">Licence.</strong> Free tiers are often personal and non-commercial. Redistribution, client work and published output can trigger a different plan.</li>
        <li><strong className="text-foreground">Coverage and history.</strong> Exchanges, years of history and quarterly versus annual data vary by plan, and are the things most likely to block you after you have started.</li>
      </ul>

      <h2 className={H2}>The Comparison</h2>
      <p>
        Figures below come from provider pages and third-party summaries as of October 2026. Treat them as orientation and confirm on each provider&apos;s pricing page.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}>Provider</th>
              <th className={TH}>Best for</th>
              <th className={TH}>Free tier</th>
              <th className={TH}>Paid from (approx.)</th>
              <th className={TH}>The catch</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className={TD}><strong className="text-foreground">FMP</strong></td>
              <td className={TD}>Statements, ratios and DCF data behind one key</td>
              <td className={TD}>250 calls/day, no card</td>
              <td className={TD}>$22/mo (billed annually)</td>
              <td className={TD}>History and coverage depend on plan. Key travels in the URL.</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">Fiscal.ai</strong></td>
              <td className={TD}>Standardized financials and transcripts over hosted MCP</td>
              <td className={TD}>Free plan with limited coverage and calls; trial available</td>
              <td className={TD}>Paid plans; confirm what API and MCP access each includes</td>
              <td className={TD}>Free coverage is large caps. Check your universe.</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">Alpha Vantage</strong></td>
              <td className={TD}>Prices, technicals and macro series</td>
              <td className={TD}>25 requests/day, 5/min</td>
              <td className={TD}>About $50/mo for 75/min</td>
              <td className={TD}>Free daily cap is tight for any loop. Real-time US data needs an entitlement.</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">Finnhub</strong></td>
              <td className={TD}>Quotes, news and basic fundamentals</td>
              <td className={TD}>Reported near 60 calls/min, personal use</td>
              <td className={TD}>Fundamentals about $50/mo per market</td>
              <td className={TD}>Free key is non-commercial. Free-tier limits vary by source.</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">Polygon.io (now Massive)</strong></td>
              <td className={TD}>Market data: prices, trades, options</td>
              <td className={TD}>5 calls/min, end-of-day, about 2 years</td>
              <td className={TD}>About $29/mo</td>
              <td className={TD}>Fundamentals are not the focus. Financials sit on the top tier.</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">EODHD</strong></td>
              <td className={TD}>Global end-of-day prices and fundamentals</td>
              <td className={TD}>20 calls/day, end-of-day only</td>
              <td className={TD}>Fundamentals about $60/mo</td>
              <td className={TD}>Free tier has no fundamentals. Sources quote the fundamentals price in different currencies.</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">SEC EDGAR</strong></td>
              <td className={TD}>As-reported US filings</td>
              <td className={TD}>Free, no key, about 10 requests/sec</td>
              <td className={TD}>Free</td>
              <td className={TD}>No prices or EV, and tags vary between companies. You standardize.</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">yfinance</strong></td>
              <td className={TD}>Prototyping</td>
              <td className={TD}>Free</td>
              <td className={TD}>Not applicable</td>
              <td className={TD}>Unofficial and can break. Fine to learn on, risky to rely on.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Two notes on this table. A few providers are reported to offer MCP servers (Alpha Vantage and FMP among them), but we haven&apos;t confirmed the endpoints or terms for those, so check their documentation. Fiscal.ai&apos;s hosted MCP is the one we have used directly. And <AffiliateLink partner="koyfin">Koyfin</AffiliateLink> isn&apos;t in the table because it isn&apos;t an API: it is an analysis platform, and its fundamentals can&apos;t be exported, which is the reason it plays a screening role in our workflows and not a data-feed role.
      </p>

      <h2 className={H2}>Which One for Which Job</h2>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Fundamentals-driven models: DCF, comps, screening</p>
          <p className="text-sm text-muted-foreground mb-0">FMP is the default we reach for, since statements, ratios and a DCF cross-check sit behind one key and a free tier lets you build before paying. See the <PlaybookLink href="/blog/fmp-api-dcf-claude-code">DCF walkthrough</PlaybookLink> and the <PlaybookLink href="/blog/ai-comps-analysis-data-sources">comps workflow</PlaybookLink>. The <PlaybookLink href="/playbooks/fa-dcf-model">DCF Model Builder</PlaybookLink> playbook then turns the data into a workbook.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Research notes that need transcripts and standardized financials together</p>
          <p className="text-sm text-muted-foreground mb-0">Fiscal.ai over MCP, because the transcript and the matching statements arrive in the same session. It is the setup in our <PlaybookLink href="/blog/fiscal-ai-mcp-earnings-note">earnings note</PlaybookLink> and <PlaybookLink href="/blog/earnings-season-playbook-ai">earnings season</PlaybookLink> posts.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Price history, technicals, intraday</p>
          <p className="text-sm text-muted-foreground mb-0">A market-data specialist such as Polygon/Massive, or Alpha Vantage for lighter needs. These aren&apos;t where you build a valuation.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Verifying anyone else&apos;s numbers</p>
          <p className="text-sm text-muted-foreground mb-0">SEC EDGAR. It is free, it is the source, and a spot-check against it is how you find out whether a vendor&apos;s standardization is right for your company.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Learning and throwaway analysis</p>
          <p className="text-sm text-muted-foreground mb-0">The <PlaybookLink href="/playbooks/financial-data-collector">Financial Data Collector</PlaybookLink> playbook uses yfinance and tags every field with its source or marks it missing. It is a good free starting point, with the reliability caveat above.</p>
        </div>
      </div>

      <h2 className={H2}>The Test to Run Before You Commit</h2>
      <p>
        Pick five companies you know well, including one awkward one (a recent IPO, a foreign filer or a company with a restatement). Pull the same four figures for the same period from your candidate APIs and from the filings: revenue, operating income, total debt and cash. Then compare them. This function does the comparison:
      </p>
      <CodeBlock>{`from statistics import median


def spread(values, tol=0.01):
    """values: {source: number}. Flags disagreement beyond tol
    (a fraction of the median)."""
    nums = {k: v for k, v in values.items() if v is not None}
    if len(nums) < 2:
        return {"status": "single-source", "sources": sorted(nums)}
    m = median(nums.values())
    worst = max(abs(v - m) / abs(m) for v in nums.values()) if m else None
    return {"status": "ok" if worst is not None and worst <= tol else "disagree",
            "median": m,
            "worst": round(worst, 4) if worst is not None else None}`}</CodeBlock>
      <p>
        On sample numbers, three sources within 0.4% of each other come back <Code>ok</Code>; a source 8% off the median comes back <Code>disagree</Code>, and a single source is reported as single-source and not as agreement. Real disagreements usually trace to definitions (does debt include leases?), to period or restatement differences, or to a currency mismatch, and each is worth knowing about before you build on that provider.
      </p>
      <Prompt>
        For AAPL, NKE, and [three more tickers], fetch revenue, operating income, total debt and cash for the last fiscal year from each API I have a key for and from the SEC filings. Run spread() on each field. For every disagreement over 1%, tell me which source differs and the most likely reason. Don&apos;t reconcile by choosing a number; list what you found.
      </Prompt>
      <p>
        Also test the failure behavior. Ask for a ticker the provider doesn&apos;t cover, and deliberately exceed the rate limit once. You want a clear error and a Claude that stops, not a silent empty result and a model built on nothing. The caching helper in our DCF post exists for exactly this reason.
      </p>

      <h2 className={H2}>Putting the Data on a Dashboard Safely</h2>
      <p>
        If the end product is a dashboard, the{' '}
        <PlaybookLink href="/playbooks/interactive-dashboard-builder">Interactive Dashboard Builder</PlaybookLink>{' '}
        produces a self-contained HTML file with charts and filters that opens in any browser. One rule applies to API-backed dashboards: fetch the data in a script and embed only the results. Never put an API key in the HTML. Those files get emailed and uploaded, and a key in the source is a key you have published. Tell Claude so, and check the file before you share it.
      </p>

      <h2 className={H2}>The Short Version</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Choose on rate-limit shape, standardization, MCP access and licence, not on the longest endpoint list.</li>
        <li>Use FMP or Fiscal.ai for fundamentals-driven work, a market-data specialist for prices, and SEC EDGAR to check anyone&apos;s numbers.</li>
        <li>Run the five-company test and compare to the filings before you build on a provider.</li>
        <li>Keep keys out of URLs you log and out of any HTML you share.</li>
      </ol>
      <p className="text-sm text-muted-foreground">
        This article is for education and isn&apos;t investment advice. Prices, limits and licence terms are from provider pages and third-party summaries as of October 2026, change often, and should be confirmed on each provider&apos;s site before you rely on them.
      </p>
    </BlogPostLayout>
  );
}
