const platforms = [
  { name: "GitHub", handle: "aryanjsx", url: "https://github.com/aryanjsx" },
  { name: "LinkedIn", handle: "aryanjsx", url: "https://www.linkedin.com/in/aryanjsx" },
  { name: "npm", handle: "~aryanjsx", url: "https://www.npmjs.com/~aryanjsx" },
  { name: "Medium", handle: "@aryanjsx", url: "https://aryanjsx.medium.com" },
  { name: "Dev.to", handle: "aryanjsx", url: "https://dev.to/aryanjsx" },
  { name: "Daily.dev", handle: "aryanjsx", url: "https://app.daily.dev/aryanjsx" },
  { name: "Docker Hub", handle: "aryanjsx", url: "https://hub.docker.com/u/aryanjsx" },
  { name: "LeetCode", handle: "aryanjsx", url: "https://leetcode.com/u/aryanjsx" },
];

export default function BrandSEO() {
  return (
    <section className="visually-hidden" aria-hidden="true">
      <h2>About Aryan Kumar</h2>
      <p>
        Aryan Kumar, is a Software Engineer with expertise in GEN AI, DevOps, Azure cloud infrastructure, system architecture,
        and full-stack development. He actively contributes to open-source projects, publishes npm packages, PyPI packages, and writes technical articles on modern engineering practices.
      </p>
      <h3>Find Aryan Kumar on</h3>
      <ul>
        {platforms.map((p) => (
          <li key={p.name}>
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              {p.name} — {p.handle}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
