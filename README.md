# Leo Club of Kalubowila — website

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

**Design concept: *Care Ledger*.** The club's work is presented plainly and
numerically — so the site is built like a clean annual record, not a
brochure. Projects live in a **real `<table>`** with a Date/Project/Category
layout; statistics are the primary content, not a decorative band. The
palette (Deep Teal, Teal, Silver) is the club's own brand colour, which
matched this concept closely enough that the design didn't need to change
once real content arrived.

One of eleven independently designed club sites in Leo District 306 D2. It
shares no design code with the others; only `lib/` is common.

---

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
npm run lint
```

Node 20.9+ required.

---

## Where things live

| Path | What it is |
|---|---|
| `app/` | Routes, layout, metadata, sitemap, robots |
| `app/globals.css` | **The entire design system** — palette, table, type, motion |
| `components/` | Components bespoke to this club |
| `content/` | All club content. Normal edits touch only this |
| `lib/` | Domain types, utilities, hooks. Identical across all eleven clubs |

---

## The design system

Tokens live in the `@theme` block at the top of `app/globals.css`, named by
**role** rather than hue.

| Token | Value | Used for |
|---|---|---|
| `--color-page` | `#ffffff` | Page ground |
| `--color-panel` | `#f2f5f5` | Alternate bands, row hover |
| `--color-ink` | `#0c2323` | Text, heavy rules |
| `--color-accent` | `#057a7a` | Links, buttons — the club's brand Teal |
| `--color-accent-strong` | `#023131` | Hover/active state — brand Deep Teal |
| `--color-inverse` | `#023131` | Closing band |

Type: Inter Tight (headings) + IBM Plex Sans (body), self-hosted via
`next/font`. Plex was chosen for its tabular figures — this site's central
component is a table of numbers.

Every `td`, `th` and `dd` gets `font-variant-numeric: tabular-nums` in the base
layer, so columns of figures always line up.

### The ledger

`components/LedgerTable.tsx` is a genuine `<table>` with `<th scope="col">`
headers and a `<caption>`, listing every project by Date, Project and
Category. It sits inside `.ledger-scroll` so a wide table scrolls itself on a
phone rather than pushing the page sideways.

An earlier draft of this site scored projects by reach/cost/hours — the club
does not currently report those figures per project, so the table was
simplified rather than filled with invented numbers.

---

## Editing content

### Add a project

Append to `content/projects.ts`. `category` must be one of the values in
`categoryLabel` in `components/LedgerTable.tsx` (add a new one there too if
you introduce a category). `impact` is optional free-form highlight stats —
not tied to fixed table columns:

```ts
{
  id: 'ward-linen',
  slug: 'ward-linen',
  title: 'Ward Linen',
  summary: 'One sentence for the ledger row.',
  story: ['Paragraph one.', 'Paragraph two.'],
  category: 'health',
  year: '2026/27',
  date: '2027-01-12',
  featured: true,
  heroImage: { src: '/images/projects/ward-linen/hero.jpg',
               alt: 'Describe what is happening', width: 2200, height: 1238 },
  gallery: [
    { src: '/images/projects/ward-linen/g1.jpg', alt: 'Describe the photo', width: 900, height: 1600 },
  ],
  impact: [{ id: 'linens', value: 100, label: 'Linens donated' }],
}
```

### Add a board member

Append to `content/board.ts`. Ordering is automatic from `rank`.

### Add images

Use real `width`/`height` — those two fields stop the page jumping as images
load. `.jpg`/`.webp` only; **HEIC does not render in browsers.**

---

## Standards this site holds to

- One `<h1>` per page; per-route `<title>`, description, canonical and OG tags.
- Every image through `next/image` inside an aspect-ratio box, with `alt`.
- Keyboard-operable menu: `aria-expanded`/`aria-controls`, Escape closes and
  returns focus, visible focus ring, skip-to-content link.
- `prefers-reduced-motion` respected; all content readable with JavaScript off.
- `typedRoutes` on — a link to a route that does not exist **fails the build**.
- `images.remotePatterns` deliberately empty.
- Joining routes to the club's real Google Form
  (`https://forms.gle/fWkLYHQM4p6fkqS96`); `JoinForm` is kept as a secondary
  "have a question first" contact path, not the membership pathway.

---

## Deploying

Every route prerenders. Set `siteUrl` in `content/club.ts`, then
`npm run build && npm start`.

## Outstanding content

This site now runs on real data from the club's Project Web Weavers
submission, with real photography for the logo, hero, thirteen officers and
three of the four 2026/27 projects. What's still missing rather than
fabricated:

- **3 of 16 board members** (Chief Editor, one Project Director, and the
  Lion Advisor) have no photo on file — they render the `getInitials`
  monogram fallback in `Photo`/board cards instead of an image.
- **Hot Takes FC — FIFA '26** has no photograph; it uses the shared
  `/images/projects/placeholder.png`.
- **Meeting day, time and venue** were left blank on the submission form and
  are not shown rather than guessed.
- The **2018/19** president is missing from `content/past-presidents.ts` (a
  gap in the source data), and **2013/14** is recorded with no name.
- District-convention submission categories (e.g. "Best Project for Hunger")
  are noted in project `story` text as *submitted in the category of…*, not
  claimed as wins — the form doesn't state an outcome for them. The one
  confirmed award lives in `content/achievements.ts`.

`scripts_resize.py`, `scripts_officers2.py` and `scripts_map.py` in the
project root are one-off Pillow scripts used to process source photos into
`public/images/` (the second batch of officer photos, and the district map
recoloured from the D2 district site's gold to this club's teal,
respectively); none are part of the app and all are safe to delete.
