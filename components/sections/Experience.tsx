"use client";

import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import { fadeUp } from "@/lib/animations";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          description="Creating clear, structured, and user-focused documentation that helps customers successfully use SaaS products."
        />

        <div className="mt-14 space-y-10">
          {experiences.map((job, index) => (
            <motion.div
              key={job.company}
              variants={fadeUp(index * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card>
                <div className="flex flex-col gap-8">
                  {/* Header */}
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {job.role}
                    </h3>

                    <p className="mt-2 text-lg font-medium text-cyan-400">
                      {job.company}
                    </p>

                    <p className="mt-1 inline-flex text-sm text-slate-300">
                      {job.duration}
                    </p>
                  </div>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {job.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                  {/* Responsibilities */}
                  <ul className="space-y-4">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-4 text-slate-300"
                      >
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-400" />

                        <span className="leading-7">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
