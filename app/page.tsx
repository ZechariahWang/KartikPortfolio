import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Documents from "@/components/sections/documents";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <Documents />
      </main>
    </div>
  );
}
