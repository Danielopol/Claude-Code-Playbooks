import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: '7 Claude Skills Every Small Business Owner Should Set Up (No Coding Required) | Claude Code Playbooks Blog',
  description: 'Seven Claude Skills that pay for themselves quickly — brand guidelines, business plans, contract review, budget analysis, ad copy, competitive intelligence, and more. No coding, no technical background, just results.',
  alternates: { canonical: '/blog/claude-skills-small-business' },
  openGraph: {
    title: '7 Claude Skills Every Small Business Owner Should Set Up (No Coding Required)',
    description: 'Seven Claude Skills that handle the hardest, most time-consuming small business tasks — no coding, no technical background required.',
    url: 'https://www.claudecodehq.com/blog/claude-skills-small-business',
    type: 'article',
    publishedTime: '2026-05-04',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '7 Claude Skills Every Small Business Owner Should Set Up (No Coding Required)',
    description: '7 Claude Skills for small business — brand guidelines, contracts, budgets, ad copy, competitive analysis, and more. No coding.',
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

function SkillCard({
  number,
  title,
  timeToSetup,
  difficulty,
  bestFor,
  href,
}: {
  number: number;
  title: string;
  timeToSetup: string;
  difficulty: string;
  bestFor: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
    >
      <div className="flex items-start gap-3">
        <span className="text-[#22d3ee] font-mono text-sm font-bold shrink-0 mt-0.5">#{number}</span>
        <div>
          <p className="font-semibold text-foreground mb-1">{title}</p>
          <p className="text-xs text-muted-foreground mb-1">
            Setup: {timeToSetup} · {difficulty}
          </p>
          <p className="text-sm text-muted-foreground">{bestFor}</p>
        </div>
      </div>
    </Link>
  );
}

export default function ClaudeSkillsSmallBusinessPage() {
  return (
    <BlogPostLayout
      title="7 Claude Skills Every Small Business Owner Should Set Up (No Coding Required)"
      description="Seven Claude Skills that pay for themselves quickly — brand guidelines, business plans, contract review, budget analysis, ad copy, competitive intelligence, and more. No coding, no technical background, just results."
      category="guide"
      difficulty="basic"
      readingTime="12 min read"
      createdAt="2026-05-04"
      tags={[
        'claude skills small business',
        'claude skills no coding',
        'claude skills for business',
        'AI for small business',
        'Claude Code',
        'business automation',
        'no coding',
      ]}
      author="Claude Code Playbooks"
      slug="claude-skills-small-business"
    >
      <p className="text-lg">
        Running a small business means being the CEO, the marketer, the finance department, the
        legal reviewer, and the strategist — often in the same afternoon. You know which tasks are
        important. You also know which ones eat hours you don&apos;t have: writing the brand
        guide nobody&apos;s ever finished, reviewing that vendor contract that&apos;s been sitting
        in your inbox for a week, building the competitive analysis you promised yourself you&apos;d
        do before Q2.
      </p>
      <p>
        Claude Skills are pre-built instruction sets that turn Claude Code into a specialist for
        each of these jobs. You don&apos;t write code — you download a file, drop it in a folder,
        and ask Claude in plain English. This guide covers the seven skills that have the highest
        return on the 5–15 minutes it takes to set each one up.
      </p>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
        <p className="text-sm font-semibold text-foreground mb-2">How to use any skill in this list</p>
        <ol className="text-sm space-y-1 list-decimal list-inside">
          <li>Create a folder on your computer for that task (e.g., <code className="text-[#22d3ee] bg-[#0d1117] px-1 rounded">~/Documents/ContractReview</code>)</li>
          <li>Click the playbook link, download the CLAUDE.md file, and move it into that folder</li>
          <li>Open Claude Code in that folder — it reads the skill automatically</li>
          <li>Describe your task in plain English and get to work</li>
        </ol>
        <p className="text-xs text-muted-foreground mt-3">No coding. No configuration. The folder is the on switch.</p>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        1. Brand Guidelines — Stop the &quot;Which Blue Do We Use?&quot; Question Forever
      </h2>
      <p>
        Ask any growing business when they last updated their brand guidelines. Most will laugh —
        or admit they&apos;ve never had any. The result is inconsistency that erodes trust: four
        shades of your logo blue floating around in different decks, fonts that vary by whoever
        made the file, a tone of voice that depends on which team member wrote the email.
        Customers notice, even when they can&apos;t articulate why.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/brand-guidelines">Brand Guidelines Generator</PlaybookLink> skill
        produces a complete style guide from a single session. Describe your brand — colors you use
        (or want to use), fonts, the feeling you want customers to have, what you&apos;re
        definitely not — and it outputs a proper document: hex codes for every color, typography
        rules with hierarchy, logo usage specifications, voice and tone guidelines with do&apos;s
        and don&apos;ts, and visual examples showing what&apos;s on- and off-brand.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Create brand guidelines for my bakery. Our colors are warm cream and terracotta.
          We want to feel artisanal and trustworthy — like a neighborhood institution, not a
          chain. We use Playfair Display for headings. Our voice is warm and knowledgeable,
          never trendy.&quot;
        </p>
      </div>
      <p>
        Once you have the document, every new hire, contractor, and freelancer gets the same brief.
        The &quot;which blue?&quot; question has a permanent answer. And when your brand evolves,
        you update the CLAUDE.md and regenerate — rather than manually hunting down every outdated
        reference.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Best for: any business onboarding contractors, producing content, or growing past one person
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        2. Business Plan Generator — Investor-Ready in Hours, Not Weeks
      </h2>
      <p>
        Whether you&apos;re applying for an SBA loan, pitching to investors, joining an
        accelerator, or just trying to think clearly about your business, a well-structured plan
        matters. The problem isn&apos;t knowing your business — it&apos;s organizing it into the
        format that lenders and investors expect, with the right sections in the right depth.
        Most business owners either skip it or pay $2,000+ to have someone else write it.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/business-plan-generator">Business Plan Generator</PlaybookLink> skill
        takes what you know about your business and structures it into an investor-ready document:
        executive summary, market sizing (TAM/SAM/SOM), competitive positioning, financial
        projections (3-year model), go-to-market strategy, and operational plan. You provide the
        numbers and the vision; the skill provides the structure and the prose.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Generate a business plan for my meal prep delivery startup. We&apos;re in Austin,
          targeting busy professionals aged 30–50. Current monthly revenue: $18K. We want to
          raise $200K to hire two drivers and expand to Dallas.&quot;
        </p>
      </div>
      <p>
        The output is a working draft — not a finished document. You&apos;ll refine the
        projections, tighten the language, and add specifics. But the structure is there, the
        sections are complete, and you&apos;re editing instead of writing from a blank page.
        That&apos;s the difference between a day of work and a week.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Best for: loan applications, investor pitches, accelerator applications, strategic planning
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        3. Contract Review — Catch the Landmines Before You Sign
      </h2>
      <p>
        Every small business owner has a story about a contract they signed without reading
        carefully enough. The auto-renewal clause that locked them in for another year. The
        liability provision that made them responsible for things they never agreed to verbally.
        The IP assignment buried in section 12 that handed over rights to work they created.
        Hiring a lawyer to review every contract isn&apos;t realistic. Signing without reading
        is worse.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/contract-review">Contract Review &amp; Risk Analyzer</PlaybookLink> skill
        reads contracts the way a lawyer would on a first pass — clause by clause, flagging
        anything outside market norms with a severity rating (low / medium / high / critical),
        a plain-English explanation of why it matters, and a specific recommendation. Missing
        provisions are surfaced too. The output is a structured risk report you can act on
        immediately or hand to a lawyer with focused questions.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Review this vendor services agreement. I&apos;m the client. Flag any terms that
          are unusual, one-sided, or could create unexpected liability for me.&quot;
        </p>
      </div>
      <p>
        The skill doesn&apos;t replace legal advice on high-stakes contracts — but it means low-
        and medium-stakes agreements get a real review instead of a skim-and-hope. For a small
        business signing 5–10 contracts a month, this skill pays for itself on the first use.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Best for: vendor agreements, client contracts, NDAs, SaaS subscriptions, lease agreements
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        4. Budget Analyzer — Find Out Where Your Money Is Actually Going
      </h2>
      <p>
        &quot;I know roughly what we spend&quot; is one of the most expensive phrases in small
        business. Subscription creep is real — $19/month here, $49/month there, a tool
        somebody signed up for two years ago that nobody uses. Operating expenses that look
        fine in aggregate hide categories that are quietly out of control. Cash flow problems
        that feel sudden usually weren&apos;t — the pattern was there in the data for months.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/budget-analyzer">Personal Budget Analyzer</PlaybookLink> skill —
        which works equally well for business finances — takes your bank statements or transaction
        exports and produces a clear picture: every transaction categorized, monthly spending
        by category, subscription and recurring charges itemized, and a budget built from actual
        patterns rather than wishful estimates.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Analyze our last three months of business bank statements. Categorize every
          transaction, list every recurring charge, identify our three highest-spend categories,
          and flag any month-over-month increases greater than 20%.&quot;
        </p>
      </div>
      <p>
        Your financial data stays on your machine — Claude Code runs locally, so nothing leaves
        your computer. Run this skill monthly and you&apos;ll spot problems while they&apos;re
        still correctable instead of when they&apos;ve compounded for a quarter.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes · Best for: monthly financial review, finding subscription creep, cash flow visibility, budgeting
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        5. Ad Copy Generator — Test More Angles Without Spending More Hours
      </h2>
      <p>
        Most small businesses run ads with a handful of copy variations — not because more
        wouldn&apos;t help, but because writing more takes time they don&apos;t have. The result
        is creative fatigue: audiences see the same ads too many times, performance drops,
        spend increases to compensate, and the cycle repeats. The answer isn&apos;t more
        budget — it&apos;s more creative.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/ad-copy-generator">Ad Copy Variation Generator</PlaybookLink> skill
        works in two modes: analysis and generation. Feed it your existing top-performing ads,
        and it identifies which hooks, CTAs, and formats are driving results. Then it generates
        50+ new variations based on those proven patterns — for Facebook, Google, LinkedIn, or
        whatever platform you&apos;re running on. You go from a few tired ads to a full test
        queue without a copywriter or an agency.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Here are our five best-performing Facebook ads from last quarter. Identify the
          patterns that make them work, then generate 20 new variations using the same hooks
          and CTA styles — but with fresh angles for a spring promotion.&quot;
        </p>
      </div>
      <p>
        Even without existing ads to analyze, you can use the skill to generate an initial test
        batch: describe your product, your audience, and the action you want people to take, and
        it produces a set of variations across different emotional angles (fear of missing out,
        social proof, curiosity, direct benefit) ready to A/B test.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes · Best for: Facebook/Instagram ads, Google ads, LinkedIn campaigns, refresh fatigue
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        6. Competitive Analysis — Know Your Market Before Your Competitors Do
      </h2>
      <p>
        Most small businesses have a vague sense of who their competitors are and a vaguer sense
        of how they actually compare. When a customer asks &quot;how do you differ from X?&quot;
        the answer is improvised. When pricing decisions are made, they&apos;re based on
        memory of a website check from six months ago. A real competitive analysis — the kind
        that tracks features, pricing, positioning, and messaging systematically — tends to
        happen only when someone pays a consultant to do it.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/competitive-analysis">Competitive Analysis Framework</PlaybookLink> skill
        structures the job from end to end. Give it your top competitors and it produces a
        side-by-side comparison across features, pricing tiers, positioning language, go-to-market
        approach, and target customer profile — plus gap analysis showing where you have
        differentiation opportunities they haven&apos;t exploited.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          &quot;Analyze my top 4 competitors in the local accounting software market: [list names].
          Compare their pricing, feature sets, positioning, and messaging. Where do they all
          have gaps? What do they all claim that nobody actually differentiates on?&quot;
        </p>
      </div>
      <p>
        The output is a living document — update it quarterly when competitors change pricing,
        launch features, or shift messaging. Your competitive positioning stops being based on
        intuition and starts being based on evidence. That changes how you sell, how you price,
        and how you talk about your product.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Best for: pricing decisions, sales talking points, product roadmap, pitch deck positioning
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-6 border-b border-[#30363d] pb-2">
        The Full List at a Glance
      </h2>
      <div className="space-y-3">
        <SkillCard
          number={1}
          title="Brand Guidelines Generator"
          timeToSetup="10 min"
          difficulty="Intermediate"
          bestFor="Consistent visual identity and tone across every team member and contractor"
          href="/playbooks/brand-guidelines"
        />
        <SkillCard
          number={2}
          title="Business Plan Generator"
          timeToSetup="10 min"
          difficulty="Intermediate"
          bestFor="Loan applications, investor pitches, and strategic planning documents"
          href="/playbooks/business-plan-generator"
        />
        <SkillCard
          number={3}
          title="Contract Review & Risk Analyzer"
          timeToSetup="10 min"
          difficulty="Beginner"
          bestFor="Catching bad clauses in vendor agreements, NDAs, and client contracts before signing"
          href="/playbooks/contract-review"
        />
        <SkillCard
          number={4}
          title="Personal Budget Analyzer"
          timeToSetup="5 min"
          difficulty="Beginner"
          bestFor="Monthly financial visibility — spending categories, subscription creep, cash flow trends"
          href="/playbooks/budget-analyzer"
        />
        <SkillCard
          number={5}
          title="Ad Copy Variation Generator"
          timeToSetup="5 min"
          difficulty="Beginner"
          bestFor="Generating 50+ ad variations from proven patterns — no copywriter required"
          href="/playbooks/ad-copy-generator"
        />
        <SkillCard
          number={6}
          title="Competitive Analysis Framework"
          timeToSetup="10 min"
          difficulty="Beginner"
          bestFor="Structured competitor comparison for pricing, positioning, and differentiation decisions"
          href="/playbooks/competitive-analysis"
        />
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Which One to Set Up First
      </h2>
      <p>
        If you&apos;ve never used a Claude Skill before, start with the one that solves a pain
        point you felt this week. Not last year — this week. The skill that addresses something
        actively costing you time or money is the one you&apos;ll actually use, which means
        you&apos;ll see the return on the 5–10 minutes of setup immediately.
      </p>
      <p>
        A few common starting points by situation:
      </p>
      <div className="space-y-2 my-4">
        <div className="flex gap-3 text-sm">
          <span className="text-[#22d3ee] shrink-0">→</span>
          <p><strong className="text-foreground">You sign contracts regularly</strong> — start with Contract Review. The first contract you analyze will show you exactly how it works.</p>
        </div>
        <div className="flex gap-3 text-sm">
          <span className="text-[#22d3ee] shrink-0">→</span>
          <p><strong className="text-foreground">You&apos;re spending money on ads</strong> — start with Ad Copy. More creative, cheaper to test, faster to find what works.</p>
        </div>
        <div className="flex gap-3 text-sm">
          <span className="text-[#22d3ee] shrink-0">→</span>
          <p><strong className="text-foreground">You have a pitch or loan application coming up</strong> — start with Business Plan. The deadline is motivating and the output is tangible.</p>
        </div>
        <div className="flex gap-3 text-sm">
          <span className="text-[#22d3ee] shrink-0">→</span>
          <p><strong className="text-foreground">You&apos;ve never reviewed your full spending</strong> — start with Budget Analyzer. The first look is always revelatory.</p>
        </div>
      </div>
      <p>
        Once you&apos;ve used one, the pattern clicks: folder, CLAUDE.md, open Claude, describe
        the task. Every other skill works the same way. The hardest part is the first one — and
        that takes about ten minutes.
      </p>
    </BlogPostLayout>
  );
}
