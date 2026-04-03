import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileBadge, Eye, X, Award, Search, CheckCircle2 } from "lucide-react";

// Import Images (Keeping your existing imports)
import certHero from "../assets/cert-hero.jpg";
import certDatathon from "../assets/cert-datathon.jpg";
import certEdge from "../assets/cert-edge.jpg";
import certNlp from "../assets/cert-nlp.jpg";
import certPatent from "../assets/cert-patent.jpg";
import certNasa from "../assets/cert-nasa.jpeg"; 

const certificates = [
  {
    id: 1,
    title: "Hero of the Hall",
    issuer: "Daffodil Family Group",
    desc: "Highest honor for academic, research, and moral excellence (4-Star Rank).",
    image: certHero,
    featured: true,
  },
  {
    id: 2,
    title: "Datathon 2nd Runners Up",
    issuer: "DIU CPC",
    desc: "Podium position in the 2024 Data Science competitive programming datathon.",
    image: certDatathon,
    featured: true,
  },
  {
    id: 3,
    title: "EDGE Machine Learning",
    issuer: "Govt of Bangladesh & JnU",
    desc: "Intensive specialized training on ML algorithms and practical deployment architectures.",
    image: certEdge,
  },
  {
    id: 6, 
    title: "NASA Space Apps Challenge",
    issuer: "NASA & Bangladesh Regional",
    desc: "Participation certificate for building an 'Astroid Impact Simulator' in the 2025 hackathon.",
    image: certNasa,
  },
  {
    id: 4,
    title: "NLP Seminar Participation",
    issuer: "Research Club",
    desc: "Active participation in advanced Natural Language Processing workshops.",
    image: certNlp,
  },
  {
    id: 5,
    title: "Patent Idea Competition",
    issuer: "Research Showcase",
    desc: "Recognition for presenting the 'CasualBioTwin' digital twin project research.",
    image: certPatent,
  }
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certificates" className="py-24 bg-white relative border-t border-indigo-50 overflow-hidden">
      
      {/* Soft Background Accents */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-fuchsia-50/50 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <div className="p-2 bg-fuchsia-50 text-fuchsia-800 rounded-lg">
                <FileBadge size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Certifications & <span className="text-fuchsia-800">Credentials</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-2xl text-lg font-medium">
            A verified gallery of awards, professional training, and competitive academic achievements.
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group flex flex-col bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                cert.featured 
                ? 'border-fuchsia-200 shadow-md shadow-fuchsia-100/20' 
                : 'border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/30'
              }`}
            >
              {/* Image Container */}
              <div 
                className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-slate-50"
                onClick={() => setSelectedImage(cert.image)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Featured Badge */}
                {cert.featured && (
                  <div className="absolute top-4 right-4 bg-fuchsia-800 text-white text-[10px] font-black px-3 py-1.5 rounded-lg flex items-center gap-1.5 z-20 shadow-lg shadow-fuchsia-900/20 uppercase tracking-widest">
                    <Award size={14} /> Premier
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-fuchsia-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-[2px]">
                   <div className="bg-white/90 backdrop-blur-md text-fuchsia-800 p-4 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Search size={24} strokeWidth={2.5} />
                   </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow relative">
                <div className="flex items-center gap-2 mb-3">
                   <CheckCircle2 size={14} className={cert.featured ? 'text-fuchsia-600' : 'text-indigo-500'} />
                   <p className={`text-[10px] font-black uppercase tracking-widest ${cert.featured ? 'text-fuchsia-800' : 'text-slate-400'}`}>
                     {cert.issuer}
                   </p>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-fuchsia-800 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                  {cert.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL (Light Themed) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button className="absolute top-8 right-8 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-20 border border-white/20">
              <X size={28} />
            </button>
            
            {/* Image Frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Certificate Full View" 
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white/10" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;