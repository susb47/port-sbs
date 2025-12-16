import React from 'react';
import { projects } from '../data/projects';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition" />
              </div>
              <p className="text-gray-500 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;