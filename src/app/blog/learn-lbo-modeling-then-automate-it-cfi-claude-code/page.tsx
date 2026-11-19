import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Learn LBO Modeling, Then Automate It: CFI + Claude Code | Claude Code Playbooks Blog',
  description: "A course teaches you why an LBO works; Claude Code builds the next one faster. How to learn the mechanics first, hand-build a tested LBO engine, have Claude rebuild it from the same inputs, and audit the result before you trust it.",
  alternates: { canonical: '/blog/learn-lbo-modeling-then-automate-it-cfi-claude-code' },
  openGraph: {
    title: 'Learn LBO Modeling, Then Automate It: CFI + Claude Code',
    description: "A course teaches you why an LBO works; Claude Code builds the next one faster. How to learn the mechanics first, hand-build a tested LBO engine, have Claude rebuild it from the same inputs, and audit the result before you trust it.",
    url: 'https://www.claudecodehq.com/blog/learn-lbo-modeling-then-automate-it-cfi-claude-code',
    type: 'article',
    publishedTime: '2026-11-19T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn LBO Modeling, Then Automate It: CFI + Claude Code',
    description: "A course teaches you why an LBO works; Claude Code builds the next one faster. How to learn the mechanics first, hand-build a tested LBO engine, have Claude rebuild it from the same inputs, and audit the result before you trust it.",
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

export default function LearnLboModelingThenAutomateItCfiClaudeCodePage() {
  return (
    <BlogPostLayout
      title="Learn LBO Modeling, Then Automate It: CFI + Claude Code"
      description="A course teaches you why an LBO works; Claude Code builds the next one faster. How to learn the mechanics first, hand-build a tested LBO engine, have Claude rebuild it from the same inputs, and audit the result before you trust it."
      category="tutorial"
      difficulty="intermediate"
      readingTime="12 min read"
      createdAt="2026-11-19"
      tags={['learn lbo modeling', 'cfi review', 'lbo model course', 'automate lbo model', 'lbo model python', 'paper lbo', 'claude code finance']}
      author="Claude Code Playbooks"
      slug="learn-lbo-modeling-then-automate-it-cfi-claude-code"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        There is a tempting shortcut with LBO models: skip the learning and ask Claude to build one. You will get a workbook with a sources-and-uses table, a debt schedule and a returns summary, and it will look right. The problem shows up the first time someone asks why the IRR is 19% and not 16%. If you can&apos;t answer, you can&apos;t defend the model, and you can&apos;t tell when the model is wrong.
      </p>
      <p>
        A course and an AI tool do different jobs, which is why they pair well. The course teaches you why each line exists. The tool removes the hours of wiring once you know. This post is the sequence that uses both: learn the mechanics, build a small engine yourself, have Claude rebuild it from the same inputs, then audit the difference.
      </p>

      <h2 className={H2}>What an LBO Model Is Actually Doing</h2>
      <p>
        Strip away the formatting and an LBO has five moving parts:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong className="text-foreground">Sources and uses.</strong> What you pay (purchase price plus fees) against how you fund it (debt plus sponsor equity). The equity cheque is the plug.</li>
        <li><strong className="text-foreground">An operating case.</strong> EBITDA over the hold period, and how much of it turns into cash after tax, capex and working capital.</li>
        <li><strong className="text-foreground">A debt schedule.</strong> Interest, then paydown from the cash that is left.</li>
        <li><strong className="text-foreground">An exit.</strong> Exit EBITDA times an exit multiple, less the remaining debt.</li>
        <li><strong className="text-foreground">Returns.</strong> Exit equity divided by entry equity gives the multiple of money, and the hold period turns that into an IRR.</li>
      </ol>
      <p>
        Everything else (tranches, PIK interest, management rollover, a cash-flow waterfall) refines one of those five. If you understand them, the refinements are readable. If you don&apos;t, they are noise.
      </p>

      <h2 className={H2}>Step 1: Learn the Mechanics First</h2>
      <p>
        This is the step to pay for if you don&apos;t already know how an LBO fits together. <AffiliateLink partner="cfi">Corporate Finance Institute</AffiliateLink> (CFI) lists four LBO courses in its Investment Banking &amp; Private Equity Modeling specialization: an introduction to leveraged buyouts (about 2 hours), then three modeling parts on sources and uses (2.5 hours), capital structure (4 hours) and output metrics (3 hours). That is roughly 11.5 hours of instruction, according to CFI&apos;s own course pages.
      </p>
      <p>
        One thing to know before you buy: LBO modeling isn&apos;t in CFI&apos;s FMVA certification. The FMVA course list on CFI&apos;s site covers 3-statement modeling and DCF valuation, but the LBO courses sit in the separate IB &amp; PE specialization. If your goal is specifically LBOs, check that the path you enroll in includes them. Whether the membership as a whole is worth the money is a separate question, and we cover it in{' '}
        <PlaybookLink href="/blog/is-cfi-all-access-worth-it-2026">Is the CFI All-Access bundle worth it in 2026?</PlaybookLink>
      </p>
      <p>
        <strong className="text-foreground">The free path:</strong> CFI lets you start with a free account and course previews. Beyond that, the cheapest way to learn is to read the &quot;background of the merger&quot; and financing sections of a real take-private proxy statement, then try to reproduce its sources and uses. Nothing here needs a paid course. A course buys structure and speed.
      </p>

      <h2 className={H2}>Step 2: Build the Skeleton by Hand</h2>
      <p>
        Before you open the playbook, write the smallest model that has all five parts. This one is about thirty lines of Python, and it is deliberately simple. It uses one tranche of debt, charges interest on the opening balance so nothing is circular, sweeps all spare cash into debt paydown, and folds tax, capex and working capital into one cash-conversion percentage.
      </p>
      <CodeBlock>{`def lbo(ebitda0, entry_mult, debt_x, rate, growth, cash_conv, exit_mult, fee_pct=0.02):
    """Simplified single-tranche LBO with a 100% cash sweep.
    Interest is charged on the OPENING balance (no circularity).
    cash_conv = share of EBITDA left for debt service after tax, capex and
    working capital."""
    ev = ebitda0 * entry_mult
    fees = ev * fee_pct
    debt = ebitda0 * debt_x
    equity = ev + fees - debt
    if equity <= 0:
        raise ValueError("debt exceeds the purchase price plus fees")
    assert abs((debt + equity) - (ev + fees)) < 1e-9, "sources and uses must balance"

    ebitda, schedule = ebitda0, []
    for year, g in enumerate(growth, start=1):
        ebitda *= 1 + g
        interest = debt * rate
        cash = ebitda * cash_conv - interest
        paydown = max(0.0, min(cash, debt))
        debt -= paydown
        schedule.append((year, round(ebitda, 1), round(interest, 1), round(debt, 1)))

    n = len(growth)
    exit_equity = ebitda * exit_mult - debt
    moic = exit_equity / equity
    irr = moic ** (1 / n) - 1 if moic > 0 else -1.0
    return {"equity": equity, "exit_equity": exit_equity, "moic": moic,
            "irr": irr, "schedule": schedule}`}</CodeBlock>
      <p>
        Run it with a $100M-EBITDA business bought at 8x, funded with 5x debt at 9%, growing EBITDA 8%, 8%, 7%, 6% and 5% over five years, converting 45% of EBITDA to cash for debt service, and exiting at 8x:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}>Line</th>
              <th className={TH}>Result</th>
              <th className={TH}>Check by hand</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr><td className={TD}>Purchase price (EV)</td><td className={TD}>800</td><td className={TD}>100 × 8</td></tr>
            <tr><td className={TD}>Fees (2%)</td><td className={TD}>16</td><td className={TD}>800 × 0.02</td></tr>
            <tr><td className={TD}>Debt / Sponsor equity</td><td className={TD}>500 / 316</td><td className={TD}>800 + 16 − 500 = 316</td></tr>
            <tr><td className={TD}>Year 1 interest</td><td className={TD}>45.0</td><td className={TD}>500 × 9%</td></tr>
            <tr><td className={TD}>Year 1 paydown</td><td className={TD}>3.6</td><td className={TD}>108 × 45% − 45</td></tr>
            <tr><td className={TD}>Debt at exit (year 5)</td><td className={TD}>438.6</td><td className={TD}>Opening 500, five paydowns</td></tr>
            <tr><td className={TD}>Exit equity</td><td className={TD}>672.7</td><td className={TD}>138.9 × 8 − 438.6</td></tr>
            <tr><td className={TD}>MOIC / IRR</td><td className={TD}>2.13x / 16.3%</td><td className={TD}>672.7 ÷ 316; 2.13^(1/5) − 1</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The interesting part is where the return came from. Equity grew by about 357. EBITDA growth at a constant 8x multiple contributed roughly 311 ((138.9 − 100) × 8), debt paydown about 61, and fees cost 16. At this leverage and cash conversion the business barely deleverages, because after interest very little cash is left over. The return is almost entirely EBITDA growth, so the deal works only if the growth case is right. A model that hides this behind a polished returns page is hiding the most important fact about the deal.
      </p>
      <h3 className={H3}>The paper-LBO shortcut</h3>
      <p>
        The same arithmetic gives you the quick check interviewers use. With no interim distributions, IRR is just the multiple of money raised to one over the years held, minus one. Over five years, a 2.0x multiple is about a 14.9% IRR, 2.5x is about 20.1%, and 3.0x is about 24.6%. If a model reports 2.5x over five years and a 26% IRR, something is wrong, and you know it without opening the spreadsheet.
      </p>

      <h2 className={H2}>Step 3: Have Claude Build the Same Model</h2>
      <p>
        Now give Claude the identical inputs and the{' '}
        <PlaybookLink href="/playbooks/fa-lbo-model">LBO Model Builder</PlaybookLink>{' '}
        playbook, which fills an Excel LBO template with sources and uses, an operating model, a debt schedule and IRR/MOIC analysis. The point of the exercise is the comparison:
      </p>
      <Prompt>
        Build an LBO in Excel using the LBO Model Builder format. Inputs: LTM EBITDA 100, entry 8.0x, fees 2% of EV, senior debt 5.0x at 9%, EBITDA growth 8%, 8%, 7%, 6%, 5%, cash conversion 45% of EBITDA before interest, 100% cash sweep, exit at 8.0x after five years. State every assumption you had to add. Charge interest on opening balances, and tell me if you use average balances instead. On a separate tab, show a returns attribution: EBITDA growth, multiple change, debt paydown and fees.
      </Prompt>
      <p>
        Compare it with the table above. If Claude&apos;s equity cheque is 316 and the IRR is 16.3%, your model and its model agree, and you have a cross-checked base case. If they differ, the difference is the lesson. The usual causes are interest on the average balance (which creates a circular reference), a different treatment of fees, or a cash-conversion assumption applied before versus after interest. None of those is wrong, but you must know which one your model uses.
      </p>

      <h2 className={H2}>Step 4: Audit Before You Trust It</h2>
      <p>
        Run the{' '}
        <PlaybookLink href="/playbooks/fa-audit-xls">Spreadsheet and Financial Model Auditor</PlaybookLink>{' '}
        over the workbook, then check these yourself:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">Sources equal uses.</strong> To the cent, not approximately.</li>
        <li><strong className="text-foreground">Debt never goes negative.</strong> A sweep that overpays a tranche is a classic formula error.</li>
        <li><strong className="text-foreground">IRR matches the paper check.</strong> Compute it from the multiple and the years.</li>
        <li><strong className="text-foreground">The sensitivities move in the right direction.</strong> A higher exit multiple raises returns, and a higher entry price lowers them. Our engine passes both, and yours should too.</li>
        <li><strong className="text-foreground">Nothing is hardcoded inside a formula.</strong> Assumptions on one tab, formulas elsewhere.</li>
      </ul>
      <p>
        Once the base case ties, the{' '}
        <PlaybookLink href="/playbooks/pe-returns-analysis">PE Returns Analysis</PlaybookLink>{' '}
        playbook builds the sensitivity tables across entry multiple, leverage, exit multiple, growth and hold period, and the{' '}
        <PlaybookLink href="/playbooks/ib-merger-model">Merger Model</PlaybookLink>{' '}
        playbook covers the strategic-buyer side of the same transaction.
      </p>

      <h2 className={H2}>What the Simple Engine Leaves Out</h2>
      <p>
        Be clear about what this skeleton doesn&apos;t do, because a real model does all of it: multiple debt tranches with different rates and amortization, PIK interest, a minimum cash balance, a revolver, tax calculated on EBT with an interest shield, management rollover and option pools, dividend recaps, and exits in different years. Each addition changes the answer, and each is a place where an AI-built model can quietly go wrong. Add them one at a time, and re-tie to the base case after each one.
      </p>
      <p>
        For the wider picture of DCF, LBO and three-statement work with Claude, see our guide to{' '}
        <PlaybookLink href="/blog/ai-financial-modeling-dcf-lbo-3-statement">using AI for financial modeling</PlaybookLink>. If you are working out how to sequence all of this learning, the{' '}
        <PlaybookLink href="/blog/ai-assisted-finance-curriculum-90-days">90-day curriculum</PlaybookLink>{' '}
        puts LBOs in context.
      </p>
      <p className="text-sm text-muted-foreground">
        This article is for education and isn&apos;t investment advice. Course details are from CFI&apos;s own pages as of November 2026 and change, so confirm them, along with current pricing, before you enroll. The model above is a teaching skeleton, not a basis for a real transaction.
      </p>
    </BlogPostLayout>
  );
}
