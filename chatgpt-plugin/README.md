# ChatGPT plugin

Packages the MCP server at `https://www.claudecodehq.com/api/plugin/mcp` for the plugin directory shared by ChatGPT and Codex. This endpoint has the same tools as `/api/mcp`, but only serves the playbooks in `src/content/plugin-catalog.json`.

| Path | Purpose |
|---|---|
| `plugin.json` | Listing details and review test cases |
| `mcp.json` | Points to the MCP server. It carries no auth block, so choose **No authentication** in the portal |
| `skills/find-playbook/` | Tells the model how to search, then show a template |
| `assets/` | Listing icons, cropped from `public/logo.png` |

Build the zip, which is written to `dist/`:

```bash
npm run plugin:build
```

The tools themselves live in `src/lib/mcp.ts`. OpenAI rescans the server daily, so server changes need no new zip. Listing or skill changes do.

## What the plugin serves

`npm run license:audit` regenerates the catalog and `research/license-audit/playbook-licenses.csv`, whose `plugin` column gives the decision and reason for each playbook. New playbooks stay out of the plugin until the audit has passed them. To be included, a playbook needs:

- a permissive license, read from a license file in its source repo
- a source link that still works
- no conflict between that license file and the source file's own `license:` line
- no Apache `NOTICE` file in the repo, since those carry extra requirements

The build fails if the listing claims more playbooks than the catalog has.

## Submitting

Requirements are from [Upload and submit your plugin](https://developers.openai.com/apps-sdk/deploy/submission) and [Plugin guidelines](https://developers.openai.com/apps-sdk/app-developer-guidelines). Check them again before submitting, because they change.

1. **Deploy the site** so `/api/plugin/mcp`, the `destructiveHint` annotation, `/support`, the privacy policy update and the challenge route are live.
2. **Try it privately.** In ChatGPT's Plugins page, choose **Add custom MCP server**, then **Create as a plugin**, and run every test case in `plugin.json`.
3. **Verify your organization** at [platform.openai.com/settings/organization/general](https://platform.openai.com/settings/organization/general). Publishing under an unverified name is rejected. Set `developerName` and `author.name` in `plugin.json` to the verified name, then rebuild.
4. **Upload the zip** at [platform.openai.com/plugins](https://platform.openai.com/plugins): **Upload new or existing plugin**, choose the developer identity, then **Upload plugin**.
5. **Connect the MCP server** with URL `https://www.claudecodehq.com/api/plugin/mcp` and **No authentication**.
6. **Verify the domain.** Copy the token from the portal into `OPENAI_APPS_CHALLENGE_TOKEN` in Vercel and redeploy. Confirm that `https://www.claudecodehq.com/.well-known/openai-apps-challenge` returns only the token, then finish the check and run **Scan Tools**.
7. **Record a demo** that shows the test cases running in ChatGPT, and add the link as the demo video in the portal.
8. **Choose countries** in the portal if asked. `publication.countries` is left out of `plugin.json` on purpose.
9. **Submit for review** and complete the policy attestations. Feedback arrives by email, and you choose when to publish after approval.

No reviewer credentials are needed because the server has no sign-in.

## Keep out of the plugin

OpenAI's guidelines say plugins "must not serve advertisements". Keep sponsor cards and affiliate links out of tool responses, and keep pricing and promotions out of the listing text.
