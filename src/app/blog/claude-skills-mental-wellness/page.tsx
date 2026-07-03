import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Mental Wellness: Journaling and Reflection with AI | Claude Code Playbooks Blog',
  description: "Four Claude Skills for self-reflection and growth — guided journaling with pattern recognition, an honest annual life audit, behavioral pattern analysis from your existing writing, and a CBT-grounded 30-day goal protocol.",
  alternates: { canonical: '/blog/claude-skills-mental-wellness' },
  openGraph: {
    title: 'Claude Skills for Mental Wellness: Journaling and Reflection with AI',
    description: "Four Claude Skills for self-reflection and growth — guided journaling with pattern recognition, an honest annual life audit, behavioral pattern analysis from your existing writing, and a CBT-grounded 30-day goal protocol.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-mental-wellness',
    type: 'article',
    publishedTime: '2026-07-03T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Mental Wellness: Journaling and Reflection with AI',
    description: "Four Claude Skills for self-reflection and growth — guided journaling with pattern recognition, an honest annual life audit, behavioral pattern analysis from your existing writing, and a CBT-grounded 30-day goal protocol.",
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

export default function ClaudeSkillsMentalWellnessPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Mental Wellness: Journaling and Reflection with AI"
      description="Four Claude Skills for self-reflection and growth — guided journaling with pattern recognition, an honest annual life audit, behavioral pattern analysis from your existing writing, and a CBT-grounded 30-day goal protocol."
      category="guide"
      difficulty="basic"
      readingTime="12 min read"
      createdAt="2026-07-03"
      tags={['claude skills journaling', 'ai journaling', 'ai self-reflection', 'ai mental wellness', 'ai journaling prompts', 'annual life audit', 'goal achievement ai', 'self-improvement ai']}
      author="Claude Code Playbooks"
      slug="claude-skills-mental-wellness"
    >
      <p>
        Most self-improvement effort doesn't compound. You journal for a week and stop. You set goals in January and drift by March. You read about habits and nothing changes. The gap isn't motivation — it's the extraction layer. Writing about your experience is different from learning from it. Noticing a pattern once is different from a system that surfaces it consistently. Wanting to change is different from a structured protocol designed around how behavior actually changes.
      </p>
      <p>
        These four Claude Skills add structure to the reflection process — not as a replacement for doing the inner work, but as the scaffold that makes doing it consistently possible. They're designed for a non-technical audience: no code, no setup complexity, no prerequisite beyond being willing to write honestly.
      </p>
      <p className="text-sm text-muted-foreground italic">
        Note: these Skills support self-reflection and habit-building. They are not a substitute for professional mental health care. If you're dealing with serious mental health concerns, please reach out to a qualified therapist or counselor.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Beat the Blank Page with a Journaling Companion
      </h2>
      <p>
        The most common reason journaling doesn't stick is the blank page. You sit down, you mean to write, and nothing comes out — or you write three sentences about your day and feel like you've accomplished nothing. The{' '}
        <PlaybookLink href="/playbooks/mental-health-journal">Mental Health Journal Assistant</PlaybookLink>{' '}
        solves both problems: it gives you a starting prompt tailored to what you're actually dealing with, and it reflects back what you share in a way that surfaces recurring themes and patterns you might not notice mid-entry.
      </p>
      <p>
        It doesn't just ask generic journaling questions. If you tell it you've been stressed about work, it asks the next question — what specifically is driving it, whether this is a recurring situation, what you've tried before. Over multiple sessions it tracks patterns: the themes that come up repeatedly, mood shifts across entries, thought patterns worth examining more closely.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "I want to journal about my work stress but I don't know where to start"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Blank page, three sentences about the day, the same worries looping without resolution — you know journaling helps but can't make yourself do it consistently</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Guided session with tailored prompts, reflection on your entry highlighting recurring themes, mood pattern tracking across sessions, and cognitive reframing suggestions for negative thought loops</p>
        </div>
      </div>

      <p>
        The tone is supportive and non-judgmental. It doesn't push you toward conclusions — it helps you find them yourself. For people who already journal but feel like their sessions circle without resolving, the pattern-surfacing feature is the highest-value piece: it reads across your recent entries and names what keeps coming up.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. No template files required — start a session with a single prompt about what's on your mind.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Do an Honest Annual Audit of Where You Are
      </h2>
      <p>
        New Year's resolutions fail at a predictable rate partly because they're set without an honest accounting of where you currently are. You set goals based on where you want to be, not on a clear-eyed view of the gap between there and here, or what's actually been working and what hasn't. The{' '}
        <PlaybookLink href="/playbooks/annual-life-audit">Annual Life Audit</PlaybookLink>{' '}
        Skill structures that reckoning.
      </p>
      <p>
        It walks you through an honest assessment across life domains — career, health, finances, relationships, personal growth — and identifies patterns that connect them. Then it helps you translate what you find into quarterly milestones and monthly actions, so the audit produces something you can actually start on rather than just a picture of the gap.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Help me audit where I am across all areas of my life — career, health, finances, relationships, and personal growth — and identify where to focus"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Setting goals based on vibes, no honest view of where you actually are, and patterns across life domains that never get named because you only look at one area at a time</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Honest cross-domain assessment with pattern analysis, focused areas identified, and quarterly milestones with monthly actions you can begin this week</p>
        </div>
      </div>

      <p>
        The cross-domain view is what makes this more useful than a simple goal-setting exercise. Patterns that show up in one area of life often have roots in another — financial stress affecting health decisions, relationship patterns affecting career choices. The audit surfaces those connections instead of treating each domain as isolated.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Works best as an annual or quarterly practice — set aside an hour for the initial session.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Extract Behavioral Patterns from What You've Already Written
      </h2>
      <p>
        If you've been journaling for months or years, you already have a dataset about yourself that you've never analyzed. When are you most productive? What topics do your entries return to most often? Are there mood patterns tied to specific days, situations, or people? The{' '}
        <PlaybookLink href="/playbooks/personal-feedback-analyzer">Personal Feedback Analyzer</PlaybookLink>{' '}
        Skill turns your existing writing into behavioral insights.
      </p>
      <p>
        It can work with journal entries, git commit history, calendar logs, or any structured written record of your work and thinking over time. The output is specific rather than general: not "you tend to procrastinate" but "commit quality drops after 4 PM and on days following back-to-back meetings" — the kind of pattern that's actionable because it's tied to observable conditions.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Analyze my journal entries from the past six months — what themes keep recurring, when do I seem most stressed, and what patterns am I not noticing?"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Months of journal entries you've never gone back to read, behavioral patterns you sense but can't name, and no way to check whether you've actually improved on what you said you'd work on</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Behavioral insights with specific patterns named, recurring themes surfaced, mood trends identified, and month-over-month comparison showing where you've grown and where you're still stuck</p>
        </div>
      </div>

      <p>
        This is the Skill that makes journaling compound. Each entry you write today becomes data for a future pattern analysis. The practice of writing and the practice of reflection start to reinforce each other.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Point it at any folder of journal entries or text files — the more history you have, the more specific the patterns.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: A 30-Day Protocol for Goals That Actually Stick
      </h2>
      <p>
        Awareness of a pattern is not the same as changing it. The{' '}
        <PlaybookLink href="/playbooks/30-day-goal-achievement">30-Day Goal Achievement Protocol</PlaybookLink>{' '}
        Skill bridges that gap with a structured protocol grounded in cognitive behavioral techniques. It starts by auditing the mental patterns — beliefs, identity assumptions, emotional responses — that have kept a particular goal out of reach, then builds a daily practice designed to address them directly.
      </p>
      <p>
        The framework uses identity reprogramming (changing how you see yourself, not just what you do), habit stacking (attaching new behaviors to existing ones), and Reticular Activating System exercises (training your brain to filter for opportunities related to your goal). It's more demanding than setting a goal in a notebook — it's a 30-day daily commitment. But it's also structured around how behavior change actually works, not how we wish it worked.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "I've been trying to build a consistent exercise habit for two years and it never sticks. Create a 30-day protocol that addresses the mental patterns keeping me stuck, not just the surface habit."
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Same goal, third year in a row, same advice from every productivity article — track it, be consistent, don't break the chain — same result when the streak breaks and the habit collapses</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Personalized 30-day protocol with daily identity exercises, habit stacking schedule built around your existing routines, weekly milestone checkpoints, and a plan that addresses the mental patterns — not just the surface behavior</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 30 minutes for the initial protocol build. Plan for a daily 15–20 minute practice for the following 30 days.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        How These Skills Work Together
      </h2>
      <p>
        These four Skills address four different layers of the same problem — the gap between wanting to grow and actually doing it:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Journal Assistant</span> — builds the daily writing habit and keeps sessions from circling without resolution</li>
        <li><span className="text-foreground font-medium">Annual Life Audit</span> — gives you an honest map of where you are so goals are grounded in reality</li>
        <li><span className="text-foreground font-medium">Feedback Analyzer</span> — mines your existing writing for patterns you can't see from inside any single entry</li>
        <li><span className="text-foreground font-medium">30-Day Protocol</span> — provides a structured behavioral change system for goals that pure journaling hasn't moved</li>
      </ul>
      <p>
        You can use any of them independently. But used in sequence — journal consistently, audit honestly, analyze what you've written, build a protocol around what you find — they form a reflection system that actually compounds over time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/mental-health-journal">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Mental Health Journal Assistant</p>
            <p className="text-sm text-muted-foreground">Guided prompts, pattern recognition across entries, mood tracking — no blank page, no judgment</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/annual-life-audit">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Annual Life Audit</p>
            <p className="text-sm text-muted-foreground">Honest cross-domain assessment with quarterly milestones and monthly actions built in</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/personal-feedback-analyzer">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Personal Feedback Analyzer</p>
            <p className="text-sm text-muted-foreground">Mine existing journals and work logs for behavioral patterns, mood trends, and month-over-month growth</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/30-day-goal-achievement">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">30-Day Goal Achievement Protocol</p>
            <p className="text-sm text-muted-foreground">CBT-grounded daily protocol targeting the mental patterns behind goals that never stick</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
