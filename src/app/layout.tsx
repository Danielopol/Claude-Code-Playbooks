import type { Metadata } from 'next';
import Link from 'next/link';
import { Github, FileCode, BookOpen, Rss, Phone, Mail } from 'lucide-react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Claude Code Playbooks',
  description: 'Ready-to-use configurations for your Claude Code projects',
  keywords: ['Claude Code', 'AI workflows', 'productivity', 'automation', 'templates'],
  authors: [{ name: 'Claude Code Playbooks' }],
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
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
    <footer className="border-t border-border/50 py-8">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <img src="/logo.png" alt="Claude Code Playbooks" className="h-10 mb-4" />
            <p className="text-center md:text-left text-sm text-muted-foreground">
              <span className="text-[#22d3ee]">$</span> Built for the Claude Code community. Not affiliated with Anthropic.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground mt-3">
              <Link href="/playbooks" className="hover:text-[#22d3ee] transition-colors">
                Playbooks
              </Link>
              <Link href="/blog" className="hover:text-[#f97316] transition-colors">
                Blog
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="text-[#22d3ee]">●</span> Contact Us
            </h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+40728083312" className="flex items-center gap-3 hover:text-[#22d3ee] transition-colors">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-border/50 bg-background/50">
                  <Phone className="h-4 w-4 text-[#22d3ee]" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground/70">Phone</div>
                  <div>+40 72808 33 12</div>
                </div>
              </a>
              <a href="mailto:valentin.marin83@gmail.com" className="flex items-center gap-3 hover:text-[#22d3ee] transition-colors">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-border/50 bg-background/50">
                  <Mail className="h-4 w-4 text-[#a78bfa]" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground/70">Email</div>
                  <div>valentin.marin83@gmail.com</div>
                </div>
              </a>
              <a href="https://x.com/DanielGPT2022" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#22d3ee] transition-colors">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-border/50 bg-background/50">
                  <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </span>
                <div>
                  <div className="text-xs text-muted-foreground/70">X (Twitter)</div>
                  <div>@DanielGPT2022</div>
                </div>
              </a>
            </div>
          </div>
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
