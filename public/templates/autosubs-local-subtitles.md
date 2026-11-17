# AutoSubs: Local AI Subtitles and Transcripts From the Command Line

Use this when someone wants subtitles or a transcript from audio or video without sending the file to a cloud service: an SRT or VTT file, a readable transcript with speaker labels, a JSON file with word-level timestamps, or a translation to English. Trigger phrases: "transcribe this video", "make subtitles", "generate an SRT", "who said what", "add captions".

Source: https://github.com/tmoroney/auto-subs (MIT, by tmoroney). AutoSubs is a desktop app (standalone, or connected to DaVinci Resolve, Adobe Premiere Pro and After Effects) that also has a command-line mode built for terminals and AI agents. The project states that transcription runs on-device with no cloud, no subscription, and no data leaving the machine. This template drives the **command-line mode**.

## Install (let the user do this part)

The user installs the app from the project's official releases page (https://github.com/tmoroney/auto-subs/releases/latest). Installers are provided for Windows (`.exe`), macOS Apple Silicon and Intel (`.pkg`) and Linux (`.deb`, `.rpm`). macOS can also use Homebrew: `brew install --cask auto-subs`.

Debian or Ubuntu:

```bash
wget https://github.com/tmoroney/auto-subs/releases/latest/download/AutoSubs-linux-x86_64.deb
sudo apt install ./AutoSubs-linux-x86_64.deb
```

**Don't run installers or `sudo` commands without the user's explicit go-ahead,** and tell them what each one does first. Installers run with elevated privileges. Recommend downloading only from the official releases page or the Homebrew cask.

Getting `autosubs` on the PATH:

- **Linux:** the `.deb` and `.rpm` install `/usr/bin/autosubs`, so nothing more is needed.
- **macOS and Windows:** in the app, open **Settings, then Command line**, and click **Install**. On macOS this symlinks the command into `/usr/local/bin` and prompts for the user's password. On Windows it adds the install folder to the user PATH. **Remove** reverses it. Let the user click this themselves.

Run `autosubs --version` to confirm. With no arguments, the same binary opens the desktop app.

## Ground rules

- **Work on files the user owns or may transcribe.** Recordings of other people can carry privacy and consent obligations. Ask if that isn't clear.
- **Models download on first use.** Tell the user which model you'll use and its approximate size before the first run, because the download is large (see the table below).
- **Never overwrite the source media.** Write outputs to a new file.
- Check the exit code and report it plainly: 0 success, 1 runtime error, 2 usage error.
- Don't claim a transcript is accurate. Speech recognition makes errors, especially with names, jargon, accents, noise and overlapping speakers. Suggest spot-checking.

## Basic commands

```bash
# readable transcript to the console (the default format)
autosubs interview.mp4 --model small

# speaker labels
autosubs interview.mp4 --diarize --max-speakers 2 --lang en

# explicit format, or let the output file extension decide
autosubs interview.mp4 -f srt
autosubs interview.mp4 -o subs.srt
autosubs interview.mp4 -o transcript.json

# discover models and options
autosubs --list-models
autosubs --help
```

Given a file argument, AutoSubs runs headlessly, prints the result and exits. **stdout carries only the rendered output**, so `autosubs file.mp4 -f srt > out.srt` is pipe-safe. Progress and errors go to stderr, and on failure a JSON `{ "error": "..." }` object is printed there.

## Output formats

| Format | Contents |
| --- | --- |
| `text` (default) | Readable transcript: `[HH:MM:SS] Speaker N: ...`, one paragraph per speaker turn, no word timings |
| `srt` | SubRip subtitles, one short cue per segment |
| `vtt` | WebVTT subtitles, one short cue per segment |
| `json` | Full structured transcript including word-level timestamps |

If `--format` is omitted, the format is inferred from the `-o` extension (`.srt`, `.vtt`, `.json`, `.txt`), otherwise it defaults to `text`.

## Options

**Subtitle formatting:** `--density` (`less`, `standard`, `more`, `single`, `custom`), `--max-lines`, `--max-chars-per-line` (with `--density custom`), `--max-words-per-line` (custom density; overrides characters), `--text-case` (`none`, `lowercase`, `uppercase`, `titlecase`), `--remove-punctuation`.
**Speakers:** `--diarize`, `--max-speakers`, `--diarize-model` (`sortformer`, the default and more accurate, up to 8 speakers; or `pyannote`, a smaller download and less memory; more than 8 speakers always uses `pyannote`).
**Translation:** `--translate` (to English), `--target-language`.
**Performance:** `--gpu` or `--no-gpu` (default: auto-detect).
**Advanced:** `--prompt` to guide the transcription (for example, a list of names and terms).

## Choosing a model

Models are downloaded on demand to a local model cache. Sizes and RAM are approximate, and accuracy is the project's own relative 1 to 4 rating.

| Need | Model | Size | RAM |
| --- | --- | --- | --- |
| Fast and light, English | `moonshine-tiny` or Whisper `tiny.en` | 60 to 80 MB | 1 GB |
| Good everyday balance | Whisper `small` | 480 MB | 2 GB |
| Better accuracy | Whisper `medium` or `large-v3-turbo` | 1.5 to 1.6 GB | 5 to 6 GB |
| Maximum Whisper accuracy | Whisper `large-v3` | 3.1 GB | 10 GB |
| Fast and accurate, 25 European languages plus Russian and Ukrainian | `parakeet` | 700 MB | 2 GB |
| Translation to English from many languages | `canary` | 1 GB | 3 GB |
| Chinese, English, Japanese, Korean, Cantonese | `sense-voice` | 230 MB | 1 GB |
| Russian | `gigaam-v3` | 225 MB | 2 GB |
| Rare languages (1600+) | `omni-asr-1b-ctc` (lowercase, no punctuation) | 3.7 GB | 4 GB |

There are other models (Whisper variants, several Moonshine language models, Cohere Transcribe for 14 widely spoken languages, GigaAM multilingual for Russian and Central Asian languages). Run `autosubs --list-models` for the current list. A speaker diarization model (about 40 MB) and a voice-activity-detection model are also downloaded when needed.

## Workflow

1. Ask what the user needs (subtitles, a transcript, speakers, a translation), the language, the file, and the output format.
2. Pick a model that fits the machine's RAM and the accuracy needed, and say how large the first download is.
3. Run on a short clip first if the file is long, to check the model, language and formatting.
4. Run the full file, writing the output to a new file.
5. Spot-check the start, the middle and any names or technical terms, and offer to re-run with `--prompt` listing the names and terms.
6. Report the output path and any issues.

## Integrations (the desktop app, not this template)

The app can connect to DaVinci Resolve (Workspace, then Scripts, then AutoSubs; it sends styled subtitles back to the timeline) and to Adobe Premiere Pro and After Effects through a bundled CEP extension that loads automatically (Premiere imports caption tracks, After Effects creates text layers). The Mac App Store version of DaVinci Resolve isn't supported. These integrations install scripts or extensions into those applications, so the user should choose to set them up.

## Licence note

The AutoSubs code is MIT. The optional MMS forced-alignment model, used for word-level timestamps, is downloaded separately under **CC BY-NC 4.0, for non-commercial use**. If the user works commercially, check the licence of every model they use before relying on it.
