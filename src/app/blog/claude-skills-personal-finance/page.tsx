import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Personal Finance: Budget, Track, and Plan with AI | Claude Code Playbooks Blog',
  description: "How anyone can use four Claude Skills to take control of their money — a budget analyzer that breaks down spending by category and flags where money is leaking, an expense tracker that turns receipts and bank exports into a living ledger with trend alerts, a multi-agent financial planner that stress-tests savings goals against real income and expenses, and a finance manager that connects budgeting, tracking, and planning into one unified system.",
  alternates: { canonical: '/blog/claude-skills-personal-finance' },
  openGraph: {
    title: 'Claude Skills for Personal Finance: Budget, Track, and Plan with AI',
    description: "How anyone can use four Claude Skills to take control of their money — a budget analyzer that breaks down spending by category and flags where money is leaking, an expense tracker that turns receipts and bank exports into a living ledger with trend alerts, a multi-agent financial planner that stress-tests savings goals against real income and expenses, and a finance manager that connects budgeting, tracking, and planning into one unified system.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-personal-finance',
    type: 'article',
    publishedTime: '2026-06-22T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Personal Finance: Budget, Track, and Plan with AI',
    description: "Four Claude Skills for personal finance — spending analysis, expense tracking, multi-agent financial planning, and private bank statement analysis — so you always know where your money goes.",
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

export default function ClaudeSkillsPersonalFinancePage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Personal Finance: Budget, Track, and Plan with AI"
      description="How anyone can use four Claude Skills to take control of their money — a budget analyzer that breaks down spending by category and flags where money is leaking, an expense tracker that turns receipts and bank exports into a living ledger with trend alerts, a multi-agent financial planner that stress-tests savings goals against real income and expenses, and a finance manager that connects budgeting, tracking, and planning into one unified system."
      category="guide"
      difficulty="basic"
      readingTime="13 min read"
      createdAt="2026-06-22"
      tags={['claude skills personal finance', 'ai budgeting', 'ai money management', 'personal finance AI', 'expense tracker AI', 'budget AI', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-personal-finance"
    >
      <p>
        Most people have a vague sense of their spending. They know they eat out too much, that there are subscriptions they forgot about, that the month always seems to cost more than planned. The bank statement arrives and the total is bigger than expected — again. But without a precise breakdown, nothing changes. The next month starts with the same vague intention to spend less, no system for tracking whether that is happening, and no plan for where the money should actually go.
      </p>
      <p className="mt-4">
        The personal finance app landscape offers dozens of solutions — Mint, YNAB, Monarch, Copilot — but they all require connecting a bank account. Giving a third-party app persistent read access to a bank account is a reasonable thing to be uncomfortable with, and it means the people most careful with their money are also the ones least willing to use the tools designed for them.
      </p>
      <p className="mt-4">
        Claude Skills work differently. They process the files you already have — CSV exports from your bank, photos of receipts, statements downloaded from your account page — and run the analysis locally. No bank login required. No data uploaded to a third-party server. Four Skills cover the full personal finance problem: understanding current spending, tracking ongoing expenses, planning the financial future, and analyzing statements privately. Each is installed once and available every time you need it.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Money Blindspot Problem
      </h2>
      <p>
        The reason most people fail at budgeting is not willpower — it is information. A budget built on estimates ("I probably spend about $400 on food") fails the moment real spending is $620. A budget built on last month's actual categories fails because the category that ran over is always a different one this month. And a budget that requires manual entry of every transaction fails within two weeks because manual entry is tedious and the data is always behind.
      </p>
      <p className="mt-4">
        The specific version of this problem that money apps do not solve: subscription creep. The $12.99 streaming service from 2021 that was supposed to be temporary. The $9.99 cloud storage upgrade. The $14.99 app subscription that was free for the first year. Each one is small enough to ignore; together they add up to a number that would be alarming if anyone added it up. Most people do not add it up because doing so requires going through twelve months of bank statements and matching recurring charges — work that takes hours and that nobody does voluntarily.
      </p>
      <p className="mt-4">
        The four Skills below replace the estimate-and-fail budgeting cycle with a data-driven system. The Budget Analyzer finds the subscriptions and the actual spending categories from real statements. The Expense Tracker keeps the ledger current going forward. The Multi-Agent Financial Planner stress-tests savings and retirement goals against the real numbers. The Finance Manager ties it all together in a private, local system that never requires bank login credentials.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Budget Analyzer — Find Where the Money Actually Goes
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/budget-analyzer">Personal Budget Analyzer</PlaybookLink> takes bank statements or transaction exports and builds a clear picture of actual spending: every transaction categorized, patterns identified by category over time, subscription creep surfaced, and a realistic budget derived from real habits rather than aspirational estimates.
      </p>
      <p className="mt-4">
        The core insight: a budget based on what you think you spend will always be wrong. A budget based on what you actually spent last quarter is calibrated to reality. The Skill does the categorization work that makes the difference — grouping hundreds of transactions into housing, food, transport, subscriptions, entertainment, and miscellaneous, then showing the totals in a way that makes the surprise spending categories obvious.
      </p>
      <p className="mt-4">
        The subscription creep analysis is the most immediately useful output for most people. It goes through recurring charges across three months and surfaces every subscription, sorted by amount, with the date it first appeared and the total paid over the period. The number is almost always larger than expected. The resulting budget is not aspirational — it is what you actually spent, reshaped into categories with the discretionary items flagged and the fixed costs separated.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Analyze my last 3 months of bank statements. [paste CSV export] Categorize every transaction into: housing, groceries, dining out, transport, subscriptions, entertainment, health, shopping, and miscellaneous. Then give me: total spent per category per month, which categories exceeded $500/month, every recurring subscription charge with monthly cost and total over 3 months, the 5 highest individual transactions, and a realistic monthly budget for each category based on my actual patterns — not ideal targets.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">$3,200 left the account in October. Dining out "maybe $400." Subscriptions "probably $80." Actual grocery spend unknown — it blurs with pharmacy and Target runs. Budget spreadsheet has been at "85% complete" for six weeks. Month closes, nothing changes.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Dining out: $683. Subscriptions: $187/month across 14 services — 6 of which haven't been used in 90 days. Groceries vs. pharmacy separated. A realistic monthly budget built from 3 months of actuals, not guesses. Four subscriptions cancelled same day: $76/month recovered.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes. Works with any bank's CSV export. No bank login required — you download the statement yourself and paste it in. The subscription audit alone typically recovers more than enough to justify the setup time.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Expense Tracker — Keep the Ledger Current Without Manual Entry
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/expense-tracker">Expense Tracker & Categorizer</PlaybookLink> Skill processes receipts, bank exports, and transaction records into a running ledger with automatic categorization, approval workflows for business expenses, and monthly summary reports — replacing the end-of-month reconstruction problem with a system that stays current.
      </p>
      <p className="mt-4">
        The expense tracking problem has two distinct versions. For individuals and freelancers, it is the receipt chaos problem: photos taken on the phone, paper receipts stuffed in a wallet, digital receipts buried in email. By the time tax season arrives, reconstructing the year's expenses from scattered sources is a multi-day project that produces approximate answers at best. For small business owners and teams, it is the approval and reimbursement problem: expenses submitted late, categorized wrong, waiting in someone's inbox for approval, and reconciled weeks after the fact.
      </p>
      <p className="mt-4">
        The Skill handles both. Receipt photos get processed into line items. Bank statement exports get auto-categorized against the expense categories you define. For business use, it builds an approval routing workflow — expenses above a threshold go to a manager, standard expenses get auto-approved, and reimbursements get tracked through to payment. The monthly summary report is the output that makes tax filing and budget review manageable instead of painful.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          I'm a freelancer who needs to track all business expenses for quarterly tax filing. Categories: software/subscriptions, home office (25% of utilities and rent), professional development, equipment, client meals, and travel. Process these receipts and bank transactions from Q2: [paste data]. Give me: a categorized ledger with date, vendor, amount, and category for each item, total per category for the quarter, items that need receipts I haven't provided, and a summary formatted for my accountant.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Q2 tax filing arrives. Receipts are in three places: phone camera roll, email search for "receipt," paper pile on the desk. Three days reconstructing expenses, approximating anything over 60 days old, missing $400 in deductions because the receipts are unfindable. Accountant gets a rough spreadsheet and a lot of "approximately."</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Categorized Q2 ledger: 87 transactions, $14,300 total, broken down by category with totals. Four items flagged as needing receipts. Home office calculation done automatically at 25%. Summary formatted for accountant handoff. Filed on time. No approximations.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for individuals tracking personal deductions, freelancers filing quarterly taxes, and small teams managing reimbursement workflows. The approval routing is configurable — set your own thresholds and manager routing rules.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Multi-Agent Financial Planner — Four Specialists Working Your Numbers
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/multi-agent-financial-planner">Multi-Agent Financial Planner</PlaybookLink> Skill builds a virtual financial advisory team — a budget analyst, a retirement planner, an investment advisor, and a coordinating lead — that analyze your financial data from different angles simultaneously and produce a unified plan with specific recommendations.
      </p>
      <p className="mt-4">
        The single-advisor problem: financial planning involves budgeting, investing, taxes, and retirement simultaneously, and these dimensions interact in ways that single-angle analysis misses. A budget advisor who does not know your retirement shortfall will tell you to save more without knowing how urgently. A retirement planner who does not know your tax situation will miss optimization opportunities. An investment advisor who does not know your cash flow will recommend allocations you cannot sustain.
      </p>
      <p className="mt-4">
        The multi-agent approach runs all four analyses concurrently and then synthesizes them. The budget agent finds where spending can be reduced. The retirement agent projects whether current savings rates will reach the target. The investment agent assesses the current portfolio allocation against risk tolerance and timeline. The tax agent identifies deductions and optimization moves being missed. The lead partner synthesizes all four analyses into a single action plan with quarterly milestones — the kind of comprehensive picture that previously required hiring multiple specialists at thousands of dollars per year.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Create a comprehensive financial plan for my household. Here is our data: combined income $145,000/year, monthly expenses $8,200 (housing $2,800, food $900, transport $600, subscriptions $180, childcare $1,400, misc $2,320), savings rate 8%, current retirement accounts $94,000 (60% stocks / 40% bonds), target retirement age 62, current age 38, no employer match. Run four-agent analysis: budget, retirement, investment, and tax. Give me: where we can free up cash, whether we're on track for retirement at 62, whether our investment allocation matches our timeline, what we're missing on taxes, and a 90-day action plan with specific steps.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Annual "financial checkup" with a generic online calculator that says "you need $1.8M to retire." No path to get there. Budget review happens after a bad month, not systematically. Investment allocation was set in 2019 and hasn't been revisited. Tax situation: "I think we're doing fine."</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Budget agent: $780/month available from childcare-to-activity transition in 18 months — model that future state now. Retirement agent: 4 years behind target at current rate; need $1,100/month additional. Investment agent: 60/40 allocation is 10% too conservative for a 24-year horizon. Tax agent: HSA contribution gap, $3,200 in missed deductions. 90-day action plan with specific account changes.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 15 minutes. Works for individuals, couples, and families at any income level. Optional API connection to YNAB, Monarch, or other budgeting tools lets the agents work from live data instead of a snapshot.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Finance Manager — Private Statement Analysis with Charts, Locally
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/finance-manager">Personal Finance Manager</PlaybookLink> Skill imports bank statements — CSV or PDF — and produces instant spending breakdowns, 50/30/20 budget comparisons, savings recommendations, and interactive charts, with all processing done locally on your machine. Nothing is uploaded. No bank login is required.
      </p>
      <p className="mt-4">
        The privacy gap in personal finance apps is real. Persistent bank access means the app can pull your transaction history at any time, not just when you explicitly request it. The terms of service for most budgeting apps permit using transaction data for product improvement, marketing, and in some cases sale to third parties. For people who are careful about financial data — which is a reasonable thing to be — this is a dealbreaker that leaves them with no good options: manual spreadsheets or no analysis at all.
      </p>
      <p className="mt-4">
        The Finance Manager Skill changes the calculus. You download the statement yourself from your bank's secure website (which you already trust), import the CSV or PDF into the Skill, and get the same analysis that the apps provide: spending breakdown by category, comparison against the 50/30/20 rule (50% needs, 30% wants, 20% savings), the top five surprise expenses, and three specific savings recommendations. Interactive charts render locally. The analysis is immediate, comprehensive, and produces no external data exposure.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Analyze my Chase bank statement from last month. [paste CSV] Give me: (1) spending breakdown by category with percentage of total income, (2) comparison to the 50/30/20 rule — which buckets am I over or under, (3) top 5 highest individual transactions with notes on whether they're recurring or one-time, (4) 3 specific savings recommendations based on where I'm overspending relative to the 50/30/20 targets, and (5) a simple month-over-month trend I can track going forward. All processing local — do not summarize or send this data anywhere.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">The choice between giving Mint read access to the bank account forever, or downloading a CSV every month and staring at 200 rows of transactions in Excel with no real analysis. Most months: download, wince at the total, close the file. Nothing changes because the data is unprocessed.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Spending breakdown with percentages. 50/30/20 comparison: needs 58% (over by 8%), wants 29% (on target), savings 13% (under by 7%). Top 5 transactions: three recurring, two one-time. Three specific recommendations: reduce dining out by $150, pause unused gym membership, redirect to savings. Processed locally, no data exposure.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works with CSV exports from any bank and most PDF statement formats. The 50/30/20 framework is the default but the categories are adjustable — change the targets to match your actual income situation and goals.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Personal Finance Stack: Understand, Track, Plan, Analyze
      </h2>
      <p>
        The four Skills address the four stages of the personal finance problem. The Budget Analyzer answers "where did the money go?" for the past — categorizing historical spending and surfacing the subscription creep and category surprises that a vague sense of the numbers misses. The Expense Tracker keeps the current month's ledger up to date — processing receipts and bank exports as they arrive instead of reconstructing them at month-end. The Multi-Agent Financial Planner addresses the future — stress-testing retirement timelines, investment allocations, and tax situations simultaneously with the rigor of four specialized advisors. The Finance Manager ties it together for the privacy-conscious user who wants the analytical depth of a budgeting app without the bank login.
      </p>
      <p className="mt-4">
        Used together, the workflow looks like this: the Budget Analyzer runs on the last three months of statements to establish the baseline. The Finance Manager runs monthly on each new statement as it arrives, tracking progress against the 50/30/20 targets. The Expense Tracker handles receipts and tax-relevant expenses throughout the year so quarterly filing is not a reconstruction project. The Multi-Agent Financial Planner runs quarterly or after any major financial change — job change, large purchase, market move — to keep the long-term plan current.
      </p>
      <p className="mt-4">
        What the Skills do not replace is financial judgment: the decision about whether to prioritize the emergency fund or pay down debt first, whether the retirement target date is realistic given lifestyle goals, whether a major purchase now is worth the delayed savings impact. Those decisions require the person who knows the full picture. What the Skills provide is the full picture — precise, current, and analyzed from multiple angles — so those decisions are made with real information instead of approximations.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Personal Finance Skills
      </h2>
      <p className="mb-6">
        Each Skill is a one-time install. Open it, follow the setup steps, and it is available in Claude every time you download a bank statement, process receipts, or want to revisit your financial plan.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/budget-analyzer"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Budget Analyzer</p>
          <p className="text-sm text-muted-foreground">Every transaction categorized, subscription creep surfaced, and a realistic budget built from three months of actual spending — not aspirational estimates. No bank login required.</p>
        </Link>
        <Link
          href="/playbooks/expense-tracker"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Expense Tracker</p>
          <p className="text-sm text-muted-foreground">Receipts and bank exports processed into a running categorized ledger — with approval routing for business expenses and monthly summary reports formatted for accountant handoff.</p>
        </Link>
        <Link
          href="/playbooks/multi-agent-financial-planner"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Multi-Agent Financial Planner</p>
          <p className="text-sm text-muted-foreground">Four specialized agents — budget, retirement, investment, tax — analyze your finances simultaneously and produce a unified action plan with quarterly milestones. The comprehensive planning picture without the advisor fees.</p>
        </Link>
        <Link
          href="/playbooks/finance-manager"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Finance Manager</p>
          <p className="text-sm text-muted-foreground">Import any bank statement CSV or PDF and get instant spending breakdowns, 50/30/20 comparisons, and savings recommendations — all processed locally, nothing uploaded, no bank login ever required.</p>
        </Link>
      </div>
    </BlogPostLayout>
  );
}
