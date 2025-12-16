import React from 'react';
import Navbar from './components/Navbar';
import About from './sections/About';
import Skills from './sections/Skills';
import Research from './sections/Research'; // <-- Import this

// Temporary Placeholder Component
const SectionPlaceholder = ({ id, title, color }) => (
  <section id={id} className={`min-h-[50vh] flex items-center justify-center border-t border-white/5 ${color}`}>
    <div className="text-center opacity-50">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
        {title}
      </h2>
      <p className="text-zinc-500 mt-2 font-mono text-sm">Waiting for instructions...</p>
    </div>
  </section>
);

function App() {
  return (
    <div className="font-sans antialiased bg-zinc-950 text-zinc-100 selection:bg-green-500 selection:text-black">
      <Navbar />
      
      <main className="pt-20">
        
        <About />
        <Skills /> 
        <Research /> {/* <-- Added here */}

        {/* Pending Sections */}
        <SectionPlaceholder id="projects" title="Featured Projects" color="bg-zinc-950" />
        <SectionPlaceholder id="achievements" title="Achievements" color="bg-zinc-900/50" />
        <SectionPlaceholder id="awards" title="Honors & Awards" color="bg-zinc-950" />
        <SectionPlaceholder id="result" title="Academic Results" color="bg-zinc-900/50" />
        <SectionPlaceholder id="extra-curricular" title="Beyond Code" color="bg-zinc-950" />
        <SectionPlaceholder id="hall-of-failure" title="Hall of Failure" color="bg-red-950/10" />

      </main>

      <footer className="py-12 text-center text-zinc-600 border-t border-white/10 mt-20">
        <p>&copy; 2025 Susmoy Biswas. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;