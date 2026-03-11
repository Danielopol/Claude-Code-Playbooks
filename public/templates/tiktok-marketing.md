# TikTok Marketing

Comprehensive TikTok marketing workflow covering content strategy, video creation workflows, posting optimization, and analytics tracking. Integrates with n8n automation for scalable content production.

## Overview

This workflow enables:
- Content strategy development for TikTok
- AI-powered video script generation
- Automated posting workflows
- Hashtag and trend optimization
- Performance analytics and reporting

---

## Content Strategy Framework

### 1. Content Pillars (4-6 pillars recommended)

```yaml
content_pillars:
  - name: "Educational"
    ratio: 40%
    formats: [tutorials, tips, how-tos, explainers]
    goal: build_authority
    
  - name: "Entertainment"
    ratio: 30%
    formats: [trends, challenges, humor, behind-scenes]
    goal: increase_reach
    
  - name: "Promotional"
    ratio: 15%
    formats: [product_demos, launches, offers]
    goal: drive_conversions
    
  - name: "Community"
    ratio: 15%
    formats: [UGC, duets, Q&A, polls]
    goal: build_engagement
```

### 2. Content Calendar Template

| Day | Pillar | Format | Hook Type | CTA |
|-----|--------|--------|-----------|-----|
| Mon | Educational | Tutorial | Question | Follow for more |
| Tue | Entertainment | Trend | Shock | Like if you agree |
| Wed | Community | Q&A | Direct | Comment below |
| Thu | Educational | Tips | List | Save this |
| Fri | Entertainment | Behind-scenes | Story | Share with friend |
| Sat | Promotional | Demo | Problem | Link in bio |
| Sun | Community | UGC Repost | Gratitude | Tag us |

---

## Video Script Framework

### The Hook-Content-CTA Structure

```
┌─────────────────────────────────────────────────────────┐
│ HOOK (0-3 seconds)                                      │
│ • Question: "Did you know...?"                          │
│ • Statement: "This changed everything"                  │
│ • Shock: "I can't believe this works"                   │
│ • List: "3 things you need to know"                     │
│ Must stop the scroll immediately                        │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ CONTENT (3-50 seconds)                                  │
│ • Deliver on the hook promise                           │
│ • One clear message per video                           │
│ • Visual demonstrations > talking                       │
│ • Pattern interrupts every 3-5 seconds                  │
│ • Text overlays for key points                          │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ CTA (last 2-3 seconds)                                  │
│ • Follow: "Follow for more tips"                        │
│ • Engage: "Comment your experience"                     │
│ • Share: "Send to someone who needs this"               │
│ • Save: "Save for later"                                │
│ • Convert: "Link in bio"                                │
└─────────────────────────────────────────────────────────┘
```

### Script Templates

**Educational Video**:
```
[HOOK - 3s]
"Here's a [topic] hack most people don't know..."

[SETUP - 5s]
"I used to struggle with [problem] until I discovered this."

[CONTENT - 20s]
"Step 1: [action with visual]
Step 2: [action with visual]
Step 3: [action with visual]"

[PROOF - 5s]
"And look at the results: [show before/after]"

[CTA - 3s]
"Follow for more [niche] tips!"
```

**Trend Participation**:
```
[TREND AUDIO SYNC]
- Match transitions to beat drops
- Use trending sound within first 48 hours
- Add unique twist to stand out

[VISUAL STRUCTURE]
- Opening: Match first beat
- Middle: Key message during hook
- End: Surprise or punchline
```

---

## Hashtag Strategy

### Hashtag Mix Formula

```yaml
hashtag_strategy:
  total: 5-7 hashtags (TikTok optimal)
  
  mix:
    - niche_specific: 2-3
      examples: ["#smallbusinesstips", "#marketinghacks"]
      reach: 100K-1M views
      
    - trending: 1-2
      examples: ["#fyp", "#viral", "#trending"]
      reach: 1B+ views
      
    - branded: 1
      examples: ["#yourbrandname", "#yourcampaign"]
      reach: custom
      
    - community: 1
      examples: ["#tiktokmademedoit", "#learnontiktok"]
      reach: 10M-100M views
```

### Hashtag Research Process

```
1. Search your niche keyword
2. Note hashtags on top 10 videos
3. Check hashtag view counts
4. Mix high (1B+), medium (1M-100M), low (100K-1M)
5. Test and track performance
6. Rotate bottom performers weekly
```

---

## Posting Optimization

### Best Posting Times (General)

| Audience | Best Times | Best Days |
|----------|-----------|-----------|
| US | 7am, 12pm, 7pm EST | Tue, Thu, Fri |
| UK | 7am, 12pm, 10pm GMT | Wed, Thu, Fri |
| China | 7am, 12pm, 9pm CST | Mon, Wed, Sat |
| Global | 7am, 10pm UTC | Thu, Fri, Sat |

### Posting Frequency

```yaml
recommended_frequency:
  minimum: 1 video/day
  optimal: 2-3 videos/day
  maximum: 5 videos/day
  
consistency_rules:
  - Same time slots daily builds audience habit
  - Never go more than 24h without posting
  - Quality > quantity after 3/day
  - Test different times for 2 weeks before deciding
```

---

## Automation Workflows (n8n)

### Workflow 1: AI Video Content Pipeline

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ Google Sheet │───▶│ OpenAI       │───▶│ ElevenLabs   │
│ (Ideas)      │    │ (Script)     │    │ (Voiceover)  │
└──────────────┘    └──────────────┘    └──────────────┘
                                               │
┌──────────────┐    ┌──────────────┐    ┌──────┴───────┐
│ TikTok       │◀───│ Video Editor │◀───│ Image Gen    │
│ (Publish)    │    │ (Combine)    │    │ (Visuals)    │
└──────────────┘    └──────────────┘    └──────────────┘
```

**n8n Configuration**:
```yaml
workflow: "AI TikTok Content Generator"

nodes:
  1. trigger:
      type: schedule
      cron: "0 9 * * *"  # Daily at 9am
  
  2. get_idea:
      type: google_sheets
      action: get_next_unused_row
      sheet: "Content Ideas"
  
  3. generate_script:
      type: openai
      model: gpt-4
      prompt: |
        Create a TikTok script for: {idea}
        Format: Hook (3s) + Content (20s) + CTA (3s)
        Style: Casual, engaging, with text overlays
  
  4. generate_voiceover:
      type: elevenlabs
      voice: "young_professional"
      script: "{script}"
  
  5. generate_visuals:
      type: dalle
      prompts: "{visual_descriptions}"
  
  6. create_video:
      type: video_editor
      template: "tiktok_vertical"
      assets: [voiceover, visuals, captions]
  
  7. publish:
      type: tiktok
      caption: "{generated_caption}"
      hashtags: "{hashtags}"
      schedule: "{optimal_time}"
  
  8. update_tracker:
      type: google_sheets
      action: mark_as_published
```

### Workflow 2: Multi-Platform Publishing

```yaml
workflow: "Publish to TikTok + Instagram Reels + YouTube Shorts"

trigger:
  type: google_drive
  event: new_video_uploaded
  folder: "/Ready to Publish"

actions:
  1. detect_video:
      get_metadata: [duration, aspect_ratio, filename]
  
  2. generate_captions:
      openai_prompt: |
        Create platform-specific captions for this video: {title}
        - TikTok: casual, hashtag-heavy
        - Instagram: slightly longer, emoji-rich
        - YouTube: descriptive, keyword-optimized
  
  3. parallel_publish:
      - tiktok:
          caption: "{tiktok_caption}"
          hashtags: ["#fyp", "#viral", "{niche_tags}"]
      
      - instagram:
          type: reel
          caption: "{instagram_caption}"
          hashtags: "{instagram_tags}"
      
      - youtube:
          type: short
          title: "{youtube_title}"
          description: "{youtube_description}"
  
  4. track_in_airtable:
      base: "Content Tracker"
      fields: [video_url, platforms, publish_time, status]
  
  5. notify_slack:
      channel: "#content-published"
      message: "Video published to all platforms: {title}"
```

---

## Analytics & Optimization

### Key Metrics to Track

| Metric | Target | Action if Below |
|--------|--------|-----------------|
| Watch Time | >50% | Improve hooks |
| Engagement Rate | >5% | Better CTAs |
| Share Rate | >1% | More shareable content |
| Follow Rate | >2% | Stronger value prop |
| Profile Visits | >10% of views | Clearer CTA |

### Performance Analysis Template

```markdown
# TikTok Weekly Performance Report

## Overview
- Videos Posted: 21
- Total Views: 150,000
- New Followers: 500
- Engagement Rate: 6.2%

## Top Performing Videos
| Video | Views | Likes | Comments | Shares |
|-------|-------|-------|----------|--------|
| "3 productivity hacks" | 45K | 3.2K | 234 | 567 |
| "POV: Monday morning" | 38K | 2.8K | 189 | 423 |

## Content Analysis
- Best performing pillar: Educational (avg 25K views)
- Best posting time: 7pm (2x engagement)
- Best hook type: Question format

## Recommendations
1. Create more tutorial content (40% → 50%)
2. Shift posting to 7pm slot
3. Use question hooks more frequently
4. Participate in trending sound X
```

---

## Trend Identification

### How to Find Trends Early

```yaml
trend_sources:
  - TikTok Discover Page: Check daily
  - Creator Search Insights: In-app analytics
  - TrendTok App: Trend tracking tool
  - Exploding Topics: Early trend detection
  - Twitter/X: Cross-platform trends

trend_criteria:
  - Sound usage growth: >500% in 48h
  - Not yet saturated: <10K uses
  - Fits your niche: Can add unique angle
  - Positive sentiment: No controversy

action_speed:
  - Day 1-2: Highest potential
  - Day 3-5: Still good
  - Day 6+: Likely saturated
```

---

## Output Examples

### Script Output

**Request**: "Create a TikTok script about productivity tips for remote workers"

**Output**:
```
📹 TikTok Script: Remote Work Productivity

[HOOK - 0:00-0:03]
"Working from home but can't focus? Try this:"
[TEXT: "WFH Productivity Hack 🏠"]

[CONTENT - 0:03-0:25]
"I've been remote for 3 years, and this changed everything."

"First - the 2-minute rule."
[TEXT: "If it takes 2 min, do it NOW"]
"Any task under 2 minutes, do it immediately."

"Second - the fake commute."
[TEXT: "Walk around the block"]
"A 10-minute walk before work tricks your brain into work mode."

"Third - the shutdown ritual."
[TEXT: "Close laptop + say 'shutdown complete'"]
"Literally say 'shutdown complete' when you close your laptop."

[CTA - 0:25-0:28]
"Follow for more WFH tips that actually work!"
[TEXT: "Follow @yourhandle"]

---
📊 Hashtags: #workfromhome #productivityhacks #remotework #wfhtips #fyp
🎵 Suggested sound: Trending productivity audio
⏰ Best time to post: Tuesday 7pm
```

---

*TikTok Marketing Workflow - Part of Claude Code*