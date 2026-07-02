"use client";

import {
  Search,
  FolderTree,
  PenTool,
  Camera,
  Users,
  ShieldCheck,
  Rocket,
} from "lucide-react";

import { motion } from "framer-motion";

type ProcessStep = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Research",
    description:
      "Understand the product, target audience, business goals and documentation requirements before writing begins.",
    icon: Search,
  },
  {
    title: "Information Gathering",
    description:
      "Collect information from product owners, developers, QA engineers and existing documentation.",
    icon: Users,
  },
  {
    title: "Information Architecture",
    description:
      "Organize content into logical modules, create the table of contents and define navigation flow.",
    icon: FolderTree,
  },
  {
    title: "Writing",
    description:
      "Write clear task-based documentation following Microsoft Style Guide principles.",
    icon: PenTool,
  },
  {
    title: "Screenshot Capture",
    description:
      "Capture annotated UI screenshots and match them with each procedure.",
    icon: Camera,
  },
  {
    title: "SME Review",
    description:
      "Validate technical accuracy with Subject Matter Experts before publication.",
    icon: Users,
  },
  {
    title: "QA Review",
    description:
      "Verify procedures, screenshots, formatting and user experience.",
    icon: ShieldCheck,
  },
  {
    title: "Publishing",
    description:
      "Publish the documentation and maintain future versions with release updates.",
    icon: Rocket,
  },
];

export default function DocumentationProcess() {
  return (
    <section className="relative py-32">
              <div className="mx-auto max-w-6xl px-6">

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
    Documentation Workflow
  </span>

  <h2
    className="
      mt-6

      text-5xl

      font-bold

      text-white
    "
  >
    Documentation Process
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
    Every user guide follows a structured documentation workflow to ensure technical
    accuracy, consistency, and an intuitive experience for end users.
  </p>

</motion.div>

<div className="mt-24">
<div className="relative">

{/* Vertical Timeline */}

<div
  className="
    absolute

    left-6
    top-0

    h-full
    w-px

    bg-gradient-to-b
    from-cyan-500/70
    via-cyan-400/30
    to-transparent
  "
/>

<div className="space-y-14">

  {PROCESS_STEPS.map(
    (step, index) => {

      const Icon = step.icon;

      return (

        <motion.div
          key={step.title}

          initial={{
            opacity: 0,
            x: -40,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          viewport={{
            once: true,
            amount: 0.3,
          }}

          transition={{
            delay: index * 0.08,
            duration: 0.45,
          }}

          className="
            relative

            flex
            items-start
            gap-8
          "
        >
                                  {/* Timeline Node */}

                                  <div
                        className="
                          relative
                          z-10

                          flex
                          h-12
                          w-12
                          shrink-0

                          items-center
                          justify-center

                          rounded-full

                          border
                          border-cyan-400/40

                          bg-slate-900

                          shadow-[0_0_25px_rgba(34,211,238,0.15)]
                        "
                      >
                        <Icon
                          className="
                            h-5
                            w-5
                            text-cyan-400
                          "
                        />
                      </div>

                      {/* Card */}

                      <motion.div

                        whileHover={{
                          y: -6,
                        }}

                        transition={{
                          duration: 0.2,
                        }}

                        className="
                          flex-1

                          rounded-3xl

                          border
                          border-white/10

                          bg-white/[0.03]

                          p-8

                          backdrop-blur-xl

                          transition-all
                          duration-300

                          hover:border-cyan-400/40

                          hover:bg-white/[0.05]

                          hover:shadow-[0_20px_50px_rgba(34,211,238,0.08)]
                        "
                      >
                                                <div
                          className="
                            flex
                            items-center
                            justify-between
                          "
                        >
                          <h3
                            className="
                              text-2xl
                              font-semibold
                              text-white
                            "
                          >
                            {step.title}
                          </h3>

                          <span
                            className="
                              rounded-full

                              border
                              border-cyan-500/20

                              bg-cyan-500/10

                              px-3
                              py-1

                              text-xs
                              font-medium

                              text-cyan-400
                            "
                          >
                            Step {index + 1}
                          </span>

                        </div>

                        <p
                          className="
                            mt-5

                            max-w-3xl

                            text-lg
                            leading-8

                            text-slate-400
                          "
                        >
                          {step.description}
                        </p>

                      </motion.div>

                    </motion.div>

                  );

                }
              )}

            </div>
            </div>

</div>

</div>

{/* Bottom CTA */}

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
  delay: 0.2,
}}

className="
  mx-auto
  mt-24
  max-w-4xl
  px-6
"
>

<div
  className="
    rounded-[32px]

    border
    border-white/10

    bg-gradient-to-br
    from-slate-900
    via-slate-900
    to-slate-950

    p-10

    text-center

    shadow-[0_30px_80px_rgba(0,0,0,0.35)]
  "
>

  <div
    className="
      mx-auto

      flex
      h-16
      w-16

      items-center
      justify-center

      rounded-full

      bg-cyan-500/10

      ring-1
      ring-cyan-500/20
    "
  >
    <Rocket
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
    From Planning to Publishing
  </h3>

  <p
    className="
      mx-auto

      mt-5

      max-w-2xl

      text-lg
      leading-8

      text-slate-400
    "
  >
    Every documentation project follows a structured workflow
    focused on clarity, consistency, technical accuracy,
    usability, and long-term maintainability.
  </p>

</div>

</motion.div>

{/* Decorative Glow */}

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