"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Badge from "@/components/ui/Badge";
import { fadeLeft } from "@/lib/animations";

export default function HeroImage() {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      animate="visible"
      className="relative flex justify-center lg:justify-end"
    >
      {/* Background Glow */}
      <div className="absolute h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Profile Card */}
      <div
        className="
          relative
          w-96
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/60
          p-8
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(34,211,238,0.08)]
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-cyan-400/40
          hover:shadow-[0_25px_80px_rgba(34,211,238,0.15)]
        "
      >
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-cyan-400/40">
            <Image
              src="/images/profile.png"
              alt="Kumar Shantanu"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Name */}
          <h3 className="mt-6 text-2xl font-bold text-white">
            Kumar Shantanu
          </h3>

          {/* Role */}
          <p className="mt-2 text-center text-slate-400">
            Software Technical Writer
          </p>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Badge>DITA XML</Badge>
            <Badge>API Docs</Badge>
            <Badge>Markdown</Badge>
            <Badge>SaaS</Badge>
          </div>
        </div>
      </div>
    </motion.div>
  );
}