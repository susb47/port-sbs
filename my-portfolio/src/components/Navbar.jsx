import React, { useState, useEffect } from "react";
import { Download, Github, Linkedin, Menu, X, ChevronDown, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import resumeFile from "../assets/resume.pdf";

const navStructure = [
  {
    title: "About",
    links: [
      { name: "Overview", href: "#about" },
      { name: "Impact", href: "#impact" },
    ]
  },
  {
    title: "Academia",
    links: [
      { name: "Research", href: "#research" },
      { name: "Thesis", href: "#thesis" },
      { name: "Academic Record", href: "#result" },
    ]
  },
  {
    title: "Projects",
    href: "#projects", 
  },
  {
    title: "Honors",
    links: [
      { name: "Achievements", href: "#achievements" },
      { name: "Awards", href: "#awards" },
      { name: "Certificates", href: "#certificates" },
    ]
  },
  {
    title: "Journey",
    links: [
      { name: "Hall of Failure", href: "#hall-of-failure" },
    ]
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-3" : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group z-[110]">
          <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-white group-hover:bg-fuchsia-800 transition-colors shadow-lg shadow-indigo-100/20">
            <Zap size={18} fill="currentColor" />
          </div>
          <span className="text-lg font-black tracking-tighter text-slate-900 uppercase">
            Susmoy<span className="text-fuchsia-800">.</span>
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden xl:flex items-center gap-8">
          {navStructure.map((item, index) => (
            <div 
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.href ? (
                <a 
                  href={item.href}
                  className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-fuchsia-800 transition-colors py-4"
                >
                  {item.title}
                </a>
              ) : (
                <div className="flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 cursor-pointer hover:text-fuchsia-800 transition-colors py-4 group">
                  {item.title}
                  <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === index ? "rotate-180 text-fuchsia-800" : ""}`} />
                </div>
              )}

              <AnimatePresence>
                {activeDropdown === index && !item.href && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-[-20px] w-56 bg-white border border-slate-100 rounded-2xl shadow-2xl shadow-indigo-100/50 overflow-hidden py-3"
                  >
                    {item.links.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-fuchsia-800 hover:bg-slate-50 transition-all"
                      >
                        {link.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right Side Tools */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-5 border-r border-slate-100 pr-6">
            <a 
              href="https://github.com/susb47" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-fuchsia-800 transition-all hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/susmoybiswas47" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-fuchsia-800 transition-all hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <a 
            href={resumeFile}
            download="Susmoy_Biswas_Resume.pdf"
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-fuchsia-800 transition-all shadow-xl shadow-indigo-100/40 hover:-translate-y-1 active:translate-y-0"
          >
            <Download size={16} strokeWidth={3} className="text-white" />
            <span className="text-white">Resume</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="xl:hidden text-slate-900 z-[110] p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU (Full-screen Slide) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="xl:hidden fixed inset-0 w-full h-screen bg-white z-[105] flex flex-col"
          >
            <div className="flex-1 overflow-y-auto px-8 pt-32 pb-10">
              {navStructure.map((item, index) => (
                <div key={item.title} className="mb-6">
                  {item.href ? (
                    <a 
                      href={item.href} 
                      onClick={() => setIsOpen(false)} 
                      className="text-4xl font-black text-slate-900 uppercase tracking-tighter"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <div>
                      <button 
                        onClick={() => setMobileExpanded(mobileExpanded === index ? null : index)}
                        className="w-full flex items-center justify-between text-4xl font-black text-slate-900 uppercase tracking-tighter"
                      >
                        {item.title}
                        <ChevronDown size={32} className={`transition-transform duration-300 ${mobileExpanded === index ? "rotate-180 text-fuchsia-800" : "text-slate-300"}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === index && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }} 
                            animate={{ height: "auto", opacity: 1 }} 
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col gap-4 mt-6 ml-4 border-l-2 border-slate-100 pl-6"
                          >
                            {item.links.map((link) => (
                              <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={() => setIsOpen(false)} 
                                className="text-xl font-bold text-slate-400 hover:text-fuchsia-800 lowercase"
                              >
                                / {link.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="p-8 bg-slate-50 border-t border-slate-100 flex flex-col gap-8">
              <div className="flex justify-center gap-12">
                 <a href="https://github.com/susb47" target="_blank" rel="noreferrer" className="text-slate-400 scale-125 hover:text-fuchsia-800 transition-colors"><Github /></a>
                 <a href="https://www.linkedin.com/in/susmoybiswas47" target="_blank" rel="noreferrer" className="text-slate-400 scale-125 hover:text-fuchsia-800 transition-colors"><Linkedin /></a>
              </div>
              <a 
                href={resumeFile} 
                download 
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-center shadow-xl shadow-slate-200"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;