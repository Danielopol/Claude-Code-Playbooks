import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Podcasters: Automate Show Notes, Clips, and Promotion | Claude Code Playbooks Blog',
  description: "Four Claude Skills that eliminate the podcast production tax — automated show notes and clips, full pre-production systems, ongoing social repurposing, and multi-platform flagship episode treatment.",
  alternates: { canonical: '/blog/claude-skills-podcasters' },
  openGraph: {
    title: 'Claude Skills for Podcasters: Automate Show Notes, Clips, and Promotion',
    description: "Four Claude Skills that eliminate the podcast production tax — automated show notes and clips, full pre-production systems, ongoing social repurposing, and multi-platform flagship episode treatment.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-podcasters',
    type: 'article',
    publishedTime: '2026-08-01T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Podcasters: Automate Show Notes, Clips, and Promotion',
    description: "Four Claude Skills that eliminate the podcast production tax — automated show notes and clips, full pre-production systems, ongoing social repurposing, and multi-platform flagship episode treatment.",
    images: ['https://www.claudecodehq.com/og-image.png'],
  },
};

function PlaybookLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#22d3ee] hover:underline font-medium">
      {children}
    </Link>
  );
}

export default function ClaudeSkillsPodcastersPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Podcasters: Automate Show Notes, Clips, and Promotion"
      description="Four Claude Skills that eliminate the podcast production tax — automated show notes and clips, full pre-production systems, ongoing social repurposing, and multi-platform flagship episode treatment."
      category="guide"
      difficulty="intermediate"
      readingTime="12 min read"
      createdAt="2026-08-01"
      tags={['claude skills podcast', 'ai podcast automation', 'ai show notes', 'podcast production ai', 'podcast clips ai', 'podcast promotion automation', 'content repurposing podcast', 'ai podcast workflow']}
      author="Claude Code Playbooks"
      slug="claude-skills-podcasters"
    >
      <p>
        Recording is the part podcasters actually enjoy. Everything after — three hours of writing show notes, cutting social clips, drafting the email blast, uploading to four different platforms — is a production tax that has ended more podcasts than lack of good episode ideas ever has. The content is good. The overhead of turning one recorded conversation into a fully distributed episode is what burns people out.
      </p>
      <p>
        These four Claude Skills attack that overhead from both ends: before you record, so the episode itself comes together faster, and after you record, so the hours of post-production work compress into minutes.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Automate the Post-Production Tax
      </h2>
      <p>
        The three hours after recording follow the same pattern every single episode: transcribe it, write show notes with timestamps, pull a few good quotes into social clips, draft the newsletter blast, and upload everywhere. None of it is creatively demanding — it's just repetitive, multi-step work that has to happen for every episode, on top of whatever else the week requires.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/podcast-automation">Podcast Production Assistant</PlaybookLink>{' '}
        Skill automates that entire pipeline: transcript generation, timestamped show notes, social media clips built around your best quotes, an email newsletter draft, a multi-platform publishing checklist, and an SEO-optimized episode description — all from one pass after you finish recording.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Automate our podcast post-production workflow for this episode — transcript, timestamped show notes, social clips, and an SEO-optimized description"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">3 hours after every episode writing show notes, creating social clips, drafting the email blast, and uploading to 4 platforms — recording was the fun part, everything after makes you want to quit</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Automated pipeline: transcript generation, show notes with timestamps, social media clips with quotes, an email newsletter draft, a multi-platform publishing checklist, and an SEO-optimized episode description</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Run it right after recording, using the raw audio or transcript as input.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Build a Production System Before You Even Hit Record
      </h2>
      <p>
        Post-production automation solves half the problem — the other half happens before recording even starts. A lot of podcasts stay hobbyist-level not because the host lacks good conversation skills, but because there's no system: episode topics get picked at random, guest research happens the night before (or not at all), and nobody's ever optimized a title for search because there was never time to think about it.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/podcast-creator-system">Podcast Creator System</PlaybookLink>{' '}
        Skill manages the entire pipeline from ideation through promotion: an episode ideation framework that generates a real backlog of topics, a guest research template, an interview question generator, an SEO-aware show notes template, and social promo copy — plus a full content calendar so episode planning stops happening the week before recording.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Set up a production system for my weekly interview podcast — episode ideation, guest research template, interview questions, and a 12-week content calendar"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Random episode topics, last-minute guest research, show notes as an afterthought, and titles that were never once optimized for search — a hobby, not a system</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">30 topic ideas from an ideation framework, a guest research template, an interview question generator, an SEO-aware show notes template, social promo copy per episode, and a 12-week content calendar</p>
        </div>
      </div>

      <p>
        Use this Skill when the goal is going from occasional episodes to a consistent, professional cadence — it pairs naturally with the Production Assistant above, handling everything before recording while that Skill handles everything after.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Best run once at the start of a season or quarter, then referenced episode by episode.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Keep a Steady Drip of Social Posts Between Episodes
      </h2>
      <p>
        A podcast episode is long-form content that, once published, tends to just sit there. The conversation had good moments worth surfacing individually, but manually pulling quotes and reformatting them for X and LinkedIn every week competes directly with the time needed to record the next episode — so most podcasters either do it inconsistently or skip it entirely.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/content-repurposer">Content Repurposer</PlaybookLink>{' '}
        Skill runs on a weekly schedule and turns each episode into ongoing social content automatically: punchy X threads and professional LinkedIn posts with clear takeaways, queued in an output folder ready to publish, without you touching the editor between episodes.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Repurpose this week's episode into social posts — X threads and LinkedIn posts, queued for the next two weeks"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A great episode published once, with good quotes and moments that never make it to social because reformatting them competes with time needed to record the next one</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">One episode becomes 12+ platform-native posts — punchy X threads and professional LinkedIn posts with takeaways — automatically queued every week</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Runs weekly on a schedule once configured — the steady, low-effort default for every regular episode.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Give Flagship Episodes the Full Multi-Platform Treatment
      </h2>
      <p>
        Not every episode is equal. The interview with a notable guest, the episode that took off in early listens, the one you know deserves more than the standard X-and-LinkedIn treatment — those deserve a genuine multi-platform push rather than the weekly default. The catch is that manually adapting one piece of content for X, LinkedIn, Instagram, and YouTube separately is close to a full-time job, because each platform has its own format and culture that a copy-paste job doesn't respect.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/cross-platform-repurposing-engine">Cross-Platform Content Repurposing Engine</PlaybookLink>{' '}
        Skill takes one episode and reconstructs it — not just reformats it — as platform-native content for every channel: an X thread, a LinkedIn article with professional takeaways, an Instagram carousel script, a YouTube Shorts outline, a newsletter teaser, and a two-week posting schedule tying it all together.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "This episode with our guest was our best one yet — turn it into content for every platform we're on, with a posting schedule"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A standout episode getting the same X-and-LinkedIn treatment as every other week, because genuinely adapting it for Instagram and YouTube on top of that would eat the entire week</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">An X thread, a LinkedIn article, an Instagram carousel script, a YouTube Shorts outline, a newsletter teaser, and a 2-week posting schedule — each version feeling native to its platform, not copy-pasted</p>
        </div>
      </div>

      <p>
        The distinction from the Content Repurposer above is intentional: use that Skill as the steady weekly default, and reach for this one when a specific episode has earned the extra distribution effort.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Best reserved for standout episodes rather than run on every single one.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Building the Full Production Loop
      </h2>
      <p>
        These four Skills split cleanly across the podcast lifecycle:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Before recording</span> — Podcast Creator System handles ideation, guest research, and the content calendar</li>
        <li><span className="text-foreground font-medium">Right after recording</span> — Podcast Production Assistant generates the transcript, show notes, clips, and publishing checklist</li>
        <li><span className="text-foreground font-medium">Every week, by default</span> — Content Repurposer keeps a steady drip of social posts flowing between episodes</li>
        <li><span className="text-foreground font-medium">For standout episodes</span> — Cross-Platform Repurposing Engine gives the episode the full multi-platform push it's earned</li>
      </ul>
      <p>
        Together, they shrink the production tax from hours per episode to a handful of prompts — leaving the actual conversation, which was the reason to start a podcast in the first place, as most of the remaining work.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/podcast-automation">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Podcast Production Assistant</p>
            <p className="text-sm text-muted-foreground">Transcripts, timestamped show notes, social clips, and publishing checklists after every episode</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/podcast-creator-system">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Podcast Creator System</p>
            <p className="text-sm text-muted-foreground">Episode ideation, guest research, and a full content calendar before you hit record</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/content-repurposer">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Content Repurposer</p>
            <p className="text-sm text-muted-foreground">Weekly X and LinkedIn posts generated automatically from each episode</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/cross-platform-repurposing-engine">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Cross-Platform Repurposing Engine</p>
            <p className="text-sm text-muted-foreground">Full multi-platform treatment — X, LinkedIn, Instagram, YouTube, newsletter — for flagship episodes</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
