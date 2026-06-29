"use client";

import {
  FileText,
  Wrench,
  Laptop,
  Workflow,
} from "lucide-react";

import { motion } from "framer-motion";

import { skillGroups } from "@/data/skills";
import { fadeUp } from "@/lib/animations";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const icons = {
  Documentation: FileText,
  Tools: Wrench,
  Technologies: Laptop,
  Methodologies: Workflow,
};

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills & Expertise"
          description="Technologies, tools, and workflows I use to create clear, scalable, and user-focused technical documentation."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon =
              icons[group.title as keyof typeof icons];

            return (
              <motion.div
                key={group.title}
                variants={fadeUp(index * 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
              >
                <Card className="h-full">
                  <div className="mb-6 flex items-center gap-3">
                    <Icon
                      size={24}
                      className="text-cyan-400"
                    />

                    <h3 className="text-2xl font-bold text-white">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <Badge key={skill}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}