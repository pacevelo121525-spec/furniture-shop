import React from 'react';
import { 
  Search, 
  Phone, 
  User, 
  Heart, 
  ShoppingBag, 
  ChevronDown,
  Armchair,
  Menu,
  Tag
} from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full font-sans">
      {/* Top Bar */}
      <div className="border-b border-gray-100 py-2 text-xs text-gray-600">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-bold rotate-12 inline-block"><Tag size={14} /></span>
              <span>Only this week <span className="text-red-500 font-semibold">-20%</span> For all Sofas and Couches</span>
            </div>
            <span className="text-gray-300">|</span>
            <a href="#" className="underline hover:text-gray-900">Sofas and Couches</a>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">About Us</a>
            <a href="#" className="hover:text-gray-900">Blog</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
              <span>• English</span>
              <ChevronDown size={12} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
              <span>$ USD</span>
              <ChevronDown size={12} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-green-600 p-2 rounded-lg text-white">
              <Armchair size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-gray-900 leading-none">COZY</span>
              <span className="text-2xl font-bold tracking-tight text-gray-900 leading-none">CORNER</span>
            </div>
          </div>

          {/* Main Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="flex items-center gap-1 hover:text-green-600">
              <Armchair size={16} /> Products
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-green-600">
              <Menu size={16} /> Rooms
            </a>
            <a href="#" className="hover:text-green-600">Inspirations</a>
            <a href="#" className="hover:text-green-600">Offers & promotions</a>
          </nav>

          {/* Search */}
          <div className="hidden xl:flex relative w-64">
            <input 
              type="text" 
              placeholder="Search for products" 
              className="w-full py-2.5 pl-4 pr-10 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-green-600"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600">
              <Search size={18} />
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 text-gray-900 font-medium">
              <Phone size={18} />
              <span>+1-202-555-0172</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <button className="hover:text-green-600">
                <User size={24} />
              </button>
              <button className="hover:text-green-600 relative">
                <Heart size={24} />
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
              </button>
              <button className="hover:text-green-600 relative">
                <ShoppingBag size={24} />
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">3</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Nav */}
      <div className="border-t border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-between text-sm font-medium text-gray-700 overflow-x-auto whitespace-nowrap gap-6 no-scrollbar">
            <li className="flex items-center gap-1 cursor-pointer hover:text-green-600">
              Pages <ChevronDown size={14} />
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-green-600">
              Desks <ChevronDown size={14} />
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-green-600">
              Chairs <ChevronDown size={14} />
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-green-600">
              Sofas and Couches <ChevronDown size={14} />
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-green-600">
              Meeting tables <ChevronDown size={14} />
            </li>
            <li className="cursor-pointer hover:text-green-600">Lighting</li>
            <li className="cursor-pointer hover:text-green-600">Miscellaneous</li>
            <li className="cursor-pointer hover:text-green-600">Office Accessories</li>
            <li className="cursor-pointer text-red-500 font-bold hover:text-red-600">Sale</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
