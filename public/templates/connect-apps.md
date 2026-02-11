# Connect Apps

Enable Claude to integrate with 1,000+ external applications, allowing real actions instead of just text generation.

## Installation

```bash
/plugin install composio-toolrouter
```

## Configuration

```bash
/composio-toolrouter:setup
```

Requires a free API key from platform.composio.dev. Setup takes approximately one minute.

## Capabilities

### Communication
- **Email**: Send via Gmail, Outlook, SendGrid
- **Messaging**: Post to Slack, Discord, Teams, Telegram
- **Notifications**: Push to various platforms

### Development
- **Issues**: Create in GitHub, GitLab, Jira, Linear
- **PRs**: Comment, review, merge
- **Projects**: Update boards and backlogs

### Documentation
- **Notes**: Add to Notion, Google Docs, Confluence
- **Wikis**: Update team documentation
- **Files**: Manage in cloud storage

### And Many More
- CRM updates (Salesforce, HubSpot)
- Calendar management (Google, Outlook)
- Task creation (Asana, Todoist, Monday)
- Spreadsheet updates (Google Sheets, Airtable)

## How It Works

### Request Flow
1. User makes natural language request
2. Composio Tool Router identifies the appropriate tool
3. First-time use triggers OAuth authorization
4. Action executes in the actual application
5. Confirmation returned to user

### Authorization
- One-time OAuth per application
- Secure token storage
- Automatic refresh handling
- Revocable at any time

## Common Use Cases

### Send Actual Emails
Instead of: "Here's a draft email..."
Actually: Sends the email via Gmail/Outlook

```
"Send an email to john@example.com about the project deadline"
```

### Create Development Issues
Instead of: "Here's what the issue would look like..."
Actually: Creates the issue in GitHub/Jira

```
"Create a GitHub issue titled 'Fix login bug' with high priority"
```

### Post Team Messages
Instead of: "Here's a message you could post..."
Actually: Posts to Slack/Discord

```
"Post to #engineering that the deploy is complete"
```

### Update Documentation
Instead of: "Here's content for your doc..."
Actually: Adds to Notion/Google Docs

```
"Add these meeting notes to my Notion workspace"
```

## Example Requests

### Email Actions
- "Send an email to sarah@company.com with the meeting summary"
- "Reply to the latest email from the client"
- "Forward the budget report to the finance team"

### Issue Management
- "Create a GitHub issue for the authentication bug"
- "Add a comment to JIRA ticket PROJ-456"
- "Move Linear issue to 'In Progress'"

### Team Communication
- "Post to #general that we're doing maintenance"
- "Send a Discord message to the dev channel"
- "Update the Teams channel with status"

### Document Updates
- "Add these notes to my Notion page"
- "Update the Google Doc with new requirements"
- "Create a new Confluence page for the project"

## Troubleshooting

### Plugin Installation Issues
- Verify Claude Code version is current
- Check internet connectivity
- Try reinstalling the plugin

### Authorization Failures
- Clear existing auth and retry
- Check app-specific permissions
- Verify API key is valid

### Action Denied
- Confirm you have required permissions
- Check if action needs admin access
- Verify the target resource exists

## Best Practices

1. **Be specific**: Include all necessary details in requests
2. **Use real values**: Provide actual emails, usernames, IDs
3. **Authorize early**: Set up OAuth before you need it
4. **Check permissions**: Some actions require elevated access
5. **Verify results**: Confirm actions completed as expected

## Security Notes

- OAuth tokens stored securely
- Permissions scoped to necessary actions
- Revoke access anytime via app settings
- No password storage required
