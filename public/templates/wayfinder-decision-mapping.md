# Wayfinder — Decision-Ticket Planning for Oversized Efforts

A loose idea has arrived that's too big for one agent session, wrapped in fog: the way from here to the **destination** isn't visible yet. Wayfinding charts that way as a **shared map** of **decision tickets** — questions whose resolution is a decision, not slices of a build to execute — then works them one at a time until the route is clear.

The destination varies per effort: a spec to hand off and iterate on, a decision to lock before planning starts, or a change made in place (a data-structure migration, say). The map is domain-agnostic — engineering work, course content, whatever fits the shape.

## Plan, Don't Do

Wayfinder is **planning** by default: each ticket resolves a decision, and the map is done when the way is clear — nothing left to decide before someone goes and does the thing. The pull to just do the work is usually the signal you've reached the edge of the map and it's time to hand off. You can override this for a given effort by noting in its Notes that execution belongs inside the map itself; absent that, produce decisions, not deliverables.

## Refer by Name

Every map and ticket has a **name** — its title. In everything a human reads (narration, the map's Decisions-so-far), refer to it by that name, never by a bare id or number. A wall of `#42, #43, #44` is illegible; names read at a glance.

## The Map

The map is a single tracked item (an issue, a top-level doc — whatever your tracker uses), the canonical artifact. Its tickets are child items of the map.

The map is an **index**, not a store. It lists the decisions made and points at the tickets that hold their detail; a decision lives in exactly one place — its ticket — so the map never restates it, only gists it and links.

**Where the map, its tickets, blocking, and frontier queries physically live is tracker-specific.** If your project has an issue tracker (GitHub Issues, Linear, Jira), use its native child-issue and blocking-dependency features — blocking especially, because it renders the frontier visually in the tracker's own UI, so a human sees what's takeable without opening the map. If no tracker is available, use a local-markdown tracker: one markdown file per map, one per ticket, in a `wayfinder/` directory, with a manual "Blocked by" line standing in for native blocking.

### The Map Body

The whole map at low resolution, loaded once per session. Open tickets are **not** listed inline — they're found by query (or, in the local-markdown fallback, by listing files with a given status).

```markdown
## Destination

<what reaching the end of this map looks like: the spec, decision, or change
this effort is finding its way to. One or two lines; every session orients
to it before choosing a ticket.>

## Notes

<domain; standing preferences for this effort; whether execution is in-scope>

## Decisions so far

<!-- the index: one line per closed ticket, enough to judge relevance -->

- [<closed ticket title>](link): <one-line gist of the answer>

## Not yet specified

<!-- in-scope fog you can't ticket yet; graduates as the frontier advances -->

## Out of scope

<!-- work ruled beyond the destination; closed, never graduates -->
```

### Tickets

Each ticket is a **child item** of the map. Its body is the question, sized to one session:

```markdown
## Question

<the decision or investigation this ticket resolves>
```

Each ticket carries a **type label**: `research`, `prototype`, `grilling`, or `task` (see below).

A session **claims** a ticket by assigning it to whoever is driving the map, **first**, before any work, so concurrent sessions skip it. That assignee _is_ the claim — an open, unassigned ticket is unclaimed.

Blocking should use the tracker's **native** dependency relationship when one exists. A ticket is **unblocked** when every ticket blocking it is closed; the **frontier** is the set of open, unblocked, unclaimed tickets — the edge of the known.

The answer isn't part of the body; it's recorded on resolution (see below). Assets created while resolving a ticket are linked from the ticket, not pasted in.

## Ticket Types

Every ticket is either **HITL** (human in the loop — worked *with* a human who speaks for themselves) or **AFK** (agent alone). A HITL ticket only resolves through that live exchange; the agent never stands in for the human's side of it.

- **Research** (AFK): Reading documentation, third-party APIs, or local resources to surface a fact a decision waits on. Use when knowledge outside the current working directory is required.
- **Prototype** (HITL): Raise the fidelity of the discussion with a cheap, rough, concrete artifact to react to — an outline, a rough take, a stub, or UI/logic code. Use when "how should it look" or "how should it behave" is the key question.
- **Grilling** (HITL): Conversation. The default case — a focused back-and-forth to pin down a decision.
- **Task** (HITL or AFK): Manual work that must happen before a decision can be made — nothing to decide, prototype, or research, but the discussion is blocked until it's done (signing up for a service, provisioning access, moving data so its shape can be seen). This is the one type that *does* rather than decides, and it earns its place by unblocking a decision, not by delivering the destination. Resolved when the work is done; the answer records what was done and any resulting facts later tickets depend on.

## Fog of War

The map is *deliberately* incomplete — don't chart what you can't yet see. Beyond the live tickets lies the **fog of war**: the dim view of decisions and investigations you can tell are coming but can't yet pin down, because they hang on questions still open. Resolving a ticket clears the fog ahead of it, graduating whatever's now specifiable into fresh tickets, one at a time, until the way to the destination is clear.

The map's **Not yet specified** section is where that dim view is written down: the suspected question, the area to revisit later.

**Fog or ticket?** The test is whether you can state the question precisely now — not whether you can answer it now.

- **Ticket when** the question is already sharp, even if blocked.
- **Not yet specified when** you can't yet phrase it that sharply. Don't pre-slice the fog into ticket-sized pieces — it's coarser than a ticket, and one patch may graduate into several tickets, or none.

## Out of Scope

Fog only ever gathers *toward* the destination, so work beyond it is **out of scope** — it isn't fog and doesn't belong in Not yet specified. Give it its own **Out of scope** section: work you've consciously ruled out of this effort.

Out-of-scope work never graduates (the frontier stops at the destination); it returns only if the destination is redrawn, and then as a fresh effort. When a ticket turns out to sit past the destination, **close it** and leave one line in Out of scope: the gist plus why, linking the closed ticket. It stays out of Decisions so far, which records the route actually walked.

## Invocation

Two modes. Either way, **never resolve more than one ticket per session**, with the exception of research tickets.

### Chart the Map

Given a loose idea:

1. **Name the destination.** Pin down what this map is finding its way to — the spec, decision, or change. The destination fixes the scope, so it's settled first.
2. **Map the frontier**, breadth-first: fan out across the whole space rather than deep on any one thread, surfacing the open decisions and the first steps takeable now. **If this surfaces no fog** — the way to the destination is already clear, the whole journey small enough for one session — you don't need a map. Say so and ask how to proceed instead.
3. **Create the map**: Destination and Notes filled in, Decisions-so-far empty, the fog sketched into Not yet specified.
4. **Create the tickets you can specify now** as child items, then wire blocking edges in a second pass (items need ids before they can reference each other). Wiring sorts them into the frontier and the blocked; everything you can't yet specify stays in the fog.
5. **Kick off research tickets** — for each `research` ticket just created, resolve it (in parallel if your tooling supports concurrent subagents) and capture its findings with a pointer from the ticket.
6. Stop — charting is one session's work; it hand-resolves nothing.

### Work Through the Map

Given an existing map:

1. Load the **map**: the low-res view, not every ticket body.
2. **Choose the ticket.** If one was named, use it. Otherwise take the first frontier ticket in order. **Claim it** — assign it to yourself before any work.
3. **Resolve it.** Zoom as needed: fetch the full body of any related or closed ticket on demand. If in doubt about how to proceed, default to a grilling conversation.
4. **Record the resolution:** post the answer as a resolution comment, close the ticket, and append a context pointer to the map's Decisions-so-far.
5. **Add newly-surfaced tickets** (create, then wire blocking); graduate any fog the answer has made specifiable, clearing it from Not yet specified so it lives only as its new ticket. If the answer reveals a ticket sits beyond the destination, rule it out of scope rather than resolving it on the route. If the decision invalidates other parts of the map, update or delete those tickets.

Expect other sessions to be editing the tracker concurrently if multiple people are pulling unblocked tickets in parallel.

## Tips

- The destination is the single highest-leverage sentence on the whole map — spend real time getting it right before creating a single ticket, because every later "is this in scope" call traces back to it.
- Keep ticket questions genuinely decision-shaped. "Implement the login form" is a task disguised as a ticket; "Which auth provider do we standardize on?" is a real ticket.
- Resist resolving two tickets in one sitting even when the second one feels quick — the one-ticket-per-session rule is what keeps each resolution properly scoped and reviewable, not a formality.

## Limitations

- This is planning infrastructure for genuinely oversized efforts — a task small enough to finish in one sitting doesn't need a map; skip straight to doing it.
- Without a tracker that supports native child-issues and blocking, the local-markdown fallback works but loses the visual frontier a real tracker's UI gives you for free — budget more manual bookkeeping.
- The map is only as good as its Destination line. A vague or drifting destination produces a map that never converges — revisit and sharpen it explicitly if tickets start feeling arbitrary.
