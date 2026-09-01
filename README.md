# Leo Club of Kalubowila — website

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

**Design concept: *Care Ledger*.** Kalubowila is a teaching-hospital
neighbourhood and the club's work is clinical, counted and reported — so the
site is built like an annual report, not a brochure. Projects live in a **real
`<table>`** with right-aligned figures; statistics are the primary content, not
a decorative band.

The editorial discipline: no adjective where a number would do. If a claim
cannot be counted, it does not go on the page.

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
| `--color-panel` | `#f3f7f7` | Alternate bands, row hover |
| `--color-ink` | `#10262a` | Text, heavy rules |
| `--color-accent` | `#0f5257` | Links, buttons — teal carries interaction |
| `--color-flag` | `#c9503f` | A figure needing attention. **Sparingly** |
| `--color-inverse` | `#0f3d41` | Closing band |

Type: Inter Tight (headings) + IBM Plex Sans (body), self-hosted via
`next/font`. Plex was chosen for its tabular figures — this site's central
component is a table of numbers.

Every `td`, `th` and `dd` gets `font-variant-numeric: tabular-nums` in the base
layer, so columns of figures always line up.

### The ledger

`components/LedgerTable.tsx` is a genuine `<table>` with `<th scope="col">`
headers and a `<caption>`, because this really is tabular data — the club's whole
method is that figures can be compared down a column. It sits inside
`.ledger-scroll` so a wide table scrolls itself on a phone rather than pushing
the page sideways.

A project missing its `hours` figure renders a **flagged em-dash**, so an
unreported project is visibly unreported rather than silently blank.

---

## Editing content

### Add a project

Append to `content/projects.ts`. The ledger reads `impact` entries by **id** —
`reach`, `cost` and `hours` are the three columns, so use those ids:

```ts
{
  id: 'ward-linen',
  slug: 'ward-linen',
  title: 'Ward Linen',
  summary: 'One sentence for the ledger row.',
  story: ['Paragraph one.', 'Paragraph two.'],
  category: 'health',
  year: '2025/26',
  date: '2026-01-12',
  location: 'Colombo South Teaching Hospital',
  featured: true,
  heroImage: { src: '/images/projects/ward-linen.jpg',
               alt: 'Describe what is happening', width: 1600, height: 1000 },
  impact: [
    { id: 'reach', value: 240, label: 'People reached' },
    { id: 'cost',  value: 186000, prefix: 'Rs ', label: 'Total cost' },
    { id: 'hours', value: 320, label: 'Volunteer hours' },
  ],
}
```

Projects that fell short stay in the table — that is the club's stated rule, and
`exam-support` is the worked example of it.

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
- The membership form composes a real pre-filled email.
- The footer carries a **basis of preparation** note explaining how reach, hours
  and costs were counted. Keep it accurate if the method changes.

---

## Deploying

Every route prerenders. Set `siteUrl` in `content/club.ts`, then
`npm run build && npm start`.

## Outstanding content

Everything marked `TODO(content)` needs real values. Images in `public/images/`
are generated solid-colour placeholders. The site renders correctly while these
are incomplete.
