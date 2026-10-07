---
name: om-raster
description: "Raster, an optional extension of Om's existing design language. Builds expressive surfaces from continuous fields (mesh, tonal, radial, and stepped gradients) drawn through discrete samplers (stipple, dot matrix, pixel, scanline, and glyph fields), organised by visible frames (the boxed layout: rails, rules, nodes, and shared-edge cells), with a combinatorial grammar that lets agents derive new treatments. Use only when the user or brief asks for Raster or for an expressive Om surface."
---

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
