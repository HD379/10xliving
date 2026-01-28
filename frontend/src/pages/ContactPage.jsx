import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { contactContent } from '../data/mock';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (frontend only with mock)
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Message sent successfully', {
      description: 'We will be in touch with you soon.'
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <main className="pt-24">
      {/* Banner Image */}
      <section className="w-full overflow-hidden">
        <img
          src="https://customer-assets.emergentagent.com/job_6e992db2-663b-4e0c-b681-6f4fb21a5a30/artifacts/4sy0bmdq_water%201.jpg"
          alt="Water"
          className="w-full object-cover object-[center_85%]"
          style={{ height: '180px' }}
        />
      </section>

      {/* Hero */}
      <section className="pt-24 pb-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Content */}
            <div>
              <span className="text-xs uppercase tracking-widest text-[#7D8F7D] reveal opacity-0">
                {contactContent.title}
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#2D3E36] mt-4 leading-tight reveal opacity-0 animate-delay-100">
                {contactContent.headline}
              </h1>
              <p className="text-xl text-[#5A6B5A] mt-8 leading-relaxed reveal opacity-0 animate-delay-200">
                {contactContent.intro}
              </p>
              <p className="text-[#5A6B5A] mt-6 leading-relaxed reveal opacity-0 animate-delay-300">
                {contactContent.note}
              </p>
            </div>

            {/* Form */}
            <div className="reveal opacity-0 animate-delay-200">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#7D8F7D] uppercase tracking-wide mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-[#7D8F7D] uppercase tracking-wide mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-[#7D8F7D] uppercase tracking-wide mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm text-[#7D8F7D] uppercase tracking-wide mb-2">
                      Current Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[#7D8F7D] uppercase tracking-wide mb-2">
                    Tell us about yourself *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-field resize-none"
                    placeholder="Share what draws you to 10 X Living and your vision for sustainable living..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#2D3E36] text-[#FAF8F5] text-sm uppercase tracking-widest font-medium hover:bg-[#3D4E46] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location Hint */}
      <section className="bg-[#E8E2D7] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-display text-3xl md:text-4xl text-[#2D3E36] reveal opacity-0">
            Located in the heart of Costa Rica's<br />most beautiful landscapes
          </p>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
