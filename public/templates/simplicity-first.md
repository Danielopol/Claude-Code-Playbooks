# Simplicity First

A simplicity gate for every code change — written, fixed, or reviewed. Invoke it before writing any code change and when reviewing any diff. Treat over-complex or oversized code as a correctness bug, not a style preference.

## The Core Ordering

Human readability comes first; agent traceability is the minimum gate. A human should understand the code in one pass. An agent must at least be able to trace a feature from entry point to executed branch, data structure, and test without reconstructing hidden control flow. Every rule below is an instance of that ordering. These are hard correctness rules, not style preferences — a violation is a bug and must be fixed before the change ships.

## The Five Rules

1. **Code a human can't follow at a glance is a bug.** If a reviewer can't read a function top-to-bottom in one pass, restructure or delete it. Nesting, indirection, and clever constructs count against correctness — cleverness that costs comprehension is a defect, whatever it saves elsewhere.

2. **Too much or redundant code is a bug.** Solve the problem in the fewest lines that stay readable. Prefer deleting code over adding it. A fix that adds more than roughly 20 lines for a problem statable in one sentence is suspect — find the smaller fix first.

3. **Simplicity is the core engineering metric.** When two designs both work, ship the one with less code, fewer concepts, fewer files. Never add config, record types, or return-shape changes "for the future."

4. **No over-encapsulation.** No new class, dataclass, helper, or module for a single call site. A helper needs three or more real call sites *and* nontrivial logic — otherwise inline it. Never wrap trivial code. Never change a function signature or return shape to thread data that only one caller needs.

5. **Simplicity is not deletion of capability.** Features, performance knobs, and observability are intentional — do not remove them in the name of simplicity. Knobs that default ON stay ON. Simplify the implementation, keep the behavior surface.

## Checklist Before Finishing Any Change

- Would a human reading this cold understand it in one pass? That is the gate.
- Could this diff be half the size? If unsure, make it smaller.
- Any new class or file? Justify each with three or more call sites, or delete it.
- Any signature or return-shape change? Verify every caller genuinely needs it.
- Comments: concise "why" only, two to four lines max, written for an external reader — no job IDs, commit hashes, single-run metrics, or internal paths; keep upstream issue/PR links.
- One problem = one minimal diff. Do not batch unrelated "improvements."
- A "bug" that cannot trigger under the real recipes the code actually runs is not worth fixing.
