# Auth & Authorization Patterns

A checklist of battle-tested patterns for implementing authentication (who are you?) and authorization (what can you do?). Apply whenever a task involves login flows, token issuance, JWT, OAuth2/OIDC, session management, or access control (RBAC/ABAC). The through-line: use proven building blocks correctly rather than inventing your own, and check permission on every request rather than trusting a one-time login.

## Authentication — Who Are You?

- **Use a battle-tested library — do not roll your own crypto.** Auth has a long list of subtle failure modes (timing attacks, padding oracles, weak randomness) that mature libraries have already fixed. A hand-rolled scheme almost always reintroduces one of them.
- **Hash passwords with bcrypt or argon2 — never MD5 or SHA-1 for passwords.** Fast general-purpose hashes are the wrong tool: they're designed to be fast, which is exactly what lets an attacker brute-force a leaked hash dump. Password hashes must be deliberately slow and salted.
- **Use short-lived access tokens (JWTs of ~15–60 min) paired with refresh tokens.** A stolen short-lived token stops working quickly; the refresh token lets a legitimate user stay logged in without re-entering credentials. Store refresh tokens securely (server-side, or an `HttpOnly` cookie) — never in `localStorage`, which is readable by any XSS payload.
- **Implement MFA for sensitive operations.** A second factor blocks the large class of attacks that start from a single compromised password.

## Authorization — What Can You Do?

- **Check authorization on every request, not just at login.** A login event answers "who are you" once; it says nothing about whether *this* user may perform *this* action on *this* resource right now. Permissions change, resources differ, and a token that was valid for one action is not a blank check for all of them.
- **Enforce RBAC or ABAC at the service layer, not the UI.** Hiding a button in the frontend is a usability nicety, not a security control — anyone can call the API directly. The authoritative check has to live where the request is actually handled.
- **Apply the principle of least privilege.** Grant each role or token the minimum permissions its job requires. Over-broad grants turn a single compromised credential into a full breach.

## OAuth2 / OIDC

- **Use the Authorization Code flow with PKCE for user-facing apps.** PKCE (Proof Key for Code Exchange) closes the authorization-code interception attack that the plain code flow (and the deprecated implicit flow) are vulnerable to on public clients like SPAs and mobile apps.
- **Validate `iss`, `aud`, `exp`, and `nonce` on every token.** A signature check alone is not enough: confirm the token came from the issuer you expect (`iss`), was minted for your application (`aud`), has not expired (`exp`), and matches the request you started (`nonce`). Skipping any of these enables token-reuse and confused-deputy attacks.

## Session Management

- **Regenerate the session ID immediately after login.** This prevents session fixation, where an attacker plants a known session ID on a victim before they authenticate and then rides the now-authenticated session.
- **Set `HttpOnly` and `Secure` on session cookies.** `HttpOnly` keeps the cookie out of reach of JavaScript (so XSS can't steal it); `Secure` ensures it's only ever sent over HTTPS, not leaked over a plaintext connection.

## Quick Review Checklist

Before shipping an auth change, confirm:

- [ ] Passwords hashed with bcrypt/argon2, never a fast hash
- [ ] Access tokens short-lived; refresh tokens stored out of JavaScript's reach
- [ ] MFA available for sensitive operations
- [ ] Every protected endpoint checks authorization server-side, not just in the UI
- [ ] Least privilege applied to every role and token
- [ ] OAuth2 user flows use Authorization Code + PKCE
- [ ] `iss` / `aud` / `exp` / `nonce` validated on every incoming token
- [ ] Session ID regenerated on login; cookies set `HttpOnly` + `Secure`
