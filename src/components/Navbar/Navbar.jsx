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
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-transparent" : "bg-black"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center px-8">
        {/* LOGO */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#d1d5db]">&lt;</span>
          <span className="text-white">Rutvik</span>
          <span className="text-[#d1d5db]">/</span>
          <span className="text-white">More</span>
          <span className="text-[#d1d5db]">&gt;</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#d1d5db] ${
                activeSection === item.id ? "text-[#d1d5db]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
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
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#0f1115] bg-opacity-85 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden border border-gray-500/30">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
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