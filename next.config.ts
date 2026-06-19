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
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
