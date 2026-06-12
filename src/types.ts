export type Language = 'fr' | 'en';

export interface TranslationSet {
  [key: string]: {
    fr: string;
    en: string;
  };
}

export interface MenuItem {
  id: string;
  name_fr: string;
  name_en: string;
  category: 'entrées' | 'plats' | 'accompagnements' | 'desserts' | 'boissons';
  price: number; // in FCFA
  desc_fr: string;
  desc_en: string;
  image: string; // URL
  tags_fr: string[];
  tags_en: string[];
  spicyLevel?: 0 | 1 | 2 | 3;
  isChefSpecial?: boolean;
  isWoodFired?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
  selectedSides?: string[];
}

export interface ReservationData {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  locationPref: 'salle' | 'terrasse' | 'salon-privé';
  specialRequests?: string;
  status: 'pending' | 'confirmed';
}

export interface BlogPost {
  id: string;
  title_fr: string;
  title_en: string;
  excerpt_fr: string;
  excerpt_en: string;
  content_fr: string;
  content_en: string;
  date: string;
  readTime: string;
  image: string;
  category_fr: string;
  category_en: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role_fr: string;
  role_en: string;
  text_fr: string;
  text_en: string;
  rating: number;
  avatar: string;
}

export interface LocalEvent {
  id: string;
  title_fr: string;
  title_en: string;
  desc_fr: string;
  desc_en: string;
  date: string;
  time: string;
  badge_fr: string;
  badge_en: string;
  image: string;
}
