import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, TrendingUp, Hash, Calendar, Medal, Crown } from "lucide-react";
import datathonImg from "../assets/datathon.jpg"; 

const cpStats = [
  {
    id: 1,
    title: "ICPC Preliminary Dhaka Regional",
    rank: "584th",
    year: "2025",
    type: "National",
    icon: <Hash size={18} className="text-blue-500" />
  },
  {
    id: 2,
    title: "ICPC Preliminary Dhaka Regional",
    rank: "774th",
    year: "2024",
    type: "National",
    icon: <Hash size={18} className="text-slate-400" />
  },
  {
    id: 3,
    title: "Take Off Programming Contest (Fall)",
    rank: "42nd",
    year: "2022",
    type: "Intra-University",
    icon: <TrendingUp size={18} className="text-emerald-500" />
  },
  {
    id: 4,
    title: "Take Off Programming Contest (Spring)",
    rank: "84th",
    year: "2022",
    type: "Intra-University",
    icon: <TrendingUp size={18} className="text-emerald-500" />
  },
  {
    id: 5,
    title: "Unlock the Algorithm Preliminary",
    rank: "182nd",
    year: "2023",
    type: "Contest",
    icon: <Hash size={18} className="text-slate-400" />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-white relative border-b border-indigo-50">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Trophy className="text-fuchsia-800" /> 
            Hall of <span className="text-fuchsia-800">Achievements</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Competitive Programming & Data Science Hackathons.
          </p>
        </div>

        {/* 1. HERO CARD: DIU CPC Datathon 2024 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-slate-50 border border-indigo-100 overflow-hidden mb-20 group shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex flex-col md:flex-row">
            {/* Text Side */}
            <div className="p-8 md:p-12 flex-1 flex flex-col justify-center relative z-10 bg-white md:bg-transparent">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-100 text-fuchsia-800 text-sm font-bold w-fit mb-6 border border-fuchsia-200">
                <Crown size={16} /> 2nd Runners Up
              </div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                DIU CPC Datathon 2024
              </h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-xl">
                Secured a podium position in a high-intensity national-level data science hackathon. Demonstrated expertise in complex data preprocessing, ensemble model selection, and actionable insight generation under tight deadlines.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-400">
                <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg">
                  <Calendar size={16} /> 2024
                </span>
                <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg">
                  <Award size={16} /> Team Competition
                </span>
              </div>
            </div>

            {/* Image Side */}
            <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={datathonImg} 
                alt="Datathon Prize Giving" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </motion.div>

        {/* 2. GRID: CP Rankings */}
        <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1.5 bg-fuchsia-800 rounded-full" />
            <h3 className="text-2xl font-bold text-slate-900">
                Competitive Programming Stats
            </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cpStats.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4, borderColor: '#d8b4fe' }}
              className="bg-white border border-slate-200 p-6 rounded-2xl flex items-center justify-between shadow-sm transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold text-sm leading-tight mb-1">{item.title}</h4>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>{item.year}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>{item.type}</span>
                  </div>
                </div>
              </div>
              <div className="text-right ml-4">
                <span className={`text-xl font-black ${
                  parseInt(item.rank) < 100 ? "text-fuchsia-700" : "text-slate-400"
                }`}>
                  {item.rank}
                </span>
                <span className="block text-[9px] uppercase text-slate-400 font-bold tracking-tighter">
                  Rank
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