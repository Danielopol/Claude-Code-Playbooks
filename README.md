# Claude Code Playbooks

**Copy-paste workflows that supercharge Claude Code for any profession.**

Website: [claudecodehq.com](https://www.claudecodehq.com)

---

## What is this?

Claude Code Playbooks is a curated library of **799+ ready-to-use CLAUDE.md templates** spanning 35 categories and 28 professional personas. Each playbook is a downloadable workflow file that you drop into your project to instantly configure Claude Code for a specific task — from equity research to academic writing to DevOps automation.

No setup guides. No prompt engineering. Just download, paste, and go.

## How It Works

1. **Browse** playbooks by category, profession, or search
2. **Download** the CLAUDE.md template
3. **Drop it** into your project root
4. **Start working** — Claude Code follows the workflow automatically

## Features

- **799+ Playbooks** across 35 categories
- **28 Persona Pages** — find playbooks tailored to your role (researchers, developers, founders, finance pros, marketers, and more)
- **One-Click Copy & Download** — every template is ready to use
- **Blog** — tutorials, guides, and news about Claude Code
- **Search & Filter** — by category, difficulty, and tags

## Categories

Playbooks are organized across verticals including:

- Personal Productivity (file organization, task management, knowledge management)
- Research & Writing (academic research, market research)
- Finance & Accounting (equity research, investment banking, wealth management, trading)
- Developer Tools
- Marketing & Content
- Legal & Compliance
- HR & Recruiting
- Creative & Design
- Executive Strategy
- Project Management
- And many more...

## Tech Stack

- **Next.js 15** with App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** with shadcn/ui components
- **MDX** for playbook content with YAML frontmatter
- **Static generation** for fast page loads and SEO

## Getting Started (Development)

```bash
# Clone the repository
git clone https://github.com/Danielopol/claude-code-playbooks.git
cd claude-code-playbooks

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run blog:add` | Add an external blog post |
| `npm run blog:sync` | Regenerate blog data from Excel |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── playbooks/[slug]/   # Individual playbook pages
│   ├── categories/[category]/ # Category listing pages
│   ├── for/[persona]/      # Persona-based recommendation pages
│   └── blog/               # Blog pages
├── content/playbooks/      # 799+ MDX playbook files
├── components/             # React components (shadcn/ui + custom)
├── lib/                    # Utilities, categories, personas, blog data
└── types/                  # TypeScript type definitions
public/
└── templates/              # Downloadable CLAUDE.md template files
```

## Contributing

Have a CLAUDE.md workflow that works great for you? Contributions are welcome! Each playbook consists of:

1. A **template file** (`public/templates/{slug}.md`) — the raw CLAUDE.md content
2. An **MDX page** (`src/content/playbooks/{slug}.mdx`) — the description, setup instructions, and metadata

## License

All rights reserved.
