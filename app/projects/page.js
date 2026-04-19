import { generatePageMetadata } from "../../src/components/SEO/generatePageMetadata";
import "../../src/styles/pages/projects.css";
import ProjectsClient from "./ProjectsClient";

export const metadata = generatePageMetadata({
  path: "/projects",
  keywords:
    "aryanjsx, aryan kumar, aryan kumar portfolio, projects by aryanjsx, full stack developer projects, software engineer portfolio",
});

export default function ProjectsPage() {
  return <ProjectsClient />;
}
