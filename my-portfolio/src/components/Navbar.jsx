import React, { useState, useEffect } from "react";
import { Download, Github, Linkedin, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Our New Organized Information Architecture
const navStructure = [
  {
    title: "About",
    links: [
      { name: "Overview", href: "#about" },
      { name: "Skills", href: "#skills" },
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
    href: "#projects", // Direct link, no dropdown
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
      { name: "Extra Curricular", href: "#extra-curricular" },
      { name: "Hall of Failure", href: "#hall-of-failure" },
    ]
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // For Desktop
  const [mobileExpanded, setMobileExpanded] = useState(null); // For Mobile

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-indigo-50" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-slate-900 tracking-tight z-50">
          SB<span className="text-fuchsia-800">.</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden xl:flex items-center gap-6 z-50">
          {navStructure.map((item, index) => (
            <div 
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.href ? (
                // Direct Link (Projects)
                <a 
                  href={item.href}
                  className="font-medium text-slate-600 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-indigo-600 py-6"
                >
                  {item.title}
                </a>
              ) : (
                // Dropdown Trigger
                <div className="flex items-center gap-1 font-medium text-slate-600 cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-indigo-600 py-6 group">
                  {item.title}
                  <ChevronDown size={14} className="text-slate-400 group-hover:text-fuchsia-700 transition-transform duration-300 group-hover:rotate-180" />
                </div>
              )}

              {/* Animated Dropdown Menu */}
              {!item.href && (
                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-[-10px] w-48 bg-white border border-indigo-50 rounded-xl shadow-xl overflow-hidden py-2"
                    >
                      {item.links.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2 text-sm text-slate-600 hover:text-fuchsia-800 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-fuchsia-50 transition-all"
                        >
                          {link.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side: Socials & Resume (Desktop) */}
        <div className="hidden md:flex items-center gap-4 z-50">
          <div className="flex gap-4 pr-4 border-r border-indigo-100">
            <a href="#" className="text-slate-400 hover:text-fuchsia-800 transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-fuchsia-800 to-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-fuchsia-800/30 transition-all hover:scale-105">
            <Download size={16} /> Resume
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden text-slate-900 z-50 p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION DROPDOWN (Accordion Style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden absolute top-16 md:top-20 left-0 w-full bg-white border-b border-indigo-100 shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="px-6 py-4 flex flex-col gap-2 max-h-[70vh] overflow-y-auto no-scrollbar">
              {navStructure.map((item, index) => (
                <div key={item.title} className="border-b border-slate-100 last:border-0 pb-2">
                  {item.href ? (
                    // Mobile Direct Link
                    <a 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-lg font-bold text-slate-800 hover:text-fuchsia-800"
                    >
                      {item.title}
                    </a>
                  ) : (
                    // Mobile Accordion Trigger
                    <div>
                      <button 
                        onClick={() => setMobileExpanded(mobileExpanded === index ? null : index)}
                        className="w-full flex items-center justify-between py-3 text-lg font-bold text-slate-800 hover:text-fuchsia-800"
                      >
                        {item.title}
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform duration-300 ${mobileExpanded === index ? "rotate-180 text-fuchsia-800" : "text-slate-400"}`} 
                        />
                      </button>
                      
                      {/* Mobile Accordion Content */}
                      <AnimatePresence>
                        {mobileExpanded === index && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden flex flex-col pl-4 border-l-2 border-indigo-100 ml-2 mb-2"
                          >
                            {item.links.map((link) => (
                              <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="py-2 text-slate-600 hover:text-fuchsia-800 font-medium"
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
            
            <div className="px-6 py-6 bg-slate-50 border-t border-indigo-50 flex flex-col gap-4">
              <div className="flex items-center justify-center gap-6">
                 <a href="#" className="text-slate-400 hover:text-fuchsia-800"><Github size={24} /></a>
                 <a href="#" className="text-slate-400 hover:text-blue-600"><Linkedin size={24} /></a>
              </div>
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-fuchsia-800 to-indigo-700 text-white w-full py-3.5 rounded-xl font-bold shadow-md hover:shadow-lg transition-all">
                <Download size={18} /> Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;