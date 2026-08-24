# vale_ — Design System

**Aesthetic in one line:** Bauhaus discipline with a cyberpunk / transparent-device wink. Terminal, systematic, retro-technical. Never generic-SaaS, never gamer-RGB.

`vale_` is a **personal brand**, not a company: one operator who turns scattered marketing operations into repeatable systems — the bridge between marketing strategy and revenue operations. Focus is marketing ops / RevOps / automation with HubSpot as the anchor tool, serving B2B SaaS, LATAM + remote, in English and Spanish.

- **Core message:** Chaos in. Systems out. Growth on repeat.
- **Support line:** positioning, pipeline, and the automations between them.
- **Personality:** bold, energetic, precise. Playfulness comes from *structure* and retro-digital references — never from rounded, cute or friendly elements.

## Sources

| Source | What it gave us |
|---|---|
| `uploads/vale_visual_identity_handoff.md` | The entire system: palette, type, the two modes, motifs, guardrails, technical notes. |
| LinkedIn banner (1584×396) — described in the handoff, **file not supplied** | The dark-mode reference. Rebuilt from spec in `ui_kits/social/`. |

No codebase, Figma file, live site, logo file or font binary was provided. Everything here derives from the handoff document; the two UI kits are **new compositions faithful to the brand**, not recreations of an existing implementation.

## Surfaces in this system

1. **Portfolio site** (`ui_kits/portfolio/`) — the personal site: dark CRT hero, light editorial body, work, case study, contact.
2. **Statement graphics** (`ui_kits/social/`) — LinkedIn banner, 1080² statement post, carousel slide, monogram/favicon set.

---

## CONTENT FUNDAMENTALS

**Voice.** First person, direct, no hedging. The brand speaks as one person who has seen the mess before: *"Two weeks inside the stack, the data and the handoffs. You get a map of where revenue leaks — not a slide deck of best practices."*

**Casing.** Sentence case in headlines and body. Lowercase in mono UI text — nav links, button labels, tags, terminal commands (`work`, `book a call`, `vale ls ./skills`). ALL-CAPS is reserved for tiny mono labels with wide tracking (`--track-mono-wide`), never for headlines or buttons at display size. The wordmark is always lowercase.

**I vs you.** "I" for what the operator does ("I reply within two working days"). "You" for what the client gets ("You get a map of where revenue leaks"). Never "we" — there is no we.

**Sentence shape.** Short declaratives, often three-beat: *Chaos in. Systems out. Growth on repeat.* / *Diagnose. Build. Refine.* Fragments are fine. Semicolons are not.

**Claims.** Concrete and bounded — `+38% MQL→SQL conversion`, `−4 days time to first touch`, `9 workflows replaced by 2`. Numbers appear in Space Mono or as an oversized Space Grotesk stat with a mono caption. No superlatives ("world-class", "best-in-class", "10x"), no growth-hacker vocabulary.

**Terminal copy is content, not decoration.** Every `$` command must describe the section it heads:
- `$ whoami` → about / intro
- `$ vale ls ./skills` → capabilities
- `$ vale run growth.flow` → case study / process
- `$ vale status --pipeline` → results

If a command isn't true, cut it. **Never use the bare token `gtm`** — it reads as Google Tag Manager to technical eyes; spell out "go-to-market".

**Emoji: never.** Not in UI, not in copy, not in social posts. The retro-digital signals do that job. Unicode arrows (`→`, `↓`) and the underscore `_` are the only glyph flourishes, and they carry meaning (flow direction, cursor).

**Spanish.** EN/ES parity is expected. Keep the same three-beat rhythm; do not translate the commands — they stay in English as a technical register.

---

## VISUAL FOUNDATIONS

**Colors — "Citrus & Slate".** Signal orange `#FF6A2B` is the Bauhaus primary-red role: the cursor, the primary CTA, the one highlighted word. It leads but never covers a layout. Slate `#2C3A3F` / deep slate `#22282B` carry structure and dark mode. Teal `#37B79C` is a wink — the `$` prompt, one accent bar, an occasional badge; overuse kills it. Warm off-white `#F4F1EA` is the light surface: warm, paper-like, deliberately not clinical white. Sage `#8A9A8F` is muted text on dark. See `tokens/colors.css`.

**Two modes with separate personalities, not inversions.** *Light — "terminal on paper"*: warm off-white, serene, almost editorial; terminal references are subtle; **no glow at all**; the blinking `_` is the only overt terminal cue. *Dark — "scanlines CRT"*: deep slate with a real horizontal scanline texture; restrained orange glow allowed on hero moments only. Light is for portfolio body and recruiter-facing contexts; dark is for hero sections, banners and launch graphics.

**Type.** Space Grotesk 700 does the heavy lifting for display (72/52/38/28px, tracking −0.03em, leading 1.04). Archivo 400/600 sets all body copy (19/16/14px, leading 1.6). Space Mono 400/700 handles labels, data, status lines, step markers and terminal lines — with the hard rule that **Space Mono never sets a paragraph**. Mono labels are uppercase at 11px with 0.14em tracking.

**Spacing & layout.** 4px base scale (4→128). 12-column grid, `--container-max` 1180px, 24px gutters, 96px section rhythm. **Composition is intentionally asymmetric** — content 7 columns wide with a 4-column sidebar and an empty column between, never centred-and-symmetrised by default. Centring is for a single statement moment only.

**Corners & borders.** Near-square throughout: 0/2/4/8px; 12px exists solely for the monogram tile; the pill radius is only ever a status LED dot. Hairline borders are 1px `--border-hairline`; structural borders are 2px in ink/slate. Buttons, cards and inputs all take 2px frames — the frame *is* the styling.

**Shadows.** Light mode uses **hard printed offsets** — `4px 4px 0` in ink or orange — not blurred haze. `--shadow-soft` exists for floating surfaces (a scaled export preview, a dropdown) and is used sparingly. Dark mode gets `--glow-accent` (24px orange bloom) on hero marks only, plus an 8px LED glow on status dots. Glow is a garnish, never a base layer.

**Cards.** Square (2–4px radius), 24–32px padding, hairline border on `--surface-card` by default. A mono uppercase eyebrow sits above the content. Emphasis cards swap to a 2px ink or orange border with the printed offset shadow — one or two per screen, no more.

**Backgrounds & texture.** No photography is specified and none is supplied. Surfaces are flat colour. The only texture is the **scanline**: `repeating-linear-gradient`, 1px line / 2px gap, 22–30% black, dark mode only — test on high-DPI screens for moiré. **No gradients as backgrounds** (especially no bluish-purple), no dot-grid wallpaper, no noise overlays.

**Motifs.** (1) The orange underscore cursor — the signature; blinks in interactive contexts only. (2) Terminal command lines as narrative structure. (3) **Node / flow blocks** — input → process → output, the brand's best differentiator because it *demonstrates* systems thinking. (4) Bauhaus primitives — circle, square, triangle, bar — in orange/teal/off-white, used as dividers and composition anchors, two or three per layout, never a scattered pattern.

**Animation.** Restrained and functional. 120ms for hover/press, 220ms for reveals and nav, 420ms at most; easing `cubic-bezier(.2,.8,.2,1)`. The cursor blink is `1s steps(1,end)` — a hard on/off, never a fade, because it's a terminal cursor. Content reveals are a short fade-up (8px). No bounce, no spring, no parallax. `prefers-reduced-motion` kills all of it.

**Hover / press / focus.** Hover darkens one palette step (`--orange-500` → `--orange-600`); ghost items pick up colour rather than a background. Press scales to 0.985 — a physical click, no colour shift beyond hover. Focus is a 2px `--focus-ring` orange border (plus a soft 3px halo on light surfaces). Disabled is 40% opacity, never a grey repaint. Nav links take a 2px orange underline when active.

**Transparency & blur.** Exactly one use: the sticky nav's protection layer — 82% surface colour with `saturate(140%) blur(10px)`. Nothing else is translucent; there are no frosted cards or glassmorphic panels.

**Imagery.** None supplied. If photography is added later it should be **cool-neutral, high-contrast, slightly desaturated**, with the scanline overlay available for dark-mode placements — never warm Instagram grading, never stock-office smiles. Until real imagery exists, use flat colour blocks and Bauhaus primitives rather than filler images.

---

## ICONOGRAPHY

**No icon set was supplied.** ⚠️ **SUBSTITUTION:** the system links **Lucide 0.454** from CDN (`https://unpkg.com/lucide-static@0.454.0/icons/`) — 2px stroke, square-ish caps, geometric construction, which matches the Space Grotesk / technical direction more closely than Heroicons (rounder) or Feather (thinner). The `Icon` component renders each glyph as a `currentColor` CSS mask so icons always inherit text colour.

Rules:
- Icons are **structural, not decorative** — one per service card, one inside a button at most. A screen with an icon on every row is off-brand.
- Stroke icons only. No filled/duotone variants, no coloured icon chips.
- Size 14–22px inline with text; colour is `currentColor` or `--accent` for a single emphasis glyph.
- **Emoji are never used** as icons or anywhere else.
- Unicode `→` and `↓` (in Space Mono) are the flow-diagram connectors — deliberately typographic, not an SVG arrow.
- `_` is the brand's own glyph and always Space Grotesk 700 in `--cursor` orange.

**No logo file was provided**, so no mark has been drawn. The wordmark and monogram are set in type (Space Grotesk 700 lowercase + orange underscore) by the `Wordmark` and `Monogram` components — exactly as the handoff specifies. If a drawn mark exists, drop the SVG into `assets/` and update those two components.

---

## Fonts

Space Grotesk, Space Mono and Archivo are all free Google Fonts and load from the Google Fonts CDN in `tokens/fonts.css`. ⚠️ **No font binaries were supplied**, so nothing is self-hosted. For a Webflow + EU deployment, self-host under custom fonts (the Google Fonts API sends visitor IPs to Google) and replace the `@import` with local `@font-face` rules.

---

## Index

**Root**
- `styles.css` — the entry point; `@import`s every token file. Consumers link this one file.
- `readme.md` — this document.
- `SKILL.md` — Agent-Skills wrapper so this system can be used from Claude Code.
- `thumbnail.html` — homepage tile.

**Tokens** (`tokens/`) — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `motion.css`.

**Guidelines** (`guidelines/`) — 20 specimen cards feeding the Design System tab: colour (primary, slate, paper, teal/sage, two modes), type (display, body, mono, pairing), spacing (scale, in use, radii/borders, shadows), brand (motion, states, scanlines, node-flow motif, terminal grammar, wordmark, Bauhaus primitives).

**Components** (`components/`)
- `brand/` — **Wordmark**, **Monogram**, **ScanlineSurface**, **BauhausShape**
- `core/` — **Button**, **Card**, **Badge**, **Tag**, **StatusDot**, **SectionHeading**, **Divider**, **Icon**
- `terminal/` — **TerminalLine**, **TerminalBlock**, **PromptCursor**
- `flow/` — **NodeFlow**, **StepChain**
- `forms/` — **Input**, **Textarea**, **Select**, **Checkbox**, **Switch**
- `navigation/` — **NavBar**, **Footer**

Each has a `.d.ts` props contract and a `.prompt.md` with a usage example; each directory has one `@dsCard` preview.

**Templates** (`templates/`) — starting folders consuming projects can copy: `portfolio-page/` (full site page) and `statement-graphic/` (1080² dark CRT post).

**UI kits** (`ui_kits/`) — `portfolio/` (site click-through) and `social/` (statement graphics). Each has its own README.

### Intentional additions

The handoff defines a brand, not a component inventory, so the primitive set was authored from scratch and kept to what these two surfaces actually need. Three additions are worth naming:
- **Icon** — a wrapper for the substituted Lucide set, so the swap is one line if the brand adopts its own glyphs.
- **ScanlineSurface** — the CRT texture appears in three places; it was factored out rather than repeated.
- **Switch** — needed for the light/dark ("crt") mode toggle the two-mode system implies.
