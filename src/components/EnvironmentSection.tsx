import React from 'react';

export default function EnvironmentSection() {
  return (
    <section className="relative w-full h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop")',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-block px-4 py-1 rounded-full border border-white text-white text-xs mb-6 uppercase tracking-wider backdrop-blur-sm">
            We care about environment
          </div>

          {/* Main Text */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10">
            When creating our furniture, we care about the environment. <span className="text-green-500">We do not produce</span> waste that ends up in landfills. We use even the smallest residues during production
          </h2>

          {/* Button */}
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            About CozyCorner
          </button>
        </div>
      </div>
    </section>
  );
}
