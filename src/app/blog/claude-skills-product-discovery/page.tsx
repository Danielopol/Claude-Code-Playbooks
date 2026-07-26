import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Product Discovery: From User Research to Roadmap | Claude Code Playbooks Blog',
  description: "Four Claude Skills that run the full product discovery pipeline — interview prep matched to research goal, Jobs-to-be-Done need mapping, Opportunity Solution Tree experiment design, and an outcome-driven roadmap.",
  alternates: { canonical: '/blog/claude-skills-product-discovery' },
  openGraph: {
    title: 'Claude Skills for Product Discovery: From User Research to Roadmap',
    description: "Four Claude Skills that run the full product discovery pipeline — interview prep matched to research goal, Jobs-to-be-Done need mapping, Opportunity Solution Tree experiment design, and an outcome-driven roadmap.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-product-discovery',
    type: 'article',
    publishedTime: '2026-07-26T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Product Discovery: From User Research to Roadmap',
    description: "Four Claude Skills that run the full product discovery pipeline — interview prep matched to research goal, Jobs-to-be-Done need mapping, Opportunity Solution Tree experiment design, and an outcome-driven roadmap.",
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

export default function ClaudeSkillsProductDiscoveryPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Product Discovery: From User Research to Roadmap"
      description="Four Claude Skills that run the full product discovery pipeline — interview prep matched to research goal, Jobs-to-be-Done need mapping, Opportunity Solution Tree experiment design, and an outcome-driven roadmap."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-07-26"
      tags={['claude skills product discovery', 'ai product management', 'ai user research', 'jobs to be done ai', 'opportunity solution tree', 'ai roadmap planning', 'continuous discovery', 'product management ai tools']}
      author="Claude Code Playbooks"
      slug="claude-skills-product-discovery"
    >
      <p>
        Good product discovery has a well-documented shape — plan the research properly, understand what customers are actually trying to accomplish, connect that understanding to a business outcome worth pursuing, and turn the result into a roadmap that can survive contact with a skeptical stakeholder. The frameworks for each stage already exist and are well-established: the Mom Test for interviews, Clayton Christensen's Jobs-to-be-Done, Teresa Torres' Opportunity Solution Tree, outcome-driven roadmapping. The hard part was never knowing the frameworks existed — it was applying them correctly and consistently under a deadline.
      </p>
      <p>
        These four Claude Skills map directly onto that established methodology, one Skill per stage of the discovery-to-roadmap pipeline, each built on the named framework rather than a generic "do some research" prompt.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Plan Interviews That Produce Usable Insight
      </h2>
      <p>
        Two weeks until a deadline, five interviews scheduled, and about to ask "would you use this if we built it?" — a question that reliably produces enthusiastic nods and zero usable insight, because people are bad at predicting their own future behavior and polite about not wanting to disappoint an interviewer. Good discovery interviews aren't about a clever script; they're about asking only about past, specific behavior, and matching your methodology to what you're actually trying to learn.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/discovery-interview-prep">Discovery Interview Prep</PlaybookLink>{' '}
        Skill walks through four adaptive questions — research goal, target segment, constraints, and methodology — and produces a tailored interview plan: opening, core, and closing questions, the specific biases to guard against for that research goal, success criteria for the session, and a recruiting plan. It matches the actual methodology (Mom Test, JTBD-style, switch interviews, journey mapping) to your situation rather than handing you a generic script.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "I need to interview 5 enterprise customers about why they churned in the last 90 days"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A two-week deadline, five interviews on the calendar, and a script full of hypothetical questions that will produce polite agreement instead of usable insight</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A full interview guide matched to a churn-investigation methodology, five core questions, five specific biases to avoid, five success criteria for the session, and a recruiting plan for the right segment</p>
        </div>
      </div>

      <p>
        This is a strategic prep process, not a script generator — the output changes meaningfully depending on whether you're investigating churn, validating a new problem hypothesis, or exploring competitive switching.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Run it before recruiting starts so the interview guide shapes who you recruit, not the other way around.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Map What Customers Are Actually Hiring Your Product to Do
      </h2>
      <p>
        Ask customers what they want and they'll hand you a feature list — more filters, a dashboard, an export button. Build exactly what they asked for and you often end up with a Slack clone or an email filter that nobody actually loves, because the feature list was never the real need. Jobs-to-be-Done exists precisely to look past the feature request to the underlying job the customer is trying to get done.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/jobs-to-be-done">Jobs-to-be-Done</PlaybookLink>{' '}
        Skill structures that exploration across three layers, built on Christensen's JTBD theory and Osterwalder's Value Proposition Canvas: functional jobs (the practical task), social jobs (how the customer wants to be perceived while doing it), and emotional jobs (how they want to feel), alongside a ranked map of pains and gains. The output reframes existing features around real jobs instead of treating each feature request as its own isolated need.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Explore JTBD for our expense-tracking tool with freelance users"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A backlog of feature requests — more categories, a better export, a mobile app — with no framework connecting any of them to why the customer is actually using the product</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Functional jobs (track deductible expenses, file quarterly taxes), social jobs (look organized to their accountant), emotional jobs (feel confident, avoid audit anxiety), plus ranked pains and prioritized gains</p>
        </div>
      </div>

      <p>
        This pairs directly with the Discovery Interview Prep Skill above — interview transcripts are the raw material JTBD analysis works from, and the output here feeds straight into problem statements and epic framing.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Best run after a batch of interviews, using the transcripts as source material.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Connect a Business Outcome to a Cheap Experiment
      </h2>
      <p>
        A stakeholder wants feature X, the exec team wants feature Y, and the backlog already has feature Z — and none of them connect to a business outcome anyone can actually move. Teresa Torres' Opportunity Solution Tree forces the conversation upstream: what outcome are we actually driving, which customer problems matter most for that outcome, and what's the cheapest experiment that lets us learn before committing engineering time to building anything.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/opportunity-solution-tree">Opportunity Solution Tree</PlaybookLink>{' '}
        Skill runs the two-phase process directly: Phase 1 builds the tree itself — one desired outcome, three opportunities beneath it, three candidate solutions under each opportunity. Phase 2 scores each solution on feasibility, impact, and market fit, selects a proof-of-concept, and designs the specific experiment (A/B test, prototype, or concierge MVP) to validate it cheaply.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Build an Opportunity Solution Tree for increasing trial-to-paid conversion from 15% to 25%"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A vague OKR to "improve conversion," competing feature requests from three different stakeholders, and no structured way to connect any of them back to the actual outcome</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Three opportunities identified (no value shown in trial, unclear pricing, free plan good enough), three candidate solutions per opportunity, a feasibility/impact/market-fit scoring table, and a concrete A/B test plan for the chosen proof of concept</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 20 minutes. Works best when the JTBD output above feeds directly into the opportunities identified in Phase 1.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Turn Discovery Findings Into a Roadmap That Survives Challenge
      </h2>
      <p>
        A roadmap that's a list of features grouped by quarter is a wishlist with dates, not a roadmap. Engineering builds the features, and the OKRs don't move, because nothing on the list was ever connected to a hypothesis or a measurable outcome — it's just what seemed important when the roadmap was drafted. A real roadmap ties each epic to a hypothesis, an outcome, and a metric, and can explain to an executive why item X was prioritized over item Y.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/roadmap-planning">Roadmap Planning</PlaybookLink>{' '}
        Skill orchestrates that connection across five phases: gather inputs (OKRs, customer problems — exactly what the discovery Skills above produce), define epics with hypotheses and success metrics attached, prioritize with RICE scoring, sequence into a Now/Next/Later structure with dependencies mapped, and produce the stakeholder-ready communication for presenting it.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Plan our Q1-Q3 roadmap from 15 competing initiatives, using our OKRs and the customer problems we've identified through discovery"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A list of 15 features grouped loosely by quarter, no connection to a hypothesis or metric for any of them, and no good answer when an exec asks why item X beat item Y</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Inputs gathered from OKRs and customer problems, 10 epics each with a hypothesis and RICE score, the top 10 ranked, a Now/Next/Later sequence with dependencies mapped, and a 45-minute exec presentation ready to defend</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup spans 1–2 weeks as a full planning cycle. This is the culmination Skill — it's most powerful when fed directly by the discovery work from the three Skills above.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Full Discovery-to-Roadmap Pipeline
      </h2>
      <p>
        These four Skills are designed to run in sequence, each one's output becoming the next one's input:
      </p>
      <ol className="list-decimal list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Discovery Interview Prep</span> — plan interviews matched to what you actually need to learn</li>
        <li><span className="text-foreground font-medium">Jobs-to-be-Done</span> — turn interview transcripts into functional, social, and emotional job maps</li>
        <li><span className="text-foreground font-medium">Opportunity Solution Tree</span> — connect the jobs and pains identified to a business outcome and a cheap validating experiment</li>
        <li><span className="text-foreground font-medium">Roadmap Planning</span> — turn validated opportunities into an outcome-driven roadmap that can survive a stakeholder challenge</li>
      </ol>
      <p>
        You don't have to run the full pipeline every time — a team mid-cycle might jump straight to the OST if the customer problems are already well understood, or use JTBD on its own to reframe an existing feature backlog. But run end to end, these four Skills replace "we think we should build this" with a defensible chain of evidence from a real customer conversation to a specific line on the roadmap.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/discovery-interview-prep">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Discovery Interview Prep</p>
            <p className="text-sm text-muted-foreground">Interview plans matched to research goal, methodology, and bias guardrails</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/jobs-to-be-done">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Jobs-to-be-Done</p>
            <p className="text-sm text-muted-foreground">Functional, social, and emotional job mapping with ranked pains and gains</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/opportunity-solution-tree">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Opportunity Solution Tree</p>
            <p className="text-sm text-muted-foreground">Outcome → opportunities → solutions → scored proof-of-concept and experiment design</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/roadmap-planning">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Roadmap Planning</p>
            <p className="text-sm text-muted-foreground">Outcome-driven roadmap with hypotheses, RICE scores, and stakeholder-ready sequencing</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
