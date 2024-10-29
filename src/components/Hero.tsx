import React from 'react';
import { Play, Info } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            Full Stack Developer
          </h1>
          <p className="text-xl text-gray-300">
            Crafting digital experiences with modern technologies.
            Specialized in React, Node.js, and Cloud Architecture.
          </p>
          <div className="flex space-x-4">
            <button className="flex items-center px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors">
              <Play className="w-5 h-5 mr-2" />
              View Projects
            </button>
            <button className="flex items-center px-6 py-2 bg-gray-600/70 text-white rounded hover:bg-gray-600 transition-colors">
              <Info className="w-5 h-5 mr-2" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;