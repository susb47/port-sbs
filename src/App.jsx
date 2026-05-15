import React from 'react';
import Navbar from './components/Navbar';
import About from './sections/About';
import Skills from './sections/Skills';
import Research from './sections/Research';
import Thesis from './sections/Thesis';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Awards from './sections/Awards';
import Certificates from './sections/Certificates';
import Academic from './sections/Academic';
import ExtraCurricular from './sections/ExtraCurricular';
import HallOfFailure from './sections/HallOfFailure';

function App() {
  return (
    // NEW: Clean white background, dark slate text, dark magenta selection highlight
    <div className="font-sans antialiased bg-white text-slate-800 selection:bg-fuchsia-800 selection:text-white overflow-x-hidden w-full">
      <Navbar />
      
      <main className="pt-20">
        {/* Note: We will need to update the colors inside these individual files next! */}
        <About />
        <Skills /> 
        <Research /> 
        <Thesis />
        <Projects />
        <Achievements />
        <Awards />
        <Certificates />
        <Academic />
        <ExtraCurricular />
        <HallOfFailure />
      </main>

      {/* NEW: Minimalist Footer with Periwinkle border */}
      <footer className="py-12 text-center bg-slate-50 border-t border-indigo-100 mt-20">
        <div className="container mx-auto px-6">
           <h2 className="text-2xl font-bold text-slate-900 mb-2">Susmoy Biswas</h2>
           <p className="mb-6 text-sm text-slate-600">AI Researcher • System Builder • Resilience Learner</p>
           <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} Susmoy Biswas. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;