import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import About from "@/components/ui/About";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}