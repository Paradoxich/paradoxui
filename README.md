# Paradox UI

A design system extracted live from a real product.

Paradox UI is the token system and React component library behind
[Santolina](https://santolina.app), a garden planning app. It is not built in
a vacuum and then adopted; every component exists because the product needed
it, and every component is forbidden from knowing what the product is about.

**[Browse the live Storybook](https://paradoxich.github.io/paradoxui/)**

## Status

Pre-release. The packages live inside the Santolina monorepo today and are
consumed there as workspace packages. They are not yet published to npm; this
repo is the public window into the work. Versioning, changesets, and a
license will be settled before the first npm release.

- 28 components, typed props, accessibility built in
- 25 Storybook stories, deployed from this repo via GitHub Pages
- 39 files in the Santolina app consume the library today

## The extraction rule

The whole system rests on one question, asked before placing any component:

> Does this component know anything about gardens?

If yes, it stays in the product. If no, it belongs to Paradox UI, with
generic props (`items`, `selected`, `count`) and zero domain vocabulary. A
`Chip` does not know it filters bloom statuses; the page knows that. This
discipline is what keeps the framework extractable, and it is checked in
review, not left to good intentions.

Dependencies flow one way only:

```
@paradoxui/tokens   →   @paradoxui/ui   →   the product
(CSS vars + preset)     (generic React)     (domain components)
```

## Packages

### `@paradoxui/tokens`

Pure CSS custom properties plus a Tailwind preset. Zero dependencies: no
React, no framework, nothing to install alongside it. The tokens file is the
source of truth for the design system; Figma Variables are synced from it,
not the other way around.

Tokens are organized in three tiers, and you can tell a token's tier by
reading its name:

| Tier          | Vocabulary      | Examples                                     | Raw values allowed?  |
| ------------- | --------------- | -------------------------------------------- | -------------------- |
| 1. Primitive  | hue/scale names | `--color-green-700`, `--radius-lg`           | Only here            |
| 2. Semantic   | role names      | `--color-text-muted`, `--color-surface-card` | No, always aliases   |
| 3. Component  | component names | `--chip-radius`, `--thumbnail-scrim`         | Measured values only |

Components consume tier 2 roughly 95% of the time. Dark mode, when it
arrives, overrides tier 2 and nothing else. The rules that keep the system
small: roles describe function, never location (`surface-card`, not
`background-close-button`); a new semantic role is admitted only if its usage
rule fits in one sentence; tone vocabulary is `positive` / `warning` /
`critical`, each a four-role kit of surface, icon, text, and border.

Tailwind's stock palette is deliberately removed from the preset. `bg-white`
compiles to nothing, and that visible breakage is the point: if a value is
not in the system, the page tells you.

### `@paradoxui/ui`

React 19 + TypeScript + Tailwind. Every component references token values
through the preset classes; no hardcoded colors, spacing, or type sizes
anywhere. Every component ships with a typed props interface, ARIA roles and
keyboard navigation, visible focus states, and a Storybook story.

**Signature piece: `DitheredImage`.** Renders images through an ordered
dither, the visual language of old botanical engravings, as a reusable
primitive. It anchors the library's look and you will not find it in other
component libraries.

Full inventory:

| Category  | Components                                                                       |
| --------- | -------------------------------------------------------------------------------- |
| Actions   | Button, IconButton, Menu                                                          |
| Inputs    | Input, SearchField, Chip, SwatchChip                                              |
| Display   | Card (+ Header/Body/Footer), Badge, Avatar, Icon, DitheredImage, MediaCard, StatCard |
| Layout    | Panel, Tabs, Drawer, DrawerSection, DetailRow, SeasonalStageRow                   |
| Lists     | ChecklistItem, CompanionThumbnail                                                 |
| Feedback  | Modal, Toast (+ ToastProvider/useToast), Tooltip, Spinner, EmptyState             |

Plus `cn`, the class-merging utility.

## The visual language

What the Storybook shows today is Santolina's skin: sage surfaces,
translucent whites, hairline outlines, soft shadows, generous radii, Public
Sans throughout. That is the first theme built on the system, not the
framework's own voice.

The machinery underneath is theme-agnostic. Components only ever speak
semantic roles, so a retheme is a re-pointing of tier 2 aliases: pour a
different palette into the same roles and every component follows. Santolina
is the proof that the roles can carry a complete product.

The framework's own default theme is a decision still ahead, deliberately.
Paradox UI is not a theming engine with a placeholder skin; the shipped
default is the product, designed for people who want an expertly designed UI
without having a designer. That default arrives with the docs site and the
first npm release, and it will stand apart from Santolina's warm, organic
register so the framework has its own face.

## Why build it this way

Most design systems are either extracted too late (a rewrite) or built too
early (a guess). Paradox UI is extracted continuously: the product and the
system grow in the same commits, and the placement rule keeps the boundary
honest at every step. The bet is that a system proven by one real product,
component by component, beats a system designed in the abstract.

## Roadmap

- npm publish of `@paradoxui/tokens` and `@paradoxui/ui` (changesets, license, build pipeline)
- Dark mode via tier 2 token overrides
- Source mirror or full extraction into this repo

Built by [Paradoxich](https://github.com/Paradoxich). Watch this repo or
follow along at [santolina.app](https://santolina.app).
