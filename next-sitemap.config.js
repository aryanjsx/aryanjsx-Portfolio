/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://aryankr.in",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/404", "/splash"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://aryankr.in/image-sitemap.xml",
    ],
  },
  transform: async (config, path) => {
    const priorityMap = {
      "/": 1.0,
      "/projects": 0.9,
      "/developer": 0.9,
      "/experience": 0.8,
      "/education": 0.8,
      "/contact": 0.7,
    };

    const changefreqMap = {
      "/": "weekly",
      "/projects": "weekly",
      "/developer": "weekly",
      "/experience": "monthly",
      "/education": "monthly",
      "/contact": "monthly",
    };

    return {
      loc: path,
      changefreq: changefreqMap[path] || config.changefreq,
      priority: priorityMap[path] || (path.startsWith("/projects/") ? 0.8 : config.priority),
      lastmod: new Date().toISOString(),
    };
  },
};
