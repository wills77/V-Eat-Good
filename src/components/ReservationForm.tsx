import React, { useState } from 'react';
import { Calendar, Users, MapPin, Clock, CheckCircle, Mail, User, Phone, Sparkles } from 'lucide-react';
import { Language, ReservationData } from '../types';
import { translations } from '../data/translations';

interface ReservationFormProps {
  currentLang: Language;
}

export default function ReservationForm({ currentLang }: ReservationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2026-06-13',
    time: '20:00',
    guests: 2,
    locationPref: 'salle' as 'salle' | 'terrasse' | 'salon-privé',
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [createdRSVP, setCreatedRSVP] = useState<ReservationData | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMessage(currentLang === 'fr' ? 'Veuillez saisir votre nom et téléphone.' : 'Please enter your name and phone.');
      return;
    }

    setErrorMessage('');
    const mockRSVP: ReservationData = {
      id: 'RSVP-' + Math.floor(Math.random() * 9000 + 1000),
      status: 'confirmed',
      ...formData
    };

    setCreatedRSVP(mockRSVP);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '2026-06-13',
      time: '20:00',
      guests: 2,
      locationPref: 'salle',
      specialRequests: ''
    });
    setErrorMessage('');
    setIsSubmitted(false);
    setCreatedRSVP(null);
  };

  return (
    <section id="reservations" className="py-20 sm:py-28 bg-coal immersive-gradient relative overflow-hidden">
      <div className="absolute right-0 top-0 w-80 h-80 bg-wood-light/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-10 bottom-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-3.5">
            <div className="w-12 h-[1px] bg-ember"></div>
            <span className="text-xs font-bold text-gold tracking-widest uppercase font-sans">
              Table Prestige
            </span>
            <div className="w-12 h-[1px] bg-ember"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-display font-light">
            {translations.reserve_title[currentLang]}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            {translations.reserve_subtitle[currentLang]}
          </p>
        </div>

        {/* Form and info Container Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: RSVP interaction */}
          <div className="lg:col-span-8 bg-[#181614] border border-white/5 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
            
            {errorMessage && (
              <div className="p-3 mb-6 bg-red-400/5 border border-red-500/20 text-red-400 text-xs rounded-xl text-left font-sans">
                {errorMessage}
              </div>
            )}
            
            {isSubmitted && createdRSVP ? (
              /* Confirmation Screen success content */
              <div id="rsvp-success-box" className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle className="w-10 h-10 animate-bounce" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {translations.reserve_success_title[currentLang]}
                  </h3>
                  <p className="text-zinc-400 text-sm max-w-md mx-auto">
                    {translations.reserve_success_text[currentLang]}
                  </p>
                </div>

                {/* Recapitulation of details */}
                <div className="max-w-md mx-auto bg-coal border border-zinc-800 rounded-xl p-5 text-left space-y-3">
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>CODE RESERVATION</span>
                    <span className="font-mono text-gold font-bold">{createdRSVP.id}</span>
                  </div>
                  <div className="h-[1px] bg-zinc-800" />
                  <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div>
                      <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Nom</span>
                      <span className="text-white font-medium">{createdRSVP.name}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Téléphone</span>
                      <span className="text-white font-mono">{createdRSVP.phone}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Date & Heure</span>
                      <span className="text-white font-medium">{createdRSVP.date} à {createdRSVP.time}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Convives / Emplacement</span>
                      <span className="text-white font-medium capitalize">
                        {createdRSVP.guests} pers. ({createdRSVP.locationPref})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    id="btn-rsvp-new"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full border border-zinc-700 hover:border-gold hover:text-gold text-zinc-400 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Faire une autre réservation
                  </button>
                </div>
              </div>
            ) : (
              /* Regular Reservation Form fields */
              <form id="rsvp-booking-form" onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Name field */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center space-x-1">
                      <User className="w-3.5 h-3.5 text-gold" />
                      <span>{translations.reserve_form_name[currentLang]}</span>
                    </label>
                    <input
                      id="rsvp-input-name"
                      type="text"
                      required
                      placeholder="M. Ndong Christian"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-coal border border-zinc-800 text-white rounded-xl py-2.5 px-4 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none text-xs transition-colors"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center space-x-1">
                      <Phone className="w-3.5 h-3.5 text-gold" />
                      <span>{translations.reserve_form_phone[currentLang]}</span>
                    </label>
                    <input
                      id="rsvp-input-phone"
                      type="tel"
                      required
                      placeholder="077 12 34 56"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-coal border border-zinc-800 text-white rounded-xl py-2.5 px-4 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none text-xs text-left"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center space-x-1">
                      <Mail className="w-3.5 h-3.5 text-gold" />
                      <span>{translations.reserve_form_email[currentLang]}</span>
                    </label>
                    <input
                      id="rsvp-input-email"
                      type="email"
                      placeholder="nom@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-coal border border-zinc-800 text-white rounded-xl py-2.5 px-4 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none text-xs text-left"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Date picker */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      <span>{translations.reserve_form_date[currentLang]}</span>
                    </label>
                    <input
                      id="rsvp-input-date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-coal border border-zinc-800 text-white rounded-xl py-2.5 px-4 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none text-xs text-left"
                    />
                  </div>

                  {/* Time dropdown */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span>{translations.reserve_form_time[currentLang]}</span>
                    </label>
                    <select
                      id="rsvp-input-time"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full bg-coal border border-zinc-800 text-white rounded-xl py-2.5 px-4 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none text-xs"
                    >
                      <option value="12:00">12:00 (Midi)</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="19:00">19:00 (Soir)</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                      <option value="22:00">22:00</option>
                    </select>
                  </div>

                  {/* Guests amount slider/counter */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center space-x-1">
                      <Users className="w-3.5 h-3.5 text-gold" />
                      <span>
                        {translations.reserve_form_guests[currentLang]}: <span className="text-white font-bold ml-1">{formData.guests}</span>
                      </span>
                    </label>
                    <div className="flex items-center space-x-3 bg-coal border border-zinc-800 rounded-xl p-1.5 justify-between">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, guests: Math.max(1, formData.guests - 1)})}
                        className="w-8 h-8 rounded-lg bg-zinc-800 text-white hover:bg-gold hover:text-coal font-bold flex items-center justify-center focus:outline-none text-xs cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-white font-heading font-bold text-xs">{formData.guests} pers.</span>
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, guests: Math.min(20, formData.guests + 1)})}
                        className="w-8 h-8 rounded-lg bg-zinc-800 text-white hover:bg-gold hover:text-coal font-bold flex items-center justify-center focus:outline-none text-xs cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location pref (Salle, terrasse ou salon VIP) */}
                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>{translations.reserve_form_location[currentLang]}</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    
                    <button
                      type="button"
                      id="pref-salle-btn"
                      onClick={() => setFormData({...formData, locationPref: 'salle'})}
                      className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        formData.locationPref === 'salle'
                          ? 'border-gold bg-wood/30 text-white'
                          : 'border-zinc-800 bg-coal hover:border-zinc-700 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <span className="font-medium text-xs text-white">salle intérieure</span>
                      <span className="text-[10px] mt-0.5 leading-normal opacity-70">
                        {translations.loc_salle[currentLang]}
                      </span>
                    </button>

                    <button
                      type="button"
                      id="pref-terrasse-btn"
                      onClick={() => setFormData({...formData, locationPref: 'terrasse'})}
                      className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        formData.locationPref === 'terrasse'
                          ? 'border-gold bg-wood/30 text-white'
                          : 'border-zinc-800 bg-coal hover:border-zinc-700 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <span className="font-medium text-xs text-white">grande terrasse</span>
                      <span className="text-[10px] mt-0.5 leading-normal opacity-70">
                        {translations.loc_terrasse[currentLang]}
                      </span>
                    </button>

                    <button
                      type="button"
                      id="pref-salon-btn"
                      onClick={() => setFormData({...formData, locationPref: 'salon-privé'})}
                      className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        formData.locationPref === 'salon-privé'
                          ? 'border-gold bg-wood/30 text-white'
                          : 'border-zinc-800 bg-coal hover:border-zinc-700 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <span className="font-medium text-xs text-white">salon privé vip</span>
                      <span className="text-[10px] mt-0.5 leading-normal opacity-70">
                        {translations.loc_salon[currentLang]}
                      </span>
                    </button>

                  </div>
                </div>

                {/* Special requests remarks */}
                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">
                    {translations.reserve_form_requests[currentLang]}
                  </label>
                  <textarea
                    id="rsvp-remarks"
                    rows={3}
                    placeholder="Ex: Nous célébrons un anniversaire de mariage..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                    className="w-full bg-coal border border-zinc-800 text-white rounded-xl py-2.5 px-4 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none text-xs transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="rsvp-submit-btn"
                    className="w-full py-4 rounded-xl bg-gold text-coal font-bold text-xs uppercase tracking-wider hover:bg-gold-dark transition-all focus:outline-none cursor-pointer shadow-lg animate-pulse-gold font-heading"
                  >
                    {translations.reserve_btn_submit[currentLang]}
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Private event hosting & address info */}
          <div className="lg:col-span-4 bg-[#181614] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
            
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-semibold text-white">
                {translations.reserve_info_box_title[currentLang]}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                {translations.reserve_info_box_desc[currentLang]}
              </p>

              <div className="h-[1px] bg-zinc-800" />

              <div className="space-y-4 text-xs">
                <div>
                  <h4 className="text-gold font-semibold uppercase tracking-wider block">Assistance Téléphone</h4>
                  <p className="text-white mt-1 font-mono text-sm font-semibold">+241 77 12 34 56</p>
                  <p className="text-zinc-400 mt-0.5">Appels & WhatsApp (09:00 - 23:00)</p>
                </div>

                <div>
                  <h4 className="text-gold font-semibold uppercase tracking-wider block">Planification Spéciale</h4>
                  <p className="text-zinc-300 mt-1 font-light leading-normal">
                    Pour des réservations exceptionnelles de plus de 10 personnes, veuillez appeler directement le restaurant ou nous contacter par message.
                  </p>
                </div>
              </div>
            </div>

            {/* Nice visual layout */}
            <div className="pt-8 block">
              <div className="p-4 rounded-lg bg-coal border border-zinc-800 text-xs">
                <span className="text-emerald-400 font-bold block">✓ Confirmation Instantanée</span>
                <p className="text-zinc-500 mt-1 leading-normal">
                  Chaque formulaire envoie un bon de réservation sécurisé. Notre équipe vous ré-attestera votre place par SMS.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
