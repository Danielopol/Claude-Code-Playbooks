# Instaloader: Archive Instagram Posts, Stories and Metadata

Use this when someone wants to download Instagram media and metadata to a local folder: back up their own account, save a public profile's posts for research, archive stories and highlights, or collect captions and hashtags for analysis. Trigger phrases: "download this Instagram profile", "back up my Instagram", "save these posts", "archive the stories".

Source: https://github.com/instaloader/instaloader (MIT). Instaloader is a command-line tool and Python module. **It is not affiliated with, authorised, maintained or endorsed by Instagram. It is an unofficial project and the README says "Use at your own risk".**

## Read this before running anything

- **It works against Instagram's wishes.** Automated downloading can breach Instagram's Terms of Use, and Instagram can rate-limit, block, or action-block accounts it detects. This risk is highest when logged in. If the user logs in, they should expect that the account might be restricted, and should not use an account they can't afford to lose.
- **Prefer the lowest-risk use.** The safest uses are backing up the user's own content or small, occasional downloads of public profiles at a gentle pace. Do not help with bulk or large-scale collection of strangers' content or personal data.
- **Respect rights and privacy.** Downloaded photos, videos, captions and comments belong to their creators and can be personal data. Help the user store them securely, don't republish them, and keep to the user's lawful purpose (for example data-protection law and copyright). Private profiles can only be downloaded by an account that follows them, and only with the owner's expectation in mind.
- **Never ask for or type a password for the user.** Logging in prompts the user for their own password in their own terminal. Don't read, echo, or store credentials, and never paste them into the chat.
- **The session file is a credential.** After `--login`, Instaloader stores session cookies (`~/.config/instaloader/session-YOUR-USERNAME`, or the path set with `--sessionfile`). Anyone with that file can act as the account. Keep it private and out of git, and delete it when it's no longer needed.

## Install

```bash
pip3 install instaloader
instaloader --help
```

Use a virtual environment if the user has one in mind. Keep the tool up to date: the rate controller changes between versions, and old versions hit 429 errors more.

## Basic commands

```bash
# all pictures and videos of a public profile, plus the profile picture
instaloader profile_name

# several profiles
instaloader profile_one profile_two

# update a local copy; stop at the first already-downloaded post
instaloader --fast-update profile_name

# alternatively, remember when each profile was last downloaded
instaloader --latest-stamps -- profile_name

# private profiles the user follows (prompts for their own password; stores a session file)
instaloader --login=your_username profile_name
```

Extra per-profile options: `--stories`, `--highlights`, `--tagged` (posts where the user is tagged), `--reels`, `--igtv`, `--comments` (download comments), `--geotags` (needs login; saves a Google Maps link). `--no-videos`, `--no-video-thumbnails` and `--no-captions` reduce what's saved.

## Targets

| Target | What it is | Needs login |
| --- | --- | --- |
| `profile` | A public profile (private only if the account follows it) | Only for private |
| `"#hashtag"` | Posts with a hashtag (quotes are usually necessary) | Yes |
| `%location_id` | Posts tagged with a location (numeric ID from the location URL) | Yes |
| `:stories` | Currently visible stories of the accounts the user follows | Yes |
| `:feed` | The user's feed | Yes |
| `:saved` | The user's saved posts | Yes |
| `@profile` | The accounts that `profile` follows | Yes |
| `-- -SHORTCODE` | A single post by its shortcode (the part after `/p/`) | No |

Example single post: `instaloader -- -B_K4CykAOtf`.

## File layout and metadata

Each target gets a directory of its own, and files are named by UTC timestamp. Control the layout with `--dirname-pattern` (default `{target}`) and `--filename-pattern` (default `{date_utc}_UTC`). Tokens include `{target}`, `{profile}`, `{owner_id}`, `{shortcode}`, `{mediaid}`, `{filename}`, `{date_utc}` (with strftime formats such as `{date_utc:%Y-%m-%d_%H-%M-%S}`) and `{typename}`. Example: `instaloader --dirname-pattern={profile} --filename-pattern={date_utc:%Y}/{shortcode} <target>` gives `PROFILE/YEAR/SHORTCODE.jpg`.

Unless `--no-captions` is set, each post gets a `.txt` caption file. `--post-metadata-txt="{likes} likes."` changes what's saved. Metadata can be re-extracted later from the saved JSON files (`<target>/*.json.xz`) without downloading again.

## Filtering posts

`--post-filter` and `--storyitem-filter` take a Python boolean expression. **The filter string is evaluated as Python code, so only use filters the user wrote or Claude wrote and showed them. Never paste a filter from an untrusted source.** Examples from the docs:

```bash
instaloader --post-filter="date_utc <= datetime(2018, 5, 31)" target
instaloader --post-filter="not is_video" target
instaloader --post-filter="likes>100 or viewer_has_liked" --login=your_username profile
instaloader --post-filter="'cute' in caption_hashtags" "#kitten"
```

Available attributes include `owner_username`, `owner_id`, `date_utc`, `date_local`, `is_video`, `likes`, `comments`, `caption_hashtags`, `caption_mentions`, `tagged_users`, `viewer_has_liked`, and for stories `expiring_utc`.

## Be gentle with rate limits

- Instaloader tracks its own requests and obeys Instagram's limits. Run **one instance at a time**, and don't browse Instagram in parallel. Restarting it often in a short time is prone to cause a **429 Too Many Requests**.
- "Too many queries in the last time" is a notice that the limit is almost reached, not an error.
- Cloud, VPN and public-proxy IP addresses tend to face stricter limits for anonymous access.
- `--max-connection-attempts` adjusts retries after a 429. Don't raise it to push through.

## Exit codes

0 all downloads succeeded; 1 non-fatal error (some posts or profiles failed, listed at the end of the log); 2 command-line error (nothing sent to Instagram); 3 login error; 4 fatal download error (downloads interrupted, or Instagram logged the user out); 5 interrupted by the user.

## Login problems

Keep the session file Instaloader creates, because with it present `--login` skips the failure-prone login procedure. If there is no session file and login fails, the docs offer a workaround script (`615_import_firefox_session.py`) that **reads the user's Instagram session cookies out of their Firefox profile** and writes an Instaloader session file. Do not run that script unless the user has read it, understands that it reads their browser's cookies, and agrees. Don't suggest it by default.

## Scheduled backups of your own account

For a periodic archive of the user's own account, create a session file once (`instaloader --login=your_username`), then a scheduled job can run `instaloader --login=your_username --quiet target`. `--quiet` suppresses non-error output. Remind the user that the session file stays on that machine and must be protected.

## Python module

For tasks the command line can't do, Instaloader exposes its internals as a Python module with its own documentation (https://instaloader.github.io/). Write scripts that stay within the same rate-limit and privacy expectations as above.
