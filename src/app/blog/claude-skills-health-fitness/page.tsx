import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'Claude Skills for Health and Fitness: Plan Nutrition and Track Progress with AI | Claude Code Playbooks Blog',
  description: "How anyone can use four Claude Skills to build a health system that actually fits their life — a fat-loss nutrition planner with meal plans, macro targets, and grocery lists calibrated to real body data, a nutritional specialist that remembers your allergies and goals across sessions, a mental health journal that tracks mood patterns over time, and a DNA health analysis system that turns raw genetic data into personalized diet and exercise recommendations.",
  alternates: { canonical: '/blog/claude-skills-health-fitness' },
  openGraph: {
    title: 'Claude Skills for Health and Fitness: Plan Nutrition and Track Progress with AI',
    description: "How anyone can use four Claude Skills to build a health system that actually fits their life — a fat-loss nutrition planner with meal plans, macro targets, and grocery lists calibrated to real body data, a nutritional specialist that remembers your allergies and goals across sessions, a mental health journal that tracks mood patterns over time, and a DNA health analysis system that turns raw genetic data into personalized diet and exercise recommendations.",
    url: 'https://www.claudecodehq.com/blog/claude-skills-health-fitness',
    type: 'article',
    publishedTime: '2026-06-23T00:00:00Z',
    images: [{ url: 'https://www.claudecodehq.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Skills for Health and Fitness: Plan Nutrition and Track Progress with AI',
    description: "Four Claude Skills for health — personalized nutrition plans, persistent dietary memory, mental health journaling, and DNA-based recommendations — so your health system actually fits your life.",
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

export default function ClaudeSkillsHealthFitnessPage() {
  return (
    <BlogPostLayout
      title="Claude Skills for Health and Fitness: Plan Nutrition and Track Progress with AI"
      description="How anyone can use four Claude Skills to build a health system that actually fits their life — a fat-loss nutrition planner with meal plans, macro targets, and grocery lists calibrated to real body data, a nutritional specialist that remembers your allergies and goals across sessions, a mental health journal that tracks mood patterns over time, and a DNA health analysis system that turns raw genetic data into personalized diet and exercise recommendations."
      category="guide"
      difficulty="basic"
      readingTime="14 min read"
      createdAt="2026-06-23"
      tags={['claude skills fitness', 'ai nutrition planner', 'ai health tracking', 'health AI', 'nutrition AI', 'mental health AI', 'fitness planning AI', 'Claude Code']}
      author="Claude Code Playbooks"
      slug="claude-skills-health-fitness"
    >
      <p>
        Generic health advice fails for a specific reason: it is built for an imaginary average person, not you. The calorie calculator that outputs "eat 2,000 calories" does not know your body weight, activity level, or that you work a desk job but train four times a week. The meal plan full of salmon and broccoli does not know you hate fish and that the only vegetables you will actually eat are the ones in a curry. The journaling app does not know that your anxiety spikes on Sunday evenings before the work week. The DNA test result sits in a zip file with 700,000 genetic markers and no way to make sense of them.
      </p>
      <p className="mt-4">
        The personalization gap is what makes most health systems fail. The plan that requires willpower to follow is a plan that did not account for the person following it. When the food is food you actually enjoy, following the plan is not a discipline problem. When the journal prompts are calibrated to your situation, journaling becomes useful instead of performative. When the nutrition advice remembers your allergies, you stop having to re-explain yourself every session.
      </p>
      <p className="mt-4">
        The four Skills below address four distinct health domains: building a nutrition plan calibrated to your actual data and food preferences, maintaining a persistent nutritional advisor that accumulates context across sessions, journaling for mental health with pattern recognition across entries, and analyzing your DNA data for actionable personalized health insights. Each is installed once and configured to you specifically — not to the imaginary average person that generic advice is built for.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Personalization Gap in Health Apps
      </h2>
      <p>
        Every fitness app promises personalization. Most deliver a slightly customized version of the same generic plan. The calorie target gets adjusted for body weight. The macro split defaults to 40/30/30. The meal plan pulls from a database of 500 recipes and gives you the ones rated highest by users with vaguely similar goals. The foods you hate appear on the Tuesday dinner slot. The workout you cannot do because of a shoulder injury is listed for Wednesday.
      </p>
      <p className="mt-4">
        Real personalization requires context that most apps cannot hold. They do not know that you find cardio miserable but enjoy lifting. They do not know that you are lactose intolerant and tried to tell the app but it keeps suggesting Greek yogurt. They do not know that your worst week for eating is always the week of a work deadline, and that knowing this pattern might be more useful than a macro target. They do not have access to your genetic data and cannot tell you that your MTHFR variant means your body processes folate differently, or that your APOE variant is relevant context for any cardiovascular health conversation.
      </p>
      <p className="mt-4">
        Claude Skills hold context and accumulate specificity over time. The nutrition plan is built from your actual stats and the foods you named. The dietary advisor remembers every preference and restriction you have stated. The journal tracks your entries across sessions and surfaces patterns you would not notice from inside any single day. The DNA analysis runs on your actual genetic data, not population averages. The four Skills below make the personalization gap fillable.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 1: Fat Loss Nutrition Planner — A Plan Built for Your Stats and Your Food
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/fat-loss-nutrition-planner">Fat Loss Nutrition Planner</PlaybookLink> interviews you about your stats, lifestyle, and food preferences, then builds a complete fat loss plan: accurate calorie targets using the Mifflin-St Jeor formula, a macro split calibrated to preserve muscle during the cut, a 7-day themed meal plan built around foods you actually enjoy, snack swaps, a hydration target, and a realistic month-by-month projection.
      </p>
      <p className="mt-4">
        The generic calculator problem: most online calorie tools use the Harris-Benedict formula with a generic activity multiplier and output a round-number target that is frequently off by 200–400 calories in either direction. More importantly, they stop there. They do not produce a meal plan. They do not account for the fact that you love curries and pasta and will not eat a plan that tries to replace them with chicken breast and steamed vegetables.
      </p>
      <p className="mt-4">
        The Skill goes further. It takes your weight, height, age, activity level, and training schedule and applies the Mifflin-St Jeor equation — a more accurate basal metabolic rate formula — then adjusts for the appropriate deficit for your goals. Then it asks about food. The meal plan it produces is built around the foods you named: Tikka Tuesday, Pasta Thursday, weekend flexibility. The foods you said you hate do not appear. Snack swaps are offered for the specific snacks you mentioned eating, not generic alternatives. The plan fits the person, not the formula.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Build a fat loss nutrition plan for me. My stats: 34F, 78kg, 165cm, moderately active desk job, train 3x per week (weights + one run). Goal: lose 8kg over 4 months without losing muscle. Foods I love: Indian food, pasta dishes, stir-fries, eggs, Greek food. Foods I hate: fish, brussels sprouts, anything with beetroot. Snacks I reach for: crisps, chocolate, fruit. Give me: exact calorie target using Mifflin-St Jeor, macro split (prioritize protein), a themed 7-day meal plan using foods I listed, smarter swaps for my go-to snacks, hydration target, and a 4-month projection showing expected weekly progress.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Online calculator outputs "1,800 calories." No meal plan. Google "1800 calorie meal plan" and get results full of salmon, cottage cheese, and foods that will not last a week. Stick to it for five days, then abandon it when Tuesday's meal plan requires 45 minutes to prepare after a 10-hour work day.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">1,720 kcal target with 145g protein, 170g carbs, 52g fat. Themed week: Egg Tuesday, Stir-Fry Wednesday, Greek Thursday, Indian Friday. Snack swaps: protein bar instead of chocolate, lightly salted rice cakes instead of crisps. Month-by-month projection to target weight. Still eating curry. Still on track after six weeks.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes. Works for fat loss, muscle gain, or body recomposition goals. The themed meal plan approach is the key feature — it makes the plan sustainable by building around existing food preferences instead of replacing them.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 2: Nutritional Specialist — Persistent Dietary Advisor That Remembers You
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/nutritional-specialist">Nutritional Specialist</PlaybookLink> Skill maintains a persistent database of your food preferences, allergies, dietary restrictions, and health goals — applying that accumulated context to every nutrition question and meal planning session without requiring you to re-explain your situation each time.
      </p>
      <p className="mt-4">
        The context-loss problem is the defining frustration of nutrition apps. You explain that you are lactose intolerant when you sign up. Three weeks later the app suggests a meal plan with Greek yogurt. You correct it. Next month it happens again. The app does not accumulate understanding — it runs each query cold, producing advice for a generic user that gets partially filtered by the preferences in your profile, which only captures what the app asked you on signup, not everything that has come up since.
      </p>
      <p className="mt-4">
        The Nutritional Specialist Skill builds a dietary profile that grows with each session. The first time you mention that you train in the morning and need pre-workout meals that are easy on digestion, that becomes part of the profile. When you mention that your partner is vegetarian and you cook together three nights a week, that gets added. When you log a meal that left you feeling lethargic and want to understand why, the Skill connects that to the profile's existing context about your goals and restrictions. Every session compounds on the last — the advice gets more precise, not more generic.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Set up my nutritional profile. Key details: lactose intolerant (severe — even small amounts cause problems), trying to build muscle at 80kg body weight, hate cooking more than 30 minutes on weekdays, partner is vegetarian so I cook meat-free 3 nights a week, train 5am before work so need quick pre-workout fuel. Current goal: 160g protein/day. Now give me: a weekday breakfast rotation that is dairy-free, high-protein, and takes under 10 minutes, three quick high-protein dinners I can cook in 30 minutes that work for a vegetarian partner, and pre-workout snack options for 4:30am.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Fifth different nutrition app, fifth time explaining lactose intolerance, fifth time the app suggests a post-workout protein shake that contains whey. The app does not know about the vegetarian partner, the 5am training, or the weekday time constraint. Every session starts from scratch. Advice is generic. Gets abandoned.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Dairy-free breakfast rotation: egg scrambles, overnight oats with plant milk, tofu scramble with nutritional yeast. Three 30-minute meat-free dinners hitting 40g+ protein per serving. Pre-workout: banana with peanut butter or a rice cake with almond butter — quick, light, high-carb. Lactose intolerance never mentioned again. Profile remembered across every future session.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes. Works for any dietary goal and accumulates specificity over time. The more sessions you have, the more precise the advice — it learns your eating patterns, timing preferences, and meal history rather than resetting each conversation.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 3: Mental Health Journal — Guided Reflection and Pattern Tracking Over Time
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/mental-health-journal">Mental Health Journal Assistant</PlaybookLink> Skill provides tailored journaling prompts, reflects back what you share, identifies recurring patterns across entries over time, and offers cognitive reframing suggestions — making consistent journaling useful rather than performative.
      </p>
      <p className="mt-4">
        The blank page problem: most people who want to journal consistently fail not because they lack insight or things to say, but because starting with a blank page produces the same anxious thought loop they were trying to process. "I'm stressed about work" gets written, then nothing follows because there are no prompts to go deeper, no structure to organize the thoughts, and no reflection to make the exercise feel worth the time.
      </p>
      <p className="mt-4">
        The Skill changes the journaling experience from a blank page into a guided conversation. It starts with a prompt calibrated to what you said you want to work through. It asks follow-up questions that pull the surface observation toward underlying patterns. It reflects back what you share, showing what themes it is noticing. Over multiple sessions, it tracks patterns across entries — noticing, for example, that your anxiety consistently spikes in the 48 hours before a particular type of meeting, or that your energy and mood are consistently lower on days when sleep was under six hours. The pattern recognition across time is the feature that single-session journaling cannot provide.
      </p>
      <p className="mt-4 text-sm text-muted-foreground italic">
        Important: this Skill is a journaling tool, not a therapist or mental health professional. For serious mental health concerns, please reach out to a licensed professional. Crisis resources: 988 (Suicide & Crisis Lifeline), 741741 (Crisis Text Line — text HOME), or your healthcare provider.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          I want to start journaling about work stress and my tendency to procrastinate on important projects. Today was frustrating — I had a presentation due and spent most of the day doing low-priority tasks instead. Give me a few prompts to start journaling about this, then after I respond, help me identify what might be underneath the avoidance pattern. I want to journal consistently over the next month — track the themes that come up across my entries and surface any patterns you notice developing over time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">Open journal app. Blank page. Write "stressed about work." Stare at it. Write "I need to do better with time management." Close app. Same entry as last Tuesday. Nothing processed, nothing changed. Journaling habit abandoned after two weeks because it does not seem to do anything.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">Prompted: "What specifically was at stake in the presentation that made it feel easier to avoid?" Reflection after response: avoidance correlates with fear of judgment, not difficulty of task. After three weeks, pattern surfaced: procrastination spikes when the audience for the work includes a specific colleague. Actionable — not just "I procrastinate."</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 5 minutes. Works for processing stress, building self-awareness, tracking emotional patterns, or supporting therapy homework between sessions. Most valuable used consistently over weeks — the pattern recognition across entries is what makes it different from a single journaling session.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Skill 4: DNA Health Analysis — Turn Raw Genetic Data into Personalized Insights
      </h2>
      <p>
        The <PlaybookLink href="/playbooks/dna-health-analysis">DNA Health Analysis</PlaybookLink> Skill takes the raw data file from 23andMe, AncestryDNA, or similar services and searches for health-related genetic variants — surfacing key SNPs across nutrition, metabolism, cardiovascular health, and other domains with context for what each variant means and specific questions to bring to a doctor.
      </p>
      <p className="mt-4">
        The $99 problem: most people who take a consumer DNA test get their ancestry breakdown, some relative matches, and a raw data file with 700,000 genetic markers they cannot read. The health reports cost extra. Third-party interpretation tools require uploading genetic data to servers with unclear privacy policies. The raw file sits in a Downloads folder doing nothing.
      </p>
      <p className="mt-4">
        The DNA Health Analysis Skill processes the raw data file locally — no upload to a third-party service — and searches for specific SNPs associated with health-relevant traits: MTHFR variants affecting how the body processes folate, APOE variants relevant to cardiovascular and cognitive health, metabolic variants affecting caffeine and alcohol processing, and others. For each variant found, the Skill provides context: what the variant means, what the research says about its implications, and what questions it raises worth discussing with a doctor. The output is not a diagnosis — it is a personalized research starting point and a doctor visit agenda that the raw data file never was.
      </p>
      <p className="mt-4 text-sm text-muted-foreground italic">
        Important: genetic analysis by an AI is not a medical diagnosis. Variants identified should be discussed with a qualified healthcare provider who can interpret them in the context of your full health picture.
      </p>

      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 my-4">
        <p className="text-sm font-mono text-[#f97316]">
          Analyze my 23andMe raw data file for health-relevant genetic variants. [attach raw data file] Focus on: MTHFR variants (folate processing), APOE variants (cardiovascular and cognitive health), BRCA variants (cancer risk awareness), metabolic variants (caffeine processing, alcohol metabolism, vitamin D absorption). For each variant found: what the SNP is, what allele I carry, what the research says about this variant's implications, how it might be relevant to nutrition or lifestyle choices, and specific questions I should bring to my doctor. Format as a clear report I can take to an appointment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f97316] mb-2">Before</p>
          <p className="text-sm text-muted-foreground">23andMe raw data file: 700,000 rows of rsIDs, chromosome positions, and genotypes. Completely unreadable. Health reports require an additional purchase. Third-party tools like Promethease want the file uploaded to their servers. File has been in Downloads for 18 months. $99 test has produced zero health insight.</p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#22c55e] mb-2">After</p>
          <p className="text-sm text-muted-foreground">MTHFR C677T: heterozygous — slightly reduced folate processing efficiency, worth discussing methylated folate supplementation with doctor. APOE: ε3/ε3 — typical variant, no elevated cardiovascular or Alzheimer's risk signal. Caffeine metabolism: fast metabolizer variant. Vitamin D: variant associated with reduced synthesis — check D levels at next blood panel. Doctor visit agenda ready.</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        ⏱ Setup: 15 minutes. Works with raw data files from 23andMe, AncestryDNA, MyHeritage, and other services that provide downloadable genotype files. Processing happens in Claude — no third-party upload required.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        The Health Stack: Nutrition, Memory, Mind, and Genetics
      </h2>
      <p>
        The four Skills address four dimensions of the personalization gap. The Fat Loss Nutrition Planner solves the "plan that does not fit my food" problem — building a calorie and macro target from real stats and a meal plan from foods you actually enjoy. The Nutritional Specialist solves the "re-explain my allergies every time" problem — accumulating a persistent dietary profile that makes every future nutrition conversation more precise. The Mental Health Journal solves the blank-page problem — providing structured prompts and cross-session pattern recognition that makes journaling useful instead of performative. The DNA Health Analysis solves the "700,000 unreadable markers" problem — turning a raw data file into an actionable, doctor-ready health report.
      </p>
      <p className="mt-4">
        Used together, these four Skills create a health system calibrated to the specific person, not a population average. The nutrition plan accounts for the food preferences the Nutritional Specialist has accumulated. The journal patterns connect to the nutrition and energy data from the other Skills. The DNA analysis informs the nutritional approach — if the MTHFR analysis suggests reduced folate processing, the Nutritional Specialist incorporates that. Each Skill reinforces the others because they share the same underlying context: a detailed, accumulated understanding of the specific person using them.
      </p>
      <p className="mt-4">
        What the Skills do not replace is medical care and professional judgment. They are tools for personalized planning and self-knowledge, not replacements for doctors, dietitians, or mental health professionals. The DNA analysis produces questions for a doctor visit, not a diagnosis. The mental health journal supports reflection, not therapy. The nutrition plan is a starting point that a registered dietitian could refine. The Skills handle the personalization and the planning layer — the professional judgment about what matters for your specific situation remains where it belongs.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 border-b border-[#30363d] pb-2">
        Get the Health and Fitness Skills
      </h2>
      <p className="mb-6">
        Each Skill is a one-time install. Open it, configure it with your specific details, and it is available in Claude every time you want to plan meals, get nutrition advice, journal, or revisit your health data.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link
          href="/playbooks/fat-loss-nutrition-planner"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Fat Loss Nutrition Planner</p>
          <p className="text-sm text-muted-foreground">Mifflin-St Jeor calorie target, muscle-preserving macro split, and a themed 7-day meal plan built around the foods you love — not the foods a generic plan assumes you will eat.</p>
        </Link>
        <Link
          href="/playbooks/nutritional-specialist"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Nutritional Specialist</p>
          <p className="text-sm text-muted-foreground">Persistent dietary advisor that accumulates your allergies, preferences, goals, and restrictions across sessions — so every nutrition conversation builds on the last instead of starting from scratch.</p>
        </Link>
        <Link
          href="/playbooks/mental-health-journal"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">Mental Health Journal</p>
          <p className="text-sm text-muted-foreground">Guided journaling with tailored prompts, in-session reflection, and cross-entry pattern tracking over time — turning the blank page into a structured tool for self-awareness. Not a replacement for professional mental health care.</p>
        </Link>
        <Link
          href="/playbooks/dna-health-analysis"
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-[#22d3ee] transition-colors block"
        >
          <p className="font-semibold text-foreground mb-1">DNA Health Analysis</p>
          <p className="text-sm text-muted-foreground">Upload your 23andMe or AncestryDNA raw data and get a readable report of key health-related genetic variants with context and a doctor-visit agenda — processed locally, no third-party upload required.</p>
        </Link>
      </div>
    </BlogPostLayout>
  );
}
