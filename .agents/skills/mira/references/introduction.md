---
title: Introduction
description: What Mira is, what it is for, and the ideas behind it.
section: Getting started
order: 101
---

Mira is a web framework for design led, content rich sites: portfolios, editorial sites, documentation, product pages, and digital gardens. It compiles Markdown and `.mira` components to static HTML, animates between pages with the browser's native view transitions, and publishes every page in a form agents can read.

This site is built with Mira.

## What you get

- **Static HTML first.** Pages render at build time. A content page ships no application JavaScript, and the client runtime that coordinates transitions and prefetching is 938 bytes gzipped.
- **Native page transitions.** Moving between pages animates like an app while each page stays plain HTML. Shared elements morph between pages with one attribute.
- **A design system in the box.** Tokens, type, motion, and components are part of core, and each page inlines only the component CSS it uses.
- **An agent surface.** Every page has a Markdown twin, the build writes `llms.txt` and a search index, and `mira mcp` serves the site to agents.
- **Security by default.** Each page carries a content security policy built from hashes of its own inline code, and templates escape everything unless you mark it `unsafe`.
- **Checks before deploy.** Broken internal links, missing assets, and invalid frontmatter fail the build with the file and line.

## Principles

1. **Ship less.** Every byte sent to a browser must justify itself. The compiler does the work so the client can stay small.
2. **Taste is a feature.** Defaults look and feel considered. A new project looks good before any custom styling.
3. **Motion is navigation.** Transitions explain where the reader is going, so they belong to routing.
4. **One source of truth.** Tokens, schemas, and navigation are defined once and compiled to every surface that needs them.
5. **Humans and agents share one site.** The same content and routes serve both.
6. **Secure by construction.** Safe behavior is the default, and risky behavior needs an explicit marker the build reports.
7. **Progressive enhancement.** Every page works as plain HTML, and each layer adds capability.

## How a build works

Mira reads three kinds of source and writes every output in one pass:

| Source | Folder | Becomes |
| --- | --- | --- |
| Pages and layouts | `routes/`, `layouts/` | HTML pages with inlined CSS |
| Content | `content/`, `data/` | Pages, feeds, search, and Markdown twins |
| Config | `mira.config.json` | Tokens, transitions, security policy, and checks |

The compiler is written in Rust. A small site builds in milliseconds; run `mira build --timings` to see where the time goes.

## Where to next

Install the CLI in [Installation](/docs/installation/), then build a site in [Quick start](/docs/quick-start/).
