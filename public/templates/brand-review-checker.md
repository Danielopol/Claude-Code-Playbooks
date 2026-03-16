# Brand Review Checker

Review marketing content against brand voice, style guidelines, and messaging standards. Flag deviations and provide specific improvement suggestions.

## Inputs

1. **Content to review** -- accept content in any of these forms:
   - Pasted directly into the conversation
   - A file path or reference (e.g., Notion page, shared doc)
   - A URL to a published page
   - Multiple pieces for batch review

2. **Brand guidelines source** (determined automatically):
   - If a brand style guide is configured in local settings, use it automatically
   - If not configured, ask: "Do you have a brand style guide or voice guidelines I should review against? You can paste them, share a file, or describe your brand voice. Otherwise, I'll do a general review for clarity, consistency, and professionalism."

## Review Process

### With Brand Guidelines Configured

Evaluate the content against each of these dimensions:

#### Voice and Tone
- Does the content match the defined brand voice attributes?
- Is the tone appropriate for the content type and audience?
- Are there shifts in voice that feel inconsistent?
- Flag specific sentences or phrases that deviate with an explanation of why

#### Terminology and Language
- Are preferred brand terms used correctly?
- Are any "avoid" terms or phrases present?
- Is jargon level appropriate for the target audience?
- Are product names, feature names, and branded terms used correctly (capitalization, formatting)?

#### Messaging Pillars
- Does the content align with defined messaging pillars or value propositions?
- Are claims consistent with approved messaging?
- Is the content reinforcing or contradicting brand positioning?

#### Style Guide Compliance
- Grammar and punctuation per style guide (e.g., Oxford comma, title case vs. sentence case)
- Formatting conventions (headers, lists, emphasis)
- Number formatting, date formatting
- Acronym usage (defined on first use?)

### Without Brand Guidelines (Generic Review)

Evaluate the content for:

#### Clarity
- Is the main message clear within the first paragraph?
- Are sentences concise and easy to understand?
- Is the structure logical and easy to follow?

#### Consistency
- Is the tone consistent throughout?
- Are terms used consistently (no switching between synonyms)?
- Is formatting consistent (headers, lists, capitalization)?

#### Professionalism
- Is the content free of typos, grammatical errors, and awkward phrasing?
- Is the tone appropriate for the intended audience?
- Are claims supported or substantiated?

### Legal and Compliance Flags (Always Checked)

Regardless of whether brand guidelines are configured, flag:
- **Unsubstantiated claims** -- superlatives ("best", "fastest", "only") without evidence
- **Missing disclaimers** -- financial claims, health claims, or guarantees that may need legal disclaimers
- **Comparative claims** -- comparisons to competitors that could be challenged
- **Regulatory language** -- content that may need compliance review
- **Testimonial issues** -- quotes or endorsements without attribution or disclosure
- **Copyright concerns** -- content that appears to be closely paraphrased from other sources

## Brand Voice Reference

### Brand Voice Documentation Framework

A complete brand voice document should cover:

1. **Brand Personality** -- Define the brand as if it were a person
2. **Voice Attributes** -- 3-5 attributes that define how the brand communicates, each with what it means, what it does NOT mean, and an example
3. **Audience Awareness** -- Who the brand is speaking to, their expertise level, and how they expect to be addressed
4. **Core Messaging Pillars** -- 3-5 key themes the brand consistently communicates
5. **Tone Spectrum** -- How the voice adapts across contexts while remaining recognizably the same brand
6. **Style Rules** -- Specific grammar, formatting, and language rules
7. **Terminology** -- Preferred and avoided terms

### Voice Attribute Spectrums

| Spectrum | One End | Other End |
|----------|---------|-----------|
| Formality | Formal, institutional | Casual, conversational |
| Authority | Expert, authoritative | Peer-level, collaborative |
| Emotion | Warm, empathetic | Direct, matter-of-fact |
| Complexity | Technical, precise | Simple, accessible |
| Energy | Bold, energetic | Calm, measured |
| Humor | Playful, witty | Serious, earnest |
| Innovation | Cutting-edge, forward-looking | Established, proven |

### Tone Adaptation Across Channels

| Channel | Tone Adaptation | Example |
|---------|----------------|---------|
| Blog | Informative, conversational, educational | "Let's walk through how this works and why it matters for your team." |
| Social media (LinkedIn) | Professional, thought-provoking, concise | "Three things we learned from running 50 campaigns this quarter." |
| Social media (Twitter/X) | Punchy, direct, sometimes witty | "Your landing page has 3 seconds. Make them count." |
| Email marketing | Personal, helpful, action-oriented | "We put together something we think you'll find useful." |
| Sales collateral | Confident, benefit-driven, specific | "Teams using our platform reduce reporting time by 40%." |
| Support/Help docs | Clear, patient, step-by-step | "If you see this error, here's how to fix it." |
| Press release | Formal, factual, newsworthy | "The company today announced the launch of..." |
| Error messages | Empathetic, helpful, blame-free | "Something went wrong on our end. We're looking into it." |

### Style Guide Enforcement

#### Grammar and Mechanics

| Rule | Options | Example |
|------|---------|---------|
| Oxford comma | Yes / No | "fast, reliable, and secure" vs. "fast, reliable and secure" |
| Sentence case vs. title case | Sentence / Title | "How to get started" vs. "How to Get Started" |
| Contractions | Use / Avoid | "we're" vs. "we are" |
| Em dash spacing | No spaces / Spaces | "this--and more" vs. "this -- and more" |
| Numbers | Spell out 1-9 / Always numerals | "five features" vs. "5 features" |

### Terminology Management

#### Inclusive Language
- Use gender-neutral language (they/them for unknown individuals)
- Avoid ableist language
- Use person-first language where appropriate
- Avoid culturally specific idioms that may not translate
- Use "simple" or "straightforward" instead of "easy"

## Output Format

### Summary
- Overall assessment: how well the content aligns with brand standards
- 1-2 sentence summary of the biggest strengths
- 1-2 sentence summary of the most important improvements

### Detailed Findings

| Issue | Location | Severity | Suggestion |
|-------|----------|----------|------------|

Where severity is:
- **High** -- contradicts brand voice, contains compliance risk, or significantly undermines messaging
- **Medium** -- inconsistent with guidelines but not damaging
- **Low** -- minor style or preference issue

### Revised Sections

For the top 3-5 highest-severity issues, provide a before/after showing the original text and a suggested revision.

### Legal/Compliance Flags

List any legal or compliance concerns separately with recommended actions.
