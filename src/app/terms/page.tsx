import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | Claude Code Playbooks',
  description: 'Terms of use for Claude Code Playbooks. Read about acceptable use, disclaimers, and community contributions.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 max-w-3xl">
      <h1 className="text-2xl font-bold mb-2">Terms of Use</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: February 25, 2026</p>

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
            Playbook content on this site is provided as-is for use with Claude Code. You may:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Copy, modify, and use playbooks in your own projects.</li>
            <li>Share playbooks with proper attribution.</li>
            <li>Submit your own playbooks for inclusion on the site.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Community Contributions</h2>
          <p>
            By submitting a playbook, you grant Claude Code Playbooks a non-exclusive license to publish, display, and distribute your contribution on the website and GitHub repository. You retain ownership of your original content.
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

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Intellectual Property</h2>
          <p>
            The Claude Code Playbooks website design, logo, and branding are owned by Claude Code Playbooks. Individual playbook content is contributed by the community and may be subject to its own licensing terms.
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
