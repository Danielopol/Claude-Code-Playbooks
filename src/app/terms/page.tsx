import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | Claude Code Playbooks',
  description: 'Terms of use for Claude Code Playbooks. Read about acceptable use, disclaimers, and community contributions.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Use | Claude Code Playbooks',
    description: 'Terms of use for Claude Code Playbooks. Read about acceptable use, disclaimers, and community contributions.',
    url: 'https://www.claudecodehq.com/terms',
    type: 'website',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use | Claude Code Playbooks',
    description: 'Terms of use for Claude Code Playbooks. Read about acceptable use, disclaimers, and community contributions.',
    images: ['https://www.claudecodehq.com/og-image.jpg'],
  },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 max-w-3xl">
      <h1 className="text-2xl font-bold mb-2">Terms of Use</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: November 1, 2026</p>

      <div className="space-y-8 text-sm text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Acceptance of Terms</h2>
          <p>
            By accessing and using Claude Code Playbooks (claudecodehq.com), you agree to these terms. If you do not agree, please do not use the site.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Use of Content</h2>
          <p className="mb-3">
            Playbook content on this site is provided as-is. It comes from different sources, so we cannot give you blanket permission to copy, modify, or share it. What you may do with a playbook depends on where it came from:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 mb-3">
            <li><strong className="text-foreground">Third-party playbooks.</strong> Copyright stays with the original author. Your rights come from the playbook&apos;s source and any license it carries, not from us, and you must comply with those terms directly.</li>
            <li><strong className="text-foreground">Community-submitted playbooks.</strong> Copyright stays with the contributor. The license contributors give us does not pass on to you, so your rights come from the contributor.</li>
            <li><strong className="text-foreground">Text written by us.</strong> Our original descriptions and instructions may be quoted with attribution and a link back.</li>
          </ul>
          <p className="mb-3">
            Before reusing a playbook, follow its Source link if it has one and check the author&apos;s terms. A missing license or source link does not mean a playbook is free to reuse, and we cannot promise that source links or license details are complete, current, or correct. See{' '}
            <Link href="/licensing" className="text-[#22d3ee] hover:underline">Licensing &amp; Attribution</Link> for more.
          </p>
          <p>
            You may submit your own playbooks for inclusion on the site.
          </p>
        </section>

        <section id="community-contributions" className="scroll-mt-24">
          <h2 className="text-base font-semibold text-foreground mb-3">Community Contributions</h2>
          <p className="mb-3">
            By submitting a playbook or workflow description, you grant Claude Code Playbooks a non-exclusive, worldwide, royalty-free license to publish, display, reproduce, adapt, and distribute your contribution through the Claude Code Playbooks services. These are the website, GitHub repository, public API, command-line tool, MCP server, and plugins or integrations built on them, such as a ChatGPT plugin, and they include pages that carry sponsorships or ads. The license also lets apps that connect to these services deliver your contribution to their users. You retain ownership of your original content.
          </p>
          <p>
            Only submit content you wrote or have permission to share. If it is based on someone else&apos;s work, say so and link to the source. You can ask us to remove your contribution at any time, as described on our{' '}
            <Link href="/licensing" className="text-[#22d3ee] hover:underline">Licensing &amp; Attribution</Link> page, though we cannot recall copies already delivered.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Disclaimers</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Claude Code Playbooks is not affiliated with Anthropic or Claude.</li>
            <li>Playbooks are provided &quot;as-is&quot; without warranty of any kind.</li>
            <li>We are not responsible for any damages arising from the use of playbooks.</li>
            <li>AI-generated output may contain errors. Always review results before using in production.</li>
          </ul>
        </section>

        <section id="affiliate-links" className="scroll-mt-24">
          <h2 className="text-base font-semibold text-foreground mb-3">Sponsors and Affiliate Links</h2>
          <p className="mb-3">
            Cards marked &quot;Sponsored&quot; are paid placements. Cards under &quot;Tools for this workflow&quot; are affiliate links: if you buy through one, we may earn a commission at no extra cost to you.
          </p>
          <p>
            Neither affects which playbooks we publish or what they say. Every playbook works without the paid tools mentioned alongside it.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Intellectual Property</h2>
          <p>
            The Claude Code Playbooks website design, logo, and branding are owned by Claude Code Playbooks. The site&apos;s code is released under the MIT license, which does not cover playbook content. We do not own playbook content as a whole: it comes from third-party authors, community contributors, and our own writing, as described under Use of Content.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Changes will be posted on this page with an updated date. Continued use of the site constitutes acceptance of updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Contact</h2>
          <p>
            Questions about these terms? Contact us at{' '}
            <a href="mailto:valentin.marin83@gmail.com" className="text-[#22d3ee] hover:underline">valentin.marin83@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
