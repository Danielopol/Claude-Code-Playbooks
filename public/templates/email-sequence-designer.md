# Email Sequence Designer

Design and draft complete email sequences with full copy, timing, branching logic, and performance benchmarks for any lifecycle or campaign use case.

## Inputs

Gather the following from the user. If not provided, ask before proceeding:

1. **Sequence type** -- one of:
   - Onboarding
   - Lead nurture
   - Re-engagement
   - Product launch
   - Event follow-up
   - Upgrade/upsell
   - Win-back
   - Educational drip

2. **Goal** -- what the sequence should achieve (e.g., activate new users, convert leads to customers, reduce churn, drive event attendance)

3. **Audience** -- who receives this sequence, what stage they are at, and any relevant segmentation details

4. **Number of emails** (optional) -- if not specified, recommend a count based on the sequence type

5. **Timing/cadence preferences** (optional) -- desired spacing between emails

6. **Brand voice** -- if configured in local settings, apply automatically. If not, ask for guidelines or use a clear, conversational professional tone.

7. **Additional context** (optional): specific offers, CTAs, landing pages, content assets, product features, competitor differentiators

## Process

### 1. Sequence Strategy

Before drafting any emails, define the overall sequence architecture:

- **Narrative arc** -- what story does this sequence tell across all emails?
- **Journey mapping** -- map each email to a stage of the buyer or user journey
- **Escalation logic** -- how does the intensity, urgency, or value of each email build?
- **Success definition** -- what specific action signals the sequence has done its job?

### 2. Individual Email Design

For each email in the sequence, produce:

#### Subject Line
- Provide 2-3 options per email
- Vary approaches: curiosity, benefit-driven, urgency, personalization, question-based
- Keep under 50 characters where possible

#### Preview Text
- 40-90 characters that complement (not repeat) the subject line

#### Email Purpose
- One sentence explaining why this email exists

#### Body Copy
- Full draft ready to use
- Clear hierarchy: hook, body, CTA
- Short paragraphs (2-3 sentences max)
- Personalization tokens where relevant

#### Primary CTA
- Button text and destination
- One primary CTA per email

#### Timing
- Days after the trigger event or after the previous email

#### Segment/Condition Notes
- Who receives this email vs. who skips it

### 3. Sequence Logic

Define the flow control:

- **Branching conditions** -- alternate paths based on engagement
- **Exit conditions** -- when a recipient converts, remove them from the sequence
- **Re-entry rules** -- can someone re-enter the sequence? Under what conditions?
- **Suppression rules** -- do not send if the recipient is in another active sequence, has unsubscribed, or has contacted support recently

### 4. Performance Benchmarks

| Metric | Onboarding | Lead Nurture | Re-engagement | Win-back |
|--------|-----------|--------------|---------------|----------|
| Open rate | 50-70% | 20-30% | 15-25% | 15-20% |
| Click-through rate | 10-20% | 3-7% | 2-5% | 2-4% |
| Conversion rate | 15-30% | 2-5% | 3-8% | 1-3% |
| Unsubscribe rate | <0.5% | <0.5% | 1-2% | 1-3% |

## Sequence Type Templates

**Onboarding (5-7 emails over 14-21 days):**
Welcome and set expectations -- Quick win to demonstrate value -- Core feature deep dive -- Advanced feature or integration -- Social proof and community -- Check-in and feedback request -- Upgrade prompt or next steps

**Lead Nurture (4-6 emails over 3-4 weeks):**
Value-first educational content -- Pain point identification -- Solution positioning with proof -- Social proof and results -- Soft CTA (trial, demo, resource) -- Direct CTA (buy, book, sign up)

**Re-engagement (3-4 emails over 10-14 days):**
"We miss you" with a compelling reason to return -- Value reminder highlighting what they are missing -- Incentive or exclusive offer -- Last chance with clear deadline

**Win-back (3-5 emails over 30 days):**
Friendly check-in asking what went wrong -- What is new since they left -- Special offer or incentive to return -- Feedback request -- Final goodbye with door open

**Product Launch (4-6 emails over 2-3 weeks):**
Teaser or pre-announcement -- Launch announcement with full details -- Feature spotlight or use case -- Social proof and early results -- Limited-time offer or bonus -- Last chance or reminder

**Event Follow-up (3-4 emails over 7-10 days):**
Thank you with key takeaways or recordings -- Resource roundup from the event -- Related offer or next step -- Feedback survey

**Upgrade/Upsell (3-5 emails over 2-3 weeks):**
Usage milestone or success celebration -- Feature gap or limitation they are hitting -- Upgrade benefits with proof -- Limited-time incentive -- Direct comparison of plans

**Educational Drip (5-8 emails over 4-6 weeks):**
Introduction and what they will learn -- Lesson 1: foundational concept -- Lesson 2: intermediate concept -- Lesson 3: advanced concept -- Practical application or exercise -- Resource roundup -- Graduation and next steps

## Output

### Sequence Overview Table

| # | Subject Line | Purpose | Timing | Primary CTA | Condition |
|---|-------------|---------|--------|-------------|-----------|

### Full Email Drafts
Each email with subject line options, preview text, purpose, body copy, CTA, timing, and segment notes.

### Sequence Flow Diagram
A text-based diagram showing the email flow, branching paths, and exit points:

```
[Trigger] --> Email 1 (Day 0)
                |
          Opened? --Yes--> Email 2 (Day 3)
                |              |
                No        Clicked CTA? --Yes--> [EXIT: Converted]
                |              |
                v              No
          Email 1b (Day 2)     |
                |              v
                +--------> Email 3 (Day 7)
                               |
                               v
                          Email 4 (Day 10)
                               |
                          [EXIT: Sequence complete]
```

### Branching Logic Notes
Summary of all conditions, exits, and suppressions.

### A/B Test Suggestions
- 2-3 recommended A/B tests (subject lines, CTA text, send time, email length)
- What to test, how to split, and how to measure the winner

### Metrics to Track
- Primary conversion metric
- Per-email metrics: open rate, CTR, unsubscribe rate
- Sequence-level metrics: overall conversion rate, time to conversion, drop-off points
