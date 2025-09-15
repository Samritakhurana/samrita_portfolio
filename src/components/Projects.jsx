/*
import React from "react";
import { motion } from "motion/react";
import { projectsData } from "../data/projects.js";

const Projects = () => {
  // Use the external projects data
  const projects = projectsData;

  // Animation variants for motion
  const containerVariants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const tiltCardProps = {
    whileHover: {
      rotateY: 8,
      rotateX: -5,
      scale: 1.02,
      transition: { type: "spring", stiffness: 500, damping: 40 },
    },
    style: {
      perspective: "1000px",
      transformStyle: "preserve-3d",
    },
  };

  return (
    <section id="projects" className="py-28 px-5 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[36px] md:text-5xl text-main font-semibold mb-6">
            My Projects
          </h2>
          <p className="text-lg text-[var(--general)] max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div className="mb-16" {...containerVariants}>
          <h3 className="text-2xl font-semibold text-[var(--primary)] mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  {...cardVariants}
                  transition={{
                    ...cardVariants.transition,
                    delay: index * 0.1,
                  }}
                  {...tiltCardProps}
                  className="bg-white/5 dark:bg-white/5 backdrop-blur-3xl rounded-2xl border border-[var(--border-color)] card-hover overflow-hidden shadow-lg"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-[var(--primary)] text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-[var(--general)]">
                      {project.title}
                    </h3>
                    <p className="text-[var(--general)] opacity-80 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs bg-white/10 border border-[var(--border-color)] text-[var(--general)] rounded-full font-medium backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.liveLink}
                        className="flex-1 text-center design-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        className="flex-1 text-center px-4 py-3 border border-[var(--border-color)] text-[var(--general)] rounded-full hover:bg-white/5 transition-all duration-300 font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          {...containerVariants}
          transition={{ ...containerVariants.transition, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-[var(--primary)] mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  {...cardVariants}
                  transition={{
                    ...cardVariants.transition,
                    delay: index * 0.1 + 0.4,
                  }}
                  {...tiltCardProps}
                  className="bg-white/5 dark:bg-white/5 backdrop-blur-3xl rounded-xl border border-[var(--border-color)] card-hover overflow-hidden"
                >
                  {/* Compact Project Image */}
                  <div className="relative overflow-hidden h-32">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Compact Project Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--general)]">
                      {project.title}
                    </h3>
                    <p className="text-[var(--general)] opacity-80 mb-3 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies - Compact */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-white/10 border border-[var(--border-color)] text-[var(--general)] rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-[var(--general)] opacity-60">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Compact Project Links */}
                    <div className="flex gap-2">
                      <a
                        href={project.liveLink}
                        className="flex-1 text-center px-3 py-2 bg-[var(--primary)] text-white rounded-full hover:shadow-[0_0_10px_rgba(255,180,180,1)] transition-all duration-300 text-sm font-medium hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                      <a
                        href={project.githubLink}
                        className="flex-1 text-center px-3 py-2 border border-[var(--border-color)] text-[var(--general)] rounded-full hover:bg-white/5 transition-all duration-300 text-sm font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <p className="text-lg text-[var(--general)] mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <a href="#contact" className="design-button">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
*/

// Placeholder component when Projects section is disabled
import React from "react";

const Projects = () => {
  return null; // This will render nothing when Projects is commented out
};

export default Projects;
