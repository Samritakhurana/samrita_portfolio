import React from "react";

const icons = [
  // {
  //   image: "/svgIcon/facebook.svg",
  //   link: "https://www.facebook.com/",
  // },
  {
    image: "/svgIcon/linkedIn.svg",
    link: "https://www.linkedin.com/in/samritakhurana/",
  },
  {
    image: "/svgIcon/gitHub.svg",
    link: "https://github.com/Samritakhurana",
  },
  {
    image: "/svgIcon/gmail.svg",
    link: "mailto:khurana.samrita@gmail.com",
  },
  // {
  //   image: "/svgIcon/instagram.svg",
  //   link: "https://www.instagram.com/samritakhurana_/",
  // },
];
export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-14 px-10 relative bg-[#f35467] dark:bg-[#471396]"
    >
      <h2 className="text-[24px] text-white mb-9 text-center">Contact Me</h2>

      <div className="flex space-x-8 justify-center">
        {icons.map((icon) => (
          <a className="bg-white px-2 py-2 rounded-full" href={icon.link}>
            <img className="h-8 w-8" src={icon.image} />
          </a>
        ))}
      </div>
    </section>
  );
};
