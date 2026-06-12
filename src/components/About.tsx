import React from 'react';
import { Flame, Star, Award, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutProps {
  currentLang: Language;
}

export default function About({ currentLang }: AboutProps) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-coal immersive-gradient relative overflow-hidden">
      
      {/* Decorative vector background */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-wood-light/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Image Collage with nice borders and fire effects */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1: Main fine-dining grill plate */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl h-64 border border-white/5 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
                    alt="V'Eat Good premium wood steak"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Image 2: Small fresh local ingredients */}
                <div className="rounded-2xl overflow-hidden shadow-2xl h-44 border border-white/5 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1604085572504-a392ddf0b8b8?auto=format&fit=crop&w=600&q=80"
                    alt="Fresh local African produce"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs text-gold font-sans font-medium tracking-wider">
                    Terroir Gabonais
                  </div>
                </div>
              </div>

              {/* Image 3: Large vertical dining table view */}
              <div className="pt-8 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl h-40 border border-white/5 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
                    alt="Whole hot braised fish grill"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs text-gold font-sans font-medium tracking-wider">
                    Braises Actives
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl h-64 border border-white/5 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80"
                    alt="V'Eat Good elegant restaurant table styling"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* floating experience badge */}
            <div className="absolute -bottom-4 right-4 sm:-right-4 bg-wood border border-gold/30 rounded-xl p-4 shadow-2xl max-w-xs backdrop-blur-md transform hover:-scale-x-105 transition-all">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Flame className="w-6 h-6 text-ember" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-semibold text-sm">Savoureuse d'Owendo</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">La meilleure grillade de Libreville</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Narrative Story */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-[1px] bg-[#F27D26]"></div>
                <span className="text-xs font-bold text-gold tracking-widest uppercase block font-sans">
                  {translations.about_badge[currentLang]}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl text-white font-display font-light leading-tight">
                {translations.about_title[currentLang]}
              </h2>
            </div>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
              <p>{translations.about_text1[currentLang]}</p>
              <p className="border-l border-zinc-800 pl-4 py-1 italic text-zinc-400 text-sm">
                "{translations.about_text2[currentLang]}"
              </p>
              <p>{translations.about_text3[currentLang]}</p>
            </div>

            {/* Core commitments grid key points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              
              <div className="flex items-start space-x-3.5">
                <div className="p-2 sm:mb-0 mb-2 rounded-xl bg-purple-950/20 border border-purple-500/10 text-gold-dark mt-1 shrink-0">
                  <Award className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-medium text-xs uppercase tracking-wide">
                    {translations.about_feat1_title[currentLang]}
                  </h4>
                  <p className="text-zinc-400 text-xs mt-1 leading-normal">
                    {translations.about_feat1_desc[currentLang]}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2 sm:mb-0 mb-2 rounded-xl bg-orange-950/20 border border-orange-500/10 text-ember mt-1 shrink-0">
                  <Flame className="w-5 h-5 text-ember" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-medium text-xs uppercase tracking-wide">
                    {translations.about_feat2_title[currentLang]}
                  </h4>
                  <p className="text-zinc-400 text-xs mt-1 leading-normal">
                    {translations.about_feat2_desc[currentLang]}
                  </p>
                </div>
              </div>

            </div>

            {/* Visual signature signator */}
            <div className="flex items-center space-x-4 pt-6 border-t border-zinc-800">
              <div className="w-12 h-12 rounded-full border border-zinc-700 overflow-hidden bg-coal">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=150&q=80"
                  alt="Chef Euloge de V'Eat Good"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-white text-sm font-heading font-bold">Chef Euloge</h4>
                <p className="text-gold text-xs">Directeur de Création Culinary & Braises</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
