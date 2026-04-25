# Epic Hypothesis

Frame epics as testable hypotheses using an if/then structure that articulates the action, target beneficiary, expected outcome, and validation method. Use this to manage uncertainty by making assumptions explicit, defining lightweight experiments ("tiny acts of discovery"), and establishing measurable success criteria before committing to full build.

This is not a requirements spec — it's a hypothesis you're testing, not a feature you're committed to shipping.

## The Framework (Tim Herbig / Lean UX)

**If/Then Hypothesis:**
- **If we** [action or solution on behalf of target persona]
- **for** [target persona]
- **Then we will** [attain a desirable outcome or job-to-be-done]

**Tiny Acts of Discovery Experiments:**
- **We will test our assumption by:**
  - [Experiment 1]
  - [Experiment 2]

**Validation Measures:**
- **We know our hypothesis is valid if within** [timeframe]
- **we observe:**
  - [Quantitative measurable outcome]
  - [Qualitative measurable outcome]

## Why This Works

- **Hypothesis-driven:** Forces you to state what you believe (and could be wrong about)
- **Outcome-focused:** "Then we will" emphasizes user benefit, not feature output
- **Experiment-first:** Encourages lightweight validation before full build
- **Falsifiable:** Clear success criteria make it possible to kill bad ideas early
- **Risk management:** Treats epics as bets, not commitments

## What This Is NOT

- **Not a feature spec:** "Build a dashboard with 5 charts" is a feature, not a hypothesis
- **Not a guaranteed commitment:** Hypotheses can (and should) be invalidated
- **Not output-focused:** "Ship feature X by Q2" misses the point
- **Not experiment-free:** Skip experiments and you're not testing a hypothesis

## Application

### Step 1: Gather Context

Before drafting:
- **Problem understanding:** What user problem does this address?
- **Target persona:** Who benefits?
- **Jobs-to-be-Done:** What outcome are they trying to achieve?
- **Current alternatives:** What do users do today? (competitors, workarounds, nothing)

Missing context? Run discovery interviews or problem validation work first.

### Step 2: Draft the If/Then Hypothesis

```markdown
### If/Then Hypothesis

**If we** [action or solution]
**for** [target persona]
**Then we will** [desirable outcome or JTBD]
```

**Quality checks:**
- **"If we" is specific:** Not "improve the product" but "add one-click Slack notifications when tasks are assigned"
- **"For" is a clear persona:** Not "users" but "remote PMs juggling 3+ distributed teams"
- **"Then we will" is an outcome:** Not "users will have notifications" but "users will respond 50% faster"

**Examples:**
- ✅ "If we add one-click Google Calendar integration for trial users, then we will increase activation rates by 20% within 30 days"
- ✅ "If we provide bulk delete for power users managing 1000+ items, then we will reduce cleanup time by 70%"
- ❌ "If we build a dashboard, then users will use it" (vague, not measurable)

### Step 3: Design Tiny Acts of Discovery Experiments

```markdown
### Tiny Acts of Discovery Experiments

**We will test our assumption by:**
- [Experiment 1: low-cost, fast test]
- [Experiment 2: low-cost, fast test]
```

**Experiment types:**
- **Prototype + user testing:** Clickable prototype, test with 5–10 users
- **Concierge test:** Manually perform the feature for a few users
- **Landing page test:** Describe the feature, measure sign-ups
- **Wizard of Oz test:** Present as automated, do it manually
- **A/B test:** Test lightweight version vs. control

**Quality checks:**
- **Fast:** Days/weeks, not months
- **Cheap:** Prototypes, manual processes, existing tools
- **Falsifiable:** Could prove you *wrong*

### Step 4: Define Validation Measures

```markdown
### Validation Measures

**We know our hypothesis is valid if within** [timeframe]
**we observe:**
- [Quantitative measurable outcome]
- [Qualitative measurable outcome]
```

**Quality checks:**
- **Timeframe:** 2–4 weeks typical, not 6 months
- **Quantitative:** "20% increase in activation" not "more users"
- **Qualitative:** "8 of 10 users say they'd pay" not "users like it"

### Step 5: Run Experiments and Evaluate

- **Validated →** Build user stories, add to roadmap
- **Invalidated →** Kill the epic or pivot
- **Inconclusive →** Run additional experiments or tighten measures

### Step 6: Convert to User Stories (If Validated)

```markdown
### Epic: [Name]

**Stories:**
1. [User Story 1]
2. [User Story 2]
3. [User Story 3]
```

## Common Pitfalls

1. **Hypothesis is a feature, not an outcome** — "If we build a dashboard, we'll have a dashboard." Fix: focus on user outcome.
2. **Skipping experiments** — "We'll test by building the full feature." Fix: prototypes, concierge tests, landing pages.
3. **Vague validation measures** — "Users are happy." Fix: specific falsifiable metrics.
4. **Unrealistic timeframes** — "Within 6 months revenue increases." Fix: 2–4 week cycles on leading indicators.
5. **Treating epics as commitments** — "We told the CEO, so we have to validate." Fix: frame as hypotheses *before* commitments.

## References

- Tim Herbig, *Lean UX Hypothesis Statement*
- Jeff Gothelf & Josh Seiden, *Lean UX* (2013)
- Alberto Savoia, *Pretotype It* (2011)
- Eric Ries, *The Lean Startup* (2011)
