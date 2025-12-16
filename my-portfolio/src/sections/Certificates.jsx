import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileBadge, Eye, X } from "lucide-react";

// Import Images
import certHero from "../assets/cert-hero.jpg";
import certDatathon from "../assets/cert-datathon.jpg";
import certEdge from "../assets/cert-edge.jpg";
import certNlp from "../assets/cert-nlp.jpg";
import certPatent from "../assets/cert-patent.jpg";

const certificates = [
  {
    id: 1,
    title: "Hero of the Hall",
    issuer: "Daffodil Family Group",
    desc: "Highest honor for academic, research, and moral excellence.",
    image: certHero,
  },
  {
    id: 2,
    title: "Datathon 2nd Runners Up",
    issuer: "DIU CPC",
    desc: "Certificate of achievement for securing the podium position in the 2024 Datathon.",
    image: certDatathon,
  },
  {
    id: 3,
    title: "EDGE Machine Learning",
    issuer: "Govt of Bangladesh & JnU",
    desc: "Intensive specialized training on ML algorithms and practical deployment.",
    image: certEdge,
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
    desc: "Recognition for the 'CasualBioTwin' project research showcase.",
    image: certPatent,
  }
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certificates" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <FileBadge className="text-cyan-400" /> 
            Certifications & <span className="text-cyan-400">Credentials</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Verified documentation of achievements, training, and accolades.
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div 
                className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium">
                  <Eye size={20} /> View Full
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-cyan-500 font-bold uppercase tracking-wider mb-3">
                  {cert.issuer}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL (To view full certificate) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-red-500 transition">
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Certificate Full View" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl shadow-cyan-500/20" 
          />
        </div>
      )}
    </section>
  );
};

export default Certificates;