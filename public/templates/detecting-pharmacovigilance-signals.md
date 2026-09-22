# Detecting Pharmacovigilance Signals (Disproportionality)

Mine spontaneous adverse-event report data — like the FDA's FAERS — for signals of disproportionate reporting (SDR): drug-reaction pairs occurring together more than expected given the background of all reports. The core device is a 2x2 contingency table and a disproportionality metric computed from it — PRR, ROR, EBGM, or IC (BCPNN). This is statistical screening: a high PRR is a hypothesis, not a confirmed adverse drug reaction.

You can build the 2x2 table directly from the public, free OpenFDA `/drug/event` endpoint — no PHI involved, no MedDRA license required to *query* it (the reaction terms returned are already MedDRA Preferred Terms).

## When to Use

- You have a drug of interest and want to see which reactions are over-reported.
- You need a PRR/ROR with confidence interval, or an Empirical Bayes EBGM/EB05 or IC025 to control for the small-count noise PRR/ROR suffer from.
- You are building a routine signal-screening run over OpenFDA or your own aggregated case counts.

## The 2x2 Table

For one drug D and one reaction R, classify every report:

|            | Reaction R | Not R |
|---|---|---|
| Drug D     | **a**      | **b** |
| Not D      | **c**      | **d** |

- **PRR** = [a/(a+b)] / [c/(c+d)]
- **ROR** = (a·d)/(b·c)
- **IC** (BCPNN, log2 information component) ≈ log2( a·(a+b+c+d) / ((a+b)·(a+c)) )
- **EBGM** = Empirical Bayes Geometric Mean — a gamma-Poisson shrinkage of the observed/expected ratio (the MGPS method) that pulls small-count estimates toward 1; report **EB05** (the 5th percentile) as the conservative signal.

Common screening thresholds (screening only, never a verdict): PRR ≥ 2 with χ² ≥ 4 and a ≥ 3; ROR lower 95% CI > 1; IC025 > 0; EB05 ≥ 2.

## Quick Start: Real OpenFDA Count Queries

Base endpoint: `https://api.fda.gov/drug/event.json`. No key needed to try it (240 req/min, 1,000/day per IP; with a free `api_key=`, 240/min and 120,000/day). The `count=<field>.exact` parameter returns a terms histogram; `search=` with `+AND+` filters the population — that's all you need for a 2x2.

```python
import requests

BASE = "https://api.fda.gov/drug/event.json"

def cell_count(search: str | None) -> int:
    """Number of reports matching `search` (via meta.results.total, limit=1)."""
    params = {"limit": 1}
    if search:
        params["search"] = search
    r = requests.get(BASE, params=params, timeout=30)
    if r.status_code == 404:        # OpenFDA returns 404 for an empty result set, not an empty list
        return 0
    r.raise_for_status()
    return r.json()["meta"]["results"]["total"]

# Build the 2x2 for warfarin x "gastrointestinal haemorrhage".
DRUG = 'patient.drug.openfda.generic_name:"warfarin"'
RXN  = 'patient.reaction.reactionmeddrapt.exact:"gastrointestinal haemorrhage"'

a = cell_count(f"{DRUG}+AND+{RXN}")          # drug & reaction
b = cell_count(DRUG) - a                      # drug, not reaction
c = cell_count(RXN) - a                       # reaction, not drug
N = cell_count(None)                          # total reports in FAERS
d = N - a - b - c
```

Compute the metrics from `(a, b, c, d)`:

```python
import math

def prr(a, b, c, d):
    return (a / (a + b)) / (c / (c + d))

def ror(a, b, c, d):
    return (a * d) / (b * c)

def ror_ci(a, b, c, d):
    lnror = math.log((a * d) / (b * c))
    se = math.sqrt(1/a + 1/b + 1/c + 1/d)     # Woolf's method
    lo, hi = math.exp(lnror - 1.96 * se), math.exp(lnror + 1.96 * se)
    return lo, hi

def ic(a, b, c, d):
    n = a + b + c + d
    expected = (a + b) * (a + c) / n
    return math.log2(a / expected) if a and expected else float("nan")

print("PRR", round(prr(a, b, c, d), 2))
print("ROR", round(ror(a, b, c, d), 2), "95% CI", ror_ci(a, b, c, d))
print("IC",  round(ic(a, b, c, d), 2))
```

For **EBGM/EB05**, use a maintained Empirical Bayes implementation (e.g. the `openEBGM` R package or `PhViD` in R) on the same `(a, b, c, d)` rather than hand-rolling the gamma-Poisson MGPS shrinkage — the shrinkage prior is the whole point and easy to get wrong from scratch.

## Workflow

1. **Pick the population.** Decide your denominator — all of FAERS, or a restricted background (e.g. one drug class, one year via `receivedate:[20230101+TO+20231231]`). The choice of c/d defines "expected."
2. **Resolve the drug field.** Prefer `patient.drug.openfda.generic_name` (RxNorm ingredient-normalized) over the free-text `medicinalproduct` to avoid brand-name fragmentation. Restrict to suspect drugs with `patient.drug.drugcharacterization:1` for suspect-only signals.
3. **Use `.exact`** for the reaction field so "injection site reaction" counts as one phrase, not three words: `patient.reaction.reactionmeddrapt.exact`.
4. **Build the 2x2** with the cell counts above. Verify `a + b + c + d == N`.
5. **Compute PRR and ROR with CIs**; add IC025/EB05 for small counts.
6. **Apply thresholds** (e.g. PRR ≥ 2, χ² ≥ 4, a ≥ 3) as a triage filter, never a verdict.
7. **Hand flagged pairs to a safety scientist** for medical review, confounder assessment, and labeling/expectedness checks.

## Edge Cases and Gotchas

- **Disproportionality ≠ causality.** A high PRR reflects reporting patterns, notoriety bias, and indication confounding — not a proven causal link.
- **Small counts break PRR/ROR.** With `a < 3` the ratios are unstable and confidence intervals explode. This is exactly why EBGM/EB05 and IC025 (shrinkage methods) exist — prefer them for rare events.
- **OpenFDA is a sample, not all of FAERS, and is not deduplicated** the way curated FAERS quarterly files are. Use it for screening; reproduce confirmed signals against the official FAERS extracts before anything downstream depends on the exact count.
- **`.exact` is mandatory for counting phrases.** Without it, OpenFDA tokenizes the reaction and your counts are silently wrong.
- **OpenFDA returns HTTP 404 for an empty result set** (not an empty list with a 200) — treat 404 as zero. Respect rate limits and register a free API key for routine runs.
- **MedDRA versioning.** OpenFDA reaction terms are MedDRA Preferred Terms at FDA's coding version. If joining to your own MedDRA-coded cases, align the version — you don't need a MedDRA license to read OpenFDA's already-coded terms, but you do to code your own cases.

## Standards and References

- OpenFDA drug adverse event API: https://open.fda.gov/apis/drug/event/
- OpenFDA query syntax: https://open.fda.gov/apis/query-syntax/
- OpenFDA authentication & rate limits: https://open.fda.gov/apis/authentication/
- Evans et al., PRR for signal generation (*Pharmacoepidemiology and Drug Safety*, 2001)
- Bate et al., BCPNN / Information Component (*European Journal of Clinical Pharmacology*, 1998)
- DuMouchel, Empirical Bayes / MGPS (EBGM)
- CIOMS VIII — Practical Aspects of Signal Detection in Pharmacovigilance
