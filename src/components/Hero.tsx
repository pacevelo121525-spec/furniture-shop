import React from 'react';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full h-[600px] bg-gray-100 overflow-hidden group">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2727&auto=format&fit=crop")',
        }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-12">
          <div className="max-w-2xl text-white space-y-6">
            {/* Badge */}
            <div className="inline-block border border-white/60 rounded-full px-4 py-1 text-sm uppercase tracking-wide backdrop-blur-sm">
              Furnishing Dreams
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Bring Comfort <br />
              Home – Style <br />
              Your Space with Us!
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/90 font-light">
              Furniture for the Modern Home.
            </p>

            {/* Button */}
            <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
              Discover our Collection
            </button>
          </div>
        </div>
      </div>

      {/* Hotspots */}
      <div className="absolute top-1/3 right-1/3 animate-pulse">
        <button className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <Plus size={16} />
        </button>
      </div>
      <div className="absolute bottom-1/3 right-1/4 animate-pulse delay-700">
        <button className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <Plus size={16} />
        </button>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
          <ArrowLeft size={20} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        <button className="w-2.5 h-2.5 rounded-full bg-white"></button>
        <button className="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white transition-colors"></button>
        <button className="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white transition-colors"></button>
      </div>
    </div>
  );
}
