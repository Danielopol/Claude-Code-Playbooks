# Skill Share

Create new Claude skills with proper structure and metadata, then automatically distribute them to team Slack channels via Rube integration.

## Purpose

Automate the skill development pipeline:
- Standardized skill creation
- Automatic validation
- Team distribution via Slack
- Consistent structure enforcement

## Requirements

- **Slack workspace**: Connected for notifications
- **Rube integration**: Configured for Slack messaging
- **Python 3.7+**: For skill creation scripts
- **Write permissions**: Directory access for skill files
- **Configured Slack channel**: Destination for announcements

## Skill Creation Pipeline

### Stage 1: Initialization

Provide skill details:
- Skill name (hyphenated format)
- Description
- Trigger keywords
- Purpose and functionality

### Stage 2: Creation

Build directory structure:
```
skill-name/
├── SKILL.md          # Core skill definition
├── scripts/          # Executable code
├── references/       # Documentation
└── assets/           # Templates and outputs
```

### Stage 3: Validation

Check before distribution:
- SKILL.md format compliance
- Required metadata fields present
- Naming convention (hyphenated)
- Directory structure complete

### Stage 4: Packaging

Prepare for distribution:
- Bundle all files
- Generate metadata summary
- Create shareable format
- Prepare file links

### Stage 5: Notification

Post to Slack channel:
- Skill name and description
- Key metadata
- Direct file links
- Usage instructions

## SKILL.md Structure

```markdown
---
name: skill-name
description: What this skill does
triggers: ["keyword1", "keyword2"]
version: 1.0.0
author: Your Name
---

## Purpose
Brief explanation of skill functionality.

## Workflow
Step-by-step procedures for using this skill.

## Commands
Available actions and their syntax.

## Examples
Concrete usage examples.
```

## Naming Convention

Use hyphenated lowercase names:
- ✓ `code-review-helper`
- ✓ `deploy-automation`
- ✗ `codeReviewHelper`
- ✗ `Code_Review_Helper`

## Required Metadata

All skills must include:
- `name`: Hyphenated skill identifier
- `description`: Clear explanation of purpose
- `triggers`: Keywords that activate the skill
- `version`: Semantic version number

## Validation Checks

Before distribution, validate:

1. **Format Compliance**
   - Valid YAML frontmatter
   - Markdown body present
   - No syntax errors

2. **Required Fields**
   - All metadata fields present
   - Non-empty values
   - Valid data types

3. **Naming Standards**
   - Hyphenated format
   - Lowercase letters
   - No special characters

4. **Structure**
   - SKILL.md exists
   - Subdirectories organized
   - No orphan files

## Slack Notification Format

```
🆕 New Skill Available: skill-name

📝 Description: What this skill does

🏷️ Triggers: keyword1, keyword2

📁 Files:
• SKILL.md - Core definition
• scripts/ - Automation code
• references/ - Documentation

🔗 Access: [Direct link to skill directory]

Created by: Author Name
Version: 1.0.0
```

## Workflow Example

```
User: "Create a skill for automated code reviews and share to #engineering"

1. Initialize
   - Name: code-review-automation
   - Description: Automated code review workflow
   - Triggers: ["review", "code review", "PR review"]

2. Create Structure
   - Generate SKILL.md with metadata
   - Create scripts/ directory
   - Create references/ directory
   - Create assets/ directory

3. Validate
   - Check SKILL.md format ✓
   - Verify required fields ✓
   - Confirm naming convention ✓

4. Package
   - Bundle skill files
   - Generate summary

5. Notify
   - Post to #engineering
   - Include file links
   - Share usage instructions
```

## Best Practices

1. **Complete metadata**: All fields required for distribution
2. **Use hyphenated names**: Consistent naming convention
3. **Test locally first**: Validate before sharing
4. **Clear descriptions**: Help team understand the skill
5. **Include examples**: Show how to use the skill
6. **Version properly**: Use semantic versioning

## Troubleshooting

### Validation Failures
- Check SKILL.md syntax
- Verify all required fields
- Confirm naming convention

### Slack Notification Issues
- Verify Rube connection
- Check channel permissions
- Confirm channel name

### Directory Errors
- Check write permissions
- Verify parent directory exists
- Confirm no name conflicts
