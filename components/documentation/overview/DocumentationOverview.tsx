"use client";

import {
  Users,
  Monitor,
  BookOpen,
  Package,
  CheckCircle2,
} from "lucide-react";

import type { DocumentationProject } from "@/types/documentation";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

type DocumentationOverviewProps = {
  project: DocumentationProject;
};

const iconMap = {
  users: Users,
  monitor: Monitor,
  book: BookOpen,
  package: Package,
};

export default function DocumentationOverview({
  project,
}: DocumentationOverviewProps) {
  return (
    <section className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Documentation"
          title="About this Documentation"
          description="A comprehensive overview of the documentation project, its audience, and the key functional modules covered."
        />

        <Card className="mt-16">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">

            {/* LEFT */}

            <div>

              <p className="text-lg leading-8 text-slate-400">
                {project.overview.summary}
              </p>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">

                {project.overview.items.map((item) => {
                  const Icon =
                    iconMap[
                      item.icon as keyof typeof iconMap
                    ];

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4"
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          bg-cyan-500/10
                        "
                      >
                        <Icon
                          size={22}
                          className="text-cyan-400"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 leading-7 text-slate-400">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT */}

            <div>

              <h3 className="text-2xl font-semibold text-white">
                Key Modules Covered
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Major modules documented in this user guide.
              </p>

              <div className="mt-8 space-y-5">

                {project.structure.map((module) => (
                  <div
                    key={module.title}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2
                      size={22}
                      className="
                        mt-1
                        shrink-0
                        text-cyan-400
                      "
                    />

                    <div>
                      <h4 className="font-medium text-white">
                        {module.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {module.description}
                      </p>
                    </div>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </Card>
      </Container>
    </section>
  );
}