import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, navigationItems, footerContent } from '../../data/mock';

export const Footer = () => {
  return (
    <footer className="bg-[#2D3E36] text-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-display text-3xl text-[#FAF8F5] tracking-wide"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-6 text-[#B8C5C5] max-w-md leading-relaxed">
              {footerContent.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#7D8F7D] mb-6">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              {navigationItems.slice(0, 4).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[#B8C5C5] hover:text-[#FAF8F5] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#7D8F7D] mb-6">
              Learn More
            </h4>
            <nav className="flex flex-col gap-3">
              {navigationItems.slice(4).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[#B8C5C5] hover:text-[#FAF8F5] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-[#3D4E46] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#7D8F7D]">{footerContent.copyright}</p>
          <div className="flex gap-6">
            {footerContent.links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-[#7D8F7D] hover:text-[#B8C5C5] transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
