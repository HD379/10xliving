import React, { useEffect } from 'react';
import { visionContent } from '../data/mock';

const VisionPage = () => {
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
      {/* Banner Image */}
      <section className="w-full overflow-hidden">
        <img
          src="https://customer-assets.emergentagent.com/job_6e992db2-663b-4e0c-b681-6f4fb21a5a30/artifacts/g8a52der_Wide_banner_showcasing_lush_tropical_forest_in_Cos-1769174462181.png"
          alt="Costa Rica tropical forest"
          className="w-full h-36 md:h-44 lg:h-48 object-cover object-center"
        />
      </section>

      {/* Hero */}
      <section className="pt-12 pb-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#7D8F7D] reveal opacity-0">
              {visionContent.title}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#2D3E36] mt-4 leading-tight reveal opacity-0 animate-delay-100">
              {visionContent.headline}
            </h1>
            <p className="text-xl text-[#5A6B5A] mt-8 leading-relaxed reveal opacity-0 animate-delay-200">
              {visionContent.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#FAF8F5] pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="reveal opacity-0">
              <div className="sticky top-32">
                <img
                  src={visionContent.image}
                  alt="Costa Rica landscape"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              {visionContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-lg text-[#5A6B5A] leading-relaxed reveal opacity-0 animate-delay-${(index + 1) * 100}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="section-spacing bg-[#E8E2D7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl text-[#2D3E36] mb-16 reveal opacity-0">
            Our Guiding Principles
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {visionContent.principles.map((principle, index) => (
              <div
                key={principle.title}
                className="bg-[#FAF8F5] p-10 card-hover reveal opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-display text-6xl text-[#C4A484]/30">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-3xl text-[#2D3E36] mt-4">
                  {principle.title}
                </h3>
                <p className="text-[#5A6B5A] mt-4 leading-relaxed text-lg">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default VisionPage;
