import React, { useState, useEffect } from 'react';
import { ShoppingBag, X, Calendar, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { Language, CartItem, MenuItem } from './types';
import { translations } from './data/translations';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import MenuSection from './components/MenuSection';
import ReservationForm from './components/ReservationForm';
import OnlineOrder from './components/OnlineOrder';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import ContactMap from './components/ContactMap';
import Footer from './components/Footer';

export default function App() {
  const [currentLang, setLang] = useState<Language>('fr');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position to update active navbar link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'specialties', 'menu', 'reservations', 'order', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set default body background styling
  useEffect(() => {
    document.body.className = "bg-coal text-zinc-300 font-sans selection:bg-gold selection:text-coal antialiased overflow-x-hidden";
  }, []);

  // Smooth scroll routing helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  // Cart operations
  const handleAddToOrder = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((c) => c.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }
      return [...prevCart, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, increment: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((c) => {
          if (c.item.id === itemId) {
            const nextQuantity = c.quantity + increment;
            return { ...c, quantity: nextQuantity };
          }
          return c;
        })
        .filter((c) => c.quantity > 0);
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((c) => c.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const cartSubtotal = cart.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);

  const handleCartCheckoutClick = () => {
    setIsCartOpen(false);
    scrollToSection('order');
  };

  return (
    <div id="v-eat-good-root" className="min-h-screen flex flex-col relative bg-coal">
      
      {/* Navigation Header */}
      <Navbar
        currentLang={currentLang}
        setLang={setLang}
        cartItemsCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Sections flow */}
      <main id="main-content" className="flex-grow">
        <Hero currentLang={currentLang} scrollToSection={scrollToSection} />
        <About currentLang={currentLang} />
        <Specialties currentLang={currentLang} onAddToOrder={handleAddToOrder} scrollToSection={scrollToSection} />
        <MenuSection currentLang={currentLang} onAddToOrder={handleAddToOrder} />
        <ReservationForm currentLang={currentLang} />
        <OnlineOrder
          currentLang={currentLang}
          cartItems={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />
        <Gallery currentLang={currentLang} />
        <Testimonials currentLang={currentLang} />
        <BlogSection currentLang={currentLang} scrollToSection={scrollToSection} />
        <ContactMap currentLang={currentLang} />
      </main>

      {/* Footer credits & hours block */}
      <Footer currentLang={currentLang} scrollToSection={scrollToSection} />

      {/* Dynamic Slideout Shopping Cart Sidebar panel overlay */}
      {isCartOpen && (
        <div
          id="cart-overlay-shadow"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity flex justify-end animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setIsCartOpen(false)}
        >
          <div
            id="cart-sidebar-panel"
            className="w-full max-w-md bg-zinc-900 border-l border-zinc-800 h-full shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Slide Header */}
            <div className="p-5 border-b border-zinc-805 flex items-center justify-between text-left shrink-0">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-gold" />
                <h3 className="text-white font-heading font-semibold text-base">
                  {translations.order_your_cart[currentLang]}
                </h3>
              </div>
              <button
                id="btn-cart-close"
                onClick={() => setIsCartOpen(false)}
                className="p-1 px-2 text-xs text-zinc-400 hover:text-white border border-zinc-800 rounded-lg bg-zinc-950 flex items-center space-x-1"
                title="Fermer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Quitter</span>
              </button>
            </div>

            {/* Slide plattered dishes lists */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-20 space-y-4">
                  <ShoppingBag className="w-12 h-12 text-zinc-700 mx-auto" />
                  <p className="text-zinc-400 text-xs sm:text-sm max-w-[240px] mx-auto leading-relaxed">
                    {translations.order_empty_cart[currentLang]}
                  </p>
                </div>
              ) : (
                cart.map((cartItem) => (
                  <div
                    key={cartItem.item.id}
                    className="p-3 bg-coal border border-zinc-800 rounded-xl flex items-center justify-between gap-3 text-left"
                  >
                    <div className="flex items-center space-x-2.5">
                      <div className="w-12 h-12 rounded-lg bg-zinc-900 overflow-hidden shrink-0 border border-zinc-800">
                        <img
                          src={cartItem.item.image}
                          alt={currentLang === 'fr' ? cartItem.item.name_fr : cartItem.item.name_en}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h4 className="text-white text-xs font-semibold leading-tight line-clamp-1">
                          {currentLang === 'fr' ? cartItem.item.name_fr : cartItem.item.name_en}
                        </h4>
                        <span className="text-gold text-xs font-bold leading-none block mt-1">
                          {cartItem.item.price.toLocaleString('fr-FR')} XAF
                        </span>
                      </div>
                    </div>

                    {/* Quantity selectors */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center bg-zinc-900 rounded-lg p-0.5 space-x-1.5 border border-zinc-805">
                        <button
                          onClick={() => handleUpdateQuantity(cartItem.item.id, -1)}
                          className="w-5 h-5 rounded text-zinc-400 hover:text-white flex items-center justify-center font-bold text-[10px]"
                        >
                          -
                        </button>
                        <span className="text-white text-[11px] font-bold font-heading">{cartItem.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(cartItem.item.id, 1)}
                          className="w-5 h-5 rounded text-zinc-400 hover:text-white flex items-center justify-center font-bold text-[10px]"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemoveItem(cartItem.item.id)}
                        className="p-1 text-zinc-500 hover:text-rose-400 duration-150 cursor-pointer"
                        title="Retirer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                ))
              )}
            </div>

            {/* Slide Action Summary footer */}
            <div className="p-4 sm:p-5 border-t border-zinc-805 bg-zinc-950/70 shrink-0 space-y-4">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-zinc-500 uppercase tracking-widest text-xs">Sous-total :</span>
                <span className="text-gold font-bold font-heading text-lg">
                  {cartSubtotal.toLocaleString('fr-FR')} XAF
                </span>
              </div>

              {cart.length > 0 ? (
                <button
                  id="btn-cart-checkout-cta"
                  onClick={handleCartCheckoutClick}
                  className="w-full py-3.5 rounded-xl bg-gold hover:bg-gold-dark text-coal hover:scale-[1.01] font-heading font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg inline-flex items-center justify-center space-x-1.5"
                >
                  <span>Passer à la livraison</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              ) : (
                <button
                  disabled
                  className="w-full py-3 rounded-xl bg-zinc-800 text-zinc-650 font-bold text-xs uppercase tracking-wider cursor-not-allowed cursor-pointer"
                >
                  Panier Vide
                </button>
              )}

              <div className="text-center">
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-zinc-500 hover:text-zinc-300 text-xs transition-all decoration-dotted underline"
                >
                  Continuer mes choix
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
