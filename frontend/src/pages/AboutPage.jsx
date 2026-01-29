import React, { useEffect } from 'react';
import { aboutContent } from '../data/mock';

const AboutPage = () => {
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
          src="https://customer-assets.emergentagent.com/job_6e992db2-663b-4e0c-b681-6f4fb21a5a30/artifacts/x3v81q27_Water%202.jpg"
          alt="Water"
          className="w-full object-cover object-[center_15%]"
          style={{ height: '276px' }}
        />
      </section>

      {/* Hero */}
      <section className="pt-24 pb-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#7D8F7D] reveal opacity-0">
              {aboutContent.title}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#2D3E36] mt-4 leading-tight reveal opacity-0 animate-delay-100">
              The Story Behind <span style={{ fontFamily: 'Garamond, "EB Garamond", Georgia, serif' }}>10</span> X Living
            </h1>
            <p className="text-xl text-[#5A6B5A] mt-8 leading-relaxed reveal opacity-0 animate-delay-200">
              {aboutContent.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#FAF8F5] pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="reveal opacity-0">
              <div className="sticky top-32">
                <img
                  src={aboutContent.image}
                  alt="Costa Rica nature"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              {aboutContent.story.map((paragraph, index) => (
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

      {/* Values */}
      <section className="section-spacing bg-[#E8E2D7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl text-[#2D3E36] mb-16 reveal opacity-0">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.values.map((value, index) => (
              <div
                key={value.title}
                className="reveal opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="border-t-2 border-[#2D3E36] pt-6">
                  <h3 className="font-display text-2xl text-[#2D3E36]">
                    {value.title}
                  </h3>
                  <p className="text-[#5A6B5A] mt-3 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
