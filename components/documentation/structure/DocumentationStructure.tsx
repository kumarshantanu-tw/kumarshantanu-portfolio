"use client";

import { motion } from "framer-motion";

import type { DocumentationProject } from "@/types/documentation";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { fadeUp, staggerContainer } from "@/lib/animations";

type DocumentationStructureProps = {
  project: DocumentationProject;
};

export default function DocumentationStructure({
  project,
}: DocumentationStructureProps) {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Documentation"
          title="Documentation Structure"
          description="A high-level overview of the major modules covered in this user guide."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {project.structure.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp()}
            >
              <Card className="h-full">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl font-bold text-cyan-400">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}