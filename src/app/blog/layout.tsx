import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Claude Code Playbooks',
  description: 'Latest articles, tutorials, and guides about Claude Code and AI-powered development workflows.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
