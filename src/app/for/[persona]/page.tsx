import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPlaybooksByCategories } from '@/lib/playbooks';
import { getCategoryById } from '@/lib/categories';
import { personas, getPersonaById } from '@/lib/personas';
import { PlaybookCard } from '@/components/PlaybookCard';
import { ArrowLeft, Users, FolderOpen } from 'lucide-react';

interface PersonaPageProps {
  params: Promise<{ persona: string }>;
}

export async function generateStaticParams() {
  return personas.map((p) => ({ persona: p.id }));
}

export async function generateMetadata({ params }: PersonaPageProps): Promise<Metadata> {
  const { persona } = await params;
  const personaInfo = getPersonaById(persona);

  if (!personaInfo) {
    return { title: 'Role Not Found' };
  }

  return {
    title: `${personaInfo.title} | Claude Code Playbooks`,
    description: personaInfo.seoDescription,
    alternates: {
      canonical: `/for/${persona}`,
    },
    openGraph: {
      title: `${personaInfo.title} | Claude Code Playbooks`,
      description: personaInfo.seoDescription,
      url: `https://www.claudecodehq.com/for/${persona}`,
      type: 'website',
      images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${personaInfo.title} | Claude Code Playbooks`,
      description: personaInfo.seoDescription,
      images: ['https://www.claudecodehq.com/og-image.jpg'],
    },
  };
}

export default async function PersonaPage({ params }: PersonaPageProps) {
  const { persona } = await params;
  const personaInfo = getPersonaById(persona);

  if (!personaInfo) {
    notFound();
  }

  const playbooks = getPlaybooksByCategories(personaInfo.categories);

  // Group playbooks by category for organized display
  const groupedByCategory = personaInfo.categories
    .map((catId) => {
      const categoryInfo = getCategoryById(catId);
      const categoryPlaybooks = playbooks.filter((p) => p.category === catId);
      return { categoryId: catId, categoryInfo, playbooks: categoryPlaybooks };
    })
    .filter((group) => group.playbooks.length > 0);

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
        name: 'For You',
        item: 'https://www.claudecodehq.com/for',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: personaInfo.name,
      },
    ],
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: personaInfo.title,
    description: personaInfo.seoDescription,
    url: `https://www.claudecodehq.com/for/${persona}`,
    numberOfItems: playbooks.length,
  };

  // Other personas for cross-linking
  const otherPersonas = personas.filter((p) => p.id !== personaInfo.id).slice(0, 6);

  return (
    <div className="container py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Link
        href="/for"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-[#22d3ee] mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        cd ../for
      </Link>

      <div className="mb-8">
        <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Use Cases</p>
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-3">
          <Users className="h-6 w-6 text-[#22d3ee]" />
          {personaInfo.title}
        </h1>
        <p className="text-muted-foreground">{personaInfo.description}</p>
        <p className="text-sm text-muted-foreground mt-2">
          {playbooks.length} playbooks across {groupedByCategory.length} categories
        </p>
      </div>

      {groupedByCategory.map((group) => (
        <section key={group.categoryId} className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <FolderOpen className="h-5 w-5 text-[#a78bfa]" />
              {group.categoryInfo?.name || group.categoryId}
              <span className="text-sm font-normal text-muted-foreground">
                ({group.playbooks.length})
              </span>
            </h2>
            <Link
              href={`/categories/${group.categoryId}`}
              className="text-xs text-muted-foreground hover:text-[#22d3ee] transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {group.playbooks.map((playbook) => (
              <PlaybookCard
                key={playbook.slug}
                slug={playbook.slug}
                title={playbook.title}
                description={playbook.description}
                category={playbook.category}
                difficulty={playbook.difficulty}
                timeToSetup={playbook.timeToSetup}
                tags={playbook.tags}
              />
            ))}
          </div>
        </section>
      ))}

      {/* Cross-link to other personas */}
      <section className="mt-12 pt-8 border-t border-[#30363d]">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-[#a78bfa]" />
          Explore Other Roles
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {otherPersonas.map((p) => (
            <Link
              key={p.id}
              href={`/for/${p.id}`}
              className="p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors group"
            >
              <h3 className="text-sm font-semibold group-hover:text-[#22d3ee] transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
