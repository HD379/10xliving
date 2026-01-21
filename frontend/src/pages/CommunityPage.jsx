import React, { useEffect } from 'react';
import { Check, Home } from 'lucide-react';
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

      {/* Main Community Image */}
      <section className="bg-[#FAF8F5] pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="reveal opacity-0">
            <img
              src={communityContent.mainImage}
              alt="10 X Living Community Overview"
              className="w-full aspect-video object-cover object-[center_30%]"
            />
          </div>
        </div>
      </section>

      {/* Dome Architecture */}
      <section className="section-spacing bg-[#E8E2D7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="reveal opacity-0">
              <div className="w-16 h-16 rounded-full bg-[#FAF8F5] flex items-center justify-center mb-6">
                <Home size={28} className="text-[#5A6B5A]" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-[#2D3E36]">
                {communityContent.domeArchitecture.title}
              </h2>
              <p className="text-lg text-[#5A6B5A] mt-6 leading-relaxed">
                {communityContent.domeArchitecture.description}
              </p>
            </div>
            <div className="reveal opacity-0 animate-delay-100">
              <img
                src={communityContent.domeArchitecture.image}
                alt="Dome Home"
                className="w-full aspect-[4/3] object-cover image-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Zones */}
      <section className="section-spacing bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl text-[#2D3E36] mb-16 reveal opacity-0">
            Community Zones
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {communityContent.zones.map((zone, index) => (
              <div
                key={zone.name}
                className="bg-[#E8E2D7] p-10 card-hover reveal opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-3xl text-[#2D3E36]">
                  {zone.name}
                </h3>
                <p className="text-[#5A6B5A] mt-4 leading-relaxed">
                  {zone.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {zone.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#7D8F7D] flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-[#FAF8F5]" />
                      </div>
                      <span className="text-[#5A6B5A]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
