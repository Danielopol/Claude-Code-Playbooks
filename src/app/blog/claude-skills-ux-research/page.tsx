import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for UX Researchers: Synthesize Interviews into Insights | Claude Code Playbooks Blog',
  description: "Four Claude Skills that cut the most time-consuming part of UX work down to minutes — call transcript synthesis, mixed-methods thematic analysis, journey mapping workshops, and hypothesis-driven proto-personas.",
  alternates: { canonical: '/blog/claude-skills-ux-research' },
  openGraph: {
    title: 'Claude Skills for UX Researchers: Synthesize Interviews into Insights',
    description: "Four Claude Skills that cut the most time-consuming part of UX work down to minutes — call transcript synthesis, mixed-methods thematic analysis, journey mapping workshops, and hypothesis-driven proto-personas.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-ux-research',
    type: 'article',
    publishedTime: '2026-07-29T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for UX Researchers: Synthesize Interviews into Insights',
    description: "Four Claude Skills that cut the most time-consuming part of UX work down to minutes — call transcript synthesis, mixed-methods thematic analysis, journey mapping workshops, and hypothesis-driven proto-personas.",
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

export default function ClaudeSkillsUxResearchPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for UX Researchers: Synthesize Interviews into Insights"
      description="Four Claude Skills that cut the most time-consuming part of UX work down to minutes — call transcript synthesis, mixed-methods thematic analysis, journey mapping workshops, and hypothesis-driven proto-personas."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-07-29"
      tags={['claude skills ux research', 'ai user research synthesis', 'ai interview analysis', 'customer interview synthesis', 'ux research ai tools', 'journey mapping ai', 'proto persona ai', 'thematic analysis ai']}
      author="Claude Code Playbooks"
      slug="claude-skills-ux-research"
    >
      <p>
        Nobody goes into UX research because they love re-reading transcripts. The interview itself is the interesting part — the moment a participant says something that reframes the whole problem. Synthesis is the part that eats the calendar: twenty interviews, fifteen hours of recordings, a Miro board full of sticky notes, and the slow, unglamorous work of finding the patterns that were actually there all along but are buried under hours of conversational noise.
      </p>
      <p>
        These four Claude Skills target that synthesis bottleneck specifically — turning raw transcripts and survey data into validated findings, shared artifacts, and working personas, so the time UX researchers spend goes toward interpreting insight rather than excavating it.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Turn a Month of Call Transcripts into a Research Summary
      </h2>
      <p>
        Twenty customer calls in a month produces real signal — but the signal is trapped in twenty separate transcripts nobody has time to re-read side by side. The patterns are genuinely there: the assumption that kept coming up unprompted, the hypothesis three different customers independently contradicted, the feature request that's really the same underlying need phrased five different ways. Finding them manually means holding fifteen hours of conversation in working memory at once, which nobody can actually do reliably.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/customer-call-synthesis">Customer Call Synthesis</PlaybookLink>{' '}
        Skill compiles multiple call transcripts and produces cross-call pattern analysis directly: which assumptions the calls validated, which hypotheses they invalidated, and which feature requests recur most often, ranked by frequency rather than by whichever one was mentioned most recently and is therefore top of mind.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Synthesize these 20 customer call transcripts from this month — which assumptions did we validate, which did we invalidate, and what feature requests came up most often?"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">20 customer calls this month, insights trapped in individual transcripts nobody has time to re-read, and a strong sense that the patterns are in there somewhere</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Cross-call pattern analysis, top 5 validated assumptions, 3 invalidated hypotheses, recurring feature requests ranked by frequency, and a one-page research summary ready for the product review</p>
        </div>
      </div>

      <p>
        This is the right first move for a backlog of raw calls that hasn't been touched yet — it converts volume into a defensible summary before any deeper thematic work begins.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Feed it a batch of call transcripts — the more calls, the stronger the cross-call pattern signal.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Synthesize Across Interviews, Surveys, and Usability Tests Together
      </h2>
      <p>
        Real UX research is rarely a single method. Twenty interviews, three usability tests, and a 500-person survey all speak to the same underlying questions, but each lives in its own format — recordings, sticky notes, a spreadsheet of survey responses — and finding the patterns that hold across all three methods at once is the genuinely hard part of synthesis. A theme that only shows up in interviews might be noise; a theme that shows up in interviews, tests, and survey data simultaneously is something worth acting on.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/recipe-user-research-synthesis">User Research Synthesis</PlaybookLink>{' '}
        Skill works across all three input types at once, producing thematic analysis with supporting quotes and data, evidence-based personas built from what the research actually showed (not assumed), a usability issue severity matrix, and design recommendations prioritized by both impact and strength of evidence — plus a one-page summary written specifically for engineering to act on.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Synthesize our research from 15 interviews and 500 survey responses on the checkout experience"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">20 interviews, 3 usability tests, and a 500-person survey — each in its own format, and the cross-method patterns that would actually justify a design decision are invisible until someone spends days manually cross-referencing all three</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">7 themes with supporting quotes and data, 3 evidence-based personas with jobs-to-be-done, a usability issue severity matrix, prioritized design recommendations, and a one-page findings summary for engineering</p>
        </div>
      </div>

      <p>
        Use this once you have research from more than one method to reconcile — it's built specifically for cross-method triangulation, which is a different problem than summarizing a single batch of calls.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Feed it interview notes, survey exports, and usability test observations together for the strongest cross-method themes.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Turn Findings Into a Shared Cross-Functional Artifact
      </h2>
      <p>
        Research synthesis produces insight for the researcher; it doesn't automatically produce alignment for the team. A common failure mode: the research is done, the themes are clear, and the team still argues about where customers actually struggle most — because the findings live in a document only the researcher has fully internalized. A journey map turns that argument into something the whole team can look at and agree on together.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/customer-journey-mapping-workshop">Customer Journey Mapping Workshop</PlaybookLink>{' '}
        Skill runs a five-question adaptive workshop, built on NNGroup's journey mapping framework, that turns synthesized research into a shared artifact: a defined actor and scenario, four to six journey phases, per-phase actions, thoughts, emotions, and pain points, and five to seven opportunities ranked by impact with the supporting evidence attached to each one — not opinion.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Help me run a journey mapping workshop for new customer onboarding, using the themes from our recent research synthesis"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">The research is done and the themes are clear, but the team still argues about where customers actually struggle most, because the findings live in a doc only the researcher has fully read</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A defined actor and scenario, 6 journey phases with per-phase actions, thoughts, emotions, and pain points mapped, and 5-7 opportunities ranked by impact with evidence attached — a shared artifact the whole team aligns around</p>
        </div>
      </div>

      <p>
        This is the natural next step after either synthesis Skill above — it takes findings that exist as text and turns them into the visual, shared artifact that actually drives cross-functional alignment in a roadmap conversation.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Best run as a live workshop session with the cross-functional team present, not solo.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Align the Team on a Persona Before Deep Research Is Even Done
      </h2>
      <p>
        Not every research effort starts with a Miro board full of existing data — sometimes a team needs to align on a working customer profile before deeper research has happened yet, and the standard failure mode is a demographic persona that says nothing useful: "Manager Mike, 30–45, lives in San Francisco, has a dog." That tells you nothing about whether Mike would actually use the product.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/proto-persona">Proto-Persona</PlaybookLink>{' '}
        Skill builds a lightweight, hypothesis-driven persona instead — behavioral and quote-driven, walking through bio, quotes, pains, what the persona is trying to accomplish, goals, decision authority, and influencers, with explicit <code className="text-sm bg-[#0d1117] px-1 rounded">[ASSUMPTION—VALIDATE]</code> tags on everything not yet backed by actual research. It's good enough to align a team in a day, and honest enough that nobody mistakes it for validated research.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Create a proto-persona for our analytics tool's primary user — we have some team knowledge but haven't done formal research yet"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">"Manager Mike, 30-45, lives in SF, has a dog" — a demographic snapshot in the stakeholder deck that tells the team nothing about whether Mike would actually use the product</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Manager Mike as Director at a mid-sized SaaS company, with real quotes, a specific pain (10 hours a week in meetings), a concrete goal (deliver two weeks ahead), decision authority details, and assumption-validate tags flagging what still needs research</p>
        </div>
      </div>

      <p>
        Use this before research has happened, not instead of it — the whole point of the assumption tags is to make clear which parts of the persona are still hypotheses the team owes itself the discipline to go validate.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 60 minutes. Best run as a working session with whatever existing research, market signals, and team knowledge is available.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Matching the Skill to Where You Are in the Research Cycle
      </h2>
      <p>
        These four Skills serve different moments rather than one strict sequence:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">A backlog of raw call transcripts</span> — start with Customer Call Synthesis to extract validated and invalidated assumptions</li>
        <li><span className="text-foreground font-medium">Multiple research methods to reconcile</span> — use User Research Synthesis for cross-method thematic analysis and evidence-based personas</li>
        <li><span className="text-foreground font-medium">Findings that need cross-functional buy-in</span> — run the Journey Mapping Workshop to turn synthesis into a shared, visual artifact</li>
        <li><span className="text-foreground font-medium">No deep research yet, but a team that needs to align now</span> — build a Proto-Persona as an honest, hypothesis-tagged starting point</li>
      </ul>
      <p>
        The throughline across all four is the same: none of them replace the judgment a UX researcher brings to interpreting what customers actually said — they remove the hours of manual pattern-hunting that stand between raw research material and a decision the team can act on.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/customer-call-synthesis">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Customer Call Synthesis</p>
            <p className="text-sm text-muted-foreground">Cross-call pattern analysis, validated and invalidated assumptions, ranked feature requests</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/recipe-user-research-synthesis">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">User Research Synthesis</p>
            <p className="text-sm text-muted-foreground">Mixed-methods thematic analysis across interviews, surveys, and usability tests</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/customer-journey-mapping-workshop">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Customer Journey Mapping Workshop</p>
            <p className="text-sm text-muted-foreground">Turn synthesized findings into a shared journey map with evidence-ranked opportunities</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/proto-persona">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Proto-Persona</p>
            <p className="text-sm text-muted-foreground">Hypothesis-driven persona with assumption-validate tags, built before deep research is done</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
