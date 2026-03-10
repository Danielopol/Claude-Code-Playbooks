# CRM Automation

## Goal
CRM workflow automation for HubSpot, Salesforce, Pipedrive - lead management, deal tracking, and multi-CRM synchronization

## What You Can Do
- Crm
- Hubspot
- Salesforce
- Automation
- Lead management

## Tips
### Data Hygiene

```yaml
data_hygiene_rules:
  - deduplicate: weekly
    method: email_match + company_fuzzy_match
  
  - validate_emails: on_create
    action: remove_invalid
  
  - enrich_missing: daily
    fields: [company, title, linkedin]
  
  - archive_stale: monthly
    criteria: no_activity > 180_days
    action: move_to_archive
```

### Security

```yaml
security_practices:
  - api_keys: rotate_quarterly
  - access_control: role_based
  - audit_log: all_changes
  - pii_handling: encrypt_at_rest
  - gdpr_compliance: consent_tracking
```

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts