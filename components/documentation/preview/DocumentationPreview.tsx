import DocumentationViewer from "../viewer/DocumentationViewer";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { DocumentationProject } from "@/types/documentation";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type DocumentationPreviewProps = {
  project: DocumentationProject;
};

export default function DocumentationPreview({
  project,
}: DocumentationPreviewProps) {
  return (
    <section className="py-28">
     <div className="ml-4">  {/*<Container>*/}
        <SectionHeading
         
          eyebrow="Preview"
          title="Documentation Preview"
          description="Explore selected pages from the documentation. The complete document contains confidential information and is available upon request."
        />
      </div>{/*   </Container> */}

        <div className="mt-16">
         <DocumentationViewer
         /> {/* slides={project.gallery} */} 
        </div> 
        <Container>
            <div className="mt-12 flex justify-center">
          <Link
            href="#documentation-access"
            className="
              inline-flex
              items-center
              gap-3

              rounded-full

              border
              border-cyan-500/20

              bg-cyan-500/10

              px-7
              py-4

              font-medium
              text-cyan-300

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-cyan-400/50
              hover:bg-cyan-500/20
              hover:text-cyan-200
              hover:shadow-[0_15px_35px_rgba(34,211,238,0.18)]
            "
          >
            View Documentation Gallery

            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}