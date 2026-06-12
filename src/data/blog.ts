import { BlogPost, Testimonial, LocalEvent } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'post_1',
    title_fr: 'Les Secrets d’une Sauce Nyembwé Royale',
    title_en: 'Secrets of a Royal Nyembwe Gravy',
    excerpt_fr: 'Chef Euloge nous livre les secrets ancestraux de la sélection et du pilage des noix de palme.',
    excerpt_en: 'Chef Euloge lifts the veil on the ancestral art of picking and grinding perfect wild palm nuts.',
    content_fr: `Le Poulet Nyembwé est bien plus qu’un plat national au Gabon : c’est notre âme culinaire. Pour obtenir une texture veloutée et un parfum profond, tout réside dans la fraîcheur des "noix du palmier". 

Chez V’Eat Good à SNI Owendo, nous refusons d’utiliser le concentré industriel. Nos mamas partenaires sélectionnent les grappes mures de palme sauvage le matin. Après lavage, elles sont bouillies puis pilées minutieusement dans un grand mortier en bois précieux pour isoler la pulpe charnue. Ce jus rouge ardent est ensuite réduit pendant 3 heures avec de l’oignon rouge de forêt, des aillets locaux et une pointe de piquant secret.

Découvrez cette onctuosité authentique tous les midis dans notre salon d’Owendo.`,
    content_en: `Nyembwe Chicken is far more than a staple plate in Gabon: it is our culinary bloodline. To secure that buttery rich velvet texture and deep traditional forest perfume, it all scales down to the "palm-nuts" extraction process.

At V’Eat Good in SNI Owendo, we strictly forbid mass-produced canned palm puree. Our partner farm mamas select wild, heavy prime oil-palm bunches at pre-dawn. After a hard rinsing, they are boiled and hammered inside an authentic heavy redwood mortar. This warm, flame-colored nectar is then reduced for 3 hours with deep red jungle garlic, forest shallots, and our secret touch of localized heat.

Taste this authentic majesty every midday at our cozy Owendo tables.`,
    date: '2026-06-10',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    category_fr: 'Tradition',
    category_en: 'Heritage'
  },
  {
    id: 'post_2',
    title_fr: 'La Science du Bois d’Okoumé pour nos Grillades à la Braise',
    title_en: 'The Physics of Okoumé Timber Wood Smoked Grilling',
    excerpt_fr: 'Plongez dans l’art complexe de choisir le bon bois de chauffe pour parfumer le bar frais grillé.',
    excerpt_en: 'Unpack the complex physics of selecting fine logs to smoke and finish our signature Sea Bass.',
    content_fr: `Une superbe grillade de poisson à la Gabonaise ne s’improvise pas sur n’importe quel charbon. Le choix de l’essence de bois est primordial.

Chez V’Eat Good, notre sainte trinité repose sur le bois d’okoumé et de padouk séché sous le climat d’Owendo. L’okoumé fournit des braises constantes, sans projection, avec un rayonnement thermique doux et uniforme idéal pour cuire lentement à l’arête nos gros bars frais. Quant au bois de campêche, il dégage en fin de cuisson une fumée parfumée et dorée qui caramélise délicieusement la peau croustillante sans en masquer le goût iodé naturel.

Venez admirer nos maîtres grills s'activer sur ce feu de bois sacré !`,
    content_en: `An extraordinary traditional Gabonese fish barbecue does not simply happen over casual coal. The structural essence of the wood selection is absolutely crucial.

At V’Eat Good, our charcoal masterwork relies on a strict combination of okoumé and padouk hardwoods, cured for months in the tropical sea-air of Owendo. The dense okoumé wood offers highly predictable, spark-free heat logs with a generous, uniform fire output that slow-cooks the fleshy sea bass deep to the bone. Meanwhile, wild log smokes add sweet vanilla aromatic overlays in the final minutes, coloring the crisp skin while respecting the natural ocean flavor.

Join us on our open deck to watch our braise artists control this sacred fire!`,
    date: '2026-06-05',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    category_fr: 'Grillades',
    category_en: 'Grilling'
  },
  {
    id: 'post_3',
    title_fr: 'Le Bâton de Manioc : De la Terre Gabonaise à l’Assiette',
    title_en: 'The Cassava Baton: From Rainforest Soil to Your Plate',
    excerpt_fr: 'La fabrication éprouvée par le temps de cet accompagnement incontournable et sans gluten.',
    excerpt_en: 'The time-honored artisanal process behind our gluten-free botanical bread.',
    content_fr: `Idéal pour éponger la sauce Nyembwé ou accompagner le poisson braisé croustillant, le bâton de manioc (connu localement sous divers noms comme le bobolo) est un miracle de la fermentation végétale équatoriale.

Il demande plusieurs jours de préparation : le manioc est d’abord trempé dans de l’eau douce pour l’adoucir, puis débarrassé de ses résidus filandreux, écrasé en pâte fine, et fermenté. Cette racine saine est ensuite moulée dans des feuilles de bananier serrées avec de fines cordes naturelles avant de cuire doucement à la vapeur. Le produit final est translucide, élastique et a un délicieux goût acidulé.`,
    content_en: `Perfect to wipe down heavy Nyembwe sauces or accompany crunchy braised whole sea bass, our cassava roll (known locally as Bobolo) is a direct miracle of equatorial botanical fermentation.

This staple bread requires several days of intense physical labor: harvesting, river-soaking to extract the wild starch, stringy fiber pulling, heavy mashing, and 3 days of natural fermentation. The rich dough is then packed densely into organic wild-green banana leaf wraps, tied with forest threads, and steamed. The final cake is translucent, elastic, with a pleasant acid sourdough pinch.`,
    date: '2026-05-28',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80',
    category_fr: 'Produits Locaux',
    category_en: 'Ingredients'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't_1',
    name: 'Christian Ndong',
    role_fr: 'Critique culinaire - Libreville Gourmand',
    role_en: 'Culinary Reviewer - Libreville Gourmand',
    text_fr: "La cuisson du poisson braisé chez V’Eat Good est une merveille absolue. Le goût fumé est parfaitement équilibré sans jamais effacer la fraîcheur du bar d’Owendo. L’accueil gabonais y est tout simplement royal !",
    text_en: "The whole sea bass grilling at V’Eat Good is an absolute sensation. The woodfired smoke flavor is exquisitely soft, never masking the pristine sea freshness of the fish. Outstanding premium local hospitality!",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't_2',
    name: 'Sarah Boussamba',
    role_fr: 'Gastronome & Directrice SNI',
    role_en: 'Food Connoisseur & Director',
    text_fr: "Le Poulet Nyembwé m'a rappelé le village de mon enfance, mais avec une présentation moderne magnifique digne d’un 5 étoiles de Paris. Un haut lieu de notre gastronomie à Owendo, je recommande les yeux fermés.",
    text_en: "Their Nyembwe Chicken triggered vibrant childhood village memories, but reimagined in a gorgeous 5-star fine-dining plating. An elite cultural temple of high gastronomy in Owendo. Highest recommendation.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't_3',
    name: 'Robert Hastings',
    role_fr: 'Voyageur d’affaire international (Londres)',
    role_en: 'International Corporate Traveler (London)',
    text_fr: "Quelle claque gustative ! J'ai découvert le bâton de manioc sur les travers de bœuf braisés au feu de bois. Les cocktails signatures à base de jus de gingembre et canne font sensation. L'équipe parle anglais couramment.",
    text_en: "Unbelievable culinary experience. Loved combining the cassava baton with the mahogany smoked beef ribs. Highly recommend their signature ginger honey cocktails. The service is friendly, polished, and fully bilingual.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  }
];

export const localEvents: LocalEvent[] = [
  {
    id: 'event_1',
    title_fr: 'Les Vendredis Live Afro-Jazz',
    title_en: 'Afro-Jazz & Braised Friday Nights',
    desc_fr: 'Dégustez nos fameux bars et cabris à la braise au son velouté des artistes locaux de rumba et de jazz gabonais.',
    desc_en: 'Savor roasted sea bass and prime goat ribs while floating on authentic live rumba and modern Gabonese soul music.',
    date: 'Chaque Vendredi soir',
    time: '20:00 - 23:30',
    badge_fr: 'Musique Live & Buffet',
    badge_en: 'Live Vibes & Buffet',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80'
  }
];
