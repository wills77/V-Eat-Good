import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Entrées
  {
    id: 'entree_1',
    name_fr: 'Crevettes Épicées de l’Estuaire',
    name_en: 'Estuary Spicy Shrimps',
    category: 'entrées',
    price: 8500,
    desc_fr: 'Crevettes sauvages fraîches de la baie d’Owendo, sautées au beurre de pili-pili maison et citronnelle sauvage.',
    desc_en: 'Fresh wild prawns caught in Owendo harbor, pan-fried in signature house bird’s eye chili butter and local lemongrass.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    tags_fr: ['Épicé', 'Chef Spécial'],
    tags_en: ['Spicy', 'Chef Special'],
    spicyLevel: 2,
    isChefSpecial: true
  },
  {
    id: 'entree_2',
    name_fr: 'Beignets Traditionnels de la SNI',
    name_en: 'Gabon Puff-Puff Skewers',
    category: 'entrées',
    price: 3500,
    desc_fr: 'Duo de gâteaux (beignets de farine levés) ultra-moelleux servis tièdes avec notre sauce de piment doux fumé.',
    desc_en: 'Puff-puffs skewered and served warm with a side of sweet-smoky pepper dip.',
    image: 'https://images.unsplash.com/photo-1530610476181-d83430964cbb?auto=format&fit=crop&w=800&q=80',
    tags_fr: ['Traditionnel'],
    tags_en: ['Traditional'],
    spicyLevel: 1
  },
  {
    id: 'entree_3',
    name_fr: 'Salade d’Avocats & Mangue d’Owendo',
    name_en: 'Owendo Avocado & Mango Salad',
    category: 'entrées',
    price: 5500,
    desc_fr: 'Avocats crémeux, dés de mangue mûre de l’Estuaire, cœurs de palmier frais d’Okala et vinaigrette parfumée au miel sauvage.',
    desc_en: 'Creamy local avocado cubes, ripe estuary mango, tender palm hearts, tossed in wild rainforest honey mustard dressing.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    tags_fr: ['Frais', 'Végétarien'],
    tags_en: ['Fresh', 'Vegetarian'],
    spicyLevel: 0
  },
  {
    id: 'entree_4',
    name_fr: 'Atanga Grillée à la Braise (Saison)',
    name_en: 'Charcoal Roasted Atanga (Seasonal)',
    category: 'entrées',
    price: 4500,
    desc_fr: 'Quatre poires de brousse atangas d’Owendo braisées au charbon de bois de okoumé, assaisonnées au sel indigène pilé.',
    desc_en: 'Four Gabon bush pears (atanganas) roasted in wood-coals, served traditional with a pinch of native forest salts.',
    image: 'https://images.unsplash.com/photo-1604085572504-a392ddf0b8b8?auto=format&fit=crop&w=800&q=80', // green olives/avocado lookalike
    tags_fr: ['Authentique', 'Végétarien'],
    tags_en: ['Authentic', 'Vegetarian'],
    isWoodFired: true,
    spicyLevel: 0
  },

  // Plats Principaux
  {
    id: 'plat_1',
    name_fr: 'Poulet Nyembwé Prestige',
    name_en: 'Royal Nyembwe Chicken',
    category: 'plats',
    price: 13500,
    desc_fr: 'Plat national gabonais par excellence. Poulet fermier de l’arrière-pays cuit lentement dans une sauce onctueuse de noix de palme fraîches.',
    desc_en: "Gabon's national master plate. Roaming local chicken slow-simmered in a rich, buttery traditional palm-nut reduction.",
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    tags_fr: ['Incontournable', 'Mijoté'],
    tags_en: ['Timeless', 'Slow-cooked'],
    isChefSpecial: true,
    spicyLevel: 1
  },
  {
    id: 'plat_2',
    name_fr: 'Bar Braisé Maison (1er Choix)',
    name_en: 'Signature Braised Sea Bass',
    category: 'plats',
    price: 14500,
    desc_fr: 'Bar entier pêché le matin à Owendo, mariné aux épices de notre terroir et grillé à la braise de bois précieux. Un régal croustillant.',
    desc_en: 'Whole fresh sea bass from Owendo fish market, dry-rubbed in house native spices, charbroiled over premium hot log fire.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    tags_fr: ['Best-seller', 'Feu de bois'],
    tags_en: ['Best-seller', 'Woodfired'],
    isWoodFired: true,
    spicyLevel: 1
  },
  {
    id: 'plat_3',
    name_fr: 'Kélélér de Poulet au Feu de Bois',
    name_en: 'Smoked Woodfire BBQ Chicken',
    category: 'plats',
    price: 11000,
    desc_fr: 'Demi-poulet fermier mariné 24h avec huile d’arachide native, gingembre de forêt et oignons grillés, cuit en direct sur la braise.',
    desc_en: 'Half free-range chicken hand-rubbed for 24 hours with local ginger, native seed oil, flame-kissed to crunchy perfection.',
    image: 'https://images.unsplash.com/photo-1598507020038-19524093910c?auto=format&fit=crop&w=800&q=80',
    tags_fr: ['Grillade', 'Populaire'],
    tags_en: ['Grilled', 'Popular'],
    isWoodFired: true,
    spicyLevel: 1
  },
  {
    id: 'plat_4',
    name_fr: 'Travers de Bœuf Fumé & Grillé',
    name_en: 'Smoked & Braised Beef Ribs',
    category: 'plats',
    price: 16500,
    desc_fr: 'Travers de bœuf tendres d’une qualité prestige, fumés lentement aux bois précieux du Gabon puis saisis à la braise vive de barbecue.',
    desc_en: 'Elite selection beef short ribs, gently smoked in local wood smoke, then glazed on glowing embers with sweet pepper honey.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags_fr: ['Prestige', 'Tendre'],
    tags_en: ['Premium', 'Tender'],
    isWoodFired: true,
    spicyLevel: 2
  },
  {
    id: 'plat_5',
    name_fr: 'Chèvre (Cabri) Grillée à l’Owendoise',
    name_en: 'Gabonese BBQ Roast Goat',
    category: 'plats',
    price: 12500,
    desc_fr: 'Viande de chèvre marinée au sel de mer de l’Estuaire et ail des bois, rôtie lentement à la broche au-dessus des braises d’okoumé.',
    desc_en: 'Tender premium goat cuts marinated with estuary salt, slowly roasted on spitfire skewers of okoumé timber wood.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', // grill skewered meat
    tags_fr: ['Traditionnel', 'Fort en goût'],
    tags_en: ['Heritage', 'Rich Flavor'],
    isWoodFired: true,
    spicyLevel: 2
  },
  {
    id: 'plat_6',
    name_fr: 'Gambas de l’Estuaire au Beurre de Crabe',
    name_en: 'Estuary King Gambas in Crab Butter',
    category: 'plats',
    price: 18000,
    desc_fr: 'Splendides gambas tigrées du Gabon saisies sur plancha feu de bois, nappées d’élégant beurre rouge de crabe de palétuvier.',
    desc_en: 'Gargantuan tiger prawns of Gabon caught in local mangroves, grilled flat-top and finished with premium wild crab oil sauce.',
    image: 'https://images.unsplash.com/photo-1559737605-de6a175af482?auto=format&fit=crop&w=800&q=80',
    tags_fr: ['Luxe', 'Fruits de mer'],
    tags_en: ['Luxury', 'Seafood'],
    isChefSpecial: true,
    spicyLevel: 1
  },

  // Accompagnements
  {
    id: 'acc_1',
    name_fr: 'Bâton de Maniac Traditionnel IPP (Bobolo)',
    name_en: 'Authentic Steamed Cassava Roll',
    category: 'accompagnements',
    price: 1500,
    desc_fr: 'Manioc fermenté enveloppé traditionnellement dans une feuille de bananier et cuit à la vapeur. L’accompagnement indispensable du Nyembwé.',
    desc_en: 'Cultured local cassava paste wrapped tight in high-mountain banana leaves and steamed. Dynamic pairing for hot Nyembwe sauces.',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80',
    tags_fr: ['Local', 'Sans gluten'],
    tags_en: ['Native', 'Gluten Free']
  },
  {
    id: 'acc_2',
    name_fr: 'Bananes Plantains Frites (Alloco)',
    name_en: 'Alloco (Fried Ripe Plantain)',
    category: 'accompagnements',
    price: 2000,
    desc_fr: 'Rondelles de bananes plantains mûres dorées et caramélisées dans notre huile de coco fine.',
    desc_en: 'Sweet ripe plantain chunks fried golden and caramel-edged in natural light coconut oils.',
    image: 'https://images.unsplash.com/photo-1564844534839-a04a62245eed?auto=format&fit=crop&w=800&q=80',
    tags_fr: ['Indispensable', 'Sucré-salé'],
    tags_en: ['Legendary', 'Sweet-Salty'],
    isChefSpecial: true
  },
  {
    id: 'acc_3',
    name_fr: 'Feuilles de Manioc au Jus de Palme',
    name_en: 'Saka-Saka (Cassava Leaves Stew)',
    category: 'accompagnements',
    price: 3000,
    desc_fr: 'Feuilles de manioc pilées cuites pendant 4 heures dans un jus onctueux de noix de palme fraîches et poudrées de crevettes sèches.',
    desc_en: 'Crushed cassava leaves cooked in palm grease with sweet peppers, dusted with light smoked shrimp seasoning.',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80', // green stew look
    tags_fr: ['Traditionnel'],
    tags_en: ['Heritage']
  },
  {
    id: 'acc_4',
    name_fr: 'Frites de Patate Douce de la SNI',
    name_en: 'Owendo Sweet Potato Fries',
    category: 'accompagnements',
    price: 2500,
    desc_fr: 'Frites croustillantes de patates douces récoltées à Libreville, assaisonnées au piment de Cayenne moulu.',
    desc_en: 'Crisp golden local sweet potato wedges sprinkled with fine ocean salt and home cayenne spices.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    tags_fr: ['Amis des enfants'],
    tags_en: ['Kid Friendly']
  },

  // Desserts
  {
    id: 'dessert_1',
    name_fr: 'Carpaccio de Fruits Tropicaux & Hibiscus',
    name_en: 'Spiced Hibiscus Tropical Fruit Platter',
    category: 'desserts',
    price: 4500,
    desc_fr: 'Fines tranches d’ananas de kango, mangue de l’Estuaire et papaye sauvage, arrosées d’un réduction sirop de Bissap et cardamome.',
    desc_en: 'Paper-thin sheets of rainforest pineapple, honey mango and papaya, drizzled with a rich red hibiscus flower and cardamon reduction.',
    image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=800&q=80',
    tags_fr: ['Super Léger', 'Frais'],
    tags_en: ['Super Light', 'Fresh'],
    isChefSpecial: true
  },
  {
    id: 'dessert_2',
    name_fr: 'Fondant Chocolat-Café de Forêt',
    name_en: 'Equatorial Cocoa-Coffee Melt',
    category: 'desserts',
    price: 5500,
    desc_fr: 'Cœur coulant de chocolat équatorial gabonais (85% cacao), relevé de grains concassés de café sauvage du Gabon et sa glace vanille Bourbon.',
    desc_en: 'Hot oozing dark cake made from artisanal Gabon single-origin cacao (85%), spiked with local roasted coffee bits, served with premium vanilla scoop.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    tags_fr: ['Gourmand', 'Chaud-Froid'],
    tags_en: ['Rich indulgence', 'Hot & Cold']
  },

  // Boissons
  {
    id: 'boisson_1',
    name_fr: 'Bissap Rouge Royal Impérial',
    name_en: 'Royal Ruby Bissap Infusion',
    category: 'boissons',
    price: 2500,
    desc_fr: 'Infusion glacée de fleurs de calices d’hibiscus, feuille de menthe fraîche poivrée, gousses de vanille de brousse et zeste d’orange.',
    desc_en: 'Ice cold elixir of steeped deep-red hibiscus sepals, infused with wild garden mint, local vanilla beans, and citrus accents.',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80',
    tags_fr: ['Fait maison', 'Sans alcool'],
    tags_en: ['Crafted house-made', 'Virgin']
  },
  {
    id: 'boisson_2',
    name_fr: 'Élixir de Gingembre & Miel Sauvage',
    name_en: 'Forest Honey Ginger Cold Press',
    category: 'boissons',
    price: 2500,
    desc_fr: 'Pur jus de racine de gingembre de l’arrière-pays pressé à froid, sucré délicieusement au miel pur sauvage de forêt équatoriale.',
    desc_en: 'Potent and spicy dynamic squeeze of ginger root, naturally sweetened with pure organic, untamed dark equatorial forest honey.',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
    tags_fr: ['Énergisant', 'Sans alcool'],
    tags_en: ['Revitalizing', 'Virgin']
  },
  {
    id: 'boisson_3',
    name_fr: 'Cocktail Owendo Gold Sunrise',
    name_en: 'Owendo Gold Sunrise Cocktail',
    category: 'boissons',
    price: 6500,
    desc_fr: 'Rhum ambré guadeloupéen, liqueur amère locale, jus frais de mangue et fruit de la passion pressé, sirop de canne et braises fumantes d’arôme.',
    desc_en: 'Premium aged rum, local herbal bitters, nectar of hand-squeezed orchard mango and yellow passion fruit, sugarcane reduction, smoke garnished.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    tags_fr: ['Alcoolisé', 'Signature Cocktail'],
    tags_en: ['Contains Alcohol', 'Signature Cocktail'],
    isChefSpecial: true
  }
];
