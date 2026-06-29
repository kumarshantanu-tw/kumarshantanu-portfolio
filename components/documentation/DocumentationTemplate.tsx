import { DocumentationProject } from "@/types/documentation";

import DocumentationHero from "./hero/DocumentationHero";

type DocumentationTemplateProps = {
  project: DocumentationProject;
};

export default function DocumentationTemplate({
  project,
}: DocumentationTemplateProps) {
  return (
    <main className="min-h-screen bg-background text-white">

      <DocumentationHero
        project={project}
      />

    </main>
  );
}