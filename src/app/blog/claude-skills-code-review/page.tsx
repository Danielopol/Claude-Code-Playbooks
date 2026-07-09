import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Code Review: Catch Bugs Before They Ship | Claude Code Playbooks Blog',
  description: "Four Claude Skills for a real quality gate — structured senior-engineer PR review, multi-agent parallel security and performance auditing, behavioral coding guardrails, and an automated build-fix loop.",
  alternates: { canonical: '/blog/claude-skills-code-review' },
  openGraph: {
    title: 'Claude Skills for Code Review: Catch Bugs Before They Ship',
    description: "Four Claude Skills for a real quality gate — structured senior-engineer PR review, multi-agent parallel security and performance auditing, behavioral coding guardrails, and an automated build-fix loop.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-code-review',
    type: 'article',
    publishedTime: '2026-07-06T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Code Review: Catch Bugs Before They Ship',
    description: "Four Claude Skills for a real quality gate — structured senior-engineer PR review, multi-agent parallel security and performance auditing, behavioral coding guardrails, and an automated build-fix loop.",
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

export default function ClaudeSkillsCodeReviewPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Code Review: Catch Bugs Before They Ship"
      description="Four Claude Skills for a real quality gate — structured senior-engineer PR review, multi-agent parallel security and performance auditing, behavioral coding guardrails, and an automated build-fix loop."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-07-06"
      tags={['claude skills code review', 'ai code review', 'ai pull request review', 'automated pr review', 'multi-agent code review', 'ai security audit code', 'claude coding guardrails', 'build error fixing ai']}
      author="Claude Code Playbooks"
      slug="claude-skills-code-review"
    >
      <p>
        "LGTM" is the most common code review comment in the industry, and it's frequently a lie of omission. Not because reviewers are careless, but because thorough review is genuinely expensive — reading a 400-line diff carefully enough to catch a subtle race condition or a missing edge case takes real time that a busy senior engineer often doesn't have between meetings. So PRs sit for two days, then get a rubber stamp, and the bugs that a careful review would have caught ship to production instead.
      </p>
      <p>
        The fix isn't to review less carefully — it's to make thorough review cheap enough to happen every time. These four Claude Skills build a real quality gate around your code at different points in the pipeline: before you open the PR, during the review itself, as ongoing behavioral discipline while Claude writes code, and when the build itself is broken and needs systematic triage.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: A Structured Senior-Engineer First Pass
      </h2>
      <p>
        The instinct to ask a teammate "can you take a quick look before I open this PR" is a good one — a second pair of eyes catches things you're too close to see. The problem is availability: your best reviewer is in meetings, the PR queue is already backed up, and asking for an informal look feels like it doesn't count as "real" review time.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/pr-reviewer">PR Reviewer</PlaybookLink>{' '}
        Skill acts as a strict, precise senior engineer reviewing your diff before anyone else sees it. It structures feedback by risk level — correctness issues, security concerns, test coverage gaps, and maintainability suggestions — and gives you actionable fixes for each finding, not just a description of the problem. It's the first-pass review that catches the obvious issues so your human reviewers can spend their limited time on the judgment calls that actually need a person.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Review my PR before I ask the team — check correctness, security, test coverage, and maintainability, and give me actionable fixes"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">PR sits for two days waiting on a busy senior engineer, then gets "LGTM" on the complex parts and detailed nitpicks on the trivial parts — inconsistent depth, real issues slip through</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Structured review within minutes: 2 logic issues, 1 SQL injection risk, 3 untested edge cases, 4 maintainability suggestions — each with an actionable diff, before the PR even reaches your team</p>
        </div>
      </div>

      <p>
        This is the highest-leverage habit to build for solo developers and small teams without a dedicated senior reviewer — it gives you the equivalent of an experienced second opinion on every change, on demand.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Run it against any diff or open PR before requesting human review.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Specialized Agents Reviewing in Parallel
      </h2>
      <p>
        A single reviewer — human or AI — asked to check "everything" tends to focus on whatever catches their eye first and skim the rest. Someone tuned to catch typos misses the security hole. Someone focused on architecture misses the documentation gap. The fix for generalist review's blind spots isn't a better generalist — it's specialists, each with full attention on one dimension.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/multi-agent-parallel-review">Multi-Agent Parallel Review</PlaybookLink>{' '}
        Skill runs multiple specialized review agents simultaneously against the same code: a code quality reviewer, a security auditor, a performance analyst, a documentation checker, and a test coverage specialist. Each agent examines the same files but only reports on its dimension — no attention split, no scanning past an issue because something else caught the eye first. The results are synthesized into a single prioritized action list.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Review this PR from every angle before we merge — code quality, security, performance, documentation, and test coverage, all in parallel"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">One reviewer trying to check everything at once — catches the obvious style issue, misses the security vulnerability, review takes days because each pass only covers one dimension before moving to the next</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Five parallel reports in under 2 minutes: code quality (3 issues), security audit (1 vulnerability), performance (2 optimizations), documentation (4 gaps), test coverage (2 untested paths) — synthesized into one prioritized list</p>
        </div>
      </div>

      <p>
        Best reserved for higher-stakes PRs — production deploys, security-sensitive changes, or anything going into a critical path. Running five specialized passes on every trivial one-line fix is more thoroughness than the change warrants; save it for the PRs where a missed issue would actually hurt.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Scales to add or remove specialized agents depending on what your codebase needs checked.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Prevent the Mistakes Before They're Written
      </h2>
      <p>
        Review catches problems after code is written. The cheaper fix is preventing the problem in the first place — and Claude has a few predictable failure modes when writing code: silently picking an interpretation instead of surfacing ambiguity, shipping 200 lines when 50 would do, refactoring adjacent code nobody asked it to touch, and declaring "done" before verifying anything actually works.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/llm-coding-guardrails">LLM Coding Guardrails</PlaybookLink>{' '}
        Skill drops four behavioral rules into your project's CLAUDE.md that directly target these failure modes: think before coding (surface assumptions instead of silently choosing), simplicity first (no speculative abstractions or unrequested features), surgical changes (edit only what the task requires), and clear success criteria (verify before declaring done). These aren't suggestions Claude might follow — they're standing instructions that shape every task in the project.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Add input validation to the signup form" — with guardrails in place, Claude states its assumptions, asks about edge cases, writes a failing test, adds the minimum validation to pass it, and stops
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Ask for input validation, get 200 lines including a refactor of the form component nobody requested, a new config flag for a scenario that can't happen, and no test verifying it actually works</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Assumptions stated up front, edge cases clarified before coding starts, a failing test written first, minimum validation added to pass it, and no adjacent refactors or speculative flags</p>
        </div>
      </div>

      <p>
        This is a two-minute setup that pays off on every single task afterward — it's the cheapest of the four Skills to adopt and arguably the one with the best time-to-value ratio, since it changes behavior before any review step is even needed.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 2 minutes. Add the four rules to your CLAUDE.md once; they apply to every session from then on.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Clear Cascading Build Errors Systematically
      </h2>
      <p>
        Not every quality problem is a logic bug — sometimes the build itself won't compile, and the fix requires the same tedious loop repeated a dozen times: run the build, read the error, find the line, fix it, rebuild, hit the next error, repeat. This happens most often after a major dependency upgrade or a large refactor, where one type change cascades into dozens of downstream failures.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/iterative-build-fixer">Iterative Build & Fix Loop</PlaybookLink>{' '}
        Skill automates that entire cycle: it runs your build command, parses the errors from the output, fixes them, and re-runs the build — repeating automatically until the build succeeds or it hits an error it can't resolve without your input. Works with npm, cargo, go, make, gradle, and most standard build tooling.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Fix all TypeScript build errors in this project after upgrading to v5 — run the loop until it compiles clean"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">47 TypeScript errors after a major version upgrade — read error, find line, fix, rebuild, next error, repeat for what feels like the rest of the afternoon</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Automated loop parses all 47 errors, fixes them one by one, re-runs the build after each fix, handles the cascading failures — compiles successfully after 12 iterations with zero manual intervention</p>
        </div>
      </div>

      <p>
        A working build is the precondition for every other Skill in this post — a PR can't be meaningfully reviewed if it doesn't compile, and a security audit on code that doesn't build is wasted effort. This Skill clears that blocker so the rest of the quality gate can actually run.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Point it at your build command — it handles the read-fix-rebuild cycle from there.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Building a Layered Quality Gate
      </h2>
      <p>
        These four Skills aren't redundant — they operate at different points and different stakes levels:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Guardrails</span> — always on, prevents avoidable mistakes before code is even written</li>
        <li><span className="text-foreground font-medium">Build Fixer</span> — clears compilation blockers so the code can actually be evaluated</li>
        <li><span className="text-foreground font-medium">PR Reviewer</span> — the default first pass on every change, catching correctness, security, and test gaps</li>
        <li><span className="text-foreground font-medium">Multi-Agent Review</span> — reserved for high-stakes PRs where five specialized passes are worth the extra time</li>
      </ul>
      <p>
        A reasonable default: guardrails always active in CLAUDE.md, the PR Reviewer run on every pull request before requesting human review, and the Multi-Agent Review reserved for production-critical or security-sensitive changes. The Build Fixer gets pulled out whenever a dependency upgrade or major refactor leaves you staring at a wall of compilation errors.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/pr-reviewer">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">PR Reviewer</p>
            <p className="text-sm text-muted-foreground">Structured senior-engineer feedback on correctness, security, tests, and maintainability</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/multi-agent-parallel-review">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Multi-Agent Parallel Review</p>
            <p className="text-sm text-muted-foreground">Specialized security, performance, quality, and documentation agents reviewing simultaneously</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/llm-coding-guardrails">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">LLM Coding Guardrails</p>
            <p className="text-sm text-muted-foreground">Four behavioral rules that stop scope creep, overcomplication, and silent assumptions before they happen</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/iterative-build-fixer">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Iterative Build & Fix Loop</p>
            <p className="text-sm text-muted-foreground">Automated build-parse-fix-rebuild cycle that clears cascading compilation errors</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
