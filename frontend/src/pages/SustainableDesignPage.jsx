import React, { useEffect } from 'react';
import { Sun, Layers, Droplets, Home } from 'lucide-react';
import { sustainableContent } from '../data/mock';

const iconMap = {
  Sun: Sun,
  Layers: Layers,
  Droplets: Droplets,
  Home: Home
};

const SustainableDesignPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-spacing bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#7D8F7D] reveal opacity-0">
              {sustainableContent.title}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#2D3E36] mt-4 leading-tight reveal opacity-0 animate-delay-100">
              {sustainableContent.headline}
            </h1>
            <p className="text-xl text-[#5A6B5A] mt-8 leading-relaxed reveal opacity-0 animate-delay-200">
              {sustainableContent.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#E8E2D7] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainableContent.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center reveal opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-display text-4xl md:text-5xl text-[#2D3E36]">
                  {stat.value}
                </span>
                <p className="text-[#5A6B5A] mt-2 text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {sustainableContent.systems.map((system, index) => {
            const Icon = iconMap[system.icon];
            return (
              <div
                key={system.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center py-20 ${
                  index !== sustainableContent.systems.length - 1 ? 'border-b border-[#E8E2D7]' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="reveal opacity-0 overflow-hidden">
                    <img
                      src={system.image}
                      alt={system.title}
                      className="w-full aspect-[4/3] object-cover image-hover"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-16 h-16 rounded-full bg-[#E8E2D7] flex items-center justify-center reveal opacity-0">
                    <Icon size={28} className="text-[#5A6B5A]" />
                  </div>
                  <h3 className="font-display text-4xl text-[#2D3E36] mt-6 reveal opacity-0 animate-delay-100">
                    {system.title}
                  </h3>
                  <p className="text-lg text-[#5A6B5A] mt-6 leading-relaxed reveal opacity-0 animate-delay-200">
                    {system.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default SustainableDesignPage;
