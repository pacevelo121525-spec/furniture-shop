import React from 'react';
import { Hammer, Leaf, Hand, Armchair, HelpCircle } from 'lucide-react';

const features = [
  {
    icon: <Hammer className="text-green-600" size={24} />,
    title: 'Craftsmanship Guaranteed',
    headline: 'Every piece is meticulously handcrafted by skilled artisans.',
    badge: 'Craftsmanship Guaranteed'
  },
  {
    icon: <Leaf className="text-green-600" size={24} />,
    title: 'Sustainability at Heart',
    headline: 'We prioritize eco-friendly materials and practices in our creations.',
    badge: 'Sustainability at Heart'
  },
  {
    icon: <Hand className="text-green-600" size={24} />,
    title: 'Customize for a Personal Touch',
    headline: 'Tailor your furniture to fit your space and style perfectly.',
    badge: 'Customize for a Personal Touch'
  },
  {
    icon: <Armchair className="text-green-600" size={24} />,
    title: 'Durability and Quality Focus',
    headline: 'Built to last, using only the highest quality materials.',
    badge: 'Durability and Quality Focus'
  },
  {
    icon: <HelpCircle className="text-green-600" size={24} />,
    title: 'Dedicated Support',
    headline: 'Dedicated support to ensure a seamless shopping experience.',
    badge: 'Customize for a Personal Touch'
  }
];

export default function Specialization() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Top Section: Text & Main Image */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          {/* Left: Text */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Specializes in artisanal, handcrafted furniture, blending traditional woodworking techniques!
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              With contemporary design to create timeless pieces that add warmth and character to any space.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              About CozyCorner
            </button>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2664&auto=format&fit=crop" 
              alt="Dining Room" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Bottom Section: Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="mb-2">
                {feature.icon}
              </div>
              <span className="inline-block bg-green-50 text-green-800 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide w-fit">
                {feature.badge}
              </span>
              <p className="text-sm font-semibold text-gray-900 leading-snug">
                {feature.headline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
