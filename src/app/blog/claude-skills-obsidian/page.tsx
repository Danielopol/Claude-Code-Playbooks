import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Obsidian Users: Auto-Tag and Connect Your Vault | Claude Code Playbooks Blog',
  description: "How to use four Claude Skills to turn a passive note graveyard into an active knowledge system — retroactive auto-tagging, automated vault workflows, Maps of Content, and ongoing backlink hygiene.",
  alternates: { canonical: '/blog/claude-skills-obsidian' },
  openGraph: {
    title: 'Claude Skills for Obsidian Users: Auto-Tag and Connect Your Vault',
    description: "How to use four Claude Skills to turn a passive note graveyard into an active knowledge system — retroactive auto-tagging, automated vault workflows, Maps of Content, and ongoing backlink hygiene.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-obsidian',
    type: 'article',
    publishedTime: '2026-06-28T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Obsidian Users: Auto-Tag and Connect Your Vault',
    description: "How to use four Claude Skills to turn a passive note graveyard into an active knowledge system — retroactive auto-tagging, automated vault workflows, Maps of Content, and ongoing backlink hygiene.",
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

export default function ClaudeSkillsObsidianPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Obsidian Users: Auto-Tag and Connect Your Vault"
      description="How to use four Claude Skills to turn a passive note graveyard into an active knowledge system — retroactive auto-tagging, automated vault workflows, Maps of Content, and ongoing backlink hygiene."
      category="guide"
      difficulty="basic"
      readingTime="12 min read"
      createdAt="2026-06-28"
      tags={['claude skills obsidian', 'ai obsidian automation', 'ai note tagging', 'obsidian pkm', 'obsidian maps of content', 'obsidian vault organization', 'second brain ai', 'zettelkasten automation']}
      author="Claude Code Playbooks"
      slug="claude-skills-obsidian"
    >
      <p>
        The Obsidian promise is compelling: build a second brain where every idea connects to every other idea, where you can navigate your knowledge the way you navigate your thoughts. So you install Obsidian, you start capturing notes, and then — nothing. The vault fills up. The connections don't happen. You end up with 600 isolated notes and a graph view that looks like a constellation with no lines drawn between the stars.
      </p>
      <p>
        The problem isn't motivation. It's maintenance. Tagging every note consistently, creating backlinks as you write, building Maps of Content that represent how your ideas actually cluster — that's hours of work per week, every week, forever. Most vaults quietly become graveyards not because people stop caring, but because the upkeep cost exceeds what anyone can realistically sustain manually.
      </p>
      <p>
        These four Claude Skills handle the structural maintenance so your vault can actually become the knowledge system it was always supposed to be.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Maintenance Problem Obsidian Users Actually Have
      </h2>
      <p>
        Obsidian gives you the tools. It doesn't do the work. Every workflow that makes a vault powerful — consistent tagging, wikilink backlinks, frontmatter metadata, Maps of Content — requires deliberate, repeated action every time you add a note. When you're in flow capturing an idea, you don't want to stop and tag it in three places. When you're reviewing old notes, you don't want to spend the session creating links instead of thinking.
      </p>
      <p>
        The result is a familiar pattern: a vault that grows fast and connects slowly. New notes come in daily. Tags drift (is it <code className="text-sm bg-[#0d1117] px-1 rounded">#productivity</code> or <code className="text-sm bg-[#0d1117] px-1 rounded">#prod</code> or <code className="text-sm bg-[#0d1117] px-1 rounded">#work/productivity</code>?). Backlinks get added when you remember, skipped when you don't. After a year, you have a vault that represents your thinking but doesn't surface it — and rebuilding the structure from scratch sounds worse than just living with the mess.
      </p>
      <p>
        These four Skills attack each layer of the problem: retroactive tagging for everything you've already captured, automated workflows for everything you'll capture going forward, architectural cleanup via Maps of Content, and ongoing hygiene for backlinks and frontmatter.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Retroactive Auto-Tagging for the Untagged Vault
      </h2>
      <p>
        The first problem to solve is the one already sitting in your vault. If you have hundreds of notes with no tags — or inconsistent tags — every new workflow you build is operating on a broken foundation. The{' '}
        <PlaybookLink href="/playbooks/obsidian-auto-tagging">Obsidian Note Auto-Tagging</PlaybookLink>{' '}
        Skill fixes this retroactively.
      </p>
      <p>
        It reads your existing notes, analyzes their content, and applies tags that are consistent with your existing tag conventions. It doesn't invent a new taxonomy — it infers the one you've been inconsistently applying and makes it uniform. If you already have some tags in your vault, it uses those as anchors. If you have none, it builds a coherent structure from the content itself.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Auto-tag my 300 untagged Obsidian notes in ~/Documents/vault using tags that match my existing conventions"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">300 notes with no tags, 50 notes with tags you made up on the day and never reused, and no way to filter by topic without full-text search</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Consistent tag taxonomy applied across all notes, tag suggestions aligned to your existing conventions, and a before/after report showing how many new connections became visible</p>
        </div>
      </div>

      <p>
        This is the right first step because everything else — filtering, searching, building MOCs — depends on tags being reliable. Once your tagging is consistent, the vault's graph view starts showing real clusters instead of isolated islands.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Point it at your vault directory and let it run — it handles the rest.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Automated Vault Workflows for New Captures
      </h2>
      <p>
        Fixing the past is one problem. Preventing the same decay from happening to new notes is another. The{' '}
        <PlaybookLink href="/playbooks/obsidian-automation">Obsidian Vault Automation</PlaybookLink>{' '}
        Skill sets up ongoing workflows: when you add a new note, it gets automatically linked to related existing notes. Orphan notes get flagged before they drift. Daily note templates pull in your open tasks automatically. A weekly vault health report shows you link density and structural changes over time.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Automate my Obsidian vault: link new notes to related existing notes, detect orphans weekly, and generate a vault health report every Sunday"
        </p>
      </div>

      <p>
        The linking workflow is the highest-value piece. Every time a new note arrives, the Skill scans your existing vault for semantically related content and adds wikilinks in both directions. This is the labor-intensive work that almost no one does consistently — and it's the work that makes the difference between a list of notes and an actual knowledge graph.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">New notes land in your inbox, get tagged if you remember, and slowly drift into isolation as the folder fills up and you move on</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">New notes are auto-linked to related ideas on arrival, daily templates pull your open tasks, and orphan detection runs before notes can drift into the void</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Once configured, the workflows run whenever you ask or on a schedule.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Maps of Content and Hidden Connection Discovery
      </h2>
      <p>
        Tags tell you what a note is about. Maps of Content tell you how ideas cluster and relate to each other. MOCs are the architecture layer most vaults never develop — not because people don't want them, but because building a good MOC requires reading every note in a topic cluster and understanding how they connect. That's hours of work per topic.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/obsidian-knowledge-system">Obsidian Knowledge System</PlaybookLink>{' '}
        Skill generates MOCs from your actual vault content. It reads your notes, identifies natural topic clusters, and builds MOC index pages that represent how your knowledge actually organizes — not how you thought it would organize when you set up the vault. It also runs a hidden connection discovery pass that surfaces notes you'd never have thought to link manually but which share meaningful conceptual overlap.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Organize my 800-note vault: generate Maps of Content for my main topic clusters, unify my tagging system, and find hidden connections I'm missing"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">800 notes, no MOCs, three inconsistent tagging systems you've started and abandoned, and no structural view of how your knowledge actually clusters</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">MOC pages generated for each major topic cluster, unified tagging taxonomy, dozens of discovered hidden connections surfaced, and a vault health audit with duplicates flagged</p>
        </div>
      </div>

      <p>
        The vault health audit is a secondary feature worth highlighting: it flags orphan notes, detects duplicate content, and identifies broken wikilinks — structural problems that accumulate silently and make the vault harder to navigate over time.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. For large vaults, the first run will take longer — it's reading everything.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Backlinks, Frontmatter, and Ongoing Vault Hygiene
      </h2>
      <p>
        The foundation everything else depends on is consistent metadata. If your frontmatter has five different date formats, your backlinks are incomplete, and 200 notes are disconnected from the rest of the graph, every other improvement you make is building on sand. The{' '}
        <PlaybookLink href="/playbooks/obsidian-vault-assistant">Obsidian Vault Assistant</PlaybookLink>{' '}
        Skill handles this baseline hygiene layer.
      </p>
      <p>
        It automates backlinking for orphan notes, standardizes frontmatter fields across all files (consistent date formats, required fields present, no stray properties), surfaces related note suggestions for isolated entries, and generates vault summary statistics showing topic distribution and connection density. Think of it as the maintenance pass you'd want to run every month but never actually do.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Clean up my Obsidian vault: add backlinks to my 150 orphan notes, standardize frontmatter across all files, and show me related notes for isolated entries"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Frontmatter with five date formats, 150 orphan notes with no connections, and related ideas sitting in separate files with nothing linking them</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Frontmatter standardized across all files, backlinks added for isolated notes, related note suggestions for 50 disconnected entries, and a vault summary showing topic distribution</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Run it as a monthly maintenance pass or after any major batch of new captures.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        How to Stack These Skills
      </h2>
      <p>
        These four Skills work best in sequence, not in isolation. The recommended order when starting from a messy vault:
      </p>
      <ol className="list-decimal list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Vault Assistant</span> first — standardize frontmatter and fix structural problems before adding more content</li>
        <li><span className="text-foreground font-medium">Auto-Tagging</span> second — apply consistent tags retroactively so MOC generation has reliable signals to work from</li>
        <li><span className="text-foreground font-medium">Knowledge System</span> third — generate MOCs and discover hidden connections once the tag foundation is solid</li>
        <li><span className="text-foreground font-medium">Vault Automation</span> fourth — set up ongoing workflows so new notes get the same treatment automatically going forward</li>
      </ol>
      <p>
        After the initial setup, the Automation Skill runs continuously and the others become maintenance tools — run them after big capture sessions, before quarterly reviews, or whenever the vault starts to feel disorganized again.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Start with the Skill That Matches Your Biggest Pain
      </h2>
      <p>
        You don't have to run all four at once. If your biggest frustration is untagged notes, start with Auto-Tagging. If your vault feels structurally chaotic, start with the Knowledge System. If frontmatter inconsistency is slowing down your Dataview queries, start with the Vault Assistant. Each Skill solves a distinct problem and delivers value on its own.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/obsidian-auto-tagging">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Obsidian Note Auto-Tagging</p>
            <p className="text-sm text-muted-foreground">Retroactive tag taxonomy across your entire untagged vault</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/obsidian-automation">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Obsidian Vault Automation</p>
            <p className="text-sm text-muted-foreground">Ongoing workflows: auto-linking, orphan detection, daily templates</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/obsidian-knowledge-system">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Obsidian Knowledge System</p>
            <p className="text-sm text-muted-foreground">MOC generation, hidden connections, vault health audit</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/obsidian-vault-assistant">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Obsidian Vault Assistant</p>
            <p className="text-sm text-muted-foreground">Backlinks, frontmatter hygiene, related note suggestions</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
