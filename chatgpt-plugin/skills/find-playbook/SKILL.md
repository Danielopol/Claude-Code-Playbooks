---
name: find-playbook
description: Find a ready-made instruction template for a task the user wants an AI agent to handle, such as processing invoices, reviewing literature or organizing files, then show it and explain how to use it.
---

# Find a playbook

1. Pick one to three keywords from the user's task and call `search_playbooks`. Add `category` or `difficulty` only if the user asked for them.
2. If nothing matches, retry with fewer or broader words, or call `list_categories` and search within the closest category. If there is still no match, say so. Do not invent a playbook.
3. Show up to three matches, each with a one-line description and its page link, and ask which one to open. If one clearly fits, open it directly.
4. Call `get_playbook` with the chosen slug.
5. Show the template in a code block, and link the playbook page and its source where one is known.
6. Explain where the template goes: the `install` field gives the path for Claude Code. For other AI tools, suggest adding it to that tool's custom or project instructions and adapting any Claude-specific steps.

Before the user relies on a template, point out anything it needs that they may not have, such as other tools or API keys.
