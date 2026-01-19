import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigationItems, siteConfig } from '../../data/mock';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-sm shadow-sm py-4'
            : 'bg-[#2D3E36]/30 backdrop-blur-sm py-6'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl tracking-wide hover:opacity-70 transition-all duration-300 ${
              isScrolled ? 'text-[#2D3E36]' : 'text-[#FAF8F5] drop-shadow-md'
            }`}
          >
            <span className="font-logo-number">10</span>
            <span className="font-display"> X Living</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm tracking-wide link-underline transition-all duration-300 ${
                  isScrolled
                    ? location.pathname === item.path
                      ? 'text-[#2D3E36]'
                      : 'text-[#5A6B5A] hover:text-[#2D3E36]'
                    : 'text-[#FAF8F5] hover:text-[#E8E2D7] drop-shadow-md'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 hover:opacity-70 transition-opacity ${
              isScrolled ? 'text-[#2D3E36]' : 'text-[#FAF8F5]'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAF8F5] lg:hidden transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-display text-3xl tracking-wide transition-colors duration-300 ${
                location.pathname === item.path
                  ? 'text-[#2D3E36]'
                  : 'text-[#7D8F7D] hover:text-[#2D3E36]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
