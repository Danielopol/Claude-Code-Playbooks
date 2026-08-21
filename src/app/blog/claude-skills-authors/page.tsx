import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Authors: Plan, Draft, and Edit Your Novel with AI | Claude Code Playbooks Blog',
  description: "Four Claude Skills that act as a creative collaborator, not a ghostwriter — character and plot planning, ongoing consistency checking while you draft, focused manuscript editing passes, and a final language-only proofread.",
  alternates: { canonical: '/blog/claude-skills-authors' },
  openGraph: {
    title: 'Claude Skills for Authors: Plan, Draft, and Edit Your Novel with AI',
    description: "Four Claude Skills that act as a creative collaborator, not a ghostwriter — character and plot planning, ongoing consistency checking while you draft, focused manuscript editing passes, and a final language-only proofread.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-authors',
    type: 'article',
    publishedTime: '2026-08-21T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Authors: Plan, Draft, and Edit Your Novel with AI',
    description: "Four Claude Skills that act as a creative collaborator, not a ghostwriter — character and plot planning, ongoing consistency checking while you draft, focused manuscript editing passes, and a final language-only proofread.",
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

export default function ClaudeSkillsAuthorsPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Authors: Plan, Draft, and Edit Your Novel with AI"
      description="Four Claude Skills that act as a creative collaborator, not a ghostwriter — character and plot planning, ongoing consistency checking while you draft, focused manuscript editing passes, and a final language-only proofread."
      category="guide"
      difficulty="basic"
      readingTime="12 min read"
      createdAt="2026-08-21"
      tags={['claude skills writing book', 'ai novel writing', 'ai for authors', 'novel planning ai', 'book bible consistency', 'manuscript editing ai', 'ai proofreading', 'fiction writing tools']}
      author="Claude Code Playbooks"
      slug="claude-skills-authors"
    >
      <p>
        The story is yours. The craft of holding forty thousand words of plot, characters, and continuity in working memory while also trying to write good sentences is a genuinely separate skill, and it's the one that breaks first. You realize at 40,000 words that your protagonist's eye color changed twice, the timeline doesn't add up, and a character who died in chapter 5 is somehow at dinner in chapter 12. None of that is a failure of imagination — it's a failure of bookkeeping, and bookkeeping is exactly what these tools are good at.
      </p>
      <p>
        These four Claude Skills are built to support the writing, not replace it — a planning partner, a continuity guardrail, a prose editor, and a proofreader, each doing one job well instead of one tool trying to rewrite your voice for you.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Develop Characters and Plot Structure Before You Draft
      </h2>
      <p>
        Aspiring authors often have a strong sense of a story without a structure to hang it on — characters who feel real but whose arcs aren't mapped, a plot with a great opening and no clear shape for the middle. Sitting down to draft without that structure is how novels stall around the 20,000-word mark, when the initial momentum runs out and there's no scaffold left to write toward.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/novel-writing-assistant">Novel Writing Assistant</PlaybookLink>{' '}
        Skill serves as a planning and brainstorming partner before the drafting starts: a character bible with detailed profiles, a three-act plot structure broken down by chapter, a timeline tracking key events, and a relationship map showing how characters connect to each other.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Help me develop my mystery novel's plot and characters — I have the premise but need the structure"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A strong premise and a handful of characters that feel real, but no plot structure — the kind of gap that stalls a draft once the opening momentum runs out</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A character bible with 6 detailed profiles, a three-act plot structure with chapter breakdown, a timeline of key events, and a relationship map between characters</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. This is a pre-draft planning tool — the output becomes the scaffold the next Skill checks your writing against.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Catch Continuity Errors Before Your Beta Reader Does
      </h2>
      <p>
        Chapter 23 says blue eyes; Chapter 7 said brown. The timeline doesn't add up. A character who died two hundred pages ago just spoke a line of dialogue. These errors are invisible to the person who wrote them — you know your story so well that your brain quietly fills in the correct version even when the page says something else — which is exactly why a beta reader catches it and you don't.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/book-bible">Book Bible</PlaybookLink>{' '}
        Skill is the ongoing companion to the planning Skill above: it keeps character details, plot timelines, and world rules in structured reference files, and checks new scenes against them before you write, catching contradictions with exact chapter references instead of a vague sense that something feels off.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Check my manuscript for consistency issues before I write Chapter 15"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Chapter 23 says blue eyes, Chapter 7 said brown — the timeline doesn't add up, a dead character just spoke, and your beta reader caught it all, not you</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A character bible with physical descriptions and relationship maps, a timeline verified against the manuscript, and 3 contradictions flagged with exact chapter references — before the scene even gets written</p>
        </div>
      </div>

      <p>
        The distinction from the Novel Writing Assistant above is deliberate: that Skill builds the initial structure once, and this one runs continuously throughout drafting, referenced before every new scene rather than used once up front.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Run this as an ongoing check throughout drafting, especially before writing scenes involving characters or events from many chapters back.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Edit the Prose in Focused Passes, Not One Overwhelmed Read
      </h2>
      <p>
        A finished draft usually needs editing across several different dimensions — clarity, voice, pacing, specificity — and trying to fix all of them in a single read-through means catching some issues and missing most of the rest, because attention splits across too many things at once. The fix is the same one professional editors use: separate, focused passes, each one looking for exactly one kind of problem.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/copy-editing">Copy Editing</PlaybookLink>{' '}
        Skill is built around that focused-pass methodology — clarity, then specificity, then voice — and while it was originally designed for marketing copy, the same discipline applies directly to manuscript prose: each pass targets one dimension, tracks the changes with a rationale for each one, and preserves the original voice and meaning rather than rewriting from scratch.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Edit this chapter in focused passes — clarity first, then voice consistency — track the changes with rationale and don't rewrite the scene from scratch"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A single overwhelmed editing pass trying to fix clarity, voice, and pacing all at once — catching some issues, missing most of the rest, because attention splits across too many things simultaneously</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Multiple focused passes — clarity, specificity, voice — tracked changes with rationale for each edit, and a sharper chapter that still preserves the original story and voice</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Use this after a full draft exists, once the story is settled and the prose itself needs sharpening.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: A Final Pass That Touches Language, Not Your Argument
      </h2>
      <p>
        Ask a general-purpose review for feedback and it's likely to rewrite the argument, restructure a scene, or otherwise touch far more than intended — because a general review's attention is distracted by content when what's actually needed, at the very end of the process, is someone laser-focused on the dangling modifier in paragraph three and the inconsistent Oxford comma usage across the manuscript.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/proofread-review">Proofread Review Agent</PlaybookLink>{' '}
        Skill deploys a specialized proofreader with narrow scope by design: grammar, spelling, punctuation, and clarity only, with structure, argument, and voice left completely untouched. The narrow focus is what makes it catch things a broader review misses.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Proofread my manuscript for grammar, spelling, and punctuation only — don't touch the structure, argument, or voice"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A review that rewrites the argument when all that was needed was someone to catch the dangling modifier in paragraph 3 and the inconsistent Oxford comma usage</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A focused language review catching 12 grammar issues, 4 spelling errors, 8 punctuation inconsistencies, and 5 clarity suggestions — without touching the arguments, structure, or voice</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Run this last, after the Copy Editing passes above — it's the final language-only check before the manuscript goes out.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        A Collaborator for Every Stage, Not a Ghostwriter for Any of Them
      </h2>
      <p>
        These four Skills map cleanly onto the plan-draft-edit arc, and each one is scoped narrowly on purpose:
      </p>
      <ol className="list-decimal list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Novel Writing Assistant</span> — build the character bible and plot structure before drafting begins</li>
        <li><span className="text-foreground font-medium">Book Bible</span> — check new scenes against that structure continuously throughout drafting</li>
        <li><span className="text-foreground font-medium">Copy Editing</span> — sharpen the finished prose in focused, single-dimension passes</li>
        <li><span className="text-foreground font-medium">Proofread Review Agent</span> — a final, narrowly scoped language check before publishing</li>
      </ol>
      <p>
        None of them write the story for you. What they remove is the bookkeeping burden — tracking a hundred details across four hundred pages — that competes directly with the actual craft of writing, and is exactly the kind of work that breaks a first novel long before the prose itself does.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/novel-writing-assistant">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Novel Writing Assistant</p>
            <p className="text-sm text-muted-foreground">Character bible, plot structure, timeline, and relationship mapping before you draft</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/book-bible">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Book Bible</p>
            <p className="text-sm text-muted-foreground">Ongoing consistency checks against your established facts as you write new scenes</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/copy-editing">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Copy Editing</p>
            <p className="text-sm text-muted-foreground">Focused clarity, specificity, and voice passes that sharpen prose without rewriting it</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/proofread-review">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Proofread Review Agent</p>
            <p className="text-sm text-muted-foreground">A narrowly scoped final pass for grammar, spelling, and punctuation only</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
