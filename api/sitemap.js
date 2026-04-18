const SITE_URL = "https://aryankr.in";

const routes = [
  { path: "/", changefreq: "weekly", priority: "1.0", image: true },
  { path: "/home", changefreq: "weekly", priority: "0.9" },
  { path: "/experience", changefreq: "monthly", priority: "0.8" },
  { path: "/education", changefreq: "monthly", priority: "0.8" },
  { path: "/projects", changefreq: "weekly", priority: "0.9" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/splash", changefreq: "yearly", priority: "0.5" },
  { path: "/entity.html", changefreq: "monthly", priority: "0.9" },
  { path: "/image-ownership.html", changefreq: "monthly", priority: "0.8" },
];

function escapeXml(unsafe) {
  if (unsafe === null || unsafe === undefined) return "";
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

module.exports = (req, res) => {
  const today = new Date().toISOString().split("T")[0];

  const urlEntries = routes.map((route) => {
    const loc = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;
    let entry = `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>`;
    if (route.image && route.path === "/") {
      entry += `
    <image:image>
      <image:loc>${escapeXml(`${SITE_URL}/logo.png`)}</image:loc>
      <image:title>Aryan Kumar (AryanJSX) — Software Engineer &amp; Full Stack Developer Portfolio</image:title>
      <image:caption>Aryan Kumar aka AryanJSX portfolio — Software Engineer, Full Stack Developer</image:caption>
    </image:image>`;
    }
    entry += `
  </url>`;
    return entry;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

${urlEntries.join("\n\n")}

</urlset>
`;

  res.setHeader("Content-Type", "application/xml; charset=UTF-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.status(200).send(xml);
};
