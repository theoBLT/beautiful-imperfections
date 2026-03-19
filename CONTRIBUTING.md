# Adding a New Concept

## Folder Structure

```
src/content/concepts/
├── _template/          ← copy this to start a new concept
│   ├── index.md
│   └── photos/
├── plastification/     ← example concept
│   ├── index.md        ← frontmatter + prose
│   └── photos/
│       ├── remote-control.jpg
│       ├── sofa-wrap.jpg
│       └── menu-sealed.jpg
└── wishful-thinking/
    ├── index.md
    └── photos/
        └── ...
```

## Steps

1. **Copy `_template/`** → rename to your concept slug (lowercase, hyphens):
   ```
   cp -r src/content/concepts/_template src/content/concepts/my-concept
   ```

2. **Drop photos** into `my-concept/photos/`. Any format (jpg, png, webp). Astro optimizes at build time.

3. **Edit `index.md`** — fill in the frontmatter and write the prose:
   - `name`: Display name (e.g., "Plastification")
   - `tagline`: One-liner for the card on the homepage
   - `category`: Free-form for now (e.g., objects, civic, typography, ingenuity, urbanism, culture)
   - `date`: When you wrote/published it
   - `location`: Where observed (optional)
   - `photos`: List of photos with `src` (relative path), `caption`, and optional `featured: true` for the hero

4. **Commit and push.** The site rebuilds automatically.

## Obsidian Tips

- Open `src/content/concepts/` as your Obsidian vault root (or a subfolder of a larger vault)
- Photos render as previews in Obsidian when using relative paths
- The `---` frontmatter block is native YAML — Obsidian handles it natively
- Use the `_template/` folder as a starting point for each new entry

## Photo Guidelines

- **Original quality** — no pre-compression needed, Astro handles optimization
- **Any aspect ratio** — the site displays them in a grid with consistent sizing
- **Naming** — descriptive lowercase with hyphens: `remote-control-wrapped.jpg`
- **Hero photo** — mark one photo as `featured: true` in frontmatter; it becomes the card thumbnail
