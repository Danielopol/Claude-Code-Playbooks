import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Claude Code Playbooks',
  description: 'Privacy policy for Claude Code Playbooks. Learn how we handle your data, which cookies we use, and how advertising works on this site.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Claude Code Playbooks',
    description: 'Privacy policy for Claude Code Playbooks. Learn how we handle your data, which cookies we use, and how advertising works on this site.',
    url: 'https://www.claudecodehq.com/privacy',
    type: 'website',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Claude Code Playbooks',
    description: 'Privacy policy for Claude Code Playbooks. Learn how we handle your data, which cookies we use, and how advertising works on this site.',
    images: ['https://www.claudecodehq.com/og-image.jpg'],
  },
};

const linkClass = 'text-[#22d3ee] hover:underline';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-12 max-w-3xl">
      <h1 className="text-2xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: August 24, 2026</p>

      <div className="space-y-8 text-sm text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Overview</h2>
          <p>
            Claude Code Playbooks (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website claudecodehq.com. This page explains what information we collect, how we use it, which third parties receive it, and the choices available to you. We collect as little as possible, and we do not require an account to use the site.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-foreground">Analytics data:</strong> We use Vercel Analytics to collect aggregated usage data including page views, referrer URLs, browser type, device type, and country. This data is aggregated and is not used to identify individual visitors.</li>
            <li><strong className="text-foreground">Newsletter subscriptions:</strong> If you subscribe to our newsletter, we collect your email address and the page you subscribed from. You can unsubscribe at any time using the link in any email we send.</li>
            <li><strong className="text-foreground">Playbook submissions:</strong> If you submit a playbook, we collect the content you provide and, optionally, your email address so we can follow up about the submission.</li>
            <li><strong className="text-foreground">Advertising data:</strong> Our advertising partners collect data through cookies and similar technologies, as described in the Advertising section below.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Cookies and Similar Technologies</h2>
          <p className="mb-3">
            Cookies are small files stored on your device. This site uses two categories:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-foreground">Essential cookies:</strong> Required for the site to function, such as remembering your display preferences. These cannot be disabled.</li>
            <li><strong className="text-foreground">Advertising cookies:</strong> Set by Google and its partners to serve and measure advertisements, as described below. These are only set where permitted by law and, in regions that require it, only after you consent.</li>
          </ul>
          <p className="mt-3">
            You can control or delete cookies through your browser settings. Blocking advertising cookies does not prevent you from using the site, though the ads you see may become less relevant.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Advertising</h2>
          <p className="mb-3">
            This site uses Google AdSense to display advertising. Advertising cookies are set only when ads are actually served, and in the European Economic Area, the United Kingdom, and Switzerland only after you have given consent through our Google-certified consent management platform. The following disclosures apply:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this site and other websites.</li>
            <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visits to this and other sites on the internet.</li>
            <li>We do not receive, store, or have access to any personally identifiable information collected by advertising cookies. We receive only aggregate performance reporting.</li>
            <li>We do not sell your personal information, and we do not share the email addresses or submissions you give us with advertisers.</li>
          </ul>
          <p className="mt-3">
            You can opt out of personalized advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className={linkClass}>Google Ads Settings</a>, or opt out of third-party vendors&apos; use of cookies for personalized advertising at{' '}
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className={linkClass}>aboutads.info/choices</a>. For details on how Google handles data from sites that use its services, see{' '}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className={linkClass}>How Google uses information from sites that use its services</a>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Third-Party Services</h2>
          <p>We rely on the following third parties, each governed by its own privacy policy:</p>
          <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
            <li><strong className="text-foreground">Vercel:</strong> Hosting and analytics. See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={linkClass}>Vercel&apos;s Privacy Policy</a>.</li>
            <li><strong className="text-foreground">Google AdSense:</strong> Advertising. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={linkClass}>Google&apos;s Privacy Policy</a>.</li>
            <li><strong className="text-foreground">Resend:</strong> Newsletter storage and email delivery. See <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={linkClass}>Resend&apos;s Privacy Policy</a>.</li>
            <li><strong className="text-foreground">GitHub:</strong> Source code hosting. See <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer" className={linkClass}>GitHub&apos;s Privacy Statement</a>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Your Privacy Rights</h2>
          <p className="mb-3">
            If you are in the European Economic Area or the United Kingdom, the GDPR gives you the right to access, correct, export, or delete the personal data we hold about you, and to withdraw consent for advertising cookies at any time. Our lawful bases are consent (newsletter and advertising cookies) and legitimate interest (aggregate analytics and site security).
          </p>
          <p>
            If you are a California resident, the CCPA gives you the right to know what personal information we collect, to request its deletion, and to opt out of its sale. We do not sell personal information. To exercise any of these rights, email us using the address below and we will respond within the period required by law.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Data Retention</h2>
          <p>
            Newsletter email addresses are retained until you unsubscribe or ask us to delete them. Playbook submissions are retained for as long as the playbook remains listed. Aggregate analytics are retained according to Vercel&apos;s standard retention period.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Children&apos;s Privacy</h2>
          <p>
            This site is intended for a general professional audience and is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, contact us and we will delete it.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Content and Attribution</h2>
          <p>
            The site code is open source. Playbook content is curated from a range of sources, and each playbook links to its origin where one is known. Content remains the property of its original authors. See our{' '}
            <Link href="/licensing" className={linkClass}>Licensing &amp; Attribution</Link> page for full details, including how to request changes or removal.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Changes to This Policy</h2>
          <p>
            We may update this policy as the site changes. Material changes will be reflected in the &quot;Last updated&quot; date above. Continued use of the site after a change constitutes acceptance of the revised policy.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Contact</h2>
          <p>
            For any question about this policy, or to exercise your privacy rights, contact us at{' '}
            <a href="mailto:valentin.marin83@gmail.com" className={linkClass}>valentin.marin83@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
