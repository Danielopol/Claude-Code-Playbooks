# ccplaybooks

Search and install [Claude Code Playbooks](https://www.claudecodehq.com/playbooks) from your terminal: 1,200+ ready-made `CLAUDE.md` templates and Skills for research, finance, marketing, file organization and more.

No install needed. Run it with `npx` (Node.js 18.17 or newer):

```bash
npx ccplaybooks search invoice automation
```

## Commands

### `search <query...>`

```bash
npx ccplaybooks search research papers
npx ccplaybooks search budget --category finance --difficulty beginner
npx ccplaybooks search --tag excel --limit 50
```

Every word must match the playbook's title, tags or description. Options: `--category`/`-c`, `--difficulty`/`-d`, `--tag`/`-t`, `--limit`/`-n` (1-100), `--offset`.

### `show <slug>`

```bash
npx ccplaybooks show invoice-automation
npx ccplaybooks show invoice-automation --template   # just the raw template
```

### `add <slug>`

Installs a playbook into the current folder.

```bash
npx ccplaybooks add invoice-automation        # writes ./CLAUDE.md
npx ccplaybooks add ai-seo                    # a Skill: writes ./.claude/skills/ai-seo/SKILL.md
npx ccplaybooks add ai-seo --global           # a Skill for every project: ~/.claude/skills/ai-seo/SKILL.md
```

Most playbooks are `CLAUDE.md` templates. A playbook whose template is already a Skill installs as a Skill. Override with `--skill` or `--claude-md`.

`add` never overwrites a file silently. If `CLAUDE.md` already exists, choose:

| Flag | Effect |
|---|---|
| `--append` / `-a` | Add the playbook to the end of the existing file |
| `--force` / `-f` | Replace the file |
| `--dry-run` | Show what would be written, change nothing |
| `--dir <path>` | Install somewhere other than the current folder |

Each install starts with a short comment recording where it came from (the playbook page and its original source), so running `add` twice is detected.

### `categories`

Lists category ids with playbook counts, for use with `search --category`.

## Scripting

Every command takes `--json`. Exit codes: `0` success, `1` failure (network error, not found, file already exists), `2` invalid usage.

```bash
npx ccplaybooks search excel --json | jq -r '.results[].slug'
```

The CLI is a thin client for a public, read-only HTTP API. You can call it directly:

| Endpoint | Returns |
|---|---|
| `GET https://www.claudecodehq.com/api/v1/playbooks?q=&category=&difficulty=&tag=&limit=&offset=` | Search results |
| `GET https://www.claudecodehq.com/api/v1/playbooks/{slug}` | One playbook, template included |
| `GET https://www.claudecodehq.com/api/v1/categories` | Categories with counts |

Set `CCPLAYBOOKS_API_URL` to point the CLI at another server, such as a local dev build (`http://localhost:3000/api/v1`).

## Licensing

The CLI is MIT-licensed. The playbooks are not all covered by that license. Many are adapted from other authors' open-source work, and each playbook's original source is recorded in its install comment and in `show`. See [claudecodehq.com/licensing](https://www.claudecodehq.com/licensing).
