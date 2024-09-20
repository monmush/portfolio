import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Minh Pham.</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Frontend Engineer with 5 years of experience in the industry.
        Specializing in the React framework and its ecosystem, I thrive on
        creating user-friendly, high-performance web applications that make a
        difference.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Throughout my career, I&apos;ve had the privilege of working with
        multiple successful startups in Vietnam and the US, both remotely and
        on-site. My journey has equipped me with the skills and knowledge to
        build robust, scalable, and visually appealing web solutions.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Explore my portfolio to see the projects I&apos;ve worked on and
        discover how my expertise can contribute to your next big idea!
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      {/* <Products /> */}
      <TechStack />
    </Container>
  );
}
