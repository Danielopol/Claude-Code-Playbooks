# E-Learning Course Creator

## Goal
Create comprehensive e-learning courses through a structured multi-phase pipeline. Each phase builds on the previous one to produce polished, pedagogically sound course content.

## Directory Structure
- `brief/` — Course brief and target audience definition
- `curriculum/` — Course outline, module structure, learning objectives
- `lessons/` — Individual lesson content files
- `assessments/` — Quizzes, exercises, and assignments per module
- `assets/` — Supporting materials (diagrams, checklists, templates)
- `output/` — Final compiled course materials ready for publishing
- `reference/` — Source materials and research

## Phase 1: Course Planning
Skill: Curriculum Designer
1. Define target audience, prerequisites, and skill level
2. Establish learning outcomes (what students can DO after the course)
3. Break the course into modules (5-8 modules recommended)
4. Define learning objectives per module (2-4 per module)
5. Save to `curriculum/course-outline.md`

## Phase 2: Module Design
Skill: Module Architect
1. For each module, create a detailed lesson plan
2. Each module has 3-5 lessons
3. Each lesson follows: Concept → Example → Practice → Summary
4. Identify prerequisites and dependencies between lessons
5. Save to `curriculum/module-XX-plan.md`

## Phase 3: Lesson Writing
Skill: Content Writer
1. Write each lesson as a standalone markdown file
2. Include: introduction, key concepts, examples, visual aids (described), key takeaways
3. Use clear headers, bullet points, and callout boxes
4. Target 1,000-2,000 words per lesson
5. Include transition hooks to the next lesson
6. Save to `lessons/module-XX/lesson-XX.md`

## Phase 4: Assessment Creation
Skill: Assessment Designer
1. Create a quiz for each module (5-10 questions)
2. Mix question types: multiple choice, short answer, practical exercises
3. Include answer keys with explanations
4. Create one capstone project or final assessment
5. Save to `assessments/module-XX-quiz.md`

## Phase 5: Review & Polish
Skill: Course Reviewer
1. Check consistency across all modules and lessons
2. Verify learning objectives are addressed
3. Review difficulty progression (easy → hard)
4. Check for gaps, redundancies, and unclear explanations
5. Generate a course summary document
6. Save review notes to `output/review-notes.md`

## Rules
1. Every lesson must map to at least one learning objective
2. Use plain language — aim for 8th grade reading level unless topic requires otherwise
3. Include practical examples for every abstract concept
4. Each module should be completable in 30-60 minutes
5. Assessments should test application, not just recall

## Commands
- "/plan [topic]" — Start Phase 1: create course outline for the given topic
- "/design module [N]" — Run Phase 2 for a specific module
- "/write lesson [module] [lesson]" — Run Phase 3 for a specific lesson
- "/assess module [N]" — Run Phase 4: create assessment for a module
- "/review" — Run Phase 5: full course review
- "/compile" — Package all materials into final output format
- "/status" — Show progress across all phases and modules
