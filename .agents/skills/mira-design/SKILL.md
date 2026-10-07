---
name: mira-design-language
description: Apply the Mira design language to any UI, web page, component, landing page, poster, social graphic, email, or microcopy made for Mira or in the Mira style. Use it whenever a request mentions Mira, the pixel M logo, monochrome plus secondary palette, atmospheres, grain, glass shapes, boxed layout, pixel icons, or Mira's voice. Covers color tokens, type, spacing, radii, shadows, motion, the ten components, icon grid, logo files, and copy rules.
---

# Mira Design Language

Mira is a design led web framework. Its interface pairs a monochrome core with a colorful atmosphere. Black, white and gray carry structure and text. Gradient fields, film grain, frosted glass, pixel pieces and selection handles carry feeling.

Use this skill to build anything that carries the Mira brand. Read the references listed at the bottom before writing code. Token values and component code are authoritative.

## 1. Core rules

1. Build structure from the monochrome core: `surface-0`, `surface-1`, `surface-2`, `line`, `line-strong`, `ink`, `ink-muted`, `ink-faint`.
2. Add color through one atmosphere or one to two secondary hues per surface. Secondary hues are for atmospheres, highlights, tags, glass and icons.
3. Keep structure square and controls round. Boxes, cells, rails and frame corners use `radius-box` (0px). Buttons, chips, tags, inputs and toggles use `radius-pill`.
4. Put one primary action per surface as a solid `fill-ink` button. Use one `accent` (ember) button per page for the hero call to action.
5. Pair every status color with a word or an icon.
6. Write sentence case, short concrete sentences, and a number when one exists.
7. Use pixel pieces for playful notes. Keep emoji out of the interface.
8. Respect `prefers-reduced-motion`: replace moves with a 120ms fade.

## 2. Color

Night is the primary theme. Paper is the light theme. Both themes come from `references/tokens.json`.

### Monochrome core

| Token | Night | Paper | Use |
| --- | --- | --- | --- |
| `surface-0` | #0b0b0d | #f4f4f1 | Page ground |
| `surface-1` | #141417 | #ffffff | Raised panels, cards, nav |
| `surface-2` | #1d1d21 | #e9e9e5 | Wells, code, inputs, chips |
| `line` | #2a2a2f | #d2d2cd | Hairlines and dividers |
| `line-strong` | #74747c | #76767e | Control borders (3:1 on every surface) |
| `ink` | #f4f4f1 | #0b0b0d | Primary text and icons |
| `ink-muted` | #a8a8b0 | #54545b | Supporting text, metadata |
| `ink-faint` | #8c8c94 | #686870 | Captions, placeholders |
| `fill-ink` | #f4f4f1 | #0b0b0d | Solid button fill (inverse of ground) |
| `on-fill-ink` | #0b0b0d | #f4f4f1 | Text on fill-ink |
| `focus` | #a9b6ff | #0a1ffa | 2px focus ring, 7:1 on every surface |

### Secondary palette

| Token | Hex | Role | Text on it |
| --- | --- | --- | --- |
| `ember` | #f4561e | Vermilion. Hero atmospheres, accent buttons, attention | `on-warm` |
| `sun` | #ff9a1f | Amber. Highlight block behind a key word | `on-warm` |
| `peach` | #f2a383 | Soft horizon inside sunset | `on-warm` |
| `rose` | #f48db4 | Pink band in sunset, pixel accents | `on-warm` |
| `cobalt` | #0a1ffa | Electric blue field for glass and slabs | `on-cool` |
| `ocean` | #0a6ab0 | Deep water in sunset and sky | `on-cool` |
| `navy` | #04215f | Darkest atmosphere tone, selection handles | `on-cool` |
| `haze` | #bbd7f2 | Pale sky, orbs, light atmospheres | `on-warm` |
| `lilac` | #d3c2dc | Glass edges, sky tint | `on-warm` |
| `lagoon` | #2e9e7c | Meadow, confirmation | `on-warm` |
| `lime` | #c6e25a | Meadow, bright tags | `on-warm` |

- `on-warm` is #0b0b0d (5.8:1 or better on each warm hue).
- `on-cool` is #ffffff (5.6:1 or better on each cool hue).
- Use a secondary hue as text only where the pair holds 4.5:1. On Night, warm and light hues qualify. On Paper, use `cobalt`, `ocean` or `navy`.
- On Paper, deepen hues for icons: ember #d63f0a, sun #b86200, peach #c4623a, rose #c2467a, lime #5a7300, lagoon #1f7a5c, haze #2d6fa8, lilac #7a5c96.

## 3. Atmosphere

An atmosphere is a blurred gradient field with film grain (overlay blend at `grain-opacity` 0.35). Use one per surface.

| Palette | Colors | Use |
| --- | --- | --- |
| Sunset | ember, sun, rose, ocean, navy, haze orb | Posters, covers, launch pages |
| Sky | ocean, haze, lilac | Calm backgrounds behind product shots |
| Cobalt | cobalt, navy, glass shapes | Bold feature sections |
| Meadow | lagoon, lime, sun, haze (mirrored) | Playful sections |

Keep body text on solid surfaces. Set display words on an atmosphere in `on-warm` (sunset, meadow) or `on-cool` (sky, cobalt), after checking 4.5:1 against the lightest region under the words.

## 4. Typography

| Family | Font | Use |
| --- | --- | --- |
| Display | Bricolage Grotesque 500 | Headlines, tracked -0.045em to -0.03em, leading 0.92 to 1.0, `text-wrap: balance` |
| Text | Geist | Body and controls |
| Mono | Geist Mono | Labels, commands, metadata |
| Pixel | Pixelify Sans | Badges, counters, labels on pixel pieces |

Load all four from Google Fonts. Fallback stacks are in `tokens.json` under `type.families`.

| Style | Size / line | Weight | Tracking | Use |
| --- | --- | --- | --- | --- |
| display-xl | 120px / 0.92 | 500 | -0.045em | Cover name, one hero word |
| display-lg | 80px / 0.95 | 500 | -0.04em | Landing headlines |
| display-md | 56px / 1 | 500 | -0.035em | Section headlines |
| display-sm | 28px / 1.15 | 600 | -0.02em | Card titles |
| body-lg | 18px / 1.5 | 400 | -0.005em | Lead paragraphs |
| body | 15px / 1.55 | 400 | | Running text |
| body-sm | 13px / 1.5 | 400 | | Helper text, table cells |
| label | 12px / 1.4 mono | 500 | 0.08em uppercase | Eyebrows, metadata |
| caption | 11px / 1.4 mono | 400 | 0.04em | Figure captions, tags |
| pixel-label | 16px / 1.2 pixel | 400 | 0.02em | Labels on pixel pieces |
| pixel-display | 48px / 1 pixel | 400 | | Single oversized pixel glyph |

Use outline type (1.5px stroke, transparent fill) for one oversized word per page. Use a `Highlight` on one key word per headline.

## 5. Spacing, radius, shadow, blur, opacity

Spacing (4px steps, minimum page gutter `space-4`):

| Token | Value | Use |
| --- | --- | --- |
| space-1 | 4px | Pixel gaps, icon to label |
| space-2 | 8px | Tight control gaps, chips |
| space-3 | 12px | Small padding, list gaps |
| space-4 | 16px | Default gap, page gutter |
| space-6 | 24px | Card and panel padding |
| space-8 | 32px | Gap between groups, box padding |
| space-12 | 48px | Gap between blocks |
| space-16 | 64px | Section padding, small screens |
| space-24 | 96px | Section padding, large screens |

Radius:

| Token | Value | Use |
| --- | --- | --- |
| radius-box | 0px | Boxed frames and cells |
| radius-px | 2px | Pixels, selection handles |
| radius-sm | 6px | Swatches, small inner details |
| radius-md | 12px | Menus, popovers |
| radius-lg | 24px | Cards, panels, atmosphere tiles |
| radius-xl | 40px | Hero tiles, large glass shapes |
| radius-pill | 999px | Buttons, chips, tags, inputs, toggles |

Shadow and depth come from light:
- `lift`: floating panels and dialogs. Night: `0 1px 0 rgba(255,255,255,0.06) inset, 0 24px 60px rgba(0,0,0,0.55)`. Paper: `0 1px 0 rgba(255,255,255,0.9) inset, 0 18px 44px rgba(11,11,13,0.14)`.
- `glow-ember`: `0 0 90px rgba(244,86,30,0.45)`. One hero object or an accent button on hover.
- `glow-cobalt`: `0 0 100px rgba(10,31,250,0.55)`. Behind glass shapes on a dark ground.

Blur: `blur-glass` 24px (backdrop behind glass), `blur-field` 34px (gradient fields).

## 6. Layout

Boxed layout: sections sit in frames, like layers in a design tool.
- A frame is a 1px `line` hairline with square corners and four 14px handle squares centered on its corners (8px outside).
- Divide frames into cells with 1px hairlines. Lead each cell with a 36px pixel icon, a title, one or two short sentences and a chip.
- Fill frames with `surface-1` cells on a `surface-0` page.
- Use rails once or twice per page: a dotted margin (`line` dots, 16px pitch) with hairlines running past the corners.
- Grid columns: 4 for 4 or 8 cells, 3 for 3 or 6, 2 for 2 or 4. Folds to 2 columns below 900px and 1 column below 560px.

## 7. Motion

- Treat transitions as navigation. Shared elements morph between pages. Direction reverses on back.
- Spring: `--mira-spring` (320ms for controls, 520ms for shared element morphs). Fades use `--mira-ease-out` (cubic-bezier 0.22, 1, 0.36, 1). Both are defined in `references/bundle.css`.
- Controls lift 2px on hover with the spring and return on press (scale 0.98).
- Disabled controls dim to 40% opacity.
- Focus: 2px solid `focus` ring with 2px offset.

## 8. Iconography

Interface icons are pixel icons: a 12 by 12 grid of the logo's pixel module. The glyph is lit in one secondary hue, and the full grid sits at 14% opacity. Sizes step by 8px from 24px to 72px. Pair each icon with a visible label.

Available glyphs: morph, content, check, search, shield, alert, bars, bolt, globe, pin, lock, arrow.

To draw a new icon: 12 by 12 grid, 2px gap between pixels, two pixels of padding, `radius-px` on each square.

## 9. Logo

The Mira mark is a 5 by 5 pixel M on a rounded tile (400 by 400 viewBox, pixel 46, pitch 52, corner radius 80).
- `assets/logos/mira-mark-dark.svg`: white pixels on a black tile. Use on dark surfaces.
- `assets/logos/mira-mark-light.svg`: black pixels on a white tile with a hairline edge. Use on light surfaces.
- Show at 24px or larger with one pixel unit of clear space.
- PixelMark tones: dark, light, ember (brand moments), cobalt (brand moments), glyph (follows text color).
- In prose, write the name as Mira. In product chrome, use the pixel M.

## 10. Components

Each component is a function in `references/bundle.js` that returns an HTML string under `window.Mira`. The CSS lives in `references/bundle.css`. Use `references/components/index.d.ts` for the option types.

| Component | Options | Rule of use |
| --- | --- | --- |
| Button | label, variant (solid, outline, accent), size (md 44px, sm 32px), disabled | Solid for the main action. Outline for secondary. Accent once per page. Labels are one to three plain verbs. |
| Eyebrow | items[] | Mono uppercase, joined by a middle dot. Two or three items. 12 to 16px above a headline. |
| Highlight | text, tone (sun, ember, lime, haze, cobalt) | One per headline, on the last word. Four 9px navy handles. |
| CursorTag | name, tone (cobalt, ember, sun, lagoon, rose) | Collaborator pointer with a pill name tag. One tone per person. |
| Atmosphere | palette (sunset, sky, cobalt, meadow), height, content | One per surface. Radius-lg tile, grain overlay. |
| GlassShape | shape (disc, ring, tile, plus, steps), size | Mix three or more silhouettes on a cobalt field. Sizes 48px and up. |
| PixelMark | size, tone (dark, light, ember, cobalt, glyph) | The logo at any size, inline SVG. |
| Chip | label, mono (default true) | Commands and attributes. Surface-2 fill, line border, one line. |
| PixelIcon | name, tone, size | Icon from the pixel grid. Lead a box cell with 36px. |
| Box | content, rails | The frame with handles. Rails at most twice per page. |
| BoxGrid | columns (2, 3, 4), cells[{icon, tone, title, body, chips}], rails | Equal cells in a frame. Titles two to four words, body one or two sentences, one chip per cell. |

Usage example:

```html
<link rel="stylesheet" href="bundle.css">
<script src="bundle.js"></script>
<script>
  document.getElementById('root').innerHTML =
    Mira.Box({ rails: true, content:
      '<div class="mira-box__body">' +
        Mira.Eyebrow({ items: ['Boxed layout', 'Frame'] }) +
        '<h2>Sections live in frames.</h2>' +
        Mira.Button({ label: 'Start building' }) +
        Mira.Button({ label: 'Read the docs', variant: 'outline' }) +
      '</div>' });
</script>
```

Load the Google Fonts stylesheet with the four families before the bundle, and define the color, type, spacing and radius tokens as CSS custom properties (`--surface-0`, `--ink`, `--ember`, `--radius-pill`, and so on) from `tokens.json`.

## 11. Voice and copy

- Sentence case. Short, concrete sentences. Lead with the outcome. Add a number when one exists: "Pages ship 2KB of JavaScript."
- Address the reader as "you". Refer to the product as Mira.
- Button labels are plain verbs: Start building, Read the docs, Copy command.
- Metadata is mono uppercase with a middle dot: COMPANY · BRAND.
- Sample lines: "Fast by default. Beautiful on arrival." and "Every page animates in. Every page loads in under a second."
- Use the playful register through pixel pieces and highlights, and keep copy calm.
- Sample feature copy used in the landing page: "Native page transitions", "Typed content", "Checks before deploy", "Built in search", "Strict security policy", "Errors you can read", "Size budgets", "Instant navigation".

## 12. Building checklist

- Tokens come from `tokens.json`. Take every color, size and radius from it.
- Every text pair meets 4.5:1 in both themes. Large display text meets 3:1.
- Controls are pills. Frames and cells are square.
- One atmosphere per surface. One accent button per page. One highlight per headline.
- Icons are pixel icons with visible labels.
- Layout works at phone width (16px gutter, no horizontal scroll).
- Reduced motion replaces moves with a 120ms fade.
- Check light and dark themes before delivery.

## 13. Files

- `references/tokens.json`: every color, type style, spacing step, radius, shadow, blur and opacity token, both themes.
- `references/README.md`: the brand book (foundations, iconography, content fundamentals).
- `references/design-system.json`: the system index (title, namespace, asset records).
- `references/bundle.js`, `references/bundle.css`, `references/index.d.ts`: component implementation and types.
- `references/components/<Name>/README.md` and `preview.html`: guidelines and a live preview for each component. Cover is in `references/components/Cover/preview.html`.
- `assets/logos/`: the two logo SVGs and their README.
