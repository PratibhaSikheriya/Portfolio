import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Leadership from "./components/Leadership";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen relative">
      <Navbar /> {/* The Floating Menu */}
      
      {/* Sections with IDs for scrolling */}
      <Hero />
      
      <div id="about">
        <About />
      </div>
      
      <div id="experience">
        <Experience />
        <Leadership />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="projects">
        <Projects />
      </div>
      
      <div id="contact">
        <Achievements />
        <Footer />
      </div>
    </main>
  );
}