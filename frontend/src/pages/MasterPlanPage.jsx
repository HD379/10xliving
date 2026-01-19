import React, { useEffect } from 'react';
import { Check } from 'lucide-react';
import { masterPlanContent } from '../data/mock';

const MasterPlanPage = () => {
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
              {masterPlanContent.title}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#2D3E36] mt-4 leading-tight reveal opacity-0 animate-delay-100">
              {masterPlanContent.headline}
            </h1>
            <p className="text-xl text-[#5A6B5A] mt-8 leading-relaxed reveal opacity-0 animate-delay-200">
              {masterPlanContent.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Master Plan Image */}
      <section className="bg-[#FAF8F5] pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="reveal opacity-0">
            <img
              src={masterPlanContent.image}
              alt="10 X Living Master Plan"
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="section-spacing bg-[#E8E2D7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl text-[#2D3E36] mb-16 reveal opacity-0">
            Community Zones
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {masterPlanContent.zones.map((zone, index) => (
              <div
                key={zone.name}
                className="bg-[#FAF8F5] p-10 card-hover reveal opacity-0"
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
    </main>
  );
};

export default MasterPlanPage;
