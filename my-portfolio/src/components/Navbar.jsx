import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 py-4 border-b border-gray-100">
      <div className="container mx-auto flex justify-between px-6 items-center">
        <h1 className="text-xl font-bold text-gray-900">MyPortfolio</h1>
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;