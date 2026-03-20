# Idea Catalyst — Cross-Domain Research Inspiration

Find transferable insights from other scientific domains to spark novel approaches for your research problem. Based on the [Idea Catalyst](https://github.com/pkargupta/idea_catalyst) framework (Kargupta et al., 2025).

## When to Use

- You have a research problem and want inspiration from outside your field
- You're stuck on a challenge and want to explore cross-domain analogies
- You want to systematically discover how concepts from other fields could apply to your work
- You're writing a paper and need to identify novel cross-disciplinary connections

## How It Works

The pipeline follows four stages:

### 1. Problem Decomposition
Break down a research problem statement into targeted questions that capture different facets of the challenge — technical, conceptual, and methodological.

### 2. Target-Domain Literature Search
Search Semantic Scholar for papers in your own domain to understand the current landscape, gaps, and established approaches.

### 3. Cross-Domain Literature Search
Search other domains for papers that address analogous challenges. The system reformulates your questions to be domain-agnostic, then searches across fields like biology, physics, economics, philosophy, etc.

### 4. Integration & Ranking
Synthesize cross-domain findings into concrete, actionable inspiration ideas ranked by relevance and transferability to your original problem.

## Setup

### Prerequisites

```bash
git clone https://github.com/pkargupta/idea_catalyst.git
cd idea_catalyst
pip install -r requirements.txt
```

### API Keys

Create a `config.py` file with your Semantic Scholar API key:

```python
API_KEY = "your-semantic-scholar-api-key"
```

Get a free key at https://www.semanticscholar.org/product/api

### Running the Pipeline

```bash
python inspiration_pred.py \
  --problem_file data/cross-domain-inspiration-relations.json \
  --model_name Qwen/Qwen3-14B \
  --output_dir inspiration_pred_output \
  --max_papers_per_query 20 \
  --temp 0.7 \
  --min_rel_threshold 0.5
```

## Key Options

| Flag | Description |
|------|-------------|
| `--problem_file` | JSON file with research problems (see data format below) |
| `--model_name` | LLM to use for decomposition and synthesis |
| `--output_dir` | Where to write results |
| `--max_papers_per_query` | Max papers to retrieve per search query |
| `--temp` | Temperature for generation |
| `--min_rel_threshold` | Minimum relevance score to keep a cross-domain paper |
| `--skip_if_exists` | Skip problems that already have output files |

## Input Format

Your problem file should be a JSON array where each entry has at minimum:

```json
{
  "context": "Your research problem statement here",
  "source_domain": "Your field (e.g., Computer Science)",
  "target_domain": "Domain to search for inspiration (e.g., Biology)",
  "publication_year": 2024
}
```

## Output Format

Each output JSON file contains:
- **Problem metadata**: research problem, domains, ground truth references
- **Cross-domain evidence**: papers grouped by question and domain
- **Idea rankings**: integrated ideas ranked by relevance and transferability

## Using with Claude Code

Instead of running the full pipeline, you can use this template to guide Claude through the same intellectual process manually:

1. **Describe your research problem** — be specific about the challenge
2. **Ask Claude to decompose it** — "Break my research problem into 3-5 targeted questions"
3. **Request cross-domain search** — "What fields outside [your domain] have solved analogous problems?"
4. **Synthesize inspirations** — "How could [cross-domain concept] be adapted to my problem?"

This conversational approach works when you don't need the full automated pipeline but want the structured thinking framework.

## Tips

- Start with a clear, specific problem statement — vague problems yield vague inspirations
- Try multiple target domains — the best insights often come from unexpected fields
- The `min_rel_threshold` parameter controls quality vs. quantity of results
- Use `--skip_if_exists` for large batches to resume interrupted runs
- The default dataset comes from CHIMERA (cross-domain inspiration relations)
