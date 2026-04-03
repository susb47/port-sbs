import React from "react";
import { motion } from "framer-motion";
import { FileText, Microscope, Dna } from "lucide-react";

const Thesis = () => {
  return (
    <section id="thesis" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <Microscope className="text-purple-500" /> 
            Academic <span className="text-purple-500">Thesis</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            In-depth academic research focusing on novel architectures and medical applications.
          </p>
        </div>

        {/* Dummy Content Placeholder */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Thesis 1 Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 border-dashed relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Dna size={100} />
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"/> In Progress
            </div>

            <h3 className="text-2xl font-bold text-zinc-300 mb-4">
              [Thesis Title Placeholder]
            </h3>
            
            <div className="space-y-3">
              <div className="h-2 w-3/4 bg-zinc-800 rounded-full" />
              <div className="h-2 w-full bg-zinc-800 rounded-full" />
              <div className="h-2 w-5/6 bg-zinc-800 rounded-full" />
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/50 flex gap-4">
               <span className="h-8 w-24 bg-zinc-800/50 rounded-lg" />
               <span className="h-8 w-24 bg-zinc-800/50 rounded-lg" />
            </div>
          </motion.div>

           {/* Thesis 2 Placeholder */}
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 border-dashed relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10">
              <FileText size={100} />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500"/> Upcoming
            </div>

            <h3 className="text-2xl font-bold text-zinc-300 mb-4">
              [Thesis Title Placeholder]
            </h3>
            
            <div className="space-y-3">
              <div className="h-2 w-2/3 bg-zinc-800 rounded-full" />
              <div className="h-2 w-full bg-zinc-800 rounded-full" />
              <div className="h-2 w-4/5 bg-zinc-800 rounded-full" />
            </div>
             
             <div className="mt-8 pt-6 border-t border-zinc-800/50 flex gap-4">
               <span className="h-8 w-24 bg-zinc-800/50 rounded-lg" />
               <span className="h-8 w-24 bg-zinc-800/50 rounded-lg" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Thesis;