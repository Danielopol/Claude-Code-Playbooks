# Saga Orchestration

Implement saga patterns for distributed transactions and cross-aggregate workflows. Use when coordinating a multi-step business process across services, handling compensating transactions, or managing long-running workflows that can't rely on a single ACID transaction.

## Core Concepts

A saga is a sequence of local transactions across services; when a step fails, previously completed steps are undone by running their **compensating** actions in reverse. There are two coordination styles:

```
Choreography                     Orchestration
Svc A → Svc B → Svc C            Orchestrator
  │       │       │                 ├── Svc 1
 Event   Event   Event              ├── Svc 2
                                    └── Svc 3
```

- **Choreography** — services react to each other's events; no central coordinator. Simple for short flows, but the overall flow is implicit and hard to follow as it grows.
- **Orchestration** — a central orchestrator explicitly drives each step and its compensation. More moving parts, but the flow and its failure handling live in one readable place. Prefer it once a saga has more than a few steps.

### Saga Execution States

| State | Meaning |
|---|---|
| Started | Saga initiated |
| Pending | Waiting for a step to complete |
| Compensating | Rolling back after a failure |
| Completed | All steps succeeded |
| Failed | Saga failed, after compensation ran |

## Orchestrator Pattern

Model each step as an action plus its compensation, and the saga as an ordered list of steps with a current position:

```python
from dataclasses import dataclass, field
from enum import Enum
from typing import Dict, Any, Optional, List
from datetime import datetime, timezone

class SagaState(Enum):
    STARTED = "started"
    PENDING = "pending"
    COMPENSATING = "compensating"
    COMPLETED = "completed"
    FAILED = "failed"

@dataclass
class SagaStep:
    name: str
    action: str            # the forward operation
    compensation: str      # the undo operation — must exist for every step with side effects
    status: str = "pending"
    result: Optional[Dict] = None
    error: Optional[str] = None

@dataclass
class Saga:
    saga_id: str
    saga_type: str
    state: SagaState
    data: Dict[str, Any]
    steps: List[SagaStep]
    current_step: int = 0
    created_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))
```

The orchestrator runs steps forward in order. On a step failure it flips to `COMPENSATING` and runs the compensations of the already-completed steps **in reverse order**, then settles in `FAILED`. Persist saga state after every transition (a saga store) so a crashed orchestrator can resume where it left off — a saga is long-running and must survive a restart.

## Order-Fulfillment Example

A canonical saga — reserve inventory → charge payment → ship — where each step has a compensation (release inventory, refund payment, cancel shipment). If payment fails, inventory is released; if shipping fails, payment is refunded and inventory released. Each service exposes its action and its compensation as idempotent operations the orchestrator calls.

## Choreography Variant

Without an orchestrator, each service subscribes to the previous step's success event and emits its own; a failure emits a compensation event that upstream services listen for to undo their work. Keep a correlation ID on every event so the distributed flow can be reconstructed and traced.

## Timeouts

A step that never completes must not hang the saga forever. Give each step a deadline; on timeout, treat it as a failure and compensate. Long-running sagas should also persist a "next deadline" so a scheduler can wake them.

## Best Practices

**Do:**
- Make every step idempotent — the orchestrator will retry, and retries must be safe.
- Design compensations as carefully as the forward actions — a compensation that doesn't actually undo is worse than none.
- Use correlation IDs across services for tracing.
- Implement timeouts — never wait forever on a step.
- Log every transition — saga debugging is impossible without the trail.

**Don't:**
- Assume instant completion — sagas take time; design the UI and callers for eventual outcomes.
- Skip compensation testing — the rollback path is the most critical and least-exercised part.
- Couple services synchronously — use async messaging so one slow service doesn't block the chain.
- Ignore partial failures — the half-completed state is the normal case a saga exists to handle.

## Resources

- Saga pattern: https://microservices.io/patterns/data/saga.html
- *Designing Data-Intensive Applications*: https://dataintensive.net/
