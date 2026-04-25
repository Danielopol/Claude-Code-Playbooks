# Skill Authoring Workflow

Turn raw PM content (workshop notes, half-baked prompts, research dumps) into compliant, publish-ready skills that pass validation. Six-phase workflow for creating or updating skills without breaking standards.

Use it when you want to ship a skill without "looks good to me" roulette.

## Dogfood First

Repo-native tools before custom processes:
- `scripts/find-a-skill.sh` — search existing
- `scripts/add-a-skill.sh` — content-first generator
- `scripts/build-a-skill.sh` — guided wizard
- `scripts/test-a-skill.sh` — smoke tests
- `scripts/check-skill-metadata.py` — frontmatter validation
- `scripts/check-skill-triggers.py` — description triggers

## Pick the Right Path

- **Guided wizard** (`build-a-skill.sh`) — idea but no final prose
- **Content-first generator** (`add-a-skill.sh`) — already have source content
- **Manual edit + validate** — tightening existing skill

## Definition of Done (No Exceptions)

1. Frontmatter valid (`name`, `description`, `intent`, `type`)
2. Section order compliant
3. Metadata limits (`name` ≤64, `description` ≤200 chars)
4. Description: what + when to trigger
5. Intent: fuller summary, doesn't replace trigger description
6. Cross-references resolve
7. README catalog counts/tables updated

## The 6 Phases

### Phase 1: Preflight (Avoid Duplicate Work)

```bash
./scripts/find-a-skill.sh --keyword "<topic>"
```

Decide type:
- **Component** — one artifact/template
- **Interactive** — 3-5 adaptive questions + numbered options
- **Workflow** — multi-phase orchestration

### Phase 2: Generate Draft

Source material exists:
```bash
./scripts/add-a-skill.sh research/your-framework.md
```

Guided prompts:
```bash
./scripts/build-a-skill.sh
```

### Phase 3: Tighten

Manual review for:
- Clear "when to use" guidance
- One concrete example
- One explicit anti-pattern
- No filler / no consultant-speak

### Phase 4: Validate Hard

```bash
./scripts/test-a-skill.sh --skill <skill-name> --smoke
python3 scripts/check-skill-metadata.py skills/<skill-name>/SKILL.md
python3 scripts/check-skill-triggers.py skills/<skill-name>/SKILL.md --show-cases
```

### Phase 5: Integrate Repo Docs

For new skills:
1. Add to README category table
2. Update skill totals + category counts
3. Verify link paths resolve

### Phase 6: Optional Packaging

```bash
./scripts/zip-a-skill.sh --skill <skill-name>
# or category:
./scripts/zip-a-skill.sh --type component --output dist/skill-zips
# or preset:
./scripts/zip-a-skill.sh --preset core-pm --output dist/skill-zips
```

## Common Pitfalls

- Shipping vibes, not standards
- Choosing `workflow` when it's really a component template
- Bloated descriptions exceeding upload limits
- Description says what skill is but not when to trigger
- Description hits 200-char limit and gets cut mid-thought
- Letting `intent` substitute for weak trigger description
- Forgetting README count updates after adding
- Treating generated output as final without review

## References

- `README.md`, `AGENTS.md`, `CLAUDE.md`
- `docs/Building PM Skills.md`
- `docs/Add-a-Skill Utility Guide.md`
- Anthropic, *Complete Guide to Building Skills for Claude*
