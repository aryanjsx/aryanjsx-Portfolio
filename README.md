# Aryan JSX · Portfolio

<div align="center">

**Software Engineer · Azure & DevOps · MERN Stack**

[![Live](https://img.shields.io/badge/Live-aryankr.in-00C7B7?style=for-the-badge&logo=link)](https://www.aryankr.in)
[![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?style=for-the-badge&logo=vercel)](https://aryankr.in)
[![GitHub](https://img.shields.io/badge/GitHub-aryanjsx-181717?style=for-the-badge&logo=github)](https://github.com/aryanjsx)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-aryanjsx-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/aryanjsx)
[![Node](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)

*A modern, responsive portfolio with entity SEO, Knowledge Graph signals, and media ownership verification.*

</div>

---

## About

Portfolio and **Entity Home Page** for **Aryan JSX** (`aryanjsx`) — Software Engineer at LTIMindtree, Azure & DevOps enthusiast, creator of npm packages. Built with React, optimized for search and identity discovery.

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 18, React Router v6, Styled Components, React Helmet Async |
| **Animations** | React Awesome Reveal, React Icons |
| **Tooling** | Webpack 5 (CRA), ESLint, Prettier, Husky, lint-staged |
| **Deployment** | Vercel (with serverless sitemap API) |
| **SEO** | JSON-LD, Open Graph, Twitter Cards, Sitemaps |

---

## Features

### Design & Experience

| Feature | Description |
|---------|-------------|
| **Themes** | Dark & light mode with smooth transitions |
| **Splash** | Custom animated splash on first visit |
| **Responsive** | Mobile-first, works on all devices |
| **Animations** | Scroll reveals and page transitions |

### Pages

- **Home** — Hero, skills, and call-to-action
- **Education** — Timeline, degrees, certifications
- **Experience** — Work history with filter tabs (All / Internships / Jobs)
- **Projects** — Repos, npm packages, tech tags, links
- **Contact** — Social links, availability, blog

### SEO & Identity

- **Entity Home Page** ([`/entity.html`](https://aryankr.in/entity.html)) — Central hub for the aryanjsx identity
- **Image Ownership** ([`/image-ownership.html`](https://aryankr.in/image-ownership.html)) — Media verification page
- **JSON-LD** — Person, WebSite, ProfilePage, ImageObject
- **Sitemaps** — Pages sitemap + image sitemap
- **Meta** — Open Graph, Twitter Cards, canonical, `rel="me"` for X/Twitter

---

## Project Structure

```
aryanjsx-Portfolio/
├── public/
│   ├── index.html              # Main app + JSON-LD (Person, WebSite)
│   ├── entity.html             # Entity Home Page (EHP)
│   ├── image-ownership.html    # Image ownership verification
│   ├── sitemap.xml             # Page URLs sitemap
│   ├── image-sitemap.xml       # Image URLs
│   ├── robots.txt
│   └── manifest.json
├── src/
│   ├── assets/                 # Fonts, images, Font Awesome
│   ├── components/             # Header, Footer, SEO, SocialMedia, SoftwareSkill
│   ├── containers/             # Greeting, Skills, Main (router)
│   ├── pages/                  # Home, Education, Experience, Projects, Contact, Splash
│   ├── utils/                  # Utility functions
│   ├── portfolio.js            # Data: profile, socials, skills, education, experience, projects
│   ├── theme.js                # Dark/light theme definitions
│   └── App.js                  # Root component with ThemeProvider
├── api/
│   └── sitemap.js              # Vercel serverless sitemap endpoint
├── generate-sitemap.js         # Static sitemap generator (prebuild)
├── vercel.json                 # Vercel config: rewrites, security headers
└── package.json
```

---

## Quick Start

**Prerequisites:** Node.js >= 18, npm >= 8

```bash
git clone https://github.com/aryanjsx/aryanjsx-Portfolio.git
cd aryanjsx-Portfolio
npm install
npm start
```

Runs at [http://localhost:3000](http://localhost:3000).

**Production build:**

```bash
npm run build
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Development server |
| `npm run build` | Production build (auto-generates sitemap) |
| `npm run generate:sitemap` | Regenerate pages sitemap |
| `npm test` | Run tests |

---

## Configuration

- **Profile & content:** Edit `src/portfolio.js` (name, socials, skills, education, experience, projects).
- **Themes:** Edit `src/theme.js` for dark/light colors.
- **Entity/Ownership:** Update `public/entity.html` and `public/image-ownership.html` for identity URLs or image lists.
- **Environment:** Copy `.env.example` to `.env` and set any required variables.

---

## Environment Variables

See `.env.example` for the full list. Currently the app uses Google Tag Manager (GTM ID is hardcoded in `index.js` and `public/index.html`).

---

## Deployment

Deployed on **Vercel**. The `vercel.json` configures:

- SPA rewrites (all routes → `index.html`)
- Security headers (HSTS, CSP, X-Frame-Options)
- Serverless sitemap endpoint at `/api/sitemap`

---

## License

[MIT](LICENSE)

<div align="center">

**Aryan Kumar (aryanjsx)** · [aryankr.in](https://www.aryankr.in)

</div>
