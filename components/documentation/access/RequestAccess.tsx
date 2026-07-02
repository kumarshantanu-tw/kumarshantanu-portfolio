"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  Lock,
  ShieldCheck,
  FileText,
  Eye,
  ArrowRight,
} from "lucide-react";

export default function RequestAccess() {
  return (
    <section className="relative py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div

          initial={{
            opacity: 0,
            y: 20,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.5,
          }}

          className="text-center"
        >

          <span
            className="
              inline-flex

              rounded-full

              border
              border-cyan-500/20

              bg-cyan-500/10

              px-4
              py-2

              text-sm
              font-medium

              text-cyan-400
            "
          >
            Confidential Documentation
          </span>

          <h2
            className="
              mt-6

              text-5xl

              font-bold

              text-white
            "
          >
            Request Full Documentation
          </h2>

          <p
            className="
              mx-auto

              mt-6

              max-w-3xl

              text-xl
              leading-9

              text-slate-400
            "
          >
            The portfolio showcases selected documentation pages.
            The complete user guide contains proprietary product
            information and is available upon request.
          </p>

        </motion.div>

        {/* Card */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.5,
            delay: 0.15,
          }}

          className="mt-20"
        >

          <div
            className="
              overflow-hidden

              rounded-[36px]

              border
              border-white/10

              bg-gradient-to-br
              from-slate-900
              via-slate-900
              to-slate-950

              shadow-[0_35px_90px_rgba(0,0,0,0.35)]
            "
          >

            <div
              className="
                grid

                gap-12

                lg:grid-cols-2
              "
            >
                              {/* Left */}

              <div className="p-12">

<div
  className="
    flex
    h-16
    w-16

    items-center
    justify-center

    rounded-full

    bg-cyan-500/10
  "
>
  <Lock
    className="
      h-8
      w-8

      text-cyan-400
    "
  />
</div>

<h3
  className="
    mt-8

    text-3xl

    font-bold

    text-white
  "
>
  Complete Documentation Package
</h3>

<p
  className="
    mt-5

    text-lg
    leading-8

    text-slate-400
  "
>
  Due to confidentiality agreements,
  only selected documentation pages are publicly
  available. The complete documentation package
  can be shared with recruiters and hiring managers
  during the interview process.
</p>

                {/* Feature List */}

                <div className="mt-10 space-y-5">

                  {[
                    {
                      icon: FileText,
                      title: "Complete User Guide",
                    },
                    {
                      icon: Eye,
                      title: "Live Documentation Walkthrough",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Confidential Information Protected",
                    },
                  ].map((item) => {

                    const Icon = item.icon;

                    return (

                      <div
                        key={item.title}
                        className="
                          flex
                          items-center
                          gap-4
                        "
                      >

                        <div
                          className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center

                            rounded-full

                            bg-cyan-500/10

                            text-cyan-400
                          "
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        <span
                          className="
                            text-lg
                            text-slate-300
                          "
                        >
                          {item.title}
                        </span>

                      </div>

                    );

                  })}

                </div>

                {/* CTA */}

                <div className="mt-12 flex flex-wrap gap-4">

                  <Link
                    href="/contact"
                    className="
                      inline-flex
                      items-center
                      gap-3

                      rounded-2xl

                      bg-cyan-500

                      px-7
                      py-4

                      font-semibold

                      text-slate-950

                      transition-all
                      duration-300

                      hover:scale-[1.02]
                      hover:bg-cyan-400
                    "
                  >
                    Request Documentation

                    <ArrowRight className="h-5 w-5" />

                  </Link>

                  <Link
                    href="/projects"
                    className="
                      inline-flex
                      items-center
                      justify-center

                      rounded-2xl

                      border
                      border-white/10

                      px-7
                      py-4

                      font-medium

                      text-white

                      transition-all

                      hover:border-cyan-400
                      hover:text-cyan-400
                    "
                  >
                    Explore More Projects
                  </Link>

                </div>

              </div>

              {/* Right Panel */}

              <div
                className="
                  relative

                  overflow-hidden

                  border-l
                  border-white/10

                  bg-gradient-to-br
                  from-cyan-500/10
                  via-transparent
                  to-transparent

                  p-12
                "
              >

                <div
                  className="
                    rounded-3xl

                    border
                    border-white/10

                    bg-white/5

                    p-8

                    backdrop-blur-xl
                  "
                >

                  <h4
                    className="
                      text-2xl
                      font-bold

                      text-white
                    "
                  >
                    What's Included?
                  </h4>

                  <div className="mt-8 space-y-6">

                    <div>

                      <p className="font-semibold text-white">
                        📄 User Guide
                      </p>

                      <p className="mt-2 text-slate-400">
                        Step-by-step instructions with screenshots,
                        notes, and best practices.
                      </p>

                    </div>

                    <div>

                      <p className="font-semibold text-white">
                        🧩 Module Documentation
                      </p>

                      <p className="mt-2 text-slate-400">
                        Employee, Attendance, Shift, Leave,
                        Payroll, Reports, and Approval workflows.
                      </p>

                    </div>

                    <div>

                      <p className="font-semibold text-white">
                        🔄 Documentation Workflow
                      </p>

                      <p className="mt-2 text-slate-400">
                        Information architecture, SME review,
                        QA validation, versioning, and publishing process.
                      </p>

                    </div>

                    <div>

                      <p className="font-semibold text-white">
                        📚 Release Documentation
                      </p>

                      <p className="mt-2 text-slate-400">
                        Release notes, feature updates,
                        and documentation maintenance examples.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Background Glow */}

      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          bottom-[-180px]

          h-[420px]
          w-[420px]

          -translate-x-1/2

          rounded-full

          bg-cyan-500/10

          blur-[150px]
        "
      />

    </section>
  );
}