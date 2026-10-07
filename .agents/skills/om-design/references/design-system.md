---
name: om-design-system
description: "The design language for Om's personal sites (omrajguru.com, projects.omrajguru.com). Apply whenever building a page, component, or brand surface for Om. Combines editorial evidence-led composition with a quiet, terminal-native visual voice."
---

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