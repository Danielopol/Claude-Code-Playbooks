# Weather Automation

Automate weather-based workflows and notifications.

## Core Capabilities

### Current Weather
```yaml
current_weather:
  location: "San Francisco, CA"
  # or coordinates
  lat: 37.7749
  lon: -122.4194
  
  response:
    temperature: 65°F
    feels_like: 63°F
    humidity: 72%
    wind_speed: 12 mph
    conditions: "Partly Cloudy"
    uv_index: 5
```

### Forecast
```yaml
forecast:
  location: "New York, NY"
  days: 7
  
  daily:
    - date: "2024-01-20"
      high: 45°F
      low: 32°F
      conditions: "Snow"
      precipitation_chance: 80%
      
  hourly:
    interval: 3  # hours
    periods: 24
```

### Weather Alerts
```yaml
alert_rules:
  - name: "Rain Alert"
    condition:
      precipitation_chance: "> 70%"
      within_hours: 6
    action:
      notify: slack
      message: "☔ Rain expected in next 6 hours"
      
  - name: "Freeze Warning"
    condition:
      temperature: "< 32°F"
    action:
      - notify: sms
      - trigger: home_assistant
        action: protect_pipes
```

## Workflow Examples

### Morning Briefing
```yaml
morning_weather:
  trigger: daily at 6:30 AM
  actions:
    - get_forecast:
        location: home
        days: 1
    - send_notification:
        channel: slack_dm
        message: |
          🌤️ Good morning! Today's weather:
          High: {{high}}°F | Low: {{low}}°F
          {{conditions}}
          {{#if rain}}☔ Bring an umbrella!{{/if}}
```

### Event Planning
```yaml
event_weather:
  trigger: calendar_event_tomorrow
  condition:
    event_type: outdoor
  actions:
    - get_forecast:
        location: "{{event.location}}"
        date: "{{event.date}}"
    - if:
        precipitation_chance: "> 50%"
      then:
        - notify: organizer
          message: "Consider backup venue - rain likely"
```

## Best Practices

1. **Caching**: Cache frequent requests
2. **Units**: Support both metric/imperial
3. **Accuracy**: Use reliable data sources
4. **Alerts**: Set sensible thresholds
5. **Location**: Support multiple formats