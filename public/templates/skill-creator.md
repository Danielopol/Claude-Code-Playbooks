# Skill Creator

Guide for developing skills that extend Claude's capabilities through specialized knowledge, workflows, and tool integrations.

## What Skills Are

Skills are modular, self-contained packages that extend Claude's capabilities by providing:

- **Specialized Workflows**: Domain-specific procedures and processes
- **Tool Integrations**: Support for file formats and APIs
- **Domain Expertise**: Company-specific or technical knowledge
- **Bundled Resources**: Scripts, references, and asset templates

## Skill Structure

```
skill-name/
├── SKILL.md              # Required: Core skill definition
├── scripts/              # Optional: Executable code
│   └── helper.py
├── references/           # Optional: Documentation for context
│   └── api-docs.md
└── assets/               # Optional: Output templates
    └── template.md
```

### SKILL.md (Required)

The core skill definition with frontmatter metadata:

```markdown
---
name: "Skill Name"
description: "Brief description of what this skill does"
triggers: ["keyword1", "keyword2", "phrase"]
version: "1.0.0"
---

## Purpose
What this skill accomplishes and when it activates.

## Workflow
Step-by-step procedures for using this skill.

## Commands
Available actions and their syntax.

## Examples
Concrete usage examples.
```

## Six-Step Creation Process

### Step 1: Understanding with Examples

Gather concrete use cases:
- What problems does this skill solve?
- What are typical user requests?
- What outputs are expected?
- What edge cases exist?

### Step 2: Planning Contents

Identify necessary components:
- Scripts needed for automation
- Reference documentation for context
- Asset templates for outputs
- Dependencies and requirements

### Step 3: Initializing

Generate template structure:
```bash
python init_skill.py --name "my-skill"
```

Creates directory with SKILL.md template and folder structure.

### Step 4: Editing

Develop SKILL.md and bundle resources:
- Use imperative writing style ("Do X", not "You should do X")
- Keep core procedures in SKILL.md
- Move detailed information to references
- Avoid duplication between files

### Step 5: Packaging

Validate and create distributable:
```bash
python package_skill.py --skill "my-skill"
```

Checks structure, validates metadata, creates zip file.

### Step 6: Iterating

Refine based on real-world testing:
- Test with actual use cases
- Gather feedback on usability
- Identify missing functionality
- Update and re-package

## Key Principles

### Progressive Disclosure

Context management through staged loading:
1. **First**: Load metadata (triggers, name, description)
2. **Then**: Load SKILL.md body when skill activates
3. **Finally**: Load resources as specifically needed

This preserves context efficiency and avoids overwhelming Claude with unnecessary information.

### Avoid Duplication

- Core procedures belong in SKILL.md
- Detailed technical information goes in references
- Never repeat content between files
- Reference files by name, don't copy content

### Imperative Writing Style

Use command form throughout:
- "Create the file" not "You should create the file"
- "Run the script" not "The script should be run"
- Direct, actionable instructions

## Skill Activation

Skills activate based on frontmatter metadata:
- **triggers**: Keywords and phrases that activate the skill
- **name**: Identifier for direct invocation
- **description**: Context for relevance matching

## Example SKILL.md

```markdown
---
name: "Docker Deployment"
description: "Manage Docker container deployments"
triggers: ["docker", "container", "deploy", "dockerfile"]
version: "1.0.0"
---

## Purpose
Assist with Docker container creation, configuration, and deployment workflows.

## Workflow

### Creating Containers
1. Analyze application requirements
2. Generate Dockerfile
3. Build and test locally
4. Push to registry

### Deployment
1. Pull latest image
2. Stop existing container
3. Start new container
4. Verify health checks

## Commands

- `docker:build` - Build container from Dockerfile
- `docker:deploy` - Deploy to target environment
- `docker:logs` - View container logs
- `docker:status` - Check container health

## Examples

"Deploy the API to production"
"Create a Dockerfile for this Node.js app"
"Check the status of the web container"
```

## Best Practices

1. **Start with concrete examples** - Use cases guide design
2. **Keep SKILL.md focused** - Core workflows only
3. **Use references for details** - Technical docs, API specs
4. **Test iteratively** - Real usage reveals gaps
5. **Version your skills** - Track changes over time
6. **Document triggers clearly** - Ensure proper activation
