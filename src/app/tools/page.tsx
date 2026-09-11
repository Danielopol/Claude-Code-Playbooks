import { Metadata } from 'next';
import Link from 'next/link';
import { Wrench } from 'lucide-react';
import { ToolsDirectory } from '@/components/ToolsDirectory';
import { SponsorLogo } from '@/components/SponsorStack';
import { getDirectoryTools, TOPICS, withUtm } from '@/lib/sponsors';

// Regenerate daily so listings appear and expire on their dates without a deploy.
export const revalidate = 86400;

export function generateMetadata(): Metadata {
  // An empty directory is a thin page — keep it out of the index until the
  // first listing goes live.
  const isEmpty = getDirectoryTools().length === 0;

  return {
    title: 'Tools Directory | Claude Code Playbooks',
    description: 'Tools that work alongside Claude for research, writing, finance, consulting and everyday work. Paid listings, reviewed for fit.',
    alternates: { canonical: '/tools' },
    ...(isEmpty && { robots: { index: false, follow: true } }),
    openGraph: {
      title: 'Tools Directory | Claude Code Playbooks',
      description: 'Tools that work alongside Claude, reviewed for fit.',
      url: 'https://www.claudecodehq.com/tools',
      type: 'website',
      images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
    },
  };
}

const linkClass = 'text-[#22d3ee] hover:underline';

export default function ToolsPage() {
  const tools = getDirectoryTools().map((tool) => ({
    slug: tool.slug,
    name: tool.name,
    description: tool.description,
    href: withUtm(tool.url, 'directory'),
    logoNode: <SponsorLogo name={tool.name} logo={tool.logo} size={40} />,
    pricing: tool.pricing,
    topics: tool.topics.map((id) => ({ id, name: TOPICS[id].name })),
  }));

  return (
    <div className="container mx-auto py-12 max-w-4xl">
      <h1 className="text-2xl font-bold mb-3 flex items-center gap-3">
        <Wrench className="h-6 w-6 text-[#22d3ee]" />
        Tools Directory
      </h1>
      <p className="text-muted-foreground mb-2 max-w-3xl">
        Tools that work alongside Claude, listed by the people who make them.
      </p>
      <p className="text-sm text-muted-foreground/80 mb-8 max-w-3xl">
        Every listing here is paid and labeled Sponsored. We review each one for fit before it goes
        live, but a listing is not an editorial recommendation. Building something for our readers?{' '}
        <Link href="/advertise" className={linkClass}>List your tool</Link>.
      </p>

      {tools.length > 0 ? (
        <ToolsDirectory tools={tools} />
      ) : (
        <div className="p-8 text-center bg-[#161b22] border border-[#30363d] border-dashed rounded-lg">
          <p className="text-foreground font-medium mb-1">No tools listed yet.</p>
          <p className="text-sm text-muted-foreground">
            Make one of the first.{' '}
            <Link href="/advertise" className={linkClass}>Apply to list your tool</Link>.
          </p>
        </div>
      )}
    </div>
  );
}
