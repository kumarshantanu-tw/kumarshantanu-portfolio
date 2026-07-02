"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Screenshot = {
  id: number;
  image: string;
};

export type Slot = -2 | -1 | 0 | 1 | 2;

type ScreenshotCardProps = {
  screenshot: Screenshot;
  slot: Slot;
};

const VISIBLE_SLOTS = [-2, -1, 0, 1, 2] as const;

const SLOT_CONFIG = {
    [-2]: {
      x: -600,
      z: -120,
      rotateY: 82,
      scale: 0.55,
      opacity: 0.08,
      brightness: 0.45,
      zIndex: 1,
    },
  
    [-1]: {
      x: -400,
      z: -100,
      rotateY: 60,
      scale: 0.66,
      opacity: 0.38,
      brightness: 0.72,
      zIndex: 5,
    },
  
    [0]: {
      x: 0,
      z: 0,
      rotateY: 0,
      scale: 0.80,
      opacity: 1,
      brightness: 1,
      zIndex: 20,
    },
  
    [1]: {
      x: 400,
      z: -100,
      rotateY: -60  ,
      scale: 0.66,
      opacity: 0.38,
      brightness: 0.72,
      zIndex: 5,
    },
  
    [2]: {
      x: 600,
      z: -120,
      rotateY: -82,
      scale: 0.55,
      opacity: 0.08,
      brightness: 0.45,
      zIndex: 1,
    },
  } as const;

export default function ScreenshotCard({
  screenshot,
  slot,
}: ScreenshotCardProps) {
  const style = SLOT_CONFIG[slot];

  return (
    <motion.div
      initial={false}
      animate={{
        x: style.x,
        rotateY: style.rotateY,
        scale: style.scale,
        opacity: style.opacity,
        z: style.z,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 22,
        mass: 0.9,
      }}
      style={{
        zIndex: style.zIndex,
        transformStyle: "preserve-3d",
        transformPerspective: 2000,
        willChange: "transform",
        backfaceVisibility: "hidden",
        
      }}
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        will-change-transform
      "
    >
      <div
  className="
    relative
    overflow-visible
  "
>
  {/* Cyan Glow */}

{slot === 0 && (
  <div
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      pointer-events-none
      rounded-[60px]
    "
    style={{
      width: "620px",
      height: "860px",
      zIndex: -1,
      background:
        "radial-gradient(circle, rgba(34,211,238,.45) 0%, rgba(34,211,238,.25) 45%, rgba(34,211,238,.10) 70%, transparent 100%)",
      filter: "blur(85px)",
    }}
  />
)}

{/* Card Shadow */}

<div
  className="
    absolute
    left-1/2
    -bottom-4
    -translate-x-1/2
    rounded-full
    blur-[35px]
    -z-10
    pointer-events-none
  "
  style={{
    width: slot === 0 ? "340px" : "240px",
    height: slot === 0 ? "40px" : "28px",
    background:
      slot === 0
        ? "rgba(0,0,0,.45)"
        : "rgba(0,0,0,.22)",
  }}
/>

  {/* Document */}

  <div
    className="
      relative
      overflow-hidden
      rounded-[16px]
      shadow-[0_60px_180px_rgba(0,0,0,.65)]
    "
    style={{
        width: "520px",
        height: "760px",
        filter:
        slot === 0
          ? "drop-shadow(0 0 10px rgba(34,211,238,.45)) drop-shadow(0 0 30px rgba(34,211,238,.25))"
          : "none",
    }}
  >
   <Image
  src={screenshot.image}
  alt=""
  fill
  priority={slot === 0}
  draggable={false}
  sizes="520px"
  className="
    object-cover
    select-none
    pointer-events-none
  "
  style={{
    filter: `
      brightness(${style.brightness})
      blur(${slot === 0 ? 0 : slot === 1 || slot === -1 ? 1.2 : 2.4}px)
    `,
  }}
/>

    {/* Glass Reflection */}

    <div
      className="
        pointer-events-none
        absolute
        inset-0
        rounded-[26px]
        bg-gradient-to-br
        from-white/10
        via-transparent
        to-transparent
      "
    />
  </div>

  {/* Mirror Reflection */}

{slot === 0 && (
  <div
    className="
      absolute
      left-1/2
      top-full
      -translate-x-1/2
      mt-3
      overflow-hidden
      rounded-b-[24px]
      opacity-25
      pointer-events-none
    "
    style={{
      width: "520px",
      height: "220px",
      transform: "translateX(-50%) scaleY(-1)",
      maskImage:
        "linear-gradient(to bottom, rgba(0,0,0,.45), transparent)",
      WebkitMaskImage:
        "linear-gradient(to bottom, rgba(0,0,0,.45), transparent)",
    }}
  >
    <Image
      src={screenshot.image}
      alt=""
      fill
      sizes="520px"
      className="object-cover"
      draggable={false}
    />
  </div>
)}

  {/* Floor Glow */}

  {slot === 0 && (
    <div
      className="
        absolute
        left-1/2
        -bottom-8
        -translate-x-1/2
        h-12
        w-[70%]
        rounded-full
        blur-[35px]
        -z-10
      "
      style={{
        background: "rgba(34,211,238,.45)",
      }}
    />
  )}
</div>


    </motion.div>
  );
}