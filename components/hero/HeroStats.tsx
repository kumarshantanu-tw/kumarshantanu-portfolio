"use client";

import { motion } from "framer-motion";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { fadeUp } from "@/lib/animations";

type Stat = {
  end: number;
  label: string;
  suffix: string;
  decimals?: number;
};

const stats: Stat[] = [
  {
    end: 1.5,
    decimals: 1,
    suffix: "+",
    label: "Years Experience",
  },
  {
    end: 8,
    suffix: "+",
    label: "Documentation Projects",
  },
  {
    end: 10,
    suffix: "+",
    label: "Tools & Technologies",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      variants={fadeUp()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-16 grid grid-cols-3 gap-8"
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-5xl font-bold text-cyan-400">
            <AnimatedCounter
              end={stat.end}
              decimals={stat.decimals}
              suffix={stat.suffix}
            />
          </h3>

          <p className="mt-3 text-sm text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}