import type { Product } from '../types';

export const CATEGORIES = [
  'Todos',
  'Limpiadores',
  'Tónicos & Esencias',
  'Sérums',
  'Hidratantes',
  'Protector Solar',
  'Mascarillas',
  'Ojos & Labios',
  'Dispositivos & Sets'
] as const;

export const SKIN_TYPES = [
  'Todos',
  'Piel Grasa/Mixta',
  'Piel Seca',
  'Piel Sensible/Rojeces',
  'Tendencia al Acné',
  'Antimanchas'
] as const;

export const PRODUCTS: Product[] = [
  {
    "id": 1,
    "brand": "CELIMAX",
    "title": "The Real Noni Energy Ampoule",
    "category": "Sérums",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces",
      "Antimanchas"
    ],
    "compatibility": "Piel fatigada / Vitalidad",
    "price": 38.19,
    "image": "./images/products/celimax-ampolla-noni.jpg",
    "gallery": [
      "./images/products/celimax-ampolla-noni.jpg"
    ],
    "attributes": [
      "Noni 71.77%",
      "Superalimento",
      "Revitalizante"
    ],
    "ingredients": "Extracto de fruto de Noni al 71.77%, aceite de semilla de Noni, ceramidas y adenosina.",
    "benefits": "Concentrado con más de 200 nutrientes botánicos y antioxidantes que restauran la energía, elasticidad y luminosidad de la piel opaca y deshidratada.",
    "use": "Aplica de 2 a 3 gotas sobre rostro y cuello con suaves presiones después del tónico."
  },
  {
    "id": 2,
    "brand": "CELIMAX",
    "title": "Oil Control Light Cream (80ml)",
    "category": "Hidratantes",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Control de brillo / Piel Grasa",
    "price": 34.3,
    "image": "./images/products/celimax-oil-control-cream-80ml-.jpg",
    "gallery": [
      "./images/products/celimax-oil-control-cream-80ml-.jpg"
    ],
    "attributes": [
      "Sin Aceites",
      "Fórmula Ligera",
      "Control Sebo"
    ],
    "ingredients": "Extracto de corteza de sauce blanco, agua de bambú y complejo sebo-regulador patentado.",
    "benefits": "Crema en gel refrescante que hidrata profundamente sin aportar pesadez ni brillos, regulando la sobreproducción sebácea durante todo el día.",
    "use": "Aplica sobre el rostro limpio como paso de hidratación mañana y noche."
  },
  {
    "id": 3,
    "brand": "CELIMAX",
    "title": "Control Light Sunscreen SPF 50+ (40ml)",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Piel Grasa / Acabado Ligero",
    "price": 29.61,
    "image": "./images/products/celimax-control-light-sunscreen-40ml-.jpg",
    "gallery": [
      "./images/products/celimax-control-light-sunscreen-40ml-.jpg"
    ],
    "attributes": [
      "SPF 50+ PA++++",
      "Sin efecto blanco",
      "Acabado Mate"
    ],
    "ingredients": "Filtros UV orgánicos fotoestables, niacinamida y complejo botánico matificante.",
    "benefits": "Protector solar químico ultraligero de rápida absorción que protege contra rayos UVA/UVB mientras matifica la zona T.",
    "use": "Aplica generosamente en rostro y cuello 15 minutos antes de la exposición solar."
  },
  {
    "id": 4,
    "brand": "CELIMAX",
    "title": "Mattifying Sun Stick SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Reaplicable / Mate suave",
    "price": 30.13,
    "image": "./images/products/celimax-mattifying-sun-stick.jpg",
    "gallery": [
      "./images/products/celimax-mattifying-sun-stick.jpg"
    ],
    "attributes": [
      "Formato Barra",
      "Fácil reaplicación",
      "Control brillos"
    ],
    "ingredients": "Micro polvos de sílice absorbentes de sebo, centella asiática y extracto de té verde.",
    "benefits": "Protector solar en barra diseñado para reaplicar cómodamente sobre el maquillaje o piel limpia sin dejar textura pegajosa.",
    "use": "Desliza directamente por el rostro y cuello cada 2 a 3 horas."
  },
  {
    "id": 5,
    "brand": "CELIMAX",
    "title": "Retinol Booster Shot Tightening",
    "category": "Sérums",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Antimanchas"
    ],
    "compatibility": "Poros y Firmeza",
    "price": 34.78,
    "image": "./images/products/celimax-retinol-booster.jpg",
    "gallery": [
      "./images/products/celimax-retinol-booster.jpg"
    ],
    "attributes": [
      "Retinol puro",
      "Tensado de poros",
      "Antiedad"
    ],
    "ingredients": "Retinol estabilizado, péptidos tensores y extracto de té negro.",
    "benefits": "Suero intensivo que acelera la renovación celular, afina la textura cutánea y reduce la apariencia de poros dilatados y líneas finas.",
    "use": "Usa de noche. Comienza aplicando 2 veces por semana y aumenta progresivamente."
  },
  {
    "id": 6,
    "brand": "DR. ALTHEA",
    "title": "345 Relief Cream",
    "category": "Hidratantes",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Tendencia al Acné",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Calmante de Acné y Marcas",
    "price": 44.24,
    "image": "./images/products/dr-althea-345-cream.jpg",
    "gallery": [
      "./images/products/dr-althea-345-cream.jpg"
    ],
    "attributes": [
      "Fórmula 345",
      "Textura Gel Crema",
      "Anti-inflamatorio"
    ],
    "ingredients": "Resveratrol, centella asiática, pantenol, extracto de hibisco y ceramida NP.",
    "benefits": "Tratamiento viral multifuncional que alivia brotes de acné, atenúa cicatrices rojizas y nutre la barrera cutánea sin sensación grasa.",
    "use": "Aplica una capa delgada tras el sérum, mañana y noche."
  },
  {
    "id": 7,
    "brand": "DR. ALTHEA",
    "title": "Vitamin C Boosting Serum",
    "category": "Sérums",
    "skinTypes": [
      "Antimanchas",
      "Piel Seca"
    ],
    "compatibility": "Luminosidad / Tono uniforme",
    "price": 31.8,
    "image": "./images/products/dr-althea-vitamin-c-serum.jpg",
    "gallery": [
      "./images/products/dr-althea-vitamin-c-serum.jpg"
    ],
    "attributes": [
      "Vitamina C pura",
      "Antioxidante",
      "Antimanchas"
    ],
    "ingredients": "Derivado estable de vitamina C, ácido ferúlico y extracto de espino amarillo.",
    "benefits": "Ilumina la piel apagada, unifica el tono y protege frente a radicales libres que aceleran el envejecimiento prematuro.",
    "use": "Aplica de 3 a 4 gotas en la mañana antes del protector solar."
  },
  {
    "id": 8,
    "brand": "DR. ALTHEA",
    "title": "345 Calming Facial Mist",
    "category": "Tónicos & Esencias",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Piel Seca"
    ],
    "compatibility": "Bruma Calmante",
    "price": 34.1,
    "image": "./images/products/dr-althea-345-mist.jpg",
    "gallery": [
      "./images/products/dr-althea-345-mist.jpg"
    ],
    "attributes": [
      "Bruma ultrafina",
      "Efecto refrescante",
      "Anti-rojeces"
    ],
    "ingredients": "Extracto de centella asiática, pantenol y agua de rosas damascena.",
    "benefits": "Niebla hidratante microfina que calma la irritación al contacto y restaura la humedad perdida por el calor o aire acondicionado.",
    "use": "Rocía a 20 cm del rostro en cualquier momento del día."
  },
  {
    "id": 9,
    "brand": "DR. ALTHEA",
    "title": "Aqua Hydration Mist",
    "category": "Tónicos & Esencias",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Hidratación instantánea",
    "price": 32.1,
    "image": "./images/products/dr-althea-aqua-mist.jpg",
    "gallery": [
      "./images/products/dr-althea-aqua-mist.jpg"
    ],
    "attributes": [
      "Ácido Hialurónico",
      "Refrescante",
      "Sin alcohol"
    ],
    "ingredients": "Ácido hialurónico multimolecular y minerales oceánicos.",
    "benefits": "Aporta un golpe de hidratación acuosa profunda dejando la piel flexible y jugosa al instante.",
    "use": "Vaporiza sobre rostro y cuello tras la limpieza o sobre el maquillaje."
  },
  {
    "id": 10,
    "brand": "DR. ALTHEA",
    "title": "345 Relief Intensive Serum",
    "category": "Sérums",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Tendencia al Acné"
    ],
    "compatibility": "Reparación intensiva",
    "price": 29.97,
    "image": "./images/products/dr-althea-345-relief-serum.jpg",
    "gallery": [
      "./images/products/dr-althea-345-relief-serum.jpg"
    ],
    "attributes": [
      "Concentrado 345",
      "Rojeces y Marcas",
      "Ligero"
    ],
    "ingredients": "Complejo Relief 345, madecassoside y extracto de cúrcuma.",
    "benefits": "Suero concentrado que combate rojeces crónicas y calma la barrera sensibilizada por tratamientos abrasivos.",
    "use": "Aplica 1 a 2 goteros sobre las zonas más irritadas o en todo el rostro."
  },
  {
    "id": 11,
    "brand": "DR. ALTHEA",
    "title": "Salicylic Acid Clarifying Pad",
    "category": "Limpiadores",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Exfoliante suave BHA",
    "price": 38.51,
    "image": "./images/products/dr-althea-salicylic-acid-pad.jpg",
    "gallery": [
      "./images/products/dr-althea-salicylic-acid-pad.jpg"
    ],
    "attributes": [
      "BHA 2%",
      "Algodón doble textura",
      "Poros limpios"
    ],
    "ingredients": "Ácido salicílico al 2%, extracto de té verde y alantoína.",
    "benefits": "Discos pre-impregnados con ácido salicílico que eliminan impurezas acumuladas en los poros y suavizan la textura áspera.",
    "use": "Pasa un disco suavemente por el rostro limpio de 2 a 3 noches por semana."
  },
  {
    "id": 12,
    "brand": "DR. ALTHEA",
    "title": "Retinol Eye Roller Care",
    "category": "Ojos & Labios",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Contorno con aplicador frío",
    "price": 38.87,
    "image": "./images/products/dr-althea-retinol-eye-roller.jpg",
    "gallery": [
      "./images/products/dr-althea-retinol-eye-roller.jpg"
    ],
    "attributes": [
      "Aplicador metálico frío",
      "Retinol suave",
      "Descongestivo"
    ],
    "ingredients": "Retinol microencapsulado, cafeína y péptidos.",
    "benefits": "Tratamiento para ojeras y líneas de expresión con cabezal metálico roll-on que desinflama y activa la microcirculación.",
    "use": "Masajea suavemente el contorno de ojos en movimientos circulares de noche."
  },
  {
    "id": 13,
    "brand": "HARUHARU WONDER",
    "title": "Black Rice Pure Mineral Sunscreen SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Filtro 100% Mineral",
    "price": 36.53,
    "image": "./images/products/haruharu-wonder-black-mineral-sun.jpg",
    "gallery": [
      "./images/products/haruharu-wonder-black-mineral-sun.jpg"
    ],
    "attributes": [
      "Mineral / Físico",
      "Óxido de Zinc",
      "Arroz Negro"
    ],
    "ingredients": "Óxido de zinc no nano, extracto de arroz negro fermentado y ceramidas.",
    "benefits": "Protección solar 100% mineral que no irrita los ojos ni la piel reactiva, con acabado mate aterciopelado.",
    "use": "Aplica de manera uniforme sobre rostro y cuello por las mañanas."
  },
  {
    "id": 14,
    "brand": "HARUHARU WONDER",
    "title": "Black Rice Hyaluronic Botanical Mist",
    "category": "Tónicos & Esencias",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Antioxidante / Hidratante",
    "price": 33.39,
    "image": "./images/products/haruharu-wonder-black-mist.jpg",
    "gallery": [
      "./images/products/haruharu-wonder-black-mist.jpg"
    ],
    "attributes": [
      "Arroz Negro Fermentado",
      "Sin alcohol",
      "Bruma ultrafina"
    ],
    "ingredients": "Extracto de arroz negro fermentado, ácido hialurónico y extracto de bambú.",
    "benefits": "Protege contra el daño oxidativo y la polución, restaurando la hidratación con ácido hialurónico de origen vegetal.",
    "use": "Rocía sobre la piel limpia antes del sérum o a lo largo del día."
  },
  {
    "id": 15,
    "brand": "HARUHARU WONDER",
    "title": "Black Rice Moisture Airyfit Daily Sunscreen SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Seca",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Acabado invisible sedoso",
    "price": 36.53,
    "image": "./images/products/haruharu-wonder-black-rice-moisture-sun.jpg",
    "gallery": [
      "./images/products/haruharu-wonder-black-rice-moisture-sun.jpg"
    ],
    "attributes": [
      "Químico",
      "Zero White Cast",
      "Textura crema ligera"
    ],
    "ingredients": "Extracto de arroz negro fermentado, ceramida NP y filtros solares de última generación.",
    "benefits": "Fórmula de rápida absorción sin residuo graso ni blanco, enriquecida con nutrientes de arroz negro para una piel jugosa.",
    "use": "Aplica como paso final matutino."
  },
  {
    "id": 16,
    "brand": "HEIMISH",
    "title": "All Clean Lip Mask Care",
    "category": "Ojos & Labios",
    "skinTypes": [
      "Piel Seca"
    ],
    "compatibility": "Reparación de labios secos",
    "price": 19.35,
    "image": "./images/products/heimish-heimish-lip-mask.jpg",
    "gallery": [
      "./images/products/heimish-heimish-lip-mask.jpg"
    ],
    "attributes": [
      "Manteca de Karité",
      "Mascarilla nocturna",
      "Nutrición"
    ],
    "ingredients": "Manteca de karité, ceramidas, extracto de bayas y aceites botánicos.",
    "benefits": "Mascarilla balsámica rica que nutre y repara labios agrietados durante la noche, dejándolos suaves y con volumen al despertar.",
    "use": "Aplica generosamente en los labios antes de dormir o durante el día como bálsamo."
  },
  {
    "id": 17,
    "brand": "MEDICUBE",
    "title": "Zero Pore Pad 2.0 (70 Discos)",
    "category": "Limpiadores",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Control de poros y textura",
    "price": 38.5,
    "image": "./images/products/medicube-zero-pore-pad.jpg",
    "gallery": [
      "./images/products/medicube-zero-pore-pad.jpg"
    ],
    "attributes": [
      "AHA + BHA",
      "Anti-sebo patentado",
      "Doble cara"
    ],
    "ingredients": "Complejo Anti Sebum P patentado, ácido salicílico y extractos de frutas botánicas.",
    "benefits": "Discos exfoliantes que reducen visiblemente el diámetro de los poros, remueven células muertas y regulan la producción de grasa.",
    "use": "Pasa el lado rugoso por el rostro limpio y luego el suave para alisar."
  },
  {
    "id": 18,
    "brand": "MEDICUBE",
    "title": "Collagen Night Wrapping Mask (75ml)",
    "category": "Mascarillas",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Efecto tensor / Colágeno",
    "price": 40.26,
    "image": "./images/products/medicube-collagen-mask-75ml.jpg",
    "gallery": [
      "./images/products/medicube-collagen-mask-75ml.jpg"
    ],
    "attributes": [
      "Película protectora",
      "Triple Colágeno",
      "Efecto tensor"
    ],
    "ingredients": "Triple colágeno soluble, elastina hidrolizada y ácido hialurónico.",
    "benefits": "Crea una película invisible que sella la hidratación y los activos en la piel durante la noche, devolviendo firmeza y elasticidad.",
    "use": "Aplica una capa uniforme como paso final nocturno. Retira la película despegándola por la mañana."
  },
  {
    "id": 19,
    "brand": "MEDICUBE",
    "title": "Deep Vita C Cream",
    "category": "Hidratantes",
    "skinTypes": [
      "Antimanchas",
      "Piel Seca"
    ],
    "compatibility": "Aclarante de manchas",
    "price": 48.61,
    "image": "./images/products/medicube-vitamin-c-cream.jpg",
    "gallery": [
      "./images/products/medicube-vitamin-c-cream.jpg"
    ],
    "attributes": [
      "Vitamina C concentrada",
      "Efecto glow",
      "Antioxidante"
    ],
    "ingredients": "Vitamina C pura al 6.5%, alfa-arbutina y niacinamida.",
    "benefits": "Crema intensiva antimanchas que combate la hiperpigmentación, pecas del sol y tono desigual aportando luminosidad duradera.",
    "use": "Aplica sobre manchas localizadas o en todo el rostro en la rutina de mañana o noche."
  },
  {
    "id": 20,
    "brand": "MEDICUBE",
    "title": "PDRN Pink Peptide Serum",
    "category": "Sérums",
    "skinTypes": [
      "Antimanchas",
      "Piel Seca"
    ],
    "compatibility": "Regenerador celular / PDRN",
    "price": 34.9,
    "image": "./images/products/medicube-pdrn-pink-serum.jpg",
    "gallery": [
      "./images/products/medicube-pdrn-pink-serum.jpg"
    ],
    "attributes": [
      "PDRN Salmón",
      "Péptidos rosados",
      "Elasticidad"
    ],
    "ingredients": "PDRN de salmón purificado, complejo de 5 péptidos y niacinamida.",
    "benefits": "Fórmula de dermatología avanzada que estimula la regeneración del colágeno, tensa la piel y suaviza cicatrices y líneas marcadas.",
    "use": "Distribuye de 2 a 3 gotas en rostro y cuello con toquecitos."
  },
  {
    "id": 21,
    "brand": "MEDICUBE",
    "title": "Collagen Lip Care Cream",
    "category": "Ojos & Labios",
    "skinTypes": [
      "Piel Seca"
    ],
    "compatibility": "Volumen y nutrición labial",
    "price": 47.22,
    "image": "./images/products/medicube-collagen-lip-cream.jpg",
    "gallery": [
      "./images/products/medicube-collagen-lip-cream.jpg"
    ],
    "attributes": [
      "Colágeno marino",
      "Efecto relleno",
      "Hidratación 24h"
    ],
    "ingredients": "Colágeno hidrolizado, péptidos voluminizadores y manteca de cacao.",
    "benefits": "Crema labial enriquecida con colágeno que rellena líneas finas en los labios devolviendo suavidad y tersura.",
    "use": "Aplica con la yema del dedo sobre los labios cuando sea necesario."
  },
  {
    "id": 22,
    "brand": "MEDICUBE",
    "title": "TXA Tranexamic Acid + Niacinamide Cream",
    "category": "Hidratantes",
    "skinTypes": [
      "Antimanchas",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Melasma y manchas resistentes",
    "price": 45.55,
    "image": "./images/products/medicube-txa-niacinamide-cream.jpg",
    "gallery": [
      "./images/products/medicube-txa-niacinamide-cream.jpg"
    ],
    "attributes": [
      "Ácido Tranexámico",
      "Niacinamida 5%",
      "Unifica tono"
    ],
    "ingredients": "Ácido tranexámico, niacinamida al 5% y glutatión.",
    "benefits": "Eficaz tratamiento para manchas persistentes, melasma y marcas oscuras post-acné, bloqueando la transferencia de pigmento.",
    "use": "Aplica como crema hidratante día y noche."
  },
  {
    "id": 23,
    "brand": "MEDICUBE",
    "title": "Acid Hipocloroso Calming Cream",
    "category": "Hidratantes",
    "skinTypes": [
      "Tendencia al Acné",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Acné activo y dermatitis",
    "price": 37.07,
    "image": "./images/products/medicube-acid-hipocloroso-cream.webp",
    "gallery": [
      "./images/products/medicube-acid-hipocloroso-cream.webp"
    ],
    "attributes": [
      "Ácido Hipocloroso",
      "Antibacteriano",
      "Calmante"
    ],
    "ingredients": "Ácido hipocloroso estabilizado, centella asiática y zinc PCA.",
    "benefits": "Elimina las bacterias causantes del acné, alivia la irritación severa y acelera la cicatrización sin desequilibrar la flora cutánea.",
    "use": "Extiende suavemente sobre áreas con brotes o inflamación activa."
  },
  {
    "id": 24,
    "brand": "MEDICUBE",
    "title": "No Cast Just Glow Sunscreen SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Luminosidad / Acabado Glow",
    "price": 35.79,
    "image": "./images/products/medicube-no-cast-just-glow-sun.jpg",
    "gallery": [
      "./images/products/medicube-no-cast-just-glow-sun.jpg"
    ],
    "attributes": [
      "Acabado Jugoso",
      "Protección Total",
      "Sin rastro blanco"
    ],
    "ingredients": "Filtros químicos avanzados, niacinamida y complejo vitamínico.",
    "benefits": "Protector solar hidratante que confiere un acabado 'glass skin' radiante y natural sin dejar sensación grasosa.",
    "use": "Aplica como último paso de tu rutina de día."
  },
  {
    "id": 25,
    "brand": "MEDICUBE",
    "title": "AGE-R Booster Pro X2 (Dispositivo)",
    "category": "Dispositivos & Sets",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Dispositivo Profesional 6 en 1",
    "price": 608.4,
    "image": "./images/products/medicube-age-r-booster-pro-x2.jpg",
    "gallery": [
      "./images/products/medicube-age-r-booster-pro-x2.jpg"
    ],
    "attributes": [
      "Electroporación",
      "Microcorrientes",
      "Terapia LED"
    ],
    "ingredients": "Tecnología de electro-estimulación de microcorrientes y fototerapia LED de 5 colores.",
    "benefits": "Dispositivo de belleza profesional que multiplica por 500 la absorción de principios activos en capas profundas de la piel.",
    "use": "Usa 5 minutos diarios junto a tus sueros y cremas habituales."
  },
  {
    "id": 26,
    "brand": "MEDICUBE",
    "title": "AGE-R Booster Pro Mini",
    "category": "Dispositivos & Sets",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Dispositivo Portátil de Belleza",
    "price": 267.15,
    "image": "./images/products/medicube-age-r-booster-pro-mini.jpg",
    "gallery": [
      "./images/products/medicube-age-r-booster-pro-mini.jpg"
    ],
    "attributes": [
      "Portátil",
      "Booster de absorción",
      "Recargable USB"
    ],
    "ingredients": "Placa conductora hipoalergénica con pulsos de absorción dérmica.",
    "benefits": "Versión compacta y de viaje del afamado Booster Pro para mantener tu tratamiento de electroporación donde vayas.",
    "use": "Desliza en movimientos ascendentes durante 3 a 5 minutos al aplicar el sérum."
  },
  {
    "id": 27,
    "brand": "MEDICUBE",
    "title": "Body Wash Kojic Acid Clarifying",
    "category": "Limpiadores",
    "skinTypes": [
      "Antimanchas",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Acné y manchas corporales",
    "price": 35.1,
    "image": "./images/products/medicube-body-wash-acid-kojic.jpg",
    "gallery": [
      "./images/products/medicube-body-wash-acid-kojic.jpg"
    ],
    "attributes": [
      "Ácido Kójico",
      "AHA + BHA",
      "Espuma purificante"
    ],
    "ingredients": "Ácido kójico, ácido salicílico y extracto de árbol de té.",
    "benefits": "Gel limpiador corporal que combate granitos en espalda y pecho y desvanece manchas oscuras en zonas de roce.",
    "use": "Usa en la ducha masajeando las áreas deseadas y enjuaga con abundante agua."
  },
  {
    "id": 28,
    "brand": "MIXSOON",
    "title": "Bean Daily Suncream SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Seca",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Extracto de Soja / Ligero",
    "price": 24.97,
    "image": "./images/products/mixsoon-bean-suncream.jpg",
    "gallery": [
      "./images/products/mixsoon-bean-suncream.jpg"
    ],
    "attributes": [
      "Extracto de Soja",
      "Efecto hidratante",
      "Vegano"
    ],
    "ingredients": "Extracto de soja fermentada, alantoína y filtros solares orgánicos.",
    "benefits": "Protector solar ligero enriquecido con el extracto de soja fermentada característico de Mixsoon, protegiendo e hidratando sin apelmazar.",
    "use": "Aplica tras la crema hidratante por las mañanas."
  },
  {
    "id": 29,
    "brand": "MIXSOON",
    "title": "Kit Doble Limpieza (Aceite + Espuma)",
    "category": "Limpiadores",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Piel Seca",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Rutina Coreana Completa",
    "price": 48,
    "image": "./images/products/mixsoon-doble-limpieza-kit.webp",
    "gallery": [
      "./images/products/mixsoon-doble-limpieza-kit.webp"
    ],
    "attributes": [
      "Doble Limpieza",
      "Extracto puro",
      "Todo tipo de piel"
    ],
    "ingredients": "Aceite botánico de soja y espuma suave con aminoácidos.",
    "benefits": "El combo perfecto para el pilar sagrado del K-Beauty: aceite desmaquillante disuelve impurezas oleosas y la espuma retira restos acuosos.",
    "use": "Paso 1: Masajea el aceite en seco y enjuaga. Paso 2: Limpia con la espuma húmeda."
  },
  {
    "id": 30,
    "brand": "MIXSOON",
    "title": "Pure Glow Glass Skin Set",
    "category": "Dispositivos & Sets",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Set Piel de Porcelana",
    "price": 38.9,
    "image": "./images/products/mixsoon-pure-glow-set.webp",
    "gallery": [
      "./images/products/mixsoon-pure-glow-set.webp"
    ],
    "attributes": [
      "Esencia de Soya",
      "Glow natural",
      "Set de regalo"
    ],
    "ingredients": "Extracto de soja fermentada pura, centella asiática y galactomyces.",
    "benefits": "Set icónico para lograr el look piel de cristal coreano con esencias fermentadas nutritivas que aportan hidratación y tersura inmediata.",
    "use": "Aplica en capas ligeras sobre el rostro tras el tónico."
  },
  {
    "id": 31,
    "brand": "NUMBUZIN",
    "title": "No.1 PDRN Hydra Glow Toner",
    "category": "Tónicos & Esencias",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Hidratación profunda / PDRN",
    "price": 31.56,
    "image": "./images/products/numbuzin-no.1-pdrn-toner.jpg",
    "gallery": [
      "./images/products/numbuzin-no.1-pdrn-toner.jpg"
    ],
    "attributes": [
      "PDRN Vegetal",
      "Ácido Hialurónico",
      "Textura esencia"
    ],
    "ingredients": "PDRN de origen botánico, agua de glaciar y pantenol.",
    "benefits": "Tónico lechoso que infunde hidratación voluminizadora y restaura la flexibilidad de pieles apagadas o con sensación tirante.",
    "use": "Aplica con las manos directamente sobre el rostro y da suaves palmaditas."
  },
  {
    "id": 32,
    "brand": "NUMBUZIN",
    "title": "No.1 Retinal Youth Boosting Serum",
    "category": "Sérums",
    "skinTypes": [
      "Antimanchas",
      "Piel Seca"
    ],
    "compatibility": "Renovación antiedad",
    "price": 27.5,
    "image": "./images/products/numbuzin-no.1-retinal-serum.webp",
    "gallery": [
      "./images/products/numbuzin-no.1-retinal-serum.webp"
    ],
    "attributes": [
      "Retinal liposomado",
      "Rápida acción",
      "Tolerancia alta"
    ],
    "ingredients": "Retinal estabilizado en liposomas, niacinamida y centella asiática.",
    "benefits": "Sérum nocturno con retinal 11 veces más rápido que el retinol convencional, que estimula el colágeno y afina la superficie cutánea.",
    "use": "Usa de noche. Aplica 2 a 3 gotas sobre la piel limpia y seca."
  },
  {
    "id": 33,
    "brand": "NUMBUZIN",
    "title": "Patches Collagen Sun Shield (Caja)",
    "category": "Mascarillas",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Protección UV exterior",
    "price": 23.53,
    "image": "./images/products/numbuzin-patches-collagen-sun-caja-.webp",
    "gallery": [
      "./images/products/numbuzin-patches-collagen-sun-caja-.webp"
    ],
    "attributes": [
      "Bloqueo UV 99%",
      "Colágeno hidrolizado",
      "Adherencia fija"
    ],
    "ingredients": "Tela elástica transpirable con hidrogel de colágeno y glutatión.",
    "benefits": "Parches protectores para pómulos y mejillas que bloquean la radiación UV mientras aportan colágeno y frescura durante actividades al aire libre.",
    "use": "Pega en las mejillas debajo de los ojos antes de exponerte al sol."
  },
  {
    "id": 34,
    "brand": "NUMBUZIN",
    "title": "Patches Collagen Sun Shield (Individual)",
    "category": "Mascarillas",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Protección puntual",
    "price": 5,
    "image": "./images/products/numbuzin-patches-collagen-sun-individual.jpg",
    "gallery": [
      "./images/products/numbuzin-patches-collagen-sun-individual.jpg"
    ],
    "attributes": [
      "1 Par de parches",
      "Deportes y paseos",
      "Efecto frío"
    ],
    "ingredients": "Colágeno hidrolizado y filtros de tela anti-UV.",
    "benefits": "Par de parches solares individuales ideales para golf, pádel, playa o paseos al aire libre.",
    "use": "Usa durante salidas al sol prolongadas."
  },
  {
    "id": 35,
    "brand": "PURITO",
    "title": "Oat-In Calming Gel Cream",
    "category": "Hidratantes",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Calmante ultra ligero",
    "price": 29.53,
    "image": "./images/products/purito-oat-in-calming-gel.jpg",
    "gallery": [
      "./images/products/purito-oat-in-calming-gel.jpg"
    ],
    "attributes": [
      "Semilla de Avena 77%",
      "Textura Gel",
      "Sin aceites"
    ],
    "ingredients": "Agua de semilla de avena al 77%, pantenol y escualano.",
    "benefits": "Gel hidratante transparente que refresca al instante, desinflama rojeces y equilibra el sebo sin dejar residuo graso.",
    "use": "Aplica sobre rostro y cuello tras el suero día y noche."
  },
  {
    "id": 36,
    "brand": "PURITO",
    "title": "Wonder Re-Leaf Centella Serum (60ml)",
    "category": "Sérums",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Tendencia al Acné",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Centella calmante sin perfume",
    "price": 40.18,
    "image": "./images/products/purito-wonder-centella-serum-60ml-.jpg",
    "gallery": [
      "./images/products/purito-wonder-centella-serum-60ml-.jpg"
    ],
    "attributes": [
      "Centella coreana",
      "Hipoalergénico",
      "Sin perfume"
    ],
    "ingredients": "Extracto de centella asiática, péptidos y ácido hialurónico.",
    "benefits": "Sérum intensivo de centella que alivia la piel reactiva, reduce la sensación de picor o calor y regenera la barrera dañada.",
    "use": "Presiona 1 a 2 pumps sobre rostro y cuello dando toques suaves."
  },
  {
    "id": 37,
    "brand": "PURITO",
    "title": "Retinal TXA Niacinamide Treatment",
    "category": "Sérums",
    "skinTypes": [
      "Antimanchas",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Triple acción antimanchas",
    "price": 38.51,
    "image": "./images/products/purito-retinal-txa-niacinamide.webp",
    "gallery": [
      "./images/products/purito-retinal-txa-niacinamide.webp"
    ],
    "attributes": [
      "Retinal + TXA",
      "Niacinamida",
      "Fórmula equilibrada"
    ],
    "ingredients": "Retinal encapsulado, ácido tranexámico al 2% y niacinamida.",
    "benefits": "Tratamiento multifunción que acelera el recambio celular, desvanece manchas de sol y rojeces post-acné al mismo tiempo.",
    "use": "Usa por la noche de 2 a 3 veces por semana antes de la crema."
  },
  {
    "id": 38,
    "brand": "PURITO",
    "title": "Deep Sea Pure Water Sun Stick SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Piel Seca"
    ],
    "compatibility": "Protector solar en barra hidratante",
    "price": 33.39,
    "image": "./images/products/purito-sun-stick-barrier.jpg",
    "gallery": [
      "./images/products/purito-sun-stick-barrier.jpg"
    ],
    "attributes": [
      "Agua de mar profundo",
      "Práctico bolsillo",
      "Invisible"
    ],
    "ingredients": "Agua de mar profundo, ácido hialurónico y extracto de algas.",
    "benefits": "Barra solar refrescante que protege de los rayos UV sin sensación pegajosa, aportando minerales oceánicos hidratantes.",
    "use": "Pasa directamente por el rostro para proteger o retocar."
  },
  {
    "id": 39,
    "brand": "PURITO",
    "title": "Bamboo Charcoal Barrier Cream (100ml)",
    "category": "Hidratantes",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Reparación intensiva de barrera",
    "price": 40.18,
    "image": "./images/products/purito-bamboo-cream-100ml-.jpg",
    "gallery": [
      "./images/products/purito-bamboo-cream-100ml-.jpg"
    ],
    "attributes": [
      "Carbón de Bambú",
      "Ceramidas",
      "Nutritiva"
    ],
    "ingredients": "Extracto de bambú fermentado, ceramida NP y alantoína.",
    "benefits": "Crema densa reparadora que crea un escudo nutritivo contra el frío y la polución, evitando la pérdida transepidérmica de agua.",
    "use": "Aplica como paso final en la noche o en pieles muy secas en la mañana."
  },
  {
    "id": 40,
    "brand": "PURITO",
    "title": "No.1 Centella Recovery Serum",
    "category": "Sérums",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Piel Seca"
    ],
    "compatibility": "Recuperación de piel dañada",
    "price": 43.8,
    "image": "./images/products/purito-no.1-serum.webp",
    "gallery": [
      "./images/products/purito-no.1-serum.webp"
    ],
    "attributes": [
      "Centella asiática 49%",
      "Niacinamida",
      "Péptidos"
    ],
    "ingredients": "Centella asiática al 49%, niacinamida y pantenol.",
    "benefits": "Fórmula de alivio que apaga rojeces, suaviza el tacto áspero y fortalece las defensas naturales de la epidermis.",
    "use": "Aplica de 2 a 3 gotas sobre rostro y cuello."
  },
  {
    "id": 41,
    "brand": "ROUND LAB",
    "title": "Round Lab Birch Juice Moisturizing Sunscreen SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Top Ventas Corea / Hidratante",
    "price": 27.6,
    "image": "./images/products/raund-lab-round-lab-sunscreen.jpg",
    "gallery": [
      "./images/products/raund-lab-round-lab-sunscreen.jpg"
    ],
    "attributes": [
      "Savia de Abedul",
      "Ácido Hialurónico Vita",
      "Galardonado"
    ],
    "ingredients": "Savia de abedul de Inje, ácido hialurónico Vita y filtros UV químicos avanzados.",
    "benefits": "El protector solar #1 en Corea del Sur; hidrata como una loción fresca de rápida absorción sin dejar marcas blancas ni brillos.",
    "use": "Aplica generosamente en rostro y cuello cada mañana."
  },
  {
    "id": 42,
    "brand": "ROUND LAB",
    "title": "Round Lab Birch Juice Sun UV Cream SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Seca",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Protección UV Esencial",
    "price": 27.47,
    "image": "./images/products/raund-lab-round-lab-sun-uv.jpg",
    "gallery": [
      "./images/products/raund-lab-round-lab-sun-uv.jpg"
    ],
    "attributes": [
      "SPF 50+ PA++++",
      "Savia de Abedul",
      "Ligero"
    ],
    "ingredients": "Extracto de abedul purificado y filtros fotoestables.",
    "benefits": "Aporta hidratación profunda y frescura botánica mientras bloquea los rayos UV con textura sedosa.",
    "use": "Aplica al terminar tu rutina de día."
  },
  {
    "id": 43,
    "brand": "SKIN1004",
    "title": "Madagascar Centella Asiatica 100 Ampoule",
    "category": "Sérums",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "100% Centella Silvestre",
    "price": 36.9,
    "image": "./images/products/skin1004-madagascar-centella.jpg",
    "gallery": [
      "./images/products/skin1004-madagascar-centella.jpg"
    ],
    "attributes": [
      "Centella 100%",
      "Cero irritación",
      "Equilibrante"
    ],
    "ingredients": "100% Extracto de Centella Asiática cosechada en Madagascar.",
    "benefits": "Ampolla icónica con extracto puro de Madagascar que calma inflamaciones, reduce rojeces y devuelve la elasticidad a la piel.",
    "use": "Deposita 2 a 3 gotas en el rostro y masajea suavemente."
  },
  {
    "id": 44,
    "brand": "SKIN1004",
    "title": "Centella Poremizing Fresh Ampoule",
    "category": "Sérums",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Poros dilatados y exceso de sebo",
    "price": 32.95,
    "image": "./images/products/skin1004-ampoule-poremizing.jpg",
    "gallery": [
      "./images/products/skin1004-ampoule-poremizing.jpg"
    ],
    "attributes": [
      "Sal Rosa del Himalaya",
      "Péptidos tensores",
      "Control grasa"
    ],
    "ingredients": "Extracto de centella asiática, sal rosa del Himalaya y complejo de 9 péptidos.",
    "benefits": "Ampolla con sal rosa del Himalaya rica en 80 minerales que purifica los poros en profundidad y mejora la firmeza.",
    "use": "Aplica después del tónico enfocándote en nariz y mejillas."
  },
  {
    "id": 45,
    "brand": "SKIN1004",
    "title": "Centella Tone Brightening Capsule Ampoule",
    "category": "Sérums",
    "skinTypes": [
      "Antimanchas",
      "Piel Seca"
    ],
    "compatibility": "Cápsulas iluminadoras antimanchas",
    "price": 34.95,
    "image": "./images/products/skin1004-ampoule-tone-brightening.jpg",
    "gallery": [
      "./images/products/skin1004-ampoule-tone-brightening.jpg"
    ],
    "attributes": [
      "MadeWhite encapsulado",
      "Niacinamida 4%",
      "Tono radiante"
    ],
    "ingredients": "Centella asiática al 77%, MadeWhite encapsulado y niacinamida al 4%.",
    "benefits": "Cápsulas que se funden al contacto liberando agentes aclarantes naturales que difuminan manchas oscuras y pecas solares.",
    "use": "Aplica 2 a 3 gotas mañana y noche."
  },
  {
    "id": 46,
    "brand": "SKIN1004",
    "title": "Centella Hyalu-Cica Water-Fit Sun Serum SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Textura Suero Ultraligero",
    "price": 28.7,
    "image": "./images/products/skin1004-sun-serum-uv.jpg",
    "gallery": [
      "./images/products/skin1004-sun-serum-uv.jpg"
    ],
    "attributes": [
      "Hyalu-Cica",
      "Sin efecto blanco",
      "Acabado fresco"
    ],
    "ingredients": "Fórmula Hyalu-Cica patentada (ácido hialurónico + centella) y brotes de té verde.",
    "benefits": "La sensación de un sérum ligero con la más alta protección UV. Deja la piel descansada, fresca y perfectamente hidratada.",
    "use": "Aplica generosamente en rostro y cuello como último paso matutino."
  },
  {
    "id": 47,
    "brand": "SKIN1004",
    "title": "Probio-Cica Intensive Ampoule",
    "category": "Sérums",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Reparación intensiva de barrera",
    "price": 46.34,
    "image": "./images/products/skin1004-probio-cica-intensive.webp",
    "gallery": [
      "./images/products/skin1004-probio-cica-intensive.webp"
    ],
    "attributes": [
      "Centella Fermentada",
      "Ceramidas",
      "Nutrición intensa"
    ],
    "ingredients": "Centella asiática fermentada con lactobacilos, ceramida NP y fitoesteroles.",
    "benefits": "Ampolla lechosa densa que repara la barrera cutánea dañada por exfoliantes o agresiones ambientales mediante probióticos botánicos.",
    "use": "Aplica en la noche tras el tónico para despertar con la piel restaurada."
  },
  {
    "id": 48,
    "brand": "SKIN1004",
    "title": "Travel Kit Madagascar Centella (5 Pasos)",
    "category": "Dispositivos & Sets",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Piel Grasa/Mixta",
      "Piel Seca"
    ],
    "compatibility": "Kit Completo de Viaje",
    "price": 50.7,
    "image": "./images/products/skin1004-travel-kit-estandar.jpg",
    "gallery": [
      "./images/products/skin1004-travel-kit-estandar.jpg"
    ],
    "attributes": [
      "5 Miniaturas",
      "Rutina completa",
      "Aprobado para avión"
    ],
    "ingredients": "Línea completa Madagascar Centella pura.",
    "benefits": "Incluye aceite limpiador, espuma, tónico calmante, ampolla pura y crema hidratante en cómodos tamaños de viaje.",
    "use": "Sigue los pasos 1 al 5 en tu rutina diaria."
  },
  {
    "id": 49,
    "brand": "SKIN1004",
    "title": "Travel Kit Centella Poremizing (Específico)",
    "category": "Dispositivos & Sets",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Kit de Viaje Piel Grasa y Poros",
    "price": 40.23,
    "image": "./images/products/skin1004-travel-kit-poremizing.jpg",
    "gallery": [
      "./images/products/skin1004-travel-kit-poremizing.jpg"
    ],
    "attributes": [
      "Miniaturas Poros",
      "Sal del Himalaya",
      "Control sebo"
    ],
    "ingredients": "Línea completa Poremizing con sal rosa del Himalaya.",
    "benefits": "Kit de viaje especializado para piel grasa y poros dilatados que purifica y matifica sin resecar.",
    "use": "Ideal para llevar al gimnasio o de viaje."
  },
  {
    "id": 50,
    "brand": "TARTE",
    "title": "Tarte Cica-Tree Water Jelly",
    "category": "Hidratantes",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Gel acuoso anti-brillos",
    "price": 23.33,
    "image": "./images/products/tage-tarte-cica-tree-water-jelly.jpg",
    "gallery": [
      "./images/products/tage-tarte-cica-tree-water-jelly.jpg"
    ],
    "attributes": [
      "Árbol de Té",
      "Centella Asiatica",
      "Cero Grasa"
    ],
    "ingredients": "Extracto de árbol de té, centella asiática y agua de glaciar.",
    "benefits": "Gel acuoso que apaga la inflamación de granitos, calma rojeces y entrega hidratación fresca sin dejar sensación oleosa.",
    "use": "Aplica una pequeña cantidad tras el suero."
  },
  {
    "id": 51,
    "brand": "TOCOBO",
    "title": "Tocobo Cotton Soft Sun Stick SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Acabado Mate Aterciopelado",
    "price": 24.55,
    "image": "./images/products/tocobo-tocobo-cotton-sun-stick.jpg",
    "gallery": [
      "./images/products/tocobo-tocobo-cotton-sun-stick.jpg"
    ],
    "attributes": [
      "Micro polvo de algodón",
      "Efecto Primer",
      "Vegano"
    ],
    "ingredients": "Extracto de algodón, complejo AC Herb y micro polvos absorbentes de sebo.",
    "benefits": "Barra de protección solar que deja la piel completamente mate, sedosa y libre de brillos durante horas. Ideal para reaplicar sobre maquillaje.",
    "use": "Desliza la barra por todo el rostro cada 2 o 3 horas."
  },
  {
    "id": 52,
    "brand": "TOCOBO",
    "title": "Tocobo Bio Watery Sun Cream SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Seca",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Hidratación ligera y fresca",
    "price": 25.8,
    "image": "./images/products/tocobo-tocobo-bio-sun-watery.jpg",
    "gallery": [
      "./images/products/tocobo-tocobo-bio-sun-watery.jpg"
    ],
    "attributes": [
      "Extracto de Judía Mung",
      "Ácido Hialurónico",
      "Fresco"
    ],
    "ingredients": "Extracto de judía mung bio-fermentada, ácido hialurónico y bio-retinol.",
    "benefits": "Protector solar químico con textura fluida de loción acuosa que hidrata y calma sin dejar sensación pegajosa ni residuo blanco.",
    "use": "Aplica uniformemente por la mañana antes de salir."
  },
  {
    "id": 53,
    "brand": "VT COSMETICS",
    "title": "VT Reedle Shot 100 Micro-Spicule Essence",
    "category": "Sérums",
    "skinTypes": [
      "Antimanchas",
      "Piel Seca",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Microagujas botánicas / Renovación",
    "price": 45.39,
    "image": "./images/products/vt-reedle-vt-reedle-shot-pdrn.jpg",
    "gallery": [
      "./images/products/vt-reedle-vt-reedle-shot-pdrn.jpg"
    ],
    "attributes": [
      "Cica Reedle 100",
      "Microespículas",
      "Absorción profunda"
    ],
    "ingredients": "Microespículas minerales naturales con extracto de centella asiática purificada.",
    "benefits": "Tratamiento intensivo con microagujas minerales naturales purificadas con centella que abren microcanales para multiplicar la absorción dérmica.",
    "use": "Usa solo de noche sobre la piel limpia antes de tus sueros. Presiona suavemente."
  },
  {
    "id": 54,
    "brand": "VT COSMETICS",
    "title": "VT PDRN Cápsulas Rejuvenecedoras",
    "category": "Sérums",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Cápsulas de PDRN y Firmeza",
    "price": 40.53,
    "image": "./images/products/vt-reedle-vt-pdrn-capsulas.jpg",
    "gallery": [
      "./images/products/vt-reedle-vt-pdrn-capsulas.jpg"
    ],
    "attributes": [
      "PDRN Concentrado",
      "Cápsulas monodosis",
      "Firmeza"
    ],
    "ingredients": "PDRN concentrado, ceramidas y escualano vegetal.",
    "benefits": "Cápsulas individuales herméticas de PDRN puro que revitalizan y dan volumen a pieles cansadas o con pérdida de elasticidad.",
    "use": "Abre una cápsula de noche y distribuye el aceite ligero sobre el rostro."
  },
  {
    "id": 55,
    "brand": "COSRX",
    "title": "Master Patch Acne Pimple Clear (24 Parches)",
    "category": "Mascarillas",
    "skinTypes": [
      "Tendencia al Acné",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Tratamiento puntual de acné",
    "price": 6,
    "image": "./images/products/cosrx-cosrx-acne-pimple-patch.jpg",
    "gallery": [
      "./images/products/cosrx-cosrx-acne-pimple-patch.jpg"
    ],
    "attributes": [
      "Hidrocoloide médico",
      "Invisible",
      "Absorbe grasa"
    ],
    "ingredients": "Lámina hidrocoloide médica esterilizada.",
    "benefits": "Parches hidrocoloides que absorben las secreciones de los granitos activos durante la noche, acelerando su desaparición y evitando marcas.",
    "use": "Pega el parche adecuado sobre el granito limpio y seco antes de cualquier crema."
  },
  {
    "id": 56,
    "brand": "DR. MELAXIN",
    "title": "Dr. Melaxin BP Pore & Blemish Ampoule",
    "category": "Sérums",
    "skinTypes": [
      "Antimanchas",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Aclarante de manchas y poros",
    "price": 34.68,
    "image": "./images/products/dr-melaxin-dr.-melaxin-ampoule.jpg",
    "gallery": [
      "./images/products/dr-melaxin-dr.-melaxin-ampoule.jpg"
    ],
    "attributes": [
      "Bio-peeling",
      "Antimanchas",
      "Poros limpios"
    ],
    "ingredients": "Niacinamida al 5%, ácido tranexámico y complejo calmante vegetal.",
    "benefits": "Ampolla terapéutica formulada para aclarar manchas oscuras, corregir imperfecciones y refinar la superficie de los poros.",
    "use": "Aplica de 2 a 3 gotas en las áreas problemáticas mañana y noche."
  },
  {
    "id": 57,
    "brand": "ANUA",
    "title": "Heartleaf 77% Soothing Toner",
    "category": "Tónicos & Esencias",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Piel Sensible/Rojeces",
      "Tendencia al Acné"
    ],
    "compatibility": "Sensible / Grasa-mixta",
    "price": 41.18,
    "image": "https://images.unsplash.com/photo-1741896135518-ce303a539bc0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900",
    "gallery": [
      "https://images.unsplash.com/photo-1741896135518-ce303a539bc0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900"
    ],
    "attributes": [
      "Cruelty-Free",
      "Heartleaf 77%",
      "Calmante"
    ],
    "ingredients": "77% Extracto de Heartleaf (Houttuynia Cordata), pantenol, extracto de caña de azúcar y betaína.",
    "benefits": "Calma de inmediato la irritación y rojeces, equilibra el pH tras la limpieza y purifica los poros sin sensación pesada.",
    "use": "Después de la doble limpieza, aplica sobre las palmas o un pad. Presiona suavemente."
  },
  {
    "id": 58,
    "brand": "ANUA",
    "title": "Heartleaf Pore Control Cleansing Oil",
    "category": "Limpiadores",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Todo tipo / Grasa-Acné",
    "price": 39.7,
    "image": "https://images.unsplash.com/photo-1686831451910-be038fcaa48c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900",
    "gallery": [
      "https://images.unsplash.com/photo-1686831451910-be038fcaa48c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900"
    ],
    "attributes": [
      "No Comedogénico",
      "Doble Limpieza",
      "Control Sebo"
    ],
    "ingredients": "Extracto de Heartleaf, aceite de jojoba, aceite de oliva y semilla de uva.",
    "benefits": "Disuelve maquillaje waterproof, protector solar y sebo acumulado sin obstruir poros.",
    "use": "Masajea en seco durante 1 minuto, emulsiona con agua tibia y enjuaga."
  },
  {
    "id": 59,
    "brand": "BEAUTY OF JOSEON",
    "title": "Relief Sun: Rice + Probiotics (SPF 50+ PA++++)",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces",
      "Antimanchas"
    ],
    "compatibility": "Sensible / Todo tipo",
    "price": 31.76,
    "image": "https://images.unsplash.com/photo-1686831451354-64bafcb57d82?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900",
    "gallery": [
      "https://images.unsplash.com/photo-1686831451354-64bafcb57d82?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900"
    ],
    "attributes": [
      "Cruelty-Free",
      "Extracto Arroz 30%",
      "Acabado Dewy"
    ],
    "ingredients": "Extracto de arroz al 30%, extracto de granos fermentados (probióticos) y filtros químicos.",
    "benefits": "Máxima protección UV sin dejar residuo blanco, aporta hidratación ligera y acabado luminoso tipo cristal.",
    "use": "Aplica de manera uniforme como paso final matutino."
  },
  {
    "id": 60,
    "brand": "BEAUTY OF JOSEON",
    "title": "Matte Sun Stick: Mugwort + Camelia (SPF 50+)",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Grasa / Mixta",
    "price": 32.83,
    "image": "https://images.unsplash.com/photo-1686831451354-64bafcb57d82?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900",
    "gallery": [
      "https://images.unsplash.com/photo-1686831451354-64bafcb57d82?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900"
    ],
    "attributes": [
      "Acabado Mate",
      "Mugwort",
      "Reaplicable"
    ],
    "ingredients": "Extracto de artemisa (Mugwort), polvo de sílice para absorber sebo y té verde.",
    "benefits": "Protector en barra mate que controla brillos al instante sin mover el maquillaje.",
    "use": "Desliza sobre el rostro para retocar la protección."
  },
  {
    "id": 61,
    "brand": "BEAUTY OF JOSEON",
    "title": "Revive Eye Serum: Ginseng + Retinal",
    "category": "Ojos & Labios",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Antiedad / Contorno de Ojos",
    "price": 31,
    "image": "https://images.unsplash.com/photo-1741896135490-4062a3b21abf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900",
    "gallery": [
      "https://images.unsplash.com/photo-1741896135490-4062a3b21abf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900"
    ],
    "attributes": [
      "Retinal Liposomado 2%",
      "Ginseng 10%",
      "Firmeza"
    ],
    "ingredients": "Extracto de raíz de ginseng al 10%, retinal estabilizado al 2% y niacinamida.",
    "benefits": "Mejora la firmeza del contorno de ojos y reduce ojeras y arrugas de expresión.",
    "use": "Aplica 1 a 2 toques sobre el hueso orbital en la noche."
  },
  {
    "id": 62,
    "brand": "COSRX",
    "title": "Advanced Snail 96 Mucin Power Essence",
    "category": "Tónicos & Esencias",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces",
      "Antimanchas"
    ],
    "compatibility": "Seca / Con marcas",
    "price": 26,
    "image": "https://images.unsplash.com/photo-1709551264885-06719a695b4c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900",
    "gallery": [
      "https://images.unsplash.com/photo-1709551264885-06719a695b4c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900"
    ],
    "attributes": [
      "Mucina 96%",
      "Reparadora",
      "Sin perfume"
    ],
    "ingredients": "Filtrado de secreción de caracol al 96%, hialuronato de sodio y alantoína.",
    "benefits": "Repara la barrera cutánea, alivia rojeces, mejora textura y devuelve elasticidad.",
    "use": "Aplica 1 o 2 pumps sobre la piel limpia húmeda después del tónico."
  },
  {
    "id": 63,
    "brand": "BIODANCE",
    "title": "Bio-Collagen Real Deep Mask (Caja 4 Unidades)",
    "category": "Mascarillas",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Luminosidad / Efecto Vidrio",
    "price": 33.56,
    "image": "https://images.unsplash.com/photo-1709551264885-06719a695b4c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900",
    "gallery": [
      "https://images.unsplash.com/photo-1709551264885-06719a695b4c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900"
    ],
    "attributes": [
      "Hidrogel Puro",
      "Colágeno 243 Da",
      "Mascarilla nocturna"
    ],
    "ingredients": "Colágeno oligo-molecular (243 Da), ácido hialurónico y galactomyces.",
    "benefits": "Se vuelve transparente al absorberse. Rellena poros y deja efecto piel de porcelana.",
    "use": "Úsala de 3 a 4 horas o déjala actuar toda la noche."
  },
  {
    "id": 64,
    "brand": "BIODANCE",
    "title": "Bio-Collagen Real Deep Mask (Individual)",
    "category": "Mascarillas",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Efecto Express",
    "price": 9.12,
    "image": "https://images.unsplash.com/photo-1709551264885-06719a695b4c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900",
    "gallery": [
      "https://images.unsplash.com/photo-1709551264885-06719a695b4c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900"
    ],
    "attributes": [
      "Unitaria",
      "Colágeno 243 Da",
      "Efecto Glow"
    ],
    "ingredients": "Colágeno de bajo peso molecular y galactomyces.",
    "benefits": "Ideal para eventos especiales o probar la mascarilla viral de Biodance.",
    "use": "Usa de 3 a 4 horas como tratamiento intensivo."
  },
  {
    "id": 65,
    "brand": "ILLIYOON",
    "title": "Ceramide Ato Concentrate Cream (200ml)",
    "category": "Hidratantes",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Seca / Muy sensible",
    "price": 28,
    "image": "https://images.unsplash.com/photo-1741896136113-c33a4fded0b5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900",
    "gallery": [
      "https://images.unsplash.com/photo-1741896136113-c33a4fded0b5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900"
    ],
    "attributes": [
      "Ceramidas",
      "Sin perfume",
      "Barrera cutánea"
    ],
    "ingredients": "Ceramidas encapsuladas patentadas, ginseng y extracto de soja.",
    "benefits": "Sella la hidratación y fortalece la barrera con una textura nutritiva que no deja sensación pegajosa.",
    "use": "Aplica en rostro y cuello mañana y noche."
  }
];

export function generateWhatsAppLink(product?: Product, phoneNumber = '584140000000'): string {
  const text = product
    ? `Hola Akami, me interesa consultar/ordenar: *${product.title}* de *${product.brand}* (Ref: $${product.price.toFixed(2)} USD). ¿Tienen stock disponible y métodos de entrega?`
    : `Hola Akami, quisiera asesoría personalizada para armar mi rutina de cosmética coreana según las necesidades de mi piel.`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}
