# Business Analysis Framework Toolkit

A two-phase process for producing consulting-grade analytical reports — market analysis, brand strategy, consumer insights, financial analysis, industry research, competitive intelligence, or investment due diligence. Phase 1 builds a rigorous analysis framework (chapter skeleton, data requirements, visualization plan) before any data collection happens. Phase 2 synthesizes collected data into the final report. The two phases are meant to be separated by a data-gathering step in between — don't skip straight from framework to prose without real data behind it.

## Data Authenticity Protocol (Non-Negotiable)

Every number, chart, and claim in the final report **must** trace back to data actually collected or actually provided — never invented, estimated, or simulated. If a data point is missing, the report says "data not available," not a plausible-sounding number. Every major claim and every chart must be traceable to its source. This rule governs both phases: it shapes what Phase 1 asks for, and it's the hard constraint Phase 2 writes under.

## Phase 1: Build the Analysis Framework

### Step 1.1 — Understand the Research Subject

Identify the core entity (a market, brand, product, industry, or consumer segment) and the analytical domain (marketing, finance, industry, competitive, consumer, investment, macro). Different domains imply different natural dimensions to cover:

| Domain | Typical Dimensions to Cover |
|---|---|
| Market Analysis | Size, growth trends, segmentation, growth drivers, competitive landscape, consumer profiling |
| Brand Analysis | Positioning, market share, consumer perception, marketing strategy, competitor comparison |
| Consumer Insights | Demographic profiling, purchase behavior, decision journey, pain points, scenario analysis |
| Financial Analysis | Macro environment, industry trends, fundamentals, financial metrics, valuation, risk |
| Industry Research | Value chain, market size, competitive landscape, policy environment, technology trends, entry barriers |
| Investment Due Diligence | Business model, financial health, management, market opportunity, risk factors, exit pathways |
| Competitive Intelligence | Competitor identification, strategic comparison, SWOT, differentiated positioning, market dynamics |

### Step 1.2 — Select 2–4 Analysis Frameworks

Pick complementary (not overlapping) frameworks the domain and available data can actually support — depth on two beats a superficial stack of six. Draw from a toolkit organized by purpose:

**Strategic & environmental**: SWOT, PEST/PESTEL, Porter's Five Forces, Porter's Diamond Model, VRIO
**Market & growth**: STP, BCG Growth-Share Matrix, Ansoff Matrix, Product Life Cycle, TAM-SAM-SOM, Technology Adoption Lifecycle
**Consumer & behavioral**: Consumer Decision Journey, AARRR (Pirate Metrics), RFM, Maslow's Hierarchy of Needs, Jobs-to-be-Done
**Financial & valuation**: DuPont Analysis, DCF, Comparable Company Analysis, EVA
**Competitive & strategic positioning**: Benchmarking, Strategic Group Mapping, Value Chain Analysis, Blue Ocean Strategy, Perceptual Mapping
**Industry & supply chain**: Industry Value Chain, Gartner Hype Cycle, GE-McKinsey Matrix

Selection principles:
1. **Domain-first** — pick frameworks the domain actually calls for, not the ones you know best.
2. **Complementary, not redundant** — pair a macro-level lens (PESTEL) with a micro-level one (Five Forces) rather than stacking two versions of the same view.
3. **Depth over breadth** — 2 frameworks applied rigorously beat 6 applied superficially.
4. **Data-feasible** — if the data a framework needs can't realistically be obtained, downgrade or substitute it.
5. **Explicit mapping** — every chapter names which framework it uses and how.

### Step 1.3 — Design the Chapter Skeleton

For each chapter, define:
- **Title** — professional, concise, subject-based
- **Analysis Objective** — what this chapter is meant to reveal
- **Analysis Logic** — the reasoning chain, referencing the framework(s) selected for it
- **Core Hypothesis** — what you expect the data to show, to be validated or refuted

### Step 1.4 — Define Data Requirements Per Chapter

For every chapter, list exactly what data needs to be collected: the specific metric, whether it's quantitative/qualitative/mixed, suggested source categories (industry reports, financial statements, government statistics, e-commerce platforms, survey data, news), suggested search keywords, a priority (P0 required / P1 important / P2 supplementary), and the time range it should cover. This list is the handoff contract to whatever does the actual data collection — a research skill, a web-search agent, a human analyst.

### Step 1.5 — Plan Visualization & Argument Structure Per Chapter

For each chapter, specify the chart type and what it maps (which metric goes on which axis or segment), any comparison table's dimensions, and the narrative shape each argument will follow: **Observation (What)** — the surface phenomenon the data reveals, then **Attribution (Why)** — the driving factors behind it, then **Implication (So What)** — the strategic recommendation that follows. Every insight in the final report should be traceable through this same What → Why → So What chain, never data dumped without interpretation.

### Step 1.6 — Assemble and Check

Combine the above into one framework document: research overview, framework selection table, full chapter skeleton with data requirements and visualization plans per chapter, and a consolidated, deduplicated data-collection task list (all P0/P1 items across every chapter). Before moving on, confirm:

- The framework covers all natural dimensions for the domain
- 2–4 complementary, data-feasible frameworks are explicitly mapped to chapters
- Every chapter has an objective, logic, and hypothesis
- Every data requirement is specific enough that a research agent (or a human) could act on it directly
- Every chapter has at least one visualization plan

## Handoff: Data Collection

This framework does not collect data itself. Hand the Data Collection Task List to whatever performs that role — a research skill, a web-search subagent, a human analyst — and have it return a **Data Package**: a data summary organized per chapter, generated chart files (or the raw data to chart in Phase 2), and source URLs/summaries for citation. Do not proceed to Phase 2 until this package exists; synthesizing "from memory" is exactly what the Data Authenticity Protocol forbids.

## Phase 2: Synthesize the Final Report

### Step 2.1 — Validate Inputs

Confirm the Analysis Framework is complete, the Data Summary covers every P0 requirement (flag and note any gap explicitly rather than filling it), and any chart file paths are valid.

### Step 2.2 — Map the Report Structure

Mirror the chapter skeleton from Phase 1 one-to-one. Each chapter follows the same flow used to plan it: **Visual Anchor** (lead with the chart or key stat) → **Data Contrast** (compare against a benchmark, a prior period, or a competitor) → **Integrated Analysis** (the What → Why → So What chain from Step 1.5). Every insight chains from data to implication — a claim with no data behind it, or data with no interpretation attached, is a flag to go back and complete the chain rather than publish it as-is.

### Step 2.3 — Write in Consulting Voice

Match the register of a McKinsey/BCG deliverable: confident, structured, insight-first sentences rather than a narrated data dump. Lead each section with the finding, not the method. Use inline citations for every sourced figure, and keep the report's language consistent with whatever locale the audience expects.

### Step 2.4 — Final Checklist

- Every number and chart traces to the Data Package — nothing invented
- Every chapter follows What → Why → So What, not raw data with no interpretation
- Missing P0 data is flagged as "data not available," not silently filled
- Citations are present and traceable to their source
- The report reads as one coherent narrative, not N independently written chapters

## Tips

- Resist starting Phase 2 with a thin Data Package "to keep momentum" — a report built on gaps just relocates the gap-filling problem into hallucinated-sounding prose. Go back and close the P0 gaps first.
- The framework-selection step is where most reports actually go wrong: stacking frameworks that measure the same thing (Porter's Five Forces and Strategic Group Mapping can easily collapse into one section if you're not deliberate about what each contributes) wastes chapters instead of adding depth.
- Keep the Data Collection Task List deduplicated across chapters — two chapters often want the same market-size figure; ask for it once.

## Limitations

- This produces the framework and the final report — it is explicitly not a data-collection or web-research tool, and needs a real research step (agent or human) between its two phases.
- The framework catalog favors business/strategy domains; a genuinely technical or scientific research report needs a different set of tools (see a dedicated scientific-writing or market-research playbook instead).
- Best suited to reports with real data behind them. For a quick, low-stakes internal memo, this level of structure is more overhead than the task warrants.
