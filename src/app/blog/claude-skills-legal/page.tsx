import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Lawyers: Draft, Redline, and Research in a Fraction of the Time | Claude Code Playbooks Blog',
  description: "How attorneys and legal teams use four Claude Skills as a first-draft accelerator — contract analysis that surfaces risk before outside counsel sees it, systematic redlining against standard terms, severity-ranked risk memos for board reporting, and NDA generation in minutes instead of days. The attorney stays in control; the mechanical layer gets handled.",
  alternates: { canonical: '/blog/claude-skills-legal' },
  openGraph: {
    title: 'Claude Skills for Lawyers: Draft, Redline, and Research in a Fraction of the Time',
    description: "Four Claude Skills that handle the mechanical legal layer — contract review, redlining, risk assessment, NDA drafting — while the attorney makes the judgment calls.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-legal',
    type: 'article',
    publishedTime: '2026-06-10',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Lawyers: Draft, Redline, and Research in a Fraction of the Time',
    description: "AI for lawyers that keeps the attorney in control — contract analysis, systematic redlining, risk memos, and NDA generation with four Claude Skills.",
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

export default function ClaudeSkillsLegalPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Lawyers: Draft, Redline, and Research in a Fraction of the Time"
      description="How attorneys and legal teams use four Claude Skills as a first-draft accelerator — contract analysis that surfaces risk before outside counsel sees it, systematic redlining against standard terms, severity-ranked risk memos for board reporting, and NDA generation in minutes instead of days. The attorney stays in control; the mechanical layer gets handled."
      category="guide"
      difficulty="intermediate"
      readingTime="14 min read"
      createdAt="2026-06-10"
      tags={[
        'claude skills legal',
        'ai for lawyers',
        'ai legal drafting',
        'legal AI',
        'contract review AI',
        'legal risk assessment AI',
        'Claude Code',
      ]}
      author="Claude Code Playbooks"
      slug="claude-skills-legal"
    >
      <p className="text-lg">
        Legal work has two layers, and they require very different things. The judgment layer —
        advising on strategy, assessing litigation risk, negotiating with opposing counsel,
        deciding what a clause means in the context of a specific deal — requires training,
        experience, and professional accountability. No tool replaces that. The mechanical layer —
        reading a 40-page contract for unusual provisions, comparing a vendor agreement against
        standard terms clause by clause, generating a first draft of an NDA, producing a
        risk matrix from a set of identified issues — is systematic work that follows a
        consistent pattern and takes hours of attorney time that could be spent on the judgment layer.
      </p>
      <p>
        The legal profession&apos;s caution about AI tools is well-founded: hallucinated citations,
        confident-sounding errors, work product that looks right and isn&apos;t. The right frame
        for <strong className="text-foreground">Claude Skills</strong> in a legal context is not
        &quot;AI lawyer&quot; — it&apos;s <strong className="text-foreground">first-draft
        accelerator</strong>. The skill handles the mechanical pass: finding the unusual clauses,
        marking the deviations from standard terms, structuring the risk analysis, generating the
        first draft. The attorney reviews, corrects, and signs off. Every output requires legal
        judgment before it goes anywhere. The skills just mean that judgment starts from a
        structured, already-reviewed draft rather than a blank page or a raw document.
      </p>
      <p>
        This guide covers four skills for the highest-volume mechanical work in a legal practice:{' '}
        <strong className="text-foreground">contract analysis</strong> that surfaces risk in plain
        English,{' '}
        <strong className="text-foreground">systematic redlining</strong> against your standard
        terms,{' '}
        <strong className="text-foreground">structured risk assessment</strong> with
        severity-and-likelihood scoring, and{' '}
        <strong className="text-foreground">NDA drafting</strong> that produces a clean first
        draft in minutes rather than days.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Mechanical Layer in Legal Work
      </h2>
      <p>
        A junior associate reviewing a vendor contract for the first time will read the document
        completely, flag provisions that look unusual, compare against a mental model of standard
        market terms, and produce a memo summarizing the issues. A partner will review that memo,
        apply judgment about which issues matter in the context of the specific deal, and advise
        the client. The associate&apos;s work is systematic and pattern-based — exactly the kind
        of work a well-configured skill handles well. The partner&apos;s work is contextual and
        judgment-based — exactly the kind of work that stays with the attorney.
      </p>
      <p>
        The same structure applies across most legal tasks. There is always a systematic first
        pass and a judgment-based review. Claude Skills compress the first pass without touching
        the review.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        1. Contract Analysis — Surface the Risk Before Outside Counsel Sees It
      </h2>
      <p>
        A 40-page vendor contract lands on a founder&apos;s desk. Their options are unattractive:
        sign without reading (fast, risky), send it to outside counsel (slow, expensive), or read
        it themselves and hope they catch the unlimited liability clause buried in Section 12.3
        of the schedules. None of those options produces a good outcome reliably. The founder
        needs a structured first pass that identifies the high-risk provisions, explains them in
        plain English, and tells them what to push back on before they decide whether to engage
        counsel for a full review.
      </p>
      <p>
        For in-house legal teams, the same dynamic plays out at scale: hundreds of vendor
        agreements coming through procurement, each one needing a first-pass review before the
        attorney can decide whether it warrants deeper attention. A skill that handles the
        first pass consistently — same framework, same rigor, every time — means the attorney
        sees a structured issue list rather than a raw document.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/legal-advisor">
          Legal Advisor
        </PlaybookLink>{' '}
        skill runs that structured first pass: high-risk clauses flagged with plain-English
        explanations, missing protections identified, and recommended negotiation points outlined —
        all organized by severity so the attorney can triage immediately. It covers the full
        range of common contract issues: liability exposure, IP assignment scope, auto-renewal
        traps, data handling obligations, indemnification asymmetry, and governing law
        implications.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Review this SaaS vendor agreement and flag anything concerning. I want: every
          high-risk clause identified with the section reference and a plain-English explanation
          of what it actually means in practice, any protections that are missing from a market-
          standard agreement of this type, and specific negotiation points for each issue ranked
          by how hard the vendor is likely to push back. Assume I&apos;ll use this as a
          briefing document before deciding whether to engage outside counsel for a full review.&quot;
        </p>
      </div>
      <p>
        &quot;Assume I&apos;ll use this as a briefing document before deciding whether to engage
        outside counsel&quot; is the framing that calibrates the output correctly. A review memo
        intended for attorney escalation should tell the attorney which issues warrant their
        attention and why — not serve as a substitute for their review. The skill produces the
        briefing; the attorney makes the escalation decision.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm">40-page vendor contract. Sign without reading, spend $5,000 on outside counsel, or read it yourself and miss the liability clause in the schedules.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm">Structured first pass: 5 high-risk clauses flagged with plain-English explanations, 3 missing protections, ranked negotiation points — attorney decides what warrants deeper attention.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Intermediate · Best for: in-house counsel, startup founders signing contracts, procurement managers, paralegals supporting contract review
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        2. Redlining — Systematic Clause-by-Clause Comparison Against Your Standard Terms
      </h2>
      <p>
        Contract redlining is one of the most time-consuming and cognitively taxing legal tasks:
        hold your standard terms in mind, read each clause of the counterparty&apos;s draft,
        identify every deviation, assess its significance, and propose alternative language —
        for a document that may be 60 pages long. Done well, it takes an associate several hours.
        Done under deadline pressure, it gets done in one pass with things missed. Done at scale
        across a procurement team handling hundreds of vendor agreements, consistency breaks down
        entirely: different reviewers catch different things, severity assessments vary, and
        alternative language isn&apos;t standardized.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/contract-redliner">
          Contract Redlining Assistant
        </PlaybookLink>{' '}
        skill runs a systematic clause-by-clause comparison of any incoming contract against your
        standard terms. Every deviation is flagged with a severity rating. For each issue, it
        proposes alternative language that moves the provision back toward your standard position.
        The output is a structured redline ready for attorney review and final judgment — not a
        finished redline, but a first pass that is consistent, complete, and already organized
        by priority.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Redline this vendor contract against our standard terms — both attached. For
          every clause that deviates from our template: flag it with a severity rating (high,
          medium, low), explain why it deviates and what the practical risk is, and propose
          alternative language that moves it back toward our standard position. Where a
          deviation is market-standard and low-risk, say so — I don&apos;t want to fight
          battles that aren&apos;t worth fighting. Output formatted as a structured issue list
          I can send to outside counsel with my own comments added.&quot;
        </p>
      </div>
      <p>
        &quot;Where a deviation is market-standard and low-risk, say so — I don&apos;t want
        to fight battles that aren&apos;t worth fighting&quot; is the instruction that makes
        the redline useful rather than exhaustive. A redline that flags every deviation with
        equal urgency puts the triage burden back on the attorney. A redline that distinguishes
        between the unlimited liability clause that requires a hard negotiation and the
        governing law clause that&apos;s standard for this contract type tells the attorney
        where to spend their negotiating capital.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 15 minutes · Difficulty: Advanced · Best for: in-house counsel doing first-pass reviews, procurement managers handling high-volume contracts, paralegals supporting contract review
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        3. Risk Assessment — A Severity-and-Likelihood Matrix the Board Can Read
      </h2>
      <p>
        Legal risk assessment without a consistent framework produces two failure modes.
        Over-escalation: everything is flagged as &quot;medium risk&quot; because the reviewer
        has no agreed definition of what &quot;high&quot; actually means, so counsel time goes
        to issues that don&apos;t warrant it. Under-escalation: a genuinely high-severity risk
        gets buried in a long list of medium items because the framework isn&apos;t calibrated,
        and nobody notices until something blows up. Both failures are expensive; the second
        is the one that creates liability.
      </p>
      <p>
        For GCs and legal ops teams reporting risk posture to the board, the additional problem
        is communication: a memo listing legal risks without quantifying severity and likelihood
        doesn&apos;t give the board what they need to make resource allocation decisions. They
        need a heat map, not a list.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/legal-risk-assessor">
          Legal Risk Assessor
        </PlaybookLink>{' '}
        skill applies a severity-by-likelihood framework to any legal risk scenario — EU market
        entry, a new employment classification, a data handling practice, a pending regulatory
        change — and produces a color-coded risk matrix with specific risks identified,
        mitigation options ranked by cost and effectiveness, and a recommendation on whether
        to engage outside counsel. The output is a structured memo that is consistent across
        matter types and readable by both legal and non-legal stakeholders.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Assess the legal risk of launching our SaaS product in the EU without a local
          entity. Use a severity × likelihood matrix. For each specific risk identified: rate
          severity and likelihood on a 1–5 scale, give it an overall color rating
          (Red/Orange/Yellow/Green), describe the specific regulatory exposure, list mitigation
          options in order from most to least effective, and estimate the cost range of each
          mitigation. End with a recommendation on whether this warrants engaging EU regulatory
          counsel before we proceed.&quot;
        </p>
      </div>
      <p>
        The &quot;estimate the cost range of each mitigation&quot; instruction is what makes
        this useful for board reporting. A risk memo that says &quot;engage local counsel&quot;
        as a mitigation without a cost estimate doesn&apos;t give the board the information
        they need to approve the budget. One that says &quot;engage EU regulatory counsel:
        estimated €15,000–€30,000 for initial compliance review and entity setup advice&quot;
        gives them a decision. The skill structures the analysis; the GC validates the
        numbers before it goes to the board.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Intermediate · Best for: in-house counsel, GCs reporting to the board, compliance teams, legal ops managers building consistent risk frameworks
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        4. NDA Drafting — A Clean First Draft in Minutes, Not Days
      </h2>
      <p>
        NDAs are the most frequently needed legal document in a business context and the most
        frequently delayed. A conversation that requires an NDA before it can begin often stalls
        for three to five business days while counsel drafts and the other party&apos;s counsel
        reviews. At the speed of modern business conversations, that delay can kill momentum —
        or push the counterparty toward sharing information without protection because the
        alternative is waiting another week. Neither outcome is good.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/nda-generator">
          NDA Agreement Generator
        </PlaybookLink>{' '}
        skill produces a professionally structured NDA first draft: defined scope of confidential
        information, mutual or unilateral structure depending on the situation, standard
        exclusions (publicly available information, independent development, required disclosure),
        duration, governing law, and signature blocks. The draft covers the provisions that
        experienced counsel would include for the deal type — investor conversations, contractor
        engagements, partnership discussions, M&amp;A exploration — so the attorney review
        focuses on customization and judgment rather than construction.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Generate a mutual NDA for sharing our product roadmap and technical architecture
          with a potential integration partner. The confidential information will include
          unreleased features, API specifications, and customer data handling practices.
          We want a 3-year term, standard exclusions, Delaware governing law, and a
          specific provision that any derivatives or improvements based on our confidential
          information remain our IP. Include a note for each non-standard provision explaining
          why it&apos;s there so our counsel can review the rationale.&quot;
        </p>
      </div>
      <p>
        &quot;Include a note for each non-standard provision explaining why it&apos;s there
        so our counsel can review the rationale&quot; is the instruction that makes the
        first-draft-to-attorney handoff clean. An attorney reviewing a generated NDA needs
        to understand the intent behind each provision — especially any non-standard ones —
        to judge whether the drafting achieves that intent. Annotated rationale means the
        review conversation is about whether the provision is right, not about deciphering
        why it was included.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm">Conversation requiring an NDA stalls for 3–5 days while counsel drafts. Counterparty loses momentum. Some information gets shared without protection because waiting isn&apos;t practical.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm">Professional first draft with annotated rationale in minutes. Attorney review focuses on customization. Turnaround: same day instead of next week.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Intermediate · Best for: startup founders, business development managers, in-house counsel moving fast on partnerships and vendor engagements
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        How the Four Skills Work Together
      </h2>
      <p>
        These skills cover the legal workflow from first contact with a document to structured
        output ready for attorney judgment:
      </p>
      <ol className="list-decimal list-inside space-y-3 my-4">
        <li>
          <strong className="text-foreground">Legal Advisor</strong> — first-pass review.
          Any incoming contract gets a structured issue list before the attorney decides whether
          it warrants deeper attention or outside counsel.
        </li>
        <li>
          <strong className="text-foreground">Contract Redlining Assistant</strong> — systematic
          comparison. When a contract does warrant a full redline, the clause-by-clause comparison
          against standard terms is already done with severity ratings and alternative language
          attached. Attorney review starts from a structured redline, not a blank document.
        </li>
        <li>
          <strong className="text-foreground">Legal Risk Assessor</strong> — risk memo.
          When a decision has legal risk implications — a new market, a new business model, a
          regulatory change — the severity-and-likelihood matrix is produced systematically and
          consistently, readable by both legal and business stakeholders.
        </li>
        <li>
          <strong className="text-foreground">NDA Generator</strong> — first-draft velocity.
          Any conversation that requires an NDA gets a professional first draft in minutes,
          with annotated rationale for attorney review, so deals don&apos;t stall waiting for
          documentation.
        </li>
      </ol>
      <p>
        None of these skills remove the attorney from the process. Every output requires legal
        review before it is used, sent, or relied upon. What they remove is the blank-page
        problem and the consistency problem — the attorney never starts from nothing, and the
        first pass follows the same framework every time.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Right Way to Use AI in Legal Work
      </h2>
      <p>
        The legal profession&apos;s caution about AI is correct in one specific sense: AI tools
        that hallucinate citations, mischaracterize case law, or produce confident-sounding legal
        analysis that is wrong create liability exposure. The skills described here avoid that
        failure mode by operating on document review and drafting — tasks where the output is
        verifiable against the source document — rather than legal research or citation-dependent
        analysis where hallucination risk is highest.
      </p>
      <p>
        The workflow that keeps the attorney in control:{' '}
        <strong className="text-foreground">skill produces a structured first pass →
        attorney reviews and corrects → attorney applies judgment → attorney signs off.</strong>{' '}
        That workflow is what a senior partner does with a junior associate&apos;s work product.
        The skill is the associate. The judgment is still yours.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/legal-advisor"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Legal Advisor</p>
          <p className="text-sm text-muted-foreground">First-pass contract review — high-risk clauses flagged in plain English, missing protections identified, negotiation points ranked by priority.</p>
        </Link>
        <Link
          href="/playbooks/contract-redliner"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Contract Redlining Assistant</p>
          <p className="text-sm text-muted-foreground">Clause-by-clause comparison against your standard terms — every deviation flagged with severity rating and alternative language proposed.</p>
        </Link>
        <Link
          href="/playbooks/legal-risk-assessor"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Legal Risk Assessor</p>
          <p className="text-sm text-muted-foreground">Severity × likelihood risk matrix with color-coded ratings, mitigation options ranked by cost and effectiveness, and outside counsel recommendation.</p>
        </Link>
        <Link
          href="/playbooks/nda-generator"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">NDA Agreement Generator</p>
          <p className="text-sm text-muted-foreground">Professional NDA first draft in minutes — defined scope, standard exclusions, governing law, with annotated rationale for attorney review.</p>
        </Link>
      </div>
      <p>
        The judgment layer in legal work is irreplaceable and yours. The mechanical layer
        doesn&apos;t have to cost as much of your time as it currently does. These skills
        handle the first pass. You handle everything that matters.
      </p>
    </BlogPostLayout>
  );
}
