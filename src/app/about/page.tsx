import { Metadata } from 'next';
import Link from 'next/link';
import { Github, BookOpen, Users, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Claude Code Playbooks',
  description: 'Claude Code Playbooks is a free, open-source collection of 239+ copy-paste workflows for Claude Code. Built by the community, for the community.',
  alternates: {
    canonical: '/about',
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
          Claude Code Playbooks is a free, open-source directory of ready-to-use <code className="text-[#22d3ee] bg-[#161b22] px-1.5 py-0.5 rounded text-sm">CLAUDE.md</code> configurations for{' '}
          <Link href="https://claude.ai/code" target="_blank" rel="noopener noreferrer" className="text-[#22d3ee] hover:underline">
            Claude Code
          </Link>.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 mt-8">
          <div className="p-5 bg-[#161b22] border border-[#30363d] rounded-lg">
            <Sparkles className="h-5 w-5 text-[#f97316] mb-3" />
            <h2 className="text-base font-semibold mb-2">Copy-Paste Ready</h2>
            <p className="text-sm text-muted-foreground">
              Every playbook is a complete workflow you can copy into your project and start using immediately. No setup complexity.
            </p>
          </div>
          <div className="p-5 bg-[#161b22] border border-[#30363d] rounded-lg">
            <Users className="h-5 w-5 text-[#22d3ee] mb-3" />
            <h2 className="text-base font-semibold mb-2">Community Built</h2>
            <p className="text-sm text-muted-foreground">
              Playbooks are contributed by the Claude Code community. Anyone can submit a playbook via our GitHub repository.
            </p>
          </div>
          <div className="p-5 bg-[#161b22] border border-[#30363d] rounded-lg">
            <Github className="h-5 w-5 text-foreground mb-3" />
            <h2 className="text-base font-semibold mb-2">Open Source</h2>
            <p className="text-sm text-muted-foreground">
              The entire project is open source on{' '}
              <Link href="https://github.com/Danielopol/Claude-Code-Playbooks" target="_blank" rel="noopener noreferrer" className="text-[#22d3ee] hover:underline">
                GitHub
              </Link>. Star, fork, or contribute.
            </p>
          </div>
          <div className="p-5 bg-[#161b22] border border-[#30363d] rounded-lg">
            <BookOpen className="h-5 w-5 text-[#a78bfa] mb-3" />
            <h2 className="text-base font-semibold mb-2">239+ Workflows</h2>
            <p className="text-sm text-muted-foreground">
              From personal finance to DevOps, content marketing to academic research. Browse all categories on the{' '}
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
