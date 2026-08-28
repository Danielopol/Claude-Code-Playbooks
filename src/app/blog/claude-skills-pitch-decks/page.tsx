import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Pitch Decks: Build Investor-Ready Slides with AI | Claude Code Playbooks Blog',
  description: "Four Claude Skills for every deck a founder needs — a proven investor deck structure, cross-slide financial consistency, version-controlled HTML presentations, and partnership proposals after the round closes.",
  alternates: { canonical: '/blog/claude-skills-pitch-decks' },
  openGraph: {
    title: 'Claude Skills for Pitch Decks: Build Investor-Ready Slides with AI',
    description: "Four Claude Skills for every deck a founder needs — a proven investor deck structure, cross-slide financial consistency, version-controlled HTML presentations, and partnership proposals after the round closes.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-pitch-decks',
    type: 'article',
    publishedTime: '2026-08-28T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Pitch Decks: Build Investor-Ready Slides with AI',
    description: "Four Claude Skills for every deck a founder needs — a proven investor deck structure, cross-slide financial consistency, version-controlled HTML presentations, and partnership proposals after the round closes.",
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

export default function ClaudeSkillsPitchDecksPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Pitch Decks: Build Investor-Ready Slides with AI"
      description="Four Claude Skills for every deck a founder needs — a proven investor deck structure, cross-slide financial consistency, version-controlled HTML presentations, and partnership proposals after the round closes."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-08-28"
      tags={['claude skills pitch deck', 'ai pitch deck', 'ai investor slides', 'startup fundraising deck', 'seed series a deck', 'ai presentation builder', 'partnership proposal deck', 'investor deck ai']}
      author="Claude Code Playbooks"
      slug="claude-skills-pitch-decks"
    >
      <p>
        Investors give a pitch deck about three minutes of real attention, and most decks spend the first minute of that window on a team bio slide before getting anywhere near the problem worth solving. The structure that actually works — problem, solution, traction, ask — is well established and publicly documented by firms like Sequoia. The reason so many decks still don't follow it isn't a mystery: founders are heads-down building the company, and deck structure is the last thing that gets attention before a meeting that was scheduled two days ago.
      </p>
      <p>
        These four Claude Skills cover the decks a founder actually needs to build — the investor deck itself, the financial consistency that makes it credible in the room, a version-controlled alternative for technical founders, and the partnership proposals that come once the round closes and the business development conversations start.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Build the Deck on a Structure That's Already Proven
      </h2>
      <p>
        A thirty-slide deck that buries the story in data isn't a thorough pitch — it's a pitch that never gets read past slide five, because investors are triaging dozens of decks and simply don't have the attention budget for one that doesn't get to the point. The decks that hold attention follow a known structure for a reason: it front-loads exactly what a time-constrained reader needs to evaluate in the first ninety seconds.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/pitch-deck-generator">Pitch Deck Generator</PlaybookLink>{' '}
        Skill guides you through structured information gathering and produces a deck following that proven format directly: problem, solution, market size, traction, business model, team, competition, financials, and the ask — complete with data-driven talking points and speaker notes for every slide.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Create a pitch deck for our Series A raise — follow the standard problem-solution-traction-ask structure with speaker notes for each slide"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A 30-slide deck that buries the story in data, spending the first minute of a three-minute attention window on a team bio instead of the problem worth solving</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A 12-slide investor deck following a proven format — problem, solution, market size, traction, business model, team, competition, financials, and ask — with data-driven talking points and speaker notes per slide</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Works for seed, Series A, sales pitches, and demo day presentations alike — the guided data collection adapts to the context.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Keep the Numbers Consistent Across Every Slide
      </h2>
      <p>
        Once the structure is right, the deck's credibility rests on something much less glamorous: whether the revenue figure on the traction slide matches the same figure on the financials slide and the ask slide. Manually copying numbers between a spreadsheet and a deck across a dozen or more slides is exactly the kind of tedious, error-prone task where a single typo — a $2M ARR that shows up as $2.5M three slides later — can undermine credibility with an investor who's reading closely.
      </p>
      <p>
        This exact discipline is what the{' '}
        <PlaybookLink href="/playbooks/ib-pitch-deck">IB Pitch Deck Template Populator</PlaybookLink>{' '}
        Skill was built for — investment banking analysts live and die by cross-slide number consistency in deal decks, and the same five-phase workflow (data extraction, content mapping, template population, validation, final verification) applies directly to populating a startup deck template with real financial data from a source spreadsheet, catching exactly the inconsistencies that would otherwise slip through.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Populate our pitch deck template with the financials from this Excel file — cross-check every number so nothing's inconsistent across slides"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Hours of copy-paste between a spreadsheet and slides, manually checking that the same revenue figure matches across every slide it appears on — one inconsistency undermining credibility in the room</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A completed deck with every placeholder filled, numbers cross-checked across all slides, tables formatted as proper objects, and consistent institutional-grade presentation standards applied</p>
        </div>
      </div>

      <p>
        This Skill populates an existing template rather than designing one from scratch — pair it with the Pitch Deck Generator above once the structure is set and real financial data needs to go in cleanly.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Feed it the source Excel, CSV, or PDF alongside the deck template.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: A Version-Controlled Alternative for Technical Founders
      </h2>
      <p>
        For a technical founder, PowerPoint has a specific kind of friction: code snippets render poorly, syntax highlighting doesn't exist, and there's no meaningful way to version-control a deck the way every other artifact in the company gets tracked. For a product that involves any real technical content — architecture, a live demo, code examples in the traction story — that friction gets in the way of the pitch itself.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/presentation-builder">HTML Presentation Builder</PlaybookLink>{' '}
        Skill builds clean, structured reveal.js presentations that live in the browser, support real syntax-highlighted code blocks, include speaker notes, and can sit in the company's Git repo like any other artifact — with export options to PDF and PPTX for the investors who still expect a file.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Build an HTML presentation for our technical deep-dive deck — syntax-highlighted code examples, speaker notes, and export to PPTX for investors"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">PowerPoint slides where code snippets look terrible, no syntax highlighting exists, and the deck can't be version-controlled alongside everything else in the repo</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A reveal.js HTML presentation with syntax-highlighted code examples, speaker notes for every slide, responsive design, and export options for PDF and PPTX when a file is needed</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Best suited for technical deep-dive decks and demo day talks rather than the primary financial-ask deck.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Build the Deck That Comes After the Round Closes
      </h2>
      <p>
        Fundraising decks aren't the only high-stakes deck a founder builds. A great partnership meeting leads to "send us a proposal by Friday," and the instinct to copy-paste from a deck built for a different deal shows through immediately to the partner reading it. Every partnership is genuinely unique, but building a tailored deck from scratch in two days is time most founders don't have on top of everything else running.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/partnership-deck-generator">Partnership Deck Generator</PlaybookLink>{' '}
        Skill builds that tailored proposal from what already exists — meeting transcripts, previous proposal formats, and partnership context — producing a deck with a genuine mutual value proposition, an integration overview, a revenue share model, a co-marketing plan, an implementation timeline, and success metrics, built to speak directly to that specific partner's goals.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Build a partnership deck for our integration with Shopify, using our meeting notes and company data"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A great partnership meeting, a Friday deadline, and a deck copy-pasted from a different deal that shows through immediately to the partner reading it</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A tailored proposal with mutual value proposition, integration architecture overview, revenue share model, co-marketing plan, implementation timeline, and success metrics — built from the actual meeting notes and company data</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Feed it the raw meeting transcript rather than a summary — the more specific context, the more tailored the resulting deck.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Every Deck a Founder Actually Needs
      </h2>
      <p>
        These four Skills cover distinct deck-building needs across a company's lifecycle:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Pitch Deck Generator</span> — the core investor deck, built on a structure that's proven to hold attention</li>
        <li><span className="text-foreground font-medium">IB Pitch Deck Populator</span> — cross-slide financial consistency once real numbers need to go into the deck</li>
        <li><span className="text-foreground font-medium">HTML Presentation Builder</span> — a version-controlled, code-friendly alternative for technical deep-dive decks</li>
        <li><span className="text-foreground font-medium">Partnership Deck Generator</span> — tailored proposals for the business development conversations that follow the round</li>
      </ul>
      <p>
        Together they cover the deck for raising, the deck for demonstrating technical depth, and the deck for landing the partnerships that keep the company moving after the check clears.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/pitch-deck-generator">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Pitch Deck Generator</p>
            <p className="text-sm text-muted-foreground">A structured investor deck following the proven problem-solution-traction-ask format</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/ib-pitch-deck">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">IB Pitch Deck Template Populator</p>
            <p className="text-sm text-muted-foreground">Financial data population with cross-slide consistency checks and institutional formatting</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/presentation-builder">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">HTML Presentation Builder</p>
            <p className="text-sm text-muted-foreground">Version-controlled reveal.js decks with real code blocks, exportable to PDF and PPTX</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/partnership-deck-generator">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Partnership Deck Generator</p>
            <p className="text-sm text-muted-foreground">Tailored partnership proposals built from meeting notes and company context</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
