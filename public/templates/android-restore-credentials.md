# Android Restore Credentials

Implement Android's Restore Credentials feature through the Credential Manager API (`androidx.credentials`), so an app can silently log a user back in when they restore it on a new device — independent of the app's primary authentication method (passwords, passkeys, federated sign-in) and requiring no UI changes to existing sign-in flows.

**Scope:** this covers the Android client-side integration only. It does not implement server-side cryptographic validation — the developer must be told this explicitly after implementation (see Backend Guidelines below).

## Two-Tier Restoration Architecture

1. **Tier 1 (Primary — Background):** Runs automatically during device setup via the app's `BackupAgent.onRestoreFinished()` callback. Provides invisible restoration before the user opens the app for the first time, enabling background sync and notification delivery.
2. **Tier 2 (Secondary — Foreground):** Runs in the launcher `Activity.onCreate()` to catch failovers if background restoration didn't complete (dropped network, delayed restoration) or if `allowBackup` is disabled.

If `allowBackup` is `true` in the manifest, implement both tiers. Otherwise, implement only Tier 2. Never change the value of `allowBackup` to enable this feature — Restore Credentials works independently of it.

If you add a `BackupAgent`, also set `android:fullBackupOnly="true"` in the manifest — but only if there wasn't already a `BackupAgent` present before your changes.

## DOs and DON'Ts

**DO:**
- Check `AndroidManifest.xml` for `allowBackup` to determine what to implement.
- Implement a fallback for `createCredential`: call it first with `isCloudBackupEnabled = true`; if `E2eeUnavailableException` is thrown, catch it and retry with `isCloudBackupEnabled = false`.
- Implement a `BackupAgent` if `allowBackup` is true.
- Call `clearCredentialState()` when the user signs out — a mandatory security measure to fully log the user out.
- Attempt to get the restore key on first launch on a new device, and also within `BackupAgent.onRestoreFinished()` if the app uses one.
- Create a restore credential even if the user is already logged in.
- Perform the credential retrieval and login in `onRestoreFinished()` synchronously (e.g. `runBlocking`).
- Restore notifications in the `BackupAgent` if the app uses them (capture and send the FCM token to your backend).
- Encapsulate credential creation and retrieval into dedicated functions — creation is called from multiple places (sign-up, sign-in), retrieval from multiple tiers.
- Generate a separate restore key per application when an organization has multiple apps with different package names.

**DON'T:**
- Change `allowBackup` in the manifest — Restore Credentials works regardless of its value.
- Implement a `BackupAgent` if `allowBackup` is `false`.
- Assume the credential in `GetCredentialResponse` is `PublicKeyCredential` — it is `RestoreCredential`.
- Chain `GetRestoreCredentialOption` with any other `CredentialOption` in one `GetCredentialRequest`.
- Assume `CredentialManager` or the OS will automatically delete a restore key on sign-out — you must explicitly call `clearCredentialState` with `TYPE_CLEAR_RESTORE_CREDENTIAL`.
- Remove any existing calls to `clearCredentialState()` — a request without a specified type only clears non-restore credentials.

## Version Compatibility

Works on Android 9 (API 28)+, Google Play services core 24220000+, and `androidx.credentials` 1.5.0+.

## Dependencies

```kotlin
dependencies {
    implementation("androidx.credentials:credentials:1.7.0-alpha03")
    implementation("androidx.credentials:credentials-play-services-auth:1.7.0-alpha03")
}
```

Use the latest stable versions where possible. Restore Credentials works regardless of the `allowBackup` manifest setting.

## Prerequisites

Set up a relying-party server similar to the one used for passkeys — if you already handle passkey authentication server-side, reuse that implementation for restore keys. The client-side app can support restore keys without supporting passkeys; restore keys work independently of the app's authentication method.

## Create a Restore Key

Create it whenever the user is signed in and doesn't already have a key (e.g. in the main `Activity`'s `onCreate`), and when the user completes sign-in or registration. Track whether the key already exists with a local flag or timestamp to avoid redundant creation/check overhead on every login.

### Instantiate Credential Manager

```kotlin
private val credentialManager = CredentialManager.create(context)
```

### Get Creation Options From Your Server

Use a FIDO-compliant library server-side to send the client the information needed to create the restore credential.

### Create the Restore Key

```kotlin
// createRestoreRequest contains the details sent by the server
val response = credentialManager.createCredential(context, createRestoreRequest)
```

`CreateRestoreCredentialRequest` fields:
- `requestJson`: the creation options from the server, in WebAuthn `PublicKeyCredentialCreationOptionsJSON` format.
- `isCloudBackupEnabled` (default `true`): whether the restore key is backed up to the cloud. `true` is recommended — it survives a cloud restore. `false` saves the key locally only, so it's unavailable after a cloud restore.

**Caution:** if cloud backup is disabled and the user restores from a cloud backup, retrieving the restore key fails and they aren't automatically signed in.

### Handle the Creation Response

The response is `CreateRestoreCredentialResponse`, holding the public key registration response in JSON format. Send it to your server — the same code path that handles passkey creation can handle restore key creation.

Handle these exceptions:
- `CreateRestoreCredentialDomException` — `requestJson` doesn't follow the WebAuthn format.
- `E2eeUnavailableException` — `isCloudBackupEnabled` is `true` but the device has no data backup or end-to-end encryption (e.g. no screen lock). Catch it and retry with `isCloudBackupEnabled = false`.
- `IllegalArgumentException` — the request is empty, invalid JSON, or missing a valid `user.id`.

## Sign In With a Restore Key

### Get Retrieval Options From Your Server

Same pattern as passkey sign-in.

### Get the Restore Key

Fetch in both: on first launch on the device, and — if app data backup/restore is enabled — immediately after data is restored, inside `BackupAgent.onRestoreFinished()` (not `onRestore`, which is only called for key-value backups). This lets the app, for example, deliver notifications before the user ever opens it.

If you add a new `BackupAgent` on an app that previously had `allowBackup="true"`, set `android:fullBackupOnly="true"` to preserve backup/restore behavior.

**Important:** notifications aren't automatically restored after credential retrieval — if using Firebase, fetch and send the FCM token to your backend to resume background messaging.

```kotlin
// Fetch the options required to get the restore key
val authenticationJson = fetchAuthenticationJson()

val options = GetRestoreCredentialOption(authenticationJson)
val getRequest = GetCredentialRequest(listOf(options))

val response = credentialManager.getCredential(context, getRequest)

// Type-check and extract the restore credential
val credential = response.credential as RestoreCredential
```

### Handle the Sign-In Response

Send the public key to your server — server-side, this is handled the same as passkey sign-in. Distinguish restore keys from user-created passkeys in your database even though they share the same server implementation: users can manage passkeys directly in a passkey-management UI, but restore keys are system-managed and should stay hidden from it.

## Delete the Restore Key

Credential Manager is stateless and doesn't automatically delete restore keys after use. Delete on sign-out for security, so the next app open on the same device requires sign-in again:

```kotlin
val clearRequest = ClearCredentialStateRequest(TYPE_CLEAR_RESTORE_CREDENTIAL)
val response = credentialManager.clearCredentialState(clearRequest)
```

Also delete on remote/server-side session invalidation (e.g. a password reset elsewhere, or the server returning `401 Unauthorized`).

Restore keys are removed only via: system-level actions (uninstall, clear data), or an explicit app-level `clearCredentialState()` call on sign-out.

## Backend Guidelines (For the Developer, Not to Implement Here)

Present these to the developer as a reminder after client-side implementation — do not implement backend logic as part of this skill:

1. **Differentiate restore credentials from passkeys in storage.** Restore credentials are hidden from and not managed by the user, unlike standard WebAuthn passkeys — add metadata or a new credential type to distinguish them, and don't show them in passkey-management UIs.
2. **Prevent orphaned keys.** Uninstalling the app deletes the local key without notifying the backend. Establish server-side cleanup policies (e.g. one key per user per device) so stale keys don't accumulate.
3. **Balance key lifespan and TTL.** A user who restores to a new device and then logs out of the old one still needs the server-side key valid for the new device — give restore keys enough TTL to survive manual logouts during transition periods.
4. **Support multiple devices.** Map multiple active restore credentials to one user account rather than assuming a 1:1 relationship.
5. **Handle server-side session invalidation.** When a session is revoked remotely (password reset, `401`), clear the device's restore credential too.
