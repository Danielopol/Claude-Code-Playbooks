#!/usr/bin/env node
/**
 * SEO Augmentation Script
 * Reads each MDX playbook, generates seoHook/targetAudience/exampleUseCase,
 * and inserts them after the description field in frontmatter.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const playbooksDir = path.join(__dirname, '..', 'src', 'content', 'playbooks');

// Category to audience mapping
const categoryAudiences = {
  'file-organization': 'office workers, administrative assistants, freelancers, small business owners, remote workers',
  'note-management': 'knowledge workers, students, writers, researchers, productivity enthusiasts',
  'task-management': 'project managers, team leads, busy professionals, entrepreneurs, remote workers',
  'productivity': 'busy professionals, entrepreneurs, remote workers, freelancers, office managers',
  'knowledge-management': 'researchers, knowledge workers, writers, educators, lifelong learners',
  'career-development': 'job seekers, career changers, recent graduates, professionals seeking promotion, recruiters',
  'personal-development': 'self-improvement enthusiasts, professionals, coaches, therapists, students',
  'education': 'teachers, tutors, students, curriculum designers, training coordinators',
  'research-writing': 'researchers, graduate students, professors, science writers, journal editors',
  'market-research': 'market researchers, product managers, brand strategists, competitive analysts, consultants',
  'finance-accounting': 'accountants, bookkeepers, small business owners, freelancers, finance managers',
  'finance': 'financial analysts, accountants, small business owners, CFOs, investment professionals',
  'marketing-content': 'content marketers, social media managers, copywriters, brand managers, growth marketers',
  'legal-compliance': 'legal professionals, compliance officers, contract managers, paralegals, business owners',
  'hr-recruiting': 'HR managers, recruiters, talent acquisition specialists, hiring managers, people operations leads',
  'creative-design': 'designers, creative directors, brand managers, marketing managers, content creators',
  'creative-writing': 'writers, novelists, screenwriters, content creators, storytellers',
  'developer-tools': 'software developers, DevOps engineers, technical leads, full-stack developers, engineering managers',
  'academic-research': 'graduate students, professors, research scientists, postdocs, lab managers',
  'executive-strategy': 'executives, strategy consultants, business owners, C-suite leaders, board members',
  'sales-revenue': 'sales managers, account executives, SDRs, revenue operations leads, business development reps',
  'project-management': 'project managers, scrum masters, product owners, team leads, program managers',
  'media-production': 'video producers, podcasters, content creators, media managers, production assistants',
  'communications': 'communications managers, PR specialists, internal comms leads, speechwriters, event organizers',
  'operations-compliance': 'operations managers, compliance officers, quality assurance leads, process improvement specialists, auditors',
  'data-reporting': 'data analysts, business intelligence analysts, report authors, operations managers, decision makers',
  'customer-support': 'customer success managers, support leads, customer experience directors, service managers, help desk managers',
  'bio-research': 'bioinformaticians, molecular biologists, lab researchers, clinical scientists, bioinformatics engineers',
  'product-management': 'product managers, product owners, UX researchers, product designers, growth PMs',
};

// Generate SEO hook from description - rewrite as pain-point-first
function generateSeoHook(title, description) {
  const desc = description.toLowerCase();

  // Map common patterns to pain points
  const painPoints = {
    'organiz': 'Tired of wasting hours searching through cluttered files and folders?',
    'automat': 'Repetitive manual tasks are eating into your productive hours every single day.',
    'analyz': 'Making decisions without proper data analysis means flying blind and hoping for the best.',
    'generat': 'Starting from scratch every time is exhausting when you could have a polished draft in minutes.',
    'manage': 'Keeping track of everything manually leads to missed deadlines, lost information, and constant stress.',
    'track': 'Without a clear system to track progress, important tasks slip through the cracks.',
    'creat': 'Building professional-quality output from scratch takes hours you don\'t have.',
    'review': 'Manual review processes are slow, inconsistent, and prone to human error.',
    'plan': 'Planning without structure leads to wasted time, missed opportunities, and scope creep.',
    'budget': 'Tracking expenses across multiple accounts and categories manually is a recipe for errors.',
    'invoice': 'Chasing invoices and organizing financial documents by hand wastes hours every month.',
    'resume': 'Generic resumes get ignored. Tailoring each application manually takes hours you don\'t have.',
    'email': 'Your inbox is overflowing and important messages get buried under the noise.',
    'meeting': 'Meetings generate pages of notes but action items get lost within hours.',
    'research': 'Research projects drown in sources, citations, and disconnected notes.',
    'write': 'Writer\'s block and blank pages waste hours that could be spent on high-impact work.',
    'present': 'Building compelling presentations from scratch takes days of design and content work.',
    'contract': 'Reviewing contracts manually means risking missed clauses and unfavorable terms.',
    'lead': 'Finding and qualifying leads manually is time-consuming and inconsistent.',
    'sales': 'Your sales team spends more time on admin work than actually selling.',
    'content': 'Creating fresh, engaging content consistently is exhausting without a system.',
    'social': 'Maintaining a consistent social media presence across platforms feels like a full-time job.',
    'seo': 'Your content isn\'t ranking because you\'re guessing at keywords instead of following a strategy.',
    'pdf': 'Working with PDFs is painful — extracting data, merging files, and converting formats wastes hours.',
    'data': 'Your data is scattered across files and formats, making analysis nearly impossible.',
    'scientific': 'Setting up scientific analysis pipelines from scratch is tedious and error-prone.',
    'recipe-': 'Creating this type of document from scratch every time wastes hours of skilled professional time.',
  };

  for (const [key, hook] of Object.entries(painPoints)) {
    if (desc.includes(key) || title.toLowerCase().includes(key)) {
      // Add second sentence from description context
      const action = description.split('.')[0];
      return `${hook} ${action} — automatically, in minutes instead of hours.`;
    }
  }

  // Default fallback
  return `Doing this manually takes hours of tedious work every time. ${description.split('.')[0]} — in a fraction of the time it would take by hand.`;
}

// Generate example use case
function generateExampleUseCase(title, description) {
  // Create a reasonable input prompt based on the title
  const cleanTitle = title.replace(/^(Claude Code |AI |Smart |Intelligent |Automated? )/i, '');
  const inputPhrase = `Help me with ${cleanTitle.toLowerCase()}`;

  // Create a tangible output from the description
  const firstSentence = description.split('.')[0].trim();
  const output = firstSentence.length > 80
    ? firstSentence.substring(0, 80).trim() + '...'
    : firstSentence;

  return `"${inputPhrase}" → ${output} — delivered as a polished, ready-to-use document`;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Check if already has seoHook
  if (content.includes('seoHook:')) {
    return false;
  }

  // Extract frontmatter (handle \r\n line endings)
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) return false;

  const fm = fmMatch[1];

  // Extract fields
  const titleMatch = fm.match(/title:\s*"([^"]+)"/);
  const descMatch = fm.match(/description:\s*"([^"]+)"/);
  const catMatch = fm.match(/category:\s*"([^"]+)"/);

  if (!titleMatch || !descMatch || !catMatch) return false;

  const title = titleMatch[1];
  const description = descMatch[1];
  const category = catMatch[1];

  // Generate SEO fields
  const seoHook = generateSeoHook(title, description);
  const targetAudience = categoryAudiences[category] || 'professionals, business owners, freelancers, managers, team leads';
  const exampleUseCase = generateExampleUseCase(title, description);

  // Find the description line and insert after it (handle \r\n)
  const descLineMatch = content.match(/description:\s*"[^"]+"\r?\n/);
  if (!descLineMatch) return false;

  const descLineStr = descLineMatch[0];
  const lineEnding = descLineStr.includes('\r\n') ? '\r\n' : '\n';
  const newFields = `${descLineStr}seoHook: "${seoHook.replace(/"/g, '\\"')}"${lineEnding}targetAudience: "${targetAudience}"${lineEnding}exampleUseCase: "${exampleUseCase.replace(/"/g, '\\"')}"${lineEnding}`;

  const newContent = content.replace(descLineStr, newFields);

  if (newContent === content) return false;

  fs.writeFileSync(filePath, newContent, 'utf8');
  return true;
}

// Process all MDX files
const files = fs.readdirSync(playbooksDir).filter(f => f.endsWith('.mdx'));
let processed = 0;
let skipped = 0;
let errors = 0;

for (const file of files) {
  try {
    const filePath = path.join(playbooksDir, file);
    if (processFile(filePath)) {
      processed++;
    } else {
      skipped++;
    }
  } catch (err) {
    console.error(`Error processing ${file}: ${err.message}`);
    errors++;
  }
}

console.log(`Done! Processed: ${processed}, Skipped: ${skipped}, Errors: ${errors}, Total: ${files.length}`);
