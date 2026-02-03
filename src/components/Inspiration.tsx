import React from 'react';
import { Heart } from 'lucide-react';

export default function Inspiration() {
  const inspiredProducts = [
    {
      brand: 'IdealInstitute',
      name: 'Avyanna Occasional Chair',
      price: 202.00,
      originalPrice: 258.00,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2000&auto=format&fit=crop'
    },
    {
      brand: 'CornDell',
      name: 'Valdez 3 Seater Sofa',
      price: 599.00,
      originalPrice: 786.00,
      image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1961&auto=format&fit=crop'
    },
    {
      brand: 'PlushLounge',
      name: 'Touch Bedside Table Lamp',
      price: 40.00,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1513506003011-38f45e85c753?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          Be inspired by <span className="underline decoration-2 underline-offset-4">Idealnstitute</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Inspirational Image */}
          <div className="lg:w-2/3 relative rounded-lg overflow-hidden h-[500px] group">
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2664&auto=format&fit=crop" 
              alt="Living Room Inspiration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Brand Logo Overlay */}
            <div className="absolute top-8 left-8 bg-white px-4 py-2 rounded shadow-sm">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 w-6 h-6 flex items-center justify-center rounded-sm text-white font-bold text-xs">I</div>
                <span className="font-bold text-gray-900 tracking-wider text-sm">IDEAINSTITUTE</span>
              </div>
            </div>
          </div>

          {/* Product List */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            <div className="space-y-4">
              {inspiredProducts.map((product, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer">
                  <div className="w-24 h-24 bg-white rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain mix-blend-multiply p-2 group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                        <h4 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-red-600 font-bold text-sm">${product.price.toFixed(2)}</span>
                          {product.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                          )}
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <Heart size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add All Button */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-colors">
                Add all <span className="bg-white text-green-600 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">3</span> products to cart
              </button>
              <div className="text-right">
                <span className="block text-xs text-gray-500">Total</span>
                <span className="font-bold text-gray-900 text-lg">$841.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
