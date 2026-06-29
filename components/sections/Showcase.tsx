"use client";

import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import ShowcaseCard from "@/components/showcase/ShowcaseCard";

import { showcaseProjects } from "@/data/showcase";
import { fadeUp } from "@/lib/animations";

export default function Showcase() {
  return (
    <Section id="showcase">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Documentation Showcase"
          description="A selection of documentation projects demonstrating my experience in creating user-focused, structured, and scalable technical documentation for SaaS products."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {showcaseProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUp(index * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <ShowcaseCard
                title={project.title}
                type={project.type}
                description={project.description}
                technologies={project.technologies}
                highlights={project.highlights}
                status={project.status}
                resources={project.resources}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}