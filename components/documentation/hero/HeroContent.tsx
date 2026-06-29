"use client";

import { motion } from "framer-motion";

import type { DocumentationProject } from "@/types/documentation";

import Badge from "@/components/ui/Badge";

import HeroMetrics from "./HeroMetrics";

import { fadeRight } from "@/lib/animations";

type HeroContentProps = {
  project: DocumentationProject;
};

export default function HeroContent({
  project,
}: HeroContentProps) {
  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <Badge variant="primary">
        {project.metadata.category}
      </Badge>

      <div>
        <h1 className="text-5xl font-bold leading-tight text-white lg:text-6xl">
          {project.hero.title}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          {project.hero.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {project.technologies.map((technology) => (
          <Badge key={technology}>
            {technology}
          </Badge>
        ))}
      </div>

      <HeroMetrics
        metrics={project.metrics}
      />
    </motion.div>
  );
}