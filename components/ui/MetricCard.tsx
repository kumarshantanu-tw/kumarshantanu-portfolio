"use client";

import AnimatedCounter from "./AnimatedCounter";
import Card from "./Card";

type MetricCardProps = {
  value: number;
  label: string;
  suffix?: string;
};

export default function MetricCard({
  value,
  label,
  suffix = "",
}: MetricCardProps) {
  return (
    <Card
      compact
      className="text-center"
    >
      <h3 className="text-3xl font-bold text-cyan-400">
        <AnimatedCounter
          end={value}
          suffix={suffix}
        />
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {label}
      </p>
    </Card>
  );
}