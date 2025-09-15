import { motion } from "motion/react";
import React from "react";

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-xl md:text-3xl font-semibold">
            <span className="text-[var(--general)] opacity-0 animate-fade-in-delay-1">
              {" "}
              Hi! I'm{" "}
            </span>
            <span className="text-main opacity-0 animate-fade-in-delay-2">
              {" "}
              Samrita Khurana!!{" "}
            </span>
          </h1>

          <p className="text-4xl md:text-6xl font-bold text-main opacity-0 animate-fade-in-delay-3">
            Welcome to my Portfolio!
          </p>

          <p className="text-lg md:text-xl text-[var(--general)] opacity-0 animate-fade-in-delay-4">
            I love to create social good technologies to improve our daily life
          </p>

          <div className="pt-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="pt-5 hover:scale-105 duration-300"
            >
              <a href="#experience" className="design-button">
                View my work
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
