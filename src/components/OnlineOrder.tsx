import React, { useState, useMemo, useEffect } from 'react';
import { ShoppingBag, ChevronRight, Truck, Store, MapPin, Tag, Smartphone, CheckSquare, Clock, ArrowLeft, ArrowRight, ShieldCheck, Play } from 'lucide-react';
import { Language, CartItem } from '../types';
import { translations } from '../data/translations';

interface OnlineOrderProps {
  currentLang: Language;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, increment: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

const DISTRICT_SHIPPING = [
  { id: 'sni_owendo', name_fr: 'SNI Owendo (Proche)', name_en: 'SNI Owendo (Nearby)', fee: 1000 },
  { id: 'owendo_port', name_fr: 'Port d’Owendo / Alenakiri', name_en: 'Owendo Port / Alenakiri', fee: 1500 },
  { id: 'glass_louis', name_fr: 'Glass / Louis / Centre-ville', name_en: 'Glass / Louis / Downtown', fee: 2500 },
  { id: 'charbonnages', name_fr: 'Charbonnages / Nzeng-Ayong', name_en: 'Charbonnages / Nzeng-Ayong', fee: 3500 },
  { id: 'akanda_sabliere', name_fr: 'Akanda / La Sablière', name_en: 'Akanda / La Sabliere', fee: 4500 }
];

export default function OnlineOrder({
  currentLang,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: OnlineOrderProps) {
  const [deliveryMethod, setDeliveryMethod] = useState<'takeout' | 'delivery'>('delivery');
  const [selectedDistrict, setSelectedDistrict] = useState('sni_owendo');
  const [exactAddress, setExactAddress] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // overall percentage
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Payment method
  const [payMethod, setPayMethod] = useState<'airtel' | 'moov' | 'card'>('airtel');
  const [phonePayment, setPhonePayment] = useState('');

  // Order workflow states
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [generatedId, setGeneratedId] = useState('');
  const [trackingStep, setTrackingStep] = useState(1);

  // Auto increment tracking steps over time to simulate a real-time hot stove
  useEffect(() => {
    if (orderConfirmed && trackingStep < 5) {
      const interval = setInterval(() => {
        setTrackingStep((step) => {
          if (step >= 5) {
            clearInterval(interval);
            return 5;
          }
          return step + 1;
        });
      }, 10000); // 10 secs per status transition
      return () => clearInterval(interval);
    }
  }, [orderConfirmed, trackingStep]);

  // Recalculations
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, current) => acc + (current.item.price * current.quantity), 0);
  }, [cartItems]);

  const deliveryFee = useMemo(() => {
    if (deliveryMethod === 'takeout') return 0;
    const found = DISTRICT_SHIPPING.find(d => d.id === selectedDistrict);
    return found ? found.fee : 1500;
  }, [deliveryMethod, selectedDistrict]);

  const discountAmount = useMemo(() => {
    if (appliedDiscount <= 0) return 0;
    return Math.round((subtotal * appliedDiscount) / 100);
  }, [subtotal, appliedDiscount]);

  const grandTotal = useMemo(() => {
    const total = subtotal + deliveryFee - discountAmount;
    return Math.max(0, total);
  }, [subtotal, deliveryFee, discountAmount]);

  // Coupon handling
  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'OWENDO' || code === 'VEATGOOD') {
      setAppliedDiscount(15);
      setPromoSuccess(currentLang === 'fr' ? 'Sensationnel ! Code accepté, réduction de 15%' : 'Superb! Code accepted, 15% off');
      setPromoError('');
    } else if (code === 'BRAISE') {
      setAppliedDiscount(10);
      setPromoSuccess(currentLang === 'fr' ? 'Braises actives ! Réduction de 10%' : 'Woodfire active! 10% off');
      setPromoError('');
    } else {
      setPromoError(currentLang === 'fr' ? 'Code non répertorié ou expiré.' : 'Invalid code or expired.');
      setPromoSuccess('');
    }
  };

  const handlePaySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    if (deliveryMethod === 'delivery' && !exactAddress.trim()) {
      setErrorMessage(currentLang === 'fr' ? "Veuillez préciser votre adresse de livraison complète." : "Please specify a detailed delivery address.");
      return;
    }

    if ((payMethod === 'airtel' || payMethod === 'moov') && !phonePayment) {
      setErrorMessage(currentLang === 'fr' ? "Veuillez renseigner votre numéro Mobile Money." : "Please enter your Mobile Money phone number.");
      return;
    }

    setErrorMessage('');
    // Process checkout
    const mockId = 'VEAT-' + Math.floor(Math.random() * 90000 + 10000);
    setGeneratedId(mockId);
    setTrackingStep(1);
    setOrderConfirmed(true);
  };

  const handleStartNewOrder = () => {
    onClearCart();
    setOrderConfirmed(false);
    setGeneratedId('');
    setTrackingStep(1);
    setExactAddress('');
    setPhonePayment('');
    setPromoCode('');
    setAppliedDiscount(0);
    setPromoSuccess('');
    setErrorMessage('');
  };

  return (
    <section id="order" className="py-20 sm:py-28 bg-coal immersive-gradient relative overflow-hidden">
      
      {/* Decorative gradients */}
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-ember/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-3.5">
            <div className="w-12 h-[1px] bg-ember"></div>
            <span className="text-xs font-bold text-gold tracking-widest uppercase font-sans">
              Grillades à Domicile
            </span>
            <div className="w-12 h-[1px] bg-ember"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-display font-light">
            {translations.order_title[currentLang]}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            {translations.order_subtitle[currentLang]}
          </p>
        </div>

        {orderConfirmed ? (
          /* RECEIPT & TRACKING INTERACTIVE VIEW */
          <div id="order-confirmed-panel" className="max-w-3xl mx-auto bg-[#181614] border border-white/5 p-6 sm:p-10 rounded-3xl shadow-2xl space-y-8 animate-[fadeIn_0.5s_ease-out]">
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                <ShieldCheck className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">
                {translations.order_success_title[currentLang]}
              </h3>
              <p className="text-zinc-400 text-sm">
                {translations.order_success_text[currentLang]}
              </p>
              <div className="inline-block bg-coal border border-zinc-800 px-4 py-1.5 rounded-full mt-2">
                <span className="text-xs text-zinc-500">
                  {translations.order_success_sub[currentLang]} :{' '}
                </span>
                <span className="text-xs font-mono font-bold text-gold">{generatedId}</span>
              </div>
            </div>

            {/* Stepper Tracking Visualizer */}
            <div className="space-y-6 pt-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white text-left block">
                Suivi de préparation en direct :
              </h4>

              <div className="relative pl-8 space-y-8 border-l border-zinc-800">
                
                {/* Step 1 */}
                <div className="relative">
                  <div className={`absolute -left-[41px] top-1 w-6 h-6 rounded-full flex items-center justify-center border text-[10px] font-bold ${
                    trackingStep >= 1 ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-coal text-zinc-600 border-zinc-800'
                  }`}>
                    1
                  </div>
                  <div className="text-left">
                    <h5 className={`font-semibold text-xs sm:text-sm ${trackingStep >= 1 ? 'text-white' : 'text-zinc-500'}`}>
                      {translations.order_track_step1[currentLang]}
                    </h5>
                    <p className="text-zinc-500 text-xs mt-0.5">Payé par Mobile Money, transaction approuvée.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className={`absolute -left-[41px] top-1 w-6 h-6 rounded-full flex items-center justify-center border text-[10px] font-bold ${
                    trackingStep >= 2 ? 'bg-ember text-white border-ember animate-pulse' : 'bg-coal text-zinc-600 border-zinc-800'
                  }`}>
                    2
                  </div>
                  <div className="text-left">
                    <h5 className={`font-semibold text-xs sm:text-sm ${trackingStep >= 2 ? 'text-white' : 'text-zinc-500'}`}>
                      {translations.order_track_step2[currentLang]}
                    </h5>
                    <p className="text-zinc-500 text-xs mt-0.5">Les braises d'Okoumé grillent à point les aliments.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className={`absolute -left-[41px] top-1 w-6 h-6 rounded-full flex items-center justify-center border text-[10px] font-bold ${
                    trackingStep >= 3 ? 'bg-wood text-gold border-gold' : 'bg-coal text-zinc-600 border-zinc-800'
                  }`}>
                    3
                  </div>
                  <div className="text-left">
                    <h5 className={`font-semibold text-xs sm:text-sm ${trackingStep >= 3 ? 'text-white' : 'text-zinc-500'}`}>
                      {translations.order_track_step3[currentLang]}
                    </h5>
                    <p className="text-zinc-500 text-xs mt-0.5">Mis sous pli scellé thermique dans des boîtes en aluminium.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <div className={`absolute -left-[41px] top-1 w-6 h-6 rounded-full flex items-center justify-center border text-[10px] font-bold ${
                    trackingStep >= 4 ? 'bg-zinc-800 text-emerald-400 border-emerald-500 animate-bounce' : 'bg-coal text-zinc-600 border-zinc-800'
                  }`}>
                    4
                  </div>
                  <div className="text-left">
                    <h5 className={`font-semibold text-xs sm:text-sm ${trackingStep >= 4 ? 'text-white' : 'text-zinc-500'}`}>
                      {translations.order_track_step4[currentLang]}
                    </h5>
                    <p className="text-zinc-500 text-xs mt-0.5">Notre motard V'Eat Good contourne Owendo.</p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative">
                  <div className={`absolute -left-[41px] top-1 w-6 h-6 rounded-full flex items-center justify-center border text-[10px] font-bold ${
                    trackingStep >= 5 ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-coal text-zinc-600 border-zinc-800'
                  }`}>
                    5
                  </div>
                  <div className="text-left">
                    <h5 className={`font-semibold text-xs sm:text-sm ${trackingStep >= 5 ? 'text-white' : 'text-zinc-500'}`}>
                      {translations.order_track_step5[currentLang]}
                    </h5>
                    <p className="text-zinc-500 text-xs mt-0.5">Livraison effectuée avec le sourire.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Simulated progress timer notice */}
            <div className="p-4 rounded-xl bg-coal border border-zinc-800 text-xs text-zinc-400 text-center">
              {trackingStep < 5 ? (
                <p className="animate-pulse">
                  🔄 Le suivi se rafraichit toutes les 10 secondes. Temps de transit estimé : <span className="font-bold text-white">35 minutes</span>.
                </p>
              ) : (
                <p className="text-emerald-400 font-semibold">✓ Commande terminée avec succès. Merci d'avoir choisi V'Eat Good !</p>
              )}
            </div>

            <div className="text-center">
              <button
                id="btn-order-new"
                onClick={handleStartNewOrder}
                className="px-6 py-2.5 rounded-full bg-gold text-coal hover:bg-gold-dark font-bold text-xs uppercase"
              >
                Faire un nouveau repas sympa
              </button>
            </div>

          </div>
        ) : (
          /* REGULAR BASKET & CHECKOUT STRUCTURE */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Box: Simple Items count & lists */}
            <div className="lg:col-span-7 bg-[#181614] border border-white/5 rounded-2xl p-6 shadow-2xl space-y-6">
              
              <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                <h3 className="text-lg font-heading font-semibold text-white flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5 text-gold" />
                  <span>{translations.order_your_cart[currentLang]}</span>
                </h3>
                <span className="text-xs text-zinc-400 bg-zinc-800 py-1 px-3 rounded-full font-semibold">
                  {cartItems.length} plats
                </span>
              </div>

              {cartItems.length === 0 ? (
                <div id="cart-empty-prompt" className="text-center py-16 space-y-4">
                  <ShoppingBag className="w-12 h-12 text-zinc-700 mx-auto" />
                  <p className="text-zinc-400 text-sm max-w-sm mx-auto leading-relaxed">
                    {translations.order_empty_cart[currentLang]}
                  </p>
                  <a
                    href="#menu"
                    className="inline-block px-5 py-2 rounded-full bg-gold/10 hover:bg-gold text-gold hover:text-coal duration-200 border border-gold/30 text-xs font-semibold uppercase tracking-wider"
                  >
                    Aller au Restaurant
                  </a>
                </div>
              ) : (
                <div className="space-y-4 max-h-[480px] overflow-y-auto pr-2">
                  {cartItems.map((cart) => (
                    <div
                      key={cart.item.id}
                      id={`cart-item-${cart.item.id}`}
                      className="p-3.5 rounded-xl bg-coal border border-zinc-800/80 hover:border-zinc-700 transition-colors flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center space-x-3 text-left">
                        <div className="w-14 h-14 rounded-lg bg-zinc-900 overflow-hidden shrink-0 border border-zinc-800">
                          <img
                            src={cart.item.image}
                            alt={currentLang === 'fr' ? cart.item.name_fr : cart.item.name_en}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-medium text-xs sm:text-sm">
                            {currentLang === 'fr' ? cart.item.name_fr : cart.item.name_en}
                          </h4>
                          <span className="text-gold font-bold text-xs">
                            {cart.item.price.toLocaleString('fr-FR')} XAF
                          </span>
                        </div>
                      </div>

                      {/* Quantity & Actions control buttons */}
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-1 space-x-2">
                          <button
                            id={`qty-minus-${cart.item.id}`}
                            onClick={() => onUpdateQuantity(cart.item.id, -1)}
                            className="w-6 h-6 rounded bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center font-bold text-xs"
                          >
                            -
                          </button>
                          <span className="text-white text-xs font-bold font-heading px-0.5">{cart.quantity}</span>
                          <button
                            id={`qty-plus-${cart.item.id}`}
                            onClick={() => onUpdateQuantity(cart.item.id, 1)}
                            className="w-6 h-6 rounded bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center font-bold text-xs"
                          >
                            +
                          </button>
                        </div>

                        <button
                          id={`qty-remove-${cart.item.id}`}
                          onClick={() => onRemoveItem(cart.item.id)}
                          className="text-xs text-rose-400 hover:text-rose-500 hover:underline px-1 cursor-pointer"
                        >
                          Retirer
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              )}

              {/* Delivery / takeout Mode Selectors */}
              <div className="pt-6 border-t border-zinc-800 space-y-3">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest text-left block">
                  {translations.order_delivery_method[currentLang]}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    id="delivery-mode-takeout"
                    onClick={() => setDeliveryMethod('takeout')}
                    className={`py-3 px-4 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all focus:outline-none cursor-pointer ${
                      deliveryMethod === 'takeout'
                        ? 'border-gold bg-wood/30 text-gold font-semibold'
                        : 'border-zinc-800 bg-coal text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <Store className="w-5 h-5" />
                    <span className="text-xs">{translations.order_method_takeout[currentLang]}</span>
                  </button>

                  <button
                    id="delivery-mode-delivery"
                    onClick={() => setDeliveryMethod('delivery')}
                    className={`py-3 px-4 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all focus:outline-none cursor-pointer ${
                      deliveryMethod === 'delivery'
                        ? 'border-gold bg-wood/30 text-gold font-semibold'
                        : 'border-zinc-800 bg-coal text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <Truck className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs">{translations.order_method_delivery[currentLang]}</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Box: Totals & Payments fields */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#181614] border border-white/5 rounded-2xl p-6 shadow-2xl space-y-6">
                <h3 className="text-base font-heading font-semibold text-white tracking-wide border-b border-zinc-800 pb-3 block text-left">
                  Recapitulatif & Checkout
                </h3>

                {errorMessage && (
                  <div className="p-3 bg-red-400/5 border border-red-500/20 text-red-400 text-xs rounded-xl text-left font-sans animate-[fadeIn_0.2s_ease-out]">
                    {errorMessage}
                  </div>
                )}

                {deliveryMethod === 'delivery' && (
                  <div className="space-y-4 animate-[fadeIn_0.3s_ease-out]">
                    {/* District Dropdown list */}
                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-gold" />
                        <span>{translations.order_select_zone[currentLang]}</span>
                      </label>
                      <select
                        id="district-rate-select"
                        value={selectedDistrict}
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                        className="w-full bg-coal border border-zinc-800 text-white rounded-xl py-2 px-3 focus:outline-none focus:border-gold text-xs"
                      >
                        {DISTRICT_SHIPPING.map(d => (
                          <option key={d.id} value={d.id}>
                            {currentLang === 'fr' ? d.name_fr : d.name_en} (+{d.fee.toLocaleString('fr-FR')} XAF)
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Accurate street address info */}
                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                        {translations.order_form_address[currentLang]}
                      </label>
                      <input
                        id="delivery-address-input"
                        type="text"
                        placeholder="Owendo SNI, en face de la pharmacie"
                        value={exactAddress}
                        onChange={(e) => setExactAddress(e.target.value)}
                        className="w-full bg-coal border border-zinc-800 text-white rounded-xl py-2 px-3 focus:outline-none focus:border-gold text-xs transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* Promo Code Box */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center space-x-1">
                    <Tag className="w-3.5 h-3.5 text-gold" />
                    <span>{translations.order_promo[currentLang]}</span>
                  </label>
                  <div className="flex space-x-2">
                    <input
                      id="promo-code-input"
                      type="text"
                      placeholder="Ex: OWENDO"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-grow bg-coal border border-zinc-800 text-white rounded-xl py-2 px-3 focus:outline-none focus:border-gold text-xs uppercase"
                    />
                    <button
                      id="btn-apply-promo"
                      type="button"
                      onClick={handleApplyPromo}
                      className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-gold text-white hover:text-coal text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Appliquer
                    </button>
                  </div>
                  {promoError && <p className="text-[10px] text-rose-400 font-medium pl-1">{promoError}</p>}
                  {promoSuccess && <p className="text-[10px] text-emerald-400 font-semibold pl-1">{promoSuccess}</p>}
                </div>

                {/* Sub-totaling recap */}
                <div className="space-y-3 pt-4 border-t border-zinc-800 text-xs sm:text-sm">
                  <div className="flex justify-between text-zinc-400">
                    <span>{translations.order_summary_subtotal[currentLang]}</span>
                    <span>{subtotal.toLocaleString('fr-FR')} XAF</span>
                  </div>

                  {deliveryMethod === 'delivery' && (
                    <div className="flex justify-between text-zinc-400">
                      <span>{translations.order_summary_delivery[currentLang]}</span>
                      <span>+{deliveryFee.toLocaleString('fr-FR')} XAF</span>
                    </div>
                  )}

                  {appliedDiscount > 0 && (
                    <div className="flex justify-between text-emerald-400 font-medium">
                      <span>{translations.order_summary_discount[currentLang]} ({appliedDiscount}%)</span>
                      <span>-{discountAmount.toLocaleString('fr-FR')} XAF</span>
                    </div>
                  )}

                  <div className="h-[1px] bg-zinc-800 pt-1" />

                  <div className="flex justify-between text-white font-heading font-extrabold text-base pt-1">
                    <span>{translations.order_summary_total[currentLang]} :</span>
                    <span className="text-gold">{grandTotal.toLocaleString('fr-FR')} XAF</span>
                  </div>
                </div>

                {/* Secured Mobile Payment structure */}
                {cartItems.length > 0 && (
                  <form onSubmit={handlePaySubmit} className="space-y-4 pt-4 border-t border-zinc-800 text-left">
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">
                      {translations.order_pay_method[currentLang]}
                    </h4>

                    {/* Payment Radios selector */}
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        id="pay-btn-airtel"
                        onClick={() => setPayMethod('airtel')}
                        className={`p-2 rounded-lg border text-center flex flex-col items-center justify-center transition-all focus:outline-none cursor-pointer ${
                          payMethod === 'airtel' ? 'border-amber bg-orange-950/20 text-white font-semibold' : 'border-zinc-800 bg-coal text-zinc-500'
                        }`}
                      >
                        <span className="text-[10px] font-bold tracking-widest text-[#FF0000]">AIRTEL</span>
                        <span className="text-[9px] mt-0.5 opacity-80">Money</span>
                      </button>

                      <button
                        type="button"
                        id="pay-btn-moov"
                        onClick={() => setPayMethod('moov')}
                        className={`p-2 rounded-lg border text-center flex flex-col items-center justify-center transition-all focus:outline-none cursor-pointer ${
                          payMethod === 'moov' ? 'border-amber bg-orange-950/20 text-white font-semibold' : 'border-zinc-800 bg-coal text-zinc-500'
                        }`}
                      >
                        <span className="text-[10px] font-bold tracking-widest text-[#008FCD]">MOOV</span>
                        <span className="text-[9px] mt-0.5 opacity-80">Money</span>
                      </button>

                      <button
                        type="button"
                        id="pay-btn-card"
                        onClick={() => setPayMethod('card')}
                        className={`p-2 rounded-lg border text-center flex flex-col items-center justify-center transition-all focus:outline-none cursor-pointer ${
                          payMethod === 'card' ? 'border-gold bg-wood/30 text-white font-semibold' : 'border-zinc-800 bg-coal text-zinc-500'
                        }`}
                      >
                        <span className="text-[10px] font-bold tracking-widest text-zinc-300">CARTE</span>
                        <span className="text-[9px] mt-0.5 opacity-80">Visa/MC</span>
                      </button>
                    </div>

                    {/* Numeric phone box if Mobile Money selected */}
                    {(payMethod === 'airtel' || payMethod === 'moov') ? (
                      <div className="space-y-1 animate-[fadeIn_0.2s_ease-out]">
                        <label className="text-[10px] text-zinc-500 uppercase font-semibold block">Numéro Récepteur (Airtel/Moov)</label>
                        <div className="relative">
                          <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                          <input
                            id="pay-phone-input"
                            type="tel"
                            placeholder="077 45 67 89"
                            required
                            value={phonePayment}
                            onChange={(e) => setPhonePayment(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 bg-coal border border-zinc-800 text-white text-xs rounded-xl focus:ring-1 focus:ring-gold focus:outline-none"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1 animate-[fadeIn_0.2s_ease-out] bg-coal p-2.5 rounded-lg border border-zinc-800 text-[10px] text-zinc-400 text-center">
                        💳 Interface bancaire sécurisée simulée en direct. Aucunes coordonnées réelles ne vous seront demandées.
                      </div>
                    )}

                    {/* Submit Order action buttons */}
                    <button
                      type="submit"
                      id="order-submit-btn"
                      className="w-full py-3.5 rounded-xl bg-gold hover:bg-gold-dark text-coal font-bold text-xs uppercase tracking-wider transition-all focus:outline-none shadow-lg mt-2 font-heading cursor-pointer inline-flex items-center justify-center space-x-1"
                    >
                      <span>{translations.order_btn_checkout[currentLang]}</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
