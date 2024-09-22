import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Minh Pham",
  description:
    "Minh Pham is a frontend engineer with 5 years of experience building SaaS solutions. He works remotely from Vietnam, delivering high-quality web applications.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-3xl">
        Please contact me via{" "}
        <a
          href="https://linkedin.com/in/minh-pham-developer"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        or email me at{" "}
        <a
          href="mailto:minh.pham.developer@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          minh.pham.developer@gmail.com
        </a>
      </Paragraph>
      {/* <Contact /> */}
    </Container>
  );
}
