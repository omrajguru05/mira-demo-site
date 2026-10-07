---
name: hig-compliance-auditor
description: Universal Apple Human Interface Guidelines (HIG) compliance, brutal simplicity standards (The Grandma Test), and accessibility auditing across Vision, Hearing, Mobility, Speech, Cognitive, and Motion. Apply whenever designing, building, or auditing user interfaces, components, microcopy, or systems architecture.
---

# Apple Human Interface Guidelines & Universal Accessibility

A universal design standard and auditing framework grounded in the Apple Human Interface Guidelines (HIG), radical simplicity, and comprehensive accessibility across physical and cognitive domains.

> "The interface must be brutally simple. There should not be technical language or clutter. The UI should be so effortless that even a grandmother can use it without hesitation. Very few buttons, no clutter, no complex UI. The app should hide complex things behind the scenes: even during system design, the underlying architecture must absorb complexity so the human experience is obvious, calm, and direct."

---

## 1. The Grandma Standard (Brutal Simplicity)

Every interface must pass the **Grandma Test**: an everyday person with zero technical background should be able to complete their task without confusion, anxiety, or instruction.

### Core Rules

1. **Zero Technical Jargon:**
   - Never expose engineering concepts, internal system states, pipeline stages, database terminology, or protocol errors in user-facing surfaces.
   - Speak in clear, human, direct terms: describe what something is, what the person can do with it, and what happens next.
2. **Minimal Buttons & Zero Visual Noise:**
   - Every view must have **one obvious primary action**, not competing actuators.
   - Eliminate unnecessary badges, auxiliary toggles, decorative containers, and nested menus.
   - If a screen feels busy, subtract elements until only the essentials remain. Whitespace is a structural material, not empty space to be filled.
3. **Hide Complexity Behind the Scenes:**
   - Multi-step processing, file conversions, asynchronous background polling, and data normalization must execute quietly in the background.
   - The user sees only a calm status description (e.g., *"Reading document…"*, *"Preparing summary…"*) and the final result.
   - System design and data models must absorb computational complexity so the user never has to manage it.
4. **Forgiving by Default:**
   - Destructive actions must provide immediate, friction-free undo or simple, clear confirmations.
   - Forms and inputs must accept natural variations (e.g., flexible date and phone formats) without throwing rigid validation errors.

---

## 2. Apple HIG: Eight Core Design Principles

Every screen, flow, and component must embody these eight foundational principles:

### 1. Purpose: Design with Intention
Identify what matters most to people and focus relentlessly on making those core tasks effortless. Resist feature bloat and secondary distractions.

### 2. Agency: Let People Act Their Own Way
Give people freedom, keep them continuously informed of system state, and make recovery from mistakes easy, painless, and obvious.

### 3. Responsibility: Act in People's Best Interest
Prioritize user safety, data privacy, and complete transparency about what the product does. Disclose limitations where they materially matter.

### 4. Familiarity: Build on What People Know
Use established physical and digital patterns consistently. A search field looks like a search field; a back button takes you back; reading flows naturally. Never invent unprompted, proprietary interaction paradigms for standard tasks.

### 5. Flexibility: Adapt to Diverse Contexts & Needs
Support diverse devices, screen sizes, input methods (touch, pointer, keyboard, assistive hardware), orientations, and human perspectives.

### 6. Simplicity: Be Clear and Direct
Remove the unnecessary; every element must earn its place. If an element does not help someone understand or act, delete it.

### 7. Craft: Care About Every Detail
Show dedication through thoughtful execution, smooth 60fps/120fps interactions, exact alignments, consistent typographic hierarchy, and robust error resilience.

### 8. Delight: Make It Human
Design for the emotions you want to inspire: calm, trust, reassurance, and satisfaction. Delight comes from quiet competence and clarity, never from intrusive gimmicks or theatrical animations.

---

## 3. Accessibility Foundations

An accessible interface must be:

- **Intuitive:** Uses familiar, predictable, and consistent interactions that make tasks completely straightforward.
- **Perceivable:** Never relies on a single sensory method to convey information. Content must be accessible through sight, hearing, and touch.
- **Adaptable:** Flexibly adapts to how people want to use their device, honoring Dynamic Type, system font scaling, reduced motion, and assistive personalization.

---

## 4. The Six Disability Categories & Implementation Standards

### 1. Vision
- **Fluid Type Scaling:** Support Dynamic Type and user font-scaling without text clipping, truncation, or broken layout containers.
- **Contrast Ratios:** Meet WCAG AAA where feasible (minimum 4.5:1 for body copy; 3:1 for large display type; 7:1 for fine metadata).
- **Dual-Channel Signaling (Never Color Alone):** Color must never be the sole conveyor of state or meaning. Always pair color cues with text labels, distinct icons, or geometric shapes (e.g., pair an alert color with an exclamation mark icon and clear text).
- **Screen Reader Semantics:** Use semantic HTML elements (`header`, `main`, `footer`, `nav`, `article`, `figure`, `figcaption`). Provide concise, descriptive `alt` text for images and visually-hidden context (`.sr-only`) for screen readers when visual surfaces are intentionally minimal.

### 2. Hearing
- **Text Alternatives:** Provide comprehensive text-based alternatives for all audio and video media (captions, subtitles, transcripts, written summaries).
- **Multi-Sensory Cues:** Pair all auditory alerts or audio cues with visual indicators (e.g., status changes, visual flashes, banners).

### 3. Mobility
- **44×44px Minimum Touch Targets:** Every interactive element (buttons, links, pickers, toggles, controls) must have an interactive hit target of at least 44×44 CSS points/pixels, regardless of its visual font size or icon size.
- **Adequate Spacing:** Separate adjacent interactive controls by at least 8px to prevent accidental taps.
- **Full Keyboard Navigation:** All interactive elements must be focusable via `Tab` and triggerable via `Enter`/`Space`.
- **Prominent Focus Indicators:** Focus rings must be high-contrast, prominent, and unambiguous:
  ```css
  :focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }
  ```
- **Simple Gestures:** Never require multi-finger gestures, long drags, or precision speed for core navigation. Always provide standard single-tap/click alternatives.

### 4. Speech
- Ensure 100% of functionality is operable via keyboard and pointer inputs alone.
- Guarantee full compatibility with assistive technologies such as Switch Control, Full Keyboard Access, and Voice Control.

### 5. Cognitive
- **Streamlined Single-Path Tasks:** Present one primary decision at a time. Group related items logically; avoid fragmented or branching choices.
- **No Time-Boxes:** Never impose artificial countdowns, expiring timers, or timed interaction traps on normal reading or task completion.
- **Avoid Excessive Animation:** Keep UI elements still. Users should never have to chase moving buttons or read jumping text.
- **Full Media Playback Control:** Never autoplay media with sound. Allow users to pause, scrub, and stop any playback at will.
- **Predictable Error Recovery:** Explain what happened in plain language and provide a direct path forward.

### 6. Motion
- **Respect Reduced-Motion Preferences:** Check `prefers-reduced-motion: reduce`. When active, immediately halt decorative animation loops, parallax, and continuous motion, rendering a still, calm frame:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
- **Comfortable Boundaries:** Keep elements within comfortable view boundaries. Avoid abrupt camera shifts, disorientation, or aggressive parallax.

---

## 5. Architectural & System Design Compliance

The requirement for brutal simplicity applies directly to **system design and backend data models**:

1. **Absorb Complexity in Architecture:**
   - If an operation requires multiple sequential API calls, background file polling, or format conversions, encapsulate that inside a single backend orchestration service.
   - The user-facing application should observe a simple, deterministic state machine: `idle` → `loading` → `ready` | `error`.
2. **Deterministic State Modeling:**
   - Eliminate race conditions, partial states, and visual flicker. State transitions must be linear and predictable.
3. **Resilient Data Contracts:**
   - When upstream services or CMS platforms return empty data or missing optional fields, fail gracefully with clean fallback UI rather than broken layouts or technical stack traces.

---

## 6. Pre-Flight HIG & Accessibility Audit Checklist

Before considering any UI or component complete, verify:

- [ ] **The Grandma Test:** Is the screen so obvious that an everyday person or elderly relative could use it without asking questions?
- [ ] **Jargon Check:** Are all technical, engineering, and internal database terms removed from the UI?
- [ ] **Action Hierarchy:** Is there exactly one obvious primary action on this screen?
- [ ] **Touch Target Size:** Does every clickable or tappable control have an interactive target of at least 44×44px?
- [ ] **Keyboard Navigability:** Can the entire flow be operated using `Tab`, `Shift+Tab`, and `Enter`/`Space` with clear visual focus rings?
- [ ] **Color Independence:** Is information conveyed by text, shape, or position in addition to color?
- [ ] **Contrast Verification:** Does text meet or exceed WCAG AAA/AA contrast standards against its background?
- [ ] **Motion Safety:** Does the view respect `prefers-reduced-motion` with static, dormant fallbacks?
- [ ] **Error Clarity:** Do error states explain what happened in human terms and offer a clear next step?
- [ ] **Screen Reader Support:** Are semantic HTML landmarks used, with descriptive labels on all unlabeled buttons or icon controls?
