import React from "react";
import { motion } from "framer-motion";
import { Play, Users, BookOpen } from "lucide-react";
import profileImg from "../assets/susmoy.jpg"; // Adjust if your image name is different

const About = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 bg-gradient-to-b from-indigo-50/80 to-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12">
          
          {/* Profile Image (Album Art Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group w-64 h-64 md:w-80 md:h-80 shrink-0 mx-auto md:mx-0"
          >
            <div className="absolute inset-0 bg-slate-100 rounded-2xl shadow-xl overflow-hidden border border-slate-200">
              <img 
                src={profileImg} 
                alt="Susmoy Biswas" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Play Button - Now Dark Magenta */}
            <button className="absolute bottom-4 right-4 w-14 h-14 bg-fuchsia-800 text-white rounded-full flex items-center justify-center shadow-lg shadow-fuchsia-800/30 hover:scale-105 hover:bg-fuchsia-700 transition-all z-20">
              <Play fill="currentColor" size={24} className="ml-1" />
            </button>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Verified Researcher</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
              Susmoy <br className="hidden md:block" />
              <span className="text-fuchsia-800">Biswas</span>
            </h1>

            <div className="flex items-center justify-center md:justify-start gap-6 text-sm font-medium text-slate-500 mb-6">
              <span className="flex items-center gap-2"><Users size={16} /> AI Enthusiast</span>
              <span className="flex items-center gap-2"><BookOpen size={16} /> Research Scholar</span>
            </div>

            <p className="text-slate-600 max-w-2xl text-lg leading-relaxed mb-8 mx-auto md:mx-0">
              Decoding the future through Artificial Intelligence. I specialize in bridging the gap between complex data patterns and real-world medical applications. Currently exploring <span className="font-semibold text-slate-900">Novelty Detection and XAI Visualization</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;