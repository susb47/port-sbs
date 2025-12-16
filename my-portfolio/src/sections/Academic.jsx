import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calculator, TrendingUp, Crown } from "lucide-react";

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
  { semester: "Fall '25", gpa: 3.50, status: "Estimated" },
];

// Calculate Statistics
const totalGPA = results.reduce((acc, curr) => acc + curr.gpa, 0);
const avgGPA = (totalGPA / results.length).toFixed(2); // Should be approx 3.79
const maxGPA = Math.max(...results.map(r => r.gpa));

// Helper: Distinct Color Logic
const getBarColor = (gpa, status) => {
  if (status === "Estimated") return "bg-zinc-700 pattern-diagonal-lines opacity-50"; 
  if (gpa === 4.00) return "bg-emerald-600 shadow-[0_0_20px_rgba(5,150,105,0.8)]"; // DARK DEEP GREEN
  if (gpa >= 3.90) return "bg-green-400";   // Bright Green (High distinction)
  if (gpa >= 3.80) return "bg-lime-400";    // Lime
  if (gpa >= 3.70) return "bg-yellow-400";  // Yellow
  if (gpa >= 3.60) return "bg-orange-400";  // Orange
  return "bg-red-500";
};

// Helper: Text Color Logic (Dark text on light bars, White on dark bars)
const getTextColor = (gpa, status) => {
  if (status === "Estimated") return "text-zinc-400";
  if (gpa === 4.00) return "text-white";
  return "text-zinc-900"; // Black text for bright colors (Yellow/Lime/Green)
};

const Academic = () => {
  // ZOOMED SCALE: 3.40 to 4.00
  const minScale = 3.40;
  const maxScale = 4.00;
  const range = maxScale - minScale;
  
  // Standardized Grid Lines
  const gridLines = [3.40, 3.50, 3.60, 3.70, 3.80, 3.90, 4.00];

  // Calculate Average Line Position
  const avgPosition = ((avgGPA - minScale) / range) * 100;

  return (
    <section id="result" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
              <GraduationCap className="text-emerald-500" /> 
              Academic <span className="text-emerald-500">Performance</span>
            </h2>
            <p className="text-zinc-400 max-w-xl">
              Visualized on a precision scale (3.40 - 4.00).
            </p>
          </div>

          <div className="flex gap-4">
            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase font-bold mb-1">
                <Calculator size={14} /> Avg SGPA
              </div>
              <div className="text-3xl font-bold text-white">{avgGPA}</div>
            </div>
            <div className="bg-zinc-900 border border-emerald-900/30 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-emerald-500 text-xs uppercase font-bold mb-1">
                <Crown size={14} /> Peak
              </div>
              <div className="text-3xl font-bold text-emerald-400">{maxGPA}</div>
            </div>
          </div>
        </div>

        {/* THE GRAPH CONTAINER - Increased Height to 600px for clarity */}
        <div className="relative h-[600px] w-full bg-zinc-900/20 rounded-3xl border border-zinc-800 p-8 pt-12 flex items-end justify-between gap-3 md:gap-6">
          
          {/* Y-Axis Grid Lines */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 px-8 pb-8">
            {gridLines.map((val) => (
              <div 
                key={val} 
                className="absolute w-full border-t border-zinc-800 text-[11px] text-zinc-600 font-mono"
                style={{ bottom: `${((val - minScale) / range) * 100}%` }}
              >
                <span className="absolute -left-8 -top-2">{val.toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* BOLD Average Line (Z-Index increased to sit clearly) */}
          <div 
            className="absolute left-0 w-full border-t-[3px] border-dashed border-white/60 z-10 flex items-center px-8"
            style={{ bottom: `${avgPosition}%` }}
          >
            <span className="bg-white text-black text-xs font-bold px-2 py-1 rounded absolute right-2 -top-4 shadow-lg border border-zinc-300">
              Avg: {avgGPA}
            </span>
          </div>

          {/* Bars */}
          {results.map((item, index) => {
            const rawHeight = ((item.gpa - minScale) / range) * 100;
            const heightPercentage = Math.max(rawHeight, 2); // Ensure minimal visibility
            
            const isEstimated = item.status === "Estimated";
            const barColor = getBarColor(item.gpa, item.status);
            const textColor = getTextColor(item.gpa, item.status);

            return (
              <div key={index} className="relative flex-1 flex flex-col justify-end group h-full z-20 min-w-[40px]">
                
                {/* The Bar */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${heightPercentage}%` }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "circOut" }}
                  className={`w-full rounded-t-md relative flex items-start justify-center pt-2 transition-all duration-300 ${barColor}`}
                >
                  {/* PERMANENT NUMBER INSIDE BAR */}
                  <span className={`text-sm md:text-base font-bold rotate-0 z-30 mt-1 ${textColor}`}>
                    {item.gpa.toFixed(2)}
                  </span>

                  {/* 4.00 Crown Icon */}
                  {item.gpa === 4.00 && (
                    <div className="absolute -top-8 text-emerald-500 animate-bounce">
                      <Crown size={24} fill="currentColor" />
                    </div>
                  )}

                  {/* Estimated Label */}
                  {isEstimated && (
                    <span className="absolute -top-6 text-[10px] text-zinc-500 font-bold tracking-wider uppercase">
                      Est.
                    </span>
                  )}

                </motion.div>

                {/* X-Axis Label */}
                <div className="mt-4 text-[10px] md:text-xs text-zinc-500 text-center font-bold tracking-wide uppercase">
                  {item.semester.split(" ")[0].slice(0, 3)}
                  <span className="block text-zinc-600 font-normal">
                    '{item.semester.split("'")[1]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-10 flex-wrap border-t border-zinc-800/50 pt-6">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
            <span className="w-4 h-4 bg-emerald-600 rounded shadow-sm border border-emerald-400"></span> 4.00
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
            <span className="w-4 h-4 bg-green-400 rounded shadow-sm"></span> 3.90+
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
            <span className="w-4 h-4 bg-lime-400 rounded shadow-sm"></span> 3.80+
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
            <span className="w-4 h-4 bg-yellow-400 rounded shadow-sm"></span> 3.70+
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
            <span className="w-4 h-4 bg-zinc-700 opacity-50 rounded shadow-sm"></span> Estimated
          </div>
        </div>

      </div>
    </section>
  );
};

export default Academic;