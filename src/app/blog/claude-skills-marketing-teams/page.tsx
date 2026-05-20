import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Marketing Teams: From Ad Copy to Campaign Analysis | Claude Code Playbooks Blog',
  description: 'How marketing teams use Claude Skills to produce on-brand ad copy at scale, plan campaigns faster, analyze competitor ads, repurpose content across channels, and measure performance — all with consistent brand voice.',
  alternates: { canonical: '/blog/claude-skills-marketing-teams' },
  openGraph: {
    title: 'Claude Skills for Marketing Teams: From Ad Copy to Campaign Analysis',
    description: 'How marketing teams use Claude Skills to produce on-brand ad copy at scale, plan campaigns faster, analyze competitor ads, repurpose content across channels, and measure performance.',
    url: 'https://www.claudecodehq.com/blog/claude-skills-marketing-teams',
    type: 'article',
    publishedTime: '2026-05-20',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Marketing Teams: From Ad Copy to Campaign Analysis',
    description: 'Five Claude Skills that cover the full marketing workflow — brand analysis, campaign planning, ad copy, content repurposing, and competitive intelligence.',
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

export default function ClaudeSkillsMarketingTeamsPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Marketing Teams: From Ad Copy to Campaign Analysis"
      description="How marketing teams use Claude Skills to produce on-brand ad copy at scale, plan campaigns faster, analyze competitor ads, repurpose content across channels, and measure performance — all with consistent brand voice."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-05-20"
      tags={['claude skills marketing', 'claude marketing automation', 'claude skills for marketers', 'AI marketing', 'ad copy AI', 'campaign planning AI', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-marketing-teams"
    >
      <p className="text-lg">
        Most marketing teams are already using AI — but using it badly. The workflow is the
        same everywhere: open a chat window, explain the brand from scratch, describe the audience,
        paste in some context, generate output, close the tab. Next session: start over. The brand
        voice that took years to build gets re-explained in two sentences every time.
      </p>
      <p>
        Claude Skills fix the fundamental problem. A skill that holds your brand guidelines, target
        personas, campaign context, and tone rules doesn&apos;t need a briefing. Every session
        starts from a complete picture. The first output is on-brand because the skill already knows
        what &quot;on-brand&quot; means for you specifically.
      </p>
      <p>
        This guide covers five skills that span the full marketing workflow — from brand understanding
        through campaign planning, creative production, content multiplication, and competitive
        intelligence — and how they work together as a coherent system rather than isolated tools.
      </p>

      {/* ── Why skills beat chat for marketing ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why Claude Skills Beat Chat for Marketing Work
      </h2>
      <p>
        The core advantage is persistent, shared context. Consider the difference:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-2">Without a skill</p>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li>— Re-explain brand voice every session</li>
            <li>— Re-paste persona descriptions per prompt</li>
            <li>— Output quality varies with who wrote the prompt</li>
            <li>— No institutional memory between team members</li>
            <li>— Off-brand outputs require extensive editing</li>
          </ul>
        </div>
        <div className="bg-[#161b22] border border-[#22d3ee]/30 rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-2">With a Claude Skill</p>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li className="text-[#22d3ee]/80">+ Brand voice baked into every output</li>
            <li className="text-[#22d3ee]/80">+ Personas, guidelines, tone rules always present</li>
            <li className="text-[#22d3ee]/80">+ Consistent output regardless of who runs the session</li>
            <li className="text-[#22d3ee]/80">+ Shareable CLAUDE.md across the team</li>
            <li className="text-[#22d3ee]/80">+ First draft is already on-brand</li>
          </ul>
        </div>
      </div>
      <p>
        For teams, the shared CLAUDE.md is particularly valuable. Drop the skill file into a shared
        folder (Notion, Drive, Dropbox) and every team member works from the same foundation.
        The junior copywriter&apos;s first ad draft and the senior strategist&apos;s campaign brief
        both start from the same brand context.
      </p>

      {/* ── Skill 1: Brand Analyzer ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        1. Brand Analyzer — understand your brand before you create anything
      </h2>
      <p>
        The most common source of inconsistent marketing output is unclear brand definition.
        &quot;Friendly but professional&quot; means something different to every person on the
        team. &quot;We talk to small business owners&quot; leaves the audience underspecified.
        When the brief is vague, the output is unpredictable.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/brand-analyzer">Brand Analyzer</PlaybookLink> skill
        starts by diagnosing your brand before producing anything. Feed it your existing marketing
        materials — website copy, social posts, ad examples, any brand guide you have — and it
        produces a structured brand analysis: what you actually communicate (versus what you think
        you communicate), your current voice characteristics, audience assumptions baked into your
        messaging, and where your brand positioning is ambiguous or inconsistent.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Analyze our brand based on these materials: [paste website copy, recent ads, social
          posts]. What voice characteristics come through consistently? Where are we inconsistent?
          What does our messaging imply about who we think our audience is?&quot;
        </p>
      </div>
      <p>
        Run Brand Analyzer first — before building any other skill. The output becomes the brand
        section of your master marketing CLAUDE.md: the document that every other skill reads to
        understand who you are before producing output.
      </p>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-4">
        <p className="text-sm font-semibold text-foreground mb-2">Use the output to build your master brand CLAUDE.md</p>
        <pre className="text-sm font-mono text-[#e6edf3] whitespace-pre-wrap leading-relaxed">{`# Brand Context

## Voice
[Paste the voice characteristics Brand Analyzer identified]

## Audience
[Primary persona — who they are, what they care about, what they fear]

## Messaging Hierarchy
[Core message → Supporting claims → Proof points]

## Tone Rules
[What we always do / never do in copy]

## Examples of on-brand copy
[2–3 samples that represent us at our best]`}</pre>
      </div>

      {/* ── Skill 2: Campaign Planner ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        2. Campaign Planner — strategy and architecture before the creative starts
      </h2>
      <p>
        The most expensive mistake in marketing is executing the wrong campaign well. Creative
        production, ad spend, and distribution costs are all sunk once a campaign launches — which
        makes pre-production strategy disproportionately valuable. Most teams skip it because it
        takes time they feel they don&apos;t have.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/campaign-planner">Campaign Planner</PlaybookLink> skill
        compresses campaign strategy into a structured session. Describe your goal, budget, timeline,
        and audience, and the skill produces: campaign objective and success metrics, channel mix
        recommendation with rationale, content pillars and message hierarchy, a week-by-week
        execution calendar, and the measurement framework to assess whether it worked.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Plan a campaign to launch [product/feature] in Q3. Goal: [specific outcome with number].
          Budget: $[X]. Primary audience: [persona]. Timeline: 8 weeks. Give me the full campaign
          architecture — channels, messaging pillars, weekly calendar, and what we measure to know
          if it worked.&quot;
        </p>
      </div>
      <p>
        The output isn&apos;t a document to file — it&apos;s the brief that other skills work from.
        Once the Campaign Planner has defined the messaging pillars, the Ad Copy Generator knows
        exactly what angles to explore. Once the channel mix is decided, the Content Repurposer
        knows where each asset needs to live.
      </p>

      {/* ── Skill 3: Ad Copy Generator ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        3. Ad Copy Generator — high-volume creative production without brief fatigue
      </h2>
      <p>
        Paid advertising at any meaningful scale requires volume. Testing 20 headline variations,
        5 angle hypotheses, 3 audience framings — the math produces a lot of copy fast. Writing
        each piece from scratch is slow; briefing an agency for each variant is expensive; asking
        a general AI without context produces off-brand output you spend more time editing than
        you saved generating.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/ad-copy-generator">Ad Copy Generator</PlaybookLink> skill
        is built for production volume. Because it reads your brand CLAUDE.md, every variant starts
        on-brand without a briefing. Specify the platform (Meta, Google, LinkedIn), the ad format
        (headline, body, CTA), the angle (problem-agitate-solve, social proof, curiosity hook),
        and the quantity — and get a complete test matrix back.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompts</p>
        <div className="space-y-2">
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Write 10 Meta ad headlines for our [product] targeting [persona]. Test 3 angles:
            time savings, cost reduction, and ease of use. Keep each under 40 characters.
            Mark which angle each headline uses.&quot;
          </p>
          <p className="text-sm font-mono text-[#f97316] leading-relaxed">
            &quot;Generate a full Meta ad set: 5 primary text variants, 3 headline variants,
            3 CTA options. Campaign goal: trial signups. Angle: [describe]. Format the output
            as a table I can paste into our ads manager.&quot;
          </p>
        </div>
      </div>
      <p>
        The table format request matters. Most teams waste time reformatting AI output before it
        can be used. Asking for a specific format upfront means the output goes directly into your
        workflow — copy-paste, not copy-reformat-paste.
      </p>

      {/* ── Skill 4: Content Repurposer ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        4. Content Repurposer — multiply every asset across every channel
      </h2>
      <p>
        Most marketing teams produce content at one-tenth the rate their distribution channels
        can absorb. A blog post gets published once, maybe shared once on LinkedIn, and then
        it&apos;s done. The research, interviews, and thinking that went into it sit unused.
        Meanwhile the team is staring at a blank content calendar for next month.
      </p>
      <p>
        The <PlaybookLink href="/playbooks/content-repurposer">Content Repurposer</PlaybookLink>{' '}
        skill extracts maximum reach from every piece of content you already have. Feed it a blog
        post, a podcast transcript, a webinar recording summary, or a case study — and it produces
        platform-native versions for every channel in your distribution mix: an X/Twitter thread,
        a LinkedIn article, an email newsletter excerpt, short-form video script points, and
        pull-quote graphics text.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Repurpose this blog post across our distribution channels: [paste post]. We publish
          on LinkedIn, X, and email. Produce: a 10-tweet thread, a LinkedIn article version
          (800 words), a 150-word email newsletter excerpt, and 5 pull quotes for social
          graphics. Match our brand voice throughout.&quot;
        </p>
      </div>
      <p>
        Pair this with the{' '}
        <PlaybookLink href="/playbooks/social-media-content-engine">Social Media Content Engine</PlaybookLink>{' '}
        skill for teams that need ongoing social content beyond repurposing — it handles
        original content production for platforms with specific cadence requirements.
      </p>
      <p>
        The repurposing habit is where the ROI math gets compelling. A 2,000-word post that took
        4 hours to write becomes 6 pieces of platform-native content in 20 minutes. The team
        appears to be everywhere without producing proportionally more original work.
      </p>

      {/* ── Skill 5: Competitive Ads Extractor ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        5. Competitive Ads Extractor — mine competitor creative for strategic intelligence
      </h2>
      <p>
        Competitive ad analysis is one of the highest-leverage research activities in marketing —
        and one of the most neglected. Competitors&apos; ads tell you what messages they&apos;ve
        found worth paying to distribute, which audiences they&apos;re targeting, and which angles
        are getting enough engagement to keep running. That&apos;s valuable signal.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/competitive-ads-extractor">Competitive Ads Extractor</PlaybookLink>{' '}
        skill structures this intelligence. Feed it competitor ads you&apos;ve collected from Meta
        Ad Library, Google Ads Transparency, or manual observation, and it extracts: the core
        message of each ad, the audience it&apos;s targeting based on copy signals, the emotional
        hook being used, how long it appears to have been running (a proxy for performance), and
        what the aggregate pattern tells you about their current strategy.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Analyze these competitor ads: [paste ad copy and descriptions]. For each: identify
          the core message, target audience signals, emotional hook, and angle. Then give me a
          summary: what messages are they betting on, where are the gaps we could own, and what
          should we test based on what they&apos;re not saying?&quot;
        </p>
      </div>
      <p>
        The &quot;what they&apos;re not saying&quot; prompt is particularly useful. Competitive
        gaps — the angles your competitors have left open — are often better creative territory
        than going head-to-head on the messages they&apos;re already spending to amplify.
      </p>

      {/* ── Closing the loop: measurement ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Closing the Loop: Campaign Performance Analysis
      </h2>
      <p>
        The five skills above cover strategy, production, and intelligence. The final piece is
        measurement — turning raw campaign data into the insight that improves the next cycle.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/marketing-performance-reporter">Marketing Performance Reporter</PlaybookLink>{' '}
        skill takes your campaign metrics — CTR, CPC, conversion rate, ROAS, channel breakdown —
        and produces a structured performance report: what worked, what didn&apos;t, what to scale,
        what to cut, and what hypotheses to test next. It&apos;s the skills-based version of the
        post-campaign debrief that too often doesn&apos;t happen because the team is already on
        to the next thing.
      </p>
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wide">Example prompt</p>
        <p className="text-sm font-mono text-[#f97316] leading-relaxed">
          &quot;Here are our Q2 campaign results: [paste metrics by channel and creative]. Write a
          performance report — headline numbers, channel-level analysis, which creatives won,
          what we should scale in Q3, and three specific hypotheses to test next quarter.&quot;
        </p>
      </div>

      {/* ── The full workflow ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Full Marketing Workflow
      </h2>
      <p>
        Used in sequence, the six skills form a complete campaign cycle:
      </p>
      <div className="space-y-3 my-6">
        {[
          {
            step: '1',
            label: 'Brand Analyzer',
            action: 'Define your brand — voice, audience, messaging hierarchy — and lock it into a master CLAUDE.md',
            cadence: 'Once, then update quarterly',
          },
          {
            step: '2',
            label: 'Competitive Ads Extractor',
            action: 'Research competitor creative before planning — understand the landscape and the gaps',
            cadence: 'Pre-campaign or monthly',
          },
          {
            step: '3',
            label: 'Campaign Planner',
            action: 'Build campaign architecture — objective, channel mix, messaging pillars, calendar, measurement plan',
            cadence: 'Per campaign',
          },
          {
            step: '4',
            label: 'Ad Copy Generator',
            action: 'Produce on-brand creative at volume — full test matrices for every channel and format',
            cadence: 'Per campaign, ongoing',
          },
          {
            step: '5',
            label: 'Content Repurposer',
            action: 'Multiply every asset across your distribution channels — 1 piece of content → 6+ formats',
            cadence: 'Every time you publish',
          },
          {
            step: '6',
            label: 'Marketing Performance Reporter',
            action: 'Analyze results, identify what to scale and cut, generate hypotheses for the next cycle',
            cadence: 'Post-campaign or monthly',
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

      {/* ── Team setup ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Setting Up Skills for a Team (Not Just an Individual)
      </h2>
      <p>
        Individual Claude Skills are powerful. Team-level Claude Skills are a force multiplier.
        Here&apos;s how to set them up so the whole team benefits:
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Share the master brand CLAUDE.md</p>
          <p className="text-sm text-muted-foreground">
            Store your brand CLAUDE.md in a shared folder (Notion, Dropbox, Drive). Every team
            member downloads it into their local project folder. Everyone works from the same
            brand foundation — no diverging interpretations of &quot;our voice.&quot;
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Create campaign-specific sub-files</p>
          <p className="text-sm text-muted-foreground">
            For each campaign, create a campaign context file (campaign goal, messaging pillars,
            audience, constraints). Team members add this to their project folder alongside the
            brand CLAUDE.md. The skill then reads both — brand context plus campaign context —
            for outputs that are simultaneously on-brand and on-brief.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Version and update systematically</p>
          <p className="text-sm text-muted-foreground">
            Add a version date to your CLAUDE.md header. When the brand evolves, update the
            shared file and note what changed. Team members know they&apos;re working from the
            current version — not a six-month-old brand brief that was never updated.
          </p>
        </div>
      </div>

      {/* ── CTA grid ── */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Five Core Marketing Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/brand-analyzer"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Brand Analyzer</p>
          <p className="text-sm text-muted-foreground">Diagnose your actual brand — voice, audience signals, positioning gaps — from your existing materials. Build from here.</p>
        </Link>
        <Link
          href="/playbooks/campaign-planner"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Campaign Planner</p>
          <p className="text-sm text-muted-foreground">Full campaign architecture from goal to calendar — channels, messaging pillars, weekly plan, and measurement framework.</p>
        </Link>
        <Link
          href="/playbooks/ad-copy-generator"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Ad Copy Generator</p>
          <p className="text-sm text-muted-foreground">On-brand ad creative at volume — test matrices for any platform, format, and angle, ready to paste into your ads manager.</p>
        </Link>
        <Link
          href="/playbooks/content-repurposer"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Content Repurposer</p>
          <p className="text-sm text-muted-foreground">Turn one blog post, podcast, or case study into platform-native content for every channel in your distribution mix.</p>
        </Link>
        <Link
          href="/playbooks/competitive-ads-extractor"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors sm:col-span-2"
        >
          <p className="font-semibold text-foreground mb-1">Competitive Ads Extractor</p>
          <p className="text-sm text-muted-foreground">Analyze competitor ad libraries to surface what they&apos;re betting on, which angles they&apos;ve abandoned, and where the gaps are that you can own.</p>
        </Link>
      </div>
      <p>
        Marketing is already a domain where AI adoption is ahead of most fields — but most
        teams are using it as a faster chat tool rather than a persistent, brand-aware system.
        The shift from &quot;AI that needs a brief every time&quot; to &quot;AI that already
        knows the brief&quot; is where the compounding advantage kicks in.
      </p>
    </BlogPostLayout>
  );
}
