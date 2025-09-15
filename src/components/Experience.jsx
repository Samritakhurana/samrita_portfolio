import React from "react";
import { Timeline } from "./ui/Timeline";

// 1) Your raw data
const rawTimeline = [
  {
    company: "Hewlett Packard",
    title: "Software Development Intern",
    date: "June 2025 - August 2025",
    description: [
      "•	Designed and implemented a retrieval-augmented generation (RAG) pipeline with OpenAI embeddings and Elasticsearch, improving search relevance by ~35% while reducing average query latency from 220ms to 90ms.",
      "•	Built Dockerized Python microservices to automate ingestion of 2,000+ daily documents into AWS S3, keeping data fresh and extending assistant query coverage by 45%. ",
      "•	Prototyped a conversational AI assistant with database connectors and NLP pipelines, enabling employees to quickly find resources and leading to a 25% increase in engagement and a 20% drop in support tickets. ",
      "•	Shadowed senior developers to explore performance profiling and contributed minor UI bug fixes.",
    ],
  },
  {
    company: "Middlebrook Hall, University of Minnesota",
    title: "Office Assistant (OA)",
    date: "September 2024 – Present",
    description: [
      "•	Serve as the first point of contact at a 24/7 residence hall desk, supporting over 500+ residents with inquiries, key checkouts, guest access, and campus referrals.",
      "•	Handle administrative operations including mail distribution, inventory tracking, and accurate use of internal systems and security protocols.",
      "•	Commended for reliability and professionalism, maintaining a 95%+ resident satisfaction rating during active shifts.",
    ],
  },
  {
    company: "VIP – Georgia Institute of Technology",
    title: "Software Engineer | Research Assistant",
    date: "01/06/2025",
    description: [
      "Developing a Google-sponsored mobile app, collaborating with AI, design, and researcher teams under Dr. Starner to empower 10,000+ hearing parents to learn ASL and enhance communication.",
      "Utilized C#, Figma, and Unity to improve sign detection accuracy by 30% through iterative algorithm tuning and user testing.",
      "Designed an interactive platform featuring 250+ ASL vocabulary items.",
    ],
  },
  {
    company: "FPT Software Ho Chi Minh",
    title: "Web Developer Intern",
    date: "05/12/2024 – 08/01/2024",
    description: [
      "Collaborated with 20+ professionals to modernize legacy RPG AS400 systems into Java-based web apps using Spring Boot/MVC.",
      "Built dynamic, responsive UIs with React, JavaScript, and SQL, significantly improving user experience.",
      "Boosted app performance and maintainability by 65% through clean code practices and rigorous weekly testing.",
    ],
  },
];

// 2) Map to the shape Timeline wants
const timelineData = rawTimeline.map((item) => ({
  title: item.date,
  content: (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-[var(--primary)]">
        {item.title}
      </h3>
      <h4 className="text-sm italic text-gray-600 dark:text-gray-300">
        {item.company}
      </h4>
      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200">
        {item.description.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  ),
}));

// 3) Use Timeline in your section
export const Experience = () => {
  return (
    <section id="experience" className="px-5 py-28 mb-18 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[36px] md:text-5xl text-main text-center font-semibold">
          Work Experience
        </h2>

        <div className="relative w-full overflow-clip">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
};
