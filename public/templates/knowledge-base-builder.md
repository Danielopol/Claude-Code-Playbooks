# Knowledge Base

## Notation Registry

Track terminology, symbols, and naming conventions:

| Term/Symbol | Meaning | First Introduced | Anti-Pattern |
|-------------|---------|------------------|--------------|
| [term] | [definition] | [where] | [what NOT to do] |

### Example (Software Project):
| Term | Meaning | Introduced | Anti-Pattern |
|------|---------|------------|--------------|
| `User` | Authenticated account holder | models/user.ts | Don't conflate with `Visitor` (unauthenticated) |
| `Order` | A completed purchase | models/order.ts | Don't use for shopping carts (use `Cart`) |
| `userId` | Primary key reference | Throughout | Never use `user_id` (consistency) |

### Example (Academic):
| Symbol | Meaning | Introduced | Anti-Pattern |
|--------|---------|------------|--------------|
| β | Regression coefficient | Lecture 1 | Don't use `b` (reserved for intercept) |
| X | Treatment indicator | Lecture 2 | Don't use `T` (reserved for time) |

## Applications Database

Track real-world examples, use cases, or implementations:

| Application | Source | Dataset/Context | Tools Used | Notes |
|------------|--------|-----------------|------------|-------|
| [name] | [paper/project] | [data] | [tools] | [notes] |

### Example:
| Application | Source | Context | Tools | Notes |
|-------------|--------|---------|-------|-------|
| User Auth | Auth0 docs | OAuth 2.0 | JWT, bcrypt | Reference implementation |
| Payment Flow | Stripe guide | E-commerce | Stripe API | Follow their patterns |

## Design Principles

Track validated design approaches:

| Principle | Evidence/Rationale | Applied Where |
|-----------|-------------------|---------------|
| [principle] | [why it works] | [where used] |

### Example:
| Principle | Evidence | Applied |
|-----------|----------|---------|
| Single Responsibility | Easier testing, clearer code | All components |
| Fail Fast | Catch errors early | Validation layer |
| Convention over Configuration | Less boilerplate | Routing, naming |

## Anti-Patterns

Document what NOT to do:

| Anti-Pattern | Why It's Bad | Better Alternative |
|--------------|--------------|-------------------|
| [pattern] | [problems] | [solution] |

### Example:
| Anti-Pattern | Why Bad | Alternative |
|--------------|---------|-------------|
| God Component | Unmaintainable | Split by responsibility |
| Magic Numbers | Unclear intent | Named constants |
| Deep Nesting | Hard to follow | Early returns, extraction |

## Project State

Track current status and decisions:

| Aspect | Current State | Last Updated |
|--------|---------------|--------------|
| [aspect] | [state] | [date] |

### Example:
| Aspect | State | Updated |
|--------|-------|---------|
| Auth System | Auth0 integrated | 2024-01-15 |
| Database | PostgreSQL 15 | 2024-01-10 |
| Frontend Framework | Next.js 14 | 2024-01-08 |

## Common Pitfalls

Project-specific issues to watch for:

1. **[Pitfall]**: [Description and how to avoid]
2. **[Pitfall]**: [Description and how to avoid]

### Example:
1. **Session Timeout**: Our sessions expire after 30 min. Don't cache user state beyond this.
2. **Timezone Handling**: All dates stored UTC. Always convert for display.
3. **API Rate Limits**: Stripe limits to 100 req/sec. Batch operations.
