"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { DocumentationProject } from "@/types/documentation";

import Card from "@/components/ui/Card";

import { fadeLeft } from "@/lib/animations";

type HeroImageProps = {
  project: DocumentationProject;
};

export default function HeroImage({
  project,
}: HeroImageProps) {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      animate="visible"
    >
      <Card className="overflow-hidden p-4">

        <div
          className="
            relative
            aspect-[3/4]
            overflow-hidden
            rounded-2xl
          "
        >
          <Image
            src={project.hero.coverImage}
            alt={project.hero.title}
            fill
            priority
            className="
              object-cover
              transition-transform
              duration-500
              hover:scale-105
            "
          />
        </div>

      </Card>
    </motion.div>
  );
}