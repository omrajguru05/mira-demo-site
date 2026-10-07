---
name: dev-notes
description: Turns the work just done in a session into a developer note (dev note) that teaches, in Om's long-form voice. Analyses the session, builds an insight sheet, grills Om with lettered options and a recommendation until every point is one he can explain, proposes a topic list with three variants per slot, collects explicit approval for links and sensitive material, shows the full note in chat, and writes the .mdx file only after approval. Use when asked to write a dev note, developer note, devnote, engineering note, write-up, case study, or technical breakdown of what we just worked on, or to "turn this session into an article".
---

# Dev Notes

A dev note exists to teach. It explains a problem, what was actually happening, the decisions made, and what changed, so a reader who was not there can understand it and use it.

The rule behind the whole workflow: **if Om cannot explain a point himself, it is not ready to be written.** The agent does the analysis and proposes everything, but nothing reaches the note until Om has chosen or explained it.

## Files in this skill

| File | Read it |
| --- | --- |
| `references/article-writing.md` | Completely, before writing any prose: the grill, the topic list, and the note all follow it. |
| `references/grill.md` | Before phase 3. The question format, the question types, and how to build options. |
| `references/guardrails.md` | Before phase 4. What needs Om's explicit approval and what is banned outright. |
| `assets/insight-sheet.md` | Template for phase 2. |
| `assets/topic-list.md` | Template for phase 4. |
| `assets/note-template.mdx` | Template for phases 6 and 8. |

## The workflow

Run the phases in order. Never skip a phase, and never merge two phases into one message.

| Phase | Agent does | Om sees | Gate to continue |
| --- | --- | --- | --- |
| 1. Analyse | Reads the session: git diff and log, commits, PRs, files touched, the conversation, measurements, errors hit along the way | Nothing yet | None |
| 2. Insight sheet | Fills `assets/insight-sheet.md` | The sheet | Om has seen it |
| 3. Grill, round 1 | Questions every insight using `references/grill.md` | Lettered questions with a recommendation | Every insight is **locked** or **parked** |
| 4. Topic list | Fills `assets/topic-list.md` from locked insights only | The topic list, the Needs approval list, the cut list | Om has seen it |
| 5. Lock | Grill round 2 on the chosen outline, plus the Needs approval list | Lettered questions and approval items | Om has answered every question and every approval item |
| 6. Prototype | Writes the full note in chat from `assets/note-template.mdx` | The entire note, frontmatter and body | None |
| 7. Self-check | Runs the checks below and reports the results under the prototype | Pass or fail per check | Om approves the note, or asks for changes (loop back to 6) |
| 8. Write | Writes the approved note to an `.mdx` file | The file path | Done |

### Phase 1: Analyse

Gather facts rather than a story. For each thing that changed, find what the problem was, what was actually happening, why it was happening, what changed, and what effect the change had. Record the evidence for each (commit, file and line, PR, measurement, error message).

If the session has nothing worth teaching once banned topics are removed (see `references/guardrails.md`), say so plainly and stop. Do not pad a thin session into a note.

### Phase 2: Insight sheet

Tag every insight with its status:

- **verified**: backed by evidence you can link (commit, file, number, log).
- **inferred**: your reading of the evidence, not confirmed by it.
- **needs Om**: only Om knows (intent, reasons, rejected alternatives, context outside the repo).

The diff shows what changed, never why. Most "why" insights start as **needs Om**.

### Phase 3: Grill, round 1

Follow `references/grill.md`. Every question has lettered options, each explained, and a recommendation with its reason. Option D is always "I can't explain this yet", which parks the point. Ask at most 5 questions per message and let Om answer in shorthand ("1A 2C 3D").

A point becomes **locked** only when Om has picked an option or written his own explanation. Parked points never appear in the topic list or the note.

### Phase 4: Topic list

Fill `assets/topic-list.md` from locked insights only. Every slot gets three variants and a recommendation with its reason. Apply the banned topics in `references/guardrails.md` before proposing anything. Collect every approval-gated item into the Needs approval list instead of placing it silently.

### Phase 5: Lock

Run grill round 2 on the outline Om chose: can he explain why each section is in that order, what each diagram shows, and what the reader takes away? Present the Needs approval list with each item numbered so he can approve or reject it individually ("approve 1, 3; reject 2").

Rejected items are dropped. Do not reword the note to keep a rejected claim, link, name, or quote alive.

### Phase 6: Prototype

Write the complete note in chat: frontmatter and body, exactly as it would appear in the file. Do not summarise it or show only part of it. Do not create or edit any file in this phase.

Media and diagrams that do not exist yet go in as clear placeholders describing what to capture or build. Never invent image URLs, video URLs, or numbers.

### Phase 7: Self-check

Report each check as pass or fail, with the fix for any failure:

1. The note passes the Final Writing Test at the end of `references/article-writing.md`, question by question.
2. The note contains no em dashes, including in the frontmatter.
3. Every number states how it was measured (machine, conditions, runs).
4. Every link, name, quote, and sensitive item appears on the approved list.
5. No parked point and no banned topic appears.
6. Every technical term is explained before it is relied on.
7. The TL;DR points and the excerpt match what the body actually says.
8. The slug is lowercase kebab-case and matches the title.
9. Every heading says what its section is about.

### Phase 8: Write

Only after Om explicitly approves the prototype ("approved", "write it", "ship it"). Approval of the topic list is not approval of the note.

Find where notes live in the current repo (look for existing `.mdx` notes, posts, or articles and match their folder and naming). If more than one place fits, ask with lettered options and a recommendation. Write the file as `<slug>.mdx` and report the path. Do not commit unless Om asks.

## Output format

Frontmatter fields, in this order (see `assets/note-template.mdx`):

| Field | Key | Rule |
| --- | --- | --- |
| Title | `title` | It says what the note is about and never relies on intrigue. |
| Slug | `slug` | It is lowercase kebab-case derived from the title. |
| Excerpt | `excerpt` | It is one or two complete sentences of about 160 characters. |
| TL;DR points | `tldr` | It holds 3 to 5 complete sentences, each stating something the reader learns. |
| Date | `date` | It is the day the note is written, as `YYYY-MM-DD`. |
| Updated At | `updatedAt` | It uses `YYYY-MM-DD` and matches `date` on the first write. |
| Author | `author` | It is the primary byline, which is `Om`. |
| Authors | `authors` | It lists everyone credited, including Om, and is `["Om"]` for a solo note. |
| Tags | `tags` | It holds 2 to 5 specific, lowercase tags. |
| Also read on | `alsoReadOn` | It holds approved related notes or links only, and is an empty list when there are none. |

The body follows the frontmatter.

## Voice

`references/article-writing.md` governs every word, including the grill and the topic list. It is a copy of Om's long-form voice from `om-design`, which governs all of his long-form writing (essays, case studies, project and research writing), not only dev notes. The copy is bundled so this skill works when installed on its own. Edit the master in `skills/om-design/references/article-writing.md` and copy it here, never the other way round. The rules agents break most often in dev notes:

- Lead with the point, then dissect it. Dev notes focus on decisions: how it started, what became apparent, what changed, why the final approach won.
- Technical sections follow: problem, what was actually happening, why, what changed, effect.
- Write in the first person, and prefer "I have been working on" to a reflexive "building". The author is "Om", never "Om Rajguru".
- Do not use em dashes, sentence fragments, cinematic setups ("and then everything changed"), or manufactured wonder.
- Teach without announcing that you are teaching.

## Gotchas

- **Narrating the session.** The agent's instinct is to retell what happened in order ("first I opened X, then ran Y"). A dev note is organised around the problem and the decisions, not the timeline.
- **Making the agent the story.** "I asked Claude to do this" is banned. The tool can appear once, in an optional credits line Om approves.
- **The diff is not the reason.** Never write a "why" that Om did not confirm in the grill. Inferred reasons stay tagged until he does.
- **Recommending the flattering option.** Recommend what the evidence supports, not what makes the work look most impressive.
- **Numbers without conditions.** A single run on a laptop is not a benchmark. If the method is unknown, the number goes to the grill as an Evidence question or is cut.
- **Em dashes creep back** in recommendations, captions, and TL;DR points. Check those too.
- **Writing the file early "to save time".** The file is written in phase 8 only, after Om explicitly approves the full note.
- **Softening a rejection.** If Om rejects a link or a claim, remove it. Do not paraphrase the same content without its source.
- **Too many questions at once.** Ask five per message at most, grouped by insight, so each one gets a real answer.
