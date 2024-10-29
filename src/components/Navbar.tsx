import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-red-600 font-bold text-2xl">PORTFOLIO</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Projects</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">About</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Contact</a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />
            <Bell className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />
            <Menu className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white md:hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;