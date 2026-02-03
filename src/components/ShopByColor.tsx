import React from 'react';
import { ArrowRight } from 'lucide-react';

const colors = [
  { name: 'Black', hex: '#000000' },
  { name: 'Brown', hex: '#8B4513' },
  { name: 'Teal', hex: '#008080' },
  { name: 'White', hex: '#FFFFFF', border: true },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Burgundy Red', hex: '#800020' },
];

const colorCards = [
  {
    color: 'Blue',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop',
    textColor: 'text-white'
  },
  {
    color: 'Beige',
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop',
    textColor: 'text-gray-900'
  },
  {
    color: 'Pink',
    image: 'https://images.unsplash.com/photo-1505693416388-b0346d800687?q=80&w=2070&auto=format&fit=crop',
    textColor: 'text-white'
  },
  {
    color: 'Green',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2032&auto=format&fit=crop',
    textColor: 'text-white'
  }
];

export default function ShopByColor() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by color</h2>

        {/* Color Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {colorCards.map((card, index) => (
            <div key={index} className="relative h-[300px] rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src={card.image} 
                alt={card.color} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className={`text-xl font-bold ${card.textColor}`}>{card.color}</span>
                <div className={`w-6 h-6 rounded-full border ${card.textColor === 'text-white' ? 'border-white' : 'border-gray-900'} flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity`}>
                  <ArrowRight size={14} className={card.textColor} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Color Filter Buttons */}
        <div className="flex flex-wrap gap-4">
          {colors.map((color, index) => (
            <button 
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-gray-200 hover:border-gray-900 transition-colors bg-white group"
            >
              <span 
                className={`w-4 h-4 rounded-full ${color.border ? 'border border-gray-200' : ''}`}
                style={{ backgroundColor: color.hex }}
              ></span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{color.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
