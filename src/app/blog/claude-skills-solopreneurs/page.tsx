import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Solopreneurs: Run a One-Person Business with AI in 2026 | Claude Code Playbooks Blog',
  description: 'How solopreneurs use Claude Skills as a full AI operating system — strategy, business development, client operations, and finance — without hiring a team. Practical playbooks for every business function.',
  alternates: { canonical: '/blog/claude-skills-solopreneurs' },
  openGraph: {
    title: 'Claude Skills for Solopreneurs: Run a One-Person Business with AI in 2026',
    description: 'How solopreneurs use Claude Skills as a full AI operating system — strategy, business development, client operations, and finance — without hiring a team.',
    url: 'https://www.claudecodehq.com/blog/claude-skills-solopreneurs',
    type: 'article',
    publishedTime: '2026-05-25',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Solopreneurs: Run a One-Person Business with AI in 2026',
    description: 'Strategy, biz dev, client ops, and finance — a full AI operating system for one-person businesses. No team required.',
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

function FunctionCard({
  label,
  description,
  replaces,
}: {
  label: string;
  description: string;
  replaces: string;
}) {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
      <p className="text-sm font-semibold text-foreground mb-1">{label}</p>
      <p className="text-sm text-muted-foreground mb-2">{description}</p>
      <p className="text-xs text-muted-foreground/60">
        <span className="text-muted-foreground/40">Replaces:</span> {replaces}
      </p>
    </div>
  );
}

export default function ClaudeSkillsSolopreneursPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Solopreneurs: Run a One-Person Business with AI in 2026"
      description="How solopreneurs use Claude Skills as a full AI operating system — strategy, business development, client operations, and finance — without hiring a team. Practical playbooks for every business function."
      category="guide"
      difficulty="basic"
      readingTime="14 min read"
      createdAt="2026-05-25"
      tags={['claude skills solopreneur', 'ai for solopreneurs', 'one-person business ai', 'solopreneur ai tools', 'solo business automation', 'Claude Code', 'freelance AI']}
      author="Claude Code Playbooks"
      slug="claude-skills-solopreneurs"
    >
      <p className="text-lg">
        Running a one-person business means being the strategist, the salesperson, the account
        manager, the bookkeeper, and the marketer — in addition to being the person who
        actually does the work clients pay you for. You&apos;re expert-level at one thing and
        expected to be adequate at everything else.
      </p>
      <p>
        The traditional answer is to hire for your gaps — a VA for admin, an accountant for
        finances, an agency for marketing. For solopreneurs without the revenue to justify
        those costs, or who want to stay lean by design, the answer has mostly been: do it
        yourself and accept that some functions will be underdone.
      </p>
      <p>
        Claude Skills change this calculation. A well-built set of skills functions as a
        lightweight operating system for a one-person business — covering strategy, business
        development, client operations, and finance with enough depth to actually be useful,
        not just better than nothing. This post covers the complete stack: what each function
        needs, which skills address it, and how they fit together.
      </p>

      {/* ── The operating system concept ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Claude Skills as a Business Operating System
      </h2>
      <p>
        Every business, regardless of size, runs the same core functions. The difference
        between a 200-person company and a one-person business isn&apos;t the functions —
        it&apos;s who performs them and with what resources. A Claude Skill is a specialized
        tool for a specific business function, calibrated to your business context because it
        reads your CLAUDE.md before producing anything.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        <FunctionCard
          label="Strategy & Planning"
          description="Business architecture, annual planning, market positioning, growth roadmap."
          replaces="Business consultant at $200–400/hr"
        />
        <FunctionCard
          label="Business Development"
          description="Outreach, proposals, pitch materials, pipeline management."
          replaces="Sales consultant or BD hire at $60–100k/yr"
        />
        <FunctionCard
          label="Client Operations"
          description="Contracts, onboarding, reporting, relationship management."
          replaces="Account manager or ops VA at $30–60k/yr"
        />
        <FunctionCard
          label="Finance"
          description="Budget tracking, invoicing, cash flow management, tax prep support."
          replaces="Part-time bookkeeper at $500–1,500/mo"
        />
      </div>
      <p>
        The skills don&apos;t eliminate the need for judgment — they eliminate the need for
        starting from scratch every time a function needs exercising. The business plan still
        requires your strategic thinking. The proposal still requires your knowledge of the
        client. The invoice still requires your pricing decisions. The skills handle the
        structure, the format, the first draft, and the analysis layer.
      </p>

      {/* ══════════════════════════════
          STRATEGY
      ══════════════════════════════ */}
      <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4 border-b border-[#30363d] pb-2">
        Function 1: Strategy &amp; Planning
      </h2>
      <p>
        Most solopreneurs are reactive rather than strategic — not by choice, but because
        carving out time for business-level thinking is hard when client work fills the
        calendar. The result: you get busy, then you get quiet, then you scramble for new
        clients, then you get busy again. The feast-and-famine cycle that characterizes most
        solo practices is almost always a planning problem dressed up as a pipeline problem.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        Solopreneur Business Architect — build the plan you never had time to write
      </h3>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/solopreneur-business-architect">Solopreneur Business Architect</PlaybookLink>{' '}
        skill is the highest-leverage skill in this stack for most solopreneurs because it
        addresses the function that gets most consistently skipped. It runs a structured
        business architecture session: clarifying your positioning (who you serve and why you
        specifically), identifying your most profitable service lines, building a 90-day growth
        plan with specific actions, and mapping the bottlenecks that are limiting revenue.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;I&apos;ve been running my [type] practice for [X years]. Revenue is [range] and
            it&apos;s been flat for [period]. Run a business architecture session — diagnose
            why growth has stalled, identify my most defensible positioning, and give me a
            90-day plan with specific weekly actions.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;I want to niche down from [broad service] to [specific niche]. Pressure-test
            this decision: is the market large enough, what&apos;s the competitive landscape,
            and what&apos;s the transition plan that doesn&apos;t destroy current revenue?&quot;
          </p>
        </div>
      </div>
      <p>
        The second prompt — niching down — is one of the most common strategic decisions
        solopreneurs face and one of the hardest to think through alone because of the
        revenue risk. The skill will model the decision honestly: the upside, the downside,
        and what would need to be true for it to work.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        Business Plan Generator — when you need the document, not just the thinking
      </h3>
      <p>
        Sometimes strategy needs to be written down — for a bank loan, an investor conversation,
        a grant application, or simply because committing something to paper clarifies it.
        The{' '}
        <PlaybookLink href="/playbooks/business-plan-generator">Business Plan Generator</PlaybookLink>{' '}
        skill produces a complete, structured business plan from a conversational input:
        executive summary, market analysis, service offering, competitive positioning, financial
        projections, and operating plan. It asks the questions that force you to think through
        the things you&apos;ve been glossing over.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Generate a business plan for my [type of practice]. I&apos;ll describe what
          I do, who I serve, and my financial situation. Ask me questions where you need
          more detail — don&apos;t let me be vague about the numbers or competitive
          differentiation.&quot;
        </p>
      </div>

      {/* ══════════════════════════════
          BUSINESS DEVELOPMENT
      ══════════════════════════════ */}
      <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4 border-b border-[#30363d] pb-2">
        Function 2: Business Development
      </h2>
      <p>
        Solopreneurs who are excellent at their craft often have a difficult relationship with
        selling. The activities that fill the pipeline — cold outreach, proposals, pitching —
        feel different from the actual work, require a different mindset, and produce rejection
        that the actual work rarely does. The result is that business development happens
        inconsistently: intensely when revenue drops, not at all when revenue is comfortable.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        Cold Email Personalizer — outreach that doesn&apos;t feel like outreach
      </h3>
      <p>
        The fastest way to kill a solopreneur&apos;s willingness to do outreach is to write
        cold emails that feel like cold emails — template-obvious, transactional, easy to
        ignore. The{' '}
        <PlaybookLink href="/playbooks/cold-email-personalizer">Cold Email Personalizer</PlaybookLink>{' '}
        skill solves the personalization problem: give it information about the prospect and
        your service, and it writes an email that opens with something genuinely specific to
        them — a piece of recent work, a stated priority, a challenge their industry is facing
        — before making a brief, concrete ask.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Write a cold email to [prospect role] at [company type]. What I know about them:
          [research notes]. My service: [describe]. Their most likely pain point: [describe].
          Open with something specific to them — not generic flattery. Keep it under 120 words.
          End with a single low-friction ask (15-min call, not &apos;let&apos;s schedule a meeting&apos;).&quot;
        </p>
      </div>
      <p>
        The &quot;under 120 words&quot; constraint is worth keeping in the prompt. Longer cold
        emails have lower reply rates almost universally. The skill will push back if you give
        it too much to say — a useful constraint for solopreneurs who tend toward over-explaining.
      </p>
      <p>
        Pair the Cold Email Personalizer with the{' '}
        <PlaybookLink href="/playbooks/client-proposal">Client Proposal</PlaybookLink> skill for
        the follow-up stage — once a prospect responds, the proposal skill builds the full
        pitch document: problem statement, proposed approach, deliverables, timeline, and
        investment, in a format calibrated to your service type.
      </p>

      {/* ══════════════════════════════
          CLIENT OPERATIONS
      ══════════════════════════════ */}
      <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4 border-b border-[#30363d] pb-2">
        Function 3: Client Operations
      </h2>
      <p>
        The operational layer of a solo practice — contracts, onboarding, reporting, renewals —
        is where most solopreneurs are inconsistent. Contracts get sent late or not at all.
        Onboarding is improvised every time. Client reports are either too detailed (take too
        long to write) or too sparse (don&apos;t convey enough value). The inconsistency creates
        professional friction that erodes the premium positioning you worked to build.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        Contract Review — protect yourself before you sign
      </h3>
      <p>
        Solopreneurs often sign client contracts with minimal review — either because they don&apos;t
        have legal counsel, because they don&apos;t want to seem difficult, or because the document
        looks standard. The{' '}
        <PlaybookLink href="/playbooks/contract-review">Contract Review</PlaybookLink> skill reads
        any agreement and surfaces what matters: liability clauses that are unusually one-sided,
        IP assignment language that could claim ownership of work you&apos;d expect to reuse,
        payment terms with hidden gotchas, and auto-renewal or termination provisions that could
        create problems later.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Review this client contract before I sign it. I&apos;m a freelance [role].
          Flag: any IP assignment that claims more than this specific project, payment terms
          that deviate from net-30, liability caps that are asymmetric, and anything that
          would prevent me from working with similar clients in the future.&quot;
        </p>
      </div>
      <p>
        Most solopreneurs who use this skill discover that &quot;standard&quot; contracts aren&apos;t
        standard at all — the IP and non-compete clauses in particular vary widely and the
        defaults often favor the client. Knowing what to push back on before signing takes
        15 minutes; discovering a problem after the fact is much more expensive.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        Client Report — demonstrate value without spending hours writing
      </h3>
      <p>
        Regular client reports are one of the highest-leverage retention tools available to
        solopreneurs — they make invisible work visible, justify the engagement, and remind
        the client why they hired you. Most solopreneurs know this and still don&apos;t do
        them consistently, because writing a good report takes two hours they don&apos;t have.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/client-report">Client Report</PlaybookLink> skill produces
        a polished, structured report from bullet points: what was done this period, key results
        with metrics, what&apos;s coming next, and any decisions or approvals needed from the
        client. Input ten minutes of notes; get a professional report that reads like it
        took an hour to write.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Write a monthly client report for [Client]. This month: [bullet points of
          work done and results]. Next month: [planned activities]. Client is [describe
          their communication style — technical/non-technical, detail-oriented/high-level].
          Keep it professional but not stiff.&quot;
        </p>
      </div>

      {/* ══════════════════════════════
          FINANCE
      ══════════════════════════════ */}
      <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4 border-b border-[#30363d] pb-2">
        Function 4: Finance
      </h2>
      <p>
        Solo business finance is genuinely simple by enterprise standards — but it&apos;s the
        function most solopreneurs manage worst, because it&apos;s the one with the least
        immediate feedback. You can ignore your finances for months with no immediate
        consequence, and then hit a tax bill or a cash flow gap that required months of
        preparation to avoid.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
        Budget Analyzer — understand your actual financial picture
      </h3>
      <p>
        Most solopreneurs have a vague sense of their finances. They know roughly what they
        earn and roughly what they spend, but the actual picture — profitability by client
        type, effective hourly rate, subscription creep, tax liability tracking — stays blurry
        because assembling it manually takes more time than it seems to be worth.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/budget-analyzer">Budget Analyzer</PlaybookLink> skill
        takes your bank statement or transaction export and produces the actual picture:
        income by source, expenses by category, profitability trend, subscription charges
        itemized, effective rate per project type, and an honest projection of what next
        quarter looks like if the current pattern holds.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Analyze my last 3 months of business transactions: [paste CSV or data]. Show
            revenue by client, expenses by category, net profit, and flag every recurring
            charge so I can decide what to keep.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;I earned [amount] from [client types] this quarter. My fixed costs are [list].
            What&apos;s my effective hourly rate by client type, and which clients are most
            profitable per hour invested?&quot;
          </p>
        </div>
      </div>
      <p>
        The effective hourly rate by client prompt is one the most solopreneurs have never
        run — and the answer is often surprising. The client who seems most valuable by
        absolute revenue frequently has the worst effective rate once you account for
        revision cycles, communication overhead, and scope creep.
      </p>
      <p>
        Pair Budget Analyzer with the{' '}
        <PlaybookLink href="/playbooks/invoice-generator">Invoice Generator</PlaybookLink> skill
        for the invoicing side — produce professional, legally complete invoices from project
        notes in minutes, without paying for invoicing software.
      </p>

      {/* ══════════════════════════════
          MASTER CLAUDE.MD
      ══════════════════════════════ */}
      <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4 border-b border-[#30363d] pb-2">
        The Solopreneur&apos;s Master CLAUDE.md
      </h2>
      <p>
        All of these skills become significantly more useful when they share a common context
        file — a master CLAUDE.md that describes your business, so every skill starts from
        a complete picture rather than a blank slate.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Solopreneur master CLAUDE.md</p>
        <pre className="text-sm font-mono text-[#e6edf3] whitespace-pre-wrap leading-relaxed">{`# My Business Context

## What I Do
[Service description — specific, not generic. Who you serve, what outcome you deliver,
how you're different from alternatives]

## Current Clients
[Active client list with one-line context on each relationship]

## Revenue & Goals
[Current monthly/annual revenue, target, timeline]

## Rates & Pricing
[Your standard rates, how you price projects, what you won't do below]

## Voice & Communication Style
[How you write to clients — formal/warm, concise/detailed, any phrases you use or avoid]

## Current Constraints
[Capacity situation, tools you use, things you can't change right now]

## This Quarter's Focus
[The 1–2 things that matter most for business growth in the next 90 days]`}</pre>
      </div>
      <p>
        Every skill you use reads this file before producing output. The Business Architect
        knows your revenue goal before it suggests growth strategies. The Cold Email Personalizer
        knows your positioning before it writes outreach. The Budget Analyzer knows your target
        rate before it calculates profitability. The context makes every output immediately
        applicable rather than requiring editing to fit your situation.
      </p>
      <p>
        Keep this file updated monthly — 10 minutes to refresh the current clients list,
        revenue numbers, and quarterly focus. The skills are only as useful as the context
        they work from.
      </p>

      {/* ── The full business cycle ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Complete Solo Business Cycle
      </h2>
      <div className="space-y-3 my-6">
        {[
          { step: '1', phase: 'Quarterly strategy', skill: 'Solopreneur Business Architect', action: 'Review positioning, identify highest-leverage actions, build 90-day plan' },
          { step: '2', phase: 'Business development', skill: 'Cold Email Personalizer', action: 'Write personalized outreach to 10–20 ideal prospects per month' },
          { step: '3', phase: 'Proposal', skill: 'Client Proposal', action: 'Convert interested prospects to clients with a structured, professional proposal' },
          { step: '4', phase: 'Contract', skill: 'Contract Review', action: 'Review client contract before signing — flag IP, liability, and payment terms' },
          { step: '5', phase: 'Client delivery', skill: 'Client Report', action: 'Monthly client report from bullet-point notes — demonstrate value, prompt renewals' },
          { step: '6', phase: 'Financial review', skill: 'Budget Analyzer', action: 'Monthly financial picture — revenue by client, expenses, effective rate, projections' },
          { step: '7', phase: 'Invoicing', skill: 'Invoice Generator', action: 'Professional invoices from project notes — consistent, fast, no software subscription' },
        ].map(({ step, phase, skill, action }) => (
          <div key={step} className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 flex items-center justify-center text-[#22d3ee] text-xs font-semibold">
              {step}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <p className="text-sm font-semibold text-foreground">{phase}</p>
                <span className="text-xs text-muted-foreground/60">→</span>
                <p className="text-xs text-[#22d3ee]/80 font-mono">{skill}</p>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">{action}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Core Playbooks
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/solopreneur-business-architect"
          className="block p-4 bg-[#161b22] border border-[#22d3ee]/30 rounded-lg hover:border-[#22d3ee] transition-colors sm:col-span-2"
        >
          <p className="font-semibold text-foreground mb-1">Solopreneur Business Architect</p>
          <p className="text-sm text-muted-foreground">The strategic layer — positioning, growth plan, bottleneck diagnosis, and a 90-day action roadmap tailored to where your business actually is.</p>
        </Link>
        <Link
          href="/playbooks/business-plan-generator"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Business Plan Generator</p>
          <p className="text-sm text-muted-foreground">Complete business plan from a conversational session — for loans, investors, grants, or just thinking rigorously about your business.</p>
        </Link>
        <Link
          href="/playbooks/cold-email-personalizer"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Cold Email Personalizer</p>
          <p className="text-sm text-muted-foreground">Outreach emails that open with something genuinely specific to the prospect — under 120 words, one clear ask, significantly higher reply rates.</p>
        </Link>
        <Link
          href="/playbooks/budget-analyzer"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors sm:col-span-2"
        >
          <p className="font-semibold text-foreground mb-1">Budget Analyzer</p>
          <p className="text-sm text-muted-foreground">Your actual financial picture — income by client, expenses by category, effective hourly rate by client type, and subscription creep — from your transaction export.</p>
        </Link>
      </div>
      <p>
        The best place to start: build your master CLAUDE.md this week (20 minutes), then use
        the Solopreneur Business Architect for a quarterly review. The strategic clarity you
        get from one serious session with that skill is usually worth more than any individual
        automation. Build the operating system from the top down — strategy first, execution
        layer second.
      </p>
    </BlogPostLayout>
  );
}
