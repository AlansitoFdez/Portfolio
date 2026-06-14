import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import About from "@/components/ui/About";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";
import Contact from "@/components/ui/Contact";
import BackToTop from "@/components/common/BackToTop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Alan Fernández Diosdado
      </footer>
      <BackToTop />
    </main>
  );
}