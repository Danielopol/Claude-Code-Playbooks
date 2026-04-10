import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: '10 Ways to Use AI as Your Personal Assistant (With Copy-Paste Prompts) | Claude Code Playbooks Blog',
  description: 'Actionable prompts you can copy and paste right now to turn Claude Code into a personal assistant that handles your morning briefing, email triage, travel planning, and more.',
  alternates: { canonical: '/blog/10-ways-ai-personal-assistant' },
  openGraph: {
    title: '10 Ways to Use AI as Your Personal Assistant (With Copy-Paste Prompts)',
    description: 'Actionable prompts you can copy and paste right now to turn Claude Code into a personal assistant that handles your morning briefing, email triage, travel planning, and more.',
    url: 'https://www.claudecodehq.com/blog/10-ways-ai-personal-assistant',
    type: 'article',
    publishedTime: '2026-04-09',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Ways to Use AI as Your Personal Assistant (With Copy-Paste Prompts)',
    description: '10 actionable AI prompts for morning briefings, email triage, travel planning, meal prep, and more — ready to copy and paste.',
    images: ['https://www.claudecodehq.com/og-image.jpg'],
  },
};

function PlaybookLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#22d3ee] hover:underline font-medium">
      {children}
    </Link>
  );
}

function PromptBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
      <p className="text-sm font-mono text-[#f97316] whitespace-pre-wrap">{children}</p>
    </div>
  );
}

function NumberBadge({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#22d3ee]/10 text-[#22d3ee] font-bold text-sm mr-3 shrink-0">
      {n}
    </span>
  );
}

export default function TenWaysAIPersonalAssistantPage() {
  return (
    <BlogPostLayout
      title="10 Ways to Use AI as Your Personal Assistant (With Copy-Paste Prompts)"
      description="Actionable prompts you can copy and paste right now to turn Claude Code into a personal assistant that handles your morning briefing, email triage, travel planning, and more."
      category="guide"
      difficulty="basic"
      readingTime="10 min read"
      createdAt="2026-04-09"
      tags={['AI personal assistant', 'AI productivity prompts', 'Claude Code prompts', 'productivity', 'automation', 'personal assistant', 'copy-paste prompts']}
      author="Claude Code Playbooks"
      slug="10-ways-ai-personal-assistant"
    >
      {/* Intro */}
      <p className="text-lg">
        Most people use AI like a search engine: ask a question, get an answer, close the tab. But
        Claude Code isn&apos;t a chatbot — it&apos;s an <strong className="text-foreground">agent that can
        read files, run commands, call APIs, and execute multi-step workflows</strong> on your behalf.
      </p>
      <p>
        That means it can function as a genuine personal assistant — one that handles your morning routine,
        triages your inbox, plans your trips, and manages your to-do list. The prompts below are ready to
        copy and paste. Each one links to a full playbook if you want to go deeper.
      </p>

      {/* #1 Morning Briefing */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        <span className="flex items-center">
          <NumberBadge n={1} />
          Generate a Daily Morning Briefing
        </span>
      </h2>
      <p>
        Instead of opening six apps to figure out your day, get everything in one place: calendar,
        emails, tasks, weather, and priorities — delivered in 30 seconds.
      </p>
      <PromptBlock>
        {`Give me my morning briefing for today. Include:
- My calendar events with any prep notes
- Top 5 most important emails that need a response
- My overdue and due-today tasks
- Current weather and commute conditions
- My #1 priority for today based on deadlines and importance

Format it as a clean daily dashboard I can scan in under a minute.`}
      </PromptBlock>
      <p>
        For the full setup with calendar and email integrations, grab
        the <PlaybookLink href="/playbooks/daily-morning-briefing">Daily Morning Briefing</PlaybookLink> playbook.
        It connects to Google Calendar, Gmail, and your task manager via MCP so the briefing pulls live data.
      </p>

      {/* #2 Email Triage */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        <span className="flex items-center">
          <NumberBadge n={2} />
          Reach Inbox Zero (Finally)
        </span>
      </h2>
      <p>
        You have hundreds — maybe thousands — of unread emails. Instead of declaring email bankruptcy,
        let AI do the triage.
      </p>
      <PromptBlock>
        {`Process my unread emails and categorize them:
- URGENT: Needs a response today (flag these)
- ACTION: Requires action this week
- FYI: Read when I have time
- ARCHIVE: Newsletters, notifications, and noise — archive these

For each URGENT and ACTION email, draft a response in my voice (professional but friendly, concise).
Don't send anything — just show me the drafts for approval.`}
      </PromptBlock>
      <p>
        The <PlaybookLink href="/playbooks/inbox-zero-manager">Inbox Zero Manager</PlaybookLink> playbook
        automates this at scale — it processes 500+ emails, detects what&apos;s genuinely urgent, drafts
        responses in your voice, and bulk-archives the noise. Nothing gets sent without your approval.
      </p>

      {/* #3 Smart Todo */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        <span className="flex items-center">
          <NumberBadge n={3} />
          Manage Your To-Do List Intelligently
        </span>
      </h2>
      <p>
        Stop maintaining a flat list of tasks. Let AI route, prioritize, and deduplicate for you.
      </p>
      <PromptBlock>
        {`Here are the things on my plate right now:
- Fix the login page bug (customers are complaining)
- Write Q2 planning doc
- Review Sarah's PR
- Book dentist appointment
- Prepare slides for Thursday's all-hands
- Reply to vendor contract email

Organize these by priority (P0/P1/P2), estimate time for each, flag any that are blocking others, and suggest the optimal order to tackle them today.`}
      </PromptBlock>
      <p>
        The <PlaybookLink href="/playbooks/smart-todo-manager">Smart Todo Manager</PlaybookLink> playbook
        takes this further with persistent markdown-based todo files, automatic routing to the right list
        (bugs vs. features vs. personal), and duplicate detection across all your task files.
      </p>

      {/* #4 Travel Planning */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        <span className="flex items-center">
          <NumberBadge n={4} />
          Plan an Entire Trip in One Prompt
        </span>
      </h2>
      <p>
        No more juggling travel blogs, Google Maps, and spreadsheets. Get a complete itinerary with
        budget, packing list, and cultural tips.
      </p>
      <PromptBlock>
        {`Plan a 5-day trip to Tokyo for 2 people in October. Budget: $3,000 total (excluding flights).

Include:
- Day-by-day itinerary (morning/afternoon/evening activities)
- Budget breakdown by category (hotels, food, transport, activities)
- Restaurant recommendations for each neighborhood we'll visit
- Packing list considering October weather
- Cultural etiquette tips and useful Japanese phrases
- Transit guide (which rail pass to buy, IC card setup)

We prefer: street food over fine dining, temples over shopping, and at least one day trip outside the city.`}
      </PromptBlock>
      <p>
        The <PlaybookLink href="/playbooks/travel-planner-skill">Travel Planner</PlaybookLink> playbook
        generates itineraries like this with a single command and can adjust plans based on weather
        forecasts, local events, and your travel preferences.
      </p>

      {/* #5 Meeting Prep */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        <span className="flex items-center">
          <NumberBadge n={5} />
          Prepare for Meetings in 60 Seconds
        </span>
      </h2>
      <p>
        Walking into a meeting unprepared is a confidence killer. Let AI build your prep brief.
      </p>
      <PromptBlock>
        {`I have a meeting in 30 minutes with [Name/Team] about [Topic].

Prepare a meeting brief:
- What we discussed last time (check my recent emails and notes)
- Key decisions that need to be made today
- Questions I should ask
- Any relevant data points or metrics I should have ready
- Suggested agenda (keep the meeting under 30 minutes)

Keep it scannable — bullet points, not paragraphs.`}
      </PromptBlock>

      {/* #6 Weekly Review */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        <span className="flex items-center">
          <NumberBadge n={6} />
          Run a Weekly Review on Autopilot
        </span>
      </h2>
      <p>
        The weekly review is the habit everyone recommends but nobody sticks with — because it takes
        too long. Automate the data gathering so you only spend time on the thinking.
      </p>
      <PromptBlock>
        {`Run my weekly review. Analyze this past week and generate:

1. ACCOMPLISHMENTS: What did I complete? (check my git commits, closed tasks, and sent emails)
2. DROPPED BALLS: What did I commit to but not finish?
3. TIME AUDIT: Where did my time actually go vs. where I planned?
4. NEXT WEEK PRIORITIES: Based on my calendar and deadlines, what are the top 3 things I must complete?
5. BLOCKERS: Anything that's stuck and needs escalation?

Be honest, not flattering. I want a realistic picture.`}
      </PromptBlock>

      {/* #7 Meal Planning */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        <span className="flex items-center">
          <NumberBadge n={7} />
          Meal Plan and Grocery List for the Week
        </span>
      </h2>
      <p>
        The &quot;what&apos;s for dinner?&quot; question consumes more mental energy than it should.
        Offload it entirely.
      </p>
      <PromptBlock>
        {`Create a meal plan for the week (Mon-Fri, dinner only). Constraints:
- 2 adults, no dietary restrictions
- Budget: ~$80 for groceries
- Max 30 minutes of active cooking per meal
- Use overlapping ingredients to minimize waste
- Include one batch-cook meal that covers 2 dinners

Output:
1. The 5-day dinner plan with recipes
2. A consolidated grocery list organized by store section (produce, dairy, meat, pantry)
3. A prep-ahead guide for Sunday (what to chop, marinate, or pre-cook)`}
      </PromptBlock>

      {/* #8 Research & Summarize */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        <span className="flex items-center">
          <NumberBadge n={8} />
          Research Any Topic and Get a Briefing Doc
        </span>
      </h2>
      <p>
        Whether you&apos;re evaluating a new technology, preparing for a presentation, or learning
        about an unfamiliar domain — let AI do the research legwork.
      </p>
      <PromptBlock>
        {`Research [TOPIC] and create a briefing document. I need to sound informed in a meeting about this tomorrow.

Include:
- Executive summary (3 sentences max)
- Key facts and current state of the field
- Major players / companies / tools involved
- Pros and cons (or arguments for and against)
- What someone in my role should care about
- 3 smart questions I can ask to sound knowledgeable

Write it for a busy professional, not an academic. No fluff.`}
      </PromptBlock>

      {/* #9 Expense Tracking */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        <span className="flex items-center">
          <NumberBadge n={9} />
          Track and Categorize Expenses
        </span>
      </h2>
      <p>
        Dump your receipts and transactions into a file and let AI turn them into a clean financial picture.
      </p>
      <PromptBlock>
        {`I've exported my bank transactions for March (see attached CSV). Analyze my spending:

1. Categorize every transaction (housing, food, transport, subscriptions, entertainment, etc.)
2. Show total spend per category with % of income
3. Flag any subscriptions I might have forgotten about
4. Compare to February if I have that data
5. Identify my top 3 areas where I could realistically cut back
6. Create a simple budget recommendation for April

Export the categorized transactions as a clean spreadsheet.`}
      </PromptBlock>

      {/* #10 Daily Journaling */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        <span className="flex items-center">
          <NumberBadge n={10} />
          End-of-Day Journal and Reflection
        </span>
      </h2>
      <p>
        Journaling is one of the highest-ROI habits for clarity and growth — but starting from
        a blank page is the reason most people quit. Let AI ask the right questions.
      </p>
      <PromptBlock>
        {`Help me do my end-of-day reflection. Ask me these questions one at a time (wait for each answer before asking the next):

1. What's the one thing I accomplished today that I'm most satisfied with?
2. What didn't go as planned, and what would I do differently?
3. Who did I help today, or who helped me?
4. What's one thing I learned?
5. What's my intention for tomorrow?

After I answer all 5, compile my responses into a clean journal entry with today's date and save it to my journal file. Add a "mood score" (1-10) based on the overall tone of my answers.`}
      </PromptBlock>

      {/* Why These Work */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Why These Prompts Work Better in Claude Code
      </h2>
      <p>
        You can paste any of these prompts into a regular chatbot and get decent text output. But
        Claude Code&apos;s agent capabilities make them <em>dramatically</em> more useful:
      </p>
      <div className="space-y-3 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">File system access</p>
          <p className="text-sm">
            Claude Code reads and writes real files — your todo lists, journal entries, expense
            spreadsheets, and meal plans are saved as actual documents, not ephemeral chat messages.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">MCP tool integrations</p>
          <p className="text-sm">
            The morning briefing and email triage prompts go from &quot;generate placeholder text&quot; to
            &quot;pull my real calendar and emails&quot; when you connect Google Calendar, Gmail, and Slack
            via MCP servers.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Persistent project context</p>
          <p className="text-sm">
            Drop a CLAUDE.md file in your personal productivity folder and Claude Code remembers your
            preferences, writing style, and routines across sessions — no need to re-explain yourself
            every time.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground mb-1">Multi-step execution</p>
          <p className="text-sm">
            &quot;Process my emails, draft responses, and update my task list based on action items&quot;
            runs as a single workflow, not three separate copy-paste sessions.
          </p>
        </div>
      </div>

      {/* CTA */}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Go Deeper with Playbooks
      </h2>
      <p>
        Each prompt above is a starting point. The playbooks below turn them into fully automated
        workflows with CLAUDE.md templates, MCP integrations, and step-by-step setup instructions:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/daily-morning-briefing"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Daily Morning Briefing</p>
          <p className="text-sm text-muted-foreground">Calendar, email, tasks, and weather in one unified view</p>
        </Link>
        <Link
          href="/playbooks/inbox-zero-manager"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Inbox Zero Manager</p>
          <p className="text-sm text-muted-foreground">Bulk categorize, draft responses, and archive noise</p>
        </Link>
        <Link
          href="/playbooks/smart-todo-manager"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Smart Todo Manager</p>
          <p className="text-sm text-muted-foreground">Intelligent routing, deduplication, and auto-priority</p>
        </Link>
        <Link
          href="/playbooks/travel-planner-skill"
          className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#22d3ee] transition-colors"
        >
          <p className="font-semibold text-foreground mb-1">Travel Planner</p>
          <p className="text-sm text-muted-foreground">Full itineraries with budget, packing, and cultural tips</p>
        </Link>
      </div>
      <p>
        Download a playbook, drop it in a folder, open Claude Code, and start with any prompt from this
        list. Your AI personal assistant is one copy-paste away.
      </p>
    </BlogPostLayout>
  );
}
