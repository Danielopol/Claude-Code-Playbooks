# AI Presentation Generator

## Goal
Generate complete presentations with AI - from outline to polished slides

## What You Can Do
- Ai
- Slides
- Generation
- Automatic

## How to Use
1. Provide a topic, outline, or rough notes
2. Specify audience and presentation length
3. I'll generate a complete presentation

**Example prompts:**
- "Create a 10-slide presentation about machine learning"
- "Generate a pitch deck for a SaaS startup"
- "Build training slides on cybersecurity basics"
- "Make a quarterly review presentation from this data"

## Domain Knowledge
### Presentation Structure

```yaml
# Effective presentation structure
structure:
  - title_slide:
      title: "Clear, compelling title"
      subtitle: "Context or tagline"
      author: "Presenter name"
  
  - agenda:
      items: 3-5 main topics
  
  - introduction:
      hook: "Attention-grabbing opening"
      context: "Why this matters"
  
  - main_content:
      sections: 3-5 key points
      each_section:
        - heading
        - 3-5 bullets or visual
        - supporting data
  
  - conclusion:
      summary: "Key takeaways"
      call_to_action: "What to do next"
  
  - closing:
      thank_you: true
      contact_info: true
      qa_prompt: true
```

### Content Generation Pattern

```python
def generate_presentation(topic, audience, slide_count=10):
    """AI-powered presentation generation."""
    
    # 1. Generate outline
    outline = generate_outline(topic, slide_count)
    
    # 2. Expand each section
    slides = []
    for section in outline:
        slide_content = expand_section(section, audience)
        slides.append(slide_content)
    
    # 3. Add visuals suggestions
    for slide in slides:
        slide['visuals'] = suggest_visuals(slide['content'])
    
    # 4. Format as Marp markdown
    presentation = format_as_marp(slides)
    
    return presentation

def generate_outline(topic, count):
    """Generate presentation outline."""
    # Typical structure
    outline = [
        {'type': 'title', 'title': topic},
        {'type': 'agenda'},
        # Main content (60% of slides)
        # ... content slides
        {'type': 'summary'},
        {'type': 'closing'}
    ]
    return outline
```

### Marp Output

```python
def format_as_marp(slides):
    """Convert slides to Marp markdown."""
    
    marp = """---
marp: true
theme: gaia
paginate: true

## Tips
1. **Know Your Audience**: Tailor complexity and examples
2. **One Idea Per Slide**: Keep focused
3. **6x6 Rule**: Max 6 bullets, 6 words each
4. **Visual First**: Suggest images/diagrams
5. **Strong Opening/Closing**: Hook and call-to-action

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts