/** @type {import('next').NextConfig} */
const withBundleAnalyzer = process.env.ANALYZE === "true"
  ? require("@next/bundle-analyzer")({ enabled: true })
  : (cfg) => cfg;

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "cdn-images-1.medium.com" },
      { protocol: "https", hostname: "miro.medium.com" },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);