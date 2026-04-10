---
name: scaler-rebrand-style
description: >
  Scaler 3.0 rebrand design system reference. Defines the complete visual language — colors,
  gradients, typography, spacing, component patterns, and tone — for the AI-native Scaler rebrand.
  Use when building any new section, component, or page for the Scaler 3.0 site to ensure visual
  consistency. Also use when reviewing or critiquing existing implementations against the design system.
---

# Scaler 3.0 Rebrand — Design System

You are working on the Scaler 3.0 AI-first rebrand. This is a premium, editorial, light-mode marketing site. Every design decision should feel credible, sharp, and restrained — not playful, hype-driven, or startup-generic.

**Target:** $ARGUMENTS

---

## 1. Color Palette

### Primary Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--blue` | `#0055FF` | Brand blue. Hero tints, accent text, links, active states |
| `--navy` | `#011845` | Deep navy. Dark section backgrounds, premium emphasis, category tags |
| `--cta-blue` | `#004CE5` | CTA-weight blue. Slightly darker than brand blue. Outlined badges, banners |

### Neutrals

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | `#FCFCFC` | Page background. Off-white, NOT pure `#FFF` |
| `--text` | `#0B1529` | Primary body text color. Dark navy-black |
| `--text-dark` | `#070D18` | Deepest text weight. Used sparingly for maximum contrast |
| `--heading` | `#101E37` | Headline color. Dark navy, distinct from body text |
| `--muted` | `#696969` | Secondary text — credentials, metadata, dates |
| `--light-muted` | `#848484` | Tertiary text — labels like "YOUR MENTOR", section eyebrows |
| `--inactive` | `#C4C4C4` | Deselected/inactive nav items, disabled states |
| `--panel` | `#F6F6F6` | Card/panel backgrounds, sidebar backgrounds |
| `--ice` | `#E9F1FF` | Light blue tint. Feature section backgrounds, hero cards |
| `--steel` | `#D7DDE8` | Subtle cool gray. Dividers, muted panel variant |
| `--border` | `#CAC0C0` | Warm gray card borders (1px) |
| `--border-light` | `#D1D1D1` | Neutral gray borders for lighter cards |

### Blacks for Cards & Stats

| Hex | Usage |
|-----|-------|
| `#222222` | Large display text ("Create Impact.") |
| `#1E1E1E` | Stat labels |
| `#2F2F2F` | Stat numbers |
| `#2E2E2E` | Body text inside cards |
| `#191919` | Active program name in nav |
| `#202020` | Mentor name, featured headings |

### Gradients

1. **Blue-to-white horizontal** — `#0055FF` fading to white (left-to-right or right-to-left). Used for ambient section glows.
2. **Soft blue mist** — Very diffuse `#0055FF` at ~10-15% opacity washing into white. Used as atmospheric background wash.
3. **Organic blue wave** — NOT a CSS gradient. Layered SVG vector shapes with soft blue fills creating a watercolor/light-refraction effect. Signature visual motif for hero and feature sections.

---

## 2. Typography

### Font Stack

| Role | Font | Weights | Source |
|------|------|---------|--------|
| Display / Headlines | **Clash Grotesk** | Light (300), Regular (400), Medium (500) | Custom / CDN |
| Body / UI | **Plus Jakarta Sans** | Light (300), Regular (400), Medium (500) | Google Fonts |

### Type Scale (from Figma, adapt proportionally)

| Element | Font | Weight | Size (Figma) | Tracking | Notes |
|---------|------|--------|-------------|----------|-------|
| Hero headline | Clash Grotesk | Regular | 80px | 0 | Line-height ~110% (88px at 80px) |
| Section display | Clash Grotesk | Medium | 109px | 0 | "Create Impact." scale |
| Program title | Clash Grotesk | Regular + Medium | 51-109px | 0 | Two-line hierarchy: smaller lead-in + large title |
| Card headline | Clash Grotesk | Medium | 43-80px | 0 | Mentor names, article titles |
| Stat number | Clash Grotesk | Medium | 81px | -4px | Tight negative tracking on big numbers |
| Stat label | Clash Grotesk | Regular | 45px | 0 | Below the stat number |
| Nav / program list | Clash Grotesk | Regular | 56px | 0 | Active: `#191919`, inactive: `#C4C4C4` |
| Section label | Clash Grotesk | Regular | 32px | 2.56px | Uppercase, muted color ("YOUR MENTOR", "PROGRAMS") |
| Body copy (hero) | Plus Jakarta Sans | Regular | 20px | -1.2px | Tight tracking is deliberate |
| Body copy (card) | Plus Jakarta Sans | Regular/Light | 24-32px | -0.5 to -1.9px | Consistently negative tracking |
| CTA text | Plus Jakarta Sans | Medium | 16-31px | 0 | Uppercase |
| Metadata | Plus Jakarta Sans | Regular/Light | 24-26px | -0.5px | Dates, read times, credentials |

### Typography Rules

- **Headlines always use Clash Grotesk.** No exceptions.
- **Body always uses Plus Jakarta Sans.** No exceptions.
- **Negative letter-spacing** is a signature of this design. Body copy typically runs -0.5px to -1.2px. Large stats use -4px.
- **Weight mixing within a headline** is intentional — e.g., "SCHOOL OF " in Medium + "BUSINESS" in Light. Used for emphasis contrast within a single line.
- **Uppercase** is reserved for: section eyebrow labels, CTA buttons, cohort badges. Never for body copy or headlines (except section labels).

---

## 3. CTAs & Buttons

### Filled CTA (Primary)

```
Background: #070D18
Text: white (#FCFCFC)
Font: Plus Jakarta Sans Medium, uppercase
Padding: ~12px 49px (generous horizontal padding)
Height: 48-80px depending on context
Border-radius: 0 (sharp corners — NO rounded corners)
```

### Outlined CTA (Secondary)

```
Background: transparent / #FCFCFC
Border: 1px solid #070D18
Text: #070D18
Font: Plus Jakarta Sans Medium, uppercase
Border-radius: 0
```

### Blue CTA (Accent — used sparingly for banners)

```
Background: #004CE5
Text: white
Used in: Apply Now banners, cohort badges (outlined variant)
```

### CTA Rules

- **NO border-radius on CTAs.** All buttons are sharp-cornered rectangles.
- Filled dark CTAs (`#070D18`) are the default. Blue CTAs are the exception, not the rule.
- CTA text is always uppercase Plus Jakarta Sans Medium.
- Generous horizontal padding — buttons should feel spacious, not cramped.

---

## 4. Cards & Containers

### Card Patterns

| Type | Background | Border | Notes |
|------|-----------|--------|-------|
| Stat card | `#FFFFFF` | 1px `#CAC0C0` | Large number + label, generous padding |
| Mentor card | `#FFFFFF` | 1px `#D1D1D1` | Photo + credentials, editorial layout |
| Article card | `#FFFFFF` | 1px `#CAC0C0` | Image top + title + excerpt + metadata |
| Feature card | `#E9F1FF` | none | Blue-tinted background, no border |
| Panel card | `#F6F6F6` | none | Gray background, programs sidebar |
| Dark card | `#011845` | none | Navy background, white text |
| CTA banner | `#004CE5` | none | Blue background, white text + white button |

### Card Rules

- **No border-radius on cards.** Everything is sharp-cornered.
- **No shadows.** Elevation comes from borders or background contrast, never drop-shadows.
- Borders are always 1px, warm gray (`#CAC0C0`) or neutral gray (`#D1D1D1`).
- Internal padding is generous — ~60-70px on large cards, ~48px on smaller ones.
- Content inside cards uses left-alignment with strong vertical rhythm.

---

## 5. Layout & Spacing

### Grid Principles

- Content max-width is approximately 1104px for main content columns.
- Multi-column layouts use a combination of fixed-width panels (e.g., 634px sidebar + 852px main).
- Gaps between adjacent cards: ~29px.
- Sections stack vertically with generous whitespace between them.

### Spacing Rules

- **Whitespace is a design element**, not empty space. Err on the side of more space.
- Large display text gets extra breathing room above and below.
- Internal card padding scales with card size: bigger card = more padding.
- Consistent left alignment at ~60-70px inside cards.

---

## 6. Visual Elements & Decorative Motifs

### Orange Starburst

- A bold, geometric, multi-pointed star/asterisk shape in warm orange.
- Used as a decorative brand mark — placed at intersections of content blocks.
- Not interactive, purely decorative. ~367px in the Figma reference.

### Blue Wave / Organic Glow

- Layered SVG vector shapes creating soft, organic blue washes.
- Appears in hero sections and "Build for the future" type feature sections.
- Creates a watercolor/light-refraction atmospheric effect.
- Background is `#E9F1FF` with overlapping blue vector curves.
- **This is NOT achievable with CSS gradients alone** — requires SVG or canvas elements.

### Thin Rules / Dividers

- 1px lines used to separate content within cards (e.g., after credentials, before author info).
- Color matches border palette (`#CAC0C0` or lighter).
- Vertical rules used as layout dividers (full-height, very thin).

### Lucide Icons

- Icon set: Lucide (book-copy, shield, circle-star, text-cursor, square-code, asterisk).
- Size: 48px.
- Used in curriculum/feature grids with a vertical divider separator.

### Blue Accent Bar

- Solid `#0055FF` horizontal bar, ~22px height, used at bottom of dark navy sections.
- Signature detail for "School of" branded blocks.

---

## 7. Section Archetypes

### Hero Section
- Off-white bg (`#FCFCFC`) with organic blue SVG wave in upper-right
- Centered layout: eyebrow badge -> headline -> subtext -> CTA
- Eyebrow: outlined pill, uppercase, small text
- Headline: Clash Grotesk Regular, 80px, `#101E37`
- Body: Plus Jakarta Sans Regular, 20px, `#0B1529`, tight tracking

### Program Detail Card
- `#E9F1FF` background, no border
- Two-line title hierarchy: smaller lead "Become an AI ready" + large "Software Engineer"
- All text in brand blue `#0055FF`
- Decorative orange starburst element

### Mentor / People Card
- White background, thin border
- Uppercase muted label ("YOUR MENTOR")
- Large name in Clash Grotesk Medium
- Photo takes ~45% of card width, right-aligned
- Credentials with company logo inline
- Thin divider between sections

### Stats Row
- Horizontal flex row of bordered white cards
- Large number (Clash Grotesk Medium, tight tracking) + label (Clash Grotesk Regular)
- Two-per-row at reference width

### CTA Banner
- Solid blue (`#004CE5`) background
- "Apply Now" label + "Scaler Academy" in large type
- Body copy + outlined/filled CTA button in contrasting color

### Program Navigation
- Gray bg (`#F6F6F6`), left-aligned text list
- "PROGRAMS" header in large Clash Grotesk
- Active item: `#191919`, inactive: `#C4C4C4`
- No bullets, no icons — pure typography hierarchy

### Article / Blog Card
- White bg, bordered
- Top image area with category tag (dark navy pill)
- Title in Clash Grotesk Medium
- Excerpt in Plus Jakarta Sans
- Author + date at bottom, separated by thin rule

---

## 8. Anti-Patterns (What NOT to Do)

- **No rounded corners** anywhere — not on cards, not on buttons, not on images.
- **No drop shadows** — elevation is flat, achieved through color contrast and borders.
- **No gradients on buttons** — buttons are flat solid fills.
- **No neon/glow effects** — the blue ambient wash is soft and organic, never electric.
- **No emoji or playful icons** in content — Lucide icons only, used structurally.
- **No dark mode** — this is a light-mode editorial design.
- **No generic sans-serif fallbacks visible** — Clash Grotesk and Plus Jakarta Sans must load.
- **No busy backgrounds** — backgrounds are either solid color, subtle tint, or the organic blue wave. Never patterns, textures, or noisy gradients.
- **No scarcity tactics** ("Limited Seats!", countdown timers) — the tone is confident, not urgent.

---

## 9. Implementation Checklist

When building a new section or component, verify:

- [ ] Background uses one of the defined palette colors, not arbitrary hex values
- [ ] Headlines use Clash Grotesk, body uses Plus Jakarta Sans — no crossover
- [ ] Letter-spacing is negative on body copy (-0.5 to -1.2px)
- [ ] CTAs are sharp-cornered, `#070D18` filled or outlined
- [ ] Cards have 0 border-radius, 0 box-shadow, 1px border if bordered
- [ ] Text color is `#0B1529` for body, `#101E37` for headlines — not pure black
- [ ] Uppercase is only used for eyebrow labels, CTAs, and badges
- [ ] Spacing is generous — when in doubt, add more whitespace
- [ ] No rounded anything. Sharp. Everywhere.
- [ ] Overall feel: editorial, premium, restrained — not flashy or startup-generic
