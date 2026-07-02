import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Smart Home: Automate Your House with AI | Claude Code Playbooks Blog',
  description: "Four Claude Skills for smart home enthusiasts — Home Assistant YAML generation, platform-agnostic automation translation, Apple Shortcuts for HomeKit, and a home maintenance tracker.",
  alternates: { canonical: '/blog/claude-skills-smart-home' },
  openGraph: {
    title: 'Claude Skills for Smart Home: Automate Your House with AI',
    description: "Four Claude Skills for smart home enthusiasts — Home Assistant YAML generation, platform-agnostic automation translation, Apple Shortcuts for HomeKit, and a home maintenance tracker.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-smart-home',
    type: 'article',
    publishedTime: '2026-07-02T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Smart Home: Automate Your House with AI',
    description: "Four Claude Skills for smart home enthusiasts — Home Assistant YAML generation, platform-agnostic automation translation, Apple Shortcuts for HomeKit, and a home maintenance tracker.",
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

export default function ClaudeSkillsSmartHomePage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Smart Home: Automate Your House with AI"
      description="Four Claude Skills for smart home enthusiasts — Home Assistant YAML generation, platform-agnostic automation translation, Apple Shortcuts for HomeKit, and a home maintenance tracker."
      category="guide"
      difficulty="basic"
      readingTime="12 min read"
      createdAt="2026-07-02"
      tags={['claude skills smart home', 'ai home automation', 'claude home assistant', 'home assistant yaml', 'homekit automation ai', 'smart home setup', 'home assistant config', 'apple shortcuts homekit']}
      author="Claude Code Playbooks"
      slug="claude-skills-smart-home"
    >
      <p>
        Smart home enthusiasm tends to stall at the same place: you've bought the devices, picked a platform, and set up the obvious automations — lights on at sunset, thermostat on a schedule. Then you hit the ceiling. The next layer of automation requires writing YAML you don't fully understand, configuring conditions across multiple entity types, or bridging platforms that weren't designed to talk to each other. Most people stop there and live with a setup that's only 20% as capable as the hardware allows.
      </p>
      <p>
        The configuration layer is the bottleneck. Smart home platforms are powerful but their configuration syntax is designed for machines, not people. You know exactly what you want your house to do — you just can't translate that into the format the platform expects without spending an evening on Stack Overflow.
      </p>
      <p>
        These four Claude Skills close that gap. They handle the config generation, the platform translation, and the cross-app chaining — so you can describe what you want your home to do and get working automation back, regardless of which platform you're on.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Generate Home Assistant YAML from Plain English
      </h2>
      <p>
        Home Assistant is the most powerful open-source smart home platform available — and its configuration syntax is the main reason people give up on it. YAML automations with the right triggers, conditions, and actions require getting every indentation level and field name exactly right. Copy-pasting from forums works until something changes and you don't know which line broke.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/home-assistant">Home Assistant Configuration</PlaybookLink>{' '}
        Skill generates complete, correct YAML automations from your plain English description. Describe the behavior you want — which devices, what triggers them, what conditions apply, what happens as a result — and get back a working automation block you can paste directly into your <code className="text-sm bg-[#0d1117] px-1 rounded">automations.yaml</code>. It also handles entity naming conventions and can suggest dashboard layouts for your device set.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Set up automations for my Home Assistant: lights on at sunset only when someone's home, thermostat drops to 65 at 10pm on weekdays, motion sensor triggers hallway light for 3 minutes then fades out"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">30 devices across 5 brands, YAML configs stitched together from Stack Overflow, automations that break when you rename an entity, no consistent naming convention</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Complete YAML blocks for each automation with correct triggers, conditions, and actions — plus entity naming conventions and a dashboard layout you can drop straight into HA</p>
        </div>
      </div>

      <p>
        Particularly useful for presence-based automations (which require combining <code className="text-sm bg-[#0d1117] px-1 rounded">device_tracker</code> entities with state conditions), time-based schedules with weekday/weekend variations, and multi-step sequences where the order of actions matters.
      </p>
      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Works with any Home Assistant installation; outputs standard automation YAML.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Describe Any Automation Across HomeKit, HA, or SmartThings
      </h2>
      <p>
        Not everyone is on Home Assistant. Many smart home setups run on HomeKit, SmartThings, or a mix — and each platform has its own automation model, its own UI for setting conditions, and its own limitations on what you can express without going into advanced configuration. The{' '}
        <PlaybookLink href="/playbooks/home-automation-assistant">Natural Language Home Automation</PlaybookLink>{' '}
        Skill is platform-agnostic: describe what you want in plain English, tell it which platform you're on, and get back a working config or step-by-step setup guide specific to that platform.
      </p>
      <p>
        The strength here is complex conditional logic — automations with multiple triggers, time-based conditions, presence requirements, and fallback behaviors. These are exactly the scenarios that each platform's UI makes difficult, and exactly the ones worth having.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "When anyone arrives home after sunset, turn on the porch light and entryway lights — but only if the living room isn't already lit. Turn them off automatically after 15 minutes. Platform: HomeKit."
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">You know exactly what you want — but expressing "only if the living room isn't already lit" as a HomeKit condition requires navigating three menu levels and hoping the right condition type exists</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Working automation config with presence trigger, sunset time condition, state check on the living room, sequential light actions, and 15-minute auto-off — for whichever platform you specify</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Supports Home Assistant, HomeKit, and SmartThings; specify your platform in the prompt.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Chain HomeKit with iOS Apps via Apple Shortcuts
      </h2>
      <p>
        HomeKit handles device control well. What it doesn't do natively is connect your smart home to the rest of your iPhone and Mac workflow — your calendar, your location, your music, your focus modes. Apple Shortcuts is the bridge layer, and it can create automations that combine HomeKit device actions with any other iOS or macOS capability.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/apple-shortcuts">Apple Shortcuts Builder</PlaybookLink>{' '}
        Skill generates complete, importable Shortcuts from a description. For smart home users, the most powerful use cases are the cross-app ones: trigger a HomeKit scene when a calendar event starts, adjust your thermostat based on weather API data, start a bedtime scene when your sleep tracking app logs a wind-down period, or run a morning routine that combines HomeKit, Spotify, and a calendar briefing in a single tap.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "When my Work Focus mode turns on, run my Office scene in HomeKit, mute my HomePod, and set a reminder to turn on the Evening scene at 6pm"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Your HomeKit scenes and your iOS workflows are separate — you control devices manually when context changes, and cross-app chaining in the Shortcuts editor is tedious to build</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A complete importable Shortcut that triggers your HomeKit scene, controls your HomePod, and sets a reminder — chained from a Focus mode trigger, ready to import and run</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Requires Apple Shortcuts on iOS or macOS; generated Shortcuts import directly.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Track the Physical Side of Home Ownership
      </h2>
      <p>
        Automations handle the devices. The physical house still needs maintenance — and the same home that has presence-based lighting also has an HVAC filter that was last changed sometime last year, a water heater warranty that might have expired, and a gutter cleaning that was supposed to happen in October. Ownership of a smart home doesn't exempt you from ownership of a home.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/home-maintenance-tracker">Home Maintenance Tracker</PlaybookLink>{' '}
        Skill sets up a structured system for the operational side: a seasonal task calendar with the right intervals for each task type (HVAC filters quarterly, gutters twice a year, smoke detectors annually), an appliance registry with purchase dates and warranty expiration, a contractor contact database with service history attached, and upcoming maintenance alerts so nothing falls through the gaps.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Set up a home maintenance tracker for my house — I want seasonal reminders, appliance records with warranty dates, and a place to log contractor visits"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">HVAC filter changed whenever you remember it's due, appliance warranty dates scattered across emails, contractor numbers buried in old text threads — maintenance happens reactively after something breaks</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Seasonal task calendar with correct intervals, appliance registry with warranty expiration dates, contractor database with service history, and proactive maintenance alerts before tasks come due</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 5 minutes. Works as a simple file-based system you can query and update through Claude Code.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Which Skill Fits Your Setup
      </h2>
      <p>
        The right starting point depends on your platform and your current friction:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Heavy Home Assistant user</span> — start with the HA Config Skill for cleaner YAML and proper entity conventions</li>
        <li><span className="text-foreground font-medium">HomeKit or SmartThings user</span> — start with Natural Language Home Automation for complex conditional logic your platform's UI can't easily express</li>
        <li><span className="text-foreground font-medium">Apple ecosystem household</span> — add Shortcuts to bridge HomeKit with the rest of your iOS workflow</li>
        <li><span className="text-foreground font-medium">Any homeowner</span> — add the Maintenance Tracker to make sure the physical house doesn't get neglected while you're optimizing the automations</li>
      </ul>
      <p>
        The first three Skills all address the same root problem — the config layer is harder than the concept. The fourth addresses something different: the mental overhead of ownership beyond the devices. Together they cover both the smart and the home parts of a smart home.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/home-assistant">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Home Assistant Configuration</p>
            <p className="text-sm text-muted-foreground">Generate correct YAML automations, entity naming, and dashboard layouts from plain English</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/home-automation-assistant">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Natural Language Home Automation</p>
            <p className="text-sm text-muted-foreground">Describe any automation in English, get working config for HomeKit, Home Assistant, or SmartThings</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/apple-shortcuts">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Apple Shortcuts Builder</p>
            <p className="text-sm text-muted-foreground">Chain HomeKit scenes with iOS apps — calendar, Focus modes, music, weather — in importable Shortcuts</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/home-maintenance-tracker">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">Home Maintenance Tracker</p>
            <p className="text-sm text-muted-foreground">Seasonal task calendar, appliance warranty registry, contractor database, and proactive maintenance alerts</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
