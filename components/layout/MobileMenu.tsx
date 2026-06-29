"use client";

import { useState } from "react";
import Link from "next/link";

import { navigation } from "@/data/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-slate-800
        bg-slate-900/60
        text-xl
        text-slate-300
        transition-all
        duration-300
        hover:border-cyan-400
        hover:text-cyan-400
        hover:bg-slate-800
        "
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            absolute
            left-0
            top-full
            w-full
            border-b
            border-slate-800
            bg-background
          "
        >
          <nav className="mx-auto max-w-7xl px-6 py-6">

            <ul className="space-y-6">

              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="
                    block
                    rounded-lg
                    px-2
                    py-3
                    text-lg
                    font-medium
                    text-slate-300
                    transition-all
                    duration-300
                    hover:bg-slate-800
                    hover:pl-4
                    hover:text-cyan-400
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>

          </nav>
        </div>
      )}

    </div>
  );
}