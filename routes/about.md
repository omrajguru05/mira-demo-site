---
title: About
description: The philosophy, architecture, and design system behind Mira and this preview publication.
---

# About

This publication is a living demonstration of **Mira**, an independent static web framework created by Om. It explores the geometry of physical systems: how forest canopies optimize light boundaries, how river basins minimize hydraulic work, and how mountain roots fold under continental collision.

The framework itself launches soon at [mira.omrajguru.site](https://mira.omrajguru.site).

## Architecture

Modern web publishing often ships hundreds of kilobytes of runtime code simply to render static text and images. Mira takes the inverse position:

1. **Zero runtime hydration:** Pages ship zero kilobytes of client JavaScript framework code. All layouts, typography, and content collections compile directly to pure static HTML in Rust.
2. **Native view transitions:** Fluid navigation and shared element morphs run on the browser View Transitions API. Back navigations play the motion in reverse, without requiring a client-side router or runtime reconciliation.
3. **Compiler-checked schemas:** Content collections enforce strict frontmatter validation during compilation. Missing dates, invalid tags, or malformed slugs halt the build before deployment.
4. **Agent and search twin surfaces:** Every route compiles both for humans and machine agents, generating clean twin Markdown files, structured `llms.txt` endpoints, and a zero-server search index.

## Design Language

Mira pairs a monochrome structural core with colorful atmospheres, boxed frames, and pixel glyphs:

- **Monochrome core:** High-contrast neutral tones (`#0b0b0d` ground, `#141417` raised panels, `#f4f4f1` ink) establish hierarchy and focus reading attention.
- **Secondary palette:** Warm accents (ember, sun, peach) and cool tones (cobalt, ocean, lime) illuminate key concepts, icon matrices, and atmosphere gradients.
- **Square structure, round controls:** Structural cards, frames, and cells remain square, while interactive controls, buttons, and chips use pill curves.
- **Boxed layout:** Content sits inside hairlines with four outer selection handles, honoring the visual grammar of architectural schematics.

## Links

- Official site: [mira.omrajguru.site](https://mira.omrajguru.site) (Launching soon)
- GitHub repository: [github.com/omrajguru05](https://github.com/omrajguru05)
- Personal portfolio: [omrajguru.com](https://omrajguru.com)
- Updates: [x.com/notomrajguru](https://x.com/notomrajguru)
