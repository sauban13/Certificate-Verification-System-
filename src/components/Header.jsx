import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Header = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Get Your Certificate', path: '/get-certificate' },
    { name: 'Download Certificate', path: '/download-certificate' },
    { name: 'Verify Certificate', path: '/verify-certificate' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="bg-white/70 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-white/40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="RVS College Logo" className="h-12 w-auto object-contain" />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-primary leading-tight">RVS College</h1>
            <p className="text-xs text-gray-600 font-medium">Certificate Generator</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors hover:text-primary ${
                  isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={onLoginClick}
            className="p-2 text-gray-700 hover:text-primary transition-colors focus:outline-none"
            aria-label="Login"
          >
            <User size={24} />
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 text-sm font-semibold transition-colors hover:bg-gray-50 ${
                    isActive ? 'text-primary bg-primary/5' : 'text-gray-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
