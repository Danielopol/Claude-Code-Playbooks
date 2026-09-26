import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

const TITLE = 'Claude Dataviz Skills: The Best Skills for Charts and Data Visualization';
const DESCRIPTION =
  'Which Claude data visualization skill to use for each job — picking the right chart, publication-quality figures in matplotlib or plotly, dashboards from a CSV, self-contained HTML dashboards, and infographic layouts.';

export const metadata: Metadata = {
  title: `${TITLE} | Claude Code Playbooks Blog`,
  description: DESCRIPTION,
  alternates: { canonical: '/blog/claude-dataviz-skills' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.claudecodehq.com/blog/claude-dataviz-skills',
    type: 'article',
    publishedTime: '2026-09-26',
    images: [{ url: 'https://www.claudecodehq.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'The right Claude dataviz skill for charts, figures, dashboards, and infographics.',
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

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
      {children}
    </h2>
  );
}

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
      <p className="text-sm font-mono text-[#f97316]">{children}</p>
    </div>
  );
}

const SKILLS = [
  { job: 'Pick the right chart and generate its config', skill: 'Chart & Data Visualization Designer', href: '/playbooks/chart-designer', out: 'ECharts / Chart.js config', desc: 'Recommends a chart type with the reasoning, then writes the config and color scheme.' },
  { job: 'Publication-quality figure', skill: 'Data Visualization Creator', href: '/playbooks/data-visualization-creator', out: 'matplotlib, plotly, or Chart.js + code', desc: 'Colorblind-friendly styling, proper labels and annotations, and the code to reproduce it.' },
  { job: 'Explore a CSV visually', skill: 'CSV Data Visualizer', href: '/playbooks/csv-data-visualizer', out: 'Plotly HTML or PNG', desc: 'Histograms, trends, scatter plots, and heatmaps from a CSV in one pass.' },
  { job: 'Shareable dashboard, no server', skill: 'Interactive Dashboard Builder', href: '/playbooks/interactive-dashboard-builder', out: 'Single HTML file', desc: 'Chart.js dashboard with filters and sortable tables that opens in any browser.' },
  { job: 'Interactive charts for analysis', skill: 'Scientific Plotly', href: '/playbooks/scientific-plotly', out: 'Plotly / Dash', desc: 'Hover, zoom, linked subplots, and dropdown filters for exploratory work.' },
  { job: 'Infographic', skill: 'Infographic Layout Designer', href: '/playbooks/infographic', out: 'Layout spec for Figma/Canva', desc: 'Visual hierarchy, section flow, chart choice per data point, and palette.' },
];

export default function ClaudeDatavizSkillsPage() {
  return (
    <BlogPostLayout
      title={TITLE}
      description={DESCRIPTION}
      category="guide"
      difficulty="basic"
      readingTime="7 min read"
      createdAt="2026-09-26"
      tags={['claude dataviz skill', 'claude data visualization skill', 'claude chart skill', 'data visualization', 'dashboards', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-dataviz-skills"
    >
      <p className="text-lg">
        Claude can already draw a chart if you ask. What a dataviz skill adds is judgment and
        consistency: choosing the chart that fits the question, labeling it properly, using a
        palette people can read, and producing the same quality every time. The right skill
        depends on where the chart is going.
      </p>

      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 my-6 overflow-x-auto">
        <p className="text-sm font-semibold text-foreground mb-3">Quick answer: which dataviz skill for which job</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-muted-foreground">
              <th className="pb-2 pr-4 font-medium">You need</th>
              <th className="pb-2 pr-4 font-medium">Skill</th>
              <th className="pb-2 font-medium">Output</th>
            </tr>
          </thead>
          <tbody>
            {SKILLS.map((s) => (
              <tr key={s.href} className="border-t border-[#30363d] align-top">
                <td className="py-2 pr-4 text-foreground">{s.job}</td>
                <td className="py-2 pr-4"><PlaybookLink href={s.href}>{s.skill}</PlaybookLink></td>
                <td className="py-2">{s.out}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2>Choosing the Chart: Chart &amp; Data Visualization Designer</H2>
      <p>
        Most bad charts are the wrong chart. The{' '}
        <PlaybookLink href="/playbooks/chart-designer">Chart &amp; Data Visualization Designer</PlaybookLink>{' '}
        starts by recommending a chart type and explaining why, then generates the ECharts or
        Chart.js configuration and a readable color scheme. Use it when you know the question
        but not the best way to show the answer.
      </p>
      <Prompt>
        Visualize monthly revenue by product line for the last two years. The point I need to make is that one line is growing while the other two are flat. Recommend a chart, explain why, and give me the Chart.js config.
      </Prompt>

      <H2>For Reports and Papers: Data Visualization Creator</H2>
      <p>
        The <PlaybookLink href="/playbooks/data-visualization-creator">Data Visualization Creator</PlaybookLink>{' '}
        (adapted from Anthropic&apos;s knowledge-work plugins) produces publication-quality figures
        in matplotlib, plotly, or Chart.js: colorblind-friendly palettes, proper labels and
        annotations, and the code to regenerate the figure when the data changes. It&apos;s the
        one to use for anything going into a report, paper, or slide deck.
      </p>

      <H2>From a CSV: CSV Data Visualizer</H2>
      <p>
        Point the <PlaybookLink href="/playbooks/csv-data-visualizer">CSV Data Visualizer</PlaybookLink>{' '}
        at a file and it builds histograms, trend lines, scatter plots, and heatmaps in Plotly,
        exported as interactive HTML or PNG. It&apos;s the fastest way to see what&apos;s in a
        dataset before deciding what to present.
      </p>

      <H2>Dashboards You Can Email: Interactive Dashboard Builder</H2>
      <p>
        The <PlaybookLink href="/playbooks/interactive-dashboard-builder">Interactive Dashboard Builder</PlaybookLink>{' '}
        creates a single self-contained HTML file with Chart.js charts, dropdown filters, and
        sortable tables. No server or BI license needed: it opens in any browser and can go out
        as an email attachment. For exploratory analysis with hover, zoom, and linked subplots,{' '}
        <PlaybookLink href="/playbooks/scientific-plotly">Scientific Plotly</PlaybookLink> goes further.
      </p>
      <Prompt>
        Build a dashboard from q4-sales.csv with revenue by region, top 10 products, and a monthly trend. Add filters for region and product category. One HTML file.
      </Prompt>

      <H2>Infographics: Infographic Layout Designer</H2>
      <p>
        The <PlaybookLink href="/playbooks/infographic">Infographic Layout Designer</PlaybookLink>{' '}
        plans the infographic rather than drawing it: visual hierarchy, section flow, a chart
        type for each data point, icons, and a palette, written as a spec you (or a designer) can
        build in Figma or Canva.
      </p>

      <H2>What Makes a Chart Good, Whichever Skill You Use</H2>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong className="text-foreground">Say the point in the title.</strong> &quot;Product A drove all growth in 2026&quot; beats &quot;Revenue by product&quot;.</li>
        <li><strong className="text-foreground">Tell Claude the one comparison that matters.</strong> The chart choice follows from it.</li>
        <li><strong className="text-foreground">Check the numbers against the source.</strong> Spot-check a few values in the chart against the data before sharing.</li>
        <li><strong className="text-foreground">Keep the code.</strong> A regenerable chart beats a screenshot when the data updates.</li>
      </ul>

      <p className="mt-6">
        For the analysis that comes before the chart, see{' '}
        <Link href="/blog/claude-skills-data-analysts" className="text-[#22d3ee] hover:underline font-medium">
          Claude Skills for Data Analysts
        </Link>
        .
      </p>

      <H2>Get the Dataviz Skills</H2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {SKILLS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
          >
            <p className="font-semibold text-foreground mb-1">{s.skill}</p>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </Link>
        ))}
      </div>
    </BlogPostLayout>
  );
}
