import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Startups: From Idea to MVP to First 100 Customers | Claude Code Playbooks Blog',
  description: "How founders use four Claude Skills across the full early-stage journey — validating the idea and scoping the MVP without a technical cofounder, compressing 6-week planning cycles into 48 hours with ICE-scored feature prioritization, getting to 100 paying customers through manual concentric-circle outreach instead of waiting for virality, and generating an investor-ready business plan with TAM/SAM/SOM and financial projections when traction is real.",
  alternates: { canonical: '/blog/claude-skills-startups' },
  openGraph: {
    title: 'Claude Skills for Startups: From Idea to MVP to First 100 Customers',
    description: "How founders use four Claude Skills across the full early-stage journey — validating the idea and scoping the MVP without a technical cofounder, compressing 6-week planning cycles into 48 hours with ICE-scored feature prioritization, getting to 100 paying customers through manual concentric-circle outreach instead of waiting for virality, and generating an investor-ready business plan with TAM/SAM/SOM and financial projections when traction is real.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-startups',
    type: 'article',
    publishedTime: '2026-06-18T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Startups: From Idea to MVP to First 100 Customers',
    description: "Four Claude Skills for founders — MVP validation, 48-hour planning, manual customer acquisition, and investor-ready business plans — mapped to the exact sequence of early-stage work.",
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

export default function ClaudeSkillsStartupsPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Startups: From Idea to MVP to First 100 Customers"
      description="How founders use four Claude Skills across the full early-stage journey — validating the idea and scoping the MVP without a technical cofounder, compressing 6-week planning cycles into 48 hours with ICE-scored feature prioritization, getting to 100 paying customers through manual concentric-circle outreach instead of waiting for virality, and generating an investor-ready business plan with TAM/SAM/SOM and financial projections when traction is real."
      category="guide"
      difficulty="intermediate"
      readingTime="15 min read"
      createdAt="2026-06-18"
      tags={['claude skills startup', 'ai for startups', 'ai mvp builder', 'startup AI', 'MVP planning AI', 'first 100 customers', 'founder AI', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-startups"
    >
      <p>
        Most startups fail at the same three transitions: they build before validating, they plan too long before building, and they wait for distribution instead of selling manually. The idea is usually fine. The market is often real. What kills early-stage companies is sequence — doing the wrong thing at the right time, or the right thing in the wrong order.
      </p>
      <p className="mt-4">
        Claude Skills maps onto each transition in the founding journey. A Skill is a persistent Claude configuration — system prompt, framework logic, output format — installed once and invoked whenever you need it. The four Skills below follow the arc of early-stage company building: validate the idea and define the MVP scope before writing a line of code, compress the planning cycle from weeks to days, get to 100 paying customers through direct outreach instead of waiting for virality, and formalize the business plan for investors once the traction is real.
      </p>
      <p className="mt-4">
        Each Skill handles a specific phase. Together they cover the full journey from the back of a napkin to a fundable company.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Early-Stage Sequence Problem
      </h2>
      <p>
        The sequence problem in early-stage startups is well-documented but rarely internalized until it happens to you. A founder has an idea, gets excited, finds a developer, signs a contract for $50,000, builds for six months, and launches to an audience of twelve people — most of them family. The product worked. The market was not there. Or the market was there, but the feature set missed what customers actually needed.
      </p>
      <p className="mt-4">
        The fix is not a better development process — it is doing validation work before the development contract is signed. Market sizing. Competitor research. User interview scripts. A one-page pitch that forces the idea into a coherent shape. None of this requires code. All of it reveals whether the idea deserves six months of development time and $50,000.
      </p>
      <p className="mt-4">
        The planning problem is the mirror image. Once a founder decides to build, the feature list grows. Every conversation adds scope. Six weeks of planning produces a 40-feature spec that will take eight months to build and six months to learn was wrong. The MVP that should have been three core features becomes a product that tries to do everything and does nothing well.
      </p>
      <p className="mt-4">
        The customer acquisition problem is the most common of all. The product ships. The founder posts on social media. A few hundred people visit the landing page. Nobody buys. The founder concludes that the product needs a better marketing strategy, or more features, or a rebrand. What the product actually needs is for the founder to talk to ten real humans who have the problem and walk them through the solution one at a time.
      </p>
      <p className="mt-4">
        The four Skills below address each problem in sequence.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Non-Technical Founder MVP Builder — Validate Before You Build
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/founder-mvp-builder">Non-Technical Founder MVP Builder</PlaybookLink> produces the strategic foundation for an MVP without a technical cofounder: market sizing analysis, competitor landscape, MVP feature scope (what to build versus what to skip), user interview script, one-page pitch deck, and a 90-day validation roadmap.
      </p>
      <p className="mt-4">
        The Skill is designed for the moment before money is spent on development. The output answers the questions an investor would ask — is the market real, who are the competitors, what is the minimum viable version of this product, and how will you know if it is working — before those questions need to be answered in a pitch meeting. A founder who has worked through the MVP Builder output is a founder who has been forced to be honest about what they know and what they do not.
      </p>
      <p className="mt-4">
        The feature scope section is the most practically valuable output. It separates the features that are required for the MVP to test the core hypothesis from the features that are nice to have but not required for validation. For most products, this cuts the initial scope by 50 to 70 percent — which means the MVP costs less to build, ships sooner, and produces learning faster.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Help me validate and plan my marketplace startup idea. The idea: a two-sided marketplace connecting independent personal trainers with clients who want home gym sessions — trainers bring equipment, clients provide the space. Target market: US suburban markets, households with 2+ earners who want fitness convenience. I have no technical cofounder and $30K to start. Give me market sizing (TAM/SAM/SOM), the top 5 competitors and how I differentiate, the 3 features that define the MVP (what to build first vs. skip), a user interview script I can run this week, a one-page pitch summary, and a 90-day validation roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Founder signs a $45,000 development contract after two weeks of excitement. Six months later the product launches. The trainer supply-side is harder to build than expected. Twenty clients sign up. The unit economics don't work at this scale. The $45,000 is gone and the lesson cost six months.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Market sizing produced. Top 5 competitors mapped with differentiation analysis. MVP scoped to 3 features: trainer profiles, booking flow, payment. 10-question user interview script ready. 90-day validation roadmap: weeks 1–4 manual matching with spreadsheet, weeks 5–8 test willingness to pay, weeks 9–12 decide whether to build. $45,000 still in the bank.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for any business model — marketplace, SaaS, consumer app, service business. The user interview script is the highest-value output: the ten questions that will tell you whether the idea is real before you spend anything.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: MVP Planning Accelerator — From Idea to Buildable Spec in 48 Hours
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/mvp-planner">MVP Planning Accelerator</PlaybookLink> compresses the planning cycle from weeks to days: competitive analysis of five incumbents, an ICE-scored feature matrix that cuts scope by 60%, user stories for core flows, a three-sprint development plan, and a launch checklist with go/no-go criteria.
      </p>
      <p className="mt-4">
        ICE scoring — Impact, Confidence, Ease — is the framework that makes feature prioritization defensible rather than subjective. Every feature gets scored on three dimensions and ranked by total score. The features that rank high on all three go into sprint one. The features that rank high on impact but low on confidence go into a later sprint once confidence is established. The features that rank high on impact but low on ease get broken into smaller versions that can be tested first.
      </p>
      <p className="mt-4">
        The result of running ICE scoring rigorously is almost always the same: the MVP that felt like 40 features becomes a three-sprint plan with 12 features in sprint one, 8 in sprint two, and 6 in sprint three. The first sprint ships in three to four weeks. The product is in front of users in weeks, not months. The sprint two and three features are built on top of what the first sprint taught, not on top of what the founder assumed before launch.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Plan the MVP for my appointment scheduling SaaS for independent therapists. The core problem: therapists use phone calls and paper to schedule, miss appointments constantly, have no automated reminders, and spend 4 hours a week on admin that should take 20 minutes. Current feature list from my notes: online booking, SMS reminders, calendar sync, payment collection, HIPAA-compliant notes, client portal, waitlist management, group session support, insurance billing integration, telehealth video. Run competitive analysis on Acuity, Calendly, SimplePractice, TherapyNotes, and Jane App. ICE-score my feature list. Produce user stories for the top-priority sprint. Build a 3-sprint plan. Give me go/no-go criteria for launch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Six weeks of planning meetings. The feature list grew from 10 to 23. The developer quote came back at $180,000. The founder could not decide what to cut. Development started on everything simultaneously. Eight months later, nothing shipped.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">ICE scoring cuts 10 features to 4 in sprint one: online booking, SMS reminders, calendar sync, payment collection. Insurance billing and telehealth are sprint three — high impact, low confidence they'll differentiate against SimplePractice. Development quote: $28,000 for sprint one. Ships in 5 weeks.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for SaaS, consumer apps, marketplaces, and internal tools. The ICE scoring output is the artifact to show your developer or technical cofounder — it makes the prioritization decisions explicit and defensible.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: First 100 Customers — Manual Selling Before You Scale Anything
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/first-100-customers">First 100 Customers Playbook</PlaybookLink> is a concentric-circles sales system built for early-stage founders: a list of ten warm contacts to pitch first, ten community members to reach next, a personalized cold outreach template, a pricing strategy for the first customers, and weekly sales goals that create accountability without requiring a sales team.
      </p>
      <p className="mt-4">
        The playbook is built on a principle that most founders resist: the first 100 customers cannot be acquired through marketing, content, or virality. They can only be acquired through conversations — one at a time, starting with people who already have a reason to trust you and want you to succeed. The founder who sends 100 personalized emails to people they know, or to people in communities they participate in, will get more customers than the founder who runs $5,000 in Facebook ads and waits for the funnel to convert.
      </p>
      <p className="mt-4">
        The concentric circles structure matters because it sequences the sales effort correctly. The innermost circle — friends, family, former colleagues — gives you your first real feedback before you talk to strangers. The middle circle — community members, social followers, people who know your work — gives you your first customers who do not have a personal relationship with you. The outer circle — cold outreach — is only credible when you have case studies and testimonials from the inner two circles to cite.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          I have a product but zero customers. My product: a Notion template system for freelance designers to manage their client projects, invoices, and communications — everything in one Notion workspace, pre-built. Price I'm considering: $49 one-time. My background: I'm a freelance designer myself with 6 years of experience. I have 800 Twitter followers and am active in two design communities on Slack. Give me a list of 10 friends/colleagues to pitch this week (describe the type of person, I'll fill in the names), 10 community members to reach out to next week, a cold outreach template for design Twitter, whether $49 is the right price for first customers, and a weekly sales goal for the next 8 weeks.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Founder posts on Twitter: "Just launched my Notion template for designers! Link in bio." 847 impressions. 3 link clicks. 0 purchases. Concludes the product needs better marketing. Spends two weeks redesigning the landing page. Still 0 purchases. The problem was never the landing page.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Week 1: 8 messages to designer friends and former clients. 3 purchases at $49 ($147 revenue), 2 feedback conversations that reveal the invoice tracking section is the most valuable part. Week 2: 10 Slack DMs to community members with a message that leads with the invoice problem. 6 more purchases. Week 3: cold outreach to design Twitter with a case study from week 1. 12 purchases. 21 customers in 3 weeks, no ads.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for any B2C or B2B product with a price point under $500. The first 100 customers cannot be automated — this Skill prepares the manual work, not a shortcut around it.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Business Plan Generator — Investor-Ready When the Traction Is Real
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/business-plan-generator">Business Plan Generator</PlaybookLink> produces a complete investor-ready business plan: executive summary, TAM/SAM/SOM market sizing, three-year financial projections, competitive positioning, and go-to-market strategy — in the format that accelerator applications, angel investors, and seed-stage VCs expect.
      </p>
      <p className="mt-4">
        The business plan comes last in this sequence deliberately. A business plan written before there are customers is a document full of assumptions dressed up as analysis. TAM/SAM/SOM numbers that come from top-down market research rather than bottom-up customer evidence are exactly the kind of projections that experienced investors dismiss immediately. The business plan that raises money is the one where the financial projections are grounded in what has already happened — the cost per customer acquisition that was proven with the first 100 customers, the churn rate that was measured over the first three months, the expansion revenue from customers who upgraded.
      </p>
      <p className="mt-4">
        The Skill produces the full plan structure — executive summary that opens with the problem and the traction evidence, market sizing built from the bottom up using customer data, financial projections that follow from the unit economics already observed, competitive landscape with an honest differentiation analysis, and a go-to-market plan for the next stage of growth. Investors read this plan and see a founder who knows their numbers because they have already been selling, not a founder who researched what investors want to hear.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Generate a business plan for my meal prep delivery startup for investors. Current traction: 87 paying customers, $12,400 MRR, 94% month-1 retention, 78% month-3 retention, average order value $142, CAC $31 via direct outreach (no paid ads yet). Business model: weekly subscription, customers choose 5–10 meals per week, we prep and deliver Sunday. Operating in Austin TX only. Chefs are contractors, delivery through our own team. Unit economics: 58% gross margin at current scale. Raising $400K to expand to Dallas and Houston and hire a head of operations. Include executive summary with traction lead, TAM/SAM/SOM for meal prep delivery in TX Sun Belt, 3-year financial projections, competitive positioning vs. HelloFresh/Freshly/local competitors, and a GTM plan for the Dallas expansion.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Two weeks building a business plan from a template. The TAM section cites a "$150B meal kit industry" from a 2022 research report. The financial projections assume 20% month-over-month growth with no basis. Investors ask where the numbers come from. The founder cannot answer from first principles. The round does not close.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Executive summary leads with $12,400 MRR and 94% month-1 retention. TAM/SAM/SOM built from Austin market data and extrapolated to Dallas/Houston using census and income data. Financial projections grounded in observed $31 CAC and 58% gross margin. Investor asks about unit economics — founder answers from the 87 customers they already have. Round closes in 6 weeks.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for accelerator applications, angel rounds, and seed-stage VC pitches. The plan is only as strong as the traction data you bring to it — which is why it comes last in the sequence.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Founding Sequence: Each Skill Unlocks the Next
      </h2>
      <p>
        The four Skills are designed to be used in order. The MVP Builder produces the validation output — market sizing, competitor landscape, core feature scope — that the MVP Planning Accelerator uses as its starting point. The MVP Planner produces the three-sprint development plan that determines what ships first. The First 100 Customers Playbook runs while and after the product ships, building the customer base and generating the traction data. The Business Plan Generator takes that traction data and turns it into the investor narrative that closes the seed round.
      </p>
      <p className="mt-4">
        Each Skill can be used independently — a technical founder who does not need the MVP Builder can start with the MVP Planner; a bootstrapped founder who is not raising can skip the Business Plan Generator entirely. But the sequence matters for the founders for whom it applies, because the output of each phase is the input to the next. A business plan built without traction is fiction. First customers acquired without a validated product scope are evidence of the wrong product. A development plan built without competitive analysis is missing the context that determines what actually needs to be built.
      </p>
      <p className="mt-4">
        The arc from idea to MVP to first 100 customers to fundable company is not a straight line — it involves pivots, wrong guesses, and iterations that no plan fully anticipates. What the four Skills do is make each phase of that arc more deliberate: the right questions asked before the money is spent, the right features built before the launch, the right conversations had before the marketing campaign, the right traction built before the investor deck is finalized. The judgment stays with the founder. The structure gets handled.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Startup Skills
      </h2>
      <p className="mb-6">
        Each Skill is a one-time install. Use them in sequence for the full founding journey, or drop into any phase where you need structure.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/founder-mvp-builder"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Non-Technical Founder MVP Builder</p>
          <p className="text-sm text-muted-foreground">Market sizing, competitor landscape, MVP feature scope, user interview script, one-page pitch, and 90-day validation roadmap — the strategic foundation before the first dollar is spent on development.</p>
        </Link>
        <Link
          href="/playbooks/mvp-planner"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">MVP Planning Accelerator</p>
          <p className="text-sm text-muted-foreground">ICE-scored feature prioritization, competitive analysis of five incumbents, user stories for core flows, three-sprint development plan, and launch go/no-go criteria — 6-week planning cycles compressed to 48 hours.</p>
        </Link>
        <Link
          href="/playbooks/first-100-customers"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">First 100 Customers Playbook</p>
          <p className="text-sm text-muted-foreground">Concentric-circle outreach from warm contacts to community to cold — with personalized templates, pricing strategy for early customers, and weekly sales goals. Manual selling before any marketing spend.</p>
        </Link>
        <Link
          href="/playbooks/business-plan-generator"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Business Plan Generator</p>
          <p className="text-sm text-muted-foreground">Investor-ready business plan with traction-grounded executive summary, bottom-up TAM/SAM/SOM, three-year financial projections from observed unit economics, competitive positioning, and GTM plan — when the traction is real.</p>
        </Link>
      </div>
    </BlogPostLayout>
  );
}
