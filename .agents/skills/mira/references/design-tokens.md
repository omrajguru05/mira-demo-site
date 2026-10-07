---
title: Design tokens
description: The colors, type, space, radii, and motion every Mira page starts with, and how to change them.
section: Design
order: 401
---

Mira ships the Mira design system as CSS custom properties. A monochrome core carries structure and text; a secondary palette carries atmosphere. Night is the primary theme and Paper the light one.

## Scheme

```json
{ "scheme": "dark" }
```

| Value | Result |
| --- | --- |
| `dark` | Night, the default |
| `light` | Paper |
| `system` | Follows the reader's setting |

Color tokens are written with `light-dark()`, so one set of names works in both themes.

## Core colors

| Token | Use |
| --- | --- |
| `--surface-0` | Page ground |
| `--surface-1` | Raised panels, cards, and bars |
| `--surface-2` | Wells, code blocks, and inputs |
| `--line` | Hairlines and dividers |
| `--line-strong` | Borders on controls and outline buttons |
| `--ink` | Primary text and icons |
| `--ink-muted` | Supporting text and labels |
| `--ink-faint` | Captions and placeholders |
| `--fill-ink`, `--on-fill-ink` | Solid primary buttons and their text |
| `--focus` | Focus rings |

## Secondary palette

`--ember`, `--sun`, `--peach`, `--rose`, `--cobalt`, `--ocean`, `--navy`, `--haze`, `--lilac`, `--lagoon`, and `--lime`. Use them for atmospheres, highlights, tags, and glass, not for body text. Text on a warm hue uses `--on-warm`; text on `--cobalt`, `--ocean`, or `--navy` uses `--on-cool`.

## Type

| Token | Family | Use |
| --- | --- | --- |
| `--font-display` | Bricolage Grotesque | Headings |
| `--font-text` | Geist | Body and controls |
| `--font-mono` | Geist Mono | Code and uppercase labels |
| `--font-pixel` | Pixelify Sans | Badges and pixel moments |

Each family falls back to a system stack until you add the font files. See [Fonts](/docs/fonts/).

Sizes: `--text-sm`, `--text-base`, `--text-lg`, and fluid display sizes `--display-sm`, `--display-md`, `--display-lg`, and `--display-xl`.

## Space and shape

- Space steps by 4px: `--space-1` (4px) through `--space-24` (96px).
- Radii: `--radius-px` (2px), `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`, and `--radius-pill`.
- Depth: `--lift` for floating panels, `--glow-ember` and `--glow-cobalt` for one halo per hero.
- Texture: `--grain`, `--grain-opacity`, `--blur-field`, and `--blur-glass` for atmospheres and glass.

## Motion

| Token | Value |
| --- | --- |
| `--mira-spring` | A spring curve written with CSS `linear()` |
| `--mira-ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--motion-fast` | 120ms, page crossfades |
| `--motion-control` | 320ms, controls |
| `--motion-morph` | 520ms, shared elements |

## Overriding tokens

Set values under `theme` in `mira.config.json`. Nested keys join with dashes into a custom property:

```json
{
  "theme": {
    "ember": "#ff5a1f",
    "radius": { "md": "10px" },
    "motion": { "morph": "640ms" }
  }
}
```

That writes `--ember`, `--radius-md`, and `--motion-morph` in a theme layer above the defaults. Values cannot contain `{`, `}`, `;`, or `<`.

## Cascade layers

Mira's CSS is split into ordered layers, so your styles win without `!important`:

```css
@layer mira.reset, mira.tokens, mira.theme, mira.base, mira.prose,
       mira.components, mira.transitions, layout, page;
```

Layout styles land in `layout`, page and component styles in `page`.
