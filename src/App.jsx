import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";

import Footer from "./components/Footer";
import { profileData } from "./data/portfolioData";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />

        {/* Section Tentang Saya */}
        <section id="tentang" className="max-w-5xl mx-auto px-6 pt-20 pb-4">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Profil Singkat
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1 mb-4">
              Tentang Saya
            </h2>
            <p className="text-slate-600 text-base leading-relaxed max-w-3xl">
              {profileData.about}
            </p>
          </div>
        </section>

        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}