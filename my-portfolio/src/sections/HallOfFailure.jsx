import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ExternalLink, RefreshCcw, XCircle } from "lucide-react";

const failures = [
  {
    id: 1,
    event: "Patent Idea Competition 2025",
    project: "CasualBioTwin",
    desc: "Research project showcase for a digital twin simulation. Great concept, but didn't make the final cut.",
    link: "https://susb47.github.io/casual-bio-twin/",
    status: "Participant",
  },
  {
    id: 2,
    event: "NASA Space Apps Challenge 2025",
    project: "Asteroid Impact Simulator",
    desc: "Bangladesh Regional round. Built a physics-based simulator for impact effects. Strong technicals, but missed the podium.",
    link: "https://www.spaceappschallenge.org/2025/find-a-team/team_nexus/",
    status: "Non-Podium",
  }
];

const HallOfFailure = () => {
  return (
    <section id="hall-of-failure" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-red-900/20">
      
      {/* Background Glitch Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600/50 via-transparent to-red-600/50 opacity-50" />
      <div className="absolute -right-20 top-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 p-3 bg-red-500/10 rounded-full border border-red-500/20 text-red-500 animate-pulse">
            <AlertTriangle size={32} />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Hall of <span className="text-red-500 line-through decoration-red-500/50 decoration-4">Fame</span> Failure
          </h2>
          <p className="text-zinc-500 max-w-xl font-mono text-sm">
            // ERR_404_SUCCESS_NOT_FOUND <br/>
            Attempts that didn't win medals, but taught valuable lessons in resilience.
          </p>
        </div>

        {/* Failure Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {failures.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative bg-zinc-900/30 border border-red-900/20 hover:border-red-500/40 rounded-xl p-6 transition-all duration-300 hover:bg-zinc-900/50"
            >
              {/* Corner Glitch Decoration */}
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                 <XCircle className="text-red-500" size={20} />
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="mt-1 p-2 bg-red-500/5 rounded-lg text-red-400 font-mono text-xs border border-red-500/10">
                   0{item.id}
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                     {item.project}
                   </h3>
                   <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold mt-1">
                     {item.event}
                   </p>
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6 border-l-2 border-zinc-800 pl-4">
                {item.desc}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                <span className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                  <RefreshCcw size={12} /> Status: {item.status}
                </span>
                
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
                >
                  View Attempt <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer Quote */}
        <div className="text-center mt-16 opacity-30">
          <p className="text-xs font-mono text-zinc-500">
            "Success is stumbling from failure to failure with no loss of enthusiasm."
          </p>
        </div>

      </div>
    </section>
  );
};

export default HallOfFailure;