# Chinese AI-Writing Style Audit (中文 AI 味检查)

A checklist for removing the tell-tale patterns of unedited AI-generated Chinese copy ("AI 味") from product announcements, WeChat/公众号 articles, emails, and READMEs — refined from real user correction feedback rather than written from theory. Each rule states a precise trigger, a detection approach, a bad example, a good example, and a scope (which document types it applies to) so it's never applied outside the context it was calibrated for.

## When to Load

Load this when drafting or rewriting reader-facing Chinese copy (product launch posts, WeChat articles, emails, README sections), or when a user says the text "AI 味太重" (too much AI flavor) or "不像人写的" (doesn't read like a human wrote it).

## How to Use

While drafting or revising, check the text against each rule below in turn. Every rule defines its own scope — never apply a rule outside the document types it names, even if the pattern shows up elsewhere.

## The Rule Set

### 1. 避免用连续破折号代替常规断句 — Don't chain em-dashes in place of normal punctuation

**Triggers** when a sentence or paragraph strings together multiple em-dashes to link ordinary parallel items, steps, or clauses, flattening the structure and dragging out the reading rhythm. Using an em-dash occasionally for a genuine aside, a pivot, or emphasis — where the relationship is clear — does not trigger this.

- **Bad:** 关于季度复盘会议——时间定于本周五下午三点——地点在三号会议室——请提前准备数据报表——如有冲突请及时告知——谢谢配合。
- **Good:** 季度复盘定在这周五下午三点，三号会议室。请提前准备好数据报表，时间冲突的话提前跟我说。
- **Fix:** Decide whether each part is a parallel item or a complete thought. Parallel items get commas; complete thoughts get periods. Keep the em-dash only where it's genuinely doing insertion or emphasis work.
- **Scope:** product announcements, WeChat articles, emails.

### 2. 避免反复使用"不是……而是……"对仗 — Don't repeat "it's not X, it's Y" contrast pairs

**Triggers** when "不是……而是……" gets used repeatedly to define a product, explain a concept, or manufacture a sense of elevation — especially two or more times in a row forming a neat parallel structure. This pattern substitutes negation-as-setup for direct explanation. A single use to correct a genuine, specific misconception does not trigger this.

- **Bad:** 这不是一次简单的版本更新，而是一次体验的全面革新；不是功能的堆砌，而是对用户需求的深度回应。
- **Good:** 这次版本更新改动很大：界面重做，核心流程缩短了两步，都来自上一版用户反馈里最高频的问题。
- **Fix:** Delete the negation setup. State directly what the thing is and what specifically changed, backed by a fact or example.
- **Scope:** README sections, product announcements, WeChat articles.

### 3. 避免连用"让我们"式号召口号 — Don't chain "let's" rallying-cry openers

**Triggers** when an email, README, or product post opens several sentences in a row with "让我们" and leans on slogans like "共同见证" (witness together) or "携手并进" (advance hand in hand) instead of a concrete notice, invitation, or action. A single natural, specific, actionable shared invitation does not trigger this.

- **Bad:** 让我们共同见证这个激动人心的时刻！让我们一起开启数字化转型的全新篇章。让我们携手并进，共创辉煌明天。
- **Good:** 新版本今天上线了，期待大家试用之后多提意见。
- **Fix:** State directly what happened and what specific action you want from the reader — try it, give feedback, file an issue, submit a PR.
- **Scope:** README sections, product announcements, emails.

### 4. 避免机械堆叠顺序连接词 — Don't mechanically stack sequence markers

**Triggers** when a short paragraph applies "首先、其次、再次、然后、最后、总而言之" (first, second, next, then, finally, in summary) to every sentence in turn, when the content could flow naturally without them — producing a templated, bureaucratic tone. A genuinely strict, error-prone sequence, or connectors that clarify real complexity, does not trigger this.

- **Bad:** 首先，克隆本仓库到本地。其次，安装所需依赖。再次，配置环境变量。然后，运行初始化脚本。最后，启动开发服务器即可。
- **Good:** 克隆仓库后安装依赖，把 .env.example 复制为 .env 并填好密钥，再运行 init.sh 初始化，最后 make dev 启动服务。
- **Fix:** Delete the sequence-marker filler that adds no information. Connect actions by their actual relationship instead, or switch to a real numbered list when the steps genuinely are discrete.
- **Scope:** README sections, product announcements, emails.

### 5. 删除空泛的"在……时代"开场 — Delete vague "in this era of..." openers

**Triggers** when an article opens with a grand-sounding backdrop ("在这个快节奏的时代," "在这个充满变化的时代") that supplies no specific time, event, or causal information — purely atmosphere. If the era or date is itself load-bearing to the argument and backed by specific facts, this does not trigger.

- **Bad:** 在这个快节奏的时代，高效的沟通显得尤为珍贵。在这个充满变化的时代，稳定的协作关系更值得珍惜。
- **Good:** 最近项目节奏快，咱们沟通尽量简短高效；也希望协作关系保持稳定，有问题随时同步。
- **Fix:** Write the specific recent change, its actual impact, and what it requires, directly. Replace vague era-framing with a verifiable time range like "最近" or "这两年."
- **Scope:** product announcements, WeChat articles, emails.

### 6. 控制 emoji 的使用密度与场合 — Control emoji density and context

**Triggers** when a formal product post uses emoji at all, or when a WeChat paragraph attaches an emoji to nearly every point, creating visual noise and undercutting professionalism. Formal copy should drop emoji entirely; a light, relevant emoji in a casual social context that doesn't impede reading isn't automatically a problem.

- **Bad:** 🎉 重磅来袭！🔥 全新智能手表正式发布！⌚ 超长续航 14 天 🔋，心率血氧全天候监测 ❤️，50 米防水 🏊，现在下单立减 200 元 💰，错过再等一年 ⏰！
- **Good:** 新款智能手表发布：续航 14 天，支持心率血氧监测和 50 米防水，首发价立减 200 元。
- **Fix:** Remove all emoji from formal text. Elsewhere, strip decorative emoji first and keep only the rare one that carries real tonal or categorical meaning.
- **Scope:** product announcements, WeChat articles.

### 7. 避免刻意堆叠同构排比 — Don't force repeated parallel structure

**Triggers** when three or more clauses repeat the exact same opening and syntax — "读书可以……," "它让……," "每一次……都是……" — while carrying mostly abstract praise with little new information each time. Parallelism used for a necessary structural contrast, kept short with real substance in each item, does not trigger this.

- **Bad:** 读书可以拓宽视野，读书可以沉淀心灵，读书可以启迪智慧，读书可以点亮人生。
- **Good:** 读书的好处很多：视野会变宽，心能静下来，看问题也会多几个角度。
- **Fix:** Keep one summary statement, then vary the sentence forms for each item — or merge them into one parallel clause. Cut anything redundant or vague.
- **Scope:** README sections, WeChat articles.

### 8. 用具体事实替代空洞抒情比喻 — Replace empty poetic metaphors with concrete facts

**Triggers** when metaphors like "智者" (sage), "屏障" (barrier), "明灯" (lamp), "灯塔" (lighthouse) exist only to elevate the tone without conveying actual product effect, progress, or value — sometimes displacing information the reader actually needs. An accurate, concise metaphor that genuinely aids understanding of an unfamiliar concept, or fits a literary context, does not trigger this.

- **Bad:** 您的建议宛如一盏明灯，照亮了我们产品改进的前路；您的信任仿佛一座灯塔，指引着我们不断前行。
- **Good:** 您提的建议很具体，我们已经记进需求池，下个版本会先改其中两条。谢谢您的信任。
- **Fix:** Delete the decorative metaphor. Add verifiable information instead: the actual experience, use case, action already taken, and what happens next.
- **Scope:** WeChat articles, emails.

### 9. 拆分承载过多层次的长句 — Split overloaded long sentences

**Triggers** when one sentence packs in background, cause, condition, multiple actions, a result, and a requirement all at once, chained together with "且、并、同时、为了、让," making the main point hard to identify in one pass. A long sentence with a clear spine, single-purpose modifiers, and no real comprehension burden does not trigger this.

- **Bad:** 这次更新在保留原有工作台布局的基础上通过重新组织导航层级并合并重复入口同时优化首次加载和列表刷新策略让用户从打开应用到完成一次记录的整个过程都比以前更连贯也更省时间。
- **Good:** 这次更新保留了原有工作台布局，同时重新组织导航层级、合并重复入口。首次加载和列表刷新也做了优化，从打开应用到完成记录会更连贯。
- **Fix:** Pull out the background, the change, the requirement, and the result separately, then split into two or three sentences by these layers, one main action or judgment per sentence.
- **Scope:** product announcements, emails.

### 10. 删除反复出现的提醒性套话 — Delete repeated "worth noting" preambles

**Triggers** when consecutive sentences each open with a meta-discourse phrase like "值得注意的是" (it's worth noting that) or "需要特别注意的是" (it particularly needs attention that), repeating emphasis without adding a new layer of information. Using it once, genuinely, for a key risk the first time it appears, does not trigger this.

- **Bad:** 值得注意的是，本周五是最终截止时间。需要特别注意的是，逾期提交将影响下游联调。还值得注意的是，附件命名必须统一。
- **Good:** 最终截止时间是本周五，逾期会影响下游联调。附件请按统一格式命名。
- **Fix:** Delete the "worth noting" prefixes. State the conclusion, deadline, consequence, or requirement directly; let information order do the emphasis work instead of repeated flagging.
- **Scope:** WeChat articles, emails.

### 11. 避免连续使用"被"字被动句 — Don't chain passive "被" constructions

**Triggers** when several adjacent clauses all use the "object 被 agent verb" passive structure, and the agent is clear and would naturally work as the subject. A single passive where the agent is genuinely unknown, unimportant, or the affected object needs the emphasis, does not trigger this.

- **Bad:** 配置文件会被启动器读取，依赖会被安装脚本自动下载，数据库会被迁移工具初始化，服务会被进程管理器拉起。
- **Good:** 启动器读取配置文件，安装脚本自动下载依赖，迁移工具初始化数据库，进程管理器随后拉起服务。
- **Fix:** Move the tool, module, or responsible party into the subject position and rewrite as "who does what." Keep the passive only where the affected object genuinely needs to be foregrounded.
- **Scope:** README sections, product announcements.

## Tips

- Detection here is judgment-based, not a mechanical string match — every rule's trigger depends on repetition, scope, and whether the pattern is doing real work, so read each passage in full context before flagging it.
- Respect each rule's stated scope. A rule calibrated for formal product announcements (like the emoji rule) shouldn't be applied wholesale to a casual internal chat message.
- When multiple rules fire in the same passage, fix the most disruptive one first (usually the em-dash chain or the overloaded sentence) — smaller issues often resolve naturally once the structural ones are fixed.

## Limitations

- Calibrated specifically for Chinese-language reader-facing copy — the patterns here (被-passive chains, 不是而是 contrasts, 首先其次 sequencing) are language-specific and don't transfer directly to English AI-writing detection.
- Judgment calls, not hard rules — a rule's "does not trigger" exception exists for a reason; don't mechanically flag every instance of a pattern without checking whether the exception applies.
- Refined from real correction feedback on specific document types (product posts, WeChat articles, emails, READMEs) — a genuinely different genre (fiction, academic Chinese writing) may need different calibration.
