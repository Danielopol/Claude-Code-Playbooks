# Instagram Agent Skill: 13 Modes for Running an Instagram Account

Use this when someone asks for help with Instagram: a Reel script or hook, a caption, a carousel, stories, a profile rewrite, a weekly plan, comments, replies, DMs, repurposing a long asset, or a post-mortem on what already worked. Also use it for "make this sound human" on any short text.

Source: https://github.com/Jakeschincariol/instagram-agent-skill (MIT, by Jake Schincariol). This template condenses the 13 skills into one file. The original repo also ships five small Python scorers (hook scorer, beat timer, caption linter, humanizer and detector, swipe-file ranker). They are not part of this template. If the user has the repo's scripts installed, run them. If not, do the same checks by hand using the rules below and say that you did.

## Ground rules (apply to every mode)

- **Nothing gets posted until the user says yes.** These modes write. The user posts. Never publish, comment, follow, like, DM or schedule anything on their behalf, and never use a browser tool to do any of that.
- **Never log into Instagram for the user and never ask for a password.** If a page needs a login, the user is the one already logged in.
- **No automation of engagement.** Automated posting, commenting, following and DMing violate Instagram's Terms of Use and get accounts action-blocked. The one supported exception is keyword auto-replies in DMs through Instagram's own tools or approved partners, and only after someone comments first.
- **Never fabricate.** No invented metrics, clients, revenue or outcomes under the user's name, not even as placeholders. If a draft needs a number the user hasn't given, leave `{{your number}}` in it and flag it.
- **Voice first.** Before writing anything personal, read `~/.claude/instagram/voice.md` if it exists. If not, ask for three of the user's own reels or captions, infer the voice, offer to write the file, and use it. A script in the wrong voice is unusable because the user has to say it out loud.
- **Humanize every draft** (mode 8) before showing it. Show the text, never only a score.
- **Platform numbers go stale.** If anything here contradicts what Instagram is doing now, Instagram is right.
- Keep drafts in copy-ready fenced blocks, and end with a short receipt of what was checked.

Files the modes read and write (create them if missing):

```
~/.claude/instagram/voice.md   the user's voice profile
~/.claude/instagram/swipe.md   written by mode 2, read by modes 1 and 7
~/.claude/instagram/plan.md    written by mode 7
~/.claude/instagram/log.md     one line per approved post: date, hook formula, first line
```

## The 13 modes

| # | Mode | Trigger phrases |
| --- | --- | --- |
| 1 | Reel | "make a reel about X", "write a hook", "what should I say in this video" |
| 2 | Viral research | "what's working in my niche", "build a swipe file", "why is this reel doing numbers" |
| 3 | Caption | "write the caption", "caption this", hashtags |
| 4 | Carousel | "carousel", "slides", "turn this into a carousel" |
| 5 | Stories | "what do I post on my story", "poll idea", "story sequence" |
| 6 | Profile | "fix my bio", "score my Instagram", "why don't people follow me" |
| 7 | Weekly plan | "plan my week", "content calendar", "what should I post" |
| 8 | Humanizer | "humanize", "does this sound like AI", "remove the em dashes" |
| 9 | Comment | "comment on this", "what do I say here" |
| 10 | Reply | "reply to these", "handle my comments", a critic or hater |
| 11 | DM | "DM this person", "outreach message", "how do I follow up" |
| 12 | Repurpose | "repurpose this", "turn this into reels", a pasted transcript |
| 13 | Audit | "what's working", "why did this flop", "read my analytics" |

---

## 1. Reel: one idea into a Reel somebody finishes

Check the voice file and `swipe.md` first (the swipe file is the user's own evidence and outranks the defaults below). If the idea is thin, ask one batched question: what happened, to whom, and what did it cost or return. A Reel needs one specific true thing.

**Shape.** A Reel is decided in the first two seconds and kept by the next five.

```
0:00-0:02   HOOK     the claim; spoken line and on-screen line written separately; motion in frame one
0:02-0:07   STAKE    why it matters to the viewer, one line
0:07-...    BODY     one idea per beat; the frame changes every beat
last 3s     PAYOFF   deliver what the hook promised, then the single ask
last line   LOOP     echo one word from the hook so the replay lands clean
```

Working length is 15 to 45 seconds. Almost nobody should use the 3-minute limit.

**Loop:**
1. Pick three hooks from different formulas below, not three rewrites of one. Write the spoken and on-screen line for each.
2. Score them on five checks, 0 to 100 each: length (can it be said in under three seconds), specificity (a number or a name), stakes (something is at risk or to gain), front-loading (the point arrives in the first words, not the last), and address (a viewer it is aimed at). Also flag dealbreakers: greetings, "stop scrolling", "in this video", "hey guys". If the best hook is weak, you don't have the hook yet and editing won't fix it.
3. Write the script on the winner in plain spoken language with contractions and short lines.
4. Time it at roughly 165 words per minute. Flag: a hook past 3 seconds, any beat over 4 seconds, a run of lines with nothing concrete, and no loop back to the first line.
5. Humanize (mode 8).
6. Print the script, the on-screen text as a separate timed list, and a receipt (hook formula and score, length, number of cards, humanizer result). Ask: "Reply yes to log it, or tell me what to change." On yes, append to `log.md`.

**On-screen text is its own script.** Six words or fewer per card. The hook card is up at frame 1. Keep text inside the safe zone of a 1080x1920 frame (nothing above y=230 or below y=1440, and keep the right 230 pixels clear). Never put the hook where the caption sits. Burn in captions for the body, since most people watch muted first.

**Rules.** One idea per Reel (two ideas means two Reels, say so). Numbers over adjectives. Cut the intro: no greeting, no "in this video", no logo sting. One ask at the end (comment a keyword, save, or follow). Don't write around a trending audio the user can't use.

**The 26 hook formulas** (template, then the on-screen version):

1. Cost Confession: "{Specific amount} is what {one mistake} cost me." ($18,000 MISTAKE)
2. Negative Command: "Stop {common action}. Do {alternative} instead." (STOP POSTING DAILY)
3. Nobody Tells You: "Nobody tells you that {uncomfortable truth}." (YOUR FIRST 30 WILL FLOP)
4. The Replacement: "{This thing} replaced {expensive thing} for {price}." ($2,000 -> $12)
5. Time Collapse: "This used to take me {long time}. It now takes {short time}." (5 HOURS -> 20 MIN)
6. The Receipt: "I {did thing} for {N days}. Here are the actual numbers." (60 DAYS. REAL NUMBERS.)
7. Wrong Way, Right Way: "You are doing {thing} wrong, and it is not your fault. {The fix}." (YOUR CAPTIONS ARE CUT)
8. Insider Leak: "I spent {N years} {inside the thing}. Here is what we never said out loud." (6 YEARS INSIDE)
9. The Steal: "Steal this {artifact}. It took me {time} to get right." (STEAL THIS)
10. If This, Then Watch: "If you {specific situation}, this {short time} fixes it." (VIEWS BUT NO FOLLOWERS?)
11. Numbered With A Favourite: "{N} {things} that {outcome}. Number {k} is the one nobody uses." (5 EDITS. #4 IS THE ONE.)
12. The Objection: "'{Objection they actually say}.' Fine. Here is the version that works anyway." ("I HATE BEING ON CAMERA")
13. Before And After, On Screen: show the old thing, the new thing, one sentence on the lever. (MARCH / NOW)
14. The Callout: "{Specific group}, this is the one you have been ignoring." (PHOTOGRAPHERS UNDER $2K)
15. The Flop Record: "My first {N} {attempts} did nothing. Here is what changed on {N+1}." (47 FLOPS, THEN THIS)
16. The Verbatim Question: "'{Question exactly as asked}' - I get this every week." (ASKED EVERY WEEK)
17. Head To Head: "{A} versus {B}. I ran both for {time} and one was not close." (CAROUSELS vs REELS)
18. Cold Open Demo: start mid-action, already doing the thing. "Watch what this does." (WATCH THIS)
19. The Deadline: "{Thing} changes on {date}. Do {action} before then." (BEFORE YOU POST AGAIN)
20. Permission: "You do not need {the thing everyone says you need}." (YOU DON'T NEED A NICHE)
21. Mid-Sentence Start: "...and that is when {the turn}." (HE ASKED FOR A REFUND)
22. Contrarian Flip: a well-known saying, inverted. (NICE GUYS FINISH FIRST)
23. The Statistic: "{N}% of {group} {surprising fact}." (33% NEVER READ AGAIN)
24. The Reveal: "This is the new {thing}." (THE NEW ONE)
25. Someone Else's Result: "There was one {person} who {outcome} in {time}." (1M SUBS IN ONE MONTH)
26. The Superlative: "The {fastest / biggest / only} {thing} is {the answer}." (THE FASTEST WAY)

Two hooks fire at once: what's said (about two seconds) and what's on screen (about one, because it's read before it's heard). If a hook would work for anyone else in the niche, it isn't theirs. A hook promises something, so deliver it before the halfway mark.

---

## 2. Viral research: find what's working, rank it fairly

The one idea: **raw views are not evidence.** An account with 2M followers getting 400k views had a quiet Tuesday. An account with 4k followers getting 400k found something copyable. Rank everything by the **outlier multiple**: views divided by that account's own recent median. Above 3x is a signal. Below 1.5x teaches nothing.

1. **Pick 6 to 12 accounts** (or propose them and get approval): 4 direct (same niche, slightly ahead), 4 adjacent (different niche, same audience, where formats get borrowed first), 2 to 4 much bigger accounts for format only. Stay within about 10x of the user's own size. Ask for the user's own Saved collection too: it is already filtered by their taste.
2. **Read, don't scrape.** Use whatever browser tool the session has, with the user present and logged in. Ten accounts, a dozen reels each, at human speed. Never log in as the user, never build a crawler, never use a scraping service, never loop it in the background. Automated collection at volume gets accounts restricted. If Instagram won't show enough, YouTube Shorts uses the same hook grammar with public view counts and transcripts.
3. **Capture per reel:** account, followers, median views of their last 12 reels, this reel's views, the hook verbatim (spoken or on-screen), length, and the CTA.
4. **Rank** by outlier multiple, name the hook formula for each (use the 26 above), and report only three things: which formulas over-index in the top third (counts, e.g. 4 across 6 accounts is a finding, 2 is not), what the top third share structurally (hook length, visual payoff, moving first frame, where the ask sits), and the unclassified hooks, read by hand (the most valuable column).
5. **State sample size and confidence.** Forty reels across six accounts supports a claim. Twelve does not.
6. **Turn the top three formulas into the user's version:** their story, their number, a hook line they could say tomorrow. Never "make a reel like this one". Copy the formula, never the video, and attribute every swipe-file row to its account.

Write `~/.claude/instagram/swipe.md`. Nothing is posted, followed, liked or messaged by this mode.

---

## 3. Caption: survive the "... more" cut

Instagram shows about 125 characters in the feed. Read that window before anything else.

**Decide the job first and say which:**
- **Job A: the video already hooked them.** A Reel carries its own hook, so the caption isn't a second hook. Its job is the ask, the context for the ask, and the words people search.
- **Job B: the caption is the content** (a photo, a carousel cover that opens a loop). Line one is the hook: concrete, short, cut at a cliff.

**Shape:** line 1 (never a greeting, hashtag, or emoji first); body of 2 to 6 short paragraphs where the search terms live; one ask; up to five hashtags on their own line, or none. The limit is 2,200 characters and almost nothing needs it.

**Rules:**
- Hashtags are labels, not a reach lever. Instagram capped them at **five per post on 18 December 2025**. `#viral`, `#fyp`, `#explorepage` describe nothing.
- Search reads caption text, so put the phrase the user wants to be found for in a normal sentence ("client proposals" in line three), not as a hashtag block. Ask for two or three target terms.
- No link in the caption (it isn't clickable). If a link is needed, write a separate first comment and say so.
- One ask. A keyword ask needs a word people can type: one word, no spaces, no emoji, said aloud in the video too (`Comment CONTRACT`).
- Emoji as punctuation only. Write alt text for photos and carousels.

**Loop:** decide A or B, draft, humanize (captions are short, so slop is louder here), check length, the visible window, hook concreteness, hashtag count (max five), one ask, and the search terms. Print the copy-ready block and a receipt. Nothing is posted.

---

## 4. Carousel: one idea, broken into steps

Use a carousel when the idea has sequence and needs re-reading (steps, a framework, before/after, a list worth screenshotting). Use a Reel when it needs motion, a face or a visible payoff. A single claim is neither: use mode 1.

**Structure, 6 to 10 slides** (the cap is 20, which is usually a book nobody finishes):
1. COVER: the hook, six words or fewer, legible at grid-thumbnail size, with a one-line promise.
2. STAKE: why it matters, in one sentence. It is also a second cover (Instagram can re-show a carousel from a later slide), so it can't be setup.
3 to N. One idea per slide: a 3 to 7 word headline and at most 25 words under it. If a slide needs a paragraph, it is two slides.
N+1. RECAP: the whole thing as a list. This is the screenshot-and-send slide, so it must stand alone.
LAST. CTA: one action.

**Rules:** the cover is 80% of the result. Build at 1080x1350 and keep cover text inside the middle, clear of the outer 120 pixels, so the grid crop stops mattering. Number the slides (3/8). Put the handle small on every slide. Write alt text for the cover at least. Type no smaller than 32px, one accent colour, and use the project's brand or design system if there is one.

**Output:** slide-by-slide copy first, as a numbered list the user can edit in ten seconds. Then the caption (Job B in mode 3). Humanize both. Build HTML/PNG files only after the user approves the copy. Nothing is uploaded.

---

## 5. Stories: depth, not reach

Stories are how people who already follow decide whether you're worth buying from. Three to seven frames a day.

```
1     THE OPEN     something happening today, with a face or a hand in it
2-3   THE MIDDLE   the process, the result, the mistake
4     THE ASK      one sticker
5     THE CLOSE    the answer, the outcome, or tomorrow's setup
```

Put the ask at frame 4, not frame 7: completion drops with every tap.

**Stickers:** Poll (cheapest tap, volume not information); Question box (harvests the audience's exact words, the most undervalued one, and every answer is a caption, hook or DM opener, so feed them to mode 1 as formula 16); Quiz (teach by letting them be wrong); Slider (low value); Link (the only clickable surface besides the bio); Countdown (launches and deadlines); Add Yours (occasional reach beyond followers).

**Rules:** a face or hand in frame one. One idea per frame. Keep text inside the middle (on 1080x1920, nothing above y=250 or below y=1600). Talk to one person. Never repost your own feed post to stories with no comment. Sell on stories, not in posts: three frames of context, one of offer, one of proof.

**The DM funnel, honestly:** a story that names a problem, a poll or question box that lets people say "that's me", then a reply to each person who answered. **They act first, then you reply.** Bulk-DMing people who didn't interact gets accounts restricted.

Output: frames in order, each with what's on screen, what's said, which sticker, and what to do with the answers. Nothing is posted.

---

## 6. Profile: a three-second decision screen

A profile isn't a storefront. It's a decision screen reached from one reel. Ask the user to paste or screenshot: name field, handle, bio, link target, highlight names, what's pinned, and the first nine grid covers. Don't log in for them.

**Score out of 100 against 12 items. Be honest: most first passes land in the 30s and 40s.**

| Item | Pts | Full marks looks like |
| --- | --- | --- |
| Name field (30 chars, the bold line, not the handle) | 12 | Name plus what you do in searched words: "Dana Ruiz \| Proposal templates" |
| Bio first line | 12 | Who it's for and what changes, not a job title or adjectives |
| Bio body | 8 | One piece of proof or one plain offer, in sentences |
| Pinned three | 10 | Best proof, clearest offer explanation, best introduction to the person |
| Link | 8 | One destination matching the bio's promise (two is already a menu) |
| Highlights | 8 | 4 to 6, named for buyer questions: Pricing, Results, How it works, About |
| Grid legibility | 8 | First nine covers readable at thumbnail, covers chosen not left as frame one |
| Photo | 6 | Face fills about 60% of a circle rendered near 40px, recent, uncluttered |
| Handle | 6 | Readable, sayable, matches other platforms |
| Category and contact | 6 | Professional account, matching category, working contact buttons |
| Recent activity | 10 | Posted in the last 7 days, replied to the latest comments |
| Story presence | 6 | A story up now, or most days |

Show the score table, then rewrite in descending order of points lost, one fix at a time: name field (give three options), bio line one, pinned three, highlights, link, grid covers. Humanize every rewrite. Re-score at the end and show the real delta: if it reaches 84, say 84 and say what the rest needs (a grid, a story habit, a pinned post that doesn't exist yet). The user edits each field themselves.

---

## 7. Weekly plan: the control room

Run once a week on the same day. Read voice, swipe and log if they exist. Otherwise ask: what the user sells and to whom, the 3 to 4 themes they want to be known for, what actually happened this week (a client call, a number, a mistake, an argument, a thing they built), and 10 accounts worth being visible to.

**What to post:** 4 to 5 posts a week, at least 3 Reels (the only format that reliably reaches non-followers). Never two of the same type back to back:

| Type | Share | Job |
| --- | --- | --- |
| Proof | 1 a week | something that happened, with a number (Reel) |
| Teach | 1 to 2 a week | one thing the viewer can do today (Reel or carousel) |
| Opinion | 1 a week | a position that could lose followers (Reel) |
| Story | 1 a fortnight | a scene with a cost (Reel) |
| Offer | 1 a fortnight | what you sell, said plainly (carousel or stories) |

For each slot give the theme, the specific angle from what really happened this week, the format and the hook formula number. "AI" is not a plan. "The proposal we lost because the draft had an em dash in it" is a Reel.

**When:** when the audience is awake and not at work (early evening for most consumer audiences, early morning for business audiences), anchored to the audience's timezone. Say plainly that the hour matters far less than the first two seconds.

**Engagement round, not optional:** 20 minutes a day, before posting. A list of 10: 5 reach accounts (comment early, before the thread is 200 deep), 3 peers (the group that reciprocates), 2 buyers (comment for weeks before any DM; never pitch in a comment). Hand the list to mode 9.

Write the plan to `plan.md`. Nothing is scheduled or posted.

---

## 8. Humanizer: strip the machine fingerprint

Short text and spoken scripts are where stock phrasing is loudest. Do this by hand (or with the repo's `humanize.py` and `detect.py` if installed).

**Fix automatically:**
1. **Invisible characters:** zero-width spaces and joiners, word joiners, soft hyphens, byte-order marks, Unicode tag characters, invisible separators, non-breaking and narrow spaces. A keyboard doesn't produce these and they survive copy-paste. Remove them all.
2. **Typography:** em dash to comma (then clean up double punctuation), en dash to hyphen, curly quotes to straight, ellipsis to three dots, bullet characters to hyphens.
3. **Stock vocabulary:** delve, leverage, robust, seamless, crucial, "testament to", "in today's fast-paced world", plus Instagram-specific phrases: "stop scrolling", "in today's video", "follow for more", "tag someone who needs this", "the algorithm loves", "run don't walk". Swap for plain words or delete. Preserve capitalisation and leave URLs untouched.

**Flag, don't auto-fix (rewrite these by hand, keeping the meaning):** "It's not just X, it's Y" and "not only X but also Y"; rule-of-three triads; rhetorical one-word question lines ("The result?"); the video preamble ("in this video I'm going to show you"); emoji bullet lists; three or more shouted words in a row; hashtag walls; reflex bait ("double tap if").

**Check five signals, each 0 to 100, higher is more human:** burstiness (sentence-length variation), specificity (numbers, names, concrete markers per 100 words), slop density (stock terms per 100 words), fingerprint (invisible characters, em dashes, curly quotes), voice (contractions, first person, structural tells). Weigh the average at 60% and the weakest check at 40%. A pass needs 70 or more overall with no check below 55. If it's still failing after two rounds, fix the weakest check. After five rounds the draft was written by formula and needs a different draft.

**Say this honestly:** these are local heuristics modelled on signals public detectors use. They are not GPTZero, Originality, Copyleaks, Winston or Turnitin and can't promise those verdicts. Never tell a user their text is "undetectable". The invisible-character pass removes a real, checkable fingerprint; it is not a claim about defeating cryptographic watermarking.

---

## 9. Comment: a person with an opinion, not a bot

Ask the user to paste the post or reel text (or a screenshot) with the account name. Don't browse the feed and don't post anything.

**Nine types. Pick by what the post actually is, never default to 1:**
1. Add a datum: the post makes a claim you can support with a number.
2. Add the missing case: right but incomplete ("This holds until {condition}.").
3. Respectful disagree: name the agreement first, then the fork.
4. Extend one line: quote the good line and build on it.
5. Ask the real question: the post skipped the hard part; one specific question.
6. The receipt: you've done the thing; what happened, in two sentences.
7. The correction: a factual error; be right, brief, kind and sure.
8. The reframe: right facts, wrong frame ("Another way to read this:").
9. The one-liner: under 10 words, must be funny or true.

**Rules:** one to three sentences. Never open with "Great post", "Love this", "So true", "This 👏", "Needed this today" or the creator's name with an exclamation mark. No emoji-only comments and no emoji as the first character. Never restate the reel. One idea per comment. If it could sit under any post on the topic, it's noise. **No pitching, ever** (not the offer, not the link, not "check out my page"). Early comments matter most.

**Output:** two options of different types, labelled, plus one line on which to post and why. Humanize both first. For a batch (an engagement round), take 5 to 10 pasted posts, return one comment each, and keep a note in `log.md` of who was commented on this week, because commenting on the same three accounts daily is visible. Never auto-post. The user posts.

---

## 10. Reply: handle the thread under your own post

Ask the user to paste the comments with handles. Don't scrape the thread. **Triage into six buckets first and say the counts:**

| Bucket | What it is | What it gets |
| --- | --- | --- |
| KEYWORD | the word you asked them to comment | the promised thing, by hand or by your approved tool |
| LEAD | someone describing the problem you solve | a real public answer, then a one-sentence door |
| SUBSTANCE | adds data, disagrees, extends | the longest reply on the thread |
| QUESTION | one many people share | becomes a Reel, not just a reply (mode 1, formula 16) |
| SUPPORT | "🔥", "great post", a tag | a like, or 3 to 8 words |
| NOISE | pitch, spam, bad faith, bait | nothing, or one line |

Write in that order and stop when the value stops. A reply can itself be a Reel: Instagram attaches the comment as a sticker and the asker is notified.

**How:** answer the actual question in the reply, don't send people to DMs for an answer they could have had. Use their name once, at the start, without an exclamation mark. Match their length. To a critic: concede the true part in their words, hold the line, never delete, never reply twice. To a hater: nothing (a reply is reach); hide it if abusive. To a lead: answer fully in public, the door is one sentence and an offer of help, not a pitch. Never bulk-DM people who didn't comment.

Output one block grouped by bucket, replies copy-ready and humanized. Nothing is posted until the user says yes.

---

## 11. DM: who moved first decides everything

Only three kinds of DM are worth writing: (1) a reply to a hand raised (they commented the keyword, answered the poll, replied to a story: roughly 90% of worthwhile DMs), (2) a warm approach to someone the user has been genuinely commenting on for weeks, (3) a collab or brand pitch with a specific reason it's them. For a cold sequence, say plainly it's the lowest-yield use of the hour and offer the alternative (comment on those ten accounts for two weeks first), then write it if they still want it.

Before writing, ask in one batch: who (handle, what they do, what they posted), the trigger (the actual reason to message today; **no trigger, no message**), and what the user really wants.

- **Keyword delivery:** "{name}, here it is: {the thing or link}. {one line on how to use it} {one question answerable in four words}". Send the thing first with no gate. A "before I send it, what do you do?" is a bait and switch.
- **First message to someone warm:** two to four sentences, reference the specific thing in their words, give before asking, one small ask ("Worth a quick call?"), no link or calendar in message one, no voice note to a stranger.
- **Collab pitch, four lines in order:** what you've watched them do, the specific idea, what they get, what you need.
- **Follow-ups: exactly two.** At +4 days add something new (never "just bumping this"; if nothing is new, skip it). At +10 days close the loop and say you'll stop. Then stop.

**Never:** automate outreach DMs, fabricate having watched something or a mutual, open with "Hey! Quick question" and not ask one, or put the pitch in the same message as the compliment.

Output: the message, its character count, and the two follow-ups with the day each goes out, all humanized. The user sends each by hand.

---

## 12. Repurpose: one asset, a week of posts

Input: a transcript, article, newsletter, script, call summary or livestream (ask the user to paste if you can't read it). If the source is the user's own video, ask for the file too: their own footage beats re-reading their own words.

**Extract, don't summarise.** Pull: claims (every sentence that would start an argument), numbers, stories (a person, a scene, a cost), mechanisms ("the way this actually works is..."), mistakes, and quotable lines. List what you found with counts before writing anything. If it yields fewer than four items, say it's thin.

**Pick the format per extract:** claim, mistake or story to a Reel; mechanism or numbered list to a carousel; a quotable line to a story frame. Each post stands completely on its own (never "as I said in my latest video"). Assign a different hook formula to each. Five posts with the same hook shape reads as a content mill. With the user's own footage, use the real clip and cut on the sentence, not the breath. Order the week: strongest claim first, the story midweek, the mechanism last.

Output: source summary, what was found, and the week (day, format, formula, working title, clip timestamp). Then draft one post at a time on request through modes 1 and 8. Never dump four finished scripts at once.

---

## 13. Audit: the account is the only honest evidence

Every rule in every guide, including these, is a prior. The user's last 30 posts are the evidence. Ask for insights per post (views, reach, interactions, watch time, saves, shares, follows, non-follower share), or the retention graph of the best and worst recent reels (worth more than the rest combined), or just posts and view counts for a first pass. Read `log.md` for hook formulas.

**Compute and show the working. Raw views is the least useful number.**

| Metric | How | Tells you |
| --- | --- | --- |
| Outlier multiple | views / the account's own median | a real hit or a normal day |
| Non-follower reach | % of reach from non-followers | whether it travelled |
| Hold at 3s | viewers at 3s / viewers who started | the hook's grade |
| Average watch time | from insights | whether the middle worked |
| Sends per reach | shares / reach | the strongest signal (a person put their name on it) |
| Follows per reach | follows / reach | whether the profile converted the attention |

Rank by outlier multiple and sends per reach, not views. Then compare top five and bottom five on: hold at 3s, hook formula, format, length (under 15s, 15 to 30s, 30 to 60s, over 60s), theme, whether the user replied to comments in the first hour, and day and time **last** (almost never the cause). State findings as claims with evidence and confidence. With 30 posts you can see a pattern; with 6 you can't, and saying so beats inventing one.

**The distinction that saves months:** a reel with views and no follows is a profile problem (go to mode 6), not a failed reel. A reel with no views is a hook problem. Separate them before recommending anything.

Output: top five, bottom five, what the data says (numbered, with n), what to stop, what to do more of. Then hand conclusions to modes 7 and 2.

---

## Limits to state when relevant

- The hook scorer from the original repo catches bad hooks (AUC 0.83 on deliberately bad ones) but does not pick winners among decent ones (AUC 0.56 against a 0.50 coin flip; only specificity separated hits from misses). The honest use: kill obviously weak hooks, then trust the retention graph.
- These modes don't post, schedule, scrape, or connect to Instagram's API. Instagram's Content Publishing API needs a Meta developer app, a linked Page, a long-lived token and app review, which a prompt can't provide.
