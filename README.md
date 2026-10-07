# Mira Demo Site

An editorial publication demonstrating the architecture, performance, and design language of **Mira**, the static web framework launching soon at [mira.omrajguru.site](https://mira.omrajguru.site).

## Overview

This site publishes field notes on natural geometry, fluvial hydrology, and alpine stratigraphy. It serves as a real-world demonstration of:

- **Zero Runtime Hydration:** Pure static HTML output with 0KB JavaScript framework runtime.
- **Native View Transitions:** Fluid navigation and shared element morphing (`mira-morph`) powered by the browser View Transitions API.
- **Strict Content Validation:** Markdown collections verified against schemas during compile time in Rust.
- **Dual Human and Agent Surfaces:** Twin Markdown routes, instant client search indexes, and `llms.txt` endpoints generated out of the box.
- **Mira Design Language:** Boxed layouts with outer selection handles, illuminated 12x12 pixel icons, atmospheric gradients with film grain, and high-contrast typography.

## Development

Run locally with live reload:

```bash
npm run dev
# or: mira dev
```

The development server starts at `http://localhost:4321`.

## Production Build

Compile static assets to `dist/`:

```bash
npm run build
# or: mira build
```

## Links

- Framework Site: [mira.omrajguru.site](https://mira.omrajguru.site)
- Creator: [omrajguru.com](https://omrajguru.com)
