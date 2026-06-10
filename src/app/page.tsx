import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import About from "@/components/ui/About";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";
import Contact from "@/components/ui/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}