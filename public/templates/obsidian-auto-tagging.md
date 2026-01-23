# Obsidian Auto-Tagger

## Goal
Analyze markdown notes and add relevant YAML frontmatter tags.

## Tag Categories
- Topics: #project, #idea, #meeting, #daily, #weekly, #reference
- Status: #todo, #in-progress, #done, #archived
- Priority: #urgent, #important, #someday
- Areas: #work, #personal, #health, #finance, #learning

## Rules
1. Read each .md file in the vault
2. Analyze the content for themes and topics
3. Add a YAML frontmatter block if missing
4. Add 2-5 relevant tags based on content
5. Don't remove existing tags
6. Don't modify the note content, only frontmatter

## Frontmatter Format
---
tags:
  - tag1
  - tag2
---

## Skip
- Files in .obsidian/ folder
- Files that already have 3+ tags
- Template files in Templates/
