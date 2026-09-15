# Fundamental Stock Analysis Framework

A rigorous, sector-relative, multi-factor fundamental analysis process for a publicly listed company — Indian (NSE/BSE) or US/global. Produces evidence-backed analysis and a sector-relative scorecard, never personalized investment advice.

## The Principle That Governs Everything Here

**A financial metric carries no meaning until you know the sector it came from and the company's own history.**

If company X earns a 20% operating margin and company Y earns 30%, that tells you nothing about which is the better business on its own. Y may be in a sector where 30% is mediocre; X may earn a far higher return on the capital actually invested to produce its 20%; Y's margin may be eroding while X's compounds. Two consequences follow:

1. **Never rank companies on a single metric.** Every judgment combines profitability, returns on capital, cash conversion, balance sheet strength, growth durability, governance, and price.
2. **Compare like with like.** Benchmark against sector peers or the company's own multi-year record — never a raw cross-industry number. Banks, insurers, REITs, and miners need entirely different metric sets; the standard ratios are undefined or inverted for them.

## Non-Negotiables

### Never Invent a Number

This is the failure mode that destroys the value of the whole analysis. A fabricated revenue figure or a hallucinated return-on-capital number produces a confident, well-formatted, *useless* report — and the reader may act on it.

- Every figure carries a **source and a period**: "FY25 annual report, consolidated, p.112" or "10-K FY2024, Item 8," not a bare number.
- If a number can't be sourced, write `not available` and say what would be needed. Acknowledged gaps are more valuable than invented precision.
- Cross-check headline figures (revenue, net profit, debt, cash) against a second source when possible; at least one of the two must be a primary document.
- **Every figure must trace to a primary document** — annual report, 10-K/10-Q, quarterly filing, concall transcript, investor presentation, offer document, exchange filing, or rating rationale. Aggregator sites are navigation aids for *locating* documents, never a source of record — the one exception is current share price and market cap, which must carry an as-of date.
- State **consolidated vs. standalone** explicitly, and state **currency and units** explicitly (crore/lakh vs. millions/billions) — a 10x unit error is a common, embarrassing mistake.

### Official Records Hold Far More Than the Financial Statements

Rank sources by how many hands a number passed through, and cite only the primary one: (1) primary filings — annual report/10-K, exchange filings, quarterly results, the offer document; (2) company-published secondary — concall transcripts, investor presentations; (3) regulator or third-party primary — rating rationales, exchange shareholding data. News, brokerage notes, and aggregators are navigation and cross-check aids only — when they disagree with the filing, the filing wins, and the disagreement is itself a finding worth reporting.

A filing is not just its three financial statements. Read, as a first-class input, not a skim on the way to the P&L:

- **Business, strategy, and risk-factor sections** — what's sold, to whom, the stated moat, and the risks management is legally obliged to admit.
- **MD&A across 3–5 years** — growth decomposed into volume/price/mix, capacity, capex plans, order book, and the drift between what was promised and what was delivered.
- **Auditor's report and qualification annexures** — the auditor's own map of where the numbers are fragile.
- **Related-party transactions, contingent liabilities, litigation, capital commitments** — the commonest routes for value to leave a minority shareholder.
- **Governance and ownership** — board independence, promoter holding trend and pledge %, remuneration versus profit, auditor tenure and any resignation.
- **Segment and operational KPIs** — segment-level revenue/EBIT/capital employed, plus sector-specific operating metrics that never reach the income statement.

Walk the entire annual report section by section, not just the shortlist above — the rule is *consider all of it, then report selectively*. A section that's genuinely empty this year is recorded as "read — nothing material," never skipped unread.

### Analysis, Not Advice

Produce analysis, evidence, and a reasoned view of business quality and valuation — never personalized investment advice, position sizing, or buy/sell instructions framed as recommendations for the reader's own money. State clearly that the output is research, not licensed financial advice. A bull case, a bear case, a valuation range, and what would falsify the thesis are genuinely useful and stay on the right side of this line; "you should buy 50 shares" does not.

### Show the Reasoning and the Uncertainty

Where an estimate is used, say it's an estimate, give the assumption, and show what changes if the assumption is wrong. False precision — a target price to two decimals off a hand-waved growth rate — is worse than an honest range.

## Choose a Depth Mode

Match effort to what was actually asked, and announce which mode is running:

| Mode | When | Covers |
|---|---|---|
| **Screen** | "Quick take," "is this worth looking at" | Kill criteria, headline quality metrics, obvious red flags, a short verdict. |
| **Standard** (default) | "Analyze this stock" | Full workflow at moderate depth, full scorecard and report. |
| **Deep dive** | "Detailed," "thorough," or a position being sized | Full workflow at full depth, document-level diligence, a forensic pass, scenario valuation, an explicit bear case. |
| **Forensic** | "Is the profit real," "are they cooking the books" | A different question entirely — *can these accounts bear weight?* Skips business quality and valuation. |
| **IPO** | The company isn't yet trading | No market price and no public track record — own-history benchmarking and market-price valuation are both unavailable. |

## The Workflow

### Stage 0 — Establish Identity

Pin down exactly what's being analyzed: company, exchange, ticker; which specific security (ordinary shares vs. a dual-class line vs. an ADR — these trade differently and confer different rights); reporting currency and fiscal year end; consolidated or standalone basis; market cap, enterprise value, free float.

### Stage 1 — Acquire Data (Document-First)

Obtain raw documents before extracting any numbers: the latest annual report/10-K (and ideally the prior 4 years), 4–8 quarterly filings, the last 2 concall transcripts, the latest investor presentation, quarterly shareholding patterns, the latest credit rating rationale, and the offer document if listed within the last 3–4 years. Extract both the financials *and* the non-financial record described above, each with its document and page/section cite.

**Run a recency gate before analyzing anything.** This is the most common way a well-built analysis turns out wrong — not bad arithmetic, but a conclusion drawn from data already superseded when it was written. Establish and state explicitly: the latest period actually reported, whether a newer quarter has been published since, and what's happened since that period end (earnings releases, rating actions, regulatory decisions, M&A approvals, management changes). Record one line: *"Most recent period incorporated: Q1 FY27, published 11-Jul-2026; checked for events to 22-Jul-2026."* A reader can't judge staleness that isn't disclosed.

### Stage 2 — Classify Sector and Situation

The hinge of the whole analysis — it determines which metrics even apply. Identify the sector (a bank needs P/B and NIM analysis; an insurer needs P/EV; a REIT needs AFFO and cap rates; a miner needs mid-cycle EV/EBITDA; a conglomerate gets valued sum-of-the-parts) and any lifecycle situation overlay (loss-making growth, deep cyclical, turnaround, spin-off, holdco, recent IPO, serial acquirer). A deep cyclical at a trailing P/E of 5 is usually expensive, not cheap — the situation context is what stops that specific error.

### Stage 3 — Kill Criteria and Red-Flag Screen

Run this early; most candidates fail here, and finding out cheaply is the point. Screen for: cash flow persistently below profit, receivables growing faster than sales, auditor qualifications or resignations, high or rising promoter pledging, related-party leakage, frequent "one-off" charges, restatements, opaque group structure, unsustainable leverage. If something serious surfaces, say so prominently and early — a governance red flag can outweigh every positive on the scorecard, and the report should reflect that rather than averaging it away.

**Escalate to Forensic mode** when a finding is severe enough that valuation becomes pointless until resolved — an adverse or qualified audit opinion, cash flow far below cumulative profit, cash that can't be evidenced, or related-party leakage. Say explicitly that the mode is switching, and why.

### Stage 4 — Core Analysis

Work through the universal checklist — business quality and moat, industry structure, growth durability and reinvestment runway — combined with: revenue growth decomposition and earnings quality (accruals, one-offs, tax normalcy); leverage, coverage, working capital, and free cash flow; return on invested capital versus cost of capital with a DuPont decomposition; and the qualitative record from Stage 1, synthesized *alongside* the ratios, not in a separate silo. Apply the sector-specific metric set where it overrides the generic one.

### Stage 5 — Build the Peer Set and Benchmark

A wrong peer set produces confidently wrong conclusions — construct it explicitly and state the basis: same sector and sub-sector, comparable business model and capital intensity, similar accounting regime, aligned fiscal periods. Benchmark every key metric two ways — against peers, and against the company's own 5–10 year history. Both matter: a company can beat its peers while decaying against itself.

### Stage 6 — Value It

Use the valuation method the sector actually calls for — applying a generic P/E across every sector is the same category of error as comparing raw operating margins across industries. Include a reverse-valuation check: what growth and margin does the current price already assume? This converts valuation from an opinion into a testable question, and is worth running even by hand when no calculator tooling is available.

### Stage 7 — Risk, Bear Case, Invalidation

Write a genuine bear case — the most credible argument that this is a bad investment, not a strawman. Then state the specific, observable events that would prove the positive thesis wrong.

### Stage 8 — Score and Write

Score sector-relative categories with visible weights and a composite, then write the report opening with the verdict and key risks — a reader who stops after the first screen should still get the substance.

### Stage 9 — Challenge the Draft Before Delivering

The author of a thesis won't attack it as hard as someone else would. Identify what the verdict actually rests on, attack those specific claims, verify the numbers trace to their sources, and test whether the conclusion survives a different peer set. Mandatory in Deep dive, recommended in Standard, skipped in Screen (where the conclusion is explicitly provisional). If subagents are available, use a fresh one for this pass — independence is the mechanism, and an author reviewing their own work is a weak substitute. The point is that the verdict can move; a challenge pass that only adds caveats to an already-written conclusion manufactures false confidence.

### Stage 10 — Final Check Before Delivering

Confirm the non-negotiables one last time: a recency statement and data-quality note are present, basis and units are stated, the scorecard doesn't appear without its gating disclosure, a bear case and disclaimer both exist, and financial figures sit near their sources rather than floating free. A low figure-sourcing ratio means go back and cite — not ship anyway.

## Output Contract

Deliver two things, always:

1. **The report**, opening with the verdict and key risks.
2. **The scorecard** — sector-relative scores by category with weights shown, plus the composite. Show the inputs so a reader can disagree with a specific number rather than the whole thing.

Include a data-quality note: which figures are sourced, which are estimated, which are missing, and the as-of date.

## Anti-Patterns

- Judging a bank, insurer, REIT, or miner on generic ratios — for these sectors the standard ratios are undefined or inverted.
- Inventing or interpolating a number instead of writing "not available" with the reason.
- Averaging a disqualifying red flag into a composite score instead of letting it cap or void the verdict.
- Treating aggregator or screener figures as primary evidence — they navigate; filings decide.
- Running every possible analytical angle on every company — for most companies, three or four factors genuinely decide the outcome: a moat widening or narrowing, returns on incremental capital, whether cash follows profit, and whether the price already assumes success. Find those, evidence them properly, and let the rest of the checklist catch anything disqualifying.
- Presenting output as investment advice — the deliverable is analysis, never an allocation or a trading signal.

## Tips

- The recency gate (Stage 1) catches the single most common way a technically correct analysis turns out wrong — a conclusion drawn from data that was already superseded by a quarter, a rating action, or a regulatory decision published days before the analysis date.
- When a Stage 3 red flag is serious, resist the pull to keep going with the standard workflow anyway — escalating to Forensic mode and saying so explicitly is more useful than a valuation built on earnings nobody should believe.
- The Stage 9 challenge pass is the step most likely to get skipped under time pressure, and it's exactly the step that catches an analysis that quietly became advocacy for its own conclusion.

## Limitations

- This is a methodology for equity research and analysis, not licensed financial advice — always state that plainly in any output, and never frame a conclusion as a personalized recommendation.
- The sector-specific metric sets referenced here (banks, insurers, REITs, miners, and dozens of others) each have real specialized logic this summary can only gesture at — treat sector specificity as a hard requirement and research the right metric set for the specific sector rather than defaulting to generic ratios.
- Deepest rigor requires primary source documents (annual reports, regulatory filings, transcripts) that may not always be readily accessible — when they aren't, say so explicitly rather than substituting aggregator data silently.
