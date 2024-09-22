import { Blogs } from "@/components/Blogs";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";
import { getAllBlogs } from "../../../lib/getAllBlogs";

export const metadata: Metadata = {
  title: "Blogs | Minh Pham",
  description:
    "Minh Pham is a frontend engineer with 5 years of experience building SaaS solutions. He works remotely from Vietnam, delivering high-quality web applications.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">Sometimes I write</Heading>
      <Paragraph className="pb-10">
        I write about career growth, technology, self-reflection, and the
        journey toward personal and professional fulfillment.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
