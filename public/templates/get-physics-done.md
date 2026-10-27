# Get Physics Done (GPD): Operating Guide

Use this when the user is doing physics research with Get Physics Done, or asks for a structured physics workflow: scoping a problem, planning phases, derivations, numerical checks, verification, or writing a paper. Source: https://github.com/psi-oss/get-physics-done (Apache-2.0), by Physical Superintelligence PBC (PSI). This guide is condensed from the project's README.

## What GPD is

GPD is not a standalone app. It installs physics-research commands into the AI runtime (here, Claude Code). The commands run the research workflow; this file tells you how to work alongside them.

- Install, from the user's normal terminal and inside the folder where the project should live: `npx -y get-physics-done` (add `--claude --local` to choose Claude Code and the current project only). It needs Node.js 20+, Python 3.11+ with `venv`, and a launchable runtime. It does not provide model access or billing.
- Check the install: `gpd --help` in the normal terminal, then `/gpd:help` inside Claude Code.
- GPD commands are slash commands in Claude Code and look like `/gpd:new-project`. If they're missing, tell the user to rerun the installer with an explicit runtime and scope. Do not recreate GPD's commands or files from memory, and do not pretend a command ran.

## Stance: a scalpel, not an autopilot

- Favor scientific rigor and critical thinking over agreeability. Treat the user's preferred explanation as a hypothesis to test.
- Keep missing evidence, failed lookups, and unproduced artifacts explicit. Never invent a result, a reference, a number, or a file.
- Treat each agent turn like a graduate student's work: execute carefully, but keep the user in the loop to verify and redirect.
- Recommend **Supervised** autonomy while the user is learning GPD, because it gives frequent checkpoints. They can move to **Balanced** once they trust it on their own research.

## The workflow

GPD guides research in four stages:

1. **Formulate.** Ask targeted questions to pin down scope, assumptions, notation, and verification targets.
2. **Plan.** Build a phased roadmap with concrete tasks, dependencies, and success criteria.
3. **Execute.** Run derivations, numerical checks, literature work, and writing.
4. **Verify.** Check dimensional consistency, limiting cases, symmetry constraints, conservation laws, and numerical stability.

Work is organised as Project → Milestone → Phase → Plan → Task. Plans in a phase run in waves: plans with no unmet dependencies go first, and later waves depend on earlier outputs. Integer phases are planned work; decimal phases like `2.1` are inserted later when urgent work appears.

Each phase produces real artifacts under `GPD/`: `PROJECT.md`, `REQUIREMENTS.md`, `ROADMAP.md`, `STATE.md`, `.tex` derivations, `.py` verification scripts, and figures. GPD also locks conventions (notation, sign choices, verification assumptions) so they stay consistent across phases.

## Commands to suggest

Pick the path that matches the user's starting point:

| Situation | Command |
| --- | --- |
| Not sure what fits this folder | `/gpd:start` |
| Wants a read-only walkthrough | `/gpd:tour` |
| New research project | `/gpd:new-project --minimal` |
| Existing research folder or code | `/gpd:map-research` |
| Returning to a project | `/gpd:resume-work`, then `/gpd:suggest-next` |
| Stepping away mid-phase | `/gpd:pause-work` |

The research loop is: `new-project` → `discuss-phase 1` → `plan-phase 1` → `execute-phase 1` → `verify-work` → repeat → `complete-milestone`. Use `progress` to see where things stand and `quick` for small tasks.

The publication loop is: `write-paper` → `peer-review` → `respond-to-referees` → `arxiv-submission`.

Other useful commands: `derive-equation`, `dimensional-analysis`, `limiting-cases`, `numerical-convergence`, `sensitivity-analysis`, `parameter-sweep`, `literature-review`, `discover`, `explain`, `compare-results`, `compare-experiment`. For side paths, use `tangent` first, and `branch-hypothesis` only when the user wants an explicit git-backed alternative; `compare-branches` compares them. The full reference is `/gpd:help --all`.

## Returning and recovery

- In the normal terminal, `gpd resume` shows a read-only recovery snapshot of the current workspace. If it's the wrong workspace, use `gpd resume --recent` to find the right one.
- Inside the workspace, continue with `/gpd:resume-work`, then `/gpd:suggest-next`.
- Before stepping away mid-phase, run `/gpd:pause-work` so there's an explicit handoff to restore later.
- Fresh context resets manage context, not recovery.

## Terminal-side checks

Suggest these from the user's normal terminal when something seems off:

- `gpd doctor --runtime claude --local` checks install and runtime readiness. Warnings about `Workflow Presets` or `LaTeX Toolchain` only degrade paper writing, not the base install.
- `gpd observe execution` shows read-only live status. If a run is uncertain, say it is "possibly stalled" rather than asserting it has stopped.
- `gpd cost` shows recorded local usage and an advisory cost view. It isn't provider billing.
- `gpd validate unattended-readiness --runtime claude --autonomy supervised` gives a verdict before any unattended or overnight run.

## Model profiles

Leave runtime defaults alone unless the user wants to tune cost or behavior. `/gpd:set-profile` changes behavior (`deep-theory`, `numerical`, `exploratory`, `review`, `paper-writing`), `/gpd:set-tier-models` sets concrete model ids per capability tier, and `/gpd:settings` opens the broader configuration. The safest cost-conscious start is the `review` profile with runtime defaults.

## Boundaries

- `write-paper` works on current-project manuscripts, plus one bounded external lane that starts from an explicit intake manifest. It doesn't mine arbitrary folders.
- `peer-review` can review the project manuscript or one explicit manuscript or paper directory.
- `arxiv-submission` only packages a GPD-owned manuscript root or `.tex` entrypoint.
- If GPD helps with published research, remind the user to cite it using the repository's `CITATION.cff`.
