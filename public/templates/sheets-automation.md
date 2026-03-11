# Google Sheets Automation

Automate Google Sheets workflows for data synchronization, task management, reporting dashboards, and multi-platform integrations. Based on n8n's 7,800+ workflow templates.

## Overview

This workflow covers:
- Automated data sync from multiple sources
- Task management with Slack reminders
- Real-time reporting dashboards
- CRM/Marketing data aggregation
- Scheduled report generation

---

## Core Workflows

### 1. Multi-Source Data Aggregation

```
┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│ HubSpot     │   │ Stripe      │   │ Google      │
│ (CRM)       │   │ (Payments)  │   │ Analytics   │
└──────┬──────┘   └──────┬──────┘   └──────┬──────┘
       │                 │                 │
       └─────────────────┼─────────────────┘
                         │
                         ▼
              ┌──────────────────┐
              │ Google Sheets    │
              │ (Master Dashboard)│
              └──────────────────┘
                         │
                         ▼
              ┌──────────────────┐
              │ Slack/Email      │
              │ (Daily Report)   │
              └──────────────────┘
```

**n8n Configuration**:
```yaml
workflow: "Daily Business Metrics Sync"

schedule: "6:00 AM daily"

steps:
  1. fetch_crm_data:
      source: hubspot
      data:
        - new_leads_today
        - deals_closed
        - pipeline_value
        
  2. fetch_revenue_data:
      source: stripe
      data:
        - mrr
        - new_subscriptions
        - churn
        
  3. fetch_traffic_data:
      source: google_analytics
      data:
        - sessions
        - conversions
        - bounce_rate
        
  4. update_sheets:
      spreadsheet: "Business Dashboard"
      sheet: "Daily Metrics"
      action: append_row
      data:
        - date: today
        - leads: "{hubspot.new_leads}"
        - deals: "{hubspot.deals_closed}"
        - mrr: "{stripe.mrr}"
        - sessions: "{ga.sessions}"
        
  5. update_charts:
      refresh: automatic (Sheets built-in)
      
  6. send_summary:
      slack:
        channel: "#daily-metrics"
        message: |
          📊 Daily Metrics - {date}
          
          💰 Revenue: ${mrr} MRR
          👥 New Leads: {leads}
          🎯 Deals Closed: {deals}
          📈 Website Sessions: {sessions}
```

---

### 2. Task Management with Reminders

```yaml
workflow: "Sheets Task Tracker"

trigger:
  type: schedule
  frequency: every_15_minutes

sheet_structure:
  columns:
    - A: Task
    - B: Assignee
    - C: Due Date
    - D: Priority (High/Medium/Low)
    - E: Status (Todo/In Progress/Done)
    - F: Slack ID

steps:
  1. read_tasks:
      filter: |
        Status != "Done" AND
        Due Date <= TODAY() + 1
        
  2. categorize_urgency:
      overdue: Due Date < TODAY()
      due_today: Due Date == TODAY()
      due_tomorrow: Due Date == TODAY() + 1
      
  3. send_reminders:
      for_each: task
      
      overdue:
        slack_dm:
          to: "{assignee_slack_id}"
          message: |
            🚨 *OVERDUE*: {task_name}
            Due: {due_date} ({days_overdue} days ago)
            Priority: {priority}
            
      due_today:
        slack_dm:
          to: "{assignee_slack_id}"
          message: |
            ⏰ *Due Today*: {task_name}
            Priority: {priority}
            
  4. daily_recap:
      schedule: "6:00 PM"
      slack_channel: "#team"
      message: |
        📋 *Daily Task Recap*
        
        ✅ Completed: {completed_count}
        ⏳ In Progress: {in_progress_count}
        🚨 Overdue: {overdue_count}
        
        Top priorities for tomorrow:
        {tomorrow_tasks}
```

---

### 3. Automated Report Generation

```yaml
workflow: "Weekly Report Generator"

schedule: "Friday 5:00 PM"

steps:
  1. collect_data:
      sheets:
        - "Sales Data"
        - "Marketing Metrics"
        - "Support Tickets"
        
  2. calculate_metrics:
      sales:
        - total_revenue: SUM(revenue_column)
        - deals_closed: COUNT(won_deals)
        - avg_deal_size: AVG(deal_value)
        - win_rate: won / (won + lost)
        
      marketing:
        - leads_generated: COUNT(new_leads)
        - cost_per_lead: spend / leads
        - conversion_rate: conversions / visitors
        
      support:
        - tickets_resolved: COUNT(resolved)
        - avg_response_time: AVG(first_response)
        - csat_score: AVG(satisfaction)
        
  3. generate_report:
      format: google_doc
      template: "Weekly Report Template"
      sections:
        - executive_summary
        - sales_performance
        - marketing_metrics
        - customer_support
        - next_week_priorities
        
  4. create_charts:
      google_sheets:
        - revenue_trend: line_chart
        - deal_funnel: bar_chart
        - lead_sources: pie_chart
        
  5. distribute:
      email:
        to: leadership_team
        subject: "Weekly Business Report - Week {week_number}"
        attach: [report_doc, charts_pdf]
        
      slack:
        channel: "#leadership"
        message: "📊 Weekly report ready: {doc_link}"
```

---

### 4. Inventory/Stock Tracker

```yaml
workflow: "Inventory Alert System"

trigger:
  type: sheets_change
  sheet: "Inventory"
  
sheet_structure:
  columns:
    - Product
    - SKU
    - Current Stock
    - Reorder Level
    - Supplier
    - Lead Time (days)

steps:
  1. check_stock_levels:
      condition: Current Stock <= Reorder Level
      
  2. generate_alerts:
      for_each: low_stock_item
      actions:
        - update_cell:
            column: "Status"
            value: "REORDER NEEDED"
            format: red_background
            
        - slack_alert:
            channel: "#inventory"
            message: |
              ⚠️ *Low Stock Alert*
              
              Product: {product_name}
              SKU: {sku}
              Current: {current_stock}
              Reorder Level: {reorder_level}
              Supplier: {supplier}
              
        - email_supplier:
            if: auto_reorder == true
            template: "reorder_request"
            
  3. daily_summary:
      schedule: "9:00 AM"
      report:
        - total_skus: count
        - low_stock_items: count
        - out_of_stock: count
        - pending_orders: list
```

---

### 5. Form Responses → CRM + Slack

```yaml
workflow: "Google Form Lead Capture"

trigger:
  type: google_forms
  form: "Contact Us Form"
  
steps:
  1. capture_response:
      fields: [name, email, company, message, source]
      
  2. append_to_sheet:
      spreadsheet: "Lead Tracker"
      data:
        - timestamp: NOW()
        - name: "{name}"
        - email: "{email}"
        - company: "{company}"
        - message: "{message}"
        - status: "New"
        
  3. enrich_lead:
      clearbit:
        lookup_by: email
        append: [company_size, industry, linkedin]
        
  4. create_in_crm:
      hubspot:
        object: contact
        properties:
          email: "{email}"
          firstname: "{name}"
          company: "{company}"
          lead_source: "Website Form"
          
  5. notify_sales:
      slack:
        channel: "#new-leads"
        message: |
          🎉 *New Lead!*
          
          👤 {name}
          🏢 {company} ({company_size} employees)
          📧 {email}
          💬 "{message}"
          
          [View in HubSpot]({hubspot_link})
          
  6. auto_respond:
      email:
        to: "{email}"
        template: "thank_you_for_contacting"
```

---

## Sheet Templates

### Sales Dashboard

```
┌────────────────────────────────────────────────────────────────┐
│                    SALES DASHBOARD - {Month}                   │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐          │
│  │ Revenue │  │ Deals   │  │ Avg Deal│  │ Win Rate│          │
│  │ $125K   │  │ 23      │  │ $5,400  │  │ 34%     │          │
│  │ ▲ 15%   │  │ ▲ 8%    │  │ ▲ 12%   │  │ ▼ 2%   │          │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘          │
│                                                                │
│  [Revenue Trend Chart - Line]                                  │
│  [Pipeline by Stage - Funnel]                                  │
│  [Top Sales Reps - Bar]                                        │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│ Date    │ Deal      │ Value   │ Rep    │ Stage    │ Prob     │
│ 1/30    │ Acme Corp │ $15,000 │ Alice  │ Proposal │ 60%      │
│ 1/29    │ Tech Inc  │ $8,500  │ Bob    │ Demo     │ 40%      │
│ ...     │ ...       │ ...     │ ...    │ ...      │ ...      │
└────────────────────────────────────────────────────────────────┘
```

### Marketing Tracker

```
┌────────────────────────────────────────────────────────────────┐
│                   MARKETING METRICS                            │
├────────────────────────────────────────────────────────────────┤
│ Channel     │ Spend    │ Leads │ CPL    │ Conv % │ Revenue   │
├─────────────┼──────────┼───────┼────────┼────────┼───────────┤
│ Google Ads  │ $5,000   │ 150   │ $33    │ 3.2%   │ $45,000   │
│ Facebook    │ $3,000   │ 200   │ $15    │ 1.8%   │ $28,000   │
│ LinkedIn    │ $2,500   │ 50    │ $50    │ 5.5%   │ $35,000   │
│ Organic     │ $0       │ 300   │ $0     │ 2.1%   │ $52,000   │
├─────────────┼──────────┼───────┼────────┼────────┼───────────┤
│ TOTAL       │ $10,500  │ 700   │ $15    │ 2.8%   │ $160,000  │
└────────────────────────────────────────────────────────────────┘

ROAS: 15.2x
Best Channel: LinkedIn (highest conversion)
Action: Increase LinkedIn budget by 20%
```

---

## Formulas Reference

### Common Automation Formulas

```
# Auto-status based on date
=IF(C2<TODAY(), "OVERDUE", IF(C2=TODAY(), "DUE TODAY", "UPCOMING"))

# Days until due
=DATEDIF(TODAY(), C2, "D")

# Auto-assign based on criteria
=IFS(B2="Enterprise", "Alice", B2="Mid-Market", "Bob", TRUE, "Carol")

# Calculate conversion rate
=IFERROR(D2/C2, 0)

# Running total
=SUMIF($A$2:A2, "<="&A2, $B$2:B2)

# Conditional formatting trigger
=AND($E2="High", $F2<TODAY())

# VLOOKUP from another sheet
=VLOOKUP(A2, 'Reference Data'!$A:$C, 3, FALSE)

# Query for dashboard
=QUERY(Data!A:F, "SELECT A, SUM(C) WHERE B='Closed Won' GROUP BY A")
```

---

## Output Example

**Request**: "Set up automated task reminders from Google Sheets"

**Output**:

```markdown
# Task Reminder System Setup

## Sheet Structure

Create a sheet named "Tasks" with these columns:

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Task | Assignee | Due Date | Priority | Status | Slack ID |
| Review proposal | Alice | 2026-01-31 | High | In Progress | U12345 |
| Update docs | Bob | 2026-02-01 | Medium | Todo | U67890 |

## Automation Workflow

```yaml
trigger: Every 15 minutes
actions:
  1. Check for tasks due within 24 hours
  2. Send Slack DM to assignee
  3. Post daily summary at 6pm
```

## Sample Reminders

**Overdue Alert:**
```
🚨 *OVERDUE*: Review proposal
Due: Jan 29 (1 day ago)
Priority: High

Please update status or mark complete.
```

**Due Today:**
```
⏰ *Due Today*: Update documentation
Priority: Medium

You've got this! 💪
```

**Daily Recap (6pm):**
```
📋 *Daily Task Recap*

✅ Completed today: 5
⏳ In Progress: 3
🚨 Overdue: 1

Tomorrow's priorities:
• Review proposal (High) - Alice
• Client call prep (High) - Bob
```

## Setup Steps

1. Create Google Sheet with structure above
2. Set up n8n workflow with Schedule trigger
3. Connect Google Sheets and Slack nodes
4. Test with sample tasks
5. Activate workflow

Would you like the complete n8n workflow JSON?
```

---

*Sheets Automation Workflow - Part of Claude Code*