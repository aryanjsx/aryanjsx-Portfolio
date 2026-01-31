/**
 * Smart Image Sitemap Generator (aryanjsx edition)
 *
 *  - Scans /public and /src/assets/images
 *  - Fetches latest images from social media (GitHub, X, Instagram, LinkedIn)
 *  - Combines them into sitemap-images.xml for Google indexing
 */

const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const SITE_URL = "https://www.aryankr.in";
const OUTPUT_FILE = path.join(__dirname, "public", "sitemap-images.xml");

// ====================
// Local image collector
// ====================
function getLocalImages(dir, baseUrl) {
  let images = [];
  if (!fs.existsSync(dir)) return images;
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      images = images.concat(getLocalImages(fullPath, baseUrl));
    } else if (/\.(jpg|jpeg|png|webp|gif)$/i.test(file)) {
      const relativePath =
        fullPath.split("public")[1] || fullPath.split("src/assets")[1];
      const imageUrl = `${baseUrl}${relativePath.replace(/\\/g, "/")}`;
      images.push(imageUrl);
    }
  }

  return images;
}

// ====================
// Social Media Fetchers
// ====================

// GitHub Profile Picture
async function fetchGitHubImage(username) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();
  return data.avatar_url ? [data.avatar_url] : [];
}

// X (Twitter) profile image via unofficial endpoint
async function fetchTwitterImage(username) {
  try {
    const res = await fetch(`https://unavatar.io/x/${username}`);
    if (res.ok) return [res.url];
  } catch {}
  return [];
}

// Instagram latest public image (using unavatar)
async function fetchInstagramImage(username) {
  try {
    const res = await fetch(`https://unavatar.io/instagram/${username}`);
    if (res.ok) return [res.url];
  } catch {}
  return [];
}

// LinkedIn profile image (using unavatar)
async function fetchLinkedInImage(username) {
  try {
    const res = await fetch(`https://unavatar.io/linkedin/${username}`);
    if (res.ok) return [res.url];
  } catch {}
  return [];
}

// Combine all social image fetchers
async function getSocialImages() {
  const github = await fetchGitHubImage("aryanjsx");
  const twitter = await fetchTwitterImage("aryanjsx");
  const instagram = await fetchInstagramImage("aryanjsx");
  const linkedin = await fetchLinkedInImage("aryanjsx");

  return [...github, ...twitter, ...instagram, ...linkedin];
}

// ====================
// Sitemap Generator
// ====================
function generateSitemap(images) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  const urls = images
    .map((url) => {
      const title = path
        .basename(url)
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ");
      return `
  <url>
    <loc>${SITE_URL}</loc>
    <image:image>
      <image:loc>${url}</image:loc>
      <image:title>${title || "Aryan Kumar (aryanjsx)"}</image:title>
      <image:caption>Official image or social media photo of Aryan Kumar (aryanjsx)</image:caption>
    </image:image>
  </url>`;
    })
    .join("\n");

  return `${header}\n${urls}\n</urlset>`;
}

// ====================
// Main Runner
// ====================
async function run() {
  console.log(
    "🔄 Generating dynamic sitemap with social media + local images...",
  );

  const localImages = [
    ...getLocalImages(path.join(__dirname, "public"), SITE_URL),
    ...getLocalImages(path.join(__dirname, "src/assets/images"), SITE_URL),
  ];

  const socialImages = await getSocialImages();

  const allImages = [...new Set([...localImages, ...socialImages])];
  const sitemap = generateSitemap(allImages);

  fs.writeFileSync(OUTPUT_FILE, sitemap, "utf8");
  console.log(
    `✅ Sitemap created with ${allImages.length} images → ${OUTPUT_FILE}`,
  );
}

run();
