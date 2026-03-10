# n8n Workflow Builder

## Goal
Automate document workflows with n8n - 7800+ workflow templates

## What You Can Do
- N8n
- Workflow
- Automation
- Integration

## How to Use
1. Describe what you want to accomplish
2. Provide any required input data or files
3. I'll execute the appropriate operations

**Example prompts:**
- "Automate PDF → OCR → Translation → Email workflow"
- "Watch folder for new contracts → Review → Notify Slack"
- "Daily report generation from multiple data sources"
- "Batch document processing with conditional logic"

## Domain Knowledge
### n8n Fundamentals

n8n uses a node-based workflow approach:

```
Trigger → Action → Action → Output
   │         │         │
   └─────────┴─────────┴── Data flows between nodes
```

### Key Node Types

| Type | Examples | Use Case |
|------|----------|----------|
| **Triggers** | Webhook, Schedule, File Watcher | Start workflow |
| **Document** | Read PDF, Write DOCX, OCR | Process files |
| **Transform** | Code, Set, Merge | Manipulate data |
| **Output** | Email, Slack, Google Drive | Deliver results |

### Workflow Example: Contract Review Pipeline

```json
{
  "nodes": [
    {
      "name": "Watch Folder",
      "type": "n8n-nodes-base.localFileTrigger",
      "parameters": {
        "path": "/contracts/incoming",
        "events": ["add"]
      }
    },
    {
      "name": "Extract Text",
      "type": "n8n-nodes-base.readPdf"
    },
    {
      "name": "AI Review",
      "type": "n8n-nodes-base.anthropic",
      "parameters": {
        "model": "claude-sonnet-4-20250514",
        "prompt": "Review this contract for risks..."
      }
    },
    {
      "name": "Save Report",
      "type": "n8n-nodes-base.writeFile"
    },
    {
      "name": "Notify Team",
      "type": "n8n-nodes-base.slack"
    }
  ]
}
```

### Self-Hosting vs Cloud

| Option | Pros | Cons |
|--------|------|------|
| **Self-hosted** | Free, full control, data privacy | Maintenance required |
| **n8n Cloud** | No setup, auto-updates | Costs at scale |

```bash
# Docker quick start
docker run -it --rm \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

## Tips
1. **Start with existing templates, customize as needed**
2. **Use error handling nodes for reliability**
3. **Store credentials securely with n8n's credential manager**
4. **Test workflows with sample data before production**

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts