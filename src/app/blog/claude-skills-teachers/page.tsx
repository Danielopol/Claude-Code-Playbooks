import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Teachers: Build Courses, Quizzes, and Lesson Plans with AI | Claude Code Playbooks Blog',
  description: "How educators use four Claude Skills to turn subject-matter expertise into structured learning — a full e-learning course from curriculum outline to LMS-ready quizzes, a personalized syllabus that bridges what a learner already knows to what they are about to study, a self-hosted AI tutoring platform with RAG knowledge bases and persistent quiz generation, and a vocabulary builder that creates targeted word lists with spaced repetition flashcards instead of generic lists.",
  alternates: { canonical: '/blog/claude-skills-teachers' },
  openGraph: {
    title: 'Claude Skills for Teachers: Build Courses, Quizzes, and Lesson Plans with AI',
    description: "How educators use four Claude Skills to turn subject-matter expertise into structured learning — a full e-learning course from curriculum outline to LMS-ready quizzes, a personalized syllabus that bridges what a learner already knows to what they are about to study, a self-hosted AI tutoring platform with RAG knowledge bases and persistent quiz generation, and a vocabulary builder that creates targeted word lists with spaced repetition flashcards instead of generic lists.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-teachers',
    type: 'article',
    publishedTime: '2026-06-20T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Teachers: Build Courses, Quizzes, and Lesson Plans with AI',
    description: "Four Claude Skills for educators — full course creation, personalized syllabi, AI tutoring platforms, and vocabulary builders — so teachers spend less time building materials and more time teaching.",
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

export default function ClaudeSkillsTeachersPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Teachers: Build Courses, Quizzes, and Lesson Plans with AI"
      description="How educators use four Claude Skills to turn subject-matter expertise into structured learning — a full e-learning course from curriculum outline to LMS-ready quizzes, a personalized syllabus that bridges what a learner already knows to what they are about to study, a self-hosted AI tutoring platform with RAG knowledge bases and persistent quiz generation, and a vocabulary builder that creates targeted word lists with spaced repetition flashcards instead of generic lists."
      category="guide"
      difficulty="intermediate"
      readingTime="14 min read"
      createdAt="2026-06-20"
      tags={['claude skills teachers', 'ai lesson planning', 'ai for educators', 'education AI', 'course creation AI', 'AI tutoring', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-teachers"
    >
      <p>
        Every teacher, trainer, and course creator faces the same hidden labor problem: knowing your subject deeply is not the same as knowing how to teach it. Curriculum design, lesson sequencing, assessment creation, vocabulary scaffolding — these are instructional design skills that are entirely separate from subject-matter expertise. A data scientist who knows Python cold still has to figure out how to structure a six-module course, write 24 lesson objectives, create quizzes that test understanding rather than memorization, and produce a capstone project that ties it all together.
      </p>
      <p className="mt-4">
        Most educators solve this by spending weekends on it. The lesson plan gets built Sunday night. The quiz gets assembled from memory. The course outline gets stared at for two hours before the first module gets written. The vocabulary list for the language class gets pulled from a generic textbook that covers words nobody actually uses in the context the students care about.
      </p>
      <p className="mt-4">
        Claude Skills compresses the structural work without replacing the teaching judgment. A Skill is a persistent Claude configuration installed once and available whenever you need it. The four Skills below cover the full range of educator needs: building a complete course, personalizing a learning path, setting up a tutoring system for students, and creating vocabulary materials that actually match what learners need. The educator's expertise stays at the center — the Skills handle the instructional architecture around it.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Instructional Design Gap
      </h2>
      <p>
        Instructional design is a profession for a reason. The gap between "I know this subject deeply" and "I can teach this subject effectively" is filled by decisions that experienced instructional designers make systematically: what prerequisite knowledge to assume, how to sequence concepts so each one builds on the last, when to introduce a quiz versus when more explanation is needed first, how to write a learning objective that is specific and measurable rather than vague and aspirational.
      </p>
      <p className="mt-4">
        Most educators learn these decisions by trial and error over years. Corporate trainers build courses by adapting the previous course. Language teachers reuse the same vocabulary lists because creating new ones takes longer than the lesson itself. Subject matter experts moving content to an LMS for the first time face a blank curriculum template and have no model for what goes where or why.
      </p>
      <p className="mt-4">
        The four Skills below encode instructional design principles into the structural scaffolding they produce. The educator provides the expertise — the right sequencing for this particular subject, the examples that will land with this particular audience, the assessment questions that test the understanding that actually matters. The Skill provides the architecture: the module structure, the lesson framework, the syllabus sequencing logic, the spaced repetition scheduling. Expertise and structure, together instead of in sequence.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: E-Learning Course Creator — From Expertise to Full Curriculum
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/elearning-course-creator">E-Learning Course Creator</PlaybookLink> plans, structures, and writes complete e-learning courses through a phased approach — curriculum design, lesson writing, and assessment creation — producing a full course with learning objectives, lesson content, module quizzes, and a capstone project formatted for LMS import.
      </p>
      <p className="mt-4">
        The Skill addresses the specific problem that stalls course creation: the blank curriculum outline. A data scientist who wants to build a Python course for analysts knows the content — NumPy, pandas, data visualization, machine learning basics — but faces a structural question before writing a single lesson: what is the right module sequence, how many lessons per module, what does each lesson need to accomplish, and what quiz questions will test whether the lesson actually landed? These are instructional design questions, not Python questions.
      </p>
      <p className="mt-4">
        The Skill takes the subject matter and the audience and produces the curriculum architecture first: six modules, four lessons per module, learning objectives for each lesson written in observable behavioral terms. Then it produces the lesson content: explanations, worked examples, and exercises. Then assessments: five quiz questions per module with answer keys and explanations for wrong answers, plus a capstone project with evaluation rubric. The entire course — everything a Teachable or Thinkific or Moodle import needs — produced from the educator's expertise in a structured sequence.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Create a 6-module Python course for data analysts who know Excel but have never coded. Learning goal: comfortable doing data cleaning, analysis, and visualization in Python by the end. Module topics: Python basics and environment setup, pandas for data manipulation, data cleaning and missing value handling, exploratory data analysis with matplotlib and seaborn, writing reusable functions and scripts, and a capstone project. For each module: 4 lesson titles with learning objectives, 1 worked example using realistic analyst data, and 5 quiz questions with answer keys. Format the capstone as a guided project with evaluation rubric. Structure for Teachable import.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Three weekends staring at a blank curriculum outline. The module sequence keeps changing. Module 3 feels like it needs to come before Module 2. The quiz questions are an afterthought written the night before publishing. The capstone is vague. The course launches six months after the original plan.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Full curriculum: 6 modules, 24 lesson titles with behavioral learning objectives, worked examples using realistic analyst data, 30 quiz questions with answer keys and wrong-answer explanations, and a capstone project with rubric — structured for Teachable import. Course ready to record in one session.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for technical courses, professional training, corporate learning programs, and hobbyist content. The phased approach — curriculum first, then lessons, then assessments — mirrors how instructional designers actually work.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Personalized Syllabus — A Learning Path Built for This Specific Learner
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/personalized-syllabus">Personalized Syllabus</PlaybookLink> Skill builds a study plan tuned to the learner's existing knowledge and available time: ordered texts or topics, themes to track across the material, explicit bridges from what the learner already knows to what they are about to learn, and an interactive companion mode for working through difficult passages.
      </p>
      <p className="mt-4">
        The one-syllabus-for-everyone problem is structural. A university course assumes a median student with a particular prerequisite background. But the actual range of students in any class spans from someone for whom the first three weeks are review to someone for whom the first three weeks are completely new territory. A corporate training program assumes every employee is starting from the same baseline, when in fact some have ten years of adjacent experience and others are genuinely beginning.
      </p>
      <p className="mt-4">
        For educators, the Personalized Syllabus Skill is most valuable for designing differentiated learning paths — building one version of the materials for the learner who arrives with deep adjacent knowledge and another for the learner who is starting fresh. For individual learners, it builds the personal study plan that accounts for what they specifically already know. The explicit bridge between existing knowledge and new material is the Skill's most distinctive output: not just "read Chapter 3," but "Chapter 3 introduces the concept of X — you will recognize this as analogous to Y from your background in Z, with the key difference being that..."
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Build a personalized study plan for a marketing manager with 8 years of digital marketing experience who wants to deeply understand data science — specifically enough to work effectively with the data science team, evaluate their output critically, and understand what is and is not possible with ML models. Available time: 6 hours per week for 12 weeks. Starting point: comfortable with Excel, basic statistics (mean, median, standard deviation), A/B testing concepts. Give me an ordered curriculum with time allocations, explicit bridges from digital marketing concepts she already knows to the data science concepts she is about to learn, the 3 themes to track across all the material, and recommendations for how to use the interactive companion mode when she hits a concept that doesn't click.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Generic "data science for marketers" course with 40 hours of content, half of which covers statistics she already knows from A/B testing. She gets three weeks in, hits a section on linear algebra that has no connection to anything she knows, loses momentum, and stops. Six months later the course is marked 35% complete.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">12-week curriculum skipping what she already knows. Every new concept explicitly bridged: "regression is the mathematical formalization of what you do intuitively when you attribute revenue changes to campaign variables — the model just makes the weighting rigorous." Three themes to track. Companion mode activates when she hits a passage she wants to interrogate. Completes in 11 weeks.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 10 minutes. Works for any subject area and any learner background. The explicit knowledge bridge is the feature that converts "I'll try to learn this" into "I actually finished."
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: DeepTutor — A Self-Hosted AI Tutoring Platform with Your Own Knowledge Base
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/deeptutor-ai-tutor">DeepTutor: Agent-Native AI Tutoring</PlaybookLink> Skill sets up a persistent AI tutoring system with a RAG knowledge base built from the educator's own materials — textbooks, notes, PDFs — that generates quizzes, runs Socratic tutoring sessions, and maintains memory across sessions from CLI or browser.
      </p>
      <p className="mt-4">
        The difference between DeepTutor and a standard "upload a PDF to ChatGPT" approach is persistence and depth. Uploading a textbook to a chat interface gives a Q&A bot that forgets the conversation the moment the window closes. DeepTutor gives a persistent TutorBot with its own knowledge base built from the educator's specific materials — the actual textbook for this course, the lecture notes for this semester, the supplementary papers for this topic — that a student can return to across multiple sessions, and that generates quizzes specifically grounded in that source material rather than in the model's general knowledge.
      </p>
      <p className="mt-4">
        For educators, this means building a tutoring assistant that teaches from the same materials as the course — not from a generic understanding of the subject, but from the specific explanations and examples the course uses. A student asking DeepTutor about thermodynamics gets an explanation grounded in the course's textbook chapters, not a different explanation from a different framing that may conflict with how the concept was introduced in lecture.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Set up a physics tutor for my introductory mechanics course. Course materials: chapters 1–8 of University Physics (Youngs & Freedman), my lecture slides for all 8 chapters, and 3 supplementary problem sets. Build a RAG knowledge base from these materials. Configure a Socratic TutorBot that asks questions before giving answers — when a student asks "how do I solve this kinematics problem?" the bot should probe what they already know before providing the solution path. Generate a 20-question quiz covering chapters 1–4 with difficulty progression. Set up CLI access for students on the course portal.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Students use ChatGPT for homework help. The explanations they get contradict the course notation. The "tutor" has no memory of previous sessions. A student who asked about Newton's second law on Tuesday has to re-explain their confusion on Thursday. Office hours are the only consistent source of course-specific help.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">TutorBot grounded in the course's own textbook chapters and lecture slides. Socratic mode probes student reasoning before providing solutions. Memory persists across sessions — the bot remembers what the student struggled with on Tuesday and follows up on Thursday. 20-question quiz generated from course-specific material with difficulty progression.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 15 minutes. Works for any subject with PDF or document-based source materials. The Socratic mode is configurable — adjust how much the bot probes versus explains based on the learning objectives for the course.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: Language Vocabulary Builder — Targeted Lists with Spaced Repetition
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/language-vocab-builder">Language Vocabulary Builder</PlaybookLink> creates personalized vocabulary lists with context sentences, pronunciation notes, and Anki-ready flashcards with spaced repetition scheduling — targeted to the learner's specific use case rather than pulled from a generic textbook frequency list.
      </p>
      <p className="mt-4">
        The generic vocabulary list problem: Duolingo teaches "the cat eats bread." A standard frequency list teaches the 2,000 most common words in Spanish, many of which a business professional will never use in their actual work. A traveler preparing for a trip to Japan does not need the 500 most common Japanese words — they need the vocabulary for ordering food, navigating transportation, managing accommodations, and handling unexpected situations. A medical professional learning Spanish needs clinical terminology, not conversational filler.
      </p>
      <p className="mt-4">
        The Skill generates vocabulary lists from the learner's specific context: their job, their travel plans, their exam requirements, their actual conversation needs. Each word comes with context sentences that show it in use in that specific context, not in generic example sentences that may be grammatically correct but contextually irrelevant. The Anki export with spaced repetition scheduling means the vocabulary is reviewed at the intervals that maximize retention, not reviewed once and forgotten.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Build a Spanish vocabulary set for a software engineer who needs to manage a team in Mexico City. Focus areas: giving and receiving technical feedback, running sprint ceremonies (standup, retrospective, planning), discussing system architecture decisions, handling escalations professionally, and casual team relationship-building. 150 words and phrases organized by situation. Each entry needs: the word/phrase, pronunciation guide, English translation, 2 context sentences showing it in a software team context, and any register notes (formal vs. informal). Export as Anki-ready flashcards with a spaced repetition schedule for a 60-day learning plan.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Generic Spanish course teaches conversational vocabulary for restaurants, hotels, and shopping. The engineer learns "¿Dónde está el baño?" and "Quiero una mesa para dos." In the first standup with the Mexico City team, they have no vocabulary for "blocking issue," "sprint velocity," or "refactor the authentication layer."</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">150 words and phrases organized by sprint ceremony, architecture discussion, escalation handling, and team relationship-building. "Bloqueado," "velocidad del equipo," and "refactorizar" with context sentences from actual engineering conversations. Anki export with spaced repetition scheduling. Functional in standups within 30 days.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes. Works for any language and any use-case context. Language teachers use it to build differentiated vocabulary sets for different student groups; learners use it to build their own targeted lists.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Educator's System: Teaching the Right Thing to the Right Learner
      </h2>
      <p>
        The four Skills address different dimensions of the same core challenge: matching the structure of teaching to the needs of learning. The E-Learning Course Creator handles the curriculum architecture when the educator is building from scratch. The Personalized Syllabus handles differentiation when different learners need different paths through the same material. DeepTutor handles the between-class support layer — the tutoring that previously only happened in office hours, now available whenever the student is studying. The Vocabulary Builder handles the materials creation for language and vocabulary work, where generic lists fail learners with specific needs.
      </p>
      <p className="mt-4">
        Used together by an educator building a course, the workflow looks like this: the E-Learning Course Creator produces the curriculum architecture. The Personalized Syllabus produces differentiated paths for learners arriving with different backgrounds. DeepTutor builds the course-specific tutoring assistant grounded in the course materials. If the course covers any terminology-heavy domain — whether a foreign language, a technical field, or a professional vocabulary — the Vocabulary Builder produces the targeted word sets with retention-optimized flashcards.
      </p>
      <p className="mt-4">
        What the Skills replace is not the educator's expertise or judgment — it is the blank-page problem. The curriculum outline that takes three weekends to write takes one session. The personalized syllabus that would require a one-on-one consultation with every learner gets produced at scale. The tutoring assistant that requires a teaching assistant to build and maintain runs from the educator's own materials. The vocabulary list that takes two hours per topic group takes minutes.
      </p>
      <p className="mt-4">
        The teaching judgment — what this audience needs to understand, what misconceptions to pre-empt, which examples will land and which will confuse, how to assess whether the learning objective was actually achieved — stays with the educator. The instructional architecture gets handled.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Education Skills
      </h2>
      <p className="mb-6">
        Each Skill is a one-time install. Open it, follow the setup steps, and it is available in Claude every time you build a course, design a learning path, or create instructional materials.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/elearning-course-creator"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">E-Learning Course Creator</p>
          <p className="text-sm text-muted-foreground">Full curriculum from learning objectives through module quizzes and capstone project — phased instructional design that turns subject-matter expertise into a structured course ready for LMS import.</p>
        </Link>
        <Link
          href="/playbooks/personalized-syllabus"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Personalized Syllabus</p>
          <p className="text-sm text-muted-foreground">Study plan tuned to the learner's existing knowledge and available time — ordered materials, explicit knowledge bridges, themes to track, and interactive companion mode for working through difficult passages.</p>
        </Link>
        <Link
          href="/playbooks/deeptutor-ai-tutor"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">DeepTutor AI Tutoring</p>
          <p className="text-sm text-muted-foreground">Self-hosted tutoring platform with RAG knowledge base from your own course materials — persistent TutorBot with Socratic mode, quiz generation, and session memory. Available whenever students are studying.</p>
        </Link>
        <Link
          href="/playbooks/language-vocab-builder"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Language Vocabulary Builder</p>
          <p className="text-sm text-muted-foreground">Targeted vocabulary lists for the learner's specific context — with context sentences, pronunciation notes, and Anki-ready flashcards with spaced repetition scheduling. Not the 2,000 most common words. The words they will actually use.</p>
        </Link>
      </div>
    </BlogPostLayout>
  );
}
