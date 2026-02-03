import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  { name: 'Sofas', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Wardrobes', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop' },
  { name: 'Chairs', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Desks', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Tables', image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Lighting', image: 'https://images.unsplash.com/photo-1507473888900-52e1adad545a?q=80&w=1973&auto=format&fit=crop' },
  { name: 'Cabinets', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Office', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop' },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by top categories</h2>
        
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
            {categories.map((cat, index) => (
              <div key={index} className="flex flex-col items-center min-w-[120px] group cursor-pointer">
                <div className="w-32 h-32 rounded-lg overflow-hidden mb-4 bg-gray-50 flex items-center justify-center p-2">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
          
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 shadow-sm hover:border-green-600 hover:text-green-600 transition-all hidden lg:flex">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
