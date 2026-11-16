# Event Store Design

Design and implement event stores for event-sourced systems. Use when building event sourcing infrastructure, choosing an event store technology, or implementing event persistence patterns.

## Core Concepts

An event store holds one append-only, ordered stream per aggregate, plus a global position across all streams:

```
Event Store
  Stream 1 (Aggregate)   Stream 2 (Aggregate)   Stream 3 (Aggregate)
    Event 1                Event 1                Event 1
    Event 2                Event 2                Event 2
    Event 3                ...                    Event 3
  Global Position: 1 → 2 → 3 → 4 → 5 → 6 → ...
```

### Requirements an Event Store Must Meet

| Requirement | Description |
|---|---|
| Append-only | Events are immutable facts; only appends, never updates/deletes |
| Ordered | Per-stream and global ordering |
| Versioned | Optimistic concurrency control |
| Subscriptions | Real-time event notifications to projections/consumers |
| Idempotent | Handle duplicate writes safely |

## Choosing a Technology

| Technology | Best For | Limitations |
|---|---|---|
| EventStoreDB | Pure event sourcing | Single-purpose |
| PostgreSQL | An existing Postgres stack | Manual implementation |
| Kafka | High-throughput streaming | Not ideal for per-stream queries |
| DynamoDB | Serverless, AWS-native | Query limitations |
| Marten | .NET ecosystems | .NET specific |

## PostgreSQL Event Store Schema

Postgres is the most common "build it yourself" choice. The schema below gives per-stream ordering, a global position, optimistic concurrency, snapshots, and subscription checkpoints:

```sql
CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    stream_id VARCHAR(255) NOT NULL,
    stream_type VARCHAR(255) NOT NULL,
    event_type VARCHAR(255) NOT NULL,
    event_data JSONB NOT NULL,
    metadata JSONB DEFAULT '{}',
    version BIGINT NOT NULL,
    global_position BIGSERIAL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_stream_version UNIQUE (stream_id, version)  -- optimistic concurrency
);

CREATE INDEX idx_events_stream_id ON events(stream_id, version);        -- load a stream in order
CREATE INDEX idx_events_global_position ON events(global_position);     -- global subscriptions
CREATE INDEX idx_events_event_type ON events(event_type);
CREATE INDEX idx_events_created_at ON events(created_at);

CREATE TABLE snapshots (
    stream_id VARCHAR(255) PRIMARY KEY,
    stream_type VARCHAR(255) NOT NULL,
    snapshot_data JSONB NOT NULL,
    version BIGINT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE subscription_checkpoints (
    subscription_id VARCHAR(255) PRIMARY KEY,
    last_position BIGINT NOT NULL DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

The `UNIQUE (stream_id, version)` constraint is the mechanism for optimistic concurrency: an appender reads the stream's current version, writes the next expected version, and the insert fails if another writer got there first — forcing a re-read rather than silently corrupting the stream.

## Implementation Pattern

Model an event as an immutable record carrying its stream, type, data, metadata, version, and global position:

```python
from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Optional
from uuid import UUID, uuid4

@dataclass
class Event:
    stream_id: str
    event_type: str
    data: dict
    metadata: dict = field(default_factory=dict)
    event_id: UUID = field(default_factory=uuid4)
    version: Optional[int] = None
    global_position: Optional[int] = None
    created_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))
```

Core operations: `append_events(stream_id, events, expected_version)` (fails on version conflict), `read_stream(stream_id, from_version)` (replay an aggregate), `read_all(from_position)` (drive projections), and `subscribe(...)` (live notifications). Snapshot a stream periodically so replay doesn't have to start from event 1 every time.

### Other Backends

- **EventStoreDB** — purpose-built: append to a stream, read a stream forward, subscribe to `$all`, and use category projections (`$ce-<Category>`) to subscribe to every stream of a type.
- **DynamoDB** — partition key on `stream_id`, sort key on `version`; a conditional write on the sort key gives the same optimistic-concurrency guarantee as the Postgres unique constraint.

## Best Practices

**Do:**
- Use stream IDs that include the aggregate type — `Order-{uuid}`.
- Include correlation and causation IDs in metadata — for cross-service tracing.
- Version events from day one — plan for schema evolution before you need it.
- Implement idempotency using event IDs for deduplication.
- Index for your actual query patterns.

**Don't:**
- Update or delete events — they are immutable facts; a correction is a new compensating event.
- Store large payloads — keep events small; put blobs elsewhere and reference them.
- Skip optimistic concurrency — it's what prevents two writers corrupting a stream.
- Ignore backpressure — handle slow consumers so a lagging projection can't stall writes.

## Resources

- EventStoreDB: https://www.eventstore.com/
- Marten Events: https://martendb.io/events/
- Event Sourcing pattern: https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing
