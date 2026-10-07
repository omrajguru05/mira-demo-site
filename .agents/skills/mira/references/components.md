---
title: Components
description: The built in CSS components, their markup, and when to use each.
section: Design
order: 402
---

Mira's components are plain HTML with a class. Their CSS ships only on pages that use them: the compiler checks each page's HTML and inlines just those blocks.

## Button

```html
<a class="mira-btn" href="/start/">Start building</a>
<a class="mira-btn" data-variant="outline" href="/docs/">Read the docs</a>
<a class="mira-btn" data-variant="accent" href="/start/">Start building</a>
<button class="mira-btn" data-size="sm">Copy</button>
```

- **Solid** (the default) is the main action on a surface. It inverts the ground.
- **Outline** is for secondary actions.
- **Accent** fills with `--ember`. Use it for one hero action per page.
- `data-size="sm"` is a compact 32px button.

Label buttons with plain verbs: Start building, Read the docs, Copy command.

## Eyebrow

A mono, uppercase label above a heading. Separate items with a middle dot.

```html
<p class="mira-eyebrow">Docs &middot; Motion</p>
```

## Highlight

One key word per headline on a colored block with four selection handles.

```html
<h1>Pages that <span class="mira-hl">move.<i></i><i></i><i></i><i></i></span></h1>
```

Tones: `sun` by default, or `data-tone="ember"`, `"lime"`, `"haze"`, or `"cobalt"`. The component pairs each with the right text color.

## Atmosphere

A blurred gradient field with film grain: the main carrier of color.

```html
<section class="mira-atmo" data-palette="sunset">
  <div class="mira-atmo__field"></div>
  <div class="mira-atmo__orb"></div>
  <div class="mira-atmo__body">Short label or display words only.</div>
</section>
```

Palettes: `sunset` for posters and launch pages, `sky` for calm backgrounds, `cobalt` as the ground for glass, `meadow` for playful sections, and `night`, a dark field with a faint cobalt and ember glow. Use one atmosphere per surface, and keep body text on solid surfaces.

## Glass

Frosted shapes for a `cobalt` field.

```html
<span class="mira-glass" data-shape="disc"></span>
<span class="mira-glass" data-shape="ring"></span>
<span class="mira-glass" data-shape="plus" data-glow></span>
```

Shapes: `disc`, `ring`, `tile`, `plus`, and `steps`. Set `--mira-size` to size one. `data-glow` adds the cobalt halo; use it on one shape.

## Tabs

Pill navigation. Pair it with `mira-nav` so the current page is marked.

```html
<nav class="mira-tabs" aria-label="Primary">
  <a href="/" mira-nav>Home</a>
  <a href="/docs/" mira-nav>Docs</a>
</nav>
```

## Card

```html
<a class="mira-card" href="/docs/routing/">
  <span class="mira-eyebrow">Guide</span>
  <h2>Routing</h2>
  <p>How files become URLs.</p>
</a>
```

A link card lifts 2px on hover.

## Cursor tag

A pointer with a name label, for annotating layouts and showing collaborators.

```html
<span class="mira-cursor" data-tone="ember">
  <svg viewBox="0 0 16 20"><path d="M1 1l13 9.2-6 1.1L4.6 18z"/></svg>
  <span class="mira-cursor__tag">Annotation</span>
</span>
```

## Code

Code blocks in Markdown and `<mira-code>` elements render as `.mira-code` with syntax colors from the palette. See [Markdown](/docs/markdown/#code).

## Search

`<mira-search>` renders a search box over the site's index. See [Search](/docs/search/).
