# Chat History Mind Mapper

## Goal
Process exported AI chat histories into structured summaries and mind maps. Break large files into overlapping chunks, summarize each, then compile into a navigable knowledge map.

## Directory Structure
- `exports/` — Raw exported chat files (JSON, TXT)
- `chunks/` — Split conversation chunks with overlap
- `summaries/` — Per-chunk summaries with topic tags
- `output/` — Final mind map and compiled summary

## Processing Pipeline

### Phase 1: Chunk
Split the exported chat file into overlapping chunks:
- Target size: ~30,000 words per chunk
- Overlap: Each chunk shares ~5,000 words with the next
- Pattern: If the file is ABCD, chunks are AB, BC, CD
- Name chunks sequentially: chunk-01.md, chunk-02.md, etc.
- Preserve conversation structure (don't split mid-message)

### Phase 2: Summarize
For each chunk, generate a summary:
- 500-1,000 word summary of key topics discussed
- List of specific topics, questions asked, and insights gained
- Tag which chunk number the topic came from (for back-reference)
- Identify recurring themes across chunks

### Phase 3: Compile
Merge all summaries into a single document:
- Group topics by theme (not by chunk order)
- Create a hierarchical mind map structure
- Include chunk references so topics can be traced to original conversations
- Add a "Key Insights" section with the most valuable discoveries
- Generate a topic index for quick navigation

## Chunking Rules
1. Never split in the middle of a conversation turn
2. Overlap ensures no context is lost at chunk boundaries
3. Chunks should be roughly equal in size
4. For JSON exports, flatten to plain text before chunking

## Summary Format
For each chunk summary:
```
# Chunk [N] Summary
Source: chunk-[N].md (words X,XXX - X,XXX of original)

## Topics Covered
- Topic 1: Brief description [chunk-N]
- Topic 2: Brief description [chunk-N]

## Key Questions Asked
- Question 1?
- Question 2?

## Insights
- Insight 1
- Insight 2

## Recurring Themes
- Theme that appears in multiple chunks
```

## Mind Map Format (output/mind-map.md)
```
# Chat History Mind Map

## Theme 1: [Theme Name]
- Sub-topic A [chunk-2, chunk-5]
  - Key insight
  - Related questions explored
- Sub-topic B [chunk-3]
  - Key insight

## Theme 2: [Theme Name]
...

## Key Insights
1. Most important discovery [source chunks]
2. Second insight [source chunks]

## Topic Index
| Topic | Chunks | Summary |
|-------|--------|---------|
| Topic A | 1, 3, 7 | Brief description |
```

## Commands
- "/process [filename]" — Run the full pipeline on an export file
- "/chunk [filename]" — Run Phase 1 only
- "/summarize" — Run Phase 2 on existing chunks
- "/compile" — Run Phase 3: generate mind map from summaries
- "/search [topic]" — Find all mentions of a topic across chunks
- "/themes" — Show recurring themes across all conversations
