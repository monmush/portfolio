import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        Experienced Front End Engineer with <Highlight>5 years</Highlight> of
        proficiency in creating SaaS web applications, focusing on JavaScript,
        TypeScript, and the ReactJS ecosystem.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
