# Workflow Clone System

Use this when the user wants to automate their recurring work: "audit my workflows", "what should I automate", "turn this process into a skill", "map my workflows", or "clone myself". Source: Miles Deutscher, "How to Automate Your Life With Claude (Full System)" — https://x.com/milesdeutscher/status/2085736739973533708

The idea: you can't automate what you haven't identified, and a second brain that needs constant manual upkeep stops being useful the moment you stop feeding it. Instead of storing notes about processes, store the step-by-step processes themselves, as specs and skills an agent can run, and keep a visual map of them so a human can oversee them.

## How to run this

Work through the five stages in order, one at a time. Ask the user which stage they're at if it isn't clear. A new user starts at Stage 1; someone who already knows what they want to automate can start at Stage 2.

During any interview stage, ask **one question at a time** and push back when an answer is vague. Do not try to cover everything in one session. The goal is a base the user can add to over time.

Start small. Tell the user to begin with a few high-leverage workflows rather than automating dozens at once.

---

## Stage 1: Workflow Audit

Interview the user about every recurring task in their life or business, then rank the tasks by what is worth automating first. The highest-priority tasks are the ones agents get built around.

Use this prompt:

```
Interview me to map every recurring workflow in my business and my week. Ask me one question at a time. For each workflow, establish:
- The trigger: what starts it
- The steps and tools needed to execute it
- How often I do it
- How many hours a month it takes
Then score each one from 1-5 on repeatability, and 1-5 on how
much human judgement it genuinely requires.
Keep going until we've covered planning, meetings, invoices,
client work, emails, content, admin and anything else recurring.
Push me if my answers are vague.
Output everything as a table I can export.
```

**Clone Score.** Rank the finished list by how much time each task eats and how repeatable it is. The more time it takes and the more repeatable it is, the higher the priority for automation. Show the ranking as a table (task, trigger, frequency, hours per month, repeatability, judgement needed, priority).

**Break big tasks into processes.** A task like "landing a sponsorship deal" feels like one thing but is usually several separate processes, and only some can be automated. Researching and finding contact info can be automated; final negotiation and delivering the work usually can't. For each high-priority task, list its sub-processes and mark which can run without the user and which need their judgement.

Save the result to `specs/workflow-audit.md` (or as a table file the user can export).

---

## Stage 2: Specs & Skills

Turn each high-priority workflow into a spec or skill an agent can run. Two routes:

**Route A: Talk it through.** The fastest route if the user can explain the process out loud. Dictation helps, because people explain things more naturally when speaking than when typing. Use this prompt:

```
I'm going to walk you through how I do [process] step by step.
As I explain, ask me questions about anything vague or anything I
skip over. I'll miss things I do automatically without thinking,
so push me on the gaps.
For each step, capture:
- What triggers it
- What tools are involved
- What a good output looks like
- Whether it needs my judgement or can run without me
Then turn it into a skill I can run.
```

The questions are the important part. Users leave things out because steps they've internalised don't feel like steps. That is exactly what you need to probe for.

**Route B: Record a skill.** In Claude desktop, the "Record a skill" feature lets the user perform the workflow while explaining it aloud (for example, writing a tweet while narrating their thought process), and Claude builds a reusable skill from the recording. Suggest this route when the process is easier to show than to describe. It is a Claude desktop feature, not something to do from this terminal session.

Save each result as `specs/<process-name>.md`. If the user wants to run it as a Claude Code skill, also save it as `.claude/skills/<process-name>/SKILL.md` with a name and a one-line description of when to use it.

The goal of this stage is at least a few reusable skills the user is satisfied with.

---

## Stage 3: Folder Design

Give the specs a home. If the user doesn't already have one, offer to create this structure (ask before creating anything):

```
business-brain/   meetings, finances, and anything else the agents should know
specs/            specs, skills and SOPs from Stage 2, plus their maps from Stage 4
```

The **business brain** holds context the agents need. The **specs** folder holds the processes themselves.

---

## Stage 4: Visual Map

An agent reads markdown specs fine, but the user probably doesn't want to. Once there are many workflows, a visual map makes them easy to oversee. For each spec the user asks to map, read the spec file and generate the map with this prompt:

```
Read the spec file I've dropped in this folder and turn it into a
single self-contained interactive HTML map.

Structure:
- One node per step in the process, connected left to right in
execution order
- Branches where the process splits, converging where it rejoins

Colour system:
- Purple nodes for steps AI executes
- Yellow nodes for steps requiring manual human input
- Green nodes for external tools (name the tool on the node)

Interactivity:
- Hovering a node highlights all its connections
- Clicking a node shows its full detail in a side panel: trigger,
tools used, expected output, and whether it needs approval
- Mark review and approval points clearly

Style: dark background, clean sans-serif, high contrast. Readable
at a glance without zooming.

Output as one HTML file with all CSS and JS inline, no external
dependencies. Then save it into this folder.
```

Save each map next to its spec (for example `specs/<process-name>.html`). The map is useful beyond looking good: it forces the user to think about where they're actually using AI, to outline each SOP step by step, and to add layers later. Whether to keep the HTML files local or deploy them to a hosting tool is the user's call; don't deploy anything without being asked.

---

## Stage 5: Deploy the Workflows

Once the audit, specs and map exist, the workflows can be put to work. Offer the options and let the user choose, alone or in combination:

- **Claude agents:** drop the spec files into Claude and run agents that carry out the tasks.
- **Hermes agent:** feed the spec folders to a Hermes agent.
- **Loops:** use `/loop` inside Claude Code to run a workflow repeatedly on an interval.

Before setting up anything that runs on a schedule or acts on the user's behalf (sending email, messaging, spending money), confirm exactly what it will do and keep the specs' approval points in place.

---

## Closing

Finish a session by summarising what exists now (audit, specs, maps), which workflows are ready to run, and what to tackle next. Remind the user that the first pass won't catch every task, and that the system is meant to grow as they add workflows over time.
