import React from "react";
import { motion } from "framer-motion";
import { Activity, Database, Network, Lock, Cpu, Eye, ExternalLink, ArrowRight, LayoutDashboard } from "lucide-react";

const Thesis = () => {
  return (
    <section id="thesis" className="py-20 bg-white relative border-b border-indigo-50">
      
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* TOP ROW: Hero Text (Left) & Stats Grid (Right) */}
        <div className="grid lg:grid-cols-12 gap-10 mb-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-fuchsia-50 text-fuchsia-800 font-bold text-xs mb-4 border border-fuchsia-100 uppercase tracking-widest">
              <Activity size={14} /> B.Sc. Honors Thesis
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              AI in Hematology: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 to-indigo-600">Federated Graph Learning</span>
            </h2>
            
            <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
              A privacy-preserving framework for collaborative anemia detection across multiple hospitals. It models patients as interconnected similarity graphs to learn hidden relational patterns without exposing raw clinical data.
            </p>

            <div className="flex flex-wrap gap-2">
              {["PyTorch", "GNNs", "Federated Learning", "LIME (XAI)"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {[
              { label: "Peak Accuracy", value: "99.21%", icon: <Activity className="text-emerald-500" size={20} /> },
              { label: "Gray-Area F1", value: "99.11%", icon: <Lock className="text-blue-500" size={20} /> },
              { label: "Clinical Samples", value: "5,037", icon: <Database className="text-indigo-500" size={20} /> },
              { label: "Hospitals", value: "4", icon: <Network className="text-fuchsia-500" size={20} /> }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center flex flex-col items-center justify-center hover:shadow-sm transition-shadow hover:border-indigo-100">
                <div className="mb-2 bg-white p-2 rounded-full shadow-sm">{stat.icon}</div>
                <div className="text-2xl font-extrabold text-slate-800 mb-0.5">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* MIDDLE ROW: Core Innovations (3 Columns) */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          <motion.div whileHover={{ y: -3 }} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-indigo-300 transition-all group">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg group-hover:scale-110 transition-transform"><Lock size={18} /></div>
              <h4 className="font-bold text-slate-800">Privacy-First FL</h4>
            </div>
            <p className="text-sm text-slate-600">HIPAA-compliant collaboration. Hospitals exchange weight updates, securing local clinical data completely.</p>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-fuchsia-300 transition-all group">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-fuchsia-50 text-fuchsia-600 rounded-lg group-hover:scale-110 transition-transform"><Cpu size={18} /></div>
              <h4 className="font-bold text-slate-800">ResGAT Engine</h4>
            </div>
            <p className="text-sm text-slate-600">Residual Graph Attention Networks handle complex feature interactions and prevent vanishing gradients.</p>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-emerald-300 transition-all group">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg group-hover:scale-110 transition-transform"><Eye size={18} /></div>
              <h4 className="font-bold text-slate-800">Explainable AI</h4>
            </div>
            <p className="text-sm text-slate-600">Integrated LIME generates visual explanations showing exactly which patient features drove the diagnosis.</p>
          </motion.div>
        </div>

        {/* BOTTOM ROW: Simulator CTA Banner (ALL WHITE THEME) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-indigo-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-50/50 rounded-bl-full -z-10 pointer-events-none" />
          
          <div className="relative z-10 text-center md:text-left flex-1">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="p-2 bg-fuchsia-100 text-fuchsia-800 rounded-lg shadow-sm">
                <LayoutDashboard size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Live Diagnostic Simulator</h3>
            </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              <strong className="text-slate-800">Experience the core contribution:</strong> A privacy-preserving Federated Graph Neural Network (FL-ResGAT) validated across four clinical institutions. Interact with the multi-hospital aggregation dashboard and physician/patient portals, and explore LIME-powered explainable predictions for gray-area cases.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            {/* Primary Button - Lighter, readable fuchsia/pink shade */}
            <a 
              href="https://anemia-diagnostic-app.vercel.app/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-fuchsia-100 text-fuchsia-900 border border-fuchsia-200 px-8 py-3.5 rounded-xl font-extrabold hover:bg-fuchsia-200 hover:-translate-y-1 transition-all shadow-sm shadow-fuchsia-200 whitespace-nowrap"
            >
              <ExternalLink size={18} /> Launch Simulator
            </a>
            
            {/* Secondary Button */}
            <a 
              href="#research" 
              className="flex items-center justify-center gap-2 bg-white text-slate-600 border-2 border-slate-200 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 hover:text-slate-900 hover:-translate-y-1 transition-all whitespace-nowrap"
            >
              Read Paper <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Thesis;