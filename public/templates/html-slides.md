# HTML Presentation Builder

## Goal
>

## What You Can Do
- Html
- Slides
- Revealjs
- Web

## How to Use
1. Describe the presentation you want to create
2. Specify theme, transitions, and features needed
3. I'll generate a reveal.js presentation

**Example prompts:**
- "Create an interactive presentation about our product"
- "Build a code walkthrough presentation with syntax highlighting"
- "Make a presentation with speaker notes and timer"
- "Create slides with animations and transitions"

## Domain Knowledge
### reveal.js Basics

```html
<!doctype html>
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4/dist/theme/black.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>Slide 1</section>
            <section>Slide 2</section>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@4/dist/reveal.js"></script>
    <script>Reveal.initialize();</script>
</body>
</html>
```

### Slide Structure

```html
<!-- Horizontal slides -->
<section>Slide 1</section>
<section>Slide 2</section>

<!-- Vertical slides (nested) -->
<section>
    <section>Vertical 1</section>
    <section>Vertical 2</section>
</section>

<!-- Markdown slides -->
<section data-markdown>
    <textarea data-template>
        ## Slide Title
        - Point 1
        - Point 2
    </textarea>
</section>
```

### Themes

Built-in themes: `black`, `white`, `league`, `beige`, `sky`, `night`, `serif`, `simple`, `solarized`, `blood`, `moon`

```html
<link rel="stylesheet" href="reveal.js/dist/theme/moon.css">
```

### Transitions

```javascript
Reveal.initialize({
    transition: 'slide',  // none, fade, slide, convex, concave, zoom
    transitionSpeed: 'default',  // default, fast, slow
    backgroundTransition: 'fade'
});
```

### Fragments (Animations)

```html
<section>
    <p class="fragment">Appears first</p>
    <p class="fragment fade-in">Then this</p>
    <p class="fragment fade-up">Then this</p>
    <p class="fragment highlight-red">Highlight</p>
</section>
```

Fragment styles: `fade-in`, `fade-out`, `fade-up`, `fade-down`, `fade-left`, `fade-right`, `highlight-red`, `highlight-blue`, `highlight-green`, `strike`

### Code Highlighting

```html
<section>
    <pre><code data-trim data-line-numbers="1|3-4">
def hello():
    print("Hello")
    print("World")
    return True
    </code></pre>
</section>
```

### Speaker Notes

```html
<section>
    <h2>Slide Title</h2>
    <p>Content</p>
    <aside class="notes">
        Speaker notes go here. Press 'S' to view.
    </aside>
</section>
```

### Backgrounds

```html
<!-- Color background -->
<section data-background-color="#4d7e65">

<!-- Image background -->
<section data-background-image="image.jpg" data-background-size="cover">

<!-- Video background -->
<section data-background-video="video.mp4">

<!-- Gradient background -->
<section data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
```

### Configuration

```javascript
Reveal.initialize({
    // Display controls
    controls: true,
    controlsTutorial: true,
    progress: true,
    slideNumber: true,
    
    // Behavior
    hash: true,
    respondToHashChanges: true,
    history: true,
    keyboard: true,
    overview: true,
    center: true,
    touch: true,
    loop: false,
    rtl: false,
    shuffle: false,
    
    // Timing
    autoSlide: 0,  // 0 = disabled
    autoSlideStoppable: true,
    
    // Appearance
    width: 960,
    height: 700,
    margin: 0.04,
    minScale: 0.2,
    maxScale: 2.0,
    
    // Plugins
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
});
```

## Limitations
- This is an AI assistant, not a replacement for professional expertise
- Always verify important outputs independently
- For high-stakes decisions, consult domain experts