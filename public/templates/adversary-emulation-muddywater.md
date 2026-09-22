# Adversary Emulation Profile: MuddyWater

An intelligence-grounded adversary-emulation profile for MuddyWater (MITRE ATT&CK G0069 — also tracked as Mercury, Mango Sandstorm, Static Kitten, Seedworm, TEMP.Zagros), a cyber-espionage group assessed to be a subordinate element of Iran's Ministry of Intelligence and Security (MOIS), active since at least 2017.

**Authorized-use caveat:** apply this profile only within the documented rules of engagement, target scope, and time window of an authorized purple-team or red-team engagement. Never run disruptive actions outside an explicitly sanctioned, isolated lab.

## Profile Summary

MuddyWater targets government, telecommunications, defense, oil & gas, and IT organizations primarily across the Middle East, Central/South Asia, Africa, and increasingly Europe and North America. It is characterized by heavy reliance on PowerShell-based backdoors (POWERSTATS and successors), an evolving custom C2 framework lineage (PhonyC2 → MuddyC2Go), abuse of legitimate Remote Monitoring and Management tools (Atera, ScreenConnect, SimpleHelp), spearphishing with macro-laden documents, and a pragmatic mix of custom and open-source post-exploitation tooling. A February 2022 joint U.S./UK advisory (CISA AA22-055A) formally attributed the group to MOIS with high confidence.

**Sponsor / motivation:** Iranian MOIS, primarily for strategic intelligence collection, with secondary motivations of pre-positioning for disruptive operations (the 2023 Technion "DarkBit" ransomware incident) and access brokerage to other Iranian threat actors.

**Sectors and regions:** government, telecoms, defense, energy, finance, IT/MSPs, and academia; primary focus on the Middle East, Central/South Asia, and Africa, with expansion into Europe and North America since 2023–2025 (U.S. airports, banks, and software companies).

## Representative TTPs by ATT&CK Tactic

- **Initial Access** — Spearphishing with macro-laden Word/Excel documents and malicious PDFs (T1566.001); links to lure documents hosted on file-sharing services (T1566.002); internal spearphishing from compromised mailboxes (T1534); ClickFix-style social engineering enticing victims to paste malicious PowerShell (T1204.004).
- **Execution** — PowerShell as the core mechanism for custom backdoors, with Invoke-Obfuscation for evasion (T1059.001); VBScript/VBA macros to stage payloads (T1059.005); COM/DCOM and Outlook automation (T1559.001).
- **Persistence** — Registry Run keys with a recognizable naming pattern (`SystemTextEncoding`) (T1547.001); DLL side-loading (T1574.001); scheduled tasks and Office template (`Normal.dotm`) modification.
- **Defense Evasion** — Heavy obfuscation across custom tooling (T1027); steganography (obfuscated JS in image files) (T1027.003); proxy-execution via `mshta.exe`, `CMSTP.exe`, `regsvr32.exe`, `rundll32.exe` (T1218.*); hidden PowerShell windows.
- **Credential Access** — Mimikatz and `procdump64.exe` for LSASS dumping (T1003.001); LaZagne for broad credential recovery from browsers, email clients, and Windows Credential Manager; CrackMapExec for SAM/NTDS extraction and password spraying.
- **Command and Control** — Custom frameworks evolving from PhonyC2 (Python) to MuddyC2Go (Go); DNS tunneling (Mori malware) (T1071.004); multi-stage channels separating enumeration traffic from exfiltration.
- **Exfiltration** — Data compressed with `makecab.exe` or archive utilities; staged in `%temp%`; the more recent Dindoor/Seedworm pattern uses Rclone to sync to Wasabi/S3-compatible cloud storage.

## Emulation Guidance

Apply these authorized-only within a sanctioned engagement, mapped to whatever C2, phishing, and post-exploitation tooling your team is cleared to use — none of the following requires MuddyWater's specific malware, only equivalent technique coverage:

- **Spearphishing with macro documents** — craft macro-laden Office documents with region-appropriate decoy content; on macro-enable, decode and execute a PowerShell stager via VBA, mirroring the POWERSTATS delivery chain.
- **RMM tool abuse** — deliver an authorized RMM agent installer (Atera, ScreenConnect, or equivalent) via a spearphishing PDF with an embedded link; once installed, use the tool's own remote-access capability rather than a traditional C2 channel, since RMM traffic often evades detection tuned for custom malware.
- **PowerShell-centric post-exploitation** — run operations through heavily obfuscated PowerShell; use `mshta.exe` and `CMSTP.exe` as proxy-execution vectors to launch stagers, matching MuddyWater's defining execution pattern.
- **Persistence** — set a Registry Run key for a PowerShell callback, side-load a DLL via a legitimate application, and create an innocuously named scheduled task.
- **Credential access** — drive an LSASS dump and a broad credential-store sweep (browsers, email clients, credential manager), then attempt password spraying against discovered accounts — mirroring MuddyWater's systematic credential-harvesting approach.
- **C2** — use an HTTPS-based C2 channel as the primary vector to emulate MuddyC2Go/PhonyC2; add a DNS-tunneling channel to emulate the Mori pattern; separate enumeration traffic from exfiltration traffic across channels.
- **Exfiltration** — compress staged data before exfiltrating over C2; for the more recent pattern, sync staged data to authorized cloud storage via a sync tool.

## Detection and Defense Guidance

Pair every offensive technique above with the detection coverage it's meant to validate:

- **Spearphishing/macros** — block macros from internet-originated documents (Mark-of-the-Web enforcement); deploy attachment detonation; alert on Office processes spawning PowerShell, `cmd.exe`, `mshta.exe`, or `CMSTP.exe`.
- **RMM abuse** — maintain an allowlist of authorized RMM software; alert on unexpected RMM agent installations or RMM binaries executing from non-standard directories.
- **PowerShell backdoors** — enable PowerShell Script Block and Module Logging; apply constrained language mode on sensitive hosts; detect Invoke-Obfuscation patterns and PowerShell spawned from proxy-execution binaries.
- **DLL side-loading** — monitor for DLL loads from non-standard directories alongside legitimate executables; alert on unsigned DLLs loaded by signed binaries.
- **DNS tunneling** — monitor for high-volume DNS queries with long subdomain strings to unusual domains.
- **Credential dumping** — enable LSA protection and Credential Guard; alert on LSASS handle access and DCSync replication from non-domain-controller machines.
- **Persistence** — monitor Registry Run key modifications (especially suspicious or Defender-themed key names) and scheduled task creation.
- **Exfiltration** — monitor for sync-tool execution and cloud-storage API traffic to unusual endpoints; apply DLP rules to `makecab.exe`-generated archives.

## Sources

MITRE ATT&CK G0069; CISA Advisory AA22-055A; UK NCSC malware analysis reports; and public threat-intelligence reporting from Unit 42, Mandiant, Symantec, ClearSky, Cisco Talos, Deep Instinct, Proofpoint, and ESET.
