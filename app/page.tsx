import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Showcase from "@/components/sections/Showcase";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Showcase />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}