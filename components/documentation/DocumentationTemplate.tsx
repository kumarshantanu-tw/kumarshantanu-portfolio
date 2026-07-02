import type { DocumentationProject } from "@/types/documentation";

import DocumentationHero from "./hero/DocumentationHero";
import DocumentationOverview from "./overview/DocumentationOverview";
import DocumentationPreview from "./preview/DocumentationPreview";

type DocumentationTemplateProps = {
  project: DocumentationProject;
};

export default function DocumentationTemplate({
  project,
}: DocumentationTemplateProps) {
  return (
    <main className="min-h-screen bg-background text-white">
      <DocumentationHero project={project} />

      <DocumentationOverview project={project} />

      <DocumentationPreview project={project} />
    </main>
  );
}