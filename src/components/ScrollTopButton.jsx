import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Go to top"
      onClick={scrollToTop}
      className={`fixed right-5 bottom-5 z-50 h-10 w-10 rounded-full border border-gray-400/35 bg-[#171a22]/95 text-gray-100 flex items-center justify-center shadow-[0_0_18px_rgba(156,163,175,0.22)] backdrop-blur-sm transition-all duration-300 hover:bg-[#212634] hover:scale-105 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <FaArrowUp size={12} />
    </button>
  );
}

export default ScrollTopButton;