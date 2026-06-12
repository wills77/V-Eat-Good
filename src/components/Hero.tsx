import React from 'react';
import { ArrowRight, Flame, MapPin, Calendar, Compass, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
// @ts-ignore
import heroImage from '../assets/images/veatgood_hero_1781278990156.jpg';

interface HeroProps {
  currentLang: Language;
  scrollToSection: (id: string) => void;
}

export default function Hero({ currentLang, scrollToSection }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-coal overflow-hidden pt-24 pb-12"
    >
      {/* Immersive Background Overlays */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle at 80% 20%, #F27D26 0%, transparent 40%), radial-gradient(circle at 20% 80%, #3E2723 0%, transparent 50%)"
          }}
        />
        {/* Fine fire spark pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F27D26_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tag badge with fine design */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-[1px] bg-ember"></div>
              <span className="text-ember uppercase tracking-[0.3em] text-xs font-semibold">
                Libreville • SNI Owendo
              </span>
            </div>

            {/* Elite big heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-light text-white tracking-tight leading-[1.1] mb-6">
              {currentLang === 'fr' ? (
                <>
                  Le goût <span className="italic text-gold">authentique</span><br />
                  du Gabon.
                </>
              ) : (
                <>
                  The <span className="italic text-gold">authentic</span> taste<br />
                  of Gabon.
                </>
              )}
            </h1>

            {/* Beautiful customized subtitle */}
            <p className="text-sm sm:text-base text-white/60 max-w-xl font-light leading-relaxed mb-8">
              {translations.hero_subtitle[currentLang]}
            </p>

            {/* Main Interactive Call-To-Action buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                id="hero-menu-cta"
                onClick={() => scrollToSection('menu')}
                className="px-6 py-3.5 bg-gold text-[#0A0908] hover:bg-gold-dark font-sans text-xs uppercase tracking-widest font-semibold shadow-lg shadow-gold/20 transition-all cursor-pointer"
              >
                {translations.btn_menu[currentLang]}
              </button>

              <button
                id="hero-reserve-cta"
                onClick={() => scrollToSection('reservations')}
                className="px-6 py-3.5 bg-white/5 border border-white/15 text-white font-sans text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-all cursor-pointer"
              >
                {translations.btn_reserve[currentLang]}
              </button>

              <button
                id="hero-order-cta"
                onClick={() => scrollToSection('order')}
                className="px-6 py-3.5 bg-wood-light/10 border border-gold/30 text-gold hover:bg-wood/20 font-sans text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer"
              >
                {translations.btn_order[currentLang]}
              </button>
            </div>
          </div>

          {/* Right column of signature items, mirroring the design section */}
          <div className="lg:col-span-5 bg-[#121212] border border-white/10 divide-y divide-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[520px]">
            {/* Signature Card 1 */}
            <div 
              onClick={() => scrollToSection('specialties')}
              className="h-1/2 p-6 sm:p-8 relative group cursor-pointer overflow-hidden flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-15" />
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80')` }}
              />
              <div className="relative z-20 space-y-1">
                <span className="text-ember text-[10px] uppercase tracking-widest font-bold">Signature</span>
                <h3 className="text-xl sm:text-2xl font-display text-white">Poulet Nyembwé Royal</h3>
                <p className="text-xs text-white/60">Préparé avec les noix de palme fraîches de l'Estuaire.</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-gold font-mono text-sm tracking-wider">18.500 FCFA</span>
                  <span className="text-gold/80 hover:text-gold text-xs transition-colors flex items-center space-x-1">
                    <span>Ajouter</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Signature Card 2 */}
            <div 
              onClick={() => scrollToSection('specialties')}
              className="h-1/2 p-6 sm:p-8 relative group cursor-pointer overflow-hidden flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-15" />
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80')` }}
              />
              <div className="relative z-20 space-y-1">
                <span className="text-ember text-[10px] uppercase tracking-widest font-bold">Grillade à la Braise</span>
                <h3 className="text-xl sm:text-2xl font-display text-white">Bar Braisé au Feu de Bois</h3>
                <p className="text-xs text-white/60">Pêche locale du jour, mariné aux épices secrètes du Chef.</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-gold font-mono text-sm tracking-wider">22.000 FCFA</span>
                  <span className="text-gold/80 hover:text-gold text-xs transition-colors flex items-center space-x-1">
                    <span>Ajouter</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Wave border segment on bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-coal to-transparent" />
    </section>
  );
}
