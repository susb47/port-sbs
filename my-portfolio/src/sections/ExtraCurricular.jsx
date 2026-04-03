import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, Video, HandHeart, Calendar, PlayCircle, Sparkles } from "lucide-react";

// Import Images
import seminar1 from "../assets/seminar1.jpg";
import seminar2 from "../assets/seminar2.jpg";
import parentsImg from "../assets/parents.jpg";

const Impact = () => {
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const seminarImages = [seminar1, seminar2];

  // Auto-slide effect for Seminar Tile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % seminarImages.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, [seminarImages.length]);

  return (
    <section id="impact" className="py-24 bg-white relative border-b border-indigo-50">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-50 text-fuchsia-800 text-xs font-bold uppercase tracking-widest border border-fuchsia-100 mb-4"
          >
            <Sparkles size={14} /> Citizenship
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 flex items-center justify-center md:justify-start gap-3">
            <Heart className="text-fuchsia-800 fill-fuchsia-800/10" /> 
            Social <span className="text-fuchsia-800">Impact</span>
          </h2>
          <p className="text-slate-500 max-w-2xl text-lg font-medium">
            Leadership, humanitarian volunteering, and creative storytelling beyond technical research.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* 1. MENTAL HEALTH SEMINAR (Carousel) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group rounded-[2rem] overflow-hidden border border-slate-100 aspect-video shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="absolute inset-0 w-full h-full">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentSlide}
                  src={seminarImages[currentSlide]}
                  alt="Mental Health Seminar"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 p-6 z-10">
              <div className="flex items-center gap-2 mb-2">
                 <span className="px-2.5 py-0.5 bg-fuchsia-600 text-white text-[10px] font-black rounded uppercase tracking-tighter shadow-lg shadow-fuchsia-900/20">
                    Organizer
                 </span>
                 <span className="flex items-center gap-1 text-slate-300 text-[10px] font-bold uppercase tracking-widest">
                    <Calendar size={12} /> Fall 2022
                 </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Mental Health Seminar</h3>
              <p className="text-slate-300 text-xs leading-tight">
                Organized a high-impact session for "Art of Living" course, impacting <span className="text-white font-bold">80+ attendees</span>.
              </p>
            </div>

            <div className="absolute top-4 right-4 flex gap-1.5">
              {seminarImages.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? "w-6 bg-white" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* 2. PARENTS DAY (Static) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group rounded-[2rem] overflow-hidden border border-slate-100 aspect-video shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <img 
              src={parentsImg} 
              alt="Parents Day Volunteering" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <span className="block text-fuchsia-400 text-[10px] font-black uppercase tracking-widest mb-1">
                Volunteer Service
              </span>
              <h3 className="text-xl font-bold text-white">Parents Day Program</h3>
              <p className="text-slate-300 text-xs font-medium">Art of Living Course • Fall 2022</p>
            </div>
          </motion.div>

          {/* 3. FLOOD RELIEF (Card style) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 border border-slate-100 rounded-[2rem] p-6 flex flex-col justify-between group hover:border-fuchsia-200 transition-all aspect-video shadow-sm"
          >
            <div className="p-3 bg-white w-fit rounded-2xl text-fuchsia-800 mb-2 shadow-sm group-hover:scale-110 transition-transform">
              <HandHeart size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Flood Relief 2024</h3>
              <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                Coordinated essential fundraising and logistics to support victims of the 2024 floods. Mobilized resources for immediate community aid.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-slate-200 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
               <Users size={14} /> Community Outreach
            </div>
          </motion.div>

          {/* 4. CONTENT CREATION (Storytelling) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group rounded-[2rem] overflow-hidden border border-slate-100 aspect-video shadow-sm hover:shadow-xl transition-all duration-500 lg:col-span-1"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
               <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2 text-fuchsia-400 text-[10px] font-black uppercase tracking-widest">
                    <Video size={14} /> Creative Storytelling
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform border border-white/30">
                    <PlayCircle size={18} />
                  </div>
               </div>
               <h3 className="text-lg font-bold text-white mb-1">"Parental Love"</h3>
               <p className="text-slate-300 text-xs line-clamp-1">
                 Cinematic exploration of parental bonds produced for Art of Living.
               </p>
               <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-tighter italic">Releasing Soon</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Impact;