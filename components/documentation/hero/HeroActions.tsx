"use client";

import { Lock } from "lucide-react";

import type { DocumentationProject } from "@/types/documentation";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

type HeroActionsProps = {
  project: DocumentationProject;
};

export default function HeroActions({
  project,
}: HeroActionsProps) {
  return (
    <Card compact>

      <Badge variant="warning">
        <Lock
          size={14}
          className="mr-2"
        />
        Confidential Work Sample
      </Badge>

      <p className="mt-5 leading-7 text-slate-400">
        {project.access.message}
      </p>

      <div className="mt-8">
        <Button
          href={project.access.requestUrl}
          external
        >
          Request Full Documentation
        </Button>
      </div>

    </Card>
  );
}