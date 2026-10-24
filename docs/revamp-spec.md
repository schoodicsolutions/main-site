# Schoodic Site Revamp — Spec

Status: **in progress** · Started 2026-10-23

## 1. Goals

- Reposition from "local web design agency" to **Washington County's full-spectrum technology partner**: AI, ML/data, cloud infrastructure, DevOps, business workflows, and custom software.
- Look more modern and deliberate while keeping the recognizable elements: the Schoodic mark, brand blue (`#1F5CE2`), midnight navy (`#0A1534`), almond bands (`#F2F1EC`), pill buttons, two-tone headlines with blue highlights.
- No portfolio/work showcase. Sell capability, approach, and local trust.
- Leave the codebase smaller and easier to change: Svelte 5 runes, fewer dependencies, a single source of truth for services content.

### Non-goals (for now)

- Blog/CMS, case studies, team page, pricing.
- Moving off Netlify or replacing the hCaptcha + SMTP contact pipeline.

## 2. Decisions (made 2026-10-23)

| Topic | Decision |
| --- | --- |
| Brand name | **"Schoodic"** wordmark. "Schoodic Solutions" stays as the legal name in the footer/copyright and JSON-LD `legalName`. |
| Positioning | **Local-first.** Washington County / Down East Maine is the headline audience (Calais, Eastport, Machias, Lubec, …); remote clients welcome but secondary. |
| City SEO pages | **Drop.** Remove the 337 `web-design-in-*` pages and 301 them to `/`. |
| Theme | **Dark hero, light body.** Midnight hero, approach and CTA bands; light/almond content sections. No OS dark mode. |
| Work showcase | Removed entirely (section, nav item, images). |

## 3. Information architecture

```
/                         Home (single long page, anchor nav)
/services/[slug]          One page per service pillar (6)
/privacy-policy           Legal (markdown, restyled)
/terms-and-conditions     Legal (markdown, restyled)
/submit-form              POST endpoint (unchanged behaviour)
/sitemap.xml              Prerendered from routes + services data
```

Header nav: **Services · Approach · About · Contact** (Contact is the pill button).

### Service pillars

| Slug | Name | Scope (what's on the page) |
| --- | --- | --- |
| `ai-automation` | AI & Automation | LLM assistants and agents, document/intake processing, retrieval over company knowledge (RAG), AI added to existing tools, responsible-use guardrails |
| `data-ml` | Data & Machine Learning | Data pipelines and warehousing, dashboards and reporting, forecasting/classification models, data quality |
| `cloud` | Cloud Infrastructure | AWS/Azure/GCP architecture, migrations, infrastructure as code, cost optimization, managed hosting (replaces old Managed Hosting page) |
| `devops` | DevOps & Platform Engineering | CI/CD, containers, observability, backups/DR, security and compliance basics |
| `workflows` | Business Workflows & Integrations | Process automation, connecting SaaS tools (CRM, accounting, scheduling), internal tools, replacing spreadsheets |
| `software` | Custom Software & Web | Full-stack web apps, modern websites, APIs, mobile-friendly UX (absorbs Full Stack, Responsive Design, UI/UX) |

Service content lives in one typed module (`src/lib/content/services.ts`) that drives the home grid, service pages, footer links, sitemap, and contact form interest chips.

Each service page has: hero (name + one-line promise) → "What we do" (4–6 capability items) → "Typical engagements" (3 concrete scenarios relevant to local businesses) → "Tools we work with" (tag list) → related services → contact CTA.

### Redirects (`static/_redirects`, all 301)

| From | To |
| --- | --- |
| `/web-design-in-*` | `/` |
| `/full-stack`, `/responsive-design`, `/ui-ux-design` | `/services/software` |
| `/managed-hosting` | `/services/cloud` |
| `/digital-marketing`, `/search-engine-optimization` | `/` |

## 4. Home page

1. **Hero (dark).** Two-tone headline with brand-blue highlights, e.g. *"Modern **AI**, **cloud**, and **automation** for Down East Maine businesses."* Subhead: planned, built, and supported by a team in Washington County. CTAs: "Book a consultation" (Calendly), "Explore services" (ghost). Visual: the Schoodic mark as a large abstract element over a subtle grid and blue radial glow. Replaces the device-mockup image.
2. **Services grid.** "One partner for your whole technology stack." Six cards with icon, name, 1–2 line summary, and "Learn more →". Bordered cards on white, with a hover lift and an accent line.
3. **Approach (dark band).** Four steps: **Assess → Architect → Build → Operate**, each with a short description. This is the "holistic vision" section: we look at the whole business, not one tool.
4. **Why local (About).** Washington County roots, the towns we serve, in-person availability, plain-English communication, long-term support. Two columns: copy plus a "by the numbers"/principles list (no stock photo).
5. **Use cases strip.** 4–6 short, concrete "what this looks like" examples aimed at local industries (fisheries/aquaculture, healthcare, municipalities, tourism/hospitality, trades). These are illustrations, not client work.
6. **Contact (almond band).** Calendly CTA plus the contact form, with an optional "What are you interested in?" multi-select of service chips added to the email.
7. **Footer.** Wordmark, local tagline, service links (from data), general links, socials (inline SVG), legal line with "Schoodic Solutions".

## 5. Visual system

- **Color tokens** (Tailwind): keep `brand`, `croix`, `midnight`, `almond`, `bone`; add `midnight-{950,900,800,700}` shades for layered dark surfaces, `ink` for body text on light, and `line` for hairline borders. Croix becomes the glow/accent on dark surfaces.
- **Type:** Inter (variable) for headings and body, with tight tracking on display sizes; JetBrains Mono for small eyebrow labels (`// SERVICES`) to add a technical feel; Quicksand 700 kept **only** for the wordmark. Drop Source Sans Pro.
- **Headlines:** sentence case instead of ALL CAPS; keep the blue-highlight treatment.
- **Buttons:** keep pills; sentence case, slightly tighter padding, plus a new `ghost-dark` variant for dark surfaces.
- **Surfaces:** `rounded-2xl` cards, 1px borders, soft shadows on hover only. Subtle grid/dot background on dark bands.
- **Motion:** short fade-up on scroll (IntersectionObserver action); everything disabled under `prefers-reduced-motion`.
- **Icons:** one consistent outline icon set as inline SVG components (no icon library dependency).

## 6. Technical refactor

- **Svelte 5 runes** across all components (`$props`, `$state`, `$derived`, snippets, `onclick`). Replace `$app/stores` with `$app/state`.
- **Remove dependencies:** `svelte-media-queries` (CSS breakpoints instead), `svelte-scroll-nav` (native anchors + `scroll-margin` + a small active-section observer), `svelte-loading-spinners`, `@rodneylab/svelte-social-icons`, `@hubspot/api-client` (no longer used), `@fontsource/source-sans-pro`. Evaluate replacing `svelte-use-form` with native validation; check that `svelte-hcaptcha` works under Svelte 5, otherwise use a small in-house wrapper.
- **Dead code:** `Button.svelte`, `OurTeam.svelte`, the HubSpot stub in `submit-form`, the portfolio and team images, the unused icons, and `web-design-in-city.svelte` + `cities.json`.
- **Layouts:** one shared site-chrome layout (header, mobile nav, footer) instead of copies in `(main)` and `(md)`.
- **SEO:** drop the `keywords` meta spam; add `ProfessionalService` JSON-LD (Washington County `areaServed`); new OG image; a generated sitemap; and per-page titles of the form `"{Page} · Schoodic"`.
- **Analytics:** keep GTM only and remove the stray un-configured `gtag.js` include.
- **Contact email:** escape user input before building the HTML body.
- Tailwind 4 migration is **out of scope** for this pass (we stay on 3.4).

## 7. Phases

- [ ] **1 · Foundation.** Baseline build; tokens, fonts, base CSS; remove dead code and deps; shared layout; Svelte 5 Header / Nav / MobileNav / Footer / Logo (wordmark → "Schoodic"); native anchor nav.
- [ ] **2 · Home page.** Hero, services grid, approach, why-local, use cases, contact section.
- [ ] **3 · Service pages.** `services.ts` content, `/services/[slug]` template, copy for all six.
- [ ] **4 · SEO & redirects.** Remove city pages and old md services, `_redirects`, sitemap route, JSON-LD, meta cleanup, OG image.
- [ ] **5 · Polish.** Contact form refresh (runes, interest chips, escaping), legal page styling, 404 page, a11y/reduced-motion pass, Lighthouse, README.

## 8. Open questions

- Is the Calendly link (`calendly.com/schoodic`) still current?
- Do we have real numbers (years in business, uptime, response time) for the "Why local" section, or should it stay qualitative?
- Social links: keep Facebook, LinkedIn, and GitHub as they are?
