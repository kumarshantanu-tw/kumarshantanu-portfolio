"use client";

import { useState } from "react";

import Coverflow from "./Coverflow";

type Screenshot = {
  id: number;
  image: string;
};

const screenshots: Screenshot[] = [
  { id: 1, image: "/images/payroll/payroll-cover.png" },
  { id: 2, image: "/images/payroll/toc.png" },
  { id: 3, image: "/images/payroll/overview.png" },
  { id: 4, image: "/images/payroll/commonfeature.png" },
  { id: 5, image: "/images/payroll/login.png" },
  { id: 6, image: "/images/payroll/dashboard.png" },
  { id: 7, image: "/images/payroll/shift.png" },
  { id: 8, image: "/images/payroll/shiftdetail.png" },
];

export default function DocumentationViewer() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="
        relative
        mt-16
        h-[85vh]
        w-full
        overflow-hidden
       
        border-y
        border-white/10
        bg-[#040B1E]
      "
    >
      {/* Background */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#07152E]
          via-[#050B1B]
          to-[#020617]
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

<div
  className="
    absolute
    inset-0
    pointer-events-none
    z-10
  "
  style={{
    background:
      "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,.28) 100%)",
  }}
/>

      <Coverflow
        screenshots={screenshots}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
    </section>
  );
}