import React, { useEffect } from 'react';
import { Check } from 'lucide-react';
import { communityContent } from '../data/mock';

const CommunityPage = () => {
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
              {communityContent.title}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#2D3E36] mt-4 leading-tight reveal opacity-0 animate-delay-100">
              {communityContent.headline}
            </h1>
            <p className="text-xl text-[#5A6B5A] mt-8 leading-relaxed reveal opacity-0 animate-delay-200">
              {communityContent.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#FAF8F5] pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {communityContent.features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center py-16 ${
                index !== communityContent.features.length - 1 ? 'border-b border-[#E8E2D7]' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="reveal opacity-0 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full aspect-[4/3] object-cover image-hover"
                  />
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-display text-4xl text-[#2D3E36] reveal opacity-0">
                  {feature.title}
                </h3>
                <p className="text-lg text-[#5A6B5A] mt-6 leading-relaxed reveal opacity-0 animate-delay-100">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lifestyle */}
      <section className="section-spacing bg-[#2D3E36]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-[#FAF8F5] reveal opacity-0">
                Life at 10 X Living
              </h2>
              <p className="text-[#B8C5C5] mt-6 text-lg leading-relaxed reveal opacity-0 animate-delay-100">
                Our community is designed to support a life of intention, connection, and sustainability.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {communityContent.lifestyle.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 reveal opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#7D8F7D] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-[#FAF8F5]" />
                  </div>
                  <span className="text-[#E8E2D7]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CommunityPage;
