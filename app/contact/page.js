import { generatePageMetadata } from "../../src/components/SEO/generatePageMetadata";
import "../../src/styles/pages/contact.css";
import ContactClient from "./ContactClient";

export const metadata = generatePageMetadata({
  path: "/contact",
  keywords:
    "aryanjsx, aryan kumar, contact aryan kumar, software engineer, full stack developer, hire",
});

export default function ContactPage() {
  return <ContactClient />;
}
