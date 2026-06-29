"use client";

import Link from "next/link";
import {
  FileText,
  Clock3,
  ArrowRight,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Tooltip from "@/components/ui/Tooltip";
import type { ShowcaseResource } from "@/data/showcase";

{/* type Resource = {
  title: string;
  href: string;
  type: "pdf" | "website" | "github" | "video" | "docx";
}; */}

type ShowcaseCardProps = {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  highlights: string[];
  status: string;
  resources: ShowcaseResource[];
};

export default function ShowcaseCard({
  title,
  type,
  description,
  technologies,
  highlights,
  status,
  resources,
}: ShowcaseCardProps) {
  return (
    <Card className="h-full">
      <div className="flex h-full flex-col">

        {/* Icon */}

        <div
          className="
            mb-6
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-cyan-500/10
            shadow-[0_0_20px_rgba(34,211,238,0.15)]
          "
        >
          <FileText
            size={28}
            className="text-cyan-400"
          />
        </div>

        {/* Title */}

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Type */}

        <p className="mt-2 font-medium text-cyan-400">
          {type}
        </p>

        {/* Description */}

        <p className="mt-5 leading-7 text-slate-400">
          {description}
        </p>

        {/* Technologies */}

        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <Badge key={tech}>
              {tech}
            </Badge>
          ))}
        </div>

        {/* Highlights */}

        <ul className="mt-8 space-y-3">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-slate-300"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Footer */}

        <div className="mt-auto flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            {status}
          </span>

          {resources.length > 0 ? (
            <Link
              href={resources[0].href}
              className="
                flex
                items-center
                gap-2
                text-cyan-400
                transition-all
                duration-300
                hover:text-cyan-300
              "
            >
              <span className="text-sm font-medium">
                View Documentation
              </span>

              <ArrowRight size={18} />
            </Link>
          ) : (
            <Tooltip content="Documentation samples will be added after removing confidential and proprietary company information.">
              <div
                className="
                  flex
                  cursor-default
                  items-center
                  gap-2
                  text-amber-400
                "
              >
                <Clock3 size={18} />

                <span className="text-sm font-medium">
                  Coming Soon
                </span>
              </div>
            </Tooltip>
          )}
        </div>
      </div>
    </Card>
  );
}