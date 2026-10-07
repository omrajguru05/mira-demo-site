---
name: mira
description: The complete guide, reference, and documentation for the Mira web framework. Contains full documentation for building static sites, writing .mira components and templates, file-system routing, content collections, native page transitions and shared element morphing, design tokens, fonts, media frames, search, agent surfaces, MCP server, security, build verification, migration, configuration (mira.config.json), and multi-host deployment.
---

# Mira Framework: Complete Documentation & Reference

Mira is a web framework for design-led, content-rich sites: portfolios, editorial sites, documentation, product pages, and digital gardens. It compiles Markdown and .mira components to static HTML, animates between pages with the browser's native view transitions, and publishes every page in a form agents can read.

## Table of Contents

- **Getting started**
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Quick start](#quick-start)
  - [Project structure](#project-structure)
- **Building pages**
  - [Routing](#routing)
  - [Templates](#templates)
  - [Layouts](#layouts)
  - [Content collections](#content-collections)
  - [Markdown](#markdown)
  - [Data files](#data-files)
- **Motion**
  - [Page transitions](#page-transitions)
  - [Shared elements](#shared-elements)
- **Design**
  - [Design tokens](#design-tokens)
  - [Components](#components)
  - [Pixel module](#pixel-module)
  - [Fonts](#fonts)
  - [Media frames](#media-frames)
- **Performance**
  - [Performance](#performance)
  - [Search](#search)
- **Agents**
  - [SEO and AI search](#seo-and-ai-search)
  - [Agent surface](#agent-surface)
  - [MCP server](#mcp-server)
  - [Working with coding agents](#working-with-coding-agents)
- **Quality and security**
  - [Security](#security)
  - [Checks and errors](#checks-and-errors)
- **Migrating**
  - [Migrating to Mira](#migrating-to-mira)
- **Reference**
  - [Configuration](#configuration)
  - [CLI](#cli)
  - [Deploying](#deploying)

---

# Section: Getting started

## Introduction

> What Mira is, what it is for, and the ideas behind it.

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

---

## Installation

> Build the mira CLI from source and check that it works.

Mira is a single binary named `mira`. Prebuilt, signed binaries for macOS, Linux, and Windows are planned; today you build it from the Mira source with Cargo.

## Requirements

- A Rust toolchain with Cargo, version 1.85 or newer. Install it from [rustup.rs](https://rustup.rs).
- The Mira source checkout.

No Node.js, package manager, or other runtime is needed to build or serve a site.

## Build and install

From the root of the Mira source:

```bash
cargo install --path crates/mira_cli
```

Cargo builds an optimized binary and puts it in `~/.cargo/bin`, which rustup adds to your `PATH`.

> [!TIP]
> If your shell cannot find `mira` afterwards, open a new terminal or add `~/.cargo/bin` to your `PATH`.

## Check the install

```bash
mira --version
```

```bash
mira --help
```

`mira --help` lists every command. Each command has its own help, for example `mira build --help`.

## Update

Pull the latest source and run the same `cargo install` command. Cargo replaces the old binary.

## Next

Create your first site in [Quick start](/docs/quick-start/).

---

## Quick start

> Create a site, run it locally with live reload, and build it for production.

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
---title: Hello
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

---

## Project structure

> The folders and files of a Mira project and what each one does.

A Mira project is a folder with a config file and a few conventional directories. Only `routes/` is required.

```text
my-site/
├── mira.config.json     Site, theme, transitions, schemas, and checks
├── AGENTS.md            Conventions for coding agents
├── routes/              Pages; every file is a URL
│   ├── index.mira
│   ├── about.md
│   └── posts/
│       ├── index.mira
│       └── [slug].mira  One page per entry in content/posts/
├── layouts/
│   └── default.mira     Wraps every page unless a page opts out
├── content/
│   └── posts/           A collection: Markdown files with frontmatter
├── data/                JSON or YAML available to every template
├── public/              Copied to the output as is
└── dist/                Build output; safe to delete
```

## Folders

| Folder | Purpose | Docs |
| --- | --- | --- |
| `routes/` | `.md` and `.mira` files that become pages | [Routing](/docs/routing/) |
| `layouts/` | `.mira` components that wrap pages | [Layouts](/docs/layouts/) |
| `content/` | One folder per collection of Markdown entries | [Content collections](/docs/collections/) |
| `data/` | Structured data such as navigation | [Data files](/docs/data-files/) |
| `public/` | Static files served from the site root | below |

## Public files

Everything in `public/` is copied to the output with the same path: `public/favicon.svg` is served at `/favicon.svg`. If `public/favicon.svg` exists, every page links it as the icon.

A file in `public/` wins over a generated file with the same name. Put your own `robots.txt` there and Mira skips its generated one, with a warning so the choice stays visible.

## Generated folders

- `dist/` holds the production build. Mira writes a `.mira-output` marker into it and only ever clears a directory that carries the marker, so a mistyped `--out` cannot delete your files.
- `.mira/` holds the dev server's and the MCP server's builds.

Add both to `.gitignore`; the starter does.

---

# Section: Building pages

## Routing

> How files in routes/ become URLs, including dynamic routes and the 404 page.

Every `.md` or `.mira` file in `routes/` is a page. Its path in the folder is its URL.

## File to URL

| File | URL | Output file |
| --- | --- | --- |
| `routes/index.mira` | `/` | `index.html` |
| `routes/about.md` | `/about/` | `about/index.html` |
| `routes/docs/index.mira` | `/docs/` | `docs/index.html` |
| `routes/docs/setup.md` | `/docs/setup/` | `docs/setup/index.html` |
| `routes/posts/[slug].mira` | `/posts/<slug>/` | one file per entry |
| `routes/404.md` | `/404.html` | `404.html` |

URLs end with a slash, and each page is written as `index.html` in its own folder, which every static host serves without configuration. Two files that produce the same URL fail the build and name both files.

## Markdown pages

A `.md` route is rendered as Markdown and wrapped in `<article class="prose">`. Frontmatter sets its title, description, layout, and transition:

```markdown
---title: About
description: Who we are.
---
# About

Text in Markdown.
```

## Component pages

A `.mira` route is a component with a template and optional styles. Use one when a page needs layout, loops, or data. See [Templates](/docs/templates/).

## Dynamic routes

A file named in brackets, such as `routes/posts/[slug].mira`, renders once for every entry of a collection. The collection is the folder's name, so `routes/posts/[slug].mira` reads `content/posts/`. Set `collection:` in the route's frontmatter to use another:

```mira
---collection: articles
---<template>
<article>
  <h1>{{ entry.title }}</h1>
  <slot />
</article>
</template>
```

Inside a dynamic route, `entry` holds the entry's frontmatter, `slug`, and `url`, and `<slot />` renders its Markdown. Dynamic routes must be `.mira` files.

## The 404 page

Add `routes/404.md` or `routes/404.mira` to design your own. Without one, Mira writes a built in 404 page in the Mira design language. Hosts serve `404.html` for missing paths; the dev server does too.

## Page titles

The document title is the page's `title` followed by the site title, as in `About · My site`. The home page uses the site title alone.

## Drafts

An entry with `draft: true` is left out of `mira build` and included in `mira dev`, so you can preview it locally.

---

## Templates

> The .mira component format and its template syntax.

A `.mira` file is a single file component: optional frontmatter, a `<template>` block, and an optional `<style>` block. It compiles to HTML and CSS with no runtime.

```mira
---title: Writing
---<template>
<h1>{{ page.title }}</h1>
<ol>
  {#each collections.posts as post}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {/each}
</ol>
</template>

<style>
ol { list-style: none; padding: 0; }
</style>
```

If a file has no `<template>` block, the whole body is the template.

## Output

Write a value with double braces. Output is HTML escaped, so `<`, `>`, `&`, and quotes are always safe:

```mira
<h1>{{ page.title }}</h1>
<a href="{{ post.url }}">Read</a>
```

To write raw HTML, mark it `unsafe`. Every use is reported as a warning at build time so it stays a deliberate choice:

```mira
{{ unsafe page.trusted_html }}
```

Values are read by dotted paths. Arrays take numeric indexes and a `length`:

```mira
{{ collections.posts.0.title }}
{{ collections.posts.length }} posts
```

A missing path renders nothing. Strings print as is, numbers and booleans print as text, and lists or objects print as JSON.

## Conditions

```mira
{#if post.description}
  <p>{{ post.description }}</p>
{:else}
  <p>No summary.</p>
{/if}
```

`{#if !path}` negates. A value is false when it is missing, `null`, `false`, `0`, an empty string, or an empty list.

## Loops

```mira
{#each collections.posts as post}
  <h2>{{ post.title }}</h2>
{/each}
```

Loop variables shadow outer names inside the loop.

## Slots

`<slot />` marks where wrapped content goes. In a layout it is the page; in a dynamic route it is the entry's rendered Markdown.

## Literal braces

Wrap text in `{#raw}` and `{/raw}` to output it exactly as written, which is how this site shows template syntax inside templates.

## What templates can read

| Name | Contents |
| --- | --- |
| `site` | `title`, `description`, `url`, and `lang` from config |
| `page` | The page's frontmatter, its `url`, and in dynamic routes the entry's fields |
| `entry` | In dynamic routes: the entry's frontmatter, `slug`, `url`, `toc`, `prev`, and `next` |
| `collections` | Every collection by name, as lists of entries |
| `data` | Every file in `data/` by name |

## Styles

A component's `<style>` block is placed in the `page` cascade layer, and a layout's in the `layout` layer. Both come after Mira's own layers, so your styles win without `!important`. All CSS is inlined into the page; there is no stylesheet request.

## Built in elements

The compiler expands a few elements at build time:

| Element | Becomes |
| --- | --- |
| `<mira-mark />` | The Mira pixel mark as inline SVG ([Pixel module](/docs/pixel-module/)) |
| `<mira-pixels text="404" />` | Pixel lettering as inline SVG |
| `<mira-code lang="rust">…</mira-code>` | Highlighted code, indentation trimmed |
| `<mira-search>` | A search box backed by the build's index ([Search](/docs/search/)) |

Two attributes are compiled too: `mira-morph` ([Shared elements](/docs/shared-elements/)) and `mira-nav`, which sets `aria-current="page"` on the link that matches the current page or its section.

## Errors

Template mistakes fail the build with the file, the line, and a hint:

```text
✕ {#each} is never closed

  routes/broken.mira:3
  › 3 {#each collections.posts as p}

  hint  add {/each} where the block should end
```

---

## Layouts

> Wrap pages in shared chrome, choose a layout per page, or opt out.

A layout is a `.mira` file in `layouts/` that wraps pages. Its `<slot />` is where the page goes.

```mira
<template>
<header>
  <a href="/">{{ site.title }}</a>
  <nav>
    <a href="/" mira-nav>Home</a>
    <a href="/posts/" mira-nav>Writing</a>
  </nav>
</header>
<main id="main">
  <slot />
</main>
</template>

<style>
body { max-width: 46rem; margin-inline: auto; }
</style>
```

## Choosing a layout

| Frontmatter | Result |
| --- | --- |
| none | `layouts/default.mira` if it exists, otherwise no layout |
| `layout: docs` | `layouts/docs.mira`; the build fails if it does not exist |
| `layout: false` | No layout; the page renders on its own |

A layout sees the same `site`, `page`, `entry`, `collections`, and `data` as the page it wraps.

## The document shell

Layouts render inside `<body>`. Mira writes everything around it: the doctype, `<html lang>`, the content security policy, title, description, canonical URL, Open Graph tags, the inlined CSS, the runtime, and the prefetch rules. You never write a `<head>`.

## Give the page a main landmark

Put the page in `<main id="main">`. Mira then holds the first paint until `main` is parsed, so shared elements exist when an incoming transition takes its snapshot, and moves keyboard focus to the main heading after navigation. A skip link to `#main` is good practice:

```mira
<a class="skip" href="#main">Skip to content</a>
```

## Navigation state

Add `mira-nav` to navigation links. The compiler sets `aria-current="page"` on the link whose `href` matches the page, or whose `href` is a section the page is in, so `/posts/` stays current on every post. Style it with `[aria-current="page"]`; the `.mira-tabs` component already does.

---

## Content collections

> Group Markdown entries, type their frontmatter, and sort, link, and list them.

A collection is a folder in `content/`. Each Markdown file in it, including in subfolders, is an entry with frontmatter and a body.

```text
content/
└── posts/
    ├── motion-is-navigation.md
    └── ship-less.md
```

## Entries

```markdown
---title: Ship less
description: Every byte sent to a browser must justify itself.
date: 2026-09-21
---
The body is Markdown.
```

Each entry gets:

| Field | Value |
| --- | --- |
| `slug` | The `slug` frontmatter, or the file name without `.md` |
| `url` | Set when a dynamic route renders the collection, otherwise `null` |
| `reading_time` | Minutes at 230 words per minute, at least 1 |
| `toc` | Second and third level headings: `level`, `id`, `text` |
| `prev`, `next` | The neighboring entries' `title` and `url`, in collection order |

Slugs cannot contain spaces, slashes, `?`, or `#`.

## Listing a collection

Every template can read `collections.<name>`:

```mira
{#each collections.posts as post}
  <a href="{{ post.url }}">{{ post.title }}</a>
{/each}
```

## Rendering entries as pages

A dynamic route renders one page per entry. See [Routing](/docs/routing/#dynamic-routes).

## Order

Entries with a numeric `order` come first, lowest first. The rest follow newest first by `date`, then alphabetically by slug. These docs use `order`; a blog uses `date`.

## Schemas

Declare the fields a collection's frontmatter must have in `mira.config.json`:

```json
{
  "collections": {
    "posts": {
      "fields": {
        "title": "string",
        "description": "string?",
        "date": "date",
        "tags": "string[]?"
      }
    }
  }
}
```

| Type | Accepts |
| --- | --- |
| `string` | Text |
| `number` | Numbers |
| `boolean` | `true` or `false` |
| `date` | A date like `2026-10-07` |
| `url` | A path starting with `/`, or an `http` or `https` URL |
| `string[]` | A list of text values |

Add `?` to make a field optional. Fields not in the schema fail the build, which catches typos such as `auther:`; set `"strict": false` on the collection to allow them. Mira's own keys (`slug`, `draft`, `layout`, `transition`, and `order`) are always allowed.

A failing entry stops the build at the exact line:

```text
✕ `date` must be a date like 2026-10-07, got "September"

  content/posts/ship-less.md:4
  › 4 date: September

  hint  the schema in mira.config.json declares date: date
```

## Drafts

`draft: true` keeps an entry out of production builds. The dev server still shows it.

## Feeds

When `site.url` is set, every collection with a dynamic route gets an RSS feed at its section path, such as `/posts/rss.xml`, linked from every page.

---

## Markdown

> The Markdown Mira renders at build time, from tables to callouts and highlighted code.

Mira renders Markdown at build time, so none of it costs the reader any JavaScript. It follows CommonMark with the GitHub extensions.

## Supported syntax

- Tables, strikethrough, task lists, and footnotes
- Heading ids with `{#custom-id}` after a heading
- Smart punctuation: straight quotes become curly, `--` becomes an en dash, `---` an em dash
- Raw HTML, passed through as written

## Headings

Every heading gets an id from its text, so `## Shared elements` links as `#shared-elements`. Repeated headings get `-1`, `-2`, and so on. Second and third level headings are collected into the page's `toc`, which this site shows as **On this page**.

## Code

Fenced code blocks are highlighted at build time into classes the theme colors:

````markdown
```rust
fn main() {
    println!("Hello from Mira");
}
```
````

```rust
fn main() {
    println!("Hello from Mira");
}
```

The language label shows in the block's corner. Mira understands the common languages, including Rust, JavaScript, HTML, CSS, JSON, YAML, Markdown, Python, Go, and shell. A few names map to the closest grammar: `mira`, `svelte`, and `vue` highlight as HTML, and `ts`, `tsx`, and `jsx` as JavaScript. Unknown languages render as plain, escaped text.

## Callouts

Start a quote with a marker to make a callout:

```markdown
> [!NOTE]
> Useful information.
```

> [!NOTE]
> Useful information the reader should notice.

> [!TIP]
> A better way to do something.

> [!IMPORTANT]
> Something the reader needs to know.

> [!WARNING]
> Something that needs attention right away.

> [!CAUTION]
> The risks of an action.

## Footnotes

Mira writes footnotes[^1] with links back to the text.

[^1]: Like this one.

## Prose styles

Markdown pages are wrapped in `<article class="prose">`, which sets a readable measure, rhythm, and styles for lists, quotes, tables, code, and images. Add the class to any element in a component to get the same styles.

---

## Data files

> Keep navigation and other structured data in JSON or YAML and read it from any template.

Files in `data/` are loaded at build time and exposed to every template as `data.<name>`, where the name is the file name without its extension. Dashes become underscores, so `docs-nav.json` is `data.docs_nav`.

| File | Template name |
| --- | --- |
| `data/docs.json` | `data.docs` |
| `data/team.yaml` | `data.team` |
| `data/docs-nav.yml` | `data.docs_nav` |

## Example: docs navigation

This site's sidebar is one JSON file:

```json
[
  {
    "title": "Getting started",
    "items": [
      { "title": "Introduction", "url": "/docs/introduction/" },
      { "title": "Installation", "url": "/docs/installation/" }
    ]
  }
]
```

And one loop in the docs route:

```mira
{#each data.docs as section}
  <p>{{ section.title }}</p>
  <ul>
    {#each section.items as item}
    <li><a href="{{ item.url }}" mira-nav>{{ item.title }}</a></li>
    {/each}
  </ul>
{/each}
```

Every URL in the file is checked at build time like any other link, so a renamed page cannot leave a dead sidebar entry.

## Errors

Invalid JSON or YAML fails the build with the file and line.

---

# Section: Motion

## Page transitions

> Native, cross document transitions with route pairs, direction, and accessible defaults.

Moving between pages animates by default. Mira uses the browser's cross document view transitions, so each page stays plain HTML and the animation costs no framework code.

## How it works

Every page opts in to view transitions. When the next page arrives, the 938 byte runtime picks a transition name and a direction and hands them to the browser, which animates from a snapshot of the old page to the new one.

Browsers without cross document view transitions navigate normally. Nothing breaks; the motion is an enhancement.

## Choosing a transition

Mira picks the first match:

1. A route pair in config that matches the navigation
2. The destination page's `transition` frontmatter
3. `transitions.default` in config, which is `fade` unless you change it

```json
{
  "transitions": {
    "default": "fade",
    "pairs": {
      "/posts/ -> /posts/*": "slide-up"
    }
  }
}
```

```markdown
---title: Changelog
transition: slide
---```

## Route pairs

A pair key is `"<from> -> <to>"`. Each side is an exact path such as `/posts/`, or a prefix ending in `*` such as `/posts/*`, which matches any path under it but not the prefix itself.

Navigating a pair in the opposite direction plays the transition backwards. With the pair above, opening a post slides up, and returning to the list, by link or by the back button, slides down.

## Built in transitions

| Name | Forward | Back |
| --- | --- | --- |
| `fade` | Crossfade | Crossfade |
| `slide-up` | New page rises in | Old page sinks out |
| `slide` | Pushes in from the right | Pulls in from the left |
| `none` | No animation | No animation |

## Direction

The runtime sets a second transition type, `forward` or `back`. Back is a history traversal to an earlier entry, or a pair navigated in reverse. Use both types in your own CSS.

## Custom transitions

A transition name is a view transition type, so you define your own in CSS:

```css
html:active-view-transition-type(zoom)::view-transition-new(root) {
  animation: 420ms var(--mira-spring) both zoom-in;
}
html:active-view-transition-type(zoom):active-view-transition-type(back)::view-transition-new(root) {
  animation-name: zoom-out;
}
@keyframes zoom-in { from { opacity: 0; transform: scale(0.96); } }
@keyframes zoom-out { from { opacity: 0; transform: scale(1.04); } }
```

Then use `transition: zoom` in frontmatter or a pair.

## Timing

Shared elements move with `--mira-spring` over 520ms. The page itself fades with `--mira-ease-out`. Change `--motion-morph` and `--motion-fast` in your theme to retune everything at once. See [Design tokens](/docs/design-tokens/).

## Accessibility

- **Reduced motion.** When the reader asks for reduced motion, shared elements jump into place and the page crossfades over 120ms.
- **Focus.** After a link navigation, focus moves to the new page's main heading without scrolling, so keyboard and screen reader users start at the new content. Back navigations and links to a `#hash` keep the browser's behavior.
- **Agents and automation.** Transitions are skipped when the browser reports automation or a crawler, so the DOM is stable for agents.

## Prefetching

Transitions only look good when the next page is ready. Mira prefetches links on hover and prerenders on press with Speculation Rules, and falls back to a prefetch on hover, touch, or focus in other browsers. See [Performance](/docs/performance/#prefetching).

---

## Shared elements

> Make an element travel between pages with the mira-morph attribute.

A shared element is the same thing shown on two pages, such as a post title on a list and on the post itself. Give both the same `mira-morph` name and it moves from one position to the other during the transition.

```mira
<!-- routes/posts/index.mira -->
{#each collections.posts as post}
  <a href="{{ post.url }}">
    <h2 mira-morph="title-{{ post.slug }}">{{ post.title }}</h2>
  </a>
{/each}
```

```mira
<!-- routes/posts/[slug].mira -->
<h1 mira-morph="title-{{ entry.slug }}">{{ entry.title }}</h1>
```

On this site, each page's heading carries a name like `doc-routing`, so a link with the same name morphs into it.

## What the compiler does

`mira-morph="title-ship-less"` becomes `data-mira-morph="title-ship-less"`, and the page's own stylesheet gets:

```css
[data-mira-morph="title-ship-less"] {
  view-transition-name: title-ship-less;
  view-transition-class: mira-morph;
}
```

Names live in the stylesheet rather than in inline `style` attributes, so pages keep a strict content security policy.

## Rules

- **Unique per page.** A name used twice on one page makes the browser skip the whole transition, so Mira fails the build instead.
- **Valid names.** Characters other than letters, digits, `-`, and `_` become `-`. A name starting with a digit gets an `m-` prefix. `none`, `auto`, `root`, and other CSS keywords are rejected.
- **Stable elements.** An element with the same name and position on both pages, such as a site header, holds still while the rest of the page changes. This site's docs sidebar uses that to stay put.

## Styling the motion

Every shared element carries the view transition class `mira-morph`, so you can tune them together:

```css
::view-transition-group(*.mira-morph) {
  animation-duration: 640ms;
}
```

Or one at a time by name:

```css
::view-transition-group(brand) {
  animation-duration: 0s;
}
```

## Tips

- Give shared elements `width: fit-content` when the text should not stretch across the column during the move.
- Morph the text, not its card. Large boxes changing aspect ratio distort.
- Keep names derived from stable data, such as a slug, rather than a position in a list.

---

# Section: Design

## Design tokens

> The colors, type, space, radii, and motion every Mira page starts with, and how to change them.

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

---

## Components

> The built in CSS components, their markup, and when to use each.

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

---

## Pixel module

> Draw the Mira mark and pixel lettering as inline SVG at build time.

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

---

## Fonts

> Self host font files with preloading and swap, with no third party requests.

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

---

## Media frames

> Put every image and video in a frame that reserves its space, loads from a mosaic, and ships as AVIF.

Every image and video in Mira lives in a frame, and the frame is the only decoration. Each part of it does a job:

- **Reserved space.** The compiler writes the exact width and height, so the page never jumps.
- **Pixel mosaic.** An 8×8 mosaic of the image's real colors paints first, then resolves into the photo in steps. It is the loading state, built from the logo's pixel module.
- **Corner handles.** They appear only when the image opens full size, so they tell the reader it is clickable.
- **Hairline border.** It is the only line, and it doubles as the focus ring.
- **Caption line.** Mono text that holds the real caption and credit.

## Images

```html
<mira-frame src="./pipeline.png" alt="Build pipeline" caption="Cold build, 1,000 pages" credit="Mira" zoom></mira-frame>
```

| Attribute | Meaning |
| --- | --- |
| `src` | The file. `./x.png` is relative to the file that contains the frame, `/x.png` is under `public/`, and `@/x.png` is under the project root |
| `alt` | Required. Describe the image, or use `alt=""` when it is decoration |
| `caption` | Optional caption shown under the frame |
| `credit` | Optional credit, shown after the caption |
| `zoom` | The frame links to the original at full size and shows corner handles |

Frames take PNG, JPEG, GIF, WebP, AVIF, and SVG. A missing `alt` fails the build with the file and a hint.

## Markdown images

Images in Markdown become frames automatically. The title becomes the caption:

```markdown
![Build pipeline](./pipeline.png "Cold build, 1,000 pages")
```

An image alone in its paragraph replaces the paragraph, since a figure cannot sit inside one.

## Video

```html
<mira-frame src="./demo.mp4" alt="The editor saving a page" width="1920" height="1080" poster="./demo.png" caption="Live reload"></mira-frame>
```

Video frames use the same parts. The poster image's mosaic is the loading state, a rounded pill plays and pauses, a thin progress line runs along the bottom edge, and the corner handles turn ember while the video plays. Mira cannot read a video's size, so `width` and `height` are required. The controls are a small script that loads only on pages with a video frame.

## Output

Each file is written once, however many pages use it, under a readable name with a short content hash:

```text
/media/pipeline-7kq2.avif
/media/pipeline-7kq2.png
```

Raster images are encoded to AVIF beside the original, and pages serve the AVIF with the original as a fallback. Encoding is pure Rust and cached by content hash in `.mira/cache/media`, so a second build performs no encodes. If the AVIF would be larger than the original, Mira ships the original alone.

## media.json

Every build with frames writes `/media.json`, a manifest of every file:

```json
{
  "id": "pipeline-7kq2",
  "kind": "image",
  "width": 1200,
  "height": 630,
  "formats": [
    { "src": "/media/pipeline-7kq2.avif", "format": "avif", "bytes": 27272 },
    { "src": "/media/pipeline-7kq2.png", "format": "png", "bytes": 336236 }
  ],
  "alt": "Build pipeline",
  "caption": "Cold build, 1,000 pages",
  "pages": ["/", "/posts/ship-less/"]
}
```

Hosts and agents read it, and `llms.txt` links it.

## The rule for decoration

Delete it. If something breaks (layout shift, state, clarity, or a click target), it stays. Otherwise it goes. One hue per frame, hairlines only, and no shadows or gradients on media.

---

# Section: Performance

## Performance

> What Mira does to make pages load first and stay small, and the budgets that keep them that way.

Mira's job is to send less. A content page is one HTML file with everything it needs to render inside it.

## What a page contains

- **HTML rendered at build time.** No component code runs in the browser and nothing hydrates.
- **Inlined CSS.** The base styles, the theme, the layout's and page's styles, and only the component CSS the page uses, in one `<style>` element. There is no stylesheet request to wait for.
- **A 938 byte runtime.** Gzipped, inline in the head. It sets the transition and its direction, moves focus after navigation, and prefetches in browsers without Speculation Rules.
- **Prefetch rules.** A small Speculation Rules block for the next page.

## Component CSS on demand

Each component's CSS is tagged with its class. While writing a page, the compiler checks the HTML and inlines only the blocks whose class appears, so a page without buttons carries no button CSS.

## Prefetching

```json
{ "prefetch": { "eagerness": "moderate", "prerender": true } }
```

| Setting | Effect |
| --- | --- |
| `eagerness: "conservative"` | Prefetch when a link is pressed |
| `eagerness: "moderate"` | Prefetch when a pointer rests on a link, the default |
| `eagerness: "eager"` | Prefetch as early as the browser allows |
| `prerender: true` | Also prerender on press, so the page is fully rendered before it is shown |

Only same origin links are fetched. Opt a link, or every link inside an element, out with `data-mira-no-prefetch`; use it for links that change state or need a signed in session. Links with `download` are skipped. Browsers without Speculation Rules get a prefetch on hover, touch, or focus instead, which is skipped when the reader has Save-Data on.

## Images

Every `<img>` that points at a file in `public/` gets its intrinsic `width` and `height` written in, so it reserves its space and never shifts the layout. Images also get `loading="lazy"` and `decoding="async"` unless you set them. Set `loading="eager"` on the image above the fold.

## Budgets

```json
{ "budgets": { "page_kb": 14 } }
```

`page_kb` is the largest a page may be, gzipped. A page over budget fails the build with its size. 14 KB fits in the first round trip of a new connection, which is why the starter uses it.

The build summary draws each page against the budget:

```text
pages
  / ·································  ⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀   6.9 KB  1 morph
  /posts/ ···························  ⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀   5.0 KB  3 morphs
```

## Build speed

The compiler is a native Rust binary that renders pages in parallel. To see where a build spends its time:

```bash
mira build --timings
```

```text
timings
  load ·······  ⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    2.5 ms
  render ·····  ⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    1.5 ms
  check ······  ⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    1.1 ms
  write ······  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀     13 ms  slowest
```

The same numbers are in `mira build --json` under `timings`.

---

## Search

> A build time index for every page and a search box that reads it.

Every build writes a search index to `/_mira/search.json`. Add a search box with one element:

```html
<mira-search placeholder="Search docs"></mira-search>
```

The element's script is a separate file that loads only on pages that use it, and the index is fetched the first time the box is focused. Pages without search pay nothing.

## Using it

- Press `/` anywhere on the page to focus the box.
- Results update as you type, best match first, with the matching words highlighted.
- Use the arrow keys to move through results and `Escape` to close them.
- When a term matches a section heading, the result links straight to that section.

## Ranking

A page scores for each search term found in its title, then its section headings, then its description, then its text. Every term must match somewhere for a page to appear.

## The index

The index is a JSON array with one object per page:

```json
{
  "url": "/docs/routing/",
  "title": "Routing",
  "description": "How files in routes/ become URLs.",
  "headings": [{ "id": "dynamic-routes", "text": "Dynamic routes" }],
  "text": "Every .md or .mira file in routes/ is a page…"
}
```

Text comes from the page's `<main>` element, without navigation, scripts, or SVG, and is capped at 1,600 characters per page; titles and headings carry most of the weight. The 404 page is left out.

The same file is a search API for agents: fetch it, filter it, and follow the canonical URLs. `mira mcp` exposes it as a `search` tool. See [MCP server](/docs/mcp/).

## Styling

The box and its results use the design tokens. Restyle them with `mira-search input` and `mira-search ol`.

---

# Section: Agents

## SEO and AI search

> Get pages found by search engines and cited by AI answer engines, and decide what each kind of crawler may do.

Mira writes the metadata search engines and AI answer engines read, checks it on every build, and lets you choose separately what search, AI answers, and AI training may do with your pages.

## On every page

From frontmatter and config, each page gets a title, description, canonical URL, Open Graph and Twitter card tags, and structured data:

| Page | Structured data |
| --- | --- |
| Home | `WebSite` and `Organization`, with `site.same_as` profiles |
| Collection entries | `BlogPosting` with dates, image, and author |
| Nested pages | `BreadcrumbList` |
| Pages with `faq` | `FAQPage` |

## Frontmatter

```markdown
---title: Shipping less
description: What this page ships, and why every byte has to justify itself.
updated: 2026-10-01
author: Om Rajguru
image: /covers/shipping-less.png
image_alt: A page loading with no JavaScript
canonical: /posts/shipping-less/
robots: noindex
faq:
  - q: Does Mira ship JavaScript?
    a: Only a 938 byte runtime for transitions and prefetching.
---```

| Key | Effect |
| --- | --- |
| `updated` | The sitemap's `lastmod` and the article's `dateModified` |
| `author` | The article's author, otherwise the site |
| `image`, `image_alt` | The social card for this page, overriding `site.image` |
| `canonical` | A path or full URL to declare as the canonical page |
| `robots` | Written as a robots meta tag; `noindex` also removes the page from the sitemap, `llms.txt`, and search |
| `faq` | A list of `q` and `a`, written as `FAQPage` |

## Site settings

```json
{
  "site": {
    "url": "https://example.com",
    "image": "/og.png",
    "image_alt": "Example, a site built with Mira",
    "twitter": "@example",
    "theme_color": "#0b0b0d",
    "same_as": ["https://github.com/example", "https://x.com/example"]
  }
}
```

`site.url` is needed for canonical URLs, the sitemap, feeds, and absolute social image URLs.

## Crawler policy

Three switches decide who may use your pages:

```json
{
  "agents": {
    "search": "allow",
    "answers": "allow",
    "training": "disallow"
  }
}
```

| Switch | Covers |
| --- | --- |
| `search` | Search engines indexing pages |
| `answers` | AI answer engines that fetch a page to answer a question and cite it: OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, DuckAssistBot, MistralAI-User |
| `training` | Crawlers that collect pages to train models: GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot, Bytespider, meta-externalagent, cohere-training-data-crawler |

The settings above write:

```text
User-agent: GPTBot
Disallow: /
…

User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=no
Allow: /
```

`agents.robots` still sets rules for any single crawler and wins over the switches. Crawler names change over time; check robots.txt after upgrading Mira.

## Build checks

Every build warns when a page has no description of its own, a title over 60 characters, a description outside 50 to 160 characters, or a title or description shared with another page. Pages marked `noindex` and the 404 page are skipped.

## For AI answer engines

What helps a page get cited is the same as what helps people: a clear title, a description that answers the question, headings that name what each section covers, and stable URLs. Mira adds the machine readable parts: a Markdown version of every page, `llms.txt` linking each one, a JSON search index, and on Vercel, the Markdown version served to requests that ask for `text/markdown`. See [Agent surface](/docs/agents/).

---

## Agent surface

> Markdown twins, llms.txt, a search API, a crawler policy, and structured data, written on every build.

People read a site through the browser. Agents do better with text, structure, and stable URLs. Mira writes both from the same source on every build, so they never drift apart.

## Markdown twins

Every page has a Markdown version at the same path with `.md`:

| Page | Twin |
| --- | --- |
| `/` | `/index.md` |
| `/docs/routing/` | `/docs/routing.md` |

A twin starts with frontmatter naming the page and its canonical URL:

```markdown
---title: "Routing"
url: "https://mira.example/docs/routing/"
description: "How files in routes/ become URLs."
---
# Routing

Every .md or .mira file in routes/ is a page…
```

Pages written in Markdown reuse their source. Component pages are converted from their rendered `<main>` element, keeping headings, lists, links, code, and images and leaving out navigation and scripts. Each page links its twin with `<link rel="alternate" type="text/markdown">`. Turn twins off with `"agents": { "twins": false }`.

## llms.txt

`/llms.txt` follows the llms.txt format: the site's title and description, then every page grouped by collection, each linking to its twin. `/llms-full.txt` is every twin in one file, for agents that want the whole site in one request.

## Search API

`/_mira/search.json` lists every page with its title, description, headings, and text. See [Search](/docs/search/#the-index).

## Crawler policy

For separate switches covering search, AI answers, and AI training, see [SEO and AI search](/docs/seo/#crawler-policy).

```json
{
  "agents": {
    "robots": { "*": "allow", "ExampleBot": "disallow" }
  }
}
```

Each agent gets `allow` or `disallow`, written to `/robots.txt` with specific agents first and the catch all last. When `site.url` is set, the file also points to the sitemap.

## Sitemap and feeds

With `site.url` set, the build writes `/sitemap.xml`, with `lastmod` from each page's `date`, and an RSS feed per collection with a dynamic route. Without it, Mira skips them and says so, since both need absolute URLs.

## Structured data

Every page has Open Graph tags for its title, description, type, and URL. Collection entries also get JSON-LD as a `BlogPosting` with the headline, description, publish date, and URL.

## Stable markup

Mira's own markup is semantic: one `<main>`, labeled navigation, headings in order, and `aria-current` on the current link. Transitions are skipped for automated browsers so the DOM stays still while an agent reads it.

---

## MCP server

> Serve a Mira site to agents over the Model Context Protocol.

`mira mcp` runs an MCP server over standard input and output. Any MCP client can connect and list, search, and read the site.

```bash
mira mcp --root ./my-site
```

## Tools

| Tool | Arguments | Returns |
| --- | --- | --- |
| `list_pages` | none | Every page's URL, title, and description |
| `read_page` | `url`, such as `/docs/routing/` | The page's Markdown twin |
| `search` | `query`, optional `limit` from 1 to 25 | The best matches with URL, title, and a snippet |

The server rebuilds the site before answering each call, so answers always match the source on disk. It builds into `.mira/mcp/` and never touches `dist/`.

## Connecting a client

Most clients take a command to launch. For example, a client configured with a JSON file:

```json
{
  "mcpServers": {
    "my-site": {
      "command": "mira",
      "args": ["mcp", "--root", "/path/to/my-site"]
    }
  }
}
```

## Protocol details

The server speaks JSON-RPC 2.0, one message per line. It handles `initialize`, `ping`, `tools/list`, and `tools/call`, and ignores notifications. Tool failures, such as an unknown URL or a broken build, come back as tool results with `isError: true` and a message the agent can act on. Logs go to standard error so they never mix with protocol messages.

## Security

The server only reads the project and its own build folder. `read_page` maps URLs into the build output and drops `..` segments, so a request cannot read files outside it.

---

## Working with coding agents

> How Mira helps coding agents build sites correctly on the first attempt.

Coding agents build Mira sites for people. Mira gives them predictable conventions, machine readable output, and errors that say how to fix themselves.

## AGENTS.md

`mira new` writes an `AGENTS.md` at the project root. It covers the folder conventions, template syntax, transitions, the design tokens, and the commands, in the format coding agents look for. Keep it updated as your project adds its own conventions.

## JSON output

`mira build --json` prints one JSON object to standard output and nothing else:

```json
{
  "ok": true,
  "schema": 1,
  "report": {
    "pages": [{ "url": "/", "source": "routes/index.mira", "html_bytes": 21890, "gzip_bytes": 7066, "morphs": 1 }],
    "collections": { "posts": 2 },
    "runtime_gzip_bytes": 938,
    "outputs": ["sitemap.xml", "llms.txt", "robots.txt"],
    "warnings": [],
    "timings": [{ "step": "render", "ms": 1.5 }],
    "duration_ms": 30.2
  }
}
```

`schema` is the output version; it changes only when the shape does.

## Errors an agent can act on

With `--json`, a failure prints the error in the same structure the terminal and the dev overlay use:

```json
{
  "ok": false,
  "schema": 1,
  "error": {
    "message": "layout \"wide\" does not exist",
    "file": "routes/about.md",
    "line": null,
    "hint": "add layouts/wide.mira, or use one of: default",
    "causes": [],
    "excerpt": []
  }
}
```

The exit code is non zero, so scripts and agents can branch on it. See [Checks and errors](/docs/errors/).

## Reading the site back

An agent that changed a page can confirm the result as text with `mira mcp`'s `read_page`, or by reading the page's twin in `dist/`.

---

# Section: Quality and security

## Security

> The policies and defaults that make a Mira site safe without configuration.

A Mira site is static HTML, which removes most of the attack surface. Mira locks down the rest by default.

## Content security policy

Every page carries a policy in a meta tag, generated from the page itself:

```text
default-src 'self';
script-src 'self' 'sha256-…' 'sha256-…';
style-src 'self' 'sha256-…';
img-src 'self' data: https:;
object-src 'none';
base-uri 'self';
form-action 'self'
```

The hashes cover the page's inline runtime, its prefetch rules, and its inlined stylesheet, and nothing else. An injected script or style has no matching hash and does not run. Shared element names are compiled into the stylesheet instead of `style` attributes, so the policy never needs `unsafe-inline`.

Scripts and styles from your own origin are allowed, so a file you put in `public/` and link works without changes.

## Security headers

Mira writes a `_headers` file, read by Netlify and Cloudflare Pages, with the headers a meta tag cannot set:

| Header | Value |
| --- | --- |
| `Content-Security-Policy` | `frame-ancestors 'none'; object-src 'none'; base-uri 'self'` |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Cross-Origin-Opener-Policy` | `same-origin` |
| `Cross-Origin-Resource-Policy` | `same-origin` |
| `Permissions-Policy` | Camera, microphone, geolocation, payment, and USB off |
| `Strict-Transport-Security` | Two years, including subdomains |

Twins are served as `text/markdown`. Turn HSTS off with `"headers": { "hsts": false }` until HTTPS is permanent on your domain, or stop writing the file with `"emit": false`. For other hosts, copy these headers into the host's own config.

## Templates escape by default

`{{ value }}` escapes `<`, `>`, `&`, and quotes. Raw HTML needs `{{ unsafe value }}`, and every use is reported as a build warning with its file and line. JSON written into pages escapes `</`, so data cannot close a script element.

## Prefetching stays safe

Prefetching only fetches same origin links with GET. Mark links that change state or depend on a session with `data-mira-no-prefetch`.

## A careful build

- An output directory is only cleared when it carries Mira's `.mira-output` marker, so `--out` pointed at the wrong folder fails instead of deleting it.
- Theme values and font settings are validated so config cannot inject CSS or HTML.
- The dev server listens on `127.0.0.1` only and rejects paths that try to leave the output folder.

---

## Checks and errors

> What the build checks, how errors read, and the dev overlay.

Mira checks a site while it builds and stops on anything that would break for a reader. Errors name the file and line and say how to fix the problem.

## What fails the build

- Invalid frontmatter, JSON, or YAML
- Frontmatter that does not match its collection's schema
- Template syntax errors, such as an unclosed `{#each}`
- A missing layout, or a dynamic route without a collection
- Two files producing the same URL
- An internal link or asset that does not exist
- A shared element name used twice on one page
- A page over its size budget
- A missing font file, or an invalid config value

## What warns

Warnings print after the summary and do not stop the build:

- A link to an anchor that does not exist on its target page
- An `<img>` without `alt` text; use `alt=""` for decorative images
- More than one `<h1>` on a page
- Each `{{ unsafe … }}` in a template
- A generated file skipped because `public/` has one with the same name
- Feeds, sitemap, and canonical URLs skipped because `site.url` is not set

## Reading an error

```text
✕ /about/ links to /guide/, which does not exist

  routes/about.md:7
    5 # About
    6
  › 7 See [the guide](/guide/).

  hint  fix the path, add the page under routes/, or add the file under public/
```

The first line is the problem. Below it are the file and line, the surrounding source with the failing line marked `›`, any underlying causes, and a hint.

## The dev overlay

In `mira dev`, a failed rebuild opens an overlay on the page you are viewing with the same message, location, source, and hint. It also catches errors thrown by scripts in the page.

- **Copy** puts a plain text report on the clipboard, ready for an issue or a chat with an agent.
- **Esc** collapses it to a small badge; click the badge to reopen it.
- With more than one error, step through them with the arrows.

Fix the file and save. The overlay closes and the page reloads once the build succeeds. If the very first build fails, the dev server serves a holding page that shows the overlay and reloads on its own.

## In scripts

`mira build` exits with a non zero code on failure. Add `--json` to get the error as structured data. See [Working with coding agents](/docs/coding-agents/#errors-an-agent-can-act-on).

---

# Section: Migrating

## Migrating to Mira

> Move a Next.js, Astro, Hugo, Jekyll, Docusaurus, Gatsby, Eleventy, or VitePress site to Mira with one command, keeping every URL.

`mira migrate` moves a content site from another framework into a new Mira project. It brings over pages, posts, frontmatter, images, and static files. It writes a redirect for every URL that changes, then builds the new project to prove it works.

```bash
mira migrate ./old-site ./new-site
```

The framework is detected from `package.json` or the project's files. To name it yourself, pass `--from`:

```bash
mira migrate ./old-site ./new-site --from hugo
```

## Safe by design

- **Nothing in the old project runs.** Config files, components, and templates are read as text. No JavaScript, Go templates, or Liquid execute.
- **The old project is never changed.** It is only read. The destination must be a new or empty folder outside the old project.
- **No network.** Remote images are not downloaded. Each one becomes a link and is listed for review.
- **Files never leave the project.** A relative image is followed only to a regular file inside the old project, and symlinks are skipped.
- **Nothing is lost silently.** Anything that cannot be converted is kept in a `<!-- mira migrate: … -->` comment and listed, with its file and line, in `MIGRATION.md`.

## What it moves

| From the old site | In the Mira project |
| --- | --- |
| Markdown and MDX pages | `routes/<path>/index.md`, at the same URL |
| Posts in `posts/`, `_posts/`, `blog/`, `articles/`, `news/`, `notes/`, `writing/`, `changelog/`, `journal/` | A [collection](/docs/collections/) in `content/<name>/`, with `routes/<name>/[slug].mira` and an index page |
| YAML (`---`) or TOML (`+++`) frontmatter | YAML frontmatter, with common names mapped (below) |
| Images referenced by relative path, wherever they live | Copied next to the new file, as [media frames](/docs/media/) |
| `public/`, `static/`, `assets/` | `public/` |
| Links to `.md` files | Links to the new page URLs |
| A 404 page | `routes/404.md` |
| Site title, description, and URL | `site` in `mira.config.json` |

Collection schemas are inferred from the entries, with `strict: false` so fields Mira does not know are kept. Fields with mixed types across entries are left out of the schema rather than guessed.

### Frontmatter names

| Mira | Also read from |
| --- | --- |
| `description` | `summary`, `excerpt`, `subtitle`, `abstract` |
| `date` | `pubDate`, `publishDate`, `published_at`, `publishedAt`, `created`, or a `2024-05-01-` file name prefix |
| `updated` | `lastmod`, `updatedDate`, `updated_at`, `modified`, `last_update` |
| `image` | `cover`, `coverImage`, `heroImage`, `hero`, `thumbnail`, `featured_image`, `ogImage` |
| `tags` | `keywords`, `categories` |
| `author` | `authors` (the first), or the `name` of an author object |
| `draft` | `published: false` |

Dates in any common form (`2024-05-01T10:00Z`, `2024/05/01`, `May 1, 2024`, `Jul 08 2022`) become `2024-05-01`. A date that cannot be read is kept as written, never cut short, and the build points at it.

## Per framework

**Next.js.** Reads `content/`, `posts/`, `_posts/`, `blog/`, and `data/blog/`, plus Markdown and MDX under `pages/` and `app/`. `<Image>` becomes a media frame. MDX `import` and `export` lines are dropped. Other components are kept as comments and listed. Pages written as `page.tsx` or in `pages/` are listed to rebuild as `.mira` routes.

**Astro.** Reads `src/content/` and Markdown under `src/pages/`. A `heroImage` in `src/assets/` is copied to `public/images/` so it can be the social image. `.astro` pages are listed to rebuild.

**Hugo.** Reads `content/`, with TOML or YAML frontmatter. `_index.md` becomes the section's index page. `{{< figure >}}` becomes a media frame. Other shortcodes are kept as comments and listed. `static/` becomes `public/`.

**Jekyll.** Reads `_posts/` into a `posts` collection and Markdown pages from the project. Old post URLs follow the site's `permalink` setting (`date`, `pretty`, `ordinal`, `none`, or a pattern), and each one redirects to `/posts/<slug>/`. `.html` pages redirect to clean URLs. `{% highlight %}` becomes a fenced code block. Other Liquid is kept as a comment and listed.

**Docusaurus.** Reads `docs/` (at `/docs/…`) and `blog/`. Dated blog URLs like `/blog/2021/08/26/welcome` redirect to `/blog/welcome/`. `:::note`, `:::tip`, `:::info`, `:::warning`, and `:::danger` become callouts, titles included.

**Gatsby.** Reads `content/` and Markdown under `src/pages/`. A `post/index.md` takes its slug from the folder.

**Eleventy.** Reads the `input` folder named in the Eleventy config, or the project root. `.njk`, `.liquid`, and `.html` templates are listed to rebuild. Generated files like `sitemap.xml.njk` and feeds are skipped, because Mira writes its own.

**VitePress.** Reads `docs/`, or the project root. `docs/public/` becomes `public/`. `::: tip` containers become callouts. `.html` URLs redirect to clean URLs.

**A Markdown folder.** Any folder of `.md` files, with `--from markdown`.

## After migrating

```bash
cd new-site
mira dev
```

1. Read `MIGRATION.md`. It lists every item to review, with its file and line, and every redirect.
2. Rebuild the listed pages as `.mira` routes. The home page and post layout are generated as a starting point.
3. Compare the old site's `sitemap.xml` with `dist/sitemap.xml`. Next.js, Gatsby, and Astro can set URLs in code, which `mira migrate` does not run. Add any missing URLs under [`redirects`](/docs/configuration/#redirects).
4. Add [`hosts`](/docs/deploying/#hosts) for where the site will live, and deploy.

## For agents

`--json` prints the report and the build result to standard output. `--dry-run` reports what would move without writing anything.

```bash
mira migrate ./old-site ./new-site --json
```

```json
{
  "ok": true,
  "schema": 1,
  "dry_run": false,
  "report": {
    "framework": "jekyll",
    "pages": 4,
    "entries": { "posts": 12 },
    "assets": 30,
    "redirects": { "/2024/05/01/hello.html": "/posts/hello/" },
    "todo": ["_posts/2024-05-01-hello.md:9: Liquid `{% include note.html %}` is not rendered by Mira"]
  },
  "build": { "ok": true, "pages": 19, "warnings": [] }
}
```

When the build fails, `build.error` has the same shape as [`mira build --json`](/docs/coding-agents/#json-output) errors, so an agent can fix the file and run `mira build` again.

---

# Section: Reference

## Configuration

> Every key in mira.config.json, with types and defaults.

Mira reads `mira.config.json` from the project root. Every key is optional. Unknown keys fail the build, so a typo never passes silently.

```json
{
  "site": { "title": "My site", "description": "…", "url": "https://example.com", "lang": "en" },
  "scheme": "dark",
  "transitions": { "default": "fade", "pairs": { "/posts/ -> /posts/*": "slide-up" } },
  "prefetch": { "eagerness": "moderate", "prerender": true },
  "theme": { "ember": "#ff5a1f" },
  "fonts": [{ "family": "Geist", "src": "/fonts/Geist.woff2", "weight": "100 900", "preload": true }],
  "collections": { "posts": { "fields": { "title": "string", "date": "date" } } },
  "agents": { "twins": true, "robots": { "*": "allow" } },
  "headers": { "emit": true, "hsts": true },
  "hosts": { "vercel": {}, "cloudflare": { "project": "my-site" } },
  "redirects": { "/old/": "/new/" },
  "budgets": { "page_kb": 14 }
}
```

## site

| Key | Type | Default | Meaning |
| --- | --- | --- | --- |
| `title` | string | `Mira site` | Site name, used in titles, feeds, and llms.txt |
| `description` | string | none | Default page description |
| `url` | string | none | Absolute origin such as `https://example.com`; enables canonical URLs, the sitemap, and feeds |
| `lang` | string | `en` | The `lang` attribute of every page |
| `image` | string | none | Social card image under `public/`, such as `/og.png` |
| `image_alt` | string | none | Alt text for the social card |
| `twitter` | string | none | The site's X handle, such as `@example` |
| `theme_color` | string | none | Browser UI color, such as `#0b0b0d` |
| `same_as` | list | `[]` | Profile URLs for the site's structured data |

## scheme

`dark`, `light`, or `system`. Default `dark`. See [Design tokens](/docs/design-tokens/#scheme).

## transitions

| Key | Type | Default | Meaning |
| --- | --- | --- | --- |
| `default` | string | `fade` | Transition when nothing more specific applies |
| `pairs` | object | `{}` | `"<from> -> <to>"` keys mapped to transition names |

See [Page transitions](/docs/page-transitions/).

## prefetch

| Key | Type | Default | Meaning |
| --- | --- | --- | --- |
| `eagerness` | string | `moderate` | `conservative`, `moderate`, or `eager` |
| `prerender` | boolean | `true` | Prerender on press |

## theme

An object of token overrides. Nested keys join with dashes into custom property names: `{ "radius": { "md": "10px" } }` sets `--radius-md`. Values are strings or numbers.

## fonts

A list of faces with `family`, `src`, `weight`, `style`, and `preload`. See [Fonts](/docs/fonts/).

## collections

Schemas keyed by collection name, each with `fields` and an optional `strict` (default `true`). See [Content collections](/docs/collections/#schemas).

## agents

| Key | Type | Default | Meaning |
| --- | --- | --- | --- |
| `twins` | boolean | `true` | Write Markdown twins, llms.txt, and llms-full.txt |
| `robots` | object | `{ "*": "allow" }` | User agent to `allow` or `disallow`; wins over the switches below |
| `search` | string | `allow` | Search engine indexing |
| `answers` | string | `allow` | AI answer engines that fetch and cite pages |
| `training` | string | `allow` | Crawlers that collect pages for AI training |

## headers

| Key | Type | Default | Meaning |
| --- | --- | --- | --- |
| `emit` | boolean | `true` | Write `_headers` and `vercel.json` |
| `hsts` | boolean | `true` | Include `Strict-Transport-Security` |

## hosts

The hosts to write config for, each mapped to its options. Mira writes the host's own config file on every build. See [Deploying](/docs/deploying/#hosts) for what each one writes.

| Key | Options |
| --- | --- |
| `vercel`, `netlify`, `github`, `firebase`, `azure`, `docker`, `deno`, `s3` | none: `{}` |
| `cloudflare` | `project`: the Pages project name |
| `render` | `service`: the service name |

An unknown host fails the build and lists the known ones.

## redirects

Old paths mapped to new paths or URLs, as permanent redirects. Each one is written in every host's format, plus a redirect page at the old path. Sources start with `/`; targets are a path starting with `/` or an `https://` URL. See [Deploying](/docs/deploying/#redirects).

## budgets

| Key | Type | Default | Meaning |
| --- | --- | --- | --- |
| `page_kb` | number | none | Largest gzipped page size in KB; larger pages fail the build |

---

## CLI

> Every mira command and option, from creating a site to serving it to agents.

```text
mira <command> [options]
```

`mira --help` lists commands, `mira <command> --help` lists a command's options, and `mira --version` prints the version.

## mira new

```bash
mira new <dir>
```

Creates a site from the starter in `<dir>`, which must be new or empty. The starter has a welcome page, an about page, a blog with two posts and a schema, a layout, a favicon, `mira.config.json`, `AGENTS.md`, and a `.gitignore`.

## mira dev

```bash
mira dev [--root <dir>] [--port <n>]
```

| Option | Default | Meaning |
| --- | --- | --- |
| `--root` | `.` | Project folder |
| `--port` | `4321` | Port to listen on |

Builds into `.mira/dev/`, serves it at `http://localhost:<port>`, and rebuilds when a file in the project changes. Changes inside `.mira/`, `dist/`, `.git/`, `node_modules/`, and `target/` are ignored. Pages reload after each successful build, and failed builds show the [error overlay](/docs/errors/#the-dev-overlay). Drafts are included. The server only listens on `127.0.0.1`.

## mira build

```bash
mira build [--root <dir>] [--out <dir>] [--json] [--timings]
```

| Option | Default | Meaning |
| --- | --- | --- |
| `--root` | `.` | Project folder |
| `--out` | `dist` | Output folder, relative to the project |
| `--json` | off | Print a JSON report or error to standard output instead of the summary |
| `--timings` | off | Show how long each build step took |

Exits with a non zero code if the build fails. See [Working with coding agents](/docs/coding-agents/#json-output) for the JSON shape.

## mira migrate

```bash
mira migrate <source> <dest> [--from <framework>] [--dry-run] [--json]
```

| Option | Default | Meaning |
| --- | --- | --- |
| `--from` | detected | `nextjs`, `astro`, `hugo`, `jekyll`, `docusaurus`, `gatsby`, `eleventy`, `vitepress`, or `markdown` |
| `--dry-run` | off | Report what would move without writing anything |
| `--json` | off | Print the report and build result as JSON |

Moves a site into a new Mira project at `dest`, which must be new or empty. The old project is only read, and nothing in it runs. See [Migrating to Mira](/docs/migrating/).

## mira mcp

```bash
mira mcp [--root <dir>]
```

Runs an MCP server over standard input and output. See [MCP server](/docs/mcp/).

## Terminal output

Mira's terminal output is monochrome, with stippled bars for sizes and timings. Emphasis is plain bold and dim, so it reads on any terminal theme. Styling turns off when output is not a terminal or `NO_COLOR` is set.

---

## Deploying

> Publish the dist folder to Vercel, Netlify, Cloudflare, GitHub Pages, Firebase, Render, Azure, Docker, Deno, or S3, with each host's config written for you.

`mira build` writes a complete static site to `dist/`. Deploying is publishing that folder. Name your hosts in `mira.config.json`, and Mira writes each host's own config file on every build, so headers, clean URLs, the 404 page, redirects, and Markdown twins behave the same everywhere.

```json
{
  "site": { "url": "https://example.com" },
  "hosts": { "vercel": {}, "netlify": {} }
}
```

## What is in dist

| Path | Contents |
| --- | --- |
| `index.html`, `*/index.html` | Pages |
| `404.html` | The not found page |
| `*.md` | Markdown twins |
| `llms.txt`, `llms-full.txt` | Agent indexes |
| `sitemap.xml`, `*/rss.xml` | When `site.url` is set |
| `robots.txt` | Crawler policy |
| `media/`, `media.json` | [Media frames](/docs/media/) and their manifest |
| `_headers`, `_redirects` | For Netlify and Cloudflare Pages |
| `vercel.json` | For Vercel, when `dist/` is the project root |
| `_mira/` | The search index, and scripts a page uses |
| everything from `public/` | As is |

## Before you deploy

Set `site.url` to your production origin so canonical URLs, the sitemap, and feeds use absolute links.

## Hosts

Each key under `hosts` writes that host's config. Files go in the project root unless noted. Mira only replaces files it wrote itself: if a config file you wrote by hand is in the way, the build stops and says so, and your file is left alone.

| Host | Key | Mira writes | Set up |
| --- | --- | --- | --- |
| Vercel | `vercel` | `vercel.json` | Import the repository. No build command is needed. |
| Netlify | `netlify` | `netlify.toml`, `dist/_redirects` | Import the repository. |
| Cloudflare Pages | `cloudflare` | `wrangler.toml`, `dist/_redirects` | Connect the repository. Set `hosts.cloudflare.project` to the Pages project name. |
| GitHub Pages | `github` | `.github/workflows/mira-pages.yml` | In the repository settings, set Pages to deploy from GitHub Actions. |
| Firebase Hosting | `firebase` | `firebase.json` | `firebase deploy --only hosting` |
| Render | `render` | `render.yaml` | Create a Blueprint from the repository. `hosts.render.service` names the service. |
| Azure Static Web Apps | `azure` | `dist/staticwebapp.config.json` | Point the app at `dist`. |
| Docker | `docker` | `Dockerfile`, `nginx.conf` | `docker build -t site .` then `docker run -p 8080:8080 site` |
| Deno Deploy | `deno` | `main.ts` | Deploy `main.ts` as the entry point. |
| S3 and CloudFront | `s3` | `cloudfront-function.js` | Upload `dist/` to the bucket and attach the function to the distribution's viewer requests. |

Every host gets the same behavior:

- the [security headers](/docs/security/#security-headers), with immutable caching for `/fonts/` and `/media/`
- URLs that end in a slash, with a permanent redirect from the version without one
- the site's own `404.html`, with status 404
- `.md` twins served as `text/markdown`, and, on hosts that support it, the twin for requests with `Accept: text/markdown`
- every entry in [`redirects`](#redirects), as permanent redirects in the host's own format

Vercel is verified live, Markdown negotiation included. GitHub Pages is verified too; it cannot set headers, so pages rely on their CSP meta tag there.

## Redirects

When a page moves, map the old path to the new one. [`mira migrate`](/docs/migrating/) fills this in for you.

```json
{
  "redirects": {
    "/2024/05/01/hello.html": "/posts/hello/",
    "/old-docs/": "https://docs.example.com/"
  }
}
```

Mira writes each redirect into every host's config. It also writes a small redirect page at the old path, with a canonical link, so hosts without redirect rules still send readers and crawlers on. A redirect cannot replace a page that exists, and the build warns when one points to a page it does not produce.

## Checking a deploy

`tools/check_host.py` in the Mira source checks a live site. It covers status codes, URLs with and without the trailing slash, the site's own 404 page, security headers, content types for twins and AVIF, media caching, and Markdown negotiation.

```bash
python tools/check_host.py https://your-site.example
```

**Your own server.** Serve `dist/` as static files. Map a request for `/path/` to `/path/index.html`, return `404.html` with status 404 for missing files, and send `.md` files as `text/markdown`. The `nginx.conf` from the `docker` host is a complete example.

## Clean URLs

Pages live at paths ending in a slash, each as an `index.html` in its own folder, so they work on every host without rewrite rules.

## Caching

Pages carry their CSS and runtime inline, so a page is one request. Cache HTML briefly and let it revalidate. Fonts and media are marked immutable; their file names change when their contents do.

---

