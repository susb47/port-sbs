import React from "react";
import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  FlaskConical, 
  Terminal, 
  Cpu, 
  Users, 
  Zap 
} from "lucide-react";

const skillCategories = [
  {
    title: "Core Expertise",
    icon: <BrainCircuit className="w-6 h-6" />,
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Data Analysis"],
  },
  {
    title: "AI & Research",
    icon: <FlaskConical className="w-6 h-6" />,
    skills: ["Transformers", "BERT", "BiLSTM", "CNNs", "Dataset Curation", "Statistical Evaluation", "XAI"],
  },
  {
    title: "Programming & Tools",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Python", "C/C++", "PyTorch", "TensorFlow", "Scikit-learn", "Git", "Firebase", "Linux"],
  },
  {
    title: "Systems & Computing",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["OS Internals", "Network Simulation", "Computer Graphics (OpenGL)", "Secure Architectures"],
  },
  {
    title: "Professional Skills",
    icon: <Users className="w-6 h-6" />,
    skills: ["Technical Writing", "Research Presentation", "Analytical Thinking", "Team Collaboration"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Glow (Spotify Green) */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <Zap className="text-green-500 fill-green-500" /> 
            Technical Arsenal
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            A curated stack of technologies and methodologies I use to drive innovation in AI and Systems.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-zinc-950 rounded-lg text-green-400 group-hover:text-green-300 group-hover:scale-110 transition-transform duration-300 border border-zinc-800 group-hover:border-green-500/30">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-zinc-800/80 text-zinc-300 text-sm rounded-full border border-zinc-700/50 hover:border-green-500/30 hover:text-green-400 hover:bg-green-500/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;