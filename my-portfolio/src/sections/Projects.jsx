import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  ExternalLink, 
  Code2, 
  MonitorPlay, 
  Layout, 
  Activity, 
  Star 
} from "lucide-react";

// --- DATA: Project Portfolio ---
const projects = [
  {
    id: 1,
    title: "Regex to NFA Converter",
    summary: "Compiler-theory implementation converting regular expressions into nondeterministic finite automata.",
    tech: ["C++", "Automata Theory"],
    category: "Theory & Systems",
    link: "https://github.com/susb47/regex-to-nfa-converter",
    icon: <Code2 size={40} className="text-blue-400" />,
    featured: false
  },
  {
    id: 2,
    title: "Solar System Animation",
    summary: "Real-time 3D solar system simulation using transformation matrices and the graphics pipeline.",
    tech: ["C++", "OpenGL", "GLUT"],
    category: "Graphics & Simulation",
    link: "https://github.com/susb47/cg-solar-animation",
    icon: <MonitorPlay size={40} className="text-orange-400" />,
    featured: false
  },
  {
    id: 3,
    title: "MedGuard UI",
    summary: "Healthcare-focused UI prototype designed for secure and user-friendly medical data interaction.",
    tech: ["React", "Tailwind CSS"],
    category: "Product & UI",
    link: "https://github.com/susb47/medguard-ui",
    demo: "https://medguard-ui.vercel.app/", // <-- Added Live Demo
    icon: <Layout size={40} className="text-purple-400" />,
    featured: false
  },
  {
    id: 4,
    title: "CasualBioTwin",
    summary: "Conceptual digital twin system integrating lifestyle, biometric signals, and AI-driven health insights.",
    tech: ["ML", "System Design", "Python"],
    category: "Applied AI Systems",
    link: "https://github.com/susb47/casual-bio-twin",
    demo: "https://susb47.github.io/casual-bio-twin/", // <-- Added Live Demo
    icon: <Activity size={40} className="text-green-500" />,
    featured: true 
  }
];

const categories = ["All", "Theory & Systems", "Graphics & Simulation", "Product & UI", "Applied AI Systems"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Selected <span className="text-green-500">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            From theoretical computer science to applied AI systems and production-grade interfaces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-green-500 text-black border-green-500"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-green-500/50 hover:text-green-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className={`group relative bg-zinc-900/40 border rounded-xl p-6 flex flex-col h-full hover:-translate-y-1 transition-all duration-300 ${
                  project.featured 
                    ? "border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.1)]" 
                    : "border-zinc-800 hover:border-green-500/30"
                }`}
              >
                {/* Flagship Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 text-green-500 animate-pulse">
                    <Star size={20} fill="currentColor" />
                  </div>
                )}

                {/* Icon Thumbnail */}
                <div className="mb-6 p-4 bg-zinc-950 rounded-lg w-fit border border-zinc-800 group-hover:border-green-500/20 transition-colors">
                  {project.icon}
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded border border-zinc-700/50">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links Footer (Updated for Demos) */}
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-bold">
                    {project.category}
                  </span>
                  
                  <div className="flex gap-4">
                    {/* Render Demo Button if link exists */}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-green-400 transition-colors"
                      >
                        <ExternalLink size={16} /> Demo
                      </a>
                    )}
                    
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-green-400 transition-colors"
                    >
                      <Github size={18} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;