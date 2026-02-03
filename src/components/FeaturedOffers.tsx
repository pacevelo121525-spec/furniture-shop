import React from 'react';

export default function FeaturedOffers() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured offers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative h-[300px] rounded-lg overflow-hidden bg-[#F5E6E0] group cursor-pointer transition-transform hover:-translate-y-1">
            <div className="absolute inset-0 p-8 flex flex-col justify-center items-start z-10">
              <span className="inline-block px-3 py-1 rounded-full border border-gray-800 text-xs font-medium mb-4">
                Tables
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                Make Your Home <br />
                a Masterpiece
              </h3>
              <p className="text-sm text-gray-600 mb-4">Discover Unique Finds!</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1577140917170-285929db55cc?q=80&w=2000&auto=format&fit=crop" 
              alt="Table" 
              className="absolute right-[-20px] bottom-[-20px] w-3/4 h-3/4 object-contain object-right-bottom mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Card 2 */}
          <div className="relative h-[300px] rounded-lg overflow-hidden bg-[#5D5449] group cursor-pointer transition-transform hover:-translate-y-1">
            <div className="absolute inset-0 p-8 flex flex-col justify-center items-start z-10">
              <span className="inline-block px-3 py-1 rounded-full border border-white/30 text-white text-xs font-medium mb-4">
                Lighting
              </span>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                From Shadow <br />
                to Shine
              </h3>
              <p className="text-sm text-white/80 mb-4">Best Lighting Solutions!</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1513506003011-38f45e85c753?q=80&w=2000&auto=format&fit=crop" 
              alt="Lighting" 
              className="absolute right-0 top-0 w-2/3 h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Card 3 */}
          <div className="relative h-[300px] rounded-lg overflow-hidden bg-[#789D9F] group cursor-pointer transition-transform hover:-translate-y-1">
            <div className="absolute inset-0 p-8 flex flex-col justify-center items-start z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white text-gray-900 text-xs font-bold mb-4">
                Sale
              </span>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                -25% for <br />
                all chairs!
              </h3>
              <p className="text-sm text-white/90 mb-4">Don't miss the deal!</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1503602642458-2321114458ed?q=80&w=2000&auto=format&fit=crop" 
              alt="Chair" 
              className="absolute right-[-10px] bottom-[-20px] w-2/3 h-2/3 object-contain object-right-bottom mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
