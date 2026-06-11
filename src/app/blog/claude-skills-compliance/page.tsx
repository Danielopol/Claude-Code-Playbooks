import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Compliance Officers: Stay Audit-Ready with AI | Claude Code Playbooks Blog',
  description: "How compliance teams use four Claude Skills to stay perpetually audit-ready — cross-framework control mapping across SOC 2, ISO 27001, and GDPR; pre-launch privacy reviews that catch violations before legal sees them; line-by-line GDPR audits with article citations; and ISO 27001 gap analysis with a ready-to-file Statement of Applicability.",
  alternates: { canonical: '/blog/claude-skills-compliance' },
  openGraph: {
    title: 'Claude Skills for Compliance Officers: Stay Audit-Ready with AI',
    description: "How compliance teams use four Claude Skills to stay perpetually audit-ready — cross-framework control mapping across SOC 2, ISO 27001, and GDPR; pre-launch privacy reviews that catch violations before legal sees them; line-by-line GDPR audits with article citations; and ISO 27001 gap analysis with a ready-to-file Statement of Applicability.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-compliance',
    type: 'article',
    publishedTime: '2026-06-11T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Compliance Officers: Stay Audit-Ready with AI',
    description: "How compliance teams use four Claude Skills to stay perpetually audit-ready — SOC 2, GDPR, ISO 27001, and pre-launch privacy reviews.",
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

export default function ClaudeSkillsCompliancePage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Compliance Officers: Stay Audit-Ready with AI"
      description="How compliance teams use four Claude Skills to stay perpetually audit-ready — cross-framework control mapping across SOC 2, ISO 27001, and GDPR; pre-launch privacy reviews that catch violations before legal sees them; line-by-line GDPR audits with article citations; and ISO 27001 gap analysis with a ready-to-file Statement of Applicability."
      category="guide"
      difficulty="intermediate"
      readingTime="14 min read"
      createdAt="2026-06-11"
      tags={['claude skills compliance', 'ai compliance automation', 'ai audit readiness', 'compliance AI', 'SOC 2 AI', 'GDPR AI', 'ISO 27001 AI', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-compliance"
    >
      <p>
        Compliance teams live in a peculiar form of purgatory: perpetually preparing for audits that may never come while simultaneously triaging real risks that arrive without warning. The work is relentless, the frameworks multiply, and the penalty for a missed control or an undisclosed data-processing activity is measured in regulatory fines and enterprise contract losses.
      </p>
      <p className="mt-4">
        The deeper frustration is that most compliance work is not intellectually hard — it is mechanically exhausting. Mapping SOC 2 controls to ISO 27001 clauses requires careful reading and cross-referencing, not legal expertise. Reviewing a new feature for GDPR implications requires a checklist, not a law degree. What consumes compliance officers is volume, not complexity.
      </p>
      <p className="mt-4">
        Claude Skills changes that equation. A Skill is a persistent Claude configuration — system prompt, tools, context — that you install once and invoke instantly. The four Skills below handle the mechanical layer of compliance work: framework mapping, pre-launch privacy review, GDPR auditing, and ISO 27001 gap analysis. The compliance officer stays in control; the documentation burden gets handled.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why Compliance Teams Are Stuck in Spreadsheet Hell
      </h2>
      <p>
        The core problem is framework proliferation. SOC 2, ISO 27001, GDPR, CCPA, HIPAA, and PCI-DSS all address overlapping concerns — access control, data retention, incident response — using completely different language and structure. A compliance manager pursuing both SOC 2 and ISO 27001 is effectively maintaining two separate control inventories that say the same thing in different vocabularies.
      </p>
      <p className="mt-4">
        The result is a spreadsheet with 200 rows, half of which have no evidence attached, maintained by one person who also triages incoming data-processing agreements, reviews product launches, and handles data-subject requests. The 60-day audit countdown that SOC 2 readiness tools advertise sounds manageable until you realize the gap analysis hasn't been touched in six months.
      </p>
      <p className="mt-4">
        The Skills below do not replace the compliance officer's judgment — the officer still decides whether a control is met, whether a risk is acceptable, whether an exception is justified. What they replace is the reading, cross-referencing, template-filling, and first-pass documentation that consumes 70% of the working week.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Compliance Tracker — Cross-Framework Control Mapping in Minutes
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/compliance-tracker">Compliance Tracker</PlaybookLink> takes your control inventory and maps it simultaneously across SOC 2, ISO 27001, and GDPR — identifying overlaps, flagging gaps, and producing an audit-readiness dashboard with a clear path to completion.
      </p>
      <p className="mt-4">
        The canonical pain point it solves: you have a SOC 2 audit in 60 days and a spreadsheet with 200 controls, half without evidence attached, and every framework uses different language for the same requirements. The Skill reads across all three frameworks at once, collapses redundant controls into a unified inventory, and tells you what is covered, what is missing, and what evidence is needed.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Track our SOC 2 Type II and ISO 27001 readiness. We have 120 controls in the attached spreadsheet — show me which ones satisfy requirements in both frameworks, which are framework-specific, and what evidence is missing for each gap. Output a prioritized remediation list and an audit-readiness score.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Manually cross-referencing SOC 2 and ISO 27001 in parallel spreadsheets. Three weeks to produce a gap analysis. Audit is in 60 days and nothing has been updated since last quarter.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Unified control inventory with overlap mapping, 47 controls met and 18 gaps identified, evidence checklist per gap, audit-readiness score, and a prioritized 30-day remediation roadmap — produced in one session.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works best when you paste your existing control spreadsheet or describe your current framework scope directly in the conversation.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Compliance Review Checker — Privacy Sign-Off Before Legal Gets Involved
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/compliance-review-checker">Compliance Review Checker</PlaybookLink> reviews proposed product changes, new features, and data-collection decisions against GDPR, CCPA, and other applicable privacy regulations — before they reach the legal backlog.
      </p>
      <p className="mt-4">
        The problem it solves: your product team is shipping a new analytics feature that collects user behavior data, and your legal team has a three-week queue. You need to know now — does this require consent under GDPR? Does it trigger CCPA disclosure obligations? What changes are required before launch?
      </p>
      <p className="mt-4">
        The Skill maps applicable regulations to the proposed change, identifies consent and disclosure requirements, completes a Data Processing Agreement checklist, explains how to handle data-subject requests triggered by the new data, and produces a prioritized list of required changes before the feature ships.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Review this new user-behavior analytics feature for GDPR and CCPA compliance. The feature tracks click paths, session duration, and device fingerprint for logged-in users. We currently have a cookie consent banner but no explicit analytics opt-in. Identify all compliance gaps and tell me what must be fixed before we can launch in the EU and California.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Feature waits three weeks for legal review. Launch delayed. Product team frustrated. When the review finally arrives, it is a one-page memo with three bullet points and no remediation detail.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Applicable regulations mapped, consent gaps identified, DPA checklist complete, data-subject request handling guidance provided, and a launch-blocking vs. launch-advisory change list ready for the product team — same day.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for any proposed data-processing change — new features, third-party integrations, analytics tools, data retention policy changes.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: GDPR Compliance Advisor — Article-Level Audits with Remediation Lists
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/gdpr-compliance-advisor">GDPR Compliance Advisor</PlaybookLink> audits code, system architecture, and existing privacy policies for GDPR violations — citing specific articles, producing a prioritized remediation list, and drafting compliant replacements for policies and DPAs.
      </p>
      <p className="mt-4">
        The canonical scenario: your codebase logs IP addresses without a documented legal basis, your analytics fire before consent, and your privacy policy was copied from another startup and never touched. GDPR fines reach 4% of global revenue, and a single mishandled data-subject request can trigger a supervisory authority audit you are not ready for.
      </p>
      <p className="mt-4">
        The Skill reads your code or policy text and returns line-by-line findings with article citations — not vague "may violate GDPR" warnings, but "Article 6(1): no lawful basis documented for this processing activity" with a specific remediation step. It also drafts the updated privacy notice and DPA template so you are not starting from a blank page.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Audit this user-tracking module for GDPR compliance. The module logs user ID, IP address, session token, and page path on every request. We do not have explicit consent for analytics tracking, and our privacy policy does not mention session logging. Identify every violation with article references and draft a compliant privacy notice section covering this processing activity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">GDPR audit means hiring an external DPO consultant for €8,000, waiting six weeks for a report written in legal language that engineering cannot act on without another round of translation.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Line-by-line findings with article citations, a prioritized remediation list engineering can act on immediately, and a draft privacy notice ready for legal sign-off — produced in one session at no additional cost.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Handles code audits, privacy policy reviews, DPA drafting, data-flow analysis, and data-subject request procedure design.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: ISO 27001 Advisor — Gap Analysis and Statement of Applicability
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/iso-27001-advisor">ISO 27001 Advisor</PlaybookLink> runs gap analysis against the 2022 control set, writes security policies, builds a risk register, maps Annex A controls, produces the Statement of Applicability, and guides teams through the 2013-to-2022 transition.
      </p>
      <p className="mt-4">
        ISO 27001 certification is the security checkbox enterprise customers demand before signing six-figure contracts — but between the Statement of Applicability, risk treatment plan, Annex A control mapping, and the ongoing ISMS maintenance requirements, most teams do not know where they actually stand or how far they have to go.
      </p>
      <p className="mt-4">
        The Skill produces a clause-by-clause gap report against the 2022 standard, a complete SoA with justification for included and excluded controls, a risk register with treatment plan, and a prioritized certification roadmap — the exact deliverables an external auditor will ask to see, produced by the internal team in a fraction of the time.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Run an ISO 27001:2022 gap analysis for our SaaS company. We are a 40-person team, cloud-native on AWS, with SOC 2 Type II already in place. We have an access control policy, an incident response plan, and a vendor risk process but no formal ISMS documentation. Produce a gap report against the 2022 clauses and Annex A, a first-draft Statement of Applicability, and a 90-day certification roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">ISO 27001 gap assessment from a consultancy costs $15,000–$30,000 and takes 8–12 weeks. The deliverable is a slide deck that does not include the SoA, the risk register, or the policy drafts — those are a separate engagement.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Clause-and-Annex-A gap report, a complete Statement of Applicability with justifications, a risk register with treatment plan, and a 90-day certification roadmap — delivered in one session, ready for auditor review.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Covers the 2022 control set, handles the 2013-to-2022 transition, and works for both initial certification and ongoing ISMS maintenance.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Compliance System: From Reactive to Perpetually Audit-Ready
      </h2>
      <p>
        Individual Skills are useful. Used together as a system, they transform compliance from a quarterly scramble into a continuous process.
      </p>
      <p className="mt-4">
        The workflow looks like this: every new product feature passes through the Compliance Review Checker before it ships. Any feature touching EU user data gets a GDPR Compliance Advisor audit before code review. The Compliance Tracker runs monthly to update the control inventory and evidence status. The ISO 27001 Advisor handles the annual SoA refresh and generates updated policy documentation for any control that changed.
      </p>
      <p className="mt-4">
        The result is a compliance posture that auditors see immediately: a current control inventory, documented evidence, privacy-reviewed features, and an up-to-date SoA. Not a 60-day sprint before an audit — a continuous program that is always ready.
      </p>
      <p className="mt-4">
        This is what compliance officers mean when they talk about "operationalizing compliance." It has always been the goal. The obstacle has always been time. Claude Skills removes the time barrier without removing the officer's judgment from the decisions that require it.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        A Note on Compliance Judgment
      </h2>
      <p>
        These Skills produce first-pass analysis, gap identification, and draft documentation. They are not legal counsel, and they do not replace the compliance officer's responsibility to make final determinations about risk acceptance, control adequacy, and regulatory interpretation.
      </p>
      <p className="mt-4">
        What they do is eliminate the part of compliance work that requires no judgment at all: reading a 400-clause framework for the fifteenth time, filling in a control matrix from memory, cross-referencing overlapping requirements across frameworks, and drafting the tenth NDA clause of the week.
      </p>
      <p className="mt-4">
        The judgment layer — deciding whether a control is adequate for your specific risk profile, whether an exception is justified, whether a supervisory authority would accept your interpretation of a consent mechanism — that stays with the compliance officer. The mechanical layer gets handled.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Compliance Skills
      </h2>
      <p className="mb-6">
        Each Skill below is a one-time install. Open it, follow the setup steps, and it is available in Claude every time you need it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/compliance-tracker"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Compliance Tracker</p>
          <p className="text-sm text-muted-foreground">Cross-framework control mapping across SOC 2, ISO 27001, and GDPR with gap analysis and audit-readiness scoring.</p>
        </Link>
        <Link
          href="/playbooks/compliance-review-checker"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Compliance Review Checker</p>
          <p className="text-sm text-muted-foreground">Pre-launch privacy review against GDPR, CCPA, and DPA requirements — same-day sign-off without the legal queue.</p>
        </Link>
        <Link
          href="/playbooks/gdpr-compliance-advisor"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">GDPR Compliance Advisor</p>
          <p className="text-sm text-muted-foreground">Article-level audits with remediation lists, updated privacy notices, and DPA drafts — for code, systems, and existing policies.</p>
        </Link>
        <Link
          href="/playbooks/iso-27001-advisor"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">ISO 27001 Advisor</p>
          <p className="text-sm text-muted-foreground">Gap analysis, Statement of Applicability, risk register, and policy drafts — full certification-readiness deliverables for the 2022 standard.</p>
        </Link>
      </div>
    </BlogPostLayout>
  );
}
