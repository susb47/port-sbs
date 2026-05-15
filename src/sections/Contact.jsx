import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Sparkles, Heart } from "lucide-react";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-24 bg-white text-slate-900 px-6 relative overflow-hidden">
      {/* Subtle Bottom Glow for depth */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-fuchsia-50/30 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border border-slate-100 mb-8">
            <Sparkles size={12} /> Available for Collaboration
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900">
            Let's build <span className="text-fuchsia-800">something</span> great.
          </h2>
          
          <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Whether you're looking for a research collaborator, a machine learning engineer, or just want to discuss the future of AI—my inbox is always open.
          </p>
          
          <motion.a 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:susmoy.cse@gmail.com" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-fuchsia-800 transition-all shadow-xl shadow-slate-200 hover:shadow-fuchsia-900/20 mb-20 group"
          >
            <Mail size={22} className="group-hover:rotate-12 transition-transform" />
            Say Hello
            <Send size={18} className="opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* REFINED WHITE FOOTER */}
        <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-slate-900 font-black text-sm uppercase tracking-tighter">Susmoy Biswas</p>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.15em] mt-1">
              &copy; {currentYear} • All rights reserved.
            </p>
          </div>

          {/* Minimalist Social Icons */}
          <div className="flex gap-2">
            <a 
              href="https://github.com/susb47" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 text-slate-400 hover:text-fuchsia-800 transition-all hover:scale-110"
              title="GitHub"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://linkedin.com/in/susmoy-biswas" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 text-slate-400 hover:text-fuchsia-800 transition-all hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
            <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
                Built with <Heart size={10} className="text-fuchsia-800 fill-fuchsia-800" /> & Resilience
            </div>
            <p className="text-[8px] font-bold uppercase tracking-[0.5em] text-slate-300">
                Jhenaidah, Bangladesh
            </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;