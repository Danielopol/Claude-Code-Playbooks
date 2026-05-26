import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Designers: From Brief to Mockup in Minutes | Claude Code Playbooks Blog',
  description: 'Four Claude Skills that cover the full design workflow — visual art, design systems, brand guidelines, and data visualization — so founders and solopreneurs can produce professional output without a design team.',
  alternates: { canonical: '/blog/claude-skills-for-designers' },
  openGraph: {
    title: 'Claude Skills for Designers: From Brief to Mockup in Minutes (No Design Team Required)',
    description: 'Four Claude Skills that cover the full design workflow — visual art, design systems, brand guidelines, and data visualization — for founders and solopreneurs who need professional visual output.',
    url: 'https://www.claudecodehq.com/blog/claude-skills-for-designers',
    type: 'article',
    publishedTime: '2026-05-26',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Designers: From Brief to Mockup in Minutes',
    description: 'Canvas design, AI design director, brand guidelines, and chart design — four Claude Skills for professional visual output without a design team.',
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

export default function ClaudeSkillsForDesignersPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Designers: From Brief to Mockup in Minutes (No Design Team Required)"
      description="Four Claude Skills that cover the full design workflow — visual art, design systems, brand guidelines, and data visualization — so founders and solopreneurs can produce professional output without a design team."
      category="guide"
      difficulty="basic"
      readingTime="13 min read"
      createdAt="2026-05-26"
      tags={[
        'claude skills for designers',
        'ai design assistant claude',
        'canvas design ai',
        'ai ui designer',
        'brand guidelines AI',
        'data visualization AI',
        'Claude Code',
        'design without a team',
      ]}
      author="Claude Code Playbooks"
      slug="claude-skills-for-designers"
    >
      <p className="text-lg">
        The bottleneck is almost never ideas. It&apos;s the gap between &quot;I know what I
        want this to look like&quot; and &quot;I have a file I can actually use.&quot; Founders
        need decks that don&apos;t look amateur. Solopreneurs need landing page mockups for
        stakeholder reviews. Marketing managers need data charts that don&apos;t embarrass
        anyone. And hiring a designer for every output — a $150-per-hour relationship that
        involves briefings, revisions, and waiting — is the wrong tool for the volume of visual
        work a modern one-person operation actually generates.
      </p>
      <p>
        Most people have tried AI for design work and been disappointed. You describe what you
        want, you get back something generic — clip art energy with a thin layer of polish. The
        problem isn&apos;t the AI. It&apos;s that a general chat interface doesn&apos;t know your
        aesthetic, your brand, or the principles that separate intentional design from content
        that looks thrown together. It produces average output because it has no context for
        what above-average means for you.
      </p>
      <p>
        <strong className="text-foreground">Claude design skills</strong> — pre-configured
        instruction sets that tell Claude exactly how to approach visual work — solve the context
        problem. A skill that knows your aesthetic preferences, your brand rules, and your design
        philosophy produces outputs that feel considered rather than generated. This guide covers
        four skills that span the full design workflow: visual art and composition, full design
        systems, brand guidelines, and data visualization.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why AI design fails without a skill — and works with one
      </h2>
      <p>
        The failure mode is consistent: you ask for a design, describe it as best you can, and
        get something that technically matches your description but feels wrong. The proportions
        are off. The color choices are safe rather than intentional. The overall composition
        looks like someone followed instructions rather than made decisions.
      </p>
      <p>
        This happens because design is not primarily about description — it&apos;s about
        judgment. When a designer works from a brief, they bring a set of aesthetic principles
        that the brief doesn&apos;t spell out: how much whitespace is generous versus wasteful,
        when a serif feels classic versus dated, what makes a color palette feel cohesive rather
        than collected. A general AI prompt carries none of that tacit knowledge. A Claude Skill
        can.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-2">Without a design skill</p>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li>— Re-explain aesthetic preferences every session</li>
            <li>— Output is technically correct but feels generic</li>
            <li>— No design principles guiding the judgment calls</li>
            <li>— Revisions require describing what&apos;s wrong, not what&apos;s right</li>
            <li>— Brand inconsistency across outputs</li>
          </ul>
        </div>
        <div className="bg-[#161b22] border border-[#22d3ee]/30 rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-2">With a Claude design skill</p>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li className="text-[#22d3ee]/80">+ Design philosophy baked in from the start</li>
            <li className="text-[#22d3ee]/80">+ Aesthetic preferences guide every decision</li>
            <li className="text-[#22d3ee]/80">+ Consistent output across sessions and formats</li>
            <li className="text-[#22d3ee]/80">+ First draft is already intentional, not generic</li>
            <li className="text-[#22d3ee]/80">+ Brand rules enforced without re-briefing</li>
          </ul>
        </div>
      </div>
      <p>
        The four skills below each solve a distinct design problem. You don&apos;t need all four
        at once — start with the one that matches your immediate need, and the others become
        useful as your output requirements grow.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        1. Canvas Design — museum-quality visual art from a concept
      </h2>
      <p>
        Most AI image-adjacent tools produce decoration. Canvas Design produces composition.
        There&apos;s a meaningful difference: decoration fills space, composition communicates.
        This skill is built around a two-step process that mirrors how professional designers
        actually work — define the philosophy first, then express it visually.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/canvas-design">Canvas Design</PlaybookLink> skill
        starts with a design philosophy document: a written articulation of the concept you&apos;re
        exploring, the aesthetic movement it references, and the principles that should guide every
        visual decision. Once the philosophy is established, the skill produces the visual
        artifact — a PNG or PDF composition that communicates through form, space, and color rather
        than text and clip art. The output applies museum-quality craftsmanship principles:
        meticulous spacing, nothing overlapping inappropriately, proper margins, elements that each
        serve a purpose.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Create a visual design expressing the concept of emergence — the idea that
            complex behavior arises from simple rules. Start with a design philosophy document,
            then produce the canvas.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Design a visual philosophy inspired by Japanese minimalism — wabi-sabi, negative
            space, impermanence — and express it as a magazine-quality PNG for our product launch.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Develop a canvas for our SaaS conference keynote backdrop. Concept: precision
            meets warmth. No text in the image. Output as a 1920x1080 PDF.&quot;
          </p>
        </div>
      </div>
      <p>
        The deliberate philosophy-first step is what separates this from image generation prompts.
        By writing the design thinking before producing the visual, the skill forces a level of
        intentionality that shows in the output. Viewers may not be able to articulate why it
        looks considered — but they notice it.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm text-muted-foreground">You need a hero image for your landing page. You ask an AI for &quot;a modern, clean design that conveys innovation.&quot; You get a blue gradient with abstract geometric shapes and a vague sense of technology. You use it because you have nothing better.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm text-muted-foreground">You describe the concept behind your product. Canvas Design produces a philosophy document — precision, restraint, the tension between structure and organic growth — then a composition that expresses it. The image has a point of view. People ask who designed it.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Advanced · Best for: brand assets, conference visuals, portfolio work, product launch imagery, mood boards
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        2. AI Design Director — a full design system that knows your taste
      </h2>
      <p>
        One-off visuals are useful. A design system that produces consistent, on-aesthetic output
        across every asset you ever create is transformative. The difference between a brand that
        looks cohesive and one that looks like it was assembled from stock — across landing page,
        deck, social posts, product UI — is whether there&apos;s a real design system behind it
        or just a vague color scheme someone picked.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/ai-design-director">AI Design Director</PlaybookLink>
        {' '}skill builds that system by learning from your references rather than your descriptions.
        Descriptions of aesthetic are imprecise: &quot;modern but warm,&quot; &quot;minimal but
        not cold&quot; — these mean something different to every designer. The skill bypasses the
        language problem by working from examples you actually like: 30 to 50 screenshots, URLs,
        or reference images. It extracts the design principles those references share — color tokens,
        typography scales, spacing patterns, layout logic — and documents them as a design system
        you own.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">How to start</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Build my design reference library from these examples: [paste URLs or upload
          screenshots]. Extract the design principles they share — color palette, typography
          choices, spacing patterns, layout logic — and document them as a system I can apply
          to new work.&quot;
        </p>
      </div>
      <p>
        Once the design system exists, every subsequent request inherits it automatically. You
        don&apos;t describe your aesthetic to get a landing page — you just ask for the landing
        page. The skill already knows what &quot;your style&quot; means because it extracted it
        from things you actually chose.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">After the system is built</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Create a landing page in my aesthetic for our new product launch.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Generate 10 icon variations for [concept] — consistent with the design system.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Design a SaaS dashboard layout — sidebar, main content area, header — following
            the spacing and color tokens we established.&quot;
          </p>
        </div>
      </div>
      <p>
        The cost comparison is useful context: a design agency retainer runs $3,000 to $10,000
        per month. The AI Design Director skill, including the tools it connects to (Figma at
        ~$15/month, Framer at ~$20/month), runs under $50/month. The tradeoff is setup time —
        two hours to build the reference library and extract the design system — against
        unlimited on-demand output from that point forward.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm text-muted-foreground">Your brand has a &quot;look&quot; in your head. Every freelancer interprets it differently. The deck looks different from the site, the social posts look different from both. You spend 40% of every design review explaining what&apos;s wrong before explaining what you want.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm text-muted-foreground">The system extracted your design tokens from 40 reference examples you actually love. Every new asset — landing page, icon set, presentation template — is produced from the same tokens. Cohesion is structural, not coincidental.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 2 hours · Difficulty: Advanced · Best for: startup founders, solopreneurs with consistent brand needs, creative directors scaling output, indie makers building products
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        3. Brand Guidelines Generator — write down what your brand actually is
      </h2>
      <p>
        Most small companies have a brand that lives in the founder&apos;s head. The logo is
        established, maybe a primary color, a vague sense of font preference. Every new hire
        asks what font to use. Every freelancer gets a different briefing from a different
        person. The brand drifts with each person who touches it because nothing was written
        down rigorously enough to constrain it.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/brand-guidelines">Brand Guidelines Generator</PlaybookLink>
        {' '}skill turns the implicit into explicit. Feed it what you already have — existing
        materials, your website copy, logos, sample outputs you approve of — and it produces a
        complete brand style guide: hex-code color palette, typography rules with specific font
        names and usage contexts, logo usage specifications, voice and tone guidelines with
        examples, and explicit do&apos;s and don&apos;ts. The output is a document people can
        actually follow without calling the founder to ask a question.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Create brand guidelines for our SaaS company. We&apos;re building project
            management software for architecture firms. Tone: professional but not corporate,
            precise but not cold. Primary color: #1A2F4B. Logo attached. Include everything
            a freelance designer would need to work without a briefing call.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Update our brand guidelines to include our new product line. We&apos;ve moved
            upmarket — the guidelines should reflect a more premium positioning while keeping
            our existing color system. Here&apos;s our current guide: [paste]. What needs to change?&quot;
          </p>
        </div>
      </div>
      <p>
        Brand guidelines are the unsexy foundational work that makes everything else consistent.
        Run this skill before onboarding any designer, freelancer, or agency. The two hours
        you spend producing a real style guide saves dozens of hours in revision cycles — and
        eliminates the slow drift where the brand gradually becomes whatever whoever touched
        it last thought it should be.
      </p>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-4">
        <p className="text-sm font-semibold text-foreground mb-2">What a complete brand guideline covers</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-sm text-muted-foreground">
          <div>
            <p className="text-foreground font-medium mt-2 mb-1">Visual identity</p>
            <ul className="space-y-1">
              <li>— Color palette with hex codes</li>
              <li>— Typography: primary, secondary, body</li>
              <li>— Logo usage rules and clear space</li>
              <li>— Iconography style</li>
            </ul>
          </div>
          <div>
            <p className="text-foreground font-medium mt-2 mb-1">Brand voice</p>
            <ul className="space-y-1">
              <li>— Tone descriptors with examples</li>
              <li>— Words we use / words we avoid</li>
              <li>— Writing style rules</li>
              <li>— On-brand copy samples</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Intermediate · Best for: growing startups, agencies creating client deliverables, marketing teams onboarding freelancers, founders scaling content production
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        4. Chart Designer — make data tell a clear story
      </h2>
      <p>
        The hardest part of data visualization isn&apos;t building the chart — it&apos;s deciding
        which chart to build. Bar versus line versus scatter versus heatmap is a design decision
        that changes what story the data tells and whether the audience can read it at a glance.
        Most people default to bar charts for everything, which means some of their data is being
        communicated poorly every time they present.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/chart-designer">Chart &amp; Data Visualization Designer</PlaybookLink>
        {' '}skill handles both decisions — which chart type and how to configure it. Describe your
        data, your audience, and what story you&apos;re trying to tell, and the skill recommends
        the right visualization with a rationale, then produces the configuration for your charting
        library of choice: ECharts JSON, Chart.js config, or Excel setup instructions. Color
        schemes are optimized for readability and accessibility, not just aesthetics.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Visualize our monthly revenue by product line for the last 2 years. Audience:
            board of directors. Story: we want to show the shift in mix toward our higher-margin
            product. Recommend the best chart type and give me the ECharts config.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;I have cohort retention data — 12 monthly cohorts, retention tracked at 1, 3,
            6, and 12 months. I want to show which cohorts retained best and whether we&apos;ve
            improved over time. What&apos;s the right visualization?&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Design a dashboard layout for our weekly ops review: revenue trend, pipeline
            by stage, support ticket volume, and churn rate. Keep it readable for executives
            who will see it on a 15-inch laptop screen.&quot;
          </p>
        </div>
      </div>
      <p>
        The skill applies data visualization principles that most people know exist but
        don&apos;t reliably apply: start bar chart y-axes at zero, minimize chart junk, use
        color purposefully and not as decoration, label axes with units, sort data logically
        rather than by default order. The defaults it produces are better than what most people
        would configure manually — because the principles are baked in rather than optional.
      </p>
      <div className="space-y-2 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#f97316] font-mono text-sm font-bold shrink-0 mt-0.5">Before</span>
          <p className="text-sm text-muted-foreground">You have a spreadsheet with 24 months of revenue data. You build a default bar chart in Excel. The colors are the Excel defaults. The y-axis doesn&apos;t start at zero. Three people ask questions in the meeting about what the chart is actually showing.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex gap-4 items-start">
          <span className="text-[#22c55e] font-mono text-sm font-bold shrink-0 mt-0.5">After</span>
          <p className="text-sm text-muted-foreground">You describe your data and what story it should tell. The skill recommends a small-multiple line chart, explains why, produces the ECharts config with a deliberate color scheme and properly labeled axes. The chart communicates the story in three seconds. No questions.</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes · Difficulty: Intermediate · Best for: data analysts, product managers, founders presenting to investors, anyone building dashboards or reports
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The design workflow: how these four skills connect
      </h2>
      <p>
        Each skill solves an independent problem. But used in sequence, they form a complete
        design operating system for a company without a design team:
      </p>
      <div className="space-y-3 my-6">
        {[
          {
            step: '1',
            label: 'Brand Guidelines',
            action: 'Start here. Write down what your brand actually is — color palette, typography, voice — before anyone else touches it.',
            cadence: 'Once, then update when brand evolves',
          },
          {
            step: '2',
            label: 'AI Design Director',
            action: 'Build a design system from references you love. Lock your aesthetic as tokens that every subsequent output inherits automatically.',
            cadence: '2-hour setup, then ongoing production',
          },
          {
            step: '3',
            label: 'Canvas Design',
            action: 'Produce individual visual assets — hero images, keynote backdrops, mood boards, portfolio pieces — from concept through composition.',
            cadence: 'Per asset or campaign',
          },
          {
            step: '4',
            label: 'Chart Designer',
            action: 'Visualize data for any audience or context — board decks, dashboards, reports — with chart type recommendations and export-ready configs.',
            cadence: 'Per report or dashboard',
          },
        ].map(({ step, label, action, cadence }) => (
          <div key={step} className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 flex items-center justify-center text-[#22d3ee] text-xs font-semibold">
              {step}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                <p className="text-sm font-semibold text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground">{cadence}</p>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">{action}</p>
            </div>
          </div>
        ))}
      </div>
      <p>
        The setup order matters. Brand Guidelines and AI Design Director are foundational — they
        establish the rules that Canvas Design and Chart Designer follow. If you run Canvas Design
        or Chart Designer without a design system behind them, the outputs are good but not
        yours. With the foundation in place, every output is automatically on-brand because the
        skill knows what on-brand means.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Practical tips for non-designers using these skills
      </h2>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Collect references before you prompt</p>
          <p className="text-sm text-muted-foreground">
            The clearest signal you can give a design skill is examples of work you actually
            like — not adjectives. Before running any design session, spend 15 minutes
            collecting 10 to 20 screenshots or URLs of designs that feel right. The skill
            can extract principles from examples that words can&apos;t fully capture.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Specify the output context, not just the output</p>
          <p className="text-sm text-muted-foreground">
            &quot;Design a hero image&quot; is a weak prompt. &quot;Design a hero image for a
            SaaS landing page targeting mid-market CFOs, displayed at 1440px wide, dark
            background, no people in the image&quot; gives the skill enough context to make
            every judgment call correctly. The more constraints you specify, the less guessing
            the skill does.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Iterate on the philosophy, not the pixels</p>
          <p className="text-sm text-muted-foreground">
            When an output isn&apos;t quite right, resist the instinct to describe pixel-level
            changes. Instead, articulate what&apos;s wrong at the principle level: &quot;it feels
            too corporate,&quot; &quot;the spacing feels cramped,&quot; &quot;the color choices
            feel random rather than deliberate.&quot; Design skills respond better to principled
            feedback than to specific edits.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">The Brand Guidelines output is your master CLAUDE.md</p>
          <p className="text-sm text-muted-foreground">
            Once you&apos;ve generated brand guidelines, paste the core sections into the
            CLAUDE.md file you use for every design session. Any skill that reads the CLAUDE.md
            starts with your brand context already loaded — you never re-explain your color
            palette, typography, or voice rules to a design AI again.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The four design skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/canvas-design"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Canvas Design</p>
          <p className="text-sm text-muted-foreground">Museum-quality visual compositions in PNG and PDF — philosophy-first, then expression through form, color, and space.</p>
        </Link>
        <Link
          href="/playbooks/ai-design-director"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">AI Design Director</p>
          <p className="text-sm text-muted-foreground">Full design system extracted from your references — design tokens, typography, layout patterns — for consistent on-aesthetic output at scale.</p>
        </Link>
        <Link
          href="/playbooks/brand-guidelines"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Brand Guidelines Generator</p>
          <p className="text-sm text-muted-foreground">Complete brand style guide — color palette, typography, logo rules, voice and tone — that every designer and freelancer can follow without a briefing call.</p>
        </Link>
        <Link
          href="/playbooks/chart-designer"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Chart &amp; Data Visualization Designer</p>
          <p className="text-sm text-muted-foreground">Right chart type recommendation plus ECharts, Chart.js, or Excel config — applied data viz principles that make your data readable at a glance.</p>
        </Link>
      </div>
      <p>
        Design is the one discipline where most founders quietly accept that their output is
        below the standard they&apos;d want — because hiring the alternative is expensive and
        slow, and general AI tools produce output that looks generated. Claude design skills
        close that gap without the agency retainer. The first session is slower than asking an
        agency; every session after that is instant, on-brand, and yours.
      </p>
    </BlogPostLayout>
  );
}
