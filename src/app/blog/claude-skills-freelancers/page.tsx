import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Freelancers: Automate the Work That Doesn\'t Pay | Claude Code Playbooks Blog',
  description: 'Five Claude Skills every freelancer should set up — covering the admin work that eats your billable hours: content, cold email, proposals, contract review, and invoicing.',
  alternates: { canonical: '/blog/claude-skills-freelancers' },
  openGraph: {
    title: 'Claude Skills for Freelancers: Automate the Work That Doesn\'t Pay',
    description: 'Five Claude Skills every freelancer should set up — covering the admin work that eats your billable hours: content, cold email, proposals, contract review, and invoicing.',
    url: 'https://www.claudecodehq.com/blog/claude-skills-freelancers',
    type: 'article',
    publishedTime: '2026-05-14',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Freelancers: Automate the Work That Doesn\'t Pay',
    description: 'Five Claude Skills that handle the admin work eating your freelance hours — so you can spend more time on the work clients actually pay for.',
    images: ['https://www.claudecodehq.com/og-image.jpg'],
  },
};

function SkillCard({
  number,
  slug,
  title,
  pain,
  what,
  prompt,
  result,
  timeSaved,
}: {
  number: number;
  slug: string;
  title: string;
  pain: string;
  what: string;
  prompt: string;
  result: string;
  timeSaved: string;
}) {
  return (
    <div className="my-10">
      <div className="flex items-center gap-3 mb-1">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#22d3ee] text-[#0d1117] font-bold text-sm shrink-0">
          {number}
        </span>
        <h2 className="text-xl font-semibold text-foreground">
          <Link href={`/playbooks/${slug}`} className="hover:text-[#22d3ee] transition-colors">
            {title}
          </Link>
        </h2>
      </div>

      <div className="pl-10 space-y-3">
        <p className="text-sm text-[#f97316] font-medium">{pain}</p>
        <p>{what}</p>

        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22d3ee] mb-2 uppercase tracking-wide">Example prompt</p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">&ldquo;{prompt}&rdquo;</p>
        </div>

        <div className="bg-[#0d1117] border border-[#22c55e]/30 rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] mb-2 uppercase tracking-wide">What you get</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{result}</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Time saved:</span>
          <span className="text-xs bg-[#21262d] border border-[#30363d] rounded px-2 py-0.5 text-foreground font-medium">
            {timeSaved}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ClaudeSkillsFreelancersPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Freelancers: Automate the Work That Doesn't Pay"
      description="Five Claude Skills every freelancer should set up — covering the admin work that eats your billable hours: content, cold email, proposals, contract review, and invoicing."
      category="guide"
      difficulty="basic"
      readingTime="11 min read"
      createdAt="2026-05-14"
      tags={[
        'claude skills freelancers',
        'claude freelance automation',
        'ai skills for freelancers',
        'freelance admin automation',
        'Claude Code',
        'freelance productivity',
        'automate freelance work',
      ]}
      author="Claude Code Playbooks"
      slug="claude-skills-freelancers"
    >
      <p className="text-lg">
        Freelancing sounds like freedom — pick your projects, set your rates, work when you
        want. And it is, until you account for the invisible second job that comes with it:
        writing proposals, chasing invoices, reviewing contracts, producing content to stay
        visible, and cold-emailing prospects who never reply. None of that work is billable.
        All of it eats time.
      </p>
      <p>
        The average freelancer spends{' '}
        <strong className="text-foreground">15–20 hours a month</strong> on admin work that
        generates zero revenue. That&apos;s two to three billable days lost every month to
        the business of running a business. Claude Skills — purpose-built playbooks that
        tell Claude Code exactly how to handle a specific task — can automate most of it.
        This guide covers the five that matter most.
      </p>

      {/* What is a Claude Skill */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
        <p className="text-sm font-semibold text-foreground mb-2">What is a Claude Skill?</p>
        <p className="text-sm">
          A Claude Skill is a CLAUDE.md template — a short instruction file you drop into a
          project folder. When you open that folder in Claude Code, it reads the file and
          becomes an expert in that specific task: writing proposals in your voice, reviewing
          contracts with your risk priorities, generating invoices with your branding. You set
          it up once, and it works from a single prompt every time after that.
        </p>
        <p className="text-sm mt-2">
          No code. No API keys. No SaaS subscription. Just Claude Code and a text file.
        </p>
      </div>

      <SkillCard
        number={1}
        slug="blog-post-writer"
        title="Blog Post Writer — Stay Visible Without Spending Hours Writing"
        pain="The pain: You know thought leadership brings in clients. You never have time to write it."
        what="Freelancers who publish consistently attract better-quality inbound leads. The problem isn't knowing what to write — it's the activation energy of sitting down and writing it. Researching, drafting, editing, formatting, and publishing a single post can eat half a day. The Blog Post Writer skill turns a rough idea or bullet list into a fully structured, on-brand post ready to publish."
        prompt="Write a 900-word blog post for freelance UX designers. Topic: 'Why your portfolio is losing you clients (and what to fix this weekend)'. Audience: mid-level freelancers looking to level up their rates. Tone: direct, practical, no fluff. Include a clear intro hook, three actionable sections, and a CTA at the end."
        result="A ready-to-publish post with a strong hook, structured sections, smooth transitions, and a CTA — written in the tone you specified. You edit for voice, add any personal examples, and publish. Total time: under 20 minutes instead of 3 hours."
        timeSaved="2–3 hours per post"
      />

      <SkillCard
        number={2}
        slug="cold-email-personalizer"
        title="Cold Email Personalizer — Land Clients Without the Dread"
        pain="The pain: Cold outreach works. Personalized cold outreach really works. Writing 30 personalized emails does not."
        what="Generic cold emails get ignored. Personalized ones — referencing the prospect's recent work, a specific problem their company is facing, a detail from their LinkedIn — get replies. But personalizing at scale is the task that every freelancer knows they should do and almost nobody actually does, because it takes forever. The Cold Email Personalizer skill takes a prospect list and produces a tailored email for each one."
        prompt="Write a cold email to Sarah Chen, Head of Design at Fintech startup Lumio. I'm a freelance product designer. They just raised a Series A and their website still looks pre-seed. Reference that the funding announcement mentioned plans to triple the team — they'll need a design system to scale. Keep it under 100 words, no fluff, clear ask."
        result="A tight, specific email that opens with an insight about their situation, explains the gap it creates, and makes a clear, low-friction ask — all in under 100 words. Run the same prompt for each prospect on your list, adjusting the input details. Twenty emails in twenty minutes."
        timeSaved="4–6 hours per outreach batch"
      />

      <SkillCard
        number={3}
        slug="cover-letter-generator"
        title="Cover Letter / Proposal Generator — Pitch Without Starting from Scratch"
        pain="The pain: Every proposal feels like it should be custom. Writing from a blank page every time is exhausting."
        what="Whether you&apos;re responding to a Upwork brief, a referral intro, or an RFP from a mid-market company, the proposal is where deals are won or lost — and it&apos;s also where most freelancers spend disproportionate time. The Cover Letter / Proposal Generator skill produces a tailored pitch from your core credentials and the job details. You add the human touches; it handles the structure and the boilerplate."
        prompt="Write a proposal for a freelance content strategy contract. The client is a B2B SaaS company in the HR tech space. They need a 6-month content strategy, monthly editorial calendar, and 4 long-form articles/month. My background: 6 years in B2B content, worked with 3 HR tech companies. Emphasize ROI and measurable outcomes. Keep it under 400 words."
        result="A structured proposal with a punchy opener, relevant credential highlights, a clear scope summary, and a confident close. Paste it into your proposal template, adjust the specifics, attach your rate, send. First draft in under two minutes."
        timeSaved="1–2 hours per proposal"
      />

      <SkillCard
        number={4}
        slug="contract-review"
        title="Contract Review — Catch Bad Terms Before You Sign"
        pain="The pain: You can't afford a lawyer for every contract. You also can't afford to sign one with a trap in it."
        what="Freelancers sign contracts that disadvantage them all the time — IP assignment clauses that hand over work you never intended to sell, non-compete terms that block future clients in your niche, payment clauses with 90-day net terms buried in paragraph 11. The Contract Review skill reads a contract and flags the clauses that actually matter: payment terms, IP ownership, kill fees, non-solicitation, and liability caps. It tells you what to push back on and how."
        prompt="Review this freelance services agreement. Flag anything unusual in the IP assignment, non-compete, payment terms, and liability sections. Tell me what's standard, what's negotiable, and what I should push back on before signing. Give me specific redline language for the two or three issues that matter most."
        result="A prioritized list of flagged clauses with plain-English explanations of what each one means for you practically, which are standard and not worth fighting, and which are legitimately problematic. Plus specific redline language you can paste into your response email — without paying $400/hour for the same output."
        timeSaved="2–3 hours (or $300–500 in legal fees)"
      />

      <SkillCard
        number={5}
        slug="invoice-generator"
        title="Invoice Generator — Get Paid Faster, With Less Friction"
        pain="The pain: Generating and sending invoices is the last thing you want to do after finishing a project."
        what="Invoice generation sounds trivial until you&apos;re doing it for 15 clients a month, with different rates, different currencies, different tax requirements, and different payment methods. The Invoice Generator skill produces a properly formatted, branded invoice PDF from a one-line prompt — with sequential numbering, correct tax calculation, and your payment details in the format the client expects. No more copying last month&apos;s invoice and forgetting to change the date."
        prompt="Invoice for Bright Agency. 32 hours of brand strategy work at $150/hr. Plus $600 for the brand audit deck. They're UK-based so GBP and 20% VAT. Net 30. Their billing contact is accounts@brightagency.co."
        result="A fully formatted PDF — INV-1047, GBP, with correct VAT calculation, your bank details, payment terms, and due date. Saved to your invoices folder with a consistent naming convention. Ready to email in under 60 seconds."
        timeSaved="15–20 minutes per invoice"
      />

      {/* The compounding effect */}
      <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4 border-b border-[#30363d] pb-2">
        The Compounding Effect: Running Them Together
      </h2>
      <p>
        Each skill saves time on its own. Together, they cover the full arc of winning and
        running freelance work — from landing a client to getting paid:
      </p>
      <div className="relative my-6">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-[#30363d]" />
        <div className="space-y-5 pl-10">
          {[
            {
              label: 'Attract inbound',
              detail: 'Blog Post Writer produces consistent thought leadership that brings warm leads to you, so cold outreach isn\'t the only source of new business.',
            },
            {
              label: 'Run targeted outreach',
              detail: 'Cold Email Personalizer sends tailored pitches to the prospects you want, at a volume that would otherwise be impossible to personalize.',
            },
            {
              label: 'Win the pitch',
              detail: 'Cover Letter Generator produces a tailored proposal in two minutes — fast enough to respond while the client is still warm, strong enough to stand out.',
            },
            {
              label: 'Sign safely',
              detail: 'Contract Review catches the clause that would have assigned your IP or locked you into 90-day net terms before you agree to it.',
            },
            {
              label: 'Get paid cleanly',
              detail: 'Invoice Generator creates and sends a professional invoice the day the project closes — no delay, no formatting errors, no awkward follow-up.',
            },
          ].map(({ label, detail }) => (
            <div key={label} className="relative">
              <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-[#22d3ee] border-2 border-[#0d1117]" />
              <p className="font-semibold text-foreground text-sm">{label}</p>
              <p className="text-sm text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </div>
      <p>
        Total time saved across the five skills: roughly{' '}
        <strong className="text-foreground">12–18 hours per month</strong>. For a freelancer
        billing at $100/hour, that&apos;s $1,200–$1,800 in recovered capacity every month.
        At higher rates, the math gets more compelling fast.
      </p>

      {/* Time audit callout */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6">
        <p className="text-sm font-semibold text-foreground mb-2">
          Before you set these up: do a 15-minute time audit
        </p>
        <p className="text-sm">
          Log where your non-billable hours went last month. Most freelancers are surprised
          how quickly &ldquo;just a couple hours on admin&rdquo; adds up. The skill that
          saves the most time is always the one that addresses your biggest actual drain
          — not the one that sounds most impressive. Start there.
        </p>
      </div>

      {/* Start here */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Start Here
      </h2>
      <p>
        Each skill below is a ready-to-download CLAUDE.md template. Pick the one that
        addresses your most painful non-billable task and set it up today — it takes under
        ten minutes. Most freelancers who try one set up all five by the end of the week.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {[
          {
            slug: 'blog-post-writer',
            title: 'Blog Post Writer',
            desc: 'Thought leadership content in your voice — without the 3-hour time sink.',
          },
          {
            slug: 'cold-email-personalizer',
            title: 'Cold Email Personalizer',
            desc: 'Tailored outreach at scale — personalized emails that actually get replies.',
          },
          {
            slug: 'cover-letter-generator',
            title: 'Proposal Generator',
            desc: 'First-draft proposals in two minutes — structured, on-brand, ready to customize.',
          },
          {
            slug: 'contract-review',
            title: 'Contract Review',
            desc: 'Flag bad clauses and get redline language before you sign anything.',
          },
          {
            slug: 'invoice-generator',
            title: 'Invoice Generator',
            desc: 'Branded, tax-correct PDFs from a single prompt — in under 60 seconds.',
          },
        ].map(({ slug, title, desc }) => (
          <Link
            key={slug}
            href={`/playbooks/${slug}`}
            className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
          >
            <p className="font-semibold text-foreground mb-1">{title}</p>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </Link>
        ))}
      </div>

      <p>
        The goal isn&apos;t to automate your work — it&apos;s to automate the work{' '}
        <em>around</em> your work. The part clients pay for is your judgment, your craft,
        your relationships. Everything else is overhead. These skills handle the overhead
        so you can do more of the former.
      </p>
    </BlogPostLayout>
  );
}
