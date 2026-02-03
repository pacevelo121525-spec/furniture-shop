import React from 'react';
import { 
  Armchair, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube,
  Truck 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          
          {/* Brand & Contact */}
          <div className="lg:w-1/4 space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-green-600 p-2 rounded-lg text-white">
                <Armchair size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-gray-900 leading-none">COZY</span>
                <span className="text-2xl font-bold tracking-tight text-gray-900 leading-none">CORNER</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 w-fit">
                <Phone size={16} /> +1-202-555-0172
              </button>
              <button className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 w-fit">
                <Mail size={16} /> contact@cozycorner
              </button>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-gray-900">38840 Nicholas</p>
              <p className="font-bold text-gray-900">Groves North Caridad</p>
              <p className="font-bold text-gray-900">LA 95660-0975</p>
              <a href="#" className="text-sm text-gray-500 underline hover:text-green-600">Show on map</a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Products */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-500 text-sm">Products</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-900">
                <li><a href="#" className="hover:text-green-600">Desks</a></li>
                <li><a href="#" className="hover:text-green-600">Chairs</a></li>
                <li><a href="#" className="hover:text-green-600">Sofas and Couches</a></li>
                <li><a href="#" className="hover:text-green-600">Storage</a></li>
                <li><a href="#" className="hover:text-green-600">Tables</a></li>
                <li><a href="#" className="hover:text-green-600">Meeting tables</a></li>
                <li><a href="#" className="hover:text-green-600">Lighting</a></li>
                <li><a href="#" className="hover:text-green-600">Office Accessories</a></li>
                <li><a href="#" className="hover:text-green-600">Miscellaneous</a></li>
              </ul>
            </div>

            {/* Rooms */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-500 text-sm">Rooms</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-900">
                <li><a href="#" className="hover:text-green-600">Living room</a></li>
                <li><a href="#" className="hover:text-green-600">Bedroom</a></li>
                <li><a href="#" className="hover:text-green-600">Kitchen</a></li>
                <li><a href="#" className="hover:text-green-600">Dining room</a></li>
                <li><a href="#" className="hover:text-green-600">Children's room</a></li>
                <li><a href="#" className="hover:text-green-600">Bathroom</a></li>
                <li><a href="#" className="hover:text-green-600">Home office</a></li>
                <li><a href="#" className="hover:text-green-600">Hall</a></li>
                <li><a href="#" className="hover:text-green-600">Balcony and garden</a></li>
              </ul>
            </div>

            {/* Menu */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-500 text-sm">Menu</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-900">
                <li><a href="#" className="hover:text-green-600">Inspirations</a></li>
                <li><a href="#" className="hover:text-green-600">Offers and Promotions</a></li>
                <li><a href="#" className="hover:text-green-600">About Us</a></li>
                <li><a href="#" className="hover:text-green-600">Blog</a></li>
                <li><a href="#" className="hover:text-green-600">Contact</a></li>
              </ul>
            </div>

            {/* Account & Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-500 text-sm">Account</h4>
                <ul className="space-y-3 text-sm font-medium text-gray-900">
                  <li><a href="#" className="hover:text-green-600">Cart</a></li>
                  <li><a href="#" className="hover:text-green-600">My account</a></li>
                  <li><a href="#" className="hover:text-green-600">My orders</a></li>
                  <li><a href="#" className="hover:text-green-600">Wishlist</a></li>
                  <li><a href="#" className="hover:text-green-600">Affiliate Program</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-gray-500 text-sm">Information</h4>
                <ul className="space-y-3 text-sm font-medium text-gray-900">
                  <li><a href="#" className="hover:text-green-600">Track Order</a></li>
                  <li><a href="#" className="hover:text-green-600">Returns</a></li>
                  <li><a href="#" className="hover:text-green-600">Shipping Info</a></li>
                  <li><a href="#" className="hover:text-green-600">Help</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Delivery Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-4">
            <span className="font-bold text-gray-900">Follow us</span>
            <div className="flex gap-2">
              <a href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 flex items-center gap-2 px-4 text-xs font-medium text-gray-600">
                <Facebook size={14} /> cozycorner
              </a>
              <a href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 flex items-center gap-2 px-4 text-xs font-medium text-gray-600">
                <Instagram size={14} /> cozycorner
              </a>
              <a href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 flex items-center gap-2 px-4 text-xs font-medium text-gray-600">
                <Twitter size={14} /> cozycorner
              </a>
              <a href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 flex items-center gap-2 px-4 text-xs font-medium text-gray-600">
                <Linkedin size={14} /> cozycorner
              </a>
              <a href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 flex items-center gap-2 px-4 text-xs font-medium text-gray-600">
                <Youtube size={14} /> cozycorner_video
              </a>
            </div>
          </div>

          <div className="bg-[#D1F2E2] px-6 py-3 rounded-full flex items-center gap-3 text-sm text-gray-800">
            <Truck size={18} className="text-gray-600" />
            <span className="font-medium">Save on free delivery</span>
            <span className="text-gray-600 text-xs">Our own fleet allows us reduce delivery costs to $0</span>
          </div>
        </div>

        {/* Copyright & Payments */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-4">
          <div className="flex items-center gap-6 text-xs text-gray-500 font-medium">
            <span>Copyright ©CozyCorner. All Rights Reserved</span>
            <a href="#" className="hover:text-gray-900">Terms of Use</a>
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Accessibility</a>
          </div>

          <div className="flex gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
            {/* Using text placeholders for payment icons as simple visual representation */}
            <div className="h-6 w-10 bg-black rounded text-white flex items-center justify-center text-[8px] font-bold">PayPal</div>
            <div className="h-6 w-10 bg-black rounded text-white flex items-center justify-center text-[8px] font-bold">ApplePay</div>
            <div className="h-6 w-10 bg-black rounded text-white flex items-center justify-center text-[8px] font-bold">Stripe</div>
            <div className="h-6 w-10 bg-black rounded text-white flex items-center justify-center text-[8px] font-bold">Master</div>
            <div className="h-6 w-10 bg-black rounded text-white flex items-center justify-center text-[8px] font-bold">VISA</div>
          </div>
        </div>

      </div>
    </footer>
  );
}
