# Sifat Buxgalter — accounting outsourcing site (RU / UZ)

Marketing site for an accounting-outsourcing firm in Tashkent. Frontend only:
Next.js 16 (App Router, Turbopack) · Tailwind CSS 4 · Flowbite React ·
next-intl · next-themes · framer-motion.

```bash
npm install
npm run dev              # http://localhost:3000 → redirects to /ru or /uz
npm run build && npm start
npm run lint && npm run typecheck && npm run check:messages
```

## Pages

| Route                 | What it is                                                              |
| --------------------- | ----------------------------------------------------------------------- |
| `/[locale]`           | Home — the 17 blocks of the brief (§6), in order                        |
| `/[locale]/services`  | Services hub: 3-way router (all fine / notice or blocked / high taxes) + all 5 services |
| `/[locale]/contact`   | "What happens in 10 minutes" (not a sales call) + form + office with map |
| `/[locale]/thank-you` | After a lead: recall 3 facts before the call (noindex)                   |

Locales are `ru` (default) and `uz` (Latin, with the official `ʻ`/`ʼ`).

Light and dark themes: the visitor's OS setting decides until they press the
toggle in the header (or footer); the choice is then remembered. Every colour is
a token in `app/globals.css` (`:root` for light, `.dark` for dark), so a new
component that uses `bg-paper`, `text-ink`, `bg-card`… gets both themes for free.
Use `bg-night` / `text-on-night` for surfaces that stay dark in both themes, and
`text-night` for text on gold.

## Where things live

```
messages/ru.json, uz.json   all copy — ru.json is the reference shape
lib/site.ts                 brand name, phones, Telegram, Instagram, office pin + map links
lib/lead.ts                 where a lead leaves the browser (see below)
lib/clients.ts              the 12 client logos (files in public/clients/, trimmed to the artwork)
public/brand/logo.png       the original logo; components/site/Logo.tsx redraws its mark as SVG
components/site/Theme.tsx   theme provider and the light/dark toggle
components/sections/        one file per home-page block
components/motion/          Reveal, Heading, Odometer, Tilt, Magnetic, scroll effects
components/flowbiteTheme.ts Flowbite restyled onto the ivory / ink / gold tokens
app/globals.css             design tokens, type scale, all CSS animations
```

Copy rules from the brief are baked into the messages (express-audit, report
for the director, "we respond within 10 minutes", 24/7 incl. Sat & Sun, no
prices, no "replace your accountant", no Didox). `<em>…</em>` in a heading marks
the gold italic accent. Non-breaking spaces are added automatically
(`lib/typograph.ts`), so don't type them into the JSON.

## Leads (frontend only)

There is no backend. Every form calls `submitLead()` in `lib/lead.ts`, which
POSTs JSON to `NEXT_PUBLIC_LEAD_ENDPOINT` — a CRM webhook, a Telegram bot, your
own API:

```json
{ "name": "…", "phone": "+998901234567", "company": "…", "turnover": "…",
  "source": "hero | form | modal | contact | services", "locale": "ru", "page": "https://…" }
```

**Until that variable is set, leads are not sent anywhere** — the visitor still
reaches the thank-you page and the console logs a warning.

## Environment

Copy `.env.example` to `.env.local`:

- `NEXT_PUBLIC_SITE_URL` — production origin, used for canonical and hreflang links
- `NEXT_PUBLIC_LEAD_ENDPOINT` — where leads are POSTed

## Before launch

- [ ] Chief accountant photo — the card shows a monogram (`components/sections/Expert.tsx`)
- [ ] `NEXT_PUBLIC_LEAD_ENDPOINT` and `NEXT_PUBLIC_SITE_URL`
- [ ] Service detail pages — the hub links to `/services#<service>`; per-service pages are not built yet

## Responsive

Laid out for 320px phones up to wide desktops (checked at 13 widths, 320–1920,
in both languages, with no horizontal scroll). Where layouts change:

- header: full navigation from 1280px; RU/UZ in the header from 375px, in the
  menu below that
- hero: two columns from 1024px; the Telegram bubble shows from 1280px
- comparison: a table from 1024px, cards (two per row on tablets) below
- services: the 12-column bento from 1280px, two columns on tablets

## Motion

Brief (§8): fade-up reveal, count-up stats (as rolling odometers), pulsing badge
dot, logo marquee, card tilt with gold rim, sliding button arrows. Added: word-by-
word headline reveals, the hero report card that fills itself in (rows, chart
line, stamp, Telegram reply), drifting gold aurora, scroll-lit manifest, gold
scroll progress bar, timelines that fill on scroll, magnetic primary buttons,
light sheen on hover, floating glass header, slow-turning gold rings, and a
theme switch that spreads the new theme in a circle from the toggle.

All of it is decoration over content that is already visible: without
JavaScript the page renders complete, and `prefers-reduced-motion` switches the
motion off.
