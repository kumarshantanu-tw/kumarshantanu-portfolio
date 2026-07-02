"use client";

import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import ScreenshotCard, { type Slot } from "./ScreenshotCard";

type Screenshot = {
  id: number;
  image: string;
};

type CoverflowProps = {
  screenshots: Screenshot[];
  activeIndex: number;
  onChange: (index: number) => void;
};

const VISIBLE_SLOTS = [-2, -1, 0, 1, 2];

export default function Coverflow({
  screenshots,
  activeIndex,
  onChange,
}: CoverflowProps) {
  const total = screenshots.length;

  const previous = () => {
    onChange((activeIndex - 1 + total) % total);
  };

  const next = () => {
    onChange((activeIndex + 1) % total);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowLeft") previous();
        if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
        window.removeEventListener("keydown", handleKeyDown);
    };
}, [activeIndex]);

  return (
    <div className="
    relative
    flex
    h-full
    w-full
    items-center
    justify-center
    overflow-hidden
    [perspective:2000px]
    ">
      {/* Left Button */}

      <button
      type="button"
        onClick={previous}
        className="
          absolute
          left-16
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/5
          text-2xl
          text-white
          backdrop-blur-xl
          transition
          hover:bg-white/10
        "
      >
        ←
      </button>

      {/* Cards */}

      <AnimatePresence initial={false}>
        {VISIBLE_SLOTS.map((slot) => {
          const index =
            (activeIndex + slot + total) % total;

          return (
            <ScreenshotCard
            key={`${screenshots[index].id}-${activeIndex}-${slot}`}
              screenshot={screenshots[index]}
              slot={slot as Slot}
            />
          );
        })}
      </AnimatePresence>

      {/* Right Button */}

      <button
      type="button"
        onClick={next}
        className="
          absolute
          right-16
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/5
          text-2xl
          text-white
          backdrop-blur-xl
          transition
          hover:bg-white/10
        "
      >
        →
      </button>
    </div>
  );
}