import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateDisclosure, AffiliateLink } from '@/components/AffiliateLink';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Private Equity Due Diligence with AI: What to Automate and What to Leave Alone | Claude Code Playbooks Blog',
  description: "Where AI earns its place in PE due diligence (extraction, tracking, benchmarking, meeting prep) and where it doesn't (judging management, legal conclusions, QoE sign-off, anything it hasn't seen), with a findings format that makes every claim checkable.",
  alternates: { canonical: '/blog/private-equity-due-diligence-ai' },
  openGraph: {
    title: 'Private Equity Due Diligence with AI: What to Automate and What to Leave Alone',
    description: "Where AI earns its place in PE due diligence (extraction, tracking, benchmarking, meeting prep) and where it doesn't (judging management, legal conclusions, QoE sign-off, anything it hasn't seen), with a findings format that makes every claim checkable.",
    url: 'https://www.claudecodehq.com/blog/private-equity-due-diligence-ai',
    type: 'article',
    publishedTime: '2026-10-27T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Equity Due Diligence with AI: What to Automate and What to Leave Alone',
    description: "Where AI earns its place in PE due diligence (extraction, tracking, benchmarking, meeting prep) and where it doesn't (judging management, legal conclusions, QoE sign-off, anything it hasn't seen), with a findings format that makes every claim checkable.",
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

export default function PrivateEquityDueDiligenceAiPage() {
  return (
    <BlogPostLayout
      title="Private Equity Due Diligence with AI: What to Automate and What to Leave Alone"
      description="Where AI earns its place in PE due diligence (extraction, tracking, benchmarking, meeting prep) and where it doesn't (judging management, legal conclusions, QoE sign-off, anything it hasn't seen), with a findings format that makes every claim checkable."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-10-27"
      tags={['ai due diligence', 'pe due diligence automation', 'ai deal diligence checklist', 'data room ai review', 'private equity ai', 'due diligence claude', 'pe diligence workflow']}
      author="Claude Code Playbooks"
      slug="private-equity-due-diligence-ai"
    >
      <AffiliateDisclosure className="mb-6" />
      <p>
        Due diligence is where AI looks most useful and where its failure costs the most. A data room has thousands of pages, a tight clock and a team that is tired by the third week, which is a very good description of the work an AI model is fast at. It is also the one stage of a deal where a missed clause or a wrong number is not caught by anything downstream. The closing documents are signed, and the money has moved.
      </p>
      <p>
        So the useful question isn&apos;t whether to use AI in diligence. It is where it shortens the work without adding risk, and where the answer is to leave it alone. This guide draws that line, and then shows the setup that makes the automated half checkable.
      </p>

      <h2 className={H2}>The Line</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={TH}>Automate</th>
              <th className={TH}>Leave alone</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr><td className={TD}>Extracting terms, dates and figures from documents</td><td className={TD}>Concluding what a clause legally means</td></tr>
            <tr><td className={TD}>Tracking requests, responses and open items</td><td className={TD}>Judging the management team</td></tr>
            <tr><td className={TD}>Building the first draft of the QoE bridge</td><td className={TD}>Signing off adjustments</td></tr>
            <tr><td className={TD}>Benchmarking against public peers</td><td className={TD}>Setting the price or the recommendation</td></tr>
            <tr><td className={TD}>Preparing question lists and meeting briefs</td><td className={TD}>Running the meeting or the reference calls</td></tr>
            <tr><td className={TD}>Cross-checking documents against each other</td><td className={TD}>Deciding something is fine because nothing was found</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The pattern: automate work where output can be checked against a source in seconds, and leave alone work where being wrong is both costly and hard to detect. The rest of the guide gives the reason for each item on the right.
      </p>

      <h2 className={H2}>What to Leave Alone, and Why</h2>
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Legal conclusions</h3>
      <p>
        Claude is good at finding the change-of-control provision on page 40 of a customer contract and quoting it. It shouldn&apos;t be the one saying whether that provision is enforceable, whether a waiver is needed, or how it interacts with governing law. Use it to surface and rank clauses for counsel, who decide what they mean. Every legal finding should end with a name, not a model.
      </p>
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Judging people</h3>
      <p>
        A good deal team forms its view of management from how they answer, what they volunteer, who defers to whom and what they do when pushed. A model can prepare sharper questions. It can&apos;t sit in the room. Reference calls are the same: the value is the tone and the hesitation, which don&apos;t survive a transcript.
      </p>
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. QoE sign-off</h3>
      <p>
        A draft bridge from reported to adjusted EBITDA is excellent AI work: pull each proposed addback, link it to the supporting document, and flag the ones without support. Deciding that an addback is truly non-recurring is a judgment the accounting advisers own, and it often decides the price. Draft with AI, sign with people.
      </p>
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Conclusions from absence</h3>
      <p>
        This one is the most dangerous. If Claude reviews 400 documents and reports no issues, that means it found no issues in the documents it read, in the form it could read them. A scanned PDF with bad OCR, a file that was truncated, an attachment that never made it into the data room: each is a silent gap. &quot;No findings&quot; must always come with a coverage statement, as described below.
      </p>
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Price and recommendation</h3>
      <p>
        The IC recommendation and the bid are the deal team&apos;s to own. AI can assemble the memo, run the sensitivities and argue the bear case. The call is not delegable, and the people who sign it need to understand every number in it.
      </p>
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Where the data goes</h3>
      <p>
        Data room contents are covered by NDAs and the seller&apos;s rules. Many processes restrict which tools may touch the material, and some prohibit external AI services altogether. Check the data room terms, the NDA and your own firm&apos;s policy before any document reaches a model. If the answer is no, the playbooks below still help with structure and preparation using non-confidential inputs.
      </p>

      <h2 className={H2}>What to Automate</h2>
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">The checklist and request tracker</h3>
      <p>
        Start with the{' '}
        <PlaybookLink href="/playbooks/pe-dd-checklist">Due Diligence Checklist Generator</PlaybookLink>, which produces workstream checklists tailored to the sector, with priorities, status tracking and a red-flag escalation framework. Keep it as a living file that Claude updates as documents arrive and requests are answered, so the open-items list is always current.
      </p>
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Document extraction, with a findings format</h3>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/due-diligence-automator">Due Diligence Automator</PlaybookLink>{' '}
        processes data room documents and produces structured findings. Whatever tool you use, require every finding to have the same shape, so it can be checked:
      </p>
      <CodeBlock>{`{
  "finding": "Customer may terminate on change of control",
  "document": "MSA-Acme-2023.pdf",
  "location": "Section 14.2, p. 31",
  "quote": "exact text copied from the document",
  "severity": "high | medium | low",
  "confidence": "extracted | inferred",
  "needs": "counsel review"
}`}</CodeBlock>
      <p>
        The <Code>quote</Code> and <Code>location</Code> fields turn each finding into something a reviewer can verify in a few seconds. You can also check the quotes with code, since a quote that doesn&apos;t appear in the extracted text of its document is an invention. We show the exact-match check in the{' '}
        <PlaybookLink href="/blog/earnings-season-playbook-ai">earnings season</PlaybookLink> guide; the same idea applies here. The <Code>confidence</Code> field separates what the document says from what Claude infers, and the <Code>needs</Code> field routes legal and accounting questions to the right adviser.
      </p>
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">A coverage log, so silence means something</h3>
      <Prompt>
        After processing the data room, write coverage.md. List every file with its page count, the number of pages you extracted text from, and any file that is scanned, password-protected, truncated or failed to parse. List the checklist items for which no document was found. Don&apos;t say a workstream is clean; say what was reviewed and what was not.
      </Prompt>
      <p>
        This is the control that makes &quot;no findings&quot; mean something. A reviewer who sees that 38 of 400 files could not be read knows exactly where a person has to look.
      </p>
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Meeting prep</h3>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/pe-dd-meeting-prep">Diligence Meeting Prep</PlaybookLink>{' '}
        playbook turns the findings and the checklist into a prioritized question list organized by topic, relevant benchmarks, red flags to probe and a one-page brief. This is AI at its best in diligence: the preparation is thorough, and the conversation stays human.
      </p>

      <h2 className={H2}>Benchmarking Against the Public Market</h2>
      <p>
        A private target&apos;s data room tells you about the target. It doesn&apos;t tell you whether management&apos;s claims fit the market, and that is where public data helps. If the CIM says the market grows 15% a year and the company will take share, public peers have said something about their own growth, margins and demand on their earnings calls.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-foreground"><AffiliateLink partner="fiscal-ai">Fiscal.ai</AffiliateLink></strong> gives Claude standardized peer financials and earnings call transcripts over MCP. Ask for what each public peer said about demand, pricing and competition in the last two calls, with verbatim quotes. See the{' '}
          <PlaybookLink href="/blog/fiscal-ai-mcp-earnings-note">MCP setup</PlaybookLink>.
        </li>
        <li>
          <strong className="text-foreground"><AffiliateLink partner="koyfin">Koyfin</AffiliateLink></strong> is useful for screening the peer set and checking where they trade. Its fundamentals can&apos;t be exported, so use it to choose peers and look at charts, and take the numbers from a source Claude can read. Our{' '}
          <PlaybookLink href="/blog/ai-comps-analysis-data-sources">comps guide</PlaybookLink> covers the split.
        </li>
      </ul>
      <p>
        To be clear about scope: neither tool helps with the target&apos;s own documents. They help you test the story around the target. For take-privates, where the target itself is public, the same tools cover much more of the work.
      </p>

      <h2 className={H2}>After Diligence: The Handoff</h2>
      <p>
        Clean diligence output carries straight into the next stages. The{' '}
        <PlaybookLink href="/playbooks/pe-ic-memo">IC Memo</PlaybookLink> takes the findings and risks, the{' '}
        <PlaybookLink href="/playbooks/pe-returns-analysis">Returns Analysis</PlaybookLink> turns the diligence-adjusted numbers into IRR and MOIC sensitivities, and after close the{' '}
        <PlaybookLink href="/playbooks/pe-value-creation-plan">Value Creation Plan</PlaybookLink> builds the EBITDA bridge and the 100-day plan from the same findings. The{' '}
        <PlaybookLink href="/playbooks/pe-ai-readiness">Portfolio AI Readiness Assessment</PlaybookLink> then scans the holdings for where automation could move EBITDA, which is the same kind of question diligence should have started asking. For the wider toolkit, see{' '}
        <PlaybookLink href="/blog/ai-private-equity-investment-banking">AI for private equity and investment banking</PlaybookLink>.
      </p>

      <h2 className={H2}>A Working Rule</h2>
      <p>
        Before you give AI a diligence task, ask two questions. Can I check the output against a source in under a minute? If I&apos;m wrong, will I find out before the money moves? If both answers are yes, automate it. If either is no, keep a person on it, and use AI only to prepare.
      </p>
      <p className="text-sm text-muted-foreground">
        This article is for education and isn&apos;t legal, accounting or investment advice. Data room terms, NDAs and your firm&apos;s policies govern what material may be used with any AI service. Confirm them before you upload anything. Vendor features are as of October 2026.
      </p>
    </BlogPostLayout>
  );
}
