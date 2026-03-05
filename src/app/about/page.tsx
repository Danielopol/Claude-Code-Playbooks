import { Metadata } from 'next';
import Link from 'next/link';
import { Github, BookOpen, Users, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Claude Code Playbooks — AI Workflows, Templates & Skills',
  description: 'Claude Code Playbooks is a free, open-source directory of community-tested workflows, templates and skills for Claude Code, Codex CLI, Windsurf, Cursor, Antigravity & more. Built for non-developers.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About | Claude Code Playbooks',
    description: 'Free, open-source directory of community-tested workflows, templates and skills for Claude Code and other AI coding agents.',
    url: 'https://www.claudecodehq.com/about',
    type: 'website',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Claude Code Playbooks',
    description: 'Free, open-source directory of community-tested workflows, templates and skills for Claude Code and other AI coding agents.',
    images: ['https://www.claudecodehq.com/og-image.jpg'],
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <BookOpen className="h-6 w-6 text-[#22d3ee]" />
        About Claude Code Playbooks
      </h1>

      <div className="prose prose-invert max-w-none space-y-6">
        <p className="text-muted-foreground text-lg">
          Claude Code Playbooks is a free, open-source directory of community-tested workflows, templates and skills for{' '}
          <Link href="https://claude.ai/code" target="_blank" rel="noopener noreferrer" className="text-[#22d3ee] hover:underline">
            Claude Code
          </Link>{' '}
          and other AI coding agents. Every playbook is a real-world use case, tested by the community and curated on this directory so anyone can replicate it.
        </p>

        <div className="mt-6 p-5 bg-[#0d1117] border border-[#f97316]/30 rounded-lg">
          <h2 className="text-base font-semibold mb-2 text-[#f97316]">Built for Non-Developers</h2>
          <p className="text-sm text-muted-foreground">
            You don&apos;t need to be a developer to use AI coding agents. Our playbooks are designed for marketers, analysts, founders, researchers, students and anyone who wants to automate their work with AI. Each workflow is a copy-paste template — no coding experience required.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mt-8">
          <div className="p-5 bg-[#161b22] border border-[#30363d] rounded-lg">
            <Sparkles className="h-5 w-5 text-[#f97316] mb-3" />
            <h2 className="text-base font-semibold mb-2">Copy-Paste Workflows</h2>
            <p className="text-sm text-muted-foreground">
              Every playbook is a complete workflow you can copy into your project as a <code className="text-[#22d3ee] bg-[#0d1117] px-1 py-0.5 rounded text-xs">CLAUDE.md</code> file and start using immediately. No setup complexity, no configuration — just paste and go.
            </p>
          </div>
          <div className="p-5 bg-[#161b22] border border-[#30363d] rounded-lg">
            <Users className="h-5 w-5 text-[#22d3ee] mb-3" />
            <h2 className="text-base font-semibold mb-2">Community Tested & Curated</h2>
            <p className="text-sm text-muted-foreground">
              Every template on this directory has been submitted and tested by the community. These are real use cases that people actually rely on — curated here for others to replicate and adapt.
            </p>
          </div>
          <div className="p-5 bg-[#161b22] border border-[#30363d] rounded-lg">
            <Github className="h-5 w-5 text-foreground mb-3" />
            <h2 className="text-base font-semibold mb-2">Open Source</h2>
            <p className="text-sm text-muted-foreground">
              The entire project is open source on{' '}
              <Link href="https://github.com/Danielopol/Claude-Code-Playbooks" target="_blank" rel="noopener noreferrer" className="text-[#22d3ee] hover:underline">
                GitHub
              </Link>. Star, fork, or contribute your own skills and workflows.
            </p>
          </div>
          <div className="p-5 bg-[#161b22] border border-[#30363d] rounded-lg">
            <BookOpen className="h-5 w-5 text-[#a78bfa] mb-3" />
            <h2 className="text-base font-semibold mb-2">Works with Multiple Agents</h2>
            <p className="text-sm text-muted-foreground">
              While built for Claude Code, many templates and skills also work with Codex CLI, Windsurf, Cursor, Antigravity, Perplexity and other AI coding agents. Browse all categories on the{' '}
              <Link href="/playbooks" className="text-[#22d3ee] hover:underline">
                playbooks page
              </Link>.
            </p>
          </div>
        </div>

        <div className="mt-8 p-5 bg-[#161b22] border border-[#30363d] rounded-lg">
          <h2 className="text-base font-semibold mb-2">Not Affiliated with Anthropic</h2>
          <p className="text-sm text-muted-foreground">
            Claude Code Playbooks is an independent community project. It is not affiliated with, endorsed by, or officially connected to Anthropic or Claude in any way.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-base font-semibold mb-3">Get in Touch</h2>
          <p className="text-sm text-muted-foreground">
            Questions, feedback, or playbook submissions? Reach us at{' '}
            <a href="mailto:valentin.marin83@gmail.com" className="text-[#22d3ee] hover:underline">valentin.marin83@gmail.com</a>{' '}
            or on{' '}
            <a href="https://x.com/DanielGPT2022" target="_blank" rel="noopener noreferrer" className="text-[#22d3ee] hover:underline">X (@DanielGPT2022)</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
