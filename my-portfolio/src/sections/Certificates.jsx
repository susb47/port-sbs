import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileBadge, Eye, X, Award } from "lucide-react";

// Import Images
import certHero from "../assets/cert-hero.jpg";
import certDatathon from "../assets/cert-datathon.jpg";
import certEdge from "../assets/cert-edge.jpg";
import certNlp from "../assets/cert-nlp.jpg";
import certPatent from "../assets/cert-patent.jpg";
import certNasa from "../assets/cert-nasa.jpeg"; // <-- Added NASA Image Import

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
  },
  {
    id: 3,
    title: "EDGE Machine Learning",
    issuer: "Govt of Bangladesh & JnU",
    desc: "Intensive specialized training on ML algorithms and practical deployment architectures.",
    image: certEdge,
  },
  {
    id: 6, // <-- Added NASA Certificate
    title: "NASA Space Apps Challenge",
    issuer: "NASA & Bangladesh Regional",
    desc: "Participation certificate for building an 'Astroid Impact Simulator' in the 2025 hackathon.",
    image: certNasa,
  },
  {
    id: 4,
    title: "NLP Seminar Participation",
    issuer: "DIU ML and NLP Lab",
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
    <section id="certificates" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <FileBadge className="text-cyan-400" /> 
            Certifications & <span className="text-cyan-400">Credentials</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            A verified gallery of awards, intensive training, and competitive achievements.
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className={`group flex flex-col bg-zinc-900/50 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${cert.featured ? 'border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.1)]' : 'border-zinc-800/80 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]'}`}
            >
              {/* Image Container */}
              <div 
                className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-zinc-950"
                onClick={() => setSelectedImage(cert.image)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                
                {/* Featured Badge */}
                {cert.featured && (
                  <div className="absolute top-3 right-3 bg-yellow-500 text-black text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 z-20">
                    <Award size={12} /> Premier Honor
                  </div>
                )}

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 z-10">
                  <div className="bg-cyan-500/20 backdrop-blur-md text-cyan-400 border border-cyan-500/30 px-4 py-2 rounded-full flex items-center gap-2 font-bold text-sm">
                    <Eye size={16} /> View Certificate
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow relative">
                 {/* Decorative Top Border */}
                 <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${cert.featured ? 'from-yellow-500/50 to-transparent' : 'from-cyan-500/50 to-transparent'}`} />

                <h3 className={`text-xl font-bold mb-2 transition-colors ${cert.featured ? 'text-white group-hover:text-yellow-400' : 'text-white group-hover:text-cyan-400'}`}>
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                   <span className={`h-1.5 w-1.5 rounded-full ${cert.featured ? 'bg-yellow-500' : 'bg-cyan-500'}`} />
                   <p className={`text-xs font-bold uppercase tracking-wider ${cert.featured ? 'text-yellow-500' : 'text-cyan-500'}`}>
                     {cert.issuer}
                   </p>
                </div>
                
                <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 flex-grow">
                  {cert.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-red-500/20 p-2 rounded-full transition-all z-20">
              <X size={24} />
            </button>
            
            {/* Image */}
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Certificate Full View" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-cyan-500/10 border border-white/10 cursor-default" 
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;