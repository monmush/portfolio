import { Heading } from "./Heading";

export const TechStack = () => {
  const techStacks = {
    Languages: [
      "JavaScript (Expert)",
      "TypeScript (Expert)",
      "HTML (Expert)",
      "CSS (Expert)",
    ],
    "Rendering Frameworks": ["React (Expert)", "Next.js (Expert)", "Gatsby"],
    "CSS Frameworks": [
      "Ant Design (Expert)",
      "Tailwind CSS (Expert)",
      "Styled Components",
      "Shadcn",
      "NextUI",
      "SASS",
    ],
    "Data Fetching": ["GraphQL", "TanStack Query", "Apollo Client", "Prisma"],
  };

  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="grid grid-cols-2 text-normal">
        {Object.entries(techStacks).map(([category, items]) => (
          <div key={category} className="w-full mb-4">
            <Heading
              as="h3"
              className="font-semibold text-sm md:text-base lg:text-base"
            >
              {category}
            </Heading>
            <ul className="text-secondary pl-1">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
