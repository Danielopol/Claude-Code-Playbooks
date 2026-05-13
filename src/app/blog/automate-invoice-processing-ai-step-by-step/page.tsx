import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'How to Automate Invoice Processing with AI (Step-by-Step) | Claude Code Playbooks Blog',
  description: 'A step-by-step guide to automating invoice processing with AI — from setup to fully hands-free generation, sending, tracking, and reconciliation using Claude Code.',
  alternates: { canonical: '/blog/automate-invoice-processing-ai-step-by-step' },
  openGraph: {
    title: 'How to Automate Invoice Processing with AI (Step-by-Step)',
    description: 'A step-by-step guide to automating invoice processing with AI — from setup to fully hands-free generation, sending, tracking, and reconciliation using Claude Code.',
    url: 'https://www.claudecodehq.com/blog/automate-invoice-processing-ai-step-by-step',
    type: 'article',
    publishedTime: '2026-05-13',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Automate Invoice Processing with AI (Step-by-Step)',
    description: 'Follow these steps to automate invoice generation, sending, reminders, and reconciliation with Claude Code — no manual work needed.',
    images: ['https://www.claudecodehq.com/og-image.jpg'],
  },
};

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#22d3ee] text-[#0d1117] font-bold text-sm shrink-0">
          {number}
        </span>
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      </div>
      <div className="pl-11 space-y-3">{children}</div>
    </div>
  );
}

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-3">
      <p className="text-xs font-semibold text-[#22d3ee] mb-2 uppercase tracking-wide">
        Prompt
      </p>
      <p className="text-sm font-mono text-[#f97316] leading-relaxed">{children}</p>
    </div>
  );
}

function Output({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0d1117] border border-[#22c55e]/30 rounded-lg p-4 my-3">
      <p className="text-xs font-semibold text-[#22c55e] mb-2 uppercase tracking-wide">
        Output
      </p>
      <p className="text-sm font-mono text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#161b22] border-l-2 border-[#22d3ee] rounded-r-lg pl-4 pr-4 py-3 my-3">
      <p className="text-xs font-semibold text-[#22d3ee] mb-1">Pro tip</p>
      <p className="text-sm">{children}</p>
    </div>
  );
}

export default function AutomateInvoiceStepByStepPage() {
  return (
    <BlogPostLayout
      title="How to Automate Invoice Processing with AI (Step-by-Step)"
      description="A step-by-step guide to automating invoice processing with AI — from setup to fully hands-free generation, sending, tracking, and reconciliation using Claude Code."
      category="tutorial"
      difficulty="intermediate"
      readingTime="14 min read"
      createdAt="2026-05-13"
      tags={[
        'automate invoice processing',
        'AI invoice automation',
        'invoice automation step by step',
        'Claude Code invoicing',
        'invoice generator AI',
        'accounts receivable automation',
        'finance automation',
        'Claude Code',
      ]}
      author="Claude Code Playbooks"
      slug="automate-invoice-processing-ai-step-by-step"
    >
      <p className="text-lg">
        By the end of this guide, you&apos;ll have a working AI invoice system: invoices
        that generate from a single prompt, send themselves to clients, follow up at 30/60/90
        days if unpaid, and reconcile automatically when payment clears. No spreadsheets,
        no copy-pasting last month&apos;s template, no Friday-afternoon invoice marathons.
      </p>
      <p>
        This is a literal step-by-step walkthrough. Each step builds on the last. You can
        stop after any step and have a working system — or run all seven and have full
        end-to-end automation.
      </p>

      {/* Prerequisites */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
        <p className="text-sm font-semibold text-foreground mb-3">What you need before starting</p>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2">
            <span className="text-[#22d3ee] shrink-0">→</span>
            <span>
              <strong className="text-foreground">Claude Code installed</strong> — the CLI tool
              from Anthropic.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#22d3ee] shrink-0">→</span>
            <span>
              <strong className="text-foreground">Your business details</strong> — company name,
              address, payment details (bank / Stripe / PayPal), and your logo file if you have one.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#22d3ee] shrink-0">→</span>
            <span>
              <strong className="text-foreground">One client to test with</strong> — name, email,
              and a real or sample invoice to generate.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#22d3ee] shrink-0">→</span>
            <span>
              <strong className="text-foreground">Optional for steps 4–6</strong> — Gmail or
              Outlook access, and a Stripe, PayPal, or bank account for payment tracking.
            </span>
          </li>
        </ul>
      </div>

      {/* Step 1 */}
      <Step number={1} title="Download the Invoice Generator Playbook">
        <p>
          The playbook is a CLAUDE.md template that tells Claude Code exactly how to handle
          invoices — what format to use, how to calculate tax, what your payment terms are, and
          how to number invoices sequentially.
        </p>
        <p>
          Go to the{' '}
          <Link href="/playbooks/invoice-generator" className="text-[#22d3ee] hover:underline font-medium">
            Professional Invoice Generator
          </Link>{' '}
          playbook page and click <strong className="text-foreground">Download</strong>. You&apos;ll
          get a <code className="text-xs bg-[#0d1117] border border-[#30363d] px-1.5 py-0.5 rounded">CLAUDE.md</code> file.
        </p>
        <p>
          Create a folder for your invoicing work — something like{' '}
          <code className="text-xs bg-[#0d1117] border border-[#30363d] px-1.5 py-0.5 rounded">~/invoices</code> — and
          drop the CLAUDE.md file inside it. This is your invoice project folder; Claude Code will
          read the playbook automatically whenever you open this folder.
        </p>
        <Tip>
          Keep a separate folder per client project if you bill at different rates or currencies.
          Each folder can have its own CLAUDE.md with client-specific defaults baked in, so you
          never have to repeat rate or currency information.
        </Tip>
      </Step>

      {/* Step 2 */}
      <Step number={2} title="Configure Your Business Profile">
        <p>
          Open the CLAUDE.md file and fill in your business details in the configuration block at
          the top. This is the information that appears on every invoice — your business name,
          address, ABN/VAT/EIN, and payment details.
        </p>
        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-3 overflow-x-auto">
          <p className="text-xs font-semibold text-muted-foreground mb-2">CLAUDE.md — fill in your details</p>
          <pre className="text-xs text-[#f97316] leading-relaxed whitespace-pre">{`BUSINESS_NAME: "Acme Studio LLC"
BUSINESS_ADDRESS: "123 Main St, Austin TX 78701"
BUSINESS_TAX_ID: "EIN 12-3456789"
DEFAULT_CURRENCY: "USD"
DEFAULT_TAX_RATE: 0          # 0 if you don't charge sales tax
PAYMENT_TERMS: "Net 30"
PAYMENT_DETAILS: "Bank transfer: Routing 021000021, Acct 1234567890
                  Or pay online: stripe.com/pay/yourbusinessname"
INVOICE_PREFIX: "INV"
INVOICE_START_NUMBER: 1042   # picks up from your last invoice`}</pre>
        </div>
        <p>
          Once this is saved, every invoice Claude Code generates will pull from these defaults.
          You&apos;ll never manually enter your own address or bank details again.
        </p>
      </Step>

      {/* Step 3 */}
      <Step number={3} title="Generate Your First Invoice">
        <p>
          Open Claude Code in your invoices folder (
          <code className="text-xs bg-[#0d1117] border border-[#30363d] px-1.5 py-0.5 rounded">
            claude .
          </code>{' '}
          from the terminal). Now describe the invoice in plain English:
        </p>
        <Prompt>
          Generate an invoice for Bright Agency. I did 24 hours of UX design at $120/hr, plus
          a $400 fixed fee for the wireframe kit. They&apos;re based in London so use GBP and add 20%
          VAT. Net 30. Their billing contact is sarah@brightagency.co.
        </Prompt>
        <p>Claude Code will produce:</p>
        <Output>
          ✓ INV-1042.pdf — Bright Agency — £3,232.00 (inc. VAT){'\n'}
          Line items: UX Design 24h @ £120 = £2,880 | Wireframe Kit = £400{'\n'}
          Subtotal £3,280 + 20% VAT £656 ... wait, let me recalculate{'\n'}
          Subtotal £3,280 | VAT (20%) £656 | Total £3,936{'\n'}
          Payment terms: Net 30 | Due: 12 June 2026{'\n'}
          ✓ Saved to /invoices/2026/INV-1042-BrightAgency.pdf
        </Output>
        <p>
          Open the PDF. Check the numbers, the formatting, and your logo. If anything looks off,
          tell Claude Code what to adjust — it updates the invoice in place and re-exports.
        </p>
        <Tip>
          Ask Claude Code to &quot;add a late fee clause — 1.5% per month after 30 days&quot; and
          it will add standard payment terms language to the footer. Works for any jurisdiction-specific
          boilerplate you normally copy-paste.
        </Tip>
      </Step>

      {/* Step 4 */}
      <Step number={4} title="Send the Invoice Directly from Claude Code">
        <p>
          Once you&apos;re happy with the PDF, skip the &quot;attach to email, write a message,
          hit send&quot; loop. Do it in one prompt:
        </p>
        <Prompt>
          Send INV-1042 to sarah@brightagency.co. Subject line: &quot;Invoice INV-1042 from Acme
          Studio — £3,936.00 due 12 June&quot;. Keep the email professional and brief. BCC me at
          billing@acmestudio.com and log the send timestamp.
        </Prompt>
        <p>
          Claude Code composes the email, attaches the PDF, sends via your configured email
          account (Gmail or Outlook), and logs the delivery. You&apos;ll get a confirmation:
        </p>
        <Output>
          ✓ Email sent to sarah@brightagency.co at 09:14 UTC{'\n'}
          ✓ BCC delivered to billing@acmestudio.com{'\n'}
          ✓ Logged: INV-1042 | Sent | 2026-05-13 09:14{'\n'}
          Next follow-up scheduled: 2026-06-12 (due date)
        </Output>
        <p>
          For Gmail, Claude Code uses your existing authentication — no new app credentials needed.
          For Outlook, you&apos;ll connect once via OAuth and it handles the rest.
        </p>
      </Step>

      {/* Step 5 */}
      <Step number={5} title="Set Up Automatic Payment Reminders">
        <p>
          This is the step that eliminates most of the invisible invoice-chasing work. Once an
          invoice is sent, tell Claude Code the reminder schedule:
        </p>
        <Prompt>
          For INV-1042: send a polite reminder on the due date if unpaid. If still unpaid at
          60 days, send a firmer reminder referencing the late fee clause. At 90 days, send a
          final notice asking them to confirm their intended payment date. Use my voice — friendly
          but professional.
        </Prompt>
        <p>
          Claude Code schedules three follow-ups against the invoice&apos;s due date and won&apos;t
          send them if the invoice is already marked paid. Each reminder is written in your tone —
          not a generic &quot;PAYMENT OVERDUE&quot; template.
        </p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 my-3 space-y-3">
          <div>
            <p className="text-xs font-semibold text-foreground mb-1">30-day reminder (due date)</p>
            <p className="text-sm text-muted-foreground">
              &quot;Hi Sarah — just a quick note that INV-1042 for £3,936 is due today. Let me know
              if you need anything from my end. Bank details are in the invoice footer, or you can
              pay online at stripe.com/...&quot;
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground mb-1">60-day reminder</p>
            <p className="text-sm text-muted-foreground">
              &quot;Hi Sarah — I wanted to follow up on INV-1042, now 30 days overdue. As noted in
              the invoice, a 1.5% late fee applies from this point. Happy to sort this out — just
              let me know if there&apos;s a billing issue on your end.&quot;
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground mb-1">90-day final notice</p>
            <p className="text-sm text-muted-foreground">
              &quot;Hi Sarah — INV-1042 is now 60 days overdue. Could you confirm the expected
              payment date? If there&apos;s a dispute or a billing question I haven&apos;t seen,
              please let me know and we can sort it out.&quot;
            </p>
          </div>
        </div>
        <Tip>
          Add a note like &quot;if the client replies asking for a payment plan, flag it to me
          rather than auto-responding&quot; — Claude Code will pause the automation and notify you
          so you can handle exceptions with judgment.
        </Tip>
      </Step>

      {/* Step 6 */}
      <Step number={6} title="Automate Payment Detection and Reconciliation">
        <p>
          When payment arrives, the invoice should mark itself paid — and your accounting system
          should know about it — without you opening QuickBooks or updating a spreadsheet.
        </p>
        <p>
          If you use Stripe as a payment link, Claude Code can listen for the webhook:
        </p>
        <Prompt>
          Watch for Stripe payments matching any open invoice. When a payment clears, mark the
          invoice paid, log the transaction date and amount, update the accounts receivable
          tracker, cancel any pending reminders, and add the entry to the QuickBooks queue.
        </Prompt>
        <p>
          For bank transfer clients, you can run a daily reconciliation instead:
        </p>
        <Prompt>
          Every morning, compare my bank feed from the last 24 hours against open invoices.
          Match payments by amount and approximate date, mark matched invoices as paid, and
          flag any payments you couldn&apos;t match so I can review them.
        </Prompt>
        <Output>
          Daily reconciliation — 2026-05-13{'\n'}
          ✓ INV-1041 — Matched: £1,200 received 2026-05-12 → marked PAID{'\n'}
          ✓ INV-1039 — Matched: $4,500 received 2026-05-12 → marked PAID{'\n'}
          ⚠ Unmatched: £850 from &quot;TRADING LTD&quot; — no open invoice found. Review needed.{'\n'}
          2 reminders cancelled. QuickBooks queue updated.
        </Output>
        <p>
          The unmatched payment flag is deliberate — partial payments, overpayments, and
          unexpected deposits get surfaced for your review rather than silently filed wrong.
        </p>
      </Step>

      {/* Step 7 */}
      <Step number={7} title="Organize Inbound Vendor Invoices">
        <p>
          The outbound side is automated. Now tackle the inbound pile: vendor invoices, SaaS
          subscriptions, contractor bills, and expense receipts accumulating in your email and a
          folder called &quot;receipts_2026_FINAL_v3.&quot;
        </p>
        <p>
          Download the{' '}
          <Link href="/playbooks/invoice-organizer" className="text-[#22d3ee] hover:underline font-medium">
            Invoice Organizer &amp; Tracker
          </Link>{' '}
          playbook, drop your inbound invoice folder in the same directory, and run:
        </p>
        <Prompt>
          Organize everything in /invoices/inbound/. Rename each file as
          YYYY-MM-VendorName-InvoiceNumber.pdf. Categorize by expense type (software, contractors,
          hosting, travel, other). Build a spreadsheet with vendor / date / amount / category /
          payment status. Flag anything over $500 that shows as unpaid.
        </Prompt>
        <Output>
          Processed 47 files in /invoices/inbound/{'\n'}
          ✓ 47 renamed with consistent YYYY-MM-Vendor-INV format{'\n'}
          ✓ Spreadsheet: inbound-invoices-2026.xlsx (vendor, date, amount, category, status){'\n'}
          {'\n'}
          Category totals:{'\n'}
          Software/SaaS    $4,210   (14 invoices){'\n'}
          Contractors      $18,500  (8 invoices){'\n'}
          Hosting/Infra    $1,890   (9 invoices){'\n'}
          Travel           $640     (6 invoices){'\n'}
          Other            $1,100   (10 invoices){'\n'}
          {'\n'}
          ⚠ 3 invoices over $500 flagged as unpaid — see rows 12, 28, 41
        </Output>
        <p>
          Your accountant now gets a clean folder of consistently named PDFs and a spreadsheet
          instead of a chaotic inbox dump. Tax season stops being stressful.
        </p>
      </Step>

      {/* Putting it together */}
      <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4 border-b border-[#30363d] pb-2">
        Putting It All Together: The Full Workflow
      </h2>
      <p>
        Once all seven steps are in place, the end-to-end workflow looks like this:
      </p>
      <div className="relative my-6">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-[#30363d]" />
        <div className="space-y-4 pl-10">
          {[
            { label: 'Project closes', detail: 'You say the word (or your project tracker triggers it automatically).' },
            { label: 'Invoice generates', detail: 'Claude Code creates a branded PDF with correct tax, numbering, and payment details.' },
            { label: 'Invoice sends', detail: 'Email goes to the client with a payment link. You get a BCC and a log entry.' },
            { label: 'Reminders run', detail: 'Scheduled follow-ups fire at 30/60/90 days if the invoice stays unpaid.' },
            { label: 'Payment detected', detail: 'Stripe webhook or daily bank reconciliation marks it paid and syncs to accounting.' },
            { label: 'Reminders cancel', detail: 'No awkward email chasing someone who already paid.' },
            { label: 'AR tracker updates', detail: 'Your receivables dashboard reflects reality in real time.' },
          ].map(({ label, detail }, i) => (
            <div key={label} className="relative">
              <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-[#22d3ee] border-2 border-[#0d1117]" />
              <p className="font-semibold text-foreground text-sm">{label}</p>
              <p className="text-sm text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </div>
      <p>
        From step one to the last payment — zero manual touchpoints for a standard invoice
        with a client who pays on time. For late payers, the automation handles reminders;
        you only get involved at the 90-day flag or the &quot;unmatched payment&quot; alert.
      </p>

      {/* Common mistakes */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Common Mistakes to Avoid
      </h2>
      <div className="space-y-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            Skipping the CLAUDE.md configuration
          </p>
          <p className="text-sm">
            If you don&apos;t fill in your business details in step 2, Claude Code will ask for
            them on every invoice. Five minutes of setup at the start saves ten prompts per
            invoice forever.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            Automating reminders before validating the generation output
          </p>
          <p className="text-sm">
            Run three or four invoices manually through steps 3–4 before enabling the full
            automation in steps 5–6. You want to catch any branding or calculation quirks
            before they go out automatically.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            Using fuzzy bank matching without a review step
          </p>
          <p className="text-sm">
            Bank feed matching is not 100% reliable for unusual amounts or partial payments.
            Keep the &quot;flag unmatched payments&quot; instruction in place (step 6) so
            edge cases surface to you rather than being silently mis-filed.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            Automating the 90-day escalation without human review
          </p>
          <p className="text-sm">
            At 90 days overdue, the situation has moved beyond automated reminders. Have
            Claude Code flag 90-day invoices to you rather than sending a final notice
            automatically — these situations often need a phone call, a dispute process,
            or a payment plan negotiation.
          </p>
        </div>
      </div>

      {/* Playbook links */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Playbooks Used in This Guide
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <Link
          href="/playbooks/invoice-generator"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Professional Invoice Generator</p>
          <p className="text-sm text-muted-foreground">
            Steps 1–3. Branded PDF invoices from a single prompt — multi-currency, correct tax,
            sequential numbering.
          </p>
        </Link>
        <Link
          href="/playbooks/invoice-automation"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Invoice Processing Automation</p>
          <p className="text-sm text-muted-foreground">
            Steps 4–6. End-to-end send, remind, reconcile, and sync — the full lifecycle
            after the PDF exists.
          </p>
        </Link>
        <Link
          href="/playbooks/invoice-organizer"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Invoice Organizer &amp; Tracker</p>
          <p className="text-sm text-muted-foreground">
            Step 7. Clean up inbound vendor invoices — consistent naming, categorization,
            audit-ready archives.
          </p>
        </Link>
      </div>

      <p>
        Start with step 1 today. You&apos;ll generate your first AI invoice in under ten minutes —
        and the second one in under ten seconds.
      </p>
    </BlogPostLayout>
  );
}
