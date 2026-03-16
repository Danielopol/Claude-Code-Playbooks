# Legal Response Generator

Generate a response to a common legal inquiry using configured templates, with built-in escalation checks for situations that should not use a templated reply.

**Important**: This workflow assists with legal processes but does not provide legal advice. Generated responses should be reviewed by qualified legal professionals before being sent, especially for regulated communications.

## Supported Inquiry Types

- `dsr` or `data-subject-request` -- Data subject access/deletion/correction requests
- `hold` or `discovery-hold` -- Litigation hold notices
- `vendor` or `vendor-question` -- Vendor legal questions
- `nda` or `nda-request` -- NDA requests from business teams
- `privacy` or `privacy-inquiry` -- Privacy-related questions
- `subpoena` -- Subpoena or legal process responses
- `insurance` -- Insurance claim notifications
- `custom` -- Use a custom template

If no inquiry type is provided, ask the user what type of response they need and show available categories.

## Workflow

### Step 1: Identify Inquiry Type

Accept the inquiry type from the user. If the type is ambiguous, show available categories and ask for clarification.

### Step 2: Load Template

Look for templates in local settings (e.g., `legal.local.md` or a templates directory).

**If templates are configured:**
- Load the appropriate template for the inquiry type
- Identify required variables (recipient name, dates, specific details)

**If no templates are configured:**
- Inform the user that no templates were found for this inquiry type
- Offer to help create a template (see Template Creation Guide below)
- Provide a reasonable default response structure based on the inquiry type

### Step 3: Check Escalation Triggers

Before generating any response, evaluate whether this situation has characteristics that should NOT use a templated response.

#### Universal Escalation Triggers (Apply to All Categories)
- The matter involves potential litigation or regulatory investigation
- The inquiry is from a regulator, government agency, or law enforcement
- The response could create a binding legal commitment or waiver
- The matter involves potential criminal liability
- Media attention is involved or likely
- The situation is unprecedented (no prior handling by the team)
- Multiple jurisdictions are involved with conflicting requirements
- The matter involves executive leadership or board members

#### Data Subject Request Escalation Triggers
- Request involves a minor's data, or is from/on behalf of a minor
- Request is from a regulatory authority (not an individual)
- Request involves data that is subject to a litigation hold
- Requester is a current or former employee with an active dispute
- Request scope is unusually broad or appears to be a fishing expedition
- Request involves special category data (health, biometric, genetic)

#### Discovery Hold Escalation Triggers
- The matter involves potential criminal liability
- The preservation scope is unclear, disputed, or potentially overbroad
- Prior holds for the same or related matter exist
- The hold may affect ongoing business operations significantly
- Hold conflicts with regulatory deletion requirements

#### Vendor Question Escalation Triggers
- The question involves a dispute or potential breach
- The vendor is threatening litigation or termination
- The question involves regulatory compliance (not just contract terms)
- Response could affect ongoing negotiation

#### NDA Request Escalation Triggers
- The counterparty is a competitor
- The NDA involves government classified information
- The business context suggests the NDA is for a potential M&A transaction
- The request involves unusual subject matter (AI training data, biometric data, etc.)

#### Subpoena / Legal Process Escalation Triggers
- **ALWAYS requires counsel review** (templates are starting points only)
- Privilege issues identified
- Third-party data involved
- Cross-border production issues
- Unreasonable timeline

**When an escalation trigger is detected:**
1. **Stop**: Do not generate a templated response
2. **Alert**: Inform the user that an escalation trigger has been detected
3. **Explain**: Describe which trigger was detected and why it matters
4. **Recommend**: Suggest the appropriate escalation path
5. **Offer**: Provide a draft for counsel review (clearly marked as "DRAFT - FOR COUNSEL REVIEW ONLY")

### Step 4: Gather Specific Details

Prompt the user for the details needed to customize the response:

**Data Subject Request:**
- Requester name and contact information
- Type of request (access, deletion, correction, portability, opt-out)
- What data is involved
- Applicable regulation (GDPR, CCPA, CPRA, other)
- Response deadline

**Discovery Hold:**
- Matter name and reference number
- Custodians (who needs to preserve)
- Scope of preservation (date range, data types, systems)
- Outside counsel contact
- Effective date

**Vendor Question:**
- Vendor name
- Reference agreement (if applicable)
- Specific question being addressed
- Relevant contract provisions

**NDA Request:**
- Requesting business team and contact
- Counterparty name
- Purpose of the NDA
- Mutual or unilateral
- Any special requirements

### Step 5: Generate Response

Populate the template with the gathered details. Ensure the response:
- Uses appropriate tone (professional, clear, not overly legalistic for business audiences)
- Includes all required legal elements for the response type
- References specific dates, deadlines, and obligations
- Provides clear next steps for the recipient
- Includes appropriate disclaimers or caveats

Present the draft response to the user for review before sending.

## Response Categories

### 1. Data Subject Requests (DSRs)

**Sub-categories**: Acknowledgment, identity verification, fulfillment response, partial denial, full denial, extension notification

**Key template elements**:
- Reference to applicable regulation (GDPR, CCPA, etc.)
- Specific timeline for response
- Identity verification requirements
- Rights of the data subject (including right to complain to supervisory authority)

### 2. Discovery Holds (Litigation Holds)

**Sub-categories**: Initial hold notice, hold reminder, hold modification, hold release

**Key template elements**:
- Matter name and reference number
- Clear preservation obligations
- Scope of preservation (date range, data types, systems)
- Prohibition on spoliation
- Acknowledgment requirement

### 3. Privacy Inquiries

**Sub-categories**: Cookie/tracking inquiry, privacy policy questions, data sharing inquiries, children's data inquiries, cross-border transfer questions

### 4. Vendor Legal Questions

**Sub-categories**: Contract status inquiry, amendment request, compliance certification, audit request, insurance certificate requests

### 5. NDA Requests

**Sub-categories**: Sending standard form NDA, accepting counterparty NDA, declining NDA request, NDA renewal or extension

### 6. Subpoena / Legal Process

**Sub-categories**: Acknowledgment of receipt, objection letter, request for extension, compliance cover letter

**Critical note**: Subpoena responses almost always require individualized counsel review. Templates serve as starting frameworks, not final responses.

### 7. Insurance Notifications

**Sub-categories**: Initial claim notification, supplemental information, reservation of rights response

## Template Creation Guide

When creating new templates, include:

1. **Category**: The type of inquiry the template addresses
2. **Template name**: A descriptive identifier
3. **Use case**: When this template is appropriate
4. **Escalation triggers**: When this template should NOT be used
5. **Required variables**: Information that must be customized for each use
6. **Template body**: The response text with variable placeholders
7. **Follow-up actions**: Standard steps after sending the response
8. **Last reviewed date**: When the template was last verified for accuracy

## Output Format

```
## Generated Response: [Inquiry Type]

**To**: [recipient]
**Subject**: [subject line]

---

[Response body]

---

### Escalation Check
[Confirmation that no escalation triggers were detected, OR flagged triggers with recommendations]

### Follow-Up Actions
1. [Post-send actions]
2. [Calendar reminders to set]
3. [Tracking or logging requirements]
```

## Notes

- Always present the draft response for user review before suggesting it be sent
- Track response deadlines and offer to set calendar reminders
- For regulated responses (DSRs, subpoenas), always note the applicable deadline and regulatory requirements
- Templates should be living documents; suggest updates when the user modifies a templated response
