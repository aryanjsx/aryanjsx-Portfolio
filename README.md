# Aryan JSX · Portfolio

<div align="center">

**Software Engineer · Azure & DevOps · MERN Stack**

[![Live](https://img.shields.io/badge/Live-aryankr.in-00C7B7?style=for-the-badge&logo=link)](https://www.aryankr.in)
[![Netlify](https://img.shields.io/badge/Netlify-aryankr-00C7B7?style=for-the-badge&logo=netlify)](https://aryankr.in)
[![GitHub](https://img.shields.io/badge/GitHub-aryanjsx-181717?style=for-the-badge&logo=github)](https://github.com/aryanjsx)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-aryanjsx-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/aryanjsx)
[![Node](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)

*A modern, responsive portfolio with entity SEO, Knowledge Graph signals, and media ownership verification.*

</div>

---

## About

Portfolio and **Entity Home Page** for **Aryan JSX** (`aryanjsx`) — Software Engineer at LTIMindtree, Azure & DevOps enthusiast, creator of [Rajya Tourism](https://github.com/aryanjsx) and npm packages. Built with React, optimized for search and identity discovery.

---

## Features

### Design & experience

| Feature | Description |
|--------|-------------|
| **Themes** | Dark & light mode with smooth transitions |
| **Splash** | Custom animated splash on first visit |
| **Responsive** | Mobile-first, works on all devices |
| **Animations** | Scroll reveals and page transitions (React Awesome Reveal) |

### Pages

- **Home** — Hero, skills, and call-to-action
- **Education** — Timeline, degrees, certifications
- **Experience** — Work history with filter tabs (All / Internships / Jobs)
- **Projects** — Repos, npm packages, tech tags, links
- **Contact** — Social links, availability, blog

### SEO & identity

- **Entity Home Page** ([`/entity.html`](https://aryankr.in/entity.html)) — Central hub for the aryanjsx identity; sameAs, knowsAbout, subjectOf
- **Image ownership** ([`/image-ownership.html`](https://aryankr.in/image-ownership.html)) — Media verification page with ImageObject schema
- **JSON-LD** — Person, WebSite, ProfilePage, SocialMediaPosting, ImageObject, Organization, BreadcrumbList
- **Sitemaps** — Sitemap index, pages sitemap, image sitemap for Google Images
- **Meta** — Open Graph, Twitter Cards, canonical, `rel="me"` for X/Twitter
- **Structured data** — Optimized for “aryanjsx” search and Knowledge Graph

---

## Tech stack

**Frontend:** React 18 · React Router v6 · Styled Components · React Helmet Async · React Awesome Reveal · React Icons  

**Tooling:** Webpack 5 (CRA) · ESLint · Prettier · Husky

---

## Project structure

```
aryanjsx-Portfolio/
├── public/
│   ├── index.html              # Main app + JSON-LD (Person, WebSite, etc.)
│   ├── entity.html             # Entity Home Page (EHP)
│   ├── image-ownership.html    # Image ownership verification
│   ├── sitemap.xml             # Page URLs sitemap
│   ├── image-sitemap.xml       # Image URLs (aryanjsx-*)
│   ├── robots.txt
│   └── manifest.json
├── src/
│   ├── components/             # Header, Footer, SEO
│   ├── containers/             # Greeting, Skills, Main
│   ├── pages/                  # Home, Education, Experience, Projects, Contact, Splash
│   ├── portfolio.js           # Data: profile, socials, skills, education, experience, projects
│   ├── theme.js                # Dark/light theme
│   └── App.js
├── generate-sitemap.js         # Pages sitemap
├── generate-image-sitemap.js  # Image sitemap
├── vercel.json                 # Vercel rewrites for SPA routing
└── package.json
```

---

## Quick start

**Prerequisites:** Node.js ≥ 18, npm ≥ 8

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

**Scripts:**

| Script | Description |
|--------|-------------|
| `npm start` | Dev server |
| `npm run build` | Production build (runs sitemap generation) |
| `npm run generate:sitemap` | Generate pages sitemap |
| `npm run generate:sitemap-images` | Generate image sitemap |
| `npm run deploy` | Build + deploy to GitHub Pages (gh-pages) |

---

## Configuration

- **Profile & content:** Edit `src/portfolio.js` (name, socials, skills, education, experience, projects).
- **Themes:** Edit `src/theme.js` for dark/light colors.
- **Entity/ownership:** Update `public/entity.html` and `public/image-ownership.html` if you change identity URLs or image lists.

---

## Links

| Platform | Handle |
|----------|--------|
| **Website** | [aryankr.in](https://www.aryankr.in) · [aryankr.in](https://aryankr.in) |
| **GitHub** | [aryanjsx](https://github.com/aryanjsx) |
| **LinkedIn** | [aryanjsx](https://www.linkedin.com/in/aryanjsx) |
| **X (Twitter)** | [aryanjsx](https://x.com/aryanjsx) |
| **Instagram** | [aryanjsx](https://instagram.com/aryanjsx) |
| **Medium** | [@aryanjsx](https://medium.com/@aryanjsx) |
| **Dev.to** | [aryanjsx](https://dev.to/aryanjsx) |
| **LeetCode** | [aryanjsx](https://leetcode.com/aryanjsx) |
| **HackerRank** | [aryanjsx](https://www.hackerrank.com/aryanjsx) |
| **npm** | [aryanjsx](https://www.npmjs.com/aryanjsx) |
| **Docker Hub** | [aryanjsx](https://hub.docker.com/u/aryanjsx) |

---

## License

[MIT](LICENSE)

<div align="center">

**Aryan JSX** · [aryankr.in](https://www.aryankr.in)

</div>
