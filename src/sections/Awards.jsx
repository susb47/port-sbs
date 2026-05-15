import React from "react";
import { motion } from "framer-motion";
import { Award, Star, ShieldCheck, BookOpen, Heart, Crown, Sparkles } from "lucide-react";
import awardImg from "../assets/hero-award.jpg"; 

const Awards = () => {
  return (
    <section id="awards" className="py-24 bg-white relative overflow-hidden border-b border-indigo-50">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-50/50 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-widest border border-amber-100 mb-4"
          >
            <Sparkles size={14} /> Distinguished Honors
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Honors & <span className="text-fuchsia-800">Recognition</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Acknowledging excellence in leadership, research, and holistic character.
          </p>
        </div>

        {/* SPOTLIGHT CARD: Hero of the Hall */}
        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full bg-white border border-indigo-100 rounded-[2.5rem] overflow-hidden shadow-xl shadow-indigo-100/20 flex flex-col md:flex-row group"
          >
            {/* Left Side: Image with elegant overlay */}
            <div className="md:w-5/12 relative h-80 md:h-auto overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-transparent to-transparent z-10" />
              <img 
                src={awardImg} 
                alt="Receiving Hero of the Hall Award" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Side: Content */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative z-20">
              
              {/* Top Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="flex items-center gap-2 bg-amber-50 text-amber-700 text-[10px] font-black px-3 py-1 rounded-full border border-amber-200 uppercase tracking-widest">
                  <Crown size={14} /> Highest Achievable Honor
                </span>
                <span className="bg-slate-50 text-slate-400 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-200 uppercase tracking-widest">
                  Inaugural Recipient
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
                Hero of the <span className="text-fuchsia-800">Hall</span>
              </h3>

              <div className="flex items-center gap-1 text-amber-500 mb-6">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={22} fill="currentColor" />
                  ))}
                  <span className="ml-2 text-slate-400 text-sm font-bold uppercase tracking-tighter">4-Star Excellence Rank</span>
              </div>

              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Secured the <span className="text-slate-900 font-bold">highest achievable 4-Star rating</span> during the inaugural introduction of this award category. Recognized by <span className="text-fuchsia-800 font-semibold">Creative International Bangladesh</span> & the Daffodil Family for setting the benchmark in holistic academic and leadership excellence.
              </p>

              {/* Criteria Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Criteria 1 */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:border-indigo-100 transition-colors">
                  <div className="p-2.5 bg-white rounded-xl text-fuchsia-800 shadow-sm">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-bold text-sm">Academic & Research</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-tight">Scholarly pursuit and innovation.</p>
                  </div>
                </div>

                {/* Criteria 2 */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:border-indigo-100 transition-colors">
                  <div className="p-2.5 bg-white rounded-xl text-fuchsia-800 shadow-sm">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-bold text-sm">Moral Excellence</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-tight">Integrity and ethical leadership.</p>
                  </div>
                </div>

                {/* Criteria 3 */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:border-indigo-100 transition-colors sm:col-span-2">
                  <div className="p-2.5 bg-white rounded-xl text-fuchsia-800 shadow-sm">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-bold text-sm">Impactful Citizenship</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-tight">Contributions that transcend the classroom to benefit the community.</p>
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