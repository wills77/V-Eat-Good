import React, { useState } from 'react';
import { Quote, MessageSquare, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { testimonials } from '../data/blog';

interface TestimonialsProps {
  currentLang: Language;
}

export default function Testimonials({ currentLang }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-coal immersive-gradient relative overflow-hidden border-b border-t border-white/5">
      
      {/* Decorative vectors */}
      <div className="absolute left-10 top-1/4 w-80 h-80 bg-wood-light/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-10 bottom-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-3.5">
            <div className="w-12 h-[1px] bg-ember"></div>
            <span className="text-xs font-bold text-gold tracking-widest uppercase font-sans">
              Témoignages
            </span>
            <div className="w-12 h-[1px] bg-ember"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-display font-light">
            {translations.test_title[currentLang]}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            {translations.test_subtitle[currentLang]}
          </p>
        </div>

        {/* Dynamic single card slide deck with high contrast */}
        <div className="max-w-4xl mx-auto relative px-4">
          <div className="absolute -top-10 left-10 text-gold/10 pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>

          <div
            id="testimonial-active-slide"
            className="p-8 sm:p-14 bg-[#181614] border border-white/5 rounded-3xl shadow-2xl space-y-6 sm:space-y-8 relative overflow-hidden"
          >
            {/* Stars rating */}
            <div className="flex justify-center space-x-1">
              {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" style={{ strokeWidth: 0 }} />
              ))}
            </div>

            {/* Quote content block */}
            <p className="text-white text-base sm:text-xl font-display font-light italic leading-relaxed text-center sm:px-4">
              "{currentLang === 'fr' ? testimonials[activeIndex].text_fr : testimonials[activeIndex].text_en}"
            </p>

            {/* Avatar & Author details */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-full border-2 border-gold/40 overflow-hidden bg-coal shadow-md">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-white font-heading font-bold text-sm sm:text-base">
                {testimonials[activeIndex].name}
              </h4>
              <span className="text-xs text-zinc-500 font-sans">
                {currentLang === 'fr' ? testimonials[activeIndex].role_fr : testimonials[activeIndex].role_en}
              </span>
            </div>

          </div>

          {/* Stepper controller navigation links */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              id="btn-testimonial-prev"
              onClick={handlePrev}
              className="p-3.5 rounded-full bg-[#181614] border border-zinc-800 text-zinc-400 hover:text-white hover:border-gold cursor-pointer transition-all focus:outline-none"
              title="Précédent"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <span className="text-xs text-zinc-500 font-sans tracking-widest uppercase">
              {activeIndex + 1} / {testimonials.length}
            </span>

            <button
              id="btn-testimonial-next"
              onClick={handleNext}
              className="p-3.5 rounded-full bg-[#181614] border border-zinc-800 text-zinc-400 hover:text-white hover:border-gold cursor-pointer transition-all focus:outline-none"
              title="Suivant"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
