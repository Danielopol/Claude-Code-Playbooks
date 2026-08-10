# Security Guidance Review

## What This Is

Continuous security review for AI-generated code, in three layers that fire at different moments:

1. **Pattern warnings** — instant regex-based reminders on every Edit/Write for known-dangerous patterns
2. **Diff review** — when the turn ends, the diff goes to a fast model call, and high-severity findings feed back so they're fixed before you see the response
3. **Agentic commit review** — on `git commit`, a reviewer reads related files to trace data flow across the codebase, catching multi-file vulnerabilities pattern matching misses

Findings cover the common web-vulnerability classes: injection, XSS, SSRF, hardcoded secrets, IDOR, auth bypass, unsafe deserialization, path traversal.

---

## Layer 1: Pattern Warnings

Roughly 25 known-dangerous patterns trigger an immediate reminder on file edits. Among them:

| Pattern | Risk |
|---|---|
| `yaml.load` without `SafeLoader` | Arbitrary code execution |
| `torch.load(weights_only=False)` | Arbitrary code execution on untrusted checkpoints |
| `pickle.load` on untrusted data | Arbitrary code execution |
| Raw `innerHTML` assignment | XSS |
| `dangerouslySetInnerHTML` | XSS |
| `eval()` / `exec()` | Code injection |
| `os.system` with interpolated input | Command injection |
| Hardcoded secrets | Credential leak |
| Shell commands with `shell=True` | Command injection |

These are instant and local — no model call, no latency.

## Layer 2: Diff Review

At the end of each turn, the changed file paths, diff hunks, and relevant file contents are sent for review. High-severity findings are fed back so they can be fixed in the same turn.

## Layer 3: Agentic Commit Review

On commit, a reviewer with read access traces data flow across files. This is what catches the vulnerabilities pattern matching structurally cannot: IDOR, auth bypass, cross-file SSRF — anything where the flaw only exists in the relationship between two files.

---

## Configuration

All configuration is via environment variables. None are required for default behavior.

### Selecting a model

```bash
# 1P / gateway: canonical model id
SECURITY_REVIEW_MODEL=claude-opus-4-7

# Bedrock: inference-profile id
SECURITY_REVIEW_MODEL=us.anthropic.claude-opus-4-7

# Vertex: date-tag form
SECURITY_REVIEW_MODEL=claude-opus-4-7@20260218
```

`SECURITY_REVIEW_MODEL` controls the diff review. `SG_AGENTIC_MODEL` (same syntax) controls the agentic commit reviewer, and defaults to the same model.

### Enabling and disabling layers

| Variable | Default | Effect |
|---|---|---|
| `SECURITY_GUIDANCE_DISABLE=1` | unset | Kill switch — disables everything |
| `ENABLE_PATTERN_RULES=0` | on | Disable layer 1 (regex warnings) |
| `ENABLE_CODE_SECURITY_REVIEW=0` | on | Disable all LLM reviews |
| `ENABLE_STOP_REVIEW=0` | on | Disable only the end-of-turn diff review, keeping commit/push reviews. Useful in multi-agent or shared-worktree setups where another agent can move HEAD between turns |
| `ENABLE_COMMIT_REVIEW=0` | on | Disable layer 3 (agentic commit review) |

### Higher-recall mode

```bash
SG_DUAL_OR=on   # default off
```

Runs two parallel review calls and unions the findings. Catches a few percentage points more vulnerabilities, at roughly 2× the API cost per review. Most users don't need it.

---

## Org-Specific Policies

Drop a `claude-security-guidance.md` in any of:

- `~/.claude/claude-security-guidance.md` — user-wide rules
- `<project>/.claude/claude-security-guidance.md` — project rules, meant to be committed
- `<project>/.claude/claude-security-guidance.local.md` — local overrides, meant to be gitignored

All three are loaded and concatenated in the order user → project → project-local. If the combined size exceeds the 8 KB prompt budget, the tail is truncated — so user-wide rules survive and project-local rules are dropped first.

The agentic commit reviewer does not currently read this file.

### Example

```markdown
# Acme security rules

- All SELECTs against the `customers` or `orders` tables MUST go through `db.replica`,
  never `db.primary`. Primary is for writes only.
- Background jobs must not use the user-context auth token; they get
  service-account creds from `jobs.get_service_account()`.
- Calls to `requests.get(url)` with a user-controlled `url` need
  the SSRF-allowlist wrapper at `acme.net.safe_request`.
```

Built-in rules already cover the common web-vulnerability classes. Use this file for things specific to your codebase that a model can't infer.

**Never put secrets in this file** — its contents are appended to the prompt on every review.

---

## Privacy and Data Handling

Reviews send data to a model endpoint. Specifically:

- Each diff review transmits changed file paths, diff hunks, and the relevant file contents
- Each agentic commit review additionally transmits any files the reviewer pulls in while tracing data flow
- Your `claude-security-guidance.md` contents are appended to every review prompt

Where that data goes depends on configuration:

- **Default (Anthropic API / subscription)** — sent to `api.anthropic.com`, handled under Anthropic's Commercial Terms and Privacy Policy
- **LLM gateway** (`ANTHROPIC_BASE_URL` set) — sent to your gateway instead; the gateway operator's terms apply
- **Third-party providers** (Bedrock / Vertex / Foundry) — sent to your configured provider endpoint; that provider's terms apply

A debug log is written to `~/.claude/security/log.txt` (override with `SECURITY_GUIDANCE_DEBUG_LOG`). It contains diffstate metadata and finding categories — no full file contents, no model prompts — and rotates at 1 MB. Nothing is uploaded.

---

## Limitations

This is a best-effort assistive tool, not a guarantee.

Treat findings as suggestions, not as a substitute for human code review, SAST/DAST, dependency scanning, or penetration testing. The reviewer can miss vulnerabilities, produce false positives, and behave differently across codebases, languages, and model versions.

---

## Troubleshooting

**Doesn't seem to fire** — run with `--debug-file /tmp/claude/debug.txt` and grep for `security_reminder_hook`. Also check `~/.claude/security/log.txt`.

**Review never finds anything** — verify your API path works. On third-party providers, check that `SECURITY_REVIEW_MODEL` is set to a provider-specific ID rather than a bare canonical name. On gateways, check the gateway logs for `POST /v1/messages` traffic.

**Too many false positives** — drop `SECURITY_REVIEW_MODEL` to a cheaper model and re-evaluate. If precision is the priority, stay on the stronger model.

**Silence a specific finding** — add a comment on the line explaining why it's safe; the reviewer treats inline justifications as exclusions. For systemic exclusions, document them in `claude-security-guidance.md`.

---

## Prerequisites

- Claude Code CLI ≥ v2.1.144
- Python 3.8+ on PATH (`python3`, `python`, or `py -3`)
- A working API path — subscription, API key, or third-party provider config
