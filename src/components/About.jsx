import React from "react";
import { motion } from "motion/react";

export const About = () => {
  const slideInLeft = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  };

  const slideInRight = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  };
  return (
    <section id="about" className="py-28 px-5 relative">
      <div className="container mx-auto max-auto max-w-5xl">
        <h2 className="text-[36px] md:text-5xl text-main font-semibold mb-20 text-center">
          About me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <motion.div {...slideInLeft} className="space-y-8">
            <p className="text-3xl text-[var(--general)]">
              {" "}
              I'm
              <span className="text-[var(--primary)]">
                {" "}
                Samrita Khurana{" "}
              </span>{" "}
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-[var(--general)]">
                Undergraduate CS student at University of Minnesota, Twin Cities
              </li>
              <li className="text-[var(--general)]">
                I'm someone who finds joy in turning ideas into things people
                can actually use!
              </li>
              <li className="text-[var(--general)]">
                Love dancing, cooking, and playing Squash
              </li>
              <li className="text-[var(--general)]">
                Hackathons are where I discovered my love and passion for
                blending code, creativity, research and design into practical
                but impactful solutions!
              </li>
            </ul>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="pt-4"
            >
              <a
                href="https://drive.google.com/file/d/1aVyFsvY4jwAHb-iD8jvAsgMRdGBOyoBU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 design-button group"
              >
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                View Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div {...slideInRight} className="flex justify-center">
            <img
              src="/image/samrita.jpeg"
              alt="My profile"
              className="ml-12 mt-12 h-auto w-80 rounded-sm card-hover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
