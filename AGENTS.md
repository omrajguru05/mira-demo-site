# Working on Om's Mira Blog

This is a personal blog and notes publication built with Mira and Om's design language.

## Conventions

- `routes/` holds pages.
  - `routes/index.mira` is the main publication home.
  - `routes/about.md` is the About page.
  - `routes/posts/[slug].mira` dynamically renders each post in `content/posts/`. Inside it, `<slot />` renders the entry Markdown body.
  - `routes/404.mira` is the custom 404 page.
- `layouts/default.mira` wraps every page. `<slot />` renders the page body.
- Content collections: `content/posts/*.md` checked strictly against `collections.posts.fields` in `mira.config.json`.
- Shared element transitions: `mira-morph="post-{{ slug }}"` preserves fluid motion from post lists to article headings.
- Navigation: Use `mira-nav` on links for automatic `aria-current="page"`.
- Typography & tokens: The Relative Sans, The Relative Mono, with dark mode defaults (#000000 primary surface, #ff5a1f accent).
- No em dashes in copy: use commas, parentheses, colons, or clean sentences.
- No filler labels or pill badges.
- Always run `npm run build` or `mira build` to verify changes.
