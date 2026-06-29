import { notFound } from "next/navigation";

import DocumentationTemplate from "@/components/documentation/DocumentationTemplate";
import { documentationProjects } from "@/data/documentationProjects";

export default async function DocumentationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = documentationProjects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <DocumentationTemplate
      project={project}
    />
  );
}