"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

import HeroContent from "@/components/hero/HeroContent";
import HeroImage from "@/components/hero/HeroImage";
import { motion } from "framer-motion";

import {
  fadeLeft,
  fadeRight,
} from "@/lib/animations";
export default function Hero() {
  return (
    <Section id="home" className="pt-40">
      <Container>
      <div className="grid items-center gap-16 lg:grid-cols-2">

<motion.div
  variants={fadeRight}
  initial="hidden"
  animate="visible"
>
  <HeroContent />
</motion.div>

<motion.div
  variants={fadeLeft}
  initial="hidden"
  animate="visible"
>
  <HeroImage />
</motion.div>

</div>
      </Container>
    </Section>
  );
}