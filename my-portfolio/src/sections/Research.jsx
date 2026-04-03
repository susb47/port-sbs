import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, BookOpen, Layers } from "lucide-react";

// --- DATA: Updated Research Papers ---
const papers = [
  {
    id: 1,
    title: "Comprehensive Analysis of Bangla Sarcastic Comments",
    summary: "Benchmarking ML/DL models for Bangla sarcasm detection with linguistic insights.",
    venue: "IEEE ECCE 2025",
    status: "Published",
    category: "NLP",
    link: "https://ieeexplore.ieee.org/abstract/document/11012940",
    tags: ["NLP", "Sarcasm", "Deep Learning"]
  },
  {
    id: 2,
    title: "BanglaSarc3: A Benchmark Dataset for Bangla Sarcasm",
    summary: "Large-scale publicly available sarcasm dataset to advance low-resource NLP.",
    venue: "Data in Brief (Elsevier)",
    status: "Published",
    category: "Dataset",
    link: "https://www.sciencedirect.com/science/article/pii/S2352340925006778",
    tags: ["Dataset", "Low-Resource", "Elsevier"]
  },
  {
    id: 3,
    title: "Explainable Dynamic Few-Shot Learning for GERD & Polyps",
    summary: "Few-shot learning with explainability for endoscopic image analysis.",
    venue: "ICMLA 2025 (IEEE)",
    status: "Published",
    category: "Medical AI",
    link: "https://conferences.computer.org/icmlapub25/pdfs/ICMLA2025-4ubXnJyWd3Fugefo3XYLVQ/598000b151/598000b151.pdf",
    tags: ["Few-Shot", "XAI", "Medical Imaging"]
  },
  {
    id: 4,
    title: "MessIm4: Vision Transformer for Unwanted Image Classification",
    summary: "ViT-based framework for intelligent filtering of personal gallery images.",
    venue: "Springer LNNS (BIM 2025)",
    status: "Accepted",
    category: "Computer Vision",
    link: "https://www.researchgate.net/publication/395938365_MessIm4_A_Vision_Transformer-Based_Framework_for_Intelligent_Classification_of_Unwanted_Images_in_Personal_Galleries",
    tags: ["ViT", "Classification", "Springer"]
  },
  {
    id: 5,
    title: "Ensemble Deep Learning for Multi-Disease Detection in Brinjal",
    summary: "Real-field plant disease detection using ensemble CNN architectures.",
    venue: "Springer LNNS (BIM 2025)",
    status: "Accepted",
    category: "Agri-AI",
    link: "https://www.researchgate.net/publication/395938188_A_Deep_Learning-Based_Ensemble_Framework_for_Multi-_Disease_Detection_in_Brinjal_Fruits_under_Real-Field_Con-_ditions",
    tags: ["CNN", "Ensemble", "Agriculture"]
  },
  {
    id: 6,
    title: "Trustworthiness of Bengali AI-Generated Health Advice",
    summary: "Explainable transformer-based NLP framework assessing cyberchondria risk.",
    venue: "Springer LNNS",
    status: "Accepted",
    category: "NLP",
    link: "#",
    tags: ["Health AI", "Ethics", "Transformers"]
  },
  {
    id: 7,
    title: "BnAdEduFeed3: Bangla Transformer Feedback Analysis",
    summary: "Sentiment mining of Facebook feedback in admission coaching contexts.",
    venue: "Springer LNNS",
    status: "Accepted",
    category: "NLP",
    link: "#",
    tags: ["Sentiment Analysis", "Social Media", "BERT"]
  },
  {
    id: 8,
    title: "Explainable Lung Disease Detection from Chest X-Rays",
    summary: "ResNet50 with Grad-CAM for interpretable classification in low-resource settings.",
    venue: "Springer LNNS",
    status: "Accepted",
    category: "Medical AI",
    link: "#",
    tags: ["XAI", "ResNet50", "Grad-CAM"]
  },
  {
    id: 9,
    title: "Next-Word Prediction in Bengali Poetry",
    summary: "Evaluating BanglaBERT and transformers for assistive poetic generation.",
    venue: "Springer LNNS",
    status: "Accepted",
    category: "NLP",
    link: "#",
    tags: ["GenAI", "Poetry", "BanglaBERT"]
  }
];

// Removed "Under Review" since everything is accepted now!
const categories = ["All", "Published", "Accepted"];

const Research = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredPapers = activeTab === "All" 
    ? papers 
    : papers.filter(p => p.status === activeTab);

  return (
    <section id="research" className="py-24 bg-zinc-950 relative min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <BookOpen className="text-green-500" /> Research & Publications
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Exploring the frontiers of <span className="text-green-400">NLP</span>, <span className="text-green-400">Computer Vision</span>, and <span className="text-green-400">Medical AI</span>.
            <br />
            <span className="text-sm opacity-70 mt-2 block">9 Papers • IEEE • Elsevier • Springer</span>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-10">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab === tab
                  ? "bg-green-500 text-black border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-green-500/50 hover:text-green-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredPapers.map((paper) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={paper.id}
                className="group relative bg-zinc-900/40 border border-zinc-800 hover:border-green-500/50 rounded-xl p-6 flex flex-col h-full hover:shadow-lg hover:shadow-green-900/10 transition-all duration-300"
              >
                {/* Decorative Top Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Status Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    paper.status === 'Published' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                    'bg-blue-500/10 text-blue-400 border-blue-500/20'
                  }`}>
                    {paper.status === 'Published' ? '● Published' : '○ Accepted'}
                  </span>
                  <a 
                    href={paper.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`text-zinc-500 hover:text-white transition ${paper.link === '#' ? 'pointer-events-none opacity-20' : ''}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                  {paper.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                  {paper.summary}
                </p>

                {/* Footer Info */}
                <div className="mt-auto pt-4 border-t border-zinc-800">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3 font-mono">
                    <Layers size={14} /> {paper.venue}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-zinc-800 text-zinc-300 rounded hover:bg-zinc-700 transition">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;