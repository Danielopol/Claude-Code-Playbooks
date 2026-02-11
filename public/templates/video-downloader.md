# Video Downloader

Download YouTube videos with customizable quality and format settings, including audio extraction.

## Basic Usage

```bash
python scripts/download_video.py "https://www.youtube.com/watch?v=VIDEO_ID"
```

## Options

### Quality (-q)
- `best` - Highest available quality (default)
- `1080p` - Full HD
- `720p` - HD
- `480p` - Standard definition
- `360p` - Low quality

### Format (-f)
- `mp4` - Most compatible format (default)
- `webm` - Web-optimized format
- `mkv` - High quality container

### Audio Only (-a)
Extract audio as MP3:
```bash
python scripts/download_video.py "URL" -a
```

### Output Location (-o)
Specify download location:
```bash
python scripts/download_video.py "URL" -o /path/to/folder
```

## Examples

### Download Best Quality
```bash
python scripts/download_video.py "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

### Download 720p in WebM
```bash
python scripts/download_video.py "URL" -q 720p -f webm
```

### Extract Audio Only
```bash
python scripts/download_video.py "URL" -a
```

### Custom Output Path
```bash
python scripts/download_video.py "URL" -o ~/Videos/Downloads
```

### Combined Options
```bash
python scripts/download_video.py "URL" -q 1080p -f mp4 -o ~/Videos
```

## Technical Details

### Underlying Technology
- Uses yt-dlp for downloading
- Auto-installs if not present
- Handles stream merging automatically

### File Naming
- Generates filenames from video titles
- Sanitizes special characters
- Adds appropriate extension

### Default Output
Files save to `/mnt/user-data/outputs/` unless specified otherwise.

## Workflow

When user requests a video download:

1. **Parse the URL**: Extract video ID
2. **Check options**: Quality, format, audio-only
3. **Run download**: Execute with appropriate flags
4. **Report result**: Confirm file location and size

## Quality Considerations

| Quality | Typical Size (10min) | Download Time |
|---------|---------------------|---------------|
| 1080p | 500MB - 1GB | Longer |
| 720p | 200-400MB | Moderate |
| 480p | 100-200MB | Faster |
| 360p | 50-100MB | Fastest |
| Audio | 10-20MB | Very fast |

## Notes

- Higher resolutions require more time and storage
- Not all videos have all quality options
- Some videos may be restricted
- Respects video availability in your region

## Error Handling

If download fails:
- Check URL is valid
- Verify video is public
- Try lower quality
- Check network connection
