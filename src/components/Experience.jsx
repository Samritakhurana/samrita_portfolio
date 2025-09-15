import React from "react";
import { Timeline } from "./ui/Timeline";

// 1) Your raw data
const rawTimeline = [
  {
    company: "Hewlett Packard",
    title: "Software Development Intern",
    date: "June 2025 - August 2025",
    description: [
      "Designed and implemented a retrieval-augmented generation (RAG) pipeline with OpenAI embeddings and Elasticsearch, improving search relevance by ~35% while reducing average query latency from 220ms to 90ms.",
      "Built Dockerized Python microservices to automate ingestion of 2,000+ daily documents into AWS S3, keeping data fresh and extending assistant query coverage by 45%. ",
      "Prototyped a conversational AI assistant with database connectors and NLP pipelines, enabling employees to quickly find resources and leading to a 25% increase in engagement and a 20% drop in support tickets. ",
      "Shadowed senior developers to explore performance profiling and contributed minor UI bug fixes.",
    ],
  },
  {
    company: "Middlebrook Hall, University of Minnesota",
    title: "Office Assistant (OA)",
    date: "September 2024 – Present",
    description: [
      "Serve as the first point of contact at a 24/7 residence hall desk, supporting over 500+ residents with inquiries, key checkouts, guest access, and campus referrals.",
      "Handle administrative operations including mail distribution, inventory tracking, and accurate use of internal systems and security protocols.",
      "Commended for reliability and professionalism, maintaining a 95%+ resident satisfaction rating during active shifts.",
    ],
  },
  {
    company: "CSE Freshman Design Course- University of Minnesota",
    title: "Stratospheric Balloon Spacecraft Project",
    date: "January 2025 – May 2025",
    description: [
      "Designed and built a lightweight spacecraft using CAD, microcontrollers, sensors, and rugged structural components for launch via high-altitude weather balloon (~91,000 ft).",
      "Programmed and integrated onboard sensor systems, improving data accuracy through extensive ground testing, calibration cycles, and real-time error analysis.",
      "Reduced overall system weight by 22%, enhancing altitude reach and payload stability during flight.",
      "Applied engineering best practices to reduce power consumption by 30% through optimized microcontroller firmware and efficient wiring layouts.",
      
    ],
  },
  {
    company: "Virtual Hackathon",
    title: "Envision, 4th Place @Empower Hacks 2.0",
    date: "July 26 – August 2, 2024",
    description: [
      "Led the end-to-end development of Envision, a web platform designed to support international students through the application process, using HTML5, CSS3, and JavaScript.",
      "Integrated features such as real-time chat, interactive checklists, and a dynamic map powered by OpenStreetMap, with a focus on performance and user accessibility. ",
      "Created a persistent discussion forum and backend infrastructure to support high user engagement and platform reliability.",
      "Facilitated 3+ workshops with peers and early users, gathering feedback to refine features and boost accessibility and usability by 25%."
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
          Work Experience & Projects
        </h2>

        <div className="relative w-full overflow-clip">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
};
