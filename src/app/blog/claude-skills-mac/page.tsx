import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Mac Users: Speed Up and Automate Your Workflow | Claude Code Playbooks Blog',
  description: "Four Claude Skills built for macOS — plain-English Mac diagnostics, hidden disk space detection, Apple Shortcuts generation, and HomeKit automation from natural language.",
  alternates: { canonical: '/blog/claude-skills-mac' },
  openGraph: {
    title: 'Claude Skills for Mac Users: Speed Up and Automate Your Workflow',
    description: "Four Claude Skills built for macOS — plain-English Mac diagnostics, hidden disk space detection, Apple Shortcuts generation, and HomeKit automation from natural language.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-mac',
    type: 'article',
    publishedTime: '2026-06-30T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Mac Users: Speed Up and Automate Your Workflow',
    description: "Four Claude Skills built for macOS — plain-English Mac diagnostics, hidden disk space detection, Apple Shortcuts generation, and HomeKit automation from natural language.",
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

export default function ClaudeSkillsMacPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Mac Users: Speed Up and Automate Your Workflow"
      description="Four Claude Skills built for macOS — plain-English Mac diagnostics, hidden disk space detection, Apple Shortcuts generation, and HomeKit automation from natural language."
      category="guide"
      difficulty="basic"
      readingTime="12 min read"
      createdAt="2026-06-30"
      tags={['claude skills mac', 'ai mac automation', 'claude skills macos', 'mac performance fix', 'apple shortcuts automation', 'disk space mac', 'homekit automation', 'mac productivity']}
      author="Claude Code Playbooks"
      slug="claude-skills-mac"
    >
      <p>
        Mac users are already predisposed to automation. The ecosystem is built for it — Shortcuts, Automator, Spotlight, AppleScript, HomeKit. The problem isn't that the tools don't exist. It's that using them fluently requires knowing which tool applies, how to configure it, and what to do when something goes wrong. Most people use 10% of what their Mac can do and live with the other 90% as background friction.
      </p>
      <p>
        These four Claude Skills cover the four most common Mac friction points: a slow Mac you can't diagnose, a disk that's inexplicably full, an Apple Shortcuts feature you've never gotten off the ground, and smart home automations you can describe perfectly in English but can't translate into actual configs. Each one is designed to close the gap between "I know what I want" and "I know how to get it."
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Diagnose a Slow Mac in Plain English
      </h2>
      <p>
        The spinning beach ball is one of the most recognizable symbols in computing, and one of the most frustrating — because it tells you something is wrong without telling you what or how to fix it. Activity Monitor gives you numbers. It doesn't tell you whether those numbers are a problem or what to do about them.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/mac-performance-diagnostics">Mac Performance Diagnostics</PlaybookLink>{' '}
        Skill runs the right diagnostic commands for your specific symptoms, reads the output, and gives you a plain-English explanation of what's actually happening — plus concrete steps to fix it. It doesn't just report numbers; it interprets them in context. "Chrome is using 8 GB of RAM across 47 tabs" is more actionable than "Chrome: 8192 MB."
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "My MacBook is running really slow and the fan won't stop. Tell me what's wrong and how to fix it."
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Mac crawling, fans running, Activity Monitor showing something at 400% CPU — but no idea if you should force quit it or if that'll make things worse</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Plain-English diagnostic report identifying the specific cause — Chrome tabs, Spotlight re-indexing, swap pressure, or a runaway process — with step-by-step resolution instructions</p>
        </div>
      </div>

      <p>
        Common culprits it surfaces: browser tabs consuming RAM, Spotlight re-indexing after an OS update, excessive swap usage, kernel extension conflicts, and processes that have leaked memory since your last restart. For each finding, it explains what it means and what to do — no Terminal expertise required.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Describe your symptoms in plain English and it runs the appropriate diagnostics.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Find Where Your Disk Space Actually Went
      </h2>
      <p>
        "Your disk is almost full" is one of the most reliable triggers for a wasted afternoon. You delete some photos. You empty the trash. You gain back 300 MB of the 40 GB you need, and you're no closer to understanding the problem. The real space hogs on a Mac are almost never where you'd look.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/disk-space-analyzer">Disk Space Analyzer</PlaybookLink>{' '}
        Skill does a full breakdown of what's consuming your storage, organized by category and ranked by impact. It surfaces the things that are genuinely hard to find manually: Docker images that accumulate silently, Xcode caches and simulator runtimes, old iOS backups in obscure Library folders, <code className="text-sm bg-[#0d1117] px-1 rounded">node_modules</code> directories scattered across old projects, and system caches that ballooned after an update.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "My Mac only has 8 GB free and I have no idea where 100 GB went. Show me what's taking up space, ranked by size."
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">8 GB free, no idea why, manually checking obvious folders and finding nothing — the storage hog is somewhere you've never navigated to</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Categorized breakdown revealing the actual culprits — Docker images, Xcode caches, old iOS backups — with cleanup actions ranked by space recovered and safety</p>
        </div>
      </div>

      <p>
        The cleanup recommendations are prioritized by both how much space you'll recover and how safe the deletion is. Xcode simulator runtimes are safe to delete. Xcode itself less so. The Skill distinguishes between them so you're not making uninformed decisions about what to remove.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Works on any Mac; especially useful for developers with Docker and Xcode installed.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Build Apple Shortcuts Without the Visual Editor
      </h2>
      <p>
        Apple Shortcuts is genuinely powerful. It can automate almost anything across iOS and macOS — connect apps, trigger on conditions, chain actions, integrate with Siri. The reason most people have never built anything meaningful with it is the visual block editor. Connecting blocks to express conditional logic is tedious, the available actions aren't obvious until you've already explored them, and anything non-trivial requires multiple hours of trial and error.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/apple-shortcuts">Apple Shortcuts Builder</PlaybookLink>{' '}
        Skill flips the workflow: you describe what you want in plain English, and it generates a complete, importable Shortcut with the right actions, conditional logic, and cross-app connections already configured. No block editor. No hunting for the right action type. Just describe the automation and import the result.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Create a morning routine shortcut that checks my calendar for today's events, reads the weather, and starts my focus playlist if I have back-to-back meetings"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">You know exactly what you want the Shortcut to do — but building anything with conditional logic in the visual editor means an hour of block-connecting before you give up</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A complete, importable Apple Shortcut with conditional logic, calendar integration, weather API calls, and cross-app actions — generated from your description, ready to run</p>
        </div>
      </div>

      <p>
        Works for iOS and macOS Shortcuts alike. Useful for morning routines, focus mode triggers, travel automations, work-from-home setups, and any workflow that involves more than two apps talking to each other.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Requires Apple Shortcuts on your device; the generated Shortcut imports directly.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Write HomeKit Automations in Plain English
      </h2>
      <p>
        The gap between "I want my lights to turn on at sunset but only when someone's home" and actually making that happen is bigger than it should be. HomeKit, Home Assistant, and SmartThings all support presence-based automations with conditional logic — but expressing them requires navigating menus, setting up triggers and conditions correctly, and understanding each platform's specific configuration model.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/home-automation-assistant">Natural Language Home Automation</PlaybookLink>{' '}
        Skill translates plain English automation descriptions into working configs for HomeKit, Home Assistant, or SmartThings. You describe the behavior you want — devices, triggers, conditions, fallbacks — and get back a complete configuration you can paste directly into your platform of choice. No YAML required, unless you want to inspect it.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "When I leave for work, lock the front door, turn off all lights, and set the thermostat to 65. If it's after 9pm, also arm the security system."
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">You know the automation you want — but turning "lock door + turn off lights + set thermostat when I leave" into HomeKit or Home Assistant config means navigating menus and learning the platform's trigger model</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Working automation config with presence detection trigger, conditional logic for the time check, device actions in the right sequence — ready to paste into HomeKit, Home Assistant, or SmartThings</p>
        </div>
      </div>

      <p>
        Mac users in the Apple ecosystem get HomeKit configs that import directly via the Home app. Home Assistant users on a Mac server get the YAML automation block. Either way, the output is a working config, not a tutorial on how to build one.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Requires an existing smart home platform; the Skill generates platform-specific configs.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Use the Skill That Matches Your Immediate Problem
      </h2>
      <p>
        Each of these addresses a distinct pain point. If your Mac is slow right now, start with Performance Diagnostics. If you're getting low-storage warnings, start with Disk Space Analyzer. If you've been meaning to build a Shortcut for months, start with the Shortcuts Builder. If your smart home still requires manual control for everything except the simplest scenes, start with Home Automation.
      </p>
      <p>
        None of them require technical knowledge beyond knowing how to describe your problem. That's the through-line: you explain what's wrong or what you want, and the Skill handles the layer that was previously too technical to approach without documentation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/mac-performance-diagnostics">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Mac Performance Diagnostics</p>
            <p className="text-sm text-muted-foreground">Plain-English diagnosis of Mac slowdowns with step-by-step fixes</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/disk-space-analyzer">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Disk Space Analyzer</p>
            <p className="text-sm text-muted-foreground">Find hidden space hogs — Docker, Xcode caches, old backups — ranked by impact</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/apple-shortcuts">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Apple Shortcuts Builder</p>
            <p className="text-sm text-muted-foreground">Generate importable Shortcuts with conditional logic from a plain-English description</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/home-automation-assistant">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Natural Language Home Automation</p>
            <p className="text-sm text-muted-foreground">Describe your HomeKit or Home Assistant automation in English, get working config back</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
