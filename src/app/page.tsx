import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/lib/categories';
import { getAllPlaybooks } from '@/lib/playbooks';
import { PlaybookCard } from '@/components/PlaybookCard';
import { HomePagination } from '@/components/HomePagination';
import { HomeSearch } from '@/components/HomeSearch';
import { CategoryPills } from '@/components/CategoryPills';
import { ContributePlaybookModal } from '@/components/ContributePlaybookModal';
import {
  Terminal,
  Sparkles,
  BookOpen,
  Github,
} from 'lucide-react';

const ITEMS_PER_PAGE = 24; // 24 items per page

function QuickStartStep({
  number,
  title,
  description,
  command,
  result
}: {
  number: number;
  title: string;
  description: string;
  command?: string;
  result?: string;
}) {
  return (
    <Card className="bg-[#161b22] border-[#30363d] relative overflow-hidden">
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f97316] text-[#0d1117] text-xs font-bold flex items-center justify-center">
            {number}
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{description}</p>
            {command && (
              <div className="flex items-center gap-2 bg-[#0d1117] rounded-md px-3 py-2 border border-[#30363d]">
                <span className="text-[#22d3ee]">$</span>
                <code className="text-sm text-foreground flex-1 truncate">{command}</code>
              </div>
            )}
            {result && (
              <div className="mt-3 flex items-center gap-2 text-sm">
                <span className="text-[#22d3ee]">$</span>
                <span className="text-muted-foreground">{result}</span>
                {result.includes("That's it!") && <Sparkles className="h-4 w-4 text-[#f97316]" />}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


interface HomePageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const page = parseInt(params.page || '1', 10);

  const allPlaybooks = getAllPlaybooks();
  const totalPlaybooks = allPlaybooks.length;

  // Count playbooks per category
  const categoryCounts: Record<string, number> = {};
  for (const p of allPlaybooks) {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
  }
  const totalPages = Math.ceil(totalPlaybooks / ITEMS_PER_PAGE);
  const currentPage = Math.min(Math.max(1, page), totalPages || 1);

  // Paginate
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const playbooks = allPlaybooks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Pixel Title */}
      <section className="container py-12 md:py-16">
        <div className="text-center mb-8">
          {/* Pixel Art Title */}
          <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-[#f97316] mb-4 tracking-wider leading-relaxed">
            CLAUDE CODE PLAYBOOKS
          </h1>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
            Ready-to-use configurations for your Claude Code projects
          </p>

          {/* Quick Links */}
          <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
            <Link
              href="https://claude.ai/code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#30363d] bg-[#161b22] text-sm text-muted-foreground hover:text-foreground hover:border-[#22d3ee] transition-all"
            >
              <Terminal className="h-4 w-4" />
              Claude Code
            </Link>
            <Link
              href="https://docs.anthropic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#30363d] bg-[#161b22] text-sm text-muted-foreground hover:text-foreground hover:border-[#22d3ee] transition-all"
            >
              <BookOpen className="h-4 w-4" />
              Docs
            </Link>
            <Link
              href="https://github.com/Danielopol/Claude-Code-Playbooks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#30363d] bg-[#161b22] text-sm text-muted-foreground hover:text-foreground hover:border-[#22d3ee] transition-all"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="container pb-12">
        <div className="grid gap-4 md:grid-cols-3">
          <QuickStartStep
            number={1}
            title="Browse Playbooks"
            description="Find a playbook that matches your workflow"
            command="claude /search file-organization"
          />
          <QuickStartStep
            number={2}
            title="Copy CLAUDE.md"
            description="Copy the template to your project folder"
            command="cp playbook.md ~/project/CLAUDE.md"
          />
          <QuickStartStep
            number={3}
            title="Start Using"
            description="Launch Claude Code with your new configuration"
            result="claude // That's it!"
          />
        </div>
      </section>

      {/* Search Section */}
      <section className="container pb-8">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
            <span className="text-[#22c55e]">*</span>
            <span>Search</span>
            <span className="text-muted-foreground">(playbooks/templates/workflows)</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            <span className="text-[#30363d]">└</span> Find your personalized automation stack
          </p>
        </div>

        {/* Search Bar */}
        <HomeSearch className="max-w-2xl mx-auto" />
      </section>

      {/* Category Pills */}
      <section className="container pb-8">
        <CategoryPills categories={categories} counts={categoryCounts} />
      </section>

      {/* Playbooks Grid */}
      <section className="container pb-16">
        <div className="flex flex-col items-start gap-4 mb-6">
          <img src="/logo.png" alt="Claude Code Playbooks" className="h-10" />
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span>Playbooks</span>
            <span className="text-muted-foreground text-sm font-normal">({totalPlaybooks} total)</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentPage === 1 && <ContributePlaybookModal />}
          {playbooks.map((playbook) => (
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

        {totalPages > 1 && (
          <HomePagination currentPage={currentPage} totalPages={totalPages} />
        )}
      </section>
    </div>
  );
}
