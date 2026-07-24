import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Project Managers: Plan Sprints and Track Risk with AI | Claude Code Playbooks Blog',
  description: "Four Claude Skills for the recurring pain points in project management — full project bootstrapping, epic-to-story breakdown, prioritization framework selection, and scored risk mitigation planning.",
  alternates: { canonical: '/blog/claude-skills-project-managers' },
  openGraph: {
    title: 'Claude Skills for Project Managers: Plan Sprints and Track Risk with AI',
    description: "Four Claude Skills for the recurring pain points in project management — full project bootstrapping, epic-to-story breakdown, prioritization framework selection, and scored risk mitigation planning.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-project-managers',
    type: 'article',
    publishedTime: '2026-07-24T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Project Managers: Plan Sprints and Track Risk with AI',
    description: "Four Claude Skills for the recurring pain points in project management — full project bootstrapping, epic-to-story breakdown, prioritization framework selection, and scored risk mitigation planning.",
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

export default function ClaudeSkillsProjectManagersPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Project Managers: Plan Sprints and Track Risk with AI"
      description="Four Claude Skills for the recurring pain points in project management — full project bootstrapping, epic-to-story breakdown, prioritization framework selection, and scored risk mitigation planning."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-07-24"
      tags={['claude skills project management', 'ai sprint planning', 'ai project manager', 'epic breakdown ai', 'prioritization framework ai', 'project risk assessment', 'agile ai tools', 'sprint planning ai']}
      author="Claude Code Playbooks"
      slug="claude-skills-project-managers"
    >
      <p>
        Project managers sit at a coordination bottleneck by design — every team's plan, priority call, and risk assessment eventually routes through them, and most of that routing follows the same recurring shape every single project. Set up the workspace. Break the epic down into stories that actually fit a sprint. Decide what to prioritize without a framework fight. Track the risks that everyone agrees matter and nobody has time to keep current.
      </p>
      <p>
        None of these problems are unique to one project — they recur identically on project #2 and project #20. These four Claude Skills target exactly that repetition, each addressing a distinct stage of the planning cycle that PMs re-run constantly.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Bootstrap a New Project in Minutes, Not 30
      </h2>
      <p>
        Every new project starts with the same setup dance: create the folder structure, set up a tracking doc, write the README, configure whatever tooling the team uses. By the twentieth project, most PMs realize they've repeated this ritual hundreds of times and it's never quite consistent — one project has a resource catalog, another doesn't; one has a proper stakeholder communication template, another gets improvised mid-meeting.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/project-management-bootstrapper">Project Management Bootstrapper</PlaybookLink>{' '}
        Skill sets up the complete system in one pass: folder hierarchy, a README with project overview, a TODO tracking system, a resource catalog, a meeting notes template, CLAUDE.md configuration for AI-assisted workflows, and stakeholder communication templates. It explores whatever already exists first and never overwrites — it only creates what's actually missing.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Bootstrap a new client project with full PM setup — folder structure, README, TODO tracking, resource catalog, and stakeholder communication templates"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">30 minutes of creating folders, setting up tracking docs, and writing a README from scratch for every new project — never quite consistent with the last one</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Complete project structure generated in one pass: folder hierarchy, README, TODO tracking, resource catalog, meeting notes template, and stakeholder communication templates — consistent every time</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Run it at the start of every new project or client engagement for consistent structure from day one.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Split Epics Into Stories That Actually Fit a Sprint
      </h2>
      <p>
        "Manage user profiles," estimated at three weeks, is the kind of epic that turns backlog refinement into an argument — split by screen? By technical layer? By user type? Most teams pick one arbitrarily and end up with stories that are either too horizontal (a "backend" story and a "frontend" story that both block on each other) or too arbitrary to estimate confidently.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/epic-breakdown-advisor">Epic Breakdown Advisor</PlaybookLink>{' '}
        Skill applies Richard Lawrence's Humanizing Work methodology systematically: an INVEST validation check first, then nine splitting patterns applied in a defined sequence — starting with workflow-based vertical slices rather than technical layers — followed by an evaluation pass that flags low-value work worth cutting entirely rather than building. The output is vertical slices that each deliver real end-to-end value, not horizontal slices that only make sense once every layer is done.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Help me split this onboarding epic — it's estimated at 12 days and we need to fit it into a sprint"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">An 8-day monster epic and a team arguing about whether to split it by screen, by technical layer, or by user type — with no systematic way to decide</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">INVEST check applied, a workflow-based vertical slicing pattern selected, each story covering a full flow with increasing sophistication, low-usage steps flagged for deprioritization, and four resulting stories sized at 2-3 days each</p>
        </div>
      </div>

      <p>
        This is a systematic, flowchart-driven process rather than arbitrary slicing — the same epic run through the Skill twice produces the same reasoning, which is what makes it useful for coaching other PMs and scrum masters on the same method.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Best used during backlog refinement, before an epic gets committed to a sprint as-is.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Stop Forcing the Wrong Prioritization Framework
      </h2>
      <p>
        A team adopts RICE because it's the framework everyone's heard of, and three months later they're spending 30 minutes per ticket arguing about Reach numbers nobody can actually measure. RICE isn't a bad framework — it's the wrong one for a team that's pre-product-market-fit and has no usage data yet. Kano makes sense for strategic bets. Buy-a-Feature works when stakeholders are badly misaligned. There's no single best framework, only the wrong one for a given situation.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/prioritization-advisor">Prioritization Framework Advisor</PlaybookLink>{' '}
        Skill asks four adaptive questions — product stage, team context, decision need, and data availability — and recommends from RICE, ICE, Value/Effort, Weighted Scoring, Kano, Opportunity Scoring, Buy-a-Feature, MoSCoW, Cost of Delay, Impact Mapping, or Story Mapping. It outputs implementation steps, example scoring, an alternative framework for hedging, and the specific pitfalls of the chosen approach.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "We have 100+ backlog items, no usage data yet, and we're pre-product-market-fit — what prioritization framework should we use?"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">The team adopted RICE last quarter and now spends 30 minutes per ticket arguing about Reach numbers nobody can actually measure — the framework is fine, it's just wrong for where the product is</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Recommendation of ICE or Value/Effort instead of RICE — speed over rigor given the lack of Reach data — with a 4-step implementation guide, an alternative framework, common pitfalls, and reassessment triggers for when the stage changes</p>
        </div>
      </div>

      <p>
        The reassessment triggers are the detail worth calling out — the Skill tells you when your stage or data situation will have changed enough to warrant switching frameworks again, so you're not stuck with the same choice forever by default.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 30 minutes for the full framework selection and implementation walkthrough.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Turn a Forgotten Risk Register Into an Actual Mitigation Plan
      </h2>
      <p>
        Every project has a risk register, and most of them are theater — a document created once during kickoff, referenced maybe once more at a status meeting, and then forgotten until a risk that was "on the register" actually happens and everyone realizes nobody was tracking it. A risk register that sits in a drawer doesn't prevent anything; only a structured assessment with actual ownership does.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/recipe-risk-assessment">Risk Assessment & Mitigation Planner</PlaybookLink>{' '}
        Skill systematically identifies risks across the relevant dimensions of a project — regulatory, operational, financial, strategic — scores each one on a probability/impact matrix, and produces a heat map along with detailed mitigation plans for the top risks, each with a named owner. It also sets a residual risk score after mitigation and a recurring review schedule, so the register doesn't just get created once and forgotten again.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Assess risks for our international expansion into 3 new markets — score by probability and impact, and assign owners and mitigation plans for the top risks"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A risk register created once at kickoff and never revisited — the biggest risks aren't on anyone's radar until they become the crisis of the week</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">20 risks identified across regulatory, operational, financial, and strategic categories, a probability/impact heat map, the top 5 risks with detailed mitigation plans and named owners, residual risk scoring, and a quarterly review schedule</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Run it at project kickoff and again at each major milestone or scope change.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Where These Fit Across the Project Lifecycle
      </h2>
      <p>
        These four Skills map onto four distinct moments that recur across every project a PM runs:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Project kickoff</span> — Bootstrapper sets up the workspace, Risk Assessment establishes the initial register</li>
        <li><span className="text-foreground font-medium">Backlog refinement</span> — Epic Breakdown Advisor turns oversized epics into sprint-sized vertical slices</li>
        <li><span className="text-foreground font-medium">Roadmap and backlog decisions</span> — Prioritization Advisor picks the right framework for the current stage rather than defaulting to whatever's fashionable</li>
        <li><span className="text-foreground font-medium">Ongoing project health</span> — Risk Assessment gets re-run at each milestone rather than sitting untouched after kickoff</li>
      </ul>
      <p>
        None of these replace the judgment a PM brings to a project — they remove the setup tax and the framework guesswork so that judgment gets applied to the decisions that actually need it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/project-management-bootstrapper">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Project Management Bootstrapper</p>
            <p className="text-sm text-muted-foreground">Complete project structure — folders, README, TODO tracking, resource catalog, templates</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/epic-breakdown-advisor">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Epic Breakdown Advisor</p>
            <p className="text-sm text-muted-foreground">INVEST validation and systematic vertical slicing for properly sized user stories</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/prioritization-advisor">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Prioritization Framework Advisor</p>
            <p className="text-sm text-muted-foreground">Recommends RICE, ICE, Kano, or the right framework for your actual stage and data</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/recipe-risk-assessment">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Risk Assessment & Mitigation Planner</p>
            <p className="text-sm text-muted-foreground">Probability/impact scoring, owned mitigation plans, and a recurring review schedule</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
