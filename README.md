# Schoodic

Marketing site for [Schoodic](https://schoodic.io), a technology consultancy in Washington County, Maine that offers AI, data and machine learning, cloud infrastructure, DevOps, business workflow automation, and custom software.

Built with [SvelteKit 2](https://svelte.dev/docs/kit) (Svelte 5 runes), Tailwind CSS 3, and mdsvex. Hosted on Netlify. Every page is prerendered except the contact form endpoint.

## Getting started

```bash
npm install
cp .env.example .env   # optional, see "Environment variables" below
npm run dev            # http://localhost:5173
```

The site runs without a `.env`. You only need real values to actually send contact form submissions.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build (prerenders every page into `build/`) |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Type-check Svelte and TypeScript |
| `npm run format` | Format everything with Prettier |

## Environment variables

See [`.env.example`](.env.example). On Netlify, set these under **Site configuration → Environment variables**.

| Variable | When it's read | Purpose |
| --- | --- | --- |
| `PUBLIC_HCAPTCHA_SITEKEY` | **Build time** (inlined by `vite.config.js`) | hCaptcha widget site key. If it's missing, the build still succeeds but the captcha won't render. |
| `HCAPTCHA_SECRET_KEY` | Runtime | Verifies captcha tokens on the server |
| `HCAPTCHA_VERIFY_API` | Runtime | Optional; defaults to `https://api.hcaptcha.com/siteverify` |
| `SMTP_SERVER`, `SMTP_PORT`, `SMTP_USERNAME`, `SMTP_PASSWORD` | Runtime | Outgoing mail server (LOGIN auth) |
| `SMTP_FROM` | Runtime | Address the email is sent **from**. It must be one your SMTP account can send as. |
| `SMTP_RCPT` | Runtime | Where submissions are delivered |
| `SMTP_SUBJECT` | Runtime | Subject line for submissions |

For local testing, hCaptcha's test keys work: site key `10000000-ffff-ffff-ffff-000000000001`, secret `0x0000000000000000000000000000000000000000`.

## Editing content

Most copy lives in plain TypeScript, so you rarely need to touch the components.

| What | Where |
| --- | --- |
| Business name, tagline, description, Calendly link, towns served, social links | `src/lib/content/site.ts` |
| The six services: card summary, SEO title and description, headline, capabilities, typical projects, tools, FAQs | `src/lib/content/services.ts` |
| Home page FAQ | `src/lib/content/faqs.ts` |
| Home page sections (hero, approach, about, use cases, contact) | `src/lib/home/*.svelte` |
| Privacy policy and terms | `src/routes/(md)/*.md` (Markdown with `title`/`description` front matter) |
| Header nav items | `mainNav` in `src/lib/content/site.ts` |

`services.ts` is the single source of truth for services. Adding, removing, or renaming one there updates the home grid, the `/services/[slug]` pages, the footer, the contact form's interest chips, the sitemap, and the structured data. Each service needs an `icon` from `src/lib/Icon.svelte`; add a path there if you need a new one.

A new Markdown file in `src/routes/(md)/` becomes a page at `/<filename>` and is added to the sitemap automatically.

## Project layout

```
src/
  app.css                 Tailwind layers: base type, buttons, forms, prose
  lib/
    content/              Site copy and data (see above)
    home/                 Home page sections
    seo/schema.ts         schema.org JSON-LD builders
    actions/              reveal (scroll fade-in), trapFocus (mobile menu)
    Meta.svelte           <title>, meta/OG/Twitter tags, JSON-LD for every page
    Header, Nav, Footer   Site chrome (shared by every page via the root layout)
    ContactForm.svelte    Contact form (posts to /submit-form)
    HCaptcha.svelte       Lazy-loading hCaptcha wrapper
    Icon.svelte           Inline SVG icon set
  routes/
    +layout.svelte        Root layout: chrome, skip link, GTM, font preload
    (main)/               Home page and /services/[slug]
    (md)/                 Markdown pages (legal)
    submit-form/          Contact form action (validation, hCaptcha, SMTP)
    sitemap.xml/          Generated sitemap
static/
  _redirects              Netlify 301s for retired URLs
  robots.txt
  assets/social/og.png    Social share image (1200×630)
docs/revamp-spec.md       Design and content spec for the 2026 redesign
```

## Design system

Colors and fonts are defined in `tailwind.config.cjs`:

- **Colors:** `brand` (#1F5CE2, with `brand-dark` for hover), `midnight` (#0A1534, with 950–700 shades for dark surfaces), `almond` (light section bands), `ink` (body text), `line` (borders), and `sky` (#3B8BFF, accent text on dark backgrounds; `croix` is too dim for small text there).
- **Type:** Inter for everything, JetBrains Mono for the small `// eyebrow` labels, and Quicksand only for the logo wordmark.
- **Dark sections:** wrap them in `.surface-dark`, and `.eyebrow`, `.highlight`, and `.text-muted` switch to their dark-background colors automatically.
- **Contrast:** all text/background pairs meet WCAG AA. Re-check contrast when you introduce a new color or opacity.

## SEO

- **Titles and descriptions** come from each page's `load` function. Service pages use `seoTitle` and `seoDescription` from `services.ts`; keep titles under about 60 characters including the ` · Schoodic` suffix.
- **Structured data:** every page outputs a linked JSON-LD graph (Organization/ProfessionalService, WebSite, WebPage). Service pages add Service, FAQPage, and BreadcrumbList, and the home page adds FAQPage. A page can contribute extra nodes by returning `schema: [...]` from its `load`.
- **Sitemap and robots:** `/sitemap.xml` is generated at build time. `robots.txt` points to it.
- **Redirects:** retired URLs (the old service pages and the `web-design-in-*` city pages) 301 to their replacements via `static/_redirects`.
- **Canonical URLs** use `site.url` (`https://schoodic.io`), not the request host.

## Performance notes

- **hCaptcha** (~300 KB plus a third-party cookie) only loads when the contact form comes within about 600px of the viewport.
- **Google Tag Manager** starts after the page has loaded and gone idle.
- **CSS** is inlined into each page (`inlineStyleThreshold` in `svelte.config.js`), and the Inter Latin font is preloaded.

Most of the remaining mobile Lighthouse cost is Google Tag Manager and GA4.

## Deploying

Netlify builds with `npm run build` and publishes `build/` (see `netlify.toml`). `@sveltejs/adapter-netlify` generates the function for `/submit-form`. Everything else is static.

Before the first deploy of a new environment, make sure `PUBLIC_HCAPTCHA_SITEKEY` is available to **builds** and the remaining variables are available to **functions**.

## Known issues

- `npm run lint` is broken. ESLint 9 requires a flat config (`eslint.config.js`), and the repo still has the legacy `.eslintrc.cjs`. Prettier also warns about the obsolete `pluginSearchDirs` option in `.prettierrc` and the `lint`/`format` scripts. `npm run check` and `npm run format` still work.
