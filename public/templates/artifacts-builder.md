# Artifacts Builder

Create elaborate multi-component HTML artifacts using React, Tailwind CSS, and shadcn/ui components.

## Technology Stack

- React 18 + TypeScript + Vite
- Parcel (bundling)
- Tailwind CSS 3.4.1
- 40+ shadcn/ui components
- Radix UI dependencies

## Workflow

### Step 1: Initialize Project

Run the initialization script to generate a project pre-configured with:
- React 18 with TypeScript
- Tailwind CSS configuration
- All shadcn/ui components
- Parcel bundling with path alias support

```bash
./scripts/init-artifact.sh my-artifact
cd my-artifact
```

### Step 2: Develop the Artifact

Modify the generated source files:
- `src/App.tsx` - Main application component
- `src/components/` - Custom components
- `src/styles/` - Additional styling

### Step 3: Bundle for Distribution

Run the bundling script to create a single HTML file:

```bash
./scripts/bundle-artifact.sh
```

This will:
- Install all dependencies
- Configure Parcel with path aliases
- Build without source maps
- Inline all assets into one HTML file

### Step 4: Share the Artifact

The bundled HTML file is completely self-contained and can be:
- Shared directly via email or messaging
- Hosted on any static file server
- Embedded in documentation
- Used offline without internet

## Design Philosophy

### Avoid Common AI Aesthetic Pitfalls

Do NOT create artifacts that look like every other AI-generated UI:
- Excessive centered layouts with no visual rhythm
- Purple gradients as the default accent
- Uniform rounded corners on everything
- Default sans-serif typography

### Create Distinctive Designs

Instead, focus on:
- Thoughtful color palettes that match the content
- Typography hierarchy with intentional font choices
- Varied spacing and alignment for visual interest
- Purposeful use of shadows and depth
- Animations that enhance, not distract

## Component Library

### Available shadcn/ui Components

**Layout**: Card, Separator, Aspect Ratio, Scroll Area

**Forms**: Button, Input, Textarea, Select, Checkbox, Radio, Switch, Slider, Form

**Feedback**: Alert, Toast, Progress, Skeleton, Badge

**Overlay**: Dialog, Drawer, Sheet, Popover, Tooltip, Hover Card

**Navigation**: Tabs, Accordion, Collapsible, Navigation Menu, Breadcrumb

**Data Display**: Table, Avatar, Calendar, Command

**And more**: 40+ components total

## Example Artifacts

### Dashboard
```tsx
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { BarChart, LineChart } from "recharts"

export function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      <Card>
        <CardHeader>Revenue</CardHeader>
        <CardContent>
          <LineChart data={revenueData} />
        </CardContent>
      </Card>
      {/* More cards */}
    </div>
  )
}
```

### Form Wizard
```tsx
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FormWizard() {
  const [step, setStep] = useState(1)
  // Multi-step form logic
}
```

## Testing

Testing is optional and should occur AFTER presentation if issues arise:
- Don't test before showing the artifact
- Debug only when problems are reported
- Focus on functionality, not perfection

## Best Practices

1. **Start with structure**: Plan component hierarchy before coding
2. **Use TypeScript**: Catch errors early with type safety
3. **Leverage shadcn/ui**: Don't reinvent common patterns
4. **Bundle for portability**: Single HTML file works everywhere
5. **Design intentionally**: Avoid generic AI aesthetics
