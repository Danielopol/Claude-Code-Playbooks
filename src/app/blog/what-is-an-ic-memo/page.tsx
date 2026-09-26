import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

const TITLE = 'What Is an IC Memo? Template, Example, and a Claude Skill to Draft One';
const DESCRIPTION =
  'An IC memo (investment committee memo) is the document a deal team writes to get approval for an investment. Here is what goes in one, a section-by-section template, a short illustrative example, and how to draft one with Claude.';

export const metadata: Metadata = {
  title: `${TITLE} | Claude Code Playbooks Blog`,
  description: DESCRIPTION,
  alternates: { canonical: '/blog/what-is-an-ic-memo' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.claudecodehq.com/blog/what-is-an-ic-memo',
    type: 'article',
    publishedTime: '2026-09-26',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'What an investment committee memo is, a section-by-section template, an example, and how to draft one with Claude.',
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

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
      {children}
    </h2>
  );
}

const SECTIONS = [
  { name: 'Executive Summary', len: '1 page', content: 'Deal rationale, key terms, headline returns, top three risks, the recommendation' },
  { name: 'Company Overview', len: '1–2 pages', content: 'What the business does, customers, go-to-market, competitive position, management team' },
  { name: 'Industry & Market', len: '1 page', content: 'Market size, competitive landscape, trends, regulation' },
  { name: 'Financial Analysis', len: '2–3 pages', content: 'Historical performance, quality-of-earnings adjustments, working capital, capex' },
  { name: 'Investment Thesis', len: '1 page', content: 'Three to five pillars, value creation levers, 100-day priorities' },
  { name: 'Deal Terms & Structure', len: '1 page', content: 'Enterprise value, multiples, sources and uses, capital structure, key legal terms' },
  { name: 'Returns Analysis', len: '1 page', content: 'Base, upside, and downside IRR and MOIC with sensitivity tables' },
  { name: 'Risk Factors', len: '1 page', content: 'Risks ranked by severity, each with a mitigant' },
  { name: 'Recommendation', len: '½ page', content: 'Proceed, pass, or proceed with conditions' },
];

export default function WhatIsAnIcMemoPage() {
  return (
    <BlogPostLayout
      title={TITLE}
      description={DESCRIPTION}
      category="guide"
      difficulty="intermediate"
      readingTime="8 min read"
      createdAt="2026-09-26"
      tags={['ic memo', 'what is an ic memo', 'ic memo template', 'ic memo example', 'investment committee memo', 'private equity', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="what-is-an-ic-memo"
    >
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
        <p className="text-sm font-semibold text-foreground mb-2">Definition</p>
        <p className="text-sm">
          An <strong className="text-foreground">IC memo</strong> (investment committee memo) is
          the written case a deal team presents to its firm&apos;s investment committee to get
          approval for an investment. It sets out what the company is, why it&apos;s a good
          investment, what the firm would pay and earn, what could go wrong, and a clear
          recommendation. Private equity, venture capital, credit, and real estate firms all use
          them, usually at more than one stage of a deal.
        </p>
      </div>

      <H2>When an IC Memo Is Written</H2>
      <p>
        Most firms take a deal to committee more than once. A short preliminary memo asks for
        permission (and budget) to spend on diligence. A final memo, after diligence, asks for
        approval to sign at specific terms. Some firms add a memo before submitting a
        non-binding offer. Each version builds on the last, so the structure stays the same and
        the evidence gets deeper.
      </p>

      <H2>IC Memo Template: Section by Section</H2>
      <p>
        Formats vary by firm, but a private equity IC memo usually runs 10–15 pages with these
        sections:
      </p>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 my-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-muted-foreground">
              <th className="pb-2 pr-4 font-medium">Section</th>
              <th className="pb-2 pr-4 font-medium">Length</th>
              <th className="pb-2 font-medium">What goes in it</th>
            </tr>
          </thead>
          <tbody>
            {SECTIONS.map((s) => (
              <tr key={s.name} className="border-t border-[#30363d] align-top">
                <td className="py-2 pr-4 text-foreground whitespace-nowrap">{s.name}</td>
                <td className="py-2 pr-4 whitespace-nowrap">{s.len}</td>
                <td className="py-2">{s.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The executive summary does most of the work. Committee members often read it first and
        decide how hard to push on everything else, so it should stand on its own: the deal, the
        price, the returns, the risks, and the ask.
      </p>

      <H2>IC Memo Example (Illustrative)</H2>
      <p>
        Here is what a strong executive summary looks like. The company and numbers are invented
        for illustration.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <pre className="text-sm font-mono text-[#e6edf3] whitespace-pre-wrap leading-relaxed">{`EXECUTIVE SUMMARY — Project Harbor (Acme Field Services)

Recommendation: Approve final bid of $180M EV (9.0x LTM adj. EBITDA of $20M).

The business: Commercial HVAC maintenance across 4 US states. 70% of revenue
is recurring service contracts; top 10 customers are 18% of revenue.

Thesis:
1. Fragmented market with a proven add-on playbook (3 targets identified).
2. Pricing below regional peers on renewals; 3–5% uplift available.
3. Field-scheduling software cuts technician idle time (pilot underway).

Returns: Base 24% IRR / 2.8x MOIC over 5 years. Downside (no add-ons,
flat pricing) 13% / 1.8x.

Key risks: Technician retention (mitigant: retention pool, wage benchmarking);
customer concentration in one state (mitigant: add-on geography); QoE
adjustments of $1.4M still under review (mitigant: price adjustment mechanism).`}</pre>
      </div>
      <p>
        Notice what it does: the recommendation and price come first, the thesis is specific
        enough to be wrong, the downside case is stated plainly, and every risk has a mitigant.
      </p>

      <H2>How to Draft an IC Memo with Claude</H2>
      <p>
        The <PlaybookLink href="/playbooks/pe-ic-memo">IC Memo Template</PlaybookLink> skill
        (adapted from Anthropic&apos;s financial services plugins) drafts a structured memo from
        your diligence materials, financial analysis, and deal terms, following the section
        structure above. It asks for missing inputs instead of assuming deal terms or returns.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Write the final IC memo for the Acme Field Services acquisition. Diligence notes, the QoE summary, and the returns model are in this folder. Recommend proceeding at $180M EV and show base, upside, and downside cases. Rank the risks and give a mitigant for each.
        </p>
      </div>
      <p>
        For venture or public-market investments, the{' '}
        <PlaybookLink href="/playbooks/investment-memo">Investment Memo Writer</PlaybookLink>{' '}
        uses the same logic with a structure suited to those deals.
      </p>

      <H2>What Makes an IC Memo Credible</H2>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong className="text-foreground">Balance.</strong> Present the bear case honestly. Committee members will find the risks anyway; credibility matters more than persuasion.</li>
        <li><strong className="text-foreground">Tables that tie.</strong> EBITDA bridges, sources and uses, and returns math must reconcile. Check these by hand even when Claude drafts them.</li>
        <li><strong className="text-foreground">A thesis you can test.</strong> Each pillar should name what would prove it wrong.</li>
        <li><strong className="text-foreground">Your firm&apos;s format.</strong> If the firm has a house template, give it to Claude and have it follow that instead.</li>
      </ul>

      <H2>Common Questions</H2>
      <div className="space-y-4 my-4">
        <div>
          <p className="font-semibold text-foreground mb-1">What&apos;s the difference between an IC memo and a CIM?</p>
          <p className="text-sm">
            A CIM (confidential information memorandum) is written by the seller&apos;s banker to
            market the company to buyers. An IC memo is written by the buyer&apos;s deal team for
            its own committee, and includes the firm&apos;s price, returns, and risk view.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">How long should an IC memo be?</p>
          <p className="text-sm">
            A final private equity memo is typically 10–15 pages plus appendices. Preliminary
            memos are often 2–5 pages.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">Is an IC memo the same as an investment memo?</p>
          <p className="text-sm">
            &quot;Investment memo&quot; is the broader term. An IC memo is an investment memo
            written specifically for an investment committee&apos;s approval.
          </p>
        </div>
      </div>

      <p className="mt-6">
        For the rest of the deal workflow, from sourcing to value creation, see{' '}
        <Link href="/blog/ai-private-equity-investment-banking" className="text-[#22d3ee] hover:underline font-medium">
          AI for Private Equity and Investment Banking
        </Link>{' '}
        or browse the{' '}
        <Link href="/for/private-equity" className="text-[#22d3ee] hover:underline font-medium">
          Claude for Private Equity
        </Link>{' '}
        playbooks.
      </p>
    </BlogPostLayout>
  );
}
