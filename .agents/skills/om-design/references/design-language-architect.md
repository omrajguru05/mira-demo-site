---
name: design-language-architect
description: Brand-agnostic design language architect for any website or app. Scans the repo for its design document (design.md, DESIGN.md, style guides, tokens, theme files, components), audits it, writes a sharper and more enforceable version that preserves the brand, and then forces creative, non-generic interface design through a point of view, signature moves, banned defaults, and a three-direction divergence protocol. Use when starting UI work in any repo, when asked to improve, create, or audit a design.md or design system, or when interfaces are coming out generic.
---

# Design Language Architect

Works with any brand and any design language. It does three jobs:

1. **Scan** the repo and find the design language it already has, written or implied.
2. **Upgrade** that language into a design document that is specific, testable, enforceable by agents, and built to produce distinctive interfaces.
3. **Design with it**, forcing the model past the first, average idea every time.

It never replaces a brand's identity with another one. It makes the existing identity sharper. It pairs with `intentional-craft.md` (bundled under `references/`), which holds the craft rules this skill enforces: the swap test, the Burrito definition of done, the point of view, craft details, the Editor's Pass, the ceiling option, and the experiment slot. Read it completely before step 3.

> **A design document exists to make the next screen better than the average screen. If an agent could follow every rule in it and still produce a generic interface, the document is not finished.**

---

## When to Run Which Mode

| Situation | Mode |
| --- | --- |
| The user asks to improve, audit, or rewrite their design.md or design system | Scan, then Upgrade |
| The repo has no design document and UI work is requested | Scan, then Upgrade (create), then Design |
| A good design document exists and UI work is requested | Scan (light), then Design |
| Interfaces in the repo look generic | Scan, Upgrade the composition and signature sections, then Design |

Always follow an audit-first, plan-second flow: show findings and a before-and-after plan, and get agreement before rewriting the user's design document.

---

## Mode 1: Scan

### 1.1 Find the sources

Search the repo in this priority order. Stop treating a source as authoritative once a higher one covers the same topic, but keep reading lower sources to detect drift.

1. **Design documents:** `design.md`, `DESIGN.md`, `design-system.md`, `docs/design/**`, `.design/**`, `STYLEGUIDE.md`, `brand.md`, `BRAND.md`, `**/design-language*.md`, agent rule files that contain design rules (`CLAUDE.md`, `AGENTS.md`, `.cursor/rules/**`, `.github/copilot-instructions.md`).
2. **Tokens:** `tokens.json`, `**/tokens/**`, `*.tokens.json`, Style Dictionary config, Figma token exports.
3. **Theme code:** CSS custom properties in `:root` and theme selectors, `tailwind.config.*` and `@theme` blocks, `theme.ts`, CSS-in-JS theme objects, SCSS variable files.
4. **Components:** the component library folder (`components/ui`, `src/components`, `packages/ui`), Storybook stories.
5. **Live surfaces:** the most important existing pages. Run the app or open the deployed site if available, and look at it.
6. **Brand assets:** fonts in `public/fonts`, logos, favicons, Open Graph images.

### 1.2 Build the inventory

Extract what the repo actually says and does into one inventory. Record the source file for every item.

```
Identity:      name, POV (if any), audience, product purpose
Color:         every color token, its role, both themes, where it is used
Type:          families, scale, weights, line heights, tracking
Space:         base unit, scale, how gaps are actually used
Shape:         radii, borders, elevation, material (blur, grain, shadow)
Motion:        durations, easings, what moves and why
Iconography:   library, stroke, sizes
Components:    primitives that exist, their states, what is missing
Composition:   recurring layouts, grid, density, page archetypes
Voice:         tone, copy rules, terminology
Accessibility: contrast, focus, touch targets, reduced motion
Agent rules:   any instructions already aimed at AI agents
```

### 1.3 Find generic patterns already shipped

Search the code for the detection signatures in the Generic Pattern Catalog (`intentional-craft.md`), such as `animate-ping` or `animate-pulse` dots inside `rounded-full` pills, `bg-clip-text text-transparent` gradient headlines, `blur-3xl` color blobs, and scroll-reveal on every section. List every occurrence with its file. These become removal findings in the upgrade plan.

### 1.4 Detect drift

List every place where the document and the code disagree (a token in the doc that the code never uses, a hard-coded color the doc never mentions, a font loaded but undocumented). Do not silently pick a winner. Default rule: **the document holds intent, the code holds the values actually shipped.** Ask the user to resolve conflicts that change how the product looks.

---

## Mode 2: Upgrade

### 2.1 Score the current language

Score each dimension from 0 to 3 and show the table before and after the upgrade.

| Dimension | 0 | 3 |
| --- | --- | --- |
| **Point of view** | None | Written For / Believe / Refuse that rules options out |
| **Specificity** | Adjectives ("clean, modern, bold") | Exact values and named decisions |
| **Testability** | Rules cannot be checked | Every rule can be answered yes or no |
| **Coverage** | Colors and fonts only | Tokens, components, states, motion, voice, accessibility, composition |
| **Code agreement** | Doc and code disagree widely | Doc matches shipped values; drift is logged |
| **Distinctiveness** | Could describe any product | Signature moves only this brand would make |
| **Creative guidance** | Says nothing about layout | Composition repertoire, banned defaults, experiment policy |
| **Agent enforceability** | Prose only | Numbered, imperative agent rules with checks |
| **Accessibility floor** | Absent | Contrast, focus, touch, motion, and language rules stated |

The two dimensions that most often score 0, and that cause generic AI interfaces, are **Distinctiveness** and **Creative guidance**. Spend the most effort there.

### 2.2 Upgrade rules

1. **Preserve the identity.** Never change brand colors, fonts, logo, name, or voice on your own. Sharpen and complete them. Anything that changes identity goes in a clearly marked `Proposed` block for the user to accept or reject.
2. **Turn adjectives into rules.** "Clean" becomes "at most two type weights per view and no more than one accent element per screen". "Bold" becomes "display type at 72px or larger with -0.03em tracking on the opening statement". If you cannot translate an adjective, ask what it means to them.
3. **Derive signature moves from evidence.** Look at the best existing screen and the brand's assets. Name 3 to 5 decisions that are already distinctive or could be, for example an unusual grid, a specific way of showing data, a material, a recurring interaction, a typographic habit. Each one must be concrete enough to apply to a new screen.
4. **Write banned defaults for this brand.** The Generic Pattern Catalog in `intentional-craft.md` is always banned and is included by reference; never re-allow an item without the owner's explicit approval and a written reason. Then add the patterns specific to this brand that would clash with its POV.
5. **Fill gaps with proposals, not inventions passed off as fact.** Missing dark mode, missing states, missing motion, missing voice: draft them in the brand's spirit and mark them `Proposed`.
6. **Fix accessibility without asking.** Contrast failures, missing focus styles, and touch targets under 44×44px are corrected, and the correction is noted.
7. **Keep it proportional.** A small site gets a short document. Do not pad. Every line must change what an agent would build.
8. **Log drift and decisions.** End the document with a changelog and open questions.

### 2.3 Output structure

Write the upgraded document with these sections, in this order. Skip a section only when it truly does not apply, and say why.

```markdown
# <Brand> Design Language

Version, last audited date, sources scanned.

## 1. Point of view
For / Believe / Refuse. One-sentence principle.

## 2. Signature moves
3 to 5 named, concrete decisions only this brand makes, each with where and how to apply it.

## 3. Banned defaults
Generic patterns this brand never uses, each with what to do instead.

## 4. Tokens
Color (semantic roles, both themes, verified contrast), type scale, spacing,
radius, elevation and material, motion. Tables plus a copy-paste CSS variable block
that matches the code.

## 5. Composition
Grid, density, asymmetry, page archetypes, how sections differ from each other,
what makes a page feel like this brand.

## 6. Components and states
Primitives, anatomy, and every state: default, hover, focus, active, disabled,
loading, empty, error, success.

## 7. Interaction and motion
What moves, why, durations, easings, reduced-motion behavior.

## 8. Voice and copy
Tone, terminology, button and error patterns, banned phrases.

## 9. Accessibility floor
Contrast, focus, touch targets, keyboard, motion, language.

## 10. Experiments and ceiling
How experiments are labelled, where they may live, the kill criteria format,
and the kinds of ambitious ideas this brand wants explored.

## 11. Agent rules
Numbered, imperative, testable rules. Must include: read this file before UI work,
use tokens only, apply at least one signature move per new surface, use no banned
defaults, animate every state change (enter and exit), show no browser or library
default anywhere, make every element responsive from 320px to 2560px, run the divergence protocol, run the Editor's Pass and the
inspection passes, report unverified items.

## 12. Changelog and open questions
What changed in this version, drift found, decisions waiting on the owner.
```

### 2.4 Adopting the upgraded language

A new or substantially upgraded design language is adopted in the interface through five gated stages: research the existing surfaces, build several running prototype options, run `ui-edge-cases.md` (bundled under `references/`) and a bug sweep on the chosen option, get explicit approval, then wire it in. Never apply a new language straight to production.

### 2.5 Where to write it

- **If a design document exists:** update it in place after the user approves the plan. Show a summary of changes (sections added, rules sharpened, proposals waiting). Never delete an existing rule without listing it in the changelog with the reason.
- **If none exists:** create `DESIGN.md` at the repo root unless the repo's conventions point elsewhere.
- **If the repo has agent rule files** (`CLAUDE.md`, `AGENTS.md`, and similar): propose a one-line pointer telling agents to read the design document before UI work. Do not rewrite those files without asking.

### 2.6 Upgrade report

Finish the upgrade with:

```
Score:        before and after for each dimension
Added:        new sections and rules
Sharpened:    vague rules that became testable, with before and after wording
Proposed:     identity changes waiting for approval
Drift:        doc and code conflicts and how each was resolved
Open:         questions for the owner
```

---

## Mode 3: Design With It

Use this every time a new surface is designed or substantially changed, under any design language.

### 3.1 Load

Read the design document's POV, signature moves, banned defaults, tokens, and agent rules. If any of these are missing, run a light Upgrade for the missing sections first and mark them `Proposed`.

### 3.2 Diverge

The first idea is the average of everything the model has seen. Do not build it as-is. Write three structurally different directions, a few lines each:

| Direction | Purpose | Must include |
| --- | --- | --- |
| **A, Dependable** | The clearest version of the expected pattern | Passes the swap test; uses the brand's tokens and voice |
| **B, Signature** | Built around one or more signature moves | Names the signature move and why it fits this content |
| **C, Ceiling** | Something too expensive to build before | Living, data-driven, or new interaction model; cost and risk stated |

For each direction state: layout, lead element, key interaction, signature move used, and how it recomposes on a 320px phone. Directions must differ in **composition or interaction**, not only color, imagery, or copy.

### 3.3 Converge

Choose with the POV. State in one or two sentences why the winner won and what was carried over from the others. Default to **B**, or **A with B's signature move**, when the surface is a primary task flow that must pass a plain-language, one-primary-action simplicity test. **C** ships only with the user's agreement, or on secondary and exploratory surfaces.

### 3.4 Creative minimums

Every new surface must meet all of these:

- Uses at least one signature move.
- Uses zero banned defaults and zero Generic Pattern Catalog items (no pulsing-dot pill badges, no announcement pills, no gradient headlines, no glow blobs, no scroll-reveal on every section).
- Fails the swap test (could not belong to another product).
- Has one named decision only this product would make.
- Has a labelled experiment, or a stated reason for having none.
- Varies composition from the neighbouring pages: a different structure, density, or lead element, while keeping the same language.
- Works at every width from 320px to 2560px, at 400% zoom and 200% text, in both orientations, and with touch only; every direction (A, B, and C) describes how it recomposes on a phone.

### 3.5 Build and edit

Build with tokens only. Before delivery, run `ui-edge-cases.md` with edge fixtures and fix every in-scope case. Animate every change and design every visible element; no browser default ships. Then apply `intentional-craft.md`: craft details, the full definition of done, the Editor's Pass with an Editor's Cut, and the exacting standard's inspection passes. Report unverified items honestly.

### 3.6 Feed the system

If the work produced a new pattern, token, or a repeated correction, propose adding it to the design document (a new signature move, a new banned default, a new agent rule). The design language should get sharper with every surface built on it.

---

## Guardrails

- **Never impose another brand's look.** Om's design system, or any other system bundled with this skill, is never applied to a different brand. Only the craft discipline and the accessibility floor transfer.
- **Creativity never breaks the basics.** Signature moves and experiments never reduce contrast, hide the primary action, remove keyboard access, ignore reduced motion, or make copy less literal.
- **Ask before identity changes.** Colors, fonts, logos, names, and voice change only with the owner's approval.
- **No invented facts.** Do not claim a token, metric, or rule exists in the repo unless you found it. Mark everything new as `Proposed`.

---

## Checklist

- [ ] Sources scanned in priority order and listed
- [ ] Inventory built with a source for every item
- [ ] Code searched for Generic Pattern Catalog signatures, occurrences listed
- [ ] Drift between doc and code listed and resolved or asked
- [ ] Score table shown before and after
- [ ] POV, signature moves, and banned defaults written
- [ ] Adjectives converted into testable rules
- [ ] Identity changes isolated in `Proposed` blocks
- [ ] Agent rules section written and numbered
- [ ] Three directions written before building any new surface
- [ ] Creative minimums met
- [ ] `ui-edge-cases.md` run with edge fixtures; edge case report delivered
- [ ] New or upgraded languages adopted through research, prototypes, edge cases, approval, then wiring in
- [ ] `intentional-craft.md` Editor's Pass completed
