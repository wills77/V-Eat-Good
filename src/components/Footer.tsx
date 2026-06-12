import React, { useState } from 'react';
import { Mail, Facebook, Instagram, Shield, Compass, Star, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  scrollToSection: (id: string) => void;
}

export default function Footer({ currentLang, scrollToSection }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSuccessMsg(true);
    setNewsletterEmail('');
    setTimeout(() => {
      setSuccessMsg(false);
    }, 5000);
  };

  return (
    <footer className="bg-coal text-zinc-400 border-t border-white/5 relative overflow-hidden">
      
      {/* Visual background vector circle */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-wood/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo description block */}
          <div className="md:col-span-4 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 text-left focus:outline-none cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-wood/50">
                <span className="text-gold font-bold font-heading text-base">V'EG</span>
              </div>
              <div>
                <h3 className="text-white font-heading font-bold text-lg tracking-wider">
                  V'Eat <span className="text-gold">Good</span>
                </h3>
                <span className="text-[10px] text-zinc-500 block uppercase tracking-widest font-sans">
                  SNC Owendo • Gabon
                </span>
              </div>
            </button>

            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              {translations.footer_desc[currentLang]}
            </p>

            {/* Social links */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#181614] hover:bg-gold hover:text-coal border border-zinc-800 transition-colors"
              >
                <Facebook className="w-4 h-4 text-zinc-300 hover:text-inherit" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#181614] hover:bg-gold hover:text-coal border border-zinc-800 transition-colors"
               >
                <Instagram className="w-4 h-4 text-zinc-300 hover:text-inherit" />
              </a>
            </div>
          </div>

          {/* Quick Navigations */}
          <div className="md:col-span-2 space-y-4 text-xs">
            <h4 className="text-white font-heading font-bold uppercase tracking-wider block">
              Navigation
            </h4>
            <ul className="space-y-2">
              {['hero', 'about', 'specialties', 'menu', 'reservations', 'order', 'blog', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="hover:text-gold capitalize transition-colors focus:outline-none cursor-pointer"
                  >
                    {id === 'hero' ? translations.nav_home[currentLang] : id === 'about' ? translations.nav_about[currentLang] : id === 'specialties' ? translations.nav_specialties[currentLang] : id === 'menu' ? translations.nav_menu[currentLang] : id === 'reservations' ? translations.nav_reservations[currentLang] : id === 'order' ? translations.nav_order[currentLang] : id === 'blog' ? translations.nav_blog[currentLang] : translations.nav_contact[currentLang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div className="md:col-span-3 space-y-4 text-xs">
            <h4 className="text-white font-heading font-bold uppercase tracking-wider block">
              {translations.contact_hours_title[currentLang]}
            </h4>
            <ul className="space-y-3 font-light leading-relaxed">
              <li>
                <span className="text-zinc-500 block text-[10px] uppercase font-bold tracking-widest">Semaine</span>
                <span className="text-zinc-300 font-medium">{translations.footer_hours_wd[currentLang]}</span>
              </li>
              <li>
                <span className="text-zinc-500 block text-[10px] uppercase font-bold tracking-widest">Week-ends</span>
                <span className="text-zinc-300 font-medium">{translations.footer_hours_we[currentLang]}</span>
              </li>
              <li className="pt-1.5 text-amber">
                <span className="text-[10px] block uppercase font-bold tracking-widest text-zinc-500">Lundi</span>
                <span>{translations.footer_hours_closed[currentLang]}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-heading font-bold text-xs uppercase tracking-wider block text-left">
              {translations.footer_newsletter_title[currentLang]}
            </h4>

            <p className="text-zinc-400 text-xs font-light leading-normal text-left">
              {translations.footer_newsletter_sub[currentLang]}
            </p>

            {successMsg ? (
              <div id="newsletter-success-toast" className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-[11px] leading-normal animate-pulse text-left">
                {translations.footer_newsletter_success[currentLang]}
              </div>
            ) : null}

            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <input
                id="newsletter-email-input"
                type="email"
                required
                placeholder="vip-ndong@gmail.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-grow bg-[#181614] border border-zinc-800/80 text-white rounded-xl py-2 px-3 focus:outline-none focus:border-gold text-xs font-sans"
              />
              <button
                id="newsletter-submit-btn"
                type="submit"
                className="px-4 py-2 rounded-xl bg-gold text-coal text-xs font-bold font-heading hover:bg-gold-dark transition-colors cursor-pointer"
              >
                {translations.footer_newsletter_btn[currentLang]}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copy row */}
        <div className="pt-10 border-t border-zinc-900 mt-10 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 gap-4">
          <p>© 2026 V'Eat Good. {translations.footer_rights[currentLang]}</p>
          <div className="flex space-x-4">
            <span className="flex items-center space-x-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Mentions Légales</span>
            </span>
            <span>•</span>
            <span>Made in Gabon fine design.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
