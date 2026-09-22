# Git Conflict Resolution

Resolve Git merge conflicts by intelligently combining changes from both branches while preserving the intent of both changes, rather than blindly picking a side. Follow a plan-first approach: assess conflicts, create a detailed resolution plan, get approval, then execute.

## Core Principles

1. **Plan before executing.** Always create a structured resolution plan and get user approval before making changes.
2. **Prefer both changes** unless they directly contradict — merge, don't choose. Especially for imports, tests, and configuration.
3. **Regenerate generated files.** Never manually merge generated files — always regenerate them from their sources.
4. **Backup before resolving.** For deleted-modified files, create backups first.
5. **Validate with tests.** Always run tests after resolution.
6. **Explain all resolutions.** For each conflict resolved, provide a one-line explanation of the resolution strategy.
7. **Ask when unclear.** When the correct resolution isn't clear from the diff, present options to the user and ask for their choice.

## Workflow

### Step 1: Assess the Conflict Situation

```bash
git status
```

Identify and categorize every conflicted file:

- Regular file conflicts (both modified)
- Deleted-modified conflicts (one deleted, one modified)
- Generated file conflicts (lock files, build artifacts, generated code)
- Test file conflicts
- Import/configuration conflicts
- Binary file conflicts

For each, gather: file type and purpose, nature of the conflict, scope of changes, and whether the file is generated or hand-written.

### Step 2: Create a Merge Resolution Plan

Present the plan before resolving anything:

```markdown
## Merge Resolution Plan

### Conflict Summary
- Total conflicted files: [N]
- Deleted-modified conflicts: [N]
- Generated files: [N]
- Regular conflicts: [N]

### Resolution Strategy by File

#### 1. [File Path]
**Conflict Type**: [deleted-modified / generated / imports / tests / code logic / config / struct / binary]
**Strategy**: [Brief description of resolution approach]
**Rationale**: [Why this strategy is appropriate]
**Risk**: [Low/Medium/High] — [Brief risk description]
**Action Items**:
- [ ] [Specific action 1]
- [ ] [Specific action 2]

### Execution Order
1. Deleted-Modified Files — handle deletions and backups first
2. Generated Files — regenerate from source
3. Low-Risk Merges — imports, tests, documentation
4. High-Risk Merges — code logic, configuration, structs
5. Validation — compile, test, verify

### Questions/Decisions Needed
- [ ] [File/Decision]: [Question for user] (Options: 1, 2, 3)
```

Present this plan and wait for approval before proceeding. List any unclear conflicts under "Questions/Decisions Needed."

### Step 3: Handle Deleted-Modified Files (After Approval)

For files with status DU, UD, DD, UA, or AU: create timestamped backups of the modified content before resolving the deletion status, and analyze potential relocation targets if the file was moved.

### Step 4: Execute the Resolution Plan

Follow the execution order from the plan. For each conflicted file, apply the matching pattern below, and give a one-line explanation of how each conflict was resolved. Mark plan items done as you go and report progress.

#### When Resolution Is Unclear

1. Present the conflict with the conflicting code from both sides.
2. Provide numbered options for resolution.
3. Explain each option clearly.
4. Ask the user to choose a number or provide more context.
5. Remember the choice and apply similar reasoning to related conflicts.

Example:

```
I found a conflict in src/main.rs where both branches modify calculate_price:

<<<<<<< HEAD (Current Branch)
fn calculate_price(item: &Item) -> f64 {
    item.base_price * (1.0 + item.tax_rate)
}
=======
fn calculate_price(item: &Item) -> f64 {
    item.base_price + item.tax_amount
}
>>>>>>> feature-branch (Incoming Branch)

I'm not sure which calculation is correct. Please select an option:

Option 1: Keep current branch (multiplies base_price by tax_rate)
Option 2: Keep incoming branch (adds tax_amount to base_price)
Option 3: Keep both approaches with a new parameter
Option 4: Provide more context to help me decide
```

## Resolution Patterns

### Imports / Dependencies

Merge all unique imports from both branches: extract every import, remove duplicates, group by module/package, follow the language's style (alphabetize, group std/external/internal).

### Tests

Include all test cases and test data from both branches: keep all test functions unless they test the exact same thing, merge fixtures and setup functions, combine assertions, and rename on name collisions that test different behaviors.

### Generated Files

Never manually merge — regenerate. Recognize a generated file by: produced by a build tool/compiler/code generator, has a defining source or configuration, contains an auto-generated header, or is listed in `.gitattributes` as generated (lock files, protobuf outputs, GraphQL schema files, compiled assets, auto-generated docs).

Approach:
1. Identify the generation source (the command or tool that produces the file).
2. Pick either version temporarily — it doesn't matter which: `git checkout --ours <file>` or `--theirs`.
3. Regenerate from source:
   ```bash
   # Package manager lock files
   cargo update / npm install / yarn install / bundle install / poetry lock --no-update
   # Code generation
   protoc ... / graphql-codegen / make generate / npm run generate
   # Build artifacts
   npm run build / cargo build
   ```
4. Stage the regenerated file: `git add <file>`.

When unsure if a file is generated, check for auto-generation markers or ask the user.

### Configuration Files

Include all keys from both sides. For conflicting values, choose based on the newer/more recent value, the safer/more conservative value, or production requirements — and document the choice in the commit message. When unclear, ask the user which value to prefer.

### Code Logic

Analyze the intent of each branch. If the changes are orthogonal (different concerns), merge both. If they conflict (same concern, different approach), review commit messages/PRs for context, choose the approach matching requirements, test both if unclear, and document the decision. When unclear, present both approaches as options with context on what each does.

### Struct / Type Definitions

Merge all fields from both branches. If field types conflict, analyze which is more appropriate, fix all resulting compilation errors, and update tests to use the new fields. When unclear, ask which type definition is correct.

### Step 5: Validate the Resolution

Check that all conflicts are actually resolved: no remaining conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), no unmerged paths in `git status`, no leftover deleted-modified conflicts, no merge state files.

### Step 6: Compile and Test

```bash
# Rust: cargo test
# JS/TS: npm test
# Python: pytest
# (or the project's own test command)
```

If tests fail: determine whether the failure comes from the merged code or the conflict resolution itself, check whether both branches' tests passed individually, fix integration issues between the merged changes, and re-run until everything passes.

### Step 7: Finalize

```bash
git diff --cached
git commit -m "Resolve merge conflicts: [describe key decisions]"
```
