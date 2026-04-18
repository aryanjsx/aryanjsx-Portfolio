import { dirname } from "path";
import { fileURLToPath } from "url";
import nextConfig from "eslint-config-next/core-web-vitals";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "public/**"],
  },
  ...nextConfig,
  {
    settings: {
      next: {
        rootDir: __dirname,
      },
    },
  },
];

export default config;
