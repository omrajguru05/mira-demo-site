Mira is a design led web framework, and its interface language pairs a monochrome core with a colorful atmosphere. Black, white and gray carry structure and text. Gradient fields, film grain, frosted glass, pixel pieces and selection handles carry feeling.

## Content fundamentals

- Write in sentence case with short, concrete sentences. Lead with the outcome and add a number when one exists: "Pages ship 2KB of JavaScript."
- Address the reader as you. Refer to the product as Mira. Set the name as Mira in prose and use the pixel M mark in product chrome.
- Label controls with plain verbs: Start building, Read the docs, Copy command.
- Set metadata in mono uppercase and separate items with a middle dot: COMPANY · BRAND.
- Let pixel pieces and highlights carry the playful notes. Keep interface copy free of emoji.
- Sample lines in the Mira voice: "Fast by default. Beautiful on arrival." and "Every page animates in. Every page loads in under a second."

## Visual foundations

### Color

- Build structure from the monochrome core. Use `surface-0` for the page, `surface-1` for raised panels and `surface-2` for wells and code. Draw dividers with `line` and control borders with `line-strong`.
- Set text in `ink`, supporting text in `ink-muted` and captions in `ink-faint`.
- Invert the ground for the primary action: `fill-ink` with `on-fill-ink`.
- Reach for the secondary palette (`ember`, `sun`, `peach`, `rose`, `cobalt`, `ocean`, `navy`, `haze`, `lilac`, `lagoon`, `lime`) for atmospheres, highlights, tags and glass. Compose each surface from the monochrome core plus one atmosphere or two secondary hues.
- Place `on-warm` text on `ember`, `sun`, `peach`, `rose`, `haze`, `lilac`, `lagoon` and `lime`. Place `on-cool` text on `cobalt`, `ocean` and `navy`.
- Use secondary hues as text only where the pair holds 4.5:1. On Night, warm and light hues qualify. On Paper, use `cobalt`, `ocean` or `navy`.
- Pair every status color with a word or an icon.

### Atmosphere

An atmosphere is a blurred gradient field with film grain over it. Stack three or four secondary tokens as gradients, blur the field with `blur-field`, then lay a grain layer at `grain-opacity` with overlay blending. The `Atmosphere` component builds all four.

| Atmosphere | Tokens | Use |
| --- | --- | --- |
| Sunset | `ember`, `sun`, `rose`, `ocean`, `navy`, with a `haze` orb | Posters, covers and launch pages |
| Sky | `ocean`, `haze`, `lilac` | Calm backgrounds behind product shots |
| Cobalt | `cobalt`, with glass shapes in white and `lilac` | Bold feature sections |
| Meadow | `lagoon`, `lime`, `sun`, `haze`, mirrored left to right | Playful kaleidoscope sections |

Keep body text on solid surfaces. Set display type on an atmosphere in `on-warm` after confirming 4.5:1 against the lightest region under the words.

### Glass

Frosted glass shapes sit on a `cobalt` field. Use discs, rings, steps, plus signs and rounded tiles with a white to `lilac` gradient, a 1px light edge and `blur-glass` behind. Arrange them on an 8 unit grid in modules of uneven size, and add `glow-cobalt` behind a single shape.

### Selection frame

Mark one key word per headline with a `sun` block, a `radius-px` corner and four square handles in `navy`. Collaboration cursors carry a name tag in a secondary hue as a `radius-pill` pill, with `on-warm` or `on-cool` text to match the hue.

### Boxed layout

Sections sit in frames, like layers in a design tool. A frame is a 1px `line` hairline with square corners (`radius-box`) and four 14px handle squares centered on its corners. Divide a frame into cells with 1px hairlines, and lead each cell with a pixel icon, a title, one or two short sentences and a chip.

- Fill a frame with `surface-1` cells on a `surface-0` page.
- Place a frame on rails for the sections that deserve emphasis: dot the margin with `line` at a 16px pitch and run the hairlines past the corners.
- Keep the structure square and the controls round. Boxes, cells and rails have sharp corners. Buttons, chips, tags, inputs and toggles are pills.
- Let atmospheres, glass and pixel pieces sit inside a box as contents. Their own shapes keep their own radii.
- The `Box` and `BoxGrid` components build the frame, the handles, the rails and the cells.

### Pixel module

The logo is a 5 by 5 pixel M. Reuse its module (a square with `radius-px` corners and a gap of one eighth of the pixel) for icons, dividers, loading states and dithered fades. The `PixelIcon` component builds the interface icons from it. Pixel pieces appear in white on dark grounds and in black on light grounds.

### Type

- Set display type in Bricolage Grotesque at weight 500, tracked from -0.045em to -0.03em, with leading from 0.92 to 1.0. Apply `text-wrap: balance` to headlines.
- Set text in Geist and metadata in Geist Mono at 12px, uppercase, with 0.08em tracking.
- Use Pixelify Sans for moments of play: badges, counters and labels on pixel pieces.
- Use outline type (1.5px stroke, transparent fill) for one oversized word per page.
- Load all four families from Google Fonts. Declare the fallback stacks from `type.families`.

### Shape, space and depth

- Step spacing by 4px from `space-1` to `space-24`, with a page gutter of at least `space-4`.
- Round pixels and handles with `radius-px`. Round every control that can be pressed or typed into (buttons, chips, tags, inputs, toggles) with `radius-pill`. Keep boxed layout frames and cells square with `radius-box`. Round floating panels and atmosphere tiles with `radius-lg`, and hero tiles with `radius-xl`.
- Create depth with light. Use `lift` for floating panels and one glow behind a hero object.

### Motion

- Treat transitions as navigation. Shared elements morph between pages, and the direction reverses on back.
- Use the spring `--mira-spring` (320ms for controls, 520ms for shared element morphs) and `--mira-ease-out` for fades. Both are defined in `bundle.css` as CSS `linear()` and cubic bezier curves.
- Replace every move with a 120ms fade when `prefers-reduced-motion` is set.

### States

- Lift solid controls 2px on hover with the spring, and return them to rest on press.
- Show focus as a 2px solid `focus` ring with a 2px offset.
- Dim disabled controls to 40% opacity.

## Iconography

Interface icons are pixel icons: a 12 by 12 grid of the logo's pixel module with the glyph lit in one secondary hue over the same grid at 14% opacity. Set them at 24px to 72px, lead each box cell with a 36px icon, and pair each one with a visible label. Draw new icons on the same grid with a 2px gap and two pixels of padding. Keep emoji out of the interface. The logo files sit in the Logos group.
