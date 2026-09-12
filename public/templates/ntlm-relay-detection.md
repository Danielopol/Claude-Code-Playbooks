# Detecting NTLM Relay with Event Correlation

A blue-team methodology for detecting NTLM relay attacks (MITRE ATT&CK T1557.001) through Windows event correlation, SMB/LDAP signing audits, and NTLM downgrade detection across an Active Directory environment.

> **Authorized use only.** This content is for defensive security: threat hunting, SIEM rule building, and hardening your own environment or one you're explicitly engaged to assess. It documents detection engineering, not an attack toolkit.

## Overview

NTLM relay attacks intercept NTLM authentication messages and forward them to a target service to gain unauthorized access. Attackers force or trick a victim into authenticating (via LLMNR/NBT-NS poisoning tools, or coercion techniques that abuse Windows RPC interfaces), intercept the NTLM handshake, then relay it to a target service — SMB, LDAP, HTTP, a database — to authenticate as the victim. This only succeeds when message signing isn't enforced on the target service.

```
Victim ──NTLM Negotiate──> Attacker ──NTLM Negotiate──> Target
Victim <──NTLM Challenge── Attacker <──NTLM Challenge── Target
Victim ──NTLM Authenticate──> Attacker ──NTLM Authenticate──> Target
                                                         ↓
                                              Attacker authenticated
                                              as Victim on Target
```

**Key detection insight:** in a relay attack, the successful logon event on the target shows the victim's username but the *attacker's* source IP — while the workstation-name field may still reflect the victim's real machine. This IP-to-hostname mismatch is the primary signal every detection below is built around.

## When to Use

- Hunting for credential-relay activity in an AD environment where NTLM is still in use
- Investigating an authentication anomaly where the source IP doesn't match the expected workstation
- Auditing SMB and LDAP signing enforcement to assess exposure to relay attacks
- Detecting an NTLM downgrade (NTLMv2 forced down to the weaker, easier-to-relay-or-crack NTLMv1)
- Building SIEM correlation rules for this attack class, or responding to a coercion-technique alert that may precede a relay attempt
- Validating detection coverage and signing enforcement during a purple-team exercise

**Don't rely on this without** centralized Windows Security Event Log collection, and don't treat detection as a substitute for actually enforcing SMB signing and Extended Protection for Authentication — those prevent the attack at the protocol level, which detection alone never does.

## Prerequisites

- Windows Advanced Audit Policy capturing logon and authentication event IDs (4624, 4625, 4648, 4776, and the NTLM operational log)
- Centralized log collection (Windows Event Forwarding or agent-based shipping) into a SIEM
- An IP-address-to-hostname inventory (DHCP logs, DNS records, or a CMDB) to correlate against
- Network visibility into LLMNR/NBT-NS/mDNS traffic if poisoning-tool detection is in scope

## Detection Workflow

### 1. IP-to-Hostname Mismatch on Event 4624 (LogonType 3)

The core detection: correlate the claimed workstation name in a network logon event against your known-hosts inventory, and flag when the source IP doesn't match what that hostname should resolve to.

```
# Pseudocode — adapt to your SIEM's query language
FROM Windows Security Event 4624
WHERE LogonType = 3
  AND AuthenticationPackage = "NTLM"
  AND TargetUserName NOT IN ("ANONYMOUS LOGON", machine accounts ending in "$")
JOIN known_hosts_inventory ON WorkstationName
WHERE event.SourceIP != inventory.ExpectedIP
```

A complementary check: authentication arriving from an IP with **no** hostname in your DHCP/DNS inventory at all — relay tooling frequently runs from a host (often Linux-based) that was never provisioned as a normal workstation and won't appear in your inventory.

### 2. Rapid Multi-Host Authentication ("Relay Spraying")

An attacker who's captured one set of credentials often relays them to several targets quickly, testing what the captured account can reach:

```
# Pseudocode
FROM Windows Security Event 4624
WHERE LogonType = 3 AND AuthenticationPackage = "NTLM"
GROUP BY TargetUserName, 2-minute window
HAVING count(distinct TargetComputer) > 3
```

### 3. Poisoning-Tool Detection (LLMNR/NBT-NS)

If a single host on the network answers an unusually high volume of LLMNR (UDP 5355) or NBT-NS (UDP 137) name-resolution queries from many distinct sources, that's the signature of a poisoning tool impersonating the DNS resolution path:

```
# Pseudocode
FROM network/DNS logs
WHERE query_type IN ("LLMNR", "NBNS") OR dest_port IN (5355, 137)
GROUP BY responding_host
HAVING distinct(source_host) > 10
```

Cross-check the responding host against your legitimate DNS/WINS server list — a response from anything else is the alert. On individual hosts, confirm whether LLMNR and NBT-NS are actually disabled (they should be, in a hardened environment) via the relevant local policy and network-adapter settings.

A Sigma-style detection rule for this pattern: a single destination IP answering on port 5355 or 137 from more than five distinct source IPs within a 5-minute window, tagged to T1557.001, with the expected false positives being legitimate WINS/DNS servers and network-discovery tooling.

### 4. SMB and LDAP Signing Enforcement Audit

Signing enforcement is the actual protocol-level defense; auditing its status tells you your real exposure surface independent of any detection rule:

- **SMB signing**: check both server-side (`RequireSecuritySignature` under the SMB server configuration) and client-side settings, ideally scanned across every domain-joined computer, not just a sample. Any host where signing is enabled-but-not-required is a relay target.
- **LDAP signing and channel binding** on every domain controller: LDAP server integrity should be set to *require* signing (not merely negotiate it, which is the common — and vulnerable — default), and LDAP channel binding should be set to *always required*, not merely "when supported."
- **SMB sessions established without signing** can also be observed directly from network-level SMB session logs where available, giving a live view rather than a point-in-time config snapshot.

Export a vulnerable-hosts list from this audit and track it to zero — this is the single highest-leverage defensive action against this whole attack class, more effective than any detection rule.

### 5. NTLM Downgrade Detection

NTLMv1 is meaningfully weaker than NTLMv2 and significantly easier to relay or crack offline. Its presence in an environment that should be NTLMv2-only is itself a red flag, and a spike in it is a stronger signal of active manipulation:

```
# Pseudocode
FROM Windows Security Event 4624
WHERE LogonType = 3 AND LmPackageName = "NTLM V1"
  AND TargetUserName NOT IN ("ANONYMOUS LOGON", machine accounts)
```

For an active-downgrade pattern specifically, look for NTLMv1 events appearing in an hourly window where the account or host previously showed only NTLMv2 — a sudden mixed ratio, rather than a steady baseline, is the more actionable signal.

Also confirm the domain's `LmCompatibilityLevel` policy — level 3 or higher (NTLMv2 response only) is the recommended minimum; anything below sends the weaker LM or NTLMv1 response and is itself the vulnerability, independent of any active attack.

### 6. Enable Native NTLM Auditing

Beyond event correlation on the standard security log, enable Windows' own NTLM audit policy (via the "Network Security: Restrict NTLM" group policy settings, applied domain-wide) to get a dedicated NTLM operational log covering every NTLM authentication attempt across the domain — richer detail than the generic logon event alone provides, and the foundation for eventually moving to Kerberos-only or NTLM-restricted enforcement.

## SIEM Correlation Rule Checklist

When turning the above into a standing correlation rule, capture: the event source (which log/event ID), the specific field-level condition (IP-to-hostname mismatch, target count threshold, LmPackageName value), the time window, the MITRE technique tag (T1557.001), and — critically — the documented false-positive sources for that specific rule (legitimate WINS/DNS servers, network-discovery tools, known service accounts that legitimately authenticate from multiple hosts).

## Tips

- Build the IP-to-hostname inventory before writing any correlation rule — a mismatch rule with no reliable "expected IP" to compare against will either miss real relays or drown in false positives from a stale inventory.
- Treat the signing-enforcement audit as higher priority than the detection rules — closing the actual protocol gap prevents the attack; detection only tells you it happened.
- When a coercion-technique alert fires (an unusual RPC call to a domain controller or file server that could force authentication), treat it as a precursor signal and increase scrutiny on subsequent logon events from that target for the following few hours, rather than treating it as a standalone, low-priority alert.

## Limitations

- Query examples are illustrative patterns for common SIEM platforms — adapt field names and syntax to your actual SIEM, log source, and schema before deploying any rule to production.
- Detection assumes centralized, reliable Windows Security Event Log collection with the right audit policy already enabled — without that, none of the correlation logic below has data to run against.
- This is one attack class (NTLM relay) within the broader credential-access tactic — pair it with a fuller Active Directory hardening and monitoring program rather than treating it as complete coverage on its own.
