import React, { useEffect } from 'react';
import { cultureContent } from '../data/mock';

const CulturePage = () => {
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
              {cultureContent.title}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#2D3E36] mt-4 leading-tight reveal opacity-0 animate-delay-100">
              {cultureContent.headline}
            </h1>
            <p className="text-xl text-[#5A6B5A] mt-8 leading-relaxed reveal opacity-0 animate-delay-200">
              {cultureContent.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Honeycomb Grid */}
      <section className="bg-[#2D3E36] py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="honeycomb-grid">
            {cultureContent.dimensions.map((dimension, index) => (
              <a
                key={dimension.name}
                href={dimension.url}
                target="_blank"
                rel="noopener noreferrer"
                className="honeycomb-cell reveal opacity-0"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="honeycomb-inner">
                  <span className="honeycomb-text">{dimension.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CulturePage;
