"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

export function Timeline({ data }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div ref={ref}>
        {data.map((item, idx) => (
          <div key={idx} className="flex justify-start pt-40 gap-10">
            {/* Dot and date */}
            <div className="sticky top-40 self-start max-w-xs lg:max-w-sm md:w-full flex items-center">
              <div className="absolute left-3 h-10 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[var(--primary)] border-2 border-white p-2" />
              </div>
              <h3 className="hidden md:block text-lg md:pl-20 md:text-3xl font-bold text-neutral-500">
                {item.title}
              </h3>
            </div>

            {/* —— Animated Right Content Only —— */}
            <motion.div
              className="relative md:pl-4 w-full ml-26"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              {/* this is for mobile */}
              <h3 className="md:hidden text-lg font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              <div className="py-5 md:py-0">{item.content}</div>
            </motion.div>
          </div>
        ))}

        {/* this is the gradient line */}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden
            bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
            from-transparent from-[0%]
            via-neutral-200 dark:via-neutral-700
            to-transparent to-[99%]
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px]
              bg-gradient-to-t from-[#DC2525] via-[#FF9587] to-transparent
              from-[0%] via-[10%] 
              dark:from-purple-500 dark:via-blue-500
              rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
