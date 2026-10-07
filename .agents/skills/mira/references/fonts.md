---
title: Fonts
description: Self host font files with preloading and swap, with no third party requests.
section: Design
order: 404
---

Mira serves fonts from your own site. Put the files in `public/` and list them in config; Mira writes the `@font-face` rules into each page's inlined CSS and preloads the faces you mark.

```json
{
  "fonts": [
    { "family": "Geist", "src": "/fonts/Geist.woff2", "weight": "100 900", "preload": true },
    { "family": "Bricolage Grotesque", "src": "/fonts/Bricolage.woff2", "weight": "200 800" },
    { "family": "Geist Mono", "src": "/fonts/GeistMono.woff2", "weight": "100 900" }
  ]
}
```

| Key | Default | Meaning |
| --- | --- | --- |
| `family` | required | The name the tokens use, such as `Geist` |
| `src` | required | Path under `public/`, starting with `/` |
| `weight` | `400` | One weight, or a range like `100 900` for variable fonts |
| `style` | `normal` | `normal` or `italic` |
| `preload` | `false` | Preload the file; use it for one or two faces above the fold |

Every face uses `font-display: swap`, so text shows immediately in the fallback and swaps when the font arrives. A missing file fails the build.

## Matching the tokens

The type tokens already name the Mira families, so a family listed here takes over as soon as it loads:

| Token | Family |
| --- | --- |
| `--font-text` | Geist |
| `--font-display` | Bricolage Grotesque |
| `--font-mono` | Geist Mono |
| `--font-pixel` | Pixelify Sans |

To use other families, override the tokens under `theme` in config.

## Why self host

A font from another origin is a render blocking request and a third party that sees every visit. Fonts from your own origin stay inside the page's content security policy, cache with the site, and send no data elsewhere.
