"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div>
      {/* Eyebrow */}
      <motion.p
        variants={fadeUp(0)}
        initial="hidden"
        animate="visible"
        className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"
      >
        Software Technical Writer
      </motion.p>

      {/* Name */}
      <motion.h1
        variants={fadeUp(0.2)}
        initial="hidden"
        animate="visible"
        className="text-5xl font-bold leading-tight text-white lg:text-6xl"
      >
        Kumar Shantanu
      </motion.h1>

      {/* Title */}
      <motion.h2
        variants={fadeUp(0.4)}
        initial="hidden"
        animate="visible"
        className="mt-6 text-2xl font-semibold text-slate-300"
      >
        Documentation Engineer
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={fadeUp(0.6)}
        initial="hidden"
        animate="visible"
        className="mt-8 max-w-lg text-lg leading-8 text-slate-400"
      >
        I create clear, structured, and user-focused documentation for SaaS
        products, including user guides, API documentation, release notes,
        troubleshooting guides, and knowledge bases using modern documentation
        standards.
      </motion.p>

      {/* Buttons */}
      <HeroButtons />

      {/* Stats */}
      <HeroStats />
    </div>
  );
}