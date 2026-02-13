# Parallel Agent Protocol

## When to Use Parallel Agents

Use parallel agents when:
- Subtasks are **independent** (don't depend on each other's output)
- Each subtask is substantial (not trivial one-liners)
- Time savings justify the overhead

| Scenario | Sequential (slow) | Parallel (fast) |
|----------|-------------------|-----------------|
| Reviewing 3 files | Review file 1, then 2, then 3 | Review all 3 simultaneously |
| Analyzing 3 papers | Read paper 1, then 2, then 3 | Spawn 3 agents, each reads one |
| Generating 3 reports | Generate report A, B, then C | Spawn agents for each report |
| Testing 3 scenarios | Run test 1, then 2, then 3 | Run all 3 in parallel |

## Requesting Parallel Execution

**Explicit parallel request:**
```
Run these in parallel:
1. Analyze the auth module for security issues
2. Analyze the payments module for security issues
3. Analyze the user module for security issues
Then synthesize the results.
```

**Implicit parallel request:**
```
Analyze all three papers in papers/ folder. Extract key findings from each.
```

When tasks are obviously independent, Claude should parallelize automatically.

## Parallel Execution Rules

1. **3 agents is the sweet spot** — More than 3 increases overhead without proportional speedup
2. **Agents are independent** — They cannot see each other's work in progress
3. **Synthesis happens after** — Wait for all agents, then combine results
4. **Dependencies break parallelism** — If B needs A's output, run A first, then B

## Task Structure for Parallelism

Good (parallel-friendly):
```
Read these 3 files and summarize each:
- src/auth/login.ts
- src/auth/register.ts
- src/auth/logout.ts
```

Bad (has dependencies):
```
1. Read the login code and identify issues
2. Based on the issues found, fix the register code
3. Update logout to match the fixes
```
(Step 2 depends on Step 1, Step 3 depends on Step 2 → must be sequential)

## Synthesis Format

After parallel agents complete:

```
## Parallel Analysis Results

### Agent 1: [Task]
[Summary of findings]

### Agent 2: [Task]
[Summary of findings]

### Agent 3: [Task]
[Summary of findings]

---

## Synthesis
[Combined insights, patterns across all results, prioritized actions]
```

## Cost-Conscious Parallelism

Parallel agents multiply token usage. For cost-sensitive work:
- Run expensive operations (complex analysis) **sequentially**
- Run cheap operations (quick checks) **in parallel**
- Use smaller models for parallel subtasks when possible
