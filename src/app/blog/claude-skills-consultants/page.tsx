import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Consultants: Build Decks, Frameworks, and Proposals Fast | Claude Code Playbooks Blog',
  description: "How consultants use four Claude Skills mapped to the frameworks they already know — the Minto Pyramid for answer-first communication that exposes MECE gaps before client review, PESTEL analysis for rigorous macro-environmental scanning, a 10-framework strategy toolkit covering SWOT through KPI design, and a proposal generator that reflects what the prospect actually said in the discovery call.",
  alternates: { canonical: '/blog/claude-skills-consultants' },
  openGraph: {
    title: 'Claude Skills for Consultants: Build Decks, Frameworks, and Proposals Fast',
    description: "How consultants use four Claude Skills mapped to the frameworks they already know — the Minto Pyramid for answer-first communication that exposes MECE gaps before client review, PESTEL analysis for rigorous macro-environmental scanning, a 10-framework strategy toolkit covering SWOT through KPI design, and a proposal generator that reflects what the prospect actually said in the discovery call.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-consultants',
    type: 'article',
    publishedTime: '2026-06-16T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Consultants: Build Decks, Frameworks, and Proposals Fast',
    description: "Four Claude Skills for consultants — Minto Pyramid, PESTEL, 10-framework strategy toolkit, and proposal generation — mapped to the frameworks you already use, applied faster.",
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

export default function ClaudeSkillsConsultantsPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Consultants: Build Decks, Frameworks, and Proposals Fast"
      description="How consultants use four Claude Skills mapped to the frameworks they already know — the Minto Pyramid for answer-first communication that exposes MECE gaps before client review, PESTEL analysis for rigorous macro-environmental scanning, a 10-framework strategy toolkit covering SWOT through KPI design, and a proposal generator that reflects what the prospect actually said in the discovery call."
      category="guide"
      difficulty="intermediate"
      readingTime="14 min read"
      createdAt="2026-06-16"
      tags={['claude skills consulting', 'ai for consultants', 'ai consulting frameworks', 'consulting AI', 'Minto Pyramid AI', 'PESTEL analysis AI', 'strategy AI', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-consultants"
    >
      <p>
        Consulting is sold as structured thinking. Clients pay for a framework that organizes their problem, a macro scan that surfaces the forces they are not tracking, a strategy analysis that names the options clearly, and a proposal that demonstrates you actually listened in the discovery call. The frameworks are the product — not just the output, but the signal of rigor that earns trust before the engagement begins.
      </p>
      <p className="mt-4">
        The irony is that applying those frameworks takes time that most consultants spend under deadline pressure. The Minto Pyramid does not build itself from a draft that buries the answer in paragraph three. A PESTEL analysis requires filling six cells with specific, sourced intelligence — not vague macroeconomic observations. A strategy session that covers SWOT, go-to-market, pricing, and KPI design thoroughly takes days to prepare from scratch. A proposal that reflects the prospect's actual objections requires re-reading discovery call notes and mapping responses to each concern before writing a single word.
      </p>
      <p className="mt-4">
        Claude Skills compresses that preparation without changing the intellectual work. A Skill is a persistent Claude configuration — system prompt, framework logic, output format — installed once and invoked instantly. The four Skills below are not generic AI writing tools. Each one is built around a specific named framework that consultants already use. The frameworks run faster. The rigor stays.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why Consultants Should Be Skeptical of Generic AI — and What Changes with Skills
      </h2>
      <p>
        The consulting profession has good reasons to be skeptical of AI-generated content. Generic AI outputs tend to be structurally flat, logically sloppy, and formulaic in ways that experienced clients will notice immediately. A SWOT analysis that lists "strong brand" as a strength and "economic uncertainty" as a threat is not an analysis — it is a template populated with plausible-sounding words. A memo that buries the recommendation in the fourth paragraph and calls the structure "comprehensive" is not Minto — it is the kind of writing Minto was invented to replace.
      </p>
      <p className="mt-4">
        Claude Skills is different from generic AI for a specific reason: each Skill encodes a particular framework's logic as its operating constraint. The Minto Pyramid Skill does not write documents — it applies the Pyramid Principle. The PESTEL Skill does not summarize news — it structures macro intelligence into the six specific forces and derives actionable implications. The Business Strategy Consultant Skill does not give generic advice — it applies ten named frameworks in sequence and produces outputs in the format each framework requires.
      </p>
      <p className="mt-4">
        The result is output that reads like it was produced by someone who knows the frameworks, because the Skill enforces them. The consultant's job is to bring the specific context — the client's situation, the market dynamics, the strategic questions — and direct the framework application. The Skill handles the structure.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Minto Pyramid — Find the Logic Gaps Before Your Client Does
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/minto-pyramid">Minto Pyramid Skill</PlaybookLink> applies Barbara Minto's Pyramid Principle to any draft: extracts the one-sentence governing thought, diagnoses MECE argument gaps, and delivers a color-coded visual restructuring plan that shows exactly where the logic breaks down and how to fix it.
      </p>
      <p className="mt-4">
        The Pyramid Principle is the communication standard that McKinsey, BCG, and Bain train into every analyst. The core discipline: answer first, support with three to five mutually exclusive and collectively exhaustive arguments, evidence beneath each argument. Most documents violate this structure in the same ways: the answer is buried because the writer discovered it at the end and never went back to restructure; two arguments overlap because they were written on different days; a critical evidence gap exists that the writer did not notice because they were too close to the material.
      </p>
      <p className="mt-4">
        The Skill catches all three before the client does. It reads the draft, identifies where the governing thought actually appears, flags any arguments that are not MECE, highlights evidence gaps in red, and delivers both a diagnosis and a restructured opener sentence. The output is not a rewrite — it is a structural critique that tells the consultant exactly what to fix.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Minto this memo. [paste draft] The memo argues we should enter the German market, but I want to confirm the logic holds before it goes to the steering committee. Flag any MECE violations in the supporting arguments, identify where the governing thought currently appears versus where it should appear, highlight any evidence gaps, and give me a replacement opener sentence that leads with the answer.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">The governing thought is buried in paragraph four. Two supporting arguments overlap — the steering committee notices in the review meeting and the presenter cannot defend the structure on the spot. A critical evidence gap surfaces only when a partner asks a question the memo never addressed.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Color-coded pyramid showing the answer buried in paragraph four, two overlapping arguments collapsed into one, a missing evidence gap flagged in red, and an exact replacement opener sentence — before the steering committee sees it.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes. Works on memos, slide decks, executive summaries, proposals, and any document where structured argument matters. The output is a structural critique, not a rewrite — the consultant makes the edits.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: PESTEL Analysis — Macro Intelligence Across All Six Forces
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/pestel-analysis">PESTEL Analysis Skill</PlaybookLink> runs a systematic macro-environmental scan across Political, Economic, Social, Technological, Environmental, and Legal forces — producing specific, sourced intelligence for each cell, deriving the top opportunities and threats, and generating strategic recommendations grounded in the macro picture.
      </p>
      <p className="mt-4">
        PESTEL is the foundational framework for market entry analysis, annual strategic planning, and regulatory risk assessment. Its weakness in practice is that it tends to produce vague outputs: "the regulatory environment is complex" in the Legal cell, "technological disruption continues" in the Technology cell. These observations satisfy the template but provide no strategic insight. The macro forces that actually matter for a specific company entering a specific market are precise: the EU AI Act transparency requirement that affects a particular product feature, the exchange rate trend that changes the unit economics of European pricing, the remote freelancer growth curve that represents the core demand driver.
      </p>
      <p className="mt-4">
        The Skill enforces specificity by requiring a defined subject — a company, a product, a market entry — and producing intelligence that is particular to that subject in each of the six cells. The strategic recommendations emerge from the intersection of factors, not from generic observations about each force in isolation.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Run PESTEL for our AI-powered invoice automation product launching in Germany and France in Q3. We are a US-based Series B fintech, 85 employees. Focus on factors that would materially affect our go-to-market or unit economics — not general observations. For each cell, identify the two or three specific forces most relevant to us and their strategic implication. Conclude with the top three opportunities and top three threats this analysis surfaces, and three strategic recommendations for the EU launch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">PESTEL built in a two-hour workshop produces six cells of generic observations. The Legal cell says "GDPR compliance required." The Technology cell says "AI adoption accelerating." No strategic implications are derived. The slide goes into the deck because the template is filled, not because it contains insight.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Political: EU AI Act Article 13 transparency requirements apply to our automated decision output — requires explainability layer before Q3 launch. Economic: Euro/USD at 1.08 compresses our EUR pricing by 8% versus last year's model — repricing needed. Legal: German B2B invoice requirements under GoBD create a compliance integration opportunity competitors haven't addressed. Three specific strategic recommendations derived from the intersection of forces.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 30 minutes (longer than other Skills because quality PESTEL requires research input). Works for market entry analysis, annual strategy decks, investor materials, and regulatory risk assessments.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Business Strategy Consultant — Ten Frameworks in One Engagement
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/business-strategy-consultant">Business Strategy Consultant Skill</PlaybookLink> applies ten named strategic frameworks in a single session: SWOT analysis, go-to-market strategy, pricing strategy review, KPI dashboard design, growth lever identification, competitive analysis, 30/60/90-day planning, and more — producing structured outputs in the format each framework requires.
      </p>
      <p className="mt-4">
        The problem the Skill addresses is one consultants recognize immediately: the same ten frameworks get applied to almost every engagement, but applying them thoroughly requires hours of preparation per framework. A SWOT that is actually MECE — where the strengths are specific capabilities tied to evidence, not brand-name adjectives — takes time to construct. A pricing strategy that considers value-based, competitive, and cost-plus approaches and recommends a specific structure with rationale takes longer. A KPI dashboard that selects leading and lagging indicators tied to the specific business model and strategic priorities is not a fifteen-minute exercise.
      </p>
      <p className="mt-4">
        The Skill compresses that preparation. Each framework is applied in the format that makes it useful — not as a bullet list that vaguely gestures at the framework, but as the structured output the framework was designed to produce. The consultant provides the business context; the Skill applies the ten frameworks and generates the working documents that become the engagement's analytical foundation.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Run a full strategic analysis on this SaaS business. Context: B2B project management tool, $3.2M ARR, 140% net revenue retention, losing in competitive evaluations to Asana on enterprise features, strong in SMB but growth slowing. Apply SWOT (specific, evidence-based), identify the top three growth levers with effort/impact estimates, review current pricing structure and recommend adjustments, design a KPI dashboard for the leadership team, and build a 90-day action plan prioritized by strategic impact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A two-day strategy off-site produces a deck with a SWOT that lists "strong team" as a strength and "competitive market" as a threat. The go-to-market section recommends "focusing on the enterprise segment" without naming the specific product gaps that need to close first. The 90-day plan has no effort estimates.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">SWOT with evidence-backed specifics, three growth levers ranked by effort/impact (move upmarket via enterprise tier: high impact, 6-month timeline; double SMB expansion motion: medium impact, immediate; partner channel: high impact, 12-month build). Pricing recommendation with rationale. KPI dashboard with leading and lagging indicators. 90-day plan with sequenced priorities.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for startup strategy sessions, SMB consulting engagements, and internal strategy teams that want to apply the frameworks without a consultant's day rate.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Proposal Generator — Proposals That Reflect What the Prospect Actually Said
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/proposal-generator">Custom Proposal Generator</PlaybookLink> produces tailored proposals by analyzing discovery call notes, emails, and prospect conversations — addressing each specific objection by name, positioning against the competitor they mentioned, including the integration they asked about, and structuring pricing to the budget they stated.
      </p>
      <p className="mt-4">
        The generic proposal problem is universal in consulting: the prospect raises three objections in the discovery call, mentions a competitor twice, asks specifically about one integration, and expresses skepticism about timeline. The proposal that arrives a week later addresses none of it. It is a modified version of the last proposal, with the company name updated and the scope section adjusted. The prospect reads it and concludes that the firm did not listen — because the proposal is evidence they did not.
      </p>
      <p className="mt-4">
        The Skill inverts the process. It starts with the prospect's words — the transcript, the email thread, the notes from the discovery call — and builds the proposal around what was actually said. Each objection gets a specific response positioned to the prospect's framing, not a generic answer. The competitor they mentioned is addressed directly. The integration they asked about appears in the scope section. The proposal reads like it was written for this prospect, because it was.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Generate a proposal based on my discovery call with Meridian Capital. Key points from the call: they have tried two previous strategy consultants who delivered decks but no implementation support — they want someone who stays through execution; their CFO is skeptical about AI tools and asked specifically about data security; they mentioned comparing us to Deloitte on price; the timeline is critical because their board review is in 90 days. Our differentiation: we embed with the team through implementation, not just deck delivery. Structure the proposal to address each of these directly, and include a 90-day milestone plan that maps to their board review date.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Proposal sent is a modified version of the last engagement's proposal. The CFO's data security concern is not addressed. The previous-consultant objection appears nowhere. Deloitte is not named. The timeline section says "8–12 weeks" without referencing the board review date they mentioned. Meridian goes with Deloitte.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Executive summary leads with the implementation-through-execution differentiator positioned directly against their previous consultant experience. CFO data security concern addressed in a dedicated section with specifics. Deloitte price comparison reframed on value basis. 90-day milestone plan anchored to the board review date they mentioned. Meridian feels heard.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works best when you paste actual discovery call notes or email threads — the more specific the prospect's words, the more precisely the proposal reflects them. Generic inputs produce generic outputs.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Consulting Workflow: From Macro Scan to Signed Engagement
      </h2>
      <p>
        The four Skills map onto a consulting engagement workflow end to end. PESTEL scans the macro environment and surfaces the strategic context. The Business Strategy Consultant applies the analytical frameworks that turn that context into a structured strategic picture. The Minto Pyramid ensures every deliverable — the situation memo, the strategy deck, the executive summary — leads with the answer and holds up to logical scrutiny. The Proposal Generator turns the discovery conversation into a proposal that wins the next engagement.
      </p>
      <p className="mt-4">
        The common thread is framework fidelity. Consulting clients pay a premium for structured thinking, and structured thinking is only valuable when the structure is rigorous. A SWOT with generic entries, a memo that buries the recommendation, a proposal that ignores what the prospect said — these are failures of structure, not failures of intelligence. The Skills enforce the structure so the intelligence is what the client sees.
      </p>
      <p className="mt-4">
        Consultants who use these Skills report the same effect: they spend less time building the framework and more time filling it with insight. The PESTEL cells get populated faster, so more time goes to sourcing the specific intelligence that makes each cell useful. The Minto diagnosis catches structural problems in draft, so the revision is a targeted fix rather than a full restructure at 11pm before the client meeting. The proposal reflects the discovery conversation, so the first draft requires fewer rounds of "make it more specific to them." The analytical work — the judgment about what the macro forces mean, which strategic levers are real, what the client's actual problem is — that stays with the consultant. The scaffolding gets handled.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Consulting Skills
      </h2>
      <p className="mb-6">
        Each Skill is a one-time install. Open it, follow the setup steps, and it is available in Claude every time you need it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/minto-pyramid"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Minto Pyramid</p>
          <p className="text-sm text-muted-foreground">Apply the Pyramid Principle to any draft — diagnose MECE gaps, surface buried governing thoughts, flag evidence holes in red, and get a replacement opener sentence before the client sees it.</p>
        </Link>
        <Link
          href="/playbooks/pestel-analysis"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">PESTEL Analysis</p>
          <p className="text-sm text-muted-foreground">Systematic macro scan across all six forces — specific, sourced intelligence for each cell, top opportunities and threats ranked by strategic impact, and actionable recommendations derived from the intersection.</p>
        </Link>
        <Link
          href="/playbooks/business-strategy-consultant"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Business Strategy Consultant</p>
          <p className="text-sm text-muted-foreground">Ten named frameworks — SWOT, GTM, pricing, KPIs, growth levers, competitive analysis, 30/60/90-day planning — applied in sequence with structured outputs in each framework's native format.</p>
        </Link>
        <Link
          href="/playbooks/proposal-generator"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Custom Proposal Generator</p>
          <p className="text-sm text-muted-foreground">Proposals built from discovery call notes — each objection addressed by name, competitor reframed, specific integration included, pricing structured to stated budget. The proposal that makes the prospect feel heard.</p>
        </Link>
      </div>
    </BlogPostLayout>
  );
}
