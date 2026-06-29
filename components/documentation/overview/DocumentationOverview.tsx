"use client";

import {
  Users,
  BookOpen,
  Monitor,
  Package,
} from "lucide-react";

import type { DocumentationProject } from "@/types/documentation";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type Props = {
  project: DocumentationProject;
};

const icons = {
  users: Users,
  book: BookOpen,
  monitor: Monitor,
  package: Package,
};

export default function DocumentationOverview({
  project,
}: Props) {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Overview"
          title="Project Overview"
          description="Understand the purpose, audience, and scope of this documentation project."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* Summary */}

          <div>
            <p className="text-lg leading-8 text-slate-400">
              {project.overview.summary}
            </p>
          </div>

          {/* Information Cards */}

          <div className="grid gap-6 sm:grid-cols-2">
            {project.overview.items.map((item) => {
              const Icon =
                icons[item.icon as keyof typeof icons];

              return (
                <Card key={item.title}>
                  <Icon
                    size={28}
                    className="mb-5 text-cyan-400"
                  />

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.value}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}