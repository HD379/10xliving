import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { availabilityContent } from '../data/mock';

const AvailabilityPage = () => {
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
              {availabilityContent.title}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#2D3E36] mt-4 leading-tight reveal opacity-0 animate-delay-100">
              {availabilityContent.headline}
            </h1>
            <p className="text-xl text-[#5A6B5A] mt-8 leading-relaxed reveal opacity-0 animate-delay-200">
              {availabilityContent.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Site Categories */}
      <section className="bg-[#FAF8F5] pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {availabilityContent.categories.map((category, index) => (
              <div
                key={category.name}
                className="bg-[#E8E2D7] p-10 card-hover reveal opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#7D8F7D]">
                    Home Sites
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    category.status === 'Available'
                      ? 'bg-[#7D8F7D] text-[#FAF8F5]'
                      : 'bg-[#C4A484] text-[#FAF8F5]'
                  }`}>
                    {category.status}
                  </span>
                </div>
                <h3 className="font-display text-3xl text-[#2D3E36] mt-6">
                  {category.name}
                </h3>
                <p className="text-[#5A6B5A] mt-4 leading-relaxed">
                  {category.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-8 text-[#2D3E36] font-medium link-underline"
                >
                  Inquire
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-spacing bg-[#2D3E36]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl text-[#FAF8F5] mb-16 reveal opacity-0">
            The Journey Home
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {availabilityContent.process.map((step, index) => (
              <div
                key={step.step}
                className="reveal opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <span className="font-display text-8xl text-[#7D8F7D]/20">
                    {step.step}
                  </span>
                  <div className="absolute top-1/2 -translate-y-1/2">
                    <h3 className="font-display text-2xl text-[#FAF8F5]">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[#B8C5C5] mt-4 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center reveal opacity-0 animate-delay-400">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FAF8F5] text-[#2D3E36] text-sm uppercase tracking-widest font-medium hover:bg-[#E8E2D7] transition-colors duration-300"
            >
              Begin the Conversation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AvailabilityPage;
