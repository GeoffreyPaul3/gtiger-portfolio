import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800 overflow-hidden">
      <div className="dark:bg-black bg-gray-800/85 dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
      <div className="max-w-7xl mx-auto p-8 ">
        <Navbar />
        <Hero />
      </div>
      <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full">

      </div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
 