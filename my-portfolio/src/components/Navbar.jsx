import React, { useState, useEffect } from "react";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Awards", href: "#awards" },
  { name: "Result", href: "#result" },
  { name: "Extra Curricular", href: "#extra-curricular" },
  { name: "Hall of Failure", href: "#hall-of-failure" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsOpen(false) || setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      {/* Banner Background Placeholder (Gradient for now) */}
      <div className={`absolute inset-0 -z-10 transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 to-transparent" />
      </div>

      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#" className="text-xl font-bold text-white tracking-tighter">
          SB<span className="text-violet-500">.</span>
        </a>

        {/* Desktop Navigation (Scrollable if needed) */}
        <nav className="hidden xl:flex items-center gap-1 overflow-x-auto no-scrollbar mask-gradient px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side: Resume & Socials */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-3 pr-4 border-r border-white/10">
            <a href="#" className="text-zinc-400 hover:text-white transition"><Github size={20} /></a>
            <a href="#" className="text-zinc-400 hover:text-blue-400 transition"><Linkedin size={20} /></a>
          </div>
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-zinc-200 transition">
            <Download size={16} /> Resume
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="xl:hidden absolute top-20 left-0 w-full bg-zinc-950 border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-zinc-400 hover:text-violet-400 transition"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <button className="flex items-center justify-center gap-2 bg-violet-600 text-white w-full py-3 rounded-lg font-bold">
            <Download size={18} /> Download Resume
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;