import { generatePageMetadata } from "../../src/components/SEO/generatePageMetadata";
import "../../src/styles/pages/developer.css";
import DeveloperClient from "./DeveloperClient";

export const metadata = generatePageMetadata({
  title: "Developer Dashboard | Aryan Kumar (aryanjsx) — GitHub, npm, Open Source",
  description:
    "Live developer dashboard for aryanjsx (Aryan Kumar). GitHub activity, npm packages, technical writing, and current open-source projects by aryanjsx.",
  path: "/developer",
  keywords:
    "aryanjsx developer dashboard, aryanjsx github, aryanjsx npm packages, aryanjsx open source, aryan kumar developer, aryanjsx blog, aryanjsx projects",
});

export default function DeveloperPage() {
  return <DeveloperClient />;
}
