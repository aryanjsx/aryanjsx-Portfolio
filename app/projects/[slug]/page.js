import { getAllProjectSlugs, getProjectBySlug } from "../../../src/data/projects";
import { generatePageMetadata } from "../../../src/components/SEO/generatePageMetadata";
import "../../../src/styles/pages/projects.css";
import CaseStudyClient from "./CaseStudyClient";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return generatePageMetadata({
    title: `${project.name} — Case Study | Aryan Kumar`,
    description: project.shortDescription || project.description,
    path: `/projects/${project.id}`,
    keywords: `${project.name}, ${project.techStack ? project.techStack.join(", ") : ""}, aryanjsx, aryan kumar, case study, aryanjsx projects`,
  });
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  return <CaseStudyClient slug={slug} />;
}
