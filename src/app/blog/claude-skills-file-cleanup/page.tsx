import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for File Cleanup: Organize Your Digital Mess Automatically | Claude Code Playbooks Blog',
  description: "How to use four Claude Skills to clear years of digital clutter without the anxiety of deleting the wrong thing — duplicate detection, old file flagging, downloads sorting, and intelligent folder structuring.",
  alternates: { canonical: '/blog/claude-skills-file-cleanup' },
  openGraph: {
    title: 'Claude Skills for File Cleanup: Organize Your Digital Mess Automatically',
    description: "How to use four Claude Skills to clear years of digital clutter without the anxiety of deleting the wrong thing — duplicate detection, old file flagging, downloads sorting, and intelligent folder structuring.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-file-cleanup',
    type: 'article',
    publishedTime: '2026-06-29T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for File Cleanup: Organize Your Digital Mess Automatically',
    description: "How to use four Claude Skills to clear years of digital clutter without the anxiety of deleting the wrong thing — duplicate detection, old file flagging, downloads sorting, and intelligent folder structuring.",
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

export default function ClaudeSkillsFileCleanupPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for File Cleanup: Organize Your Digital Mess Automatically"
      description="How to use four Claude Skills to clear years of digital clutter without the anxiety of deleting the wrong thing — duplicate detection, old file flagging, downloads sorting, and intelligent folder structuring."
      category="guide"
      difficulty="basic"
      readingTime="11 min read"
      createdAt="2026-06-29"
      tags={['claude skills file organization', 'ai organize files', 'ai declutter computer', 'organize downloads folder', 'duplicate file finder', 'old file cleanup', 'ai file management', 'digital declutter']}
      author="Claude Code Playbooks"
      slug="claude-skills-file-cleanup"
    >
      <p>
        Everyone has the same folder. A Downloads directory with 2,000 files going back to 2019. A Documents folder so flat and dense that searching by filename is the only way to find anything. Five versions of every important file named <code className="text-sm bg-[#0d1117] px-1 rounded">report_final_FINAL_v2.docx</code>. Installers for software you uninstalled two laptops ago.
      </p>
      <p>
        The reason it never gets cleaned up isn't laziness — it's the cost of individual decisions. Sorting 2,000 files manually means making 2,000 judgment calls: keep or delete, where does this go, is this the right version? That cognitive overhead makes the task feel impossible before you start. So you don't start. The folder grows. You buy a larger drive.
      </p>
      <p>
        These four Claude Skills handle the analysis and decision-making. They show you what they want to do before touching a single file, and nothing moves or deletes without your approval. For anyone who's been putting off a digital declutter because it felt overwhelming, this is the easiest on-ramp to actually getting it done.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Fear That Keeps Digital Clutter Around
      </h2>
      <p>
        Digital clutter persists not because people don't want to fix it, but because manual cleanup has real risk. Delete the wrong file and it's gone. Move something into the wrong folder and you might not find it for months. Flatten a folder structure and break a workflow you forgot existed. The downside of a mistake is real, so the safest choice — doing nothing — wins by default.
      </p>
      <p>
        Every Skill in this post addresses that fear directly. None of them auto-delete. All of them show you a full analysis and proposed action plan before anything happens. You approve what looks right, skip what doesn't, and end with a clean directory and the confidence that you made the call — not an algorithm.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Find Every Duplicate Before You Move Anything
      </h2>
      <p>
        The right first step before any cleanup is understanding how much of what you have is already redundant. The{' '}
        <PlaybookLink href="/playbooks/duplicate-file-detector">Duplicate File Detector</PlaybookLink>{' '}
        Skill scans your folders and surfaces three categories: exact duplicates (byte-for-byte identical files), near-duplicates (same image resized, same document with minor edits), and version variants (all those <code className="text-sm bg-[#0d1117] px-1 rounded">_final_v2_REAL</code> files that accumulate over a project's lifetime).
      </p>
      <p>
        For each group it finds, it gives you a keep/delete recommendation — but the decision is always yours. Nothing is auto-deleted. This matters especially for version variants, where "which one is actually final" requires human judgment that no algorithm should make unilaterally.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Find all duplicate files in my Documents folder and tell me how much space I can reclaim"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">No idea how much of your storage is redundant — you suspect it's a lot, but sorting through files manually to find duplicates would take days</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Full report: exact duplicates, near-duplicates, and version variants — with keep/delete recommendations for each group and a total space reclamation estimate</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Point it at your folder and it does the scanning — no files touched until you say so.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Flag Old Files That Are Safely Deletable
      </h2>
      <p>
        Duplicates are one category of clutter. The other is files that aren't duplicated but also aren't useful: temp files, old installers, files from software you haven't run in three years, downloads from projects long since finished. The{' '}
        <PlaybookLink href="/playbooks/old-file-cleanup">Old File Cleanup Assistant</PlaybookLink>{' '}
        Skill specializes in this category.
      </p>
      <p>
        It analyzes your folders by file age, type, and usage patterns, then produces a tiered inventory: files that are very likely safe to delete (temp files, installer packages, obvious junk), files that might be important and need your review, and files it won't touch because they show signs of active use. The dry-run option shows you exactly what would happen before anything is moved.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Clean up my Downloads folder — it's 40 GB and goes back to 2019. Show me what's safe to delete before touching anything."
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">40 GB of Downloads you're afraid to delete because you don't know what's in there — buying extra storage is cheaper than the anxiety of deleting the wrong thing</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Categorized inventory by age and type, safe deletion candidates flagged separately from files that need review, and a cleanup script with dry-run confirmation before anything is removed</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. The first run is always a dry run — you see the plan before any action.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Sort the Downloads Folder by Type and Date
      </h2>
      <p>
        Once you've cleared duplicates and old junk, what remains in Downloads is still a flat pile. The{' '}
        <PlaybookLink href="/playbooks/auto-organize-downloads">Auto-Organize Downloads</PlaybookLink>{' '}
        Skill solves the structural problem: it sorts files into subfolders by type (Images, Documents, Videos, Installers, Archives) and optionally by date, so you can navigate by category instead of scrolling through 500 filenames in chronological order.
      </p>
      <p>
        This is the most beginner-friendly Skill in the group — five minutes of setup, one prompt, and your Downloads folder goes from chaos to navigable. It also flags any duplicates it catches during the sort and generates a summary of what went where so you can verify the result.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Organize my Downloads folder into subfolders by file type — Images, Documents, Videos, Installers, and everything else"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">2,000 files in a flat folder — screenshots next to invoices next to installers, navigable only by search, discovered only by accident</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Files sorted into type-based subfolders, old files archived by year, a summary of where everything went, and duplicates flagged in the process</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. If you have a specific folder structure in mind, just describe it in the prompt.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Build a Real Folder Structure for Documents
      </h2>
      <p>
        Downloads is the easy problem. Documents is the hard one — years of project files, receipts, templates, contracts, notes, and work output accumulated without any consistent structure. The{' '}
        <PlaybookLink href="/playbooks/intelligent-file-organizer">Intelligent File Organizer</PlaybookLink>{' '}
        Skill is designed for this heavier lift.
      </p>
      <p>
        It analyzes your folder's actual contents — not just file types, but what the files appear to be based on their names and structure — and proposes a logical folder hierarchy based on what you actually have. It detects duplicates, generates a cleanup script, and shows you the full proposed reorganization before moving a single file. If the proposed structure doesn't match how you think about your work, you can redirect it before anything changes.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Organize my Documents folder — it's 3,000 unsorted files. Propose a folder structure based on what's actually in there, find duplicates, and wait for my approval before moving anything."
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">3,000 files in a flat Documents folder you've tried to organize manually three times and abandoned each time because deciding where each file belongs is exhausting</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Content analysis revealing actual file clusters, proposed folder structure built from your real files, duplicate detection, and a cleanup script waiting for your go-ahead</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. For large folders, the analysis pass takes longer — it's reading everything before proposing anything.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Recommended Cleanup Order
      </h2>
      <p>
        These Skills work better in sequence. Running the Intelligent File Organizer on a folder still full of duplicates means it proposes a structure with redundant files in it. Running the Downloads sorter before removing old junk means you're neatly organizing things you'll delete anyway. The efficient order:
      </p>
      <ol className="list-decimal list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Duplicate File Detector</span> — know what's redundant before you sort anything</li>
        <li><span className="text-foreground font-medium">Old File Cleanup</span> — remove safely deletable junk so you're organizing fewer files</li>
        <li><span className="text-foreground font-medium">Auto-Organize Downloads</span> — sort what remains in Downloads into a navigable structure</li>
        <li><span className="text-foreground font-medium">Intelligent File Organizer</span> — tackle the Documents folder once the low-hanging fruit is gone</li>
      </ol>
      <p>
        That said, if your only problem is a chaotic Downloads folder, skip straight to Skill 3. If duplicates are eating your storage, start with Skill 1. You don't need to run all four — use the one that matches the pain point you actually have.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Pick Your Starting Point
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/duplicate-file-detector">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Duplicate File Detector</p>
            <p className="text-sm text-muted-foreground">Find exact copies, near-duplicates, and version variants — with keep/delete recommendations, nothing auto-deleted</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/old-file-cleanup">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Old File Cleanup Assistant</p>
            <p className="text-sm text-muted-foreground">Flag safely deletable old files by age and type — dry-run first, nothing deleted without approval</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/auto-organize-downloads">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Auto-Organize Downloads</p>
            <p className="text-sm text-muted-foreground">Sort a chaotic Downloads folder into type-based subfolders in minutes</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/intelligent-file-organizer">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Intelligent File Organizer</p>
            <p className="text-sm text-muted-foreground">Analyze and restructure an entire Documents folder — content-aware, approval required before any moves</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
