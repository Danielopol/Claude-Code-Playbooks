# Zotero from the Shell

Read and write a Zotero library from the shell with the `zotero-cli` command — search papers by keyword or meaning, read PDF full text and page ranges, get and set metadata, manage collections/tags/notes/annotations, add items by DOI/URL/ISBN, and export bibliographies. Use whenever the user asks about their Zotero library, references, citations, saved papers, or reading notes.

Prefer `zotero-cli` over a Zotero MCP server when shell access is available — an MCP server's tool schemas cost real context on every request whether or not they're used, while a CLI call costs only what's actually run.

## Setup Check

Before the first real call:

```bash
zotero-cli config          # prints the resolved Zotero settings
```

If that fails, Zotero isn't reachable. Local mode needs the Zotero desktop app running with its local API enabled; web mode needs `ZOTERO_API_KEY` and `ZOTERO_LIBRARY_ID`. Say so rather than guessing at library contents.

## Always Pass --json When You Will Read the Output

Default output is Markdown for humans. `--json` gives one object per invocation with a stable shape, so output never needs to be parsed from prose:

```json
{"ok": true, "command": "search", "schema": 1, "data": {...}}
{"ok": false, "command": "search", "schema": 1, "error": {"message": "...", "code": "..."}}
```

Both go to stdout; `[INFO]`/`[WARN]` diagnostics go to stderr. Check `ok` before using `data`. Run `zotero-cli --json-schema` for the full contract.

## The Core Loop: Find Keys, Then Act on Keys

Almost every task is: find keys, then act on them. Item keys are 8 characters and are the currency of every command.

```bash
# 1. find — use --detail keys_only to keep the result small while browsing
zotero-cli --json search "attention mechanisms" --limit 10 --detail keys_only

# 2. act — metadata, full text, or a page range
zotero-cli --json get metadata ABCD1234
zotero-cli --json get fulltext ABCD1234
zotero-cli --json read ABCD1234 --start-page 3 --end-page 8
```

Pipe keys straight into the next call:

```bash
zotero-cli --json search "diffusion models" --limit 5 --detail keys_only \
  | jq -r '.data.items[].key' \
  | while read -r key; do zotero-cli --json get metadata "$key"; done
```

## Choosing a Search Mode

| Mode | Use it for | Command |
|---|---|---|
| `items` (default) | A title, author, or phrase you already know | `search "Vaswani attention"` |
| `semantic` | A topic or idea, no exact wording | `search --mode semantic "why transformers scale"` |
| `tag` | Items filed under a tag | `search --mode tag "to-read,important"` |
| `advanced` | Structured field conditions | `search --mode advanced --conditions '[...]'` |
| `citekey` | A BibTeX citation key | `search --mode citekey smith2020` |
| `notes` | Text inside notes, not item fields | `search --mode notes "research question"` |

`semantic` needs the search index built (`zotero-cli db status` to check, `zotero-cli db update` to build). If the index is empty, fall back to `items` mode and say why, rather than reporting no results.

Every search covers one library — the active one. When you don't know which library holds something, or a search comes up empty and the item might be in a group library, add `--all-libraries`:

```bash
zotero-cli search "Cladder-Micus" --all-libraries
```

Each result is then labeled with its library name. This needs the SQLite backend (the local-mode default) and errors clearly if that's not in use — try it once and fall back to per-library searches if refused. Tag filters work with it; `--collection` does not, since a collection lives inside one library.

## Reading Efficiently

`get fulltext` on a book-length PDF returns a lot of text. When only one section is needed, use the outline to find it and read only those pages:

```bash
zotero-cli --json outline ABCD1234
zotero-cli --json read ABCD1234 --start-page 42 --end-page 55
```

For "what does my library say about X," prefer `search --mode semantic` followed by targeted `get metadata` calls over reading whole papers.

## Paging

Listings cap at `--limit`. When more exists, the response says so and names the next offset:

```bash
zotero-cli --json get collection-items QS7TQPPA --limit 100 --offset 100
```

Keep going until `data.count` is less than `--limit`.

## Writing

Write commands report what they did as text under `data.text`.

```bash
zotero-cli add doi 10.1038/s41586-021-03819-2 -c "Reading List"
zotero-cli edit ABCD1234 --title "Corrected Title" --add-tags reviewed
zotero-cli notes create --item-key ABCD1234 --text "Key finding: ..."
zotero-cli batch --item-keys A1B2C3D4,E5F6G7H8 --add-tags screened
```

`add` is idempotent by default — re-running it files the existing item into the named collection rather than creating a duplicate. Use `--if-exists skip` to never touch an existing item.

Before a destructive change (`delete`, `duplicates merge`, a `batch` over many items), confirm with the user and show what will be affected. `delete item` refuses to delete notes unless `--allow-note` is passed.

Writes in local mode need a one-time authorization step (Zotero 7 or newer) or web API credentials. A write refused for that reason will say so explicitly.

## Reading and Annotating a Paper

```bash
zotero-cli get children ITEM_KEY                          # the PDF's attachment key
zotero-cli read ITEM_KEY --start-page 1 --end-page 99     # end page clamps to the last page
zotero-cli path ATTACHMENT_KEY                            # the PDF file on disk
```

Extracted text is reliable for prose and unreliable for math, figures, and tables — symbols drop out and table cells run together. `read` flags each page where that happens ("Garbled in this text: Equation (1), Table 2"). For those pages, view the page itself as an image:

```bash
zotero-cli read ITEM_KEY --start-page 4 --format image                              # PNG per page, up to 10
zotero-cli read ITEM_KEY --start-page 4 --format image --rect 0.35,0.49,0.3,0.05    # zoom into one region
```

To annotate: plan everything, check it, then write it in one run.

1. `zotero-cli --json layout ATTACHMENT_KEY` lists figure, table, and equation boxes with their captions and a paste-ready `rect` argument.
2. Write one JSON object per line: `{"page": 4, "text": "exact words", "comment": "...", "color": "yellow"}` for a highlight, or `{"page": 3, "rect": "x,y,w,h", "comment": "..."}` for a box. Copy highlight text exactly from `read` output — it's matched against that page and two pages either side.
3. `zotero-cli annotations batch --attachment-key ATTACHMENT_KEY --file plan.jsonl --dry-run` shows the words each highlight would cover. Fix every miss before proceeding.
4. Run it again without `--dry-run`. Anything that didn't land is listed under `data.results` with `ok: false`, and the exit code is 1.

Colors follow Zotero's names: yellow, red, green, blue, purple, magenta, orange, gray. Three or four colors with fixed meanings read better than eight — record what each one means in a note on the item.

## When Something Looks Wrong

- **Empty search results**: check `zotero-cli config` and, for semantic mode, `zotero-cli db status`. Don't report "you have no papers on X" until the library is confirmed reachable and indexed.
- **`ok: false`**: read `error.message` — it names the cause directly.
- **A partial-results note on a search** means the scan was cut short, not that nothing else matched — narrow the query and re-run.
- **An item marked `"deleted": true`** is in the trash. Don't treat it as part of the live library.

## Full Command Reference

`zotero-cli <command> --help` covers any command not shown above.
