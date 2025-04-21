import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: lucide icons
import logo from '../assets/logo.png';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-transparent backdrop-blur-md backdrop-filter shadow-md  px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Company Logo" className="w-25" />
       
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6">
        {['About', 'Services', 'Testimonials', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-blue-950 hover:text-blue-500 font-semibold"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Get Quote Button */}
      <div className="hidden md:block">
        <a
          href="#quote"
          className="border border-blue-950 text-blue-950 hover:bg-blue-50 px-6 py-3 rounded-md text-lg font-medium transition"
            
          >      
          Get Quote
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-20" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start space-y-4 px-6 py-4 md:hidden">
          {['About', 'Services', 'Testimonial', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-blue-950 hover:text-blue-500 font-medium"
            >
              {item}
            </a>
          ))}
          <a
            href="#quote"
              className="border border-blue-950 text-blue-950 hover:bg-blue-50 px-6 py-3 rounded-md text-lg font-medium transition"
            
          >              
            
            Get Quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
