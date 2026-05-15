import React, { useState, useEffect } from "react";
import { Download, Github, Linkedin, Menu, X, ChevronDown, Brain } from "lucide-react";
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3" : "bg-white py-5"
      }`}
      style={{ backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "#ffffff" }}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group z-[110]" style={{ outline: "none", textDecoration: "none" }}>
          <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-white group-hover:bg-fuchsia-800 transition-colors shadow-sm">
            <Brain size={18} fill="none" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-black tracking-tighter text-slate-900 uppercase" style={{ color: "#0f172a" }}>
            Susmoy<span className="text-fuchsia-800" style={{ color: "#86198f" }}>.</span>
          </span>
        </a>

        {/* DESKTOP NAV (Dropdowns Restored Here!) */}
        <nav className="hidden xl:flex items-center gap-8">
          {navStructure.map((item, index) => (
            <div 
              key={item.title} 
              className="relative" 
              onMouseEnter={() => setActiveDropdown(index)} 
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.href ? (
                <a href={item.href} className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-fuchsia-800 py-4 transition-colors">
                  {item.title}
                </a>
              ) : (
                <div className="flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 cursor-pointer hover:text-fuchsia-800 py-4 group transition-colors">
                  {item.title}
                  <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === index ? "rotate-180 text-fuchsia-800" : ""}`} />
                </div>
              )}

              {/* THIS IS WHAT WAS MISSING: The actual dropdown menu for desktop */}
              <AnimatePresence>
                {activeDropdown === index && !item.href && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
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

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-5 border-r border-slate-100 pr-6">
            <a href="https://github.com/susb47" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-fuchsia-800"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/susmoybiswas47" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-fuchsia-800"><Linkedin size={20} /></a>
          </div>
          <a href={resumeFile} download className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-fuchsia-800 transition-colors">
            <Download size={16} strokeWidth={3} color="#ffffff" /> 
            <span style={{ color: "#ffffff" }}>Resume</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="xl:hidden z-[110] p-2 bg-transparent border-none outline-none shadow-none hover:bg-slate-50 rounded-lg flex items-center justify-center transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ backgroundColor: "transparent", border: "none", boxShadow: "none", WebkitTapHighlightColor: "transparent" }}
        >
          {isOpen ? <X size={28} color="#86198f" /> : <Menu size={28} color="#0f172a" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="xl:hidden fixed inset-0 w-full h-screen z-[105] flex flex-col"
            style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
          >
            <div className="flex-1 overflow-y-auto px-8 pt-32 pb-10" style={{ backgroundColor: "#ffffff" }}>
              {navStructure.map((item, index) => (
                <div key={item.title} className="mb-6" style={{ backgroundColor: "#ffffff" }}>
                  {item.href ? (
                    <a 
                      href={item.href} 
                      onClick={() => setIsOpen(false)} 
                      className="text-3xl font-black uppercase block tracking-tighter"
                      style={{ color: "#0f172a", borderBottom: "1px solid #f1f5f9", paddingBottom: "8px", textDecoration: "none" }}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <div style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #f1f5f9", paddingBottom: "8px" }}>
                      <button 
                        onClick={() => setMobileExpanded(mobileExpanded === index ? null : index)}
                        className="w-full flex items-center justify-between text-3xl font-black uppercase tracking-tighter py-2 border-none outline-none shadow-none"
                        style={{ color: mobileExpanded === index ? "#86198f" : "#0f172a", backgroundColor: "transparent" }}
                      >
                        <span>{item.title}</span>
                        <ChevronDown size={28} color={mobileExpanded === index ? "#86198f" : "#cbd5e1"} className={`transition-transform duration-300 ${mobileExpanded === index ? "rotate-180" : ""}`} />
                      </button>
                      
                      <AnimatePresence>
                        {mobileExpanded === index && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }} 
                            animate={{ height: "auto", opacity: 1 }} 
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-4 mt-4 ml-4 pl-6 overflow-hidden" 
                            style={{ borderLeft: "2px solid #f1f5f9", backgroundColor: "#ffffff" }}
                          >
                            {item.links.map((link) => (
                              <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={() => setIsOpen(false)} 
                                className="text-xl font-bold py-1 hover:text-fuchsia-800 transition-colors"
                                style={{ color: "#94a3b8", textDecoration: "none" }}
                              >
                                {link.name}
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
            
            {/* Mobile Footer */}
            <div className="p-8 flex flex-col gap-8" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid #f1f5f9" }}>
              <div className="flex justify-center gap-12" style={{ backgroundColor: "transparent" }}>
                 <a href="https://github.com/susb47"><Github size={32} color="#94a3b8" /></a>
                 <a href="https://www.linkedin.com/in/susmoybiswas47"><Linkedin size={32} color="#94a3b8" /></a>
              </div>
              <a 
                href={resumeFile} 
                download 
                className="w-full py-5 rounded-2xl font-black uppercase text-center shadow-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#0f172a", color: "#ffffff", textDecoration: "none" }}
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