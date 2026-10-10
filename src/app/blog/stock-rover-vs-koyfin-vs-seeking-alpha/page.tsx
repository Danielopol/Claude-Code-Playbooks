import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Stock Rover vs Koyfin vs Seeking Alpha for the Retail Investor | Claude Code Playbooks Blog',
  description: "Three stock research tools at three price points, compared on what they actually do: Stock Rover for screening and portfolios, Koyfin for market data and charts, Seeking Alpha for ideas and quant ratings. Which one to pay for, and how each works with Claude.",
  alternates: { canonical: '/blog/stock-rover-vs-koyfin-vs-seeking-alpha' },
  openGraph: {
    title: 'Stock Rover vs Koyfin vs Seeking Alpha for the Retail Investor',
    description: "Three stock research tools at three price points, compared on what they actually do: Stock Rover for screening and portfolios, Koyfin for market data and charts, Seeking Alpha for ideas and quant ratings. Which one to pay for, and how each works with Claude.",
    url: 'https://www.claudecodehq.com/blog/stock-rover-vs-koyfin-vs-seeking-alpha',
    type: 'article',
    publishedTime: '2026-10-10T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stock Rover vs Koyfin vs Seeking Alpha for the Retail Investor',
    description: "Three stock research tools at three price points, compared on what they actually do: Stock Rover for screening and portfolios, Koyfin for market data and charts, Seeking Alpha for ideas and quant ratings. Which one to pay for, and how each works with Claude.",
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

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
      <p className="text-sm font-mono text-[#f97316] mb-0">{children}</p>
    </div>
  );
}

function Verdict({ label, tone, children }: { label: string; tone: 'good' | 'warn'; children: React.ReactNode }) {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
      <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${tone === 'good' ? 'text-[#22c55e]' : 'text-[#f97316]'}`}>{label}</p>
      <p className="text-sm text-muted-foreground mb-0">{children}</p>
    </div>
  );
}

const H2 = 'text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2';
const TH = 'text-left p-3 border-b border-[#30363d] text-foreground';
const TD = 'p-3 border-b border-[#30363d] align-top';

export default function StockRoverVsKoyfinVsSeekingAlphaPage() {
  return (
    <BlogPostLayout
      title="Stock Rover vs Koyfin vs Seeking Alpha for the Retail Investor"
      description="Three stock research tools at three price points, compared on what they actually do: Stock Rover for screening and portfolios, Koyfin for market data and charts, Seeking Alpha for ideas and quant ratings. Which one to pay for, and how each works with Claude."
      category="guide"
      difficulty="basic"
      readingTime="12 min read"
      createdAt="2026-10-10"
      tags={['stock rover vs koyfin', 'seeking alpha alternative', 'best stock research tool 2026', 'stock rover review', 'koyfin vs seeking alpha', 'stock screener for retail investors', 'claude stock analysis']}
      author="Claude Code Playbooks"
      slug="stock-rover-vs-koyfin-vs-seeking-alpha"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        These three tools get compared constantly, usually as if they were substitutes. They aren&apos;t. They answer three different questions, and picking one that answers the wrong question is how people end up paying for a subscription they open twice.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-foreground"><AffiliateLink partner="stock-rover">Stock Rover</AffiliateLink></strong> answers: <em>which stocks fit my criteria, and how is my portfolio doing?</em> It&apos;s a screener and portfolio analyzer built around fundamentals.
        </li>
        <li>
          <strong className="text-foreground"><AffiliateLink partner="koyfin">Koyfin</AffiliateLink></strong> answers: <em>what is the market doing, and can I see the numbers?</em> It&apos;s a charting and market-data dashboard in the style of a terminal.
        </li>
        <li>
          <strong className="text-foreground"><AffiliateLink partner="seeking-alpha">Seeking Alpha</AffiliateLink></strong> answers: <em>what should I think about this stock?</em> It&apos;s a research and opinion platform with a quantitative rating system on top.
        </li>
      </ul>
      <p>
        This guide compares them on price, what you actually get, and where each one falls short. We also cover how each fits with Claude, since the real advantage of a research subscription in 2026 is what you can do with the output. Nothing here is investment advice, and none of these tools tells you what to buy.
      </p>

      <h2 className={H2}>The Short Version</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}></th>
              <th className={TH}>Stock Rover</th>
              <th className={TH}>Koyfin</th>
              <th className={TH}>Seeking Alpha</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className={TD}><strong className="text-foreground">Core job</strong></td>
              <td className={TD}>Fundamental screening and portfolio analytics</td>
              <td className={TD}>Charts, market data and macro dashboards</td>
              <td className={TD}>Ideas, articles and quant ratings</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">Price</strong></td>
              <td className={TD}>Free membership; paid from $348/yr (Premium)</td>
              <td className={TD}>Free plan; paid from $39/mo</td>
              <td className={TD}>Premium about $299/yr</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">Best for</strong></td>
              <td className={TD}>Long-term holders managing a portfolio</td>
              <td className={TD}>Investors who want one dashboard for markets</td>
              <td className={TD}>People who want arguments and a second opinion</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">Weak at</strong></td>
              <td className={TD}>Real-time data, and caps on the lower tiers</td>
              <td className={TD}>Downloading fundamentals</td>
              <td className={TD}>Raw data and exports</td>
            </tr>
            <tr>
              <td className={TD}><strong className="text-foreground">Free trial</strong></td>
              <td className={TD}>14 days, any plan</td>
              <td className={TD}>Free plan instead</td>
              <td className={TD}>Check the current offer</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={H2}>Stock Rover: The Screener for People With a Portfolio</h2>
      <p>
        Stock Rover covers more than 14,000 North American stocks, plus ETFs and mutual funds, with 400+ financial metrics on its entry paid tier and 700+ on Premium Plus. Its strengths are the unglamorous ones: ranked screening, side-by-side comparison, portfolio analytics, rebalancing and dividend income projections. It&apos;s the tool of someone who owns 15 stocks and wants to know which ones are slipping.
      </p>
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">What the tiers actually change</h3>
      <p>
        There is a free membership and a 14-day trial of any paid plan. The paid lineup on Stock Rover&apos;s site is Premium, Premium Plus, Ultimate and Ultimate Pro, listed at $348, $588, $948 and $1,788 per year, with a discount for two-year billing. Most retail investors will land on one of the first two, so the gap between them is the one that matters:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}>Limit</th>
              <th className={TH}>Premium</th>
              <th className={TH}>Premium Plus</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr><td className={TD}>Financial metrics</td><td className={TD}>400+</td><td className={TD}>700+</td></tr>
            <tr><td className={TD}>Historical fundamentals</td><td className={TD}>5 years</td><td className={TD}>10 years</td></tr>
            <tr><td className={TD}>Stock ratings</td><td className={TD}>10 per month (plus the Dow 30)</td><td className={TD}>Unlimited</td></tr>
            <tr><td className={TD}>Fair value and stock scores</td><td className={TD}>20 tickers per month (plus the Dow 30)</td><td className={TD}>Unlimited</td></tr>
            <tr><td className={TD}>Equations and historical-data screening</td><td className={TD}>Not included</td><td className={TD}>Included</td></tr>
            <tr><td className={TD}>Data exports per month</td><td className={TD}>10</td><td className={TD}>90</td></tr>
            <tr><td className={TD}>Portfolios / watchlists</td><td className={TD}>15 / 15</td><td className={TD}>25 / 30</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Two details are easy to miss. First, neither tier includes real-time quotes, so this is a research tool rather than a trading screen. Second, the Premium tier meters the features that are most distinctive, which are ratings and fair value, to a handful of lookups a month. If those are the reason you want Stock Rover, price in Premium Plus, or use the trial to find out whether the cap bites for you.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Verdict label="Worth it if" tone="good">
          You hold a portfolio of individual stocks, care about dividends and rebalancing, and want to screen on fundamentals going back 5 to 10 years.
        </Verdict>
        <Verdict label="Skip it if" tone="warn">
          You trade actively and need real-time quotes, or you mostly want market news and charts. The learning curve is real, and the free membership is thinner than the trial.
        </Verdict>
      </div>

      <h2 className={H2}>Koyfin: The Dashboard</h2>
      <p>
        <AffiliateLink partner="koyfin">Koyfin</AffiliateLink> is the closest thing to a terminal that an individual can buy. It covers 100,000+ securities globally, with deep charting, macro and economic data, and customizable watchlist dashboards. It has a free plan, and paid tiers start at $39 a month for Plus, which is where the screener appears, and $79 a month for Premium.
      </p>
      <p>
        There is one restriction to understand before paying for it as a research input. Koyfin licenses its fundamentals from S&amp;P Capital IQ, and financials, estimates and valuation data are restricted from download. You can chart and screen on them, but you can&apos;t export them to feed your own analysis. That&apos;s fine if you only want to look at the numbers, and a real limitation if your plan is to hand them to Claude. We cover the workaround in our{' '}
        <PlaybookLink href="/blog/koyfin-claude-pe-deal-screening">Koyfin screening workflow</PlaybookLink>, and the head-to-head with a data-first alternative is in{' '}
        <PlaybookLink href="/blog/koyfin-vs-fiscal-ai">Koyfin vs Fiscal.ai</PlaybookLink>.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Verdict label="Worth it if" tone="good">
          You want to see markets, macro and a global watchlist in one place, and the free plan already covers most of what you do.
        </Verdict>
        <Verdict label="Skip it if" tone="warn">
          You need fundamentals in a spreadsheet, or you want curated stock ideas. Koyfin shows you data and leaves the thinking to you.
        </Verdict>
      </div>

      <h2 className={H2}>Seeking Alpha: The Second Opinion</h2>
      <p>
        <AffiliateLink partner="seeking-alpha">Seeking Alpha</AffiliateLink> is the odd one out, because most of what it sells is other people&apos;s analysis. Premium lists at $299 a year, and Seeking Alpha&apos;s own promo pages show a separate Alpha Picks service at $499, which it describes as two stock picks a month. First-year discounts are common, but renewal happens at the then-current list price, so read the terms before you start.
      </p>
      <p>
        Two parts of it are useful for a self-directed investor:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-foreground">Quant Ratings.</strong> A proprietary score that grades stocks on value, growth, profitability, momentum and EPS revisions. The performance claims come largely from Seeking Alpha&apos;s own material, so treat them as marketing until you test them against your own watchlist.
        </li>
        <li>
          <strong className="text-foreground">Articles with a stated thesis.</strong> Many are written by independent contributors, who state their positions. Their quality varies a lot. Read them as arguments to check, not as facts.
        </li>
      </ul>
      <p>
        The main limit for Claude users is that it&apos;s a reading product. We haven&apos;t found a bulk export of its ratings or data, so the workflow is one stock at a time, which is how most people use it anyway.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Verdict label="Worth it if" tone="good">
          You want a structured bull case and bear case on stocks you&apos;re already considering, and you&apos;ll read them critically.
        </Verdict>
        <Verdict label="Skip it if" tone="warn">
          You want to screen the whole market or build a portfolio dashboard. It was not built for that.
        </Verdict>
      </div>

      <h2 className={H2}>How Each One Works With Claude</h2>
      <p>
        Whichever you pay for, Claude does the same job after it: take a shortlist and an argument, and pressure-test them against primary sources. Three small workflows cover most of it.
      </p>
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Stock Rover → shortlist → full analysis</h3>
      <p>
        Screen on your criteria, export the result within your monthly export allowance, and give Claude the file. Check which columns come through on the free trial before you rely on it. Then run each finalist through the{' '}
        <PlaybookLink href="/playbooks/stock-analysis">Stock Analysis</PlaybookLink> playbook, which covers financial statement analysis, technicals, competitive position and a bull/bear summary.
      </p>
      <Prompt>
        Here are 12 stocks from my Stock Rover screen: [paste or attach the export]. For each one, tell me what the screen can&apos;t see. Check the latest 10-K and the most recent quarter for anything that would knock it off the list: debt maturities, customer concentration, one-time gains inflating earnings. Rank them, and say which two you&apos;d research first and why.
      </Prompt>
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Seeking Alpha → thesis → stress test</h3>
      <p>
        Take the thesis from an article you find persuasive and ask Claude to attack it. This is the most underrated use of a research subscription. Use it for your own research and don&apos;t republish the article text.
      </p>
      <Prompt>
        This is the thesis from an article I found convincing: [summarize the key claims in your own words]. List what must be true for it to work. For each claim, find the figure in the company&apos;s filings that supports or contradicts it. Then write the strongest bear case against it, and tell me which claim I should verify first.
      </Prompt>
      <p>
        For a more formal write-up, the{' '}
        <PlaybookLink href="/playbooks/investment-memo">Investment Memo</PlaybookLink> playbook structures the thesis, risks and recommendation the way a fund would. Your own memo, written before you buy, is the best defense against the urge to buy because an article was well written.
      </p>
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Koyfin → context → check the data is current</h3>
      <p>
        Use Koyfin to see the chart, the sector and the macro backdrop, then ask Claude to source the numbers from filings instead of from a screen. The{' '}
        <PlaybookLink href="/playbooks/fundamental-stock-analysis-framework">Fundamental Stock Analysis Framework</PlaybookLink>{' '}
        playbook is designed for this: it sources figures from primary documents, checks that the data hasn&apos;t been superseded by a newer filing, and runs a challenge pass on its own conclusions before delivering.
      </p>

      <h2 className={H2}>Looking for a Seeking Alpha Alternative?</h2>
      <p>
        It depends on what you were using it for, because no single product replaces everything it does.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-foreground">If you used it for quant grades,</strong> Stock Rover&apos;s ratings and fair value cover similar ground with a different method. They are unlimited on Premium Plus and capped on Premium.
        </li>
        <li>
          <strong className="text-foreground">If you used it for data,</strong> Koyfin&apos;s free plan covers a lot, and a financial data API gives you numbers you can export. Our{' '}
            <PlaybookLink href="/blog/fmp-api-dcf-claude-code">FMP API walkthrough</PlaybookLink> shows one route.
        </li>
        <li>
          <strong className="text-foreground">If you used it for ideas and opinions,</strong> there isn&apos;t a like-for-like replacement. Filings, earnings call transcripts and Claude as a skeptical reader get you most of the way at no cost.
        </li>
      </ul>

      <h2 className={H2}>Which One to Start With</h2>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">You own individual stocks and want to manage them</p>
          <p className="text-sm text-muted-foreground mb-0">Start the 14-day Stock Rover trial on Premium Plus, so the caps don&apos;t distort your test. Decide on a plan afterward.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">You&apos;re just starting out or watching a budget</p>
          <p className="text-sm text-muted-foreground mb-0">Use Koyfin&apos;s free plan with Claude and the filings, and pay for nothing until you know what you&apos;re missing.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">You already have a process and want a counterargument</p>
          <p className="text-sm text-muted-foreground mb-0">Seeking Alpha Premium is the cheapest way to get structured bull and bear cases. Pair it with the stress-test prompt above.</p>
        </div>
      </div>
      <p>
        Most people don&apos;t need all three. Subscription costs compound against returns, and a tool you open twice a month is a poor use of $300. Run a screen, make a list of stocks, and write down why you&apos;d buy each one before you pay for anything new.
      </p>
      <p className="text-sm text-muted-foreground">
        This article is for education and isn&apos;t investment advice. Prices and plan limits were checked in October 2026 and change often, so confirm them on each vendor&apos;s site. Past ratings and screens don&apos;t guarantee future results.
      </p>
    </BlogPostLayout>
  );
}
