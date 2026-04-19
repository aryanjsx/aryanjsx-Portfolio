import { generatePageMetadata } from "../../src/components/SEO/generatePageMetadata";
import "../../src/styles/pages/education.css";
import EducationClient from "./EducationClient";

export const metadata = generatePageMetadata({
  path: "/education",
  keywords:
    "aryanjsx, aryan kumar, aryan kumar software engineer, education, certifications, full stack developer",
});

export default function EducationPage() {
  return <EducationClient />;
}
