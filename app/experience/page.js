import { generatePageMetadata } from "../../src/components/SEO/generatePageMetadata";
import "../../src/styles/pages/experience.css";
import ExperienceClient from "./ExperienceClient";

export const metadata = generatePageMetadata({
  path: "/experience",
  keywords:
    "aryanjsx, aryan kumar, aryan kumar software engineer, experience, software engineer ltimindtree, full stack developer",
});

export default function ExperiencePage() {
  return <ExperienceClient />;
}
