import type { DocumentationProject } from "@/types/documentation";

import Container from "@/components/ui/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroActions from "./HeroActions";

type DocumentationHeroProps = {
  project: DocumentationProject;
};

export default function DocumentationHero({
  project,
}: DocumentationHeroProps) {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-2">

          <HeroContent project={project} />

          <div className="space-y-6">
            <HeroImage project={project} />

            <HeroActions project={project} />
          </div>

        </div>
      </Container>
    </section>
  );
}