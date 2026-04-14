import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHireMeClick = () => {
    setActiveSection("contact");
    setIsOpen(false);

    const section = document.getElementById("connect-with-me") || document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
     <nav
      className={`fixed top-3 md:top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] lg:w-[68%] z-50 transition-all duration-300 rounded-2xl px-2 md:px-3 ${
        isScrolled
          ? "bg-[#0b1019]/78 border border-white/15 backdrop-blur-xl shadow-[0_14px_38px_rgba(2,6,23,0.55)]"
          : "bg-[#06080d]/90 border border-white/10"
      }`}
    >
      <div className="text-white py-3 md:py-4 flex justify-between items-center px-3 md:px-5">
        {/* LOGO */}
        <div className="cursor-pointer flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl border border-white/40 bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 text-black text-xs font-extrabold flex items-center justify-center tracking-wide shadow-[0_6px_18px_rgba(209,213,219,0.25)]">
            RM
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white tracking-wide">Rutvik More</p>
            <p className="text-[10px] uppercase text-gray-300 tracking-[0.22em]">Software Engineer</p>
          </div>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#d1d5db] transition-colors duration-300 ${
                activeSection === item.id ? "text-[#d1d5db]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)} className="relative pb-1">
                {item.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-gray-300 to-white transition-all duration-300 ${
                    activeSection === item.id ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={handleHireMeClick}
            className="px-4 py-2 text-sm font-semibold rounded-full border border-gray-300/60 bg-linear-to-r from-gray-600 to-gray-400 text-white hover:from-gray-500 hover:to-gray-300 transition duration-300 shadow-[0_0_14px_rgba(156,163,175,0.25)]"
          >
            Hire Me
          </button>

     {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/thenameisrutvikk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#d1d5db]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rutvik-more-87770b2b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#d1d5db]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#d1d5db] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#d1d5db] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-[72px] left-1/2 transform -translate-x-1/2 w-[94%] bg-[#0f1115]/95 backdrop-blur-lg z-50 rounded-xl shadow-lg md:hidden border border-gray-500/30">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white transition-colors duration-300 ${
                  activeSection === item.id ? "text-[#d1d5db]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <button
              onClick={handleHireMeClick}
              className="px-4 py-2 text-sm font-semibold rounded-full border border-gray-300/60 bg-linear-to-r from-gray-600 to-gray-400 text-white hover:opacity-90 transition"
            >
              Hire Me
            </button>
            <div className="flex space-x-4">
              <a
                href="https://github.com/thenameisrutvikk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rutvik-more-87770b2b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar