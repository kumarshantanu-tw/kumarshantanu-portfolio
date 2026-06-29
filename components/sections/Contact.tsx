import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>

        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          description="I'm currently open to Software Technical Writer and Documentation Engineer opportunities. Feel free to reach out."
        />

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left Column */}

          <Card>

            <h3 className="text-2xl font-bold text-white">
              Get in Touch
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Whether you have a job opportunity, a project, or just want to connect,
              I'd be happy to hear from you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Button href={`mailto:${contact.email}`} >
                Email Me
              </Button>

              <Button href={contact.resume} variant="secondary">
              View Resume
              </Button>

            </div>

          </Card>

          {/* Right Column */}

          <Card>

            <div className="space-y-8">

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  Email
                </p>

                <a
                  href={`mailto:${contact.email}`}
                  className="mt-2 block text-lg font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  {contact.email}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  Location
                </p>

                <p className="mt-2 text-lg font-medium text-slate-200">
                  {contact.location}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  LinkedIn
                </p>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-lg font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  View Profile →
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  GitHub
                </p>

                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-lg font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  View Repositories →
                </a>
              </div>

            </div>

          </Card>

        </div>

      </Container>
    </Section>
  );
}