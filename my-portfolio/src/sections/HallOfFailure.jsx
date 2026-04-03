import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ExternalLink, RefreshCcw, XCircle, Info } from "lucide-react";

const failures = [
  {
    id: 1,
    event: "Patent Idea Competition 2025",
    project: "CasualBioTwin",
    desc: "Research project showcase for a digital twin simulation. While the conceptual framework was strong, the project didn't secure a final round placement. A lesson in prioritizing user-facing metrics alongside complex backend simulation.",
    link: "https://susb47.github.io/casual-bio-twin/",
    status: "Participant",
  },
  {
    id: 2,
    event: "NASA Space Apps Challenge 2025",
    project: "Asteroid Impact Simulator",
    desc: "Bangladesh Regional round. Developed a physics-based simulator for orbital impact effects. Despite high technical scores in the code review, we missed the podium. Taught our team the importance of storytelling in technical presentations.",
    link: "https://www.spaceappschallenge.org/2025/find-a-team/team_nexus/",
    status: "Non-Podium",
  }
];

const HallOfFailure = () => {
  return (
    <section id="hall-of-failure" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-200 to-transparent opacity-50" />
      <div className="absolute -right-24 top-1/4 w-96 h-96 bg-red-50/50 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6 p-4 bg-red-50 rounded-3xl border border-red-100 text-red-600 shadow-sm"
          >
            <AlertTriangle size={32} strokeWidth={2.5} />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Hall of <span className="text-red-600 line-through decoration-red-200 decoration-4">Fame</span> Failure
          </h2>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-slate-500 font-mono text-xs uppercase tracking-widest">
            <Info size={14} /> Lessons Learned Archive
          </div>
          <p className="text-slate-400 mt-6 max-w-lg text-sm leading-relaxed font-medium italic">
            "Attempts that didn't win medals, but provided the most critical engineering lessons in my journey."
          </p>
        </div>

        {/* Failure Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {failures.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white border border-slate-100 hover:border-red-200 rounded-[2rem] p-8 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-red-500/5"
            >
              {/* Corner Marker */}
              <div className="absolute top-6 right-6 p-2 bg-slate-50 text-slate-300 rounded-xl group-hover:bg-red-50 group-hover:text-red-400 transition-all">
                 <XCircle size={20} />
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-slate-50 rounded-2xl text-slate-400 font-black text-sm border border-slate-100 group-hover:text-red-500 transition-colors">
                   0{item.id}
                </div>
                <div>
                   <h3 className="text-2xl font-black text-slate-800 group-hover:text-red-600 transition-colors leading-tight">
                     {item.project}
                   </h3>
                   <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">
                     {item.event}
                   </p>
                </div>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-8 border-l-2 border-red-50 pl-5">
                {item.desc}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <RefreshCcw size={14} className="animate-spin-slow" /> {item.status}
                </span>
                
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-black text-red-600 hover:text-red-800 transition-colors uppercase tracking-widest"
                >
                  View Attempt <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer Quote */}
        <div className="text-center mt-20 opacity-50">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
            stumbling with no loss of enthusiasm.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HallOfFailure;