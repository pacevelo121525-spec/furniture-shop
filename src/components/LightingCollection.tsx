import React from 'react';
import { ArrowRight } from 'lucide-react';

const lamps = [
  'https://images.unsplash.com/photo-1507473888900-52e1adad545a?q=80&w=1973&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513506003011-38f45e85c753?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540932296774-3ed466885b19?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1935&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop',
];

export default function LightingCollection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top Section: Text & Lamps */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/3 space-y-6">
            <span className="inline-block px-4 py-1 rounded-full border border-gray-900 text-sm font-medium">
              Lighting
            </span>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Illuminate Your World – <br />
              Bright Ideas Start Here!
            </h2>
            <p className="text-gray-600">Discover our lighting collections</p>
          </div>
          
          <div className="lg:w-2/3 flex justify-between gap-4 overflow-x-auto pb-4 no-scrollbar">
            {lamps.map((lamp, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-48 bg-gray-50 rounded-lg p-4 hover:scale-105 transition-transform duration-300">
                <img 
                  src={lamp} 
                  alt={`Lamp ${index + 1}`} 
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner: Free Delivery */}
        <div className="rounded-2xl overflow-hidden flex flex-col md:flex-row h-[250px]">
          {/* Left: Text */}
          <div className="bg-[#D1F2E2] md:w-1/2 p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-3xl font-bold text-gray-900">Save on free delivery</h3>
              <div className="w-10 h-10 rounded-full border border-gray-900 flex items-center justify-center">
                <ArrowRight size={20} />
              </div>
            </div>
            <p className="text-gray-700">
              Our own fleet allows us to reduce delivery costs to $0
            </p>
          </div>
          
          {/* Right: Image */}
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
              alt="Delivery Trucks" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
