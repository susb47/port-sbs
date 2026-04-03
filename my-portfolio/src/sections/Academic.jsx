import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calculator, Crown } from "lucide-react";

const results = [
  { semester: "Spring '22", short: "S22", gpa: 3.91 },
  { semester: "Summer '22", short: "U22", gpa: 4.00 },
  { semester: "Fall '22", short: "F22", gpa: 3.96 },
  { semester: "Spring '23", short: "S23", gpa: 3.77 },
  { semester: "Fall '23", short: "F23", gpa: 3.70 },
  { semester: "Spring '24", short: "S24", gpa: 3.67 },
  { semester: "Fall '24", short: "F24", gpa: 3.97 },
  { semester: "Spring '25", short: "S25", gpa: 3.77 },
  { semester: "Summer '25", short: "U25", gpa: 3.68 },
  { semester: "Fall '25", short: "F25", gpa: 3.63 },
  { semester: "Thesis", short: "THS", gpa: 4.00 },
];

const avgGPA = "3.81";
const maxGPA = 4.00;

const getBarColor = (gpa) => {
  if (gpa === 4.00) return "bg-emerald-500 shadow-lg shadow-emerald-100";
  if (gpa >= 3.90) return "bg-indigo-500";
  if (gpa >= 3.80) return "bg-indigo-400";
  if (gpa >= 3.70) return "bg-indigo-300";
  if (gpa >= 3.60) return "bg-slate-300";
  return "bg-slate-200";
};

const Academic = () => {
  const minScale = 3.40;
  const maxScale = 4.00;
  const range = maxScale - minScale;
  const gridLines = [3.40, 3.50, 3.60, 3.70, 3.80, 3.90, 4.00];
  const avgPosition = ((parseFloat(avgGPA) - minScale) / range) * 100;

  return (
    <section id="result" className="py-24 bg-white relative border-b border-indigo-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
              <GraduationCap className="text-fuchsia-800" /> 
              Academic <span className="text-fuchsia-800">Performance</span>
            </h2>
            <p className="text-slate-500 font-medium">
              Graduating with a final CGPA of <span className="text-slate-900 font-bold">{avgGPA}</span>.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 md:flex-none bg-slate-50 border border-slate-100 p-4 rounded-2xl min-w-[120px]">
              <div className="flex items-center gap-2 text-slate-400 text-[10px] uppercase font-black tracking-widest mb-1">
                <Calculator size={14} /> Final CGPA
              </div>
              <div className="text-3xl font-black text-slate-900">{avgGPA}</div>
            </div>
            <div className="flex-1 md:flex-none bg-emerald-50 border border-emerald-100 p-4 rounded-2xl min-w-[120px]">
              <div className="flex items-center gap-2 text-emerald-600 text-[10px] uppercase font-black tracking-widest mb-1">
                <Crown size={14} /> Peak
              </div>
              <div className="text-3xl font-black text-emerald-600">{maxGPA.toFixed(2)}</div>
            </div>
          </div>
        </div>

        {/* CHART CONTAINER (Fit to Screen) */}
        <div className="relative w-full bg-slate-50/50 rounded-[2rem] border border-slate-100 overflow-hidden">
          
          <div className="relative h-[350px] md:h-[500px] w-full p-2 md:p-8 pt-16 flex items-end justify-between gap-1 md:gap-4">
            
            {/* Y-Axis Grid Lines */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 px-2 md:px-8 pb-6 md:pb-8">
              {gridLines.map((val) => (
                <div 
                  key={val} 
                  className="absolute w-full border-t border-slate-200 text-[9px] md:text-[10px] text-slate-400 font-bold"
                  style={{ bottom: `${((val - minScale) / range) * 100}%` }}
                >
                  <span className="absolute -left-1 md:-left-10 -top-2 w-8 text-left md:text-right bg-slate-50/80 md:bg-transparent pr-1">
                    {val.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Average Line */}
            <div 
              className="absolute left-0 w-full border-t border-dashed border-fuchsia-400/60 z-40 flex items-center pointer-events-none"
              style={{ bottom: `${avgPosition}%` }}
            >
              <div className="absolute right-2 md:right-4 -top-3 md:-top-4 bg-fuchsia-800 text-white text-[9px] md:text-[10px] font-black px-2 py-1 md:px-2.5 md:py-1.5 rounded shadow-xl shadow-fuchsia-900/20 uppercase tracking-tighter border border-fuchsia-700/50">
                <span className="hidden md:inline">CGPA: </span>{avgGPA}
              </div>
            </div>

            {/* Bars */}
            <div className="relative w-full h-full flex justify-between items-end pl-8 md:pl-0 pb-6 md:pb-8 z-20">
              {results.map((item, index) => {
                const rawHeight = ((item.gpa - minScale) / range) * 100;
                const heightPercentage = Math.max(rawHeight, 2); 
                
                return (
                  <div key={index} className="relative flex flex-col justify-end group h-full w-[8%] md:w-auto md:flex-1 mx-[1px] md:mx-0">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${heightPercentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-full rounded-t-sm md:rounded-t-xl relative flex flex-col items-center transition-all duration-300 hover:opacity-80 cursor-default ${getBarColor(item.gpa)}`}
                    >
                      {/* Numbers only visible on hover to save space */}
                      <span className="absolute -top-6 bg-slate-900 text-white text-[10px] font-black px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                        {item.gpa.toFixed(2)}
                      </span>

                      {item.gpa === 4.00 && (
                        <div className="absolute -top-5 md:-top-7 text-emerald-500 scale-75 md:scale-100">
                          <Crown size={20} fill="currentColor" />
                        </div>
                      )}
                    </motion.div>

                    {/* X-Axis Label */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full text-center">
                      {/* Ultra-short label on mobile (S22), standard label on desktop */}
                      <span className="md:hidden text-[8px] font-black text-slate-400 tracking-tighter">
                        {item.short}
                      </span>
                      <div className="hidden md:block text-[10px] text-slate-400 font-bold tracking-tight uppercase leading-none">
                        {item.semester.split(' ')[0]}
                        <span className="block text-slate-300 mt-1">
                          {item.semester.includes("'") ? `'${item.semester.split("'")[1]}` : ''}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-4 md:gap-8 mt-10 flex-wrap">
          <div className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-emerald-500 rounded-sm"></span> 4.00
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-indigo-500 rounded-sm"></span> 3.90+
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-indigo-300 rounded-sm"></span> Honors
          </div>
        </div>

      </div>
    </section>
  );
};

export default Academic;