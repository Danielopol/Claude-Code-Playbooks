# Claude Connectors Directory listing

Draft listing for the MCP server at `https://www.claudecodehq.com/api/mcp` in Anthropic's [Connectors Directory](https://claude.com/docs/connectors/building/submission). The fields below follow the portal's steps in order. Copy each block into the matching field at [claude.ai/directory/manage](https://claude.ai/directory/manage) (**Submit new**, then **MCP connector**).

Requirements are from [Submitting a connector](https://claude.com/docs/connectors/building/submission), [Review criteria](https://claude.com/docs/connectors/building/review-criteria), [Publish to the directory](https://claude.com/docs/directory/publish), the [Software Directory Policy](https://support.claude.com/en/articles/13145358-anthropic-software-directory-policy), the [Software Directory Terms](https://support.claude.com/en/articles/13145338-anthropic-software-directory-terms) and the [Trademark Guidelines](https://www.anthropic.com/legal/trademark-guidelines). They were read on 2026-11-10. Check them again before submitting, because they change.

## Decide before submitting

1. **The name.** The Directory Terms forbid statements that suggest "partnership with, sponsorship by, or endorsement by Anthropic", and the Trademark Guidelines bar using Anthropic's marks in a way that "implies … a relationship or affiliation with Anthropic" without prior approval. Neither page says anything about third-party names that contain "Claude" or "Claude Code". A listing called "Claude Code Playbooks", in Anthropic's own directory, is the part of this submission most likely to be questioned. Options:
   - Submit under the current name with the non-affiliation line in the description (the draft below), and accept that review may ask for a rename.
   - Ask first: Anthropic's trademark contact is `marketing@anthropic.com`, and connector review questions go to `mcp-review@anthropic.com`.
   - List under a name without the mark, such as **ccplaybooks**, which is already the CLI's npm name.
2. **The URL slug.** It is permanent once published. Use `ccplaybooks` rather than `claude-code-playbooks`, so a later rename doesn't leave the mark in the URL.
3. **The endpoint.** This draft lists `/api/mcp`, which serves all 1,290 playbooks and is the endpoint `/mcp` documents. `/api/plugin/mcp` serves only the 613 playbooks the license audit cleared for the ChatGPT plugin. If you list that one instead, change the counts in the one-liner and description to "600+" / "more than 600", and the server URL on `/mcp`.

## Before you open the portal

- [ ] Merge and deploy, so `https://www.claudecodehq.com/mcp` (the documentation URL) is live.
- [ ] Add `https://www.claudecodehq.com/api/mcp` as a custom connector in Claude (**Settings → Connectors → Add custom connector**, no OAuth) and run every example prompt in [Test & launch](#8-test--launch). The portal makes you confirm that you ran every tool yourself.
- [ ] Have the icon ready: `chatgpt-plugin/assets/logo.png` (512×512). The docs give no icon size, and `icon.png` (128×128) may be too small.

## 1. Connection

- **Server URL:** `https://www.claudecodehq.com/api/mcp`
- **Users connect to different URLs:** No. Everyone uses the same URL.

## 2. Tools

Nothing to enter. The portal reads the tools from the server. All three have a `title`, `readOnlyHint: true` and `destructiveHint: false`, so they should be grouped as read-only with nothing flagged:

| Tool | Title |
|---|---|
| `search_playbooks` | Search playbooks |
| `get_playbook` | Get a playbook |
| `list_categories` | List categories |

## 3. Listing

**Server name** (100 characters max)

```text
Claude Code Playbooks
```

**One-liner** (200 characters max)

```text
Search 1,200+ ready-made CLAUDE.md templates and Skills for research, finance, marketing, legal and more, and set the right one up in your project.
```

**Description** (2,000 characters max)

```text
Find a ready-made workflow for your task and set it up without leaving Claude. This connector searches the Claude Code Playbooks library: more than 1,200 instruction templates, written as CLAUDE.md files and Skills, for research, writing, finance, marketing, legal review, HR, file organization, developer tools and more.

Describe what you want to do, and Claude finds matching playbooks and explains what each one does, who it is for and how long it takes to set up. Pick one and Claude fetches its full template. In Claude Code, it saves the template where it belongs: CLAUDE.md in the project folder, or .claude/skills/<name>/SKILL.md for a Skill, and it asks before replacing a CLAUDE.md you already have. In chat, Claude shows the template and tells you where to save it.

Every template keeps an attribution comment that links to its original source and, where one applies, carries its license notice.

The connector has three read-only tools:
- search_playbooks: search by keywords, category or difficulty
- get_playbook: one playbook with its full template and where to save it
- list_categories: the 34 categories with how many playbooks each has

It is free and needs no account or sign-in. It only reads the public playbook library: it can't see your files, conversations or accounts, and its responses contain no ads or affiliate offers.

Claude Code Playbooks is an independent community project. It is not affiliated with or endorsed by Anthropic.
```

**Categories** (one to five). The docs don't publish the list, so pick the closest matches in the portal, in this order of preference: Productivity, Developer tools, Education, Research, Writing.

| Field | Value |
|---|---|
| Documentation URL | `https://www.claudecodehq.com/mcp` |
| Privacy policy URL | `https://www.claudecodehq.com/privacy` |
| Support contact | `https://www.claudecodehq.com/support` (or the email it lists) |
| Icon | `chatgpt-plugin/assets/logo.png` |
| URL slug | `ccplaybooks` (permanent, see [Decide before submitting](#decide-before-submitting)) |

## 4. Use cases

**Primary use cases**

```text
1. Find a workflow for a task: describe what you want to do (organize a Downloads folder, review a contract, automate invoices) and get matching playbooks with what each one does, who it is for and how long it takes to set up.
2. Set up a playbook in a project: fetch a playbook's full template and save it as CLAUDE.md or as a Skill in .claude/skills/, with its attribution and license notice kept at the top.
3. Browse the library: list the 34 categories, or filter searches by category and difficulty to find beginner, intermediate or advanced playbooks.
```

**What users need before they can connect**

```text
Nothing. No account, plan, API key or setup on our side. The connector is free and public.
```

**Reads, writes or both:** Reads only.

## 5. Company

| Field | Value |
|---|---|
| Company name | Claude Code Playbooks (or your legal or trading name, whichever you want reviewers to see) |
| Website | `https://www.claudecodehq.com` |
| Primary contact for review updates | Your name and the email you want review mail sent to |

## 6. Authentication

- **Authentication requirement:** None. Users never sign in.
- **Authentication methods:** None. No OAuth client, credentials or headers.

## 7. Data handling

| Question | Answer |
|---|---|
| Underlying API | Our own (first-party). The server reads the site's own playbook library and calls no third-party API. |
| Personal health data | No |
| Sponsored content | No. Tool responses contain no ads, sponsored content or affiliate links. The Directory Policy (4.C) bars connectors that serve them, so keep it that way: see `src/lib/mcp.ts`. |

## 8. Test & launch

**Test account / access instructions**

```text
No test account is needed: the server is public and has no sign-in. Add https://www.claudecodehq.com/api/mcp as a custom connector in Claude with no OAuth settings, or run "claude mcp add --transport http claude-code-playbooks https://www.claudecodehq.com/api/mcp" in Claude Code. All three tools are read-only and work on the full live library, so there is no sample data to set up.

Prompts to try:
1. "Find a playbook for organizing my Downloads folder." Calls search_playbooks and returns playbooks such as Smart Downloads Organizer and Auto-Organize Downloads Folder, with descriptions and page links.
2. "Find a contract review playbook and show me its template." Calls search_playbooks, then get_playbook, and shows the full template with its attribution comment and where to save it.
3. "What categories of playbooks are there? Show me beginner marketing playbooks." Calls list_categories, then search_playbooks with category and difficulty filters.
4. "Install the invoice-automation playbook as my CLAUDE.md." (Claude Code) Calls get_playbook and saves the template to CLAUDE.md, asking first if one already exists.
5. "Find a playbook for underwater basket weaving." Calls search_playbooks, which finds no match and suggests broader words, without inventing a playbook.

Documentation: https://www.claudecodehq.com/mcp
```

The Directory Policy (3.E) asks for at least three working example prompts. The searches behind prompts 1 to 4 returned matching playbooks against a local build on 2026-11-10. Prompt 5 checks the no-match path.

**Confirm you ran every tool:** tick only after running the prompts above in Claude against the live server.

## 9. Compliance

Seven acknowledgments, all required. The portal shows the wording; this is how each one applies here:

| Topic | How it applies |
|---|---|
| Directory guidelines | Read-only tools, each with a title and annotations; no catch-all tool; tool names under 64 characters |
| First-party API usage | The server only serves this site's own content, on its own domain |
| Financial transactions | None. Nothing is sold or paid for through the connector |
| AI media generation | None. The connector returns text only |
| Prompt injection | Tool descriptions describe only what each tool does. Templates are returned as data for the user to review and save, and the server's instructions tell Claude to ask before replacing an existing CLAUDE.md |
| Conversation data collection | None. The server receives only the tool arguments Claude sends, and doesn't store search terms (see `/privacy`) |
| Public documentation | `https://www.claudecodehq.com/mcp` |

## 10. Review and submit

Submissions are scanned automatically and listed as **Community** by default. Anthropic may later move a listing to **Verified** review on its own; there is no application for that. Review times aren't published. Questions go to `mcp-review@anthropic.com`.

After publishing, server changes need no resubmission because the tools are read from the server. Listing text is edited from the same portal, but the slug can't change.
