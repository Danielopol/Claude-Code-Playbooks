import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Designers Who Code: From Mockup to Frontend | Claude Code Playbooks Blog',
  description: "Four Claude Skills that close the design-engineering gap — complete developer handoff specs, design system audits, distinctive Next.js styling upgrades, and shareable React prototypes.",
  alternates: { canonical: '/blog/claude-skills-design-to-code' },
  openGraph: {
    title: 'Claude Skills for Designers Who Code: From Mockup to Frontend',
    description: "Four Claude Skills that close the design-engineering gap — complete developer handoff specs, design system audits, distinctive Next.js styling upgrades, and shareable React prototypes.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-design-to-code',
    type: 'article',
    publishedTime: '2026-07-15T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Designers Who Code: From Mockup to Frontend',
    description: "Four Claude Skills that close the design-engineering gap — complete developer handoff specs, design system audits, distinctive Next.js styling upgrades, and shareable React prototypes.",
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

export default function ClaudeSkillsDesignToCodePage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Designers Who Code: From Mockup to Frontend"
      description="Four Claude Skills that close the design-engineering gap — complete developer handoff specs, design system audits, distinctive Next.js styling upgrades, and shareable React prototypes."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-07-15"
      tags={['claude skills design to code', 'ai frontend builder', 'ai design handoff', 'design system audit ai', 'figma to code ai', 'react prototype ai', 'design engineering', 'ai ui prototyping']}
      author="Claude Code Playbooks"
      slug="claude-skills-design-to-code"
    >
      <p>
        The line between design and engineering has been blurring for years, and the people caught in the middle — designers who code, developers who care about design — are the ones who feel every gap in the handoff process most acutely. A Figma link with no spec becomes a build that "looks off" in ways nobody can articulate precisely. A design system with no documentation becomes fourteen shades of gray and three button heights nobody remembers approving. A working prototype that should take an afternoon takes a week because setting up the tooling eats the time meant for the actual idea.
      </p>
      <p>
        These four Claude Skills sit exactly at that overlap — not replacing design judgment or engineering skill, but removing the friction between the two so ideas move from mockup to working frontend faster.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Generate a Complete Developer Handoff Spec
      </h2>
      <p>
        "The padding looks off" is the sentence that reveals a broken handoff. It means the developer is guessing — at spacing, at breakpoints, at what happens on hover — because the handoff was a Figma link and nothing else. Every guess is a chance for the build to diverge from the design, and every divergence becomes a round of Slack messages and a revision cycle that shouldn't have been necessary.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/design-handoff-generator">Design Handoff Generator</PlaybookLink>{' '}
        Skill converts a design file into the spec that should have existed from the start: layout measurements, design tokens, component props, interaction states, responsive breakpoints, edge cases, animation details, and accessibility notes. Everything a developer needs to implement the design without guessing, and without a back-and-forth that costs both people time.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Generate handoff docs for this settings page redesign — I need layout measurements, design tokens, interaction states, and responsive breakpoints"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A Figma link with no spec — the developer guesses at spacing, breakpoints, and hover states, and the finished build looks noticeably different from the design</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Structured spec with exact measurements, design tokens, component props, interaction states, responsive breakpoints, and accessibility notes — no Slack back-and-forth required</p>
        </div>
      </div>

      <p>
        The accessibility notes are worth calling out specifically — they're the layer most likely to get skipped in an informal handoff and the most expensive to retrofit after the build ships.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Point it at your design file and describe the screens that need handoff docs.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Audit and Document a Drifting Design System
      </h2>
      <p>
        Design systems degrade the same way codebases do — gradually, through a hundred small decisions that each seemed reasonable at the time. A new component needed a slightly different gray, so it got one. A button needed slightly different padding for one screen, so a new variant was born. Nobody decided to have fourteen shades of gray; it just accumulated.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/design-system-manager">Design System Manager</PlaybookLink>{' '}
        Skill operates in three modes: audit your existing system for naming inconsistencies and hardcoded values that should be tokens, document individual components with their variants, states, and accessibility notes, or extend the system by designing new patterns that actually fit your existing conventions instead of adding another one-off.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Audit our design system for inconsistencies — find hardcoded colors that should be tokens and any duplicate component variants"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">14 shades of gray, 3 button heights, no single source of truth, and every new component reinventing conventions because nobody can find what already exists</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Full audit revealing 23 hardcoded colors that should be tokens, 4 button variants doing the same thing, and naming inconsistencies across components — with a prioritized fix list</p>
        </div>
      </div>

      <p>
        The audit mode is the right starting point for any team that suspects their design system has drifted but doesn't have the bandwidth for a full manual review. It gives you the prioritized list of what's actually worth fixing, rather than a vague sense that things are messy.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Point it at your component library or design tokens file and pick a mode: audit, document, or extend.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Make a Generic Next.js App Look Distinctive
      </h2>
      <p>
        There's a recognizable look to apps built quickly with AI assistance or default component libraries — the same gradients, the same default shadows, the same hero section pattern everyone's seen a dozen times. Functional doesn't have to mean forgettable, but getting from "it works" to "it looks intentional" is exactly the design skill that many full-stack developers haven't built.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/frontend-enhancer">Frontend Enhancer</PlaybookLink>{' '}
        Skill upgrades a Next.js application's visual design directly: production-ready component upgrades, a curated color palette instead of defaults, accessible animations, and responsive layout templates — all specifically designed to avoid the generic AI-generated aesthetic that's become instantly recognizable.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Make our Next.js dashboard look professional and distinctive — replace the default styling with something that doesn't look AI-generated"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">The app works perfectly but looks like every other AI-generated template — generic gradients, default shadows, and the hero section pattern everyone recognizes on sight</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Production-ready component upgrades, curated color palette, accessible animations, responsive layout templates, and Tailwind configurations that read as intentional, not templated</p>
        </div>
      </div>

      <p>
        Best used before a launch or a demo, once the functionality is solid and the remaining gap is purely visual polish — trying to run this before the underlying components are stable just means redoing the styling work later.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Works against an existing Next.js codebase; describe the areas that feel generic.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Prototype in React Without the Setup Tax
      </h2>
      <p>
        Designers who code often have the clearest idea of what an interactive prototype should feel like — but building it means setting up React, TypeScript, Tailwind, and a component library before writing a single line of the actual idea. For a quick demo or a hackathon prototype, that setup tax can take longer than the build itself.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/artifacts-builder">Artifacts Builder</PlaybookLink>{' '}
        Skill skips the setup entirely. It builds sophisticated HTML artifacts using React 18, TypeScript, Tailwind CSS, and over 40 shadcn/ui components, bundling everything into a single self-contained HTML file. No build step, no dependency installation for whoever you're sharing it with — just a file that opens and runs.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Build me an interactive pricing calculator with plan toggles, a feature comparison table, and a monthly/annual switch"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A clear idea for an interactive demo, but setting up React, TypeScript, Tailwind, and a component library takes longer than building the actual prototype would</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Self-contained HTML file with React 18, TypeScript, Tailwind CSS, and shadcn/ui components bundled into one file — shareable or deployable instantly, no setup for the recipient</p>
        </div>
      </div>

      <p>
        This is the fastest path from idea to something clickable — ideal for validating a concept before committing to a full production build, or for demos where the audience just needs to see and interact with the idea, not inspect the codebase.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Describe the interactive experience you want — the output is a single shareable HTML file.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Where Each Skill Fits in the Design-to-Code Pipeline
      </h2>
      <p>
        These four Skills serve different moments in the same overall workflow:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Early idea validation</span> — Artifacts Builder gets a clickable prototype in front of people fast, before any handoff is needed</li>
        <li><span className="text-foreground font-medium">Design-to-development handoff</span> — Design Handoff Generator removes the guesswork once a design is ready to build</li>
        <li><span className="text-foreground font-medium">Pre-launch polish</span> — Frontend Enhancer closes the gap between functional and distinctive once the build is stable</li>
        <li><span className="text-foreground font-medium">Ongoing system health</span> — Design System Manager keeps the underlying tokens and components consistent as the product grows</li>
      </ul>
      <p>
        Used together, they cover the full arc from a rough idea to a maintainable, well-documented, visually distinctive product — without requiring any single person to be equally expert in design and engineering.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/design-handoff-generator">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Design Handoff Generator</p>
            <p className="text-sm text-muted-foreground">Complete developer specs — measurements, tokens, interaction states, breakpoints, accessibility notes</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/design-system-manager">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Design System Manager</p>
            <p className="text-sm text-muted-foreground">Audit, document, or extend a design system — find inconsistencies before they multiply</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/frontend-enhancer">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Frontend Enhancer</p>
            <p className="text-sm text-muted-foreground">Upgrade a generic Next.js app with curated color, animation, and layout — avoids the AI-generated look</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/artifacts-builder">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Artifacts Builder</p>
            <p className="text-sm text-muted-foreground">React, TypeScript, and Tailwind prototypes bundled into one shareable HTML file — no setup required</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
