# Vendor Agreement Checker

Check the status of existing agreements with a vendor across all connected systems. Provides a consolidated view of the legal relationship.

**Important**: This workflow assists with legal processes but does not provide legal advice. Agreement status reports should be verified against original documents by qualified legal professionals.

## Usage

Provide a vendor name to check. The assistant handles common variations:
- Full legal name vs. trade name (e.g., "Alphabet Inc." vs. "Google")
- Abbreviations (e.g., "AWS" vs. "Amazon Web Services")
- Parent/subsidiary relationships

## Workflow

### Step 1: Identify the Vendor

Accept the vendor name from the user. Ask for clarification if the vendor name is ambiguous.

### Step 2: Search Connected Systems

Search for the vendor across all available connected systems, in priority order:

#### CLM (Contract Lifecycle Management) -- If Connected
- Active agreements
- Expired agreements (last 3 years)
- Agreements in negotiation or pending signature
- Amendments and addenda

#### CRM -- If Connected
- Account status and relationship type
- Associated opportunities or deals
- Contact information for vendor's legal/contracts team

#### Email -- If Connected
- Contract-related emails (last 6 months)
- NDA or agreement attachments
- Negotiation threads

#### Documents (e.g., Box, SharePoint) -- If Connected
- Executed agreements
- Redlines and drafts
- Due diligence materials

#### Chat (e.g., Slack, Teams) -- If Connected
- Contract requests involving this vendor
- Legal questions about the vendor
- Relevant team discussions (last 3 months)

### Step 3: Compile Agreement Status

For each agreement found, report:

| Field | Details |
|-------|---------|
| **Agreement Type** | NDA, MSA, SOW, DPA, SLA, License Agreement, etc. |
| **Status** | Active, Expired, In Negotiation, Pending Signature |
| **Effective Date** | When the agreement started |
| **Expiration Date** | When it expires or renews |
| **Auto-Renewal** | Yes/No, with renewal term and notice period |
| **Key Terms** | Liability cap, governing law, termination provisions |
| **Amendments** | Any amendments or addenda on file |

### Step 4: Gap Analysis

Identify what agreements exist and what might be missing:

```
## Agreement Coverage

[CHECK] NDA -- [status]
[CHECK/MISSING] MSA -- [status or "Not found"]
[CHECK/MISSING] DPA -- [status or "Not found"]
[CHECK/MISSING] SOW(s) -- [status or "Not found"]
[CHECK/MISSING] SLA -- [status or "Not found"]
[CHECK/MISSING] Insurance Certificate -- [status or "Not found"]
```

Flag any gaps that may be needed based on the relationship type (e.g., if there is an MSA but no DPA and the vendor handles personal data).

### Step 5: Generate Report

```
## Vendor Agreement Status: [Vendor Name]

**Search Date**: [today's date]
**Sources Checked**: [list of systems searched]
**Sources Unavailable**: [list of systems not connected, if any]

## Relationship Overview

**Vendor**: [full legal name]
**Relationship Type**: [vendor/partner/customer/etc.]
**CRM Status**: [if available]

## Agreement Summary

### [Agreement Type 1] -- [Status]
- **Effective**: [date]
- **Expires**: [date] ([auto-renews / does not auto-renew])
- **Key Terms**: [summary of material terms]
- **Location**: [where the executed copy is stored]

## Gap Analysis

[What's in place vs. what may be needed]

## Upcoming Actions

- [Any approaching expirations or renewal deadlines]
- [Required agreements not yet in place]
- [Amendments or updates that may be needed]

## Notes

[Any relevant context from email/chat searches]
```

### Step 6: Handle Missing Sources

If key systems are not connected:
- **No CLM**: Note the gap. Suggest the user check their CLM manually.
- **No CRM**: Skip CRM context. Note the gap.
- **No Email**: Suggest the user search their email for "[vendor name] agreement" or "[vendor name] NDA".

Always clearly state which sources were checked and which were not.

## Notes

- If no agreements are found in any connected system, report that clearly and ask the user if they have agreements stored elsewhere
- For vendor groups (e.g., a vendor with multiple subsidiaries), ask whether the user wants to check a specific entity or the entire group
- Flag any agreements that are expired but may still have surviving obligations (confidentiality, indemnification, etc.)
- If an agreement is approaching expiration (within 90 days), highlight this prominently
