import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, FlaskConical, Code2, Cpu, Users, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Core Expertise",
    icon: <BrainCircuit size={22} />,
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Data Analysis"],
  },
  {
    title: "AI & Research",
    icon: <FlaskConical size={22} />,
    skills: ["Transformers", "BERT", "BiLSTM", "CNNs", "Dataset Curation", "Statistical Evaluation", "XAI"],
  },
  {
    title: "Programming & Tools",
    icon: <Code2 size={22} />,
    skills: ["Python", "C/C++", "PyTorch", "TensorFlow", "Scikit-learn", "Git", "Firebase", "Linux"],
  },
  {
    title: "Systems & Computing",
    icon: <Cpu size={22} />,
    skills: ["OS Internals", "Network Simulation", "Computer Graphics (OpenGL)", "Secure Architectures"],
  },
  {
    title: "Professional Skills",
    icon: <Users size={22} />,
    skills: ["Technical Writing", "Research Presentation", "Analytical Thinking", "Team Collaboration"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white relative border-b border-indigo-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center md:justify-center gap-3">
            <Layers className="text-fuchsia-800" /> 
            Skills & <span className="text-fuchsia-800">Expertise</span>
          </h2>
          <p className="text-slate-600 text-lg">
            A curated stack of technologies and methodologies I use to drive innovation in AI and Systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-indigo-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-fuchsia-200 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-50 rounded-xl text-fuchsia-800 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-fuchsia-800 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-50 text-slate-600 text-sm font-medium rounded-lg border border-slate-200 hover:bg-fuchsia-50 hover:text-fuchsia-800 hover:border-fuchsia-200 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;