import React, { useState, useMemo } from 'react';
import { Eye, X, ZoomIn, Image as ImageIcon, Flame } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface GalleryProps {
  currentLang: Language;
}

interface GalleryItem {
  id: string;
  category: 'dishes' | 'grill' | 'vibe';
  src: string;
  title_fr: string;
  title_en: string;
  desc_fr: string;
  desc_en: string;
}

const GALLERY_PHOTOS: GalleryItem[] = [
  {
    id: 'g_1',
    category: 'dishes',
    src: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    title_fr: 'Poulet Nyembwé Traditionnel',
    title_en: 'Traditional Nyembwe Chicken',
    desc_fr: 'Mijoté de poulet fermier à la pulpe de noix de palme.',
    desc_en: 'Native chicken stew simmered slowly in palm cream.'
  },
  {
    id: 'g_2',
    category: 'dishes',
    src: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    title_fr: 'Bar Braisé aux Herbes',
    title_en: 'Herbal Braised Sea Bass',
    desc_fr: 'Poisson entier fraîchement grillé à la braise d’Owendo.',
    desc_en: 'Whole fresh sea bass grilled crisp on open fire logs.'
  },
  {
    id: 'g_3',
    category: 'grill',
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    title_fr: 'Cuisson Fumé aux Bois Précieux',
    title_en: 'Smoky Firewood Grilling Stoves',
    desc_fr: 'Braises chaudes rôtissant nos viandes fines.',
    desc_en: 'Incandescent embers slow-burning our premium cuts.'
  },
  {
    id: 'g_4',
    category: 'vibe',
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
    title_fr: 'Grande Salle Lounge V\'Eat Good',
    title_en: 'V\'Eat Good Main Dining Lounge',
    desc_fr: 'Ambiance feutrée aux couleurs de la terre et du bois.',
    desc_en: 'Warm layout featuring authentic woods and rich tones.'
  },
  {
    id: 'g_5',
    category: 'dishes',
    src: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80',
    title_fr: 'Cocktails du Terroir & Bissap Sec',
    title_en: 'Artisanal Bissap & Lime Infusions',
    desc_fr: 'Élixirs de gingembre et d’hibiscus servis frais.',
    desc_en: 'Squeezed ginger roots and sweet ruby hibiscus cold extracts.'
  },
  {
    id: 'g_6',
    category: 'grill',
    src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    title_fr: 'Brochettes d’Owendo en Fusion',
    title_en: 'Owendo Fusion Meat Skewers',
    desc_fr: 'Saisies à la flamme vive de barbecue indigène.',
    desc_en: 'Cooked high-temp on fiery coals with local seasoning.'
  },
  {
    id: 'g_7',
    category: 'vibe',
    src: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
    title_fr: 'Instants mémorables de convivialité',
    title_en: 'Precious Moments of Celebration',
    desc_fr: 'Les dîners animés d’invités privilégiés chez nous.',
    desc_en: 'Lively gatherings of families and colleagues.'
  },
  {
    id: 'g_8',
    category: 'vibe',
    src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    title_fr: 'Service Gastronomique Chaleureux',
    title_en: 'Caring Five-Star Table Service',
    desc_fr: 'Une équipe dévouée sous les préceptes d’hospitalité.',
    desc_en: 'Attentive, friendly guidance with classic African smiles.'
  }
];

export default function Gallery({ currentLang }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'dishes' | 'grill' | 'vibe'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter(photo => photo.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-coal immersive-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gallery Headers */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="flex items-center justify-center space-x-3.5">
            <div className="w-12 h-[1px] bg-ember"></div>
            <span className="text-xs font-bold text-gold tracking-widest uppercase font-sans">
              Galerie Immersive
            </span>
            <div className="w-12 h-[1px] bg-ember"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-display font-light">
            {translations.gallery_title[currentLang]}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            {translations.gallery_subtitle[currentLang]}
          </p>

          {/* Quick Filter tabs buttons */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all focus:outline-none cursor-pointer ${
                activeCategory === 'all' ? 'bg-gold text-coal font-semibold' : 'bg-[#181614] border border-zinc-805/40 text-zinc-400 hover:text-white'
              }`}
            >
              {translations.gal_all[currentLang]}
            </button>
            <button
              onClick={() => setActiveCategory('dishes')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all focus:outline-none cursor-pointer ${
                activeCategory === 'dishes' ? 'bg-gold text-coal font-semibold' : 'bg-[#181614] border border-zinc-805/40 text-zinc-400 hover:text-white'
              }`}
            >
              {translations.gal_dishes[currentLang]}
            </button>
            <button
              onClick={() => setActiveCategory('grill')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all focus:outline-none cursor-pointer ${
                activeCategory === 'grill' ? 'bg-gold text-coal font-semibold' : 'bg-[#181614] border border-zinc-805/40 text-zinc-400 hover:text-white'
              }`}
            >
              {translations.gal_grill[currentLang]}
            </button>
            <button
              onClick={() => setActiveCategory('vibe')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all focus:outline-none cursor-pointer ${
                activeCategory === 'vibe' ? 'bg-gold text-coal font-semibold' : 'bg-[#181614] border border-zinc-805/40 text-zinc-400 hover:text-white'
              }`}
            >
              {translations.gal_vibe[currentLang]}
            </button>
          </div>
        </div>

        {/* Gallery Image Grid with beautiful overlay on hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#181614] border border-white/5 relative h-64 shadow-lg hover:border-gold/30 transition-all duration-300"
            >
              {/* Media element with standard no-referrer policy */}
              <img
                src={photo.src}
                alt={currentLang === 'fr' ? photo.title_fr : photo.title_en}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Hover screen blur Overlay */}
              <div className="absolute inset-0 bg-coal/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-5" >
                {/* zoom icon top */}
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-gold/10 text-gold">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>

                {/* title block bottom */}
                <div className="text-left space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] text-gold uppercase tracking-widest font-bold">
                    {photo.category === 'dishes' ? 'Specialité' : photo.category === 'grill' ? 'Feu de Bois' : 'Vibe'}
                  </span>
                  <h4 className="text-white font-heading font-bold text-sm">
                    {currentLang === 'fr' ? photo.title_fr : photo.title_en}
                  </h4>
                  <p className="text-zinc-400 text-xs font-light">
                    {currentLang === 'fr' ? photo.desc_fr : photo.desc_en}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Lightbox Modal overlay popup */}
        {selectedPhoto && (
          <div
            id="gallery-lightbox"
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 transition-all animate-[fadeIn_0.3s_ease]"
            onClick={() => setSelectedPhoto(null)}
          >
            
            <button
              id="btn-lightbox-close"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className="relative max-w-4xl w-full bg-zinc-955 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[420px]">
                {/* Photo half */}
                <div className="md:col-span-8 bg-black flex items-center justify-center h-80 sm:h-[450px]">
                  <img
                    src={selectedPhoto.src}
                    alt={currentLang === 'fr' ? selectedPhoto.title_fr : selectedPhoto.title_en}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Content description list half */}
                <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between text-left bg-zinc-900">
                  <div className="space-y-4">
                    <span className="px-2.5 py-1 rounded bg-gold/10 text-gold text-[10px] uppercase font-bold tracking-widest border border-gold/10 inline-block">
                      {selectedPhoto.category.toUpperCase()}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      {currentLang === 'fr' ? selectedPhoto.title_fr : selectedPhoto.title_en}
                    </h3>

                    <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                      {currentLang === 'fr' ? selectedPhoto.desc_fr : selectedPhoto.desc_en}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-zinc-800 mt-6 flex justify-between items-center">
                    <div className="flex items-center space-x-1.5 text-zinc-500 text-xs">
                      <Flame className="w-4 h-4 text-ember" />
                      <span>V'Eat Good Gastronomy</span>
                    </div>

                    <button
                      onClick={() => setSelectedPhoto(null)}
                      className="text-gold hover:underline text-xs"
                    >
                      Retour
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
