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
    // ADDED: overflow-x-hidden w-full to prevent gray bars
    <div className="font-sans antialiased bg-zinc-950 text-zinc-100 selection:bg-purple-500 selection:text-white overflow-x-hidden w-full">
      <Navbar />
      
      <main className="pt-20">
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

      <footer className="py-12 text-center text-zinc-600 border-t border-white/10 mt-20 bg-zinc-950">
        <div className="container mx-auto px-6">
           <h2 className="text-2xl font-bold text-white mb-2">Susmoy Biswas</h2>
           <p className="mb-6 text-sm">AI Researcher • System Builder • Resilience Learner</p>
           <p className="text-xs opacity-50">&copy; 2025 Susmoy Biswas. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;