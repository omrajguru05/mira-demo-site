---
name: ui-edge-cases
description: Systematic UI edge case and bug sweep for any interface or design language. Defines the edge case catalog (content, states, input, layout, motion, overlays, navigation, appearance, performance, accessibility, localization, time, and design-language-specific cases), how to test each, and the report format. Run before any design is approved and again after it is wired in.
---

# UI Edge Cases

A design is not approved because it looks right with good data on a fast laptop. It is approved after it has been pushed through the cases that real people, real data, and real devices produce. This reference is the list of those cases and the method for checking them.

It applies to every surface under every design language, and it is a required stage before approval in the adoption flow for new design languages (for example Raster, `raster-language.md`) and for any upgraded design language (`design-language-architect.md`).

---

## 1. When to Run It

| Moment | Scope |
| --- | --- |
| **Before approval** | Against the chosen prototype, with edge fixtures. Required before asking for approval. |
| **After wiring in** | Against the production integration, with real data. Required before delivery. |
| **After any significant change** | Against the affected surfaces. |

---

## 2. Edge Fixtures

Test with prepared data, not whatever happens to be on screen. Build a fixture set for each surface:

- **Empty:** zero items, missing optional fields, no image, no author.
- **One:** exactly one item (layouts built for grids often break here).
- **Many:** 2, 7, 100, and 10,000 items.
- **Long:** the longest realistic title, name, and label; a 60-character word with no spaces; a long URL; a three-line button label in the longest locale.
- **Short:** one-character titles, single-digit numbers.
- **Odd characters:** emoji, accented characters, CJK, Arabic or Hebrew (right to left), mixed direction, zero-width characters, HTML-like strings (`<b>` shown as text).
- **Numbers:** 0, negative, very large (1,234,567,890), decimals, currency, percentages over 100.
- **Dates and time:** time zones, the daylight saving change, midnight rollover, leap day, relative times ("just now") that must update. In Om's sites, follow the placeholder standards (`17`, `17 December 2022`, `26 May 2008`, `17:00`).
- **Media:** broken image URLs, slow-loading images, portrait, landscape, and extreme aspect ratios, transparent PNGs on both themes.

---

## 3. The Edge Case Catalog

### 3.1 Content

- Empty, one, many, and very many items render correctly; empty states explain why and offer the next action.
- Long strings wrap or truncate deliberately; truncated text is available in full on focus, hover, or in a sheet.
- Unbroken strings (URLs, hashes) never widen the page (`overflow-wrap: anywhere` where appropriate).
- Missing fields leave no gaps, stray separators, or dangling labels ("By " with no name).
- Pluralization is correct for 0, 1, and many.
- User-generated content is escaped and cannot break layout or inject markup.

### 3.2 States

- Loading: instant (under 300ms, no flash of loader), normal, slow, and stalled (over 10 seconds, with a way out).
- Errors: network failure, server error, validation, permission denied, not found, rate limited, timeout. Each says what failed, what was kept, and what to do next.
- Partial success (3 of 5 uploads failed).
- Offline and reconnect, including actions taken while offline.
- Stale data and refresh; optimistic updates that must roll back on failure.
- Session expiry mid-task without losing the person's work.
- First run, disabled, read-only, and permission-limited views.

### 3.3 Input

- Double click and rapid repeated clicks do not submit twice.
- Enter submits where expected; Escape closes; Tab order follows the visual order.
- Keyboard only: every action reachable, focus always visible, focus returns to the trigger after overlays close.
- Touch only: no hover-dependent action; long press and swipe do not fight the browser's back gesture.
- Paste of long or formatted text; autofill; input method composition (Japanese, Chinese, Korean) does not submit early.
- Drag cancelled midway, dropped outside a target, or interrupted by scroll.
- Mixed input (touch laptop): hover and touch both behave.

### 3.4 Layout and Viewport

- Every width from 320px to 2560px, checked continuously; no horizontal page scroll.
- 400% zoom and 200% text size reflow without loss.
- Landscape phones with short heights; split-screen and narrow desktop windows.
- On-screen keyboard open: focused fields and primary actions stay visible.
- Safe areas: notches, rounded corners, home indicators.
- Visible classic scrollbars (Windows) do not cause overflow or misalignment.
- Right-to-left mirroring where the product supports it.
- Print output is readable and does not include interactive chrome.

### 3.5 Motion

- Interrupting an animation (opening while closing, toggling rapidly) redirects smoothly with no jump or stuck state.
- Route change or unmount during an animation leaves no orphaned elements.
- Tab hidden mid-animation, then shown again.
- Reduced motion: every change still visible as a brief fade, nothing hidden that relied on motion.
- Slow motion review at 10% speed: origins, easing, overlaps, and exits are correct.
- Low frame rate devices: no layout thrashing; animations use transform and opacity.

### 3.6 Overlays

- Only one blocking overlay at a time; nested menus inside dialogs behave.
- Focus is trapped inside modal overlays and released on close.
- Background scroll is locked and restored to the same position.
- The back button or gesture closes a sheet or dialog instead of leaving the page, where expected.
- Overlays near the viewport edge flip or shift to stay fully visible.
- Long content scrolls inside the overlay, not behind it.

### 3.7 Navigation and State

- Back and forward restore scroll position and UI state.
- Refresh mid-flow keeps or recovers progress.
- Deep links into any state (an open tab, a filtered list, an open dialog) work.
- Invalid URL parameters fall back gracefully.
- Multiple tabs open on the same content stay consistent or explain conflicts.
- Unsaved changes are protected with a custom dialog for in-app navigation.

### 3.8 Appearance

- Light and dark, switched mid-session, and following a system change.
- Forced colors (Windows high contrast): every control and focus state still visible.
- Reduced transparency: translucent and grain surfaces become solid.
- Web fonts fail or load slowly: fallback fonts have matched metrics so layout does not jump.
- Color-blind safety: no meaning carried by color alone.
- High-density displays: no blurry lines or images; moving a window between monitors with different pixel ratios re-renders canvases.

### 3.9 Performance

- Slow network (3G) and 4x CPU throttling: the page is usable while loading.
- Large lists are virtualized or paginated.
- Long sessions do not leak memory (listeners removed, canvases released).
- Canvas and animated surfaces pause when offscreen or the tab is hidden.
- Cumulative layout shift is zero for designed content.

### 3.10 Accessibility

- Screen reader: meaningful names, roles, and states; changes announced through live regions where appropriate.
- Decorative elements hidden from assistive technology; real text present beside visual type.
- Contrast passes at the worst point of any background, including gradients and images.
- Targets at least 44×44px with adequate spacing.
- No timeouts without a way to extend; no content that flashes more than three times per second.

### 3.11 Localization

- Text expansion of 30% to 40% in buttons, labels, and navigation.
- Date, number, and currency formats per locale.
- Right-to-left layout where supported.

### 3.12 Design-Language Specific Cases

Add the cases that the active design language creates. For Raster (`raster-language.md`):

- **Fields:** contrast at the brightest point behind text; seeded fields with an empty or missing seed fall back to a defined default; no banding on low-quality displays.
- **Samplers:** dot pitch still resolves at 320px; canvas re-renders on resize, orientation change, and pixel ratio change; dot counts capped on low-power devices.
- **Geist Pixel type:** fonts fail to load (fallback is legible and does not reflow badly); long words at 320px; selection and copy return the real text.
- **Lines:** construction guides stay on the font metrics at every size and zoom level.
- **Frames:** rules at fractional widths render on whole pixels; nodes stay on intersections after reflow; gutter field on ultra-wide screens; cells with one item and with uneven content heights; frame persists correctly across route changes.
- **Data drivers:** the driver is empty (no commits, no posts, no audio), slow, or failing; the treatment shows a defined static state instead of breaking.
- **Ember:** only one accent element exists after content changes.

---

## 4. Bug Sweep

Alongside the catalog, sweep for defects:

- Console errors and warnings, including framework warnings and hydration mismatches.
- Layout shifts during load and interaction.
- Event listeners, timers, and observers left running after unmount.
- Race conditions from fast navigation or rapid repeated actions.
- Stale state after an error or retry.
- Network requests repeated unnecessarily or not cancelled on navigation.
- Lint, type, and build warnings (`npm run build` or the project's equivalent).

---

## 5. How to Test

- **Browser DevTools:** device mode for widths and touch; network and CPU throttling; the rendering panel to emulate `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-reduced-transparency`, and forced colors; the animations panel for slow motion; the accessibility tree.
- **Automated checks:** an accessibility scanner (for example axe) and a performance audit (for example Lighthouse) on each key surface.
- **Manual passes:** keyboard only, touch only, screen reader on one desktop and one mobile platform, real phone in landscape.
- **Fixtures:** the edge fixtures from section 2, switchable in the prototype or via query parameters.

---

## 6. Edge Case Report

Deliver this report before asking for approval, and again after wiring in.

```
Surface:     what was tested, and on which build or prototype
Fixtures:    which fixture sets were used
Coverage:    catalog sections run (3.1 to 3.12) and the bug sweep
```

| Case | Expected | Observed | Fix | Status |
| --- | --- | --- | --- | --- |
| 60-character unbroken title at 320px | Wraps inside the cell | Overflowed the frame | Added `overflow-wrap: anywhere` to titles | Fixed and verified |
| Mesh field behind caption, brightest point | 4.5:1 contrast | 3.1:1 | Added scrim from `bg-primary` | Fixed and verified |

**Rules:**

1. Every case found in scope is fixed before approval is requested. Severity only decides the order of work, not whether it gets fixed.
2. Anything not tested is listed as untested, not omitted.
3. No hedged wording ("should be fine", "probably works"). Each row is verified, fixed and verified, or listed as open with a reason.

---

## 7. Checklist

- [ ] Edge fixtures prepared for each surface
- [ ] Catalog sections 3.1 to 3.12 run, including the design-language cases
- [ ] Bug sweep complete, console clean, build clean
- [ ] Tested with DevTools emulation, keyboard only, touch only, and a screen reader
- [ ] Edge case report delivered, every in-scope case fixed and verified
