# Positioning Workshop

Run a structured 5-question discovery process that outputs a Geoffrey Moore positioning statement backed by evidence and strategic choices. Not a brainstorm — a forcing function for hard decisions about target, need, category, benefit, and differentiation.

Pairs with `positioning-statement` (output format), `proto-persona`, `jobs-to-be-done`, and `problem-statement`.

## Why This Works

- **Structured discovery** prevents positioning by committee
- **Evidence-based** — uses real marketing copy, customer feedback, competitive intel
- **Adaptive** — questions adjust based on B2B vs. B2C, new vs. repositioning
- **Actionable output** — Geoffrey Moore statement ready for stakeholder review

**Anti-patterns:** Not a tagline generator. Not feature-first. Not consensus-driven (forces hard choices).

## When to Use

**Use:** New product, repositioning (pivot/market shift), aligning stakeholders, before launch, before positioning-dependent artifacts (PRD, press release, sales deck).
**Don't use:** Before customer research, internal tools with captive users, when positioning is already validated.

## Application

### Step 0: Gather Context

**For your product:** website copy, existing messaging docs, customer testimonials, sales objections, competitive win/loss.
**For repositioning:** current positioning, customer feedback, competitor messaging.
**No product yet:** 2-3 competitor/analog products as benchmarks.

### Question 1: Target Customer Segment

"Who is the primary customer segment you serve?"

1. **B2B SMB decision-makers** — small business owners (10-50 employees)
2. **B2B Enterprise buyers** — IT/Product leaders at 500+ employee firms
3. **B2C mass market** — e.g., Gen Z budgeting, millennial fitness
4. **B2C niche enthusiasts** — fitness trackers, hobbyists
5. **Other** — describe (demographics, role, size, behaviors)

### Question 2: Underserved Need (JTBD)

"What underserved need or pain does the target experience that you address?"

Example options for SMB:
1. Time-consuming manual work (10+ hours/week on automatable tasks)
2. Lack of visibility/control (real-time status missing)
3. Compliance or risk burden (tax, HR, legal exposure)
4. Costly inefficiency (revenue loss from slow processes)
5. Other — describe based on customer research

**Adaptation:** mirror language from testimonials and case studies.

### Question 3: Product Category

"What category does your solution fit? (Anchors how buyers evaluate.)"

Example for SMB + manual work:
1. Workflow automation platform (Zapier, Integromat)
2. Business management software (HubSpot, Zoho)
3. Vertical SaaS (Jobber, Clio)
4. AI-powered assistant (Notion AI, Jasper)
5. Other — define your own (warning: category creation is expensive)

### Question 4: Key Benefit (Outcome, Not Features)

"What outcome does your product deliver?"

Example for manual-work need:
1. Time savings — 10 hours/week → 1 hour
2. Error reduction — 95% fewer manual entry errors
3. Cost savings — $500/month in labor savings
4. Other — measurable outcome only

**Quality check:** Reject features ("has AI"). Accept outcomes ("makes decisions 3x faster").

### Question 5: Competitive Differentiation

"Primary competitor or alternative, and how do you differ?"

Example for workflow automation:
1. Incumbent SaaS leader (Zapier requires technical setup)
2. Spreadsheets/manual (Excel requires manual updates)
3. Vertical competitor (generic tools lack industry templates)
4. Enterprise-only (complex/expensive vs. SMB-friendly)
5. Other — name the real alternative + outcome differentiation

### Output: Generate Positioning Statement

```markdown
## Value Proposition
**For** [target from Q1]
- **that need** [need from Q2]
- [product]
- **is a** [category from Q3]
- **that** [benefit from Q4]

## Differentiation Statement
- **Unlike** [competitor from Q5]
- [product]
- **provides** [unique differentiation from Q5]

## Positioning Summary (One-Sentence)
[Product] is a [category] for [target] that [benefit], unlike [competitor] which [limitation].
```

### Next Steps

1. **Stress-test** — read aloud to 5 customers; share with stakeholders; check defensibility (6-month copy test)
2. **Refine** — narrow target, validate need, clarify category
3. **Apply** — homepage, sales deck, PRD, press release

## Common Pitfalls

1. **"For everyone"** → narrow ruthlessly; pick first segment
2. **Need is a feature request** → ask "why do they need that?" until root need
3. **Category confusion** → pick a category buyers know
4. **Differentiation is a feature** → focus on outcome differentiation
5. **No customer validation** → read to 5 customers; revise if confused

## References

- `positioning-statement` — output format
- `proto-persona` — defines "For [target]"
- `jobs-to-be-done` — informs "that need"
- `problem-statement` — supports positioning
- `press-release` — applies positioning
- Geoffrey Moore, *Crossing the Chasm* (1991)
- April Dunford, *Obviously Awesome* (2019)
