# Suspicious Email Analyzer

Analyze emails for phishing attempts, scams, and security threats to protect against fraud.

## Overview

This workflow helps you:
- Identify phishing attempts
- Detect scam patterns
- Analyze suspicious links
- Assess email authenticity
- Recommend safe actions

## How to Use

### Analyze an Email
```
"Is this email legitimate?"
"Check this email for phishing"
"Analyze this suspicious message"
```

### Provide Email Content
Include:
- Sender email address
- Subject line
- Full email body
- Any links (don't click them!)

## Threat Indicators

### Red Flags Checklist
```markdown
## Email Security Assessment

### Sender Analysis
- [ ] **Domain mismatch**: Display name doesn't match email domain
- [ ] **Lookalike domain**: microsoft.corn, amaz0n.com
- [ ] **Free email for business**: Official company using gmail.com
- [ ] **Random characters**: x7y2z@suspicious.com
- [ ] **No reply-to**: Cannot respond to sender

### Content Analysis
- [ ] **Urgency pressure**: "Act NOW", "Account suspended"
- [ ] **Threat language**: "Legal action", "Account closure"
- [ ] **Too good to be true**: Prize winner, inheritance
- [ ] **Generic greeting**: "Dear Customer" vs your name
- [ ] **Grammar/spelling errors**: Unusual mistakes
- [ ] **Requests sensitive info**: Password, SSN, credit card
- [ ] **Unexpected attachment**: Especially .exe, .zip, .docm

### Link Analysis
- [ ] **Hover reveals different URL**: Display vs actual link
- [ ] **Shortened URLs**: bit.ly, tinyurl hiding destination
- [ ] **HTTP (not HTTPS)**: Insecure for sensitive pages
- [ ] **Misspelled domains**: paypa1.com, netlfix.com
- [ ] **IP address URLs**: http://192.168.1.1/login
- [ ] **Excessive subdomains**: secure.login.verify.site.com

### Technical Indicators
- [ ] **Missing security headers**: SPF, DKIM, DMARC fail
- [ ] **Unusual sending time**: 3 AM from "local bank"
- [ ] **Bulk email markers**: Mass mail headers present
```

## Analysis Output

### Threat Assessment Report
```markdown
# Email Security Analysis

## Summary
| Attribute | Value |
|-----------|-------|
| **Threat Level** | 🔴 HIGH / 🟠 MEDIUM / 🟡 LOW / 🟢 SAFE |
| **Confidence** | [X]% |
| **Verdict** | Likely Phishing / Suspicious / Legitimate |

## Sender Analysis

### Email Address
- **Display Name**: PayPal Security Team
- **Actual Address**: security@paypa1-verify.com
- **Status**: 🔴 SUSPICIOUS

### Issues Found
1. ❌ Domain "paypa1-verify.com" is not official PayPal
2. ❌ Uses number "1" instead of letter "l"
3. ❌ Domain registered 3 days ago

## Content Analysis

### Subject: "Urgent: Your Account Has Been Limited"
- 🔴 Uses urgency tactic
- 🔴 Threatening language

### Body Issues
| Issue | Example | Severity |
|-------|---------|----------|
| Generic greeting | "Dear Customer" | 🟡 Medium |
| Urgency | "within 24 hours" | 🔴 High |
| Threat | "account suspended" | 🔴 High |
| Grammar | "Please to verify" | 🟠 Medium |

### Requests Made
- ❌ Asks to click link
- ❌ Requests login credentials
- ❌ Asks for personal information

## Link Analysis

### Link Found
- **Display**: "Verify Your Account"
- **Actual URL**: http://paypa1-verify.com/login
- **Status**: 🔴 DANGEROUS

### URL Issues
1. ❌ Domain is not paypal.com
2. ❌ Uses HTTP (insecure)
3. ❌ Suspicious path mimics login

## Conclusion

### Verdict: 🔴 PHISHING ATTEMPT

This email shows multiple indicators of a phishing attack:
1. Fake sender domain mimicking PayPal
2. Urgency and threat tactics
3. Link to fraudulent website
4. Request for login credentials

### Recommended Actions
1. ✅ Do NOT click any links
2. ✅ Do NOT reply to this email
3. ✅ Report to phishing@paypal.com
4. ✅ Delete the email
5. ✅ If clicked link, change password immediately
```

## Common Scam Types

### Phishing Categories
```markdown
## Phishing Attack Types

### 1. Credential Phishing
**Goal**: Steal login credentials
**Pretends to be**: Banks, email providers, social media
**Tactics**: Fake login pages, urgent account issues
**Example**: "Your account password expires today"

### 2. CEO/Business Email Compromise
**Goal**: Wire transfer fraud
**Pretends to be**: Executive, vendor, partner
**Tactics**: Urgency, authority, secrecy
**Example**: "Please wire $50K for urgent deal, keep confidential"

### 3. Technical Support Scam
**Goal**: Remote access or payment
**Pretends to be**: Microsoft, Apple, ISP
**Tactics**: Fake virus alerts, account compromise
**Example**: "We detected virus on your computer, call now"

### 4. Invoice/Payment Scam
**Goal**: Payment to fraudulent account
**Pretends to be**: Vendor, client, internal
**Tactics**: Fake invoices, changed bank details
**Example**: "Updated bank account for invoice payment"

### 5. Package Delivery Scam
**Goal**: Credentials or malware
**Pretends to be**: FedEx, UPS, USPS, DHL
**Tactics**: Failed delivery, tracking issues
**Example**: "Package could not be delivered, click to reschedule"

### 6. Tax/Government Scam
**Goal**: Personal info or payment
**Pretends to be**: IRS, SSA, government agency
**Tactics**: Legal threats, refund promises
**Example**: "IRS Notice: Immediate action required"
```

### Legitimate vs Phishing Comparison
```markdown
## How to Spot the Difference

### Banking Email Example

| Aspect | Legitimate | Phishing |
|--------|------------|----------|
| From | alerts@chase.com | chase-alert@gmail.com |
| Greeting | "Hi John Smith" | "Dear Customer" |
| Urgency | "Review when convenient" | "IMMEDIATE ACTION REQUIRED" |
| Links | Links to chase.com | Links to chase-verify.com |
| Action | "Log in to your account" | "Enter password here" |
| Tone | Professional, calm | Threatening, urgent |
| Personalization | Account ending 4532 | No specifics |
```

## Action Guidelines

### What To Do
```markdown
## Response Protocol

### If Email is SUSPICIOUS (🔴🟠)
1. ❌ Do NOT click links
2. ❌ Do NOT download attachments
3. ❌ Do NOT reply
4. ❌ Do NOT call numbers in email
5. ✅ Verify through official channels
   - Go to official website directly (type URL)
   - Call known customer service number
6. ✅ Report the email
   - Forward to IT security
   - Report to company being impersonated
7. ✅ Delete the email

### If You Already Clicked
1. ✅ Disconnect from internet (if malware suspected)
2. ✅ Change passwords immediately
3. ✅ Enable 2-factor authentication
4. ✅ Monitor accounts for suspicious activity
5. ✅ Run antivirus scan
6. ✅ Report to IT department
7. ✅ Consider credit monitoring if financial info shared

### Reporting Channels
- **Generic phishing**: reportphishing@apwg.org
- **IRS scams**: phishing@irs.gov
- **FTC**: reportfraud.ftc.gov
- **Company specific**: Usually phishing@company.com
```

## Email Header Analysis

### What to Check
```markdown
## Email Header Deep Dive

### Key Headers to Review
| Header | What It Shows |
|--------|---------------|
| From | Displayed sender |
| Return-Path | Actual reply address |
| Received | Server path (bottom = origin) |
| SPF | Sender authorized? |
| DKIM | Signature valid? |
| DMARC | Policy result |

### Authentication Results
| Result | Meaning |
|--------|---------|
| pass | Legitimate |
| fail | Likely spoofed |
| softfail | Possibly spoofed |
| none | No policy set |
```

## Limitations

- Cannot access actual email headers without them being provided
- Cannot verify real-time domain reputation
- Cannot click or analyze live links
- Some sophisticated phishing may pass analysis
- Legitimate emails may have some warning signs
- Human judgment is essential for final decision