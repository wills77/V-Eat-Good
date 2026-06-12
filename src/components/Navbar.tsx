import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ShoppingBag, Phone, MapPin, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  cartItemsCount: number;
  onOpenCart: () => void;
  scrollToSection: (id: string) => void;
  activeSection: string;
}

export default function Navbar({
  currentLang,
  setLang,
  cartItemsCount,
  onOpenCart,
  scrollToSection,
  activeSection
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to style Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        isScrolled || setIsScrolled(true);
      } else {
        !isScrolled || setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const navLinks = [
    { id: 'hero', label: translations.nav_home[currentLang] },
    { id: 'about', label: translations.nav_about[currentLang] },
    { id: 'specialties', label: translations.nav_specialties[currentLang] },
    { id: 'menu', label: translations.nav_menu[currentLang] },
    { id: 'reservations', label: translations.nav_reservations[currentLang] },
    { id: 'order', label: translations.nav_order[currentLang] },
    { id: 'blog', label: translations.nav_blog[currentLang] },
    { id: 'contact', label: translations.nav_contact[currentLang] },
  ];

  const toggleLanguage = () => {
    setLang(currentLang === 'fr' ? 'en' : 'fr');
  };

  const handleLinkClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-coal/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <button
            id="nav-logo-btn"
            onClick={() => handleLinkClick('hero')}
            className="flex items-baseline space-x-1 cursor-pointer focus:outline-none group"
          >
            <span className="text-2xl sm:text-3xl font-display font-semibold tracking-tight text-gold transition-colors duration-200">
              V'EAT
            </span>
            <span className="text-2xl sm:text-3xl font-display font-light text-white tracking-widest transition-colors duration-200">
              GOOD
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 focus:outline-none cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-gold text-coal font-semibold shadow-md'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Action Buttons: Language, Cart & Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Switcher */}
            <button
              id="desktop-lang-switcher"
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-zinc-700 hover:border-gold/50 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all text-xs focus:outline-none cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-gold" />
              <span>{currentLang === 'fr' ? 'EN' : 'FR'}</span>
            </button>

            {/* Quick RSVP Button */}
            <button
              id="desktop-rsvp-btn"
              onClick={() => handleLinkClick('reservations')}
              className="px-5 py-2 border border-gold text-gold text-[10px] uppercase tracking-widest font-medium hover:bg-gold hover:text-[#0A0908] transition-all focus:outline-none cursor-pointer"
            >
              {translations.btn_reserve[currentLang]}
            </button>

            {/* Shopping Cart Trigger */}
            <button
              id="desktop-cart-trigger"
              onClick={onOpenCart}
              className="relative p-2 rounded-full bg-coal-light border border-zinc-700 hover:border-ember hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all focus:outline-none cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-400" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-ember text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Cart & Hamburger Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Language Toggle for tiny screen */}
            <button
              id="mobile-lang-switcher"
              onClick={toggleLanguage}
              className="p-1 px-2 rounded border border-zinc-700 text-[10px] text-zinc-300 uppercase flex items-center space-x-1"
            >
              <Globe className="w-3 h-3 text-gold" />
              <span>{currentLang === 'fr' ? 'EN' : 'FR'}</span>
            </button>

            {/* Mobile Cart Icon */}
            <button
              id="mobile-cart-trigger"
              onClick={onOpenCart}
              className="relative p-2 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-400" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-ember text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Slideout */}
      {isOpen && (
        <div
          id="mobile-menu-pane"
          className="lg:hidden absolute top-auto left-0 right-0 bg-coal/98 border-b border-zinc-800 py-4 px-4 shadow-2xl transition-all duration-300"
        >
          <div className="space-y-1.5 pt-2 pb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide uppercase transition-colors ${
                  activeSection === link.id
                    ? 'bg-gold text-coal'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-col space-y-3.5 pb-2">
            <button
              id="mobile-rsvp-btn"
              onClick={() => handleLinkClick('reservations')}
              className="w-full py-2.5 rounded-lg bg-gold text-coal text-center text-xs font-bold uppercase tracking-wider"
            >
              {translations.btn_reserve[currentLang]}
            </button>
            <div className="flex justify-between items-center text-zinc-400 text-xs px-2">
              <span className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>SNI Owendo, Libreville</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>+241 77 12 34 56</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
