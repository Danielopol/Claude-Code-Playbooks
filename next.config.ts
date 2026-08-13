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
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
