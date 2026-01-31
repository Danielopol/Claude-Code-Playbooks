# Document Synthesizer

## Goal
Process a collection of documents into a synthesized report. Convert source documents to markdown, analyze each against a relevance framework, and produce a final synthesis with citations that trace every claim back to its source.

## Directory Structure
- `source/` — Original documents (PDF, DOCX, TXT)
- `markdown/` — Converted plain-text versions of each document
- `summaries/` — Per-document summary and relevance analysis
- `framework/` — Relevance matrix and synthesis criteria
- `output/` — Final synthesized report(s)

## Processing Pipeline

### Phase 1: Convert
Convert all documents in `source/` to markdown in `markdown/`.
- Preserve structure (headings, lists, tables)
- Name files: `01-original-filename.md`, `02-original-filename.md` (numbered)
- Log any conversion issues to `output/conversion-log.md`

### Phase 2: Analyze
For each converted document, generate a summary in `summaries/`:
- 2-3 paragraph summary of key content
- Relevance score (1-5) against each criterion in the framework
- Key quotes or data points worth citing
- Cross-references to other documents covering similar topics

### Phase 3: Synthesize
Produce the final report in `output/`:
- Cohesive narrative that ties all documents together
- Organized by theme, not by source document
- Every factual claim includes a footnote citing the source document
- Executive summary at the top
- Appendix with full document list and relevance scores

## Relevance Framework Format (framework/criteria.md)
```
| Criterion | Weight | Description |
|-----------|--------|-------------|
| Strategic alignment | High | Does it support the stated goals? |
| Data quality | Medium | Are claims backed by evidence? |
| Recency | Medium | How current is the information? |
| Actionability | High | Does it suggest concrete next steps? |
```

## Rules
1. Every claim in the synthesis must cite a source document by number
2. Use footnotes in the format: [^1], [^2], etc. with references at the bottom
3. Do not invent information — only synthesize what's in the documents
4. Flag contradictions between documents explicitly
5. Process documents in batches of 5-10 to manage context
6. The final report should be self-contained — readable without the source docs

## Commands
- "/convert" — Run Phase 1: convert all source documents to markdown
- "/analyze" — Run Phase 2: generate summaries and relevance scores
- "/synthesize" — Run Phase 3: produce the final report
- "/status" — Show processing progress across all phases
- "/search [query]" — Search across all converted documents for a term
- "/contradictions" — List all identified contradictions between documents
