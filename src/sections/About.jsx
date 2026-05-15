import React from "react";
import { motion } from "framer-motion";
import { Microscope, BookOpen, Fingerprint, Send, Sparkles } from "lucide-react";
import profileImg from "../assets/susmoy.png"; 

const About = () => {
  return (
    <section id="about" className="relative pt-32 pb-24 bg-white overflow-hidden border-b border-indigo-50">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-50/30 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20">
          
          {/* Profile Image - Album Art Style */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 h-72 md:w-[450px] md:h-[450px] shrink-0 mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-slate-50 rounded-[3rem] shadow-2xl shadow-indigo-100/50 overflow-hidden border-8 border-white group">
              <img 
                src={profileImg} 
                alt="Susmoy Biswas" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
            </div>
            
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-3xl shadow-xl border border-indigo-50 flex items-center gap-3 z-20"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 whitespace-nowrap">
                Open for Research
              </span>
            </motion.div>
          </motion.div>

          {/* Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Professional Title Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <span className="px-4 py-2 bg-fuchsia-50 text-fuchsia-800 text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl border border-fuchsia-100 shadow-sm flex items-center gap-2">
                <Sparkles size={14} /> Medical Vision AI Researcher
              </span>
            </div>
            
            {/* Name Heading */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.85] md:leading-[0.8]">
              Susmoy <br />
              <span className="text-fuchsia-800">Biswas</span>
            </h1>

            {/* Sub-Specialization Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 text-[11px] font-black uppercase tracking-widest text-slate-400 mb-10">
              <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                <Microscope size={16} className="text-fuchsia-800" /> Medical AI
              </span>
              <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                <Fingerprint size={16} className="text-fuchsia-800" /> XAI & Computer Vision
              </span>
              <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                <BookOpen size={16} className="text-fuchsia-800" /> Research Scholar
              </span>
            </div>

            {/* Bio Description */}
            <p className="text-slate-500 max-w-2xl text-lg md:text-xl font-medium leading-relaxed mb-10 mx-auto lg:mx-0">
              Decoding the future of clinical diagnostics through <span className="text-slate-900 font-extrabold">Artificial Intelligence</span>. I specialize in bridging the gap between deep neural patterns and real-world medical applications. Currently pioneering research in <span className="text-fuchsia-800 font-bold">Explainable AI (XAI)</span> for endoscopic imaging and Atrial Fibrillation detection.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5">
               <a 
                 href="#research" 
                 className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.25em] hover:bg-fuchsia-800 transition-all shadow-2xl shadow-indigo-100/50 hover:-translate-y-1"
               >
                  View Publications
               </a>
               
               <a 
                 href="mailto:sus.b.5647@gmail.com" 
                 className="px-10 py-5 bg-white text-slate-400 border-2 border-slate-100 rounded-2xl font-black text-[11px] uppercase tracking-[0.25em] hover:border-fuchsia-200 hover:text-fuchsia-800 transition-all hover:-translate-y-1 flex items-center gap-2 group"
               >
                  Contact 
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;