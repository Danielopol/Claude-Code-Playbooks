import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for PDFs: Extract, Merge, and Fill Forms Automatically | Claude Code Playbooks Blog',
  description: "Four Claude Skills for the PDF tasks everyone runs into — clean text and table extraction, merging and splitting without a subscription, batch form filling from a spreadsheet, and OCR for scanned documents.",
  alternates: { canonical: '/blog/claude-skills-pdf' },
  openGraph: {
    title: 'Claude Skills for PDFs: Extract, Merge, and Fill Forms Automatically',
    description: "Four Claude Skills for the PDF tasks everyone runs into — clean text and table extraction, merging and splitting without a subscription, batch form filling from a spreadsheet, and OCR for scanned documents.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-pdf',
    type: 'article',
    publishedTime: '2026-09-05T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for PDFs: Extract, Merge, and Fill Forms Automatically',
    description: "Four Claude Skills for the PDF tasks everyone runs into — clean text and table extraction, merging and splitting without a subscription, batch form filling from a spreadsheet, and OCR for scanned documents.",
    images: ['https://www.claudecodehq.com/og-image.png'],
  },
};

function PlaybookLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#22d3ee] hover:underline font-medium">
      {children}
    </Link>
  );
}

export default function ClaudeSkillsPdfPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for PDFs: Extract, Merge, and Fill Forms Automatically"
      description="Four Claude Skills for the PDF tasks everyone runs into — clean text and table extraction, merging and splitting without a subscription, batch form filling from a spreadsheet, and OCR for scanned documents."
      category="guide"
      difficulty="basic"
      readingTime="12 min read"
      createdAt="2026-09-05"
      tags={['claude skills pdf', 'ai pdf automation', 'ai fill pdf forms', 'pdf data extraction', 'merge split pdf', 'pdf ocr scanner', 'ai pdf tools', 'batch pdf form filling']}
      author="Claude Code Playbooks"
      slug="claude-skills-pdf"
    >
      <p>
        PDF was designed to look the same on every screen and every printer — not to give up its data easily. That single design choice is the source of a remarkably universal set of frustrations: copy-paste that garbles text, tables that lose their columns, scanned documents where the text is visible but not selectable, and forms that have to be filled out one tedious field at a time. Almost everyone who works with documents hits one of these problems eventually, and almost none of it requires real technical skill to fix once the right tool is doing the work.
      </p>
      <p>
        These four Claude Skills cover the PDF tasks that come up over and over — pulling structured data out, combining or splitting files, filling forms in batch, and making scanned documents searchable again.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Get Clean Data Out of a Document Built for Printing
      </h2>
      <p>
        The data you need is trapped in a two-hundred-page PDF, and a basic copy-paste gives you garbled text with tables that lose their structure entirely — numbers ending up in the wrong columns, rows merging together, headers disappearing. The PDF was designed to be printed and read, not to hand its data back out in a usable form.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/pdf-extraction">PDF Text & Table Extractor</PlaybookLink>{' '}
        Skill uses pdfplumber for precise, character-level extraction rather than a basic text dump: clean CSV files for every table detected, full text extraction with page numbers preserved, document metadata, and a summary of exactly what was found and where.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Extract all tables from this 80-page annual report into clean CSV files, with page numbers preserved"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Copy-paste from a 200-page PDF gives garbled text, tables lose their structure, and numbers end up in the wrong columns — the data you need but not in a usable form</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">Clean CSV files for each table, full text extraction with page numbers preserved, document metadata, and a summary showing 23 tables extracted across 4 sections with column headers intact</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Works especially well on financial statements, research papers, and reports with dense tabular data.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Merge and Split Without a Subscription
      </h2>
      <p>
        Combining eight PDF attachments into a single file for a submission, or splitting a hundred-page document into individual chapters, is exactly the kind of task that comes up often enough to be annoying but rarely enough that paying for Adobe feels justified. Free online tools work until they don't — file size limits, watermarks, or upload restrictions that turn a thirty-second task into a frustrating search for a tool that'll actually handle the file.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/pdf-merge-split">PDF Merge & Split Tool</PlaybookLink>{' '}
        Skill handles both directions locally: merging multiple PDFs into one file with bookmarks and a generated table of contents, or splitting a large document into separate files while preserving page numbering throughout.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Merge these 12 contract PDFs into one file with a table of contents, and split the appendix into separate chapter files"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">8 PDF attachments that need to become one file for a submission — Adobe wants a subscription, and online tools cap out at file sizes that don't fit the job</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">A single merged contract PDF with bookmarks and a generated table of contents, 5 separate chapter files split from the appendix, and page numbering preserved throughout</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Runs locally on your files — no upload size limits or subscription required.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Fill Dozens of Identical Forms From a Spreadsheet
      </h2>
      <p>
        Fifty identical PDF forms with different data for each one — government paperwork, insurance claims, vendor onboarding — typed by hand, one at a time, where a single typo means printing the page again and starting over. This is the specific kind of tedious, error-prone, repetitive task that a computer should be doing and almost never is, because most people don't know PDF forms can be filled programmatically at all.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/pdf-form-filler">PDF Form Auto-Filler</PlaybookLink>{' '}
        Skill fills a batch of forms directly from a spreadsheet: each PDF populated programmatically from the corresponding row of data, field validation catching missing or malformed entries before anything gets submitted, completed forms saved both individually and as a merged batch, and the filled data extracted back out as a verification spreadsheet.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Fill these 30 vendor W-9 forms from our contractor spreadsheet, and flag any rows with missing required fields"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">50 identical PDF forms typed by hand with different data each time — a single typo means printing the page again and starting over</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">All 30 PDFs filled programmatically from the CSV data, field validation catching 3 missing EINs before submission, completed forms saved individually and as a merged batch, plus a verification spreadsheet of the extracted data</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Ideal for HR onboarding, insurance claims, tax forms, and any recurring paperwork with the same fields across many records.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Turn a Scanned Image Back Into Searchable Text
      </h2>
      <p>
        Someone scanned a fifty-page contract and emailed it as a PDF — the text is visible, but it can't be selected, searched, or copied, because it's not text at all, it's a digital photograph of paper. Finding a single clause in a document like that means reading every page manually, and pulling a quote out means retyping it by hand.
      </p>
      <p>
        The{' '}
        <PlaybookLink href="/playbooks/pdf-ocr">PDF OCR Scanner</PlaybookLink>{' '}
        Skill runs optical character recognition on scanned or image-based PDFs and adds a real, selectable text layer on top: searchable keywords throughout the document, high character accuracy, and the extracted text also saved as a separate editable Word document for anyone who needs to work with the content directly rather than the scanned image.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316] mb-0">
          "Make this scanned 30-page contract searchable and copyable, and save the extracted text as a Word document too"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-2">Before</p>
          <p className="text-sm text-muted-foreground">A scanned contract where the text is visible but can't be selected, searched, or copied — a digital photograph of paper, not an actual document</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold text-[#22c55e] uppercase tracking-wide mb-2">After</p>
          <p className="text-sm text-muted-foreground">An OCR-processed PDF with a selectable text layer, 98% character accuracy, fully searchable keywords, and the extracted text also saved as a separate Word document for editing</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup takes about 10 minutes. Especially valuable for legal document digitization, scanned receipts, and archival collections.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Matching the Skill to the PDF Problem in Front of You
      </h2>
      <p>
        Each of these four Skills solves a distinct, self-contained PDF problem rather than being stages of one pipeline:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
        <li><span className="text-foreground font-medium">Need the data, not the document</span> — PDF Text & Table Extractor for clean CSVs and structured text</li>
        <li><span className="text-foreground font-medium">Need to combine or break apart files</span> — PDF Merge & Split, no subscription or size limits</li>
        <li><span className="text-foreground font-medium">Need the same form filled many times with different data</span> — PDF Form Auto-Filler, driven from a spreadsheet</li>
        <li><span className="text-foreground font-medium">Have a scan instead of a real document</span> — PDF OCR Scanner, to make it searchable and copyable again</li>
      </ul>
      <p>
        Some workflows naturally chain them — OCR a scanned form first, then extract the data, or merge a set of forms after filling each one individually — but each Skill stands on its own for the specific, universal PDF frustration it's built to solve.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <PlaybookLink href="/playbooks/pdf-extraction">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">PDF Text & Table Extractor</p>
            <p className="text-sm text-muted-foreground">Clean CSVs, preserved text, and metadata pulled from any PDF using pdfplumber</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/pdf-merge-split">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">PDF Merge & Split Tool</p>
            <p className="text-sm text-muted-foreground">Combine or split PDFs locally, with bookmarks and preserved page numbering</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/pdf-form-filler">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">PDF Form Auto-Filler</p>
            <p className="text-sm text-muted-foreground">Batch-fill identical forms from a spreadsheet, with field validation built in</p>
          </div>
        </PlaybookLink>
        <PlaybookLink href="/playbooks/pdf-ocr">
          <div className="bg-[#161b22] border border-[#30363d] hover:border-[#22d3ee] transition-colors rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">PDF OCR Scanner</p>
            <p className="text-sm text-muted-foreground">Turn scanned documents into searchable, copyable, editable text</p>
          </div>
        </PlaybookLink>
      </div>
    </BlogPostLayout>
  );
}
