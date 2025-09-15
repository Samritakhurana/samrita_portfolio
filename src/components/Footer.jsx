import { ArrowUp } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="relative w-full py-auto bg-[#b63c4a] dark:bg-[#3A1078] ">
        <p className=" py-4 px-8 text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Design by Samrita Khurana. All rights
          reserved
        </p>
        <a href="#home" className="absolute right-8 bottom-10">
          <ArrowUp
            size={40}
            className="bg-white rounded-full py-2 px-2 cursor-pointer card-hover"
          />
        </a>
      </div>
    </>
  );
};
