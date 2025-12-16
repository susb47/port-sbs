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

        {/* MASONRY GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">

          {/* 1. MENTAL HEALTH SEMINAR (Carousel Tile) - Spans 2 Columns */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 relative group rounded-3xl overflow-hidden border border-zinc-800"
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
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <div className="flex items-center gap-2 mb-2">
                 <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs font-bold rounded-full border border-pink-500/30">
                    Organizer
                 </span>
                 <span className="flex items-center gap-1 text-zinc-300 text-xs font-bold">
                    <Calendar size={12} /> Fall 2022
                 </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Mental Health Seminar</h3>
              <p className="text-zinc-300 text-sm">
                Organized a session for the "Art of Living" course, impacting over 
                <span className="text-white font-bold"> 80+ attendees</span>.
              </p>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute top-6 right-6 flex gap-2">
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

          {/* 2. PARENTS DAY (Static Image Tile) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative group rounded-3xl overflow-hidden border border-zinc-800"
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

          {/* 3. FLOOD FUNDRAISING (Graphic Tile) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between group hover:border-pink-500/30 transition-colors"
          >
            <div className="p-4 bg-zinc-950 w-fit rounded-2xl text-pink-500 mb-4 group-hover:scale-110 transition-transform">
              <HandHeart size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Flood Relief 2024</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Actively coordinated fundraising efforts to support victims of the 2024 floods. Mobilized resources and community support for immediate aid.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-zinc-800 flex items-center gap-2 text-xs text-zinc-500">
               <Users size={14} /> Community Impact
            </div>
          </motion.div>

          {/* 4. CONTENT CREATION (Video Placeholder Tile) - Spans 2 Columns */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-1 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity" />
            
            <div className="relative h-full flex flex-col md:flex-row items-center p-8 gap-8">
               <div className="flex-1">
                  <span className="flex items-center gap-2 text-pink-400 text-xs font-bold uppercase tracking-wider mb-3">
                    <Video size={14} /> Content Creation
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2">"Parental Love"</h3>
                  <p className="text-zinc-400 text-sm mb-4">
                    A cinematic storytelling piece for the Art of Living course exploring the depth of parental bonds.
                  </p>
                  <p className="text-xs text-zinc-500">© Susmoy Biswas • Releasing Soon</p>
               </div>
               
               {/* Play Button Visual */}
               <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-pink-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(219,39,119,0.4)] group-hover:scale-110 transition-transform cursor-not-allowed">
                  <PlayCircle size={32} fill="currentColor" />
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;