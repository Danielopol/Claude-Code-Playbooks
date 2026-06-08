import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Accountants: Automate Reconciliation, Journals, and Close | Claude Code Playbooks Blog',
  description: "How accountants use four Claude Skills to compress the month-end close — GL-to-subledger reconciliation with root-cause variance analysis, journal entries with supporting documentation generated in one pass, expense reports audited for policy violations automatically, and GAAP-formatted financial statements with variance callouts ready for board review.",
  alternates: { canonical: '/blog/claude-skills-accountants' },
  openGraph: {
    title: 'Claude Skills for Accountants: Automate Reconciliation, Journals, and Close',
    description: "Four Claude Skills that compress the month-end close — reconciliation, journals, expense audit, and financial statements — without sacrificing accuracy.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-accountants',
    type: 'article',
    publishedTime: '2026-06-08',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Accountants: Automate Reconciliation, Journals, and Close',
    description: "AI accounting automation for the month-end close — reconciliation, journal entries, expense audits, and financial statements with four Claude Skills.",
    images: ['https://www.claudecodehq.com/og-image.jpg'],
  },
};

function PlaybookLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#22d3ee] hover:underline font-medium">
      {children}
    </Link>
  );
}

export default function ClaudeSkillsAccountantsPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Accountants: Automate Reconciliation, Journals, and Close"
      description="How accountants use four Claude Skills to compress the month-end close — GL-to-subledger reconciliation with root-cause variance analysis, journal entries with supporting documentation generated in one pass, expense reports audited for policy violations automatically, and GAAP-formatted financial statements with variance callouts ready for board review."
      category="guide"
      difficulty="intermediate"
      readingTime="14 min read"
      createdAt="2026-06-08"
      tags={[
        'claude skills accounting',
        'ai accounting automation',
        'ai month-end close',
        'accounting AI',
        'journal entry AI',
        'reconciliation AI',
        'Claude Code',
      ]}
      author="Claude Code Playbooks"
      slug="claude-skills-accountants"
    >
      <p className="text-lg">
        The month-end close is the same work, every month, under the same deadline pressure.
        Match transactions line by line. Find the variance. Prepare the accruals. Format the
        statements. Review the expense reports before the controller signs off. The work is
        mechanical enough to feel like it shouldn&apos;t require a trained accountant, but
        complex enough that errors compound — a misclassified journal entry shows up in the
        wrong line of the P&amp;L, which produces a variance that takes two hours to trace
        back to its source, which pushes the close deadline, which compresses the time
        available for the analysis that actually requires judgment.
      </p>
      <p>
        The close doesn&apos;t have to take as long as it does. Most of the time is consumed
        by the mechanical layer — the matching, the formatting, the policy checking, the
        template-filling — not by the accounting judgment that earns the CPA. Four{' '}
        <strong className="text-foreground">Claude Skills</strong> — pre-built instruction sets
        that tell Claude exactly how to behave for a specific task — handle that mechanical
        layer so the accountant can focus on the exceptions, the analysis, and the judgment
        calls that automation genuinely can&apos;t make.
      </p>
      <p>
        This guide covers four skills that map to the four phases of the close:{' '}
        <strong className="text-foreground">reconcile</strong> the accounts with root-cause
        variance analysis,{' '}
        <strong className="text-foreground">prepare</strong> journal entries with supporting
        documentation in one pass,{' '}
        <strong className="text-foreground">audit</strong> expense reports for policy violations
        before reimbursement, and{' '}
        <strong className="text-foreground">generate</strong> GAAP-formatted financial
        statements ready for board review.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        What the Close Actually Costs
      </h2>
      <p>
        A mid-size company close takes the average accounting team five to ten business days.
        A significant portion of that time goes to work that produces no analytical insight —
        it just confirms that the numbers match, that the entries are formatted correctly, that
        the policy was followed. That confirmation is necessary; it just doesn&apos;t need to
        be slow. Every day shaved off the close is a day the finance team spends on forecasting,
        analysis, and the strategic work that requires their expertise rather than their patience.
      </p>
      <p>
        The skills below don&apos;t replace accounting judgment. They replace the mechanical
        scaffolding around it — so the accountant gets to the judgment faster and with a
        cleaner, already-checked set of inputs.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        1. Reconciliation — Match Every Transaction, Root-Cause Every Variance
      </h2>
      <p>
        Bank and GL reconciliation is the work that defines the close for most staff accountants.
        It is also, in its pure form, a matching problem: transaction A in the bank statement
        should correspond to transaction B in the general ledger, and anything that doesn&apos;t
        match is a variance that needs to be investigated and categorized. A human doing this
        manually — scrolling through exports side by side, flagging mismatches, writing down the
        variance descriptions — works at roughly the speed of reading. A 1,200-transaction
        month takes two to three days before the root-cause work even starts.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/account-reconciliation-assistant">
          Account Reconciliation Assistant
        </PlaybookLink>{' '}
        skill handles GL-to-subledger and bank reconciliation at volume. Feed it the exports
        and it matches all transactions, identifies every variance with a root-cause category
        (timing difference, missing entry, amount discrepancy, duplicate, uncleared item), and
        produces an aging analysis of outstanding reconciling items — so the accountant starts
        from a complete variance list with categories attached, not a blank matching task.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Reconcile our Q4 bank statements against the general ledger. Match all
          transactions, identify every variance, and categorize each one: timing difference,
          missing GL entry, amount discrepancy, duplicate posting, or uncleared item. Give
          me an aging analysis of anything outstanding over 30 days, and flag any variance
          over $5,000 for priority review.&quot;
        </p>
      </div>
      <p>
        The &quot;flag any variance over $5,000 for priority review&quot; instruction is the
        one that makes the output actionable rather than exhaustive. A reconciliation that
        surfaces 47 variances with no prioritization puts the same cognitive load on the
        accountant as doing it manually. A reconciliation that surfaces 47 variances, categorizes
        all of them, and flags the 3 that need immediate attention gives the accountant a
        clear starting point. The skill does the matching; the accountant works the exceptions.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm">Two days matching 1,247 transactions manually. Variances found one by one. Root causes written in a notebook. Outstanding items tracked in a separate spreadsheet.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm">All 1,247 transactions matched, 8 variances identified with root-cause categories, aging analysis complete, priority items flagged — accountant works only the exceptions.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Advanced · Best for: staff accountants, controllers, bookkeepers, audit preparers
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        2. Journal Entries — Debits, Credits, and Supporting Documentation in One Pass
      </h2>
      <p>
        Journal entry preparation is the most error-prone part of the close precisely because
        it feels the most routine. An accrual entry prepared for the thirtieth time in a row
        gets done on autopilot, which is when transposition errors, wrong account codes, and
        missing supporting calculations slip through. Every mistake in a journal entry compounds
        — a misclassified accrual lands in the wrong expense line, which produces a variance
        in the P&amp;L, which requires investigation, which pushes the close, which means the
        financial statements go to the board late. The mechanical nature of the work doesn&apos;t
        make it low-stakes; it makes it high-risk precisely because attention drifts.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/journal-entry-preparer">
          Journal Entry Preparer
        </PlaybookLink>{' '}
        skill generates properly formatted journal entries with correct debits and credits,
        account references, supporting calculations, and a review checklist for each entry —
        all in one pass. Period-end accruals, prepaid amortization schedules, revenue
        recognition entries, depreciation — each one produced with the documentation an
        auditor would expect attached.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Prepare journal entries for our Q4 period-end close. Entries needed: (1) AP
          accruals for invoices received but not posted — list attached, (2) prepaid insurance
          amortization for 3 policies, (3) deferred revenue recognition for the SaaS
          subscriptions — schedule attached, (4) depreciation for fixed assets added in Q4.
          For each entry: proper debit/credit format, account numbers from our chart of
          accounts, supporting calculation shown, and a review checklist so the controller can
          sign off without asking follow-up questions.&quot;
        </p>
      </div>
      <p>
        The review checklist is the output that changes the workflow most. When a journal entry
        arrives with its own checklist — account code verified, supporting calculation attached,
        period confirmed, reversing entry noted if applicable — the controller review becomes a
        sign-off rather than an investigation. The back-and-forth between preparer and reviewer
        that typically adds a day to the close is largely eliminated because the documentation
        that would have been requested is already there.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Intermediate · Best for: staff accountants, bookkeepers, controllers reviewing period-end adjustments, small business owners managing their own books
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        3. Expense Audit — Policy Compliance at Volume, Before Reimbursement
      </h2>
      <p>
        Expense report review is the close task most likely to be done badly under deadline
        pressure. Two hundred expense reports submitted in the last week of the month, a
        finance manager eyeballing each one against a policy document they have memorized but
        not perfectly. The obvious violations get caught: the $600 dinner over the per-meal
        limit, the hotel above the nightly cap. The non-obvious ones slip through: the recurring
        $49 SaaS subscription that&apos;s been expensed monthly for 18 months after the project
        that justified it ended, the conference registration fee coded to meals, the personal
        Amazon purchase categorized as office supplies. Those violations aren&apos;t malicious;
        they&apos;re noise in a high-volume, time-pressured review process.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/expense-report-auditor">
          Expense Report Auditor
        </PlaybookLink>{' '}
        skill reviews expense submissions against your travel and expense policy automatically —
        flagging every violation by severity (high, medium, low) with the specific policy
        reference violated, missing receipts, miscategorized expenses, and the pattern violations
        that manual review misses: the recurring charge that should have been cancelled, the
        split transaction that circumvents the approval threshold, the expense coded to the
        wrong project that passes a policy check but fails a budget allocation check.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Audit this quarter&apos;s 340 expense reports against our T&amp;E policy.
          Flag every violation by severity — high (over policy limit, personal charge,
          missing receipt over $25), medium (miscategorization, missing receipts under $25,
          late submission), low (formatting issues, incomplete descriptions). Also flag any
          recurring charges that appear across more than 2 months — I want to know what
          should have been cancelled. Sort by severity and give me the total dollar exposure
          by category.&quot;
        </p>
      </div>
      <p>
        &quot;Total dollar exposure by category&quot; is the output that turns an expense audit
        from a compliance exercise into a management tool. Knowing that over-limit meals
        represent $4,200 of policy violations this quarter, while miscategorized software
        subscriptions represent $8,700, tells the CFO where to tighten the policy and where to
        add an approval step — information that doesn&apos;t surface from reading individual
        reports one at a time.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Intermediate · Best for: finance managers, controllers, auditors, CFOs wanting automated expense oversight
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        4. Financial Statements — Board-Ready Statements from a Trial Balance
      </h2>
      <p>
        The final step of the close — generating the financial statements from the trial balance
        — is where the month&apos;s work becomes visible to people outside the accounting
        team. A P&amp;L, a balance sheet, and a cash flow statement formatted for board review
        need to be accurate, consistently formatted, annotated with material variance callouts,
        and comparable to prior periods. They also need to be ready on a tight deadline, which
        means the accountant preparing them is doing template work under pressure — the most
        reliable conditions for formatting errors and missing variance explanations.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/financial-statement-generator">
          Financial Statement Generator
        </PlaybookLink>{' '}
        skill produces GAAP-formatted income statements, balance sheets, and cash flow
        statements from trial balance data — with period-over-period comparisons, material
        variance callouts with explanations, and a key metrics summary. The output is formatted
        for board review from the first pass, not from the fifth revision after the CFO asks
        why the gross margin commentary is missing.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Generate Q4 financial statements from our trial balance. Produce a
          GAAP-formatted income statement, balance sheet, and cash flow statement. For each:
          include a period-over-period comparison to Q3 and to Q4 last year, call out any
          line item variance over 10% with a one-sentence explanation, and flag anything that
          needs management commentary before the board package goes out. Add a key metrics
          summary at the top: revenue growth, gross margin, EBITDA margin, and net cash
          position.&quot;
        </p>
      </div>
      <p>
        The &quot;flag anything that needs management commentary before the board package goes
        out&quot; instruction is the close equivalent of the priority-flag in the reconciliation
        step. The skill knows what a board will ask about — large variances, unusual line items,
        changes in the margin structure — and surfaces those proactively so the accounting team
        can prepare the explanation before the CFO asks for it, rather than scrambling to
        respond after the board meeting has already started.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm">Four hours pulling numbers into templates, calculating variances manually, writing callout commentary under deadline pressure. Board gets the package with two formatting errors and a missing gross margin note.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm">GAAP-formatted statements with period-over-period comparisons, variance callouts, and a flagged list of items needing management commentary — board-ready from the first pass.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Advanced · Best for: accountants preparing monthly statements, bookkeepers generating client reports, controllers managing period-end close
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Close System: Four Skills Across Four Phases
      </h2>
      <p>
        These four skills map directly onto the sequential phases of the month-end close, and
        each one feeds the next with cleaner inputs:
      </p>
      <ol className="list-decimal list-inside space-y-3 my-4">
        <li>
          <strong className="text-foreground">Account Reconciliation Assistant</strong> — opens
          the close. All accounts reconciled, variances categorized, priority exceptions flagged.
          The accountant works the exceptions; the matching is already done.
        </li>
        <li>
          <strong className="text-foreground">Journal Entry Preparer</strong> — period-end
          adjustments. Accruals, amortization, revenue recognition, depreciation — all entries
          formatted with supporting documentation and review checklists attached.
        </li>
        <li>
          <strong className="text-foreground">Expense Report Auditor</strong> — pre-reimbursement
          compliance. 340 reports reviewed against policy, violations ranked by severity and
          dollar exposure, recurring anomalies surfaced before they become a pattern.
        </li>
        <li>
          <strong className="text-foreground">Financial Statement Generator</strong> — closes the
          close. GAAP-formatted statements from the reconciled, adjusted trial balance, with
          variance commentary and board-flagged items ready for the CFO review.
        </li>
      </ol>
      <p>
        A team running all four in sequence compresses the mechanical portion of the close
        significantly. The judgment work — investigating a variance that doesn&apos;t have an
        obvious root cause, deciding whether an accrual estimate is reasonable, reviewing
        whether the revenue recognition treatment is correct — stays with the accountant. The
        matching, formatting, policy-checking, and template-filling that surrounds it doesn&apos;t.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        A Note on Accuracy and Review
      </h2>
      <p>
        These skills produce outputs that require review, not outputs that replace review.
        Every journal entry generated should be checked against the supporting documents.
        Every reconciliation exception should be investigated by someone who understands the
        account. Every flagged expense violation should be confirmed against the policy before
        a reimbursement decision is made. The financial statements should be reviewed line by
        line before they go to the board.
      </p>
      <p>
        What changes is the starting point of that review. Instead of beginning with a blank
        template or a raw export, the accountant begins with a structured, already-processed
        output where the mechanical work is done and the judgment calls are labeled. That
        shift — from blank page to reviewed draft — is where the time savings are, and it
        doesn&apos;t require trading accuracy for speed. It requires putting the mechanical
        work where it belongs: in the system, not in the accountant&apos;s hours.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/account-reconciliation-assistant"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Account Reconciliation Assistant</p>
          <p className="text-sm text-muted-foreground">GL-to-subledger and bank reconciliation — all transactions matched, variances root-caused, outstanding items aged, priority exceptions flagged.</p>
        </Link>
        <Link
          href="/playbooks/journal-entry-preparer"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Journal Entry Preparer</p>
          <p className="text-sm text-muted-foreground">Period-end journal entries with proper debits, credits, account references, supporting calculations, and a controller review checklist — in one pass.</p>
        </Link>
        <Link
          href="/playbooks/expense-report-auditor"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Expense Report Auditor</p>
          <p className="text-sm text-muted-foreground">Policy compliance review across hundreds of reports — violations ranked by severity, recurring anomalies flagged, total dollar exposure by category.</p>
        </Link>
        <Link
          href="/playbooks/financial-statement-generator"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Financial Statement Generator</p>
          <p className="text-sm text-muted-foreground">GAAP-formatted P&amp;L, balance sheet, and cash flow from your trial balance — period-over-period comparisons, variance callouts, board-flagged items.</p>
        </Link>
      </div>
      <p>
        The close will always require accounting judgment. It doesn&apos;t have to require
        accounting patience. The mechanical layer belongs in the system. The judgment layer
        belongs with the accountant. These skills put both where they belong.
      </p>
    </BlogPostLayout>
  );
}
