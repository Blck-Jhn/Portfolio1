import React from 'react';

export default function Header() {
  return (
    <div className="fixed top-6 w-full z-50 flex justify-center px-4">
      <div className="flex items-center gap-3 p-1.5 border border-white/10 rounded-full bg-slate-900/40 backdrop-blur-md shadow-2xl">
        
        {/* Logo / Name Section */}
        <a 
          href="#" 
          className="bg-white text-black hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-lg transform hover:scale-105"
        >
          Ajala John
        </a>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 text-sm font-medium text-white/70">
          <a href="#" className="nav-link px-3 py-2 hover:text-cyan-400 transition-colors">
            Home
          </a>
          <a href="#project" className="nav-link px-3 py-2 hover:text-cyan-400 transition-colors">
            Projects
          </a>
          <a href="#about" className="nav-link px-3 py-2 hover:text-cyan-400 transition-colors">
            About
          </a>
          
          {/* Highlighted Contact Button */}
          <a 
            href="#contact" 
            className="ml-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500 hover:text-white transition-all duration-300 px-4 py-2 rounded-full whitespace-nowrap text-xs md:text-sm shadow-inner"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}