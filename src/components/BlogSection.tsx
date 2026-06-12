import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, X, Sparkles } from 'lucide-react';
import { Language, BlogPost } from '../types';
import { translations } from '../data/translations';
import { blogPosts, localEvents } from '../data/blog';

interface BlogSectionProps {
  currentLang: Language;
  scrollToSection: (id: string) => void;
}

export default function BlogSection({ currentLang, scrollToSection }: BlogSectionProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 sm:py-28 bg-coal immersive-gradient relative overflow-hidden">
      <div className="absolute left-1/3 top-10 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-3.5">
            <div className="w-12 h-[1px] bg-ember"></div>
            <span className="text-xs font-bold text-gold tracking-widest uppercase font-sans">
              Culture et Traditions
            </span>
            <div className="w-12 h-[1px] bg-ember"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-display font-light text-center">
            {translations.blog_title[currentLang]}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light text-center">
            {translations.blog_subtitle[currentLang]}
          </p>
        </div>

        {/* Layout: Blog Articles Grid + Local Event Highlight Banner Side on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Blogs Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  id={`blog-post-card-${post.id}`}
                  className="rounded-2xl bg-[#181614] border border-white/5 hover:border-gold/20 overflow-hidden shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
                >
                  <div>
                    {/* Media crop header */}
                    <div className="relative h-48 overflow-hidden bg-coal">
                      <img
                        src={post.image}
                        alt={currentLang === 'fr' ? post.title_fr : post.title_en}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-wood border border-gold/20 text-gold py-1 px-2.5 rounded-md text-[10px] uppercase font-bold tracking-widest font-sans">
                        {currentLang === 'fr' ? post.category_fr : post.category_en}
                      </div>
                    </div>

                    {/* text details */}
                    <div className="p-6 space-y-2.5">
                      <div className="flex items-center space-x-3 text-[10px] text-zinc-500 font-sans tracking-wide">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h3 className="font-heading font-semibold text-white text-base sm:text-lg group-hover:text-gold transition-colors block leading-snug">
                        {currentLang === 'fr' ? post.title_fr : post.title_en}
                      </h3>

                      <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                        {currentLang === 'fr' ? post.excerpt_fr : post.excerpt_en}
                      </p>
                    </div>
                  </div>

                  {/* action button read more */}
                  <div className="px-6 pb-6 pt-2 block">
                    <button
                      id={`btn-read-post-${post.id}`}
                      onClick={() => setSelectedPost(post)}
                      className="inline-flex items-center space-x-1.5 text-xs text-gold font-bold uppercase tracking-wider hover:text-gold-dark transition-colors cursor-pointer"
                    >
                      <span>{translations.blog_btn_read[currentLang]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </article>
              ))}
            </div>
          </div>

          {/* Right Highlights Column: Upcoming Event News */}
          <div className="lg:col-span-4 bg-[#181614] border border-white/5 rounded-2xl p-6 shadow-2xl space-y-6">
            
            <div className="space-y-1.5 border-b border-zinc-800 pb-3">
              <span className="text-ember text-[10px] font-bold uppercase tracking-widest block">Événement & Musique</span>
              <h3 className="text-xl font-heading font-semibold text-white">
                {translations.events_title[currentLang]}
              </h3>
              <p className="text-zinc-400 text-xs font-light">
                {translations.events_subtitle[currentLang]}
              </p>
            </div>

            {localEvents.map((ev) => (
              <div
                key={ev.id}
                id={`event-badge-${ev.id}`}
                className="rounded-xl overflow-hidden bg-coal border border-zinc-800/80 p-4 space-y-4 text-left"
              >
                <div className="relative h-40 rounded-lg overflow-hidden shrink-0 bg-zinc-950">
                  <img
                    src={ev.image}
                    alt={currentLang === 'fr' ? ev.title_fr : ev.title_en}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-3 left-3 bg-ember/90 text-white font-bold text-[9px] tracking-widest uppercase py-1 px-2.5 rounded">
                    {currentLang === 'fr' ? ev.badge_fr : ev.badge_en}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-gold font-sans font-semibold tracking-wider">
                    <span>{ev.date}</span>
                    <span>{ev.time}</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm sm:text-base leading-snug">
                    {currentLang === 'fr' ? ev.title_fr : ev.title_en}
                  </h4>
                  <p className="text-zinc-400 text-xs font-light leading-normal">
                    {currentLang === 'fr' ? ev.desc_fr : ev.desc_en}
                  </p>
                </div>

                <button
                  id="btn-reserve-event"
                  onClick={() => scrollToSection('reservations')}
                  className="w-full py-2 rounded-lg bg-zinc-800 hover:bg-gold hover:text-coal text-zinc-300 text-xs font-semibold uppercase tracking-wider transition-all block text-center"
                >
                  {translations.events_btn[currentLang]}
                </button>

              </div>
            ))}

          </div>

        </div>

        {/* Expanded Blog Modal Article Viewer */}
        {selectedPost && (
          <div
            id="blog-expanded-lightbox"
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 transition-all animate-[fadeIn_0.3s_ease]"
            onClick={() => setSelectedPost(null)}
          >
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className="relative max-w-2xl w-full bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-72 bg-coal">
                <img
                  src={selectedPost.image}
                  alt={currentLang === 'fr' ? selectedPost.title_fr : selectedPost.title_en}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-905 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left space-y-2">
                  <span className="bg-gold text-coal text-[10px] uppercase font-bold py-1 px-2.5 rounded tracking-widest inline-block">
                    {currentLang === 'fr' ? selectedPost.category_fr : selectedPost.category_en}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {currentLang === 'fr' ? selectedPost.title_fr : selectedPost.title_en}
                  </h3>
                </div>
              </div>

              {/* body paragraph details */}
              <div className="p-6 sm:p-8 space-y-5 text-zinc-300 text-sm font-light leading-relaxed text-left">
                <div className="flex items-center space-x-6 text-[10px] text-zinc-500 font-sans tracking-wide border-b border-zinc-800 pb-4">
                  <span>DATE: {selectedPost.date}</span>
                  <span>TEMPS DE LECTURE: {selectedPost.readTime}</span>
                  <span>PAR: CHEF EULOGE</span>
                </div>

                <div className="space-y-4 whitespace-pre-line text-xs sm:text-sm leading-relaxed font-sans text-zinc-200">
                  {currentLang === 'fr' ? selectedPost.content_fr : selectedPost.content_en}
                </div>

                <div className="pt-6 border-t border-zinc-800 flex justify-end">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-5 py-2 rounded-full bg-zinc-800 text-white hover:bg-gold hover:text-coal text-xs font-bold uppercase transition-colors"
                  >
                    Fermer l'article
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
