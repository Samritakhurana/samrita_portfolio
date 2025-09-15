import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";

export const Background = () => {
  //create star for the sky
  const [stars, setStars] = useState([]);
  //create meteor for the sky
  const [meteors, setMeteors] = useState([]);
  useEffect(() => {
    createStars();
    createMeteors();

    const resizePage = () => {
      createStars();
    };

    window.addEventListener("resize", resizePage);
  }, []);
  //stars
  const createStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 15000
    );

    //create poistion for the stars
    //for star: make opcity -> some shines, some are blur
    const stars = [];
    for (let i = 0; i <= numberOfStars; i++) {
      stars.push({
        id: i,
        size: Math.random() * 4 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 1,
      });
    }
    setStars(stars);
  };

  const createMeteors = () => {
    //create 3 meteors
    //meteors: motion -> delay time
    const meteors = [];
    for (let i = 0; i < 3; i++) {
      meteors.push({
        id: i,
        size: Math.random() + 1,
        x: Math.random() * 100,
        y: Math.random() * 35,
        delay: Math.random() * 12,
        animationDuration: Math.random() * 3 + 1,
      });
    }
    setMeteors(meteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      <div className="pb-20 pt-36 relative">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen absolute"
          fill="var(--spot1)"
        />

        <Spotlight
          className="h-[70vh] w-[45vw] top-12 left-full absolute"
          fill="var(--spot2)"
        />

        <Spotlight
          className="left-72 top-28 h-[70vh] w-[40vw] absolute"
          fill="var(--spot3)"
        />
      </div>

      <div className="absolute inset-0 hidden dark:block pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star animate-pulse"
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.x + "%",
              top: star.y + "%",
              opacity: star.opacity,
              animationDuration: star.animationDuration + "s",
            }}
          ></div>
        ))}

        {meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="meteor animate-meteor"
            style={{
              width: meteor.size * 40 + "px",
              height: meteor.size * 2 + "px",
              left: meteor.x + "%",
              top: meteor.y + "%",
              animationDelay: meteor.delay,
              animationDuration: meteor.animationDuration + "s",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
