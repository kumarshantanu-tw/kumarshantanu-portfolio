"use client";

import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";

export default function HeroButtons() {
  return (
    <motion.div
      variants={fadeUp(0.8)}
      initial="hidden"
      animate="visible"
      className="mt-10 flex flex-wrap gap-4"
    >
      <Button href="/resume.pdf" external>
        View Resume
      </Button>

      <Button href="#contact" variant="secondary">
        Contact Me
      </Button>
    </motion.div>
  );
}