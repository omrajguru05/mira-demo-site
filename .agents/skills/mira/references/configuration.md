---
title: Configuration
description: Every key in mira.config.json, with types and defaults.
section: Reference
order: 801
---

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
