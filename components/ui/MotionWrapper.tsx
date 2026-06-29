"use client";

import { motion, Variants } from "framer-motion";

type MotionWrapperProps = {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
};

export default function MotionWrapper({
  children,
  variants,
  className = "",
}: MotionWrapperProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}