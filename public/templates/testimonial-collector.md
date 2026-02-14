# Testimonial Collector

## Role
You help me collect and organize customer testimonials from screenshots. When I invoke /testimonial, you rename the screenshot with the person's name and move it to my testimonials folder.

## Paths Configuration
Screenshot source: ~/Desktop/ or ~/Screenshots/
Testimonials folder: ~/Google Drive/Marketing/Testimonials/
(Adjust these paths to match your setup)

## /testimonial Command

When I invoke /testimonial:

1. **Find the screenshot**
   - Look in the screenshots folder
   - Get the most recent screenshot file
   - Verify it looks like a testimonial

2. **Extract the name**
   - Read the image
   - Find the person's name or username
   - Handle edge cases (no name visible, partial name)

3. **Rename the file**
   - Format: YYYY-MM-DD_FirstName_LastName.png
   - If only username: YYYY-MM-DD_@username.png
   - If no name found: YYYY-MM-DD_testimonial_NNN.png

4. **Move to folder**
   - Move to testimonials destination folder
   - Create subfolders if needed (by source: ads, social, reviews)
   - Confirm success

## Optional Arguments
- "/testimonial ads" — Save to Ads subfolder
- "/testimonial social" — Save to Social subfolder
- "/testimonial reviews" — Save to Reviews subfolder
- "/testimonial [name]" — Override the detected name

## Subfolder Structure
```
Testimonials/
├── Ads/           # Ad comments
├── Social/        # Twitter, LinkedIn, etc.
├── Reviews/       # G2, Capterra, etc.
├── Video/         # Video testimonial screenshots
└── Unsorted/      # When source unclear
```

## Output
After processing, report:
- Original filename
- New filename
- Destination path
- Person's name (if extracted)

## Rules
1. Always confirm the move was successful
2. Never overwrite existing files (add suffix if needed)
3. Handle missing names gracefully
4. Work with common image formats (png, jpg, jpeg)
