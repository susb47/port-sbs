import React from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Github, MonitorPlay, Activity, ShieldPlus, Orbit } from "lucide-react";

const projectsList = [
  {
    id: 1,
    title: "Casual Bio Twins Simulation",
    description: "An interactive simulation framework modeling biological twins for medical and causal inference research.",
    icon: <Activity />,
    tags: ["Simulation", "Causal Inference", "Healthcare AI"],
    demoLink: "https://susb47.github.io/casual-bio-twin/", // Replace with your actual deployed link
    githubLink: "https://github.com/susb47/casual-bio-twin",
    highlight: true,
  },
  {
    id: 2,
    title: "MedGuard UI",
    description: "A secure, intuitive medical interface system designed for monitoring patient data and deploying AI-driven health predictions.",
    icon: <ShieldPlus />,
    tags: ["React", "UI/UX", "System Design"],
    demoLink: "medguard-ui.vercel.app", // Replace with your actual deployed link
    githubLink: "https://github.com/susb47/medguard-ui",
    highlight: true,
  },
  {
    id: 3,
    title: "Multimodal Autism Screening",
    description: "A comprehensive web application and backend API utilizing multimodal data streams to assist in the early detection of autism.",
    icon: <MonitorPlay />,
    tags: ["Web App", "API Design", "Multimodal AI"],
    demoLink: "https://autism-thesis-app.vercel.app", 
    githubLink: "https://github.com/susb47/autism-thesis-app",
    highlight: true,
  },
  {
    id: 4,
    title: "OpenGL Solar System",
    description: "A physics-based, 3D animated solar system simulation focusing on rendering pipelines, spatial mathematics, and real-time lighting.",
    icon: <Orbit />,
    tags: ["C++", "OpenGL", "Computer Graphics"],
    githubLink: "https://github.com/susb47/cg-solar-animation",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 relative border-b border-indigo-50">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <Code2 className="text-fuchsia-800" /> 
            Featured <span className="text-fuchsia-800">Projects</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Systems, simulations, and applications built at the intersection of AI and software engineering.
          </p>
        </div>

        {/* Projects Grid - Optimized for 4 items (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`bg-white rounded-2xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-all group relative overflow-hidden ${
                project.highlight ? 'border-2 border-indigo-100 hover:border-fuchsia-300' : 'border border-slate-200 hover:border-indigo-300'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className={`p-3 rounded-xl shrink-0 transition-transform group-hover:scale-110 ${
                  project.highlight ? 'bg-fuchsia-50 text-fuchsia-700' : 'bg-indigo-50 text-indigo-600'
                }`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-fuchsia-800 transition-colors leading-tight">
                  {project.title}
                </h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 relative z-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-500 text-xs font-semibold rounded border border-slate-200 group-hover:border-slate-300 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 relative z-10 mt-auto">
                {project.demoLink && project.demoLink !== "#" && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-fuchsia-50 text-fuchsia-800 border border-fuchsia-100 px-4 py-2 rounded-lg text-sm font-bold hover:bg-fuchsia-800 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${
                    project.demoLink && project.demoLink !== "#"
                      ? 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900 w-auto' 
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 flex-1'
                  }`}
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;