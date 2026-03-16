# Compliance Review Checker

Run a compliance check on a proposed action, product feature, marketing campaign, or business initiative.

**Important**: This workflow assists with legal processes but does not provide legal advice. Compliance assessments should be reviewed by qualified legal professionals. Regulatory requirements change frequently; always verify current requirements with authoritative sources.

## Usage

Describe what you're planning to do. Examples:
- "We want to launch a referral program with cash rewards"
- "We're adding biometric authentication to our mobile app"
- "We need to process EU customer data in our US data center"
- "Marketing wants to use customer testimonials in ads"

## Output Format

```markdown
## Compliance Check: [Initiative]

### Summary
[Quick assessment: Proceed / Proceed with conditions / Requires further review]

### Applicable Regulations and Policies
| Regulation/Policy | Relevance | Key Requirements |
|-------------------|-----------|--------------------|
| [GDPR / CCPA / HIPAA / etc.] | [How it applies] | [What you need to do] |

### Requirements
| # | Requirement | Status | Action Needed |
|---|-------------|--------|---------------|
| 1 | [Requirement] | [Met / Not Met / Unknown] | [What to do] |

### Risk Areas
| Risk | Severity | Mitigation |
|------|----------|------------|
| [Risk] | [High/Med/Low] | [How to address] |

### Recommended Actions
1. [Most important action]
2. [Second priority]
3. [Third priority]

### Approvals Needed
| Approver | Why | Status |
|----------|-----|--------|
| [Person/Team] | [Reason] | [Pending] |

### Further Review Recommended
[Areas where outside counsel or specialist review is advised]
```

## Privacy Regulation Overview

### GDPR (General Data Protection Regulation)

**Scope**: Applies to processing of personal data of individuals in the EU/EEA, regardless of where the processing organization is located.

**Key Obligations for In-House Legal Teams**:
- **Lawful basis**: Identify and document lawful basis for each processing activity (consent, contract, legitimate interest, legal obligation, vital interest, public task)
- **Data subject rights**: Respond to access, rectification, erasure, portability, restriction, and objection requests within 30 days (extendable by 60 days for complex requests)
- **Data protection impact assessments (DPIAs)**: Required for processing likely to result in high risk to individuals
- **Breach notification**: Notify supervisory authority within 72 hours of becoming aware of a personal data breach; notify affected individuals without undue delay if high risk
- **Records of processing**: Maintain Article 30 records of processing activities
- **International transfers**: Ensure appropriate safeguards for transfers outside EEA (SCCs, adequacy decisions, BCRs)
- **DPO requirement**: Appoint a Data Protection Officer if required

### CCPA / CPRA (California Consumer Privacy Act / California Privacy Rights Act)

**Scope**: Applies to businesses that collect personal information of California residents and meet revenue, data volume, or data sale thresholds.

**Key Obligations**:
- **Right to know**: Consumers can request disclosure of personal information collected, used, and shared
- **Right to delete**: Consumers can request deletion of their personal information
- **Right to opt-out**: Consumers can opt out of the sale or sharing of personal information
- **Right to correct**: Consumers can request correction of inaccurate personal information (CPRA addition)
- **Right to limit use of sensitive personal information**: Consumers can limit use of sensitive PI to specific purposes (CPRA addition)
- **Non-discrimination**: Cannot discriminate against consumers who exercise their rights
- **Privacy notice**: Must provide a privacy notice at or before collection
- **Service provider agreements**: Contracts with service providers must restrict use of PI to the specified business purpose

**Response Timelines**:
- Acknowledge receipt within 10 business days
- Respond substantively within 45 calendar days (extendable by 45 days with notice)

### Other Key Regulations to Monitor

| Regulation | Jurisdiction | Key Differentiators |
|---|---|---|
| **LGPD** (Brazil) | Brazil | Similar to GDPR; requires DPO appointment; ANPD enforcement |
| **POPIA** (South Africa) | South Africa | Information Regulator oversight; required registration of processing |
| **PIPEDA** (Canada) | Canada (federal) | Consent-based framework; OPC oversight |
| **PDPA** (Singapore) | Singapore | Do Not Call registry; mandatory breach notification |
| **Privacy Act** (Australia) | Australia | Australian Privacy Principles (APPs); notifiable data breaches scheme |
| **PIPL** (China) | China | Strict cross-border transfer rules; data localization requirements |
| **UK GDPR** | United Kingdom | Post-Brexit UK version; ICO oversight |

## DPA Review Checklist

When reviewing a Data Processing Agreement or Data Processing Addendum, verify the following:

### Required Elements (GDPR Article 28)

- [ ] **Subject matter and duration**: Clearly defined scope and term of processing
- [ ] **Nature and purpose**: Specific description of what processing will occur and why
- [ ] **Type of personal data**: Categories of personal data being processed
- [ ] **Categories of data subjects**: Whose personal data is being processed
- [ ] **Controller obligations and rights**: Controller's instructions and oversight rights

### Processor Obligations

- [ ] **Process only on documented instructions**
- [ ] **Confidentiality**: Personnel authorized to process have committed to confidentiality
- [ ] **Security measures**: Appropriate technical and organizational measures described
- [ ] **Sub-processor requirements**: Written authorization, notification of changes, same obligations
- [ ] **Data subject rights assistance**
- [ ] **Security and breach assistance**
- [ ] **Deletion or return**: On termination, delete or return all personal data
- [ ] **Audit rights**: Controller has right to conduct audits and inspections
- [ ] **Breach notification**: Processor will notify controller without undue delay

### International Transfers

- [ ] **Transfer mechanism identified**: SCCs, adequacy decision, BCRs, or other valid mechanism
- [ ] **SCCs version**: Using current EU SCCs (June 2021 version) if applicable
- [ ] **Correct module**: Appropriate SCC module selected (C2P, C2C, P2P, P2C)
- [ ] **Transfer impact assessment**: Completed if transferring to countries without adequacy decisions
- [ ] **UK addendum**: If UK personal data is in scope, UK International Data Transfer Addendum included

### Common DPA Issues

| Issue | Risk | Standard Position |
|---|---|---|
| Blanket sub-processor authorization without notification | Loss of control over processing chain | Require notification with right to object |
| Breach notification timeline > 72 hours | May prevent timely regulatory notification | Require notification within 24-48 hours |
| No audit rights | Cannot verify compliance | Accept SOC 2 Type II + right to audit upon cause |
| Data deletion timeline not specified | Data retained indefinitely | Require deletion within 30-90 days of termination |
| Outdated SCCs | Invalid transfer mechanism | Require current EU SCCs (2021 version) |

## Data Subject Request Handling

### Request Intake

When a data subject request is received:

1. **Identify the request type**: Access, rectification, erasure, restriction, portability, objection, opt-out, limit use
2. **Identify applicable regulation(s)**: Where is the data subject located? Which laws apply?
3. **Verify identity**: Confirm the requester is who they claim to be
4. **Log the request**: Date received, request type, applicable regulation, response deadline, assigned handler

### Response Timelines

| Regulation | Initial Acknowledgment | Substantive Response | Extension |
|---|---|---|---|
| GDPR | Best practice: promptly | 30 days | +60 days (with notice) |
| CCPA/CPRA | 10 business days | 45 calendar days | +45 days (with notice) |
| UK GDPR | Best practice: promptly | 30 days | +60 days (with notice) |
| LGPD | Not specified | 15 days | Limited extensions |

## Tips

1. **Be specific** -- "We want to email all our users" is better than "marketing campaign."
2. **Include the geography** -- Compliance requirements vary by jurisdiction.
3. **Mention the data** -- What personal data is involved? This drives most compliance requirements.
