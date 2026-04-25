# TAM/SAM/SOM Calculator

Calculate Total Addressable Market (TAM), Serviceable Available Market (SAM), and Serviceable Obtainable Market (SOM) with explicit assumptions, citations, and caveats. Use when sizing a market for an idea, business case, or executive review.

Not a back-of-napkin guess — a structured, citation-backed analysis that withstands scrutiny.

## The Three-Tier Model

- **TAM** — Total demand if you captured 100% of the market
- **SAM** — TAM segment you can realistically target (geography, firmographics, product fit)
- **SOM** — Portion of SAM you can capture in 1-3 years (competition, GTM constraints)

## When to Use

- Pitching to investors or execs (deck needs market size)
- Validating product ideas (is the market big enough?)
- Prioritizing product lines (which has bigger opportunity?)
- Setting growth targets

**Don't use:** internal tools with captive users, before defining the problem, as the only validation.

## Step 0: Gather Context

For your own product: website copy, marketing emails, product descriptions, case studies.
No product yet: pull a competitor's homepage / landing page as analog.

## Adaptive Questions (4)

### Q1: Problem Space

1. B2B SaaS productivity (Zapier-like)
2. Consumer fintech (Mint-like)
3. Healthcare/telehealth (BetterHelp-like)
4. E-commerce enablement (Stripe-like)

### Q2: Geographic Region

1. United States — Census, BLS, IBISWorld
2. EU — Eurostat, GDPR considerations
3. Global — World Bank, IMF
4. Specific country/region

### Q3: Industry/Market Segments

(Adapted to Q1+Q2). Example for B2B SaaS US:
1. SMB services (5.4M businesses, $1.2T)
2. Professional services (1.1M firms, $850B)
3. Healthcare providers (900K, $4T)
4. Tech/software (500K, $1.8T)

### Q4: Potential Customers

(Firmographics or demographics). Example:
1. SMBs 10-50 employees
2. SMBs 50-250 employees
3. Solo entrepreneurs / freelancers
4. Service businesses with online presence

## Optional Helper Script

```bash
python3 scripts/market-sizing.py --population 5400000 --arpu 1000 --sam-share 30% --som-share 10%
```

## Output Structure

```markdown
# TAM/SAM/SOM Analysis

## TAM
- Population: [X]
- Source: [Citation + URL]
- Calculation: [population × ARPA = $X]

## SAM
- Segment of TAM: [narrowed]
- Population: [X]
- Calculation
- Assumptions

## SOM
- Realistically capturable: 1-15% of SAM in 1-3 years
- Year 1/2/3 projections
- Competition + GTM assumptions

## Data Sources
- [Census, IBISWorld, Statista, etc.]

## Validation
1. Does TAM align with industry reports?
2. Is SAM realistically serviceable?
3. Is SOM achievable given competition?
```

## Common Pitfalls

1. **TAM without citations** — "$50B market" with no source. Cite Gartner/IBISWorld/Statista.
2. **SOM equals SAM** — assumes 100% capture. SOM should be 1-20% of SAM.
3. **No population estimates** — only dollar amounts. Always include customer counts.
4. **Static assumptions** — calculated once, never updated. Reassess annually.
5. **Ignoring GTM constraints** — "50% of SAM Year 1" with no sales team. Ground in capacity.

## References

- `skills/positioning-statement` — segment size validation
- `skills/problem-statement` — defines the market
- `skills/recommendation-canvas` — informs business outcome projections
- Steve Blank, *The Four Steps to the Epiphany* (2005)

**Data sources:** US Census, BLS, IBISWorld, Statista, Eurostat, World Bank, IMF, Gartner, Forrester.
