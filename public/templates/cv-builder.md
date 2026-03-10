# CV & Resume Builder

## Goal
>

## What You Can Do
- Cv
- Resume
- Builder
- Generator

## How to Use
1. Provide your CV information (experience, education, workflows)
2. Choose a template/theme
3. I'll generate YAML and render to PDF

**Example prompts:**
- "Create a CV from my experience"
- "Generate a resume in the classic theme"
- "Update my CV with new job experience"
- "Build a technical resume highlighting projects"

## Domain Knowledge
### YAML Structure

```yaml
cv:
  name: John Doe
  location: San Francisco, CA
  email: john@email.com
  phone: "+1-555-555-5555"
  website: https://johndoe.com
  social_networks:
    - network: LinkedIn
      username: johndoe
    - network: GitHub
      username: johndoe
  
  sections:
    summary:
      - "Senior software engineer with 10+ years experience..."
    
    experience:
      - company: Tech Corp
        position: Senior Engineer
        location: San Francisco, CA
        start_date: 2020-01
        end_date: present
        highlights:
          - "Led team of 5 engineers"
          - "Increased performance by 40%"
    
    education:
      - institution: MIT
        area: Computer Science
        degree: BS
        start_date: 2008
        end_date: 2012
    
    workflows:
      - label: Languages
        details: Python, JavaScript, Go
      - label: Frameworks
        details: React, Django, FastAPI
```

### Themes

Available themes: `classic`, `sb2nov`, `moderncv`, `engineeringresumes`

```yaml
design:
  theme: classic
  font: Source Sans 3
  font_size: 10pt
  page_size: letterpaper
  color: '#004f90'
```

### CLI Usage

```bash
# Install
pip install rendercv

# Create new CV
rendercv new "John Doe"

# Render to PDF
rendercv render cv.yaml

# Output: rendercv_output/John_Doe_CV.pdf
```

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts