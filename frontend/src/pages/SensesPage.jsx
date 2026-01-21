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

      {/* Image */}
      <section className="bg-[#FAF8F5] pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="reveal opacity-0">
            <img
              src={sensesContent.image}
              alt="10 X Senses"
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Senses List */}
      <section className="section-spacing bg-[#E8E2D7]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-12">
            {sensesContent.senses.map((sense, index) => (
              <div
                key={sense.name}
                className="reveal opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-3xl text-[#2D3E36]">
                  {sense.name}
                </h3>
                <p className="text-lg text-[#5A6B5A] mt-4 leading-relaxed">
                  {sense.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SensesPage;
