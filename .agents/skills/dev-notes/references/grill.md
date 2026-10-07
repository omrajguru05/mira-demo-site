# The Grill

The grill makes sure Om understands every point before it is written. The agent never asks an open question and waits; it proposes answers, explains each one, and recommends one. Om chooses, corrects, or parks.

A point is **locked** when Om picks an option or writes his own explanation. A point is **parked** when he picks D. Parked points never reach the topic list or the note.

---

## Question format

Every question uses this shape:

```
❓ Q<n> · <Type> · <short title>
<Context: one or two sentences, grounded in evidence. Name the commit, file, PR, or number.>

- A) <option>: <what it means and what follows from it>
- B) <option>: <what it means and what follows from it>
- C) <option>: <what it means and what follows from it>
- D) I can't explain this yet: parks the point; it stays out of the note.

➡️ Recommended: <letter>, because <the reason, tied to the evidence>.
```

The rules for every question:

- Every question has three real options (A to C) plus D, never two and never five.
- Each option is a complete, plausible answer with its consequence. Do not add strawmen only to make the recommendation look good.
- The context line cites evidence. If there is none, say the insight is inferred.
- The recommendation follows the evidence, not the most flattering reading of the work.
- Ask at most 5 questions per message. Om answers in shorthand: `1A 2C 3D`, or a letter plus a correction (`2B, but the cache was per request`).
- If Om writes his own answer instead of a letter, restate it in one or two sentences and ask him to confirm before locking.
- Questions, options, and recommendations contain no em dashes.

---

## Question types

Use the type that fits the insight. Most insights need two or three questions across different types.

### Explain-back

Can Om explain what was happening, in plain language, to someone who has never seen the codebase?

- **If the cause is uncertain**, the options are the competing explanations. The recommendation names the evidence that favours one.
- **If the cause is clear**, the options are three framings of the same explanation for the reader: one at the level of behaviour (what a user saw), one at the level of mechanism (what the system did), one at the level of code (which function, which line). Recommend the one that suits the note's reader.

### Decision

Why this approach and not the alternatives? What would each alternative have cost?

- The options are the approach taken and the two strongest alternatives that were realistically available.
- Each option states its cost: complexity, performance, money, maintenance, time.
- The recommendation identifies the approach the evidence shows was chosen and why it won. If the evidence suggests a different approach would have been better, say so.

### Evidence

What number shows it worked, and how was it measured?

- The options are the candidate measures (for example: the timing from one benchmark, a count from a test run, a before-and-after from field data), each with its method and its weakness.
- If no measurement exists, one option must be "Describe the effect qualitatively and state that it was not measured".

### Reader

What would someone get wrong if they copied this?

- The options are the likeliest mistakes or misapplications: the case where it does not apply, the precondition that is easy to miss, the edge case that broke during the work.
- The chosen option usually becomes a gotcha or a caveat in the note.

### Honesty

What part of this did Om not fully understand while doing it?

- The options are the parts most likely to be unclear: a fix that worked without a confirmed cause, a library behaviour taken on trust, a number whose method is unknown.
- The outcomes are to explain it in the note as an open question, to investigate before writing, or to cut it.

### Scope (round 1 only, when needed)

Is this insight worth teaching at all?

- The options are to make it a main section, a short aside or gotcha, or to cut it.

---

## Round 1 and round 2

**Round 1 (phase 3)** runs on the insight sheet. Every insight tagged **inferred** or **needs Om** gets at least one question. **Verified** insights still get an Explain-back question when they will carry a main section.

**Round 2 (phase 5)** runs on the chosen outline. Ask about structure, not facts:

- Why the sections are in this order (what the reader must understand before the next section makes sense).
- What each chosen diagram or media item shows that prose cannot.
- What the reader should take away from the conclusion.

---

## Example

```
❓ Q2 · Decision · Why derive the filter state from the URL
The search page used to keep filters in component state (src/search/useFilters.ts before a3f91c2). The change moved them into URL parameters.

- A) URL parameters: filters survive reloads and shared links, and the back button works; the cost is encoding and decoding on every change.
- B) Component state: the simplest option, but filters are lost on reload and cannot be shared.
- C) A global store: shared across pages, but adds a dependency and still loses state on reload unless persisted.
- D) I can't explain this yet: parks the point; it stays out of the note.

➡️ Recommended: A, because the bug reports in issue #41 were about lost filters after a reload, and only A addresses that.
```
