import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Claude Code Playbooks',
  description: 'Privacy policy for Claude Code Playbooks. Learn how we handle your data and protect your privacy.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-12 max-w-3xl">
      <h1 className="text-2xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: February 25, 2026</p>

      <div className="space-y-8 text-sm text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Overview</h2>
          <p>
            Claude Code Playbooks (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website claudecodehq.com. This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our site.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Information We Collect</h2>
          <p className="mb-3">We collect minimal information to operate and improve our website:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-foreground">Analytics data:</strong> We use Vercel Analytics to collect anonymous usage data including page views, referrer URLs, browser type, and country. This data is aggregated and cannot identify individual users.</li>
            <li><strong className="text-foreground">Newsletter subscriptions:</strong> If you subscribe to our newsletter, we collect your email address. You can unsubscribe at any time.</li>
            <li><strong className="text-foreground">Playbook submissions:</strong> If you submit a playbook, we collect the information you provide in the submission form.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">What We Don&apos;t Collect</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>We do not use cookies for tracking purposes.</li>
            <li>We do not collect personal financial information.</li>
            <li>We do not sell or share your data with third parties for advertising.</li>
            <li>We do not require account creation to use the site.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
            <li><strong className="text-foreground">Vercel:</strong> Hosting and analytics. See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#22d3ee] hover:underline">Vercel&apos;s Privacy Policy</a>.</li>
            <li><strong className="text-foreground">GitHub:</strong> Source code hosting. See <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-[#22d3ee] hover:underline">GitHub&apos;s Privacy Statement</a>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Open Source Content</h2>
          <p>
            All playbook content on this site is open source and publicly available through our GitHub repository. Playbooks are contributed by the community under an open license.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Contact</h2>
          <p>
            If you have questions about this privacy policy, contact us at{' '}
            <a href="mailto:valentin.marin83@gmail.com" className="text-[#22d3ee] hover:underline">valentin.marin83@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
