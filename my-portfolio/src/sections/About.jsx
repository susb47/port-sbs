import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Play, Users, BookOpen } from "lucide-react";
import profileImg from "../assets/susmoy.jpg"; // Make sure your image is here

const About = () => {
  return (
    <section id="about" className="relative w-full bg-zinc-950 overflow-hidden py-20">
      
      {/* 1. Background Gradient Mesh (The "Spotify" Vibe) */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-violet-900/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-cyan-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end gap-8 md:gap-12">
          
          {/* 2. The Image (Album Cover Style) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative shrink-0"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full md:rounded-lg overflow-hidden shadow-2xl shadow-violet-900/20 ring-4 ring-zinc-800/50">
              <img 
                src={profileImg} 
                alt="Susmoy Biswas" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Playing Icon Overlay */}
            <div className="absolute bottom-4 right-4 bg-green-500 text-black p-3 rounded-full shadow-lg hover:scale-105 transition cursor-pointer flex items-center justify-center">
               <Play fill="currentColor" size={24} />
            </div>
          </motion.div>

          {/* 3. The Text Content (Artist Info) */}
          <div className="flex-1 text-left pb-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-cyan-400 font-medium mb-2"
            >
              <BadgeCheck size={20} fill="currentColor" className="text-blue-500" />
              <span className="uppercase tracking-widest text-sm text-zinc-400">Verified Researcher</span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight mb-4 leading-none">
              Susmoy <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                Biswas
              </span>
            </h1>

            {/* "Monthly Listeners" Stats Analogy */}
            <div className="flex gap-6 text-zinc-400 text-sm md:text-base font-medium mb-8">
              <span className="flex items-center gap-2">
                 <Users size={16} /> AI Enthusiast
              </span>
              <span className="flex items-center gap-2">
                 <BookOpen size={16} /> Research Scholar
              </span>
            </div>

            {/* Bio Description */}
            <p className="text-zinc-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Decoding the future through Artificial Intelligence. I specialize in bridging the gap 
              between complex data patterns and real-world medical applications. Currently exploring 
              <span className="text-white font-semibold"> Novelty Detection</span> and 
              <span className="text-white font-semibold"> XAI Visualization</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;