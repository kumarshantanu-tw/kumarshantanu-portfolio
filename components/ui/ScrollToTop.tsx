"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener(
        "scroll",
        toggleVisibility
      );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed
        bottom-8
        right-8
        z-50

        flex
        h-12
        w-12
        items-center
        justify-center

        rounded-full

        border
        border-cyan-400/20

        bg-slate-900/80

        text-cyan-400

        backdrop-blur-xl

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-cyan-400
        hover:bg-slate-800
        hover:shadow-[0_10px_30px_rgba(34,211,238,0.25)]

        ${
          visible
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-4"
        }
      `}
    >
      <ChevronUp size={22} />
    </button>
  );
}