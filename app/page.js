import { generatePageMetadata } from "../src/components/SEO/generatePageMetadata";
import HomeClient from "./HomeClient";

export const metadata = generatePageMetadata({
  path: "/",
  title: "Aryan Kumar | Software Engineer | Gen AI Developer | Full-Stack Developer",
  description:
    "Official portfolio of Aryan Kumar, Software Engineer specializing in GEN AI, DevOps, Azure, system architecture, and full-stack development. Explore projects, open-source work, and contact.",
  keywords:
    "aryanjsx, aryan kumar developer, aryanjsx github, aryanjsx portfolio, aryan kumar devops engineer, aryan kumar software engineer, full stack developer, aryan kumar azure, aryanjsx npm, aryan kumar open source",
});

export default function HomePage() {
  return <HomeClient />;
}
