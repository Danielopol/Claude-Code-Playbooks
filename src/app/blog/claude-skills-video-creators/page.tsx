import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Video Creators: Script, Produce, and Repurpose with AI | Claude Code Playbooks Blog',
  description: "Four Claude Skills that run the full video pipeline — tool selection and scripting across AI avatars and generation models, programmatic Remotion production, weekly social repurposing, and full multi-channel treatment for standout videos.",
  alternates: { canonical: '/blog/claude-skills-video-creators' },
  openGraph: {
    title: 'Claude Skills for Video Creators: Script, Produce, and Repurpose with AI',
    description: "Four Claude Skills that run the full video pipeline — tool selection and scripting across AI avatars and generation models, programmatic Remotion production, weekly social repurposing, and full multi-channel treatment for standout videos.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-video-creators',
    type: 'article',
    publishedTime: '2026-08-10T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Video Creators: Script, Produce, and Repurpose with AI',
    description: "Four Claude Skills that run the full video pipeline — tool selection and scripting across AI avatars and generation models, programmatic Remotion production, weekly social repurposing, and full multi-channel treatment for standout videos.",
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

export default function ClaudeSkillsVideoCreatorsPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Video Creators: Script, Produce, and Repurpose with AI"
      description="Four Claude Skills that run the full video pipeline — tool selection and scripting across AI avatars and generation models, programmatic Remotion production, weekly social repurposing, and full multi-channel treatment for standout videos."
      category="guide"
      difficulty="intermediate"
      readingTime="13 min read"
      createdAt="2026-08-10"
      tags={['claude skills video', 'ai video creation', 'ai video repurposing', 'remotion ai video', 'ai marketing video', 'video script ai', 'ai product demo video', 'video content repurposing']}
      author="Claude Code Playbooks"
      slug="claude-skills-video-creators"
    >
      <p>
        Video used to require a crew, a budget, and a week of turnaround. AI generation models, avatar tools, and programmatic frameworks have compressed that to hours — but only for creators who know which tool actually fits the job. Choosing wrong means paying for a full AI avatar production when a quick Remotion animation would have worked, or hand-animating something a generation model could have produced in a single prompt. The tools are fast now; the bottleneck moved to tool selection and to what happens after the video is finished.
      </p>
      <p>
        These four Claude Skills cover the full pipeline — deciding what to build and scripting it, producing programmatic video specifically, and then making sure the finished video keeps generating value across platforms instead of living and dying on the one channel it was made for.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Pick the Right Tool and Script the Video
      </h2>
      <p>
        The video tooling landscape has exploded — Veo, Runway, Kling, and Pika for generation, HeyGen and Synthesia for AI avatars, Remotion and Hyperframes for programmatic composition — and each is genuinely good at a different job. An AI avatar tool is right for a talking-head explainer. A generation model is right for a stylized ad concept. Remotion is right for a data-driven product demo that needs to stay on-brand across dozens of variants. Picking the wrong one wastes the time savings the AI tooling was supposed to provide in the first place.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/marketing-video-creation">Marketing Video Creation</PlaybookLink>{' '}
        Skill handles that decision layer directly: given what you're trying to make, it recommends the right tool, writes the script, builds a shot list, generates the tool-specific prompts, applies your brand assets consistently, and specifies the final delivery formats for each platform you need.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Create a 30-second product demo video for our landing page — recommend the right tool and write the script"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A dozen AI video tools to choose from, no clear sense of which one fits a 30-second product demo, and brand consistency that falls apart the moment more than one tool gets involved</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A specific tool recommendation (Remotion, HeyGen, Veo, or Runway depending on the brief), a full script, a shot list, generation prompts ready to use, brand assets applied consistently, and final delivery formats specified</p>
        </div>
      </div>

      <p>
        This is the right starting point for almost any video project — it's the layer that decides whether what follows is a Remotion build, an avatar recording, or a generation-model prompt session.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 15 minutes. Describe the video you need and your brand constraints — the tool recommendation follows from there.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Build Programmatic Video Without an After Effects Learning Curve
      </h2>
      <p>
        When the recommendation from Skill 1 points toward a programmatic, animated video — a data-driven product demo, a feature walkthrough with clean transitions, a scalable template you'll reuse across dozens of variants — the traditional path runs through After Effects, which has a genuinely steep learning curve, or a freelance motion designer charging real money per finished minute.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/remotion-video-creator">Remotion Video Creator</PlaybookLink>{' '}
        Skill builds that video with React components instead: Claude writes the Remotion composition, opens the studio via browser automation to show you the actual rendered output, and iterates based on your feedback in real time. No code needs to be touched by hand — you describe what you want to see and watch the live preview update, then get a rendered MP4 when it's right.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Create an animated product walkthrough video for our landing page — animated scenes for each feature, smooth transitions, and our brand fonts on the text overlays"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A great idea for an animated product demo, a six-month learning curve standing between you and After Effects, or a freelance motion designer quoting $5K for a minute of finished footage</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A Remotion project with an animated React composition, smooth transitions between feature highlights, on-brand text overlays, a live browser preview you iterate on in real time, and a rendered MP4 ready to embed</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 20 minutes. Best for scalable, template-able video — the same composition can be re-rendered with different data or copy for dozens of variants.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Keep a Weekly Drip of Social Posts Flowing From Every Video
      </h2>
      <p>
        A finished video — whether it's an avatar recording, a generated clip, or a Remotion render — tends to get published once and then sit there. The moments worth pulling out individually exist, but manually clipping and reformatting them for X and LinkedIn every week competes with the time needed to make the next video, so it happens inconsistently or not at all.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/content-repurposer">Content Repurposer</PlaybookLink>{' '}
        Skill runs on a weekly schedule and turns each video into ongoing social content automatically — punchy X threads and professional LinkedIn posts with clear takeaways, queued in an output folder, ready to publish without touching an editor.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Repurpose this week's video into social posts — X threads and LinkedIn posts, queued for the next two weeks"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A finished video published once, with strong individual moments that never make it to social because clipping and reformatting them competes with time needed to produce the next video</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">One video becomes a dozen platform-native posts — punchy X threads and professional LinkedIn posts with takeaways — automatically queued every week</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Runs weekly on a schedule once configured — the steady default for every regular video release.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Give Standout Videos the Full Multi-Channel Push
      </h2>
      <p>
        Some videos earn more than the weekly default treatment — the launch video, the one that performed unusually well in early views, the product demo you know deserves distribution beyond X and LinkedIn. Genuinely adapting one video for Instagram, YouTube, a newsletter, and X separately — respecting each platform's format and culture instead of just cross-posting the same clip everywhere — is close to a full-time job done manually.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/cross-platform-repurposing-engine">Cross-Platform Content Repurposing Engine</PlaybookLink>{' '}
        Skill reconstructs one video as platform-native content for every channel: an X thread, a LinkedIn article, an Instagram carousel script, a YouTube Shorts outline, a newsletter teaser, and a two-week posting schedule tying the full push together.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "This is our best product demo yet — turn it into content for every platform we're on, with a posting schedule"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A standout video getting the same treatment as every other release, because properly adapting it for Instagram and YouTube on top of X and LinkedIn would eat the entire week</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">An X thread, a LinkedIn article, an Instagram carousel script, a YouTube Shorts outline, a newsletter teaser, and a 2-week posting schedule — each version native to its platform, not copy-pasted</p>
        </div>
      </div>

      <p>
        Reserve this for videos that have earned the extra distribution effort, and let the Content Repurposer above handle the steady weekly cadence for everything else.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Best used selectively rather than on every video release.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Full Production and Distribution Pipeline
      </h2>
      <p>
        These four Skills map onto four distinct stages of a video's life:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Planning</span> — Marketing Video Creation picks the right tool and produces the script, shot list, and prompts</li>
        <li><span className="text-foreground font-medium">Production</span> — Remotion Video Creator builds the video itself when programmatic, animated output is the right call</li>
        <li><span className="text-foreground font-medium">Ongoing distribution</span> — Content Repurposer keeps a steady weekly drip of social posts flowing from every release</li>
        <li><span className="text-foreground font-medium">Standout releases</span> — Cross-Platform Repurposing Engine gives specific videos the full multi-channel push they've earned</li>
      </ul>
      <p>
        Not every project needs all four — a quick avatar-based explainer might stop after Skill 1, while a flagship product launch runs the entire chain. The point is that each stage of the pipeline has a Skill built for it, rather than every video requiring the same manual effort regardless of how much it's actually worth.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/marketing-video-creation">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Marketing Video Creation</p>
            <p className="text-sm text-muted-foreground">Tool recommendation, script, shot list, and prompts across AI avatars, generation models, and Remotion</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/remotion-video-creator">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Remotion Video Creator</p>
            <p className="text-sm text-muted-foreground">Programmatic animated video built in React with live preview iteration and MP4 render</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/content-repurposer">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Content Repurposer</p>
            <p className="text-sm text-muted-foreground">Weekly X and LinkedIn posts generated automatically from each video</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/cross-platform-repurposing-engine">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Cross-Platform Repurposing Engine</p>
            <p className="text-sm text-muted-foreground">Full multi-platform treatment — X, LinkedIn, Instagram, YouTube, newsletter — for standout videos</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
