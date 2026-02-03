import React from 'react';

const instaImages = [
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616594039964-40891a90b669?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop'
];

export default function InstagramFeed() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-xl font-bold text-gray-900 mb-8">
          Follow us on instagram <a href="#" className="underline hover:text-green-600">@CozyCorner</a>
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {instaImages.map((img, index) => (
            <div key={index} className="aspect-square bg-gray-100 overflow-hidden group cursor-pointer relative">
              <img 
                src={img} 
                alt={`Instagram post ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-xl font-bold text-gray-900">
            Join our newsletter and get $20 discount for your first order
          </h3>
          
          <div className="flex w-full md:w-auto gap-4">
            <input 
              type="email" 
              placeholder="Your address e-mail" 
              className="flex-1 md:w-80 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-black text-sm"
            />
            <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
