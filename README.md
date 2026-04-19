# Aryan JSX · Portfolio

<div align="center">

**Software Engineer · Gen AI Developer · Full-Stack Engineer**

[![Live](https://img.shields.io/badge/Live-aryankr.in-00C7B7?style=for-the-badge&logo=link)](https://www.aryankr.in)
[![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?style=for-the-badge&logo=vercel)](https://aryankr.in)
[![GitHub](https://img.shields.io/badge/GitHub-aryanjsx-181717?style=for-the-badge&logo=github)](https://github.com/aryanjsx)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-aryanjsx-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/aryanjsx)
[![Node](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)

*A modern, responsive developer portfolio built with Next.js App Router, featuring entity SEO, dynamic content, and Knowledge Graph signals.*

</div>

---

## About

Portfolio and **Entity Home Page** for **Aryan Kumar** (`aryanjsx`) — Software Engineer at LTIMindtree, Gen AI & DevOps enthusiast, creator of npm and PyPI packages. Built with Next.js 16 (App Router), React 19, and TypeScript, optimized for performance, search, and identity discovery.

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | Next.js 16 (App Router), React 19, TypeScript |
| **Styling** | CSS Modules, Styled Components, Google Sans fonts |
| **Animations** | React Awesome Reveal |
| **Icons** | Iconify, React Icons |
| **Testing** | Jest 30, React Testing Library |
| **Tooling** | ESLint 9, Prettier, next-sitemap |
| **Deployment** | Vercel (with serverless sitemap API) |
| **SEO** | JSON-LD, Open Graph, Twitter Cards, Sitemaps |

---

## Features

### Design & Experience

| Feature | Description |
|---------|-------------|
| **Themes** | Dark & light mode with smooth transitions and localStorage persistence |
| **Splash** | Custom animated splash screen on first visit |
| **Responsive** | Mobile-first, works on all devices |
| **Animations** | Scroll reveals and page transitions |
| **Typewriter** | Rotating role titles on the hero section |

### Pages

- **Home** — Hero with typewriter effect, auto-calculated stats (experience, projects, technologies), skills, and call-to-action
- **Education** — Degrees timeline and certifications with verification links
- **Experience** — Work history with filter tabs (All / Internships / Jobs) and auto-calculated durations
- **Projects** — Repos with tech tags, links, and dynamic project pages (`/projects/[slug]`)
- **Developer** — GitHub activity, npm & PyPI packages, technical writing, and currently building
- **Contact** — Social links, availability, and blog

### SEO & Identity

- **Entity Home Page** ([`/entity.html`](https://aryankr.in/entity.html)) — Central hub for the aryanjsx identity
- **Image Ownership** ([`/image-ownership.html`](https://aryankr.in/image-ownership.html)) — Media verification page
- **JSON-LD** — Person, WebSite structured data
- **Sitemaps** — Auto-generated pages sitemap + image sitemap via next-sitemap
- **Meta** — Open Graph, Twitter Cards, canonical URLs, `rel="me"` links
- **Brand SEO** — Hidden semantic markup for search engine identity signals

---

## Project Structure

```
aryanjsx-Portfolio/
├── app/                        # Next.js App Router pages
│   ├── layout.js               # Root layout with metadata, fonts, JSON-LD
│   ├── page.js                 # Home page
│   ├── Providers.js            # Theme + styled-components providers
│   ├── contact/                # Contact page
│   ├── developer/              # Developer page (GitHub, npm, blog)
│   ├── education/              # Education page
│   ├── experience/             # Experience page
│   └── projects/               # Projects page + dynamic [slug] routes
├── src/
│   ├── assets/                 # SVG illustrations
│   ├── components/             # Reusable components (Header, Footer, SEO, UI)
│   ├── containers/             # Page sections (Greeting, Skills)
│   ├── context/                # ThemeContext provider
│   ├── data/                   # Content data files (experience, projects, skills, etc.)
│   ├── styles/                 # Global CSS and page-specific styles
│   ├── types/                  # TypeScript type definitions
│   └── utils/                  # Utility functions (structured data, sorting, styles)
├── api/
│   └── sitemap.js              # Vercel serverless sitemap endpoint
├── public/                     # Static assets (fonts, images, PDFs, sitemaps)
├── next.config.js              # Next.js configuration
├── next-sitemap.config.js      # Sitemap generation config
├── jest.config.js              # Jest test configuration
├── tsconfig.json               # TypeScript configuration
├── vercel.json                 # Vercel config: rewrites, security headers
└── package.json
```

---

## Quick Start

**Prerequisites:** Node.js >= 20, npm >= 8

```bash
git clone https://github.com/aryanjsx/aryanjsx-Portfolio.git
cd aryanjsx-Portfolio
npm install
npm run dev
```

Runs at [http://localhost:3000](http://localhost:3000).

**Production build:**

```bash
npm run build
npm start
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build (auto-generates sitemap via postbuild) |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix lint issues |
| `npm test` | Run tests |
| `npm run test:ci` | Run tests with coverage (CI mode) |
| `npm run analyze` | Bundle analysis |

---

## Configuration

- **Content data:** Edit files in `src/data/` — experience, projects, skills, education, greeting, contact, etc.
- **Themes:** Edit `src/context/ThemeContext.js` for dark/light color definitions.
- **SEO metadata:** Edit `app/layout.js` for global metadata, or individual `page.js` files for per-page metadata using `generatePageMetadata`.
- **Structured data:** Edit `src/utils/structuredData.js` for JSON-LD schemas.
- **Entity/Ownership:** Update `public/entity.html` and `public/image-ownership.html` for identity URLs or image lists.

---

## Deployment

Deployed on **Vercel**. The `vercel.json` configures:

- Security headers (HSTS, CSP, X-Frame-Options)
- Serverless sitemap endpoint at `/api/sitemap`

---

## License

[MIT](LICENSE)

<div align="center">

**Aryan Kumar (aryanjsx)** · [aryankr.in](https://www.aryankr.in)

</div>
