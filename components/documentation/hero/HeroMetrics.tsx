"use client";

import { motion } from "framer-motion";

import type { DocumentationMetric } from "@/types/documentation";

import MetricCard from "@/components/ui/MetricCard";

import { fadeUp } from "@/lib/animations";

type HeroMetricsProps = {
  metrics: DocumentationMetric[];
};

export default function HeroMetrics({
  metrics,
}: HeroMetricsProps) {
  return (
    <motion.div
      variants={fadeUp(0.2)}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 gap-5 lg:grid-cols-4"
    >
      {metrics.map((metric) => (
        <MetricCard
          key={metric.label}
          value={metric.value}
          label={metric.label}
          suffix="+"
        />
      ))}
    </motion.div>
  );
}