import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calculator, TrendingUp, Crown, CheckCircle2 } from "lucide-react";

const results = [
  { semester: "Spring '22", gpa: 3.91, status: "Completed" },
  { semester: "Summer '22", gpa: 4.00, status: "Completed" },
  { semester: "Fall '22", gpa: 3.96, status: "Completed" },
  { semester: "Spring '23", gpa: 3.77, status: "Completed" },
  { semester: "Fall '23", gpa: 3.70, status: "Completed" },
  { semester: "Spring '24", gpa: 3.67, status: "Completed" },
  { semester: "Fall '24", gpa: 3.97, status: "Completed" },
  { semester: "Spring '25", gpa: 3.77, status: "Completed" },
  { semester: "Summer '25", gpa: 3.68, status: "Completed" },
  { semester: "Fall '25", gpa: 3.63, status: "Completed" }, // Updated Final Results
  { semester: "Thesis", gpa: 4.00, status: "Completed" },    // Added Thesis
];

// Calculated Statistics
const avgGPA = "3.81"; // Final CGPA as requested
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
      <div className="container mx-auto px-6 max-w-6xl">
        
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
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl min-w-[120px]">
              <div className="flex items-center gap-2 text-slate-400 text-[10px] uppercase font-black tracking-widest mb-1">
                <Calculator size={14} /> Final CGPA
              </div>
              <div className="text-3xl font-black text-slate-900">{avgGPA}</div>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl min-w-[120px]">
              <div className="flex items-center gap-2 text-emerald-600 text-[10px] uppercase font-black tracking-widest mb-1">
                <Crown size={14} /> Peak
              </div>
              <div className="text-3xl font-black text-emerald-600">{maxGPA.toFixed(2)}</div>
            </div>
          </div>
        </div>

        {/* CHART CONTAINER */}
        <div className="relative h-[500px] w-full bg-slate-50/50 rounded-[2rem] border border-slate-100 p-8 pt-16 flex items-end justify-between gap-2 md:gap-4 overflow-hidden">
          
          {/* Y-Axis Grid Lines */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 px-8 pb-8">
            {gridLines.map((val) => (
              <div 
                key={val} 
                className="absolute w-full border-t border-slate-200 text-[10px] text-slate-400 font-bold"
                style={{ bottom: `${((val - minScale) / range) * 100}%` }}
              >
                <span className="absolute -left-10 -top-2 w-8 text-right">{val.toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Average Line - Z-Index set to 40 to stay on top */}
          <div 
            className="absolute left-0 w-full border-t-2 border-dashed border-fuchsia-400/60 z-40 flex items-center pointer-events-none"
            style={{ bottom: `${avgPosition}%` }}
          >
            <div className="bg-fuchsia-800 text-white text-[10px] font-black px-2.5 py-1.5 rounded-lg absolute right-4 -top-4 shadow-xl shadow-fuchsia-900/20 uppercase tracking-tighter border border-fuchsia-700/50 backdrop-blur-sm">
              CGPA: {avgGPA}
            </div>
          </div>

          {/* Bars */}
          {results.map((item, index) => {
            const rawHeight = ((item.gpa - minScale) / range) * 100;
            const heightPercentage = Math.max(rawHeight, 2); 
            
            return (
              <div key={index} className="relative flex-1 flex flex-col justify-end group h-full z-20">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${heightPercentage}%` }}
                  transition={{ duration: 1.2, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full rounded-t-xl relative flex flex-col items-center transition-all duration-300 ${getBarColor(item.gpa)}`}
                >
                  <span className="text-[10px] md:text-xs font-black text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.gpa.toFixed(2)}
                  </span>

                  {item.gpa === 4.00 && (
                    <div className="absolute -top-7 text-emerald-500">
                      <Crown size={20} fill="currentColor" />
                    </div>
                  )}
                </motion.div>

                {/* X-Axis Label */}
                <div className="mt-4 text-[9px] md:text-[10px] text-slate-400 text-center font-bold tracking-tight uppercase leading-none">
                  {item.semester.includes(' ') ? item.semester.split(' ')[0] : item.semester}
                  <span className="block text-slate-300 mt-1">
                    {item.semester.includes("'") ? `'${item.semester.split("'")[1]}` : ''}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mt-10 flex-wrap">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="w-3 h-3 bg-emerald-500 rounded-sm"></span> Perfect 4.00
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="w-3 h-3 bg-indigo-500 rounded-sm"></span> 3.90+ Distinction
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="w-3 h-3 bg-indigo-300 rounded-sm"></span> Honors Range
          </div>
        </div>

      </div>
    </section>
  );
};

export default Academic;