import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPlaybooks, getPlaybookBySlug, getRelatedPlaybooks } from '@/lib/playbooks';
import { getCategoryById } from '@/lib/categories';
import { DifficultyBadge } from '@/components/DifficultyBadge';
import { CategoryBadge } from '@/components/CategoryBadge';
import { CopyButton } from '@/components/CopyButton';
import { DownloadButton } from '@/components/DownloadButton';
import { SetupGuideBox } from '@/components/SetupGuideBox';
import { PlaybookCard } from '@/components/PlaybookCard';
import { Clock, ArrowLeft, ExternalLink, Terminal, FileCode } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PlaybookPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const playbooks = getAllPlaybooks();
  return playbooks.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PlaybookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const playbook = await getPlaybookBySlug(slug);

  if (!playbook) {
    return { title: 'Playbook Not Found' };
  }

  return {
    title: `${playbook.title} | Claude Code Playbooks`,
    description: playbook.description,
    openGraph: {
      title: playbook.title,
      description: playbook.description,
    },
  };
}

export default async function PlaybookPage({ params }: PlaybookPageProps) {
  const { slug } = await params;
  const playbook = await getPlaybookBySlug(slug);

  if (!playbook) {
    notFound();
  }

  const categoryInfo = getCategoryById(playbook.category);
  const relatedPlaybooks = getRelatedPlaybooks(playbook);

  return (
    <div className="container py-8 max-w-4xl">
      <Link
        href="/playbooks"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-[#22d3ee] mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        cd ../playbooks
      </Link>

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CategoryBadge category={playbook.category} />
            <DifficultyBadge difficulty={playbook.difficulty} />
          </div>

          <h1 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Terminal className="h-6 w-6 text-[#22d3ee]" />
            {playbook.title}
          </h1>

          <p className="text-muted-foreground mb-4">{playbook.description}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d]">
              <Clock className="h-4 w-4 text-[#22d3ee]" />
              <span>{playbook.timeToSetup}</span>
            </div>
            {playbook.author && (
              <span className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d]">
                By {playbook.author}
              </span>
            )}
            {playbook.sourceUrl && (
              <a
                href={playbook.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] hover:text-[#22d3ee] transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Source
              </a>
            )}
          </div>

          {playbook.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {playbook.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-[#21262d] text-muted-foreground px-2 py-1 rounded border border-[#30363d]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {playbook.claudeMdTemplate && (
          <Card className="mb-8 bg-[#161b22] border-[#30363d]">
            <CardHeader className="pb-4 border-b border-[#30363d]">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <FileCode className="h-4 w-4 text-[#f97316]" />
                  CLAUDE.md Template
                </CardTitle>
                <div className="flex items-center gap-2">
                  <CopyButton text={playbook.claudeMdTemplate} />
                  <DownloadButton content={playbook.claudeMdTemplate} filename="CLAUDE.md" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Download this file and place it in your project folder to get started.
              </p>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="bg-[#0d1117] rounded-lg border border-[#30363d] max-h-[400px] overflow-auto">
                <pre className="p-4 text-sm">
                  <code className="text-[#e6edf3] whitespace-pre-wrap">{playbook.claudeMdTemplate}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        )}

        <SetupGuideBox
          content={playbook.content}
          filename="README.md"
          defaultExpanded={true}
          isHtml={true}
        />
      </article>

      {relatedPlaybooks.length > 0 && (
        <section className="mt-12 pt-8 border-t border-[#30363d]">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-[#22d3ee]">$</span>
            Related Playbooks
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPlaybooks.map((related) => (
              <PlaybookCard
                key={related.slug}
                slug={related.slug}
                title={related.title}
                description={related.description}
                category={related.category}
                difficulty={related.difficulty}
                timeToSetup={related.timeToSetup}
                tags={related.tags}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
