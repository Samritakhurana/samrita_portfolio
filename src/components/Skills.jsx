import React from "react";
import { motion } from "motion/react";

const skills = [
  {
    img: "/svgIcon/html.svg",
    title: "HTML",
  },
  {
    img: "/svgIcon/css.svg",
    title: "CSS",
  },
  {
    img: "/svgIcon/tailwind.svg",
    title: "Tailwind",
  },
  {
    img: "/svgIcon/js.svg",
    title: "JavaScript",
  },
  {
    img: "/svgIcon/react.svg",
    title: "React",
  },
  {
    img: "/svgIcon/ts.svg",
    title: "TypeScript",
  },
  {
    img: "/svgIcon/nextjs.svg",
    title: "NextJs",
  },
  {
    img: "/svgIcon/python.svg",
    title: "Python",
  },
  {
    img: "/svgIcon/java.svg",
    title: "Java",
  },
  {
    img: "/svgIcon/node.svg",
    title: "NodeJS",
  },
  {
    img: "/svgIcon/express.svg",
    title: "ExpressJs",
  },
  {
    img: "/svgIcon/postgreSQL.svg",
    title: "PostgreSQL",
  },
  {
    img: "/svgIcon/git.svg",
    title: "Git",
  },
  {
    img: "/image/artificial-intelligence.png",
    title: "AI/ Machine Learning",
  },
];
const tiltCardProps = {
  style: {
    perspective: "1000px",
    transformStyle: "preserve-3d",
  },
  whileHover: { rotateY: 15, rotateX: -20, scale: 1.15 },
  transition: { type: "spring", stiffness: 500, damping: 40 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-5 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-[36px] md:text-5xl text-main font-semibold mb-20 text-center">
          My skills
        </h2>
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-7 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {skills.map((skill) => (
            <div key={skill.title} className="flex flex-col items-center">
              <motion.div
                {...tiltCardProps}
                className=" bg-white/5 dark:bg-white/5 backdrop-blur-3xl rounded-full p-2.5 flex items-center justify-center shadow-xs
              border border-[var(--border-color)] card-hover"
              >
                <img
                  src={skill.img}
                  className="w-10 h-10 object-contain"
                  alt={skill.title}
                />
              </motion.div>
              <div className="mt-2 text-[var(--general)] text-sm text-center">
                {skill.title}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
