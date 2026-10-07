---
title: Pixel module
description: Draw the Mira mark and pixel lettering as inline SVG at build time.
section: Design
order: 403
---

The Mira logo is a 5 by 5 pixel M. Its module, a square with 2px rounded corners and a gap of one eighth of a pixel, is reused for lettering, empty states, and badges. Mira draws both at build time as inline SVG, so they are crisp at any size and cost no requests.

## The mark

```html
<mira-mark class="logo" />
```

The mark fills with `currentColor`. Size it with CSS:

```css
.logo { width: 20px; }
```

## Pixel lettering

```html
<mira-pixels text="404" />
```

The face covers A to Z, 0 to 9, space, and `- . ! ?`. Letters are 5 by 7 pixels with one pixel between them. The SVG carries the text as its accessible label.

## Dithering

Add `dither` to draw the unlit pixels faintly, the way this site's built in 404 page does:

```html
<mira-pixels text="404" dither />
```

Unlit pixels are in a group with the class `off`, at 14% opacity by default. Restyle them with `.mira-pixels .off`.

## Color

Pixel pieces are white on dark grounds and black on light ones, which `currentColor` gives you for free. On an atmosphere, set `color: var(--on-warm)` or `var(--on-cool)` to match the field.
