---
title: Quick start
description: Create a site, run it locally with live reload, and build it for production.
section: Getting started
order: 103
---

This guide takes you from an empty folder to a built site in four commands.

## Create a site

```bash
mira new my-site
```

Mira writes a starter into `my-site/`: a welcome page, an about page, a blog with two posts, a layout, a config file, and an `AGENTS.md` for coding agents. The directory must be new or empty.

## Run it locally

```bash
cd my-site
```

```bash
mira dev
```

The dev server builds the site and serves it at `http://localhost:4321`. Edit any file and the page reloads when the build finishes. If a build fails, an overlay shows the error with the file, the line, and a hint; save a correction and it clears on its own.

Open **Writing**, then a post. The post title morphs into place, and the back button plays the motion in reverse.

## Make a change

Open `routes/index.mira` and change the headline. Save, and the browser reloads with your change.

Add a post by creating `content/posts/hello.md`:

```markdown
---
title: Hello
description: My first post.
date: 2026-10-07
---

Written in Markdown, rendered at build time.
```

It appears at `/posts/hello/` and in the list at `/posts/`. The starter checks every post against a schema, so a missing `title` or a malformed `date` fails with the exact line. See [Content collections](/docs/collections/).

## Build for production

```bash
mira build
```

The site lands in `dist/` as static files. The summary lists every page with its gzipped size against the page budget, the runtime size, and the agent files written alongside.

## Deploy

Upload `dist/` to any static host. See [Deploying](/docs/deploying/) for host notes.

## Next

Learn how files become pages in [Project structure](/docs/project-structure/) and [Routing](/docs/routing/).
