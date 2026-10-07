---
name: interface-design-judgment
description: Transferable design-engineering judgment for auditing interaction ergonomics, perceptual alignment, surface architecture, affordance clarity, state continuity, and interface polish.
---

# Interface Design Judgment

Use this skill when designing, reviewing, or polishing an interface.

The goal is not to enforce fixed visual rules. It is to identify subtle sources of friction, understand why they occur, and choose an appropriate correction for the interface, platform, and interaction model.

Treat numerical values and patterns in an existing design system as starting constraints rather than substitutes for perceptual judgment.

---

## 1. Separate Visual Size From Interactive Size

### Principle

An element's visible dimensions and its interactive boundary solve different problems.

A small icon may be visually appropriate while its visible bounds are far too small for reliable touch interaction.

### Judgment

* Do not automatically make the hit area equal to the visible element.
* Give touch controls sufficiently generous interactive boundaries according to platform ergonomic guidance, commonly around 44×44 CSS pixels.
* Preserve the intended optical size while expanding the invisible interactive area when necessary.
* Consider visual size, interaction size, and spacing independently.
* Avoid enlarging the visible control merely to solve an interaction-target problem.

### Feedback

Touch interfaces lack the mechanical acknowledgement of physical controls.

Interactive elements should normally provide immediate feedback on pointer-down or touch-down through an appropriate change such as:

* slight scale response,
* luminance or opacity change,
* surface response,
* state transition,
* or native platform feedback.

The feedback should confirm that input was received without becoming distracting.

### Audit

Test important controls using actual touch input. Cursor precision on desktop is not a reliable substitute for finger ergonomics.

---

## 2. Prefer Perceptual Consistency Over Numeric Consistency

### Principle

Equal CSS values do not guarantee equal perceived results.

Identical strokes, spacing, radii, opacity, font weights, or dimensions can appear different depending on:

* background luminance,
* contrast,
* transparency,
* blur,
* surrounding density,
* element scale,
* neighboring geometry,
* and display characteristics.

### Judgment

Use design tokens to maintain systemic consistency, but allow controlled optical compensation when identical values produce visibly inconsistent results.

The objective is not mathematical sameness. The objective is perceptual coherence.

### Example

An icon stroke that appears appropriately weighted on a bright, simple surface may appear weak on a dark, translucent, or visually complex surface.

Do not immediately introduce an arbitrary replacement value.

Instead:

1. Render the element on its actual surface.
2. Compare its perceived weight with surrounding elements.
3. Adjust incrementally.
4. Test across relevant displays and states.
5. Preserve the smallest deviation necessary to restore visual balance.

---

## 3. Treat Geometry as Part of Information Hierarchy

### Principle

Shape influences alignment, grouping, scanning, and hierarchy. Border radius is not merely decorative.

### Judgment

When evaluating badges, tags, metadata, buttons, or containers, examine how their geometry interacts with the larger layout.

In vertically scanned interfaces:

* trace the dominant alignment lines,
* observe where the eye repeatedly enters each item,
* check whether metadata reinforces or weakens those anchors,
* and evaluate the edges of the component rather than considering its text alone.

Highly rounded geometry can sometimes appear to drift away from a strong typographic edge because its outer contour provides a weaker linear anchor.

This does not mean pills are inherently unsuitable for feeds. Use them when their semantics and surrounding composition justify them.

Choose geometry according to the role the element plays in the composition rather than applying one radius universally.

---

## 4. Treat Metadata as Part of Surface Architecture

### Principle

Metadata does not always need to live inside the normal content flow.

Dates, categories, statuses, labels, and indexes can sometimes participate in the architecture of the containing surface itself.

### Diagnostic

When reviewing a card or container, ask:

* Is metadata consuming too much vertical space?
* Does it unnecessarily push primary content downward?
* Does the top of the card resemble a placeholder or loading skeleton?
* Is the metadata visually competing with the headline?
* Could its position communicate structure more effectively?

If so, consider alternative relationships between the metadata and the container.

### Architectural Treatments

Depending on context, metadata may function as:

* an index tab,
* a docked label,
* an edge marker,
* a divider,
* a notch,
* a header region,
* or a conventional inline element.

Do not default to any one treatment.

### Boundary Intersections

When an element crosses or sits directly on a container boundary, explicitly inspect:

* background masking,
* border continuity,
* stacking order,
* clipping,
* interior clearance,
* transparency,
* and subpixel rendering.

If a label is intended to visually interrupt a border, its surface treatment must cleanly mask or otherwise resolve that border rather than allowing accidental lines to collide with its contents.

---

## 5. Use Color Semantically and With Restraint

### Principle

Color should communicate something before it decorates something.

It can establish taxonomy, state, hierarchy, interaction, or identity, but should not become the only mechanism through which those distinctions are understandable.

### Judgment

When several related content types or states share the same interface:

* maintain a coherent base system,
* introduce chromatic differences deliberately,
* avoid allowing category colors to fragment the overall design,
* and use stronger color responses during interaction only when they contribute useful feedback.

Subtle color distinctions can often establish identity without requiring large saturated surfaces.

Always verify that semantic distinctions remain understandable without relying exclusively on color.

---

## 6. Practice Affordance Hygiene

### Principle

Do not explain an interaction twice.

Interfaces accumulate labels, arrows, helper text, and action prompts because each addition appears harmless in isolation. Repeated across a screen, they can become cognitive clutter.

### Diagnostic

For every repeated action label, ask:

> What information would the user lose if this element disappeared?

If the answer is "none," investigate whether the element is necessary.

### Judgment

A card may already communicate interactivity through a combination of:

* content hierarchy,
* familiar structure,
* pointer behavior,
* hover or focus response,
* surface treatment,
* motion,
* and surrounding context.

In such cases, an additional repeated action such as "Read article," "View project," or "Learn more" may provide little value.

However, minimalism is not automatically better.

Retain explicit actions when they improve:

* discoverability,
* accessibility,
* clarity,
* distinction between multiple possible actions,
* or comprehension for unfamiliar interaction patterns.

Remove redundancy, not useful information.

---

## 7. Preserve Spatial Continuity

### Principle

Navigation should preserve the user's mental map whenever losing that state would force unnecessary work.

A user exploring a deep list, filtered archive, tabbed interface, or long document has established spatial context. Returning from a detail view should not casually destroy it.

### State Classification

Before deciding where state belongs, determine what kind of state it is.

#### Shareable State

Use URL-addressable state when another person opening the same URL should reasonably see the same meaningful view.

Examples may include:

* search queries,
* filters,
* sorting,
* pagination,
* selected resources,
* or explicitly addressable views.

#### Navigational State

Use browser history or equivalent navigation state when the information primarily exists to restore where the current user came from.

Examples may include:

* transient pagination position,
* temporary UI selection,
* navigation origin,
* or restoration metadata.

#### Session State

Use session-scoped storage when state should survive navigation or temporary reloads but should not become part of the canonical address.

### Judgment

Do not remove useful state from URLs merely to make them visually cleaner.

Likewise, do not expose every temporary interaction state in the address bar simply because the router makes it convenient.

Choose URL state, history state, session state, or application state according to the meaning and expected lifetime of the information.

### Restoration

When appropriate, restore:

* pagination,
* scroll position,
* selected tabs,
* filters,
* expanded regions,
* or other meaningful exploration context.

Distinguish returning to a previous state from intentionally navigating to the section afresh. Fresh navigation may reasonably reset transient state.

---

## 8. Design Feed and Showcase Contexts for Their Actual Jobs

### Principle

The same content can require different presentation priorities depending on context.

Do not assume that a card designed for one environment should be reproduced unchanged everywhere else.

### Feed Contexts

Archives, reading lists, search results, and directories usually prioritize:

* scanning speed,
* information density,
* predictable alignment,
* restrained decoration,
* and rapid comparison between items.

### Showcase Contexts

Homepages, featured collections, editorial highlights, and discovery surfaces may prioritize:

* presence,
* identity,
* differentiation,
* visual rhythm,
* richer spatial composition,
* and exploratory interaction.

### Judgment

These contexts may use separate components, shared primitives with variants, or the same underlying data rendered through different compositions.

The implementation choice is secondary.

The important rule is that the presentation should respond to the user's task rather than forcing every appearance of the same content into identical geometry.

---

## 9. Keep Interactive Architecture Deliberate

### Principle

Interactivity should be introduced where interaction actually occurs rather than spreading browser-dependent logic throughout otherwise static interface architecture.

### Judgment

When working in frameworks with server/client boundaries:

* keep static layout and content rendering server-side where appropriate,
* isolate browser-dependent behavior into focused interactive components,
* avoid converting large component trees to client execution for one small interaction,
* and keep state ownership close to the behavior that requires it.

Treat rendering architecture as part of interface performance.

A technically functioning interaction that unnecessarily increases client work can still degrade perceived quality through slower loading, hydration cost, or responsiveness.

---

## 10. Keep Render State Deterministic

### Principle

Rendered UI should derive from explicit, predictable state rather than opportunistically reading mutable external values during render.

This is particularly important for media, animation, scroll-driven interfaces, and other high-frequency systems.

### Judgment

Prefer event-driven synchronization for mutable browser systems.

For media interfaces, derive UI state from relevant events such as:

* metadata loading,
* playback updates,
* play/pause state,
* seeking,
* completion,
* and errors.

Avoid repeatedly reading mutable DOM or media properties during rendering when event-driven state can provide a deterministic representation.

For high-frequency interactions:

* minimize unnecessary state updates,
* avoid forced layout work,
* avoid redundant commands,
* and keep expensive work away from critical interaction paths.

---

## 11. Validate Interaction Interactively

### Principle

Evaluate an interface in the medium in which the interaction actually occurs.

Static screenshots cannot reliably validate:

* touch ergonomics,
* motion,
* hover behavior,
* navigation continuity,
* responsive transitions,
* media synchronization,
* or perceived responsiveness.

### Judgment

Test the property you are designing through the interaction that exposes it.

* Test touch through actual touch input.
* Test hover with pointer input.
* Test keyboard interaction using the keyboard.
* Test motion while interrupting and reversing it.
* Test navigation through realistic forward/back flows.
* Test media during actual playback and seeking.
* Test responsive layouts at intermediate widths, not only predefined breakpoints.
* Test optical weight on the surfaces where the element will actually appear.

### Isolate Variables

When comparing subtle alternatives, change one meaningful variable at a time.

Use tools such as:

* side-by-side comparisons,
* interactive toggles,
* alignment guides,
* overlays,
* temporary debug boundaries,
* and focused prototypes.

These make subjective-looking differences easier to observe and reason about.

Do not rely on a polished screenshot to prove an interaction decision.

---

## 12. Use Motion to Explain, Not Decorate

### Principle

Motion should communicate state change, causality, hierarchy, continuity, or feedback.

In Om's system every state change is animated (`design-system.md`, "Everything animates"). This section decides how motion should behave, not whether a change animates. The question below is for decorative motion that is not tied to a state change.

Animation that contributes none of these should be questioned.

### Judgment

Useful motion can:

* show where an element came from,
* explain where it went,
* connect two related states,
* acknowledge user input,
* preserve spatial continuity,
* or make structural change easier to understand.

Avoid animation whose primary effect is delaying access to content or making routine interactions feel theatrical.

Prefer transitions that remain responsive when interrupted. User input should take precedence over completing an animation sequence.

A useful test is:

> If this animation disappeared, would the interaction become harder to understand or feel less responsive?

If not, consider simplifying or removing it.

---

# Interface Audit Procedure

When auditing an interface, do not begin by changing values randomly.

Move through the interface systematically.

### 1. Interaction Pass

Inspect every interactive element.

Check:

* hit areas,
* touch ergonomics,
* focus behavior,
* pointer feedback,
* keyboard accessibility,
* and immediate acknowledgement of input.

### 2. Optical Pass

Ignore implementation values temporarily and judge the rendered result.

Check:

* perceived stroke weight,
* contrast,
* alignment,
* radius consistency,
* icon balance,
* visual density,
* and hierarchy.

Look for perceptual inconsistency even when the underlying CSS values are identical.

### 3. Geometry Pass

Trace the major alignment lines through the interface.

Check whether:

* metadata reinforces those lines,
* shapes create unintended drift,
* containers establish clear hierarchy,
* and repeated elements remain geometrically coherent.

### 4. Noise Pass

Temporarily imagine removing:

* repeated CTAs,
* arrows,
* helper labels,
* borders,
* metadata,
* decorative icons,
* and redundant status indicators.

Restore anything necessary for comprehension or accessibility. Question everything else.

### 5. Navigation Pass

Explore the interface like a real user.

Move several levels deep, change state, open content, navigate backward, reload, and intentionally return through top-level navigation.

Verify whether the resulting state matches reasonable user intent.

### 6. Responsive Pass

Do not test only named breakpoints.

Move continuously between narrow and wide layouts and watch for:

* awkward intermediate states,
* cramped targets,
* premature wrapping,
* alignment drift,
* overflow,
* and hierarchy changes.

### 7. Interaction Stress Pass

Repeat interactions quickly.

Interrupt animations. Navigate backward before transitions finish. Seek through media. Click controls repeatedly. Switch state rapidly.

A polished interface should remain understandable and stable outside the ideal demonstration path.

---

# Final Design Judgment

When something feels subtly wrong, do not immediately reach for another decorative element.

First ask:

1. Is this an ergonomic problem?
2. Is this an optical illusion or perceptual imbalance?
3. Is the geometry weakening an alignment anchor?
4. Is unnecessary information competing for attention?
5. Has navigation lost meaningful user context?
6. Is the presentation mismatched to the user's task?
7. Is implementation architecture harming perceived performance?
8. Would interactive testing reveal something the static design cannot?

Fix the underlying cause before adding additional UI.

The objective is not maximum minimalism, maximum consistency, or maximum decoration.

The objective is an interface whose ergonomics, geometry, hierarchy, state, motion, and implementation reinforce one another so naturally that the user spends their attention on the content and task rather than the interface itself.
