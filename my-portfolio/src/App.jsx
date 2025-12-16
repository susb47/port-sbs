import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    // Changed bg-white to bg-zinc-950 and text-gray-900 to text-zinc-100
    <div className="font-sans antialiased bg-zinc-950 text-zinc-100 selection:bg-violet-500 selection:text-white">
      <Navbar />
      <main>
        {/* We might remove Hero later or merge it, but for now let's keep it */}
        <Hero /> 
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;