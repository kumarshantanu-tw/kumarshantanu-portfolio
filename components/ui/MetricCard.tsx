"use client";

import { motion } from "framer-motion";

import AnimatedCounter from "./AnimatedCounter";
import Card from "./Card";

type MetricCardProps = {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
};

export default function MetricCard({
  value,
  label,
  suffix = "",
  decimals = 0,
}: MetricCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Card className="h-full text-center">
        <h3 className="text-4xl font-bold text-cyan-400">
          <AnimatedCounter
            end={value}
            decimals={decimals}
            suffix={suffix}
          />
        </h3>

        <p className="mt-3 text-sm text-slate-400">
          {label}
        </p>
      </Card>
    </motion.div>
  );
}