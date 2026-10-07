---
name: codebase-naming
description: Semantic design and engineering naming standards for codebases, UI components, CMS models, architecture, state, variables, and files across Om's projects.
---

# Professional Codebase Naming

Use this skill whenever creating, reviewing, or restructuring names in a software project.

The goal is not to make names sound impressive. The goal is to make them precise, durable, unsurprising, and professionally legible.

A good name should help an engineer understand what something represents, what responsibility it owns, and how it relates to the rest of the product without needing to inspect its implementation first.

The governing principle is:

**Name software according to what it represents and is responsible for, using established product and engineering vocabulary, while choosing names durable enough to survive changes in presentation and implementation.**

Professional naming is semantic design.

---

## 1. Scope

This skill applies across the entire codebase.

It is not limited to React components, UI elements, or design-system primitives.

Use these principles for:
* UI components
* design-system primitives
* page sections
* layouts
* views
* dialogs
* menus
* overlays
* navigation
* forms
* form controls
* CMS schemas
* CMS fields
* Sanity objects
* Sanity blocks
* Portable Text annotations
* renderers
* previews
* content models
* modules
* functions
* methods
* hooks
* classes
* types
* interfaces
* enums
* variables
* state
* stores
* actions
* reducers
* events
* callbacks
* utilities
* adapters
* providers
* repositories
* registries
* controllers
* coordinators
* serializers
* normalizers
* parsers
* validators
* formatters
* loaders
* routes
* route groups
* endpoints
* server actions
* middleware
* configuration
* feature flags
* permissions
* constants
* files
* directories
* tests
* fixtures
* mocks
* stories
* analytics events
* database entities
* jobs
* queues
* workers
* internal tools
* architectural abstractions

The same semantic discipline should apply from a tiny boolean variable to a major architectural module.

---

## 2. First Principle: Name the Concept, Not the Current Appearance

Before naming anything, identify what the thing is:
* Do not begin from how it looks.
* Do not begin from the copy currently shown to the user.
* Do not begin from the framework primitive used to implement it.
* Do not begin from the first implementation detail visible in the source.

Ask:
1. What concept does this represent?
2. What responsibility does it own?
3. What does a caller need to know about it?
4. What remains true if its visual treatment changes?
5. What remains true if its underlying implementation changes?
6. Is there already an established term for this concept in the product or codebase?

Prefer the answer that survives redesigns.

**Example:**
`AlsoReadDropdown` describes current user-facing copy and a current UI mechanism. If the actual purpose is choosing a related article reference in a CMS, prefer a name such as:
* `RelatedContentReference`
* `ContentReferencePicker`
* `RelatedContentField`

depending on what is being named. The UI may continue to display "Also Read"; the engineering name does not need to repeat that copy.

---

## 3. Respect the Existing Product Before Introducing New Vocabulary

A professional name is not automatically a new name.

When working in an existing product, preserve established product language whenever it is coherent and intentional.

Before proposing terminology:
* inspect existing feature names;
* inspect neighboring components;
* inspect domain models;
* inspect routes;
* inspect CMS schema names;
* inspect design-system terminology;
* inspect analytics vocabulary;
* inspect documentation;
* inspect tests;
* inspect the `references/` folder when present.

The product's established language is part of the interface.
* If the product consistently calls something a `Story`, do not casually rename it to `Article`.
* If the product consistently uses `Publication`, do not introduce `Post` in one subsystem.
* If the design system uses `Sheet`, do not introduce `Drawer` for the same primitive merely because another library uses that word.
* If the codebase uses `Account`, do not introduce `Profile` unless the concepts are genuinely different.

Consistency with the product's own vocabulary usually matters more than importing terminology from another company.

---

## 4. The references/ Folder Is a Naming Source

If the repository contains a `references/` directory, inspect it before inventing terminology.

Treat relevant material inside `references/` as contextual guidance for naming, product language, architecture, design patterns, or domain vocabulary.

Examples may include:
```
references/
  product-language.md
  design-system.md
  architecture.md
  cms-models.md
  apple-patterns.md
  terminology.md
  screenshots/
```

Do not blindly copy names from references. Use them to understand:
* the intended level of professionalism;
* established product terminology;
* preferred conceptual vocabulary;
* naming tone;
* domain distinctions;
* design-system language;
* architectural patterns;
* historical naming decisions.

When references conflict with active production code, inspect both and determine which is current. Do not assume an old reference document overrides the live product. When uncertainty remains, report it rather than silently imposing a naming system.

---

## 5. Naming Priority Order

When choosing a name, apply this priority order:

### 5.1 Product meaning
What does the user or product domain understand this concept to be?
* Examples: `Article`, `Publication`, `Workspace`, `Account`, `Collection`, `Project`, `Revision`, `Membership`, `Subscription`

### 5.2 Responsibility
What specific responsibility does this abstraction own?
* Examples: `ArticlePreview`, `PublicationSelector`, `WorkspaceSwitcher`, `AccountMenu`, `CollectionNavigator`, `RevisionHistory`, `MembershipEditor`, `SubscriptionStatus`

### 5.3 Established technical vocabulary
If a standard software or interface term precisely matches the behavior, use it.
* Examples: `Dialog`, `Popover`, `Tooltip`, `Breadcrumbs`, `Disclosure`, `Toolbar`, `Picker`, `Selector`, `Repository`, `Adapter`, `Registry`, `Provider`, `Serializer`, `Validator`, `Middleware`

### 5.4 Existing codebase convention
Prefer a locally established naming convention when it remains clear and technically sound.

### 5.5 Implementation detail
Implementation details should influence the name only when the implementation itself is the abstraction. This is the lowest priority.

---

## 6. Semantic Stability

A strong name should remain correct when reasonable implementation details change.

Ask: *If we redesigned this tomorrow, would the name still describe it?*

* **Weak:** `BlueButton`, `ThreeDotMenu`, `LeftPopup`, `AlsoReadDropdown`, `GrayLoader`, `MobileNavDrawerComponent`
* **Stronger:** `PrimaryAction`, `OverflowMenu`, `InspectorPanel`, `RelatedContentPicker`, `ContentSkeleton`, `NavigationPanel`

Do not overcorrect:
* If something genuinely is a `Dialog`, calling it `Dialog` is correct.
* If the distinction between `Drawer` and `Sheet` is meaningful in the project's design system, preserve that distinction.

The rule is not "avoid visual names"; the rule is "avoid accidental implementation names."

---

## 7. Prefer Established Vocabulary Over Invented Vocabulary

Professional codebases generally reuse recognized concepts.

**Prefer:**
* `Dialog`, `Popover`, `Tooltip`, `Disclosure`, `Menu`, `Toolbar`, `Sidebar`, `Navigation`, `Breadcrumbs`
* `Picker`, `Selector`, `Field`, `Trigger`, `Action`, `Preview`, `Summary`, `Detail`, `Inspector`, `Panel`, `Sheet`, `Status`, `Indicator`
* `Registry`, `Provider`, `Adapter`, `Repository`, `Controller`, `Serializer`, `Normalizer`, `Validator`, `Parser`, `Formatter`
* `Configuration`, `Preference`, `Metadata`, `Collection`, `Library`, `Workspace`, `Navigator`

**Over improvised names such as:**
* `PopupThing`, `HoverText`, `ArrowSection`, `OptionsBox`, `ChooseThing`, `MagicPanel`, `FancyCard`, `ContentStuff`, `DataManager`, `UtilityHelper`

Use established vocabulary only when it is accurate:
* Do not call something a `Repository` merely because it fetches data.
* Do not call something a `Controller` simply because it contains logic.
* Do not call something a `Provider` unless it actually provides context, dependencies, configuration, or another clearly defined resource.

Professional naming requires semantic correctness, not prestigious nouns.

---

## 8. Avoid Faux-Enterprise Naming

Longer is not more professional.

**Avoid:**
* `GlobalRelatedContentSelectionManagementInterface`
* `ArticleDataHandlingManager`
* `UserPreferenceConfigurationControllerComponent`

**Prefer the smallest name that preserves the concept:**
* `ContentReferencePicker`
* `ArticleRepository`
* `PreferenceController`

Concise professional vocabulary is preferable to bureaucratic vocabulary.

---

## 9. Common Warning Words

The following words are not forbidden, but they should trigger a second look:
`Thing`, `Stuff`, `Box`, `Fancy`, `New`, `Old`, `Custom`, `Misc`, `Helper`, `Utils`, `Manager`, `Wrapper`, `Container`, `Component`, `Data`, `Object`, `Item`, `Popup`, `Dropdown`, `Button`, `Section`, `Handler`, `Processor`.

Ask whether a more specific concept exists. For example, `ArticleData` may actually be `ArticleMetadata`, `ArticleRecord`, `ArticleSummary`, `ArticleDocument`, or `ArticlePayload`, depending on meaning.

`Manager` is particularly dangerous because it often conceals multiple responsibilities. Before accepting `Manager`, determine what it actually does:
* `SessionManager` might really be `SessionStore`, `SessionController`, `SessionRegistry`, or `SessionRepository`.

---

## 10. Name by Layer

The same domain concept may correctly have several different names depending on the layer.

Consider related reading in a publishing product:
* **Domain concept:** `RelatedContent`
* **CMS model:** `RelatedContentReference`
* **CMS editor control:** `ContentReferencePicker`
* **Frontend renderer:** `RelatedContentSection`
* **Small visual representation:** `ArticlePreview`
* **Data-loading abstraction:** `RelatedContentRepository`

These are not inconsistent names. They describe the same domain concept at different responsibilities. Do not force every layer to use the exact same suffix.

---

## 11. UI Component Naming

Name UI components by semantic role.

**Prefer:**
* `ArticlePreview`, `SearchField`, `SearchPanel`, `AccountMenu`, `PrimaryNavigation`, `FooterNavigation`
* `ConfirmationDialog`, `InspectorPanel`, `Disclosure`, `StatusBanner`, `ProgressIndicator`, `FileDropzone`
* `MediaPicker`, `FormattingToolbar`, `PresenceIndicator`, `PublicationStatus`

Avoid automatically adding `Component`. Prefer `ArticlePreview` over `ArticlePreviewComponent` unless the framework or project convention explicitly requires the suffix.

**Good distinctions:**
* `AccountMenu`, `AccountMenuTrigger`, `AccountMenuItem`
* `SearchField`, `SearchResults`, `SearchResult`
* `ArticlePreview`, `ArticleDetail`, `ArticleMetadata`

Do not use one vague word such as `Card` for every rectangular piece of interface.

---

## 12. Design-System Naming

Design-system names should be generic enough for reuse but precise enough to establish behavior.

Good primitives may include:
`Button`, `IconButton`, `Dialog`, `Popover`, `Tooltip`, `Menu`, `MenuItem`, `Tabs`, `Tab`, `Disclosure`, `Accordion`, `Sheet`, `Drawer`, `Toast`, `Badge`, `Avatar`, `Separator`, `ScrollArea`, `Progress`, `Skeleton`, `Field`, `Label`, `Switch`, `Checkbox`, `RadioGroup`, `SegmentedControl`, `DatePicker`, `CommandPalette`.

Do not encode one product use case into a reusable primitive:
* **Weak:** `DeleteConfirmationPopup` as a design-system primitive.
* **Better primitive:** `ConfirmationDialog`
* **Product-specific composition:** `DeleteArticleDialog`

---

## 13. CMS and Sanity Naming

For Sanity and other content systems, separate:
* schema identity;
* editor label;
* field name;
* domain concept;
* custom input component;
* preview component;
* frontend renderer.

These do not always need identical names.

**Example:**
```typescript
defineField({
  name: 'relatedContent',
  title: 'Also Read',
  type: 'reference'
})
```
Here:
* `relatedContent` is a stable schema concept.
* `Also Read` is editorial copy.
* A custom editor control may be `ContentReferencePicker`.
* A renderer may be `RelatedContentSection`.

Do not name the schema `alsoReadDropdown` merely because the Studio UI currently displays a dropdown labeled "Also Read."

**Useful CMS vocabulary:**
`Document`, `Object`, `Field`, `Reference`, `Block`, `Annotation`, `Input`, `Preview`, `PortableText`, `Renderer`, `Decorator`, `Asset`, `Media`, `Metadata`, `Slug`, `Taxonomy`, `Category`, `Author`, `Publication`, `Revision`.

---

## 14. Functions and Methods

Functions should normally describe an action or transformation. Prefer explicit verbs.

**Examples:**
`loadArticle`, `resolveAuthor`, `normalizeArticle`, `serializeDocument`, `validateSlug`, `formatPublicationDate`, `createWorkspace`, `archiveProject`, `publishRevision`.

**Avoid vague verbs:**
`handleData`, `processThing`, `doStuff`, `manageArticle`, `runLogic`.

A function name should not exaggerate what it does. If it only formats a date, do not call it `processPublicationMetadata`; prefer `formatPublicationDate`.

---

## 15. Boolean Naming

Boolean names should read as propositions.

**Prefer:**
`isOpen`, `isSelected`, `isPublished`, `hasAccess`, `hasUnsavedChanges`, `canEdit`, `canPublish`, `shouldRefresh`, `wasRestored`.

**Avoid:**
`open`, `selectedFlag`, `access`, `publishBool`, `state`.

Boolean names should make conditional code read naturally:
```typescript
if (canPublish) {}
if (hasUnsavedChanges) {}
```

---

## 16. Event and Callback Naming

Distinguish events from handlers:
* **Event:** `articleOpened`, `selectionChanged`, `publicationRequested`, `uploadCompleted`
* **Handler:** `handleArticleOpened`, `handleSelectionChange`, `handlePublishRequest`, `handleUploadComplete`
* **Callback prop:** `onArticleOpen`, `onSelectionChange`, `onPublish`, `onUploadComplete`

Do not encode the current control unnecessarily:
* **Weak:** `onDropdownChange`
* **Better, when semantic event is selection:** `onSelectionChange`

---

## 17. Hooks

Hooks should communicate the capability or state they provide.

**Prefer:**
`useArticle`, `useCurrentUser`, `useViewport`, `useKeyboardShortcuts`, `usePublicationStatus`, `useMediaQuery`, `useRelatedContent`.

**Avoid:**
`useArticleStuff`, `useWindowThings`, `useHelper`, `useDataManager`.

Do not add `Hook` to the name.

---

## 18. Types and Interfaces

Types should describe the modeled concept.

**Prefer:**
`Article`, `ArticleSummary`, `ArticleMetadata`, `PublicationStatus`, `WorkspaceMembership`, `SearchResult`, `MediaAsset`.

**Avoid meaningless suffixes unless convention requires them:**
`ArticleType`, `ArticleInterface`, `ArticleObject`, `ArticleData`.

When distinctions matter, encode the distinction:
`ArticleRecord`, `ArticlePayload`, `ArticleResponse`, `ArticleInput`, `ArticleDraft`, `ArticleSnapshot`. Do not use these suffixes interchangeably.

---

## 19. Variables

Variables should communicate their role in the current scope.

**Prefer:**
`selectedArticle`, `currentWorkspace`, `publicationDate`, `searchResults`, `activeFilter`, `pendingUploads`.

**Avoid:**
`data`, `item`, `obj`, `temp`, `value`, `result2`, `clickedPost`.

Short names are fine in very small and conventional scopes:
`i`, `x`, `y`, `id`, `url`. Do not mechanically lengthen every local variable.

---

## 20. Collections

Pluralize collections naturally:
`articles`, `members`, `searchResults`, `pendingUploads`.

For maps and registries, encode the structure when useful:
`articlesById`, `routesBySlug`, `componentRegistry`, `featureRegistry`.

Avoid misleading plurals for scalar values.

---

## 21. Files and Directories

File and directory names should reflect the concept they contain:
`article-preview.tsx`, `content-reference-picker.tsx`, `publication-status.ts`, `article-repository.ts`, `media/`, `search/`, `navigation/`.

Respect the repository's casing convention. Do not introduce PascalCase filenames into a repository using kebab-case, or vice versa, without a deliberate migration.

Avoid folders such as `misc/`, `stuff/`, `helpers/`, `new-components/`, `random/`. A directory name should communicate a coherent domain or architectural responsibility.

---

## 22. Routes

Routes are product language. Prefer durable concepts:
`/settings`, `/account`, `/projects`, `/publications`, `/articles/[slug]`.

Avoid exposing temporary implementation vocabulary unless intentional. Do not rename public routes casually during a naming cleanup. Route changes can affect bookmarks, search indexing, analytics, external links, email links, documentation, and integrations. Treat public URL changes as product migrations, not ordinary code refactors.

---

## 23. Repositories, Adapters, Providers, Registries, and Architecture Terms

Use architecture terms precisely:

* **Repository:** Use when the abstraction provides domain-oriented access to persisted or external data (`ArticleRepository`, `WorkspaceRepository`).
* **Adapter:** Use when translating between incompatible interfaces or representations (`SanityArticleAdapter`, `LegacyAccountAdapter`).
* **Provider:** Use when supplying dependencies, state, configuration, or contextual resources (`ThemeProvider`, `AuthProvider`, `FeatureFlagProvider`).
* **Registry:** Use when maintaining a lookup or catalog of known implementations or definitions (`ComponentRegistry`, `FeatureRegistry`, `RendererRegistry`).
* **Serializer:** Use for converting a runtime structure into a transport/storage representation.
* **Parser:** Use for interpreting an input representation into a structured form.
* **Validator:** Use for determining whether something satisfies defined constraints.
* **Normalizer:** Use for converting equivalent input variations into a canonical representation.

Do not use architectural nouns as decoration.

---

## 24. Product Copy and Engineering Names Are Separate Systems

User-facing copy, editorial prose, and engineering identifiers represent three distinct layers in Om's design system. All three share the same foundational values of precision, calmness, restraint, and zero fluff, but each serves a different audience and lifecycle:

### The Three Disciplines Defined

1. **Product & Interface Voice (`product-voice.md`) : What the user sees:**
   - Governs user-facing UI copy: button labels, menu items, settings, dialog text, input labels, empty states, and errors.
   - Enforces the tone hierarchy (Functional, Explanatory, Expressive), eliminates filler and pseudo labels (no decorative `[ ARTICLE ]` pill badges), and enforces strict placeholder standards.
   - *Example output:* A button labeled `"Save changes"`, an article recommendation section labeled `"Also Read"`, a search header labeled `"Fast search"`.

2. **Long-Form Writing Voice (`article-writing.md`) : What the reader reads:**
   - Governs narrative essays, technical breakdowns, dev notes, and case studies.
   - Enforces intellectual clarity, getting to the core idea early, dissecting mechanics and psychology, and eliminating artificial wonder or marketing breathlessness.
   - *Example output:* Deep technical explorations and analytical prose on personal sites and publications.

3. **Professional Codebase Naming (`codebase-naming.md`) : What the engineer writes:**
   - Governs the source code: component identifiers, state variables, hooks, types, functions, CMS schemas, files, and architectural modules.
   - Enforces semantic durability: naming abstractions by what they represent and what responsibility they own, rather than their current visual styling or temporary user-facing copy.
   - *Example output:* A CMS schema field named `relatedContent`, an editor control named `ContentReferencePicker`, and a frontend component named `RelatedContentSection`.

### Layer Separation in Practice

Never bind implementation identifiers to marketing copy or transient UI labels unless the phrase itself is a permanent domain concept:

* **UI label (Product Voice):** `"Also Read"` -> **Schema field:** `relatedContent` -> **Editor control:** `ContentReferencePicker` -> **Frontend renderer:** `RelatedContentSection`
* **UI label (Product Voice):** `"For You"` -> **Engineering concept:** `Recommendations` -> **Service:** `RecommendationRepository`
* **UI label (Product Voice):** `"Continue Reading"` -> **Engineering concept:** `ReadingProgress` -> **Hook:** `useReadingProgress`

When writing code, respect both voice skills: use `product-voice.md` to ensure the interface copy on screen is crisp and honest, use `article-writing.md` when authoring long-form content, and use `codebase-naming.md` to ensure the underlying code is semantically sound and durable across redesigns.

---

## 25. Professional Does Not Mean Copying Apple

Large product companies often demonstrate disciplined terminology, but this skill must not fabricate or claim knowledge of private internal naming conventions.

Use public product and platform terminology as inspiration only when appropriate. Do not write: *"Apple would definitely call this X."* Instead, reason from platform conventions, established interface vocabulary, product semantics, local codebase conventions, and documented references.

The objective is professional naming quality, not imitation.

---

## 26. New Code Workflow

When creating new code:
1. Inspect nearby code.
2. Inspect product terminology.
3. Inspect relevant files in `references/`.
4. Identify the domain concept.
5. Identify the layer.
6. Identify the responsibility.
7. Choose established vocabulary.
8. Avoid presentation-specific naming unless presentation is the abstraction.
9. Check for collisions or conflicting terminology.
10. Use the project's casing and file conventions.

For a new concept, briefly consider at least two viable names internally before selecting one. Prefer the name that is semantically accurate, shorter without losing meaning, consistent with neighboring code, durable across redesigns, and recognizable to another engineer.

---

## 27. Existing Codebase Safety Rule

When auditing an existing codebase, do not rename identifiers immediately.

Renaming can break imports, exports, dynamic imports, tests, snapshots, route loaders, CMS schemas, persisted field names, database columns, API contracts, analytics, CSS selectors, automation, external integrations, generated code, documentation, public URLs, serialized content, and string-based registries.

An apparently cosmetic rename can become a compatibility migration. Therefore, existing-codebase naming work uses a mandatory two-stage process.

---

## 28. Stage One: Audit Only

Before changing anything:
1. Inspect project structure, naming conventions, product terminology, and relevant `references/`.
2. Identify candidate names and locate their definitions.
3. Locate every reference that can reasonably be found.
4. Classify migration risk.
5. Propose replacements.
6. Create a before-and-after audit sheet.

Do not modify production code during this stage. Do not opportunistically rename neighboring files. Do not perform a "cleanup while here." The audit must be separable from implementation.

---

## 29. Required Before and After Audit Sheet

For every proposed rename, produce a table containing:

| Current name | Proposed name | Kind | Reason | References found | Risk | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `AlsoReadDropdown` | `ContentReferencePicker` | UI/CMS input | Names semantic responsibility instead of current control | 8 | Medium | Used by Sanity Studio |
| `BlogCard` | `ArticlePreview` | UI component | Represents article preview, not generic card geometry | 14 | Low | No public contract |
| `showPopup` | `isDialogOpen` | state | Boolean proposition and actual UI concept | 3 | Low | Local state only |

The audit sheet must be shown to the user before implementation. When helpful, group proposals into categories:
* Safe local renames
* Cross-module renames
* Schema-sensitive renames
* Public-contract renames
* Do-not-touch without migration

---

## 30. Approval Gate

After presenting the audit, stop. Do not implement renames until the user explicitly approves them.

Approval may apply to:
* the entire sheet;
* selected rows;
* a category;
* individually specified names.

If the user rejects or modifies a proposal, update the plan. Do not interpret general enthusiasm as approval to mutate the codebase. A clear instruction such as *"Go ahead with all of them"* or *"Rename only rows 1, 3, and 4"* is required.

---

## 31. Reference Discovery Before Rename

Before changing an approved identifier, search for its complete dependency surface across declarations, imports, exports, re-exports, barrel files, aliases, dynamic imports, lazy references, JSX usage, tests, stories, fixtures, mocks, snapshots, documentation, CSS selectors, data attributes, analytics events, telemetry, registry keys, route definitions, API handlers, query strings, CMS schemas, previews, serializers, database mappings, migrations, and string literals.

Use language-aware reference tools when available, alongside textual search because not every dependency is statically resolvable. Do not assume IDE references are exhaustive.

---

## 32. Classify the Rename Before Performing It

Every rename should be classified:

* **A. Local identifier rename** (e.g. `showPopup` -> `isDialogOpen`): Usually low risk.
* **B. Internal component/module rename** (e.g. `BlogCard` -> `ArticlePreview`): Requires import/export tracing.
* **C. File or directory rename:** Requires path/import/reference tracing.
* **D. Schema identifier rename** (e.g. `alsoRead` -> `relatedContent`): Potentially high risk because persisted content may depend on the field name.
* **E. Database or persistence rename:** Requires migration planning.
* **F. Public API rename:** Requires compatibility strategy.
* **G. Route rename:** Requires redirect, SEO, analytics, and link analysis.
* **H. Analytics or event rename:** May fragment historical reporting.
* **I. Public package/export rename:** May affect external consumers.

Do not treat categories D through I as simple search-and-replace operations.

---

## 33. Preserve Stable External Contracts

A professional internal name does not justify breaking a stable external contract.

If a public contract has an imperfect name, consider keeping the public name, improving only the internal alias, adding a compatibility alias, deprecating gradually, or creating a migration layer:
```typescript
// Public legacy field
const alsoRead = data.alsoRead;

// Internal semantic mapping
const relatedContent = normalizeRelatedContent(alsoRead);
```
Naming quality must not outrank compatibility.

---

## 34. Schema and CMS Guardrails

Schema names require special caution.

Before renaming a Sanity field, document type, object type, Portable Text block, or annotation, determine whether the identifier exists in persisted content. Never assume changing `name: 'alsoRead'` to `name: 'relatedContent'` is merely cosmetic.

Inspect existing documents, GROQ queries, generated types, previews, validation, desk structure, migrations, serializers, frontend queries, webhooks, and external consumers.

Prefer changing the editor-facing title independently when only the visible wording needs improvement. For persisted schema identifiers, propose a migration before modifying the name.

---

## 35. File Rename Guardrails

Before renaming a file:
* find all import paths;
* inspect path aliases;
* inspect dynamic imports;
* inspect case sensitivity;
* inspect tests;
* inspect build scripts;
* inspect documentation references;
* inspect deployment-specific paths.

Be especially careful on systems where case-only renames behave differently (e.g. `articleCard.tsx` to `ArticleCard.tsx`).

---

## 36. Dynamic and String-Based References

Static reference tools cannot find everything. Search for string usage when the architecture uses registries, dependency injection, plugin names, event buses, serialization, CMS block types, database values, feature flags, route names, command IDs, or analytics names.

Treat string identifiers as contracts until proven otherwise.

---

## 37. Migration Execution

After approval:
1. Perform the smallest coherent batch.
2. Update the definition.
3. Update all known references, imports, and exports.
4. Update tests, stories, and fixtures.
5. Update documentation where appropriate.
6. Update string references only when they represent the same identifier.
7. Preserve compatibility where required.
8. Run project validation (`npm run build`, tests, typechecks).
9. Search again for the old name.
10. Inspect git diff for accidental changes.

Do not mix unrelated refactors into the rename. A naming migration should remain reviewable.

---

## 38. Post-Rename Verification

After implementation, verify that the old name is no longer present where it should have been removed. Run appropriate checks (`typecheck`, `lint`, `tests`, `build`, `schema validation`).

Then perform another repository-wide search for the old identifier and classify remaining hits:
* Expected legacy compatibility
* Historical documentation
* Migration file
* Unrelated same-language phrase
* Stale reference requiring repair

Do not simply report "zero compile errors" as proof that the rename is complete.

---

## 39. Never Rename Blindly by Global Replacement

Do not use an indiscriminate repository-wide replacement without understanding each match.

The same word may refer to multiple concepts: `Card` may refer to a design-system primitive, an article preview, a payment card, or a dashboard panel. Each requires separate reasoning.

---

## 40. Naming Audit Heuristics

During an audit, flag names that exhibit one or more of these problems:

* **Appearance-bound:** `BlueButton`, `LeftBox`, `GrayArea`
* **Implementation-bound:** `AlsoReadDropdown`, `SearchModal` (when concept is broader than current modal presentation)
* **Generic:** `DataManager`, `ContentComponent`, `Helper`, `Utils`
* **Ambiguous:** `Item`, `Object`, `Value`, `Entry` (when domain concept is available)
* **Misleading:** `ArticleRepository` when it merely formats article titles
* **Product-language conflict:** `BlogPost` inside a product that consistently calls the concept `Story`
* **Redundant:** `ArticleCardComponent` when `ArticlePreview` already communicates the abstraction
* **Overengineered:** `ArticleRelationshipSelectionManagementController`
* **Temporally fragile:** `NewHeader`, `OldSearch`, `V2Card` (unless version identity is intentionally part of architecture)

---

## 41. Choosing Between Similar Professional Terms

Do not treat related terms as interchangeable:

* **Picker vs. Selector:** `Picker` often implies browsing/searching richer options (`MediaPicker`, `DatePicker`, `ContentReferencePicker`). `Selector` often describes a control selecting among known choices (`LanguageSelector`, `WorkspaceSelector`).
* **Preview vs. Summary:** `Preview` suggests inspecting before opening (`ArticlePreview`). `Summary` suggests a condensed representation of information (`ArticleSummary`).
* **Panel vs. Sheet vs. Dialog:** Use design-system behavioral definitions.
* **Action vs. Button:** `Button` describes the UI primitive; `Action` describes semantic intent (`PublishAction`).
* **Field vs. Input:** `Field` includes label, validation, and control semantics; `Input` refers specifically to the input control or custom CMS input.

---

## 42. Naming Families

Related concepts should form coherent naming families:
* Good: `ArticlePreview`, `ArticleMetadata`, `ArticleActions`, `ArticleStatus`, `ArticleRepository`
* Good: `WorkspaceSwitcher`, `WorkspaceMenu`, `WorkspaceMembership`, `WorkspaceSettings`

Avoid mixing synonyms without reason (`ArticlePreview`, `PostMetadata`, `StoryActions`, `BlogStatus`).

---

## 43. Avoid Premature Abstraction Names

Do not assign a highly general name before the abstraction is genuinely general. A component used only for article authors should not automatically be called `EntityIdentityPresentation`; prefer `AuthorIdentity`. Generalize only when reusable across multiple domains.

---

## 44. Acronyms

Use acronyms that are already standard in the codebase or domain (`URL`, `HTML`, `HTTP`, `API`, `ID`, `CMS`, `SEO`). Avoid inventing obscure abbreviations (`RCP` for `RelatedContentPicker`).

---

## 45. Numbered and Versioned Names

Avoid `Header2`, `SearchNew`, `CardV3`, `NewNavigation`. Prefer concept-based differentiation (`GlobalNavigation`, `SectionNavigation`, `CompactNavigation`). Explicit version names are acceptable only for real protocol or schema versions (`ArticlePayloadV2`, `ApiV3Client`).

---

## 46. Temporary Names

Temporary implementation names should not quietly become permanent architecture. If unavoidable (e.g. `LegacySearchAdapter`), document why it exists and what condition allows removal. Avoid permanent `New`, `Old`, `Temp`, or `Legacy` prefixes without context.

---

## 47. Tests

Test names should describe behavior or responsibility clearly. File names should track the concept under test (`article-preview.test.tsx`, `content-reference-picker.test.tsx`, `publication-status.test.ts`).

---

## 48. Analytics Naming

Analytics event names are data contracts. Before renaming `article_opened`, determine whether historical dashboards, pipelines, experiments, or warehouse queries depend on it.

---

## 49. Accessibility and Naming

Engineering names should not encode inaccessible assumptions. Avoid concept names based purely on color, position, or mouse interaction (`RedWarning`, `RightPanel`, `HoverMenu`). Prefer `ErrorBanner`, `InspectorPanel`, `ContextMenu`.

---

## 50. Framework Neutrality

Do not force framework terminology into domain names (`ArticleReactComponent`, `VueSearchWidget`, `NextArticleLoader`). Prefer `ArticlePreview`, `SearchPanel`, `ArticleLoader`.

---

## 51. Naming Review Checklist

Before accepting a name, ask:
1. Does it describe the actual concept?
2. Does it describe the correct layer?
3. Does it communicate responsibility?
4. Does it use the product's established vocabulary?
5. Does it align with `references/` where relevant?
6. Does it align with neighboring code?
7. Is there a recognized industry term for this?
8. Would the name survive a visual redesign?
9. Would the name survive an implementation change?
10. Is it unnecessarily long?
11. Is it too generic?
12. Does it misuse an architecture term?
13. Is it tied to current marketing copy?
14. Does it introduce a synonym for an existing concept?
15. Could another engineer reasonably predict what it contains?
16. Does it preserve public or persisted contracts?

---

## 52. Examples Across Different Layers

| Weak Name | Better Name | Why It Is Better |
| --- | --- | --- |
| `AlsoReadDropdown` | `ContentReferencePicker` | Names semantic selection responsibility |
| `AlsoReadComponent` | `RelatedContentSection` | Names rendered product concept |
| `BlogCard` | `ArticlePreview` | Describes what the UI represents |
| `BigArticleCard` | `FeaturedStory` | Names product role rather than size |
| `ProfileDropdown` | `AccountMenu` | Uses semantic navigation concept |
| `ThreeDotMenu` | `OverflowMenu` | Removes icon-specific naming |
| `XButton` | `DismissAction` | Names intent rather than glyph |
| `SearchPopup` | `SearchPanel` | Avoids vague popup terminology |
| `GrayLoader` | `ContentSkeleton` | Uses established loading vocabulary |
| `UploadBox` | `FileDropzone` | Names behavior |
| `ChooseImageModal` | `MediaPicker` | Names durable concept |
| `FormattingButtons` | `FormattingToolbar` | Uses established UI vocabulary |
| `GreenDot` | `PresenceIndicator` | Names meaning |
| `PublishedChip` | `PublicationStatus` | Names semantic state |
| `useGetArticle` | `useArticle` | Capability-focused hook name |
| `useKeys` | `useKeyboardShortcuts` | Explicit responsibility |
| `articleService` | `ArticleRepository` | Appropriate when it owns article persistence access |
| `sanityMapper` | `ArticleAdapter` | Appropriate when translating Sanity representation |
| `componentMap` | `ComponentRegistry` | Names lookup/catalog responsibility |
| `settingsStuff` | `ApplicationConfiguration` | Names concept precisely |
| `clickedPost` | `selectedArticle` | Names state rather than interaction history |
| `showPopup` | `isDialogOpen` | Boolean proposition and actual concept |
| `handleData` | `normalizeArticle` | Names transformation |
| `userData` | `AccountProfile` | Names modeled information |
| `miscUtils` | split by responsibility | Generic utility bucket hides concepts |

---

## 53. Example Audit

Suppose the repository contains:
```
components/
  BlogCard.tsx
  AlsoReadDropdown.tsx
  SearchPopup.tsx
sanity/
  schemas/
    article.ts
```

An audit proposes:

| Current | Proposed | Type | Risk | Rationale |
| --- | --- | --- | --- | --- |
| `BlogCard` | `ArticlePreview` | component | Low | Represents a compact article preview |
| `AlsoReadDropdown` | `ContentReferencePicker` | Sanity input | Medium | Selects a related content reference; dropdown is incidental |
| `SearchPopup` | `SearchPanel` | component | Low | Search experience is presented as a dedicated panel |
| `alsoRead` | `relatedContent` | persisted schema field | High | Better domain name, but requires content migration |

The first three are implementation candidates. The fourth must not be renamed until persisted content and query migration are understood.

---

## 54. When Not to Rename

Do not rename merely because another name sounds slightly more elegant. Keep the existing name when it is already clear, widely established, changing it provides little semantic benefit, it is a public contract, migration risk outweighs clarity gain, or the alternative is only stylistic preference.

---

## 55. Output Expectations During an Audit

When asked to audit naming in an existing repository, return:
1. A concise summary of the naming system already present.
2. Relevant vocabulary found in the product and `references/`.
3. The before-and-after audit sheet.
4. Migration-risk notes.
5. Any names that should remain unchanged.
6. Any unresolved terminology questions.
7. A clear indication that implementation has not yet occurred.

---

## 56. Output Expectations During New Development

When creating a new abstraction, choose the name directly if the concept is clear. Do not interrupt implementation with unnecessary naming debates. If the name is consequential or ambiguous, explain the selected concept briefly:

> Using `ContentReferencePicker` because the component's responsibility is selecting a content reference; the current dropdown presentation is incidental.

---

## 57. Final Standard

The codebase should feel as though its names were chosen by people who understand the product, not generated from the shape of the JSX.

Professional naming produces a system where domain concepts are consistent, UI names communicate behavior, architectural names are used precisely, files are predictable, state reads naturally, events describe what occurred, public contracts remain stable, and implementation details do not leak unnecessarily into conceptual names.

The best name is rarely the most elaborate one. It is the name that makes the correct idea obvious.
