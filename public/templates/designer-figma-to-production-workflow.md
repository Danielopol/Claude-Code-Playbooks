# Designer's Figma-to-Production Workflow

## Your Role

You help a designer — not a developer — ship real, deployed, functional software directly from their design intent, without them learning to code in the traditional sense. The core idea: designers already think in requirements, constraints, and edge cases. The gap has always been translation into working software. Your job is to close that gap by questioning assumptions before building, capturing exact design decisions, and executing in verified phases rather than one long unstructured session.

This workflow pairs Claude Code with **GSD (Get Shit Done)**, a meta-prompting system that structures the discuss → plan → execute → verify loop so context stays fresh and decisions stay traceable.

---

## Setup

### Install Claude Code

```bash
# Mac
npm install -g @anthropic-ai/claude-code

# Windows: use the native installer from Anthropic's site
```

Verify: run `claude`

### Install GSD

```bash
npx get-shit-done-cc
```

Choose "Claude Code" as the runtime and "Global" for the install location.

Verify:
```bash
claude --dangerously-skip-permissions
/gsd:help
```

**About `--dangerously-skip-permissions`**: this lets Claude make autonomous git commits and file operations without a confirmation prompt on every single action — it's what makes the phased execution efficient. Understand what it grants before using it; it's a deliberate trade of friction for speed, not a default to reach for everywhere.

### Terminal essentials — five commands, that's genuinely it

| Command | Does |
|---------|------|
| `claude` | Start Claude Code |
| `cd folder-name` | Navigate into a folder |
| `cd ..` | Go back up one level |
| `ls` (Mac/Linux) or `dir` (Windows) | List files |
| `pwd` | Show current location |

If the terminal itself feels unfamiliar, Cursor, Antigravity, or VS Code all have a built-in terminal panel (View → Terminal, or Cmd+J) that works the same way without a separate app to learn.

---

## The Core Loop: Discuss → Plan → Execute → Verify

This loop repeats once per phase of the project. Never skip a step to save time — the structure is what prevents scope creep and quality degradation over a long build.

### 1. New Project

```bash
cd Desktop && mkdir my-project && cd my-project
claude --dangerously-skip-permissions
```
```
/gsd:new-project
```

GSD interrogates the concept before building anything:
- What's the primary goal?
- Who's the audience?
- What should visitors feel?
- Brand guidelines or color preferences?
- How to handle missing content (images, copy)?
- Analytics needed?
- Content update method — CMS or Markdown?

Then it spawns parallel research agents investigating stack options, feature patterns, architecture decisions, and pitfalls specific to what was just described — before writing a single line of code.

**Output**: a `REQUIREMENTS.md` splitting scope into **V1 (Must Have)**, **V2 (Nice to Have)**, and **Out of Scope** — explicitly locked before execution starts, and a `ROADMAP.md` breaking V1 into phases for approval.

### 2. Discuss a Phase

```
/gsd:discuss-phase N
```

Before any planning happens, GSD surfaces the specific decision points a phase requires — hero layout, hover behavior, spacing rhythm, empty-state handling, responsive breakpoints. Answer with the same specificity you'd give a developer, not vague direction:

> Hero: Centered, solid dark background (#0A0A0A), name 48px vs. tagline 18px.
> Project grid: Spacious (48px gaps), subtle lift + soft shadow on hover, 16:9 images, dashed border placeholders for missing images.

This produces a `{phase}-CONTEXT.md` — the durable record of your actual intent, which every later step reads back against.

### 3. Plan the Phase

```
/gsd:plan-phase N
```

A research agent investigates the specific decisions just captured (if you said 48px gaps, it researches CSS Grid gap approaches for that exact spec). A planning agent then generates 2-3 atomic task plans, each with an explicit action, a verification check, and a definition of done. A verification agent confirms every plan against the roadmap, the requirements, and the phase context — looping until the plans actually pass, before execution starts.

### 4. Execute the Phase

```
/gsd:execute-phase N
```

Tasks run in **waves**: independent tasks in parallel, dependent tasks sequentially after their prerequisites land. Each task gets a fresh 200k-token context — this is deliberate, and it's what prevents the quality degradation that shows up in one long unstructured session. Every task becomes its own atomic git commit:

```
abc123f feat(02-01): create hero section HTML
def456g feat(02-01): style hero with centered layout
```

Atomic commits mean `git bisect` can find exactly which task broke something, and any single task is independently revertable without unwinding the whole phase.

### 5. Verify the Work

```
/gsd:verify-work N
```

GSD extracts the phase's testable deliverables as concrete yes/no questions: does the hero fill the viewport? Do cards lift on hover? Does the layout collapse to one column below 768px? Answer honestly, including partial failures — a debug agent diagnoses issues and generates fix plans, which get executed and re-verified until everything genuinely passes. Don't rubber-stamp this step; it's the only checkpoint between "looks done" and "is actually done."

---

## GitHub and Deployment

**GitHub**: create a repository (don't initialize with a README — let GSD's commits be the first history), then:
```
/gsd:quick
> "Connect this project to GitHub: <repo-url> and push all commits"
```

**Vercel**: import the GitHub repo, click deploy. Every subsequent push auto-deploys — no manual redeploy step going forward.

**Custom domain**: buy through Vercel directly (simplest) or point an external registrar's DNS at Vercel's records from Project Settings → Domains.

---

## Adding Real Functionality (Auth, Database, AI Features)

For features beyond static content — authentication, a database, an AI-powered interaction — front-load a research pass before touching code:

```
Research the best approach and create implementation-plan.md with:
1. Services needed (auth, database, AI API)
2. Architecture overview
3. Security considerations (especially API keys)
4. Step-by-step implementation phases
```

**Environment variables, always**:
```
Create a .env file for storing API keys.
Also create .gitignore excluding .env from GitHub.
```

**Never commit `.env`.** The `.gitignore` step above exists specifically to make that a structural guarantee, not a habit to remember every time.

For a database and auth (e.g. Supabase): create the project, copy the URL and anon key into `.env`, enable the auth provider you need, and store any server-side secret (like an Anthropic API key for an in-app AI feature) in the platform's server-side secret store — Edge Functions, not the frontend, ever. Set the same variables in Vercel's Project → Settings → Environment Variables before the first deploy that needs them.

Test locally before deploying: the sign-in flow end to end (including sign-out and session persistence), the AI feature with realistic queries, and any write path (comments, form submission) as an authenticated user.

---

## Figma-First Workflow

For a design that already exists in Figma, the loop is the same shape with Figma as the source of truth for every decision instead of a verbal description.

**Design in Figma first**, with real structure: a proper design system (colors, typography, spacing as named tokens), components with variants, Auto Layout for responsive behavior, and consistent naming — GSD's Figma MCP integration reads structure and naming, so sloppy naming produces sloppy extraction.

**Initialize referencing the file directly**:
```
/gsd:new-project
> I have a Figma design ready. I want to build with React + Tailwind CSS,
  Figma MCP integration for design tokens, a component library matching
  Figma components exactly, deployed on Vercel.
  Figma file: <url>
```

**Phase 1 — extract the design system.** `/gsd:discuss-phase 1` asks about color naming (keep Figma's variable names or go semantic?), typography scale mapping, spacing system mapping to a CSS/Tailwind scale, and which component-level tokens (radius, shadow) to extract. The result is the entire design system in code, matching Figma exactly — not approximated.

**Phase 2 — build components.** `/gsd:discuss-phase 2` asks the same category of questions per component: prop API, accessibility requirements, and the exact interaction spec ("hover is `transform: translateY(-2px)`, disabled is exactly 40% opacity" — not "make it look disabled"). Result: components that match Figma pixel-for-pixel, not approximately.

**Phase 3+ — build screens from layouts**, using the design-system and component-library output from the earlier phases rather than rebuilding styling per screen.

**Verify against Figma directly** — compare the deployed site side-by-side with the Figma file using browser DevTools to actually measure spacing, color, and type rather than eyeballing it.

**When Figma updates**, close the loop instead of manually re-implementing:
```
/gsd:quick
> "Pull latest changes from Figma file <id> and update the Button
  component to match the new hover state"
```

---

## Why the Structure Matters

**Context engineering**: `PROJECT.md` holds the vision, `REQUIREMENTS.md` the locked scope, `ROADMAP.md` the phase breakdown, `STATE.md` the decisions made — externalizing this into files instead of conversation history is what makes a fresh 200k-token context per task actually work without losing the plot.

**Multi-agent structure**: an orchestrator coordinates specialized agents — research investigates in parallel, a planner proposes, a checker verifies and loops until plans actually pass, executors run in dependency-respecting waves, and a verifier confirms the deliverable against the original goal before calling a phase done.

**Atomic commits**: one task, one commit, always. This is what makes `git bisect` useful, what makes any single change independently revertable, and what keeps history legible for whoever (or whichever future Claude session) reads it later.

---

## Common Pitfalls

**Quality degradation over a long session** → use fresh contexts per task rather than one continuous conversation; this is the entire reason the phase/task structure exists.

**Scope creep** → lock `REQUIREMENTS.md` and `ROADMAP.md` before execution starts; the structure is specifically designed to prevent adding features mid-phase.

**Missing edge cases discovered late** → use `/gsd:discuss-phase` to explicitly surface empty states, mobile behavior, and error handling *before* planning, not after something breaks in verification.

**Design drifting from Figma** → use the MCP integration for exact values; never describe a spec approximately when the actual number is one query away.

**Mobile breaking unexpectedly** → define responsive behavior with exact breakpoints and grid changes during the discuss step, not as an afterthought during verification.

---

## Command Reference

```bash
npx get-shit-done-cc          # install GSD
/gsd:help                     # list all commands
/gsd:new-project               # initialize with questions
/gsd:discuss-phase N           # capture design decisions for a phase
/gsd:plan-phase N              # research + plan + verify the plan
/gsd:execute-phase N           # parallel/wave execution
/gsd:verify-work N             # manual UAT + auto-diagnosis of failures
/gsd:complete-milestone        # archive the milestone, tag a release
/gsd:new-milestone             # start the next version
/gsd:quick                     # ad-hoc tasks outside the phase structure
```

---

## Rules

- Never skip the discuss step to save time — vague direction produces generic output that has to be redone, which costs more time than the discussion would have
- Lock requirements and roadmap before execution begins; resist adding scope mid-phase
- Use fresh context per task rather than one long session — this is structural, not optional, for maintaining output quality
- Every task becomes one atomic commit — never bundle unrelated changes into a single commit for convenience
- Verify against concrete yes/no deliverables, not a general "does this look right" — vague verification lets real gaps through
- Never commit `.env` or any file containing a credential — set up `.gitignore` for this before the first commit, not after a leak
- For Figma-sourced work, pull exact values via the MCP integration rather than approximating from a screenshot
