# Web App Testing

Test local web applications through Playwright automation scripts for frontend verification, UI debugging, screenshot capture, and browser log inspection.

## Core Capabilities

- Frontend functionality verification
- UI debugging and inspection
- Screenshot capture at any point
- Browser console log access
- Automated user flow testing

## Helper Script

```bash
scripts/with_server.py
```

Manages server lifecycle for testing. Always run with `--help` first to see usage options. Do not read source until you try running the script.

## Testing Approaches

### Approach 1: Static HTML Files

For static HTML without server requirements:

1. Read HTML file directly
2. Extract selectors from source
3. Create Playwright automation script
4. Execute tests

### Approach 2: Dynamic Webapp (Server Not Running)

For applications requiring server startup:

1. Use `with_server.py` helper script
2. Script manages server lifecycle
3. Run automation after server ready
4. Server terminates after tests

### Approach 3: Dynamic Webapp (Server Running)

For applications with server already active:

1. Perform reconnaissance first
2. Navigate and wait for load
3. Capture screenshots/inspect DOM
4. Discover selectors from rendered state
5. Execute automation actions

## Critical Pattern: Reconnaissance-Then-Action

For dynamic web applications, always follow this sequence:

```python
# Step 1: Navigate to application
await page.goto('http://localhost:3000')

# Step 2: Wait for JavaScript execution
await page.wait_for_load_state('networkidle')

# Step 3: Capture current state
await page.screenshot(path='screenshot.png')

# Step 4: Inspect DOM for selectors
elements = await page.query_selector_all('button')

# Step 5: Perform actions
await page.click('button[data-testid="submit"]')
```

## Important: Network Idle

**Critical**: Inspecting DOM before waiting for `networkidle` on dynamic applications yields incomplete results. JavaScript must finish executing before selectors are reliable.

## Common Testing Tasks

### Screenshot Capture
```python
await page.screenshot(path='current-state.png')
await page.screenshot(path='full-page.png', full_page=True)
```

### Element Interaction
```python
await page.click('button#submit')
await page.fill('input[name="email"]', 'test@example.com')
await page.select_option('select#country', 'US')
```

### Assertions
```python
await expect(page.locator('h1')).to_have_text('Welcome')
await expect(page.locator('.error')).not_to_be_visible()
```

### Console Log Access
```python
page.on('console', lambda msg: print(msg.text))
```

## Selector Discovery

After waiting for networkidle:

1. Take screenshot for visual reference
2. Query DOM for element structure
3. Look for data-testid attributes
4. Use ARIA roles for accessibility
5. Fall back to CSS selectors

## Workflow Example

```markdown
## Testing Session: Login Flow

### 1. Reconnaissance
- Navigate to http://localhost:3000/login
- Wait for networkidle
- Screenshot: login-page.png
- Discovered selectors:
  - Email: input[name="email"]
  - Password: input[name="password"]
  - Submit: button[type="submit"]

### 2. Test Execution
- Fill email: test@example.com
- Fill password: ********
- Click submit
- Wait for navigation

### 3. Verification
- Screenshot: after-login.png
- Assert: Dashboard heading visible
- Console: No errors logged
```

## Best Practices

1. **Always wait for networkidle** on dynamic applications
2. **Run scripts with --help first** before reading source
3. **Screenshot before and after** each major action
4. **Check console logs** for JavaScript errors
5. **Use stable selectors** (data-testid, roles)
6. **Handle async operations** with appropriate waits
