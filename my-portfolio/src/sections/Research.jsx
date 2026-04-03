import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpenCheck, ExternalLink, Quote, TrendingUp, Link as LinkIcon, Network, PenTool, Library } from "lucide-react";

// (Keep your papers array exactly the same)
const papers = [
  {
    id: 1,
    title: "Comprehensive Analysis of Bangla Sarcastic Comments",
    summary: "Benchmarking ML/DL models for Bangla sarcasm detection with linguistic insights.",
    venue: "IEEE ECCE 2025",
    status: "Published",
    category: "NLP",
    ieeeLink: "https://ieeexplore.ieee.org/abstract/document/11012940",
    tags: ["NLP", "Sarcasm", "Deep Learning"]
  },
  {
    id: 2,
    title: "BanglaSarc3: A Benchmark Dataset for Bangla Sarcasm",
    summary: "Large-scale publicly available sarcasm dataset to advance low-resource NLP.",
    venue: "Data in Brief (Elsevier)",
    status: "Published",
    category: "Dataset",
    elsevierLink: "https://www.sciencedirect.com/science/article/pii/S2352340925006778",
    tags: ["Dataset", "Low-Resource", "Elsevier"]
  },
  {
    id: 3,
    title: "Explainable Dynamic Few-Shot Learning for GERD & Polyps",
    summary: "Few-shot learning with explainability for endoscopic image analysis.",
    venue: "ICMLA 2025 (IEEE)",
    status: "Published",
    category: "Medical AI",
    ieeeLink: "https://conferences.computer.org/icmlapub25/pdfs/ICMLA2025-4ubXnJyWd3Fugefo3XYLVQ/598000b151/598000b151.pdf",
    tags: ["Few-Shot", "XAI", "Medical Imaging"]
  },
  {
    id: 4,
    title: "MessIm4: Vision Transformer for Unwanted Image Classification",
    summary: "ViT-based framework for intelligent filtering of personal gallery images.",
    venue: "Springer LNNS (BIM 2025)",
    status: "Published",
    category: "Computer Vision",
    springerLink: "https://link.springer.com/chapter/10.1007/978-3-032-15346-3_42",
    rgLink: "https://www.researchgate.net/publication/395938365_MessIm4_A_Vision_Transformer-Based_Framework_for_Intelligent_Classification_of_Unwanted_Images_in_Personal_Galleries",
    blogLink: "#",
    tags: ["ViT", "Classification", "Springer"]
  },
  {
    id: 6,
    title: "Evaluating the Trustworthiness of Bengali AI-Generated Health Advice Amid Cyberchondria Using a Transformer-Based Explainable NLP Framework",
    summary: "Explainable transformer-based NLP framework assessing cyberchondria risk.",
    venue: "Springer LNNS",
    status: "Published",
    category: "NLP",
    springerLink: "https://link.springer.com/chapter/10.1007/978-3-032-15346-3_16",
    rgLink: "https://www.researchgate.net/publication/400985476_Evaluating_the_Trustworthiness_of_Bengali_AI-Generated_Health_Advice_Amid_Cyberchondria_Using_a_Transformer-Based_Explainable_NLP_Framework",
    blogLink: "#",
    tags: ["Health AI", "Ethics", "Transformers"]
  },
  {
    id: 7,
    title: "Digital Pedagogy in the Comment Section: A Study of Teacher-Learner Interaction in Bangla Admission Coaching",
    summary: "Sentiment mining of Facebook feedback in admission coaching contexts.",
    venue: "Springer LNNS",
    status: "Published",
    category: "NLP",
    springerLink: "https://link.springer.com/chapter/10.1007/978-3-032-15346-3_7",
    rgLink: "https://www.researchgate.net/publication/400985728_Digital_Pedagogy_in_the_Comment_Section_A_Study_of_Teacher-Learner_Interaction_in_Bangla_Admission_Coaching",
    blogLink: "#",
    tags: ["Sentiment Analysis", "Social Media", "BERT"]
  },
  {
    id: 9,
    title: "Next-Word Prediction in Bengali Poetry: Evaluating Transformer Architectures and BanglaBERT with Perplexity, BLEU, and Human Evaluations for Assistive Poetic Generation",
    summary: "Evaluating BanglaBERT and transformers for assistive poetic generation.",
    venue: "Springer LNNS",
    status: "Published",
    category: "NLP",
    springerLink: "https://link.springer.com/chapter/10.1007/978-3-032-15346-3_8",
    rgLink: "https://www.researchgate.net/publication/400985606_Next-Word_Prediction_in_Bengali_Poetry_Evaluating_Transformer_Architectures_and_BanglaBERT_with_Perplexity_BLEU_and_Human_Evaluations_for_Assistive_Poetic_Generation",
    blogLink: "#",
    tags: ["GenAI", "Poetry", "BanglaBERT"]
  },
  {
    id: 5,
    title: "Ensemble Deep Learning for Multi-Disease Detection in Brinjal",
    summary: "Real-field plant disease detection using ensemble CNN architectures.",
    venue: "Springer LNNS (BIM 2025)",
    status: "Accepted",
    category: "Agri-AI",
    rgLink: "https://www.researchgate.net/publication/395938188_A_Deep_Learning-Based_Ensemble_Framework_for_Multi-_Disease_Detection_in_Brinjal_Fruits_under_Real-Field_Con-_ditions",
    tags: ["CNN", "Ensemble", "Agriculture"]
  },
  {
    id: 10,
    title: "MCT-Mix: A Multilingual Transformer-BiLSTM Framework for Mixed-Coded Toxicity Detection in South Asian Social Media",
    summary: "Detecting mixed-coded toxicity in South Asian social media using a hybrid Transformer-BiLSTM approach.",
    venue: "ICAIII 2026",
    status: "Accepted",
    category: "NLP",
    tags: ["Toxicity Detection", "BiLSTM", "Transformers"]
  },
  {
    id: 11,
    title: "Imbalance-Adaptable Retinal Disease Classification Using Weighted Sampling and Focal Loss with Transfer Learning",
    summary: "Addressing dataset imbalance in retinal disease classification using focal loss and weighted sampling strategies.",
    venue: "ICAIII 2026",
    status: "Accepted",
    category: "Computer Vision",
    tags: ["Medical Imaging", "Transfer Learning", "Classification"]
  },
  {
    id: 12,
    title: "Balanced Fusion and Adaptive Loss: Enhancing Transfer Learning for Image-Based Humor and Satire Detection in Imbalanced Datasets",
    summary: "Enhancing humor and satire detection in complex, imbalanced datasets using balanced fusion architectures.",
    venue: "ICAIII 2026",
    status: "Accepted",
    category: "Computer Vision",
    tags: ["Humor Detection", "Transfer Learning", "Adaptive Loss"]
  }
];

const Research = () => {
  const [activeTab, setActiveTab] = useState("All");
  const filteredPapers = activeTab === "All" ? papers : papers.filter(p => p.status === activeTab);

  return (
    <section id="research" className="py-24 bg-slate-50 relative border-b border-indigo-50">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <BookOpenCheck className="text-fuchsia-800" /> 
            Academic <span className="text-fuchsia-800">Research</span>
          </h2>
        </div>

        {/* STATISTICS DASHBOARD (Kept exactly as requested) */}
        <motion.div 
          whileHover={{ y: -3, boxShadow: "0 10px 30px -10px rgba(134, 25, 143, 0.15)" }}
          className="bg-white border border-indigo-100 rounded-2xl shadow-sm mb-10 flex flex-col md:flex-row overflow-hidden relative z-10 transition-all duration-300 group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-50/40 via-transparent to-indigo-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />
          
          <div className="flex-1 flex items-center justify-around px-6 py-5 md:py-0 divide-x divide-slate-100 border-b md:border-b-0 md:border-r border-slate-100">
            <div className="flex flex-col items-center md:items-start px-2 cursor-default">
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5 transition-colors group-hover:text-fuchsia-700">Citations</span>
              <span className="text-3xl font-extrabold text-slate-800 transition-colors group-hover:text-fuchsia-800">6</span>
            </div>
            <div className="flex flex-col items-center md:items-start px-4 sm:px-8 cursor-default">
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5 transition-colors group-hover:text-fuchsia-700">h-index</span>
              <span className="text-3xl font-extrabold text-slate-800 transition-colors group-hover:text-fuchsia-800">2</span>
            </div>
            <div className="flex flex-col items-center md:items-start px-4 sm:px-8 cursor-default">
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5 transition-colors group-hover:text-fuchsia-700">i10-index</span>
              <span className="text-3xl font-extrabold text-slate-800 transition-colors group-hover:text-fuchsia-800">0</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4 bg-slate-50/50 md:bg-transparent shrink-0">
            <a 
              href="https://scholar.google.com/citations?user=2pl7-BYAAAAJ&hl=en" 
              target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:text-indigo-700 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-sm transition-all"
            >
              <ExternalLink size={16} /> Scholar
            </a>
            <a 
              href="https://www.researchgate.net/profile/Susmoy-Biswas?ev=hdr_xprf" 
              target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-fuchsia-50 border border-fuchsia-100 rounded-xl text-sm font-bold text-fuchsia-800 hover:bg-fuchsia-800 hover:text-white hover:shadow-md transition-all"
            >
              <Network size={16} /> ResearchGate
            </a>
          </div>
        </motion.div>

        {/* FORCED LIGHT THEME TABS */}
        <div className="flex items-center justify-center mb-10">
          <div className="bg-slate-100 p-1.5 rounded-xl flex items-center shadow-inner border border-slate-200">
            {["All", "Published", "Accepted"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                // Forced transparent bg, no outline, explicit text colors
                className={`relative px-6 py-2 text-sm font-bold rounded-lg transition-all z-10 bg-transparent border-0 outline-none focus:outline-none ${
                  activeTab === tab ? "text-fuchsia-800" : "text-slate-500 hover:text-slate-700"
                }`}
                style={{ backgroundColor: 'transparent' }} // Extra safety net against global CSS
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabPill" 
                    className="absolute inset-0 bg-white rounded-lg shadow-sm border border-slate-200 -z-10" 
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* CONDENSED ROW-COLUMN (RC) PAPER LIST */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredPapers.map((paper) => (
              <motion.div
                key={paper.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-indigo-100 p-5 rounded-xl hover:border-fuchsia-200 hover:shadow-md transition-all group relative overflow-hidden flex flex-col lg:flex-row gap-4 lg:items-center"
              >
                {/* Subtle left border accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-fuchsia-800 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Left Column: Title & Status (Takes up majority width on desktop) */}
                <div className="flex-1 lg:w-5/12 pr-4">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border ${
                      paper.status === "Published" 
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                        : "bg-amber-50 text-amber-700 border-amber-200"
                    }`}>
                      {paper.status}
                    </span>
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                      {paper.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-fuchsia-800 transition-colors leading-tight line-clamp-2 md:line-clamp-none">
                    {paper.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    {paper.venue}
                  </div>
                </div>

                {/* Middle Column: Summary (Hidden on tiny screens, shown on sm+) */}
                <div className="hidden sm:block flex-1 lg:w-4/12 text-sm text-slate-600 border-l border-slate-100 pl-4 py-1">
                  <p className="line-clamp-2">{paper.summary}</p>
                </div>

                {/* Right Column: Links (Stacks horizontally or vertically depending on space) */}
                <div className="flex flex-wrap items-center gap-2 lg:w-3/12 lg:justify-end border-t lg:border-t-0 border-slate-100 pt-3 lg:pt-0">
                    {paper.ieeeLink && (
                      <a href={paper.ieeeLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-600 hover:text-white border border-sky-200 px-2 py-1 rounded transition-colors whitespace-nowrap">
                        <Library size={12} /> IEEE
                      </a>
                    )}
                    {paper.elsevierLink && (
                      <a href={paper.elsevierLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-orange-700 bg-orange-50 hover:bg-orange-600 hover:text-white border border-orange-200 px-2 py-1 rounded transition-colors whitespace-nowrap">
                        <Library size={12} /> Elsevier
                      </a>
                    )}
                    {paper.springerLink && (
                      <a href={paper.springerLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-600 hover:text-white border border-blue-200 px-2 py-1 rounded transition-colors whitespace-nowrap">
                        <LinkIcon size={12} /> Springer
                      </a>
                    )}
                    {paper.rgLink && (
                      <a href={paper.rgLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-600 hover:text-white border border-emerald-200 px-2 py-1 rounded transition-colors whitespace-nowrap">
                        <Network size={12} /> RG
                      </a>
                    )}
                    {paper.blogLink && (
                      <a href={paper.blogLink} className="flex items-center gap-1.5 text-xs font-bold text-fuchsia-700 bg-fuchsia-50 hover:bg-fuchsia-600 hover:text-white border border-fuchsia-200 px-2 py-1 rounded transition-colors whitespace-nowrap">
                        <PenTool size={12} /> Blog
                      </a>
                    )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Research;