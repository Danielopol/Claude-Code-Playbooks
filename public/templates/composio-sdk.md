# Composio SDK

Build AI agents and applications with access to 200+ external tools. Composio provides two primary approaches for integration.

## Two Development Approaches

### Tool Router (Agent Development)

For chat-based or autonomous agents that need access to external tools like Gmail, Slack, and GitHub.

**Features:**
- Session-based user isolation
- Dynamic toolkit configuration
- Automatic authentication management
- MCP-compatible server URLs
- Real-time event handling with triggers

**Best for:**
- Multi-user AI agents
- Chat-based assistants
- Autonomous workflows
- Framework integration (Vercel AI SDK, LangChain)

### Direct Execution (App Development)

For traditional applications requiring manual tool control.

**Features:**
- Manual tool execution control
- CRUD operations for accounts and configs
- Custom tool creation
- Pre/post-execution hooks
- Event-driven workflows

**Best for:**
- CRUD applications
- Automation workflows
- Multi-tenant systems
- Custom integrations

## Core Concepts

### User Sessions

```python
# Create isolated session per user
session = composio.create_session(user_id="user_123")

# Each user has separate:
# - Authentication tokens
# - Tool access
# - Data isolation
```

### Authentication Flows

**Automatic Auth:**
- Tool Router handles OAuth flows
- Users authorize once per app
- Tokens managed automatically

**Manual Auth:**
- Direct control over auth process
- Custom connection management
- Explicit token handling

### Toolkit Configuration

Query available tools dynamically:
- List connected apps
- Check authentication status
- Filter by capabilities
- Build dynamic UIs

### Triggers (Event-Driven)

React to external events:
- Webhook-based notifications
- Real-time event handling
- Automated responses
- Event filtering

## Supported Integrations

### Communication
- Gmail, Outlook, SendGrid
- Slack, Discord, Teams, Telegram
- WhatsApp, Intercom

### Development
- GitHub, GitLab, Bitbucket
- Jira, Linear, Asana
- Confluence, Notion

### Productivity
- Google Drive, Dropbox, OneDrive
- Google Sheets, Airtable
- Notion, Coda

### CRM & Sales
- Salesforce, HubSpot
- Pipedrive, Close
- Zendesk, Freshdesk

### Analytics
- Mixpanel, Amplitude
- Google Analytics, PostHog
- Segment, Datadog

## Quick Start

### Tool Router Setup

```python
from composio import ToolRouter

# Initialize with API key
router = ToolRouter(api_key="your_key")

# Create user session
session = router.create_session(user_id="user_123")

# Get MCP-compatible URL
mcp_url = session.get_mcp_url()

# Configure toolkit
session.configure_toolkit(["gmail", "slack", "github"])
```

### Direct Execution Setup

```python
from composio import Composio

# Initialize client
client = Composio(api_key="your_key")

# Get available tools
tools = client.get_tools()

# Execute specific tool
result = client.execute(
    tool="gmail_send_email",
    params={"to": "user@example.com", "subject": "Hello"}
)
```

## Common Patterns

### Multi-User Agent

```python
# Handle multiple users with isolated sessions
def handle_user_request(user_id, request):
    session = router.get_or_create_session(user_id)

    # Check if user has authorized required apps
    if not session.is_authorized("gmail"):
        return session.get_auth_url("gmail")

    # Execute tool with user's credentials
    return session.execute(request)
```

### Event-Driven Workflow

```python
# Set up trigger for new emails
@composio.trigger("gmail_new_email")
def on_new_email(event):
    # Process incoming email
    email = event.data

    # Take action (e.g., create issue)
    composio.execute("github_create_issue", {
        "title": f"Email from {email.sender}",
        "body": email.content
    })
```

## Best Practices

1. **Use Tool Router for agents**: Simplifies multi-user management
2. **Handle auth gracefully**: Guide users through OAuth flows
3. **Implement session isolation**: Never mix user credentials
4. **Check rate limits**: External APIs have constraints
5. **Use triggers sparingly**: Monitor webhook costs
6. **Cache tool lists**: Don't query on every request

## Resources

- Documentation: platform.composio.dev/docs
- API Reference: platform.composio.dev/api
- Tool Catalog: platform.composio.dev/tools
