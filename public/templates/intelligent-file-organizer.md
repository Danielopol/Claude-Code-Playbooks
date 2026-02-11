# Intelligent File Organizer

Help users maintain organized file structures by analyzing folders, identifying duplicates, suggesting logical arrangements, and automating cleanup tasks.

## Core Capabilities

- **Structure Analysis**: Review folders and files to understand what exists
- **Duplicate Detection**: Identify redundant files consuming storage space
- **Organization Suggestions**: Propose logical folder hierarchies based on content type and purpose
- **Automated Cleanup**: Move and rename files with user approval
- **Context-Aware Decisions**: Use file types, dates, and naming patterns to determine placement

## Workflow

### Step 1: Clarify Scope and Constraints

Before starting, ask:
- Which directory should I organize?
- Are there files that should NOT be moved?
- Should I look for duplicates?
- What organization style do you prefer?

### Step 2: Analyze Current Structure

Scan the target directory to understand:
- Total file count and size
- File type distribution
- Folder depth and complexity
- Naming patterns
- Date ranges

### Step 3: Identify Organization Patterns

Determine the best organization approach:

**By Type**
```
Documents/
├── PDFs/
├── Word/
├── Spreadsheets/
└── Text/

Images/
├── Photos/
├── Screenshots/
└── Graphics/

Videos/
Audio/
Archives/
```

**By Purpose**
```
Work/
├── Active Projects/
├── Completed/
└── Reference/

Personal/
├── Finance/
├── Health/
└── Hobbies/
```

**By Time**
```
2024/
├── Q1/
├── Q2/
├── Q3/
└── Q4/

2023/
Archive/
```

### Step 4: Search for Duplicates

When requested, identify duplicates by:
- File hash comparison (exact matches)
- Filename similarity
- File size matching
- Image perceptual hashing (for photos)

Present duplicates with:
- File locations
- File sizes
- Modification dates
- Recommendation (keep which one)

### Step 5: Present Detailed Plan

Before any changes, show:

```markdown
## Organization Plan

### Files to Move
| Current Location | New Location | Reason |
|-----------------|--------------|--------|
| /Downloads/report.pdf | /Documents/Work/Reports/ | PDF document |
| /Downloads/photo.jpg | /Images/Photos/2024/ | Photo from 2024 |

### Duplicates Found
| File | Duplicate | Recommendation |
|------|-----------|----------------|
| /Images/photo.jpg | /Downloads/photo(1).jpg | Delete duplicate |

### Summary
- Files to move: 45
- Duplicates found: 12
- Space to reclaim: 2.3 GB

Proceed with this plan? (yes/no)
```

### Step 6: Execute with Confirmation

Only proceed after explicit user approval:
- Move files to new locations
- Rename according to conventions
- Create necessary folders
- Log all operations

### Step 7: Provide Maintenance Guidance

After organizing, suggest:
- Regular cleanup schedule
- Folder naming conventions
- File naming best practices
- Automation options

## Important Safeguards

- **Always ask for confirmation before deleting**
- Maintain logs of all file movements
- Preserve original file metadata
- Never delete without explicit approval
- Offer undo capability

## Common Scenarios

### Downloads Folder Cleanup
1. Categorize by file type
2. Remove obvious duplicates
3. Archive old files
4. Create logical subfolders

### Photo Organization
1. Sort by date taken (EXIF data)
2. Group by event or location
3. Find and remove duplicates
4. Rename with consistent format

### Project Directory Structure
1. Analyze project files
2. Create standard folder hierarchy
3. Move files to appropriate locations
4. Clean up temp files

### Desktop Cleanup
1. Identify file types
2. Move to appropriate folders
3. Remove shortcuts to deleted items
4. Organize remaining items
