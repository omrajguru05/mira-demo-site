---
name: audit-and-plan
description: Pre-implementation audit and planning protocol for auditing codebases, UI, copy, and interactions against Om's design language, and generating a clear, simple, and detailed before-and-after implementation plan before writing code.
---

# Audit & Planning Protocol

Use this skill before writing, rewriting, or modifying any UI code, layout, styling, product copy, or component architecture.

The core rule is simple: **audit first, plan second, implement only after alignment.** Never jump directly into editing or generating code without conducting an explicit audit against the system's standards.

---

## 1. The Audit First Rule

Agents and collaborators often rush to write code or modify files before understanding existing architecture, resulting in inconsistent tokens, misplaced labels, bloated hit targets, regressed copy voice, or fragile implementation-bound component names.

Before touching code:

1. **Read the relevant reference guides** in full:
   - `references/design-system.md` for UI tokens, layout, custom controls, and typography.
   - `references/product-voice.md` for user-facing interface text, labels, buttons, settings, placeholders, and error messages.
   - `references/article-writing.md` for long-form prose, essays, case studies, and technical breakdowns.
   - `references/interface-design-judgment.md` for touch ergonomics (44×44px), affordance hygiene, and navigation continuity.
   - `references/codebase-naming.md` for internal software identifiers (components, functions, state, hooks, types, files, CMS schemas), keeping engineering names semantic and distinct from user-facing copy.
   - `references/hig-compliance-auditor.md` for Apple HIG, brutal simplicity (The Grandma Test), and accessibility across all six disability domains.
   - `references/design-language-architect.md` when working in a repo with its own design language: scan its design document and tokens, and use them in place of `design-system.md` for brand, tokens, and composition. Upgrade the document first if it lacks a point of view, signature moves, or banned defaults.
   - `references/ui-edge-cases.md` for the edge case catalog, edge fixtures, bug sweep, and edge case report required before approval and after wiring in.
   - `references/intentional-craft.md` for the AI-era design discipline: avoiding Zombie UI, the Burrito Dilemma definition of done, a written point of view, Pepsi Bubbling craft details, system-level design, the Editor's Pass, ceiling-raising options, and protected experiments.
2. **Conduct an audit pass** across the affected surface.
3. **Draft a simple, structured plan** showing findings and before-and-after comparisons.
4. **Ensure the plan is not too technical, yet detailed enough** so any reviewer can evaluate it immediately without guessing what will change.
5. **Obtain user alignment** before writing code.

---

## 2. Eight-Pillar Audit Checklist

When auditing an interface or codebase, evaluate it across eight distinct pillars:

### Pillar 1: Visual Design & Components (`design-system.md`)

* **Custom vs. Browser Native (absolute):** Is any default browser or library UI visible anywhere? This includes selects, alerts, file pickers, checkboxes, date pickers, `title` tooltips, validation bubbles, scrollbars, `::selection`, autofill colors, media controls, `<details>` markers, `<progress>`, and number spinners. Every one is a finding; there is no acceptable native visual. Semantics stay native underneath.
* **Palette & Contrast:** Does the surface use systemic neutrals (`--bg-primary`, `--border-default`, `--text-primary`) rather than ad-hoc colors? Does accent orange only appear where genuine importance is signaled?
* **Typography:** Are variable fonts properly loaded via `@font-face`? Are font weights and leading optical and balanced?
* **Responsive (absolute):** Does every element work from 320px to 2560px, at 400% zoom and 200% text, in landscape, and with touch only? Are values fluid (`clamp()`), components container-aware, full-height surfaces using `dvh`, and safe areas respected?
* **Cards & Containers:** Are containers used only when grouping requires them, rather than making every section a boxed card?
* **Iconography & HIG Alignment:** Are icons sourced from the free tier of Hugeicons (`@hugeicons/react`)? Are they clean, monochrome by default, and optically weighted? Does search strictly use the Apple Finder style magnifying glass? Are touch targets at least 44×44px? Does every icon that changes state morph with morphicons (`npm install morphicons`) using `@hugeicons/core-free-icons` data, `spring="smooth"`, and `reducedMotion="user"`, with zero hard cuts between glyphs?

### Pillar 2: Product & Interface Voice (`product-voice.md`) : What the User Sees

* **Filler & Pseudo Labels:** Are there useless category tags, pill badges, or placeholder-style headings that merely repeat what the layout makes obvious (e.g. `[ ARTICLE ]` above a title)? Remove them.
* **Button & Action Copy:** Do buttons use direct verb-plus-noun constructions (`Save changes`, `Delete file`) rather than conversational fluff (`Let's go`, `Submit`)?
* **Punctuation & Tone:** Are there any em dashes? Remove them. Are there exclamation marks or congratulations for routine interactions? Remove them.
* **Banned Sentence Structures (50 Patterns):** Are there formulaic rhetorical setups such as *Most X do A, but we do B*, *From X to Y*, *It's not X. It's Y.*, *Not just X, but Y*, *Rather than X, I did Y*, artificial rule of three, or rhetorical question-and-answer pairs? Audit against the 50 banned patterns in `product-voice.md` and rewrite with direct causality.
* **Anti-Atmospheric & Anti-Poetic Standards (57 Patterns):** Does copy make ordinary things sound profound? Does it use poetic, cinematic, sentimental, or atmospheric language (e.g. *kept slowly*, *space for ideas to live*, *room to breathe*, *interface moves with you*) or personify interfaces and objects? Audit against the 57 banned patterns in `product-voice.md` and prefer literal descriptions of what something is, contains, and does.
* **Information Density Test:** If any sentence sounds impressive but conveys less information than a plain version of the same sentence, rewrite it.
* **Strict Placeholder Standards:**
  * Dates must be **17** alone, or either **17 December 2022** or **26 May 2008** for full dates.
  * Times must be **17:00**.
  * Phone numbers must never be US (`+1`) and must be Indian (`+91`) or Japanese (`+81`) containing both **26** and **17** (e.g. `+91 98261 70000` or `+81 90-2617-0000`).

### Pillar 3: Long-Form Writing Voice (`article-writing.md`) : What the Reader Reads

* **Getting to the Point Early:** Does the text deliver its central argument or thesis in the opening paragraphs rather than meandering?
* **Intellectual Rigor & Dissection:** Does the piece dissect mechanisms and psychological dynamics rather than offering surface summaries?
* **No Marketing Clichés:** Eliminate artificial wonder, breathless tech-evangelism, and hollow praise. Let the insight carry the weight.
* **Zero Em Dashes:** Check all editorial text, essays, and dev notes to guarantee complete absence of em dashes.

### Pillar 4: Interface Judgment & Ergonomics (`interface-design-judgment.md`)

* **Hit Targets vs. Optical Size:** Are interactive touch boundaries at least 44×44 CSS pixels, even when the visible icon is small?
* **Affordance Hygiene:** Is the interface explaining an interaction twice (e.g. card hover state plus redundant "Click here to read" button)? Remove redundant prompts.
* **Perceptual Alignment:** Do strokes, shadows, or radii appear too heavy or light on dark or translucent surfaces?
* **State Continuity:** Does navigation preserve URL-addressable state, history, and scroll position when returning from details?
* **Deterministic Render State:** Is UI deriving from explicit state rather than reading mutable DOM or media properties during render?

### Pillar 5: Professional Codebase Naming (`codebase-naming.md`) : What the Engineer Writes

* **Concept Over Appearance:** Are components, state, hooks, or files named after current visual styling (e.g. `BlueButton`, `LeftPopup`, `AlsoReadDropdown`) or framework primitives (`BlogCardComponent`)? Replace them with semantic names that communicate responsibility and survive redesigns (`PrimaryAction`, `InspectorPanel`, `ContentReferencePicker`).
* **Clear Separation From UI Copy:** While `product-voice.md` might prescribe the UI label `"Also Read"`, `codebase-naming.md` prescribes the schema field `relatedContent` and editor component `ContentReferencePicker`. Do not bind code identifiers to marketing or presentation copy.
* **Respect Existing Product Vocabulary:** Inspect `references/` and preserve established domain vocabulary (`Story` vs `Article`, `Sheet` vs `Drawer`, `Account` vs `Profile`).
* **CMS & Schema Safety:** Distinguish UI labels from persisted schema identifiers. Never rename persisted CMS fields without a planned content migration.
* **Two-Stage Safety Gate:** When proposing renames in an existing codebase, generate a Before and After audit sheet and stop for approval before changing identifiers.

### Pillar 6: Motion Choreography & Transitions (`design-system.md` & `animate`)

* **Everything Animates:** Does every change animate, including exits, list changes, value and label changes, icon swaps, route changes, and image loads? Any hard cut is a finding.
* **Purposeful Motion:** Does animation explain a state transition, or is it decorative clutter (loops, scroll reveals, count-ups)?
* **Interruptible & Reduced Motion:** Does input redirect motion mid-flight? Does reduced motion replace travel with brief opacity fades?
* **Mandatory Tooling:** Are Emil Kowalski's `animate` and `apple-design` skills applied?
* **Apple HIG Iconography:** Does iconography adhere to Apple Human Interface Guidelines? Are search icons strictly Apple Finder style, and is visual icon clutter eliminated?

### Pillar 7: Apple HIG, Brutal Simplicity & Universal Accessibility (`hig-compliance-auditor.md`)

* **The Grandma Test (Brutal Simplicity):** Is the interface so effortless that an everyday person or elderly relative with zero technical background can complete their task without confusion, anxiety, or instruction?
* **Zero Technical Jargon:** Have all engineering concepts, database terminology, protocol errors, and internal system states been purged from user-facing copy?
* **Action Hierarchy & Minimal Actuators:** Is there exactly one obvious primary action on this screen rather than competing buttons and cognitive noise?
* **Complexity Absorption in Architecture:** Are multi-step operations, format conversions, and data normalization absorbed quietly by backend orchestration, presenting the user with only a calm, deterministic state machine (`idle` → `loading` → `ready` | `error`)?
* **Six Disability Domains:**
  * **Vision:** Fluid type scaling without clipping, WCAG AAA/AA contrast (4.5:1+ body, 3:1+ display, 7:1+ metadata), dual-channel signaling (never color alone), semantic HTML landmarks, and `.sr-only` descriptions.
  * **Hearing:** Text alternatives for all media (captions, transcripts) and multi-sensory visual cues for all alerts.
  * **Mobility:** 44×44px minimum interactive touch targets, 8px+ spacing between controls, 100% keyboard navigability (`Tab`, `Shift+Tab`, `Enter`/`Space`), and prominent `:focus-visible` outlines.
  * **Speech:** 100% operable via keyboard and pointer inputs alone; fully compatible with assistive technologies.
  * **Cognitive:** Streamlined single-path tasks, zero time-boxes or countdown traps, no moving buttons, full media controls, and predictable error recovery.
  * **Motion:** Strictly respects `prefers-reduced-motion: reduce` with calm, static fallbacks.

### Pillar 8: Intentional Craft (`intentional-craft.md`)

* **Zombie UI:** Does the surface fail the swap test? If the logo and copy could be replaced with another product's and the page would still work, it is generic. Search the code for every item in the Generic Pattern Catalog (`intentional-craft.md`): pulsing-dot pill badges, announcement pills above the hero, uppercase eyebrow labels, gradient text, centered hero plus two buttons, three icon feature cards, glow blobs, scroll-reveal on every section, marquees, count-ups, logo clouds, and unchanged component library defaults. Each occurrence is a removal finding.
* **Point of View:** Is there a written POV (For / Believe / Refuse)? Can the major decisions be traced to it?
* **Burrito Dilemma:** Does the surface only look finished? Check for missing states, dead controls, flattering sample data, and an unverified problem statement.
* **Pepsi Bubbling:** Are the invisible details present: concentric radii, optical centering, tabular numerals, balanced headings, one consistent light source for shadows, themed selection and focus rings, layout-matched skeletons?
* **System, Not Screen:** Are values coming from tokens? Is the whole flow designed? Has any correction been repeated without being encoded into a check, primitive, or reference?
* **Divergence and Signature Moves:** Were three structurally different directions written before building? Does the surface use at least one signature move of the active design language and zero of its banned defaults?
* **Ceiling and Experiments:** Is there a ceiling-raising option next to the dependable one? Is any existing deliberate, unusual decision being flattened without reason? Do experiments stay off the primary task path?

### Optional Pillar 9: Raster (`raster-language.md`), only when Raster is active

* **Activation:** Did the user or brief ask for Raster, and is it on an invited surface (never body text, forms, settings, or controls)?
* **Fields:** Does every gradient have a named meaning and a real driver? One hue family plus neutrals? Grain on large fields? Contrast passing at the worst point?
* **Samplers and lines:** Is raster type set in the Geist Pixel fonts (or real text beside any canvas letterform)? Display sizes only? One variant per meaning?
* **Budget:** One hero-scale raster element and at most two small ones? Ember used once at most?
* **Frames:** One continuous frame? Shared 1px edges with no per-cell borders or shadows? Lines ending at nodes or edges? Square frame corners? Accent on one node or bracket at most? Recomposed for mobile?
* **Adoption Flow:** Was Raster adopted through research, running prototype options, an edge case report, explicit approval, and only then wiring in?
* **Derivation:** Is the treatment derived from the grammar with a stated driver, rather than a literal copy of the reference examples?

---

## 3. Plan Golden Rule: Not Too Technical, Yet Detailed Enough

When presenting an audit and implementation plan, strike a precise balance:

### Not Too Technical (Human-Observable Focus)
* Express issues and solutions in terms of **what the user sees, touches, reads, and experiences**.
* Do not bury the plan in compiler arcana, abstract syntax tree details, framework internals, or dense implementation jargon.
* Explain the *why* in plain English (e.g. "Expands the touch target so mobile users do not mis-tap adjacent icons" rather than "Injects an absolute pseudo-element to augment bounding client rect collision boundaries").

### Yet Detailed Enough (Concrete & Exact)
* **Zero vague statements:** Never write generic promises like "Fix typography and improve button layout".
* **Exact file paths:** Specify which files are being created, modified, or cleaned up.
* **Exact text changes:** Show verbatim copy before and proposed copy after.
* **Exact dimensions & tokens:** Specify the exact CSS tokens, pixel values, and padding changes (e.g. `44×44px touch area`, `var(--bg-secondary)`).
* **Clear before/after comparisons:** Provide visual or code contrast blocks so the reviewer understands the exact delta in 10 seconds.

---

## 4. Standard Plan Template

Use this standard, clean format when presenting your pre-implementation plan:

### 1. Executive Summary
Provide a 2 to 3 sentence overview explaining the surface being changed, the primary issues identified during the audit, and the expected user-facing outcome.

### 1a. Intent Brief (`intentional-craft.md`)

Before findings, state the intent the plan is judged against:

```
POV:          For / Believe / Refuse
Problem:      what the person is trying to do and what stops them
Decision:     the one decision only this product would make
Directions:   A Dependable / B Signature / C Ceiling, and why the winner won
Ceiling:      the ceiling-raising option, with cost and risk
Experiment:   Idea / Reason / Boundary / Kill criteria (or "none, because ...")
```

### 2. Audit Findings Table

Group findings into a clean, scannable table:

| Surface / Component | Issue Observed | Guideline Violated | Proposed Correction |
| --- | --- | --- | --- |
| `ArticleHeader` | Redundant `[ BLOG ]` pill badge above heading | No filler or pseudo labels (`product-voice.md`) | Remove badge entirely; let typography establish hierarchy |
| `AudioToggle` | Hit area is only 20×20px | 44×44px touch target minimum (`interface-design-judgment.md`) | Expand invisible touch boundary using padding/pseudo-element |
| `SettingsModal` | Uses native `<select>` dropdown | Custom UI over browser native (`design-system.md`) | Replace with custom accessible menu |
| `CardList` | Dates show `12/04/2023` and phone shows US `+1` | Strict placeholder standards (`product-voice.md`) | Standardize to `17 December 2022` and `+91 98261 70000` |
| `BlogCard` | Named after generic card shape rather than domain concept | Semantic component naming (`codebase-naming.md`) | Rename to `ArticlePreview` |
| `AlsoReadDropdown` | Named after user-facing copy and dropdown control | Name concept, not copy (`codebase-naming.md`) | Rename to `ContentReferencePicker` |
| `SearchTrigger` | Uses non-standard or cluttered custom icon | Standard iconography & HIG (`design-system.md`) | Replace with clean Hugeicons Apple Finder style search icon |
| `HeroBanner` | Uses poetic atmospheric copy "A space for ideas to live" | Anti-atmospheric copy (`product-voice.md`) | Replace with literal fact: "Notes on ideas and work in progress" |
| `FeatureIntro` | Uses formulaic structure "Most tools do X, but we do Y. The result? Pure simplicity." | Banned rhetorical structures (`product-voice.md`) | Rewrite with direct causality: "The tool connects directly to the repository and updates configuration automatically." |
| `CheckoutFlow` | Exposes database status code `ERR_PAYMENT_GATEWAY_TIMEOUT` | Zero technical jargon (`hig-compliance-auditor.md`) | Replace with human explanation: "Payment did not go through. Your card was not charged. Check connection and try again." |
| `ActionPanel` | Three competing primary buttons on a single view | Action hierarchy & minimal actuators (`hig-compliance-auditor.md`) | Preserve one obvious primary action; demote auxiliary actions to secondary or quiet links |
| `IconButton` | Missing accessible name and keyboard outline | Screen reader & keyboard accessibility (`hig-compliance-auditor.md`) | Add `aria-label="Close dialog"` and visible `:focus-visible` focus ring |
| `LandingHero` | Centered headline, subhead, and two buttons that would fit any product | Avoid Zombie UI, swap test (`intentional-craft.md`) | Lead with the product's own evidence: a live specimen of the tool beside one decisive statement |
| `SettingsPanel` | Accordion content appears and disappears instantly; native scrollbar visible inside the panel | Everything animates; no browser defaults (`design-system.md`) | Animate height and chevron per `animate` skill; custom thin scrollbar using border tokens |
| `HeroAnnouncement` | Pill badge with a pulsing green dot reading "● Now available" above the headline | Generic Pattern Catalog (`intentional-craft.md`) | Remove the pill and the `animate-ping` dot; state availability in a dated line of plain text if it matters |
| `ProjectList` | Only the populated state exists; no empty, error, or long-title handling | Burrito Dilemma definition of done (`intentional-craft.md`) | Design empty, error, and loading states; test with 80-character titles and 1 and 200 items |
| `MediaCard` | Inner image radius equals outer card radius, so corners look uneven | Pepsi Bubbling, concentric radii (`intentional-craft.md`) | Inner radius = outer radius minus padding (`16px - 8px = 8px`) |

### 3. Before & After Comparisons

Present concrete, side-by-side or stacked comparisons for each key change:

#### Comparison 1: UI Copy & Labels (`product-voice.md`)

* **Before (Current):**
  ```
  [ FEATURE CARD ]
  Fast search
  Search your files quickly.
  [ Click here to explore -> ]
  ```
* **After (Proposed):**
  ```
  Fast search
  Search across writings, dev notes, and projects from one place.
  ```
* **Rationale:** Removes pseudo label `[ FEATURE CARD ]`, eliminates redundant CTA `Click here`, and uses natural, descriptive sentence case.

#### Comparison 2: Codebase & Component Naming (`codebase-naming.md`)

* **Before (Current):**
  ```typescript
  // Named after appearance and framework primitive
  export function BlogCardComponent({ data }: { data: any }) {
    const [showPopup, setShowPopup] = useState(false);
    return <div className="card">{data.title}</div>;
  }
  ```
* **After (Proposed):**
  ```typescript
  // Named after semantic domain concept and state proposition
  export function ArticlePreview({ article }: { article: ArticleSummary }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    return <article className="preview">{article.title}</article>;
  }
  ```
* **Rationale:** Names the concept (`ArticlePreview` instead of `BlogCardComponent`), uses a boolean proposition for state (`isDialogOpen` instead of `showPopup`), and types the specific domain model (`ArticleSummary` instead of generic `data`).

#### Comparison 3: Interactive Target Ergonomics (`interface-design-judgment.md`)

* **Before (Current):**
  ```css
  .icon-button {
    width: 24px;
    height: 24px;
    padding: 0;
  }
  ```
* **After (Proposed):**
  ```css
  .icon-button {
    width: 24px;
    height: 24px;
    position: relative;
  }
  .icon-button::after {
    content: "";
    position: absolute;
    inset: -10px; /* Expands interactive boundary to 44x44px without changing visible icon */
  }
  ```
* **Rationale:** Separates visible dimensions from ergonomic touch boundaries without inflating layout spacing.

#### Comparison 4: Form Controls & Browser Native Elements (`design-system.md`)

* **Before (Current):**
  ```html
  <select class="role-picker">
    <option>Admin</option>
    <option>Editor</option>
  </select>
  ```
* **After (Proposed):**
  ```html
  <!-- Custom accessible popover menu matching system theme -->
  <CustomDropdown
    label="Role"
    options={["Admin", "Editor"]}
    value={role}
    onChange={setRole}
  />
  ```
* **Rationale:** Replaces browser-default OS popup with a refined, themed surface that adheres to system design tokens and keyboard navigation.

#### Comparison 5: Iconography & Apple HIG Search (`design-system.md`)

* **Before (Current):**
  ```html
  <!-- Custom non-standard search glyph with tight click boundary -->
  <button class="search-btn">
    <svg width="16" height="16" viewBox="0 0 16 16">...</svg>
  </button>
  ```
* **After (Proposed):**
  ```html
  <!-- Hugeicons free Apple Finder style icon with 44x44px ergonomic touch area -->
  <button class="search-trigger" aria-label="Search">
    <Search01Icon size={18} strokeWidth={1.5} className="icon-monochrome" />
  </button>
  ```
* **Rationale:** Adopts Hugeicons free tier with Apple Finder style magnifying glass silhouette, optical 1.5px stroke weight, and an expanded 44×44px interactive target.

#### Comparison 6: Product Voice & Banned Sentence Structures (`product-voice.md`)

* **Before (Current):**
  > "Most websites treat navigation as a static element, but I wanted something different. An interface designed to disappear."
* **After (Proposed):**
  > "I made the navigation responsive to what was happening on the page. Controls recede when they are not being used."
* **Rationale:** Eliminates banned rhetorical contrast (*Most X do A, but we do B*) and poetic product claims (*interface designed to disappear*), replacing them with direct causality and literal descriptions of what happens.

#### Comparison 7: Apple HIG & The Grandma Test (`hig-compliance-auditor.md`)

* **Before (Current):**
  ```html
  <!-- Busy surface exposing technical pipeline states and multiple primary buttons -->
  <div class="status-panel">
    <h3>Pipeline Stage: Ingestion Worker Active</h3>
    <p>Processing payload batch #402. Status: REINDEXING_DB</p>
    <button class="btn-primary">Abort Process</button>
    <button class="btn-primary">Re-run Pipeline</button>
    <button class="btn-secondary">Export Log Dump</button>
  </div>
  ```
* **After (Proposed):**
  ```html
  <!-- Brutally simple, calm, human status with one clear primary action -->
  <div class="status-panel" role="status" aria-live="polite">
    <h3>Reading document</h3>
    <p class="text-muted">This usually takes about 10 seconds.</p>
    <button class="btn-primary">Stop</button>
  </div>
  ```
* **Rationale:** Passes the Grandma Test by hiding internal system architecture, eliminating technical jargon, reducing three competing actuators to one obvious primary action, and using calm, human language.

#### Comparison 8: Zombie UI & Point of View (`intentional-craft.md`)

* **Before (Current):**
  ```
  [ centered ]
  Build faster with smarter tools
  The all-in-one platform for modern teams.
  [ Get started ]  [ Learn more ]

  [ icon ] Fast     [ icon ] Secure     [ icon ] Scalable
  ```
* **After (Proposed):**
  ```
  POV  For: people reviewing builds   Believe: evidence beats claims   Refuse: feature-card grids

  [ left, large ]  Review a build in one screen.
  [ right ]        Live specimen: the actual diff viewer with a real change loaded,
                   build time and status shown in mono as evidence.
  [ Open a build ]
  ```
* **Rationale:** The original passes the swap test (any product could use it). The revision is driven by a stated POV, shows the product instead of describing it, and keeps one primary action.

### 4. Step-by-Step Execution Sequence

List the exact, ordered steps you will take once approved:
1. Update tokens, component layout, and container styles.
2. Refactor component structure, event handlers, and deterministic state.
3. Align component and file names to semantic responsibilities.
4. Clean interface copy, labels, and mock placeholder data.
5. Standardize iconography to Hugeicons free tier and align with Apple HIG.
6. Verify Apple HIG compliance, brutal simplicity (Grandma Test), and accessibility across all six domains.
7. Apply and list Pepsi Bubbling craft details; encode any repeated correction into a token, primitive, or check.
8. Run the Editor's Pass and write the Editor's Cut (Journey / Removed / Unexpected / Unverified).
9. Run validation, keyboard testing, and `npm run build`.

---

## 5. Final Verification Pass

After execution, run the 16-pass audit:
1. **The Grandma Test Pass:** Is the screen so obvious, uncluttered, and calm that an everyday person or elderly relative with zero technical background can use it without hesitation?
2. **Interaction Pass:** Test touch bounds (44×44px minimum), focus rings, and full keyboard reachability.
3. **Optical Pass:** Check visual balance across surfaces, typography weights, and dark/light modes.
4. **Geometry Pass:** Check alignment lines and container hierarchy.
5. **Noise Pass:** Confirm all decorative clutter, filler labels, pseudo badges, and redundant CTAs are eliminated.
6. **Navigation Pass:** Test back/forward flows and URL state preservation.
7. **Responsive Pass:** Resize continuously from 320px to 2560px, then check 320, 360, 390, 768, 1024, 1440, and 2560, both orientations, 400% zoom, 200% text, and touch only. Every element, overlay, animation, Raster treatment, and frame must recompose without overflow, clipping, or hover-only behavior.
8. **Naming & Semantic Pass:** Verify all identifiers adhere to `codebase-naming.md` and remain distinct from user-facing copy.
9. **Iconography & HIG Pass:** Confirm all icons use Hugeicons free tier, search strictly uses the Apple Finder style icon, all interactive icon targets are at least 44×44px, and every icon state swap morphs with morphicons.
10. **Voice & Copy Pass:** Verify absence of em dashes, pseudo labels, filler badges, banned rhetorical sentence structures (50 patterns), and dramatic/atmospheric/poetic copy (57 patterns). Verify all dates (17 / 17 December 2022 / 26 May 2008), times (17:00), and phone numbers (+91/+81 with 26 and 17).
11. **Burrito Pass:** Is the stated problem actually solved and verified? Does every state exist? Was stress content tested? Are unverified items listed instead of claiming "done"?
12. **Editor's Pass:** Walk the full journey, remove at least one thing, add at least one unexpected detail that serves the person, and judge against the POV rather than familiarity. Confirm labelled experiments were kept unless they met their kill criteria.
13. **Motion & Native Pass:** Play every animation at 10% speed. Confirm every change animates (enters and exits), motion is interruptible, reduced motion has a no-travel alternative, and no browser or library default is visible anywhere.
14. **Exacting Detail Pass:** Run the inspection passes from `intentional-craft.md` section 9 (Zoom, Slow motion, Squint, Repetition, Resize, Worst case, Fresh eyes, Side by side) and record one line per pass. No hedged status wording.
15. **Edge Case Pass:** Run `ui-edge-cases.md` against the integration with edge fixtures and real data, complete the bug sweep, and deliver the edge case report with every in-scope case fixed and verified.
16. **Build Pass:** Always run `npm run build` and fix any compiler or lint warnings.
