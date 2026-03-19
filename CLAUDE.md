# Beautiful Imperfections

A visual field guide to the beautifully botched — documenting design quirks, ad-hoc engineering, and charming oddities found in everyday life, especially Indonesia.

## Spirit

This is a creative project, not a product. It observes the world with the eye of a **wry anthropologist** — analytical but warm, naming patterns like a field researcher who finds it all genuinely fascinating. The tone is never mocking; it celebrates the charm in things that don't quite work as intended. Think: a naturalist's notebook for urban absurdity.

The visual language celebrates imperfection itself. Avoid anything that feels corporate, over-polished, or tech-startup. Prefer organic, humanistic, editorial.

## Architecture

**Static site** built with Astro, styled with Tailwind CSS, deployed to Vercel.

Content lives as **markdown files with photos** in `src/content/concepts/`. Each concept is a named pattern (e.g., "Plastification") with prose and a photo gallery. The author writes in Obsidian and pushes to this repo.

```
src/
├── content/concepts/     # Content: one folder per concept (markdown + photos)
│   └── _template/        # Copy this to start a new concept
├── components/           # Astro components (cards, header, footer)
├── layouts/              # Page layouts (BaseLayout wraps everything)
├── pages/                # Route pages (index, future: concept detail, archive)
└── styles/global.css     # Design tokens, base styles, noise texture
```

## Design System

Defined in `src/styles/global.css` via Tailwind `@theme` tokens:

- **Background:** `cream` (#FDFBF7) with subtle paper noise texture overlay
- **Text:** `ink` (#2D2D2A)
- **Accents:** `terracotta`, `dusty-blue`, `sage`, `ochre` — used for category tags, hover states, highlights
- **Typography:** `Lora` (serif) for headlines and editorial moments, `Inter` (sans-serif) for UI and body
- **Borders:** `border` (#E5E0D8) — subtle, restrained

### Visual Principles
- Generous whitespace, restrained hierarchy
- Handwritten-feel labels, numbered sections, italicized quotes
- Hover effects: subtle lift on cards, chevron arrows that shift
- Drop caps on article content (`.drop-cap` class)
- Photo placeholders use `placeholder` color (#EAE6DF)

## Content Model

Each concept at `src/content/concepts/<slug>/index.md`:

```yaml
name: "Plastification"           # Display name
tagline: "One-line for the card" # Homepage teaser
category: "objects"              # Free-form category
date: 2026-03-19                 # Publish date
location: "Jakarta, Indonesia"   # Optional, where observed
photos:                          # Photo gallery
  - src: "./photos/example.jpg"
    caption: "Description"
    featured: true               # Used as card thumbnail
```

Schema enforced in `src/content.config.ts`. See `_template/` for the full structure.

## Current State

- **Built:** Design system, base layout (header/footer), homepage with placeholder category grid
- **Not yet built:** Article pages (concept detail), archive page, lightbox, category pages
- **Not yet built:** Capture app (FastAPI on tailnet for mobile photo upload)

The homepage categories are **placeholders** — real categories will emerge from the content itself.

## Pages (Planned)

| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Browse page — category card grid | Built (placeholders) |
| `/concepts/<slug>` | Article — hero image, prose, photo grid with lightbox | Not built |
| `/archive` | Chronological grid with filter sidebar | Not built |
| `/about` | Project description | Not built |

## Development

```bash
npm run dev      # Dev server at localhost:4321
npm run build    # Static build to dist/
npx vercel --prod  # Deploy to production
```

## Key Decisions

- **Photos live in the git repo** alongside their concept markdown. Astro `<Image>` handles optimization at build time.
- **Categories are free-form** strings in frontmatter, not a fixed taxonomy. They'll be defined by the content as it grows.
- **No CMS** — content authored in Obsidian, committed via git. The markdown files are the source of truth.
- **Naming is an editorial choice** — concept names may be English neologisms, local language terms, or bilingual, decided per entry.

## Contributing Content

See `CONTRIBUTING.md` for the step-by-step workflow: copy `_template/`, add photos, write prose, push.
