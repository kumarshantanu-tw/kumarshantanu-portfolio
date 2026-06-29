"use client";

import Link from "next/link";

import { navigation } from "@/data/navigation";
import useActiveSection from "@/hooks/useActiveSection";

export default function NavLinks() {
  const activeSection = useActiveSection();

  return (
    <nav>
      <ul className="flex items-center gap-8">
        {navigation.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`
                  group
                  relative
                  block
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  focus:outline-none

                  ${
                    isActive
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-cyan-400"
                  }
                `}
              >
                {item.label}

                <span
                  className={`
                    absolute
                    -bottom-1
                    left-0
                    h-0.5
                    bg-cyan-400
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}