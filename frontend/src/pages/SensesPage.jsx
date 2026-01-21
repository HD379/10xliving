import React, { useEffect } from 'react';
import { sensesContent } from '../data/mock';

const SensesPage = () => {
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
              {sensesContent.title}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#2D3E36] mt-4 leading-tight reveal opacity-0 animate-delay-100">
              {sensesContent.headline}
            </h1>
          </div>
        </div>
      </section>

      {/* Image and Text Side by Side */}
      <section className="bg-[#FAF8F5] pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image on Left */}
            <div className="reveal opacity-0">
              <img
                src={sensesContent.image}
                alt="10 X Senses - Honoring all five senses"
                className="w-full max-w-lg"
              />
            </div>

            {/* Text on Right */}
            <div className="space-y-8">
              {sensesContent.senses.map((sense, index) => (
                <div
                  key={sense.name}
                  className="reveal opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-display text-2xl text-[#2D3E36]">
                    {sense.name}
                  </h3>
                  <p className="text-[#5A6B5A] mt-2 leading-relaxed">
                    {sense.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SensesPage;
