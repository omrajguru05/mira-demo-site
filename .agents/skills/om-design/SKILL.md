---
name: om-design
description: "The complete design language, product copy voice, interface judgment, intentional craft discipline, and audit/planning guidelines for Om's personal sites and product surfaces (omrajguru.com, projects.omrajguru.com). Apply whenever designing, building, or writing interfaces, components, product copy, or articles for Om. Also usable in any other repo: it scans that repo's own design.md and tokens, upgrades them, and applies its craft, accessibility, and creative-design disciplines without imposing Om's visual identity."
---

# Om: Design Language & Writing Voice

A calm, precise, systems-minded design and writing language for Om's personal sites, applications, and product surfaces.

> Precision is the aesthetic; composition is where creativity lives. Language is part of the interface. Professional naming is semantic design.

This unified skill consolidates ten complementary disciplines, plus one optional design language extension:
1. **[Design System](#part-1-design-system)** ([references/design-system.md](./references/design-system.md)): Visual identity, tokens, typography, custom controls, motion, layout, and implementation rules.
2. **[Product & Interface Writing Voice](#part-2-product--interface-writing-voice)** ([references/product-voice.md](./references/product-voice.md)): Microcopy, labels, buttons, settings, errors, empty states, and strict rules against useless filler/pseudo labels.
3. **[Long-Form Writing Voice](#part-3-long-form-writing-voice)** ([references/article-writing.md](./references/article-writing.md)): Essays, technical breakdowns, dev notes, case studies, and research writing.
4. **[Interface Design Judgment](#part-4-interface-design-judgment)** ([references/interface-design-judgment.md](./references/interface-design-judgment.md)): Transferable design-engineering judgment for auditing interaction ergonomics, perceptual alignment, surface architecture, affordance clarity, state continuity, and interface polish.
5. **[Audit & Planning Protocol](#part-5-audit--planning-protocol)** ([references/audit-and-plan.md](./references/audit-and-plan.md)): Pre-implementation audit and structured planning protocol ensuring agents inspect the entire system, diagnose friction, and produce a simple before/after plan before writing code.
6. **[Professional Codebase Naming](#part-6-professional-codebase-naming)** ([references/codebase-naming.md](./references/codebase-naming.md)): Semantic design and engineering naming standards ensuring software is named according to what it represents and owns, durable across redesigns, and cleanly separated from user-facing copy or transient framework primitives.
7. **[Apple HIG, Brutal Simplicity & Universal Accessibility](#part-7-apple-hig--universal-accessibility)** ([references/hig-compliance-auditor.md](./references/hig-compliance-auditor.md)): Universal Apple Human Interface Guidelines compliance, brutal simplicity (The Grandma Test), six disability accessibility standards (Vision, Hearing, Mobility, Speech, Cognitive, Motion), and architectural complexity absorption.
8. **[Intentional Craft](#part-8-intentional-craft)** ([references/intentional-craft.md](./references/intentional-craft.md)): The AI-era design discipline. Avoid Zombie UI, beware the Burrito Dilemma, establish a clear point of view, practice Pepsi Bubbling, design the system rather than the screen, elevate the editor, raise the ceiling, and protect the strange.
9. **[Design Language Architect](#part-9-design-language-architect)** ([references/design-language-architect.md](./references/design-language-architect.md)): Brand-agnostic mode for any website or app. Scans the repo's design.md, tokens, and components, writes a sharper and more enforceable version that preserves the brand, and forces creative interfaces through signature moves, banned defaults, and a three-direction divergence protocol.
10. **[UI Edge Cases](#part-11-ui-edge-cases)** ([references/ui-edge-cases.md](./references/ui-edge-cases.md)): The edge case catalog, edge fixtures, bug sweep, testing method, and edge case report. Required before any design is approved and again after it is wired in.

**Optional extension:**
- **[Raster](#part-10-raster-optional-extension)** ([references/raster-language.md](./references/raster-language.md)): An opt-in addition to Om's design language. Fields (mesh, tonal, radial, stepped gradients), samplers (stipple, dot matrix, pixel sprites, glyph fields), lines (Geist Pixel Line type with construction guides), and frames (the boxed layout), with a grammar for deriving new treatments. Off unless requested; each family can be used on its own. Adopted only through five gated stages: research existing, prototype options, edge cases and bugs, approval, wire in.

---

## Core Non-Negotiables

1. **Precision & Structure Over Polish:** Design and copy must feel considered, structural, and enduring.
2. **Language Is Part of the Interface:** A confusing or cluttered label is as much a usability flaw as a broken layout.
3. **No Filler or Pseudo Labels:** Never add useless filler labels, pseudo labels, decorative pill badges, or placeholder-style headings that merely describe what the interface already communicates.
4. **Never Expose Default Browser UI (Absolute):** No browser or component library default is ever visible. Custom-design every element the page renders: inputs, selects, menus, dialogs, sheets, toasts, pickers, tooltips, validation, scrollbars, text selection, autofill, media controls, progress, and disclosure markers, while preserving native semantics and accessibility underneath. Only surfaces the page cannot draw (browser frame, OS dialogs, the native text context menu) are exempt.
5. **No Unnecessary Name Branding:** Omit surnames. Use "Om" or first-person language ("I", "my", "mine") where natural; omit names entirely if they add no useful context.
6. **No Em Dashes:** In all writing and copy, use commas, parentheses, colons, or separate sentences instead of em dashes.
7. **Mandatory Motion & HIG Tooling:** For all animations, transitions, gestures, and fluid motion, you must install and follow Emil Kowalski's `animate` and `apple-design` skills (`npx skills add emilkowalski/skills --skill animate apple-design -y`), and audit compliance using Om's `hig-compliance-auditor` (`npx skills add omrajguru05/hig-compliance-auditor -y`).
8. **Interface Design Judgment:** Separate visual size from interactive touch boundaries (44×44px minimum), prefer perceptual consistency over mathematical sameness, practice affordance hygiene by removing redundant interaction prompts, and keep render state deterministic.
9. **Strict Placeholder & Mock Data Standards:** For all calendar components, time displays, form placeholders, preview datasets, and demo interfaces: date numbers must be **17** (or full date **17 December 2022** or **26 May 2008**); time must be **17:00**; phone numbers must never be US (+1) and must strictly be Indian (+91) or Japanese (+81) format containing both **26** and **17** (e.g. `+91 98261 70000` or `+81 90-2617-0000`).
10. **Audit First, Plan Second:** Before making code or copy changes, agents must conduct an audit against the design system, product voice, interface judgment, and codebase naming, then output a simple, clear before-and-after implementation plan.
11. **Professional Codebase Naming (Semantic Design):** Name software according to what it represents and is responsible for, using established product and engineering vocabulary. Choose names durable enough to survive changes in presentation, styling, or implementation. Never name identifiers based on current appearance, temporary marketing copy, or transient framework primitives. Maintain strict separation between user-facing copy (governed by product-voice.md), editorial prose (governed by article-writing.md), and engineering code identifiers (governed by codebase-naming.md).
12. **Standard Iconography (Hugeicons Free & Apple HIG):** All UI iconography must use the free tier of Hugeicons (`@hugeicons/react`). Glyphs must strictly align with Apple Human Interface Guidelines and SF Symbol metaphors: search must use the macOS Finder magnifying glass (`Search01Icon`), share must use the iOS Share Sheet tray (`Share03Icon`), settings must use `Settings02Icon`, AI/sparkles must use `AiSparklesIcon`, and projects must use `SailboatIcon`. Icons must remain monochrome by default, optically weighted (1.5px to 2px stroke), and decoupled from touch boundaries (44×44px minimum hit targets). Every icon that changes state (menu and close, play and pause, copy and copied, theme, chevrons) must morph with morphicons (`npm install morphicons`), fed by `@hugeicons/core-free-icons` data, using `spring="smooth"` and `reducedMotion="user"`. A hard cut between two glyphs is a defect.
13. **Banned Rhetorical & Poetic Copy:** Strictly avoid formulaic rhetorical sentence structures (e.g. *Most X do A, but we do B*, *From X to Y*, *It's not X. It's Y.*, artificial rules of three, rhetorical question-and-answer sequences). Never make ordinary things sound profound or romanticise simplicity, slowness, or craftsmanship. Do not give interfaces or objects human agency (they do not "breathe", "speak", "wait", or "invite"). Prefer literal meaning and direct causality. If a sentence sounds impressive but conveys less information than a plain version, rewrite it.
14. **Apple HIG, Brutal Simplicity & Universal Accessibility (The Grandma Test):** Every interface must pass the Grandma Test (an everyday person with zero technical background can use it effortlessly without confusion, anxiety, or instruction). Zero technical jargon in UI. Minimal buttons with exactly one obvious primary action per screen. Hide complexity behind the scenes: architecture and backend data models must absorb computational complexity so the user experience is calm and obvious. Enforce accessibility across all six disability domains (Vision with Dynamic Type and 4.5:1+ contrast, Hearing with text alternatives, Mobility with 44×44px hit targets and full keyboard navigation, Speech, Cognitive with streamlined single-path tasks, and Motion honoring prefers-reduced-motion).
15. **Intentional Craft (AI-Era Design Discipline):** AI makes a polished look cheap, so judgment is the scarce part. Avoid Zombie UI: if a surface would survive swapping in another product's logo and copy, redesign it. Never ship anything from the Generic Pattern Catalog (pulsing-dot pill badges, announcement pills, uppercase eyebrow labels, gradient text, glow blobs, centered hero with two buttons, three icon feature cards, scroll-reveal on every section, marquees, count-ups, logo clouds, unchanged component library defaults), and search the code for its detection signatures before calling a surface clean. Beware the Burrito Dilemma: never call work done because it looks finished; it is done only when the stated problem is solved and verified, every state exists, and unverified items are listed. Write a point of view (For / Believe / Refuse) before designing and trace decisions to it. Practice Pepsi Bubbling: finish details one level below what the person consciously sees. Design the system, not the screen: tokens before values, flows before frames, and encode repeated corrections into checks, templates, or references. Run an Editor's Pass after building. Raise the ceiling with one ambitious option beside the dependable path, and protect labelled experiments while keeping them off the primary task path. Character comes from decisions and craft, never from atmospheric copy.
16. **Design Language Resolution (Any Repo):** Before UI work, determine which design language governs. On Om's sites (omrajguru.com and its subdomains, or a repo with no other design language where the user asks for Om's style), Part 1 governs. In any other repo, run the Design Language Architect scan: the repo's own design document and tokens replace Part 1, and Om's visual identity (palette, fonts, assets, avatar, island navigation, icon mappings) is never imposed. The disciplines in Parts 4 to 8 apply everywhere. The voice rules, placeholder standards, and iconography standards apply unless the repo's design language specifies its own. If the repo's design document is missing or weak (no point of view, no signature moves, no banned defaults), propose an upgrade before designing. Every new surface, in any repo, goes through the three-direction divergence protocol (Dependable, Signature, Ceiling).
17. **Everything Animates:** Every change on screen is animated, including exits, list changes, route changes, value and label changes, icon swaps, image loads, and theme changes. Emil Kowalski's `animate` and `apple-design` skills decide timing, easing, and choreography. Motion is interruptible, never blocks input, and under reduced motion becomes brief opacity fades without travel. A hard cut is a defect. Viewport entry is not a state change and does not get a reveal animation.
18. **Exacting Detail Standard:** Finish every surface, state, word, pixel, and millisecond, including rarely seen ones (errors, empty, offline, 404, print, email, Open Graph, selection, scrollbars, focus). Pixel-exact alignment, one consistent behavior per element everywhere, nothing that can be removed without loss. Fix flaws instead of calling them minor, rebuild decisions that are still wrong, and run the inspection passes (Zoom, Slow motion, Squint, Repetition, Resize, Worst case, Fresh eyes, Side by side) before delivery. Work is either verified or listed as unverified; never "good enough".
19. **Raster Is Opt-In:** Raster is an optional extension of Om's design language, never a replacement. Apply it only when the user or brief asks for Raster or an expressive Om surface, and adopt it only through its five gated stages: research existing, show several running prototype options, check UI edge cases and bugs, get explicit approval, then wire it in. When active: gradients need a named meaning and real driver and use one hue family plus neutrals; raster type uses the Geist Pixel fonts at display sizes; respect the raster budget (one hero element, at most two small); keep reading text, controls, and data crisp; framed layouts use one continuous frame with shared edges, never per-section cards; and derive new treatments from the grammar instead of copying the reference images.
20. **Everything Is Responsive:** Every page, component, state, overlay, animation, Raster element, frame, image, table, and line of copy works at every width from 320px to 2560px, at 400% zoom and 200% text, in portrait and landscape, and with touch, mouse, and keyboard. Recompose layouts instead of shrinking them; use fluid `clamp()` values, container queries, dynamic viewport units, and safe-area insets; nothing essential depends on hover. A width where the design is merely tolerated is a defect.
21. **Edge Cases Before Approval:** No design is presented for approval until it has been run through `references/ui-edge-cases.md` with edge fixtures (empty, one, many, long, odd characters, slow, offline, error, zoom, touch, keyboard, reduced motion, forced colors) and a bug sweep, with every in-scope case fixed. Run it again after wiring in, and deliver the edge case report both times.

---

## Mandatory Reference Inspection (Read Every Line)

> [!IMPORTANT]
> **Models and agents are STRICTLY REQUIRED to read every line of the applicable reference files before taking action.** Do not skim, summarize, guess, or assume defaults. Open and read the entire reference file relevant to your task:
> - **`references/design-system.md`**: Read completely before writing UI code, styling, tokens, or layouts.
> - **`references/product-voice.md`**: Read completely before writing copy, labels, buttons, settings, placeholders, or error messages (strictly auditing against the 50 banned sentence structures and 57 banned poetic/atmospheric patterns).
> - **`references/article-writing.md`**: Read completely before drafting articles, essays, case studies, or dev notes.
> - **`references/interface-design-judgment.md`**: Read completely before designing or auditing interactive controls, touch targets, state continuity, or affordances.
> - **`references/audit-and-plan.md`**: Read completely before planning or making changes to ensure audits and before/after plans are generated first.
> - **`references/codebase-naming.md`**: Read completely before creating, modifying, or auditing names of components, files, types, variables, CMS schemas, or architectural abstractions.
> - **`references/hig-compliance-auditor.md`**: Read completely before designing, building, or auditing any user interface, flow, microcopy, component, or system architecture to enforce Apple HIG, brutal simplicity (The Grandma Test), and universal accessibility.
> - **`references/intentional-craft.md`**: Read completely before designing, building, reviewing, or declaring any surface finished, to apply the swap test, point of view, definition of done, craft details, Editor's Pass, ceiling option, and experiment slot.
> - **`references/design-language-architect.md`**: Read completely before any UI work in a repo that is not Om's, and whenever asked to create, audit, or improve a design.md or design system.
> - **`references/ui-edge-cases.md`**: Read completely before asking for approval of any design and before delivering any integration.
> - **`references/raster-language.md`**: Read completely only when Raster is requested or active, before designing any gradient, stipple, dot matrix, pixel, glyph, or line treatment.

---

# Part 1: Design System

# Om: Design System

**System version:** 2.0  
**Default mode:** Dark  
**Core principle:** Precision is the aesthetic; composition is where creativity lives.

A calm, precise, systems-minded identity. The work here favors clarity over decoration, structure over spectacle, and depth over polish for its own sake. Every surface should read like it was built by someone who thinks in patterns and builds things meant to last.

**Sites:** [omrajguru.com](https://omrajguru.com/) (main site, writing), [projects.omrajguru.com](https://projects.omrajguru.com/) (project builds, technical breakdowns), [research.omrajguru.com](https://research.omrajguru.com/) (research notes and findings)

---

## Brand identity

Om is drawn to the systems and patterns that shape the world, to the quiet decisions that compound into real impact, and to the discipline of turning insight into action. The design language mirrors this: restrained, structural, patient. Depth earns attention here; ornament does.

**Voice:** direct, reflective, forward-looking. Sentences state what is true and what is being built, plainly. Prefer "This is how the system works" over "Welcome to my amazing project." Precision and clarity are the brand, so word choice matters as much as color choice.

**Tone in practice:**

- Headings name the idea or the build, exactly.
- Body copy explains reasoning, the "why," alongside the "what."
- Captions and footnotes hold the honest caveats and open questions.
- Avoid hype language, superlatives, and filler enthusiasm. Let the work carry the weight.

---

## Brand assets

### Avatar

Primary identity mark across navbars, author bylines, and footers.

| Variant | URL | Use |
| --- | --- | --- |
| Hello (default) | `https://in1.omcdn.xyz/static/identity/om-avatar.png` | Navbar, favicon fallback, general use |
| Cheerful | `https://in1.omcdn.xyz/static/identity/memoji-archive/cheerful.png` | Warm or personal sections, about page |
| Photography | `https://in1.omcdn.xyz/static/identity/memoji-archive/photography.png` | Photo essays, visual work |
| Researching | `https://in1.omcdn.xyz/static/identity/memoji-archive/research.png` | Deep-dive posts, research notes, technical breakdowns |

Hotlink these directly; the URLs are the source of truth and should stay live-referenced, never copied locally.

### Fonts

Download and self-host all three. Serve from the project's own asset directory, referenced with `@font-face`, and load through `font-display: swap`.

| Family | Source | Role |
| --- | --- | --- |
| The Relative Sans Variable | `https://in1.omcdn.xyz/static/identity/fonts/The-Relative-Sans-Variable.ttf` | Primary UI and body typeface |
| The Relative Rounded Variable | `https://in1.omcdn.xyz/static/identity/fonts/The-Relative-Rounded-Variable.ttf` | Warm accents, pull quotes, personal/about content |
| The Relative Mono Variable | `https://in1.omcdn.xyz/static/identity/fonts/The-Relative-Mono-Variable.ttf` | Code, technical labels, metadata, timestamps |
| Geist Pixel Circle | bundled in favicon pack | Decorative pixel mark, loading states, small system glyphs |

```css
@font-face {
  font-family: 'Relative Sans';
  src: url('/fonts/The-Relative-Sans-Variable.ttf') format('truetype-variations');
  font-weight: 100 900;
  font-display: swap;
}
@font-face {
  font-family: 'Relative Rounded';
  src: url('/fonts/The-Relative-Rounded-Variable.ttf') format('truetype-variations');
  font-weight: 100 900;
  font-display: swap;
}
@font-face {
  font-family: 'Relative Mono';
  src: url('/fonts/The-Relative-Mono-Variable.ttf') format('truetype-variations');
  font-weight: 100 900;
  font-display: swap;
}
```

### Favicon

Extract `https://in1.omcdn.xyz/static/general/om-favicon-pack.zip` and serve the resulting files locally from each site's root. Reference the extracted set in each site's `<head>`, matched to what the pack actually contains.

### Open Graph image

Every page uses `https://in1.omcdn.xyz/cms/static/open-graph/og-image-om.png` as its default `og:image` and `twitter:image`, unless a project brief supplies its own. Download and self-host this image alongside the fonts and favicon; it should not be hotlinked.

### Personal assets (restricted)

`https://in1.omcdn.xyz/static/identity/family/family-g.PNG` and anything else under `/identity/family/` requires explicit permission before use in any build. Treat this path as off-limits by default.

---

## Color system

Two modes, dark-first. The palette stays close to true black and true white, with a single accent used sparingly.

### Dark mode (primary)

```
bg-primary:      #000000
bg-secondary:    #0a0a0a
bg-tertiary:     #121212
border-subtle:   #1c1c1c
border-default:  #2a2a2a
border-strong:   #3d3d3d
text-primary:    #f0f0f0
text-secondary:  #9a9a9a
text-tertiary:   #636363
text-disabled:   #3a3a3a
accent:          #ff5a1f
accent-hover:    #ff7a45
accent-muted:    #3a1c0e
success:         #00b34a
warning:         #ffab00
error:           #f0384a
info:            #3399ff
```

### Light mode

```
bg-primary:      #ffffff
bg-secondary:    #fafafa
bg-tertiary:     #f2f2f2
border-subtle:   #e9e9e9
border-default:  #d6d6d6
border-strong:   #b8b8b8
text-primary:    #121212
text-secondary:  #565656
text-tertiary:   #8f8f8f
text-disabled:   #cfcfcf
accent:          #d84515
accent-hover:    #b8390f
accent-muted:    #fdece3
success:         #0a8a3d
warning:         #b9740a
error:           #c62233
info:            #0b6fc9
```

The accent is a single warm signal color, reserved for the one interactive or decisive element per view: a link, a focus ring, a primary button, a highlighted data point. It stays absent from decoration.

---

## Typography

Relative Sans carries the page. Relative Mono marks anything technical or operational. Relative Rounded is reserved for warmth.

| Token | Size | Weight | Line height | Tracking | Use |
| --- | --- | --- | --- | --- | --- |
| `display` | 64–88px (clamp) | 600 | 1.02 | -0.03em | Hero statement, one per page |
| `title` | 44px | 600 | 1.08 | -0.02em | Page title |
| `heading-28` | 28px | 600 | 1.2 | -0.01em | Section heading |
| `heading-22` | 22px | 600 | 1.3 | -0.01em | Subsection |
| `heading-18` | 18px | 600 | 1.35 | 0 | Card / component title |
| `lede` | 20px | 400 | 1.5 | 0 | Opening orientation paragraph |
| `body` | 17px | 400 | 1.6 | 0 | Reading copy |
| `body-sm` | 15px | 400 | 1.55 | 0 | Secondary copy, captions |
| `label` | 14px | 500 | 1.3 | 0.01em | Buttons, nav, tags |
| `mono` | 14px | 400 | 1.5 | 0 | Code, metadata, timestamps |
| `mono-sm` | 12px | 400 | 1.4 | 0.02em | Inline technical labels |

**Rules:**

- Keep two weights active in any single view: a heading weight and a body weight.
- Reserve Relative Rounded for genuinely personal moments.
- Tabular numerals for aligned figures: dates, counts, durations, coordinates.
- Sentence case throughout, headings included.

---

## Spacing

4px base unit.

```
4px    xs    icon padding, tight pairs
8px    sm    label to input, inline groups
16px   md    related items within a group
24px   lg    card padding, component internal rhythm
32px   xl    between related sections
48px   2xl   major section breaks
80px   3xl   page-level rhythm, hero padding
```

Every gap belongs to one relationship. Resist the flat, everything-equidistant stack.

---

## Shape language

Corners stay soft, squircle rather than a plain circular radius. Where supported, use `corner-shape: squircle`; otherwise approximate with generous radii.

```css
.squircle {
  border-radius: 22px;
  corner-shape: squircle;
}
```

| Token | Radius | Use |
| --- | --- | --- |
| `radius-sm` | 10px | Tags, small buttons, inline chips |
| `radius-md` | 16px | Cards, inputs, code blocks |
| `radius-lg` | 24px | Feature cards, dialogs, hero panels |
| `radius-xl` | 32px | Large editorial surfaces, immersive panels |
| `radius-full` | 9999px + squircle easing | Navbar capsule, avatar frames |

---

## Iconography

A calm, precise interface requires restrained, consistent iconography that assists navigation rather than creating visual noise.

### Standard Library: Hugeicons (Free Tier)

The standard icon set across Om's sites is **Hugeicons (free tier)** (available via `@hugeicons/react` or free SVGs).

* **Library Package:** Use `@hugeicons/react` (or `hugeicons-react`) outline/stroke variants.
* **Stroke Consistency:** Maintain consistent stroke weights (typically 1.5px to 2px) to match the optical weight of Relative Sans typography.
* **Palette:** Monochrome by default. Icons inherit `currentColor` or use system text tokens (`text-primary`, `text-secondary`, `text-tertiary`). Never introduce arbitrary bright colors; the accent color is reserved strictly for active signals or focus states.

### Apple HIG Alignment

Icon design and usage must adhere strictly to Apple Human Interface Guidelines (as verified by `omrajguru05/hig-compliance-auditor` and `emilkowalski/skills`):

1. **Clear and Legible Silhouettes:** Choose icons with simple, universally understood shapes that communicate meaning instantaneously.
2. **Search Icon Standard (Apple Finder Style):** For search inputs, command palettes, and navigation triggers, always use the clean Apple Finder style magnifying glass icon (`Search01Icon`, a pure geometric circle with a clean 45-degree diagonal handle). Avoid idiosyncratic, filled, or decorative search glyphs.
3. **No Decorative Icon Clutter ("Icon Soup"):** Icons are functional wayfinding instruments, not decoration. Never place an icon on every list item, button, or card merely to fill space. If text alone communicates the idea clearly, omit the icon.
4. **Optical Sizing & Centering:** Standard visible sizes are 16px (compact inline), 20px (standard UI controls), and 24px (standalone actions). Adjust bounding boxes optically when asymmetric glyphs (such as play triangles or arrows) appear visually off-center.
5. **Ergonomic Hit Targets (44×44px):** Always decouple visible icon dimensions from interactive touch boundaries. A 20×20px icon inside a button must maintain a minimum 44×44px interactive touch target via padding or invisible pseudo-elements.
6. **Semantic Naming:** Name icon components and interactive triggers according to what they represent (`SearchAction`, `DismissAction`, `MenuTrigger`), never by visual glyph shapes (`MagnifyingGlass`, `CrossIcon`), following `codebase-naming.md`.

### Canonical Apple iOS & macOS Hugeicons Mappings

When selecting icons from Hugeicons (free tier), strictly use these canonical glyphs matching Apple iOS and macOS SF Symbols metaphors:

| Interaction / Concept | Canonical Hugeicon | Apple / SF Symbol Metaphor | Visual Rationale |
| --- | --- | --- | --- |
| **Search** | `Search01Icon` | macOS Finder / Spotlight | Pure geometric circle with clean 45-degree diagonal handle |
| **Share** | `Share03Icon` | iOS Share Sheet (`square.and.arrow.up`) | Arrow rising cleanly out of a rounded tray, replacing generic curved arrows |
| **Sparkles / AI** | `AiSparklesIcon` | Apple Intelligence (`sparkles`) | 3-star constellation aesthetic aligned with modern Apple intelligence |
| **Settings** | `Settings02Icon` | Apple Settings / Control Center | Sculpted mechanical gear with round core |
| **Chevrons** | `ChevronDownIcon`, `ChevronLeftIcon`, `ChevronRightIcon`, `ChevronUpIcon` | SF Symbol Navigation Chevrons | Pure navigation chevrons with smooth rounded-apex corners |
| **Download & Upload** | `Download01Icon` & `Upload01Icon` | Safari Download / Upload Trays | Rounded bottom trays with vertical directional arrows |
| **Audio Skip 10s** | `GoForward10SecIcon` & `GoBackward10SecIcon` | Apple Podcasts 10-Second Skip | Circular skip badges with numeral "10" |
| **Sun / Light Mode** | `Sun03Icon` | Apple Weather (`sun.max`) | Central circle with radiating rounded light beams |
| **Zap / Energy / Fast** | `FlashIcon` | SF Symbol Bolt (`bolt.fill` / `bolt`) | Crisp, symmetrical Apple lightning bolt |
| **Book / Documentation** | `BookOpen01Icon` | Apple Books | Clean open two-page spread |
| **Notifications** | `Notification01Icon` | Apple Notifications Bell | Flared bell with rounded clapper |
| **Ship / Releases** | `SailboatIcon` | Minimalist Sailing Yacht | Minimalist sailing yacht for shipping builds and projects |
| **Folder / Directory** | `Folder02Icon` | macOS Finder Folder | Finder folder with open tab |
| **Streak / Activity** | `Fire02Icon` | Apple Fitness Streak | Double flame with inner heart core |
| **Privacy / Hide** | `ViewOffSlashIcon` | SF Symbol Eye Slash (`eye.slash`) | Eye silhouette with smooth diagonal cut |
| **Calendar / Date** | `Calendar01Icon` | Apple Calendar | Calendar pad with twin top binder rings |

### Icon Motion: morphicons (Required)

Every Hugeicons icon that changes state animates with **morphicons** (`npm install morphicons`). An icon swap is a state change, so a hard cut between two glyphs is a defect (rule 25). morphicons morphs any stroke icon into any other with spring physics: congruent pairs rotate on their own (chevron down to chevron up), and the rest morph in an aligned frame instead of shearing.

```bash
npm install morphicons @hugeicons/core-free-icons
```

* **Data Source:** morphicons consumes icon *data*, never components. Import glyphs from `@hugeicons/core-free-icons` (the free tier `[tag, attrs][]` node arrays on the 24×24 grid). Keep `@hugeicons/react` for static icons; both packages ship the same glyph data, so keep their versions aligned.
* **Bindings:** `morphicons/react`, `morphicons/vue`, `morphicons/svelte`, `morphicons/react-native`, `morphicons/astro`, the `<morph-icon>` element from `morphicons/element` for plain HTML, and `createMorph` from `morphicons/dom` for vanilla code.
* **Scope:** Applies to every icon that swaps glyphs in place: menu and close, play and pause, copy and copied, show and hide (`ViewIcon` and `ViewOffSlashIcon`), theme (`Sun03Icon` and `Moon02Icon`), disclosure chevrons, upload or download and done (`Tick02Icon`), and search and clear. A static icon that never changes needs nothing extra.
* **Spring:** Use `spring="smooth"` (critically damped, zero overshoot) by default and `spring="snappy"` for small press feedback. Never use `"bouncy"`; it breaks the restrained motion rules.
* **Reduced Motion:** Always pass `reducedMotion="user"`. Under `prefers-reduced-motion: reduce` the morph becomes an instant swap, so pair it with an opacity cross fade of 150ms or less on the icon wrapper, per Motion rule 5.
* **Stroke & Size:** Pass `size` (16, 20, or 24) and `strokeWidth={1.5}` so the morph matches the static Hugeicons weight. Color stays `currentColor`.
* **Accessibility:** morphicons renders `aria-hidden` by default. The control around the icon carries the name and state (`aria-label`, `aria-expanded`, `aria-pressed`). Pass `label` only for a standalone icon with meaning of its own.
* **Stable References:** Import icon data at module scope and pass the same reference every render. morphicons caches morph plans by reference.
* **Interruption:** A new target mid-flight re-plans from the current shape and keeps velocity, so rapid toggles stay continuous. Never block input while an icon morphs.

```tsx
import { MorphIcon } from "morphicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons"; // data, not components

<button
  type="button"
  aria-label={open ? "Close menu" : "Open menu"}
  aria-expanded={open}
  onClick={() => setOpen((o) => !o)}
  className="menu-trigger" /* 44×44px hit target */
>
  <MorphIcon
    icon={open ? Cancel01Icon : Menu01Icon}
    size={20}
    strokeWidth={1.5}
    spring="smooth"
    reducedMotion="user"
  />
</button>
```

---

## Layout and grid

- Max content width: 1120px, centered.
- Grid: 12 columns desktop, 6 tablet, 4 mobile, with 24px gutters.
- Reading measure: 60 to 70 characters per line for body copy.
- Side padding: 20px mobile, 40px tablet, 80px desktop.
- Responsiveness is a first-class requirement.

---

## Interaction philosophy

The interface should feel authored, not assembled from browser defaults or a generic component library. Native browser behavior may remain underneath for semantics, accessibility, form submission, keyboard handling, and OS integration, but the visible surface must belong to this design system.

### No exposed browser chrome (absolute)

**No browser default is ever visible.** Every element the page renders is custom-designed. There is no "reasonable to keep native" category: if the browser or a component library draws it by default, it is restyled or replaced before it ships.

This includes:

- `alert()`, `confirm()`, and `prompt()`
- browser-looking toast notifications
- unstyled `<select>` menus
- default dropdown menus and context menus
- default text inputs, search inputs, number steppers, checkboxes, radio buttons, switches, and range sliders
- browser date, time, color, and datetime pickers as the primary visible interaction
- default `<dialog>` styling
- default file input buttons
- generic browser tooltips from `title=""`
- default validation bubbles as the only form feedback
- native-looking popovers, comboboxes, command menus, pagination controls, tabs, accordions, and disclosure arrows
- default focus outlines with no system styling
- scrollbars of any kind (page, panels, menus, code blocks)
- `<details>` and `<summary>` disclosure markers
- `<progress>` and `<meter>` bars
- `<video>` and `<audio>` controls
- `<fieldset>`, `<legend>`, and `<hr>` default rendering
- search field clear buttons, number spinners, password reveal buttons, and `<datalist>` suggestion popups
- autofill background colors, the default caret, placeholder styling, and `::selection` highlighting
- the mobile tap highlight flash (`-webkit-tap-highlight-color`)
- default link underlines and visited colors
- default image broken-icon and alt rendering when an image fails
- browser-styled `<iframe>` and third-party embeds that cannot be themed (replace with a first-party presentation or a custom link)
- native permission prompts shown cold (always precede them with a custom explanation surface)
- the browser "Leave site?" dialog for in-app navigation (use a custom unsaved-changes dialog; keep `beforeunload` only for closing the tab)

**Semantics stay native underneath.** Use real `<button>`, `<input>`, `<select>`, `<dialog>`, and form elements (or full ARIA patterns) under the custom visuals, so keyboard, screen reader, autofill, and form behavior keep working. Custom means custom-looking, never less accessible.

**The only exceptions** are surfaces the page cannot draw: the address bar and browser frame, OS-level dialogs (print, file system, share sheet, permission dialogs), and the right-click menu on ordinary text. Do not disable or fake these. Where the product needs its own actions, offer them through a custom `OmMenu` alongside them.

Use semantic native elements wherever possible, then restyle or wrap them so the user sees a deliberate Om surface. Accessibility and keyboard behavior are never traded away for visual control. Before shipping, search the code for `alert(`, `confirm(`, `prompt(`, `title=`, unstyled `<select>`, `<input type="date"`, `<input type="file"`, `<progress`, `<details`, and `controls` on media elements.

### Custom interaction primitives

| Primitive | Behavior |
| --- | --- |
| `OmToast` | Quiet notification stack. Squircle surface, concise text, optional action, dismiss control. |
| `OmDialog` | Custom modal shell with strong hierarchy, focus trap, inert background, reduced-motion support. |
| `OmSheet` | Mobile-first bottom or edge sheet for secondary workflows. |
| `OmSelect` | Custom trigger + listbox. Searchable only when option count earns it. Full keyboard navigation. |
| `OmMenu` | Context/action menu with custom spacing, separators, icons, destructive states. |
| `OmCommand` | Keyboard-first command palette for dense tools. |
| `OmInput` | Text field family with labels, helper text, error state, prefix/suffix support. |
| `OmPicker` | Date/time/category picker using custom popover or sheet. |
| `OmTooltip` | Short explanatory surface. Never carries essential information. |
| `OmPopover` | Anchored floating surface matching menu/dialog physics. |
| `OmEmptyState` | Purposeful blank state with next action. |
| `OmSkeleton` | Structural loading placeholder matching final layout. |
| `OmProgress` | Determinate or meaningful progress only. |

### Overlay hierarchy

1. base content
2. sticky/floating navigation
3. anchored popovers, menus, tooltips
4. sheets and dialogs
5. critical interruption surfaces

Only one blocking layer should exist at a time. Do not stack dialogs.

### Focus and keyboard behavior

- `Esc` closes dismissible overlays.
- `Enter` activates the focused primary action.
- Arrow keys navigate menu, select, tab, and command items where appropriate.
- Focus returns to the trigger after an overlay closes.
- Focus rings use the accent color but remain thin and precise.
- Keyboard users must never need the mouse to discover an action.
- Hidden focusable elements are removed from the tab order.

---

## Composition system

Creativity in this system comes from **composition**, not ornament. Pages should not collapse into the same centered hero, three-card row, testimonial band, footer template.

### Editorial asymmetry

A section may place a large statement on one side and dense evidence on the other. The imbalance should feel intentional.

### Evidence rails

For research, projects, and technical writing, supporting metadata can sit in a narrow side rail: dates, versions, links, assumptions, reading time, stack, status, citations, coordinates, or build notes.

### Framed specimens

Show interfaces, diagrams, code, photos, and artifacts inside quiet framed surfaces. The frame separates evidence from narrative.

### Interruption moments

Long pages may use one or two visual interruptions:

- full-width quote
- oversized number
- diagram
- narrow timeline
- before/after comparison
- code excerpt
- image with compact technical caption

### Density shifts

Reading sections can be calm and spacious; technical sections denser; conclusions open up again. Density is a narrative tool.

### Controlled overlap

Small overlaps are allowed when they communicate hierarchy. Never use overlap merely to look “designed.”

---

## Creative direction rules

### What makes a page feel “Om”

A strong page usually contains several of these:

- one decisive opening statement
- a quiet technical detail nearby
- one unusual but useful composition choice
- mono metadata used as evidence
- a visual artifact that proves the work exists
- a restrained signal-color moment
- generous negative space around the strongest idea
- a small human detail preventing sterility
- custom interaction surfaces that feel engineered rather than themed
- a closing detail that echoes the opening idea

### What to avoid

- endless glassmorphism
- gradient blobs
- glowing borders
- giant animated cursors
- fake terminal windows used only as decoration
- random marquee text
- every section entering on scroll
- bento grids without content logic
- meaningless abstract 3D objects
- developer portfolio icon clouds
- excessive badge collections
- stacked cards where plain text would communicate better
- putting everything inside containers
- using orange everywhere because it is the accent
- pill badges with pulsing dots, announcement pills above headlines, uppercase eyebrow labels on every section, gradient text
- Zombie UI: generic AI-default layouts that would survive swapping in another product's logo and copy (see `intentional-craft.md` and its Generic Pattern Catalog, which is banned in full)

Boldness should come from scale, cropping, hierarchy, contrast, unusual information arrangement, or strong imagery.

---

## Input and form system

Forms should feel like part of the product, not a browser form dropped into the product.

### Field anatomy

Every field can contain label, optional/required state, control, helper text, validation feedback, and metadata. Add only what reduces uncertainty.

### Text inputs

- Minimum height: 44px desktop, 48px touch-heavy mobile flows.
- Internal horizontal padding: 14 to 16px.
- Background: `bg-secondary` or transparent depending on context.
- Border: subtle at rest, default on hover, accent on focus.
- Placeholder text uses `text-tertiary`; never rely on placeholder as the label.
- Error state uses an icon or label plus `error`, never red border alone.
- Textareas grow naturally until a sensible max height, then scroll internally.

### Search

Search is an interaction mode, not just an input. It may include recent queries, suggested scopes, keyboard hints, result counts, highlighted matches, zero-result recovery, and filters when justified.

### Selects and comboboxes

Use custom listbox/combobox UI. Selected values remain visible, active states are distinct, long lists gain search, and mobile may convert the popover into a bottom sheet.

### Checkboxes, radios, switches

All are custom-styled but backed by semantic inputs. Checkbox means multi-select, radio means one-of-many, switch means immediate binary state. Do not use switches for actions that still require a Save button.

### File upload

Never expose the default browser file button as the primary interface. Use a custom drop zone or upload button with accepted format, size limit, progress, filename, replacement, cancellation, and clear failure reasons.

---

## Feedback and status system

Feedback should be proportional to the action.

### Inline feedback

Use for validation, save state, small failures, and local changes. Examples: `Saved 14:32`, `Slug is already in use`, `3 files uploaded`, `Build queued`.

### Toasts

Use custom toasts for transient confirmation when the user does not need to make a decision.

- 1 to 2 lines by default
- 4 seconds for passive success
- persistent only when action is required
- destructive undo may remain 6 to 8 seconds
- maximum three visible at once
- no generic “Success!” heading unless useful

### Dialogs

Use dialogs only when leaving the current context would create a mistake, ambiguity, or expensive detour. A dialog should have a concrete title, short explanation, one primary decision, and one escape path.

### Destructive actions

Use the error color only at the point of commitment. For high-cost deletion use typed confirmation, explicit item naming, or staged deletion with recovery. Never ask only “Are you sure?”

---

## Navigation patterns beyond the island

The island is the signature top-level pattern, but internal navigation can vary.

### Section index

Long research or technical pages can expose a compact section index. It may become sticky on desktop and collapse into a custom sheet on mobile.

### Breadcrumbs

Use breadcrumbs only when there is genuine hierarchy. Render them in Relative Mono or small Sans, with slash separators.

### Local tabs

Tabs are for alternate views of the same object, not global navigation. Use a shared-layout active marker and preserve URL state when linkable.

### Pagination

Prefer explicit previous/next navigation for writing and research. Infinite scroll is only appropriate when there is no meaningful concept of completion.

---

## Data display

### Tables

- use real tables for tabular data
- sticky header only when long
- right-align numeric columns
- use tabular numerals
- keep row separators subtle
- support horizontal scrolling on narrow screens
- use custom column controls when configurable

### Metrics

Metrics need context. Prefer `42 ms` with `p95 latency · Tokyo edge · v0.8.2` over an unexplained large `42`.

### Charts

- minimal axes
- direct labels where possible
- no decorative gradients
- accent highlights one series or decisive datum
- secondary series recede into neutrals
- important charts include an accessible text summary

---

## Imagery and visual evidence

Images either prove, explain, document, or humanize.

### Photography

Photography may break the grid more aggressively than UI screenshots. Let images crop decisively.

### Screenshots

Screenshots should be clean, current, and legible. Crop browser chrome unless browser context matters. Use captions to explain what the viewer should notice.

### Diagrams

Prefer mono labels, thin neutral strokes, small status dots, restrained arrows, compact legends, and no generic architecture icon soup unless icons encode real services.

### Decorative graphics

Allowed only when they deepen identity. Pixel marks, subtle grids, coordinates, waveform-like traces, build timestamps, tiny maps, or structural patterns can work if tied to content.

---

## Responsive behavior in detail

Responsive design is recomposition, not shrinking.

### Everything is responsive (absolute)

Every page, component, state, overlay, animation, Raster element, frame, image, table, and piece of copy works at every width, on every input type, at every text size. There is no "desktop only" element and no width where the layout is merely tolerated.

**Required range and checks:**

- **Widths:** every width from 320px to 2560px, checked continuously by resizing, with explicit checks at 320, 360, 390, 430, 768, 1024, 1280, 1440, 1920, and 2560.
- **Zoom and text size:** content reflows without loss or horizontal scrolling at 400% browser zoom (a 320px equivalent) and with text enlarged to 200%.
- **Orientation:** portrait and landscape on phones and tablets, including short landscape heights (around 360px tall).
- **Input:** touch (`hover: none`, `pointer: coarse`), mouse, trackpad, keyboard, and stylus. Nothing essential depends on hover.
- **Viewport units:** use `dvh`/`svh` for full-height surfaces so mobile browser toolbars never cut content; respect `env(safe-area-inset-*)` for notches and home indicators; floating controls avoid the on-screen keyboard.

**How:**

- **Fluid by default.** Type, spacing, and radii use `clamp()` between their small and large values, so there are no jumps between breakpoints.
- **Components respond to their container.** Use container queries for components that appear in different column widths, so a card behaves correctly in a sidebar and in a full row.
- **Recompose, do not shrink.** Change structure (stack, reorder, collapse rails into inline metadata, turn popovers into sheets) rather than scaling everything down.
- **Images and media.** Serve `srcset`/`sizes` and art-directed crops per width; set aspect ratios so nothing shifts on load.
- **Tables and dense data.** Choose a strategy per table: priority columns, stacked rows, or contained horizontal scroll with a visible edge cue. Never let a table widen the page.
- **Motion adapts.** Travel distances shrink on small screens; hover-driven motion has a tap or focus equivalent; heavy effects scale down on low-power devices.
- **Copy fits.** Labels are tested at their longest realistic length at 320px; nothing truncates essential meaning. Truncation, where used, shows the full text on focus or in a sheet.
- **Overlays.** Menus, selects, pickers, and dialogs become sheets on narrow screens when their desktop form would not fit; they never extend past the viewport.

### Desktop

- 12-column grid
- asymmetry and side rails encouraged
- hover may reveal secondary controls
- dense technical views may use split panes

### Tablet

- collapse side rails into inline metadata
- reduce large negative spaces before reducing type
- preserve island footprint
- dialogs may become wider sheets

### Mobile

- 4-column grid
- 20px side padding
- minimum 44px touch targets
- no hover-dependent information
- menus, selects, filters, and secondary workflows may become custom bottom sheets
- large tables may scroll horizontally
- hero text rewraps naturally
- floating controls respect safe areas and the keyboard

### Very narrow layouts

Identity remains readable, decorative metadata may disappear, essential labels do not become obscure icon-only controls, and overlays may become nearly full-screen sheets.

---

## Micro-interactions

Useful examples:

- button compresses 1px to 2px on press
- copied value changes label to `Copied` briefly
- menu item checkmark morphs in
- island active marker slides rather than flashes
- drag target changes surface depth when an item enters
- upload row transitions from progress to completion
- saved timestamp fades from accent to tertiary text

Avoid bounce everywhere, elastic text, looping gradients, random rotations, exaggerated springs, and motion that delays navigation.

---

## Loading states

For actions under roughly 300ms, do not flash a loader. Short waits use inline status text or temporary button state. Structural loading uses skeletons only when final structure is known. Long operations show what is happening, whether the user can leave, real progress when available, latest known state, and retry/cancel when supported. Never fake percentages.

---

## Empty, error, and offline states

Empty states explain why the space is empty and offer the next useful action.

Errors answer:

1. What failed?
2. What was preserved?
3. What can the user do now?

Do not expose stack traces or vendor error strings in primary UI.

If offline behavior is supported, make status explicit but quiet and queue recoverable actions where possible.

---

## Iconography

- prefer simple stroke or geometric icons
- keep one icon family per project
- 16px dense UI, 18–20px common controls, 24px standalone actions
- labels stay visible for uncommon actions
- destructive actions do not rely on a trash icon alone
- do not decorate every heading with an icon

---

## Scroll and overflow

- do not hijack body scrolling
- avoid scroll-jacking
- horizontal scrolling must be discoverable
- scrollbars are always custom-styled: thin, using border and text tokens, matched to light and dark mode; never hidden on content that scrolls
- sticky elements must not trap content
- anchor navigation accounts for the floating island
- mobile sheets lock background scrolling correctly

---

## Selection, copy, and context actions

Text selection remains useful and is styled with `::selection` using the accent at low opacity. Applications needing richer context actions use a custom `OmMenu` triggered explicitly or by right click while preserving expected copy/paste behavior. Do not disable browser context menus globally.

---

## Theming

Dark mode is the default expression, but light mode is equally designed.

- never simply invert colors
- preserve surface hierarchy
- images should not become glaring in dark mode
- code themes match current mode
- avoid third-party widgets that cannot visually integrate
- system preference may initialize the theme, but users can override with a custom-designed control
- persist user choice

Theme controls use a custom menu, segmented control, or command action. Never expose a browser-looking select.

---

## Components

### Navigation: the island

The signature Om pattern. A floating, pill-squircle capsule fixed near the top center of the viewport, clear of the page edge. It never runs full width and never sits flush against the top.

**Structure:**

```
[ avatar / site name ]        [ link link link ]
```

The avatar and site name form one identity cluster separated by a slash. Nav links form their own cluster inside the same capsule.

```html
<nav class="om-island">
  <a href="/" class="om-island__identity">
    <img src="https://in1.omcdn.xyz/static/identity/om-avatar.png" alt="Om Rajguru" width="26" height="26" />
    <span class="om-island__divider">/</span>
    <span class="om-island__site">projects</span>
  </a>
  <div class="om-island__links">
    <a href="/writing">Writing</a>
    <a href="/projects">Projects</a>
    <a href="/about">About</a>
  </div>
</nav>
```

```css
.om-island {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 8px 10px 8px 12px;
  background: color-mix(in srgb, var(--bg-secondary) 82%, transparent);
  backdrop-filter: blur(18px);
  border: 1px solid var(--border-subtle);
  border-radius: 9999px;
  corner-shape: squircle;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
  z-index: 50;
}
```

**Motion:** the island may reshape in response to scroll position or active-link changes, never as ambient animation. Active markers use shared-layout transitions rather than hard swaps.

**Responsive behavior:** on narrow viewports the link cluster collapses into a custom menu glyph inside the same capsule. It remains floating and centered.

### Buttons

One primary action per view, solid accent fill. Secondary actions stay outlined and quiet.

```css
.btn-primary {
  background: var(--accent);
  color: #fff;
  font-family: 'Relative Sans';
  font-weight: 500;
  font-size: 14px;
  height: 40px;
  padding: 0 18px;
  border-radius: 10px;
  border: none;
}
.btn-primary:hover { background: var(--accent-hover); }

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-default);
  border-radius: 10px;
  height: 40px;
  padding: 0 18px;
}
```

### Cards

Flat by default, border over shadow on dark surfaces, subtle lift on hover.

```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  padding: 24px;
  transition: border-color 150ms ease, background 150ms ease;
}
.card:hover {
  border-color: var(--border-default);
  background: var(--bg-tertiary);
}
```

### Code and technical blocks

```css
.code-block {
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  padding: 20px 22px;
  font-family: 'Relative Mono';
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-primary);
  overflow-x: auto;
}
```

### Footer breadcrumb

The footer echoes the navbar's avatar/slash/site-name identity cluster in miniature and stays quiet and unbordered except for the page-level top separator.

### System diagrams

Favor labeled structural diagrams over decorative illustration when explaining builds. A diagram earns its place when it makes a relationship faster to understand than a paragraph.

---

## Page archetypes

### Home / personal index

Purpose: orientation. Use one strong current statement, compact mono state, selected work, recent writing/research, one human note, and an understated path to everything else.

### Writing article

Purpose: sustained reading. Use title, lede, date/metadata, 60–70 character reading measure, optional margin notes, strong typography, footnotes/references, and previous/next navigation.

### Project case study

Purpose: show the system and decisions behind a build.

`Problem → Constraint → System → Build → Evidence → Tradeoffs → Next`

Include diagrams, screenshots, real metrics, code excerpts, and failure notes where relevant.

### Research note

Purpose: make thinking inspectable. Useful ingredients include question, current conclusion, confidence/status, method, evidence, counterarguments, unresolved questions, sources, and revision history.

### Tool / application UI

Purpose: execution. Use stronger state hierarchy, custom primitives, command palette where useful, keyboard shortcuts, compact spacing, persistent save/status feedback, and robust empty/error/loading states.

---

## Quality bar

### Intent

- Is there a written point of view (For / Believe / Refuse), and do the decisions trace to it?
- Does the surface fail the swap test, so it could not belong to any other product?
- Is the work actually done, or does it only look done? Are unverified items listed?
- Was an Editor's Pass run after building?

### Identity

- Would this still look like an Om surface without the logo or avatar?
- Is there one intentional compositional decision?
- Is the accent actually scarce?

### Content

- Does the strongest idea appear early?
- Are claims supported where appropriate?
- Is any section present only because sites usually have one?

### Interaction

- Is any browser or library default visible anywhere, including scrollbars, selection, autofill, media controls, and disclosure markers?
- Does every change animate, with exits as well as enters, interruptible, and with a reduced-motion alternative?
- Are all visible menus, dialogs, inputs, pickers, toasts, and overlays custom-designed?
- Does every interaction work by keyboard?
- Does focus return correctly?
- Are loading, empty, success, and error states designed?
- Does mobile use custom sheets/popovers instead of broken desktop dropdowns?
- Does every element work from 320px to 2560px, at 400% zoom, with 200% text, in landscape, and with touch only?

### Visual craft

- Are the invisible details finished: concentric radii, optical centering, one light source for shadows, themed selection and focus?
- Is spacing relational rather than repetitive?
- Are radii consistent?
- Are type weights restrained?
- Are screenshots legible?
- Are borders structural?
- Is motion explaining state?

### Accessibility

- WCAG AA contrast
- semantic landmarks
- logical heading order
- touch targets at least 44px where touch is expected
- reduced-motion support
- no color-only meaning
- useful alt text
- no essential hover-only content

### Performance

- fonts loaded efficiently
- media correctly sized and lazy-loaded below the fold
- no animation library for effects CSS can handle
- no massive client bundle merely for component polish
- overlays and menus do not trigger layout shifts

---

## Motion

Every change on screen is animated. Motion explains the change or confirms the action, then stops. Nothing appears, disappears, moves, resizes, or changes value with a hard cut.

```
state changes:        120ms ease
hover / focus:        150ms ease-out
page transitions:     200ms ease-out
loading indicators:   respect prefers-reduced-motion, always
```

Skip auto-playing loops, parallax, and repetitive scroll-triggered reveals. These are not state changes; they are decoration, and the Generic Pattern Catalog bans them.

### Everything animates

**Emil Kowalski's `animate` and `apple-design` skills decide how each animation is timed, eased, and choreographed.** This section decides what must animate: all of it.

| Change | Required motion |
| --- | --- |
| Hover, press, focus | Color, border, and shadow transition; 1px to 2px press compression or scale near 0.98; focus ring eases in |
| Toggles, checkboxes, radios, switches | Thumb slides, check draws or morphs, fill transitions |
| Menus, selects, popovers, tooltips | Scale and fade from the trigger's origin on enter and exit |
| Dialogs and sheets | Enter and exit with direction; backdrop fades; exit is animated, never removed instantly |
| Toasts | Enter, stack reflow, and exit all animated |
| Tabs and segmented controls | Active indicator moves with a shared-layout transition |
| Accordions and disclosures | Height and content animate; chevron rotates |
| Lists | Insert, remove, reorder, sort, and filter animate (FLIP or layout animation) |
| Route and page changes | View Transitions or shared-element transitions; persistent elements stay in place |
| Loading to content | Skeleton cross-fades into the final layout with no shift |
| Images | Fade in on load; halftone or blurred placeholder resolves (no pop-in) |
| Value changes | Changing numbers roll or cross-fade digit by digit; progress bars ease to the new value |
| Text and label changes | Button labels such as `Copy` to `Copied` cross-fade; width changes animate |
| Icon swaps | Cross-fade or morph between glyphs |
| Validation and errors | Messages enter with height animation; no violent shaking |
| Theme switch | Colors transition together, or with a View Transition; no flash |
| Layout changes | Any element that moves because something else changed animates to its new position |
| Drag | Picked-up item lifts; drop target responds; release settles |
| Scroll to anchor | Smooth scroll that accounts for the floating island |

**Rules:**

1. **Exits too.** Every enter has a matching exit. Unmounting without an exit animation is a defect.
2. **Interruptible.** Input always wins. A new interaction redirects motion from its current state instead of waiting or jumping.
3. **Frequency sets duration.** Rare, significant transitions take longer (200ms to 400ms). Frequent, keyboard-driven actions (command palette, list navigation) use the shortest motion that still reads, opacity or a few pixels in under 100ms, following Emil Kowalski's guidance for high-frequency interactions.
4. **Never delays the person.** Content is usable while it animates. No animation blocks input or navigation.
5. **Reduced motion is still motion, without travel.** Under `prefers-reduced-motion: reduce`, remove movement, scale, and parallax, and replace them with brief opacity cross-fades of 150ms or less, so changes are still visible without spatial motion. Follow `hig-compliance-auditor.md`.
6. **Compositor-friendly.** Animate `transform`, `opacity`, `clip-path`, and `filter` where possible. Measure for dropped frames.

### Animation and HIG Compliance Requirements

When designing, implementing, or substantially modifying animations, transitions, gestures, or interaction choreography:

1. **Compulsory Animation Skills:** You must install and apply the `animate` skill and `apple-design` skill from Emil Kowalski:
   ```bash
   npx skills add emilkowalski/skills --skill animate apple-design -y
   ```
   Apply their principles across the entire interaction: entrances, exits, layout shifts, state changes, gesture tracking, interruption, reduced-motion fallbacks, and physical spring dynamics adapted for web.
2. **Compulsory HIG Compliance Auditing:** You must install and apply Om's `hig-compliance-auditor` skill:
   ```bash
   npx skills add omrajguru05/hig-compliance-auditor -y
   ```
   Audit all interaction patterns, touch targets, accessibility, visual hierarchy, typography, and motion against Apple Human Interface Guidelines standards translated for web.

---

## Voice and copy guide

- Headings state the idea plainly.
- Explain reasoning alongside outcome.
- Captions and footnotes hold caveats, open questions, and honest limits.
- Numerals stay as numerals. Curly quotes throughout.
- Buttons use verb plus noun: `Read the build`, `View source`, `Start here`.
- Avoid hype adjectives and empty enthusiasm. Confidence comes from clarity and evidence.

---

## Accessibility

Semantic HTML throughout: landmarks, one `h1` per page, ordered headings, visible focus states, alt text, and full keyboard reachability. Meet WCAG AA contrast in both themes. Color alone never carries meaning.

See [references/hig-compliance-auditor.md](./references/hig-compliance-auditor.md) for the universal Apple HIG compliance framework, the Grandma Test (brutal simplicity), and comprehensive standards across all six disability domains (Vision, Hearing, Mobility, Speech, Cognitive, Motion).

---

## Reference: CSS variables

```css
:root {
  --bg-primary: #000000;
  --bg-secondary: #0a0a0a;
  --bg-tertiary: #121212;
  --border-subtle: #1c1c1c;
  --border-default: #2a2a2a;
  --border-strong: #3d3d3d;
  --text-primary: #f0f0f0;
  --text-secondary: #9a9a9a;
  --text-tertiary: #636363;
  --accent: #ff5a1f;
  --accent-hover: #ff7a45;
  --success: #00b34a;
  --warning: #ffab00;
  --error: #f0384a;
  --info: #3399ff;
  --font-sans: 'Relative Sans', -apple-system, sans-serif;
  --font-rounded: 'Relative Rounded', sans-serif;
  --font-mono: 'Relative Mono', 'Fira Code', monospace;
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 80px;
  --control-h-sm: 36px;
  --control-h-md: 40px;
  --control-h-lg: 48px;
  --shadow-float: 0 12px 34px rgba(0, 0, 0, 0.32);
  --shadow-dialog: 0 24px 80px rgba(0, 0, 0, 0.46);
  --motion-fast: 120ms;
  --motion-ui: 150ms;
  --motion-page: 200ms;
  --motion-spring: 260ms cubic-bezier(0.34, 1.56, 0.64, 1);
  --focus-ring: 0 0 0 3px color-mix(in srgb, var(--accent) 32%, transparent);
}

[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #fafafa;
  --bg-tertiary: #f2f2f2;
  --border-subtle: #e9e9e9;
  --border-default: #d6d6d6;
  --border-strong: #b8b8b8;
  --text-primary: #121212;
  --text-secondary: #565656;
  --text-tertiary: #8f8f8f;
  --accent: #d84515;
  --accent-hover: #b8390f;
  --success: #0a8a3d;
  --warning: #b9740a;
  --error: #c62233;
  --info: #0b6fc9;
}
```

---

## Asset handling summary

| Asset type | Handling |
| --- | --- |
| Avatars, memoji variants | Hotlink directly from `omcdn.xyz` |
| Fonts | Download and self-host with `@font-face` |
| Favicon pack | Download, extract, serve locally from site root |
| OG image | Download and self-host unless a project brief provides its own |
| Family / personal photos | Restricted; explicit permission required per use |

---

## Implementation rules for agents and collaborators

When this file is used as a build instruction, treat these as hard requirements.

1. **Do not substitute generic design-system defaults.** If a component library is used underneath, restyle it until the visual result belongs to this system.
2. **Never expose any default browser UI, without exception** for toasts, dialogs, selects, menus, inputs, file controls, date/time pickers, tooltips, validation, scrollbars, selection, autofill, media controls, progress, disclosure markers, or anything else the page renders. Only surfaces the page cannot draw (browser frame, OS dialogs, the native text context menu) are exempt.
3. **Prefer semantic HTML underneath custom visuals.** Custom does not mean inaccessible.
4. **Do not invent extra accent colors.** Neutrals carry the layout; orange signals importance.
5. **Do not make every section a card.** Text may live directly on the canvas.
6. **Do not make every page use the same layout.** Preserve the language, vary the composition.
7. **Do not animate content merely because it enters the viewport.** Viewport entry is not a state change. Every actual state change does animate (rule 25).
8. **Do not add gradients, glows, glass effects, or decorative noise without a content reason.**
9. **Do not hide complexity by removing useful information.** Organize it.
10. **Do not create fake technical decoration.** Timestamps, logs, metrics, diagrams, terminal excerpts, and metadata must be meaningful.
11. **Design all component states:** default, hover, focus, active, pressed, disabled, loading, success, error, and empty where relevant.
12. **Design mobile behavior at the same time as desktop behavior, and treat responsiveness as absolute** (see "Everything is responsive"). Popovers may become sheets; dense rows may recompose; essential actions remain reachable.
13. **Use custom confirmation and feedback patterns** rather than `alert()`, `confirm()`, `prompt()`, or browser validation bubbles.
14. **Keep third-party embeds visually subordinate.** If an embed cannot integrate, prefer a custom link or first-party presentation.
15. **When uncertain, reduce decoration before reducing information.**
16. **Mandatory motion and HIG tooling:** For all animations, transitions, gestures, and fluid motion, you must install and follow Emil Kowalski's `animate` and `apple-design` skills (`npx skills add emilkowalski/skills --skill animate apple-design -y`), and audit compliance using Om's `hig-compliance-auditor` (`npx skills add omrajguru05/hig-compliance-auditor -y`).
17. **Apply interface design judgment:** Follow `interface-design-judgment` for separating visual size from interactive touch boundaries (44×44px minimum), preferring perceptual over numeric consistency, practicing affordance hygiene (eliminating repeated cognitive clutter), preserving navigation state continuity, and keeping render state deterministic.
18. **Strict placeholder and mock data standards:** For all calendar components, time displays, form placeholders, preview datasets, and demo interfaces: date numbers must be **17** (or full date **17 December 2022** or **26 May 2008**); time must be **17:00**; phone numbers must never be US (+1) and must strictly be Indian (+91) or Japanese (+81) format containing both **26** and **17** (e.g. `+91 98261 70000` or `+81 90-2617-0000`).
19. **Mandatory pre-implementation audit and plan:** Never write or modify UI code without first completing a system audit and delivering a simple before-and-after implementation plan following `audit-and-plan.md`.
20. **Professional codebase naming:** Follow `codebase-naming.md` across all UI components, state, hooks, types, files, and CMS schemas. Name abstractions by semantic concept and responsibility, never by transient visual styling, marketing copy, or framework details.
21. **Standard iconography (Hugeicons & Apple HIG):** Use the free tier of Hugeicons (`@hugeicons/react`). Keep icons clean, minimal, optically balanced, and strictly aligned to Apple Human Interface Guidelines. For search, always use the Apple Finder / magnifying glass style glyph. Keep icons monochrome by default, and ensure all interactive icon buttons provide at least 44×44px touch targets. Every icon that changes state morphs with morphicons (`npm install morphicons`), fed by `@hugeicons/core-free-icons` data, with `spring="smooth"` and `reducedMotion="user"`.
22. **Apple HIG, Brutal Simplicity & Universal Accessibility (`hig-compliance-auditor.md`):** Strictly follow the Grandma Test and universal accessibility principles in `references/hig-compliance-auditor.md`. The UI must be brutally simple: zero technical jargon, one obvious primary action per screen, and zero visual clutter. Multi-step computational complexity must be absorbed by the underlying backend architecture. Enforce accessibility across all six domains (Vision with Dynamic Type and 4.5:1+ contrast, Hearing with text alternatives, Mobility with 44×44px touch targets and keyboard reachability, Speech, Cognitive with streamlined single-path tasks, and Motion with `prefers-reduced-motion: reduce`).
23. **Intentional craft (`intentional-craft.md`):** Avoid Zombie UI (run the swap test). Reject premature completion (the Burrito Dilemma): a surface is done only when the stated problem is solved and verified, every state exists, and unverified items are listed. Design from a written point of view. Practice Pepsi Bubbling by finishing details one level below what the person consciously sees. Design the system, not the screen: tokens before values, flows before frames, and encode repeated corrections into checks. Run an Editor's Pass after every build. Offer one ceiling-raising option beside the dependable path, and protect labelled experiments while keeping them off the primary task path.
24. **Raster is opt-in (`raster-language.md`):** Never apply Raster unless the user or brief asks for it. Adopt it only through its five-stage flow (research, prototype options, edge cases and bugs, approval, wire in). When active, follow its activation scope, palettes, raster budget, Geist Pixel type rules, and accessibility rules, and derive new treatments from its grammar instead of copying the reference examples.
25. **Everything animates:** Every change on screen (hover, press, focus, open, close, enter, exit, insert, remove, reorder, route, load, value, label, icon, theme, layout) is animated, timed and eased with Emil Kowalski's `animate` and `apple-design` skills, interruptible, and given a reduced-motion alternative without spatial travel. A hard cut anywhere is a defect.
26. **Exacting detail standard (`intentional-craft.md` section 9):** Every surface, state, word, pixel, and millisecond is finished, including the ones rarely seen. Run the inspection passes before delivery. "Good enough" is not a status; work is either verified or listed as unverified.
27. **Everything is responsive:** Every page, component, state, overlay, animation, Raster element, frame, image, table, and line of copy works at every width from 320px to 2560px, at 400% zoom and 200% text, in both orientations, and with touch, mouse, and keyboard. Use fluid `clamp()` values, container queries, dynamic viewport units, and safe-area insets, and recompose layouts instead of shrinking them.

---

## Optional extension: Raster

Raster (`raster-language.md`) is an optional extension of this design language. It adds fields (mesh, tonal, radial, and stepped gradients), samplers (stipple, dot matrix, pixel sprites, glyph fields), lines (Geist Pixel Line type with construction guides), and frames (the boxed layout: rails, full-width rules, nodes, and shared-edge cells), plus a grammar for deriving new treatments. Each family can be activated on its own.

- **Adopted through a gated flow.** Research existing, show several running prototype options, check UI edge cases and bugs (`ui-edge-cases.md`), get explicit approval, and only then wire it into production.
- **Off by default.** Use it only when the user or brief asks for Raster or for an expressive Om surface (hero, project covers, research visuals, 404, loading, Open Graph images).
- **Additive.** Every rule in this file still applies. Raster's gradients, grain, dot lattices, and framed layouts are permitted only in the forms `raster-language.md` defines; outside Raster, the "What to avoid" list above stands.
- **Crisp content, sampled atmosphere.** Reading text, controls, and data stay in the base typefaces.

---

## Closing note

Every site under this system should feel like a single mind built it with patience: structural, honest about tradeoffs, oriented toward the future it is building. Precision is the aesthetic. Depth is the differentiator.

---

# Part 2: Product & Interface Writing Voice

# Om: Product & Interface Writing Voice

This guide defines how to write website copy, product copy, interface text, labels, buttons, settings, onboarding, empty states, errors, feature descriptions, confirmations, and other short-form product language in Om's voice.

The objective is to make interfaces feel clear, considered, humane, and occasionally delightful without allowing personality to interfere with usability.

Product writing is not marketing. Its first responsibility is helping someone understand what they are seeing, what it does, and what they can do next.

---

#### 1. Introduction and Philosophy

* **The "Why":** Language is part of the interface. A confusing label is a usability problem in much the same way as a confusing button or layout. Good product copy should make the interface easier to understand without making people stop to admire the writing.

* **Who It’s For:** This guide is for any person or agent writing, rewriting, reviewing, or generating copy for Om's websites, applications, products, experiments, and interfaces.

* **The Central Principle:** Clarity first. Grace second. Personality third. Cleverness almost never.

* **Respect the Person's Time:** Product copy should get to the point immediately. Do not introduce an action when the action itself can simply be named.

* **Let the Interface Teach Itself:** Do not explain everything in advance. Give people the information they need at the moment they need it. Labels, descriptions, placeholders, empty states, and errors should gradually make the product understandable through use.

* **No Filler or Pseudo Labels:** Do not add useless filler labels, pseudo labels, redundant category tags, or placeholder-style headings that merely describe what the interface already makes obvious. Every label must carry genuine informational or functional weight.

* **Do Not Market Inside the Product:** Someone already using a feature does not need to be persuaded that it is powerful, delightful, revolutionary, seamless, or innovative. Explain what it does.

* **Personality Is Contextual:** The more consequential an action becomes, the less personality the copy should contain. A homepage introduction may carry some elegance. A destructive confirmation should be almost entirely functional.

* **Never Make the Interface Perform:** Do not manufacture excitement, humour, wonder, drama, or sentiment around ordinary actions.

* **Do Not Talk Down to People:** The interface should never scold, blame, patronise, or make someone feel foolish for making a mistake.

* **Grace Should Never Cost Understanding:** Elegant language is welcome only when it remains immediately understandable.

---

#### 2. Brand Voice (The Permanent Identity)

The permanent product voice is **clear, restrained, humane, graceful, direct, and considerate.**

##### Clear

**What it sounds like:**

* Familiar words.
* Obvious actions.
* Specific descriptions.
* Important information first.
* Enough context to understand what happens next.
* Fewer words when fewer words communicate the same thing.

**What it does NOT sound like:**

* Clever for its own sake.
* Ambiguous.
* Abstract.
* Filled with unnecessary terminology.
* Written to demonstrate vocabulary.

Prefer:

> Upload file

over:

> Bring something new in

Prefer:

> Search writings

over:

> Find something interesting

The interface should rarely make someone interpret what a label means.

##### Restrained

**What it sounds like:**

* Calm.
* Matter-of-fact.
* Comfortable leaving simple actions simple.
* Selective about when personality appears.
* Appropriate to the importance of the moment.

**What it does NOT sound like:**

* Excitable.
* Overfriendly.
* Promotional.
* Loud.
* Constantly congratulatory.
* Full of exclamation marks.
* Desperate to appear human.

Saving a setting does not require a celebration.

Prefer:

> Changes saved.

over:

> Amazing! Your changes are all saved! 🎉

##### Humane

**What it sounds like:**

* Written for a person rather than a "user."
* Helpful when something goes wrong.
* Understanding without pretending to have emotions.
* Natural rather than robotic.
* Respectful of different levels of technical knowledge.

**What it does NOT sound like:**

* Condescending.
* Blaming.
* Scolding.
* Artificially sympathetic.
* Robotic.

Prefer:

> Choose a password with at least 8 characters.

over:

> Invalid password.

And certainly over:

> You entered an invalid password.

##### Graceful

**What it sounds like:**

Grace appears selectively through natural, cultivated vocabulary and well-shaped sentences.

Descriptions may use words such as:

* rather
* perhaps
* familiar
* considered
* deliberate
* particular
* useful
* sensible
* available
* recent
* related
* worthwhile
* return
* remain
* continue
* occasionally

Use these only when they improve the sentence.

**What it does NOT sound like:**

* Poetic.
* Cinematic.
* Mysterious.
* Artificially profound.
* Dreamy at the expense of meaning.
* Filled with metaphors.

Product writing may be elegant. It should never become literature merely because there is space available.

##### Direct

**What it sounds like:**

> Delete file

> Save changes

> Add article

> Unable to load content.

> This file is larger than 5 GB.

**What it does NOT sound like:**

> Let's make it happen.

> Ready when you are.

> Say goodbye to this file.

> Something seems to have gone a little sideways.

Say what happened. Say what can happen next.

##### Considerate

The interface should anticipate what someone reasonably needs to know.

If deleting something is permanent, say so.

If an upload failed because of size, state the allowed size.

If a setting changes something elsewhere, explain what changes.

Do not force people to discover important consequences through experimentation.

---

#### 3. Tone and Context (The Flexible Application)

The voice remains consistent, but the amount of personality changes considerably by context.

##### Level 1: Functional Copy

Includes:

* buttons
* navigation
* form labels
* menus
* settings names
* destructive actions
* confirmations
* errors
* warnings

Personality should be minimal.

Optimise almost entirely for clarity.

Examples:

> Save changes

> Delete entry

> Upload file

> Search writings

> Try again

> Continue

> Done

> Email address

Do not make these labels distinctive merely for the sake of brand voice.

Do not add useless filler labels or pseudo labels. Avoid arbitrary category badges, decorative tag pills, or metadata labels that state what is already obvious from the layout or content.

##### Level 2: Explanatory Copy

Includes:

* helper text
* setting descriptions
* feature descriptions
* onboarding
* tooltips
* form guidance
* contextual explanations

Bring in more of Om's natural voice.

Explain enough to remove uncertainty without writing documentation inside the interface.

Example:

> Labels give you another way to organise files without changing where they are stored. Removing a label does not affect the file itself.

The copy teaches naturally without announcing that it is teaching.

##### Level 3: Expressive Copy

Includes:

* homepage introductions
* editorial surfaces
* product introductions
* empty states
* occasional descriptive text
* personal website sections

This is where the graceful side of the voice may appear more clearly.

Example:

> Things I have worked on, from small experiments to projects that took considerably longer than expected.

Or:

> Your first entry can be as long or as brief as you like.

Even here, remain restrained.

##### Errors and Problems

Become calmer and more functional when something goes wrong.

State:

1. what happened,
2. why, when useful and known,
3. what the person can do next.

Never use humour to soften an error.

Never write:

> Oops!

> Uh-oh!

> Well, this is awkward.

> Something went sideways.

Prefer:

> The file could not be uploaded. Check your connection and try again.

##### Destructive Actions

Use almost no personality.

State the object, consequence, and permanence.

> **Delete this entry?**

> This will permanently delete the entry. This cannot be undone.

> **Cancel** · **Delete entry**

Do not become clever, sentimental, or overly conversational.

##### Success States

Match the amount of celebration to the significance of the action.

Saving a setting:

> Changes saved.

Uploading a file:

> Upload complete.

Publishing an article:

> Published. The article is now available on your website.

Do not congratulate people for routine interactions.

---

#### 4. Vocabulary and Lexicon (The Words We Use)

##### Preferred Action Language

Use direct verbs:

* Add
* Save
* Delete
* Remove
* Upload
* Download
* Read
* View
* Open
* Search
* Edit
* Publish
* Continue
* Cancel
* Retry
* Try again
* Create
* Choose
* Select
* Copy
* Share
* Return

Buttons should normally describe the action they perform.

##### Preferred Descriptive Language

When more personality is appropriate, favour natural expressions such as:

> Things you may want to return to.

> A few pieces that continue the thought.

> Things I have been working on.

> Available whenever you need it.

> Choose what appears here.

> Keep what is useful.

> Add as many as you need.

The vocabulary may be graceful without becoming vague.

##### Naming Om

Use **Om** where a name is genuinely necessary.

Avoid **Om Rajguru** in ordinary website headings, labels, descriptions, and personal copy unless the full name is required for identification or formality.

Prefer first-person language on Om's own website:

> Things I have been working on.

rather than:

> Om's latest projects.

Do not repeatedly brand ordinary sections with the author's name.

##### Project Language

For Om's work, prefer:

> Working on

rather than automatically using:

> Building

"Building" is acceptable when it is genuinely the clearest verb, but it should not become default startup vocabulary.

##### Possessive Pronouns

Avoid unnecessary *my*, *your*, and similar possessives when the surrounding interface already establishes ownership.

Prefer:

> Favorites

over:

> Your Favorites

Prefer:

> Projects

over:

> My Projects

Use possessives when removing them would introduce ambiguity or make the language unnatural.

##### Avoid "We"

Avoid ambiguous corporate "we" in interfaces, particularly errors.

Do not write:

> We're having trouble loading your files.

Prefer:

> Unable to load files.

##### Banned or Strongly Discouraged Words and Constructions

Avoid:

* quiet
* quietly
* magical
* magic as generic praise
* journey
* unlock
* unleash
* elevate
* empower
* revolutionise
* reimagine
* game-changing
* groundbreaking
* cutting-edge
* transformative
* powerful, unless power is genuinely the relevant property
* seamless, unless technically meaningful
* effortless
* discover, when "view," "browse," or "find" is clearer
* explore, when a specific action is available
* dive in
* get started, when a more specific first action is available
* let's go
* let's do it
* ready when you are
* made for you
* designed for you
* everything you need
* all in one place
* take control
* supercharge
* next-level
* beautifully, as generic praise

Avoid atmospheric language that contributes mood but no information.

---

#### 5. Mechanics and Style Rules (The Technical Execution)

##### Buttons

Use verbs whenever practical.

The button should describe what pressing it does.

Prefer:

> Add source

> Publish article

> Save changes

> Delete file

Avoid:

> Yes

> Okay

> Let's go

when a specific action can be named.

##### Navigation

Use familiar nouns.

Prefer:

> Writings

> Projects

> Dev Notes

> About

> Contact

Do not rename ordinary destinations merely to make the navigation distinctive.

##### No Filler or Pseudo Labels

Do not add useless, filler, or pseudo labels.

Avoid decorative badge labels, pill tags, placeholder-style headings, and redundant category markers that merely repeat what the interface or content already communicates.

For example, do not place an "Article" or "Content" label above a clearly formatted article, or label a project card with "Project."

Labels must be purposeful, necessary, and functional, never decorative padding. If an element is already self-evident from its layout, context, or visual hierarchy, omit the label entirely.

##### Sentence Case

Use sentence case for interface copy unless an established component or design system explicitly requires otherwise.

Prefer:

> Save changes

rather than:

> Save Changes

Apply casing consistently within each component category.

##### Complete Sentences

Descriptions, errors, explanations, and longer interface copy should use complete sentences.

Do not manufacture personality with fragments.

Avoid:

> One search. Everything you wrote. Instantly.

Prefer:

> Search across writings, dev notes, and projects from one place.

##### No Em Dashes

Do not use em dashes.

Use commas, parentheses, colons, or separate complete sentences.

##### No Artificial Rhythm

See [Section 7: Banned Sentence Structures and How to Rewrite Them](#7-banned-sentence-structures-and-how-to-rewrite-them) for the complete list of 50 formulaic rhetorical constructions to eliminate.

Never use fragmented structures such as:

> Your files. Your rules. Your way.

Or:

> Simple. Fast. Yours.

These are both marketing language and sentence fragmentation.

##### Exclamation Marks

Use rarely.

An exclamation mark should correspond to genuine excitement or celebration, not compensate for lifeless copy.

Most product interactions need none.

##### Emoji

Do not use emoji as routine product decoration.

Never use emoji to soften errors, warnings, billing issues, destructive actions, or technical problems.

##### Placeholders and Mock Data

Placeholders should demonstrate expected input or provide useful guidance.

Examples:

> Search writings

> [name@example.com](mailto:name@example.com)

> Add a short description

Do not use placeholders as substitutes for necessary field labels.

When writing calendars, time pickers, phone inputs, form sample data, or preview numbers:

* **Date:**
  * Day number alone must be **17**.
  * Full date must be either **17 December 2022** or **26 May 2008**. Never use arbitrary dates.
* **Time:**
  * Must be **17:00** (24-hour format).
* **Phone numbers:**
  * Never use US (+1) numbers under any circumstances.
  * Must strictly be Indian (+91) or Japanese (+81) format.
  * Must include the digits **26** and **17** in the number at all costs.
  * Indian format: `+91 98261 70000` or `+91 91726 00000`
  * Japanese format: `+81 90-2617-0000` or `+81 80-1726-0000`

##### Progressive Disclosure

Do not explain every possible consequence on the first screen.

Give people the information relevant to the decision currently in front of them.

Reveal additional explanation when it becomes useful.

##### Consistency

Once an action has a name, preserve it throughout the flow.

If the action begins as:

> Add source

do not later call the same action:

> Connect publication

without a genuine distinction.

Repeated language creates familiarity.

##### Device Awareness

Use language appropriate to the interaction.

Use **tap** for touch interactions and **click** for pointer-based interactions when the distinction matters.

Avoid device-specific instructions when the interface itself can provide the action directly.

##### Accessibility

Use simple, familiar terminology.

Do not rely on visual position alone:

Avoid:

> Click the button below.

Prefer:

> Select **Save changes**.

Links should describe their destination rather than saying:

> Click here.

---

#### 6. Before-and-After Examples (The "Show, Don't Tell" Section)

##### Homepage Introduction

❌ **Wrong**

> A beautifully crafted digital home where ideas, technology, and creativity come together.

✅ **Right**

> A place for the things I work on, write about, and occasionally return to.

##### Feature Description

❌ **Wrong**

> Take control of your content with powerful organisation tools designed around you.

✅ **Right**

> Labels give you another way to organise files without changing where they are stored. Add as many as you need, rename them later, or remove them without affecting the file itself.

##### Labels and Pseudo Labels

❌ **Wrong**

> [ ARTICLE ]
>
> **Understanding Distributed Systems**
>
> An exploration of consensus algorithms.

❌ **Wrong**

> [ FEATURE CARD ]
>
> **Fast search**
>
> Search across writings from one place.

✅ **Right**

> **Understanding Distributed Systems**
>
> An exploration of consensus algorithms.

✅ **Right**

> **Fast search**
>
> Search across writings from one place.

##### Button

❌ **Wrong**

> Let's do it!

✅ **Right**

> Save changes

##### Search

❌ **Wrong**

> Find anything, instantly.

✅ **Right**

> Search across writings, dev notes, and projects from one place.

##### Empty State

❌ **Wrong**

> Nothing here yet. Every great journey has to begin somewhere!

✅ **Right**

> Nothing here yet. When you publish your first piece, it will appear here.

##### Personal Empty State

❌ **Wrong**

> Your story begins here. Let your thoughts find their home.

✅ **Right**

> Your first entry can be as long or as brief as you like.

##### Error

❌ **Wrong**

> Oops! Something went wrong. Please try again! 😔

✅ **Right**

> The file could not be uploaded. Check your connection and try again.

##### Validation

❌ **Wrong**

> Invalid password.

✅ **Right**

> Choose a password with at least 8 characters.

##### File Size

❌ **Wrong**

> Upload failed.

✅ **Right**

> This file is larger than 5 GB. Choose a smaller file to continue.

##### Settings

❌ **Wrong**

> Enable Automatic Archiving

> Take control of your storage by automatically managing files you no longer need.

✅ **Right**

> **Automatic archive**

> Move files you have not opened for 90 days to the archive.

##### Destructive Action

❌ **Wrong**

> Are you sure you want to say goodbye to this entry forever?

✅ **Right**

> **Delete this entry?**

> This will permanently delete the entry. This cannot be undone.

##### Success State

❌ **Wrong**

> Amazing! Your changes have been saved successfully! 🎉

✅ **Right**

> Changes saved.

##### Project Description

❌ **Wrong**

> Reprint is a revolutionary new way to rediscover and experience your favourite writing.

✅ **Right**

> Reprint brings my writing together in a newspaper-style edition. When there is nothing new to publish, it can bring an older piece back instead.

##### Related Content

❌ **Wrong**

> Discover more stories you might love.

✅ **Right**

> **Related writing**

> A few pieces that continue the thought.

##### Archive

❌ **Wrong**

> Rediscover hidden gems from your content journey.

✅ **Right**

> **Archive**

> Things worth keeping, but not necessarily keeping around.

---

#### 7. Banned Sentence Structures and How to Rewrite Them

| #  | Banned structure                                   | ❌ Avoid                                                                                               | ✓ Rewrite naturally                                                                                                                       |
| -- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | **Most X do A, but we do B**                       | “Most websites treat navigation as a static element, but I wanted something different.”               | “I made the navigation responsive to what was happening on the page.”                                                                     |
| 2  | **From X to Y**                                    | “From typography to transitions, everything was reconsidered.”                                        | “I revised the typography, spacing, transitions, and navigation behaviour.”                                                               |
| 3  | **It’s not X. It’s Y.**                            | “This isn’t a redesign. It’s a rethink of navigation.”                                                | “The work changes how navigation behaves across the site.”                                                                                |
| 4  | **Not just X, but Y**                              | “It doesn’t just improve consistency; it makes maintenance easier.”                                   | “It improves consistency and makes maintenance easier.”                                                                                   |
| 5  | **Rather than X, I/we did Y**                      | “Rather than maintaining separate navbars, I centralized them.”                                       | “The sites now read their navigation configuration from one source.”                                                                      |
| 6  | **Instead of X, I wanted Y**                       | “Instead of another static component, I wanted something reusable.”                                   | “The component needed to work across several sites.”                                                                                      |
| 7  | **The goal/idea was simple:**                      | “The goal was simple: make navigation consistent.”                                                    | “I needed navigation to remain consistent across the sites.”                                                                              |
| 8  | **At its core…**                                   | “At its core, Pages is a publishing system.”                                                          | “Pages is a small publishing system for standalone documents.”                                                                            |
| 9  | **At first glance…**                               | “At first glance, this seems like a minor change.”                                                    | “The visual change is small, although the implementation reaches several parts of the site.”                                              |
| 10 | **On the surface X, underneath Y**                 | “On the surface it looks simple. Underneath, there is a fairly complex system.”                       | “The interface stays simple while the underlying system handles routing, fetching and caching.”                                           |
| 11 | **What looks like X is actually Y**                | “What looks like a tiny search change is actually a larger architectural decision.”                   | “Changing search also required changes to routing and state management.”                                                                  |
| 12 | **The result? X.**                                 | “The result? A cleaner, faster experience.”                                                           | “Pages now load faster and the interface has fewer unnecessary elements.”                                                                 |
| 13 | **Question → immediate self-answer**               | “Why does this matter? Because every millisecond counts.”                                             | “The difference becomes noticeable when the interaction happens repeatedly.”                                                              |
| 14 | **Here’s where it gets interesting**               | “Here’s where it gets interesting: the navbar is remotely configured.”                                | “The navbar gets its configuration remotely from Sanity.”                                                                                 |
| 15 | **There’s a reason for that**                      | “The animation lasts only 180ms. There’s a reason for that.”                                          | “I kept the animation at 180ms because longer transitions began to make navigation feel sluggish.”                                        |
| 16 | **That might sound X, but…**                       | “That might sound excessive, but these details matter.”                                               | “The additional work prevents inconsistencies between deployments.”                                                                       |
| 17 | **This matters because…**                          | “This matters because users notice inconsistency.”                                                    | “Small inconsistencies become noticeable when the same navigation appears across several properties.”                                     |
| 18 | **The key is…**                                    | “The key is keeping complexity out of the interface.”                                                 | “Most of the complexity stays in the implementation, leaving the interface straightforward.”                                              |
| 19 | **The difference is subtle, but important**        | “The difference is subtle, but important.”                                                            | **Delete it.** Explain the actual difference instead.                                                                                     |
| 20 | **In practice, this means…**                       | “In practice, this means every site receives the same links.”                                         | “Every site receives the same links from the shared configuration.”                                                                       |
| 21 | **X became Y / what began as X became Y**          | “What began as a navbar experiment became a design system.”                                           | “I later extended the same approach to other shared interface elements.”                                                                  |
| 22 | **It started with X**                              | “It started with a simple problem.”                                                                   | “I was maintaining the same navigation links in several repositories.”                                                                    |
| 23 | **This raised another question:**                  | “This raised another question: how should caching work?”                                              | “Caching then needed some consideration.”                                                                                                 |
| 24 | **There was one problem**                          | “There was one problem: deployments were still independent.”                                          | “Deployments were still independent, so configuration could drift between them.”                                                          |
| 25 | **And that’s where X comes in**                    | “And that’s where Sanity comes in.”                                                                   | “Sanity stores the shared configuration.”                                                                                                 |
| 26 | **Enter X**                                        | “Enter Vercel.”                                                                                       | “I deployed it through Vercel.”                                                                                                           |
| 27 | **Three polished adjectives**                      | “Faster, cleaner, and more intentional.”                                                              | State measurable/concrete changes: “The page loads faster and contains fewer persistent controls.”                                        |
| 28 | **Artificial rule of three**                       | “Consistency, flexibility, and maintainability guided the work.”                                      | “I primarily wanted to prevent the different sites from drifting apart.”                                                                  |
| 29 | **X without Y**                                    | “Flexibility without complexity.”                                                                     | “The configuration remains flexible while most of its complexity stays outside the consuming sites.”                                      |
| 30 | **Whether X or Y…**                                | “Whether reading an article or browsing projects, navigation stays consistent.”                       | “The same navigation remains available on articles and project pages.”                                                                    |
| 31 | **Every X, every Y, every Z**                      | “Every interaction, every transition, every detail was refined.”                                      | Name what changed: “I adjusted the hover states, transition timing and spacing.”                                                          |
| 32 | **No X. No Y. Just Z.**                            | “No clutter. No distractions. Just writing.”                                                          | “The page contains the article and only the controls necessary to read or navigate it.”                                                   |
| 33 | **Fragment → fragment → punchline**                | “One system. Five sites. Zero duplication.”                                                           | “Five sites now use the same configuration.”                                                                                              |
| 34 | **X, but with Y**                                  | “A newspaper, but with the flexibility of the web.”                                                   | “Reprint uses a newspaper-style editorial layout while retaining web-native navigation and interaction.”                                  |
| 35 | **Less X, more Y**                                 | “Less clutter, more focus.”                                                                           | “I removed controls that were unnecessary while reading.”                                                                                 |
| 36 | **X isn’t necessarily bad, but…**                  | “Duplication isn't necessarily bad, but it became difficult here.”                                    | “Duplicating the configuration across repositories made updates unnecessarily repetitive.”                                                |
| 37 | **There’s something X about Y**                    | “There’s something satisfying about one system controlling everything.”                               | “Centralising the configuration also makes the system considerably easier for me to maintain.”                                            |
| 38 | **I kept coming back to one question…**            | “I kept coming back to one question: why maintain this five times?”                                   | “Maintaining the same configuration five times no longer made much sense.”                                                                |
| 39 | **I wanted X to feel Y**                           | “I wanted search to feel native.”                                                                     | “Search follows the same interaction patterns as the rest of the interface.”                                                              |
| 40 | **X without feeling Y**                            | “Familiar without feeling derivative.”                                                                | Explain the actual design decision: “It follows familiar search conventions while retaining the site's existing typography and controls.” |
| 41 | **X should be Y, not Z**                           | “Navigation should be invisible, not intrusive.”                                                      | “I reduced the visual prominence of navigation while keeping it immediately accessible.”                                                  |
| 42 | **There is a broader point here**                  | “There is a broader point here about software design.”                                                | State the point directly, if it is worth making.                                                                                          |
| 43 | **Grand philosophical ending**                     | “Sometimes the best technology is the technology you never notice.”                                   | End on the actual work, consequence, limitation, or next step.                                                                            |
| 44 | **Problem → solution → triumph**                   | “The problem was duplication. The solution was centralization. The result is effortless consistency.” | Describe what happened chronologically and allow imperfections or trade-offs to remain visible.                                           |
| 45 | **Manufactured before/after binary**               | “Before, every update was painful. Now, it happens instantly.”                                        | “Previously I updated each repository separately. The shared configuration reduces that work to one update.”                              |
| 46 | **Everything changed / reconsidered / reimagined** | “Every part of the experience was reconsidered.”                                                      | Specify exactly what changed.                                                                                                             |
| 47 | **Abstract claim → colon → dramatic explanation**  | “The principle was clear: content comes first.”                                                       | “I kept persistent interface elements away from the article body.”                                                                        |
| 48 | **Obviously neat contradiction**                   | “The system is complex, yet remarkably simple.”                                                       | “The implementation handles considerable state, while exposing only a small configuration surface.”                                       |
| 49 | **Setup sentence that exists only for drama**      | “This is where things took an unexpected turn.”                                                       | Say what happened next.                                                                                                                   |
| 50 | **Paragraph-ending mini wisdom**                   | “And perhaps that is the point.”                                                                      | Delete it, or state the concrete conclusion you actually reached.                                                                         |

##### The Underlying Rule: Direct Causality Over Rhetorical Shape

> **Do not manufacture contrast, revelation, tension, symmetry, or profundity merely to give a paragraph shape.**
>
> Avoid formulaic constructions such as *X versus Y*, *not X but Y*, *from X to Y*, rhetorical question-and-answer sequences, artificial rules of three, dramatic fragments, manufactured reveals, and polished concluding aphorisms.
>
> Prefer **direct causality**: state what happened, why a decision was made, what changed, what constraint caused it, and what consequence followed. When contrast is genuinely necessary, express the factual difference rather than turning it into a rhetorical device.
>
> Paragraphs do not need a setup, turn, and payoff. Sentences do not need symmetry. An observation does not need to become a lesson.

Do not mechanically replace a banned construction with another polished construction. If “Rather than X, I did Y” becomes “I chose Y because X was inadequate,” we eventually end up with another recognizable template.

The objective is **structural irregularity governed by reasoning**. Some paragraphs can be two sentences. Others can be six. A conclusion can be mundane. A technical detail can simply be stated. The prose should follow the thought, rather than forcing the thought to follow a prose pattern.

---

#### 8. Banned: Dramatic, Poetic & Atmospheric Copy

| Banned pattern                              | ❌ Avoid                                                        | ✓ Rephrase                                                    |
| ------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------- |
| **Cryptic two-word statements**             | “kept slowly.”                                                 | “Photography Log” / “A photography archive.”                  |
| **Vague noun lists**                        | “images, captions, places, and words.”                         | “Photographs and notes from places I visit.”                  |
| **Pretending ordinary work is profound**    | “A collection of moments worth keeping.”                       | “A collection of photographs I have taken over time.”         |
| **Memory language**                         | “Fragments of places I once knew.”                             | “Photographs from places I have visited.”                     |
| **Time-as-poetry**                          | “A record of time passing.”                                    | “A chronological photography archive.”                        |
| **Moment language**                         | “Small moments, preserved.”                                    | “Photographs from everyday life and travel.”                  |
| **Things that stayed / remained**           | “The things that stayed.”                                      | “Selected photographs from my archive.”                       |
| **Things noticed along the way**            | “Things I noticed along the way.”                              | “Photographs taken during my travels.”                        |
| **Poetic observation**                      | “Scenes that asked me to stop.”                                | “Scenes I found interesting enough to photograph.”            |
| **Romanticising documentation**             | “An archive of what caught my eye.”                            | “My photography archive.”                                     |
| **Giving objects agency**                   | “Images that found their way here.”                            | “Images I selected for this archive.”                         |
| **Giving places emotions**                  | “Places that felt different.”                                  | “Photographs from different cities and places.”               |
| **Giving work a voice**                     | “Some photographs speak for themselves.”                       | Delete it. Show the photographs.                              |
| **Personifying ideas**                      | “The design asks you to slow down.”                            | “The layout uses larger spacing and fewer visible controls.”  |
| **Sensory metaphor**                        | “The interface breathes.”                                      | “The interface uses more spacing between elements.”           |
| **Movement metaphor**                       | “The page unfolds as you scroll.”                              | “More content appears as you scroll.”                         |
| **Rhythm metaphor**                         | “The typography gives the page rhythm.”                        | “Type size and spacing establish the visual hierarchy.”       |
| **Visual poetry**                           | “Words floating between photographs.”                          | “Captions appear between photographs.”                        |
| **Journey framing**                         | “A journey through my photographs.”                            | “A chronological collection of my photographs.”               |
| **Story framing where there isn't a story** | “Every image tells a story.”                                   | Describe what the collection actually contains.               |
| **Chapter metaphor**                        | “Each photograph is a chapter.”                                | “Photographs are grouped by date/location.”                   |
| **Canvas metaphor**                         | “The browser becomes a canvas.”                                | “The browser displays photographs edge-to-edge.”              |
| **Space metaphor**                          | “A space for ideas to live.”                                   | “A place where I publish notes and experiments.”              |
| **Home metaphor**                           | “A home for unfinished thoughts.”                              | “Notes on ideas and work in progress.”                        |
| **Craft romanticism**                       | “Made with care.”                                              | Usually delete it.                                            |
| **Intentionality claim**                    | “Every detail is intentional.”                                 | Name the relevant decisions.                                  |
| **Obsessive-detail theatre**                | “Nothing here is accidental.”                                  | Delete it, or explain a particular decision.                  |
| **Dramatic restraint**                      | “Nothing more. Nothing less.”                                  | Delete it.                                                    |
| **Dramatic fragment**                       | “Just photographs.”                                            | “A personal photography archive.”                             |
| **Dramatic repetition**                     | “No noise. No distractions. No excess.”                        | “The interface keeps controls to a minimum.”                  |
| **Fake intimacy**                           | “A small corner of the internet I call mine.”                  | “My personal website.”                                        |
| **Romantic internet language**              | “A little place on the web.”                                   | “My website for projects, writing and photography.”           |
| **Romantic imperfection**                   | “Unpolished, imperfect, human.”                                | “Some entries are informal and lightly edited.”               |
| **Poetic incompleteness**                   | “Notes, unfinished.”                                           | “Draft notes and work in progress.”                           |
| **Soft existential statement**              | “Some things are worth remembering.”                           | Delete it.                                                    |
| **Grand existential statement**             | “We are, after all, what we choose to remember.”               | Delete it.                                                    |
| **Manufactured nostalgia**                  | “For the places I don't want to forget.”                       | “Photographs from places I have visited.”                     |
| **Manufactured melancholy**                 | “Places I may never see again.”                                | Delete it unless that fact genuinely matters.                 |
| **Fake contemplation**                      | “Perhaps that is enough.”                                      | Delete it.                                                    |
| **Pseudo-philosophical ending**             | “Maybe the point was never permanence.”                        | State the actual conclusion.                                  |
| **Romanticising slowness**                  | “Made slowly.”                                                 | “Updated occasionally.”                                       |
| **Romanticising simplicity**                | “Simple by intention.”                                         | “The interface contains only the controls needed here.”       |
| **Romanticising silence**                   | “A quieter way to browse.”                                     | “The layout reduces persistent interface elements.”           |
| **Atmospheric adjectives**                  | “A gentle, thoughtful archive.”                                | “A photography archive.”                                      |
| **Emotional UI adjectives**                 | “A calm reading experience.”                                   | “The reading view removes navigation and secondary controls.” |
| **“Designed to disappear” language**        | “An interface designed to disappear.”                          | “Controls recede when they are not being used.”               |
| **“Let X be X” construction**               | “Let the photographs speak.”                                   | Delete it.                                                    |
| **“Give X room to…”**                       | “Giving each image room to breathe.”                           | “Images have generous spacing between them.”                  |
| **“Allow X to exist…”**                     | “Allowing the work to exist on its own terms.”                 | Delete it.                                                    |
| **Dramatic ending fragment**                | “And that was enough.”                                         | Delete it or state what actually happened.                    |
| **Cinematic transition**                    | “Then something changed.”                                      | State what changed.                                           |
| **Cinematic setup**                         | “It began on an ordinary afternoon.”                           | “I started working on this in August.”                        |
| **Cinematic anticipation**                  | “I didn't know it then, but…”                                  | State the later development when you reach it.                |
| **Retrospective destiny**                   | “I didn't expect this small experiment to become what it did.” | “I later expanded the experiment into…”                       |
| **Romantic creation language**              | “Slowly, the idea took shape.”                                 | “I developed the idea over several iterations.”               |
| **Poetic technical description**            | “The interface moves with you.”                                | “The navigation responds to scroll position.”                 |
| **Poetic product claim**                    | “Technology that gets out of your way.”                        | Explain which interactions or steps were removed.             |

##### The Underlying Rule: Do Not Make Ordinary Things Sound Profound

> **Do not make ordinary things sound profound.**
>
> Avoid poetic, cinematic, dramatic, sentimental, atmospheric, nostalgic, or pseudo-philosophical language. Do not romanticise simplicity, slowness, craftsmanship, imperfection, memory, time, places, photographs, software, interfaces, or the act of making something.
>
> Do not give photographs, interfaces, ideas, pages, places, or objects human agency. They do not “breathe,” “speak,” “ask,” “live,” “wait,” “invite,” “remember,” or “find their way” anywhere.
>
> Avoid cryptic fragments whose primary purpose is mood. Avoid vague collections of nouns, manufactured nostalgia, dramatic pauses, cinematic transitions, philosophical endings, metaphors presented as product descriptions, and statements designed primarily to sound beautiful.
>
> **Prefer literal meaning.** Say what something is, what it contains, what it does, why it exists, how it works, or why a particular decision was made. Beauty should come from precision and good prose rather than manufactured atmosphere.

Strict instruction:

> **If a sentence sounds impressive but conveys less information than a plain version of the same sentence, rewrite it.**

---

#### 9. Personality by Surface

Use this hierarchy whenever there is uncertainty about how much voice to introduce.

| Surface              | Clarity | Grace    | Personality |
| -------------------- | ------- | -------- | ----------- |
| Errors               | Maximum | Minimal  | Minimal     |
| Warnings             | Maximum | Minimal  | Minimal     |
| Destructive actions  | Maximum | Minimal  | Minimal     |
| Buttons              | Maximum | Minimal  | Minimal     |
| Forms                | Maximum | Minimal  | Minimal     |
| Navigation           | Maximum | Minimal  | Minimal     |
| Settings             | Maximum | Low      | Low         |
| Helper text          | High    | Moderate | Moderate    |
| Onboarding           | High    | Moderate | Moderate    |
| Feature descriptions | High    | Moderate | Moderate    |
| Empty states         | High    | Moderate | Moderate    |
| Editorial surfaces   | High    | High     | Moderate    |
| Homepage copy        | High    | High     | Moderate    |

Personality should decrease as the cost of misunderstanding increases.

---

#### 10. Final Product Copy Test

Before considering product copy complete, ask:

**Can someone understand it immediately?**

**Does it tell them what they can do next?**

**Could any word be removed without losing meaning?**

**Is a familiar word available instead of the one being used?**

**Does the button describe its action?**

**Are there any useless filler labels, pseudo labels, or decorative tags that merely repeat what the interface already makes obvious? Remove them.**

**Does the interface teach itself without announcing that it is teaching?**

**Is the language humane without pretending to be a person?**

**Is the copy graceful without becoming poetic?**

**Is personality appropriate for the importance of the interaction?**

**Does an error explain how to recover?**

**Does a destructive action explain its consequence?**

**Is the interface celebrating something that does not need celebrating?**

**Has marketing language entered a place where someone is simply trying to accomplish something?**

**Are any fragments being used to manufacture rhythm?**

**Are there any em dashes? Remove them.**

**Are words such as "quiet," "magical," "journey," "unlock," or "reimagine" being used merely for atmosphere? Remove them.**

**Would a more specific verb make the action clearer?**

**Is terminology consistent with the rest of the product?**

**Does the copy still work for someone encountering the product for the first time?**

**Does the copy use any banned formulaic structures (such as "Most X do A, but we do B", "From X to Y", "It's not X. It's Y.", or artificial rules of three)? Rewrite them with direct causality.**

**Does the copy make ordinary things sound profound, romanticise simplicity or craftsmanship, or personify interfaces and objects? Prefer literal meaning.**

**If a sentence sounds impressive but conveys less information than a plain version of the same sentence, rewrite it.**

If clarity and personality conflict, choose clarity.

If clarity and elegance can coexist, keep both.

If the copy is technically clear but feels sterile, improve its vocabulary and cadence without making it longer or less precise.

The ideal product copy is **immediately understandable, gracefully written, considerate of the person using it, and restrained enough that the interface itself remains the centre of attention.**

---

### Relation to Codebase Naming and Long-Form Voice

Product copy and engineering identifiers are separate systems:
* **Product & Interface Voice (`product-voice.md`):** Governs what the user sees on the screen (UI labels, button copy, dialogs, empty states).
* **Long-Form Writing Voice (`article-writing.md`):** Governs what the reader reads in articles, essays, and dev notes.
* **Professional Codebase Naming (`codebase-naming.md`):** Governs what the engineer writes in source code (components, props, state, hooks, types, CMS schemas, and files).

Never bind code identifiers directly to marketing copy or transient UI labels. For example, while Product Voice may prescribe the label `"Also Read"`, Codebase Naming prescribes the CMS schema field `relatedContent` and the component `ContentReferencePicker`.

### Relation to Intentional Craft

`intentional-craft.md` asks for surfaces with character, a clear point of view, and room for deliberate experiments. None of that is expressed through copy. Character comes from composition, proportion, material, interaction, and evidence. The copy stays literal, plain, and governed by this file: an experimental layout still uses direct labels, and a strong point of view is shown through decisions, never through atmospheric or poetic sentences.

---

# Part 3: Long-Form Writing Voice

# Om: Long-Form Writing Voice

This guide defines how to write articles, essays, technical writing, case studies, dev notes, research-oriented pieces, and other long-form work in Om's voice.

The objective is not to imitate a personality or manufacture a recognisable style. It is to preserve a consistent way of thinking, explaining, and writing.

---

#### 1. Introduction and Philosophy

- **The "Why":** Writing should make an idea easier to understand without making the writer appear more important than the idea. The purpose is to share something worth examining, explain it properly, and leave the reader with enough context to form their own understanding.

- **Who It’s For:** This guide is for any person or agent writing, rewriting, editing, or expanding long-form work for Om. Apply it throughout the piece, including titles, introductions, explanations, transitions, opinions, technical sections, and conclusions.

- **Get to the Point:** Establish the subject or argument early. Do not spend several paragraphs creating anticipation for something that can be stated immediately.

- **Then Dissect It:** Directness does not mean shallowness. Once the point is established, examine it properly. Look at why something happens, what assumptions sit underneath it, what people may be responding to, what changes under different circumstances, and what follows from it.

- **Teach Psychologically, Not Explicitly:** The reader should move naturally from little understanding to a complete understanding. Never announce that the article intends to educate them. Instead, anticipate questions, introduce context when it becomes necessary, explain unfamiliar concepts before relying on them, and arrange ideas in an order that makes understanding feel natural.

- **Present Ideas, Do Not Impose Them:** Om can have a clear position without treating it as the reader's required conclusion. Put the idea and its reasoning before the reader. Give them enough information to consider it themselves.

- **Praise the Work, Not the Writer:** Never use the article as a vehicle for self-praise. The work may be interesting, useful, unusual, or carefully made, but Om's intelligence, talent, ambition, or importance should not become the subject.

- **Share Rather Than Market:** Marketing is not the objective. Avoid language designed to manufacture excitement, urgency, prestige, or admiration. State what was made, why it exists, how it works, and what was learned.

- **Depth Without Performance:** Psychology and philosophy may influence how deeply a subject is examined. The prose should not deliberately try to sound psychological, philosophical, intellectual, or profound. Sophistication belongs in the thinking.

- **Respect the Reader's Time:** Every paragraph should earn its place. Depth is welcome; unnecessary length is not.

---

#### 2. Brand Voice (The Permanent Identity)

The permanent voice is **calm, confident, humble, graceful, direct, humane, and considered.**

##### Calm and Confident

**What it sounds like:**

- State the point without excessive preparation.
- Write as someone comfortable with the subject.
- Allow straightforward statements to stand without repeatedly defending them.
- Use natural emphasis or occasional repetition when it genuinely strengthens clarity.
- Maintain composure even when disagreeing strongly.

**What it does NOT sound like:**

- Loud.
- Aggressive.
- Performative.
- TED Talk-like.
- Motivational.
- Sensational.
- Self-important.
- Written to generate applause.

Confidence should come from clarity, not volume.

##### Humble

**What it sounds like:**

- Keep attention on the idea or work.
- Acknowledge uncertainty where uncertainty genuinely exists.
- Describe accomplishments factually.
- Allow the reader to recognise good work without being instructed to admire it.

**What it does NOT sound like:**

- Self-congratulatory.
- Narcissistic.
- Excessively self-deprecating.
- False modesty.
- "I am incredibly proud..."
- "One of my greatest achievements..."
- "I completely transformed..."
- "After countless hours of hard work..."

Humility should be structural. It should rarely need to be announced.

##### Graceful and Elegant

**What it sounds like:**

Use natural, cultivated English without making the prose ornate. Words such as *rather, perhaps, considerably, particularly, entirely, reasonable, apparent, deliberate, peculiar, worthwhile, sensible, compelling, nevertheless,* and *although* may appear where they improve precision.

Elegance should come from vocabulary, rhythm, restraint, and precision.

**What it does NOT sound like:**

- Purple prose.
- Poetry disguised as an article.
- Cinematic narration.
- Artificial nostalgia.
- Decorative metaphors everywhere.
- Language chosen merely because it sounds beautiful.
- A manufactured "sense of wonder."

The reader should notice the thought before noticing the prose.

##### Direct

**What it sounds like:**

> I am not entirely convinced that every product needs an AI assistant.

Not:

> As we stand at the precipice of an extraordinary transformation in how humans interact with technology, perhaps it is time to ask ourselves an important question.

Begin with the question, observation, problem, or position. Then examine it.

##### Humane and Conversational

Writing should sound like one person explaining something properly to another intelligent person.

It can be polished without becoming formal for the sake of formality.

Avoid both corporate prose and excessively casual internet language. Technical subjects should remain approachable without pretending they are simpler than they are.

---

#### 3. Tone and Context (The Flexible Application)

The underlying voice remains consistent, but its expression changes with the material.

##### Essays and Opinion

Be reflective, measured, and willing to dissect assumptions.

State the position relatively early, then examine why it may be true, where it may not be true, and what circumstances complicate it.

Prefer:

> A career that looks safe because AI struggles with it today may look very different once that limitation disappears. That does not make the career a bad choice, but it does make today's limitations a fairly weak reason for choosing it.

Avoid telling readers what they *must* conclude.

##### Psychology and Philosophy

Allow considerable depth, but remain grounded.

Psychology and philosophy should influence the **questions being asked and distinctions being made**, rather than the vocabulary being used.

Do not manufacture profundity.

A philosophical observation should still make sense when stripped of its prettiest words.

##### Technical Writing

Clarity takes precedence over personality.

Explain:

1. what the problem was,
2. what was actually happening,
3. why it was happening,
4. what changed,
5. and what effect that change had.

Do not overwhelm the reader with jargon simply because jargon is available.

When technical terminology is necessary, introduce it naturally before relying on it.

##### Case Studies and Dev Notes

Focus on decisions.

Explain why an implementation began one way, what became apparent while working on it, what changed, and why the final approach was chosen.

Small details are worth discussing when the reasoning behind them is useful.

Prefer:

> I originally kept the URL parameters visible because there was no technical reason to hide them. They worked, and changing them would not make the search any faster. But they also exposed information that was useful to the application and mostly irrelevant to the person using it.

Avoid turning ordinary engineering decisions into dramatic discoveries.

##### Project Writing

The work is the protagonist.

Explain what Om has been **working on**, what it does, why particular decisions were made, and how it developed.

Do not turn project writing into launch marketing.

##### Research-Oriented Writing

Be careful with certainty.

Separate observation, evidence, interpretation, and personal reasoning.

Do not make a claim stronger merely because stronger wording sounds better.

---

#### 4. Vocabulary and Lexicon (The Words We Use)

##### Preferred Vocabulary

Prefer ordinary English with occasional graceful, diplomatic vocabulary when it improves precision.

Useful constructions include:

- rather
- perhaps
- considerably
- particularly
- entirely
- largely
- fairly
- somewhat
- nevertheless
- although
- reasonable
- apparent
- deliberate
- peculiar
- worthwhile
- sensible
- compelling
- difficult to justify
- worth considering
- I think
- I suspect
- I am not entirely convinced
- it seems
- in retrospect
- there is a reasonable argument
- there is not much reason to
- this does not necessarily mean

These expressions are useful because they allow ideas to have degrees rather than forcing every observation into absolute certainty.

##### Preferred Project Language

When referring to Om's own projects, prefer:

> I have been working on...

over:

> I have been building...

Use "building" when it is literally the clearest verb, not as the automatic startup/technology cliché.

##### Identity and Naming

Use **Om** as the normal author identity.

Do not unnecessarily refer to Om as **Om Rajguru** inside personal writing, labels, headings, metadata examples, or self-references.

Use the full name only where identification genuinely requires it, such as formal contexts or places where a full legal/public identity is appropriate.

Prefer first-person language where natural:

> I have been working on...

rather than:

> Om has been working on...

Do not repeatedly insert the author's name into titles or labels.

##### Banned or Strongly Discouraged Vocabulary

Avoid:

- quiet
- quietly
- magical
- magic, when used metaphorically to manufacture wonder
- journey
- landscape, when used as generic abstract jargon
- transformative
- revolutionary
- groundbreaking
- game-changing
- cutting-edge
- seamless, unless technically accurate and useful
- unlock
- unleash
- empower
- elevate
- reimagine
- dive into
- delve
- navigate, when "use," "understand," or another ordinary verb works
- at the intersection of
- in today's fast-paced world
- ever-evolving
- new era
- glimpse into the future
- the future is here
- profound, when merely describing the writer's own thought
- remarkable, when used as filler praise
- beautifully, when it contributes no information

Also avoid the broader family of AI-generated atmospheric vocabulary used to make ordinary subjects sound consequential.

##### Avoid Forced Marketing Language

Do not write:

> I am thrilled to announce...

> I am incredibly excited to share...

> This revolutionary new experience...

> We are redefining what is possible...

> A game-changing approach...

Simply say what happened.

---

#### 5. Mechanics and Style Rules (The Technical Execution)

##### No Sentence Fragments

This is a hard rule.

Never manufacture rhythm through fragments such as:

> Teachers reward students. Students reward teachers. A new school is born.

Or:

> The idea was simple. The implementation wasn't. Three hours later. One tiny fix.

Write complete, naturally connected sentences.

Rhythm should emerge from good sentences, not from chopping prose into dramatic fragments.

##### No Cinematic Structure

Do not create artificial suspense.

Avoid structures such as:

> And then something changed.

> What happened next surprised me.

> That was when everything clicked.

> Three hours later, I had my answer.

If something changed, explain what changed.

##### No "Sense of Wonder"

Never manufacture awe around technology, design, ordinary life, or Om's own work.

Avoid presenting normal engineering as magic or ordinary observations as revelations.

Grace is welcome. Awe should be earned by the subject rather than inserted by the writer.

##### No Em Dashes

Do not use em dashes.

Use commas, parentheses, colons, semicolons, or separate complete sentences instead.

##### Paragraph Structure

Use complete conversational paragraphs.

Do not make every sentence its own paragraph.

Do not create one-line paragraphs merely for dramatic emphasis.

A paragraph should normally contain one coherent piece of reasoning and develop it sufficiently before moving on.

##### Sentence Length

Vary sentence length naturally.

Short sentences can establish important points. Longer sentences can carry qualifications and reasoning.

Do not deliberately create "punchy" prose by making every sentence short.

##### Punctuation

- Avoid excessive exclamation marks.
- Do not use punctuation to manufacture excitement.
- Prefer curly quotation marks in polished publishing contexts.
- Use punctuation conventionally rather than stylistically.
- Parentheses are acceptable when they genuinely help.
- Semicolons are acceptable but should not become mannerisms.

##### Numbers

Prefer numerals where they make information easier to scan, particularly for technical measurements, dates, quantities, percentages, and specifications.

##### Headings

Headings should tell the reader what the section is about.

Avoid mysterious headings designed solely to create intrigue.

A graceful heading is welcome, but comprehension comes first.

##### First Person

First person is natural and generally preferred for personal essays, project writing, case studies, and observations.

Use "I" without either hiding it unnecessarily or making every paragraph about the author.

##### Accessibility

Do not assume specialist knowledge unnecessarily.

Explain acronyms and specialised concepts when the intended audience may not know them.

Never make a reader feel unintelligent for not knowing something.

---

#### 6. Before-and-After Examples (The "Show, Don't Tell" Section)

##### Sharing Work

❌ **Wrong**

> I am incredibly excited to unveil Reprint, a groundbreaking new experience that reimagines how we discover and engage with written content.

✅ **Right**

> I have been working on Reprint, a small newspaper inside my website. It brings together things I have written across different places and presents them more like a traditional newspaper.

##### Technical Writing

❌ **Wrong**

> What seemed like a tiny bug turned into quite the journey. Three hours. Countless attempts. One surprisingly elegant solution.

✅ **Right**

> I spent almost three hours fixing this, even though the problem itself was quite small. Most of that time went into finding where things were actually going wrong. Once I found it, the fix was fairly straightforward, but understanding why it was happening took a little longer.

##### Opinion Writing

❌ **Wrong**

> Everyone needs to stop choosing careers based on AI's current limitations. The future belongs to people who understand what comes next.

✅ **Right**

> A career that looks safe because AI struggles with it today may look very different once that limitation disappears. That does not make the career a bad choice, but it does make today's limitations a fairly weak reason for choosing it.

##### Disagreement

❌ **Wrong**

> Adding AI to every product is pointless, and companies need to stop following the hype.

✅ **Right**

> I am not entirely convinced that every product needs an AI assistant. There are certainly places where one can be genuinely useful, but there are just as many where a well-designed interface already serves the purpose rather well. In those cases, the additional complexity can be difficult to justify.

##### Technical Decision

❌ **Wrong**

> I leveraged a lightweight architecture to deliver a seamless and highly scalable experience without unnecessary database overhead.

✅ **Right**

> I could have used a database for this, but there was not much reason to introduce one. The data is small, changes infrequently, and already exists elsewhere. Reading it directly keeps the implementation simpler and removes another thing that would otherwise need to be maintained.

##### Philosophy

❌ **Wrong**

> Somewhere between who we are and who we become lies the quiet mystery of wanting.

✅ **Right**

> We tend to imagine the future as though our present preferences will accompany us there unchanged. That is a reasonable assumption, but perhaps not a particularly reliable one. People change alongside their circumstances, and something that appears immensely important today may occupy a very different place in life ten years from now.

##### Explaining Something to the Reader

❌ **Wrong**

> Before we dive in, let me teach you how this system works so you can implement it yourself.

✅ **Right**

> There are three parts to how this works. The first decides which article should appear, the second retrieves its content, and the third turns that content into the newspaper layout.

The second version teaches without announcing that it intends to teach.

---

### Final Writing Test

Before considering a piece complete, ask:

**Does it get to the point early?**

**Does it examine the idea rather than merely decorate it?**

**Could someone unfamiliar with the subject understand it by the end?**

**Does the teaching emerge naturally rather than being announced?**

**Does it present conclusions without forcing them upon the reader?**

**Is the vocabulary graceful without becoming poetic or cinematic?**

**Does it sound confident without sounding arrogant?**

**Does it remain humble without performing humility?**

**Does it praise the work rather than the writer?**

**Has unnecessary marketing language been removed?**

**Are all sentences complete rather than fragments written for effect?**

**Are there any em dashes? Remove them.**

**Has any artificial sense of wonder been introduced? Remove it.**

**Could any jargon be replaced by clearer language without losing meaning?**

**Is every paragraph useful?**

If the prose feels impressive but the idea has become harder to understand, rewrite it.

If the prose is clear but lifeless, improve the vocabulary and cadence without changing its simplicity.

The ideal result is **simple in construction, graceful in language, generous in explanation, measured in judgment, and considerably deeper in thought than it first appears.**

---

# Part 4: Interface Design Judgment

# Interface Design Judgment

Use this skill when designing, reviewing, or polishing an interface.

The goal is not to enforce fixed visual rules. It is to identify subtle sources of friction, understand why they occur, and choose an appropriate correction for the interface, platform, and interaction model.

Treat numerical values and patterns in an existing design system as starting constraints rather than substitutes for perceptual judgment.

---

## 1. Separate Visual Size From Interactive Size

### Principle

An element's visible dimensions and its interactive boundary solve different problems.

A small icon may be visually appropriate while its visible bounds are far too small for reliable touch interaction.

### Judgment

* Do not automatically make the hit area equal to the visible element.
* Give touch controls sufficiently generous interactive boundaries according to platform ergonomic guidance, commonly around 44×44 CSS pixels.
* Preserve the intended optical size while expanding the invisible interactive area when necessary.
* Consider visual size, interaction size, and spacing independently.
* Avoid enlarging the visible control merely to solve an interaction-target problem.

### Feedback

Touch interfaces lack the mechanical acknowledgement of physical controls.

Interactive elements should normally provide immediate feedback on pointer-down or touch-down through an appropriate change such as:

* slight scale response,
* luminance or opacity change,
* surface response,
* state transition,
* or native platform feedback.

The feedback should confirm that input was received without becoming distracting.

### Audit

Test important controls using actual touch input. Cursor precision on desktop is not a reliable substitute for finger ergonomics.

---

## 2. Prefer Perceptual Consistency Over Numeric Consistency

### Principle

Equal CSS values do not guarantee equal perceived results.

Identical strokes, spacing, radii, opacity, font weights, or dimensions can appear different depending on:

* background luminance,
* contrast,
* transparency,
* blur,
* surrounding density,
* element scale,
* neighboring geometry,
* and display characteristics.

### Judgment

Use design tokens to maintain systemic consistency, but allow controlled optical compensation when identical values produce visibly inconsistent results.

The objective is not mathematical sameness. The objective is perceptual coherence.

### Example

An icon stroke that appears appropriately weighted on a bright, simple surface may appear weak on a dark, translucent, or visually complex surface.

Do not immediately introduce an arbitrary replacement value.

Instead:

1. Render the element on its actual surface.
2. Compare its perceived weight with surrounding elements.
3. Adjust incrementally.
4. Test across relevant displays and states.
5. Preserve the smallest deviation necessary to restore visual balance.

---

## 3. Treat Geometry as Part of Information Hierarchy

### Principle

Shape influences alignment, grouping, scanning, and hierarchy. Border radius is not merely decorative.

### Judgment

When evaluating badges, tags, metadata, buttons, or containers, examine how their geometry interacts with the larger layout.

In vertically scanned interfaces:

* trace the dominant alignment lines,
* observe where the eye repeatedly enters each item,
* check whether metadata reinforces or weakens those anchors,
* and evaluate the edges of the component rather than considering its text alone.

Highly rounded geometry can sometimes appear to drift away from a strong typographic edge because its outer contour provides a weaker linear anchor.

This does not mean pills are inherently unsuitable for feeds. Use them when their semantics and surrounding composition justify them.

Choose geometry according to the role the element plays in the composition rather than applying one radius universally.

---

## 4. Treat Metadata as Part of Surface Architecture

### Principle

Metadata does not always need to live inside the normal content flow.

Dates, categories, statuses, labels, and indexes can sometimes participate in the architecture of the containing surface itself.

### Diagnostic

When reviewing a card or container, ask:

* Is metadata consuming too much vertical space?
* Does it unnecessarily push primary content downward?
* Does the top of the card resemble a placeholder or loading skeleton?
* Is the metadata visually competing with the headline?
* Could its position communicate structure more effectively?

If so, consider alternative relationships between the metadata and the container.

### Architectural Treatments

Depending on context, metadata may function as:

* an index tab,
* a docked label,
* an edge marker,
* a divider,
* a notch,
* a header region,
* or a conventional inline element.

Do not default to any one treatment.

### Boundary Intersections

When an element crosses or sits directly on a container boundary, explicitly inspect:

* background masking,
* border continuity,
* stacking order,
* clipping,
* interior clearance,
* transparency,
* and subpixel rendering.

If a label is intended to visually interrupt a border, its surface treatment must cleanly mask or otherwise resolve that border rather than allowing accidental lines to collide with its contents.

---

## 5. Use Color Semantically and With Restraint

### Principle

Color should communicate something before it decorates something.

It can establish taxonomy, state, hierarchy, interaction, or identity, but should not become the only mechanism through which those distinctions are understandable.

### Judgment

When several related content types or states share the same interface:

* maintain a coherent base system,
* introduce chromatic differences deliberately,
* avoid allowing category colors to fragment the overall design,
* and use stronger color responses during interaction only when they contribute useful feedback.

Subtle color distinctions can often establish identity without requiring large saturated surfaces.

Always verify that semantic distinctions remain understandable without relying exclusively on color.

---

## 6. Practice Affordance Hygiene

### Principle

Do not explain an interaction twice.

Interfaces accumulate labels, arrows, helper text, and action prompts because each addition appears harmless in isolation. Repeated across a screen, they can become cognitive clutter.

### Diagnostic

For every repeated action label, ask:

> What information would the user lose if this element disappeared?

If the answer is "none," investigate whether the element is necessary.

### Judgment

A card may already communicate interactivity through a combination of:

* content hierarchy,
* familiar structure,
* pointer behavior,
* hover or focus response,
* surface treatment,
* motion,
* and surrounding context.

In such cases, an additional repeated action such as "Read article," "View project," or "Learn more" may provide little value.

However, minimalism is not automatically better.

Retain explicit actions when they improve:

* discoverability,
* accessibility,
* clarity,
* distinction between multiple possible actions,
* or comprehension for unfamiliar interaction patterns.

Remove redundancy, not useful information.

---

## 7. Preserve Spatial Continuity

### Principle

Navigation should preserve the user's mental map whenever losing that state would force unnecessary work.

A user exploring a deep list, filtered archive, tabbed interface, or long document has established spatial context. Returning from a detail view should not casually destroy it.

### State Classification

Before deciding where state belongs, determine what kind of state it is.

#### Shareable State

Use URL-addressable state when another person opening the same URL should reasonably see the same meaningful view.

Examples may include:

* search queries,
* filters,
* sorting,
* pagination,
* selected resources,
* or explicitly addressable views.

#### Navigational State

Use browser history or equivalent navigation state when the information primarily exists to restore where the current user came from.

Examples may include:

* transient pagination position,
* temporary UI selection,
* navigation origin,
* or restoration metadata.

#### Session State

Use session-scoped storage when state should survive navigation or temporary reloads but should not become part of the canonical address.

### Judgment

Do not remove useful state from URLs merely to make them visually cleaner.

Likewise, do not expose every temporary interaction state in the address bar simply because the router makes it convenient.

Choose URL state, history state, session state, or application state according to the meaning and expected lifetime of the information.

### Restoration

When appropriate, restore:

* pagination,
* scroll position,
* selected tabs,
* filters,
* expanded regions,
* or other meaningful exploration context.

Distinguish returning to a previous state from intentionally navigating to the section afresh. Fresh navigation may reasonably reset transient state.

---

## 8. Design Feed and Showcase Contexts for Their Actual Jobs

### Principle

The same content can require different presentation priorities depending on context.

Do not assume that a card designed for one environment should be reproduced unchanged everywhere else.

### Feed Contexts

Archives, reading lists, search results, and directories usually prioritize:

* scanning speed,
* information density,
* predictable alignment,
* restrained decoration,
* and rapid comparison between items.

### Showcase Contexts

Homepages, featured collections, editorial highlights, and discovery surfaces may prioritize:

* presence,
* identity,
* differentiation,
* visual rhythm,
* richer spatial composition,
* and exploratory interaction.

### Judgment

These contexts may use separate components, shared primitives with variants, or the same underlying data rendered through different compositions.

The implementation choice is secondary.

The important rule is that the presentation should respond to the user's task rather than forcing every appearance of the same content into identical geometry.

---

## 9. Keep Interactive Architecture Deliberate

### Principle

Interactivity should be introduced where interaction actually occurs rather than spreading browser-dependent logic throughout otherwise static interface architecture.

### Judgment

When working in frameworks with server/client boundaries:

* keep static layout and content rendering server-side where appropriate,
* isolate browser-dependent behavior into focused interactive components,
* avoid converting large component trees to client execution for one small interaction,
* and keep state ownership close to the behavior that requires it.

Treat rendering architecture as part of interface performance.

A technically functioning interaction that unnecessarily increases client work can still degrade perceived quality through slower loading, hydration cost, or responsiveness.

---

## 10. Keep Render State Deterministic

### Principle

Rendered UI should derive from explicit, predictable state rather than opportunistically reading mutable external values during render.

This is particularly important for media, animation, scroll-driven interfaces, and other high-frequency systems.

### Judgment

Prefer event-driven synchronization for mutable browser systems.

For media interfaces, derive UI state from relevant events such as:

* metadata loading,
* playback updates,
* play/pause state,
* seeking,
* completion,
* and errors.

Avoid repeatedly reading mutable DOM or media properties during rendering when event-driven state can provide a deterministic representation.

For high-frequency interactions:

* minimize unnecessary state updates,
* avoid forced layout work,
* avoid redundant commands,
* and keep expensive work away from critical interaction paths.

---

## 11. Validate Interaction Interactively

### Principle

Evaluate an interface in the medium in which the interaction actually occurs.

Static screenshots cannot reliably validate:

* touch ergonomics,
* motion,
* hover behavior,
* navigation continuity,
* responsive transitions,
* media synchronization,
* or perceived responsiveness.

### Judgment

Test the property you are designing through the interaction that exposes it.

* Test touch through actual touch input.
* Test hover with pointer input.
* Test keyboard interaction using the keyboard.
* Test motion while interrupting and reversing it.
* Test navigation through realistic forward/back flows.
* Test media during actual playback and seeking.
* Test responsive layouts at intermediate widths, not only predefined breakpoints.
* Test optical weight on the surfaces where the element will actually appear.

### Isolate Variables

When comparing subtle alternatives, change one meaningful variable at a time.

Use tools such as:

* side-by-side comparisons,
* interactive toggles,
* alignment guides,
* overlays,
* temporary debug boundaries,
* and focused prototypes.

These make subjective-looking differences easier to observe and reason about.

Do not rely on a polished screenshot to prove an interaction decision.

---

## 12. Use Motion to Explain, Not Decorate

### Principle

Motion should communicate state change, causality, hierarchy, continuity, or feedback.

In Om's system every state change is animated (`design-system.md`, "Everything animates"). This section decides how motion should behave, not whether a change animates. The question below is for decorative motion that is not tied to a state change.

Animation that contributes none of these should be questioned.

### Judgment

Useful motion can:

* show where an element came from,
* explain where it went,
* connect two related states,
* acknowledge user input,
* preserve spatial continuity,
* or make structural change easier to understand.

Avoid animation whose primary effect is delaying access to content or making routine interactions feel theatrical.

Prefer transitions that remain responsive when interrupted. User input should take precedence over completing an animation sequence.

A useful test is:

> If this animation disappeared, would the interaction become harder to understand or feel less responsive?

If not, consider simplifying or removing it.

---

# Interface Audit Procedure

When auditing an interface, do not begin by changing values randomly.

Move through the interface systematically.

### 1. Interaction Pass

Inspect every interactive element.

Check:

* hit areas,
* touch ergonomics,
* focus behavior,
* pointer feedback,
* keyboard accessibility,
* and immediate acknowledgement of input.

### 2. Optical Pass

Ignore implementation values temporarily and judge the rendered result.

Check:

* perceived stroke weight,
* contrast,
* alignment,
* radius consistency,
* icon balance,
* visual density,
* and hierarchy.

Look for perceptual inconsistency even when the underlying CSS values are identical.

### 3. Geometry Pass

Trace the major alignment lines through the interface.

Check whether:

* metadata reinforces those lines,
* shapes create unintended drift,
* containers establish clear hierarchy,
* and repeated elements remain geometrically coherent.

### 4. Noise Pass

Temporarily imagine removing:

* repeated CTAs,
* arrows,
* helper labels,
* borders,
* metadata,
* decorative icons,
* and redundant status indicators.

Restore anything necessary for comprehension or accessibility. Question everything else.

### 5. Navigation Pass

Explore the interface like a real user.

Move several levels deep, change state, open content, navigate backward, reload, and intentionally return through top-level navigation.

Verify whether the resulting state matches reasonable user intent.

### 6. Responsive Pass

Do not test only named breakpoints.

Move continuously between narrow and wide layouts and watch for:

* awkward intermediate states,
* cramped targets,
* premature wrapping,
* alignment drift,
* overflow,
* and hierarchy changes.

### 7. Interaction Stress Pass

Repeat interactions quickly.

Interrupt animations. Navigate backward before transitions finish. Seek through media. Click controls repeatedly. Switch state rapidly.

A polished interface should remain understandable and stable outside the ideal demonstration path.

---

# Final Design Judgment

When something feels subtly wrong, do not immediately reach for another decorative element.

First ask:

1. Is this an ergonomic problem?
2. Is this an optical illusion or perceptual imbalance?
3. Is the geometry weakening an alignment anchor?
4. Is unnecessary information competing for attention?
5. Has navigation lost meaningful user context?
6. Is the presentation mismatched to the user's task?
7. Is implementation architecture harming perceived performance?
8. Would interactive testing reveal something the static design cannot?

Fix the underlying cause before adding additional UI.

The objective is not maximum minimalism, maximum consistency, or maximum decoration.

The objective is an interface whose ergonomics, geometry, hierarchy, state, motion, and implementation reinforce one another so naturally that the user spends their attention on the content and task rather than the interface itself.

---

# Part 5: Audit & Planning Protocol

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

---

# Part 6: Professional Codebase Naming

# Professional Codebase Naming

Use this skill whenever creating, reviewing, or restructuring names in a software project.

The goal is not to make names sound impressive. The goal is to make them precise, durable, unsurprising, and professionally legible.

A good name should help an engineer understand what something represents, what responsibility it owns, and how it relates to the rest of the product without needing to inspect its implementation first.

The governing principle is:

**Name software according to what it represents and is responsible for, using established product and engineering vocabulary, while choosing names durable enough to survive changes in presentation and implementation.**

Professional naming is semantic design.

---

## 1. Scope

This skill applies across the entire codebase.

It is not limited to React components, UI elements, or design-system primitives.

Use these principles for:
* UI components
* design-system primitives
* page sections
* layouts
* views
* dialogs
* menus
* overlays
* navigation
* forms
* form controls
* CMS schemas
* CMS fields
* Sanity objects
* Sanity blocks
* Portable Text annotations
* renderers
* previews
* content models
* modules
* functions
* methods
* hooks
* classes
* types
* interfaces
* enums
* variables
* state
* stores
* actions
* reducers
* events
* callbacks
* utilities
* adapters
* providers
* repositories
* registries
* controllers
* coordinators
* serializers
* normalizers
* parsers
* validators
* formatters
* loaders
* routes
* route groups
* endpoints
* server actions
* middleware
* configuration
* feature flags
* permissions
* constants
* files
* directories
* tests
* fixtures
* mocks
* stories
* analytics events
* database entities
* jobs
* queues
* workers
* internal tools
* architectural abstractions

The same semantic discipline should apply from a tiny boolean variable to a major architectural module.

---

## 2. First Principle: Name the Concept, Not the Current Appearance

Before naming anything, identify what the thing is:
* Do not begin from how it looks.
* Do not begin from the copy currently shown to the user.
* Do not begin from the framework primitive used to implement it.
* Do not begin from the first implementation detail visible in the source.

Ask:
1. What concept does this represent?
2. What responsibility does it own?
3. What does a caller need to know about it?
4. What remains true if its visual treatment changes?
5. What remains true if its underlying implementation changes?
6. Is there already an established term for this concept in the product or codebase?

Prefer the answer that survives redesigns.

**Example:**
`AlsoReadDropdown` describes current user-facing copy and a current UI mechanism. If the actual purpose is choosing a related article reference in a CMS, prefer a name such as:
* `RelatedContentReference`
* `ContentReferencePicker`
* `RelatedContentField`

depending on what is being named. The UI may continue to display "Also Read"; the engineering name does not need to repeat that copy.

---

## 3. Respect the Existing Product Before Introducing New Vocabulary

A professional name is not automatically a new name.

When working in an existing product, preserve established product language whenever it is coherent and intentional.

Before proposing terminology:
* inspect existing feature names;
* inspect neighboring components;
* inspect domain models;
* inspect routes;
* inspect CMS schema names;
* inspect design-system terminology;
* inspect analytics vocabulary;
* inspect documentation;
* inspect tests;
* inspect the `references/` folder when present.

The product's established language is part of the interface.
* If the product consistently calls something a `Story`, do not casually rename it to `Article`.
* If the product consistently uses `Publication`, do not introduce `Post` in one subsystem.
* If the design system uses `Sheet`, do not introduce `Drawer` for the same primitive merely because another library uses that word.
* If the codebase uses `Account`, do not introduce `Profile` unless the concepts are genuinely different.

Consistency with the product's own vocabulary usually matters more than importing terminology from another company.

---

## 4. The references/ Folder Is a Naming Source

If the repository contains a `references/` directory, inspect it before inventing terminology.

Treat relevant material inside `references/` as contextual guidance for naming, product language, architecture, design patterns, or domain vocabulary.

Examples may include:
```
references/
  product-language.md
  design-system.md
  architecture.md
  cms-models.md
  apple-patterns.md
  terminology.md
  screenshots/
```

Do not blindly copy names from references. Use them to understand:
* the intended level of professionalism;
* established product terminology;
* preferred conceptual vocabulary;
* naming tone;
* domain distinctions;
* design-system language;
* architectural patterns;
* historical naming decisions.

When references conflict with active production code, inspect both and determine which is current. Do not assume an old reference document overrides the live product. When uncertainty remains, report it rather than silently imposing a naming system.

---

## 5. Naming Priority Order

When choosing a name, apply this priority order:

### 5.1 Product meaning
What does the user or product domain understand this concept to be?
* Examples: `Article`, `Publication`, `Workspace`, `Account`, `Collection`, `Project`, `Revision`, `Membership`, `Subscription`

### 5.2 Responsibility
What specific responsibility does this abstraction own?
* Examples: `ArticlePreview`, `PublicationSelector`, `WorkspaceSwitcher`, `AccountMenu`, `CollectionNavigator`, `RevisionHistory`, `MembershipEditor`, `SubscriptionStatus`

### 5.3 Established technical vocabulary
If a standard software or interface term precisely matches the behavior, use it.
* Examples: `Dialog`, `Popover`, `Tooltip`, `Breadcrumbs`, `Disclosure`, `Toolbar`, `Picker`, `Selector`, `Repository`, `Adapter`, `Registry`, `Provider`, `Serializer`, `Validator`, `Middleware`

### 5.4 Existing codebase convention
Prefer a locally established naming convention when it remains clear and technically sound.

### 5.5 Implementation detail
Implementation details should influence the name only when the implementation itself is the abstraction. This is the lowest priority.

---

## 6. Semantic Stability

A strong name should remain correct when reasonable implementation details change.

Ask: *If we redesigned this tomorrow, would the name still describe it?*

* **Weak:** `BlueButton`, `ThreeDotMenu`, `LeftPopup`, `AlsoReadDropdown`, `GrayLoader`, `MobileNavDrawerComponent`
* **Stronger:** `PrimaryAction`, `OverflowMenu`, `InspectorPanel`, `RelatedContentPicker`, `ContentSkeleton`, `NavigationPanel`

Do not overcorrect:
* If something genuinely is a `Dialog`, calling it `Dialog` is correct.
* If the distinction between `Drawer` and `Sheet` is meaningful in the project's design system, preserve that distinction.

The rule is not "avoid visual names"; the rule is "avoid accidental implementation names."

---

## 7. Prefer Established Vocabulary Over Invented Vocabulary

Professional codebases generally reuse recognized concepts.

**Prefer:**
* `Dialog`, `Popover`, `Tooltip`, `Disclosure`, `Menu`, `Toolbar`, `Sidebar`, `Navigation`, `Breadcrumbs`
* `Picker`, `Selector`, `Field`, `Trigger`, `Action`, `Preview`, `Summary`, `Detail`, `Inspector`, `Panel`, `Sheet`, `Status`, `Indicator`
* `Registry`, `Provider`, `Adapter`, `Repository`, `Controller`, `Serializer`, `Normalizer`, `Validator`, `Parser`, `Formatter`
* `Configuration`, `Preference`, `Metadata`, `Collection`, `Library`, `Workspace`, `Navigator`

**Over improvised names such as:**
* `PopupThing`, `HoverText`, `ArrowSection`, `OptionsBox`, `ChooseThing`, `MagicPanel`, `FancyCard`, `ContentStuff`, `DataManager`, `UtilityHelper`

Use established vocabulary only when it is accurate:
* Do not call something a `Repository` merely because it fetches data.
* Do not call something a `Controller` simply because it contains logic.
* Do not call something a `Provider` unless it actually provides context, dependencies, configuration, or another clearly defined resource.

Professional naming requires semantic correctness, not prestigious nouns.

---

## 8. Avoid Faux-Enterprise Naming

Longer is not more professional.

**Avoid:**
* `GlobalRelatedContentSelectionManagementInterface`
* `ArticleDataHandlingManager`
* `UserPreferenceConfigurationControllerComponent`

**Prefer the smallest name that preserves the concept:**
* `ContentReferencePicker`
* `ArticleRepository`
* `PreferenceController`

Concise professional vocabulary is preferable to bureaucratic vocabulary.

---

## 9. Common Warning Words

The following words are not forbidden, but they should trigger a second look:
`Thing`, `Stuff`, `Box`, `Fancy`, `New`, `Old`, `Custom`, `Misc`, `Helper`, `Utils`, `Manager`, `Wrapper`, `Container`, `Component`, `Data`, `Object`, `Item`, `Popup`, `Dropdown`, `Button`, `Section`, `Handler`, `Processor`.

Ask whether a more specific concept exists. For example, `ArticleData` may actually be `ArticleMetadata`, `ArticleRecord`, `ArticleSummary`, `ArticleDocument`, or `ArticlePayload`, depending on meaning.

`Manager` is particularly dangerous because it often conceals multiple responsibilities. Before accepting `Manager`, determine what it actually does:
* `SessionManager` might really be `SessionStore`, `SessionController`, `SessionRegistry`, or `SessionRepository`.

---

## 10. Name by Layer

The same domain concept may correctly have several different names depending on the layer.

Consider related reading in a publishing product:
* **Domain concept:** `RelatedContent`
* **CMS model:** `RelatedContentReference`
* **CMS editor control:** `ContentReferencePicker`
* **Frontend renderer:** `RelatedContentSection`
* **Small visual representation:** `ArticlePreview`
* **Data-loading abstraction:** `RelatedContentRepository`

These are not inconsistent names. They describe the same domain concept at different responsibilities. Do not force every layer to use the exact same suffix.

---

## 11. UI Component Naming

Name UI components by semantic role.

**Prefer:**
* `ArticlePreview`, `SearchField`, `SearchPanel`, `AccountMenu`, `PrimaryNavigation`, `FooterNavigation`
* `ConfirmationDialog`, `InspectorPanel`, `Disclosure`, `StatusBanner`, `ProgressIndicator`, `FileDropzone`
* `MediaPicker`, `FormattingToolbar`, `PresenceIndicator`, `PublicationStatus`

Avoid automatically adding `Component`. Prefer `ArticlePreview` over `ArticlePreviewComponent` unless the framework or project convention explicitly requires the suffix.

**Good distinctions:**
* `AccountMenu`, `AccountMenuTrigger`, `AccountMenuItem`
* `SearchField`, `SearchResults`, `SearchResult`
* `ArticlePreview`, `ArticleDetail`, `ArticleMetadata`

Do not use one vague word such as `Card` for every rectangular piece of interface.

---

## 12. Design-System Naming

Design-system names should be generic enough for reuse but precise enough to establish behavior.

Good primitives may include:
`Button`, `IconButton`, `Dialog`, `Popover`, `Tooltip`, `Menu`, `MenuItem`, `Tabs`, `Tab`, `Disclosure`, `Accordion`, `Sheet`, `Drawer`, `Toast`, `Badge`, `Avatar`, `Separator`, `ScrollArea`, `Progress`, `Skeleton`, `Field`, `Label`, `Switch`, `Checkbox`, `RadioGroup`, `SegmentedControl`, `DatePicker`, `CommandPalette`.

Do not encode one product use case into a reusable primitive:
* **Weak:** `DeleteConfirmationPopup` as a design-system primitive.
* **Better primitive:** `ConfirmationDialog`
* **Product-specific composition:** `DeleteArticleDialog`

---

## 13. CMS and Sanity Naming

For Sanity and other content systems, separate:
* schema identity;
* editor label;
* field name;
* domain concept;
* custom input component;
* preview component;
* frontend renderer.

These do not always need identical names.

**Example:**
```typescript
defineField({
  name: 'relatedContent',
  title: 'Also Read',
  type: 'reference'
})
```
Here:
* `relatedContent` is a stable schema concept.
* `Also Read` is editorial copy.
* A custom editor control may be `ContentReferencePicker`.
* A renderer may be `RelatedContentSection`.

Do not name the schema `alsoReadDropdown` merely because the Studio UI currently displays a dropdown labeled "Also Read."

**Useful CMS vocabulary:**
`Document`, `Object`, `Field`, `Reference`, `Block`, `Annotation`, `Input`, `Preview`, `PortableText`, `Renderer`, `Decorator`, `Asset`, `Media`, `Metadata`, `Slug`, `Taxonomy`, `Category`, `Author`, `Publication`, `Revision`.

---

## 14. Functions and Methods

Functions should normally describe an action or transformation. Prefer explicit verbs.

**Examples:**
`loadArticle`, `resolveAuthor`, `normalizeArticle`, `serializeDocument`, `validateSlug`, `formatPublicationDate`, `createWorkspace`, `archiveProject`, `publishRevision`.

**Avoid vague verbs:**
`handleData`, `processThing`, `doStuff`, `manageArticle`, `runLogic`.

A function name should not exaggerate what it does. If it only formats a date, do not call it `processPublicationMetadata`; prefer `formatPublicationDate`.

---

## 15. Boolean Naming

Boolean names should read as propositions.

**Prefer:**
`isOpen`, `isSelected`, `isPublished`, `hasAccess`, `hasUnsavedChanges`, `canEdit`, `canPublish`, `shouldRefresh`, `wasRestored`.

**Avoid:**
`open`, `selectedFlag`, `access`, `publishBool`, `state`.

Boolean names should make conditional code read naturally:
```typescript
if (canPublish) {}
if (hasUnsavedChanges) {}
```

---

## 16. Event and Callback Naming

Distinguish events from handlers:
* **Event:** `articleOpened`, `selectionChanged`, `publicationRequested`, `uploadCompleted`
* **Handler:** `handleArticleOpened`, `handleSelectionChange`, `handlePublishRequest`, `handleUploadComplete`
* **Callback prop:** `onArticleOpen`, `onSelectionChange`, `onPublish`, `onUploadComplete`

Do not encode the current control unnecessarily:
* **Weak:** `onDropdownChange`
* **Better, when semantic event is selection:** `onSelectionChange`

---

## 17. Hooks

Hooks should communicate the capability or state they provide.

**Prefer:**
`useArticle`, `useCurrentUser`, `useViewport`, `useKeyboardShortcuts`, `usePublicationStatus`, `useMediaQuery`, `useRelatedContent`.

**Avoid:**
`useArticleStuff`, `useWindowThings`, `useHelper`, `useDataManager`.

Do not add `Hook` to the name.

---

## 18. Types and Interfaces

Types should describe the modeled concept.

**Prefer:**
`Article`, `ArticleSummary`, `ArticleMetadata`, `PublicationStatus`, `WorkspaceMembership`, `SearchResult`, `MediaAsset`.

**Avoid meaningless suffixes unless convention requires them:**
`ArticleType`, `ArticleInterface`, `ArticleObject`, `ArticleData`.

When distinctions matter, encode the distinction:
`ArticleRecord`, `ArticlePayload`, `ArticleResponse`, `ArticleInput`, `ArticleDraft`, `ArticleSnapshot`. Do not use these suffixes interchangeably.

---

## 19. Variables

Variables should communicate their role in the current scope.

**Prefer:**
`selectedArticle`, `currentWorkspace`, `publicationDate`, `searchResults`, `activeFilter`, `pendingUploads`.

**Avoid:**
`data`, `item`, `obj`, `temp`, `value`, `result2`, `clickedPost`.

Short names are fine in very small and conventional scopes:
`i`, `x`, `y`, `id`, `url`. Do not mechanically lengthen every local variable.

---

## 20. Collections

Pluralize collections naturally:
`articles`, `members`, `searchResults`, `pendingUploads`.

For maps and registries, encode the structure when useful:
`articlesById`, `routesBySlug`, `componentRegistry`, `featureRegistry`.

Avoid misleading plurals for scalar values.

---

## 21. Files and Directories

File and directory names should reflect the concept they contain:
`article-preview.tsx`, `content-reference-picker.tsx`, `publication-status.ts`, `article-repository.ts`, `media/`, `search/`, `navigation/`.

Respect the repository's casing convention. Do not introduce PascalCase filenames into a repository using kebab-case, or vice versa, without a deliberate migration.

Avoid folders such as `misc/`, `stuff/`, `helpers/`, `new-components/`, `random/`. A directory name should communicate a coherent domain or architectural responsibility.

---

## 22. Routes

Routes are product language. Prefer durable concepts:
`/settings`, `/account`, `/projects`, `/publications`, `/articles/[slug]`.

Avoid exposing temporary implementation vocabulary unless intentional. Do not rename public routes casually during a naming cleanup. Route changes can affect bookmarks, search indexing, analytics, external links, email links, documentation, and integrations. Treat public URL changes as product migrations, not ordinary code refactors.

---

## 23. Repositories, Adapters, Providers, Registries, and Architecture Terms

Use architecture terms precisely:

* **Repository:** Use when the abstraction provides domain-oriented access to persisted or external data (`ArticleRepository`, `WorkspaceRepository`).
* **Adapter:** Use when translating between incompatible interfaces or representations (`SanityArticleAdapter`, `LegacyAccountAdapter`).
* **Provider:** Use when supplying dependencies, state, configuration, or contextual resources (`ThemeProvider`, `AuthProvider`, `FeatureFlagProvider`).
* **Registry:** Use when maintaining a lookup or catalog of known implementations or definitions (`ComponentRegistry`, `FeatureRegistry`, `RendererRegistry`).
* **Serializer:** Use for converting a runtime structure into a transport/storage representation.
* **Parser:** Use for interpreting an input representation into a structured form.
* **Validator:** Use for determining whether something satisfies defined constraints.
* **Normalizer:** Use for converting equivalent input variations into a canonical representation.

Do not use architectural nouns as decoration.

---

## 24. Product Copy and Engineering Names Are Separate Systems

User-facing copy, editorial prose, and engineering identifiers represent three distinct layers in Om's design system. All three share the same foundational values of precision, calmness, restraint, and zero fluff, but each serves a different audience and lifecycle:

### The Three Disciplines Defined

1. **Product & Interface Voice (`product-voice.md`) : What the user sees:**
   - Governs user-facing UI copy: button labels, menu items, settings, dialog text, input labels, empty states, and errors.
   - Enforces the tone hierarchy (Functional, Explanatory, Expressive), eliminates filler and pseudo labels (no decorative `[ ARTICLE ]` pill badges), and enforces strict placeholder standards.
   - *Example output:* A button labeled `"Save changes"`, an article recommendation section labeled `"Also Read"`, a search header labeled `"Fast search"`.

2. **Long-Form Writing Voice (`article-writing.md`) : What the reader reads:**
   - Governs narrative essays, technical breakdowns, dev notes, and case studies.
   - Enforces intellectual clarity, getting to the core idea early, dissecting mechanics and psychology, and eliminating artificial wonder or marketing breathlessness.
   - *Example output:* Deep technical explorations and analytical prose on personal sites and publications.

3. **Professional Codebase Naming (`codebase-naming.md`) : What the engineer writes:**
   - Governs the source code: component identifiers, state variables, hooks, types, functions, CMS schemas, files, and architectural modules.
   - Enforces semantic durability: naming abstractions by what they represent and what responsibility they own, rather than their current visual styling or temporary user-facing copy.
   - *Example output:* A CMS schema field named `relatedContent`, an editor control named `ContentReferencePicker`, and a frontend component named `RelatedContentSection`.

### Layer Separation in Practice

Never bind implementation identifiers to marketing copy or transient UI labels unless the phrase itself is a permanent domain concept:

* **UI label (Product Voice):** `"Also Read"` -> **Schema field:** `relatedContent` -> **Editor control:** `ContentReferencePicker` -> **Frontend renderer:** `RelatedContentSection`
* **UI label (Product Voice):** `"For You"` -> **Engineering concept:** `Recommendations` -> **Service:** `RecommendationRepository`
* **UI label (Product Voice):** `"Continue Reading"` -> **Engineering concept:** `ReadingProgress` -> **Hook:** `useReadingProgress`

When writing code, respect both voice skills: use `product-voice.md` to ensure the interface copy on screen is crisp and honest, use `article-writing.md` when authoring long-form content, and use `codebase-naming.md` to ensure the underlying code is semantically sound and durable across redesigns.

---

## 25. Professional Does Not Mean Copying Apple

Large product companies often demonstrate disciplined terminology, but this skill must not fabricate or claim knowledge of private internal naming conventions.

Use public product and platform terminology as inspiration only when appropriate. Do not write: *"Apple would definitely call this X."* Instead, reason from platform conventions, established interface vocabulary, product semantics, local codebase conventions, and documented references.

The objective is professional naming quality, not imitation.

---

## 26. New Code Workflow

When creating new code:
1. Inspect nearby code.
2. Inspect product terminology.
3. Inspect relevant files in `references/`.
4. Identify the domain concept.
5. Identify the layer.
6. Identify the responsibility.
7. Choose established vocabulary.
8. Avoid presentation-specific naming unless presentation is the abstraction.
9. Check for collisions or conflicting terminology.
10. Use the project's casing and file conventions.

For a new concept, briefly consider at least two viable names internally before selecting one. Prefer the name that is semantically accurate, shorter without losing meaning, consistent with neighboring code, durable across redesigns, and recognizable to another engineer.

---

## 27. Existing Codebase Safety Rule

When auditing an existing codebase, do not rename identifiers immediately.

Renaming can break imports, exports, dynamic imports, tests, snapshots, route loaders, CMS schemas, persisted field names, database columns, API contracts, analytics, CSS selectors, automation, external integrations, generated code, documentation, public URLs, serialized content, and string-based registries.

An apparently cosmetic rename can become a compatibility migration. Therefore, existing-codebase naming work uses a mandatory two-stage process.

---

## 28. Stage One: Audit Only

Before changing anything:
1. Inspect project structure, naming conventions, product terminology, and relevant `references/`.
2. Identify candidate names and locate their definitions.
3. Locate every reference that can reasonably be found.
4. Classify migration risk.
5. Propose replacements.
6. Create a before-and-after audit sheet.

Do not modify production code during this stage. Do not opportunistically rename neighboring files. Do not perform a "cleanup while here." The audit must be separable from implementation.

---

## 29. Required Before and After Audit Sheet

For every proposed rename, produce a table containing:

| Current name | Proposed name | Kind | Reason | References found | Risk | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `AlsoReadDropdown` | `ContentReferencePicker` | UI/CMS input | Names semantic responsibility instead of current control | 8 | Medium | Used by Sanity Studio |
| `BlogCard` | `ArticlePreview` | UI component | Represents article preview, not generic card geometry | 14 | Low | No public contract |
| `showPopup` | `isDialogOpen` | state | Boolean proposition and actual UI concept | 3 | Low | Local state only |

The audit sheet must be shown to the user before implementation. When helpful, group proposals into categories:
* Safe local renames
* Cross-module renames
* Schema-sensitive renames
* Public-contract renames
* Do-not-touch without migration

---

## 30. Approval Gate

After presenting the audit, stop. Do not implement renames until the user explicitly approves them.

Approval may apply to:
* the entire sheet;
* selected rows;
* a category;
* individually specified names.

If the user rejects or modifies a proposal, update the plan. Do not interpret general enthusiasm as approval to mutate the codebase. A clear instruction such as *"Go ahead with all of them"* or *"Rename only rows 1, 3, and 4"* is required.

---

## 31. Reference Discovery Before Rename

Before changing an approved identifier, search for its complete dependency surface across declarations, imports, exports, re-exports, barrel files, aliases, dynamic imports, lazy references, JSX usage, tests, stories, fixtures, mocks, snapshots, documentation, CSS selectors, data attributes, analytics events, telemetry, registry keys, route definitions, API handlers, query strings, CMS schemas, previews, serializers, database mappings, migrations, and string literals.

Use language-aware reference tools when available, alongside textual search because not every dependency is statically resolvable. Do not assume IDE references are exhaustive.

---

## 32. Classify the Rename Before Performing It

Every rename should be classified:

* **A. Local identifier rename** (e.g. `showPopup` -> `isDialogOpen`): Usually low risk.
* **B. Internal component/module rename** (e.g. `BlogCard` -> `ArticlePreview`): Requires import/export tracing.
* **C. File or directory rename:** Requires path/import/reference tracing.
* **D. Schema identifier rename** (e.g. `alsoRead` -> `relatedContent`): Potentially high risk because persisted content may depend on the field name.
* **E. Database or persistence rename:** Requires migration planning.
* **F. Public API rename:** Requires compatibility strategy.
* **G. Route rename:** Requires redirect, SEO, analytics, and link analysis.
* **H. Analytics or event rename:** May fragment historical reporting.
* **I. Public package/export rename:** May affect external consumers.

Do not treat categories D through I as simple search-and-replace operations.

---

## 33. Preserve Stable External Contracts

A professional internal name does not justify breaking a stable external contract.

If a public contract has an imperfect name, consider keeping the public name, improving only the internal alias, adding a compatibility alias, deprecating gradually, or creating a migration layer:
```typescript
// Public legacy field
const alsoRead = data.alsoRead;

// Internal semantic mapping
const relatedContent = normalizeRelatedContent(alsoRead);
```
Naming quality must not outrank compatibility.

---

## 34. Schema and CMS Guardrails

Schema names require special caution.

Before renaming a Sanity field, document type, object type, Portable Text block, or annotation, determine whether the identifier exists in persisted content. Never assume changing `name: 'alsoRead'` to `name: 'relatedContent'` is merely cosmetic.

Inspect existing documents, GROQ queries, generated types, previews, validation, desk structure, migrations, serializers, frontend queries, webhooks, and external consumers.

Prefer changing the editor-facing title independently when only the visible wording needs improvement. For persisted schema identifiers, propose a migration before modifying the name.

---

## 35. File Rename Guardrails

Before renaming a file:
* find all import paths;
* inspect path aliases;
* inspect dynamic imports;
* inspect case sensitivity;
* inspect tests;
* inspect build scripts;
* inspect documentation references;
* inspect deployment-specific paths.

Be especially careful on systems where case-only renames behave differently (e.g. `articleCard.tsx` to `ArticleCard.tsx`).

---

## 36. Dynamic and String-Based References

Static reference tools cannot find everything. Search for string usage when the architecture uses registries, dependency injection, plugin names, event buses, serialization, CMS block types, database values, feature flags, route names, command IDs, or analytics names.

Treat string identifiers as contracts until proven otherwise.

---

## 37. Migration Execution

After approval:
1. Perform the smallest coherent batch.
2. Update the definition.
3. Update all known references, imports, and exports.
4. Update tests, stories, and fixtures.
5. Update documentation where appropriate.
6. Update string references only when they represent the same identifier.
7. Preserve compatibility where required.
8. Run project validation (`npm run build`, tests, typechecks).
9. Search again for the old name.
10. Inspect git diff for accidental changes.

Do not mix unrelated refactors into the rename. A naming migration should remain reviewable.

---

## 38. Post-Rename Verification

After implementation, verify that the old name is no longer present where it should have been removed. Run appropriate checks (`typecheck`, `lint`, `tests`, `build`, `schema validation`).

Then perform another repository-wide search for the old identifier and classify remaining hits:
* Expected legacy compatibility
* Historical documentation
* Migration file
* Unrelated same-language phrase
* Stale reference requiring repair

Do not simply report "zero compile errors" as proof that the rename is complete.

---

## 39. Never Rename Blindly by Global Replacement

Do not use an indiscriminate repository-wide replacement without understanding each match.

The same word may refer to multiple concepts: `Card` may refer to a design-system primitive, an article preview, a payment card, or a dashboard panel. Each requires separate reasoning.

---

## 40. Naming Audit Heuristics

During an audit, flag names that exhibit one or more of these problems:

* **Appearance-bound:** `BlueButton`, `LeftBox`, `GrayArea`
* **Implementation-bound:** `AlsoReadDropdown`, `SearchModal` (when concept is broader than current modal presentation)
* **Generic:** `DataManager`, `ContentComponent`, `Helper`, `Utils`
* **Ambiguous:** `Item`, `Object`, `Value`, `Entry` (when domain concept is available)
* **Misleading:** `ArticleRepository` when it merely formats article titles
* **Product-language conflict:** `BlogPost` inside a product that consistently calls the concept `Story`
* **Redundant:** `ArticleCardComponent` when `ArticlePreview` already communicates the abstraction
* **Overengineered:** `ArticleRelationshipSelectionManagementController`
* **Temporally fragile:** `NewHeader`, `OldSearch`, `V2Card` (unless version identity is intentionally part of architecture)

---

## 41. Choosing Between Similar Professional Terms

Do not treat related terms as interchangeable:

* **Picker vs. Selector:** `Picker` often implies browsing/searching richer options (`MediaPicker`, `DatePicker`, `ContentReferencePicker`). `Selector` often describes a control selecting among known choices (`LanguageSelector`, `WorkspaceSelector`).
* **Preview vs. Summary:** `Preview` suggests inspecting before opening (`ArticlePreview`). `Summary` suggests a condensed representation of information (`ArticleSummary`).
* **Panel vs. Sheet vs. Dialog:** Use design-system behavioral definitions.
* **Action vs. Button:** `Button` describes the UI primitive; `Action` describes semantic intent (`PublishAction`).
* **Field vs. Input:** `Field` includes label, validation, and control semantics; `Input` refers specifically to the input control or custom CMS input.

---

## 42. Naming Families

Related concepts should form coherent naming families:
* Good: `ArticlePreview`, `ArticleMetadata`, `ArticleActions`, `ArticleStatus`, `ArticleRepository`
* Good: `WorkspaceSwitcher`, `WorkspaceMenu`, `WorkspaceMembership`, `WorkspaceSettings`

Avoid mixing synonyms without reason (`ArticlePreview`, `PostMetadata`, `StoryActions`, `BlogStatus`).

---

## 43. Avoid Premature Abstraction Names

Do not assign a highly general name before the abstraction is genuinely general. A component used only for article authors should not automatically be called `EntityIdentityPresentation`; prefer `AuthorIdentity`. Generalize only when reusable across multiple domains.

---

## 44. Acronyms

Use acronyms that are already standard in the codebase or domain (`URL`, `HTML`, `HTTP`, `API`, `ID`, `CMS`, `SEO`). Avoid inventing obscure abbreviations (`RCP` for `RelatedContentPicker`).

---

## 45. Numbered and Versioned Names

Avoid `Header2`, `SearchNew`, `CardV3`, `NewNavigation`. Prefer concept-based differentiation (`GlobalNavigation`, `SectionNavigation`, `CompactNavigation`). Explicit version names are acceptable only for real protocol or schema versions (`ArticlePayloadV2`, `ApiV3Client`).

---

## 46. Temporary Names

Temporary implementation names should not quietly become permanent architecture. If unavoidable (e.g. `LegacySearchAdapter`), document why it exists and what condition allows removal. Avoid permanent `New`, `Old`, `Temp`, or `Legacy` prefixes without context.

---

## 47. Tests

Test names should describe behavior or responsibility clearly. File names should track the concept under test (`article-preview.test.tsx`, `content-reference-picker.test.tsx`, `publication-status.test.ts`).

---

## 48. Analytics Naming

Analytics event names are data contracts. Before renaming `article_opened`, determine whether historical dashboards, pipelines, experiments, or warehouse queries depend on it.

---

## 49. Accessibility and Naming

Engineering names should not encode inaccessible assumptions. Avoid concept names based purely on color, position, or mouse interaction (`RedWarning`, `RightPanel`, `HoverMenu`). Prefer `ErrorBanner`, `InspectorPanel`, `ContextMenu`.

---

## 50. Framework Neutrality

Do not force framework terminology into domain names (`ArticleReactComponent`, `VueSearchWidget`, `NextArticleLoader`). Prefer `ArticlePreview`, `SearchPanel`, `ArticleLoader`.

---

## 51. Naming Review Checklist

Before accepting a name, ask:
1. Does it describe the actual concept?
2. Does it describe the correct layer?
3. Does it communicate responsibility?
4. Does it use the product's established vocabulary?
5. Does it align with `references/` where relevant?
6. Does it align with neighboring code?
7. Is there a recognized industry term for this?
8. Would the name survive a visual redesign?
9. Would the name survive an implementation change?
10. Is it unnecessarily long?
11. Is it too generic?
12. Does it misuse an architecture term?
13. Is it tied to current marketing copy?
14. Does it introduce a synonym for an existing concept?
15. Could another engineer reasonably predict what it contains?
16. Does it preserve public or persisted contracts?

---

## 52. Examples Across Different Layers

| Weak Name | Better Name | Why It Is Better |
| --- | --- | --- |
| `AlsoReadDropdown` | `ContentReferencePicker` | Names semantic selection responsibility |
| `AlsoReadComponent` | `RelatedContentSection` | Names rendered product concept |
| `BlogCard` | `ArticlePreview` | Describes what the UI represents |
| `BigArticleCard` | `FeaturedStory` | Names product role rather than size |
| `ProfileDropdown` | `AccountMenu` | Uses semantic navigation concept |
| `ThreeDotMenu` | `OverflowMenu` | Removes icon-specific naming |
| `XButton` | `DismissAction` | Names intent rather than glyph |
| `SearchPopup` | `SearchPanel` | Avoids vague popup terminology |
| `GrayLoader` | `ContentSkeleton` | Uses established loading vocabulary |
| `UploadBox` | `FileDropzone` | Names behavior |
| `ChooseImageModal` | `MediaPicker` | Names durable concept |
| `FormattingButtons` | `FormattingToolbar` | Uses established UI vocabulary |
| `GreenDot` | `PresenceIndicator` | Names meaning |
| `PublishedChip` | `PublicationStatus` | Names semantic state |
| `useGetArticle` | `useArticle` | Capability-focused hook name |
| `useKeys` | `useKeyboardShortcuts` | Explicit responsibility |
| `articleService` | `ArticleRepository` | Appropriate when it owns article persistence access |
| `sanityMapper` | `ArticleAdapter` | Appropriate when translating Sanity representation |
| `componentMap` | `ComponentRegistry` | Names lookup/catalog responsibility |
| `settingsStuff` | `ApplicationConfiguration` | Names concept precisely |
| `clickedPost` | `selectedArticle` | Names state rather than interaction history |
| `showPopup` | `isDialogOpen` | Boolean proposition and actual concept |
| `handleData` | `normalizeArticle` | Names transformation |
| `userData` | `AccountProfile` | Names modeled information |
| `miscUtils` | split by responsibility | Generic utility bucket hides concepts |

---

## 53. Example Audit

Suppose the repository contains:
```
components/
  BlogCard.tsx
  AlsoReadDropdown.tsx
  SearchPopup.tsx
sanity/
  schemas/
    article.ts
```

An audit proposes:

| Current | Proposed | Type | Risk | Rationale |
| --- | --- | --- | --- | --- |
| `BlogCard` | `ArticlePreview` | component | Low | Represents a compact article preview |
| `AlsoReadDropdown` | `ContentReferencePicker` | Sanity input | Medium | Selects a related content reference; dropdown is incidental |
| `SearchPopup` | `SearchPanel` | component | Low | Search experience is presented as a dedicated panel |
| `alsoRead` | `relatedContent` | persisted schema field | High | Better domain name, but requires content migration |

The first three are implementation candidates. The fourth must not be renamed until persisted content and query migration are understood.

---

## 54. When Not to Rename

Do not rename merely because another name sounds slightly more elegant. Keep the existing name when it is already clear, widely established, changing it provides little semantic benefit, it is a public contract, migration risk outweighs clarity gain, or the alternative is only stylistic preference.

---

## 55. Output Expectations During an Audit

When asked to audit naming in an existing repository, return:
1. A concise summary of the naming system already present.
2. Relevant vocabulary found in the product and `references/`.
3. The before-and-after audit sheet.
4. Migration-risk notes.
5. Any names that should remain unchanged.
6. Any unresolved terminology questions.
7. A clear indication that implementation has not yet occurred.

---

## 56. Output Expectations During New Development

When creating a new abstraction, choose the name directly if the concept is clear. Do not interrupt implementation with unnecessary naming debates. If the name is consequential or ambiguous, explain the selected concept briefly:

> Using `ContentReferencePicker` because the component's responsibility is selecting a content reference; the current dropdown presentation is incidental.

---

## 57. Final Standard

The codebase should feel as though its names were chosen by people who understand the product, not generated from the shape of the JSX.

Professional naming produces a system where domain concepts are consistent, UI names communicate behavior, architectural names are used precisely, files are predictable, state reads naturally, events describe what occurred, public contracts remain stable, and implementation details do not leak unnecessarily into conceptual names.

The best name is rarely the most elaborate one. It is the name that makes the correct idea obvious.

---

# Part 7: Apple HIG & Universal Accessibility

# Apple Human Interface Guidelines & Universal Accessibility

A universal design standard and auditing framework grounded in the Apple Human Interface Guidelines (HIG), radical simplicity, and comprehensive accessibility across physical and cognitive domains.

> "The interface must be brutally simple. There should not be technical language or clutter. The UI should be so effortless that even a grandmother can use it without hesitation. Very few buttons, no clutter, no complex UI. The app should hide complex things behind the scenes: even during system design, the underlying architecture must absorb complexity so the human experience is obvious, calm, and direct."

---

## 1. The Grandma Standard (Brutal Simplicity)

Every interface must pass the **Grandma Test**: an everyday person with zero technical background should be able to complete their task without confusion, anxiety, or instruction.

### Core Rules

1. **Zero Technical Jargon:**
   - Never expose engineering concepts, internal system states, pipeline stages, database terminology, or protocol errors in user-facing surfaces.
   - Speak in clear, human, direct terms: describe what something is, what the person can do with it, and what happens next.
2. **Minimal Buttons & Zero Visual Noise:**
   - Every view must have **one obvious primary action**, not competing actuators.
   - Eliminate unnecessary badges, auxiliary toggles, decorative containers, and nested menus.
   - If a screen feels busy, subtract elements until only the essentials remain. Whitespace is a structural material, not empty space to be filled.
3. **Hide Complexity Behind the Scenes:**
   - Multi-step processing, file conversions, asynchronous background polling, and data normalization must execute quietly in the background.
   - The user sees only a calm status description (e.g., *"Reading document…"*, *"Preparing summary…"*) and the final result.
   - System design and data models must absorb computational complexity so the user never has to manage it.
4. **Forgiving by Default:**
   - Destructive actions must provide immediate, friction-free undo or simple, clear confirmations.
   - Forms and inputs must accept natural variations (e.g., flexible date and phone formats) without throwing rigid validation errors.

---

## 2. Apple HIG: Eight Core Design Principles

Every screen, flow, and component must embody these eight foundational principles:

### 1. Purpose: Design with Intention
Identify what matters most to people and focus relentlessly on making those core tasks effortless. Resist feature bloat and secondary distractions.

### 2. Agency: Let People Act Their Own Way
Give people freedom, keep them continuously informed of system state, and make recovery from mistakes easy, painless, and obvious.

### 3. Responsibility: Act in People's Best Interest
Prioritize user safety, data privacy, and complete transparency about what the product does. Disclose limitations where they materially matter.

### 4. Familiarity: Build on What People Know
Use established physical and digital patterns consistently. A search field looks like a search field; a back button takes you back; reading flows naturally. Never invent unprompted, proprietary interaction paradigms for standard tasks.

### 5. Flexibility: Adapt to Diverse Contexts & Needs
Support diverse devices, screen sizes, input methods (touch, pointer, keyboard, assistive hardware), orientations, and human perspectives.

### 6. Simplicity: Be Clear and Direct
Remove the unnecessary; every element must earn its place. If an element does not help someone understand or act, delete it.

### 7. Craft: Care About Every Detail
Show dedication through thoughtful execution, smooth 60fps/120fps interactions, exact alignments, consistent typographic hierarchy, and robust error resilience.

### 8. Delight: Make It Human
Design for the emotions you want to inspire: calm, trust, reassurance, and satisfaction. Delight comes from quiet competence and clarity, never from intrusive gimmicks or theatrical animations.

---

## 3. Accessibility Foundations

An accessible interface must be:

- **Intuitive:** Uses familiar, predictable, and consistent interactions that make tasks completely straightforward.
- **Perceivable:** Never relies on a single sensory method to convey information. Content must be accessible through sight, hearing, and touch.
- **Adaptable:** Flexibly adapts to how people want to use their device, honoring Dynamic Type, system font scaling, reduced motion, and assistive personalization.

---

## 4. The Six Disability Categories & Implementation Standards

### 1. Vision
- **Fluid Type Scaling:** Support Dynamic Type and user font-scaling without text clipping, truncation, or broken layout containers.
- **Contrast Ratios:** Meet WCAG AAA where feasible (minimum 4.5:1 for body copy; 3:1 for large display type; 7:1 for fine metadata).
- **Dual-Channel Signaling (Never Color Alone):** Color must never be the sole conveyor of state or meaning. Always pair color cues with text labels, distinct icons, or geometric shapes (e.g., pair an alert color with an exclamation mark icon and clear text).
- **Screen Reader Semantics:** Use semantic HTML elements (`header`, `main`, `footer`, `nav`, `article`, `figure`, `figcaption`). Provide concise, descriptive `alt` text for images and visually-hidden context (`.sr-only`) for screen readers when visual surfaces are intentionally minimal.

### 2. Hearing
- **Text Alternatives:** Provide comprehensive text-based alternatives for all audio and video media (captions, subtitles, transcripts, written summaries).
- **Multi-Sensory Cues:** Pair all auditory alerts or audio cues with visual indicators (e.g., status changes, visual flashes, banners).

### 3. Mobility
- **44×44px Minimum Touch Targets:** Every interactive element (buttons, links, pickers, toggles, controls) must have an interactive hit target of at least 44×44 CSS points/pixels, regardless of its visual font size or icon size.
- **Adequate Spacing:** Separate adjacent interactive controls by at least 8px to prevent accidental taps.
- **Full Keyboard Navigation:** All interactive elements must be focusable via `Tab` and triggerable via `Enter`/`Space`.
- **Prominent Focus Indicators:** Focus rings must be high-contrast, prominent, and unambiguous:
  ```css
  :focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }
  ```
- **Simple Gestures:** Never require multi-finger gestures, long drags, or precision speed for core navigation. Always provide standard single-tap/click alternatives.

### 4. Speech
- Ensure 100% of functionality is operable via keyboard and pointer inputs alone.
- Guarantee full compatibility with assistive technologies such as Switch Control, Full Keyboard Access, and Voice Control.

### 5. Cognitive
- **Streamlined Single-Path Tasks:** Present one primary decision at a time. Group related items logically; avoid fragmented or branching choices.
- **No Time-Boxes:** Never impose artificial countdowns, expiring timers, or timed interaction traps on normal reading or task completion.
- **Avoid Excessive Animation:** Keep UI elements still. Users should never have to chase moving buttons or read jumping text.
- **Full Media Playback Control:** Never autoplay media with sound. Allow users to pause, scrub, and stop any playback at will.
- **Predictable Error Recovery:** Explain what happened in plain language and provide a direct path forward.

### 6. Motion
- **Respect Reduced-Motion Preferences:** Check `prefers-reduced-motion: reduce`. When active, immediately halt decorative animation loops, parallax, and continuous motion, rendering a still, calm frame:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
- **Comfortable Boundaries:** Keep elements within comfortable view boundaries. Avoid abrupt camera shifts, disorientation, or aggressive parallax.

---

## 5. Architectural & System Design Compliance

The requirement for brutal simplicity applies directly to **system design and backend data models**:

1. **Absorb Complexity in Architecture:**
   - If an operation requires multiple sequential API calls, background file polling, or format conversions, encapsulate that inside a single backend orchestration service.
   - The user-facing application should observe a simple, deterministic state machine: `idle` → `loading` → `ready` | `error`.
2. **Deterministic State Modeling:**
   - Eliminate race conditions, partial states, and visual flicker. State transitions must be linear and predictable.
3. **Resilient Data Contracts:**
   - When upstream services or CMS platforms return empty data or missing optional fields, fail gracefully with clean fallback UI rather than broken layouts or technical stack traces.

---

## 6. Pre-Flight HIG & Accessibility Audit Checklist

Before considering any UI or component complete, verify:

- [ ] **The Grandma Test:** Is the screen so obvious that an everyday person or elderly relative could use it without asking questions?
- [ ] **Jargon Check:** Are all technical, engineering, and internal database terms removed from the UI?
- [ ] **Action Hierarchy:** Is there exactly one obvious primary action on this screen?
- [ ] **Touch Target Size:** Does every clickable or tappable control have an interactive target of at least 44×44px?
- [ ] **Keyboard Navigability:** Can the entire flow be operated using `Tab`, `Shift+Tab`, and `Enter`/`Space` with clear visual focus rings?
- [ ] **Color Independence:** Is information conveyed by text, shape, or position in addition to color?
- [ ] **Contrast Verification:** Does text meet or exceed WCAG AAA/AA contrast standards against its background?
- [ ] **Motion Safety:** Does the view respect `prefers-reduced-motion` with static, dormant fallbacks?
- [ ] **Error Clarity:** Do error states explain what happened in human terms and offer a clear next step?
- [ ] **Screen Reader Support:** Are semantic HTML landmarks used, with descriptive labels on all unlabeled buttons or icon controls?

---

# Part 8: Intentional Craft

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

---

# Part 9: Design Language Architect

# Design Language Architect

Works with any brand and any design language. It does three jobs:

1. **Scan** the repo and find the design language it already has, written or implied.
2. **Upgrade** that language into a design document that is specific, testable, enforceable by agents, and built to produce distinctive interfaces.
3. **Design with it**, forcing the model past the first, average idea every time.

It never replaces a brand's identity with another one. It makes the existing identity sharper. It pairs with `intentional-craft.md` (bundled under `references/`), which holds the craft rules this skill enforces: the swap test, the Burrito definition of done, the point of view, craft details, the Editor's Pass, the ceiling option, and the experiment slot. Read it completely before step 3.

> **A design document exists to make the next screen better than the average screen. If an agent could follow every rule in it and still produce a generic interface, the document is not finished.**

---

## When to Run Which Mode

| Situation | Mode |
| --- | --- |
| The user asks to improve, audit, or rewrite their design.md or design system | Scan, then Upgrade |
| The repo has no design document and UI work is requested | Scan, then Upgrade (create), then Design |
| A good design document exists and UI work is requested | Scan (light), then Design |
| Interfaces in the repo look generic | Scan, Upgrade the composition and signature sections, then Design |

Always follow an audit-first, plan-second flow: show findings and a before-and-after plan, and get agreement before rewriting the user's design document.

---

## Mode 1: Scan

### 1.1 Find the sources

Search the repo in this priority order. Stop treating a source as authoritative once a higher one covers the same topic, but keep reading lower sources to detect drift.

1. **Design documents:** `design.md`, `DESIGN.md`, `design-system.md`, `docs/design/**`, `.design/**`, `STYLEGUIDE.md`, `brand.md`, `BRAND.md`, `**/design-language*.md`, agent rule files that contain design rules (`CLAUDE.md`, `AGENTS.md`, `.cursor/rules/**`, `.github/copilot-instructions.md`).
2. **Tokens:** `tokens.json`, `**/tokens/**`, `*.tokens.json`, Style Dictionary config, Figma token exports.
3. **Theme code:** CSS custom properties in `:root` and theme selectors, `tailwind.config.*` and `@theme` blocks, `theme.ts`, CSS-in-JS theme objects, SCSS variable files.
4. **Components:** the component library folder (`components/ui`, `src/components`, `packages/ui`), Storybook stories.
5. **Live surfaces:** the most important existing pages. Run the app or open the deployed site if available, and look at it.
6. **Brand assets:** fonts in `public/fonts`, logos, favicons, Open Graph images.

### 1.2 Build the inventory

Extract what the repo actually says and does into one inventory. Record the source file for every item.

```
Identity:      name, POV (if any), audience, product purpose
Color:         every color token, its role, both themes, where it is used
Type:          families, scale, weights, line heights, tracking
Space:         base unit, scale, how gaps are actually used
Shape:         radii, borders, elevation, material (blur, grain, shadow)
Motion:        durations, easings, what moves and why
Iconography:   library, stroke, sizes
Components:    primitives that exist, their states, what is missing
Composition:   recurring layouts, grid, density, page archetypes
Voice:         tone, copy rules, terminology
Accessibility: contrast, focus, touch targets, reduced motion
Agent rules:   any instructions already aimed at AI agents
```

### 1.3 Find generic patterns already shipped

Search the code for the detection signatures in the Generic Pattern Catalog (`intentional-craft.md`), such as `animate-ping` or `animate-pulse` dots inside `rounded-full` pills, `bg-clip-text text-transparent` gradient headlines, `blur-3xl` color blobs, and scroll-reveal on every section. List every occurrence with its file. These become removal findings in the upgrade plan.

### 1.4 Detect drift

List every place where the document and the code disagree (a token in the doc that the code never uses, a hard-coded color the doc never mentions, a font loaded but undocumented). Do not silently pick a winner. Default rule: **the document holds intent, the code holds the values actually shipped.** Ask the user to resolve conflicts that change how the product looks.

---

## Mode 2: Upgrade

### 2.1 Score the current language

Score each dimension from 0 to 3 and show the table before and after the upgrade.

| Dimension | 0 | 3 |
| --- | --- | --- |
| **Point of view** | None | Written For / Believe / Refuse that rules options out |
| **Specificity** | Adjectives ("clean, modern, bold") | Exact values and named decisions |
| **Testability** | Rules cannot be checked | Every rule can be answered yes or no |
| **Coverage** | Colors and fonts only | Tokens, components, states, motion, voice, accessibility, composition |
| **Code agreement** | Doc and code disagree widely | Doc matches shipped values; drift is logged |
| **Distinctiveness** | Could describe any product | Signature moves only this brand would make |
| **Creative guidance** | Says nothing about layout | Composition repertoire, banned defaults, experiment policy |
| **Agent enforceability** | Prose only | Numbered, imperative agent rules with checks |
| **Accessibility floor** | Absent | Contrast, focus, touch, motion, and language rules stated |

The two dimensions that most often score 0, and that cause generic AI interfaces, are **Distinctiveness** and **Creative guidance**. Spend the most effort there.

### 2.2 Upgrade rules

1. **Preserve the identity.** Never change brand colors, fonts, logo, name, or voice on your own. Sharpen and complete them. Anything that changes identity goes in a clearly marked `Proposed` block for the user to accept or reject.
2. **Turn adjectives into rules.** "Clean" becomes "at most two type weights per view and no more than one accent element per screen". "Bold" becomes "display type at 72px or larger with -0.03em tracking on the opening statement". If you cannot translate an adjective, ask what it means to them.
3. **Derive signature moves from evidence.** Look at the best existing screen and the brand's assets. Name 3 to 5 decisions that are already distinctive or could be, for example an unusual grid, a specific way of showing data, a material, a recurring interaction, a typographic habit. Each one must be concrete enough to apply to a new screen.
4. **Write banned defaults for this brand.** The Generic Pattern Catalog in `intentional-craft.md` is always banned and is included by reference; never re-allow an item without the owner's explicit approval and a written reason. Then add the patterns specific to this brand that would clash with its POV.
5. **Fill gaps with proposals, not inventions passed off as fact.** Missing dark mode, missing states, missing motion, missing voice: draft them in the brand's spirit and mark them `Proposed`.
6. **Fix accessibility without asking.** Contrast failures, missing focus styles, and touch targets under 44×44px are corrected, and the correction is noted.
7. **Keep it proportional.** A small site gets a short document. Do not pad. Every line must change what an agent would build.
8. **Log drift and decisions.** End the document with a changelog and open questions.

### 2.3 Output structure

Write the upgraded document with these sections, in this order. Skip a section only when it truly does not apply, and say why.

```markdown
# <Brand> Design Language

Version, last audited date, sources scanned.

## 1. Point of view
For / Believe / Refuse. One-sentence principle.

## 2. Signature moves
3 to 5 named, concrete decisions only this brand makes, each with where and how to apply it.

## 3. Banned defaults
Generic patterns this brand never uses, each with what to do instead.

## 4. Tokens
Color (semantic roles, both themes, verified contrast), type scale, spacing,
radius, elevation and material, motion. Tables plus a copy-paste CSS variable block
that matches the code.

## 5. Composition
Grid, density, asymmetry, page archetypes, how sections differ from each other,
what makes a page feel like this brand.

## 6. Components and states
Primitives, anatomy, and every state: default, hover, focus, active, disabled,
loading, empty, error, success.

## 7. Interaction and motion
What moves, why, durations, easings, reduced-motion behavior.

## 8. Voice and copy
Tone, terminology, button and error patterns, banned phrases.

## 9. Accessibility floor
Contrast, focus, touch targets, keyboard, motion, language.

## 10. Experiments and ceiling
How experiments are labelled, where they may live, the kill criteria format,
and the kinds of ambitious ideas this brand wants explored.

## 11. Agent rules
Numbered, imperative, testable rules. Must include: read this file before UI work,
use tokens only, apply at least one signature move per new surface, use no banned
defaults, animate every state change (enter and exit), show no browser or library
default anywhere, make every element responsive from 320px to 2560px, run the divergence protocol, run the Editor's Pass and the
inspection passes, report unverified items.

## 12. Changelog and open questions
What changed in this version, drift found, decisions waiting on the owner.
```

### 2.4 Adopting the upgraded language

A new or substantially upgraded design language is adopted in the interface through five gated stages: research the existing surfaces, build several running prototype options, run `ui-edge-cases.md` (bundled under `references/`) and a bug sweep on the chosen option, get explicit approval, then wire it in. Never apply a new language straight to production.

### 2.5 Where to write it

- **If a design document exists:** update it in place after the user approves the plan. Show a summary of changes (sections added, rules sharpened, proposals waiting). Never delete an existing rule without listing it in the changelog with the reason.
- **If none exists:** create `DESIGN.md` at the repo root unless the repo's conventions point elsewhere.
- **If the repo has agent rule files** (`CLAUDE.md`, `AGENTS.md`, and similar): propose a one-line pointer telling agents to read the design document before UI work. Do not rewrite those files without asking.

### 2.6 Upgrade report

Finish the upgrade with:

```
Score:        before and after for each dimension
Added:        new sections and rules
Sharpened:    vague rules that became testable, with before and after wording
Proposed:     identity changes waiting for approval
Drift:        doc and code conflicts and how each was resolved
Open:         questions for the owner
```

---

## Mode 3: Design With It

Use this every time a new surface is designed or substantially changed, under any design language.

### 3.1 Load

Read the design document's POV, signature moves, banned defaults, tokens, and agent rules. If any of these are missing, run a light Upgrade for the missing sections first and mark them `Proposed`.

### 3.2 Diverge

The first idea is the average of everything the model has seen. Do not build it as-is. Write three structurally different directions, a few lines each:

| Direction | Purpose | Must include |
| --- | --- | --- |
| **A, Dependable** | The clearest version of the expected pattern | Passes the swap test; uses the brand's tokens and voice |
| **B, Signature** | Built around one or more signature moves | Names the signature move and why it fits this content |
| **C, Ceiling** | Something too expensive to build before | Living, data-driven, or new interaction model; cost and risk stated |

For each direction state: layout, lead element, key interaction, signature move used, and how it recomposes on a 320px phone. Directions must differ in **composition or interaction**, not only color, imagery, or copy.

### 3.3 Converge

Choose with the POV. State in one or two sentences why the winner won and what was carried over from the others. Default to **B**, or **A with B's signature move**, when the surface is a primary task flow that must pass a plain-language, one-primary-action simplicity test. **C** ships only with the user's agreement, or on secondary and exploratory surfaces.

### 3.4 Creative minimums

Every new surface must meet all of these:

- Uses at least one signature move.
- Uses zero banned defaults and zero Generic Pattern Catalog items (no pulsing-dot pill badges, no announcement pills, no gradient headlines, no glow blobs, no scroll-reveal on every section).
- Fails the swap test (could not belong to another product).
- Has one named decision only this product would make.
- Has a labelled experiment, or a stated reason for having none.
- Varies composition from the neighbouring pages: a different structure, density, or lead element, while keeping the same language.
- Works at every width from 320px to 2560px, at 400% zoom and 200% text, in both orientations, and with touch only; every direction (A, B, and C) describes how it recomposes on a phone.

### 3.5 Build and edit

Build with tokens only. Before delivery, run `ui-edge-cases.md` with edge fixtures and fix every in-scope case. Animate every change and design every visible element; no browser default ships. Then apply `intentional-craft.md`: craft details, the full definition of done, the Editor's Pass with an Editor's Cut, and the exacting standard's inspection passes. Report unverified items honestly.

### 3.6 Feed the system

If the work produced a new pattern, token, or a repeated correction, propose adding it to the design document (a new signature move, a new banned default, a new agent rule). The design language should get sharper with every surface built on it.

---

## Guardrails

- **Never impose another brand's look.** Om's design system, or any other system bundled with this skill, is never applied to a different brand. Only the craft discipline and the accessibility floor transfer.
- **Creativity never breaks the basics.** Signature moves and experiments never reduce contrast, hide the primary action, remove keyboard access, ignore reduced motion, or make copy less literal.
- **Ask before identity changes.** Colors, fonts, logos, names, and voice change only with the owner's approval.
- **No invented facts.** Do not claim a token, metric, or rule exists in the repo unless you found it. Mark everything new as `Proposed`.

---

## Checklist

- [ ] Sources scanned in priority order and listed
- [ ] Inventory built with a source for every item
- [ ] Code searched for Generic Pattern Catalog signatures, occurrences listed
- [ ] Drift between doc and code listed and resolved or asked
- [ ] Score table shown before and after
- [ ] POV, signature moves, and banned defaults written
- [ ] Adjectives converted into testable rules
- [ ] Identity changes isolated in `Proposed` blocks
- [ ] Agent rules section written and numbered
- [ ] Three directions written before building any new surface
- [ ] Creative minimums met
- [ ] `ui-edge-cases.md` run with edge fixtures; edge case report delivered
- [ ] New or upgraded languages adopted through research, prototypes, edge cases, approval, then wiring in
- [ ] `intentional-craft.md` Editor's Pass completed

---

# Part 10: Raster (Optional Extension)

# Raster: Optional Design Language

**Status:** optional extension of Om's existing design language (`design-system.md`). It adds to that system and never replaces it. Without an explicit request, the base system applies on its own.
**Core idea:** a continuous field, drawn through a discrete sampler. Crisp content, sampled atmosphere.

Raster is built from four families seen across Om's work:

1. **Fields:** gradients, from monochrome mesh gradients with grain to warm-neutral tonal surfaces.
2. **Samplers:** stipple and dot matrix scenes, letterforms built from dots, squares, triangles, and bars, pixel sprites, and character fields.
3. **Lines:** letterforms sliced into horizontal bars (the Geist Pixel Line typeface), with dashed typographic construction guides exposed.

4. **Frames:** the boxed layout. Rails, full-width rules, square nodes at intersections, cells with shared edges, bracket callouts, and a dotted gutter outside the frame. Frames can be used on their own.

The reference images are a starting point, not a template. Copying them literally is a failure of this language. Every Raster surface should take the ideas further (section 8).

Raster is not a set of effects. It is a grammar: **Field × Sampler × Modulation × Motion × Input.** Every treatment in this file is one combination, and agents are expected to derive new ones (section 7).

---

## 1. Activation and Scope

### When Raster is active

- The user or brief asks for Raster, or for the dot, stipple, lined, gradient, boxed, or framed language. Any single family (for example only Frames) may be activated on its own.
- Expressive Om surfaces where it is invited: home hero, project covers and case study openers, research visualizations, section interruptions, 404 and empty states, loading states, Open Graph images, generative or visual tools, closing moments.

### Where Raster never goes

- Body copy, long-form reading text, form fields, settings, tables of record, error dialogs, legal text.
- Any control smaller than 44×44px, and any label under 24px.
- The primary task path of a tool, unless the raster element is the content the person is working on (as in a texture or gradient tool).

### What Raster inherits unchanged

Everything in the base system and the other references still applies: tokens, typefaces, the single accent, voice, naming, interface judgment, the Grandma Test, accessibility, and `intentional-craft.md`. Raster adds a layer; it does not replace one.

### Adoption flow (required)

Raster is never applied directly to production. Every adoption, whether a whole site, one page, or one component, moves through five stages in order. A stage does not start until the previous one has produced its output. Going back a stage is always allowed; skipping one is not.

```
1. Research existing  >  2. Prototype options  >  3. Edge cases and bugs  >  4. Approval  >  5. Wire in
```

**1. Research existing**

Understand what is there before proposing anything.

- Run the audit from `audit-and-plan.md` on the target surface.
- Inventory the content and, most importantly, the real data that could drive a field (dates, slugs, activity, metrics, archive size, build logs).
- Check the codebase: tokens in use, fonts already loaded (is Geist Pixel present?), animation tooling, rendering setup, performance budget.
- Note which Raster families fit the content and which do not.

*Output:* a short research brief with candidate surfaces, available drivers, constraints, and risks.

**2. Prototype options**

Show, do not describe. Build several real, running prototypes, isolated from production (a lab route such as `/lab/raster/<surface>`, a Storybook story, or a published artifact).

- At least three options, following the divergence protocol in `intentional-craft.md`: **A Dependable** (closest to the current design, Raster used lightly), **B Signature** (built around Raster signature moves), **C Ceiling** (a new treatment derived from the grammar).
- Each option shows: the Raster families used, the real driver, the raster budget, and its cost to build and maintain.
- Each option runs at 320px, 768px, and 1440px, in light and dark, and with reduced motion, so the comparison is honest.
- Options are presented side by side. The person can choose one, combine parts, or send it back to research.

*Output:* running prototypes and a comparison table.

**3. Edge cases and bugs**

Take the chosen direction and try to break it, using `ui-edge-cases.md`.

- Prepare edge fixtures and run the full catalog, including the Raster-specific cases (section 3.12 of that file).
- Run the bug sweep: console, layout shift, leaks, race conditions, build.
- Fix everything found in scope, in the prototype, and re-check.

*Output:* the edge case report, with every in-scope case fixed and verified, and anything untested listed.

**4. Approval**

Ask for explicit approval of the specific prototype and its edge case report. Approval covers that surface and that version only. A changed design after approval returns to stage 3 for the changed parts.

*Output:* the person's explicit approval in chat.

**5. Wire in**

Only now does Raster enter production code.

- Add the tokens and self-hosted fonts; build components with semantic names (`codebase-naming.md`).
- Integrate behind a flag or one surface at a time where the codebase supports it.
- Remove prototype scaffolding and lab-only fixtures from production paths.
- Re-run `ui-edge-cases.md` against the integration with real data, then the inspection passes from `intentional-craft.md` section 9.
- Deliver with the Editor's Cut and the final edge case report.

*Output:* the integrated surface, a passing build, and the post-integration edge case report.

### Generic Pattern Catalog exceptions (owner approved)

`intentional-craft.md` bans some patterns by default and lets the owner re-allow them with a written reason. Om has approved these exceptions **inside Raster only**, under the rules of this file:

| Catalog pattern | Allowed form in Raster | Reason |
| --- | --- | --- |
| Gradients and blurred color fields | Mesh, tonal, radial, and stepped gradients from the Raster palettes in section 2, never multi-hue | The field is the raw material every sampler draws from |
| Grain or noise overlay | Grain only on gradient surfaces, 2% to 6%, to prevent banding and give material | Removes banding; makes fields read as physical |
| Grid or dot background pattern | Dot and line lattices that are driven by content, data, or input (section 8) | The lattice is the sampler, not wallpaper |
| Pointer-reactive effects | One per page, on the hero raster element only | Makes the field respond to the person, labelled as the page's experiment |
| Every section inside a container | One continuous ruled frame with shared 1px edges, no per-cell borders, shadows, or card backgrounds (section 5) | The frame is the page's structure made visible, not a stack of cards |
| Dot pattern in the background | A gutter field outside the rails only (section 5) | Marks the space outside the content frame |

Everything else in the catalog stays banned, including pulsing-dot pill badges, gradient text fills, purple-to-blue gradients, and scroll-reveal on every section.

---

## 2. Fields: Gradients

A gradient in Raster is a **field**: a continuous value across space. Use one only when you can say what the field means: light, focus, direction, progress, time, or data. A gradient with no meaning is decoration and is not allowed.

### 2.1 Gradient types: when, where, and why

| Type | What it is | When to use | Where | Why |
| --- | --- | --- | --- | --- |
| **Mesh** | 3 to 6 control points blended into a soft, organic surface (images 1 and 2) | The page needs a material surface with depth but no imagery | Home hero backdrop, project covers, Open Graph images, gradient or texture tools | Gives an atmosphere that is unique per page when seeded from content |
| **Tonal ramp** (linear) | One hue, from dark to light in a single direction | Something has direction or progression | Letterforms brightening line by line, timelines, progress, section transitions | Direction carries meaning: earlier to later, less to more |
| **Radial falloff** (vignette) | Bright center fading to the edges, or the reverse | Attention should go to one point | Behind a specimen, a sprite, or a hero number; edges of full-bleed fields | Focus without a box or border |
| **Stepped** (posterized) | A ramp cut into 4 to 8 hard bands | Values are discrete states, or the field must bridge into a raster sampler | Status scales, before/after, heat steps, backgrounds behind dot matrix type | The bands match the discreteness of dots and lines |
| **Conic** | Value sweeps around a center | The data is cyclical or angular | Dials, time of day, progress rings, compass headings | The geometry matches the quantity |
| **Data** (sequential scale) | Values mapped to a ramp | Showing magnitude across a grid or map | Heatmaps, waffle charts, density maps | Lets the eye compare magnitudes |
| **Scrim** | Transparent to `bg-primary` | Text must sit on a field or image | Under captions and titles placed over mesh fields | Guarantees contrast without a box |
| **Brushed** | A field with directional grain (horizontal streaks, as in images 1 and 2) | The surface should feel like a physical material | Large mesh surfaces, cover art | Adds material and hides banding |

### 2.2 Palettes

Fields use one hue family plus neutrals. Never more.

```
Monochrome   #000000  #141414  #2e2e2e  #5c5c5c  #9a9a9a  #d4d4d4  #f0f0f0
Warm neutral #0f0d0b  #1f1a16  #4a4038  #7d6e5e  #b3a18a  #d6c8b4  #ece6dc
Ember        #000000  #1a0c06  #3a1c0e  #8a3412  #ff5a1f      (accent, one moment per page, small area)
Light mode   #ffffff  #f2f2f2  #d6d6d6  #a8a8a8  #6b6b6b  #2e2e2e
             #fbf8f3  #ece4d8  #cdbfa9  #9c8a72  #5e5143
```

- **Monochrome** is the default (image 1).
- **Warm neutral** is for personal, photographic, or human subjects (image 2).
- **Ember** is reserved for one decisive moment: a sprite, a highlighted dot, a single point in a field. It never fills a large area.
- Banned: rainbow or hue-rotating fields, purple-to-blue, pink-to-orange, saturated multi-hue meshes.

### 2.3 Field rules

1. **Meaning first.** Write what the field represents before drawing it (light, focus, direction, time, data, or a content seed).
2. **Seed from content.** Mesh control points, colors within the palette, and grain seeds derive from something real (the page slug, publish time, project data), so each page's field is unique and reproducible.
3. **Grain always on large fields.** Any gradient larger than 400px gets 2% to 6% grain to stop banding.
4. **Text on fields passes contrast at its worst point.** Measure 4.5:1 against the brightest pixel behind body text and 3:1 behind display text. Use a scrim when it fails.
5. **Motion is slow or none.** Animated fields drift with a cycle of 20 seconds or longer, pause when offscreen or in a hidden tab, and render a static frame under `prefers-reduced-motion: reduce`.
6. **One hero field per page.**

### 2.4 Implementation

```css
/* Tonal ramp across lines of a heading (image 4): each line one step brighter */
.raster-ramp > :nth-child(1) { color: var(--raster-mono-3); }
.raster-ramp > :nth-child(2) { color: var(--raster-mono-4); }
.raster-ramp > :nth-child(3) { color: var(--raster-mono-5); }

/* Radial falloff behind a specimen */
.raster-focus {
  background: radial-gradient(60% 60% at 50% 45%, var(--raster-mono-2), var(--bg-primary) 100%);
}

/* Mesh approximation with layered radial fields plus grain */
.raster-mesh {
  background:
    radial-gradient(40% 50% at 30% 60%, var(--raster-warm-5), transparent 70%),
    radial-gradient(35% 45% at 75% 70%, var(--raster-mono-5), transparent 70%),
    radial-gradient(50% 40% at 50% 10%, var(--raster-mono-1), transparent 70%),
    var(--bg-primary);
}
.raster-grain::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: var(--raster-grain);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
}
```

Use CSS for tonal, radial, and stepped fields. Use canvas or WebGL for true mesh fields with draggable or seeded control points, with a static image fallback.

---

## 3. Samplers: Stipple, Dot Matrix, and Pixel

A **sampler** reads a field (or a letterform, or an image) at regular or scattered points and draws a primitive at each one.

### 3.1 Sampler types

| Sampler | How it samples | Seen in | Use for |
| --- | --- | --- | --- |
| **Dot matrix** | Regular lattice; each cell is on or off | Letters built from dots (images 4 and 5) | Display type (set in Geist Pixel), numbers, wordmarks, LED-style status |
| **Halftone** | Regular lattice; dot size follows the field value | Shaded planets and moons (image 3) | Images, portraits, covers, low-resolution placeholders |
| **Stipple** | Scattered points (blue noise); density follows the field value | Starfields and scattered dust (image 3) | Atmospheric scenes, empty states, 404s, illustration |
| **Pixel sprite** | Hand-placed square pixels on a small grid | The astronaut sprite (image 3) | Mascots, small characters, human moments; the one Ember moment |
| **Mixed primitive** | Each letter, word, or line uses a different primitive: dot, square, triangle, bar, solid | "PIXEL" and "YOU CAN JUST SHIP THINGS" (images 4 and 5) | Wordmarks and display moments where the primitive encodes meaning (section 6); set by switching Geist Pixel variants |
| **Glyph field** | Characters ordered by visual density, chosen by field value | The `. : - + * 0 1 ■` field (image 5) | Data textures, build and log moments, generative backgrounds driven by real data |

### 3.2 Raster type: the Geist Pixel family

Raster letterforms are set in real fonts, not drawn as images. The Geist Pixel family provides one variant per primitive (Square, Grid, Circle, Triangle, and Line; confirm the exact variant names in the installed `geist` package). Because it is real text, it stays selectable, searchable, translatable, and readable by screen readers.

| Variant | Primitive | Raster role |
| --- | --- | --- |
| Geist Pixel Square | square | Projects; solid pixel moments; numeric readouts |
| Geist Pixel Grid | square on a visible lattice | Builds, status, structured data |
| Geist Pixel Circle | dot | Writing; dot matrix display (already in the base system) |
| Geist Pixel Triangle | triangle | Direction, change, emphasis within mixed-primitive words |
| Geist Pixel Line | horizontal bar | Research; scanline headlines with construction guides (image 6) |

Self-host the variants with `@font-face` and `font-display: swap`, like the base typefaces. Draw letterforms on canvas only when the effect cannot be done with the font (letters sampled from a field, a lens effect, re-sampling transitions), and then keep the real text beside it with the canvas `aria-hidden="true"`.

### 3.3 Primitives

`dot` · `square` · `triangle` · `horizontal bar` · `vertical bar` · `plus` · `glyph` · `solid`

Each composition uses a small set: **at most three primitives in one view**, unless the mixed-primitive treatment is the point and each primitive carries meaning.

### 3.4 Sampler rules

1. **One pitch per composition.** Lattice pitch comes from the tokens (`--raster-pitch-*`) and aligns to the 4px base unit.
2. **Minimum size.** Dot diameter at least 2px. Geist Pixel display type at 32px and up. Geist Pixel Square or Grid may set short numeric readouts (counters, timestamps, progress) down to 14px. Never use it for sentences under 32px.
3. **Grayscale by default.** Dots use the field palette. Ember marks exactly one element.
4. **Real text is always present.** Prefer the Geist Pixel fonts, which are real text. When letterforms are drawn on canvas, the canvas is `aria-hidden="true"` and the real words sit beside it.
5. **Deterministic.** Scattered stipple uses a seeded generator so the scene is the same on every load and every server render.
6. **One variant per meaning.** Within a page, a variant keeps one meaning (section 7). Do not switch variants for variety alone.

### 3.5 Implementation sketch

```css
@font-face {
  font-family: 'Geist Pixel Line';
  src: url('/fonts/GeistPixel-Line.woff2') format('woff2');
  font-display: swap;
}
.raster-type { font-family: var(--font-pixel-circle); font-size: clamp(32px, 7vw, 112px); line-height: 1; }
.raster-type--line { font-family: var(--font-pixel-line); }
```

For images and fields (not type), sample on canvas:

```ts
// Sample an image or field into a dot matrix.
// 1. Draw the source (text or image) to an offscreen canvas.
// 2. Read luminance at each lattice point.
// 3. Draw the primitive with size or presence from that value.
function sampleToRaster(source: ImageData, pitch: number, drawPrimitive: (x: number, y: number, value: number) => void) {
  for (let y = pitch / 2; y < source.height; y += pitch) {
    for (let x = pitch / 2; x < source.width; x += pitch) {
      const i = (Math.floor(y) * source.width + Math.floor(x)) * 4;
      const value = source.data[i] / 255; // 0 to 1 luminance from the red channel of a grayscale source
      if (value > 0.04) drawPrimitive(x, y, value);
    }
  }
}
```

Render to canvas with device pixel ratio capped at 2, or to SVG when the dot count stays under roughly 3,000. Ship a static PNG or SVG fallback for Open Graph images and no-JavaScript contexts.

---

## 4. Lines: Scanline Type and Construction Guides

Lines expose structure. Precision is the aesthetic, and lines are the most literal way to show it.

### 4.1 Line treatments

| Treatment | What it is | Seen in | Use for |
| --- | --- | --- | --- |
| **Scanline letterforms** | Letters sliced into horizontal bars, set in Geist Pixel Line | "What will you ship next?" (image 6) | Headlines, closing questions, section openers |
| **Construction guides** | Full-width dashed lines at baseline, x-height, and cap height | The dashed lines in image 6 | Pairing with scanline type; showing the typographic skeleton |
| **Column rhythm** | Thin vertical lines marking the grid columns | The vertical lines behind "PIXEL" (image 5) | Revealing the layout grid behind a specimen |
| **Line ramp** | Bars whose thickness follows a field value | Bar-built letters (images 4 and 5) | Transitions between solid and sampled states |

### 4.2 Line rules

1. **Orientation means something.** Horizontal lines belong to text and time. Vertical lines belong to columns and structure. No diagonal decorative lines.
2. **Weights:** scanline bars 2px to 4px with equal or larger gaps; guides 1px dashed in `border-subtle` or `border-default`.
3. **Guides must be true.** A construction guide sits exactly on the baseline, x-height, or cap height it claims to mark.
4. **Never on body text, never as a full-page CRT overlay.** Line type applies to display sizes, 32px and up.
5. **Contour lines are lines too.** Iso-lines traced from a field (section 8.3) follow the field, so they may curve; all other decorative lines stay horizontal or vertical.

### 4.3 Implementation

```css
/* Scanline letterforms: Geist Pixel Line, real selectable text */
.raster-scanline {
  font-family: var(--font-pixel-line);
  font-size: clamp(32px, 8vw, 120px);
  line-height: 1;
  color: var(--text-primary);
}

/* Construction guides placed at the font's real metric positions */
.raster-guide {
  position: absolute;
  left: 0;
  right: 0;
  border-top: 1px dashed var(--border-default);
}
```

Read the baseline, x-height, and cap height from the font's metrics (or measure them once with canvas `measureText`) so the guides sit exactly on them.

---

## 5. Frames: The Boxed Layout

Frames make the page's structure visible. Instead of floating sections, the page is drawn as one continuous ruled framework: rails down the sides, rules across the width, nodes where they cross, and cells that share their edges. It reads like a technical drawing, an instrument panel, or a ledger. It is the one place where Om's structural thinking is shown literally.

Frames can be used on their own, without fields or samplers, or combined with them (a stipple globe inside a framed cell, a Geist Pixel headline inside a ruled band).

### 5.1 Anatomy

| Part | What it is | Seen in |
| --- | --- | --- |
| **Rails** | Vertical lines bounding the content column, running the full page height | The dashed verticals either side of the article (image 7) |
| **Rules** | Horizontal lines at section boundaries, bleeding past the rails to the viewport edge | The dashed line under the breadcrumb row (image 7) |
| **Nodes** | Small squares (6px to 8px) where a rail meets a rule | The corner squares around the feature row (image 8) |
| **Cells** | Regions bounded by shared rules; each edge is drawn once and shared by both neighbours | The three feature cells and the logo grid (images 8 and 9) |
| **Brackets** | Corner-bracket callouts with a dashed body, anchored to a point in a figure | The latency callouts on the globe (image 8) |
| **Gutter field** | A faint dot lattice filling the space outside the rails | The dotted margins (image 8) |
| **Ledger strip** | A row of label and mono value pairs separated by rules | The live counters row (image 9) |
| **Margin rail** | A secondary column bounded by its own rail, for an index or metadata | The "On this page" column (image 7) |

### 5.2 Frame rules

1. **One frame per page.** It is established at the top and runs continuously to the footer. Lines never stop at random; a line ends at a node, at another line, or at the viewport edge.
2. **Shared edges, never doubled.** Two adjacent cells share one 1px rule. A cell never has its own border, shadow, or background card. This is what separates a frame from the banned "every section in a card" pattern.
3. **Line style carries meaning.** Solid rules are structure. Dashed rules are provisional, annotation, or secondary structure. Choose one as the frame's base and use the other only with a stated meaning.
4. **Neutral by default.** Rules and nodes use `border-subtle` or `border-default`. The accent appears on at most one bracket or node per page, marking the single most important fact (image 8).
5. **Square frame, soft contents.** Frame lines, nodes, and brackets have square corners. Components inside cells (buttons, inputs, images) keep the base system's squircle radii. The contrast is intentional.
6. **On the grid.** Rails align to grid columns. Every rule lands on the 4px base unit and on whole pixels, never on a half pixel.
7. **Cells are units of content.** Each cell holds one idea: one feature, one fact, one metric, one entry. Cell padding is consistent across the frame (24px or 32px). A cell may change fill (`bg-secondary`) on hover or when active; it never gets a shadow.
8. **Mono for metadata.** Labels in frames (dates, coordinates, counters, "On this page") use Relative Mono or Geist Pixel at small sizes, carrying real metadata only.
9. **Recomposes on small screens.** Below tablet width the rails move to the page edges with a 16px to 20px inset, the gutter field disappears, cells stack while still sharing rules, and nodes stay at intersections.
10. **Does not re-allow logo clouds.** A framed grid holds evidence (a quote, a metric, a case), not a wall of customer logos (image 9 shows the pattern to avoid in content, not in structure).

### 5.3 Where frames fit

Writing articles, research notes, changelogs, documentation, project overviews, metrics and status pages, and landing pages built on evidence. Avoid frames on very short pages (the structure outweighs the content) and on immersive photo essays (rules compete with the images).

### 5.4 Motion in frames

The frame follows "Everything animates" in `design-system.md`:

- **Persistent frame.** On route changes the frame stays in place (View Transitions with a shared frame), and only cell contents change. The site feels like one instrument rather than a series of pages.
- **Rules draw, cells fill.** On first load of a framed section, rules draw along their length (200ms to 300ms) before content fades in. Under reduced motion, everything fades in together.
- **Live values roll.** Ledger values that change while the page is open roll digit by digit (image 9). They only roll when the real value changes, never as a count-up on load.
- **Shared rules move together.** When a cell expands, the rules it shares slide with it, and neighbouring cells compress in the same motion.

### 5.5 Derived frame concepts

Build on these, and derive more from the grammar in section 8.

| Concept | The idea |
| --- | --- |
| **Node index** | Nodes double as section markers. The current section's node fills with the accent; clicking or focusing a node jumps to its section. The frame becomes the navigation. |
| **Ruler rails** | Rails carry small tick marks at every section, with the section's position in mono, like a ruler. Scroll position is shown on the structure itself. |
| **Cell coordinates** | Every cell gets a coordinate (`A1`, `B3`) in mono at its corner. Coordinates are deep links (`#b3`) and can be cited in prose ("see B3"). |
| **Status by line style** | Draft or in-progress content sits in a dashed frame; published content in a solid one. A research note's confidence or status is visible from its frame. |
| **Unit of evidence** | Each cell holds one claim with its source in mono along the bottom rule. A framed section reads as a set of checkable facts. |
| **Expanding cell** | Activating a cell expands it to span the row while its neighbours compress, rules sliding with it, for detail without leaving the page. |
| **Annotation brackets** | Brackets anchor to exact coordinates in a figure with a short leader line. They are focusable, keyboard reachable, and expand on focus to show the full note. |
| **Draggable divider** | In a before and after comparison, the shared rule between two cells is the drag handle. The structure is the control. |
| **Density as narrative** | Technical sections divide into more, smaller cells; conclusions open into one wide cell. The frame shows where the page is dense and where it rests. |
| **Breaking the frame** | Exactly one element per page may cross a rail (a photograph bleeding into the gutter, an oversized number). It is the page's labelled experiment. |
| **Gutter as signal** | With samplers active, the gutter field's density follows something real, such as reading progress or the page's length, instead of a fixed texture. |
| **Frame skeletons** | While content loads, the frame and empty cells are drawn first, so the layout is exact before anything arrives. |
| **Crop marks** | In print styles and exported images, the frame reduces to crop marks and nodes, carrying the same structure onto paper. |
| **Ledger as status** | A ledger strip at the top or bottom of a tool shows real live state (sync status, items processed, last saved) in mono, rolling as it changes. |

### 5.6 Implementation sketch

```css
.frame {
  --frame-line: 1px dashed var(--border-default);
  position: relative;
  max-width: 1120px;
  margin-inline: auto;
  border-inline: var(--frame-line);              /* rails */
}
.frame-rule {
  border-top: var(--frame-line);
  margin-inline: calc(50% - 50vw);              /* bleed to the viewport edge */
}
.frame-cells {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;                                      /* shared 1px rules */
  background: var(--border-subtle);              /* the gap color draws the rules */
}
.frame-cells > * { background: var(--bg-primary); padding: var(--space-xl); }
.frame-node {
  position: absolute;
  width: var(--frame-node);
  height: var(--frame-node);
  border: 1px solid var(--border-strong);
  background: var(--bg-primary);
  translate: -50% -50%;
}
.frame-bracket {
  border: 1px dashed color-mix(in srgb, var(--accent) 60%, transparent);
  /* four corner brackets drawn with background-image or pseudo-elements */
}
```

---

## 6. Composition

1. **Crisp content, sampled atmosphere.** Words people read, controls they use, and data they rely on stay crisp vector text. Raster surrounds and frames them.
2. **Raster budget.** Per page: one hero-scale raster element and at most two small ones (a loading state, a sprite, an inline dot chart). More than that becomes wallpaper. A frame is structure and does not count toward the budget; a gutter field counts as one small element.
3. **Contrast of resolution.** Place a sampled element next to something perfectly crisp (a mono caption, a precise number). The tension between the two is the look.
4. **Scale.** Raster earns its place at large scale or very small scale. The middle (card-sized decorations) is where it turns generic.
5. **Black space.** Raster sits on `bg-primary` with generous empty space around it, as in images 3 and 6.
6. **Pair with evidence.** A raster hero sits beside a real fact in mono: a date, a version, a count.

---

### 6.1 Responsive Raster

Every Raster family works at every width. Raster recomposes; it never just scales down.

| Family | Wide screens | Narrow screens (below 768px) |
| --- | --- | --- |
| **Fields** | Full-bleed mesh behind the hero | Field crops around its focal point rather than squeezing; control points re-seed for portrait aspect; grain stays the same physical size |
| **Samplers** | Pitch from `--raster-pitch-md` or larger | Pitch steps down one token so shapes keep resolving; dot count capped for performance; stipple scenes re-compose to keep the ember point in view |
| **Raster type** | Display sizes via `clamp()` | Never below 32px; long words in Geist Pixel break across lines deliberately or switch to the base typeface rather than overflow |
| **Lines** | Construction guides span the full width | Guides stay attached to the text block and remain exactly on the font metrics at every size |
| **Frames** | Rails at the content column, gutter field outside | Rails move to a 16px to 20px inset, gutter field removed, cells stack and still share edges, nodes stay at intersections, margin rail becomes a sheet or inline index |
| **Brackets and callouts** | Anchored beside the figure | Move below the figure as a numbered list keyed to markers on the figure |
| **Pointer effects** | Pointer-reactive on the hero | Disabled on touch; replaced by a tap or focus state, or a static frame |
| **Canvas** | Device pixel ratio capped at 2 | Re-rendered on resize and orientation change (debounced), at lower dot counts on low-power devices |

Check every Raster surface at 320, 390, 768, 1024, 1440, and 2560 widths and in landscape.

## 7. Signature Moves

These are the decisions that make a Raster surface belong to Om:

1. **The primitive is the category.** Om's three sites map to three primitives: **dots for writing** (omrajguru.com), **squares and pixels for projects** (projects.omrajguru.com), **lines for research** (research.omrajguru.com). Wordmarks, covers, and loading states use their site's primitive. Mixed-primitive type is used only where categories meet, such as the home page.
2. **Brightening ramp.** Multi-line display statements step one tone brighter per line, so the last line lands at full brightness (image 4).
3. **Exposed skeleton.** Scanline headlines show their construction guides (image 6).
4. **One ember point.** A single Ember element in an otherwise grayscale raster scene, usually a pixel sprite or one highlighted dot (image 3).
5. **Seeded fields.** Every page's field is derived from its own content, so no two pages share an identical hero.
6. **The frame is the navigation.** In framed pages, nodes mark sections and the current one carries the single accent (section 5.5).

---

## 8. The Grammar: Deriving New Ideas

Agents are expected to invent new Raster treatments, not only reuse the ones above. Build a treatment by choosing one option from each column.

| Field (what drives it) | Sampler (how it is drawn) | Modulation (what the value changes) | Motion | Input |
| --- | --- | --- | --- | --- |
| Mesh gradient | Dot matrix | Dot size | None | None |
| Tonal ramp | Halftone | Density | Slow drift (20s+) | Pointer position |
| Radial falloff | Stipple | Brightness | Resolve (sampled to solid) | Scroll progress |
| Stepped bands | Pixel grid | Primitive type | Fill in proportion to real progress | Real progress of a task |
| Letterform or image | Mixed primitive | Orientation | Re-sample on state change | Time of day |
| Real data (activity, metrics, audio) | Scanline | Line thickness | Settle on load, then still | Content seed (slug, date) |
| Time | Glyph field | Glyph choice | Pause offscreen | Keyboard focus |
| Content age | Ordered dither (Bayer) | Variant (Geist Pixel) | Erode or accrete over days | Reading position |
| Difference between two versions | Contour (iso-lines) | Line spacing | Morph between primitives on state change | Live system status |
| Topic or category | Two overlaid lattices (moire) | Interference spacing | None | Sound or voice level |
| Page structure (sections, cells) | Frame (rails, rules, nodes) | Line style (solid or dashed) | Rules draw, shared edges slide | Section in view, cell activated |

### 8.1 Derivation rules

1. **Name the driver.** Every new treatment states what real thing drives its field. "Random" is not a driver; a seed from content is.
2. **Pass the swap test.** If the treatment would look the same on another person's site, change the driver or the primitive until it would not.
3. **Stay inside the budget and the palette** (sections 2.2 and 6).
4. **Label it.** A new treatment ships as the page's experiment from `intentional-craft.md`, with a reason, a boundary, and kill criteria.
5. **Feed it back.** A treatment that works gets added to section 8.2.

### 8.2 Derived treatments (starting set)

| Treatment | Field | Sampler | Modulation | Input or motion |
| --- | --- | --- | --- | --- |
| **Halftone placeholder** | The image itself at low resolution | Halftone | Dot size | Resolves into the real image when loaded |
| **Reading density** | Article progress | Stipple in the header | Density | Fills as the reader progresses, tied to real scroll position |
| **Commit halftone cover** | Project activity per day | Dot matrix | Dot size | Static; regenerates on each build |
| **Time-of-day mesh** | Hour of publish or current local time | Mesh | Brightness and warmth within the palette | Changes only on load |
| **Lens hero** | Hero letterform | Dot matrix | Dot size grows near the pointer | Pointer, hero only, off for touch and reduced motion |
| **Honest loader** | Real task progress | Dot grid | Dots switch on in order | Matches actual progress, never faked |
| **Archive calendar** | One cell per day with a post | Dot matrix | Presence and brightness | Static; each dot links to that day's post |
| **Sampled theme switch** | The page field | Dot matrix | Re-sample dark to light | Re-samples across about 300ms instead of a cross-fade |
| **Waveform line** | Real audio amplitude | Scanline bars | Line thickness | Follows playback |
| **Skeleton guides** | Final layout positions | Construction lines | Presence | Guides show where content will appear while loading |
| **Path field 404** | The missing URL, hashed | Glyph field | Glyph choice | Static scene with the pixel sprite as the ember point |
| **Slug cover** | Hash of the page slug | Mesh plus mixed-primitive title | Control points and primitive per word | Static; used for Open Graph images |
| **Resolve on focus** | Heading letterform | Scanline | Line thickness thickens to solid | When the heading's section receives keyboard focus or is the active anchor |
| **Density chart** | Real metric distribution | Stipple | Density | Static, with an accessible text summary |

These are examples. A good agent builds new rows from the grammar every time Raster is used.

### 8.3 Further directions (push past the references)

The references show fields, dots, and lines as surfaces. These directions use them as systems: identity, navigation, time, and data. Each is a starting point to develop, not a finished spec.

| Direction | The idea | Built from |
| --- | --- | --- |
| **Typographic status** | A live status word changes Geist Pixel variant with real state: Line while idle, Grid while building, Square when shipped. The word stays the same; its primitive reports the state. | Live system status to variant |
| **Primitive identicons** | Each project, post, or note gets an 8×8 or 12×12 mark generated from its slug, drawn in its site's primitive. It works as cover, favicon, and list marker, and never collides with another item's mark. | Content seed to pixel grid |
| **Contour fields** | Iso-lines traced from a mesh field, like a topographic map. On a research page, the contours come from the data being discussed, so the decoration is literally the dataset. | Mesh or data field to contour lines |
| **Patina** | Older content renders sparser: a post's cover loses dots with age, recent work is dense. The archive shows time without dates. | Content age to stipple density |
| **Moire diff** | Two versions of a design or dataset drawn as slightly offset lattices; the interference pattern appears exactly where they differ. Useful in case studies showing before and after. | Difference to two lattices |
| **Dithered portraits** | Photographs rendered with ordered dithering in the Warm neutral palette, at a pitch where the face resolves at reading distance and dissolves up close. | Image to ordered dither |
| **Constellation index** | The writing archive as a stipple sky: one star per post, brightness from reading time, clusters by topic, the pixel sprite as the ember point. Each star is a real, focusable link with a list view alternative. | Archive data to stipple |
| **Stipple shadows** | Raster surfaces cast shadows made of dots instead of blur, so depth stays in the same language as the content. | Elevation to stipple density |
| **Resolution as hierarchy** | Importance maps to resolution: the primary statement is crisp, supporting moments are progressively more sampled. The eye reads hierarchy through sharpness as well as size. | Importance to pitch |
| **Field navigation** | On a gradient or texture tool, each mesh control point is a real parameter (images 1 and 2 show numbered points). Extend it: a point's position is a value, and moving it with keyboard arrows works as well as dragging. | Parameters to control points |
| **Deploy glyph field** | A projects page backdrop where the glyph field is generated from the real latest build log, character density following log activity. Static after load. | Build log to glyph field |
| **Variant transition** | On a decisive action (publish, ship, save), a heading steps through primitives once, Line to Grid to Square, as confirmation. Static under reduced motion. | State change to variant sequence |
| **Dotted focus** | On Raster surfaces, focus rings are drawn as a ring of 2px dots in the accent, at least 3:1 contrast, following the element's radius. | Focus to dot lattice |
| **Printed proof** | Every Raster hero can export as a poster (PNG or SVG) with its seed, date, and source printed in mono in the corner, so a page's field becomes a shareable artifact. | Seed to export |

When developing any of these, run the derivation rules in 8.1, use the three-direction protocol from `intentional-craft.md`, and keep the result inside the budget, palette, and accessibility rules.

---

## 9. Motion and Interaction

- Raster motion explains state: progress, loading, resolution, response to input. It never loops for decoration.
- Durations: re-sampling 240ms to 400ms; resolve 300ms to 600ms; ambient field drift 20s or longer per cycle.
- Pointer effects only on the hero raster element, never on touch devices, and never under reduced motion.
- No flashing faster than 3 times per second. No glitch or flicker effects.
- Follow the base motion rules and the mandatory `animate` and `apple-design` skills.

---

## 10. Accessibility and Performance

- Raster elements are `aria-hidden="true"`; the real content sits beside them as text or as an accessible name.
- `prefers-reduced-motion: reduce` gets a static frame. `prefers-reduced-transparency` and `forced-colors: active` get plain backgrounds with no grain.
- Contrast is measured at the worst point of any field behind text.
- Canvas: device pixel ratio capped at 2, rendering paused when offscreen or the tab is hidden, at most one animated canvas on screen at once, and one frame under 4ms on a mid-range phone.
- Fallbacks: static PNG or SVG for Open Graph images, email, and no-JavaScript contexts.

---

## 11. Tokens

```css
:root {
  --raster-pitch-xs: 4px;
  --raster-pitch-sm: 6px;
  --raster-pitch-md: 8px;
  --raster-pitch-lg: 12px;
  --raster-pitch-xl: 16px;
  --raster-dot-min: 2px;
  --raster-line: 3px;
  --raster-line-pitch: 6px;
  --raster-guide: 1px dashed var(--border-default);
  --raster-grain: 0.04;
  --raster-drift: 24s;
  --raster-resample: 320ms;

  --frame-line-width: 1px;
  --frame-node: 7px;
  --frame-cell-pad: var(--space-xl);
  --frame-rail-inset-mobile: 16px;
  --frame-draw: 240ms;

  --raster-mono-0: #000000;
  --raster-mono-1: #141414;
  --raster-mono-2: #2e2e2e;
  --raster-mono-3: #5c5c5c;
  --raster-mono-4: #9a9a9a;
  --raster-mono-5: #d4d4d4;
  --raster-mono-6: #f0f0f0;

  --raster-warm-0: #0f0d0b;
  --raster-warm-1: #1f1a16;
  --raster-warm-2: #4a4038;
  --raster-warm-3: #7d6e5e;
  --raster-warm-4: #b3a18a;
  --raster-warm-5: #d6c8b4;
  --raster-warm-6: #ece6dc;

  --raster-ember: var(--accent);

  --font-pixel-square: 'Geist Pixel Square', var(--font-mono);
  --font-pixel-grid: 'Geist Pixel Grid', var(--font-mono);
  --font-pixel-circle: 'Geist Pixel Circle', var(--font-mono);
  --font-pixel-triangle: 'Geist Pixel Triangle', var(--font-mono);
  --font-pixel-line: 'Geist Pixel Line', var(--font-mono);
}
```

---

## 12. Banned Within Raster

- Raster on body text, form fields, or controls
- Random noise with no driver
- "Matrix rain" falling characters
- Full-page CRT scanline or curvature overlays, glitch effects, chromatic aberration
- Multi-hue or saturated gradients; more than one hue family per field
- Ember used on more than one element per page
- More raster elements than the budget allows
- Faked progress in loaders
- Geist Pixel sentences below 32px, or any Geist Pixel text in body copy
- Copying the reference images literally instead of deriving from the grammar
- Frames with doubled borders, per-cell shadows, rounded frame corners, or lines that stop at random
- A framed grid of customer logos

---

## 13. Raster Checklist

- [ ] Raster is active because the user or brief asked for it, on an invited surface
- [ ] Adoption flow followed in order: research brief, running prototype options, edge case report, explicit approval, then wiring in
- [ ] Every field has a named meaning and a real driver
- [ ] Palette is one hue family plus neutrals; Ember used once at most
- [ ] Grain on large fields; contrast passes at the worst point
- [ ] Sampler pitch from tokens; at most three primitives unless primitives carry meaning
- [ ] Raster type set in Geist Pixel fonts, or real text beside every canvas letterform
- [ ] Raster budget respected: one hero element, at most two small
- [ ] At least one signature move used; any new treatment derived from the grammar and labelled as the experiment
- [ ] Reduced motion, reduced transparency, and forced colors handled
- [ ] Canvas paused offscreen; static fallbacks exist
- [ ] Responsive Raster: every family checked from 320px to 2560px and in landscape; recomposed, not scaled down
- [ ] Frames: one continuous frame, shared 1px edges, lines end at nodes or edges, square frame corners, accent on one node or bracket at most, recomposed on mobile

---

# Part 11: UI Edge Cases

# UI Edge Cases

A design is not approved because it looks right with good data on a fast laptop. It is approved after it has been pushed through the cases that real people, real data, and real devices produce. This reference is the list of those cases and the method for checking them.

It applies to every surface under every design language, and it is a required stage before approval in the adoption flow for new design languages (for example Raster, `raster-language.md`) and for any upgraded design language (`design-language-architect.md`).

---

## 1. When to Run It

| Moment | Scope |
| --- | --- |
| **Before approval** | Against the chosen prototype, with edge fixtures. Required before asking for approval. |
| **After wiring in** | Against the production integration, with real data. Required before delivery. |
| **After any significant change** | Against the affected surfaces. |

---

## 2. Edge Fixtures

Test with prepared data, not whatever happens to be on screen. Build a fixture set for each surface:

- **Empty:** zero items, missing optional fields, no image, no author.
- **One:** exactly one item (layouts built for grids often break here).
- **Many:** 2, 7, 100, and 10,000 items.
- **Long:** the longest realistic title, name, and label; a 60-character word with no spaces; a long URL; a three-line button label in the longest locale.
- **Short:** one-character titles, single-digit numbers.
- **Odd characters:** emoji, accented characters, CJK, Arabic or Hebrew (right to left), mixed direction, zero-width characters, HTML-like strings (`<b>` shown as text).
- **Numbers:** 0, negative, very large (1,234,567,890), decimals, currency, percentages over 100.
- **Dates and time:** time zones, the daylight saving change, midnight rollover, leap day, relative times ("just now") that must update. In Om's sites, follow the placeholder standards (`17`, `17 December 2022`, `26 May 2008`, `17:00`).
- **Media:** broken image URLs, slow-loading images, portrait, landscape, and extreme aspect ratios, transparent PNGs on both themes.

---

## 3. The Edge Case Catalog

### 3.1 Content

- Empty, one, many, and very many items render correctly; empty states explain why and offer the next action.
- Long strings wrap or truncate deliberately; truncated text is available in full on focus, hover, or in a sheet.
- Unbroken strings (URLs, hashes) never widen the page (`overflow-wrap: anywhere` where appropriate).
- Missing fields leave no gaps, stray separators, or dangling labels ("By " with no name).
- Pluralization is correct for 0, 1, and many.
- User-generated content is escaped and cannot break layout or inject markup.

### 3.2 States

- Loading: instant (under 300ms, no flash of loader), normal, slow, and stalled (over 10 seconds, with a way out).
- Errors: network failure, server error, validation, permission denied, not found, rate limited, timeout. Each says what failed, what was kept, and what to do next.
- Partial success (3 of 5 uploads failed).
- Offline and reconnect, including actions taken while offline.
- Stale data and refresh; optimistic updates that must roll back on failure.
- Session expiry mid-task without losing the person's work.
- First run, disabled, read-only, and permission-limited views.

### 3.3 Input

- Double click and rapid repeated clicks do not submit twice.
- Enter submits where expected; Escape closes; Tab order follows the visual order.
- Keyboard only: every action reachable, focus always visible, focus returns to the trigger after overlays close.
- Touch only: no hover-dependent action; long press and swipe do not fight the browser's back gesture.
- Paste of long or formatted text; autofill; input method composition (Japanese, Chinese, Korean) does not submit early.
- Drag cancelled midway, dropped outside a target, or interrupted by scroll.
- Mixed input (touch laptop): hover and touch both behave.

### 3.4 Layout and Viewport

- Every width from 320px to 2560px, checked continuously; no horizontal page scroll.
- 400% zoom and 200% text size reflow without loss.
- Landscape phones with short heights; split-screen and narrow desktop windows.
- On-screen keyboard open: focused fields and primary actions stay visible.
- Safe areas: notches, rounded corners, home indicators.
- Visible classic scrollbars (Windows) do not cause overflow or misalignment.
- Right-to-left mirroring where the product supports it.
- Print output is readable and does not include interactive chrome.

### 3.5 Motion

- Interrupting an animation (opening while closing, toggling rapidly) redirects smoothly with no jump or stuck state.
- Route change or unmount during an animation leaves no orphaned elements.
- Tab hidden mid-animation, then shown again.
- Reduced motion: every change still visible as a brief fade, nothing hidden that relied on motion.
- Slow motion review at 10% speed: origins, easing, overlaps, and exits are correct.
- Low frame rate devices: no layout thrashing; animations use transform and opacity.

### 3.6 Overlays

- Only one blocking overlay at a time; nested menus inside dialogs behave.
- Focus is trapped inside modal overlays and released on close.
- Background scroll is locked and restored to the same position.
- The back button or gesture closes a sheet or dialog instead of leaving the page, where expected.
- Overlays near the viewport edge flip or shift to stay fully visible.
- Long content scrolls inside the overlay, not behind it.

### 3.7 Navigation and State

- Back and forward restore scroll position and UI state.
- Refresh mid-flow keeps or recovers progress.
- Deep links into any state (an open tab, a filtered list, an open dialog) work.
- Invalid URL parameters fall back gracefully.
- Multiple tabs open on the same content stay consistent or explain conflicts.
- Unsaved changes are protected with a custom dialog for in-app navigation.

### 3.8 Appearance

- Light and dark, switched mid-session, and following a system change.
- Forced colors (Windows high contrast): every control and focus state still visible.
- Reduced transparency: translucent and grain surfaces become solid.
- Web fonts fail or load slowly: fallback fonts have matched metrics so layout does not jump.
- Color-blind safety: no meaning carried by color alone.
- High-density displays: no blurry lines or images; moving a window between monitors with different pixel ratios re-renders canvases.

### 3.9 Performance

- Slow network (3G) and 4x CPU throttling: the page is usable while loading.
- Large lists are virtualized or paginated.
- Long sessions do not leak memory (listeners removed, canvases released).
- Canvas and animated surfaces pause when offscreen or the tab is hidden.
- Cumulative layout shift is zero for designed content.

### 3.10 Accessibility

- Screen reader: meaningful names, roles, and states; changes announced through live regions where appropriate.
- Decorative elements hidden from assistive technology; real text present beside visual type.
- Contrast passes at the worst point of any background, including gradients and images.
- Targets at least 44×44px with adequate spacing.
- No timeouts without a way to extend; no content that flashes more than three times per second.

### 3.11 Localization

- Text expansion of 30% to 40% in buttons, labels, and navigation.
- Date, number, and currency formats per locale.
- Right-to-left layout where supported.

### 3.12 Design-Language Specific Cases

Add the cases that the active design language creates. For Raster (`raster-language.md`):

- **Fields:** contrast at the brightest point behind text; seeded fields with an empty or missing seed fall back to a defined default; no banding on low-quality displays.
- **Samplers:** dot pitch still resolves at 320px; canvas re-renders on resize, orientation change, and pixel ratio change; dot counts capped on low-power devices.
- **Geist Pixel type:** fonts fail to load (fallback is legible and does not reflow badly); long words at 320px; selection and copy return the real text.
- **Lines:** construction guides stay on the font metrics at every size and zoom level.
- **Frames:** rules at fractional widths render on whole pixels; nodes stay on intersections after reflow; gutter field on ultra-wide screens; cells with one item and with uneven content heights; frame persists correctly across route changes.
- **Data drivers:** the driver is empty (no commits, no posts, no audio), slow, or failing; the treatment shows a defined static state instead of breaking.
- **Ember:** only one accent element exists after content changes.

---

## 4. Bug Sweep

Alongside the catalog, sweep for defects:

- Console errors and warnings, including framework warnings and hydration mismatches.
- Layout shifts during load and interaction.
- Event listeners, timers, and observers left running after unmount.
- Race conditions from fast navigation or rapid repeated actions.
- Stale state after an error or retry.
- Network requests repeated unnecessarily or not cancelled on navigation.
- Lint, type, and build warnings (`npm run build` or the project's equivalent).

---

## 5. How to Test

- **Browser DevTools:** device mode for widths and touch; network and CPU throttling; the rendering panel to emulate `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-reduced-transparency`, and forced colors; the animations panel for slow motion; the accessibility tree.
- **Automated checks:** an accessibility scanner (for example axe) and a performance audit (for example Lighthouse) on each key surface.
- **Manual passes:** keyboard only, touch only, screen reader on one desktop and one mobile platform, real phone in landscape.
- **Fixtures:** the edge fixtures from section 2, switchable in the prototype or via query parameters.

---

## 6. Edge Case Report

Deliver this report before asking for approval, and again after wiring in.

```
Surface:     what was tested, and on which build or prototype
Fixtures:    which fixture sets were used
Coverage:    catalog sections run (3.1 to 3.12) and the bug sweep
```

| Case | Expected | Observed | Fix | Status |
| --- | --- | --- | --- | --- |
| 60-character unbroken title at 320px | Wraps inside the cell | Overflowed the frame | Added `overflow-wrap: anywhere` to titles | Fixed and verified |
| Mesh field behind caption, brightest point | 4.5:1 contrast | 3.1:1 | Added scrim from `bg-primary` | Fixed and verified |

**Rules:**

1. Every case found in scope is fixed before approval is requested. Severity only decides the order of work, not whether it gets fixed.
2. Anything not tested is listed as untested, not omitted.
3. No hedged wording ("should be fine", "probably works"). Each row is verified, fixed and verified, or listed as open with a reason.

---

## 7. Checklist

- [ ] Edge fixtures prepared for each surface
- [ ] Catalog sections 3.1 to 3.12 run, including the design-language cases
- [ ] Bug sweep complete, console clean, build clean
- [ ] Tested with DevTools emulation, keyboard only, touch only, and a screen reader
- [ ] Edge case report delivered, every in-scope case fixed and verified
