import { Metadata } from 'next';
import Link from 'next/link';
import { Scale, Link2, FileText, MailWarning } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Licensing & Attribution | Claude Code Playbooks',
  description: 'How Claude Code Playbooks curates and attributes playbook content, which license covers the site code, and how to request a correction or removal.',
  alternates: {
    canonical: '/licensing',
  },
  openGraph: {
    title: 'Licensing & Attribution | Claude Code Playbooks',
    description: 'How Claude Code Playbooks curates and attributes playbook content, and how to request a correction or removal.',
    url: 'https://www.claudecodehq.com/licensing',
    type: 'website',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Licensing & Attribution | Claude Code Playbooks',
    description: 'How Claude Code Playbooks curates and attributes playbook content, and how to request a correction or removal.',
    images: ['https://www.claudecodehq.com/og-image.jpg'],
  },
};

const linkClass = 'text-[#22d3ee] hover:underline';

export default function LicensingPage() {
  return (
    <div className="container mx-auto py-12 max-w-3xl">
      <h1 className="text-2xl font-bold mb-2 flex items-center gap-3">
        <Scale className="h-6 w-6 text-[#22d3ee]" />
        Licensing &amp; Attribution
      </h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: August 24, 2026</p>

      <div className="space-y-8 text-sm text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">How this directory works</h2>
          <p className="mb-3">
            Claude Code Playbooks is a curated directory. We find workflows that people have shared publicly — in open source repositories, blog posts, newsletters, and social threads — and we turn each one into a consistent, usable page: what it does, who it is for, how to set it up, what it expects, and where it falls short.
          </p>
          <p>
            The setup instructions, prerequisites, tips, limitations, and troubleshooting notes on each page are written by us. The underlying workflow is often someone else&apos;s idea, and we say so and link to them.
          </p>
        </section>

        <section>
          <div className="p-5 bg-[#161b22] border border-[#30363d] rounded-lg">
            <h2 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              <Link2 className="h-4 w-4 text-[#22d3ee]" />
              Attribution
            </h2>
            <p>
              Every playbook whose origin we know displays a <strong className="text-foreground">Source</strong> button linking to the original, and names the original author where one is identified. If a page is missing attribution it should have, that is an error on our part, and we want to hear about it.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
            <FileText className="h-4 w-4 text-[#f97316]" />
            What license applies
          </h2>
          <p className="mb-3">Two different sets of terms apply to this project:</p>
          <ul className="list-disc list-inside space-y-3 ml-2">
            <li>
              <strong className="text-foreground">Site code — MIT.</strong> The website itself is open source and MIT licensed. See the{' '}
              <a href="https://github.com/Danielopol/Claude-Code-Playbooks/blob/master/LICENSE" target="_blank" rel="noopener noreferrer" className={linkClass}>LICENSE file</a>.
            </li>
            <li>
              <strong className="text-foreground">Playbook content — varies.</strong> Playbook content is <em>not</em> released under a single open license, and the MIT license does not cover it. Provenance differs page by page, so we cannot grant blanket permission to redistribute the corpus.
            </li>
          </ul>
          <p className="mt-3">Each playbook falls into one of three categories:</p>
          <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
            <li><strong className="text-foreground">Third-party sourced.</strong> Copyright stays with the original author. Where the source carries its own license — an MIT or Apache repository, for instance — that license governs, and you must comply with it directly.</li>
            <li><strong className="text-foreground">Community submitted.</strong> Contributors grant us a non-exclusive right to publish, and keep copyright in their own work.</li>
            <li><strong className="text-foreground">Written by us.</strong> Our original descriptions and instructions may be quoted with attribution and a link back.</li>
          </ul>
          <p className="mt-3">
            If you want to reuse a specific playbook, follow its <strong className="text-foreground">Source</strong> link and honor the original author&apos;s terms.
          </p>
        </section>

        <section>
          <div className="p-5 bg-[#0d1117] border border-[#f97316]/30 rounded-lg">
            <h2 className="text-base font-semibold text-[#f97316] mb-3 flex items-center gap-2">
              <MailWarning className="h-4 w-4" />
              Requesting a correction or removal
            </h2>
            <p className="mb-3">
              If you wrote something published here and you want the attribution fixed, the wording changed, or the page taken down, email{' '}
              <a href="mailto:valentin.marin83@gmail.com" className={linkClass}>valentin.marin83@gmail.com</a>{' '}
              with the page URL and what you would like changed.
            </p>
            <p>
              You do not need to send a formal legal notice, and you do not need to explain yourself. We will act on removal requests promptly and confirm when it is done.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Trademarks</h2>
          <p>
            Claude and Anthropic are trademarks of Anthropic PBC. Other product names belong to their respective owners. This project is independent and is not affiliated with, sponsored by, or endorsed by Anthropic. See our{' '}
            <Link href="/about" className={linkClass}>About page</Link> for more on who runs this site.
          </p>
        </section>
      </div>
    </div>
  );
}
