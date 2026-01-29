import React, { useEffect } from 'react';
import { Check, Leaf } from 'lucide-react';
import { pricingContent } from '../data/mock';

const PricingPage = () => {
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
          src="https://customer-assets.emergentagent.com/job_6e992db2-663b-4e0c-b681-6f4fb21a5a30/artifacts/1plgayr3_2RDvLaZw.png"
          alt="Costa Rica tropical forest"
          className="w-full object-cover object-[center_85%]"
          style={{ height: '276px' }}
        />
      </section>

      {/* Hero */}
      <section className="pt-24 pb-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#7D8F7D] reveal opacity-0">
              {pricingContent.title}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#2D3E36] mt-4 leading-tight reveal opacity-0 animate-delay-100">
              {pricingContent.headline}
            </h1>
            <p className="text-xl text-[#5A6B5A] mt-8 leading-relaxed reveal opacity-0 animate-delay-200">
              {pricingContent.intro}
            </p>
            <p className="text-lg text-[#5A6B5A] mt-4 leading-relaxed reveal opacity-0 animate-delay-300">
              {pricingContent.subIntro}
            </p>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="bg-[#E8E2D7] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl text-[#2D3E36] mb-12 reveal opacity-0">
            {pricingContent.investmentOptions.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            {pricingContent.investmentOptions.options.map((option, index) => (
              <div
                key={option.name}
                className="bg-[#FAF8F5] p-8 card-hover reveal opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-2xl text-[#2D3E36]">
                  {option.name}
                </h3>
                <p className="font-display text-4xl text-[#5A6B5A] mt-4">
                  {option.price}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[#5A6B5A] mt-8 max-w-2xl reveal opacity-0 animate-delay-200">
            {pricingContent.investmentOptions.note}
          </p>
        </div>
      </section>

      {/* Monthly Fees */}
      <section className="section-spacing bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl text-[#2D3E36] mb-12 reveal opacity-0">
            {pricingContent.monthlyFees.title}
          </h2>

          {pricingContent.monthlyFees.sections.map((section, sectionIndex) => (
            <div
              key={section.name}
              className="mb-16 last:mb-0 reveal opacity-0"
              style={{ animationDelay: `${sectionIndex * 100}ms` }}
            >
              <h3 className="font-display text-3xl text-[#2D3E36]">
                {section.name}
              </h3>
              <div className="flex flex-wrap gap-4 mt-4">
                {section.prices.map((price) => (
                  <span
                    key={price}
                    className="bg-[#E8E2D7] px-4 py-2 text-[#2D3E36] font-medium"
                  >
                    {price}
                  </span>
                ))}
              </div>
              <p className="text-[#5A6B5A] mt-4 leading-relaxed">
                {section.description}
              </p>
              {section.included && (
                <div className="mt-6">
                  <p className="text-sm uppercase tracking-widest text-[#7D8F7D] mb-4">
                    Included in the Land & Maintenance Fee:
                  </p>
                  <ul className="space-y-3">
                    {section.included.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#7D8F7D] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-[#FAF8F5]" />
                        </div>
                        <span className="text-[#5A6B5A]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="section-spacing bg-[#E8E2D7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl text-[#2D3E36] mb-12 reveal opacity-0">
            {pricingContent.included.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingContent.included.categories.map((category, index) => (
              <div
                key={category.name}
                className="bg-[#FAF8F5] p-8 reveal opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-2xl text-[#2D3E36] mb-6">
                  {category.name}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#7D8F7D] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-[#FAF8F5]" />
                      </div>
                      <span className="text-[#5A6B5A] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carbon Negative */}
      <section className="py-20 bg-[#2D3E36]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-[#7D8F7D] flex items-center justify-center mx-auto mb-6 reveal opacity-0">
              <Leaf size={28} className="text-[#FAF8F5]" />
            </div>
            <h2 className="font-display text-4xl text-[#FAF8F5] reveal opacity-0 animate-delay-100">
              {pricingContent.carbonNegative.title}
            </h2>
            <p className="text-xl text-[#B8C5C5] mt-6 leading-relaxed reveal opacity-0 animate-delay-200">
              {pricingContent.carbonNegative.description}
            </p>
            <p className="text-[#E8E2D7] mt-4 italic reveal opacity-0 animate-delay-300">
              {pricingContent.carbonNegative.note}
            </p>
          </div>
        </div>
      </section>

      {/* Purpose Driven */}
      <section className="section-spacing bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl text-[#2D3E36] reveal opacity-0">
              {pricingContent.purposeDriven.title}
            </h2>
            <p className="text-xl text-[#5A6B5A] mt-6 leading-relaxed reveal opacity-0 animate-delay-100">
              {pricingContent.purposeDriven.intro}
            </p>
            <p className="text-[#5A6B5A] mt-4 reveal opacity-0 animate-delay-200">
              {pricingContent.purposeDriven.description}
            </p>
            <ul className="mt-4 space-y-2 reveal opacity-0 animate-delay-300">
              {pricingContent.purposeDriven.interests.map((interest) => (
                <li key={interest} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#7D8F7D] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-[#FAF8F5]" />
                  </div>
                  <span className="text-[#5A6B5A]">{interest}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#5A6B5A] mt-6 p-4 bg-[#E8E2D7] reveal opacity-0 animate-delay-400">
              {pricingContent.purposeDriven.commitment}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
