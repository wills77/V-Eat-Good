import React from 'react';
import { Sparkles, Flame, Star, ShoppingBag } from 'lucide-react';
import { Language, MenuItem } from '../types';
import { translations } from '../data/translations';
import { menuItems } from '../data/menu';

interface SpecialtiesProps {
  currentLang: Language;
  onAddToOrder: (item: MenuItem) => void;
  scrollToSection: (id: string) => void;
}

export default function Specialties({ currentLang, onAddToOrder, scrollToSection }: SpecialtiesProps) {
  // Filter bestsellers and Chef Specials
  const chefSpecials = menuItems.filter(item => item.isChefSpecial || item.isWoodFired).slice(0, 3);

  return (
    <section id="specialties" className="py-20 sm:py-28 bg-coal immersive-gradient relative border-t border-b border-white/5 overflow-hidden">
      
      {/* Visual glowing backgrounds */}
      <div className="absolute left-10 top-10 w-72 h-72 bg-ember/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-72 h-72 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-3.5">
            <div className="w-12 h-[1px] bg-ember"></div>
            <span className="text-xs font-bold text-gold tracking-widest uppercase font-sans">
              Excellence culinaire
            </span>
            <div className="w-12 h-[1px] bg-ember"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-display font-light">
            {translations.specialties_title[currentLang]}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            {translations.specialties_subtitle[currentLang]}
          </p>
        </div>

        {/* Bento/Grid Layout - 3 Key Masterpieces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefSpecials.map((item, idx) => (
            <div
              key={item.id}
              id={`specialty-card-${item.id}`}
              className="group rounded-2xl bg-[#181614] border border-white/5 overflow-hidden shadow-2xl flex flex-col justify-between hover:border-gold/30 transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              {/* Badge for highlight */}
              <div className="absolute top-4 left-4 z-20 flex flex-col space-y-1.5">
                {item.isChefSpecial && (
                  <span className="px-2.5 py-1 text-[10px] tracking-wider uppercase bg-gold text-[#0A0908] font-bold rounded-md flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 shrink-0" />
                    <span>{translations.menu_chef_special[currentLang]}</span>
                  </span>
                )}
                {item.isWoodFired && (
                  <span className="px-2.5 py-1 text-[10px] tracking-wider uppercase bg-ember text-white font-bold rounded-md flex items-center space-x-1">
                    <Flame className="w-3 h-3 shrink-0" />
                    <span>{translations.menu_wood_fired[currentLang]}</span>
                  </span>
                )}
              </div>

              {/* Price Label Badge */}
              <div className="absolute top-4 right-4 z-20 bg-[#0A0908]/90 py-1.5 px-3 rounded-full border border-white/10 font-mono text-sm text-gold">
                {item.price.toLocaleString('fr-FR')} <span className="text-[10px] font-normal font-sans">FCFA</span>
              </div>

              {/* Photo HD with glowing filter on hover */}
              <div className="relative h-64 overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={currentLang === 'fr' ? item.name_fr : item.name_en}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              </div>

              {/* Body Text */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-medium text-white group-hover:text-gold transition-colors duration-200">
                    {currentLang === 'fr' ? item.name_fr : item.name_en}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                    {currentLang === 'fr' ? item.desc_fr : item.desc_en}
                  </p>
                </div>

                {/* Tags and Interaction */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {(currentLang === 'fr' ? item.tags_fr : item.tags_en).map((tag, i) => (
                      <span key={i} className="text-[10px] bg-white/5 text-zinc-400 py-0.5 px-2 rounded font-sans border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    id={`btn-specialty-buy-${item.id}`}
                    onClick={() => onAddToOrder(item)}
                    className="p-2 rounded-full bg-gold text-[#0A0908] hover:bg-gold-dark hover:scale-105 transition-all focus:outline-none cursor-pointer flex items-center justify-center shadow-lg"
                    title={translations.menu_btn_add[currentLang]}
                  >
                    <ShoppingBag className="w-4 h-4 text-emerald-950" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Call to Action */}
        <div className="text-center mt-12">
          <button
            id="specialty-more-menu-btn"
            onClick={() => scrollToSection('menu')}
            className="inline-flex items-center space-x-1 py-2 px-5 rounded-full border border-zinc-700 hover:border-gold hover:text-gold text-zinc-400 text-xs font-semibold uppercase tracking-wider transition-all focus:outline-none cursor-pointer"
          >
            <span>Explorez toute la Carte (Bar, Nyembwé, Manioc...)</span>
          </button>
        </div>

      </div>
    </section>
  );
}
