import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

//home, intorduction, skills, experience, projects, contact
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
const Narbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* this is for desktop */}
      <nav
        className={cn(
          "fixed z-50 left-1/2 top-8 transform -translate-x-1/2 w-[50%] max-w-4xl " +
            "border border-[var(--border-color)] rounded-full bg-white/5 dark:bg-white/5 backdrop-blur-3xl",
          isScrolled ? "py-4 shadow-lg" : "py-5",
          "hidden lg:block"
        )}
      >
        <div className="hidden lg:flex items-center justify-center space-x-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={cn(
                "text-[var(--general)] px-2 pb-1 border-b-2 border-transparent",
                "hover:border-[var(--border-color)] transition-colors"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* this is for mobile  */}

      <button
        onClick={() => setIsMenu((prev) => !prev)}
        className="fixed top-2 right-20 lg:hidden p-2 text-[var(--general)] z-50"
        aria-label={isMenu ? "Close" : "Open"}
      >
        {isMenu ? (
          <X
            className="cursor-pointer py-2 px-2 rounded-full backdrop-blur-md"
            size={42}
          />
        ) : (
          <Menu
            className="cursor-pointer py-2 px-2 rounded-full backdrop-blur-md"
            size={42}
          />
        )}
      </button>
      {isMenu && (
        <div
          className={cn(
            "fixed inset-0 backdrop-blur-lg z-20 flex flex-col items-center justify-center lg:hidden transition-opacity duration-300"
          )}
        >
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="block mb-6 text-[var(--general)] hover:text-[var(--primary)] transition-colors duration-300"
              onClick={() => setIsMenu(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Narbar;
