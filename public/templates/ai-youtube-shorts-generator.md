# AI YouTube Shorts Generator: Long Video In, Vertical Clips Out

Use this when someone wants to turn a long video (a podcast, interview, tutorial or livestream) into ranked, short vertical clips for Shorts, Reels or TikTok. Trigger phrases: "make shorts from this video", "clip the best moments", "turn this podcast into reels", "find the highlights".

Source: https://github.com/Anil-matcha/AI-Youtube-Shorts-Generator (MIT). It ranks highlights with an LLM, transcribes speech with Whisper, and crops each clip to vertical. It runs in two modes, and **the difference matters for privacy and cost**.

## Which mode, and where your data goes

| Step | API mode (`--mode api`, the default) | Local mode (`--mode local`) |
| --- | --- | --- |
| Download | MuAPI `/youtube-download` | `yt-dlp` for remote URLs, or a local file path |
| Transcription | MuAPI `/openai-whisper` | `faster-whisper` on the user's machine (CPU or CUDA) |
| Highlight ranking (LLM) | MuAPI `gpt-5-mini` | OpenAI (`gpt-4o-mini` by default) or Gemini (`gemini-2.5-flash` by default) |
| Vertical crop | MuAPI `/autocrop` | `ffmpeg` and OpenCV face tracking |
| Output | Hosted URLs | Local mp4 files |
| Key needed | `MUAPI_API_KEY` | `OPENAI_API_KEY` or `GEMINI_API_KEY`, plus `ffmpeg` on the PATH |

**Before running anything, tell the user which mode you will use and what leaves their machine.** In API mode the video URL, its audio and transcript, and the resulting clips pass through MuAPI, a third-party paid service, using the user's own API key and credits. In local mode, only the **transcript text** goes to the chosen LLM provider; the video and audio stay local. If the footage is private, unreleased, or contains other people's data, recommend local mode, and ask before sending it anywhere. Get the user's approval before any paid run.

## Ground rules

- **Only clip videos the user owns or has permission to reuse.** Downloading and re-cutting other people's videos can breach YouTube's terms and copyright. Ask whose video it is if that isn't clear.
- **Keys live in `.env`, not in the chat.** Never print a key, never commit `.env`, and don't paste keys into the conversation. Check that a key exists without displaying it.
- **Don't oversell the results.** Viral scores are an LLM's judgement of a transcript. They aren't a prediction of views.
- Don't overwrite source files. Write clips to a separate output folder.

## Install

Requires Python 3.10 or newer.

```bash
git clone https://github.com/Anil-matcha/AI-Youtube-Shorts-Generator.git
cd AI-Youtube-Shorts-Generator
python3.10 -m venv venv
source venv/bin/activate          # on Windows: venv\Scripts\activate
pip install -r requirements.txt
pip install -r requirements-local.txt     # only if using --mode local
```

Create a `.env` file in the project root (and keep it out of git):

```bash
# API mode (default)
MUAPI_API_KEY=your_muapi_key_here

# Local mode (--mode local)
LLM_PROVIDER=openai                 # openai or gemini
OPENAI_API_KEY=your_openai_key_here
OPENAI_MODEL=gpt-4o-mini            # optional
GEMINI_API_KEY=your_gemini_key_here
GEMINI_MODEL=gemini-2.5-flash       # optional
LOCAL_WHISPER_MODEL=base            # tiny / base / small / medium / large-v3
LOCAL_WHISPER_DEVICE=auto           # auto / cpu / cuda
LOCAL_OUTPUT_DIR=output             # where local mp4s land
```

Only the variables for the chosen mode are needed. Have the user fill in the values themselves.

## Usage

```bash
# single video, API mode (the default)
python main.py "https://www.youtube.com/watch?v=VIDEO_ID"

# single video, local mode (offline except for the LLM call)
python main.py "https://www.youtube.com/watch?v=VIDEO_ID" --mode local

# a local file or path (local mode)
python main.py "/path/to/input.mp4" --mode local

# with options
python main.py "https://www.youtube.com/watch?v=VIDEO_ID" \
    --mode api --num-clips 5 --aspect-ratio 9:16 --output-json result.json
```

| Flag | Default | Notes |
| --- | --- | --- |
| `--mode` | `api` | `api` (MuAPI) or `local` |
| `--num-clips` | 3 | How many shorts to render |
| `--aspect-ratio` | `9:16` | Any ratio; `1:1` for square |
| `--format` | 720 | Source download resolution: 360, 480, 720 or 1080 |
| `--language` | auto | Force a Whisper language code such as `en` |
| `--output-json` | none | Dump the transcript, all candidates and the final clips |

Local mode writes `output/short_01.mp4`, `short_02.mp4` and so on. It caches the transcript as an `.srt` and YouTube downloads as `source_<id>.mp4` in the output folder, and reuses them on a re-run. For a batch, put one URL per line in `urls.txt` and run `xargs -a urls.txt -I{} python main.py "{}"` (confirm costs for the whole batch first).

As a library: `from shorts_generator import generate_shorts`, then `generate_shorts(path, num_clips=5, aspect_ratio="9:16", mode="local")`.

## How it works

1. Download the video.
2. Transcribe it with timestamps (verbose JSON segments).
3. An LLM classifies the content type (podcast, interview, tutorial, vlog and so on) and density, to tune the next prompt.
4. Videos over 30 minutes are split into 20-minute overlapping chunks (60 seconds of overlap).
5. An LLM scans the transcript through a virality framework (hook moments, emotional peaks, opinion bombs, revelations, conflict, quotable lines, story peaks, practical value) and returns ranked candidates scored 0 to 100.
6. Overlapping candidates are deduplicated (more than 50% overlap keeps the higher score).
7. The top `--num-clips` are selected.
8. Each highlight is cropped to the requested aspect ratio and rendered.

Each clip comes back with a title, a viral score, the start and end time, an opening hook sentence, and a one-line reason it should perform.

## Tuning

Edit `shorts_generator/highlights.py` to change the criteria (`VIRALITY_CRITERIA`), the system prompt (`HIGHLIGHT_SYSTEM_PROMPT`: duration sweet spot, hook rules, JSON schema), the chunk size (`CHUNK_SIZE_SECONDS`, default 1200), the long-video threshold (`LONG_VIDEO_THRESHOLD`, default 1800) and the overlap (`CHUNK_OVERLAP_SECONDS`, default 60). In `shorts_generator/config.py` (or via environment variables), `MUAPI_POLL_INTERVAL` (default 5 seconds) and `MUAPI_POLL_TIMEOUT` (default 1800 seconds) control job polling. Show the user any change to the prompt before running it.

## Review before publishing

Watch each clip yourself with the sound on. Check that the crop keeps the speaker in frame, that the clip starts and ends cleanly without cutting a sentence in half, and that it doesn't misrepresent what the speaker meant. Never publish automatically.

## Troubleshooting

- **Whisper produced no segments:** the video may have no detectable speech, or be in a language Whisper struggles with. Try `--language en` (or the right ISO-639-1 code) to skip auto-detection.
- **Local mode is slow:** use a smaller `LOCAL_WHISPER_MODEL` (`tiny` or `base`) or a GPU (`LOCAL_WHISPER_DEVICE=cuda`).
- **ffmpeg not found (local mode):** install `ffmpeg` and make sure it's on the PATH.
