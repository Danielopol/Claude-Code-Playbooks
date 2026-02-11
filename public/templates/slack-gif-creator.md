# Slack GIF Creator

Flexible toolkit for producing animated GIFs optimized for Slack's specific technical requirements. Emphasizes creative freedom while respecting platform constraints.

## Dependencies

```bash
pip install Pillow imageio numpy
```

## Slack Requirements

### Message GIFs
- **Maximum size**: ~2MB
- **Optimal dimensions**: 480x480 pixels
- **Frame rate**: 15-20 FPS
- **Color palette**: 128-256 colors
- **Duration**: 2-5 seconds

### Emoji GIFs
- **Maximum size**: 64KB (strict)
- **Optimal dimensions**: 128x128 pixels
- **Frame rate**: 10-12 FPS
- **Color palette**: 32-48 colors
- **Duration**: 1-2 seconds

Note: Emoji GIFs present particular challenges due to strict file size restrictions.

## Three Tool Categories

### 1. Validators

Verify GIFs meet Slack's constraints:

```python
def validate_message_gif(filepath):
    """Check if GIF meets message requirements"""
    # Returns: size_ok, dimensions_ok, details

def validate_emoji_gif(filepath):
    """Check if GIF meets emoji requirements"""
    # Returns: size_ok, dimensions_ok, details

def comprehensive_check(filepath, gif_type="message"):
    """Full validation with recommendations"""
    # Returns: all checks with suggestions
```

### 2. Animation Primitives

Composable motion building blocks:

| Primitive | Effect | Parameters |
|-----------|--------|------------|
| shake | Vibration | intensity, duration |
| bounce | Up-down | height, speed |
| spin | Rotation | direction, speed |
| pulse | Size oscillation | min_scale, max_scale |
| fade | Opacity change | start, end, duration |
| zoom | Scale in/out | from_scale, to_scale |
| explode | Burst outward | particle_count |
| wiggle | Side-to-side | amplitude, frequency |
| slide | Directional move | direction, distance |
| flip | Mirror transform | axis, duration |
| morph | Shape transition | start_shape, end_shape |
| move | Path animation | path_points |
| kaleidoscope | Symmetry effect | segments |

### 3. Helper Utilities

Optional functions for enhancement:

- **Assembly**: Combine frames, set timing
- **Text rendering**: Add animated text
- **Color management**: Palette optimization
- **Effects**: Filters, overlays
- **Easing**: Smooth motion curves

## Animation Primitive Examples

### Emoji Reactions
```python
# Bouncing thumbs up
create_gif(
    base_image="thumbs_up.png",
    animation=bounce(height=10, speed=2),
    output="thumbs_bounce.gif",
    type="emoji"
)
```

### Physics-Based Motion
```python
# Ball with gravity
create_gif(
    base_image="ball.png",
    animation=bounce(height=50, decay=0.8),
    output="bouncing_ball.gif"
)
```

### Transformations
```python
# Spinning logo
create_gif(
    base_image="logo.png",
    animation=spin(direction="clockwise", speed=1),
    output="spinning_logo.gif"
)
```

### Combined Effects
```python
# Pulsing and shaking alert
create_gif(
    base_image="alert.png",
    animations=[
        pulse(min_scale=0.9, max_scale=1.1),
        shake(intensity=3)
    ],
    output="alert_attention.gif"
)
```

## Optimization Strategies

When file exceeds limits, progressively reduce:

### For Message GIFs (~2MB limit)
1. Reduce frame count (fewer frames)
2. Shrink color palette (128 → 64 colors)
3. Decrease dimensions (480 → 320)
4. Simplify design complexity

### For Emoji GIFs (64KB limit)
More aggressive optimization required:
1. Minimal frame count (8-12 frames)
2. Tiny color palette (32 colors max)
3. Small dimensions (64-128 pixels)
4. Very simple designs
5. Dithering to reduce colors

## Workflow

### Step 1: Understand Vision
- What emotion or action to convey?
- Message GIF or emoji?
- Simple or complex animation?

### Step 2: Design in Phases
- Start with static base image
- Add primary animation
- Layer secondary effects
- Refine timing

### Step 3: Apply Primitives
- Choose appropriate primitives
- Combine for desired effect
- Adjust parameters
- Preview result

### Step 4: Validate Constraints
- Check file size
- Verify dimensions
- Confirm frame rate
- Test in Slack

### Step 5: Iterate
- Optimize if needed
- Refine animation
- Final validation

## Common Patterns

### Celebration
```python
animations = [
    explode(particle_count=20),
    fade(start=0, end=1, duration=0.5)
]
```

### Error/Alert
```python
animations = [
    shake(intensity=5, duration=0.5),
    pulse(min_scale=0.95, max_scale=1.05)
]
```

### Loading
```python
animations = [
    spin(direction="clockwise", speed=1)
]
```

### Attention
```python
animations = [
    bounce(height=15, speed=2),
    wiggle(amplitude=5, frequency=3)
]
```

## Validation

The save method automatically warns if file exceeds limits:

```python
gif = create_gif(...)
result = gif.save("output.gif")
# Warning: File size 75KB exceeds emoji limit of 64KB
# Suggestion: Reduce colors to 32 or decrease dimensions
```

## Best Practices

1. **Start simple**: Basic animations first
2. **Validate early**: Check size before finalizing
3. **Layer carefully**: Too many effects = large files
4. **Test in Slack**: Preview before deploying
5. **Keep emoji minimal**: 64KB is very restrictive
6. **Use primitives**: Don't reinvent animation logic

## Philosophy

"This toolkit provides building blocks, not rigid recipes."

- Understand your vision first
- Design animations in phases
- Apply primitives flexibly
- Validate against constraints
- Iterate until satisfied
