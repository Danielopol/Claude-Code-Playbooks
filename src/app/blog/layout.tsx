import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Claude Code Playbooks',
  description: 'Latest articles, tutorials, and guides about Claude Code and AI-powered development workflows.',
  alternates: {
    canonical: '/blog',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.claudecodehq.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
    },
  ],
};

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Blog',
  description: 'Latest articles, tutorials, and guides about Claude Code and AI-powered development workflows.',
  url: 'https://www.claudecodehq.com/blog',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      {children}
    </>
  );
}
