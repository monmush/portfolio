"use client";
import { Paragraph } from "@/components/Paragraph";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const bottomImages = [
    "/images/about/R0001744.webp",
    "/images/about/R0002550.webp",
    "/images/about/R0001885.webp",
    "/images/about/R0002126.webp",
  ];
  return (
    <div>
      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          👋 I was born in Hanoi, Vietnam. After finishing high school, I moved
          to Finland to pursue a Bachelor of Engineering, specializing in
          Information Technology. My major was Computer Networking, but in my
          fourth year, I discovered a passion for programming and web
          development. Since then, I have been mostly self-taught, constantly
          learning new technologies and honing my skills.
        </Paragraph>

        <Image
          src="/images/about/IMG_1996.webp"
          width={600}
          height={400}
          alt="about"
          className="rounded-md object-covershadow-xl aspect-[6/4] w-4/5 block m-auto my-8 h-auto"
        />

        <Paragraph className=" mt-4">
          🚀 In 2019, I decided to return to Vietnam, luckily just before the
          Covid pandemic hit. I began my career with an internship at{" "}
          <a
            href="https://fpt-is.com/"
            target="_blank"
            className="text-blue-500"
          >
            FPT Information System
          </a>
          , a leading tech corporation in Vietnam with a vast portfolio of B2B
          clients. During my time there, I worked in an R&D hub and successfully
          developed an Attendance Management System to help companies manage
          remote work during the pandemic.
        </Paragraph>

        <Paragraph className=" mt-4">
          💡 In 2020, I landed my first job at a remarkable startup,{" "}
          <a href="https://filum.ai/" target="_blank" className="text-blue-500">
            Filum AI.
          </a>
          This was a significant highlight in my career. I was one of the first
          employees, joining the team when there were only two of us, excluding
          the board of directors. I contributed some of the first lines of code
          and primarily handled the Frontend development. Over two years, I had
          numerous opportunities to learn and create exciting products. The
          company grew tenfold during my tenure, evolving into a much larger and
          more dynamic team.
        </Paragraph>

        <Image
          src="/images/about/IMG_2786.webp"
          width={400}
          height={600}
          alt="about"
          className="rounded-md object-covershadow-xl block w-4/5 aspect-[4/3] m-auto my-8 h-auto"
        />

        <Paragraph className=" mt-4">
          🌍 In 2023, I joined{" "}
          <a
            href="https://www.inspectorio.com/"
            target="_blank"
            className="text-blue-500"
          >
            Inspectorio
          </a>
          , a US-based SaaS company specializing in an AI-powered supply chain
          management platform. Working at Inspectorio allowed me to collaborate
          with colleagues from North America, Europe, and Southeast Asia. We
          served top-tier Fortune 500 companies such as Target and Tesco,
          providing innovative solutions for supply chain management.
        </Paragraph>
        <Paragraph className=" mt-4">
          🌟 Now, in August 2024, after five years of continuous work, I am
          taking a temporary break to reflect on my career. I plan to spend this
          valuable time exploring Vietnam, revisiting some hobbies, and learning
          new skills as an engineer. I will return soon, bringing renewed energy
          to my work and continuing to build excellent products that benefit
          individuals and businesses.
        </Paragraph>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
          {bottomImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{
                opacity: 0,
                y: -50,
                rotate: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: index % 2 === 0 ? 3 : -3,
              }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <Image
                src={image}
                width={200}
                height={400}
                alt="about"
                className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
