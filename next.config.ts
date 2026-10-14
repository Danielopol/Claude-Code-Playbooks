import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  staticPageGenerationTimeout: 300,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'claudecodehq.com' }],
        destination: 'https://www.claudecodehq.com/:path*',
        permanent: true,
      },
      /*
       * Malformed URLs Search Console reported as indexed (Sept 2026 export):
       * relative links that doubled the host into the path, and a typo'd slug.
       */
      {
        source: '/blog/claudecodehq.com/blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/blog/claudecode-skills-investors',
        destination: '/blog/claude-skills-investors',
        permanent: true,
      },
      /*
       * Two invoice-automation posts split the same queries (the older one
       * sat at position ~42). Its FAQ moved into the step-by-step guide.
       */
      {
        source: '/blog/automate-invoice-processing-ai',
        destination: '/blog/automate-invoice-processing-ai-step-by-step',
        permanent: true,
      },
      /*
       * Duplicate playbooks (same title or same job, harvested from two
       * sources). The losing side of each pair was "crawled - currently not
       * indexed" in the Oct 2026 export; the target is the one the blog links
       * to or that Google hadn't flagged. Their MDX and templates were removed.
       */
      ...[
        ['recipe-email-drafter', 'email-drafter'],
        ['html-slides', 'presentation-builder'],
        ['recipe-release-notes-generator', 'release-notes-generator'],
        ['recipe-research-synthesizer', 'research-synthesizer'],
        ['lead-research', 'lead-research-assistant'],
        ['recipe-meeting-notes-actions', 'meeting-notes-to-actions'],
      ].map(([from, to]) => ({
        source: `/playbooks/${from}`,
        destination: `/playbooks/${to}`,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        /*
         * Build assets were showing up in Search Console as "crawled -
         * currently not indexed" (35 of them, mostly /_next/static/css/*.css
         * ?dpl=<deployment>). X-Robots-Tag keeps them out of the index while
         * leaving them fetchable — noindex is an indexing directive, not a
         * crawl one, so Googlebot can still load them to render the page.
         *
         * Note this is deliberately NOT a robots.txt Disallow: blocking
         * /_next/ would stop Googlebot retrieving the CSS and JS it needs to
         * render the site at all.
         */
        source: '/_next/static/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
      {
        /*
         * Playbook pages now fetch their CLAUDE.md template from here on click
         * instead of embedding it. Most templates are verbatim copies of public
         * GitHub files, so the raw .md must not become an indexable duplicate.
         */
        source: '/templates/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
