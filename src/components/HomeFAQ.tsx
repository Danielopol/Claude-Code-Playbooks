'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'What are Claude Code Playbooks?',
    answer:
      'Claude Code Playbooks are ready-to-use workflows, templates and skills that you copy-paste as a CLAUDE.md file in your project folder. They tell Claude Code exactly how to behave — what to build, how to structure files, what rules to follow — so you get consistent, high-quality results without writing complex prompts from scratch.',
  },
  {
    question: 'How do I use a playbook?',
    answer:
      'It takes three steps: browse the directory to find a playbook that matches your use case, copy the CLAUDE.md template into your project folder, then launch Claude Code. The agent reads the configuration automatically and follows the workflow. No setup, no configuration files, no coding required.',
  },
  {
    question: 'Do I need to be a developer to use these workflows?',
    answer:
      'Not at all. These playbooks are designed for non-developers — marketers, analysts, founders, researchers, students, and anyone who wants to automate work with AI. Each template is a plain-text file you copy-paste. If you can create a folder and paste text into a file, you can use a playbook.',
  },
  {
    question: 'Are the playbooks free and open source?',
    answer:
      'Yes. Every playbook on this directory is completely free to use, modify and share. The entire project is open source on GitHub under a permissive license. There are no paywalls, no premium tiers, no sign-up required.',
  },
  {
    question: 'Are these workflows tested?',
    answer:
      'Every playbook is a real-world use case that has been submitted and tested by the community before being curated on this directory. These are not theoretical templates — they are workflows that people actually rely on for their daily work, verified to produce reliable results.',
  },
  {
    question: 'Which AI coding agents are compatible?',
    answer:
      'Playbooks are built for Claude Code, but many templates and skills also work with other AI coding agents including Codex CLI, Windsurf, Cursor, Antigravity, Perplexity and more. The CLAUDE.md format is simple enough that most agents can interpret and follow the instructions.',
  },
  {
    question: 'Can I submit my own workflow?',
    answer:
      'Absolutely. The directory is community-driven and we encourage submissions. You can contribute a new playbook directly through our GitHub repository or use the submission form on the homepage. Share a workflow that works for you so others in the community can replicate and benefit from it.',
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-[#30363d] rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-4 text-left bg-[#161b22] hover:bg-[#1c2129] transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-foreground">{question}</span>
        <ChevronDown
          className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="p-4 text-sm text-muted-foreground bg-[#0d1117] border-t border-[#30363d]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="container pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
            <span className="text-[#f97316]">?</span>
            <span>Frequently Asked Questions</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            <span className="text-[#30363d]">└</span> Everything you need to know about Claude Code workflows, templates and skills
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
