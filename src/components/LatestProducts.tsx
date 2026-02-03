import React from 'react';
import { Heart, Search, BarChart2, ShoppingBag, ArrowLeft, ArrowRight } from 'lucide-react';

const products = [
  {
    brand: 'SlumberCraft',
    name: 'Bess Decorative Throw Pillow',
    price: 9.00,
    originalPrice: null,
    discount: null,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?q=80&w=2000&auto=format&fit=crop'
  },
  {
    brand: 'IdealInstitute',
    name: 'Avyanna Occasional Chair',
    price: 202.00,
    originalPrice: 258.00,
    discount: '-22%',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2000&auto=format&fit=crop',
    active: true
  },
  {
    brand: 'FeastFocal',
    name: 'Leather and Fabric Sofas',
    price: 639.00,
    originalPrice: 963.00,
    discount: '-34%',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop'
  },
  {
    brand: 'CornDell',
    name: 'Valdez 3 Seater Sofa',
    price: 599.00,
    originalPrice: 786.00,
    discount: '-24%',
    image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1961&auto=format&fit=crop'
  },
  {
    brand: 'BroyHill',
    name: 'Arlomore Table Lamp',
    price: 39.00,
    originalPrice: null,
    discount: null,
    image: 'https://images.unsplash.com/photo-1507473888900-52e1adad545a?q=80&w=1973&auto=format&fit=crop'
  }
];

export default function LatestProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Latest products</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-colors">
              <ArrowLeft size={18} />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-colors">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-[280px] bg-gray-50 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply p-4 group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute bottom-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-3 rounded-full w-10 h-10 flex items-center justify-center">
                    {product.discount}
                  </div>
                )}

                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-colors">
                    <Heart size={14} />
                  </button>
                  {product.active && (
                    <>
                      <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-colors">
                        <Search size={14} />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-colors">
                        <BarChart2 size={14} />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-colors">
                        <ShoppingBag size={14} />
                      </button>
                    </>
                  )}
                  {!product.active && (
                    <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-colors">
                      <ShoppingBag size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                <h3 className="text-sm font-medium text-gray-900 mb-2 truncate">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-bold ${product.discount ? 'text-red-600' : 'text-gray-900'}`}>
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
