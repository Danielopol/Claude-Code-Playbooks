# DeepTutor CLI Skill

> Teach your AI agent to configure, manage, and use DeepTutor — an intelligent learning platform — entirely through the command line.

## When to Use

Use this skill when the user wants to:
- Set up or configure DeepTutor
- Chat with DeepTutor or run a capability (deep solve, quiz generation, deep research, math animation)
- Create, manage, or search knowledge bases
- Manage TutorBot instances
- View or manage learning memory, sessions, or notebooks
- Start the DeepTutor API server

## Prerequisites

- Python 3.11+
- DeepTutor installed: `pip install -e .` (core) or `pip install -e ".[server]"` (with web)
- Run `python scripts/start_tour.py` for first-time interactive setup (configures LLM, embedding, search providers and writes `.env`)

## Commands

### Chat & Capabilities

```bash
# Interactive REPL
deeptutor chat
deeptutor chat --capability deep_solve --kb my-kb --tool rag --tool web_search

# One-shot capability execution
deeptutor run chat "Explain Fourier transform"
deeptutor run deep_solve "Solve x^2 = 4" --tool rag --kb textbook
deeptutor run deep_question "Linear algebra" --config num_questions=5
deeptutor run deep_research "Attention mechanisms" --kb papers
deeptutor run math_animator "Visualize a Fourier series"

# Options for `run`:
#   --session <id>         Resume existing session
#   --tool/-t <name>       Enable tool (repeatable): rag, web_search, code_execution, reason, brainstorm, paper_search
#   --kb <name>            Knowledge base (repeatable)
#   --notebook-ref <ref>   Notebook reference (repeatable)
#   --history-ref <id>     Referenced session id (repeatable)
#   --language/-l <code>   Response language (default: en)
#   --config <key=value>   Capability config (repeatable)
#   --config-json <json>   Capability config as JSON
#   --format/-f <fmt>      Output format: rich | json
```

### Knowledge Bases

```bash
deeptutor kb list                              # List all knowledge bases
deeptutor kb info <name>                       # Show knowledge base details
deeptutor kb create <name> --doc file.pdf      # Create from documents (--doc repeatable)
deeptutor kb add <name> --doc more.pdf         # Add documents incrementally
deeptutor kb search <name> "query text"        # Search a knowledge base
deeptutor kb set-default <name>                # Set as default KB
deeptutor kb delete <name> [--force]           # Delete a knowledge base
```

### TutorBot

```bash
deeptutor bot list                             # List all TutorBot instances
deeptutor bot create <id> --name "My Tutor"    # Create and start a new bot
deeptutor bot start <id>                       # Start a bot
deeptutor bot stop <id>                        # Stop a bot
```

### Memory

```bash
deeptutor memory show [summary|profile|all]    # View learning memory
deeptutor memory clear [summary|profile|all]   # Clear memory (--force to skip confirm)
```

### Sessions

```bash
deeptutor session list [--limit 20]            # List sessions
deeptutor session show <id>                    # View session messages
deeptutor session open <id>                    # Resume session in REPL
deeptutor session rename <id> --title "..."    # Rename a session
deeptutor session delete <id>                  # Delete a session
```

### Notebooks

```bash
deeptutor notebook list                        # List notebooks
deeptutor notebook create <name>               # Create a notebook
deeptutor notebook show <id>                   # View notebook records
deeptutor notebook add-md <id> <file.md>       # Import markdown as record
deeptutor notebook replace-md <id> <rec> <f>   # Replace a markdown record
deeptutor notebook remove-record <id> <rec>    # Remove a record
```

### System

```bash
deeptutor config show                          # Print current configuration
deeptutor plugin list                          # List registered tools and capabilities
deeptutor plugin info <name>                   # Show tool/capability details
deeptutor provider login <provider>            # OAuth login (openai-codex, github-copilot)
deeptutor serve [--port 8001] [--reload]       # Start API server
```

## REPL Slash Commands

Inside `deeptutor chat`, use these:

| Command | Effect |
|:---|:---|
| `/quit` | Exit REPL |
| `/session` | Show current session id |
| `/new` | Start a new session |
| `/tool on\|off <name>` | Toggle a tool |
| `/cap <name>` | Switch capability |
| `/kb <name>\|none` | Set or clear knowledge base |
| `/history add <id>` / `/history clear` | Manage history references |
| `/notebook add <ref>` / `/notebook clear` | Manage notebook references |
| `/refs` | Show active references |
| `/config show\|set\|clear` | Manage capability config |

## Typical Workflows

**First-time setup:**
```bash
cd DeepTutor
pip install -e ".[server]"
python scripts/start_tour.py    # Interactive guided setup
```

**Daily learning:**
```bash
deeptutor chat --kb textbook --tool rag --tool web_search
```

**Build a knowledge base from documents:**
```bash
deeptutor kb create physics --doc ch1.pdf --doc ch2.pdf
deeptutor run chat "Explain Newton's third law" --kb physics --tool rag
```

**Generate quiz questions:**
```bash
deeptutor run deep_question "Thermodynamics" --kb physics --config num_questions=5
```
