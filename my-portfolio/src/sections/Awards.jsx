import React from "react";
import { motion } from "framer-motion";
import { Award, Star, ShieldCheck, BookOpen, Heart, Crown } from "lucide-react";
import awardImg from "../assets/hero-award.jpg"; 

const Awards = () => {
  return (
    <section id="awards" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-4">
            Honors & <span className="text-yellow-500">Recognition</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Acknowledging excellence in leadership, research, and character.
          </p>
        </div>

        {/* SPOTLIGHT CARD */}
        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-5xl bg-zinc-900/60 border border-yellow-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_-10px_rgba(234,179,8,0.15)] flex flex-col md:flex-row group"
          >
            {/* Background Gradient Effect */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Left Side: Image */}
            <div className="md:w-2/5 relative h-80 md:h-auto overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-900 via-transparent to-transparent z-10" />
              <img 
                src={awardImg} 
                alt="Receiving Hero of the Hall Award" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Right Side: Content */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative z-20">
              
              {/* Top Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="flex items-center gap-2 bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full border border-yellow-500/30 uppercase tracking-widest">
                  <Crown size={14} /> Highest Achievable Honor
                </span>
                <span className="bg-zinc-800 text-zinc-400 text-xs font-bold px-3 py-1 rounded-full border border-zinc-700 uppercase tracking-widest">
                  Inaugural Recipient
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Hero of the Hall
              </h3>

              <div className="flex items-center gap-1 text-yellow-500 mb-2">
                 {[...Array(4)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                  <span className="ml-2 text-zinc-400 text-sm font-medium">(4-Star Rank)</span>
              </div>

              <p className="text-zinc-300 text-lg mb-8 font-medium leading-relaxed">
                Secured the <span className="text-white font-bold">highest achievable 4-Star rating</span> during the inaugural introduction of this award category. Recognized by Creative International Bangladesh & Daffodil Family Group for setting the benchmark in holistic excellence.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Criteria 1 */}
                <div className="flex items-start gap-4 p-4 bg-zinc-950/50 rounded-xl border border-zinc-800/50 hover:border-yellow-500/20 transition-colors">
                  <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="text-zinc-200 font-bold text-sm">Academic & Research</h4>
                    <p className="text-zinc-500 text-xs mt-1">Excellence in scholarly pursuits and innovation.</p>
                  </div>
                </div>

                {/* Criteria 2 */}
                <div className="flex items-start gap-4 p-4 bg-zinc-950/50 rounded-xl border border-zinc-800/50 hover:border-yellow-500/20 transition-colors">
                  <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-zinc-200 font-bold text-sm">Moral Excellence</h4>
                    <p className="text-zinc-500 text-xs mt-1">Upholding integrity, leadership, and ethical standards.</p>
                  </div>
                </div>

                {/* Criteria 3 */}
                <div className="flex items-start gap-4 p-4 bg-zinc-950/50 rounded-xl border border-zinc-800/50 hover:border-yellow-500/20 transition-colors md:col-span-2">
                  <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="text-zinc-200 font-bold text-sm">Extra Curricular</h4>
                    <p className="text-zinc-500 text-xs mt-1">Impactful contributions beyond the classroom.</p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Awards;