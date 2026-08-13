import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Press_Start_2P } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Home, BookOpen, Rss, Phone, Mail, Users, Layers } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d1117',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.claudecodehq.com'),
  title: 'Claude Code Playbooks | AI Workflows, Templates & Skills',
  description: 'Ready-to-use workflows, templates and skills for Claude Code, Codex CLI, Windsurf, Cursor, Antigravity & more AI coding agents. Copy-paste CLAUDE.md playbooks. Free and open source.',
  keywords: ['Claude Code', 'Claude templates', 'Claude workflows', 'Claude skills', 'AI workflows', 'Codex CLI', 'Windsurf', 'Antigravity', 'Cursor', 'Perplexity', 'AI coding agent', 'productivity', 'automation', 'templates', 'CLAUDE.md', 'playbooks'],
  authors: [{ name: 'Claude Code Playbooks' }],
  alternates: {
    canonical: '/',
    types: {
      'text/plain': '/llms.txt',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Claude Code Playbooks | AI Workflows, Templates & Skills',
    description: 'Ready-to-use workflows, templates and skills for Claude Code, Codex CLI, Windsurf, Cursor, Antigravity & more AI coding agents. Copy-paste CLAUDE.md playbooks.',
    type: 'website',
    siteName: 'Claude Code Playbooks',
    url: 'https://www.claudecodehq.com',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DanielGPT2022',
    title: 'Claude Code Playbooks | AI Workflows, Templates & Skills',
    description: 'Ready-to-use workflows, templates and skills for Claude Code, Codex CLI, Windsurf & more AI agents. Free and open source.',
    images: ['https://www.claudecodehq.com/og-image.jpg'],
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-1.5 text-muted-foreground hover:text-[#22d3ee] transition-colors">
          <Home className="h-4 w-4" />
          <span>Home</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/playbooks"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-[#22d3ee] transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            <span>Browse</span>
          </Link>
          {/*
            Site-wide link to the category hub index. Every playbook page now
            reaches all 37 category hubs in two hops, which is what feeds the
            deep pages that were sitting in "crawled - currently not indexed".
          */}
          <Link
            href="/categories"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-[#22d3ee] transition-colors"
          >
            <Layers className="h-4 w-4" />
            <span>Categories</span>
          </Link>
          <Link
            href="/for"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-[#22d3ee] transition-colors"
          >
            <Users className="h-4 w-4" />
            <span>For You</span>
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-[#f97316] transition-colors"
          >
            <Rss className="h-4 w-4" />
            <span>Blog</span>
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
            <Image src="/logo.png" alt="Claude Code Playbooks" width={79} height={40} className="h-10 w-auto mb-4" />
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
              <Link href="/about" className="hover:text-[#22d3ee] transition-colors">
                About
              </Link>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-muted-foreground/70 mt-2">
              <Link href="/privacy" className="hover:text-muted-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-muted-foreground transition-colors">
                Terms
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
        <div className="flex justify-center items-center gap-4 pt-6 border-t border-border/50">
          <a href="https://neeed.directory/products/claude-code-playbooks?utm_source=claude-code-playbooks" target="_blank" rel="noopener">
            <Image src="https://neeed.directory/badges/neeed-badge-light.svg" alt="Featured on neeed.directory" width={139} height={32} unoptimized />
          </a>
          <a href="https://www.foundrlist.com/product/claudecodeplaybooks?utm_source=badge&utm_medium=embed" target="_blank" rel="noopener">
            <Image src="https://www.foundrlist.com/api/badge/claudecodeplaybooks" alt="Featured on FoundrList" width={150} height={48} unoptimized />
          </a>
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
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Claude Code Playbooks',
    url: 'https://www.claudecodehq.com',
    description: 'Ready-to-use workflows, templates and skills for Claude Code, Codex CLI, Windsurf, Cursor, Antigravity and more AI coding agents',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.claudecodehq.com/playbooks?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Claude Code Playbooks',
    url: 'https://www.claudecodehq.com',
    logo: 'https://www.claudecodehq.com/logo.png',
    sameAs: [
      'https://x.com/DanielGPT2022',
      'https://github.com/Danielopol/Claude-Code-Playbooks',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+40728083312',
      email: 'valentin.marin83@gmail.com',
      contactType: 'customer support',
    },
  };

  return (
    <html lang="en" className={`dark ${jetbrainsMono.variable} ${pressStart2P.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-[#0d1117]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
