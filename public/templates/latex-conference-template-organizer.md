# LaTeX Conference Template Organizer

Organize a messy conference LaTeX template `.zip` into clean, Overleaf-ready structure. Official conference templates usually ship with excessive example content, instructional comments, and disorganized files — this turns them into a template ready for writing, without losing any of the original document-class configuration or required packages.

## Working Mode: Analyze-Then-Confirm

Analyze issues and present a cleanup plan first, then execute only after the user confirms. Never restructure a template silently.

## Step 1: Extract and Analyze

```bash
unzip -q template.zip -d /tmp/latex-template-temp
cd /tmp/latex-template-temp
find . -type f -name "*.tex" -o -name "*.sty" -o -name "*.cls" -o -name "*.bib"
```

Identify file types (`.tex` sources, `.sty`/`.cls` style files, `.bib` bibliography, image files) and the main file — try common names (`main.tex`, `paper.tex`, `sample-sigconf.tex`), search for the file containing `\documentclass`, and ask the user to confirm if multiple candidates exist:

```bash
grep -l "\\documentclass" *.tex
```

## Step 2: Diagnose Issues

Present discovered issues to the user before touching anything:

- **Disorganized structure** — multi-level nesting, `.tex` files scattered across directories, unclear which file is the main one.
- **Redundant content** — filenames or comments containing `sample`, `example`, `demo`, `test`, `delete this`.
- **Dependency issues** — missing referenced `.sty`/`.cls` files, incorrect image/table reference paths.

## Step 3: Ask for Conference Information

```markdown
Please provide the following information (optional):
1. Conference submission link (recommended) — used to extract official submission requirements
2. Conference name — if no link is available
3. Other special requirements — page limits, anonymity requirements, etc.
```

## Step 4: Present the Cleanup Plan and Wait for Confirmation

```markdown
## Cleanup Plan

### Issues Found
- [List diagnosed issues]

### Cleanup Approach
1. Main file: main.tex (clean example content)
2. Section separation: text/ directory
3. Resource directories: figures/, tables/, styles/

### Output Structure
[Show output directory structure]

Confirm execution? [Y/n]
```

## Step 5: Execute Cleanup

Create the output structure:

```bash
mkdir -p output/{text,figures,tables,styles}
```

### Clean Up the Main File

**Keep:** the `\documentclass` declaration, required package imports, and core configuration (e.g. anonymous-mode settings). **Remove:** example section content, verbose instructional comments, and example author/title placeholders. **Add:** `\input{text/XX-section}` imports for each section.

Example structure (ACM template format):

```latex
\documentclass[...]{...}  % Keep original template document class

% Required packages (keep original template package declarations)

%% Preamble: Before \begin{document}
\title{Your Paper Title}
\author{Author Name}
\affiliation{...}

\begin{abstract}
% TODO: Write abstract content
\end{abstract}

\begin{CCSXML}
<ccs2012>...</ccs2012>
\end{CCSXML}
\ccsdesc[500]{Applied computing~...}
\keywords{keyword1, keyword2, keyword3}

\begin{document}
\maketitle

\input{text/01-introduction}
\input{text/02-related-work}
\input{text/03-method}
\input{text/04-experiments}
\input{text/05-conclusion}

\bibliographystyle{...}
\bibliography{references}
\end{document}
```

**Anonymous-submission configuration** (example for an ACM `acmart`-based venue): add `anonymous,review,nonacm` to the document class options to strip identifying footnotes, then clear the conference/year/ISBN/DOI metadata — and record what needs restoring for the camera-ready version:

```latex
%% Submission version:
\documentclass[sigconf,anonymous,review,nonacm]{acmart}
\settopmatter{printacmref=false}
\setcopyright{none}
\acmConference[]{}{}{}
\acmYear{}
\acmISBN{}
\acmDOI{}

%% Camera-ready version — restore:
%% \documentclass[sigconf]{acmart}
%% \acmConference[VENUE '26]{Full Proceedings Name}{Dates}{Location}
%% \acmISBN{...} \acmDOI{...}
```

### Create Section Files

Each file in `text/` contains only its section content — starting with `\section{...}`, never `\begin{document}` or other document-level wrappers:

```latex
% text/01-introduction.tex
\section{Introduction}
% TODO: Write introduction content
```

The abstract stays in `main.tex`'s preamble (before `\begin{document}`), not in a separate section file.

### Copy Style, Image, and Table Files

```bash
# Style/class files — keep the original template's own directory structure under styles/
find /tmp/latex-template-temp -type f \( -name "*.sty" -o -name "*.cls" \) -exec cp {} output/styles/ \;

# Images
find /tmp/latex-template-temp -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.pdf" \) -exec cp {} output/figures/ \;

# Table files
find /tmp/latex-template-temp -type f -name "*.tex" | grep -i table | while read f; do cp "$f" output/tables/; done

# Bibliography
find /tmp/latex-template-temp -type f -name "*.bib" -exec cp {} output/ \;
```

If the original template had no separate table files, create one placeholder example table — Overleaf automatically deletes empty directories, so an empty `tables/` folder silently disappears on upload:

```bash
cat > output/tables/example-table.tex << 'EOF'
% Example table file — can be deleted or replaced
\begin{table}[h]
    \centering
    \caption{Example Table}
    \label{tab:example}
    \begin{tabular}{lccc}
        \toprule
        Method & Metric 1 & Metric 2 & Metric 3 \\
        \midrule
        Baseline & 85.3 & 12.4 & 0.92 \\
        \textbf{Ours} & \textbf{89.4} & \textbf{10.2} & \textbf{0.97} \\
        \bottomrule
    \end{tabular}
\end{table}
EOF
```

## Step 6: Generate a README

Source priority for filling in submission requirements: (1) the conference link the user provided, fetched for the actual submission page content; (2) comments already present in the template files; (3) reasonable inference from `\documentclass` options when neither is available.

```markdown
# [Conference Name] Submission Template

## Template Information
- Conference: [name] — Website: [link] — Document class: [extracted documentclass]

## Submission Requirements
### Page and Format
- Page limit: [from website or template]
- Column layout / font size: [detected]
### Anonymity Requirements
- Blind review required: [detected mode]
- Author information handling: [instructions]
### Compilation
- Recommended compiler: [XeLaTeX/pdfLaTeX/LuaLaTeX]
- Special package requirements: [if any]

## Overleaf Usage
1. Create a new project on Overleaf
2. Upload the entire output/ directory
3. Set the compiler to [specified compiler]
4. Click Recompile to test

## File Description
- main.tex — main file, start here
- text/ — section content, edit as needed
- figures/, tables/ — place assets here
- styles/ — style files, no modification needed
- references.bib — bibliography database

## Common Operations
[Adding images, tables, and references — standard LaTeX snippets]

## Notes
[Warnings extracted from the original template's own comments or the conference website]
```

If a conference link was provided, fetch the actual submission page and extract page limits, anonymity requirements, format requirements, and deadlines into the README rather than leaving placeholders.

## Step 7: Cleanup and Finish

```bash
rm -rf /tmp/latex-template-temp
echo "Template cleanup complete! Output directory: output/"
echo "Upload the output/ directory to Overleaf to test compilation."
```
