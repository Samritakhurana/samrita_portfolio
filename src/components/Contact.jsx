import React from "react";
import { motion } from "motion/react";

const icons = [
  {
    image: "/svgIcon/linkedIn.svg",
    link: "https://www.linkedin.com/in/samritakhurana/",
    name: "LinkedIn",
    color: "hover:bg-blue-600",
  },
  {
    image: "/svgIcon/gitHub.svg",
    link: "https://github.com/Samritakhurana",
    name: "GitHub",
    color: "hover:bg-gray-700",
  },
  // {
  //   image: "/svgIcon/gmail.svg",
  //   link: "mailto:khurana.samrita@gmail.com",
  //   name: "Email",
  //   color: "hover:bg-red-500",
  // },
];

export const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section
      id="contact"
      className="py-20 px-5 relative overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f35467]/90 via-[#f35467]/80 to-[#e91e63]/90 dark:from-[#471396]/90 dark:via-[#6a1b9a]/80 dark:to-[#8e24aa]/90"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-white/60 mx-auto rounded-full mb-4"></div>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate or just want to say hello? I'd love to hear from you!
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8"
          >
            {icons.map((icon, index) => (
              <motion.a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <div className={`
                  relative bg-white/20 backdrop-blur-lg border border-white/30 
                  rounded-2xl p-4 md:p-5 transition-all duration-300 
                  ${icon.color} group-hover:bg-opacity-90 
                  group-hover:shadow-2xl group-hover:shadow-black/25
                `}>
                  <img 
                    className="h-8 w-8 md:h-10 md:w-10 object-contain transition-all duration-300 
                               group-hover:scale-110 group-hover:brightness-0 group-hover:invert" 
                    src={icon.image} 
                    alt={icon.name}
                  />
                  
                  {/* Tooltip */}
                  <div className="
                    absolute -top-12 left-1/2 transform -translate-x-1/2 
                    bg-black/80 text-white text-sm px-3 py-1 rounded-lg 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    pointer-events-none whitespace-nowrap
                  ">
                    {icon.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-white/80 text-sm md:text-base">
              Or drop me a line directly at
            </p>
            <motion.a
              href="mailto:khurana.samrita@gmail.com"
              className="
                inline-flex items-center gap-3 px-6 py-3 
                bg-white/20 backdrop-blur-lg border border-white/30 
                rounded-full text-white font-medium
                hover:bg-white hover:text-gray-800 
                transition-all duration-300 hover:scale-105
                hover:shadow-xl hover:shadow-black/20
              "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              khurana.samrita@gmail.com
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
    </section>
  );
};
