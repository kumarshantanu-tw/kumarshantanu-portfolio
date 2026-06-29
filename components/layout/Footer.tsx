import Container from "@/components/ui/Container";
import { contact } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12">
      <Container>

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Left */}

          <div>

            <h3 className="text-2xl font-black text-white">
              KS
            </h3>

            <p className="mt-2 text-slate-400">
              Software Technical Writer
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Built with Next.js • React • Tailwind CSS
            </p>

            <p className="mt-2 text-sm text-slate-600">
              © 2026 Kumar Shantanu. All rights reserved.
            </p>

          </div>

          {/* Right */}

          <div className="flex gap-6">

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="text-slate-400 transition-colors hover:text-cyan-400"
            >
              Email
            </a>

          </div>

        </div>

      </Container>
    </footer>
  );
}