import React, { useState } from 'react';
import { Send, MapPin, Phone, Clock, MessageSquare, Compass, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ContactMapProps {
  currentLang: Language;
}

export default function ContactMap({ currentLang }: ContactMapProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      setErrorMessage(currentLang === 'fr' ? 'Veuillez saisir votre nom et message.' : 'Please enter your name and message.');
      return;
    }
    // Simulate submit
    setErrorMessage('');
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' });
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleWhatsAppRedirect = () => {
    const textMsg = currentLang === 'fr'
      ? "Bonjour V'Eat Good ! Je souhaite réserver ou passer une commande depuis le site internet."
      : "Hello V'Eat Good! I want to inquire about table RSVPs or online deliveries.";
    
    const formattedText = encodeURIComponent(textMsg);
    // Real Gabon WhatsApp code simulation (e.g. +241 77 12 34 56)
    window.open(`https://wa.me/24177123456?text=${formattedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-coal immersive-gradient relative overflow-hidden border-t border-white/5">
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-wood-light/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-10 bottom-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-3.5">
            <div className="w-12 h-[1px] bg-ember"></div>
            <span className="text-xs font-bold text-gold tracking-widest uppercase font-sans">
              Coordonnées & Accès
            </span>
            <div className="w-12 h-[1px] bg-ember"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-display font-light">
            {translations.contact_title[currentLang]}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            {translations.contact_subtitle[currentLang]}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Address Details & Bespoke Styled Map Mockup */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Address cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              
              <div className="p-5 rounded-2xl bg-[#181614] border border-white/5 space-y-2">
                <MapPin className="w-5 h-5 text-gold" style={{ strokeWidth: 1.5 }} />
                <h4 className="text-white text-xs font-heading font-bold uppercase tracking-wider">
                  {translations.contact_loc_title[currentLang]}
                </h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  V'Eat Good<br />
                  Secteur SNI Owendo<br />
                  Libreville, Gabon
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#181614] border border-white/5 space-y-2">
                <Phone className="w-5 h-5 text-gold" style={{ strokeWidth: 1.5 }} />
                <h4 className="text-white text-xs font-heading font-bold uppercase tracking-wider">
                  Téléphone & WhatsApp
                </h4>
                <div className="text-zinc-400 text-xs space-y-1">
                  <p className="font-mono">+241 77 12 34 56</p>
                  <p className="font-mono">+241 62 98 76 54</p>
                  <p className="text-[10px] text-emerald-400">Accueil d'Owendo</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#181614] border border-white/5 space-y-2">
                <Clock className="w-5 h-5 text-gold" style={{ strokeWidth: 1.5 }} />
                <h4 className="text-white text-xs font-heading font-bold uppercase tracking-wider">
                  {translations.contact_hours_title[currentLang]}
                </h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Mardi - Dimanche :<br />
                  11h30 - 23h30<br />
                  <span className="text-amber">Lundi fermé</span>
                </p>
              </div>

            </div>

            {/* Bespoke stylized geographical overview Map card - highly interactive and gorgeous */}
            <div className="p-6 rounded-2xl bg-[#181614] border border-white/5 shadow-2xl relative h-72 overflow-hidden flex flex-col justify-between">
              
              {/* Fake aesthetic grid coordinates maps lines */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF9F6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Graphic custom drawing of Owendo Estuary beach strip, railways and main highway */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                {/* Beach line */}
                <div className="absolute bottom-0 right-0 left-10 h-20 bg-blue-500/20 transform rotate-[-12deg] rounded-tl-full" />
                {/* Rail tracks */}
                <div className="absolute bottom-16 left-0 right-0 h-1.5 border-t border-b border-dashed border-zinc-650" />
                {/* Main highway road */}
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-zinc-800 rotate-[4deg]" />
                <div className="absolute top-[48%] left-0 right-0 h-[1.5px] bg-yellow-500/60 border-dashed" />
              </div>

              {/* Glowing active Marker representing V'Eat Good */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <div className="relative inline-block">
                  {/* Pulse visual ring */}
                  <div className="absolute -inset-2 bg-gold text-transparent rounded-full animate-ping opacity-60" />
                  <div className="p-3.5 rounded-full bg-wood text-gold border border-gold/40 shadow-2xl relative">
                    <Compass className="w-6 h-6 animate-spin" style={{ animationDuration: '12s' }} />
                  </div>
                </div>
                <div className="mt-2.5 px-3 py-1 rounded bg-zinc-950/90 border border-white/10 text-[10px] text-white tracking-widest font-bold uppercase whitespace-nowrap shadow-md">
                  V'Eat Good ★ SNI OWENDO
                </div>
              </div>

              {/* Map coordinates indicators margins */}
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono z-10">
                <span>0°17'49"N • 9°30'03"E</span>
                <span>Océan Atlantique • Baie d'Owendo</span>
              </div>

              <div className="flex justify-between items-end text-zinc-500 font-sans z-10">
                <span className="text-[10px] capitalize">Itinéraire suggéré : Suivre l'avenue SNI, face à la plage</span>
                <span className="text-xs bg-zinc-800 border border-zinc-700 py-1 px-3 text-gold font-bold rounded-lg uppercase">
                  Owendo, Gabon.
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Dynamic Secure Message Form & Direct WhatsApp trigger */}
          <div className="lg:col-span-5 bg-[#181614] border border-white/5 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between text-left">
            
            <div className="space-y-6">
              <h3 className="text-lg font-heading font-semibold text-white">
                Formulaire de Message Direct
              </h3>

              {submitted ? (
                <div id="contact-success-toast" className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm text-center leading-normal animate-pulse">
                  <p className="font-bold">✓ {translations.contact_form_success[currentLang]}</p>
                </div>
              ) : null}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {errorMessage && (
                  <div className="p-3 bg-red-400/5 border border-red-500/20 text-red-400 text-xs rounded-xl text-left font-sans animate-[fadeIn_0.2s_ease-out]">
                    {errorMessage}
                  </div>
                )}
                
                <div className="space-y-1 text-left">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                    {translations.contact_name[currentLang]}
                  </label>
                  <input
                    id="contact-input-name"
                    type="text"
                    required
                    placeholder="M. Euloge"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-coal border border-zinc-800 text-white text-xs rounded-xl py-2 px-3 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                      {translations.contact_phone[currentLang]}
                    </label>
                    <input
                      id="contact-input-phone"
                      type="tel"
                      placeholder="062 11 22 33"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-coal border border-zinc-800 text-white text-xs rounded-xl py-2 px-3 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                      {translations.contact_email[currentLang]}
                    </label>
                    <input
                      id="contact-input-email"
                      type="email"
                      placeholder="boussamba@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-coal border border-zinc-800 text-white text-xs rounded-xl py-2 px-3 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                    {translations.contact_msg[currentLang]}
                  </label>
                  <textarea
                    id="contact-input-msg"
                    rows={3}
                    required
                    placeholder="Votre requête ou question sur nos grillades et buffet..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-coal border border-zinc-800 text-white text-xs rounded-xl py-2 px-3 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gold hover:bg-gold-dark text-coal font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center space-x-1 font-heading"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{translations.contact_btn_send[currentLang]}</span>
                </button>

              </form>
            </div>

            {/* Quick launch WhatsApp buttons */}
            <div className="pt-6 border-t border-zinc-800 mt-6 block">
              <button
                id="contact-whatsapp-btn"
                onClick={handleWhatsAppRedirect}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center space-x-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{translations.contact_btn_wa[currentLang]}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
