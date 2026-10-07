---
name: intentional-craft
description: Mandatory design discipline for AI-assisted work. Forces models and agents to design with intent instead of generating generic interfaces, to reject premature completion, to work from a stated point of view, to finish invisible details, to encode standards into systems, to edit hard after building, to raise the creative ceiling, and to protect deliberate experiments.
---

# Intentional Craft

AI makes a polished-looking interface cheap. It does not make a good one cheap. This reference exists because a model's default output is the statistical average of every interface it has seen, and the average is generic by definition.

The rules below apply to every surface, under any design language: Om's, a client's, or one created with `design-language-architect.md`. Wherever this file says "the active design language", read the repo's own design document (for example `design.md`), or Om's `design-system.md` when working on Om's sites. They are working rules, not inspiration. Each one has a failure mode to look for, a required behavior, and a check that can be answered yes or no.

> **Building is cheap now. Judgment is the scarce part. Spend the time saved on judgment.**

---

## How These Rules Fit the Rest of the System

Some of these principles use expressive words (soul, character, strange). They do not loosen any other reference. They resolve like this:

| Principle | Where it is expressed | Where it is never expressed |
| --- | --- | --- |
| Character and soul | Composition, proportion, material, interaction, evidence, the one decision only this product would make | Atmospheric or poetic copy (`product-voice.md` still bans it) |
| Strangeness and experiments | Layout, motion, material, data presentation, secondary and exploratory surfaces | The primary task path, accessibility, copy clarity, engineering names (`hig-compliance-auditor.md`, `codebase-naming.md`) |
| Obsessive craft | Details one level below what the person consciously notices | Decoration added to look crafted, or fake technical detail with no meaning |
| Raising the ceiling | New interaction models offered alongside the dependable path | Replacing a clear task flow with a novel one the Grandma Test would fail |

If a craft rule appears to conflict with the Grandma Test, accessibility, or the product voice, those win. Find a way to express the idea that satisfies both.

---

## 1. Avoid Zombie UI

Post-war modernism was copied without its reasoning until it became rows of identical, vacant buildings. AI repeats this with interfaces: the shape of good design reproduced without the intent behind it.

### Failure mode

Zombie UI is any surface assembled from defaults because they are defaults. Common forms in AI output:

- centered hero, one-line subhead, two buttons side by side
- a row of three feature cards, each with an icon, a bold title, and two lines of text
- purple-to-blue gradients, glowing borders, blurred color blobs
- logo clouds and "trusted by" strips with no evidence behind them
- three-tier pricing with the middle tier highlighted by default
- testimonial carousels, emoji bullet lists, stat bands with unexplained large numbers
- component library defaults shipped unchanged (default radii, default shadows, default spacing)
- every section the same width, same padding, same entrance animation
- the announcement pill above the hero with a pulsing status dot

The full list is the Generic Pattern Catalog below.

### Required behavior

1. **Run the swap test.** If the logo and copy could be replaced with any other product's and the page would still work unchanged, it is Zombie UI. Redesign until it fails the swap.
2. **Name the specific decision.** For every surface, write one sentence naming the compositional or interaction decision that only this product would make, and why the content demands it.
3. **Never ship a catalog pattern.** Everything in the Generic Pattern Catalog is banned by default, in every design language. Do not generate it, and remove it when auditing existing work.
4. **Justify every other default you keep.** Defaults outside the catalog are allowed when chosen. "It is the standard pattern" is a reason only when you can say what the standard pattern does well for this content.
5. **Scan the code, not only the screenshot.** Search for the detection signatures in the catalog before declaring a surface clean.

### Check

- Does the surface fail the swap test?
- Can I name the one decision that belongs only to this product?
- Is any section present only because sites usually have one?
- Does the surface contain zero catalog patterns, confirmed by a code search?

### The Generic Pattern Catalog

These are the patterns that make an interface look AI-generated or template-built. They are banned by default under every design language. A design document may re-allow a single pattern only when the owner explicitly approves it and the document records the reason, tied to its point of view. A model never re-allows one on its own.

#### Badges, pills, and labels

| Pattern | Detection signature | Do instead |
| --- | --- | --- |
| **Pulsing dot inside a pill badge** ("● New: v2 is live", "● Now in beta", "● Available for work") | `animate-ping`, `animate-pulse`, `@keyframes pulse` on a small dot; `rounded-full` pill containing a dot and short text | No badge. If the news matters, state it in the heading or a dated line of text. Reserve live indicators for genuinely live data, rendered as a static dot with a text label. |
| Announcement pill above the hero headline, often with an arrow ("Introducing X →") | small `rounded-full` bordered element directly above an `h1` | Put the announcement in its own dated line, a changelog link in the navigation, or remove it |
| "New", "Beta", "Hot", "Pro", "AI" chips scattered on items | many small `rounded-full` or `badge` elements | Label only what changes the person's decision, as plain text |
| Gradient-bordered pill or "shiny" border badge | `bg-gradient` behind a 1px inset, `conic-gradient` borders | Remove the badge, or use a plain border token |
| Eyebrow label in uppercase tracking above every section ("FEATURES", "PRICING", "HOW IT WORKS") | `uppercase tracking-widest text-xs` repeated before headings | Let the heading name the section. Use an eyebrow only when it carries real metadata (a date, a version, a status). |
| Sparkle or star emoji or icon next to anything AI-related | ✨ emoji, sparkle icons used as decoration | Name the function plainly. Use an AI glyph only as a functional control icon. |

#### Hero and page structure

| Pattern | Detection signature | Do instead |
| --- | --- | --- |
| Centered hero: headline, one-line subhead, two buttons ("Get started" / "Learn more") | `text-center` hero with two adjacent buttons | Lead with evidence of the product (a real specimen, live state, real content), asymmetric composition, one primary action |
| Gradient text headline | `bg-clip-text text-transparent bg-gradient-*` | Solid text color. Emphasis comes from size, weight, or layout. |
| Headline with one highlighted or underlined "magic" word | colored `span` or SVG squiggle under one word | Write a headline that does not need decoration to land |
| Floating product screenshot tilted in 3D with a glow behind it | `perspective`, `rotateX`, large blurred glow | Show the product flat, cropped to the part that matters, with a caption saying what to notice |
| Section rhythm: hero, logo strip, three features, testimonial, pricing, FAQ, CTA band, footer | the same section sequence as every template | Choose sections from the content. Vary structure, density, and lead element between sections. |
| Big closing CTA band ("Ready to get started?") | full-width colored band before footer with a repeated button | End on the strongest piece of content and a single plain link |

#### Cards and grids

| Pattern | Detection signature | Do instead |
| --- | --- | --- |
| Three feature cards with an icon in a tinted rounded square, bold title, two lines of text | `grid-cols-3`, icon wrapped in `rounded-lg bg-*/10 p-2` | Show the features working: specimens, short demos, before/after, or a list with real detail |
| Bento grid with no content logic | uneven grid tiles filled with mixed decorative content | Use a bento layout only when tile size encodes importance or relationship |
| Every section wrapped in a card with a border and shadow | repeated `rounded-xl border shadow` containers | Put text directly on the canvas; use containers only to group |
| Hover lift with shadow growth on every card | `hover:-translate-y-1 hover:shadow-lg` everywhere | Hover feedback only on interactive items, proportional and consistent with the design language |
| Spotlight or cursor-following glow on cards | radial gradient bound to pointer position on every card | Reserve pointer-reactive effects for a deliberate, labelled experiment |

#### Color, light, and effects

| Pattern | Detection signature | Do instead |
| --- | --- | --- |
| Purple-to-blue or pink-to-orange gradients | `from-purple-* to-blue-*`, `from-indigo-*`, `via-pink-*` | Use the design language's palette; one accent used sparingly |
| Blurred color blobs or aurora backgrounds | large absolutely positioned `blur-3xl` circles, animated gradients | Plain background tokens; texture only when tied to content |
| Glowing borders and neon shadows | colored `box-shadow` with large blur, `ring` glows | Structural borders from the design tokens |
| Default glassmorphism on everything | `backdrop-blur` with translucent white on cards and sections | Blur only on layers that sit above moving content and need legibility |
| Grid or dot background pattern fading into the hero | `bg-grid`, radial mask on a dotted background | No background pattern unless it encodes something (coordinates, a real grid of data) |
| Noise or grain overlay on the whole page as decoration | full-page SVG noise at fixed opacity | Only if the design language defines grain as a material with a reason |

#### Motion

| Pattern | Detection signature | Do instead |
| --- | --- | --- |
| Every section fades and slides up on scroll | `whileInView`, `data-aos`, intersection-observer reveal on every block | Content is visible on arrival. Animate only state changes. |
| Infinite logo marquee | `animate-marquee`, duplicated scrolling track | A static, curated set with evidence, or nothing |
| Typewriter or rotating word headline | interval-driven text swaps in a heading | One fixed headline |
| Number count-up animation on stats | animated counters from 0 | Show the number immediately, with its context |
| Shimmer sweep on buttons or borders | looping `@keyframes shimmer` | Static controls with proper hover, focus, and press states |
| Animated beam or border-trail effects | moving gradient along a path or border | Reserve for a labelled experiment that explains a real flow |

#### Social proof and data

| Pattern | Detection signature | Do instead |
| --- | --- | --- |
| "Trusted by" logo cloud in grayscale | row of desaturated logos under the hero | Name real customers in context, with what they did, or omit |
| Testimonial carousel or wall of avatar quote cards | rotating quotes, five-star rows, avatar plus handle | One specific, attributed quote placed next to the claim it supports |
| Stat band of large unexplained numbers ("10k+ users", "99.9% uptime") | three or four large numbers in a row | A metric with its context, source, and date |
| Avatar stack with "+2,000 people joined" | overlapping circular avatars with a count | Remove, or show a real, verifiable figure in plain text |
| Three-tier pricing with the middle one highlighted as "Most popular" | three columns, middle one scaled or bordered with a badge | Pricing laid out from the actual plans and the decision people make |

#### Components and chrome

| Pattern | Detection signature | Do instead |
| --- | --- | --- |
| Component library defaults shipped unchanged | default shadcn, MUI, or Chakra radii, shadows, colors, spacing | Restyle every primitive to the design language's tokens |
| Fake browser window or terminal frame around content, used as decoration | three colored dots in a title bar | Frame content only when the frame adds context; never fake chrome |
| Emoji as bullet points or section icons | emoji at the start of list items or headings | Plain lists; functional icons from the design language's icon set only where they aid scanning |
| Icon on every heading, button, and list item | icon inside nearly every text element | Icons only where they speed recognition |
| Mega-footer with four columns of links on a small site | multi-column footer copied from a SaaS template | A footer sized to the site's real navigation |
| Chat bubble or "Ask AI" floating button added by default | fixed bottom-right launcher | Add only when there is a real assistant and a clear need |

#### Typography

| Pattern | Detection signature | Do instead |
| --- | --- | --- |
| Inter (or the framework default font) everywhere with no reason | default font stack untouched | Use the design language's typefaces; if none, choose one deliberately and record why |
| Oversized, light-weight, centered body text in every section | `text-xl text-muted text-center` paragraphs under each heading | Left-aligned reading text at a comfortable measure |
| Title Case Headlines Everywhere | capitalized every word | Follow the design language's casing; sentence case by default |

---

## 2. Beware the Burrito Dilemma

A burrito wrapped in foil looks the same whether it is good or not. An AI-generated interface looks finished within seconds, and the finished look hides whether the problem was solved.

### Failure mode

- Declaring work "done" because it renders and looks polished
- Happy-path only: no empty, loading, error, slow-network, or long-content states
- Placeholder logic behind real-looking UI (buttons that do nothing, filters that do not filter)
- Sample data chosen to make the layout look good rather than real, messy data
- Never walking the full journey in, through, and out of the surface

### Required behavior

1. **State the problem before the screen.** In the plan, write what the person is trying to do and what currently stops them. The design is judged against that sentence, not against how it looks.
2. **Use the definition of done.** A surface is done only when all of these are true:
   - The stated problem is solved, and you can say how you verified it.
   - Every state exists: default, hover, focus, active, disabled, loading, empty, error, success.
   - Stress content is tested: very long names, missing images, one item, 1000 items, slow network, offline where relevant.
   - The keyboard path and the narrow mobile layout work end to end.
   - Every visible control does what it says.
3. **Report gaps honestly.** Never write "done", "complete", or "production ready" while known gaps exist. End every delivery with a short list of what is unverified or unfinished. An empty list must be earned.

### Check

- Can I state the problem this solves in one plain sentence, and how I verified it?
- Have I seen every state with real or stress content, not only the flattering sample?
- Did I list what is still unverified?

---

## 3. Establish a Clear Point of View

Without a point of view, a model falls back to the average of historical trends. The point of view is what sets the quality bar.

### Required behavior

Before designing a new surface or system, write a short POV statement, three lines at most:

```
For:      who this is for and the situation they are in
Believe:  what this product holds to be true about doing this well
Refuse:   what this product will not do, even when it is common
```

If the active design language already states a POV, use it. For Om's sites, the default POV is:

```
For:      people reading, inspecting, or using work built by Om
Believe:  precision is the aesthetic; composition is where creativity lives
Refuse:   hype, decoration without content reason, browser defaults, generic templates
```

For any other brand without a written POV, derive one from its design document, existing UI, and brief, list the assumptions for the user to confirm, and propose adding it to the design document. Never design from no POV, and never borrow Om's POV for another brand.

### How the POV is used

- Every significant decision in the plan should trace back to a line in the POV.
- When two options are both reasonable, the POV picks.
- When reviewing, "this does not match the POV" is a valid reason to reject polished work.

### Check

- Is there a written POV for this surface?
- Can each major decision be traced to it?
- Did the POV rule out at least one common option?

---

## 4. Practice Pepsi Bubbling

Craft means going one level deeper than the customer can consciously see. People do not notice concentric radii or optically centered icons. They notice when a surface feels cheap without knowing why. These details are the difference.

### Required behavior

Treat the details below as part of the build, not polish for later. Apply what is relevant and list which ones you applied in the delivery.

**Geometry and proportion**
- Concentric radii: an inner element's radius equals the outer radius minus the padding between them.
- Optical centering for asymmetric glyphs (play triangles, arrows, chevrons) instead of mathematical centering.
- Spacing that expresses relationship (the active design language's spacing scale), never one gap repeated everywhere.
- Hairlines that read as the same weight in both themes (perceptual consistency, `interface-design-judgment.md`).

**Type**
- Tabular numerals for anything aligned or changing (times, counts, prices, durations).
- `text-wrap: balance` on headings and `text-wrap: pretty` on body paragraphs to prevent orphans.
- Tightened tracking on display sizes, untouched tracking on body.
- Curly quotes, real apostrophes, correct ellipses.

**Surface and light**
- Shadows that agree on one light source and layer an ambient shadow under a key shadow.
- Soft edges: squircle corners where supported.
- Frost (backdrop blur) only where a layer sits above content and needs to stay legible over it, never as a default surface treatment unless the active design language makes it one.

**Interaction**
- Focus rings that follow the element's radius.
- Press feedback of 1px to 2px compression or a scale near 0.98.
- `::selection`, caret color, and scrollbar styled to the theme.
- Skeletons that match the final layout exactly so nothing shifts on load.
- Hover states that never change layout size.

**The unseen pages**
- Designed 404, empty, offline, and error states.
- Favicon, Open Graph image, page titles, and reader mode output checked.

### Check

- Did I list the invisible details applied to this surface?
- Is there any detail I skipped because "nobody will notice"?

---

## 5. Design the System, Not Just the Screen

Work is now built by many people and many agents in parallel. A screen communicates one moment. A system carries intent into every screen nobody has drawn yet.

### Required behavior

1. **Tokens before values.** Use the active design language's tokens (color, type, space, radius, motion). A raw hex, pixel, or millisecond value in component code is a finding unless it is new and is being added to the tokens.
2. **Flows, not frames.** Deliver the entry point, every state, and the exit of a task. A single screen is a draft.
3. **Primitives before pages.** If a pattern appears twice, make it a named primitive (following `codebase-naming.md`) rather than copying markup.
4. **Encode repeated corrections.** When the same correction is made twice, propose a way to enforce it automatically: a validation script, a lint rule, a template, a component default, or a new line in the relevant reference. Rules that live only in someone's head do not survive agentic workflows.
5. **Leave the system better.** If the work needed a token, primitive, or rule that does not exist, add it to the right reference in the same change and say so in the plan.

### Check

- Are all values coming from tokens?
- Did I deliver the whole flow?
- Did any repeated correction get encoded somewhere enforceable?

---

## 6. Elevate the Role of the Editor

When building is fast, the quality filter moves to after the build. The editor's job is to refuse to confuse a finished look with quality.

### Required behavior

After implementation and before reporting, run an Editor's Pass and include a short Editor's Cut in the delivery:

1. **Walk the journey.** Go through the full task as the person would, from arrival to completion and back. Note every hesitation, extra step, and moment of doubt.
2. **Cut.** List what you removed or would remove. A surface that survived editing with nothing removed was probably not edited.
3. **Demand one unexpected detail.** Name at least one detail that exceeds what the brief asked for and directly serves the person (a keyboard shortcut, a preserved scroll position, a remembered choice, a smarter empty state).
4. **Judge against the POV, not familiarity.** Reject work that looks polished but misses the POV. Do not reject an experiment only because it is unfamiliar (see section 8).
5. **Re-run the Burrito definition of done** from section 2.

### Editor's Cut format

```
Journey:     what I walked through and where it stalled
Removed:     what I cut and why
Unexpected:  the detail I added beyond the brief
Unverified:  what is still not checked
```

### Check

- Did I walk the full journey after building?
- Did I remove something?
- Is there at least one unexpected detail that serves the person?

---

## 7. Raise the Ceiling, Do Not Just Lower the Floor

Using AI only to produce the usual interfaces faster lowers the floor. The more valuable use is making interfaces that were too expensive to attempt before.

### Required behavior

1. **Diverge before converging.** The first layout that comes to mind is the statistical average; name it, then do not ship it unchanged. Before building any new surface, describe three structurally different directions in a few lines each (layout, lead element, key interaction, which signature move of the design language it uses):
   - **A, Dependable:** the clearest version of the expected pattern, made to pass the swap test.
   - **B, Signature:** built around one of the design language's signature moves.
   - **C, Ceiling:** something that was too expensive to build before.
   Directions must differ in composition or interaction, not only in color or copy. Choose using the POV, state why the others lost, and carry the strongest idea from the losers into the winner where it fits.
2. **Offer one ceiling option.** For any new surface of meaningful size, propose at least one direction that goes beyond the dependable pattern: a new interaction model, a living or data-responsive visual, a richer direct-manipulation tool, a composition that could not be hand-built cheaply. Present it next to the dependable option in the plan with its cost and risk.
3. **Make it live, where it helps.** Prefer interfaces that respond to real state (live data, the person's progress, time, input) over static pictures of state. Living does not mean ambient animation; it means the surface reflects what is true now.
4. **Keep the dependable path.** The ceiling option never removes the clear path that passes the Grandma Test. It adds to it, or it lives on secondary and exploratory surfaces.
5. **Let the user choose.** Do not ship the ceiling option as the default without the user's agreement.

### Check

- Did I write three structurally different directions before building, and say why the winner won?
- Did the plan include a ceiling-raising option, not only the expected one?
- Does the dependable path still pass the Grandma Test?

---

## 8. Protect the Strange

Lower creation cost should pay for experiments. Unique ideas are what separate a brand from every other output of the same model. Reviews and models both tend to sand them away because unfamiliar reads as wrong.

### Required behavior

1. **Reserve an experiment slot.** Each meaningful surface may carry one deliberate, unusual decision. Label it in the plan as an experiment, with:
   - **Idea:** what is unusual
   - **Reason:** what it does for the content or the POV
   - **Boundary:** what it must not affect (primary task, accessibility, copy clarity)
   - **Kill criteria:** what would make you remove it
2. **Do not normalize experiments silently.** When revising, do not replace a labelled experiment with the generic pattern unless it met its kill criteria or the user asked. Say so if you do.
3. **Keep strangeness off the critical path.** Experiments live in composition, material, motion, data presentation, and secondary surfaces. They never make the primary action harder to find, the copy less literal, or the interface less accessible.
4. **Ask before removing someone else's experiment.** If existing work contains an unusual decision with a clear reason, flag it in the audit instead of flattening it.

### Check

- Is there a labelled experiment, or a stated reason why this surface has none?
- Does the experiment stay off the primary task path?
- Did I avoid flattening an existing deliberate decision?

---

## 9. Hold an Exacting Standard

People never see most of the work, but they feel all of it. Quality is the sum of many small decisions made correctly, and one careless detail is enough to make a whole surface feel cheap. "Good enough" is not a standard.

### Required behavior

1. **Finish every surface, including the rarely seen ones.** Error, empty, offline, 404, loading, first run, cancel, undo, exit, print, email, Open Graph image, favicon, page title, text selection, scrollbars, and focus states get the same care as the hero.
2. **Nothing snaps.** Every change on screen is animated: enter, exit, move, resize, value change, label change, state change. Timing, easing, and choreography follow Emil Kowalski's `animate` and `apple-design` skills. Motion is interruptible and has a reduced-motion alternative. A hard cut is a defect. Under a brand's own design language, this applies unless that language explicitly says otherwise.
3. **Nothing default.** No browser or component library default is visible anywhere: controls, dialogs, tooltips, scrollbars, selection, autofill, media controls, disclosure markers. Semantics stay native underneath; visuals are always designed.
4. **Responsive everywhere.** Every surface, state, overlay, animation, and visual treatment works from 320px to 2560px wide, at 400% zoom and 200% text, in both orientations, and with touch, mouse, and keyboard. Layouts recompose rather than shrink. A width where the design is only tolerated is a defect. Under a brand's own design language, this applies in full.
5. **Pixel-exact.** Borders land on whole pixels (no blurry half-pixel lines). Icons are optically centered and share one stroke weight. Adjacent text shares a baseline. Radii nest concentrically. Nothing is off by 1px.
6. **Every word earns its place.** Read every label aloud. Terminology is identical everywhere for the same thing. Numbers, dates, and units are formatted consistently. Headings have no single-word last lines.
7. **Consistency sweep.** The same thing looks and behaves the same everywhere: same control, same spacing, same timing, same copy.
8. **Reduce to the essential.** For every element, ask whether removing it makes the experience worse. If not, remove it.
9. **Fix it, do not annotate it.** A flaw found in the area being worked on is fixed before delivery, not described as minor. Flaws outside the agreed scope are listed for the user, not silently changed.
10. **Redo what is not right.** If a decision still feels wrong after the passes, rebuild it rather than patching around it.
11. **No hedged status.** Never describe work as "should be fine", "mostly done", "good enough", "minor issue", or "roughly aligned". Each item is either verified or listed as unverified.

### Inspection passes

Run all eight before delivery and record the result of each in one line:

| Pass | How |
| --- | --- |
| **Zoom** | Inspect at 200% and 400% for misalignment, blurry edges, uneven spacing, and icon centering |
| **Slow motion** | Play every animation at 10% speed (browser DevTools animation panel) and check origin, easing, overlap, and exit |
| **Squint** | Blur your view of the page; the hierarchy should still read in the intended order |
| **Repetition** | Do the core task 10 times in a row; anything that annoys on the tenth time gets fixed |
| **Resize** | Drag the window continuously from 320px to 2560px, then check 320, 360, 390, 768, 1024, 1440, and 2560, both orientations, 400% zoom, and 200% text |
| **Worst case** | Longest strings, empty data, slowest network, smallest screen, largest text size, keyboard only, touch only, reduced motion |
| **Fresh eyes** | Use the surface as a first-time visitor with no context; note every moment of doubt |
| **Side by side** | Compare against the previous version and against the best example of this kind of surface you know; it must hold up next to both |

### Check

- Is every rarely seen surface finished?
- Does anything snap, and is anything default-looking?
- Did every inspection pass run, with a recorded result?
- Is every status either verified or listed as unverified, with no hedged wording?

---

## Required Additions to Every Plan and Delivery

These sections are added to the plan format in `audit-and-plan.md`.

**In the plan (before code):**

```
POV:          For / Believe / Refuse
Problem:      what the person is trying to do and what stops them
Decision:     the one decision only this product would make
Directions:   A Dependable / B Signature / C Ceiling, and why the winner won
Ceiling:      the ceiling-raising option, with cost and risk
Experiment:   Idea / Reason / Boundary / Kill criteria (or "none, because ...")
```

**In the delivery (after code):**

```
Editor's Cut:      Journey / Removed / Unexpected / Unverified
Craft details:     the invisible details applied
Inspection passes: Zoom / Slow motion / Squint / Repetition / Resize / Worst case / Fresh eyes / Side by side, one line each
System changes:    tokens, primitives, or checks added or proposed
```

---

## Intentional Craft Checklist

- [ ] Fails the swap test (not Zombie UI)
- [ ] Zero Generic Pattern Catalog items, confirmed by searching the code for their detection signatures
- [ ] One named decision only this product would make
- [ ] Written POV, decisions traceable to it
- [ ] Problem stated and verified, all states built, stress content tested
- [ ] Unverified items listed honestly
- [ ] Invisible craft details applied and listed
- [ ] Values from tokens, whole flow delivered, repeated corrections encoded
- [ ] Editor's Cut completed with at least one removal and one unexpected detail
- [ ] Three directions explored (Dependable, Signature, Ceiling) before building
- [ ] Ceiling option offered alongside the dependable path
- [ ] Every change animated (enters and exits), interruptible, reduced-motion alternative
- [ ] No browser or library default visible anywhere
- [ ] Responsive from 320px to 2560px, at 400% zoom and 200% text, both orientations, touch and keyboard
- [ ] All eight inspection passes run and recorded; no hedged status wording
- [ ] Experiment labelled with boundary and kill criteria, kept off the critical path
