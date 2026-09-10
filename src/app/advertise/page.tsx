import { Metadata } from 'next';
import Link from 'next/link';
import { Megaphone, Check, ShieldCheck, AlertTriangle } from 'lucide-react';
import { AdvertiseForm } from '@/components/AdvertiseForm';
import { getAllPlaybooks } from '@/lib/playbooks';
import { internalBlogPosts } from '@/lib/blog-internal';

export const metadata: Metadata = {
  title: 'Advertise | Claude Code Playbooks',
  description: 'Put your tool in front of professionals who use Claude to get real work done. Tool listings, category sponsorships and site-wide placements — clearly labeled, reviewed for fit.',
  alternates: {
    canonical: '/advertise',
  },
  openGraph: {
    title: 'Advertise | Claude Code Playbooks',
    description: 'Tool listings, category sponsorships and site-wide placements on Claude Code Playbooks.',
    url: 'https://www.claudecodehq.com/advertise',
    type: 'website',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advertise | Claude Code Playbooks',
    description: 'Tool listings, category sponsorships and site-wide placements on Claude Code Playbooks.',
    images: ['https://www.claudecodehq.com/og-image.jpg'],
  },
};

/*
 * Update monthly from Vercel Analytics (Production, last 30 days).
 * Publish only claudecodehq.com traffic, and keep the tier-1 figure next to the
 * total — roughly a fifth of raw visitors (Singapore, China) are low-engagement
 * datacenter traffic, and advertisers who check will notice.
 */
const AUDIENCE = {
  period: 'Aug 9 – Sep 8, 2026',
  growth: '+29% on the previous 30 days',
  stats: [
    { value: '18.4K', label: 'monthly visitors' },
    { value: '37.2K', label: 'monthly page views' },
    { value: '46%', label: 'from the US, UK, Canada, Australia & Western Europe' },
    { value: '55%', label: 'arrive from Google search' },
  ],
  // Approximate share of page views by topic.
  topics: [
    { name: 'Writing, content & creative', share: 11 },
    { name: 'Academic research & education', share: 10 },
    { name: 'Finance, private equity & investing', share: 8 },
    { name: 'Consulting & strategy', share: 7 },
    { name: 'Health & wellness', share: 6 },
    { name: 'Career & HR', share: 4 },
    { name: 'Developer tools', share: 4 },
  ],
};

const PLACEMENTS = [
  {
    name: 'Tool Listing',
    price: '$199',
    term: 'one-time · 12 months',
    blurb: 'For tools our readers can use alongside Claude.',
    includes: [
      'Listed in our tools directory with your logo, description and link',
      'Featured on the category page that matches your tool',
      'Labeled Sponsored, reviewed for fit before you pay',
    ],
  },
  {
    name: 'Category Sponsor',
    price: 'from $350',
    term: 'per month · 3-month minimum',
    blurb: 'Reach the readers of one topic.',
    includes: [
      'Your card on every playbook and guide in one topic',
      'Finance & investing: $500/mo',
      'Monthly click report',
    ],
  },
  {
    name: 'Site-wide Sponsor',
    price: '$900',
    term: 'per month · 3-month minimum',
    offer: 'Founding rate: $600/mo for your first 3 months',
    blurb: 'Reach readers across the whole site.',
    includes: [
      'Your card on every playbook and guide, about 37K page views a month',
      'Every topic, including Finance & investing',
      'Monthly click report',
    ],
    featured: true,
  },
];

const STEPS = [
  { title: 'Apply', body: 'Tell us about your tool. Takes two minutes.' },
  { title: 'We review fit', body: 'We reply within 3 business days, yes or no.' },
  { title: 'You pay', body: 'If it’s a match, we send a payment link.' },
  { title: 'You go live', body: 'Within 5 business days of payment.' },
];

const RULES = [
  'Every paid placement is labeled Sponsored.',
  'Sponsored links carry rel="sponsored". We don’t sell dofollow links, guest posts or link insertions.',
  'Payment never changes which playbooks we publish, how we describe them, or where they rank on the site.',
  'We review every application and turn down tools that aren’t a fit for our readers. You only pay after approval.',
  'Sponsor copy can’t claim or imply endorsement by Anthropic. This site is independent and not affiliated with Anthropic.',
];

const linkClass = 'text-[#22d3ee] hover:underline';

export default function AdvertisePage() {
  const playbookCount = Math.floor(getAllPlaybooks().length / 100) * 100;
  const guideCount = internalBlogPosts.length;

  return (
    <div className="container mx-auto py-12 max-w-4xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-3">
        <Megaphone className="h-6 w-6 text-[#22d3ee]" />
        Advertise on Claude Code Playbooks
      </h1>
      <p className="text-muted-foreground text-lg mb-10 max-w-3xl">
        Put your tool in front of people who use Claude to get real work done: researchers,
        consultants, analysts, writers and operators. {playbookCount.toLocaleString('en-US')}+ playbooks
        and {guideCount} guides, found mostly through search by people looking for a way to do a
        specific job.
      </p>

      {/* Audience */}
      <section className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {AUDIENCE.stats.map((stat) => (
            <div key={stat.label} className="p-4 bg-[#161b22] border border-[#30363d] rounded-lg">
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/70 mt-3">
          Vercel Analytics, {AUDIENCE.period}. {AUDIENCE.growth}.
        </p>
      </section>

      <section className="mb-12 grid gap-6 md:grid-cols-[1fr_minmax(0,18rem)]">
        <div>
          <h2 className="text-lg font-semibold mb-4">What our readers come for</h2>
          <div className="space-y-3">
            {AUDIENCE.topics.map((topic) => (
              <div key={topic.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">{topic.name}</span>
                  <span className="text-muted-foreground tabular-nums">{topic.share}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[#21262d]">
                  <div
                    className="h-1.5 rounded-full bg-[#22d3ee]"
                    style={{ width: `${(topic.share / AUDIENCE.topics[0].share) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/70 mt-3">
            Approximate share of page views by topic. The rest goes to the homepage, search and
            general guides.
          </p>
        </div>
        <div className="p-5 bg-[#0d1117] border border-[#f97316]/30 rounded-lg self-start">
          <h3 className="text-sm font-semibold text-[#f97316] mb-2 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Check the fit first
          </h3>
          <p className="text-sm text-muted-foreground">
            Most of our readers aren&apos;t software engineers. If your product is built mainly for
            developers, we&apos;re probably not your best channel, and we&apos;ll say so rather than take
            your money.
          </p>
        </div>
      </section>

      {/* Placements */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Placements</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {PLACEMENTS.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col p-5 rounded-lg border bg-[#161b22] ${
                p.featured ? 'border-[#22d3ee]/60' : 'border-[#30363d]'
              }`}
            >
              <h3 className="font-semibold text-foreground">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">{p.blurb}</p>
              <div className="text-2xl font-bold text-foreground">{p.price}</div>
              <div className="text-xs text-muted-foreground mb-3">{p.term}</div>
              {p.offer && (
                <div className="text-xs font-medium text-[#22c55e] bg-[#22c55e]/10 rounded px-2 py-1 mb-3 self-start">
                  {p.offer}
                </div>
              )}
              <ul className="space-y-2 text-sm text-muted-foreground mb-5 flex-1">
                {p.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="h-4 w-4 text-[#22c55e] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#apply"
                className={`text-center text-sm font-medium rounded-md px-4 py-2 transition-colors ${
                  p.featured
                    ? 'bg-[#22d3ee] text-[#0d1117] hover:bg-[#22d3ee]/90'
                    : 'bg-[#21262d] text-foreground hover:bg-[#30363d]'
                }`}
              >
                Apply
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">How it works</h2>
        <ol className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f97316] text-[#0d1117] text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <div className="font-medium text-foreground text-sm">{step.title}</div>
                <div className="text-sm text-muted-foreground">{step.body}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Rules */}
      <section className="mb-12 p-5 bg-[#161b22] border border-[#30363d] rounded-lg">
        <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-[#22d3ee]" />
          How we keep sponsorship honest
        </h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {RULES.map((rule) => (
            <li key={rule} className="flex gap-2">
              <Check className="h-4 w-4 text-[#22d3ee] shrink-0 mt-0.5" />
              <span>{rule}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-[#30363d]">
          Have a workflow you think belongs in the directory on its merits? Submitting a playbook
          is free and always will be. Use the <strong className="text-foreground">Add New Playbook</strong>{' '}
          card on the <Link href="/" className={linkClass}>homepage</Link>.
        </p>
      </section>

      {/* Apply */}
      <section id="apply" className="scroll-mt-20">
        <h2 className="text-lg font-semibold mb-1">Apply</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Prefer email? Write to{' '}
          <a href="mailto:valentin.marin83@gmail.com" className={linkClass}>valentin.marin83@gmail.com</a>.
        </p>
        <div className="p-5 bg-[#161b22] border border-[#30363d] rounded-lg">
          <AdvertiseForm />
        </div>
      </section>
    </div>
  );
}
