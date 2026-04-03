import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, Video, HandHeart, Calendar, PlayCircle } from "lucide-react";

// Import Images
import seminar1 from "../assets/seminar1.jpg";
import seminar2 from "../assets/seminar2.jpg";
import parentsImg from "../assets/parents.jpg";

const ExtraCurricular = () => {
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const seminarImages = [seminar1, seminar2];

  // Auto-slide effect for Seminar Tile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % seminarImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="extra-curricular" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <Heart className="text-pink-500 fill-pink-500" /> 
            Beyond <span className="text-pink-500">Code</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Leadership, volunteering, and creative pursuits.
          </p>
        </div>

        {/* GRID LAYOUT - 16:9 Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 1. MENTAL HEALTH SEMINAR (Carousel Tile) - 16:9 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative group rounded-3xl overflow-hidden border border-zinc-800 aspect-video"
          >
            {/* Carousel Images */}
            <div className="absolute inset-0 w-full h-full">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentSlide}
                  src={seminarImages[currentSlide]}
                  alt="Mental Health Seminar"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <div className="flex items-center gap-2 mb-2">
                 <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs font-bold rounded-full border border-pink-500/30">
                    Organizer
                 </span>
                 <span className="flex items-center gap-1 text-zinc-300 text-xs font-bold">
                    <Calendar size={12} /> Fall 2022
                 </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Mental Health Seminar</h3>
              <p className="text-zinc-300 text-xs">
                Organized a session for "Art of Living", impacting <span className="text-white font-bold">80+ attendees</span>.
              </p>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute top-4 right-4 flex gap-2">
              {seminarImages.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? "w-6 bg-pink-500" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* 2. PARENTS DAY (Static Image Tile) - 16:9 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative group rounded-3xl overflow-hidden border border-zinc-800 aspect-video"
          >
            <img 
              src={parentsImg} 
              alt="Parents Day Volunteering" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <span className="block text-pink-400 text-xs font-bold uppercase tracking-wider mb-1">
                Volunteer
              </span>
              <h3 className="text-xl font-bold text-white">Parents Day Program</h3>
              <p className="text-zinc-400 text-xs mt-1">Art of Living Course • Fall 2022</p>
            </div>
          </motion.div>

          {/* 3. FLOOD FUNDRAISING (Graphic Tile) - 16:9 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between group hover:border-pink-500/30 transition-colors aspect-video"
          >
            <div className="p-3 bg-zinc-950 w-fit rounded-2xl text-pink-500 mb-2 group-hover:scale-110 transition-transform">
              <HandHeart size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Flood Relief 2024</h3>
              <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                Coordinated fundraising to support victims of the 2024 floods. Mobilized resources for immediate aid.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-zinc-800 flex items-center gap-2 text-xs text-zinc-500">
               <Users size={14} /> Community Impact
            </div>
          </motion.div>

          {/* 4. CONTENT CREATION (Video Placeholder Tile) - 16:9 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group rounded-3xl overflow-hidden border border-zinc-800 aspect-video"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
               <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2 text-pink-400 text-xs font-bold uppercase tracking-wider">
                    <Video size={14} /> Content Creation
                  </span>
                  <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(219,39,119,0.4)] group-hover:scale-110 transition-transform">
                    <PlayCircle size={16} fill="currentColor" />
                  </div>
               </div>
               <h3 className="text-lg font-bold text-white mb-1">"Parental Love"</h3>
               <p className="text-zinc-300 text-xs line-clamp-1">
                 Cinematic storytelling for Art of Living exploring parental bonds.
               </p>
               <p className="text-[10px] text-zinc-500 mt-1">© Susmoy Biswas • Releasing Soon</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;