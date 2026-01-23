'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Plus,
  FileText,
  Folder,
  Upload,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
  ArrowLeft,
  X,
} from 'lucide-react';

type Step = 'instructions' | 'choose-method' | 'upload-files' | 'describe';

interface UploadedFile {
  name: string;
  content: string;
}

export function ContributePlaybookModal() {
  const [step, setStep] = useState<Step>('instructions');
  const [claudeFile, setClaudeFile] = useState<UploadedFile | null>(null);
  const [readmeFile, setReadmeFile] = useState<UploadedFile | null>(null);
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const claudeInputRef = useRef<HTMLInputElement>(null);
  const readmeInputRef = useRef<HTMLInputElement>(null);

  const resetForm = () => {
    setStep('instructions');
    setClaudeFile(null);
    setReadmeFile(null);
    setDescription('');
    setEmail('');
    setSubmitted(false);
    setIsSubmitting(false);
    setError(null);
  };

  const handleFileUpload = async (
    file: File,
    setter: (file: UploadedFile | null) => void
  ) => {
    if (file && file.name.endsWith('.md')) {
      const content = await file.text();
      setter({ name: file.name, content });
    }
  };

  const handleDrop = (
    e: React.DragEvent,
    setter: (file: UploadedFile | null) => void
  ) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file, setter);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleSubmitFiles = async () => {
    if (!claudeFile || !readmeFile) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/submit-playbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'files',
          claudeTemplate: claudeFile.content,
          claudeFileName: claudeFile.name,
          readmeContent: readmeFile.content,
          readmeFileName: readmeFile.name,
          email,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitDescription = async () => {
    if (!description.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/submit-playbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'description',
          description,
          email,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog onOpenChange={(open) => !open && resetForm()}>
      <DialogTrigger asChild>
        <Card className="bg-[#161b22] border-[#30363d] border-dashed h-full card-terminal hover:border-[#f97316] group cursor-pointer">
          <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[200px] text-center">
            <div className="w-12 h-12 rounded-full bg-[#f97316]/20 flex items-center justify-center mb-4 group-hover:bg-[#f97316]/30 transition-colors">
              <Plus className="h-6 w-6 text-[#f97316]" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Add New Playbook</h3>
            <p className="text-sm text-muted-foreground">
              Suggest a new playbook for the community
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="bg-[#0d1117] border-[#30363d] sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="border-b border-[#30363d] pb-4">
          <DialogTitle className="flex items-center gap-2 text-lg">
            <FileText className="h-5 w-5 text-[#f97316]" />
            Contribute a New Playbook
          </DialogTitle>
        </DialogHeader>

        {/* Instructions Step */}
        {step === 'instructions' && (
          <div className="space-y-6 py-2">
            <p className="text-muted-foreground">
              Help expand Claude Code Playbooks by contributing a new playbook! Follow these steps:
            </p>

            {/* Step 1 */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f97316] text-[#0d1117] text-sm font-bold flex items-center justify-center">
                  1
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Create Your Playbook</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    A playbook consists of two files:
                  </p>

                  <div className="space-y-3">
                    {/* CLAUDE.md structure */}
                    <div className="bg-[#161b22] rounded-lg border border-[#30363d] p-4">
                      <h4 className="font-medium text-sm text-[#f97316] mb-2">CLAUDE.md Template</h4>
                      <p className="text-xs text-muted-foreground mb-2">The configuration file users will copy to their projects:</p>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                        <li>- Role and context for Claude</li>
                        <li>- Task-specific instructions</li>
                        <li>- Output format requirements</li>
                        <li>- Example prompts and workflows</li>
                      </ul>
                    </div>

                    {/* README.md structure */}
                    <div className="bg-[#161b22] rounded-lg border border-[#30363d] p-4">
                      <h4 className="font-medium text-sm text-[#22d3ee] mb-2">README.md Setup Guide</h4>
                      <p className="text-xs text-muted-foreground mb-2">Instructions and tips for using the playbook:</p>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                        <li>- What This Does (description)</li>
                        <li>- Quick Start steps</li>
                        <li>- Usage examples and commands</li>
                        <li>- Tips and troubleshooting</li>
                      </ul>
                    </div>

                    {/* Example path */}
                    <div className="bg-[#0d1117] rounded-md border border-[#30363d] px-4 py-3">
                      <span className="text-sm text-muted-foreground">Example path: </span>
                      <code className="text-sm text-[#e6edf3]">src/content/playbooks/your-playbook.mdx</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f97316] text-[#0d1117] text-sm font-bold flex items-center justify-center">
                  2
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Follow the Pattern</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Check existing playbooks in the repository to understand the structure and conventions.
                  </p>

                  <Link
                    href="/playbooks"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#f97316]/20 text-[#f97316] hover:bg-[#f97316]/30 transition-colors text-sm"
                  >
                    <Folder className="h-4 w-4" />
                    View existing playbooks
                  </Link>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <div className="pt-4 border-t border-[#30363d]">
              <Button
                onClick={() => setStep('choose-method')}
                className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white"
              >
                Continue to Submit
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Choose Method Step */}
        {step === 'choose-method' && (
          <div className="space-y-6 py-2">
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => setStep('instructions')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <p className="text-muted-foreground">
                Choose how you'd like to submit your playbook:
              </p>
            </div>

            <div className="grid gap-4">
              {/* Option 1: Upload Files */}
              <button
                onClick={() => setStep('upload-files')}
                className="w-full text-left"
              >
                <Card className="bg-[#161b22] border-[#30363d] hover:border-[#22d3ee] transition-colors cursor-pointer">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#22d3ee]/20 flex items-center justify-center flex-shrink-0">
                      <Upload className="h-5 w-5 text-[#22d3ee]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">Submit Files</h3>
                      <p className="text-sm text-muted-foreground">
                        I have my CLAUDE.md template and README.md setup guide ready to submit.
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Card>
              </button>

              {/* Option 2: Describe */}
              <button
                onClick={() => setStep('describe')}
                className="w-full text-left"
              >
                <Card className="bg-[#161b22] border-[#30363d] hover:border-[#f97316] transition-colors cursor-pointer">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#f97316]/20 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-[#f97316]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">Describe Your Workflow</h3>
                      <p className="text-sm text-muted-foreground">
                        I'll describe how I use Claude Code, and you'll transform it into a playbook.
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Card>
              </button>
            </div>
          </div>
        )}

        {/* Upload Files Step */}
        {step === 'upload-files' && !submitted && (
          <div className="space-y-6 py-2">
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => setStep('choose-method')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <p className="text-muted-foreground">
                Upload your playbook files:
              </p>
            </div>

            <div className="space-y-4">
              {/* CLAUDE.md Upload */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <span className="text-[#f97316]">*</span> CLAUDE.md Template
                </label>
                <input
                  ref={claudeInputRef}
                  type="file"
                  accept=".md"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileUpload(file, setClaudeFile);
                  }}
                  className="hidden"
                />
                {claudeFile ? (
                  <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border border-[#22c55e] rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-[#22c55e]" />
                      <span className="text-sm text-foreground">{claudeFile.name}</span>
                      <CheckCircle2 className="h-4 w-4 text-[#22c55e]" />
                    </div>
                    <button
                      onClick={() => {
                        setClaudeFile(null);
                        if (claudeInputRef.current) claudeInputRef.current.value = '';
                      }}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => claudeInputRef.current?.click()}
                    onDrop={(e) => handleDrop(e, setClaudeFile)}
                    onDragOver={handleDragOver}
                    className="flex flex-col items-center justify-center px-4 py-8 bg-[#0d1117] border-2 border-dashed border-[#30363d] rounded-lg cursor-pointer hover:border-[#f97316] transition-colors"
                  >
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Drop your <span className="text-[#f97316] font-medium">CLAUDE.md</span> file here
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">or click to browse</p>
                  </div>
                )}
              </div>

              {/* README.md Upload */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <span className="text-[#f97316]">*</span> README.md Setup Guide
                </label>
                <input
                  ref={readmeInputRef}
                  type="file"
                  accept=".md"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileUpload(file, setReadmeFile);
                  }}
                  className="hidden"
                />
                {readmeFile ? (
                  <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border border-[#22c55e] rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-[#22c55e]" />
                      <span className="text-sm text-foreground">{readmeFile.name}</span>
                      <CheckCircle2 className="h-4 w-4 text-[#22c55e]" />
                    </div>
                    <button
                      onClick={() => {
                        setReadmeFile(null);
                        if (readmeInputRef.current) readmeInputRef.current.value = '';
                      }}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => readmeInputRef.current?.click()}
                    onDrop={(e) => handleDrop(e, setReadmeFile)}
                    onDragOver={handleDragOver}
                    className="flex flex-col items-center justify-center px-4 py-8 bg-[#0d1117] border-2 border-dashed border-[#30363d] rounded-lg cursor-pointer hover:border-[#22d3ee] transition-colors"
                  >
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Drop your <span className="text-[#22d3ee] font-medium">README.md</span> file here
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">or click to browse</p>
                  </div>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email (optional, for follow-up)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#22d3ee]"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-400">
                {error}
              </div>
            )}

            <Button
              onClick={handleSubmitFiles}
              disabled={!claudeFile || !readmeFile || isSubmitting}
              className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4 mr-2" />
                  Submit Playbook
                </>
              )}
            </Button>
          </div>
        )}

        {/* Describe Step */}
        {step === 'describe' && !submitted && (
          <div className="space-y-6 py-2">
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => setStep('choose-method')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <p className="text-muted-foreground">
                Describe your Claude Code workflow:
              </p>
            </div>

            <div className="space-y-4">
              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <span className="text-[#f97316]">*</span> How do you use Claude Code?
                </label>
                <p className="text-xs text-muted-foreground mb-2">
                  Tell us about the task, what prompts you use, and any tips you've discovered.
                </p>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="I use Claude Code to help me with...&#10;&#10;My typical workflow is:&#10;1. ...&#10;2. ...&#10;&#10;Some tips I've found helpful:&#10;- ..."
                  className="w-full h-56 px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#22d3ee] resize-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email (optional, for follow-up)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#22d3ee]"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-400">
                {error}
              </div>
            )}

            <Button
              onClick={handleSubmitDescription}
              disabled={!description.trim() || isSubmitting}
              className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Submit Description
                </>
              )}
            </Button>
          </div>
        )}

        {/* Success State */}
        {submitted && (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#22c55e]/20 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-8 w-8 text-[#22c55e]" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Thank You!</h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Your playbook submission has been received. We'll review it and add it to the collection soon.
            </p>
            <Button
              onClick={resetForm}
              variant="outline"
              className="mt-4 border-[#30363d] hover:border-[#22d3ee]"
            >
              Submit Another
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
