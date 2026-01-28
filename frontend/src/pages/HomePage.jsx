import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { heroContent, visionContent } from '../data/mock';

const HomePage = () => {
  const heroRef = useRef(null);

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

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroContent.image}
            alt="Costa Rica landscape"
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2D3E36]/30 via-[#2D3E36]/20 to-[#2D3E36]/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl text-[#FAF8F5] tracking-wide mb-4 reveal opacity-0" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.7), 0 2px 10px rgba(0,0,0,0.5)', fontFamily: 'Garamond, "EB Garamond", Georgia, serif' }}>
            10 X Living
          </h1>
          <p className="font-display text-2xl md:text-3xl text-[#FAF8F5] italic mb-8 reveal opacity-0 animate-delay-100" style={{ textShadow: '0 3px 20px rgba(0,0,0,0.7), 0 1px 8px rgba(0,0,0,0.5)' }}>
            {heroContent.subtitle}
          </p>
          <p className="text-lg text-[#FAF8F5] max-w-2xl mx-auto leading-relaxed reveal opacity-0 animate-delay-200" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.7), 0 1px 6px rgba(0,0,0,0.5)' }}>
            {heroContent.description}
          </p>
          <Link
            to="/vision"
            className="inline-flex items-center gap-3 mt-12 px-8 py-4 bg-[#FAF8F5] text-[#2D3E36] text-sm uppercase tracking-widest font-medium hover:bg-[#E8E2D7] transition-colors duration-300 reveal opacity-0 animate-delay-300"
          >
            Explore the Vision
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#FAF8F5] animate-bounce cursor-pointer hover:opacity-70 transition-opacity"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Video Section */}
      <section className="section-spacing bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="reveal opacity-0">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/05_3eADCLvY"
                  title="10 X Living"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="section-spacing bg-[#E8E2D7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#7D8F7D] reveal opacity-0">
              Guiding Principles
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#2D3E36] mt-4 reveal opacity-0 animate-delay-100">
              Built on Intention
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionContent.principles.map((principle, index) => (
              <div
                key={principle.title}
                className={`reveal opacity-0 animate-delay-${(index + 1) * 100}`}
              >
                <div className="bg-[#FAF8F5] p-8 h-full card-hover">
                  <span className="font-display text-5xl text-[#C4A484]/40">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-2xl text-[#2D3E36] mt-4">
                    {principle.title}
                  </h3>
                  <p className="text-[#5A6B5A] mt-3 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/32847246/pexels-photo-32847246.jpeg"
            alt="Costa Rica hot springs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2D3E36]/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#FAF8F5] leading-tight reveal opacity-0">
            Begin Your Journey to Sustainable Living
          </h2>
          <p className="text-lg text-[#E8E2D7]/90 mt-8 max-w-2xl mx-auto reveal opacity-0 animate-delay-100">
            Connect with us to learn more about life at 10 X Living and explore available home sites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 reveal opacity-0 animate-delay-200">
            <Link
              to="/availability"
              className="px-8 py-4 bg-[#FAF8F5] text-[#2D3E36] text-sm uppercase tracking-widest font-medium hover:bg-[#E8E2D7] transition-colors duration-300"
            >
              View Availability
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-[#FAF8F5] text-[#FAF8F5] text-sm uppercase tracking-widest font-medium hover:bg-[#FAF8F5] hover:text-[#2D3E36] transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
