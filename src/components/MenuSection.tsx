import React, { useState, useMemo } from 'react';
import { Sparkles, Flame, Search, Filter, RotateCcw, ShoppingBag, CheckCircle, FlameKindling, Info } from 'lucide-react';
import { Language, MenuItem } from '../types';
import { translations } from '../data/translations';
import { menuItems } from '../data/menu';

interface MenuSectionProps {
  currentLang: Language;
  onAddToOrder: (item: MenuItem) => void;
}

type MenuCategoryFilter = 'all' | 'entrées' | 'plats' | 'accompagnements' | 'desserts' | 'boissons';

export default function MenuSection({ currentLang, onAddToOrder }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Specific toggles
  const [justChefSpecials, setJustChefSpecials] = useState(false);
  const [justWoodFired, setJustWoodFired] = useState(false);
  const [spicinessFilter, setSpicinessFilter] = useState<'any' | 'none' | 'spicy'>('any');

  // Floating notifications feedback for individual items added
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories: { id: MenuCategoryFilter; label: string }[] = [
    { id: 'all', label: translations.menu_all[currentLang] },
    { id: 'entrées', label: translations.menu_entree[currentLang] },
    { id: 'plats', label: translations.menu_plat[currentLang] },
    { id: 'accompagnements', label: translations.menu_acc[currentLang] },
    { id: 'desserts', label: translations.menu_dessert[currentLang] },
    { id: 'boissons', label: translations.menu_boisson[currentLang] },
  ];

  const handleAddClick = (item: MenuItem) => {
    onAddToOrder(item);
    setJustAddedId(item.id);
    setTimeout(() => {
      setJustAddedId((curr) => curr === item.id ? null : curr);
    }, 2000);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setJustChefSpecials(false);
    setJustWoodFired(false);
    setSpicinessFilter('any');
  };

  // Memoized filtered catalog
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Quick Search queries
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesFr = item.name_fr.toLowerCase().includes(query) || item.desc_fr.toLowerCase().includes(query);
        const matchesEn = item.name_en.toLowerCase().includes(query) || item.desc_en.toLowerCase().includes(query);
        const matchesTags = (currentLang === 'fr' ? item.tags_fr : item.tags_en).some(tag => tag.toLowerCase().includes(query));
        if (!matchesFr && !matchesEn && !matchesTags) {
          return false;
        }
      }

      // Chef specials toggle
      if (justChefSpecials && !item.isChefSpecial) {
        return false;
      }

      // Flame/wood fired toggle
      if (justWoodFired && !item.isWoodFired) {
        return false;
      }

      // Spiciness level
      if (spicinessFilter === 'none' && item.spicyLevel && item.spicyLevel > 0) {
        return false;
      }
      if (spicinessFilter === 'spicy' && (!item.spicyLevel || item.spicyLevel < 1)) {
        return false;
      }

      return true;
    });
  }, [activeCategory, searchQuery, justChefSpecials, justWoodFired, spicinessFilter, currentLang]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-coal immersive-gradient relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-3.5">
            <div className="w-12 h-[1px] bg-ember"></div>
            <span className="text-xs font-bold text-gold tracking-widest uppercase font-sans">
              Gastronomie et Saveurs
            </span>
            <div className="w-12 h-[1px] bg-ember"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-display font-light">
            {translations.menu_title[currentLang]}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            {translations.menu_subtitle[currentLang]}
          </p>
        </div>

        {/* Dynamic Controls Grid: Search Input & Category Links */}
        <div className="space-y-6 bg-[#181614] border border-white/5 p-6 rounded-2xl shadow-xl mb-12">
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input Box */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                id="menu-search-input"
                type="text"
                placeholder={translations.search_placeholder[currentLang]}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-coal border border-zinc-800 focus:outline-none focus:border-gold text-white text-xs transition-colors"
              />
            </div>

            {/* Quick Special tags toggle checkboxes */}
            <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
              {/* Chef Special Toggle */}
              <button
                id="filter-chef"
                onClick={() => setJustChefSpecials(!justChefSpecials)}
                className={`py-1.5 px-3.5 rounded-full text-xs font-medium border flex items-center space-x-1.5 transition-all focus:outline-none cursor-pointer ${
                  justChefSpecials
                    ? 'bg-gold border-gold text-coal'
                    : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{translations.menu_chef_special[currentLang]}</span>
              </button>

              {/* Wood Fired Toggle */}
              <button
                id="filter-wood"
                onClick={() => setJustWoodFired(!justWoodFired)}
                className={`py-1.5 px-3.5 rounded-full text-xs font-medium border flex items-center space-x-1.5 transition-all focus:outline-none cursor-pointer ${
                  justWoodFired
                    ? 'bg-ember border-ember text-white'
                    : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>{translations.menu_wood_fired[currentLang]}</span>
              </button>

              {/* Spicy toggle dial */}
              <div className="flex rounded-full border border-zinc-800 overflow-hidden bg-coal">
                <button
                  id="filter-spicy-any"
                  onClick={() => setSpicinessFilter('any')}
                  className={`px-3 py-1.5 text-xs transition-colors focus:outline-none cursor-pointer ${
                    spicinessFilter === 'any' ? 'bg-zinc-700 text-white font-medium' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Tous
                </button>
                <button
                  id="filter-spicy-none"
                  onClick={() => setSpicinessFilter('none')}
                  className={`px-3 py-1.5 text-xs transition-colors focus:outline-none cursor-pointer ${
                    spicinessFilter === 'none' ? 'bg-zinc-700 text-white font-medium' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Doux
                </button>
                <button
                  id="filter-spicy-hot"
                  onClick={() => setSpicinessFilter('spicy')}
                  className={`px-3 py-1.5 text-xs transition-colors focus:outline-none cursor-pointer ${
                    spicinessFilter === 'spicy' ? 'bg-ember/20 text-ember font-semibold' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Epices 🔥
                </button>
              </div>

              {/* Reset btn */}
              {(searchQuery || activeCategory !== 'all' || justChefSpecials || justWoodFired || spicinessFilter !== 'any') && (
                <button
                  id="btn-reset-filters"
                  onClick={handleResetFilters}
                  className="p-2 rounded-full border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white cursor-pointer transition-colors"
                  title="Réinitialiser"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Categories Tab Selector Links */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`btn-menu-tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide uppercase transition-all duration-200 focus:outline-none cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-wood text-gold border border-gold/40 shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Menu Items Grid Cards */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#181614] border border-white/5 rounded-2xl">
            <Info className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-lg font-heading text-white font-semibold">Aucun plat ne correspond</h3>
            <p className="text-zinc-400 text-sm mt-1 max-w-md mx-auto">
              Modifiez vos critères de recherche ou réinitialisez les filtres pour explorer le grand menu de la braise.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 px-4 py-2 rounded-full bg-gold text-[#0A0908] font-bold text-xs uppercase cursor-pointer font-sans"
            >
              Voir Tout le Menu
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => {
              const isAdded = justAddedId === item.id;
              return (
                <div
                  key={item.id}
                  id={`menu-item-row-${item.id}`}
                  className="p-4 rounded-xl bg-[#181614] hover:bg-[#181614]/90 border border-white/5 hover:border-zinc-800 hover:shadow-lg transition-all duration-200 flex flex-col sm:flex-row gap-4 items-stretch group"
                >
                  {/* Photo Left panel */}
                  <div className="relative w-full sm:w-36 h-36 sm:h-auto rounded-lg overflow-hidden shrink-0 bg-coal select-none">
                    <img
                      src={item.image}
                      alt={currentLang === 'fr' ? item.name_fr : item.name_en}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {/* Hot Spice meter */}
                    {item.spicyLevel && item.spicyLevel > 0 ? (
                      <span className="absolute bottom-1.5 left-1.5 bg-black/60 px-1.5 py-0.5 rounded text-[8px] text-ember font-bold tracking-widest uppercase flex items-center space-x-0.5">
                        <Flame className="w-2.5 h-2.5 fill-current text-ember" />
                        <span>{'🔥'.repeat(item.spicyLevel)}</span>
                      </span>
                    ) : null}
                  </div>

                  {/* Descriptions Middle */}
                  <div className="flex-grow flex flex-col justify-between py-1">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between">
                        <h3 className="font-heading font-semibold text-base sm:text-lg text-white group-hover:text-gold transition-colors block max-w-[80%] leading-tight text-left">
                          {currentLang === 'fr' ? item.name_fr : item.name_en}
                        </h3>
                        <span className="font-heading font-extrabold text-sm sm:text-base text-gold shrink-0">
                          {item.price.toLocaleString('fr-FR')} <span className="text-[10px] font-sans font-normal">XAF</span>
                        </span>
                      </div>

                      <p className="text-zinc-400 text-xs sm:text-sm font-light leading-snug line-clamp-2 text-left">
                        {currentLang === 'fr' ? item.desc_fr : item.desc_en}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center mt-3 gap-2 pt-2 border-t border-white/5 justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {item.isChefSpecial && (
                          <span className="text-[9px] bg-gold/10 text-gold py-0.5 px-2 rounded font-sans border border-gold/10 uppercase tracking-wider font-bold">
                            Chef ★
                          </span>
                        )}
                        {item.isWoodFired && (
                          <span className="text-[9px] bg-ember/10 text-ember py-0.5 px-2 rounded font-sans border border-ember/10 uppercase tracking-wider font-bold">
                            Braise 🔥
                          </span>
                        )}
                        {(currentLang === 'fr' ? item.tags_fr : item.tags_en).slice(0, 2).map((tag, i) => (
                          <span key={i} className="text-[9px] bg-zinc-800 text-zinc-400 py-0.5 px-2 rounded font-sans">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Add button trigger */}
                      <button
                        id={`btn-menu-add-${item.id}`}
                        onClick={() => handleAddClick(item)}
                        className={`py-1.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-1 transition-all focus:outline-none cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-500 text-white'
                            : 'bg-zinc-800 hover:bg-gold hover:text-coal text-zinc-300'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <CheckCircle className="w-3.5 h-3.5 text-white" />
                            <span>Ajouté !</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>{translations.menu_btn_add[currentLang]}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
