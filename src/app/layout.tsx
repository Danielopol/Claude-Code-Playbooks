import type { Metadata } from 'next';
import Link from 'next/link';
import { Github, FileCode, BookOpen, Rss } from 'lucide-react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Claude Code Playbooks',
  description: 'Ready-to-use configurations for your Claude Code projects',
  keywords: ['Claude Code', 'AI workflows', 'productivity', 'automation', 'templates'],
  authors: [{ name: 'Claude Code Playbooks' }],
  openGraph: {
    title: 'Claude Code Playbooks',
    description: 'Ready-to-use configurations for your Claude Code projects',
    type: 'website',
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-[#22d3ee] hover:text-[#22d3ee]/80 transition-colors">
          <FileCode className="h-5 w-5" />
          <span className="font-semibold tracking-tight">claude-code-playbooks</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/playbooks"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-[#22d3ee] transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            <span>Browse</span>
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-[#f97316] transition-colors"
          >
            <Rss className="h-4 w-4" />
            <span>Blog</span>
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-[#22d3ee] transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
        <p className="text-center text-sm text-muted-foreground">
          <span className="text-[#22d3ee]">$</span> Built for the Claude Code community. Not affiliated with Anthropic.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/playbooks" className="hover:text-[#22d3ee] transition-colors">
            Playbooks
          </Link>
          <Link href="/blog" className="hover:text-[#f97316] transition-colors">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen flex flex-col bg-[#0d1117]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
