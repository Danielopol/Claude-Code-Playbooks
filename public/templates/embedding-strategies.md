# Embedding Strategies

Select and optimize embedding models for semantic search and RAG applications. Use when choosing an embedding model, implementing chunking, reducing dimensions, handling multilingual content, or evaluating retrieval quality.

## Choosing a Model

| Model | Dimensions | Max Tokens | Best For |
|---|---|---|---|
| text-embedding-3-large | 3072 | 8191 | High accuracy |
| text-embedding-3-small | 1536 | 8191 | Cost-effective |
| voyage-2 | 1024 | 4000 | Code, legal |
| bge-large-en-v1.5 | 1024 | 512 | Open source |
| all-MiniLM-L6-v2 | 384 | 256 | Fast, lightweight |
| multilingual-e5-large | 1024 | 512 | Multi-language |

Match the model to the use case (code vs. prose vs. multilingual), the token budget, and whether you need an API or a local model. Never mix embedding models within one index — their vector spaces are incompatible.

The pipeline is always: `Document → Chunk → Preprocess → Embedding model → Vector`, with chunk size/overlap chosen at the chunk step and normalization applied at the embed step.

## Model-Specific Query/Document Prefixes

Several open models were trained with asymmetric prefixes and underperform badly without them. Apply the right prefix per model:

- **BGE** queries: `Represent this sentence for searching relevant passages: {query}` (documents need no prefix).
- **E5** (`intfloat/multilingual-e5-large`): prefix queries with `query: {text}` and documents with `passage: {text}`.

```python
# Local embeddings with sentence-transformers
from sentence_transformers import SentenceTransformer

class LocalEmbedder:
    def __init__(self, model_name="BAAI/bge-large-en-v1.5", device="cuda"):
        self.model = SentenceTransformer(model_name, device=device)

    def embed(self, texts, normalize=True):
        return self.model.encode(texts, normalize_embeddings=normalize, convert_to_numpy=True)
```

## Dimension Reduction (Matryoshka)

The `text-embedding-3-*` models support truncated dimensions natively — request fewer dimensions to cut storage and speed up search with minimal accuracy loss:

```python
from openai import OpenAI
client = OpenAI()

def get_embeddings(texts, model="text-embedding-3-small", dimensions=None):
    out = []
    for i in range(0, len(texts), 100):                 # batch — far cheaper than one-by-one
        kwargs = {"input": texts[i:i+100], "model": model}
        if dimensions:
            kwargs["dimensions"] = dimensions            # Matryoshka: 512 keeps most of the signal
        out.extend(item.embedding for item in client.embeddings.create(**kwargs).data)
    return out
```

## Chunking Strategies

Pick the chunker to preserve semantic boundaries rather than cutting mid-thought:

- **By tokens** — fixed `chunk_size` with `chunk_overlap`, using the model's tokenizer (`tiktoken.get_encoding("cl100k_base")`); the overlap carries context across the seam.
- **By sentences** — accumulate `nltk.sent_tokenize` sentences up to a max size so no sentence is split.
- **By semantic sections** — for markdown, split on headers (`^#{1,3}\s+`) and keep the header with its content so each chunk stays self-describing.
- **Recursive character splitting** — LangChain-style: try separators in order (`["\n\n", "\n", ". ", " ", ""]`), recursing into the next separator when a chunk is still too large, re-adding overlap from the tail of the previous chunk.

```python
def chunk_by_tokens(text, chunk_size=512, chunk_overlap=50, tokenizer=None):
    import tiktoken
    tok = tokenizer or tiktoken.get_encoding("cl100k_base")
    tokens = tok.encode(text)
    chunks, start = [], 0
    while start < len(tokens):
        end = start + chunk_size
        chunks.append(tok.decode(tokens[start:end]))
        start = end - chunk_overlap                      # overlap preserves cross-chunk context
    return chunks
```

Preprocess before embedding — collapse excessive whitespace, strip noise characters — because garbage in is garbage out.

## Evaluating Retrieval Quality

Don't guess whether an embedding/chunking choice helped — measure it against a labeled set of (query → relevant doc IDs):

```python
import numpy as np

def evaluate_retrieval(queries, relevant_docs, retrieved_docs, k=10):
    def precision_at_k(rel, ret, k): return len(set(ret[:k]) & rel) / k
    def recall_at_k(rel, ret, k):    return (len(set(ret[:k]) & rel) / len(rel)) if rel else 0
    def mrr(rel, ret):               return next((1/(i+1) for i, d in enumerate(ret) if d in rel), 0)
    def ndcg_at_k(rel, ret, k):
        dcg = sum(1/np.log2(i+2) for i, d in enumerate(ret[:k]) if d in rel)
        ideal = sum(1/np.log2(i+2) for i in range(min(len(rel), k)))
        return dcg/ideal if ideal else 0
    m = {f"precision@{k}": [], f"recall@{k}": [], "mrr": [], f"ndcg@{k}": []}
    for rel, ret in zip(relevant_docs, retrieved_docs):
        rel = set(rel)
        m[f"precision@{k}"].append(precision_at_k(rel, ret, k))
        m[f"recall@{k}"].append(recall_at_k(rel, ret, k))
        m["mrr"].append(mrr(rel, ret))
        m[f"ndcg@{k}"].append(ndcg_at_k(rel, ret, k))
    return {name: float(np.mean(v)) for name, v in m.items()}
```

Compute cosine similarity on **normalized** vectors (`a·b` after L2-normalization) — this is why normalization at embed time matters.

## Do's and Don'ts

**Do:** match the model to the use case; chunk on semantic boundaries; normalize for cosine similarity; batch requests; cache embeddings to avoid recomputing.

**Don't:** ignore token limits (silent truncation loses information); mix embedding models in one index (incompatible spaces); skip preprocessing; over-chunk so small that each chunk loses its surrounding context.

## Resources

- OpenAI Embeddings guide: https://platform.openai.com/docs/guides/embeddings
- Sentence Transformers: https://www.sbert.net/
