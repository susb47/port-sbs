import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, TrendingUp, Hash, Calendar } from "lucide-react";
import datathonImg from "../assets/datathon.jpg"; // Make sure image is here

const cpStats = [
  {
    id: 1,
    title: "ICPC Preliminary Dhaka Regional",
    rank: "584th",
    year: "2025",
    type: "National",
    icon: <Hash className="text-blue-400" />
  },
  {
    id: 2,
    title: "ICPC Preliminary Dhaka Regional",
    rank: "774th",
    year: "2024",
    type: "National",
    icon: <Hash className="text-zinc-500" />
  },
  {
    id: 3,
    title: "Take Off Programming Contest (Fall)",
    rank: "42nd",
    year: "2022",
    type: "Intra-University",
    icon: <TrendingUp className="text-green-400" />
  },
  {
    id: 4,
    title: "Take Off Programming Contest (Spring)",
    rank: "84th",
    year: "2022",
    type: "Intra-University",
    icon: <TrendingUp className="text-green-400" />
  },
  {
    id: 5,
    title: "Unlock the Algorithm Preliminary",
    rank: "182nd",
    year: "2023",
    type: "Contest",
    icon: <Hash className="text-zinc-500" />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <Trophy className="text-yellow-500" /> 
            Hall of <span className="text-green-500">Achievements</span>
          </h2>
          <p className="text-zinc-400">
            Competitive Programming & Data Science Hackathons.
          </p>
        </div>

        {/* 1. HERO CARD: The Datathon Win */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden mb-12 group"
        >
          <div className="flex flex-col md:flex-row">
            {/* Text Side */}
            <div className="p-8 md:p-12 flex-1 flex flex-col justify-center relative z-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zinc-900 via-zinc-900 to-transparent z-[-1]" />
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-bold w-fit mb-6 border border-yellow-500/20">
                <Trophy size={16} /> 2nd Runners Up
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DIU CPC Datathon 2024
              </h3>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-xl">
                Secured the podium position in a highly competitive data science hackathon organized by Daffodil International University's CPC. Demonstrated expertise in data preprocessing, model selection, and insight generation.
              </p>
              
              <div className="flex items-center gap-6 text-sm font-medium text-zinc-500">
                <span className="flex items-center gap-2">
                  <Calendar size={18} /> 2024
                </span>
                <span className="flex items-center gap-2">
                  <Award size={18} /> Team Competition
                </span>
              </div>
            </div>

            {/* Image Side */}
            <div className="md:w-2/5 h-64 md:h-auto relative">
              <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              {/* Image Placeholder - User needs to upload 'datathon.jpg' */}
              <img 
                src={datathonImg} 
                alt="Datathon Prize Giving" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* 2. GRID: CP Rankings */}
        <h3 className="text-2xl font-bold text-white mb-8 pl-2 border-l-4 border-green-500">
          Competitive Programming Stats
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cpStats.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl flex items-center justify-between hover:bg-zinc-800/80 transition-all hover:border-green-500/30"
            >
              <div>
                <h4 className="text-zinc-100 font-semibold mb-1">{item.title}</h4>
                <div className="flex items-center gap-3 text-xs text-zinc-500">
                  <span>{item.year}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span>{item.type}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className={`text-xl font-bold ${
                  parseInt(item.rank) < 100 ? "text-green-400" : "text-zinc-400"
                }`}>
                  {item.rank}
                </span>
                <span className="text-[10px] uppercase text-zinc-600 font-bold tracking-wider">
                  Position
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;